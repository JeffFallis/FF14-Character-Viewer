const ProfileInfoCard = props => {

    return (
        <div className="profile-info">
            <p><strong>Active members:</strong> {props.info.ActiveMemberCount}</p>
            <p><strong>Server:</strong> {props.info.Server} <em>({props.info.DC})</em></p>
            <p><strong>Estate:</strong> {props.info.Estate.Name ? props.info.Estate.Name : <em>Not owned</em>}</p>

            <style jsx>{`
                .profile-info p {
                    margin-bottom: 0px;
                }
            `}</style>
        </div>
    );
}

export default ProfileInfoCard;

