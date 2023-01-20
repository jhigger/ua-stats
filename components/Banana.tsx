import CardGrid, { CardGridProps } from './CardGrid';
import Section from './Section';

export type BananaProps = { bananaStats: CardGridProps[] };

const Banana = ({ bananaStats }: BananaProps) => {
	return (
		<Section title="$BANANA Stats">
			<CardGrid items={bananaStats} />
		</Section>
	);
};

export default Banana;
