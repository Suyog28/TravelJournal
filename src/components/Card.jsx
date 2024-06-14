import Logo from "../assets/bence.jpg"
import Location from "../assets/location.png"


export default function Card(props) {
    return (
        <div className="cards">
            <div className="card">
                <img src={Logo} alt="cardImages" className="cardImage" />

                <div className="cityDetails">
                    <div className="stats">
                        <img src={Location} alt="location" className="Location" />
                        <p className="city">{props.item.location}</p><a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.item.title}</h1>
                    <h4>{props.item.startDate} - {props.item.endDate}</h4>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>
            <div className="line"></div>
        </div >

    )
}