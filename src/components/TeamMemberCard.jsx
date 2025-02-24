

const TeamMemberCard = ( {person} ) => {
    return (
        <div >
            <h2>{person.name}</h2>
            <h3>{person.jobTitle}</h3>
        </div>
    )
}

export default TeamMemberCard;