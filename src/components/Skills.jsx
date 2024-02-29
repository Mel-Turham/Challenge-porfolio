import { BiLogoJavascript } from 'react-icons/bi';
import {
	FaNodeJs,
	FaSass,
	FaReact,
	FaBootstrap,
	FaHtml5,
	FaCss3,
	FaGitAlt,
	FaGithub,
	FaFigma,
} from 'react-icons/fa6';

const Skills = () => {
	return (
		<section className='lg:px-20'>
			<h2 className='text-center text-5xl capitalize my-20'>
				my <span className='text-black font-black '>skills</span>
			</h2>

			<div className=' grid grid-cols-5  max-md:grid-cols-3 max-sm:grid-cols-2 justify-items-center gap-y-10 max-sm:gap-5 lg:mb-5'>
				<article className='max-w-[186px] max-h-[186px] w-full rounded-[4px] border-[2px] border-black  hover:text-white hover:bg-black transition-all ease-out delay-100 cursor-pointer flex items-center justify-center p-6 gap-8 flex-col'>
					<BiLogoJavascript className='text-[4.5rem]  group-hover:text-white' />
					<p className='text-xl font-bold '>JavaScript</p>
				</article>

				<article className='max-w-[186px] max-h-[186px] w-full rounded-[4px] border-[2px] border-black  hover:text-white hover:bg-black transition-all ease-out delay-100 cursor-pointer flex items-center justify-center p-6 gap-8 flex-col'>
					<FaNodeJs className='text-[4.5rem]  group-hover:text-white' />
					<p className='text-xl font-bold '>Nodejs</p>
				</article>
				<article className='max-w-[186px] max-h-[186px] w-full rounded-[4px] border-[2px] border-black  hover:text-white hover:bg-black transition-all ease-out delay-100 cursor-pointer flex items-center justify-center p-6 gap-8 flex-col'>
					<FaSass className='text-[4.5rem]  group-hover:text-white' />
					<p className='text-xl font-bold '>Sass/ Scss</p>
				</article>
				<article className='max-w-[186px] max-h-[186px] w-full rounded-[4px] border-[2px] border-black  hover:text-white hover:bg-black transition-all ease-out delay-100 cursor-pointer flex items-center justify-center p-6 gap-8 flex-col'>
					<FaReact className='text-[4.5rem]  group-hover:text-white' />
					<p className='text-xl font-bold '>React js</p>
				</article>
				<article className='max-w-[186px] max-h-[186px] w-full rounded-[4px] border-[2px] border-black  hover:text-white hover:bg-black transition-all ease-out delay-100 cursor-pointer flex items-center justify-center p-6 gap-8 flex-col'>
					<FaBootstrap className='text-[4.5rem]  group-hover:text-white' />
					<p className='text-xl font-bold '>Bootstrap</p>
				</article>
				<article className='max-w-[186px] max-h-[186px] w-full rounded-[4px] border-[2px] border-black  hover:text-white hover:bg-black transition-all ease-out delay-100 cursor-pointer flex items-center justify-center p-6 gap-8 flex-col'>
					<FaHtml5 className='text-[4.5rem]  group-hover:text-white' />
					<p className='text-xl font-bold '>HTML5</p>
				</article>
				<article className='max-w-[186px] max-h-[186px] w-full rounded-[4px] border-[2px] border-black  hover:text-white hover:bg-black transition-all ease-out delay-100 cursor-pointer flex items-center justify-center p-6 gap-8 flex-col'>
					<FaCss3 className='text-[4.5rem]  group-hover:text-white' />
					<p className='text-xl font-bold '>CSS3</p>
				</article>
				<article className='max-w-[186px] max-h-[186px] w-full rounded-[4px] border-[2px] border-black  hover:text-white hover:bg-black transition-all ease-out delay-100 cursor-pointer flex items-center justify-center p-6 gap-8 flex-col'>
					<FaGitAlt className='text-[4.5rem]  group-hover:text-white' />
					<p className='text-xl font-bold '>Git</p>
				</article>
				<article className='max-w-[186px] max-h-[186px] w-full rounded-[4px] border-[2px] border-black  hover:text-white hover:bg-black transition-all ease-out delay-100 cursor-pointer flex items-center justify-center p-6 gap-8 flex-col'>
					<FaGithub className='text-[4.5rem]  group-hover:text-white' />
					<p className='text-xl font-bold '>Githup</p>
				</article>
				<article className='max-w-[186px] max-h-[186px] w-full rounded-[4px] border-[2px] border-black  hover:text-white hover:bg-black transition-all ease-out delay-100 cursor-pointer flex items-center justify-center p-6 gap-8 flex-col'>
					<FaFigma className='text-[4.5rem]  group-hover:text-white' />
					<p className='text-xl font-bold '>Figma</p>
				</article>
			</div>
		</section>
	);
};
export default Skills;
