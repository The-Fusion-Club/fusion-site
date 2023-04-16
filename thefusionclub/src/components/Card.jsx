import linkedinIcon from '../resources/linkedin.png'
import mailIcon from '../resources/email.png' 

const Card = ({ member, colors }) => {
    return(
        <section className="group select-none perspective justify-center bg-transparent flex w-[150px] md:w-[300px] h-[200px] md:h-[400px] rounded-lg">
            <div className="relative text-black preserve-3d group-active:flip-card w-full h-full duration-1000 rounded-lg">
                <div style={{borderColor: colors.border}} className="absolute border-2 shadow-lg shadow-gray-300 flex flex-col backface-hidden bg-white w-full h-full rounded-lg">
                    <div className="h-3/6 rounded-md flex items-center justify-center">
                        <img className="max-h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQSBjC9t3L5RCvSOe-RT8_GGruQVXfgCdtg&usqp=CAU" alt="profile" />
                    </div>
                    <div className="flex h-3/6 flex-col rounded-md p-2 md:p-3 lg:px-5 justify-around">
                        <div>
                            <h1  style={{color: colors.text}} className="text-[12px] md:text-xl lg:text-2xl font-bold">{member.name}</h1>
                            <h1  style={{color: colors.text}} className="text-[11px] md:text-lg lg:text-xl">{member.designation}</h1>
                        </div>
                        <div className='flex items-center justify-between p-1'>
                            <div className='flex flex-row gap-3 md:gap-5'>
                                <a href={member.socials.linkedin}><img className='max-w-[20px] md:max-w-[32px]' src={linkedinIcon} alt="linkedin" /></a>
                                <a href={member.socials.email}><img className='max-w-[20px] md:max-w-[32px]' src={mailIcon} alt="linkedin" /></a>
                            </div>
                            <h6 style={{backgroundColor: colors.border}} className='justify-center text-white font-bold w-max p-1 md:p-3 flex items-center rounded-full text-xs'><span className='hidden md:flex'>About&nbsp;</span>↗️</h6>
                        </div>
                    </div>
                </div>
                <div style={{borderColor: colors.border}} className="absolute backface-hidden border-[1px] flip-card w-full h-full rounded-lg"></div>
            </div>
        </section>
    )
}

export default Card