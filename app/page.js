import About from './Components/About';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Rating from './Components/Rating';
import Solutions from './Components/Solutions';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Rating/>
      <Solutions/>
      <About/>
    </div>
  );
}
