import img from '../assets/user_1.67175b04.svg';
import user2 from '../assets/user_2.045f39cf (1).svg';
import { FaQuoteRight } from 'react-icons/fa6';
const Testimonials = () => {
	return (
		<section className='lg:px-[60px] mb-[40px] flex items-center justify-center flex-col'>
			<h1 className='text-center text-5xl max-md:text-[1.9887rem]  capitalize lg:my-20  font-light  max-lg:py-4 max-md:mb-7 max-md:mt-8'>
				My <span className='font-black '>Testimonials</span>
			</h1>

			<article className='sm:flex-wrap max-md:items-center  lg:flex items-center justify-center gap-5 '>
				<div className='group hover:bg-black hover:text-white transition-all max-md:mb-6 max-w-[360px] max-sm:w-full flex flex-col items-center gap-5 rounded-2xl justify-center shadow-lg p-[30px]'>
					<div className='relative flex items-center justify-center  h-[100px] w-[100px] rounded-full bg-black'>
						<img
							src={img}
							alt='user'
							loading='lazy'
							className='w-full h-full object-cover'
						/>
						<span className='absolute -right-1 bottom-3 group-hover:bg-white group-hover:text-black  bg-black p-[5px] rounded-full w-7 h-7 text-white grid place-content-center'>
							<FaQuoteRight className=' text-[1rem] ' />
						</span>
					</div>
					<p className='  text-[18px] text-pretty text-center mb-5'>
						I recently had to jump on 10+ different calls across eight different
						countries to find the right owner.
					</p>
					<div className='h-[2px] max-w-[120px] group-hover:bg-white bg-black w-full mx-auto'></div>
					<h3 className='font-bold text-[20px] group-hover:text-white text-black/85'>
						Evren Shah
					</h3>
					<h4 className='font-bold group-hover:text-white text-black/70'>
						Designer
					</h4>
				</div>
				<div className='group hover:bg-black hover:text-white transition-all max-w-[370px] flex flex-col items-center gap-5 rounded-2xl justify-center shadow-lg p-[30px]'>
					<div className='relative flex items-center justify-center mx-auto  h-[100px] w-[100px] rounded-full bg-black'>
						<img
							src={user2}
							alt='user'
							loading='lazy'
							className='w-full h-full object-cover'
						/>
						<span className='absolute -right-1 bottom-3 group-hover:bg-white group-hover:text-black  bg-black p-[5px] rounded-full w-7 h-7 text-white grid place-content-center'>
							<FaQuoteRight className=' text-[1rem]' />
						</span>
					</div>
					<p className='  text-[18px] text-pretty text-center mb-5'>
						I recently had to jump on 10+ different calls across eight different
						countries to find the right owner.
					</p>
					<div className='h-[2px] max-w-[120px] group-hover:bg-white bg-black w-full mx-auto'></div>
					<h3 className='font-bold text-[20px] group-hover:text-white text-black/85'>
						Evren Shah
					</h3>
					<h4 className='font-bold group-hover:text-white text-black/70'>
						Designer
					</h4>
				</div>
				<div className='group hover:bg-black hover:text-white transition-all max-w-[370px] flex flex-col items-center gap-5 rounded-2xl justify-center shadow-lg p-[30px]'>
					<div className='relative flex items-center justify-center mx-auto  h-[100px] w-[100px] rounded-full bg-black'>
						<img
							src={img}
							alt='user'
							loading='lazy'
							className='w-full h-full object-cover'
						/>
						<span className='absolute -right-1 bottom-3 group-hover:bg-white group-hover:text-black  bg-black p-[5px] rounded-full w-7 h-7 text-white grid place-content-center'>
							<FaQuoteRight className=' text-[1rem] ' />
						</span>
					</div>
					<p className='  text-[18px] text-pretty text-center mb-5'>
						I recently had to jump on 10+ different calls across eight different
						countries to find the right owner.
					</p>
					<div className='h-[2px] max-w-[120px] group-hover:bg-white bg-black w-full mx-auto'></div>
					<h3 className='font-bold text-[20px] group-hover:text-white text-black/85'>
						Evren Shah
					</h3>
					<h4 className='font-bold group-hover:text-white text-black/70'>
						Designer
					</h4>
				</div>
			</article>
		</section>
	);
};
export default Testimonials;
