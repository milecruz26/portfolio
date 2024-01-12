import datas from "./datas";
import "./styles.css";

export const SkillContainer = () => {
  return (
    <div className="container-skils">
      {datas.map((img) => (
        <div key={img.id} className="card-skill">
          <img src={img.src} alt={img.alt} />
          <h3>{img.name}</h3>
        </div>
      ))}
    </div>
  );
};
