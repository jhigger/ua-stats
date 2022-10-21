import { BalancesProps } from '../components/Balances';
import { BifrostProps } from '../components/Bifrost';
import { ChartData } from '../components/Chart';
import { CollectionProps } from '../components/Collection';
import { ForgeProps } from '../components/Forge';
import { MercuryProps } from '../components/Mercury';
import { MercuryStoreProps } from '../components/MercuryStore';
import { SocialStatsProps } from '../components/SocialStats';

export interface Props {
	children: JSX.Element[] | JSX.Element | string | string[] | null;
}

type UniqueUsers = { uniqueUsers: ChartData[] };
type ProjectsOnboarded = { projectsOnboarded: ChartData[] };
type ForgeSpent = { forgeSpent: ChartData[] };

export type HomeProps = SocialStatsProps &
	CollectionProps &
	BalancesProps &
	ForgeProps &
	MercuryProps &
	UniqueUsers &
	ProjectsOnboarded &
	MercuryStoreProps &
	ForgeSpent &
	BifrostProps;
