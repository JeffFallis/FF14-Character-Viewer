import CardList from '../components/CardList';
import ProfileInfoCard from '../components/ProfileInfoCard';

const Profile = props => {
    return (
        <div>
            <div className="jumbotron">
                <div id="profile-title">
                    <img src={props.profile.FreeCompany.Crest[1]}></img>
                    <div className="name">
                        <h1 className="display-3">{props.profile.FreeCompany.Name}</h1>
                        <p className="tag">{props.profile.FreeCompany.Tag}</p>
                    </div>
                    
                </div>
                
                <ProfileInfoCard info={props.profile.FreeCompany} />
                
                <hr className="my-4"></hr>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>

                <CardList characterList={props.profile.FreeCompanyMembers}/>
            </div>

            <style jsx>{`
                .name {
                    display: flex;
                    padding-top: 20px;
                }
                .jumbotron {
                    margin-top: 30px;
                }
                .tag {
                    margin-left: 10px;
                    padding-top: 50px;
                }
                #profile-title {
                    display: flex;
                }
            `}</style>
        </div>   
    );
}

export default Profile;