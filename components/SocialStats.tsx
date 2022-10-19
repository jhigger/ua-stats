import Card from './Card';
import Section from './Section';

export type StatsProps = { title: string; data: string };

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

export type SocialStatsProps = { stats: StatsProps[] };

const SocialStats = (props: SocialStatsProps) => {
	return (
		<Section title="Social Stats">
			<dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
				{props.stats.map(({ title, data }) => {
					return <Stats key={title} title={title} data={data} />;
				})}
			</dl>
		</Section>
	);
};

export default SocialStats;
