import CardsTemplates from "./CardsTemplates";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <div className="background-black noise-[100, 20, 5];">
      <Header />
      <CardsTemplates />
      <Footer />
    </div>
  );
};

export default Home;
