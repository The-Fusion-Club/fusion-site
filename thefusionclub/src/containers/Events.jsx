import upArrow from '../resources/angleup.png'
import downArrow from '../resources/angledown.png'
import { useState } from 'react'
import { eventlist } from '../eventlist'
import { useNavigate } from 'react-router-dom'

const Events = () => {
    //hooks
    const [eventNumber, setEventNumber] = useState(0)
    const navigate = useNavigate()
    // handlers
    const handlePrev = () => {
        const pane = document.getElementById('event-pane')
        pane.style.opacity = 0
        const temp = eventNumber===0? eventlist.length-1: eventNumber - 1
        setEventNumber(temp)
        setTimeout(() => {
            pane.style.opacity = 100
        }, 300);
    }
    const handleNext = () => {
        const pane = document.getElementById('event-pane')
        pane.style.opacity = 0
        const temp = eventNumber===eventlist.length-1? 0: eventNumber + 1
        setEventNumber(temp)
        setTimeout(() => {
            pane.style.opacity = 100
        }, 300);
    }
    const changeEvent = (number) => {
        setEventNumber(number)
    }
    return(
        <>
            <section className="h-screen w-100 bg-white flex flex-row">
                <aside className="md:flex p-5 select-none hidden md:w-2/6 lg:w-1/5 bg-black justify-center">
                    <nav className='h-full flex flex-col justify-around w-full bg-black rounded-lg pl-5 pr-5 border-gray-100'>
                    <h1 onClick={() => navigate('/')} style={activeDateStyle} className='text-gray-500 cursor-pointer w-full text-center md:text-left font-bold text-xl'>← Back</h1>
                        {
                            eventlist.map((item) => {
                                return( 
                                    <span>
                                        <img src="" alt="" />
                                        <h1 onClick={() => changeEvent(item.key)} key={item.key} style={item.key === eventNumber? activeDateStyle:{}} className='text-gray-500 w-full text-center md:text-left font-bold text-3xl'>{item.date}</h1>                                
                                    </span>
                                )
                            })
                        }
                    </nav>
                </aside>
                <main className="flex flex-col items-center select-none justify-center gap-5 md:gap-10 w-full md:w-4/5 bg-white">
                    <button onClick={handlePrev} className="w-14 md:hover:animate-bounce h-14 rounded-full bg-purple-500 shadow-lg hover:shadow-gray-500 flex justify-center items-center select-none">
                        <img src={upArrow} alt="up arrow" className='w-7' />
                    </button>
                    <section id='event-pane' className={'flex rounded-lg p-5 h-3/5 w-10/12 ' + eventlist[eventNumber].background}>
                        <section className='h-full flex flex-col gap-10 w-full bg-slate-900 rounded-md p-5 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100'>
                            <h1 className='w-full text-center md:text-left font-bold text-3xl lg:text-5xl'>{eventlist[eventNumber].name}</h1>
                            <h1 className='w-full text-center md:text-left font-bold text-xl lg:text-3xl'>{eventlist[eventNumber].date}</h1>
                            <span className='text-white text-md md:text-xl text-center md:text-left'>{eventlist[eventNumber].description}</span>
                        </section>
                    </section>
                    <button onClick={handleNext} className="w-14 h-14 md:hover:animate-bounce rounded-full bg-purple-500 shadow-lg hover:shadow-gray-500 flex justify-center items-center select-none">
                        <img src={downArrow} alt="up arrow" className='w-7' />
                    </button>
                </main>
            </section>
        </>
    )
}

const activeDateStyle = {
    color: 'rgb(171, 80, 255)',
    transform: 'scale(1.05)',
    transition: '100ms'
}

export default Events