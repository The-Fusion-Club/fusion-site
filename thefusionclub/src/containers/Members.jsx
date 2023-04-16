import { useState } from "react";
import Card from "../components/Card";
import { teamsList } from '../teamslist';
import { useNavigate } from "react-router-dom";

const Members = () => {

    // hooks
    const [teamNumber, setTeamNumber] = useState(0)
    const navigate = useNavigate()

    return(
        <section className="h-max flex flex-col items-center justify-center">
            <aside className="h-100 gap-10 cursor-pointer bg-white flex flex-row items-center justify-center py-5 md:py-10">
            <h1 onClick={() => navigate('/')} className='hidden md:flex text-black text-center font-bold text-xl'>← Back</h1>
                <nav className="flex select-none flex-row text-[11px] md:text-lg lg:text-xl md:h-16 md:gap-3 lg:gap-5 bg-black h-12 rounded-full p-2 md:p-3 lg:p-3 items-center gap-1 justify-center text-white">
                    {
                        teamsList.map((item) => {
                            return(
                                <h6 onClick={() => setTeamNumber(item.key)} style={teamNumber===item.key? activeNavStyle:{}} className="rounded-full hover:bg-gray-700 md:px-3 p-2 text-center">{item.menuName}</h6>
                            )
                        })
                    }
                </nav>
            </aside>
            <main id="members-pane" className="bg-white w-full flex flex-row flex-wrap py-5 md:px-10 gap-10 md:gap-20 items-center justify-center">
                {
                    teamsList[teamNumber].members.map((item) => {
                        return <Card member={item} colors={teamsList[teamNumber].colors}/>
                    })
                }
            </main>
        </section>
    )
}

const activeNavStyle = {
    transition: '100ms',
    backgroundColor: 'white',
    color: 'black',
    transform: 'scale(1.05)',
}

export default Members