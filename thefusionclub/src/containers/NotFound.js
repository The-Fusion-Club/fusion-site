import disco from '../resources/disco.gif'

const NotFound = () => {
    return(
        <main className='flex flex-col w-screen h-screen justify-center items-center gap-10 bg-black text-white'>
            <div className='flex justify-center'>
                <img src={disco} alt='disco ball' className='w-6/12 md:w-8/12'/>
            </div>
            <h1 className='text-xl md:text-2xl w-8/12 font-bold text-center text-pink-400'>We could not find what you were looking for ¯\_(ツ)_/¯</h1>
        </main>
    )
}

export default NotFound

// const notFoundStyle = {
//     width: '100vw',
//     minHeight: '100vh',
//     backgroundColor: 'black',
//     color: 'white',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '50px',
// }