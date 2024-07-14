import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { drawerOptions } from '../constants';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
const DrawerComponent = () => {
  return (
    <div>
        <header>
            <p className=" rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center w-8 h-8 p-2 text-sm font-semibold text-white">KR</p>
            <div className="info flex justify-between items-center">
                <div>
                    <p className=" font-bold text-xs">Kritika Rajput</p>
                    <p className=" text-blue-500 text-xs">set Emoji Status</p>
                </div>
                <ExpandMoreIcon />
                
                
            </div>
        </header>
        <div className="options">
            {
                drawerOptions.map((item,index)=>{
                    return (
                        <div key={index} className="option gap-4 flex items-center">
                            <p>{item.label}</p>
                            {item.icon}
                        </div>
                    )
                })
            }
        </div>
        <div className='theme'>
            <BedtimeOutlinedIcon/>
            <p>Night Mode</p>
            
        </div>
    </div>
  )
}

export default DrawerComponent