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
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container mx-auto py-12 px-4 sm:px-0 max-w-4xl">
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

const kFormatter = (num: number) => {
	return Math.abs(num) > 999
		? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + 'k'
		: Math.sign(num) * Math.abs(num);
};

const getListedNFTCount = () =>
	fetch(
		'https://api-mainnet.magiceden.dev/v2/collections/utility_ape_gen_2/stats'
	)
		.then((response) => response.json())
		.then((result) => {
			return kFormatter(result.listedCount);
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
		return kFormatter(result_1.twitterFollowerCount);
	} catch (error) {
		console.log('error', error);
		return '?';
	}
};

const getSalesAmountSOL = () =>
	fetch(
		'https://api-mainnet.magiceden.dev/v2/collections/utility_ape_gen_2/activities?offset=0&type=buyNow'
	)
		.then((response) => response.json())
		.then((result) => {
			return result.reduce((acc: number, item: { price: number }) => {
				return acc + item.price;
			}, 0);
		})
		.catch((error) => console.log('error', error));

export const getStaticProps: GetStaticProps = async (ctx) => {
	const env = process.env.NODE_ENV;
	console.log(env);
	const localeDate = new Date().toLocaleString();

	const socialStats: CardGridProps[] = [
		{ title: 'Team', data: '9 APES' },
		{
			title: 'Twitter Followers',
			data: env === 'development' ? '?' : await getTwitterFollowerCount()
		},
		{ title: 'Discord Members', data: '?' }
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
			data:
				env === 'development'
					? '?'
					: await getSalesAmountSOL().then((val) => val.toFixed(2))
		}
	];

	const balances: CardGridProps[] = [
		{
			title: 'Total SOL injected into $BANANA',
			data: `${(1.183162314).toFixed(2)} SOL`
		},
		{ title: 'SOL to be injected into $BANANA', data: '?' }
	];

	const bananaStats: CardGridProps[] = [
		{ title: 'Total Supply', data: '10M' },
		{ title: 'Claimed Supply', data: '?' },
		{ title: 'Circulating Supply', data: '?' },
		{ title: 'Burnt Supply', data: '?' }
	];

	const toolsStats: CardGridProps[] = [
		{ title: 'Projects Onboarded', data: '177' },
		{ title: 'Projects Currently Subscribed', data: '59' },
		{ title: 'Average Monthly Revenue', data: '$7,558' }
	];

	const launchpadStats: CardGridProps[] = [
		{
			title: 'UA',
			project: {
				image: '/assets/utilityape.png',
				link: ''
			}
		},
		{
			title: 'UA',
			project: {
				image: '/assets/utilityape.png',
				link: ''
			}
		},
		{
			title: 'UA',
			project: {
				image: '/assets/utilityape.png',
				link: ''
			}
		},
		{
			title: 'UA',
			project: {
				image: '/assets/utilityape.png',
				link: ''
			}
		},
		{
			title: 'UA',
			project: {
				image: '/assets/utilityape.png',
				link: ''
			}
		},
		{
			title: 'UA',
			project: {
				image: '/assets/utilityape.png',
				link: ''
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
		// Next.js will attempt to re-generate the page:
		revalidate: 21600 // every 6 hours
	};
};

export default Home;
