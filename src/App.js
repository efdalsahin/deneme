import Header from "./components/Header";
import HeroAction from "./components/HeroAction";
import Services from "./components/Services";
import NeedUs from "./components/NeedUs";
import BestQuality from "./components/BestQuality";
import PetekImage from "./components/PetekImage";
import HeroSlider from "./components/HeroSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <HeroAction />
      <PetekImage />
      <HeroSlider />
      <Services />
      <NeedUs />
      <BestQuality />
      <Footer />
    </div>
  );
}

export default App;
