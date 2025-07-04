import "../styles/Home/home.css";
import TalkBtn from "../components/talkBtn";

export default function Home() {
  return (
    <div id="home">
      <div className="home__name">
        <h2 className="home__subtitle">Desarrollador Web</h2>
        <h1 className="home__title">Drakode</h1>
      </div>

      <div className="home__brand">
        <div className="home__brand-circle"></div>
        <img
          className="home-brand-drakode"
          src="/icons/Logo_v2.svg"
          alt="Logo-Drakode"
        />
      </div>

      <div className="home__info">
        <p className="home__info-text--1">
          ¡Bienvenido! soy Daniel Pedroza me apasiona crear experiencias
          digitales, visualmente sólidas y técnicamente optimizadas.
        </p>
        <p className="home__info-text--2">
          Domino tecnologías como HTML, CSS, JavaScript y frameworks modernos.
          Gracias a ello, construyo interfaces interactivas, optimizadas y con
          diseño profesional. Mi meta es crear sitios que no solo funcionen
          bien, sino que generen impacto.
        </p>
        
        <TalkBtn></TalkBtn>

        {/* <button className="home__info-message">
          <svg
            className="home__info-icon"
            width="29"
            height="23"
            viewBox="0 0 29 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9444 8.05556C20.9444 3.60486 16.2571 0 10.4722 0C4.68733 0 0 3.60486 0 8.05556C0 9.78247 0.709896 11.3734 1.91319 12.6875C1.23854 14.208 0.125868 15.4163 0.110764 15.4314C0 15.5472 -0.0302083 15.7184 0.0352431 15.8694C0.100694 16.0205 0.241667 16.1111 0.402778 16.1111C2.24549 16.1111 3.77101 15.4918 4.86858 14.8524C6.48976 15.6429 8.40799 16.1111 10.4722 16.1111C16.2571 16.1111 20.9444 12.5063 20.9444 8.05556ZM27.0868 19.1319C28.2901 17.8229 29 16.2269 29 14.5C29 11.1318 26.3064 8.24688 22.4901 7.04358C22.5354 7.37587 22.5556 7.7132 22.5556 8.05556C22.5556 13.3873 17.1332 17.7222 10.4722 17.7222C9.92847 17.7222 9.39983 17.6819 8.87622 17.6266C10.4622 20.5215 14.1878 22.5556 18.5278 22.5556C20.592 22.5556 22.5102 22.0924 24.1314 21.2969C25.229 21.9363 26.7545 22.5556 28.5972 22.5556C28.7583 22.5556 28.9043 22.4599 28.9648 22.3139C29.0302 22.1679 29 21.9967 28.8892 21.8759C28.8741 21.8608 27.7615 20.6575 27.0868 19.1319Z"
              fill="currentColor"
            />
          </svg>
          Hablemos
        </button> */}
        {/* 
        <div href className="home__info-message">
          <a href="#"></a>
        </div> */}
      </div>

      <div className="home__next">
        <div className="home__next-circle--1"></div>

        <svg
          className="home__arrow"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              d="M14 17.9666L7 10.9666L8.63333 9.33331L14 14.7L19.3667 9.33331L21 10.9666L14 17.9666Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
