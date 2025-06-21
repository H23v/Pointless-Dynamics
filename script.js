/*********************************************************
 *                    A N I M A Z I O N I                *
 *********************************************************/
const decode = (el, txt, d = 0, s = 30) => {
  const L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let i = 0;
  setTimeout(() => {
    const intv = setInterval(() => {
      el.innerText = txt.split('').map((c, idx) => idx < i ? c : L[Math.floor(Math.random() * L.length)]).join('');
      if (++i > txt.length) clearInterval(intv);
    }, s);
  }, d);
};

const speed = 30, between = 200;
decode(document.getElementById('line2'), 'POINTLESS DYNAMICS', 500, speed);
let delay = 500 + 'POINTLESS DYNAMICS'.length * speed + 300;
[['line1', '/MACCHINE CELIBI'], ['line3', '24.06'], ['line4', '13–14']].forEach(([id, text]) => {
  const el = document.getElementById(id);
  el.innerText = '';
  decode(el, text, delay, speed);
  delay += text.length * speed + between;
});

/* Glitch modello 3D */
const model = document.getElementById('glitchedModel');
setTimeout(() => { model.style.opacity = '1'; model.style.transform = 'scale(1)'; }, delay);
const glitch = () => [0, 150, 300].forEach(ms => setTimeout(() => {
  model.style.transform = 'scale(1) translateZ(-5px)';
  setTimeout(() => model.style.transform = 'scale(1) translateZ(0)', 80);
}, ms));
(function loop() { setTimeout(() => { glitch(); loop(); }, 10000 + Math.random() * 10000); })();

/*********************************************************
 *                    T O G G L E  HOME                 *
 *********************************************************/
const btnExh = document.getElementById('btn-exhibition');
const btnPrj = document.getElementById('btn-prj');
const btnStanza = document.getElementById('btn-stanza');

const titleBlock = document.getElementById('titleBlock');
const exhibitionBlock = document.getElementById('exhibitionContent');
const infoContainer = document.getElementById('infoContainer');

const homeContent = document.getElementById('homeContent');
const opereSection = document.getElementById('opereSection');

/* Exhibition toggle (come in origine) */
btnExh.addEventListener('click', () => {
  const show = titleBlock.style.display !== 'none';
  titleBlock.style.display = show ? 'none' : 'block';
  exhibitionBlock.style.display = show ? 'flex' : 'none';
  infoContainer.style.opacity = show ? 0 : 1;
  btnExh.innerText = show ? 'CTRL+Z' : 'EXHIBITION';
  btnExh.classList.toggle('active', show);
});

/*********************************************************
 *                S E Z I O N E   O P E R E             *
 *********************************************************/
let opereInit = false;   // viene popolata solo al primo click

btnPrj.addEventListener('click', () => {
  const isHome = opereSection.style.display === 'none';

  if (isHome) {
    // Passo a OPERE
    opereSection.style.display = 'flex';
    homeContent.style.display = 'none';
    model.style.display = 'none';
    btnExh.style.display = 'none';
    btnStanza.style.display = 'flex';
    btnPrj.innerText = 'CTRL+Z';
    btnPrj.classList.add('active');
    if (!opereInit) initOpere();
  } else {
    // Torno a HOME
    opereSection.style.display = 'none';
    homeContent.style.display = 'flex';
    model.style.display = 'block';
    btnExh.style.display = 'flex';
    btnStanza.style.display = 'none';
    btnPrj.innerText = '#PRJ';
    btnPrj.classList.remove('active');
  }
});

