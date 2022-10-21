import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Balances, { BalancesProps } from '../components/Balances';
import { CardGridProps } from '../components/CardGrid';
import { ChartProps } from '../components/Chart';
import { CollectionProps } from '../components/Collection';
import GithubCommits from '../components/GithubCommits';
import Header from '../components/Header';
import Revenue from '../components/Revenue';
import SocialStats, { SocialStatsProps } from '../components/SocialStats';
import UptimeStats from '../components/UptimeStats';
import Solanakit from '../assets/Solanakit.png';
import Image from 'next/image';

const Collection = dynamic(import('../components/Collection'), { ssr: false });

const Home: NextPage<SocialStatsProps & CollectionProps & BalancesProps> = ({
	stats,
	collections,
	balances
}) => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container mx-auto py-12 px-4 sm:px-0 max-w-4xl">
				<Header />
				<div className="flex flex-col gap-12">
					<SocialStats stats={stats} />
					<GithubCommits />
					<UptimeStats />
					<Collection collections={collections} />
					<Revenue />
					<Balances balances={balances} />
					<div className="text-white text-center flex gap-3 items-center justify-center">
						Collection data provided by
						<a href="https://solanakit.com/">
							<Image
								src={Solanakit}
								alt="solanakit.com"
								width={100}
								height={28}
							/>
						</a>
					</div>
				</div>
				{/* TODO: Footer */}
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const stats: CardGridProps[] = [
		{ title: 'Team', data: '17 Smiths' },
		{ title: 'Twitter Followers', data: '60.91k' },
		{ title: 'Discord Members', data: '30.91k' }
	];

	const collections: ChartProps[] = [
		{
			title: 'Listed NFTs',
			data: [
				{ date: '2022-10-14', count: Math.random() },
				{ date: '2022-10-15', count: Math.random() },
				{ date: '2022-10-16', count: Math.random() },
				{ date: '2022-10-17', count: Math.random() },
				{ date: '2022-10-18', count: Math.random() },
				{ date: '2022-10-19', count: Math.random() },
				{ date: '2022-10-20', count: Math.random() }
			]
		},
		{
			title: 'Unique Owners',
			data: [
				{ date: '2022-10-14', count: Math.random() },
				{ date: '2022-10-15', count: Math.random() },
				{ date: '2022-10-16', count: Math.random() },
				{ date: '2022-10-17', count: Math.random() },
				{ date: '2022-10-18', count: Math.random() },
				{ date: '2022-10-19', count: Math.random() },
				{ date: '2022-10-20', count: Math.random() }
			]
		},
		{
			title: 'Twitter Followers',
			data: [
				{ date: '2022-10-14', count: Math.random() },
				{ date: '2022-10-15', count: Math.random() },
				{ date: '2022-10-16', count: Math.random() },
				{ date: '2022-10-17', count: Math.random() },
				{ date: '2022-10-18', count: Math.random() },
				{ date: '2022-10-19', count: Math.random() },
				{ date: '2022-10-20', count: Math.random() }
			]
		},
		{
			title: 'Sales Amount SOL',
			data: [
				{ date: '2022-10-14', count: Math.random() },
				{ date: '2022-10-15', count: Math.random() },
				{ date: '2022-10-16', count: Math.random() },
				{ date: '2022-10-17', count: Math.random() },
				{ date: '2022-10-18', count: Math.random() },
				{ date: '2022-10-19', count: Math.random() },
				{ date: '2022-10-20', count: Math.random() }
			]
		}
	];

	const balances: CardGridProps[] = [
		{ title: 'SOL Balance', data: '13.17k SOL' },
		{ title: 'USDC Balance', data: '60.9k USDC' },
		{ title: 'FORGE Balance', data: '2.36M FORGE' }
	];

	return {
		props: {
			stats,
			collections,
			balances
		}
	};
};

export default Home;
