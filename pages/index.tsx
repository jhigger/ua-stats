import axios from 'axios';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Balances from '../components/Balances';
import Banana from '../components/Banana';
import { CardGridProps } from '../components/CardGrid';
import Collection from '../components/Collection';
import Header from '../components/Header';
import Launchpad from '../components/Launchpad';
import SocialStats from '../components/SocialStats';
import Tools from '../components/Tools';
import { HomeProps } from '../types';

const Home: NextPage<HomeProps> = (props) => {
	return (
		<>
			<Head>
				<title>Utility APE | Stats</title>
				<meta name="description" content="Utility APE Stats" />
				<link rel="icon" href="/assets/utilityape.png" />
			</Head>
			<div className="container mx-auto py-12 px-4 sm:px-4 max-w-4xl">
				<Header localeDate={props.localeDate} />
				<div className="flex flex-col gap-12">
					<SocialStats socialStats={props.socialStats} />
					<Collection collections={props.collections} />
					<Balances balances={props.balances} />
					<Banana bananaStats={props.bananaStats} />
					<Tools toolsStats={props.toolsStats} />
					<Launchpad launchpadStats={props.launchpadStats} />
				</div>
			</div>
		</>
	);
};

const nFormatter = (num: number, digits: number) => {
	const lookup = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'k' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'G' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'P' },
		{ value: 1e18, symbol: 'E' }
	];

	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	const item = lookup
		.slice()
		.reverse()
		.find((item) => {
			return num >= item.value;
		});
	return item
		? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
		: '0';
};

const getGen2Stats = async () =>
	await axios
		.get(
			'https://api-mainnet.magiceden.dev/v2/collections/utility_ape_gen_2/stats'
		)
		.then((response) => response.data)
		.catch((error) => {
			console.log('error', error);
			return '?';
		});

const getTwitterFollowerCount = async () =>
	await axios
		.get(
			'https://stats-mainnet.magiceden.io/social_metrics/collection/utility_ape_gen_2'
		)
		.then((response) => response.data)
		.then((result) => {
			return nFormatter(result.twitterFollowerCount, 2);
		})
		.catch((error) => {
			console.log('error', error);
			return '?';
		});

const getSalesAmountSOL = async () =>
	await axios
		.get(
			'https://api-mainnet.magiceden.dev/v2/collections/utility_ape_gen_2/activities?offset=0&limit=100&type=buyNow'
		)
		.then((response) => response.data)
		.then((result) => {
			return `${nFormatter(
				result.reduce((acc: number, item: { price: number }) => {
					return acc + item.price;
				}, 0),
				2
			)} SOL`;
		})
		.catch((error) => {
			console.log('error', error);
			return '?';
		});

const getTotalVolume = async () =>
	await axios
		.get(
			'https://api-mainnet.magiceden.dev/v2/collections/utility_ape_gen_2/stats'
		)
		.then((response) => response.data)
		.then((result) => {
			return `${nFormatter(result.volumeAll * 0.000000001, 2)} SOL`;
		})
		.catch((error) => {
			console.log('error', error);
			return '?';
		});

const getBananaBalance = async (account: string) =>
	await axios
		.get('https://public-api.solscan.io/account/tokens?account=' + account)
		.then((response) => response.data)
		.then((result: []) => {
			return result.filter(
				(obj: { tokenAddress: string }) =>
					obj.tokenAddress ===
					'BKuRYzc9CoJen8VeVsqEeQAHei4oHNXDyW4wb3ZbNP5z'
			)[0];
		})
		.then((obj: { tokenAmount: { uiAmount: string } }) =>
			nFormatter(Number(obj.tokenAmount.uiAmount), 2)
		)
		.catch((error) => {
			console.log('error', error);
			return '?';
		});

