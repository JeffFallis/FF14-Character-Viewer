import MemberCard from './MemberCard';

const CardList = props => {

    const createMemberCard = char => {
        return (  
            <MemberCard 
                characterImg={char.Avatar} 
                characterName={char.Name} 
                characterRank={char.Rank}
                characterId={char.ID}
                key={char.ID.toString()}
            />
        );
    };

    return (
        <div>
            <h1><strong>Members</strong></h1>
            <div className="list">
                {props.memberList.map(createMemberCard)}
            </div>

            <style jsx>{`
                .list {
                    display: flex;
                }
            `}</style>
        </div>

        
    )
}

export default CardList;