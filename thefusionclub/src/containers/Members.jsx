import { useState } from "react"

const Members = () => {

    // hooks
    const [teamNumber, setTeamNumber] = useState(0)

    return(
        <section className="w-screen h-screen flex flex-col items-center justify-center">
            <aside className="h-100 bg-white flex flex-row w-full items-center justify-center p-2">
                <nav className="flex flex-row w-max text-xs md:w-11/12 bg-black h-12 rounded-full p-2 items-center gap-0 justify-center text-white">
                    <h6 onClick={() => setTeamNumber(0)} style={teamNumber===0? activeNavStyle:{}} className="rounded-full p-2 text-center">Event</h6>
                    <h6 onClick={() => setTeamNumber(1)} style={teamNumber===1? activeNavStyle:{}} className="rounded-full p-2 text-center">Outreach</h6>
                    <h6 onClick={() => setTeamNumber(2)} style={teamNumber===2? activeNavStyle:{}} className="rounded-full p-2 text-center">Tech</h6>
                    <h6 onClick={() => setTeamNumber(3)} style={teamNumber===3? activeNavStyle:{}} className="rounded-full p-2 text-center">Finance</h6>
                    <h6 onClick={() => setTeamNumber(4)} style={teamNumber===4? activeNavStyle:{}} className="rounded-full p-2 text-center">Operations</h6>
                    <h6 onClick={() => setTeamNumber(5)} style={teamNumber===5? activeNavStyle:{}} className="rounded-full p-2 text-center">Content</h6>
                </nav>
            </aside>
            <main id="members-pane" className="h-5/6 bg-purple-500 flex w-full"></main>
        </section>
    )
}

const activeNavStyle = {
    backgroundColor: 'white',
    color: 'black',
}

export default Members