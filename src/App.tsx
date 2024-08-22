import { useContext } from 'react';
import CardBack from './components/CardBack';
import CardFront from './components/CardFront';
import FormCard from './components/FormCard';
import { CardContext } from './context/CardContext';

function App() {
  const { isFrontVisible } = useContext(CardContext);
  return (
    <>
      <main
        className={`flex justify-center items-center max-lg:flex-col min-h-screen w-full p-2 md:p-24 bg-hero bg-cover bg-center bg-no-repeat`}
      >
        <div className="p-4 rounded-xl w-full md:w-96 h-96 group [perspective:1000px] overflow-hidden">
          <article
            className={`flex flex-col justify-center items-center w-full h-full  rounded-2xl relative [transform-style:preserve-3d] transition-all duration-1000 [transform-origin:center_center] 
              group-hover:[transform:rotateY(180deg)] ${
                isFrontVisible ? '' : '[transform:rotateY(180deg)]'
              }`}
          >
            <div className="absolute flex justify-center items-center inset-0 [backface-visibility:hidden]  backdrop-blur-md h-max my-auto">
              <CardFront />
            </div>
            <div className="absolute flex justify-center items-center inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] h-max  my-auto">
              <CardBack />
            </div>
          </article>
        </div>
        <section>
          <FormCard />
        </section>
      </main>
    </>
  );
}

export default App;
