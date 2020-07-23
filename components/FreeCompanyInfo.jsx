import CardList from './CardList';
import ProfileInfoCard from './ProfileInfoCard';
import ProfileTitle from './ProfileTitle';

const FreeCompanyInfo = props => {

    return (
        <div>
            <ProfileTitle info={props.info.FreeCompany}/>
            <ProfileInfoCard info={props.info.FreeCompany} />
            
            <hr className="my-3"></hr>

            <CardList memberList={props.info.FreeCompanyMembers}/>
        </div>
    );
};

export default FreeCompanyInfo;