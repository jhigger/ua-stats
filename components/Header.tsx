import Image from 'next/image';

export type HeaderProps = { localeDate: string };

const Header = ({ localeDate }: HeaderProps) => {
	return (
		<header className="flex justify-between text-white pb-12 items-center">
			<Image
				src={'/assets/utilityape.png'}
				alt="logo"
				width={64}
				height={64}
			/>
			<div className="text-sm flex flex-col items-end">
				<p>Last Update</p>
				<p>{localeDate}</p>
			</div>
		</header>
	);
};

export default Header;
