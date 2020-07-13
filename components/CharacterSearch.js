const CharacterSearch = () => {
    return (
        <div className="container">
            <div className="row">
                <label htmlFor="character" className="col-sm-3">Character Name: </label>
                <input type="text" id="character" name="character" className="form-control col-sm"></input>
                <button className="btn btn-warning col-sm-2">Search</button>
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