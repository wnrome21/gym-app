import React, { useState } from "react";

export default function Hero() {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto">
        <div className="flex flex-col gap-4">
      <p>IT'S TIME TO FUNCTION RIGHT</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl">Functionally <span className="text-blue-400 font-medium">Fit</span></h1>
      </div>
      <p className="text-sm md:text-base font-light">I want to unlock my body's true functions.</p>
      <button onClick={() => {handleCount()}} className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">Accept & Begin{count}</button>
    </div>
  );
}