const getSolBalance = async (account: string) =>
	await axios
		.get('https://public-api.solscan.io/account/' + account)
		.then((response) => response.data)
		.then(
			(result: { lamports: number }) =>
				`${nFormatter(result.lamports * 0.000000001, 2)} SOL`
		)
		.catch((error) => {
			console.log('error', error);
			return '?';
		});

export const getStaticProps: GetStaticProps = async (ctx) => {
	const env = process.env.NODE_ENV;
	const localeDate = new Date().toLocaleString();

	// Manually Update These
	const totalInjected = 312;
	const totalSupply = 10_000_000;
	const currentSupply = 9_997_884.25;
	const aveMonthlyRevenue = 7_558;
	const projectsCurrentlySubbed = 77;

	const socialStats: CardGridProps[] = [
		{ title: 'Team', data: '9 APES' },
		{
			title: 'Twitter Followers',
			data: env === 'development' ? '?' : await getTwitterFollowerCount()
		},
		{ title: 'Discord Members', data: '12.5k' },
		{ title: 'Active Raiders', data: '500+' }
	];

	const stats: {
		floorPrice: number;
		listedCount: number;
		volumeAll: number;
		avgPrice24hr: number;
	} = await getGen2Stats();

	const collections: CardGridProps[] = [
		{
			title: 'Mint Date',
			data: 'Oct 15 2022'
		},
		{
			title: 'Floor Price',
			data:
				env === 'development'
					? '?'
					: `${nFormatter(stats.floorPrice * 0.000000001, 2)} SOL`
		},
		{
			title: 'Listed NFTs',
			data: env === 'development' ? '?' : nFormatter(stats.listedCount, 2)
		},
		{
			title: 'Total Volume',
			data:
				env === 'development'
					? '?'
					: `${nFormatter(stats.volumeAll * 0.000000001, 2)} SOL`
		},
		{
			title: 'Average Price (24 Hour)',
			data:
				env === 'development'
					? '?'
					: `${nFormatter(stats.avgPrice24hr * 0.000000001, 2)} SOL`
		},
		{
			title: 'Unique Owners',
			data: '163'
		}
	];

	const balances: CardGridProps[] = [
		{
			title: 'Estimated SOL injected into $BANANA',
			data: `${nFormatter(totalInjected, 2)} SOL`
		},
		{
			title: 'SOL to be injected into $BANANA',
			data:
				env === 'development'
					? '?'
					: await getSolBalance(
							'GLVMVR4oM4CQU8BR7oK7KNXrxReZNeSqYAEP7V1aJYqk'
					  )
		},
		{ title: 'Next Injection Date', data: '?' }
	];

	const bananaStats: CardGridProps[] = [
		{ title: 'Total Supply', data: nFormatter(totalSupply, 2) },
		{ title: 'Circulating Supply', data: nFormatter(currentSupply, 3) },
		{
			title: 'Burnt Supply',
			data: nFormatter(totalSupply - currentSupply, 2)
		},
		{
			title: 'Not In Circulation',
			data:
				env === 'development'
					? '?'
					: await getBananaBalance(
							'9dEZkzxczZEQfWQz2z7U4TTSQbavPQGR7iSAXjCXJyPq'
					  )
		}
	];

	const toolsStats: CardGridProps[] = [
		{ title: 'Projects Onboarded', data: '177' },
		{
			title: 'Projects Currently Subscribed',
			data: projectsCurrentlySubbed
		},
		{
			title: "Last Month's Earning",
			data: `$${nFormatter(aveMonthlyRevenue, 2)}`
		}
	];

	const launchpadStats: CardGridProps[] = [
		{
			title: 'Qtopia',
			project: {
				image: '/assets/launchpad/logo.png',
				link: 'https://www.qtopia.io/'
			}
		}
	];

	return {
		props: {
			localeDate,
			socialStats,
			collections,
			balances,
			bananaStats,
			toolsStats,
			launchpadStats
		},
		revalidate: 21600 // every 6 hours?
	};
};

export default Home;
