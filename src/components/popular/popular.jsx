import travel from '../../assets/travel.jpeg'
import { LocateFixed } from 'lucide-react'
export default function Popular(){
    return(
        <div className='w-full h-fl65 bg-red-400 mt-24 relative'>
            <img src={travel} alt='travel' className='absolute w-full h-full'/>

            <div className='z-10 h-full w-2/5 absolute bg-white right-15p flex flex-col py-4 px-8 gap-4'>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <span>Popular Destinations</span>
                    <div className='w-12 border-orange-500 border-b-4'></div>
                </div>
                <h1 className='font-bold text-5xl w-3/4'>The best locations around the world for you</h1>
                <ul className='mt-12 flex flex-col gap-6'>
                    <li className='font-semibold flex flex-row gap-4  items-center'>
                        <div className='bg-orange-400 w-12 h-12 rounded-full justify-center items-center flex'>
                           <LocateFixed className='h-8 w-8 text-white'/>
                        </div>
                        <span>Austria (Europe)</span>
                    </li>
                    <li className='font-semibold flex flex-row gap-4  items-center'>
                        <div className='bg-orange-400 w-12 h-12 rounded-full justify-center items-center flex'>
                           <LocateFixed className='h-8 w-8 text-white'/>
                        </div>
                        <span>Bangkok (Asia)</span>
                    </li>
                    <li className='font-semibold flex flex-row gap-4  items-center'>
                        <div className='bg-orange-400 w-12 h-12 rounded-full justify-center items-center flex'>
                           <LocateFixed className='h-8 w-8 text-white'/>
                        </div>
                        <span>Canada (America)</span>
                    </li>
                    <li className='font-semibold flex flex-row gap-4  items-center'>
                        <div className='bg-orange-400 w-12 h-12 rounded-full justify-center items-center flex'>
                           <LocateFixed className='h-8 w-8 text-white'/>
                        </div>
                        <span>Dubai (Middle East)</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}