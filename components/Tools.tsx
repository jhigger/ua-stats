import Image from 'next/image';
import CardGrid, { CardGridProps } from './CardGrid';
import Section, { SectionHeader } from './Section';

export type ToolsProps = { toolsStats: CardGridProps[] };

const Tools = ({ toolsStats }: ToolsProps) => {
	return (
		<Section title="Tools Stats">
			<CardGrid items={toolsStats} />
		</Section>
	);
};

export default Tools;
