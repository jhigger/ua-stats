import Image from 'next/image';
import Mercury from '../assets/Mercury.png';
import CardGrid, { CardGridProps } from './CardGrid';
import Section, { SectionHeader } from './Section';

export type ForgeProps = { forgeStats: CardGridProps[] };

const Forge = ({ forgeStats }: ForgeProps) => {
	return (
		<>
			<SectionHeader
				image={
					<Image src={Mercury} alt="logo" width={32} height={32} />
				}
				title="Forge"
			/>
			<Section>
				<CardGrid items={forgeStats} />
			</Section>
		</>
	);
};

export default Forge;
