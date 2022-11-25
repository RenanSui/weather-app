import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { place } = req.query;
    const API_SECRET = process.env.API_SECRET;
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_SECRET}&q=${place}&aqi=no`;

    try {
        const { data } = await axios.get(url);
        res.status(200).json({
            data: data,
        });
    } catch (err: any) {
        res.status(400).json({
            error: err.message,
        });
    }
}