import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Context } from '../context/Context';
import './Main.css';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const handleCardClick = (prompt) => {
    setInput(prompt);
    onSent(prompt);
  }

  return (
    <div className='font-outfit flex-1 relative min-h-screen md:min-h-[100vh] p-2'>
      <div className="nav flex items-center justify-between p-3">
        <div className="logo flex flex-col items-center">
          <img className='w-[12vw] md:w-[4vw]' src="./logo.png" alt="" />
          <h1 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-teal-500'>Promptify</h1>
        </div>

        <img className='w-[12vw] md:w-[3vw] rounded-full' src={assets.user_icon} alt="" />
      </div>
      <div className="main-container mx-auto space-y-6 md:max-w-[900px]">

        {!showResult ? <>
          <div className="greet flex items-start justify-center flex-col gap-1 text-4xl font-medium md:text-6xl">
            <p className='text-transparent bg-gradient-to-r from-indigo-400 via-slate-500 to-red-600 bg-clip-text'>Hello, Dev.</p>
            <p className='text-gray-300 text-2xl'>How can I help you today?</p>
          </div>

          <div className="cards grid gap-2 p-4 pt-2 md:grid-cols-4 space-y-2 md:space-y-0">
            <div onClick={() => handleCardClick('Suggest beautiful places to see on an upcoming road trip')} className="card1 relative h-[20vw] md:h-[15vw] p-2 md:p-4 cursor-pointer bg-gray-200 rounded-xl hover:shadow-md hover:shadow-teal-900 ease-in duration-300">
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img className='absolute bottom-3 right-3 w-8 bg-white rounded-full px-1 py-1' src={assets.compass_icon} alt="" />
            </div>

            <div onClick={() => handleCardClick('Briefly summarize this concept: urban planning')} className="card2 relative h-[20vw] md:h-[15vw] p-3 md:p-4 cursor-pointer bg-gray-200 rounded-xl hover:shadow-md hover:shadow-teal-900 ease-in duration-300">
              <p>Briefly summarize this concept: urban planning</p>
              <img className='absolute bottom-3 right-3 w-8 bg-white rounded-full px-1 py-1' src={assets.bulb_icon} alt="" />
            </div>

            <div onClick={() => handleCardClick('Brainstorm team bonding activities for our work retreat')} className="card3 relative h-[20vw] md:h-[15vw] p-2 md:p-4 cursor-pointer bg-gray-200 rounded-xl hover:shadow-md hover:shadow-teal-900 ease-in duration-300">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img className='absolute bottom-3 right-3 w-8 bg-white rounded-full px-1 py-1' src={assets.message_icon} alt="" />
            </div>

            <div onClick={() => handleCardClick('Tell me about React js and React native')} className="card4 relative h-[20vw] md:h-[15vw] p-2 md:p-4 cursor-pointer bg-gray-200 rounded-xl hover:shadow-md hover:shadow-teal-900 ease-in duration-300">
              <p>Tell me about React js and React native</p>
              <img className='absolute bottom-3 right-3 w-8 bg-white rounded-full px-1 py-1' src={assets.code_icon} alt="" />
            </div>
          </div>
        </>

          :
          <div className='result md:py-4 py-4 md:px-3 h-[70vh] overflow-y-scroll'>
            <div className="result-title flex items-center  gap-3 capitalize my-6">
              <img className='w-11 rounded-full' src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start md:gap-6 ">
              {loading ? <img className='w-7 h-7 animate-[spin_3s_infinite_linear]' src='./gemini_sparkle.svg' alt="" /> : <img className='w-10 h-10' src={assets.gemini_icon} alt="" /> }
              {
                loading ?
                  <div className='loader flex items-start flex-col w-full gap-3'>
                    <hr className=' bg-gradient-to-r from-cyan-400 via-slate-100 to-cyan-300 rounded-md h-6 md:size-[65vw 0vw] size-[82vw]' />
                    <hr className=' bg-gradient-to-r from-cyan-400 via-slate-100 to-cyan-300 h-6 rounded-md md:size-[65vw 0vw] size-[82vw]' />
                    <hr className=' bg-gradient-to-r from-cyan-400 via-slate-100 to-cyan-300 h-6 rounded-md md:size-[65vw 0vw] size-[82vw]' />
                  </div>
                  :
                  <p className='py-2 text-[17px] leading-8' dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>

        }

        <div className="bottom absolute bottom-0 md:bottom-6 max-w-[350px] md:max-w-[900px] mx-auto px-4 py-1 md:px-1 w-full">
          <div className="search-box flex items-center justify-between gap-2 bg-gray-200 rounded-full px-2 py-1">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className='flex-1 p-2 outline-none bg-transparent' placeholder='Enter a Prompt here..' />
            <div className="images flex items-center justify-center gap-1 cursor-pointer">
              <img className='w-5 h-5 md:w-6 md:h-6' src={assets.gallery_icon} alt="" />
              <img className='w-5 h-5 md:w-6 md:h-6' src={assets.mic_icon} alt="" />
              {input ? <img onClick={() => onSent()} className='w-5 h-5 md:w-6 md:h-6' src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info pt-2 text-xs text-center font-light md:text-sm">
            Promptify may display inaccurate info, including about people, so double-check its responses. Your privacy and Promptify Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;

