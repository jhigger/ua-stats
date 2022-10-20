import Image from 'next/image';
import Logo from '../assets//BSL_WHITE.png';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="flex justify-between text-white pb-12 items-center">
			<Image src={Logo} alt="logo" width={180} height={32} />
			<div className="text-sm flex flex-col items-end">
				<p>Last Update</p>
				<p>10/19/2022, 6:05:42 AM</p>
			</div>
		</header>
	);
};

export default Header;
