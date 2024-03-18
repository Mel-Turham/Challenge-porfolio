const Contact = () => {
	return (
		<section className='my-[7rem] px-20 max-md:px-8 max-md:mb-5 max-md:mt-5'>
			<div className=' flex gap-10 max-sm:flex-col-reverse'>
				<form className=' w-1/2 max-md:w-full'>
					<input
						className='block focus:ring-2 focus:ring-black rounded-sm w-full mb-5 p-[12px] ring-2 ring-black/60 outline-0 '
						type='text'
						name='name'
						id=''
						placeholder='Your name'
					/>
					<input
						className='block w-full focus:ring-2 focus:ring-black rounded-sm  mb-5 p-[12px] ring-2 ring-black/60 outline-0'
						type='email'
						name='email'
						id=''
						placeholder='Your Email'
					/>
					<input
						className='block w-full focus:ring-2 focus:ring-black rounded-sm  mb-5 p-[12px] ring-2 ring-black/60 outline-0'
						type='url'
						name='url'
						id=''
						placeholder='Your website (if existe)'
					/>
					<textarea
						className='block w-full mb-5 focus:ring-2 focus:ring-black rounded-sm  p-[12px] ring-2 ring-black/60 outline-0 resize-none'
						name='message'
						id=''
						cols='30'
						rows={6}
						placeholder='How can i help?*'
					></textarea>
					<button
						type='submit'
						className='bg-black text-white px-[25px] py-[15px] flex items-center justify-center rounded-[5px] cursor-pointer hover:bg-black/80 transition-all ease-in-out duration-300'
					>
						Get in Touch
					</button>
				</form>
				<div className=' flex flex-col w-1/2 max-md:w-full'>
					<h2 className='text-[3rem] max-md:text-[1.8rem] font-bold'>
						Let&apos;s talk for something special😁!
					</h2>
					<p className='text-[18px] max-md:text-[15px] text-black/50'>
						I seek to push the limits of creativity to create high-engaging,
						user-friendly, and memorable interactive experiences.
					</p>
					<h3 className='text-start text-[1.5rem] max-md:text-[.8rem] font-semibold mt-3'>
						Youremail@gmail.com
					</h3>
				</div>
			</div>
		</section>
	);
};
export default Contact;
