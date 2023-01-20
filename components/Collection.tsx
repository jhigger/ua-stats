import Image from 'next/image';
import CardGrid, { CardGridProps } from './CardGrid';
import { SectionHeader } from './Section';

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
			<CardGrid items={collections} />
		</>
	);
};

export default Collection;
