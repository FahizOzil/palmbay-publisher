import About from './Components/About';
import Apart from './Components/Apart';
import Culture from './Components/Culture';
import GetStartedSection from './Components/GetStartedSection';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Process from './Components/Process';
import PublishingServices from './Components/PublishingServices';
import Rating from './Components/Rating';
import Solutions from './Components/Solutions';
import TruePublishingPartner from './Components/TruePublishingPartner';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Rating/>
      <Solutions/>
      <About/>
      <Culture/>
      <Apart/>
      <TruePublishingPartner/>
      <PublishingServices/>
      <Process/>
      <GetStartedSection/>
    </div>
  );
}
