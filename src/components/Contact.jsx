import { Formik } from 'formik';
import * as Yup from 'yup';
const Contact = () => {
	const initialValues = {
		name: '',
		email: '',
		url: '',
		message: '',
	};

	const validationsSchema = Yup.object().shape({
		name: Yup.string().required('This input will be not empty!'),
		email: Yup.string()
			.email('Enter the valide email')
			.required('This input will be not empty'),
		url: Yup.string()
			.url('Enter the valide url')
			.required('This input will be not empty'),
		message: Yup.string()
			.max(255, 'The message will be less than 255 Characters')
			.required('This input will not be empty'),
	});
	return (
		<section className='my-[7rem] px-20 max-md:px-8 max-md:mb-5 max-md:mt-5'>
			<div className=' flex gap-10 max-sm:flex-col-reverse'>
				<Formik
					initialValues={initialValues}
					validationSchema={validationsSchema}
					onSubmit={(values, { resetForm }) => {
						console.log(values);
						// submitForm(values);
						resetForm();
					}}
				>
					{({ touched, errors, handleSubmit, getFieldProps, isSubmitting }) => (
						<form className=' w-1/2 max-md:w-full' onSubmit={handleSubmit}>
							<input
								className={`block w-full rounded-sm  mb-5 p-[12px] ring-2 ring-black/60 outline-0
									${
										touched.name && errors.name
											? 'ring-4 ring-red-700 bg-red-100 ring-opacity-60'
											: 'ring-2 ring-black/60'
									}
									`}
								type='text'
								name='name'
								placeholder='Your name'
								{...getFieldProps('name')}
							/>
							<input
								className={`block w-full rounded-sm  mb-5 p-[12px] ring-2 ring-black/60 outline-0
									${
										touched.email && errors.email
											? 'ring-4 ring-red-700 bg-red-100 ring-opacity-60'
											: 'ring-2 ring-black/60'
									}
									
									`}
								type='email'
								name='email'
								id=''
								placeholder='Your Email'
								{...getFieldProps('email')}
							/>
							<input
								className={`block w-full rounded-sm  mb-5 p-[12px] ring-2 ring-black/60 outline-0
									${
										touched.url && errors.url
											? 'ring-4 ring-red-700 bg-red-100 ring-opacity-60'
											: 'ring-2 ring-black/60'
									}
									`}
								type='url'
								name='url'
								id=''
								placeholder='Your website (if existe)'
								{...getFieldProps('url')}
							/>
							<textarea
								className={`block w-full mb-5  rounded-sm  p-[12px] ring-2 ring-black/60 outline-0 resize-none
									${
										touched.message && errors.message
											? 'ring-4 ring-red-700 bg-red-100 ring-opacity-60'
											: 'ring-2 ring-black/60'
									}
									
									`}
								name='message'
								id=''
								cols='30'
								rows={6}
								placeholder='How can i help?*'
								{...getFieldProps('message')}
							></textarea>
							<button
								disabled={isSubmitting}
								type='submit'
								className={`bg-black text-white px-[25px] py-[15px] flex items-center justify-center rounded-[5px] cursor-pointer hover:bg-black/80 transition-all ease-in-out duration-300 ${
									isSubmitting ? 'disabled:opacity-50 cursor-not-allowed' : ''
								}`}
							>
								Get in Touch
							</button>
						</form>
					)}
				</Formik>

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