/***** Dati opere e logica card *****/
function initOpere() {
  opereInit = true;
  const opere = [
    { img: 'losai.png', autore: 'HACK', titolo: 'LoSai', anno: '2025', materiali: 'Sito Web, installazione con gadget, poster, cuscini e tappeto', concept: 'Un sito web concepito deliberatamente senza una funzione utilitaria. La sua “funzione”, se così si può definire, non risponde a logiche di servizio, efficienza o informazione, ma si propone come generatore di una soap opera brain rot infinita. Attraverso il paradosso di una narrazione che suggerisce coerenza ma produce disordine, il sito mette in scena un racconto senza una fine: una trama che promette significato ma restituisce solo un flusso caotico e ipnotico.' },
    { img: 'splickshh.png', autore: 'Luca Carlevarino', titolo: 'Splickshh', anno: '2025', materiali: 'Tavolo con innaffiatoio, tastiera, cartoline, monitor', concept: 'Splickshh è un innaffiatoio per tastiere. Questo oggetto da scrivania presenta linee semplici e un design studiato ad hoc per dissetare la tua tastiera. La sua forma a “J” rovesciata richiama la combinazione di due gesti: versare l’acqua e premere un tasto. <br>Splichshh è una provocazione tangibile, un prodotto speculativo che mette in discussione il ruolo stesso della tecnologia. Ci invita a ripensare la tastiera non più come interfaccia di scrittura ma come spazio botanico. Nato come sfida progettuale, l’oggetto ci invita a riflettere sul rapporto tra uomo e tecnologia, tra ecologia e rifiuto. <br>In un’epoca dominata dai consumi, è necessario valutare l’impatto dei prodotti a partire dall’estrazione di materie prime fino allo smaltimento. Il ripensare a un oggetto può farsi pratica ecologica anticipando la condizione di rifiuto. Ciò può portare a scoprire nuove pratiche ecologiche.' },
    { img: 'teamDeathmatch.png', autore: 'Jiale Wu', titolo: 'Team Deathmatch', anno: '2024', materiali: 'Steamdeck, joystick, oggetti decorazioni  3D', concept: 'Questa opera trasforma la meccanica violenta degli sparatutto in una riflessione visiva sul concetto di attaccamento all’“io” 执我. Gli NPC si uccidono a vicenda nello scenario, e ogni morte è accompagnata dalla comparsa delle parole “visione egoica” (我见), “orgoglio dell’io” (我慢) e “attaccamento all’io” (我爱) — non sono marcatori tattici, ma simboli delle tre forme dell’attaccamento egoico secondo il buddhismo: cognitiva, competitiva, e affettiva.<br>L’intervento del giocatore non è controllo, ma svuotamento. Tutti gli NPC scompaiono all’istante, e appare la scritta: “色 Forma, 受 sensazione, 想 percezione, 行 volizione e 识 coscienza sono state disconnesse” — i cinque aggregati si ritirano, il soggetto si spegne, e le radici della violenza vengono disattivate. Da quel momento, il giocatore resta in uno spazio vuoto, senza persone, senza eventi, senza parole: puro spettatore.<br><br>Team Deathmatch non offre obiettivi, né permette la vittoria. Fa crollare la struttura del gioco stesso, trasformandola in un dispositivo meditativo sul vuoto. In mezzo alle rovine, ci accorgiamo forse che ciò che deve davvero “disconnettersi” è proprio quell’“io” che si aggrappa all’azione e al risultato.' },
    { img: 'mindparasite.png', autore: 'Zhang Zhijie,<br>Zheng Lechen,<br>Tong Xiyao', titolo: 'Mind parasite', anno: '2025', materiali: 'Visore VR', concept: 'Mind Parasite è un’esperienza VR immersiva che simula l’ingresso di una coscienza artificiale nel sistema mentale di un altro essere.<br>Lo spettatore si muove come un’entità invisibile all’interno di uno spazio di coscienza non suo, dove i ricordi emergono in forma frammentaria e il tempo perde linearità.<br><br>Attraverso una narrazione contemplativa e disorientante, il progetto esplora i confini tra identità, memoria e percezione.<br>L’esperienza non cerca l’interazione, ma l’immersione. Il soggetto si dissolve tra il controllo e l’alterità, in un viaggio postumano ispirato a cinema e arte contemporanea.' },
    { img: 'versione.png', autore: 'Cao Shanshan,<br>Lou Yiliang', titolo: 'Versione ∞', anno: '2025', materiali: 'Sito web, scatola, computer', concept: '“Il mio lavoro sembrava creativo, <br>ma in realtà non ha prodotto nulla.” <br> <br>Formalmente è un lavoro creativo, <br>ma nella sostanza è un ciclo infinito di produzione inefficace. <br> <br>Abbiamo voluto concretizzare il concetto di “essere umano come parte <br>della macchina” in un’esperienza interattiva online. <br>La logica è la seguente: <br> <br>Nel mondo reale👉 Nell’interazione sul sito web: <br><br>brief da riscrivere continuamente👉 un braccio meccanico continua a lanciare nuovi brief <br> rifiuti ripetuti da parte del cliente👉ogni Version viene “scartata” <br>lavoratori che esauriscono energia e lucidità👉la tazza si frantuma = crollo mentale <br>il caffè è l’unico carburante per andare avanti👉 la tazza rappresenta l’utente stesso, il caffè è il carburante' },
    { img: 'azionedipreparazione.png', autore: 'Gong Xiaoxiao', titolo: 'Azione di preparazione', anno: '2025', materiali: 'Ipad, porta tablet, sedia', concept: 'Il progetto indaga lo "spazio di back-end" dei sistemi intelligenti contemporanei: quei meccanismi sensoriali incorporati negli oggetti quotidiani, in funzione continua ma spesso impercettibili. Ispirandosi a tre modalità sensoriali tipiche – visione, udito e riconoscimento vocale – l’opera dà forma a tre entità meccaniche antropomorfe, che nello spazio metaforico dello schermo mettono in scena un gesto ricorrente di “desiderio di essere attivate”.<br>Rendendo visibili questi meccanismi nascosti, il progetto solleva una riflessione critica sull’ambiente intelligente in cui viviamo: uno spazio ormai riconfigurato da sistemi percettivi, dove si stabilisce una relazione asimmetrica – anche quando resti immobile, loro continuano a guardarti.' },
    { img: 'pg.png', autore: 'Alex Magni', titolo: 'Personal Greenhouse / P-G', anno: '2025', materiali: 'Computer, piantine, struttura in tubi di plastica e plexiglass', concept: 'Il progetto indica la "trasformazione/conversione" di un Personal Computer, macchina in grado di svolgere svariate funzioni, in una forma dove vengono ridimensionate le sue capacita’, limitandole solo a sostenere le piante ed a fornirgli luce.<br>La serra è un ambiente artificiale costruito appositamente per coltivare fiori e piante con caratteristiche di temperatura simili a quelle del loro habitat naturale, o per l’essiccazione di prodotti dell’agricoltura e della selvicoltura. Il Personal Computer diventa da oggetto elettronico molto utilizzato e “dinamico”, con i suoi molteplici utilizzi, ad a diventare un oggetto  “statico” con tutte le sue capacità soppresse, limitate solo a contenere le piante e di fargli luce.' },
    { img: 'passpartout.png', autore: 'Francesca Vulpiani', titolo: 'Passepartout', anno: '2025', materiali: 'Video installazione', concept: 'Il progetto si concretizza nella realizzazione di un video tutorial che spiega come inserire una chiavetta USB all’interno di un PC e importare questo video all’interno della stessa chiavetta. In tal modo si genera un loop autoironico e “inutile”, poiché per accedere al tutorial è necessario conoscere già il funzionamento di una chiavetta USB.<br><br>Il video sarà pieno di dettagli e spiegazioni, girato con una definizione molto alta.<br>Per invogliare il fruitore ad iniziare l’azione, verrà installato un allestitore simile a quelli utilizzati nei negozi di elettronica per presentare le ultime uscite, sul quale riporre la chiavetta, assieme ad una grafica che elogia il prodotto come “esclusivo”, oltre che portatile e indispensabile.' },
    { img: 'echo.png', autore: 'Xia  Yangtian', titolo: 'ECHO', anno: '2025', materiali: 'Video animazione', concept: 'Nel mio percorso di ricerca sul concetto di macchina celibe, e in particolare attraverso la lettura di L’Anti-Edipo e Mille piani di Deleuze e Guattari, sono stato profondamente colpito da uno dei loro nuclei teorici più affascinanti: la produzione del desiderio decentralizzata.<br><br>Secondo questa visione, desideri, emozioni e fantasie non scaturiscono da un centro unitario della personalità, ma si manifestano come “moduli” indipendenti, discontinui, che talvolta si connettono, talvolta si interrompono. La soggettività non è più l’origine o il sovrano del desiderio, bensì una rete decentrata, composta dall’accostamento, dalla frammentazione e dalla ricombinazione di questi moduli.<br><br>È a partire da questa prospettiva che nasce questa mia opera animata, decostruzionista e radicalmente decentralizzata: un flusso visivo costruito attraverso una serie di dipinti metaforici in stile stream of consciousness, pensati per rendere visibile la complessità e la fluidità delle relazioni tra questi moduli.' }
  ];
  const stage = document.getElementById('stage');
  const overlay = document.getElementById('overlay');
  const overlayContent = document.getElementById('overlayContent');
  const shuffleBtn = document.getElementById('shuffleBtn');

  const cardW = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--card-w'));
  const cardH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--card-h'));
  const minGap = 90;

  const shuffleArr = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } };

  function placeCards() {
    const stageW = window.innerWidth;
    const stageH = window.innerHeight - 160; // tolgo header e margini
    const placed = [];
    stage.innerHTML = '';
    opere.forEach(op => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.backgroundImage = `url(${op.img})`;

      // Posizionamento non sovrapposto
      let x, y, trial = 0, max = 150;
      do {
        x = Math.random() * (stageW - cardW - 20) + 10;
        y = Math.random() * (stageH - cardH - 20) + 10;
      } while (++trial < max && !placed.every(p => Math.hypot(p.x - x, p.y - y) >= minGap));
      placed.push({ x, y });

      card.style.left = `${x}px`;
      card.style.top = `${y}px`;

      const show = () => {
        overlayContent.innerHTML = `<h2>${op.autore} — ${op.titolo} (${op.anno})</h2><div class='meta'>Media: ${op.materiali}</div><div class='concept'>${op.concept}</div>`;
        overlay.classList.add('show');
      };
      const hide = () => overlay.classList.remove('show');

      card.addEventListener('mousedown', show);
      card.addEventListener('touchstart', show);
      document.addEventListener('mouseup', hide);
      document.addEventListener('touchend', hide);

      stage.appendChild(card);
    });
  }

  // Prima render
  shuffleArr(opere);
  placeCards();

  // Shuffle button
  shuffleBtn.addEventListener('click', () => { shuffleArr(opere); placeCards(); });

  // STANZA41 hold-to-toggle
  const hideStage = () => { stage.style.opacity = 0; stage.style.pointerEvents = 'none'; };
  const showStage = () => { stage.style.opacity = 1; stage.style.pointerEvents = 'auto'; };
  btnStanza.addEventListener('mousedown', hideStage);
  btnStanza.addEventListener('touchstart', hideStage);
  btnStanza.addEventListener('mouseup', showStage);
  btnStanza.addEventListener('mouseleave', showStage);
  btnStanza.addEventListener('touchend', showStage);

  // Re-place on resize
  window.addEventListener('resize', () => { placeCards(); });
}
