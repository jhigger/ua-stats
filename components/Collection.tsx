import dynamic from 'next/dynamic';
import Image from 'next/image';
import Logo from '../assets/BSL_WHITE.png';
import { ChartProps } from './Chart';
import { SectionHeader } from './Section';

const Chart = dynamic(import('./Chart'), { ssr: false });

export type CollectionProps = { collections: ChartProps[] };

const Collection = ({ collections }: CollectionProps) => {
	return (
		<>
			<SectionHeader
				image={<Image src={Logo} alt="logo" width={135} height={24} />}
				title="Collection"
			/>
			<div className="grid sm:grid-cols-2 gap-8">
				{collections.map(({ title, data }) => {
					return <Chart key={title} title={title} data={data} />;
				})}
			</div>
		</>
	);
};

export default Collection;
