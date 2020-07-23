const ProfileTitle = props => {

    return (
        <div className="profile-title">
            <img src={props.info.Crest[1]}></img>
            <div className="name">
                <h1 className="display-3">{props.info.Name}</h1>
                <p className="tag">{props.info.Tag}</p>
            </div>

            <style jsx>{`
                .name {
                    display: flex;
                    padding-top: 20px;
                }
                .profile-title {
                    display: flex;
                }
                .tag {
                    margin-left: 10px;
                    padding-top: 50px;
                }
            `}</style>
        </div>
    )
}

export default ProfileTitle;