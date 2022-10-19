import Card from './Card';

type StatsProps = { title: string; data: string };

const Stats = (props: StatsProps) => {
	return (
		<Card>
			<dt className="text-sm font-medium text-neutral-300 truncate">
				{props.title}
			</dt>
			<dd className="mt-1 text-3xl font-semibold text-neutral-100">
				{props.data}
			</dd>
		</Card>
	);
};

type SocialStatsProps = { stats: StatsProps[] };

const SocialStats = (props: SocialStatsProps) => {
	return (
		<section>
			<h2 className="text-lg leading-6 font-medium text-neutral-100">
				Social Stats
			</h2>
			<dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
				{props.stats.map(({ title, data }) => {
					return <Stats key={title} title={title} data={data} />;
				})}
			</dl>
		</section>
	);
};

export default SocialStats;
