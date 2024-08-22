import { useContext } from 'react';
import CardBack from './components/CardBack';
import CardFront from './components/CardFront';
import FormCard from './components/FormCard';
import { CardContext } from './context/CardContext';

function App() {
  const { isFrontVisible } = useContext(CardContext);

  return (
    <>
      <main className="flex justify-center items-center max-lg:flex-col min-h-screen w-full p-2 md:p-24 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="border border-black p-4 rounded-xl w-full md:w-96 h-96 group [perspective:1000px] overflow-hidden">
          <article
            className={`flex flex-col justify-center items-center w-full h-full rounded-2xl relative [transform-style:preserve-3d] transition-all duration-1000 [transform-origin:center_center] 
              hover:[transform:rotateY(180deg)] ${
                isFrontVisible ? '' : '[transform:rotateY(180deg)]'
              }`}
          >
            <div className="absolute flex justify-center items-center inset-0 [backface-visibility:hidden]">
              <CardFront />
            </div>
            <div className="absolute flex justify-center items-center inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <CardBack />
            </div>
          </article>
        </div>
        <aside>
          <FormCard />
        </aside>
      </main>
    </>
  );
}

export default App;
