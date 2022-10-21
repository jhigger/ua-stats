import Image from 'next/image';
import Logo from '../assets/BSL_WHITE.png';
import CardGrid, { CardGridProps } from './CardGrid';
import Section, { SectionHeader } from './Section';

export type ForgeProps = { forgeStats: CardGridProps[] };

const Forge = ({ forgeStats }: ForgeProps) => {
	return (
		<>
			<SectionHeader
				image={<Image src={Logo} alt="logo" width={135} height={24} />}
				title="Forge"
			/>
			<Section>
				<CardGrid items={forgeStats} />
			</Section>
		</>
	);
};

export default Forge;
