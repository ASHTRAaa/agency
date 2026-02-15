
import './ServiceCard.css';
const ServiceCard = ({title,image,features}) => {
  return (
    <div className="service-card">
      <div className="image-wrapper">
        <img src={image} alt={title}  />
      </div>

      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="features">
        {features.map((item, index) => (
          <div key={index} className="feature-item">
            <span></span>
            <p> {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard
