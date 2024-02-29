import image from '../assets/img/banner-img.webp';
import './Hero.css';
import {
	FaFacebookF,
	FaXTwitter,
	FaInstagram,
	FaLinkedin,
	FaDiscord,
} from 'react-icons/fa6';

const Hero = () => {
	return (
		<section className='sm:flex  lg:flex-row lg:px-20 min-h-[100dvl] items-end  gap-5 mt-[2rem]'>
			<div className=' md:w-[50%] h-full lg:-mt-8'>
				<h1 className='max-sm:text-[1.8993rem] md:text-5xl max-md:text-center lg:leading-10'>
					<p className='md:text-nowrap '>
						Hello I&quot;m <span className='font-bold'> Mel Turham</span>
					</p>
					<p className='md:my-5 md:text-nowrap'>
						<span className='font-bold'>Frontend Developer </span>
					</p>
					<p>
						Based In <span className='font-bold'>Cameroon</span>
					</p>
				</h1>

				<p className='max-sm:text-lg max-sm:my-5 md:mt-4 lg:mt-4 max-md:text-center text-gray-500 leading-2'>
					I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing
					and typesetting industry. Lorem Ipsum has been the industry&apos;s
					standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to specimen book.
				</p>

				<div className='flex items-center max-md:justify-center  gap-4 mt-8'>
					<div className='rounded-md h-[48px] flex items-center justify-center p-[12px] w-[48px] hover:bg-black hover:text-white  focus-visible:text-white group transition-all ease-in-out cursor-pointer border-2 border-gray-800 border-solid bg-white'>
						<FaFacebookF className=' text-black text-2xl w-full h-full group-hover:text-white transition-all ease-in-out ' />
					</div>
					<div className='rounded-md h-[48px] flex items-center justify-center p-[12px] w-[48px] hover:bg-black hover:text-white  focus-visible:text-white group transition-all ease-in-out cursor-pointer border-2 border-gray-800 border-solid bg-white'>
						<FaXTwitter className=' text-black text-2xl w-full h-full group-hover:text-white transition-all ease-in-out ' />
					</div>
					<div className='rounded-md h-[48px] flex items-center justify-center p-[12px] w-[48px] hover:bg-black hover:text-white  focus-visible:text-white group transition-all ease-in-out cursor-pointer border-2 border-gray-800 border-solid bg-white'>
						<FaInstagram className=' text-black text-2xl w-full h-full group-hover:text-white transition-all ease-in-out ' />
					</div>
					<div className='rounded-md h-[48px] flex items-center justify-center p-[12px] w-[48px] hover:bg-black hover:text-white  focus-visible:text-white group transition-all ease-in-out cursor-pointer border-2 border-gray-800 border-solid bg-white'>
						<FaLinkedin className=' text-black text-2xl w-full h-full group-hover:text-white transition-all ease-in-out ' />
					</div>
					<div className='rounded-md h-[48px] flex items-center justify-center p-[12px] w-[48px] hover:bg-black hover:text-white  focus-visible:text-white group transition-all ease-in-out cursor-pointer border-2 border-gray-800 border-solid bg-white'>
						<FaDiscord className=' text-black text-2xl w-full h-full group-hover:text-white transition-all ease-in-out ' />
					</div>
				</div>
			</div>
			<div className='hero-image md:w-[50%] max-sm:w-full max-md:mt-9 flex items-center justify-center '>
				<img
					src={image}
					alt='hero image'
					loading='lazy'
					className='max-md:w-[100%] lg:object-content w-[395px] aspect-auto'
				/>
			</div>
		</section>
	);
};
export default Hero;
