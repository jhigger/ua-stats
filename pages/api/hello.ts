// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data = await fetch(
		'https://public-api.solscan.io/account/GLVMVR4oM4CQU8BR7oK7KNXrxReZNeSqYAEP7V1aJYqk',
		{
			method: 'GET',
			headers: {
				Accept: '*/*',
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
				// 'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				'Accept-Encoding': 'gzip, deflate, br',
				'Accept-Language': 'en-US,en;q=0.9,fil;q=0.8',
				'Cache-Control': 'no-cache',
			}
		}
	);

	res.status(200).json(data);
}
