export default async function handler(req, res) {
    try {
        // Ambil nama user aktif dari kiriman frontend web Anda
        const username = req.query.username || "MASTER ADMIN";
        
        // Ganti teks di bawah dengan tautan URL Web App Google Apps Script Anda yang baru saja didapat
        let response = await fetch(`https://script.google.com/macros/s/AKfycbxq4q3zqR09ePp_00SIb5cM9iJeC95NGVFL3u_c12g9nAQBuh-0DxZXc0Q7GW92gykz5Q/exec?req=get_saldo_awal&username=${encodeURIComponent(username)}`);
        let data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
