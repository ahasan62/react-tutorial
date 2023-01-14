function ProfileCard(props) { 
    return (
        <div>
            <div className="card">
            <div className="card-image">
            <figure className="image is-48x48">
                <img src={props.image}/>
                </figure>
            </div>
            <div class="media-content">
            <div> {props.title}</div>
            <div> {props.handle}</div>
      </div>
    </div>
    </div>
    );

}
export default ProfileCard;
