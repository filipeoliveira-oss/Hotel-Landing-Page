import DealHotel from "../dealHotel/dealHotel";
import lh1 from '../../assets/lh1.jpg'
import lh2 from '../../assets/lh2.jpg'
import lh3 from '../../assets/lh3.jpg'
import lh4 from '../../assets/lh4.jpg'
export default function Deal(){
    return(
        <div className="mt-24 flex flex-col justify-center items-center">
            <div className="w-4/5 ">
                <div className="flex flex-row justify-start items-center gap-4">
                    <span>DEAL OF THE DAY</span>
                    <div className='w-12 border-orange-500 border-b-4 '></div>
                </div>
                <h1 className="text-7xl font-semibold mt-4 w-2/3">Where Relaxation Meets Luxury</h1>
                {/* flex flex-row w-full gap-8 mt-16 justify-start items-center */}
                <div className="grid grid-cols-deal gap-8 auto-cols-deal mt-16 ">
                    <DealHotel image={lh1} title={'Sea Princess Hotel'} price={199}/>
                    <DealHotel image={lh2} title={'Sahara Star Hotel'} price={299}/>
                    <DealHotel image={lh3}  title={'Hotel Kuria Residency'} price={399}/>
                    {/* <DealHotel image={lh4}  title={'Dubai Residency'} price={600}/> */}
                </div>
            </div>
            
        </div>
    )
}