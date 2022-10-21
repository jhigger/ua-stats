import Image from 'next/image';
import Logo from '../assets/BSL_WHITE.png';
import Chart, { ChartProps } from './Chart';
import { SectionHeader } from './Section';

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
