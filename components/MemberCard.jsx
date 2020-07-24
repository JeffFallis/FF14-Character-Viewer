import Card from 'react-bootstrap/Card';

const MemberCard = props => {

    return (
        <div className="container">
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={props.characterImg}/>
                <Card.Body>
                    <Card.Title><strong>{props.characterName}</strong></Card.Title>
                    <Card.Subtitle>{props.characterRank}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MemberCard;