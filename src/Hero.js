export default function Hero(props){
    return(
        <div className="hero">
            <img className="hero-img" src={props.item.img} alt="" />
            <div className="hero-content">
                <div className="my-content">
                <i class="fa-solid fa-location-dot location"></i>
                <h6 className="hero-country">{props.item.country}</h6>
                <p className="hero-span">View on Google Map</p>
                </div>
                <h2>{props.item.place}</h2>
                <p className="hero-date">{props.item.date}</p>
                <p className="hero-details">{props.item.details}</p>

            </div>
        </div>
    )
}