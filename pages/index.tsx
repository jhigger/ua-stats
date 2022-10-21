import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Solanakit from '../assets/Solanakit.png';
import Balances from '../components/Balances';
import Bifrost, { TableRowProps } from '../components/Bifrost';
import { CardGridProps } from '../components/CardGrid';
import Chart, { ChartData, ChartProps } from '../components/Chart';
import Forge from '../components/Forge';
import GithubCommits from '../components/GithubCommits';
import Header from '../components/Header';
import Mercury from '../components/Mercury';
import MercuryStore from '../components/MercuryStore';
import Revenue from '../components/Revenue';
import Shift from '../components/Shift';
import SocialStats from '../components/SocialStats';
import UptimeStats from '../components/UptimeStats';
import { HomeProps } from '../types';

const Collection = dynamic(import('../components/Collection'), { ssr: false });

const Home: NextPage<HomeProps> = ({
	socialStats,
	collections,
	balances,
	forgeStats,
	mercuryStats,
	uniqueUsers,
	projectsOnboarded,
	mercuryStoreStats,
	forgeSpent,
	tableData
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
					<SocialStats socialStats={socialStats} />
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
					<Forge forgeStats={forgeStats} />
					<Mercury mercuryStats={mercuryStats} />
					<Chart title="Unique Users" data={uniqueUsers} />
					<Chart
						title="Projects Onboarded"
						data={projectsOnboarded}
					/>
					<MercuryStore mercuryStoreStats={mercuryStoreStats} />
					<Chart title="FORGE Spent" data={forgeSpent} />
				</div>
				<Bifrost tableData={tableData} />
				<Shift />
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const socialStats: CardGridProps[] = [
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

	const forgeStats: CardGridProps[] = [
		{ title: 'Total Supply', data: '44M FORGE' },
		{ title: 'Claimed Supply', data: '6.62M FORGE' },
		{ title: 'Circulating Supply', data: '4.26M FORGE' }
	];

	const mercuryStats: CardGridProps[] = [
		{ title: 'Projects Onboarded', data: '832' },
		{ title: 'Registered Wallets', data: '309.45k' },
		{ title: 'Whitelists Claimed', data: '2.46M' },
		{ title: 'FCFS Amount', data: '433' },
		{ title: 'Total FCFS Spots Given', data: '22.71k' }
	];

	const uniqueUsers: ChartData[] = [
		{ date: '2022-10-14', count: Math.random() },
		{ date: '2022-10-15', count: Math.random() },
		{ date: '2022-10-16', count: Math.random() },
		{ date: '2022-10-17', count: Math.random() },
		{ date: '2022-10-18', count: Math.random() },
		{ date: '2022-10-19', count: Math.random() },
		{ date: '2022-10-20', count: Math.random() }
	];

	const projectsOnboarded: ChartData[] = [
		{ date: '2022-10-14', count: Math.random() },
		{ date: '2022-10-15', count: Math.random() },
		{ date: '2022-10-16', count: Math.random() },
		{ date: '2022-10-17', count: Math.random() },
		{ date: '2022-10-18', count: Math.random() },
		{ date: '2022-10-19', count: Math.random() },
		{ date: '2022-10-20', count: Math.random() }
	];

	const mercuryStoreStats: CardGridProps[] = [
		{ title: 'Total FORGE Spent', data: '1.99M' },
		{ title: 'Auctions Created', data: '53' },
		{ title: 'Total Auctioned WL Spots', data: '5.29k' },
		{ title: 'Raffles Created', data: '682' },
		{ title: 'Total Raffled WL Spots', data: '59.62k' },
		{ title: 'FORGE Rewards Distributed', data: '23.49k' },
		{ title: 'FORGE Rewards Tweets', data: '15' }
	];

	const forgeSpent: ChartData[] = [
		{ date: '2022-10-14', count: Math.random() },
		{ date: '2022-10-15', count: Math.random() },
		{ date: '2022-10-16', count: Math.random() },
		{ date: '2022-10-17', count: Math.random() },
		{ date: '2022-10-18', count: Math.random() },
		{ date: '2022-10-19', count: Math.random() },
		{ date: '2022-10-20', count: Math.random() }
	];

	const tableData: TableRowProps[] = [
		{
			projectImage:
				'https://openseauserdata.com/files/2e3141cc361e423251b22e36889a3d46.jpg',
			projectName: 'Froots',
			launchDate: '2022-07-21',
			avgMintPrice: '2.42',
			totalSolRaised: '17.66k',
			totalForgeRaised: '180.34k'
		},
		{
			projectImage:
				'https://lh3.googleusercontent.com/JErlxdzvkNGjNYOr3QJNGwj1ghcWkdBM9qXqlPr1SKo_ulOXRyNVo62G1xL7rghbcl22MLzgf1tXNlhV5FoD2c1pl-2SG1psaLqlj1I=s168',
			projectName: 'Sentries',
			launchDate: '2022-08-19',
			avgMintPrice: '1',
			totalSolRaised: '7.65k',
			totalForgeRaised: '176.89k'
		},
		{
			projectImage:
				'https://i.seadn.io/gae/3OVrBTpRHzuKwmJc-ALNr0F94Gvh07Zo6nPrcSL5EwP541QE0IhZ4nVcktL93APCKUxhi6XwXxvlBJPtdSLCJROwfXdGerBVG05Ddw?auto=format&w=256',
			projectName: 'sharx by Sharky.fi',
			launchDate: '2022-10-02',
			avgMintPrice: '2.9',
			totalSolRaised: '14.07k',
			totalForgeRaised: '98.02k'
		}
	];

	return {
		props: {
			socialStats,
			collections,
			balances,
			forgeStats,
			mercuryStats,
			uniqueUsers,
			projectsOnboarded,
			mercuryStoreStats,
			forgeSpent,
			tableData
		}
	};
};

export default Home;
