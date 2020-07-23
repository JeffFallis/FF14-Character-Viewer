import CharacterViewer from './CharacterViewer';
import FreeCompanyInfo from './FreeCompanyInfo';

const Profile = props => {
    return (
        <div>
            <div className="jumbotron">
                <CharacterViewer info={props.profile.Character}/>
                {props.profile.FreeCompany ? <FreeCompanyInfo info={props.profile}/> : null}
            </div>

            <style jsx>{`
                .jumbotron {
                    margin-top: 30px;
                }
            `}</style>
        </div>   
    );
}

export default Profile;