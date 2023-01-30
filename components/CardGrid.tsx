/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Card from './Card';
import { FaExternalLinkAlt } from 'react-icons/fa';

export type CardGridProps = {
	title: string;
	data?: string | number;
	project?: { image: string; link: string };
};

const CardGrid = ({ items }: { items: CardGridProps[] }) => {
	return (
		<dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
			{items.map(({ title, data, project }, i) => {
				return (
					<Card key={title + i}>
						{project ? (
							<dt className="flex justify-between text-sm font-medium text-neutral-300">
								{title}

								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
								>
									<FaExternalLinkAlt color="white" />
								</a>
							</dt>
						) : (
							<dt className="text-sm font-medium text-neutral-300">
								{title}
							</dt>
						)}
						<dd className="mt-1 text-3xl font-semibold text-neutral-100">
							{data}
						</dd>
						{project ? (
							<div>
								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
									className="min-h-[12rem] flex flex-col items-center justify-center"
								>
									<img src={project.image} alt="card image" />
								</a>
							</div>
						) : (
							''
						)}
					</Card>
				);
			})}
		</dl>
	);
};

export default CardGrid;
