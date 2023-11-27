import React from "react";

function App() {

  return (
  <body>
    <div className="pl-[1rem] pr-[3rem] py-10 md:pr-[5rem] lg:pr-[7rem] xl-[12rem]">
      <p className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-medium">Welcome to Mahathaan – where design, tech, and marketing unite. We're not your regular agency; we're the creators of tomorrow. At Mahathaan, our goal is simple: craft stunning designs, leverage tech, and boost market presence. But it's not just about services – we're dream weavers and product builders too. Whether it's growing your brand or bringing a concept to life, Mahathaan is your creative partner. Let's turn your vision into reality, where innovation knows no bounds.</p>
    </div>
    <div className="grid grid-rows-2 gap-5 justify-center mt-10 w-full bg-black py-5">
        <div className="flex justify-center gap-5 mt-5">
        <a className="cursor-pointer" href="https://www.x.com/mahathaan" target="_blank" rel="noreferrer"><img className='w-[32px]' src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1701064034/Mahathaan/brand-x_2_m4quj0.png" alt="Twitter X - Logo"></img></a>
        <a className="cursor-pointer" href="https://www.linkedin.com/company/mahathaan/" target="_blank" rel="noreferrer"><img className='w-[32px]' src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1701064036/Mahathaan/brand-linkedin_1_dezmoe.png" alt="Linkedin - Logo"></img></a>
        <a className="cursor-pointer" href="mailto:info@mahathaan.com" target="_blank" rel="noreferrer"><img className='w-[32px]' src="https://res.cloudinary.com/dtqdoinxc/image/upload/v1701064038/Mahathaan/mail_1_qgjtje.png" alt="Mailto - Icon"></img></a>
        </div>
        <span className="font-display text-lg font-medium text-white">Craft Your Brand Today, Get in Touch!</span></div>
        <footer className="px-5 pb-5 bg-black">
          <img src='https://res.cloudinary.com/dtqdoinxc/image/upload/v1701064642/Mahathaan/Vector_2_kukbsp.png' className="w-full" alt="Mahathaan - Primary Logo"></img>
        </footer>
  </body>
  );
  
}

export default App;