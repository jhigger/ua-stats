import Image from 'next/image';
import CardGrid, { CardGridProps } from './CardGrid';
import Section, { SectionHeader } from './Section';

export type LaunchpadProps = { launchpadStats: CardGridProps[] };

const Launchpad = ({ launchpadStats }: LaunchpadProps) => {
	return (
		<>
			<SectionHeader title="Launchpad Projects/Advising" />
			<Section title="Projects that we're advising for or offering launchpad services to">
				<CardGrid items={launchpadStats} />
			</Section>
		</>
	);
};

export default Launchpad;
