import { Props } from '../types';

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
