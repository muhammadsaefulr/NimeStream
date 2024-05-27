import Jumbotron from "./Jumbotron";
import LatestAnime from "./Latest";
import MostPopular from "./MostPopular";

const Home = () => {
  return (
    <>
      <section className="pt-3">
        <Jumbotron />
      </section>
      <section className="pt-6">
        <LatestAnime/>
      </section>
      <section className="pt-6">
        <MostPopular />
      </section>
    </>
  );
};

export default Home;
