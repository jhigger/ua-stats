import { Props } from '../types';

const Card = (props: Props) => {
	return (
		<div className="px-4 py-5 bg-neutral-700 shadow-2xl rounded-lg overflow-hidden sm:p-6">
			{props.children}
		</div>
	);
};

export default Card;
