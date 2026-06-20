export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Metode tidak diizinkan' });
    try {
        // Ganti URL di bawah dengan URL Web App Google Sheets Anda nanti
        await fetch('https://script.google.com/macros/s/AKfycbwTrHgNpyTeVu_DgvlAw4LOPgA4xp4_SkEmkS9b71-LJyG52kc1Sumed4euJ4B1AKPZOQ/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
