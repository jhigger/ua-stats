import { Props } from '../types';
import classnames from 'classnames';

type CardProps = Props & { className?: string };

const Card = (props: CardProps) => {
	return (
		<div
			className={classnames(
				'px-4 py-5 bg-neutral-700 shadow-2xl rounded-lg overflow-hidden sm:p-6',
				props.className
			)}
		>
			{props.children}
		</div>
	);
};

export default Card;
