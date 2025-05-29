import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="flex flex-col min-h-screen duration-500" style={{ backgroundColor: color }}>
  {/* Main layout wrapper */}
  <div className="flex flex-col flex-grow md:flex-row">
    
    {/* Sidebar */}
    <div className="flex flex-row items-start w-full h-auto gap-2 p-4 text-white md:z-14 md:fixed md:flex-col md:items-center md:w-40 md:h-screen md:gap-10 bg-neutral-900 md:py-20">
      <h2 className="hidden text-lg font-extrabold md:text-2xl md:block"></h2>
      <button onClick={() => setColor("maroon")} className="py-1 bg-red-800 w-14 md:text-base md:font-extrabold md:py-3 md:w-28 rounded-xl hover:bg-slate-700">RED</button>
      <button onClick={() => setColor("chocolate")} className="w-20 py-1 bg-orange-600 md:text-base md:font-extrabold md:py-3 md:w-28 rounded-xl hover:bg-slate-700">ORANGE</button>
      <button onClick={() => setColor("teal")} className="w-20 py-1 bg-teal-600 md:text-base md:font-extrabold md:py-3 md:w-28 rounded-xl hover:bg-slate-700">TEAL</button>
      <button onClick={() => setColor("blue")} className="w-12 py-1 bg-blue-700 md:text-base md:font-extrabold md:py-3 md:w-28 rounded-xl hover:bg-slate-700">BLUE</button>
      <button onClick={() => setColor("purple")} className="w-20 py-1 bg-purple-800 md:text-base md:font-extrabold md:py-3 md:w-28 rounded-xl hover:bg-slate-700">PURPLE</button>
      <button onClick={() => setColor("olive")} className="w-20 py-1 font-light md:text-base md:font-extrabold md:py-3 md:w-28 bg-lime-700 rounded-xl hover:bg-slate-700">GREEN</button>
    </div>

    {/* Main content */}
    <div className="flex-grow px-6 pt-10 md:pt-14 md:ml-56">
      <div className="flex flex-col mt-10">
        <h1 className="text-3xl font-extrabold text-slate-200">Color Picker</h1>
        <p className="text-lg mt-7 text-slate-200">Choose a color from the sidebar to change the background.</p>
      </div>
    </div>
  </div>

  {/* Footer */}
  <footer className="flex flex-wrap items-center justify-between w-full px-4 py-5 text-sm text-slate-400 bg-neutral-900">
    <p className="flex items-center gap-1 mx-auto md:ml-[160px] md:mx-0">
      Made with <span className="text-lg text-red-500 animate-pulse">❤️</span> by{" "}
      <a href="mailto:nehamehar31@gmail.com" className="text-xl text-slate-200" target="_blank" rel="noopener noreferrer">Neha</a>
    </p>
    <a
      href="https://github.com/nehamehar/interactive-background-color-changer"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto mt-0 md:mr-36 md:mx-0 md:mt-0"
    >
      <i className="fa-brands fa-github text-white text-[28px]"></i>
    </a>
  </footer>
</div>
  )
}
export default App; 