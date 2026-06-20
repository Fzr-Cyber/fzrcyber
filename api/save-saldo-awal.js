export default async function handler(req, res) {
    // Mengizinkan akses masuk dari perangkat apa pun
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { username, saldo_idr, saldo_usd } = req.body;
        
        // PENTING: PAKAI LINK GOOGLE APPS SCRIPT ANDA YANG DIAWALI https://google.com...
        const linkGoogleScript = "https://script.google.com/macros/s/AKfycbxq4q3zqR09ePp_00SIb5cM9iJeC95NGVFL3u_c12g9nAQBuh-0DxZXc0Q7GW92gykz5Q/exec";

        let response = await fetch(linkGoogleScript, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: "save_saldo_awal",
                username: username || "fajar",
                saldo_idr: parseFloat(saldo_idr) || 0,
                saldo_usd: parseFloat(saldo_usd) || 0
            })
        });

        const resultText = await response.text();
        return res.status(200).json({ success: true, serverResponse: resultText });
    } catch (error) {
        return res.status(500).json({ error: "Gagal menyambung ke Google: " + error.message });
    }
}
