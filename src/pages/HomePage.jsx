import { useSelector } from "react-redux"
import Sidebar from "../components/Sidebar"
import SearchIcon from '@mui/icons-material/Search';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubble from "../components/ChatBubble";
const HomePage = () => {
  const chats = useSelector((state)=>state.chat.selectedChats);
  return (
    <div className=" grid grid-cols-12 w-full h-full dark:bg-gray-800 dark:text-white">
      <div className=" col-span-4 border border-r ">
      <Sidebar/>
      </div>
      <div className=" col-span-8">
       <header className=" p-2 flex items-center justify-between border border-b">
      <div>
      <p className=" font-bold">name</p>
      <p className=" text-gray-400">1,582 subscribers</p>
      </div>
      <div className=" flex gap-2 items-center">
      <SearchIcon className=" text-gray-400"/>
      <CropSquareIcon className=" text-gray-400"/>
      <MoreVertIcon className=" text-gray-400"/>

      </div>
       </header>
       <div className="overflow-y-scroll h-screen w-full telegram-bg">
        {
          chats?.map((chat,i)=>{
            return (
             <ChatBubble key={i} chat={chat}/>
            )
          })

        }
       </div>
      </div>

    </div>
  )
}

export default HomePage