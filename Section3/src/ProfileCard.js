function ProfileCard(props) { 
    return (

            <div className="card">
            <div className="card-image">
            <figure className="image is-1by1">
                <img src={props.image}/>
                </figure>
            </div>
            <div class="media-content">
            <div> {props.title}</div>
            <div> {props.handle}</div>
            <div class="content">

            <div> {props.bio}</div>
            </div>
      </div>
    </div>

    );

}
export default ProfileCard;
