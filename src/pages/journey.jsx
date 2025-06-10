import '../styles/Journey/journey.css'

export default function Journey() {
    return (
        <div id="journey" className="journey">
            <h1 className="journey__title">CARRERA</h1>

            <section className="journey__info">
                <div className="journey__column journey__column--left">
                    <p className="journey__item">2016 - Técnico Industrial de Zipaquirá Bachillerato</p>
                    <p className="journey__item">2024 - Bureau Veritas LDTA Auditor Interno ISO 27001:2022</p>
                    <p className="journey__item">2024 - Universidad Militar Nueva Granada Pregrado Ingeniería en Multimedia</p>
                </div>

                <div className="journey__line">
                    <span className="journey__points">
                        <span className="journey__circle"></span>
                        <span className="journey__circle"></span>
                        <span className="journey__circle"></span>
                        <span className="journey__circle"></span>
                        <span className="journey__circle"></span>
                    </span>
                </div>

                <div className="journey__column journey__column--right">
                    <p className="journey__item">2017 - SENA Técnico en logística empresarial</p>
                    <p className="journey__item">2024 - Universidad Sergio Arboleda Bootcamp Análisis y ciencia de Datos</p>
                </div>
            </section>
        </div>
    );
}
