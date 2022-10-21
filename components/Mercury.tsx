import Image from 'next/image';
import Logo from '../assets/BSL_WHITE.png';
import CardGrid, { CardGridProps } from './CardGrid';
import Section, { SectionHeader } from './Section';

export type MercuryProps = { mercuryStats: CardGridProps[] };

const Mercury = ({ mercuryStats }: MercuryProps) => {
	return (
		<>
			<SectionHeader
				image={<Image src={Logo} alt="logo" width={135} height={24} />}
				title="Mercury"
			/>
			<Section>
				<CardGrid items={mercuryStats} />
			</Section>
		</>
	);
};

export default Mercury;
