const listCards = document.getElementById('list');
const aside = document.getElementById('aside');
const skullgirls = document.getElementById('skullgirls');
let build = document.getElementById('buildName');
let builds = document.getElementById('pop_build');
let supports_list = [
   {name: 'scrub', body: `
   <div class="supp_card" style="background: var(--wind-theme);">
        <div class="bronze wind">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/scrub.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Интерн</h3>
            <p>+15% НР при призыве</p>
            <p>Неупал при потере более 10% НР за удар (от уника)</p>
        </div>
     </div>
   `},
   {name: 'icyhot', body: `
      <div class="supp_card" style="background: var(--water-theme);">
        <div class="bronze water">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/iHot.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Горячий лёд</h3>
            <p>Призыв с реген 15 сек и шкалы бб 15%</p>
            <p>Неупал при потере более 10% НР за удар (от уника)</p>
        </div>
     </div>
   `},
   {name: 'rerun', body: `
      <div class="supp_card" style="background: var(--fire-theme);">
        <div class="bronze fire">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/rerun.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Перезапуск</h3>
            <p>+50% перезарядка призыва</p>
            <p>Призыв с бешенством на 10 секунд</p>
            <p>Шанс 50% неблокируемого призыва (от уника)</p>
        </div>
     </div>
   `},
   {name: 'sundae', body: `
      <div class="supp_card" style="background: var(--water-theme);">
        <div class="bronze water">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/sSchool.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Мороженные мощи</h3>
            <p>-3 сек дебаффам союзника</p>
            <p>+3 сек дебаффам противника</p>
        </div>
     </div>
   `},
   {name: 'rcopy', body: `
      <div class="supp_card" style="background: var(--wind-theme);">
        <div class="bronze wind">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/rCopy.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Неточная копия</h3>
            <p>Перманентное ускорение активному персу через 5 сек в бою против той же стихии</p>
        </div>
     </div>
   `},
   {name: 'sketchy', body: `
      <div class="supp_card" style="background: var(--wind-theme);">
        <div class="bronze wind">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/sketch.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Мульт</h3>
            <p>Призывы дают иммунитет и ускорение, врагу проклятье и замедление</p>
            <p>Шанс 50% неблокируемого призыва (от уника)</p>
        </div>
     </div>
   `},
   {name: 'harlequin', body: `
      <div class="supp_card" style="background: var(--fire-theme);">
        <div class="gold fire">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/hQuin.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Арлекин</h3>
            <p>+20% урона ос приёмов</p>
            <p>+35% перезарядка приёмов</p>
        </div>
     </div>
   `},
   {name: 'joy', body: `
      <div class="supp_card" style="background: var(--light-theme);">
        <div class="silver light">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/kJoy.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Смерть Джой</h3>
            <p>Воскрешает союзников при своём поражении</p>
            <p>Неупал при потере более 10% НР за удар (от уника)</p>
        </div>
     </div>
   `},
   {name: 'peashooter', body: `
   <div class="supp_card" style="background: var(--wind-theme);">
      <div class="silver wind">
         <div class="avatar">
            <div class="frame">
               <div class="backdrop">
                  <img src="files//icons/pShoot.png" class="portrait">
               </div>
            </div>
         </div>
      </div>
      <div class="card_desc">
         <h3>Горошница</h3>
         <p>+35% урона снарядов</p>
         <p>15% шанс дать раскол брони на 6 сек снарядом</p>
      </div>
   </div>
   `},
   {name: 'sheltered', body: `
   <div class="supp_card" style="background: var(--fire-theme);">
      <div class="bronze fire">
         <div class="avatar">
            <div class="frame">
               <div class="backdrop">
                  <img src="files//icons/shelt.png" class="portrait">
               </div>
            </div>
         </div>
      </div>
      <div class="card_desc">
         <h3>Прикрытие</h3>
         <p>+20% шанс крита</p>
      </div>
   </div>
   `},
   {name: 'martial_outlaw', body: `
   <div class="supp_card" style="background: var(--wind-theme);">
   <div class="gold wind">
      <div class="avatar">
         <div class="frame">
            <div class="backdrop">
               <img src="files//icons/martialO.png" class="portrait">
            </div>
         </div>
      </div>
   </div>
   <div class="card_desc">
       <h3>Военный преступник</h3>
       <p>Ускорение на 12 секунд при заряженном ударе</p>
       <p>Кровь и раскол на 10 сек при ускорении</p>
   </div>
</div>
   `},
   {name: 'rockstar', body: `
      <div class="supp_card" style="background: var(--light-theme);">
        <div class="silver light">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/rStar.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Звезда вселенной</h3>
            <p>Призыв с барьерами на 10 сек</p>
            <p>По истечении барьеров даёт неупал на 10с</p>
        </div>
     </div>
   `},
   {name: 'surgeon', body: `
      <div class="supp_card" style="background: var(--wind-theme);">
        <div class="gold wind">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/sGeneral.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Генерал-хирург</h3>
            <p>Иммунитет и реген каждые 30с</p>
            <p>Неупал при потере более 10% НР за удар (от уника)</p>
        </div>
     </div>
   `},
   {name: 'evergreen', body: `
      <div class="supp_card" style="background: var(--wind-theme);">
        <div class="gold wind">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/eEvil.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Вечнозелёное зло</h3>
            <p>Продление всех положительных эффектов на 5 секунд</p>
        </div>
     </div>
   `},
   {name: 'rosetin', body: `
      <div class="supp_card" style="background: var(--fire-theme);">
        <div class="silver fire">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/roseTinted.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Розовая звезда</h3>
            <p>При потере здоровья даёт шипы и барьеры</p>
            <p>Снимает все дебаффы каждые 20 секунд</p>
        </div>
     </div>
   `},
   {name: 'honormaid', body: `
      <div class="supp_card" style="background: var(--light-theme);">
        <div class="silver light">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/mOfHonor.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Рыцарь-горничная</h3>
            <p>Шанс 50% при блоке превратить 1 дебафф в барьер</p>
            <p>восст 2% НР в секунду если персонаж с барьером</p>
        </div>
     </div>
   `},
   {name: 'prisma', body: `
      <div class="supp_card" style="background: var(--neutral-theme);">
        <div class="silver neutral">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/pPlum.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Призматическое оперение</h3>
            <p>Призыв с 2 баффами и снаряды с шансом 10% дают дебафф, эффекты длятся 10 сек и зависят от стихии цели</p>
        </div>
     </div>
   `},
   {name: 'graymatter', body: `
      <div class="supp_card" style="background: var(--dark-theme);">
        <div class="silver dark">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/gMatt.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Мозг</h3>
            <p>+25% шкалы бб при старте</p>
            <p>+50% шкалы бб при смерти союзника (1 раз за игру)</p>
        </div>
     </div>
   `},
   {name: 'graveyard', body: `
      <div class="supp_card" style="background: var(--dark-theme);">
        <div class="silver dark">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/gShift.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Морг</h3>
            <p>Мощная регенерация за смерть (союзника или противника)</p>
            <p>Неупал при потере более 10% НР за удар (от уника)</p>
        </div>
     </div>
   `},
   {name: 'horse', body: `
      <div class="supp_card" style="background: var(--dark-theme);">
        <div class="gold dark">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/lRegent.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Тёмная лошадка</h3>
            <p>+50% урона тёмным персонажам, если на Мари ускорение</p>
        </div>
     </div>
   `},
   {name: 'persona', body: `
      <div class="supp_card" style="background: var(--light-theme);">
        <div class="gold light">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/pAssist.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Персона-бот</h3>
            <p>Каждые 30 секунд даёт барьер и благославение</p>
        </div>
     </div>
   `},
   {name: 'octoplasm', body: `
      <div class="supp_card" style="background: var(--water-theme);">
        <div class="gold water">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/mCorpse.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Октоплазма</h3>
            <p>+5 секунд времени дебаффам врага, исключая противников стихии воды и эффект оглушения</p>
        </div>
     </div>
   `},
   {name: 'mogul', body: `
      <div class="supp_card" style="background: var(--light-theme);">
        <div class="gold light">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/dNaire.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Знатный магнат</h3>
            <p>Каждые 20 сек даёт барьер</p>
            <p>+15% к урону светлому персонажу за каждый его бафф барьера</p>
        </div>
     </div>
   `},
   {name: 'inner', body: `
      <div class="supp_card" style="background: var(--neutral-theme);">
        <div class="gold neutral">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/iPiece.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Внутренние миры</h3>
            <p>Переносит все положительные эффекты с себя на сменщика или наоборот</p>
        </div>
     </div>
   `},
   {name: 'lasthope', body: `
      <div class="supp_card" style="background: var(--light-theme);">
        <div class="gold light">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/lHope.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Надежда</h3>
            <p>Даёт сильную регенерацию на низком здоровье (раз за бой)</p>
            <p>Неупал при потере более 10% НР за удар (от уника)</p>
        </div>
     </div>
   `},
   {name: 'fanfavorite', body: `
      <div class="supp_card" style="background: var(--light-theme);">
        <div class="silver light">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/fFav.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Любимец публики</h3>
            <p>Каждые 30 сек неупал на 10 секунд</p>
        </div>
     </div>
   `},
   {name: 'starlight', body: `
      <div class="supp_card" style="background: var(--neutral-theme);">
        <div class="diamond neutral">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/sRose.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Звёздная роза</h3>
            <p>Своевременные блоки снимают дебафф и дают барьер на 15 сек</p>
            <p>Под барьером получают бешенство и реген</p>
        </div>
     </div>
   `},
   {name: 'model', body: `
      <div class="supp_card" style="background: var(--water-theme);">
        <div class="diamond water">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/model.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Лидер-модель</h3>
            <p>Каждые 20 секунд снимает все дебаффы и даёт броню на 15 сек</p>
        </div>
     </div>
   `},
   {name: 'champ', body: `
      <div class="supp_card" style="background: var(--light-theme);">
        <div class="diamond light">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/reigningChamp.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Чемпионка дождя</h3>
            <p>Каждые 20 секунд даёт ускорение и неупал на 10 сек</p>
        </div>
     </div>
   `},
   {name: 'seraph', body: `
      <div class="supp_card" style="background: var(--fire-theme);">
        <div class="diamond fire">
           <div class="avatar">
              <div class="frame">
                 <div class="backdrop">
                    <img src="files//icons/sSold.png" class="portrait">
                 </div>
              </div>
           </div>
        </div>
        <div class="card_desc">
            <h3>Пламенная воительница</h3>
            <p>При снятии более 10% НР 1м ударом даёт бешенство на 10 с</p>
            <p>25% от крит ударов восстанавливают НР под бешенством</p>
        </div>
     </div>
   `}
];
function atkList() {return atk_stats.map(item => `<li>${item || '???'}</li>`)}
function defList() {return def_stats.map(item => `<li>${item || '???'}</li>`)}
function buildMoves() {return build_moves.map(item => `<li class="build__list">${item}</li>`)}

