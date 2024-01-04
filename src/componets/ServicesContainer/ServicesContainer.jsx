export const ServicesContainer = ({ className, srcImg, service }) => {
  return (
    <div className={className}>
      <img src={srcImg} alt="" />
      <h3>{service}</h3>
    </div>
  );
};
