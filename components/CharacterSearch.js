import FetchingModal from '../components/FetchingModal';

const CharacterSearch = props => {

    

    return (
        <div className="container">
            <div className="row">
                <input 
                    type="text" id="character" name="character" className="form-control col-sm" 
                    placeholder="Character name..." onChange={props.handleChange} value={props.name}>
                </input>
                <button className="btn btn-warning col-sm-2" onClick={props.fetchName}>Search</button>
            </div>

            <style jsx>{`
                * {
                    margin: auto;
                    width: 75%;
                }
                input {
                    margin-right: 10px;
                }
            `}</style>
        </div>

        
    );
}

export default CharacterSearch