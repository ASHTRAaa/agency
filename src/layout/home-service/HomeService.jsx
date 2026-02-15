import "./HomeService.css";
import ServiceCard from "../../components/service-card/ServiceCard";
import web from "../../assets/website.png";
import ai from "../../assets/ai.png";
import mobiledev from "../../assets/mobiledev.png";

const servicesData = [
  {
    id: 1,
    title: "Mobile Development",
    image: mobiledev,
    features: [
      "Native & Hybrid Apps",
      "State Management",
      "API Integration",
      "Offline Data Handling",
    ],
},
     {
    id: 2,
    title: "Web Development",
    image: web,
    features: [
      "React applications",
      "Node backend",
      "REST APIs",
      "Performance optimisation"
    ]
  },
  {
    id: 3,
    title: "AI Solutions",
    image: ai,
    features: [
      "Predictive Analytics",
      "Process Automation",
      "Conversational AI",
      "Computer Vision"
    ]
  
  },
];
const HomeService = () => {
  return (
    <div className="main-container">
      <div className="service-texts">
        <h2>Services for your growth</h2>
        <p>
          All our services are designed to help you achieve steady growth and
          build a sustainable business that doesn’t rely solely on referrals.
        </p>
      </div>

      <div className="service-container">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            image={service.image}
            features={service.features}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeService
