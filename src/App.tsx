import CardBack from './components/CardBack';
import CardFront from './components/CardFront';

function App() {
  return (
    <>
      <main className=" flex justify-center items-center min-h-screen w-full   ">
        <div className="border border-black p-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 w-full h-96 group [perspective:1000px] ">
          <article
            className="flex flex-col justify-center items-center  w-full h-full rounded-2xl  relative
          [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)] transition-all duration-1000 [transform-origin:center_center]
          "
          >
            <div className="absolute  flex justify-center items-center inset-0 [backface-visibility:hidden]">
              <CardFront />
            </div>
            <div className="absolute  flex justify-center items-center inset-0  [transform:rotateY(180deg)]  [backface-visibility:hidden]">
              <CardBack />
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
export default App;
