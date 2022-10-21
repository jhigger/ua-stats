/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import BifrostImage from '../assets/Bifrost.ico';
import { SectionHeader } from './Section';

const THead = () => {
	const tableHead: string[] = [
		'Project',
		'Launch Date',
		'Avg Mint Price (SOL)',
		'Total SOL Raised',
		'Total FORGE Raised (Treasury)'
	];

	return (
		<thead>
			<tr>
				{tableHead.map((text) => {
					return (
						<th
							key={text}
							scope="col"
							className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
						>
							{text}
						</th>
					);
				})}
			</tr>
		</thead>
	);
};

export type TableRowProps = {
	projectImage: string;
	projectName: string;
	launchDate: string;
	avgMintPrice: string;
	totalSolRaised: string;
	totalForgeRaised: string;
};

const TableRow = (props: TableRowProps) => {
	return (
		<tr>
			<td className="relative py-6 pl-4 sm:pl-6 pr-3 text-sm">
				<div className="font-medium text-neutral-100 flex gap-3 items-center">
					<img
						src={props.projectImage}
						alt="project image"
						className="rounded-full h-6 w-6"
					/>
					<span>{props.projectName}</span>
				</div>
			</td>
			<td className=" px-3 py-3.5 text-sm text-neutral-300 table-cell">
				{props.launchDate}
			</td>
			<td className=" px-3 py-3.5 text-sm text-neutral-300 table-cell">
				{props.avgMintPrice}
			</td>
			<td className=" px-3 py-3.5 text-sm text-neutral-300 table-cell">
				{props.totalSolRaised}
			</td>
			<td className=" px-3 py-3.5 text-sm text-neutral-300 table-cell">
				{props.totalForgeRaised}
			</td>
		</tr>
	);
};

export type BifrostProps = { tableData: TableRowProps[] };

const Bifrost = ({ tableData }: BifrostProps) => {
	return (
		<>
			<SectionHeader
				image={
					<Image
						src={BifrostImage}
						alt="bifrost"
						width={32}
						height={32}
					/>
				}
				title="Bifrost"
			/>
			<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 px-4 mt-6">
				<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
					<div className="overflow-hidden shadow ring-1 ring-neutral-200 rounded-lg text-white">
						<table className="min-w-full divide-y divide-neutral-300">
							<THead />
							<tbody>
								{tableData.map((row) => {
									return (
										<TableRow
											key={row.projectName}
											projectImage={row.projectImage}
											projectName={row.projectName}
											launchDate={row.launchDate}
											avgMintPrice={row.avgMintPrice}
											totalSolRaised={row.totalSolRaised}
											totalForgeRaised={
												row.totalForgeRaised
											}
										/>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default Bifrost;