// mobile menu
listCards.onclick = function(event) {
   if (event.target.nodeName !=='SPAN') return;
   closeAllSubMenu();
   event.target.nextElementSibling.classList.add('nav_active');
}
function closeAllSubMenu() {
   const subMenu = document.querySelectorAll('#list ul');
   Array.from(subMenu).forEach(item => item.classList.remove('nav_active'));
}

// page
function pageGenerator() {
   const page = `
      <ul class="menu__char" type="none">
         <li class="card_name"><h2 class="head">${card_name} <span class="aka">a.k.a. ${aka}</span></h2></li>
         <li class="the_description indent box">
           <h3 class="center highlight">Описание</h3>
           <p>${description || 'Не указано.'}</p>
         </li>
         <li class="the_signature_ab indent box">
           <h3 class="center highlight">Ключевое умение</h3>
           <p>${ability || 'Не указано.'}</p>
         </li>
         <li class="the_marquee box">
            <h3 class="center">Уникальная способность</h3>
            <p id="m1">${marquee1}</p>
            <p id="m2">${marquee2}</p>
         </li>
         <li class="the_prestige box">
            <p style="font-weight: bold; text-align: center;">Престиж</p>
            <p>${prestige_description}</p>
            <p>Активация престижа: ${prestige_activation}</p>
         </li>
         <li class="the_base_stats">
           <table class="box" width="256px" height="100px">
             <tr>
               <th>Макс. атака</th>
               <td>${at || '???'}</td>
            </tr>
            <tr>
               <th>Макс. здоровье</th>
               <td>${hp || '???'}</td>
            </tr>
           </table>
         </li>
         <li class="card_img"><img src="files/cards/${card_src}" width="270px" height="356px"></li>
         <li class="the_add_stats box">
            <div class="stats__column">
            <h2>Статы</h2>
            <div class="stats">
               <div class="stats__sub">
                  <h3>Атакующий фланг</h3>
                  <ul type="disc">${atkList().join('')}</ul>
               </div>
               <div class="stats__sub">
                  <h3>Защищающий фланг</h3>
                  <ul type="disc">${defList().join('')}</ul>
               </div>
            </div>
         </li>
         <li class="the_moves box">
            <div class="builds">
               <h2>Рекомендуемые приёмы</h2>
               <ul class="build__column" type="none">
                  <li class="build__list"><img src="files/moves/${build_1_img}" height="100px"><span>${build_1_desc}</span></li>
                  <li class="build__list"><img src="files/moves/${build_2_img}" height="100px"><span>${build_2_desc}</span></li>
                  <li class="build__list"><img src="files/moves/${build_3_img}" height="100px"><span>${build_3_desc}</span></li>
                  <li class="build__list"><img src="files/moves/${build_4_img}" height="100px"><span>${build_4_desc}</span></li>
               </ul>
            </div>
         </li>
      </div>
      </ul>
      <h2 class="head">Дополнительная информация</h2>
   `;
   skullgirls.insertAdjacentHTML('beforeend', page);
   closer();
};

