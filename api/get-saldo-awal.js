import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Metode tidak diizinkan' });
    try {
        const saldo_idr = await kv.get('global_saldo_idr') || 0;
        const saldo_usd = await kv.get('global_saldo_usd') || 0;
        return res.status(200).json({ saldo_idr, saldo_usd });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
