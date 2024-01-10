import "./style.css";
export const ServicesContainer = ({ srcImg, service, alt }) => {
  return (
    <div className="container-service">
      <img src={srcImg} alt={alt} className="icon-service" />
      <h3>{service}</h3>
    </div>
  );
};
