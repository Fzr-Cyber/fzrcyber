export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Metode tidak diizinkan' });
    try {
        // Ganti URL di bawah dengan URL Web App Google Sheets Anda nanti
        let response = await fetch('URL_WEB_APP_GOOGLE_SHEETS_ANDA');
        let data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
