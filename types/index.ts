import { BalancesProps } from '../components/Balances';
import { ChartData } from '../components/Chart';
import { CollectionProps } from '../components/Collection';
import { ForgeProps } from '../components/Forge';
import { MercuryProps } from '../components/Mercury';
import { SocialStatsProps } from '../components/SocialStats';

export interface Props {
	children: JSX.Element[] | JSX.Element | string | string[];
}

type UniqueUsers = { uniqueUsers: ChartData[] };
type ProjectsOnboarded = { projectsOnboarded: ChartData[] };

export type HomeProps = SocialStatsProps &
	CollectionProps &
	BalancesProps &
	ForgeProps &
	MercuryProps &
	UniqueUsers &
	ProjectsOnboarded;
