import React from 'react'

function TextHome(props) {
  return (
    <div className="relative px-2 md:px-5  w-full h-auto flex items-center justify-center  ">
    <div className="min-x-md max-w-2xl">
      <div className="text-center">
        <h1 className="mt-10 font-bold text-white text-3xl md:text-5xl lg:text-5xl xl:text-7xl backdrop-shadow-lg drop-shadow-md shadow-black tracking-wide  text-shadow-lg uppercase" >{props.con}</h1>
        {/* <p className="mt-6 text-base md:text-lg lg:leading-8 text-shadow-lg font-thin text-white brightness-75">Ahlussuffa deals with many activities to build up high qualified Islamic scholars under Ahlussunnah wal Jama’a. Our intention is to keep up the way of Prophet Muhammed (S.A.W).</p> */}
      </div>
    </div>
  </div>
  )
}

export default TextHome
