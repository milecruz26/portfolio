import "./styles.css";
import CodeIcon from "../../assets/image/code.svg";
import SmartphoneIcon from "../../assets/image/smartphone.svg";
import MenuSand from "../../assets/image/menu-hamburguer.svg";
import { ServicesContainer } from "../../componets/ServicesContainer/ServicesContainer";
import { SkillContainer } from "../../componets/SkillContainer/SkillContainer";
import { CircleIcon } from "../../componets/CircleIcon/CircleIcon";
import { Projects } from "../../componets/Projects/Projects";

export const Home = () => {
  const openCurriculo = () => {
    const arquivo = "/CV_Jamile_Cruz_da_Silva.pdf";

    window.open(arquivo, "_blank");
  };

  return (
    <div className="container">
      <header>
        <h3>Portfólio</h3>
        <img src={MenuSand} alt="" />
        <nav>
          <ul>
            <li>
              <a href="#about-me">Sobre mim</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#my-skills">Minhas skills</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="apresetation-section">
          <div className="container-title-btns">
            <h1>Olá, eu sou a Jamile Cruz! </h1>
            <h3>Desenvolvedora FullStack e Front-End</h3>
            <div>
              <button className="download-cv-btn" onClick={openCurriculo}>
                Download CV
              </button>

              <button className="contact-btn">
                <a href="https://wa.me/+5585987830966">Entrar em contato</a>
              </button>
            </div>
          </div>
          <div className="imagem"></div>
        </section>
        <section className="about-me-section" id="about-me">
          <h1>Sobre Mim</h1>
          <p>
            Sou uma cearense apaixonada por games. É por isso que neste ano
            iniciei a minha transição de carreira para área de tecnologia.
            <br />
            <br />
            Sou Publicitária, trabalhei durante 6 anos com marketing digital
            atuando como Social Media, Produtora de Conteúdo e Copywriter em
            agências de publicidade em Fortaleza, mas sempre tive vontade de
            migrar para carreira de tecnologia com o desejo de trabalhar com
            jogos.
            <br />
            <br />
            Em janeiro deste ano resolvi dar o meu primeiro grande salto de fé
            no mundo da tecnologia e, atualmente, estou fazendo um curso de
            Desenvolvimento de Software FullStack pela Cubos Academy.
            <br />
            <br />
            Na minha carreira anterior sempre trabalhei com equipes
            multidisciplinares, com planejamento estratégico, bastante
            criatividade e responsabilidades de autogestão e organização, e essa
            experiência com certeza me ajudará bastante na minha nova jornada
            como Dev.
          </p>
          <CircleIcon />
        </section>

        <section className="container-projects" id="projects">
          <h2>Projetos</h2>
          <div>
            <Projects />
          </div>
        </section>

        <section className="service-section" id="services">
          <h2>Serviços</h2>
          <div>
            <ServicesContainer srcImg={CodeIcon} service={"Criação de sites"} />
            <ServicesContainer
              srcImg={SmartphoneIcon}
              service={"Sites responsivos"}
            />
          </div>
        </section>

        <section className="skill-section" id="my-skills">
          <h2>Minhas skills</h2>

          <SkillContainer />
        </section>
      </main>
    </div>
  );
};
