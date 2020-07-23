import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

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
                            <h2>Gathering data...</h2>
                        </div>
                        <div className="center">
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>  
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