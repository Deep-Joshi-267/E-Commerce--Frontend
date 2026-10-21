import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Cta from "../components/Cta";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";



function Home() {
  return (
    <>
        <Hero />
        <FeaturedProducts />
        <Cta />
        <Reviews />
        <Footer />
    </>
  );
}

export default Home