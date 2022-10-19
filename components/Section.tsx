import { Props } from '../types';

type SectionProps = Props & { title?: string };

const Section = (props: SectionProps) => {
	return (
		<section>
			<h2 className="text-lg leading-6 font-medium text-neutral-100">
				{props?.title}
			</h2>
			<dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
				{props.children}
			</dl>
		</section>
	);
};

export default Section;
