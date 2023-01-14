function ProfileCard(props) { 
    return (
        <div>
    <img src={props.image}/>

    <div>Title is {props.title}</div>
    <div>Handle is {props.handle}</div>
    </div>
    );

}
export default ProfileCard;
