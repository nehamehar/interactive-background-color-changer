import { useState } from "react"
import Footer from "./Footer"; 
function App() {
  const [color, setcolor] = useState("pink") //as use of state reflect on screen //color is current value of state//setcolor allow you to update the state// as we passesd usestate (0), so the color initial value is 0
  return (
    <div className="flex flex-col min-h-screen duration-500" style={{ backgroundColor: color }}>
  {/* Main content area */}
  <div className="flex-grow">
    <div className="fixed inset-x-0 flex flex-wrap justify-center w-40 px-1 text-white h-[763px] pb-28 py-9 gap-7 bg-gray-800">
      <h2 className="h-4 pb-6 text-2xl font-extralight">COLORS</h2>
      <button onClick={() => setcolor("red")} className="px-10 py-2 bg-red-800 border-black rounded-3xl hover:bg-slate-700 border-s-8 border-y-4">RED</button>
      <button onClick={() => setcolor("yellow")} className="py-1 bg-yellow-700 border-black px-7 rounded-3xl hover:bg-slate-700 border-s-8 border-y-4">YELLOW</button>
      <button onClick={() => setcolor("orange")} className="py-2 bg-orange-700 border-black px-7 rounded-3xl hover:bg-slate-700 border-s-8 border-y-4">ORANGE</button>
      <button onClick={() => setcolor("blue")} className="px-10 py-2 border-black bg-sky-500 rounded-3xl hover:bg-slate-700 border-s-8 border-y-4">BLUE</button>
      <button onClick={() => setcolor("purple")} className="py-2 border-black px-9 rounded-3xl hover:bg-slate-700 border-s-8 border-y-4 bg-violet-700">PURPLE</button>
      <button onClick={() => setcolor("green")} className="py-2 border-black bg-lime-700 px-9 rounded-3xl hover:bg-slate-700 border-s-8 border-y-4">GREEN</button>
    </div>
  </div>

  {/* Footer pinned to bottom */}
  <footer className="flex items-center justify-between w-full px-3 py-1.5 text-xs bg-gray-800 text-slate-500">
    <p className="ml-[1105px]">
      Made with ❤️ by{" "}
      <a
        href="mailto:nehamehar31@gmail.com"
        className="text-base hover:text-blue-600 text-slate-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Neha
      </a>
    </p>
    <a
      href="https://github.com/nehamehar/interactive-background-color-changer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="text-white mr-36 fa-brands fa-github hover:text-slate-700 text-[28px]"></i>
    </a>
  </footer>
</div>
  )}

export default App