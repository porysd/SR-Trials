
function ProfilePic(){
    const image = './src/assets/pikachu.png'

    const handleClick = (e) => {

        e.target.style.display = 'none';
        console.log('You clicked on the image');
    }

    return (
        <img src={image} alt="pikachu" onClick={(e) => handleClick(e)}/>
    );


}

export default ProfilePic