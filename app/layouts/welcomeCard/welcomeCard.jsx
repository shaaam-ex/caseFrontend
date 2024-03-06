import './welcomeCard.css';

export default function WelcomeCard(props) {
    return (
        <>
            <div className="main-container-welcome-card">
                <img src={props.img} alt="" />
                <div className="details-container-welcome-card">
                    <h2>{props.name}</h2>
                    <p>{props.details}</p>
                </div>
            </div>
        </>
    )
}