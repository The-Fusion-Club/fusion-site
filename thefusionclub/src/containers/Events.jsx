import upArrow from '../resources/angleup.png'
import downArrow from '../resources/angledown.png'
import { useState } from 'react'
import { eventlist } from '../eventlist'

const Events = () => {
    //hooks
    const [eventNumber, setEventNumber] = useState(0)
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
    return(
        <>
            <section className="h-screen w-100 bg-white flex flex-row">
                <aside className="md:flex p-5 hidden md:w-2/5 lg:w-2/6 bg-black justify-center">
                    <section className='h-full flex flex-col justify-around w-full bg-black rounded-lg pl-5 pr-5 border-gray-100'>
                        {
                            eventlist.map((item) => {
                                return( 
                                    <span>
                                        <img src="" alt="" />
                                        <h1 key={item.key} style={{color: item.key === eventNumber? 'rgb(171, 80, 255)': '', transition: '100ms'}} className='text-gray-500 w-full text-center md:text-left font-bold text-3xl lg:text-4xl'>{item.date}</h1>                                
                                    </span>
                                )
                            })
                        }
                    </section>
                </aside>
                <main className="flex flex-col items-center select-none justify-center gap-5 md:gap-10 w-full md:w-4/5 bg-white">
                    <button onClick={handlePrev} className="w-14 h-14 rounded-full bg-purple-500 shadow-lg hover:shadow-gray-500 flex justify-center items-center select-none">
                        <img src={upArrow} alt="up arrow" className='w-7' />
                    </button>
                    <section id='event-pane' className='flex rounded-lg trapped-background p-5 h-3/5 w-10/12'>
                        <section className='h-full flex flex-col gap-10 w-full bg-black rounded-md p-5 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'>
                            <h1 className='text-white w-full text-center md:text-left font-bold text-3xl lg:text-5xl'>{eventlist[eventNumber].name}</h1>
                            <span className='text-white text-md md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptas quos accusantium excepturi enim ullam voluptatum fuga ea eaque dignissimos. Eveniet, quod. Ullam vel, quod commodi vero facere magni aliquid.</span>
                        </section>
                    </section>
                    <button onClick={handleNext} className="w-14 h-14 rounded-full bg-purple-500 shadow-lg hover:shadow-gray-500 flex justify-center items-center select-none">
                        <img src={downArrow} alt="up arrow" className='w-7' />
                    </button>
                </main>
            </section>
        </>
    )
}

export default Events