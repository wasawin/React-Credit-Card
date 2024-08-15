import CardFront from './components/CardFront';

function App() {
  return (
    <>
      <main className=" flex justify-center items-center min-h-screen w-full   ">
        <div className="border border-black p-4 rounded-xl bg-blue-50 w-full h-96 ">
          <article className="flex flex-col justify-center items-center  w-full rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500">
            <CardFront />
          </article>
        </div>
      </main>
    </>
  );
}
export default App;
