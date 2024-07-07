import React, { useContext, useState } from 'react'
import { assets } from "../assets/assets";
import { Context } from '../context/Context';
const Sidebar = () => {

  const [extended, setExtended] = useState(false);

  const { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context);

  const loadPrompt = async (prompt) =>
  {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <div className='sidebar font-outfit min-h-[100vh] hidden md:inline-flex flex-col justify-between bg-slate-100 p-4'>
      <div className="top">
        <img onClick={() => setExtended(!extended)} className='w-[24px] cursor-pointer' src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className="new-chat mt-10 inline-flex items-center gap-2 px-3 py-2 text-sm  bg-slate-200 rounded-full cursor-pointer">
          <img className='w-[18px] ' src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
    { extended ? 
        <div className="recent flex flex-col">
          <p className="recent-title mt-7 mb-5">
            Recent
            </p>
            {
              prevPrompts.map((item, index) =>
              {
                return (
              
          <div onClick={()=>loadPrompt(item)} className="recent-entry flex items-start gap-1 transition-all duration-300 rounded-full cursor-pointer hover:bg-slate-300 px-1 py-1 text-sm">
            <img className='w-[24px] cursor-pointer ' src={assets.message_icon} alt="" />
                    <p>{ item.slice(0,18)} ...</p>
          </div>
    
  )
})
}
        </div> : null}

      </div>


      <div className="bottom flex flex-col gap-2">
        <div className="help flex items-center gap-2  transition-all duration-300 rounded-full cursor-pointer hover:bg-slate-300 px-2 py-1 text-md">
          <img className='w-[22px] cursor-pointer' src={assets.question_icon} alt="" />
         {extended ? <p>Help</p> : null}
        </div>
        <div className="activity flex items-center gap-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-slate-300 px-2 py-1 text-md">
          <img className='w-[22px] cursor-pointer' src={assets.history_icon} alt="" />
         {extended ? <p>Activity</p> : null}
        </div>
        <div className="settings flex items-center gap-2  transition-all duration-300 rounded-full cursor-pointer hover:bg-slate-300 px-2 py-1 text-md ">
          <img className='w-[22px] cursor-pointer' src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>

    </div>
  )
}

export default Sidebar