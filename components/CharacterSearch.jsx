const CharacterSearch = props => {

    return (
        <div className="container">
            <div className="row">
                <form onSubmit={props.fetchName} className="form">
                    <input 
                        type="text" id="character" name="character" className="form-control col-sm" 
                        placeholder="Character name..." onChange={props.handleChange} value={props.name}>
                    </input>
                    <button type="submit" className="btn btn-warning col-sm-2">Search</button>
                </form>
                

            </div>
            <style jsx>{`
                .form {
                    margin: auto;
                    width: 60%;
                    display: flex;
                }
                input {
                    margin-right: 10px;
                }
            `}</style>
        </div>

        
    );
}

export default CharacterSearch