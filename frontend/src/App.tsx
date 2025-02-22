import { useRef, useState } from 'react';
import './App.css';
import Sumivka1 from './assets/sumivka1.png';
import Sumivka2 from './assets/sumivka2.png';
import Sumivka3 from './assets/sumivka3.png';
import OnasImage from './assets/onas.png';

import JanNovak from './assets/janNovak.png';
import PetraSvobodova from './assets/PetraSvobodova.png';
import MartinDvorak from './assets/onas.png';

function App() {
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="hero" id="home" data-primary="#6200ea" data-secondary="#03dac6" ref={el => sectionsRef.current[0] = el}>
                {/* Navbar */}
                <nav className="navbar">
                    <a className="navbar-brand" href="#">vysum.to</a>
                    <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                        <li><a href="#produkty" onClick={() => setMenuOpen(false)}><i className="fas fa-box"></i> Produkty</a></li>
                        <li><a href="#onas" onClick={() => setMenuOpen(false)}><i className="fas fa-info-circle"></i> O nás</a></li>
                        <li><a href="#nas-tym" onClick={() => setMenuOpen(false)}><i className="fas fa-users"></i> Náš Tým</a></li>
                        <li><a href="#kontakt" onClick={() => setMenuOpen(false)}><i className="fas fa-envelope"></i> Kontakt</a></li>
                        <li><a href="#login" onClick={() => setMenuOpen(false)}><i className="fas fa-user-shield"></i>Přihlásit se</a></li>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
                {/* Center Wrapper */}
                <div className="hero-content">
                    <h1>Zažijte Revoluci ve Vašem Zdraví s Našimi Tabletami!</h1>
                    <p>Revoluční kombinace minerálů a vitamínů pro vaši každodenní vitalitu.</p>
                    <button className="btn-buy" onClick={() => window.location.href = '#produkty'}>Prozkoumat Produkty</button>
                </div>
            </div>
            <div className="container" id="produkty" data-primary="#03dac6" data-secondary="#ff7e5f" ref={el => sectionsRef.current[1] = el}>
                <h2 style={{ color: "white", marginBottom: "2rem" }}>Naše Produkty</h2>
                <div className="produkty-list">
                    <div className="produkt">
                        <img src={Sumivka1} alt="Produkt 1" className="produkt-image" />
                        <h3>Vitamín C + Zinek</h3>
                        <p>Posilte svou imunitu s našimi šumivými tabletami obsahujícími vysokou dávku vitamínu C a zinku.</p>
                        <p className="price">299 Kč</p>
                        <button className="btn-buy">Do košíku</button>
                    </div>
                    <div className="produkt">
                        <img src={Sumivka2} alt="Produkt 2" className="produkt-image" />
                        <h3>Hořčík + B6</h3>
                        <p>Ideální kombinace pro podporu svalové funkce a snížení únavy.</p>
                        <p className="price">399 Kč</p>
                        <button className="btn-buy">Do košíku</button>
                    </div>
                    <div className="produkt">
                        <img src={Sumivka3} alt="Produkt 3" className="produkt-image" />
                        <h3>Multivitamín</h3>
                        <p>Komplexní směs vitamínů a minerálů pro každodenní podporu zdraví.</p>
                        <p className="price">499 Kč</p>
                        <button className="btn-buy">Do košíku</button>
                    </div>
                </div>
            </div>
            <section id="onas" style={{ color: "white" }} data-primary="#ff7e5f" data-secondary="#feb47b" ref={el => sectionsRef.current[2] = el}>
                <h2 style={{ color: "white" }}>O nás</h2>
                <div className="onas-content">
                    <div className="onas-text">
                        <h3>Naše Mise</h3>
                        <p>Jsme společnost specializující se na výrobu šumivých tablet s cílem zlepšit vaše zdraví a vitalitu. Naše produkty jsou vyrobeny z nejkvalitnějších ingrediencí a jsou pečlivě testovány, abychom zajistili jejich účinnost a bezpečnost.</p>
                    </div>
                    <div className="onas-image">
                        <img src={OnasImage} alt="Naše Mise" />
                    </div>
                </div>
            </section>

            <section id="nas-tym" data-primary="#ff7e5f" data-secondary="#feb47b" ref={el => sectionsRef.current[3] = el}>
                <div className="team-section">
                    <h3 style={{ color: "white" }}>Náš Tým</h3>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={JanNovak} alt="Člen Týmu 1" />
                            <h4>Jan Novák</h4>
                            <p>Zakladatel & CEO</p>
                        </div>
                        <div className="team-member">
                            <img src={PetraSvobodova} alt="Člen Týmu 2" />
                            <h4>Petra Svobodová</h4>
                            <p>Marketingová Manažerka</p>
                        </div>
                        <div className="team-member">
                            <img src={MartinDvorak} alt="Člen Týmu 3" />
                            <h4>Martin Dvořák</h4>
                            <p>Vývojář Produktů</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="kontakt" style={{ color: "white" }} data-primary="#feb47b" data-secondary="#6a11cb" ref={el => sectionsRef.current[4] = el}>
                <h2>Kontakt</h2>
                <p>Máte nějaké otázky nebo potřebujete více informací? Kontaktujte nás:</p>
                <ul>
                    <li><i className="fas fa-envelope"></i> Email: info@vysum.to</li>
                    <li><i className="fas fa-phone-alt"></i> Telefon: +420 123 456 789</li>
                    <li><i className="fas fa-map-marker-alt"></i> Adresa: Ulice 123, Město, Česká republika</li>
                </ul>
                {/* Add Contact Form */}
                <form className="contact-form">
                    <label htmlFor="name"><i className="fas fa-user"></i> Jméno:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email"><i className="fas fa-at"></i> Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message"><i className="fas fa-comment-dots"></i> Zpráva:</label>
                    <textarea id="message" name="message" rows={5} required></textarea>

                    <button type="submit" className="btn-submit"><i className="fas fa-paper-plane"></i> Odeslat</button>
                </form>
            </section>
        </>
    )
}

export default App