
function ProfilePicture() {

    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8ruwjf0T59uJxzbfrQct6hfVeigpDm6aMjysy3UFpgh4gH3QtQGqVvY&s'

    const handleClick = (e) => {
        e.target.style.display = "none";
    }

    return(
        <img onClick={(e) => handleClick(e)} className="card-image" src={imageUrl} alt="profile picture" ></img>
    )
}

export default ProfilePicture;