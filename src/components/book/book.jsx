import { Calendar, UserRound } from "lucide-react"
import ButtonApp from "../button/button"

export default function Book(){
    return(
        <div className="bg-white shadow-md shadow-black/30 w-5/6 h-28 absolute bottom-0 translate-y-1/2 rounded-3xl flex flex-row justify-evenly items-center">
            <div className="flex flex-row gap-4 justify-center items-center">
                <Calendar className="text-orange-500  h-10 w-10"/>
                <div className="flex flex-col gap-4">
                    <span>CHECK-IN</span>
                    <input type="date"  className="outline-none"></input>
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
                <Calendar className="text-orange-500  h-10 w-10"/>
                <div className="flex flex-col gap-4">
                    <span>CHECK-OUT</span>
                    <input type="date" className="outline-none"></input>
                </div>
            </div>

            <div className="flex flex-row gap-4 justify-center items-center">
                <UserRound className="text-orange-500 h-10 w-10"/>
                <div className="flex flex-col gap-4">
                    <span>GUESTS</span>
                    <input type="number" className="outline-none" placeholder="0"></input>
                </div>
            </div>

           <ButtonApp text='Book Now'/>
        </div>
    )
}