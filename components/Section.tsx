import { Props } from '../types';

type SectionHeaderProps = { image?: JSX.Element; title: string };

export const SectionHeader = ({ image, title }: SectionHeaderProps) => {
	return (
		<div className="relative flex py-5 items-center mt-12">
			<div className="flex-grow border-t border-neutral-400"></div>
			<span className="flex-shrink mx-4 text-neutral-400">
				<div className="text-3xl text-white flex items-center gap-5">
					{image}
					<h2>{title}</h2>
				</div>
			</span>
			<div className="flex-grow border-t border-neutral-400"></div>
		</div>
	);
};

type SectionProps = Props & { title?: string };

const Section = (props: SectionProps) => {
	return (
		<section>
			<h3 className="text-lg leading-6 font-medium text-neutral-100 mb-5">
				{props?.title}
			</h3>
			{props.children}
		</section>
	);
};

export default Section;
