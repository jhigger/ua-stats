import CardGrid, { CardGridProps } from './CardGrid';
import Section from './Section';

export type SocialStatsProps = { stats: CardGridProps[] };

const SocialStats = ({ stats }: SocialStatsProps) => {
	return (
		<Section title="Social Stats">
			<CardGrid items={stats} />
		</Section>
	);
};

export default SocialStats;
