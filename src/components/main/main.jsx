import mainHotel from '../../assets/mainhotel2.jpg'
import Book from '../book/book'

export default function Main(){
    return(
        <div className='h-4/5 w-full flex flex-col relative items-center'>
            <img src={mainHotel} alt="Main Photo" className="h-full w-full absolute"/>
            <div className='select-none text-white z-10 absolute top-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
                <span className='text-white/60'>Stay - Relax - Repeat</span>
                <h1 className='text-7xl'>Step Into Serenity</h1>
                <h1 className='text-7xl'>Where <span className='text-orange-500'>Luxury</span> Feels Like <span className='text-orange-500'>Home</span></h1>
            </div>

            <Book/>
        </div>
    )
}