import Card from './Card';
import Section from './Section';

type Props = {};

const UptimeStats = (props: Props) => {
	return (
		<Section title="Uptime Stats">
			<Card>
				<iframe
					src="https://stats.uptimerobot.com/kPXqjskygV"
					frameBorder="0"
					className="w-full h-96"
				/>
			</Card>
		</Section>
	);
};

export default UptimeStats;
