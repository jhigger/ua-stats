import Image from 'next/image';
import ShiftImage from '../assets/Shift.png';
import { SectionHeader } from './Section';

type Props = {};

const Shift = (props: Props) => {
	return (
		<>
			<SectionHeader
				image={
					<Image
						src={ShiftImage}
						alt="shift"
						width={32}
						height={32}
					/>
				}
				title="Shift"
			/>
			<div className="flex items-center justify-center flex-col mt-6">
				<h3 className="mt-2 text-sm font-medium text-neutral-100">
					Coming soon
				</h3>
			</div>
		</>
	);
};

export default Shift;
