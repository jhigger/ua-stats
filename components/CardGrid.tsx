import Card from './Card';

export type CardGridProps = { title: string; data: string };

const CardGrid = ({ items }: { items: CardGridProps[] }) => {
	return (
		<dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
			{items.map(({ title, data }) => {
				return (
					<Card key={title}>
						<dt className="text-sm font-medium text-neutral-300 truncate">
							{title}
						</dt>
						<dd className="mt-1 text-3xl font-semibold text-neutral-100">
							{data}
						</dd>
					</Card>
				);
			})}
		</dl>
	);
};

export default CardGrid;
