import Google from '../assets/google-icon.585bd0ef.svg';
import Apple from '../assets/apple-icon.46fb71d7 (1).svg';
import Youtube from '../assets/youtube-icon.72197f18 (1).svg';

const Experiences = () => {
	return (
		<section className='max-md:mt-9 max-lg:mt-9 lg:mt-[8rem] lg:py-[60px] w-full lg:px-20 flex flex-col items-center gap-7 bg-black text-white max-md:pb-[2rem]'>
			<h1 className='text-center text-5xl max-md:text-[1.9887rem]  capitalize lg:my-20  font-light  max-lg:py-4 max-md:py-4 max-md:mt-8'>
				My <span className='font-black '>Experiences</span>
			</h1>
			<div className='w-full flex items-center flex-col max-md:gap-5 lg:gap-8'>
				<article className='w-[85%] border-[.2px] border-solid hover:bg-zinc-800 transition-all border-gray-100 py-[35px] px-[40px] max-md:px-[20px] rounded-md flex flex-col gap-5'>
					<div className='flex items-center justify-between flex-wrap'>
						<div className=' flex items-center gap-[1.4rem] '>
							<img src={Google} alt='Google image' loading='lazy' />
							<span className='max-sm:text-[14px] uppercase text-md text-emerald-50 tracking-wider font-semibold'>
								Lead Software engenieer at Google
							</span>
						</div>
						<span className=' text-gray-500 font-semibold max-md:mt-3'>
							Nov 2019 - Present
						</span>
					</div>
					<p className=' max-md:text-sm leading-7 lg:pt-4 w-full'>
						As a Senior Software Engineer at Google, I played a pivotal role in
						developing innovative solutions for Google&quot;s core search
						algorithms. Collaborating with a dynamic team of engineers, I
						contributed to the enhancement of search accuracy and efficiency,
						optimizing user experiences for millions of users worldwide.
					</p>
				</article>

				<article className='w-[85%] border-[.2px] border-solid hover:bg-zinc-800 transition-all border-gray-100 py-[35px] px-[40px] max-md:px-[20px] rounded-md flex flex-col gap-5'>
					<div className='flex items-center justify-between flex-wrap'>
						<div className=' flex items-center gap-[1.4rem] '>
							<img src={Apple} alt='Google image' loading='lazy' />
							<span className='max-sm:text-[14px] uppercase text-md text-emerald-50 tracking-wider font-semibold'>
								Junior Software Engineer at Apple
							</span>
						</div>
						<span className=' text-gray-500 font-semibold max-md:mt-3'>
							Nov 2019 - Present
						</span>
					</div>
					<p className=' max-md:text-sm leading-7 lg:pt-4 w-full'>
						During my tenure at Apple, I held the role of Software Architect,
						where I played a key role in shaping the architecture of
						mission-critical software projects. Responsible for designing
						scalable and efficient systems, I provided technical leadership to a
						cross-functional team.
					</p>
				</article>
				<article className='w-[85%] border-[.2px] border-solid hover:bg-zinc-800 transition-all border-gray-100 py-[35px] px-[40px] max-md:px-[20px] rounded-md flex flex-col gap-5'>
					<div className='flex items-center justify-between flex-wrap'>
						<div className=' flex items-center gap-[1.4rem] '>
							<img src={Youtube} alt='Google image' loading='lazy' />
							<span className='max-sm:text-[14px] uppercase text-md text-emerald-50 tracking-wider font-semibold'>
								Software Engineer at Youtube
							</span>
						</div>
						<span className=' text-gray-500 font-semibold max-md:mt-3'>
							Nov 2019 - Present
						</span>
					</div>
					<p className=' max-md:text-sm leading-7 lg:pt-4 w-full'>
						At Youtube, I served as a Software Engineer, focusing on the design
						and implementation of backend systems for the social media
						giant&quote;s dynamic platform. Working on projects that involved
						large-scale data processing and user engagement features, I
						leveraged my expertise to ensure seamless functionality and
						scalability.
					</p>
				</article>
			</div>
		</section>
	);
};
export default Experiences;
