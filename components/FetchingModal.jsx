import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FetchingModal = props => {

    // Close modal
    function closeModal() {
        props.setFetching(false);
    }

    return (
        <div>
            <Modal show={props.fetching} onHide={closeModal} animation={true} >
                <Modal.Body>
                    <div className="container">
                        <div className="center">
                            <h2>Fetching Free Company data...</h2>
                        </div>
                        <div className="center">
                            <Button variant="warning" onClick={closeModal}>This may take a moment</Button>  
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <style jsx>{`
            .center {
                text-align: center;
            }
            `}</style>
        </div>
    )
}

export default FetchingModal;