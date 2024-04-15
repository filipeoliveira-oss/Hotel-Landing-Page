import ButtonApp from "../button/button";
import { Heart, Send, Bookmark} from 'lucide-react'

export default function DealHotel({title, price, image}){
    return(
        <div className="h-128 bg-white w-23 rounded-2xl pb-4 shadow-lg shadow-black/30">
            <div className="h-1/2 rounded-2xl relative ">
                <img src={image} alt={`image-${image}`} className="h-full w-full rounded-t-2xl "/>
                <div className="absolute bottom-2 right-4 gap-2 flex flex-row">
                <button className="w-8 h-8 rounded-full bg-white cursor-pointer flex justify-center items-center"><Heart className="w-2/3 h-2/3"/></button>
                <button className="w-8 h-8 rounded-full bg-white cursor-pointer flex justify-center items-center"><Bookmark className="w-2/3 h-2/3"/></button>
                <button className="w-8 h-8 rounded-full bg-white cursor-pointer flex justify-center items-center"><Send className="w-2/3 h-2/3"/></button>
                </div>
            </div>
            <div className="h-full  flex flex-col gap-4 px-4 mt-4">
                <h1 className="font-bold">{title}</h1>
                <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, minus.</span>
                <span >Starting from <span className="font-bold">${price}/night</span></span>
                <ButtonApp text={'Book Now'}/>
            </div>
        </div>
    )
}