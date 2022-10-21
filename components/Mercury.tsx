import Image from 'next/image';
import MercuryImage from '../assets/Mercury.png';
import CardGrid, { CardGridProps } from './CardGrid';
import Section, { SectionHeader } from './Section';

export type MercuryProps = { mercuryStats: CardGridProps[] };

const Mercury = ({ mercuryStats }: MercuryProps) => {
	return (
		<>
			<SectionHeader
				image={
					<Image
						src={MercuryImage}
						alt="logo"
						width={32}
						height={32}
					/>
				}
				title="Mercury"
			/>
			<Section>
				<CardGrid items={mercuryStats} />
			</Section>
		</>
	);
};

export default Mercury;
