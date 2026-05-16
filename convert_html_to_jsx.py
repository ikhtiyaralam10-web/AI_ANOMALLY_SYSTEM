import os
import re

html_dir = r"c:\ALL CODE\Ai_ANOMALY_DETECTION\frontend\stitch_raw_html"
output_dir = r"c:\ALL CODE\Ai_ANOMALY_DETECTION\frontend\src\stitch_components"

os.makedirs(output_dir, exist_ok=True)

# Map from ID to React Component Name
components = {
    "36c2a1498b7542f391122a5a6c77961b": "AresLandingDark",
    "1c9666b6cb934efa807b34198a4a2ab9": "AresLandingLight",
    "80ca8b1f8abc43b99fccfdfa4739dd79": "DiagnosticsDark",
    "b9ac4ebff1354b01902dfa31ab14520b": "DashboardLight",
    "17167517808670960220": "DashboardDark",
    "0eb94db0975d4b72b1090c2a5fe1b58c": "DiagnosticsLight",
    "7165d3efe5374fa3ab78e3abbb9d3000": "TelemetryDark",
    "832fc4cc990a4890994c202c17bb8361": "SimulationDark",
    "d9dab79a62d446b0a4d7543f981ebb80": "TelemetryLight"
}

def html_to_jsx(html):
    # Basic replacements
    jsx = html.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('tabindex=', 'tabIndex=')
    jsx = jsx.replace('stroke-width=', 'strokeWidth=')
    jsx = jsx.replace('stroke-linecap=', 'strokeLinecap=')
    jsx = jsx.replace('stroke-linejoin=', 'strokeLinejoin=')
    jsx = jsx.replace('fill-rule=', 'fillRule=')
    jsx = jsx.replace('clip-rule=', 'clipRule=')
    
    # Self close tags
    tags_to_close = ['img', 'input', 'br', 'hr', 'path', 'circle', 'rect', 'line', 'polygon', 'polyline', 'source']
    for tag in tags_to_close:
        # regex to find unclosed tags and close them
        jsx = re.sub(f'<{tag}([^>]*?)(?<!/)>', f'<{tag}\\1 />', jsx, flags=re.IGNORECASE)
    
    # Remove HTML comments
    jsx = re.sub(r'<!--(.*?)-->', '', jsx, flags=re.DOTALL)
    
    # Simple style attribute fix
    jsx = re.sub(r'style=(["\'])(.*?)\1', '', jsx)

    # Fix JSON braces inside <code> tags so JSX doesn't interpret them
    def fix_json_braces(match):
        code_tag = match.group(1)
        content = match.group(2)
        content = content.replace('{', '##LBRACE##').replace('}', '##RBRACE##')
        content = content.replace('##LBRACE##', '{"{"}').replace('##RBRACE##', '{"}"}')
        return '<code' + code_tag + '>' + content + '</code>'
    jsx = re.sub(r'<code([^>]*)>(.*?)</code>', fix_json_braces, jsx, flags=re.DOTALL | re.IGNORECASE)

    # Convert script tags to dangerouslySetInnerHTML, escaping backticks and ${
    def fix_script(match):
        content = match.group(1)
        content = content.replace('`', r'\`').replace('${', r'\${')
        return '<script dangerouslySetInnerHTML={{ __html: `' + content + '` }} />'
    jsx = re.sub(r'<script>(.*?)</script>', fix_script, jsx, flags=re.DOTALL | re.IGNORECASE)

    # Fix the double closing tags caused by self-closing regex
    jsx = re.sub(r'/>\s*</(rect|line|path|circle|polygon|polyline|source|img|input|br|hr)>', '/>', jsx, flags=re.IGNORECASE)
    # Fix the linearGradient self-closing issue
    jsx = re.sub(r'<linearGradient([^>]*?)\s*/>', r'<linearGradient\1>', jsx, flags=re.IGNORECASE)

    # Suppress hydration warning on canvas elements modified by immediate scripts
    jsx = re.sub(r'<canvas\b([^>]*)>', r'<canvas suppressHydrationWarning\1>', jsx, flags=re.IGNORECASE)
    
    return jsx

