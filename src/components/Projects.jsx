import Project1 from '../assets/img/image-1.webp';
import Project2 from '../assets/img/image-2.webp';
import Project3 from '../assets/img/image-3.webp';
import { RiShareBoxLine } from 'react-icons/ri';

const Projects = () => {
	return (
		<section className='max-md:mt-9 max-lg:mt-8 lg:mt-[5rem] max-md:pb-5 lg:py-[60px] w-full lg:px-20 flex flex-col items-center gap-7 bg-black text-white'>
			<h2 className='text-center text-5xl capitalize my-20'>
				my <span className='text-white font-black '>Projects</span>
			</h2>

			<div className='flex flex-col justify-center items-center max-md: gap-4 w-full'>
				<div className='flex max-md:flex-col-reverse p-4 gap-8'>
					<img
						src={Project1}
						alt='project image'
						loading='lazy'
						className='flex-1 w-full h-full object-cover'
					/>
					<div className='flex-1  flex flex-wrap flex-col gap-2 justify-between'>
						<p className='text-5xl font-extrabold'>01</p>
						<h3 className='text-[2.5rem] max-md:text-[1.8rem] max-md:my-4'>
							Crypto Screener Application
						</h3>
						<p className='text-gray-400 text-pretty'>
							I&quot;m Evren Shah Lorem Ipsum is simply dummy text of the
							printing and typesetting industry. Lorem Ipsum has been the
							industry&quot;s standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to specimen
							book.
						</p>
						<RiShareBoxLine className='text-[22px]' />
					</div>
				</div>
				<div className='flex flex-row-reverse max-md:flex-col-reverse p-4 gap-8'>
					<img
						src={Project2}
						alt='project image'
						loading='lazy'
						className='flex-1 w-full h-full object-cover'
					/>
					<div className='flex-1  flex flex-wrap flex-col justify-between'>
						<p className='text-5xl font-extrabold'>02</p>
						<h3 className='text-[2.5rem] max-md:text-[1.8rem] max-md:my-4'>
							Euphoria - Ecommerce (Apparels) Website Template
						</h3>
						<p className='text-gray-400 text-pretty'>
							I&quot;m Evren Shah Lorem Ipsum is simply dummy text of the
							printing and typesetting industry. Lorem Ipsum has been the
							industry&quot;s standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to specimen
							book.
						</p>
						<RiShareBoxLine className='text-[22px]' />
					</div>
				</div>
				<div className='flex max-md:flex-col-reverse p-4 gap-8'>
					<img
						src={Project3}
						alt='project image'
						loading='lazy'
						className='flex-1 w-full h-full object-cover'
					/>
					<div className='flex-1  flex flex-wrap flex-col gap-2 justify-between'>
						<p className='text-5xl font-extrabold'>03</p>
						<h3 className='text-[2.5rem] max-md:text-[1.8rem] max-md:my-4'>
							Blog Website Template
						</h3>
						<p className='text-gray-400 text-pretty'>
							I&quot;m Evren Shah Lorem Ipsum is simply dummy text of the
							printing and typesetting industry. Lorem Ipsum has been the
							industry&quot;s standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to specimen
							book.
						</p>
						<RiShareBoxLine className='text-[22px]' />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Projects;
