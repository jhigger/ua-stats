/* eslint-disable @next/next/no-img-element */
import Card from './Card';
import Section from './Section';

type Props = {};

const GithubCommits = (props: Props) => {
	return (
		<Section title="Github Commits">
			<Card className="sm:p-8">
				<img
					src="https://ghchart.rshah.org/jhigger"
					alt="github calendar"
					className="w-full"
				/>
			</Card>
		</Section>
	);
};

export default GithubCommits;