for file_id, comp_name in components.items():
    html_file = os.path.join(html_dir, f"{file_id}.html")
    if not os.path.exists(html_file):
        print(f"Skipping {html_file}, not found.")
        continue

    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL | re.IGNORECASE)
    if not body_match:
        print(f"Could not find body tag in {html_file}")
        continue
    
    body_content = body_match.group(1)

    print(f"Converting {comp_name} to JSX...")
    jsx_content = html_to_jsx(body_content)

    # Create TSX file
    tsx_code = f'''"use client";
import React, {{ useEffect, useRef }} from "react";
import {{ useAppContext }} from "@/components/AppContext";

export default function {comp_name}() {{
  const {{ isAbnormal, setIsAbnormal, theme, setTheme }} = useAppContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {{
    if (!containerRef.current) return;
    
    // Find Theme Toggle
    const themeBtn = Array.from(containerRef.current.querySelectorAll('button')).find(b => b.textContent?.includes('mode') || b.textContent?.includes('Mode'));
    if (themeBtn) {{
        themeBtn.onclick = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    }}

    // Find ABNORMAL button and attach onClick
    const buttons = containerRef.current.querySelectorAll('button');
    buttons.forEach(btn => {{
      if (btn.textContent?.includes('ABNORMAL') || btn.textContent?.includes('TRIGGER')) {{
        btn.onclick = () => setIsAbnormal(!isAbnormal);
        // Modify button style if NORMAL
        if (!isAbnormal) {{
           btn.className = btn.className.replace('bg-error/20', 'bg-surface-bright').replace('text-error', 'text-on-surface').replace('border-error/50', 'border-outline-variant');
           btn.innerHTML = btn.innerHTML.replace('ABNORMAL', 'NORMAL').replace('RESTORE', 'TRIGGER');
        }} else {{
           btn.className = btn.className.replace('bg-surface-bright', 'bg-error/20').replace('text-on-surface', 'text-error').replace('border-outline-variant', 'border-error/50');
           btn.innerHTML = btn.innerHTML.replace('NORMAL', 'ABNORMAL').replace('TRIGGER', 'RESTORE');
        }}
      }}
    }});

    // Toggle CRIT / WARN badges
    const crits = containerRef.current.querySelectorAll('.bg-error-container\\\\/30, .bg-primary-container\\\\/10');
    crits.forEach(el => {{
      if (!isAbnormal) {{
        el.className = el.className.replace('bg-error-container/30', 'bg-primary-container/10').replace('text-error', 'text-primary-container').replace('border-error/50', 'border-primary-container/20');
        if (el.textContent === 'CRIT') el.textContent = 'NORMAL';
      }} else {{
        el.className = el.className.replace('bg-primary-container/10', 'bg-error-container/30').replace('text-primary-container', 'text-error').replace('border-primary-container/20', 'border-error/50');
        if (el.textContent === 'NORMAL') el.textContent = 'CRIT';
      }}
    }});

    const warns = containerRef.current.querySelectorAll('.bg-secondary-container\\\\/30, .bg-primary-container\\\\/10');
    warns.forEach(el => {{
      if (el.textContent === 'WARN' || (el.getAttribute('data-orig') === 'WARN')) {{
          el.setAttribute('data-orig', 'WARN');
          if (!isAbnormal) {{
            el.className = el.className.replace('bg-secondary-container/30', 'bg-primary-container/10').replace('text-secondary', 'text-primary-container').replace('border-secondary/50', 'border-primary-container/20');
            el.textContent = 'NORMAL';
          }} else {{
            el.className = el.className.replace('bg-primary-container/10', 'bg-secondary-container/30').replace('text-primary-container', 'text-secondary').replace('border-primary-container/20', 'border-secondary/50');
            el.textContent = 'WARN';
          }}
      }}
    }});
      
    // Remove pulsing glows
    const glows = containerRef.current.querySelectorAll('.animate-pulse');
    glows.forEach(el => {{
      if (!el.className.includes('w-2 h-2')) {{ // Keep the system online indicator
         if (!isAbnormal) {{
            el.classList.add('opacity-0');
         }} else {{
            el.classList.remove('opacity-0');
         }}
      }}
    }});

    // Fix Sidebar Routing
    const links = containerRef.current.querySelectorAll('a');
    links.forEach(a => {{
      const text = a.textContent?.toLowerCase() || '';
      if (text.includes('overview') || text.includes('dashboard')) a.href = '/dashboard';
      else if (text.includes('telemetry')) a.href = '/telemetry';
      else if (text.includes('diagnostics')) a.href = '/diagnostics';
      else if (text.includes('simulation')) a.href = '/simulation';
      else if (text.includes('launch') || text.includes('enter') || text.includes('get started')) a.href = '/dashboard';
    }});

  }}, [isAbnormal, setIsAbnormal, theme, setTheme]);

  return (
    <div ref={{containerRef}} className="w-full h-full">
      {jsx_content}
    </div>
  );
}}
'''
    
    tsx_file = os.path.join(output_dir, f"{comp_name}.tsx")
    with open(tsx_file, 'w', encoding='utf-8') as f:
        f.write(tsx_code)

print("Conversion complete.")
