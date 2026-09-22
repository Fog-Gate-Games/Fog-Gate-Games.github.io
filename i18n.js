(() => {
  const languageNames = {
    en: { current: 'English', options: ['English', 'Portuguese', 'Spanish', 'Japanese'] },
    pt: { current: 'Português', options: ['Inglês', 'Português', 'Espanhol', 'Japonês'] },
    es: { current: 'Español', options: ['Inglés', 'Portugués', 'Español', 'Japonés'] },
    ja: { current: '日本語', options: ['英語', 'ポルトガル語', 'スペイン語', '日本語'] },
  };
  const dynamic = {
    en: { next: 'Next file →', close: 'Close file →', entering: 'ENTERING SEIRAN', archive: 'FOG GATE GAMES // ARCHIVE' },
    pt: { next: 'Próximo arquivo →', close: 'Fechar arquivo →', entering: 'ENTRANDO EM SEIRAN', archive: 'FOG GATE GAMES // ARQUIVO' },
    es: { next: 'Siguiente archivo →', close: 'Cerrar archivo →', entering: 'ENTRANDO EN SEIRAN', archive: 'FOG GATE GAMES // ARCHIVO' },
    ja: { next: '次のファイル →', close: 'ファイルを閉じる →', entering: 'SEIRAN へ入る', archive: 'FOG GATE GAMES // アーカイブ' },
  };
  const home = [
    { s: '.brand-copy small', pt: 'Estúdio Independente de Jogos', es: 'Estudio Independiente de Videojuegos' },
    { s: '.nav a', many: true, pt: ['Início','Estúdio','Jogos','Visão','Contato'], es: ['Inicio','Estudio','Juegos','Visión','Contacto'] },
    { s: '.header-cta', html: true, pt: 'Nossa visão <span>↗</span>', es: 'Nuestra visión <span>↗</span>' },
    { s: '.hero-overline', pt: 'FOG GATE GAMES · ESTÚDIO INDEPENDENTE', es: 'FOG GATE GAMES · ESTUDIO INDEPENDIENTE' },
    { s: '.hero-copy h1', html: true, pt: 'Criamos mundos<br /><span>que merecem ser lembrados.</span>', es: 'Creamos mundos<br /><span>que merecen ser recordados.</span>' },
    { s: '.hero-text', pt: 'Jogos atmosféricos e narrativos, moldados por uma identidade visual forte, personagens marcantes e detalhes silenciosos que permanecem com você.', es: 'Juegos atmosféricos y narrativos, definidos por una identidad visual fuerte, personajes memorables y pequeños detalles que permanecen contigo.' },
    { s: '.hero-actions .button', many: true, html: true, pt: ['Conheça o estúdio <span>→</span>','Nossa visão'], es: ['Conoce el estudio <span>→</span>','Nuestra visión'] },
    { s: '.hero-signature span', many: true, pt: ['HISTÓRIA · ATMOSFERA · PERSONAGEM','FOG GATE GAMES'], es: ['HISTORIA · ATMÓSFERA · PERSONAJE','FOG GATE GAMES'] },
    { s: '.studio-mark-caption span', pt: 'Estúdio Independente de Jogos', es: 'Estudio Independiente de Videojuegos' },
    { s: '.studio-mark-note', pt: 'ALÉM DO FAMILIAR', es: 'MÁS ALLÁ DE LO FAMILIAR' },
    { s: '.signal-track span', many: true, pt: ['ATMOSFERA','HISTÓRIA','PERSONAGENS','MISTÉRIO','IMERSÃO','ATMOSFERA','HISTÓRIA'], es: ['ATMÓSFERA','HISTORIA','PERSONAJES','MISTERIO','INMERSIÓN','ATMÓSFERA','HISTORIA'] },
    { s: '#studio .eyebrow', pt: '01 · O estúdio', es: '01 · El estudio' },
    { s: '#studio .section-heading h2', html: true, pt: 'Independente por escolha.<br />Ambicioso por natureza.', es: 'Independiente por elección.<br />Ambicioso por naturaleza.' },
    { s: '#studio .section-intro', pt: 'Somos um pequeno estúdio focado em criar mundos distintos, com identidade visual forte e um núcleo emocional.', es: 'Somos un pequeño estudio enfocado en crear mundos distintivos, con una identidad visual fuerte y un núcleo emocional.' },
    { s: '.studio-statement p', html: true, pt: 'Acreditamos que jogos memoráveis não são apenas jogados — eles são <em>sentidos</em>.', es: 'Creemos que los juegos memorables no solo se juegan — se <em>sienten</em>.' },
    { s: '.studio-statement span', pt: 'Cada cena, som e silêncio deve ter um propósito.', es: 'Cada escena, sonido y silencio debe tener un propósito.' },
    { s: '.principles h3', many: true, pt: ['Atmosfera em primeiro lugar','Pessoas no centro','Detalhes recompensam a curiosidade'], es: ['La atmósfera primero','Las personas en el centro','Los detalles recompensan la curiosidad'] },
    { s: '.principles p', many: true, pt: ['Iluminação, som, ambientes e ritmo se unem para criar lugares com presença própria.','Nossas histórias começam com personagens — seus medos, memórias, escolhas e as consequências que carregam.','Queremos que jogadores atentos, que leiam nas entrelinhas e explorem, descubram mais do que o caminho óbvio.'], es: ['La iluminación, el sonido, los entornos y el ritmo se combinan para crear lugares con presencia propia.','Nuestras historias comienzan con personajes — sus miedos, recuerdos, decisiones y las consecuencias que llevan consigo.','Queremos que los jugadores que miran de cerca, leen entre líneas y exploran descubran más que el camino evidente.'] },
    { s: '.studio-facts strong', many: true, pt: ['100%','História','Atmosfera','Detalhe'], es: ['100%','Historia','Atmósfera','Detalle'] },
    { s: '.studio-facts span', many: true, pt: ['Direção independente','No centro de tudo','Antes do espetáculo','Sempre importa'], es: ['Dirección independiente','En el centro de todo','Antes que el espectáculo','Siempre importa'] },
    { s: '#games .eyebrow', pt: '02 · Nossos jogos', es: '02 · Nuestros juegos' },
    { s: '#games .section-heading h2', html: true, pt: 'Nosso primeiro portal<br />está se abrindo.', es: 'Nuestro primer portal<br />se está abriendo.' },
    { s: '#games .section-intro', pt: 'The Girl in Seiran é nosso projeto de estreia — uma experiência de terror psicológico narrativa atualmente em desenvolvimento ativo.', es: 'The Girl in Seiran es nuestro proyecto debut — una experiencia narrativa de terror psicológico actualmente en desarrollo activo.' },
    { s: '.status', html: true, pt: '<i></i> Em desenvolvimento', es: '<i></i> En desarrollo' },
    { s: '.game-kicker', pt: 'FOG GATE GAMES · TÍTULO DE ESTREIA', es: 'FOG GATE GAMES · TÍTULO DEBUT' },
    { s: '.game-tagline', pt: '“Algumas memórias deveriam permanecer enterradas.”', es: '“Algunos recuerdos deberían permanecer enterrados.”' },
    { s: '.game-description', pt: 'Uma jornada narrativa sombria em torno do Hospital Seiran. Aoi é conduzida por memórias, medo e um mistério que se recusa a permanecer enterrado, em um mundo onde aquilo que é lembrado pode ser tão perigoso quanto aquilo que foi esquecido.', es: 'Un oscuro viaje narrativo alrededor del Hospital Seiran. Aoi atraviesa recuerdos, miedo y un misterio que se niega a permanecer enterrado, en un mundo donde lo recordado puede ser tan peligroso como lo olvidado.' },
    { s: '.game-meta span', many: true, pt: ['Terror Psicológico','Aventura Narrativa','Um jogador','PC'], es: ['Terror Psicológico','Aventura Narrativa','Un jugador','PC'] },
    { s: '.enter-seiran-link', html: true, pt: 'Entrar em Seiran <span>→</span>', es: 'Entrar en Seiran <span>→</span>' },
    { s: '#vision .eyebrow', pt: '03 · Nossa visão', es: '03 · Nuestra visión' },
    { s: '.vision-copy blockquote', pt: 'Queremos criar mundos que os jogadores lembrem pela forma como os fizeram sentir.', es: 'Queremos crear mundos que los jugadores recuerden por cómo los hicieron sentir.' },
    { s: '.vision-copy > p:last-child', pt: 'A Fog Gate Games está sendo construída em torno de uma ideia simples: atmosfera forte, personagens significativos e independência criativa podem fazer até um pequeno estúdio parecer inesquecível.', es: 'Fog Gate Games se está construyendo alrededor de una idea simple: una atmósfera fuerte, personajes significativos e independencia creativa pueden hacer que incluso un pequeño estudio se sienta inolvidable.' },
    { s: '#contact .eyebrow', pt: '04 · Além do portal', es: '04 · Más allá del portal' },
    { s: '.contact-copy h2', pt: 'Isso é apenas o começo.', es: 'Esto es solo el comienzo.' },
    { s: '.contact-copy > p:last-child', pt: 'Acompanhe o estúdio enquanto nossos mundos ganham forma. Atualizações de desenvolvimento, mídia e canais oficiais crescerão junto com o trabalho que criamos.', es: 'Sigue al estudio mientras nuestros mundos toman forma. Las novedades de desarrollo, medios y canales oficiales crecerán junto con el trabajo que creamos.' },
    { s: '.contact-actions .button', pt: 'Voltar ao topo', es: 'Volver arriba' },
    { s: '.footer-brand span', pt: 'Estúdio Independente de Jogos', es: 'Estudio Independiente de Videojuegos' },
    { s: '.footer > p', html: true, pt: '© <span id="year"></span> Fog Gate Games. Todos os direitos reservados.', es: '© <span id="year"></span> Fog Gate Games. Todos los derechos reservados.' },
    { s: '.footer-top', pt: 'TOPO ↑', es: 'ARRIBA ↑' },
  ];

  const seiran = [
    { s: '.archive-brand small', pt: 'Arquivo Seiran', es: 'Archivo Seiran' },
    { s: '.archive-status span', pt: 'Prévia pública', es: 'Vista previa pública' },
    { s: '.exit-link', html: true, pt: 'Sair de Seiran <span>↖</span>', es: 'Salir de Seiran <span>↖</span>' },
    { s: '.system-line', pt: 'HOSPITAL SEIRAN · ACESSO AO ARQUIVO', es: 'HOSPITAL SEIRAN · ACCESO AL ARCHIVO' },
    { s: '.hero-content h1', html: true, pt: 'Alguns lugares<br /><span>se lembram.</span>', es: 'Algunos lugares<br /><span>recuerdan.</span>' },
    { s: '.hero-lead', pt: 'Um hospital silencioso. Um corredor familiar. Uma memória que não permanece quieta.', es: 'Un hospital silencioso. Un pasillo familiar. Un recuerdo que no permanece quieto.' },
    { s: '.hero-copy', html: true, pt: 'Este é um vislumbre sem spoilers da atmosfera de <strong>The Girl in Seiran</strong> — uma história sobre medo, memória e as coisas que carregamos muito depois de acreditarmos que desapareceram.', es: 'Este es un vistazo sin spoilers a la atmósfera de <strong>The Girl in Seiran</strong> — una historia sobre el miedo, la memoria y las cosas que llevamos mucho después de creer que han desaparecido.' },
    { s: '.open-file', html: true, pt: 'Abrir o arquivo do caso <span>→</span>', es: 'Abrir el expediente <span>→</span>' },
    { s: '.dossier-close', pt: 'Fechar arquivo ×', es: 'Cerrar archivo ×' },
    { s: '.envelope-label strong', pt: 'ARQUIVO DO CASO 01', es: 'EXPEDIENTE 01' },
    { s: '.envelope-label small', pt: 'ARQUIVO PÚBLICO // SEM SPOILERS', es: 'ARCHIVO PÚBLICO // SIN SPOILERS' },
    { s: '.envelope-tab', pt: 'CONFIDENCIAL', es: 'CONFIDENCIAL' },
    { s: '.case-page[data-page="0"] .paper-meta span:first-child', pt: 'DOCUMENTO 01 / LOCAL', es: 'DOCUMENTO 01 / LUGAR' },
    { s: '.case-page[data-page="0"] .paper-stamp', html: true, pt: 'ARQUIVO<br />PÚBLICO', es: 'ARCHIVO<br />PÚBLICO' },
    { s: '.case-page[data-page="0"] .paper-kicker', pt: 'HOSPITAL SEIRAN // ARQUIVO DO LOCAL', es: 'HOSPITAL SEIRAN // ARCHIVO DEL LUGAR' },
    { s: '.case-page[data-page="0"] h2', pt: 'Alguns prédios guardam mais do que registros.', es: 'Algunos edificios guardan más que registros.' },
    { s: '.case-page[data-page="0"] .paper-lead', pt: 'O Hospital Seiran é apresentado como um lugar de ordem: corredores claros, rotinas clínicas e salas projetadas para transmitir segurança.', es: 'El Hospital Seiran se presenta como un lugar de orden: pasillos luminosos, rutinas clínicas y habitaciones diseñadas para transmitir seguridad.' },
    { s: '.case-page[data-page="0"] > p:not(.paper-kicker):not(.paper-lead)', html: true, pt: 'Mas a familiaridade pode se tornar desconfortável quando os menores detalhes deixam de coincidir com aquilo que você lembra. Em <strong>The Girl in Seiran</strong>, o hospital não é apenas um cenário. Seus espaços, documentos, silêncios e repetições participam discretamente da história.', es: 'Pero lo familiar puede volverse inquietante cuando los detalles más pequeños dejan de coincidir con lo que recuerdas. En <strong>The Girl in Seiran</strong>, el hospital no es solo un escenario. Sus espacios, documentos, silencios y repeticiones participan discretamente en la historia.' },
    { s: '.case-page[data-page="0"] .paper-note span', pt: 'OBSERVAÇÃO', es: 'OBSERVACIÓN' },
    { s: '.case-page[data-page="0"] .paper-note p', pt: 'Observe com atenção. O ambiente costuma falar antes que qualquer pessoa.', es: 'Mira con atención. El entorno suele hablar antes que cualquier persona.' },
    { s: '.case-page[data-page="1"] .paper-meta span:first-child', pt: 'DOCUMENTO 02 / SUJEITO', es: 'DOCUMENTO 02 / SUJETO' },
    { s: '.case-page[data-page="1"] .paper-stamp', html: true, pt: 'SUJEITO<br />AOI', es: 'SUJETO<br />AOI' },
    { s: '.case-page[data-page="1"] .paper-kicker', pt: 'ARQUIVO DO SUJEITO // AOI', es: 'ARCHIVO DEL SUJETO // AOI' },
    { s: '.case-page[data-page="1"] h2', pt: 'Uma garota carregando perguntas que não consegue ignorar.', es: 'Una chica que carga preguntas que no puede ignorar.' },
    { s: '.case-page[data-page="1"] .paper-lead', pt: 'Aoi está no centro da jornada, mas compreendê-la não é uma questão de ler um simples perfil.', es: 'Aoi está en el centro del viaje, pero comprenderla no consiste en leer un simple perfil.' },
    { s: '.case-page[data-page="1"] > p:not(.paper-kicker):not(.paper-lead)', pt: 'Sua experiência é moldada por incerteza, emoção e fragmentos que se recusam a se organizar perfeitamente. O jogador acompanha aquilo que ela percebe, teme e está disposta a enfrentar — sem receber uma resposta sobre qual memória merece ser considerada verdadeira.', es: 'Su experiencia está marcada por la incertidumbre, la emoción y fragmentos que se niegan a ordenarse perfectamente. El jugador sigue lo que ella percibe, teme y está dispuesta a enfrentar — sin que se le diga qué recuerdo merece ser considerado verdadero.' },
    { s: '.case-page[data-page="1"] .paper-note span', pt: 'STATUS', es: 'ESTADO' },
    { s: '.case-page[data-page="1"] .paper-note p', pt: 'Histórico pessoal parcialmente oculto. Mais informações permanecem dentro do jogo.', es: 'Historial personal parcialmente oculto. Más información permanece dentro del juego.' },
    { s: '.case-page[data-page="2"] .paper-meta span:first-child', pt: 'DOCUMENTO 03 / TEMA', es: 'DOCUMENTO 03 / TEMA' },
    { s: '.case-page[data-page="2"] .paper-stamp', html: true, pt: 'MEMÓRIA<br />INSTÁVEL', es: 'MEMORIA<br />INESTABLE' },
    { s: '.case-page[data-page="2"] .paper-kicker', pt: 'ARQUIVO TEMÁTICO // MEMÓRIA', es: 'ARCHIVO TEMÁTICO // MEMORIA' },
    { s: '.case-page[data-page="2"] h2', pt: 'Memória é evidência. Memória também não é confiável.', es: 'La memoria es evidencia. La memoria también es poco fiable.' },
    { s: '.case-page[data-page="2"] .paper-lead', pt: 'O passado não chega a Seiran como uma linha do tempo organizada. Ele surge em fragmentos — às vezes protetores, às vezes dolorosos, às vezes incompletos.', es: 'El pasado no llega a Seiran como una línea temporal ordenada. Surge en fragmentos — a veces protectores, a veces dolorosos, a veces incompletos.' },
    { s: '.case-page[data-page="2"] > p:not(.paper-kicker):not(.paper-lead)', pt: 'O jogo usa a memória como parte de sua tensão psicológica: não como um quebra-cabeça para ser resolvido imediatamente, mas como algo que altera o significado emocional de um lugar enquanto o jogador o atravessa.', es: 'El juego utiliza la memoria como parte de su tensión psicológica: no como un rompecabezas que deba resolverse de inmediato, sino como algo que transforma el significado emocional de un lugar mientras el jugador lo recorre.' },
    { s: '.case-page[data-page="2"] .paper-note span', pt: 'AVISO', es: 'ADVERTENCIA' },
    { s: '.case-page[data-page="2"] .paper-note p', pt: 'Algumas respostas mudam a pergunta em vez de encerrar o caso.', es: 'Algunas respuestas cambian la pregunta en lugar de cerrar el caso.' },
    { s: '.case-prev', pt: '← Arquivo anterior', es: '← Archivo anterior' },
    { s: '.case-next', pt: 'Próximo arquivo →', es: 'Siguiente archivo →' },
    { s: '.curtain-mark strong', pt: 'ENTRANDO EM SEIRAN', es: 'ENTRANDO EN SEIRAN' },
    { s: '.evidence-table', attr: 'data-label', pt: 'ARQUIVO DO CASO / SEIRAN', es: 'EXPEDIENTE / SEIRAN' },
    { s: '.unity-credit', pt: 'Desenvolvido com Unity', es: 'Desarrollado con Unity' },
    { s: '.unity-attribution', pt: 'Unity é uma marca ou marca registrada da Unity Technologies ou de suas afiliadas nos Estados Unidos e em outros países.', es: 'Unity es una marca comercial o marca registrada de Unity Technologies o sus afiliadas en Estados Unidos y otros países.' },
  ];
  home.forEach((entry, index) => { entry.ja = window.FGG_JA_HOME?.[index]; });
  seiran.forEach((entry, index) => { entry.ja = window.FGG_JA_SEIRAN?.[index]; });
  const pageIsSeiran = document.body.classList.contains('seiran-landing');
  const spec = pageIsSeiran ? seiran : home;
  const originals = new Map();

  const getValue = (el, entry) => entry.attr ? el.getAttribute(entry.attr) : (entry.html ? el.innerHTML : el.textContent);
  const setValue = (el, entry, value) => {
    if (entry.attr) el.setAttribute(entry.attr, value);
    else if (entry.html) el.innerHTML = value;
    else el.textContent = value;
  };

  const applyEntry = (entry, lang) => {
    const els = [...document.querySelectorAll(entry.s)];
    if (!els.length) return;
    if (!originals.has(entry)) originals.set(entry, els.map((el) => getValue(el, entry)));
    const original = originals.get(entry);
    const translated = lang === 'en' ? original : entry[lang];
    if (entry.many) els.forEach((el, i) => setValue(el, entry, translated?.[i] ?? original[i]));
    else setValue(els[0], entry, translated ?? original[0]);
  };

  const meta = {
    home: {
      en: ['Fog Gate Games — Independent Game Studio','Fog Gate Games is an independent game studio creating atmospheric, story-driven experiences with strong visual identity and memorable characters.'],
      pt: ['Fog Gate Games — Estúdio Independente de Jogos','A Fog Gate Games é um estúdio independente que cria experiências atmosféricas e narrativas com identidade visual forte e personagens memoráveis.'],
      es: ['Fog Gate Games — Estudio Independiente de Videojuegos','Fog Gate Games es un estudio independiente que crea experiencias atmosféricas y narrativas con una identidad visual fuerte y personajes memorables.'],
      ja: ['Fog Gate Games — 独立系ゲームスタジオ','Fog Gate Games は、強いビジュアルアイデンティティと印象的なキャラクターを軸に、雰囲気と物語を重視した作品を制作する独立系ゲームスタジオです。'],
    },
    seiran: {
      en: ['Enter Seiran | Fog Gate Games','Enter the world of The Girl in Seiran — an atmospheric preview from Fog Gate Games.'],
      pt: ['Entre em Seiran | Fog Gate Games','Entre no universo de The Girl in Seiran — uma prévia atmosférica da Fog Gate Games.'],
      es: ['Entra en Seiran | Fog Gate Games','Entra en el universo de The Girl in Seiran — una vista previa atmosférica de Fog Gate Games.'],
      ja: ['Seiran へ入る | Fog Gate Games','The Girl in Seiran の世界へ — Fog Gate Games による雰囲気重視のプレビュー。'],
    },
  };
  const updateLanguageUI = (lang) => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    document.querySelectorAll('.language-current-label').forEach((el) => { el.textContent = languageNames[lang].current; });
    document.querySelectorAll('.language-menu button').forEach((button, index) => {
      button.textContent = languageNames[lang].options[index];
      button.classList.toggle('active', button.dataset.lang === lang);
    });
    const key = pageIsSeiran ? 'seiran' : 'home';
    document.title = meta[key][lang][0];
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta[key][lang][1]);
  };

  let currentLanguage = localStorage.getItem('fgg-language') || 'en';
  const applyLanguage = (lang, persist = true) => {
    currentLanguage = languageNames[lang] ? lang : 'en';
    spec.forEach((entry) => applyEntry(entry, currentLanguage));
    updateLanguageUI(currentLanguage);
    if (!pageIsSeiran) {
      const year = document.querySelector('#year');
      if (year) year.textContent = new Date().getFullYear();
    }
    if (persist) localStorage.setItem('fgg-language', currentLanguage);
    window.dispatchEvent(new CustomEvent('fgg:languagechange', { detail: { lang: currentLanguage } }));
  };

  const closeMenus = () => document.querySelectorAll('.language-switcher.open').forEach((el) => el.classList.remove('open'));
  document.querySelectorAll('.language-current').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const switcher = button.closest('.language-switcher');
      const willOpen = !switcher.classList.contains('open');
      closeMenus();
      switcher.classList.toggle('open', willOpen);
    });
  });
  document.querySelectorAll('.language-menu button').forEach((button) => {
    button.addEventListener('click', () => { applyLanguage(button.dataset.lang); closeMenus(); });
  });
  document.addEventListener('click', closeMenus);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenus(); });

  window.FGG_I18N = {
    get lang() { return currentLanguage; },
    t(key) { return dynamic[currentLanguage]?.[key] || dynamic.en[key] || key; },
    set(lang) { applyLanguage(lang); },
  };
  applyLanguage(currentLanguage, false);
})();
