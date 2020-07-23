import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const CharacterViewer = props => {

    return (
        <div className="container">
            <Image src={props.info.Portrait} width="60%"/>
            <div className="container">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title><strong>{props.info.Name}</strong><small><small> ({props.info.Server})</small></small></Card.Title>
                        <Card.Text>
                             
                             
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
            <style jsx>{`
                .container {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

export default CharacterViewer;