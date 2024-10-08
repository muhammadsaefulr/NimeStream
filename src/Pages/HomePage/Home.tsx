import Jumbotron from "./Jumbotron";
import LatestAnime from "./Latest";
import { Search } from "../../components/SearchBarMobile";

const Home = () => {
  return (
    <>
      <section className="pt-3">
        <Jumbotron />
      </section>
      <section className="pt-2 mt-8" >
        <Search/>
      </section>
      <section className="pt-6">
        <LatestAnime/>
      </section>
    </>
  );
};

export default Home;
