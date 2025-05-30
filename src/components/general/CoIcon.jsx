const CoIcon = ({ icon, text }) => {
    return (
        <div className="co-icon">
            <img src={icon} alt="Icon" />
            <span className="co-icon__text">{text}</span>
        </div>
    );
};

export default CoIcon;