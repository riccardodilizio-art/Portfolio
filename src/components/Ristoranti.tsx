import { useEffect } from 'react';
import './Ristoranti.css';

const WHATSAPP_NUMBER = '3713405167';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ciao%20Riccardo%2C%20ho%20un%20locale%20e%20vorrei%20info%20sul%20sito`;
const EMAIL = 'dlz.riccardo@gmail.com';

function ArrowIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path
        d="M1 7H17M17 7L11 1M17 7L11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Ristoranti() {
  // Update document metadata while this page is mounted, then restore on unmount.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Sito + Servizio — Riccardo · Siti per ristoranti e locali';

    const description =
      'Sito web professionale per il tuo ristorante o locale. Pronto in 7 giorni. 490€ una tantum + 19€/mese. Menù, prenotazioni, Google Maps, supporto incluso.';
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute('content') ?? null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
      if (metaDesc && previousDesc !== null) {
        metaDesc.setAttribute('content', previousDesc);
      }
    };
  }, []);

  return (
    <div className="ristoranti-page">
      {/* ============ NAV ============ */}
      <nav className="r-nav">
        <div className="container">
          <a href="/ristoranti" className="r-logo">
            riccardo<span>.dev</span>
          </a>
          <div className="r-nav-links">
            <a href="/" className="r-nav-back">
              ← Portfolio
            </a>
            <a href="#contatti" className="nav-cta">
              Scrivimi su WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container">
          <div className="hero-arc" aria-hidden="true" />
          <div className="hero-stamp" aria-hidden="true">
            Pronto in<strong>7 giorni</strong>(davvero)
          </div>

          <div className="reveal">
            <div className="eyebrow">Siti per ristoranti e locali</div>
          </div>

          <h1 className="reveal">
            Un sito che <em>riempie i tavoli</em>,<br />
            non un biglietto da visita <span className="swash">digitale.</span>
          </h1>

          <p className="hero-lede reveal">
            Sito + menù online + prenotazioni, online in una settimana. Mi occupo io di tutto:
            dominio, hosting, aggiornamenti. Tu pensi alla cucina.
          </p>

          <div className="hero-cta-row reveal">
            <a href="#contatti" className="btn-primary">
              Voglio il mio sito
              <ArrowIcon />
            </a>
            <a href="#pacchetto" className="btn-secondary">
              Vedi cosa è incluso
            </a>
          </div>

          <div className="hero-price reveal">
            <div className="price-block">
              <div className="label">All'avvio</div>
              <div className="amount">490€</div>
              <div className="sub">una tantum, fattura</div>
            </div>
            <div className="price-plus">+</div>
            <div className="price-divider" />
            <div className="price-block">
              <div className="label">Poi ogni mese</div>
              <div className="amount">19€</div>
              <div className="sub">tutto compreso, sempre</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SCROLLING STRIP ============ */}
      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
              <span className="strip-item">Menù online aggiornabile</span>
              <span className="strip-dot">●</span>
              <span className="strip-item">Prenotazioni dirette</span>
              <span className="strip-dot">●</span>
              <span className="strip-item">Google Maps integrato</span>
              <span className="strip-dot">●</span>
              <span className="strip-item">Pulsante WhatsApp</span>
              <span className="strip-dot">●</span>
              <span className="strip-item">Veloce su ogni telefono</span>
              <span className="strip-dot">●</span>
              <span className="strip-item">Online in 7 giorni</span>
              <span className="strip-dot">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ PROBLEM ============ */}
      <section className="problem">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Il problema</div>
            <h2>
              Oggi i clienti ti cercano <em>su Google</em>, non più sulle Pagine Gialle.
            </h2>
            <p>
              E quando ti trovano (se ti trovano), in 5 secondi decidono se prenotare da te o
              dal tuo concorrente. La maggior parte dei locali perde clienti per errori che si
              risolvono in un attimo.
            </p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-num">01</div>
              <h3>Nessun sito, solo Facebook</h3>
              <p>
                Chi ti cerca su Google trova un'altra cosa: il sito di un concorrente, una vecchia
                recensione, un profilo abbandonato. E va a mangiare lì.
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-num">02</div>
              <h3>Sito vecchio che non funziona</h3>
              <p>
                Si apre lento, sul telefono è illeggibile, il menù è un PDF di 5 anni fa. Il
                cliente chiude la pagina prima ancora di leggere cosa cucini.
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-num">03</div>
              <h3>Telefono che squilla in continuazione</h3>
              <p>
                Prenotazioni, orari, indirizzo, menù: chiamate sempre per le stesse cose. Tempo
                rubato al servizio. Un sito fatto bene le riduce del 70%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PACKAGE ============ */}
      <section className="package" id="pacchetto">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">La soluzione</div>
            <h2>
              Un pacchetto chiaro. <em>Niente sorprese.</em>
            </h2>
            <p>
              Tutto quello che serve al tuo locale per esistere online, fatto bene la prima
              volta. Pago una volta all'avvio e poi un canone basso che copre tutto il resto.
            </p>
          </div>

          <div className="pkg-card">
            <div className="pkg-header">
              <div>
                <div className="pkg-name">Pacchetto</div>
                <h2 className="pkg-title">
                  Sito <em>+</em> Servizio
                </h2>
              </div>
              <div className="pkg-price">
                <div className="one-time">490€</div>
                <div className="sub-line">all'avvio · una tantum</div>
                <div className="monthly">+ 19€ / mese</div>
              </div>
            </div>

            <div className="pkg-grid">
              <div className="pkg-col">
                <h4>All'avvio</h4>
                <ul>
                  <li>Sito 4-5 pagine, ottimizzato per mobile</li>
                  <li>Dominio .it (es. iltuoristorante.it)</li>
                  <li>Hosting professionale veloce</li>
                  <li>Menù online sempre aggiornabile</li>
                  <li>Modulo prenotazioni + WhatsApp diretto</li>
                  <li>Google Maps integrato e SEO locale</li>
                  <li>Online in 7 giorni dall'ok ai materiali</li>
                </ul>
              </div>
              <div className="pkg-col">
                <h4>Ogni mese (19€)</h4>
                <ul>
                  <li>Hosting e dominio sempre pagati</li>
                  <li>Backup automatici settimanali</li>
                  <li>Aggiornamenti menù, orari, prezzi</li>
                  <li>Piccole modifiche (testi, foto)</li>
                  <li>Supporto WhatsApp diretto</li>
                  <li>Monitoraggio sito sempre online</li>
                </ul>
              </div>
            </div>

            <div className="pkg-bottom">
              <div className="pkg-bottom-text">
                "Niente IVA aggiunta. Sono in regime forfettario."
              </div>
              <a href="#contatti" className="btn-gold">
                Voglio iniziare
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="how">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Come si lavora</div>
            <h2>
              Una settimana, <em>tre passaggi.</em>
            </h2>
            <p>
              Niente riunioni infinite, niente preventivi che cambiano ogni due giorni. Il
              processo è semplice e pensato per non rubarti tempo.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-day">Giorno 1</div>
              <h3>Parliamo 20 minuti.</h3>
              <p>
                Mi racconti il tuo locale, mi mandi le foto e i menù che hai. Da qui parto.
                Niente brief lunghissimi: a 20 minuti di chiamata ho tutto quello che serve.
              </p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-day">Giorno 2-5</div>
              <h3>Costruisco il sito.</h3>
              <p>
                Lavoro io, in autonomia. Niente di cui ti devi preoccupare. Il quarto giorno ti
                mando il link di anteprima e raccolgo le tue modifiche in un'unica volta.
              </p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-day">Giorno 7</div>
              <h3>Il sito è online.</h3>
              <p>
                Configurato, testato, indicizzato su Google. Ti mando un breve video tutorial e
                il mio numero WhatsApp per qualsiasi cosa serva, sempre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="photo-frame">
              <img src="/images/profile.jpg" alt="Riccardo Di Lizio" />
            </div>
            <div className="about-text">
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                Chi sono
              </div>
              <h2>
                Riccardo. Programmatore <em>e atleta.</em>
              </h2>
              <p>
                Costruisco siti per ristoranti e locali perché credo che il lavoro fatto bene
                meriti di essere trovato. Sono un programmatore con un'ossessione per i dettagli
                — la stessa che da atleta mi ha portato ai livelli alti.
              </p>
              <p>
                Per ogni cliente lavoro come se fosse l'unico: tempi rispettati, comunicazione
                chiara, niente tecnicismi. Se sai gestire un ristorante, sai prendere decisioni
                veloci. Io ti rispondo alla stessa velocità.
              </p>
              <div className="about-sign">— Riccardo</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="faq">
        <div className="container">
          <div
            className="section-head"
            style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Le domande che mi fanno tutti
            </div>
            <h2>
              Risposte <em>oneste.</em>
            </h2>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="faq-item">
                <details>
                  <summary>
                    {item.q}
                    <span className="faq-icon" aria-hidden="true" />
                  </summary>
                  <div className="faq-answer">{item.a}</div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="final" id="contatti">
        <div className="container">
          <h2>
            Il prossimo cliente che ti cerca su Google,
            <br />
            <em>cosa troverà?</em>
          </h2>
          <p>
            Se la risposta non ti piace, parliamone. Ti rispondo personalmente entro qualche ora.
          </p>

          <div className="final-buttons">
            <a href={WHATSAPP_LINK} className="btn-primary">
              Scrivimi su WhatsApp
              <ArrowIcon />
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-secondary">
              o scrivimi una mail
            </a>
          </div>

          <div className="final-note">"Risposta entro qualche ora, sempre."</div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="r-footer">
        <div className="container">
          <div className="footer-logo">
            riccardo<span>.dev</span>
          </div>
          <div className="footer-links">
            <a href="/">Portfolio</a>
            <a
              href="https://www.linkedin.com/in/riccardodilizio"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </div>
          <div className="footer-credit">
            © {new Date().getFullYear()} Riccardo Di Lizio · Regime forfettario · Sito fatto da me,
            ovviamente.
          </div>
        </div>
      </footer>
    </div>
  );
}

const FAQ_ITEMS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Cosa succede se smetto di pagare il canone?',
    a: (
      <>
        Il sito resta tuo. Ti trasferisco dominio e hosting su un account a tuo nome e da quel
        momento gestisci tutto autonomamente. Niente ricatti, niente sito che sparisce. Il canone
        copre il <em>servizio</em> (manutenzione, aggiornamenti, supporto), non il sito in sé.
      </>
    ),
  },
  {
    q: 'Cosa NON è incluso nel pacchetto?',
    a: 'Servizio fotografico professionale, scrittura dei testi del sito (parto da quelli che hai), creazione del logo, gestione dei social, e-commerce con pagamenti online. Tutti questi sono servizi extra che possiamo aggiungere a parte se ti servono.',
  },
  {
    q: 'Davvero in 7 giorni?',
    a: 'Sì, dal momento in cui ho i materiali (foto e menù). Se mi mandi tutto entro 24h dalla chiamata, il settimo giorno il sito è online. Se invece i materiali arrivano in ritardo, i 7 giorni partono da quando li ricevo.',
  },
  {
    q: 'E se non mi piace il risultato?',
    a: 'Hai due round di modifiche compresi. Nella mia esperienza ne basta uno. Se dopo i due round non sei soddisfatto, ti restituisco il 50% dell\'acconto e ci salutiamo come amici. Non ti tengo legato a un lavoro che non ti convince.',
  },
  {
    q: 'Posso aggiornare il sito da solo?',
    a: 'Il menù sì, e ti faccio vedere come in 5 minuti di video. Per modifiche più strutturali (cambiare un\'immagine, aggiungere una pagina) basta che mi scrivi su WhatsApp: lo faccio io, è incluso nel canone mensile.',
  },
  {
    q: 'Lavori solo per ristoranti?',
    a: 'Sono specializzato in locali della ristorazione: ristoranti, pizzerie, trattorie, bar, gelaterie, pasticcerie, enoteche. Per altri tipi di attività posso comunque aiutarti, ma valuto caso per caso.',
  },
  {
    q: 'Lavori solo nella tua zona o in tutta Italia?',
    a: 'Tutta Italia. Per i clienti vicini posso anche venire di persona per la prima chiacchierata. Per gli altri, una videochiamata di 20 minuti basta e avanza per partire bene.',
  },
  {
    q: 'Come ti pago?',
    a: 'Bonifico bancario all\'avvio (490€). Il canone mensile (19€) parte dal mese in cui il sito va online ed è in addebito automatico. Tutto fatturato regolarmente, sono in regime forfettario quindi senza IVA aggiunta.',
  },
];
