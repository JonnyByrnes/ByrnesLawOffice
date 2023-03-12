import familyPicture from "../photos/familyPicture.jpg";

function AboutUs(props) {

    return (
        <div className="body">
            <div className="body-title">
            
                About Us!
                <br/>
                <br/>
                <img src={familyPicture} alt="The Byrnes Family" className="title-photo"/>
                
            </div>
        </div>
    );
}
export default AboutUs;