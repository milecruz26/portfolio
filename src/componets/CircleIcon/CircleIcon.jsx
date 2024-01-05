import EmailIcon from "../../assets/image/email.svg";
import SmileIcon from "../../assets/image/smile.svg";
import GitHubIcon from "../../assets/image/github.svg";
import WhatsAppIcon from "../../assets/image/whatsapp.svg";
import "./style.css";

export const CircleIcon = () => {
  return (
    <div className="icons-divs">
      <div>
        <div className="circle-icon">
          <img src={SmileIcon} alt="" />
        </div>
        <h3>Meu nome</h3>
        <h4>Jamile Cruz</h4>
      </div>

      <div>
        <div className="circle-icon">
          <img src={GitHubIcon} alt="" />
        </div>
        <h3>GitHub</h3>
        <h4>@milecruz26</h4>
      </div>
      <div>
        <div className="circle-icon">
          <img src={EmailIcon} alt="" />
        </div>
        <h3>E-mail</h3>
        <h4>mile.criacoes2603@gmail.com</h4>
      </div>
      <div>
        <div className="circle-icon">
          <img src={WhatsAppIcon} alt="" />
        </div>
        <h3>Telefone:</h3>
        <h4>85 98783 0966</h4>
      </div>
    </div>
  );
};
