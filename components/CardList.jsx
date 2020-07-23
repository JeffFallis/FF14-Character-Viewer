import CharacterCard from '../components/CharacterCard';

const CardList = props => {

    const createCharacterCard = char => {
        return (
            <div className="card">
                <CharacterCard 
                    characterImg={char.Avatar} 
                    characterName={char.Name} 
                    characterRank={char.Rank}
                />

                <style jsx>{`
                    .card {
                        margin-right: 10px;
                    }
                `}</style>
            </div>
        );
    };

    return (
        <div className="list">
            {props.characterList.map(createCharacterCard)}

            <style jsx>{`
                .list {
                    display: flex;
                }
            `}</style>
        </div>

        
    )
}

export default CardList;