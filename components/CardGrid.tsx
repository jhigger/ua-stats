/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Card from './Card';

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
						<dt className="text-sm font-medium text-neutral-300 truncate">
							{title}
						</dt>
						<dd className="mt-1 text-3xl font-semibold text-neutral-100">
							{data}
						</dd>
						{project ? (
							<a
								href={project.link}
								target="_blank"
								rel="noreferrer"
								className="min-h-[12rem] flex items-center justify-center"
							>
								<img src={project.image} alt="card image" />
							</a>
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
