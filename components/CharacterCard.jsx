import Card from 'react-bootstrap/Card';

const CharacterCard = props => {

    return (
        <div>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={props.characterImg}/>
                <Card.Body>
                <Card.Title><strong>{props.characterRank}</strong></Card.Title>
                    <Card.Text>
                        {props.characterName}
                    </Card.Text> 
                </Card.Body>
            </Card>
        </div>
    )
}

export default CharacterCard;