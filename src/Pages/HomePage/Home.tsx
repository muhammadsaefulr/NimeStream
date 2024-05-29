import Jumbotron from "./Jumbotron";
import LatestAnime from "./Latest";

const Home = () => {
  return (
    <>
      <section className="pt-3">
        <Jumbotron />
      </section>
      <section className="pt-6">
        <LatestAnime/>
      </section>
    </>
  );
};

export default Home;
