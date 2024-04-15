import { useEffect } from "react";
import ButtonApp from "../button/button";
import '../../index.css'
export default function Header(){

    const distance = () => {
        var header = document.getElementById('header')
        if(window.scrollY > 0){
            header.classList.add('offset')
        }else{
            header.classList.remove('offset')
        }

        console.log('listener')
    }

    useEffect(() =>{
        window.addEventListener('scroll', distance)
    },[])

    return(
        <div id="header" className="offset w-screen h-20 fixed flex flex-row justify-between px-8 items-center z-10 text-white">
            <div className="text-5xl">
                ROYAL CORP
            </div>

            <div className="flex flex-row w-fit h-full">
                <ul className="flex flex-row gap-4 items-center">
                    <li className="header-li">Home</li>
                    <li className="header-li">About</li>
                    <li className="header-li">Popular</li>
                    <li className="header-li">Explore</li>
                    <li className="header-li">Contact</li>
                </ul>
            </div>

            <ButtonApp text='Book Now'/>
        </div>
    )
}