function avava(arrow) {
   console.log('work');
   let moves_list = `<img src="files/moves/${build_1_img}" height="100px"><span>${build_1_desc}</span>`;
}

supports_all()
function supports_all() {
   let a = `<p style="text-align: center;"><span>Все саппорты в игре</span></p><div id="supp_ntfc"></div>`;
   skullgirls.insertAdjacentHTML('beforeend', a);
   supports_all_fncn()
}
function supports_all_fncn() {
   for (let supall of supports_list) {
      supp_ntfc.insertAdjacentHTML('beforeend', supall.body);
   }
}
function opener() {
   aside.classList.add('btn_active');
}
function closer() {
   if (innerWidth < 1340) {
      aside.classList.remove('btn_active');
   }
}

function supports() {
   let p = `<p style="text-align: center;"><span>Подходящие саппорты</span></p><div id="supp_ntfc"></div>`;
   const supprs = document.getElementById('supp_ntfc');
   skullgirls.insertAdjacentHTML('beforeend', p);
   supports_fncn()
}
function supports_fncn() {
   for (let user of supports_list) {
      if (user.name == supps[0] ^ user.name == supps[1] ^ user.name == supps[2]) supp_ntfc.insertAdjacentHTML('beforeend', user.body);
   }
}
function additions() {
   let s = `<div style="padding-bottom: 16px;"><p style="margin: 0 10px; text-indent: 14px;">${this.addition}</p></div>`;
   skullgirls.insertAdjacentHTML('beforeend', s);
}
function buildLoad() {
   let l = `<div>
      <ul type="none" class="pop_build__list">
         <li>
            <p>${build_form_name1}</p>
            ${build_form_path1}
         </li>
         <li>
            <p>${build_form_name2}</p>
            ${build_form_path2}
         </li>
      </ul>
   </div>`;
   skullgirls.insertAdjacentHTML('beforeend', l);
}

function highlight(mq) {
   if (mq == m1) {
      document.querySelector('#m1').classList.add('highlight');
   } else if (mq == m2) {
      document.querySelector('#m2').classList.add('highlight');
   }
   
}