export default async function handler(req, res) {
    try {
        const { saldo_idr, saldo_usd } = req.body;
        const username = req.body.username || "MASTER ADMIN";
        
        // Ganti teks di bawah dengan tautan URL Web App Google Apps Script Anda yang baru saja didapat
        await fetch('https://script.google.com/macros/s/AKfycbxq4q3zqR09ePp_00SIb5cM9iJeC95NGVFL3u_c12g9nAQBuh-0DxZXc0Q7GW92gykz5Q/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: "save_saldo_awal",
                username: username,
                saldo_idr: saldo_idr,
                saldo_usd: saldo_usd
            })
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
