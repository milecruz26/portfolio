import "./styles.css";
import EmailIcon from "../../assets/image/email.svg";
import SmileIcon from "../../assets/image/smile.svg";
import InstagramIcon from "../../assets/image/instagram.svg";
import PhoneIcon from "../../assets/image/phone.svg";
import MenuSand from "../../assets/image/menu-hamburguer.svg";

export const Home = () => {
  return (
    <div className="container">
      <header>
        <h2>Portfólio</h2>
        <img src={MenuSand} alt="" />
      </header>
      <main>
        <section className="apresetation-section">
          <h1>Olá, eu sou a Jamile Cruz </h1>
          <h3>Desenvolvedora FullStack e Front-End</h3>
          <div>
            <button className="download-cv-btn">Download CV</button>
            <button className="contact-btn">Entrar em contato</button>
          </div>
        </section>
        <section className="about-me-section">
          <h1>Sobre Mim</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            maxime exercitationem hic vel quasi quos quis illum expedita quam
            facilis soluta atque, omnis dicta temporibus nihil, accusantium sunt
            praesentium molestias natus voluptatem voluptate perspiciatis!
            Minima itaque deleniti iste, nulla mollitia eum labore debitis
            aliquid incidunt officia aperiam cumque minus tempore?
          </p>
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
                <img src={InstagramIcon} alt="" />
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
                <img src={PhoneIcon} alt="" />
              </div>
              <h3>Telefone:</h3>
              <h4>85 98783 0966</h4>
            </div>
          </div>
        </section>

        <section className="container-projects">
          <h2>Projetos</h2>
          <div className="project Um">
            <figure></figure>
            <h3>WebApp controle de finanças</h3>
            <h4>Tecnologias: HTML, CSS e JS</h4>
          </div>
          <div className="project Dois">
            <figure></figure>

            <h3>Player de Música</h3>
            <h4>Tecnologias: HTML, CSS e JS</h4>
          </div>
          <div className="project três">
            <figure></figure>
            <h3>WebApp Controle de Cobranças</h3>
            <h4>Tecnologias: HTML, CSS e JS</h4>
          </div>
        </section>
      </main>
    </div>
  );
};
