import Image from 'next/image';
import CardGrid, { CardGridProps } from './CardGrid';
import Section, { SectionHeader } from './Section';

export type CollectionProps = { collections: CardGridProps[] };

const Collection = ({ collections }: CollectionProps) => {
	return (
		<>
			<SectionHeader
				image={
					<Image
						src={'/assets/logo.png'}
						alt="logo"
						width={163}
						height={40}
					/>
				}
				title="Collection"
			/>
			<Section title="Gen 2 NFT Stats">
				<CardGrid items={collections} />
			</Section>
		</>
	);
};

export default Collection;
