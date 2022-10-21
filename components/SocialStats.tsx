import CardGrid, { CardGridProps } from './CardGrid';
import Section from './Section';

export type SocialStatsProps = { socialStats: CardGridProps[] };

const SocialStats = ({ socialStats }: SocialStatsProps) => {
	return (
		<Section title="Social Stats">
			<CardGrid items={socialStats} />
		</Section>
	);
};

export default SocialStats;
