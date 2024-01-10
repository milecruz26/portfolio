import EmailIcon from "../../assets/image/email.svg";
import SmileIcon from "../../assets/image/linkedin.svg";
import GitHubIcon from "../../assets/image/github.svg";
import WhatsAppIcon from "../../assets/image/whatsapp.svg";
import "./style.css";

export const CircleIcon = () => {
  return (
    <div className="icons-divs">
      <div>
        <a href="https://www.linkedin.com/in/milecruz26/">
          <div className="circle-icon">
            <img src={SmileIcon} alt="icone-smile" />
          </div>
        </a>
        <h3>LinkedIn</h3>
        <h4>@milecruz26</h4>
      </div>

      <div>
        <a href="https://github.com/milecruz26">
          <div className="circle-icon">
            <img
              src={GitHubIcon}
              alt="icone-github"
              style={{ cursor: "pointer" }}
            />
          </div>
        </a>
        <h3>GitHub</h3>
        <h4>@milecruz26</h4>
      </div>
      <div>
        <a href="mailto:mile.criacoes2603@gmail.com">
          <div className="circle-icon">
            <img
              src={EmailIcon}
              alt="icone-email"
              style={{ cursor: "pointer" }}
            />
          </div>
        </a>
        <h3>E-mail</h3>
        <h4>mile.criacoes2603@gmail.com</h4>
      </div>
      <div>
        <a href="https://wa.me/85987830966">
          <div className="circle-icon">
            <img
              src={WhatsAppIcon}
              alt="icone-whatsapp"
              style={{ cursor: "pointer" }}
            />
          </div>
        </a>
        <h3>Telefone:</h3>
        <h4>85 98783 0966</h4>
      </div>
    </div>
  );
};
