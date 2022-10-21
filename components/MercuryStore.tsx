import Image from 'next/image';
import Mercury from '../assets/Mercury.png';
import CardGrid, { CardGridProps } from './CardGrid';
import Section, { SectionHeader } from './Section';

export type MercuryStoreProps = { mercuryStoreStats: CardGridProps[] };

const MercuryStore = ({ mercuryStoreStats }: MercuryStoreProps) => {
	return (
		<>
			<SectionHeader
				image={
					<Image src={Mercury} alt="logo" width={32} height={32} />
				}
				title="Mercury"
			/>
			<Section>
				<CardGrid items={mercuryStoreStats} />
			</Section>
		</>
	);
};

export default MercuryStore;
