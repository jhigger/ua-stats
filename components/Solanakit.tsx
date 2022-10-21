import Image from 'next/image';
import SolanakitImage from '../assets/Solanakit.png';

type Props = {};

const Solanakit = (props: Props) => {
	return (
		<div className="text-white text-center flex gap-3 items-center justify-center">
			Collection data provided by
			<a href="https://solanakit.com/">
				<Image
					src={SolanakitImage}
					alt="solanakit.com"
					width={100}
					height={28}
				/>
			</a>
		</div>
	);
};

export default Solanakit;
