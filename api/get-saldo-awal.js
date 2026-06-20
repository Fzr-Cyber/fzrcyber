export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const username = req.query.username || "fajar";
        
        // PENTING: PAKAI LINK GOOGLE APPS SCRIPT ANDA YANG DIAWALI https://google.com...
        const linkGoogleScript = "https://script.google.com/macros/s/AKfycbxq4q3zqR09ePp_00SIb5cM9iJeC95NGVFL3u_c12g9nAQBuh-0DxZXc0Q7GW92gykz5Q/exec";

        let response = await fetch(`${linkGoogleScript}?req=get_saldo_awal&username=${encodeURIComponent(username)}`);
        let data = await response.json();
        
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Gagal menarik dari Google: " + error.message, saldo_idr: 0, saldo_usd: 0 });
    }
}
