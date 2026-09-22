(() => {
  const copy = {
    en: { brand:'FOG GATE', studio:'Studio', games:'Games', vision:'Vision', contact:'Contact', overline:'FOG GATE STUDIOS', studioEyebrow:'01 · THE STUDIO', title:'A studio built around what remains.', intro:'We create atmospheric worlds where memory, identity and unseen presences shape every step.', statement:'Every world leaves an echo.', detail:'We build stories that stay with you after the screen goes dark.' },
    pt: { brand:'FOG GATE', studio:'Estúdio', games:'Jogos', vision:'Visão', contact:'Contato', overline:'FOG GATE STUDIOS', studioEyebrow:'01 · O ESTÚDIO', title:'Um estúdio construído sobre o que permanece.', intro:'Criamos mundos atmosféricos onde memória, identidade e presenças invisíveis moldam cada passo.', statement:'Todo mundo deixa um eco.', detail:'Criamos histórias que permanecem com você depois que a tela se apaga.' },
    es: { brand:'FOG GATE', studio:'Estudio', games:'Juegos', vision:'Visión', contact:'Contacto', overline:'FOG GATE STUDIOS', studioEyebrow:'01 · EL ESTUDIO', title:'Un estudio construido sobre lo que permanece.', intro:'Creamos mundos atmosféricos donde la memoria, la identidad y las presencias invisibles guían cada paso.', statement:'Todo mundo deja un eco.', detail:'Creamos historias que permanecen contigo cuando la pantalla se apaga.' },
    ja: { brand:'FOG GATE', studio:'スタジオ', games:'ゲーム', vision:'ビジョン', contact:'お問い合わせ', overline:'FOG GATE STUDIOS', studioEyebrow:'01 · スタジオ', title:'残るものを見つめるスタジオ。', intro:'記憶、アイデンティティ、見えない存在が一歩ごとに影響する世界を作ります。', statement:'すべての世界には残響がある。', detail:'画面が暗くなった後も残る物語を作ります。' },
  };
  const apply = (lang) => {
    const c = copy[lang] || copy.en;
    const set = (s, value) => { const el=document.querySelector(s); if(el) el.textContent=value; };
    const nav = document.querySelectorAll('.direction-nav-links a');
    [c.studio,c.games,c.vision,c.contact].forEach((v,i)=>{if(nav[i]) nav[i].textContent=v;});
    set('.direction-nav-brand', c.brand);
    set('.hero-overline', c.overline);
    set('#studio .eyebrow', c.studioEyebrow);
    const title=document.querySelector('#studio .section-heading h2'); if(title) title.textContent=c.title;
    set('#studio .section-intro', c.intro);
    const statement=document.querySelector('.studio-statement p'); if(statement) statement.textContent=c.statement;
    set('.studio-statement span', c.detail);
    document.querySelectorAll('.language-mini button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  };
  document.querySelectorAll('.language-mini button').forEach((b)=>b.addEventListener('click',()=>{ window.FGG_I18N?.set(b.dataset.lang); apply(b.dataset.lang); }));
  window.addEventListener('fgg:languagechange',(e)=>apply(e.detail.lang));
  apply(window.FGG_I18N?.lang || localStorage.getItem('fgg-language') || 'en');
})();
