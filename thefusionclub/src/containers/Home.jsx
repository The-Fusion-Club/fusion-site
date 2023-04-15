import logo from '../resources/logo.png'
import arrow from '../resources/arrow.png'
import spaceDisco from '../resources/spacedisco.gif'
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    // hooks
    const [isExploding, setIsExploding] = useState(false);
    const navigate = useNavigate();

    // handlers
    const scrollNext = (n) => {
        if(isExploding) {
            window.scrollTo({
                top: n? n:window.innerHeight,
                left: 0,
                behavior: 'smooth',
            })
            return
        }
        setIsExploding(true)
        setTimeout(() => {
            window.scrollTo({
                top: n? n:window.innerHeight,
                left: 0,
                behavior: 'smooth',
            })
        }, 1000);
    }

    return(
        <main className='flex flex-col'>
            <section id='landing-page' className="disco-cursor bg-black flex flex-col h-screen justify-evenly items-center">
                <img src={logo} className="w-10/12 md:w-8/12 lg:w-6/12 rounded-2xl" alt="fusion logo"></img>
                <div onClick={() => {scrollNext(document.getElementById('landing-page').offsetHeight)}} className="text-white circle p-5 select-none font-bold text-sm md:text-md lg:text-lg gap-2 gelatine bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-white shadow-md w-max pad h-16 rounded-full flex justify-center items-center">
                    Start your
                    {isExploding && <ConfettiExplosion className='-ml-3' colors={['#FFFFFF', '#E500FF', '#5E4595', '#ff69b4']} duration={3000} width={500}/>}
                    &nbsp;journey
                    <img src={arrow} alt='arrow' className='w-7'></img>
                </div>
            </section>
            <section id='hero-section' className="flex flex-col-reverse lg:flex-row items-center w-full justify-center h-screen p-10 md:pr-0">
                <section className='text-black bg-white gap-5 select-none font-quest flex flex-col items-center lg:items-start lg:p-10 justify-center w-full h-full'>
                    <span className='animate-bounce text-4xl h-max w-full p-3 md:text-5xl lg:text-6xl text-center lg:text-left'>Our ideas come from <span className='text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-gray-600'>outer space!</span></span>
                    <div className='flex flex-row gap-5'>
                        <div onClick={() => {navigate('/events')}} className="circle p-5 select-none font-bold text-sm md:text-xl bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:shadow-black shadow-md w-max h-16 rounded-full flex justify-center items-center">
                            What ideas?
                        </div>
                        <div onClick={() => {navigate('/members')}} className="circle p-5 select-none font-bold text-sm md:text-xl bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:shadow-black shadow-md w-max h-16 rounded-full flex justify-center items-center">
                            Meet the aliens!
                        </div>
                    </div>
                </section>
                <img alt="disco ball" src={spaceDisco} className='flex w-12/12 md:w-6/12 xl:w-12/12 lg:w-8/12 h-50 lg:h-screen rounded-xl lg:rounded-none'></img>
            </section>
        </main>
    )
}

export default Home