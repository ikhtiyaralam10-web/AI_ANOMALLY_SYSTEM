import os
import json
import urllib.request

# Maps from ID -> Name -> downloadUrl
assets = [
    {
        "id": "36c2a1498b7542f391122a5a6c77961b",
        "name": "ARES-1 Landing Page - Centered Footer Alignment",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzQxYjlhZmY5ZDA0ZjQ2NjY4MTcyOTA5YjMxYTQ5OTIyEgsSBxCxudrf8B4YAZIBIwoKcHJvamVjdF9pZBIVQhMzMzkxNjIyMzQwODM0NjkyMTIw&filename=&opi=89354086",
        "img_url": "https://lh3.googleusercontent.com/aida/ADBb0uiYQQ03wGQb16htQq6j1hN39dw1DME0jBFdCrkApoLibyvo1bICGCvtMilYFrhkbiv8BEruY-nPF9Rci8T5sIa15kKqVpGZIECiAgQdg5kxnFyanGcSRCodd2gcQU8vUKiNt3zvp7xKU3By94aO2ALuX9jeQyWh4mZG7Yvmb0z1WstzaXm80z6pBsytsKKlCDgMceKd6ygp0t0YhI36xzv8jiRSw227sbYuc8Itbm6v2yCJvU_Le8AjAJg"
    },
    {
        "id": "1c9666b6cb934efa807b34198a4a2ab9",
        "name": "ARES-1 Landing Page - Light Mode",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MWM4OGU1Yzc3OTMwMmE5YjY4M2Y1MDc2OTVhEgsSBxCxudrf8B4YAZIBIwoKcHJvamVjdF9pZBIVQhMzMzkxNjIyMzQwODM0NjkyMTIw&filename=&opi=89354086",
        "img_url": "https://lh3.googleusercontent.com/aida/ADBb0uhU_F5uSkw2ACcZJ0wwgvQYXw4sCbHqNA67ZVlk8p9aqPVG7kAuXu4LzaiP_xUgHnqe6b5QwTB43GBcNv0QrLUSlDQXCiARPGTVb1oboE4P-UDCETDhZlgmFBfo0ZqV94RU-y1hsupTi4vXSszCqF-lMHLWKX0gXVaBL66GZR_WcDt3xQUpcCMX3bKT4mWETUuNzAzEKapYZtb9YE6QPSNKgleyYhcn770IhgzVEo87egb11nm2e44zEmU"
    },
    {
        "id": "80ca8b1f8abc43b99fccfdfa4739dd79",
        "name": "Diagnostics Console - Full Width Layout",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzk2YjIzODkwYmZmNzRmMTE5NzYzZWVkOTU5YjEyNWExEgsSBxCxudrf8B4YAZIBIwoKcHJvamVjdF9pZBIVQhMzMzkxNjIyMzQwODM0NjkyMTIw&filename=&opi=89354086",
        "img_url": "https://lh3.googleusercontent.com/aida/ADBb0uiPgrOM8fTO1TUGmHYfw-2UinNatTIf0NEGT-VeqSwGYpRpkCp6eKf9NF4rva1Izeon6hlEWY_eDmZxWm1XE_wf-VIateqZ8tdmyFuiRKzZjaP_COp5cizJv99HFcEAZPLXLnBou1mx2d1reBx6F63w20vHOPbDr-B8FQloKOivG5XxYvJ3PKGeg2cGc63M2iysgWSjCfcznMIQPvGa3UxIoZjyp4mCIQalT3NGxSfCoWn8v58pGAh44gI"
    },
    {
        "id": "b9ac4ebff1354b01902dfa31ab14520b",
        "name": "Mission Control Dashboard - Light Mode",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MWRiNDllNzQxMDQwMDMwM2VkNmM5MzZkNzFiEgsSBxCxudrf8B4YAZIBIwoKcHJvamVjdF9pZBIVQhMzMzkxNjIyMzQwODM0NjkyMTIw&filename=&opi=89354086",
        "img_url": "https://lh3.googleusercontent.com/aida/ADBb0ujEhCcjEbw-MuiggnRn_3z-pefwHL4QOgnYrnro2M_sfPSfaWVTdKs4Nd9B-5Qa4PUo0vq3YmlvbFbQWaSBuePDWtsGS28UoNNT8kRvmDORXG64Kwc_ouxWXYV95ScCIh5wiSPUifdqj0jIEfC9k3sqq3bJ1kBApB8v2_wqNCkgtIMRMHWNFbx3dhouuSIB4Wf6PoPrvGmZEHGjtIiVPjbGh9nEBHzpHS6EwE6iEpphWkz4Haj2sNQwzQo"
    },
    {
        "id": "17167517808670960220",
        "name": "Mission Control Dashboard",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MWRiNGU4YmQ5NzMwMjJkN2RkNzJhMGIxZDNlEgsSBxCxudrf8B4YAZIBIwoKcHJvamVjdF9pZBIVQhMzMzkxNjIyMzQwODM0NjkyMTIw&filename=&opi=89354086",
        "img_url": "https://lh3.googleusercontent.com/aida/ADBb0ujLcjq-KRCPlh6A-6R8-XCEzmynUoKKQD2wBHpL2JP8_3mEE6CMK53OoTnFZyLlRtKLefJ-I4S13Kwgr4y_srAI0UtaXwq-M14SQVXhNOHb8svKdCS_OFmEI4qGIuuyJqKCTA6-UAiDmL9C7tI5wFpfUBsFrnFt5bOOSpC9z2actyj6DULxUdi7BTnuBUOwMl_B86CWxqtoV3lkDV6a670t3o1_yWjXy-vXM_6CPNnTautGLGcUd8i3TdY"
    },
    {
        "id": "0eb94db0975d4b72b1090c2a5fe1b58c",
        "name": "Diagnostics Console - Light Mode Full Width",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzc5NTdiOTNkZmQxMDQxYjdiNDNhZGFhM2UwNDc0OGE0EgsSBxCxudrf8B4YAZIBIwoKcHJvamVjdF9pZBIVQhMzMzkxNjIyMzQwODM0NjkyMTIw&filename=&opi=89354086",
        "img_url": "https://lh3.googleusercontent.com/aida/ADBb0uj56iuRhhVHR_o9TFZaW3ERgAyQQ_xSJ7JFh7w99FFiJnMaAhMQ8GH0SrGE_Vhll8yyrBvrBmJaX3cdfBWjcVffI9O-pHRjFTqPnzDvXBus7ivXSxISjttgG6k_ZFjMKr00qJcoD-GQ48lthz4-TSofpnbwIIncGFBrTlktt0sVxKHwoB1WnqUNlEteay9GUwNF1hAuD8MOXWdBsxUnJQ8kyol9SZG2-hUydlxLw3Muv4Klsof0gFm-vgc"
    },
    {
        "id": "7165d3efe5374fa3ab78e3abbb9d3000",
        "name": "Live Telemetry - ARES-1 Dashboard",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MWRhMmM4NzVjMzcwMzMyZjhjNmMxMzk5MWQ4EgsSBxCxudrf8B4YAZIBIwoKcHJvamVjdF9pZBIVQhMzMzkxNjIyMzQwODM0NjkyMTIw&filename=&opi=89354086",
        "img_url": "https://lh3.googleusercontent.com/aida/ADBb0ugMC9df-_Ot6Eb4BsojGnqFl9JDkHqYtpnpamxxUD2X9LDFAJBPm4p2P9vyTu9D94d0616qVr7VrPR8eEaz5beRY8Z-Kg2L1P4bLGH0-IIuX8QerQLYaEed7UtYeEjV8YeB3iSxEOiI80N5k3VwXn2Tde0sqh5rDKH9Ar_ZaPhE_OtfabOcFPBIp7NbFdMagGjS0dJ0rBGqM6tnUhwI4xUACRHcAxtQZ6SUkHjiQSO5xeQyvJAurj3PlNw"
    },
    {
        "id": "832fc4cc990a4890994c202c17bb8361",
        "name": "Simulation Lab - Synchronized Navigation",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MWRiNzY5YzE1ZmEwMzMyZjhjNmMxMzk5MWQ4EgsSBxCxudrf8B4YAZIBIwoKcHJvamVjdF9pZBIVQhMzMzkxNjIyMzQwODM0NjkyMTIw&filename=&opi=89354086",
        "img_url": "https://lh3.googleusercontent.com/aida/ADBb0uiHstVsV-E63eNzz3SoGSc4wf98FDQPKAJapB_Dx8C1qyr3V4ynxieHSZlbqOXnfXiJukVPYM1Nj2jMLE0HgHKPP-C31ZTuuJ5dv4KloaYRZxFM3MV9tX5jXYiIXHUNBszixmDyrlQuBTOqIswuKILuihKDbUZYq8yyEXHQLglyh--x2B5Qxzd14102ZfK_8BdZNsm0bVRTkBP6QtGG-EbDc9G6vGhn6ww2DLdJtvCNzAb4q7qatVssg28"
    },
    {
        "id": "d9dab79a62d446b0a4d7543f981ebb80",
        "name": "Live Telemetry - Light Mode Refined",
        "html_url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MWRiNzNlZTU5YmMwNjM5NGZkZGVhMmM2MjY0EgsSBxCxudrf8B4YAZIBIwoKcHJvamVjdF9pZBIVQhMzMzkxNjIyMzQwODM0NjkyMTIw&filename=&opi=89354086",
        "img_url": "https://lh3.googleusercontent.com/aida/ADBb0uhulttEJysEIbugIwrgoWVI4CKPR6_3A7bHS3M_elj3FtFTY3ojupJg0DEpAGiDL34kK-maohTu2ClxnppMNfKzKSD9RyQbUtwoUjOxsaihwcIoOfLK8sIG_4TK5B0H0GstLyFgAgUQ83C0fB20H9InK-gDh9YIPLT4I6LfNhv9TVFj4VB00p33EUW03wYS-yzLeap-RYn-Fv4bmrJZf_noF6XRHnKO6eg-uieV-efTchA1VCeFwWcAGZU"
    }
]

html_dir = r"c:\ALL CODE\Ai_ANOMALY_DETECTION\frontend\stitch_raw_html"
img_dir = r"c:\ALL CODE\Ai_ANOMALY_DETECTION\frontend\public\assets"

os.makedirs(html_dir, exist_ok=True)
os.makedirs(img_dir, exist_ok=True)

for asset in assets:
    print(f"Downloading {asset['name']}...")
    
    # Download HTML
    html_path = os.path.join(html_dir, f"{asset['id']}.html")
    urllib.request.urlretrieve(asset['html_url'], html_path)
    
    # Download Image
    img_path = os.path.join(img_dir, f"{asset['id']}.jpg")
    urllib.request.urlretrieve(asset['img_url'], img_path)

print("Downloads complete.")
