import { easeOut, motion } from 'framer-motion';

import AboutLogo from '../assets/about-img.89866d8b (1).svg';
const About = () => {
	return (
		<section className='mt-20 py-4 lg:px-20 flex items-center justify-center lg:h-[95vh] max-md:min-h-screen  gap-5 max-md:grid max-md:grid-cols-1'>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1, ease: easeOut }}
				viewport={{ once: true }}
				className=' flex-1 flex items-center justify-center  h-full max-md:px-4'
			>
				<img
					src={AboutLogo}
					alt='Logo About of me'
					loading='lazy'
					className='w-full h-full object-contain'
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1.5, ease: easeOut }}
				viewport={{ once: true }}
				className=' flex-1 h-full w-full max-md:px-4'
			>
				<h2 className='text-center text-5xl capitalize font-light'>
					About <span className='font-black'>me</span>
				</h2>
				<div className='flex flex-col gap-4 mt-2'>
					<p className='font-normal'>
						I&quot;m a passionate, self-proclaimed designer who specializes in
						full stack development (React.js & Node.js). I am very enthusiastic
						about bringing the technical and visual aspects of digital products
						to life. User experience, pixel perfect design, and writing clear,
						readable, highly performant code matters to me.
					</p>
					<p className='font-normal text-ellipsis overflow-hidden max-md:order-1'>
						I began my journey as a web developer in 2015, and since then,
						I&#39;ve continued to grow and evolve as a developer, taking on new
						challenges and learning the latest technologies along the way. Now,
						in my early thirties, 7 years after starting my web development
						journey, I&#39;m building cutting-edge web applications using modern
						technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
						Supabase and much more.
					</p>
					<p>
						When I&#39;m not in full-on developer mode, you can find me hovering
						around on twitter or on indie hacker, witnessing the journey of
						early startups or enjoying some free time. You can follow me on
						Twitter where I share tech-related bites and build in public, or you
						can follow me on GitHub.
					</p>
				</div>
			</motion.div>
		</section>
	);
};
export default About;
