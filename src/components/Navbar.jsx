import { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { RiMenu3Fill } from 'react-icons/ri';
import logo from '../assets/Logo.85c67ebf (1).svg';
import { CiSaveDown2 } from 'react-icons/ci';
import { motion, useScroll } from 'framer-motion';
import {} from 'framer-motion';
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const { scrollY } = useScroll();

	const variantsScroll = {
		hidden: {
			y: -100,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	useEffect(() => {
		const handleScroll = () => {
			if (scrollY.current > 80) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollY]);

	const variants = {
		closed: {
			x: 100,
			opacity: 0,
		},

		show: {
			x: 0,
			opacity: 1,

			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.3,
			},
		},
	};

	const listVariants = {
		closed: {
			x: -10,
			opacity: 0,
		},

		show: {
			x: 0,
			opacity: 1,
		},
	};
	return (
		<motion.header
			initial='hidden'
			animate={isScrolled ? 'visible' : 'hidden'}
			variants={variantsScroll}
			transition={{ duration: 0.5 }}
			className='max-sm:px-3 z-40 bg-white flex items-center lg:px-[4.759rem] py-5 fixed top-0 left-0 right-0 max-w-[1440px] mx-auto shadow-lg'
		>
			<img src={logo} alt='logo' loading='lazy' className='z-20  lg:w-auto' />
			<nav className='hidden lg:flex items-center justify-between w-screen '>
				<ul className='flex items-center justify-center w-full gap-7'>
					<li className='inline-blok'>
						<a
							className='block text-lg font-semibold text-black hover:text-gray-600 transition-colors'
							href=''
						>
							About Me
						</a>
					</li>
					<li className='inline-blok'>
						<a
							className='block text-lg font-semibold text-black hover:text-gray-600 transition-colors'
							href=''
						>
							Skills
						</a>
					</li>
					<li className='inline-blok'>
						<a
							className='block text-lg font-semibold text-black hover:text-gray-600 transition-colors'
							href=''
						>
							Projects
						</a>
					</li>
					<li className='inline-blok'>
						<a
							className='block text-lg font-semibold text-black hover:text-gray-600 transition-colors'
							href=''
						>
							Contact Me
						</a>
					</li>
				</ul>

				<a
					href=''
					className='max-w-30 flex items-center text-lg justify-center gap-2 text-white rounded-md cursor-pointer hover:bg-zinc-800 px-4 py-2 bg-black '
				>
					Resume <CiSaveDown2 className='text-2xl ' />
				</a>
			</nav>

			{/* mobile */}

			{isOpen && (
				<motion.nav
					animate='show'
					initial='closed'
					exit='exit'
					variants={variants}
					className='fixed right-0 top-0 h-full bg-black z-10  mt-20 w-full  shadow-lg lg:hidden'
				>
					<ul className='flex flex-col items-center justify-center w-1/2 h-2/3 mx-auto gap-7'>
						<motion.li variants={listVariants} className='inline-blok p-2'>
							<a
								className='block  text-2xl font-semibold text-white hover:text-gray-600 transition-colors'
								href=''
							>
								About Me
							</a>
						</motion.li>
						<motion.li variants={listVariants} className='inline-blok p-2'>
							<a
								className='block text-2xl font-semibold text-white hover:text-gray-600 transition-colors'
								href=''
							>
								Skills
							</a>
						</motion.li>
						<motion.li variants={listVariants} className='inline-blok p-2'>
							<a
								className='block text-2xl font-semibold text-white hover:text-gray-600 transition-colors'
								href=''
							>
								Projects
							</a>
						</motion.li>
						<motion.li variants={listVariants} className='inline-blok p-2'>
							<a
								className='block text-2xl font-semibold text-white hover:text-gray-600 transition-colors'
								href=''
							>
								Contact Me
							</a>
						</motion.li>
					</ul>

					<motion.a
						variants={listVariants}
						href=''
						className='max-w-30 w-fit mx-auto flex items-center text-lg justify-center gap-2 text-black rounded-md cursor-pointer  px-4 py-2 bg-white '
					>
						Resume <CiSaveDown2 className='text-2xl ' />
					</motion.a>
				</motion.nav>
			)}

			<button
				onClick={() => setIsOpen((prevState) => !prevState)}
				type='button'
				className='z-20 flex items-center w-8 h-8 justify-center ml-auto lg:hidden'
			>
				{isOpen ? (
					<GrClose className='w-full h-full text-2xl' />
				) : (
					<RiMenu3Fill className='w-full h-full text-2xl' />
				)}
			</button>
		</motion.header>
	);
};
export default Navbar;
