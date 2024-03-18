import logoWhite from '../assets/logo-white.8ee59b63 (1).svg';

const Footer = () => {
	return (
		<footer className='bg-black text-white flex items-center justify-between px-16 py-5 w-full max-md:block max-md:px-6'>
			<img src={logoWhite} alt='logo' loading='lazy' />
			<ul className='max-md:mt-5'>
				<li className='block font-bold text-[15px] mb-3'>
					Copyright &copy; 2024.All rights reserved
				</li>
				<li className='block font-bold text-[15px]'>Made by Mel turham</li>
			</ul>
		</footer>
	);
};
export default Footer;
