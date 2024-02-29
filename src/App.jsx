import About from './components/About';
import Experiences from './components/Experiences';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
	return (
		<main className='min-w-[382px]  max-w-[1440px]  mx-auto w-full py-0'>
			<Navbar />
			<Hero />
			<Skills/>
			<Experiences/>
			<About/>
			<Projects/>
		</main>
	);
}

export default App;
