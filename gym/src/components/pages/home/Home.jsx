import "./Home.css";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";

function Home() {
    return (
        <>
            <Header />
            <main className="home-container">

                <section className="content-row">
                    <div className="text">
                        <h1>Bienvenido a GymTracker</h1>
                        <p>¡Bienvenido a nuestra aplicación de seguimiento de entrenamientos!</p>
                    </div>
                    <img src="/img/img1.jpg" alt="Entrenamiento en gimnasio" className="content-img" />
                </section>

                <section className="content-row reverse">
                    <img src="/img/img2.jpg" alt="Persona entrenando" className="content-img" />
                    <div className="text">
                        <h2>¿Qué es GymTracker?</h2>
                        <p>
                            GymTracker es una herramienta de seguimiento de entrenamientos que te ayudará
                            a mejorar tu rendimiento y salud física. Con nuestra aplicación, podrás registrar
                            tus entrenamientos, monitorear tu progreso y recibir recomendaciones personalizadas.
                        </p>
                    </div>
                </section>

                <section className="content-row">
                    <div className="text">
                        <h2>¿GymTracker es para mí?</h2>
                        <p>
                            ¡Por supuesto! Con GymTracker tendrás acceso a conocimientos de salud y
                            deporte para mejorar tu bienestar.
                        </p>
                    </div>
                    <img src="/img/img3.jpg" alt="Persona motivada en el gym" className="content-img" />
                </section>

            </main>
            <Footer />
        </>
    );
}

export default Home;
