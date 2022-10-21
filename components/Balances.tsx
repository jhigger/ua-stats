import CardGrid, { CardGridProps } from './CardGrid';
import Section from './Section';

export type BalancesProps = { balances: CardGridProps[] };

const Balances = ({ balances }: BalancesProps) => {
	return (
		<Section title="Team Wallet Balances">
			<CardGrid items={balances} />
		</Section>
	);
};

export default Balances;
