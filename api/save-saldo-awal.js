import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Metode tidak diizinkan' });
    try {
        const { saldo_idr, saldo_usd } = req.body;
        await kv.set('global_saldo_idr', saldo_idr || 0);
        await kv.set('global_saldo_usd', saldo_usd || 0);
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
