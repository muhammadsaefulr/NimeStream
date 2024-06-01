import PlayerVideo from "./ReactPlayer";

const PlayAnime = () => {
  return (
    <section className="mx-3">
      <div className="lg:flex md:block">
        <div>
          <PlayerVideo />
        </div>
        <div className="lg:mx-4 visible lg:w-1/3 md: unvisible md: w-full">
          <h2 className="text-white font-semibold lg:pt-0 md: pt-3">
            Semua Episode
          </h2>
          <ul className="lg:grid grid-cols-3 gap-6 md: flex justify-between gap-x-3 pt-4 overflow-x-scroll">
            <button className="btn bg-green-400 text-white">1</button>
            <button className="btn bg-green-400 text-white">1</button>
            <button className="btn bg-green-400 text-white">1</button>
            <button className="btn bg-green-400 text-white">1</button>
            <button className="btn bg-green-400 text-white">1</button>
            <button className="btn bg-green-400 text-white">1</button>
            <button className="btn bg-green-400 text-white">1</button>
            <button className="btn bg-green-400 text-white">1</button>
            <button className="btn bg-green-400 text-white">1</button>
            <button className="btn bg-green-400 text-white">1</button>
          </ul>
        </div>
      </div>
      <div className="pt-6 lg:flex justify-between md:block">
        <div className="block">
          <h2 className="text-white font-semibold text-2xl truncate">
            Dummy Sub Indo
          </h2>
          <div>
            <div className="flex gap-x-3 pt-3 text-white">
              <p className="text-lg">Episode Dummy</p>
              <p>•</p>
              <p className="text-lg">Setiap Dumy</p>
            </div>
          </div>
        </div>
        <div className="flex lg:mx-4 md:m-0 pt-4 justify-center text-white">
          <select className="select select-bordered lg: w-full">
            <option disabled selected>
              Select Resolution
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </div>
      <div className="py-4">
        <div className="">
          <p>
            Dulu, ada seorang bajak laut terkenal di seluruh lautan bernama Gol
            D. Roger. Ia merupakan seorang raja bajak laut yang telah berlayar
            mengarungi seluruh Grand Line, sayangnya ia ditangkap pemerintah dan
            telah dieksekusi mati. Sesaat sebelum kematiannya, Ia mengumumkan
            kepada dunia bahwa dirinya menyimpan sebuah harta karun bernama One
            Piece, sebuah harta karun yang kini menjadi incaran seluruh bajak
            laut yang ada di dunia.Di Era Bajak Laut saat ini
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlayAnime;
