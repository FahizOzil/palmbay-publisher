import About from './Components/About';
import Culture from './Components/Culture';
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
      <Culture/>
    </div>
  );
}
