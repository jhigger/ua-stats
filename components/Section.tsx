import { Props } from '../types';

type SectionProps = Props & { title?: string };

const Section = (props: SectionProps) => {
	return (
		<section>
			<h2 className="text-lg leading-6 font-medium text-neutral-100 mb-5">
				{props?.title}
			</h2>
			{props.children}
		</section>
	);
};

export default Section;
