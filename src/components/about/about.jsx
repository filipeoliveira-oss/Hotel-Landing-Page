import about from '../../assets/about.jpg'
import ButtonApp from '../button/button'

export default function About(){
    return(
        <div className="flex flex-row mt-24 h-96 w-full justify-center items-center">
            <div className='h-full w-1/2 flex justify-center items-center'>
                <img src={about} alt='about' className=' w-1/2'/>
            </div>
            <div className='flex flex-col w-1/2  -translate-x-36 gap-8'>
                <div className='flex flex-row items-center gap-4'>
                    <span>ABOUT US</span>
                    <div className='w-12 border-orange-500 border-b-4 '></div>
                </div>
                <div className='flex flex-col gap-8 '>
                    <h1 className='font-bold text-5xl'>A Whole New Level of Hospitality</h1>
                    <span className='w-3/4 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nemo ipsum quod nulla. Necessitatibus itaque consectetur quae tenetur commodi doloribus possimus soluta aperiam quas. Fuga nulla et ratione, minima ab at, aliquam impedit soluta, quam eligendi officiis laudantium sed magni quisquam est odio neque molestias sequi earum quaerat inventore a?</span>
                    <ButtonApp text={'Read More'}/>
                </div>
            </div>
        </div>
    )
}