import type { NextPage } from 'next';
import Head from 'next/head';
import GithubCommits from '../components/GithubCommits';
import Header from '../components/Header';
import SocialStats from '../components/SocialStats';

const Home: NextPage = () => {
	const stats = [
		{ title: 'Team', data: '17 Smiths' },
		{ title: 'Twitter Followers', data: '60.91k' },
		{ title: 'Discord Members', data: '30.91k' }
	];

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
					{/* TODO: Uptime Stats */}
				</div>
				{/* TODO: Footer */}
			</div>
		</>
	);
};

export default Home;
