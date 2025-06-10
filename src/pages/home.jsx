import '../styles/Home/home.css'


export default function Home() {
    return (
        <div id="home">
            <div className='home__section-1'>
                <p className='home__paragraph home__paragraph-1'>Soy Daniel Pedroza, desarrollador web independiente que firma sus proyectos bajo el nombre de DRAKODE. Me apasiona crear experiencias digitales bien pensadas, visualmente sólidas y técnicamente optimizadas.</p>
                <div className='home__logo--container'>
                    <div className='home__logo-circle'>
                        <div className='home__logo-img'>
                            <img className='home__Drakode' src="/icons/Logo_v2.svg" alt="Logo_Drakode" />
                        </div>
                    </div>
                </div>
                <p className='home__paragraph home__paragraph-2'>Domino tecnologías como HTML, CSS, JavaScript y frameworks modernos. Gracias a ello, construyo interfaces interactivas, optimizadas y con diseño profesional. Mi meta es crear sitios que no solo funcionen bien, sino que generen impacto.</p>
            </div>
            <div className='home__section-2'>
                <h2 className='home__profession'>Desarrollador Web</h2>
                <h1 className='home__nickname'>Drakode</h1>
            </div>
        </div>
    )
}