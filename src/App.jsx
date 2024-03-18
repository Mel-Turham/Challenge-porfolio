import About from './components/About';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

function App() {
	return (
		<main className='min-w-[382px]  max-w-[1440px]  mx-auto w-full py-0'>
			<Navbar />
			<Hero />
			<Skills />
			<Experiences />
			<About />
			<Projects />
			<Testimonials />
			<Contact/>
			<Footer/>
		</main>
	);
}

export default App;
