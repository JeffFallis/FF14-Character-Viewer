const ProfileInfoCard = props => {

    return (
        <div className="profile-info">
            <p><strong>Active members: {props.info.ActiveMemberCount}</strong></p>
            <p><strong>Server: {props.info.Server}</strong></p>
            <p><strong>Estate: {props.info.Estate.Name ? props.info.Estate.Name : <em>Not owned</em>}</strong></p>

            <style jsx>{`
                .profile-info p {
                    margin-bottom: 0px;
                }
            `}</style>
        </div>
    );
}

export default ProfileInfoCard;

