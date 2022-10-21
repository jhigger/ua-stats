import Image from 'next/image';
import Logo from '../assets/BSL_WHITE.png';
import CardGrid, { CardGridProps } from './CardGrid';
import Section, { SectionHeader } from './Section';

export type MercuryStoreProps = { mercuryStoreStats: CardGridProps[] };

const MercuryStore = ({ mercuryStoreStats }: MercuryStoreProps) => {
	return (
		<>
			<SectionHeader
				image={<Image src={Logo} alt="logo" width={135} height={24} />}
				title="Mercury"
			/>
			<Section>
				<CardGrid items={mercuryStoreStats} />
			</Section>
		</>
	);
};

export default MercuryStore;
