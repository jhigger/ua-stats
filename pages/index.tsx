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

const getListedNFTCount = () =>
	fetch(
		'https://api-mainnet.magiceden.dev/v2/collections/utility_ape_gen_2/stats'
	)
		.then((response) => response.json())
		.then((result) => {
			return nFormatter(result.listedCount, 2);
		})
		.catch((error) => {
			console.log('error', error);
			return '?';
		});

const getTwitterFollowerCount = async () => {
	try {
		const response = await fetch(
			'https://stats-mainnet.magiceden.io/social_metrics/collection/utility_ape_gen_2'
		);
		const result_1 = await response.json();
		return nFormatter(result_1.twitterFollowerCount, 2);
	} catch (error) {
		console.log('error', error);
		return '?';
	}
};

const getSalesAmountSOL = async () =>
	await fetch(
		'https://api-mainnet.magiceden.dev/v2/collections/utility_ape_gen_2/activities?offset=0&type=buyNow'
	)
		.then((response) => response.json())
		.then((result) => {
			return nFormatter(
				result.reduce((acc: number, item: { price: number }) => {
					return acc + item.price;
				}, 0),
				2
			);
		})
		.catch((error) => {
			console.log('error', error);
			return '?';
		});

export const getStaticProps: GetStaticProps = async (ctx) => {
	const env = process.env.NODE_ENV;
	const localeDate = new Date().toLocaleString();

	const socialStats: CardGridProps[] = [
		{ title: 'Team', data: '9 APES' },
		{
			title: 'Twitter Followers',
			data: env === 'development' ? '?' : await getTwitterFollowerCount()
		},
		{ title: 'Discord Members', data: '12.5k' },
		{ title: 'Active Raiders', data: '500+' }
	];

	const collections: CardGridProps[] = [
		{
			title: 'Listed NFTs',
			data: env === 'development' ? '?' : await getListedNFTCount()
		},
		{
			title: 'Unique Owners',
			data: '163'
		},
		{
			title: 'Sales Amount SOL',
			data: env === 'development' ? '?' : await getSalesAmountSOL()
		}
	];

	const balances: CardGridProps[] = [
		{
			title: 'Total SOL injected into $BANANA',
			data: `${nFormatter(100)} SOL`
		},
		{ title: 'SOL to be injected into $BANANA', data: '?' },
		{ title: 'Next Injection Date', data: '?' }
	];

	const currentSupply = 9_997_884.25;

	const bananaStats: CardGridProps[] = [
		{ title: 'Total Supply', data: '10M' },
		{ title: 'Claimed Supply', data: '?' },
		{ title: 'Circulating Supply', data: nFormatter(currentSupply, 3) },
		{
			title: 'Burnt Supply',
			data: nFormatter(10_000_000 - currentSupply, 2)
		}
	];

	const toolsStats: CardGridProps[] = [
		{ title: 'Projects Onboarded', data: '177' },
		{ title: 'Projects Currently Subscribed', data: '59' },
		{ title: 'Average Monthly Revenue', data: `${nFormatter(7_558, 2)}` }
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
