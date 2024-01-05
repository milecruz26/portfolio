import "./style.css";
export const ServicesContainer = ({ className, srcImg, service, alt }) => {
  return (
    <div className={className}>
      <img src={srcImg} alt={alt} className="icon-service" />
      <h3>{service}</h3>
    </div>
  );
};
