import Image from 'next/image';
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts';
import Logo from '../assets/BSL_WHITE.png';
import Card from './Card';
import Section, { SectionHeader } from './Section';

export type ChartProps = {
	title: string;
	data: { date: string; count: number }[];
};

const Chart = ({ title, data }: ChartProps) => {
	return (
		<Section title={title}>
			<Card>
				<ResponsiveContainer width="100%" height={300}>
					<AreaChart
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient
								id="colorCount"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="5%"
									stopColor="#82ca9d"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="#82ca9d"
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<XAxis dataKey="date" />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="count"
							stroke="#82ca9d"
							fillOpacity={1}
							fill="url(#colorCount)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</Card>
		</Section>
	);
};

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
