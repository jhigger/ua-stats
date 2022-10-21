import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts';
import Card from './Card';
import Section from './Section';

export type ChartData = { date: string; count: number };

export type ChartProps = {
	title: string;
	data: ChartData[];
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

export default Chart;
