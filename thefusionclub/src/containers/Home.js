import logo from '../resources/logo.png'

const Home = () => {
    return(
        <>
            <header className="App flex flex-col w-screen h-screen justify-center items-center gap-5 bg-black text-white">
                <img src={logo} className="w-8/12" alt="fusion logo"></img>
                <h6 className='w-8/12 md:text-2xl text-center text-xl font-bold'>We're building something exciting for you soon!</h6>
            </header>
        </>
    )
}

export default Home