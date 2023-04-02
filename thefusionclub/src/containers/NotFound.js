import disco from '../resources/disco.gif'

const NotFound = () => {
    return(
        <>
            <main style={notFoundStyle}>
                <img src={disco} alt='disco ball' style={{ width: '50vw', maxWidth: '400px' }}/>
                <h1>404 Not Found</h1>
            </main>
        </>
    )
}

export default NotFound

const notFoundStyle = {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
}