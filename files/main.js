const listCards = document.getElementById('list');

list = `
<ul type="none">
   <li><span>Энни</span>
      <ul type="none" id="cards">
         <li onclick="solar_flair()">Солнечный дар</li>
         <li onclick="()" class="empty">Звёздное дитя</li>
         <li onclick="()" class="empty">Галактический гламур</li>
         <li onclick="()" class="empty">Звезда-ниндзя</li>
         <li onclick="triple_threat()">Тройная угроза</li>
         <li onclick="()" class="empty">Космическая мятежница</li>
         <li onclick="()" class="empty">Девочка-материя</li>
         <li onclick="()" class="empty">Вневременный кумир</li>
         <li onclick="()" class="empty">Сила луны</li>
         <li onclick="()" class="empty">Нестареющее чудо</li>
         <li onclick="()" class="empty">Звездная роза</li>
         <li onclick="()" class="empty">Клеймённая огнём</li>
         <li onclick="model_leader()">Лидер-модель</li>
         <li onclick="()" class="empty">Сияние звёзд</li>
      </ul></li>
   <li><span>Беовульф</span>
      <ul type="none">
         <li onclick="underdog()">Волк отпущения</li>
         <li onclick="cold_stones()">Ледяная глыба</li>
         <li onclick="number_one()">Первый</li>
         <li onclick="hype_man()">Показушник</li>
         <li onclick="wrestler()">Рестлер Х</li>
         <li onclick="()" class="empty">Любимец публики</li>
         <li onclick="()" class="empty">Кулак дракона</li>
         <li onclick="()" class="empty">Борец за свободу</li>
         <li onclick="()" class="empty">Волкодав</li>
         <li onclick="()" class="empty">Воин на час</li>
         <li onclick="()" class="empty">Царь зверей</li>
         <li onclick="()" class="empty">Укус змеи</li>
         <li onclick="()" class="empty">Тёмный навсегда</li>
         <li onclick="()" class="empty">Огряной зелёный</li>
      </ul></li>
   <li><span>Биг Бенд</span>
      <ul type="none">
         <li onclick="bassline()">Линия басов</li>
         <li onclick="beat_box()">Битбокс</li>
         <li onclick="virtuoso()">Классика виртуоза</li>
         <li onclick="robocopy()">Робокопия</li>
         <li onclick="resonant_evil()">Симфония зла</li>
         <li onclick="treble_maker()">Бравурный бит</li>
         <li onclick="private_dick()">Рядовой дик</li>
         <li onclick="jazz()">Солдат джаз</li>
         <li onclick="megasonic()">Мегасоник</li>
         <li onclick="epic_sax()">Эпик сакс гай</li>
         <li onclick="()" class="empty">Хэви-метал</li>
         <li onclick="()" class="empty">Звёздный состав</li>
      </ul></li>
   <li><span>Чёрный Георгин</span>
      <ul type="none">
         <li onclick="trigger_happy()">Авантюристка</li>
         <li onclick="golden_gunner()">Золотой стрелок</li>
         <li onclick="()" class="empty">Смертельное оружие</li>
         <li onclick="()" class="empty">Наёмница рока</li>
         <li onclick="()" class="empty">Сокрушительница душ</li>
         <li onclick="()" class="empty">Психокомандир</li>
         <li onclick="()" class="empty">Красный всадник</li>
         <li onclick="()" class="empty">Едкий агент</li>
         <li onclick="martial_outlaw()">Военный преступник</li>
         <li onclick="()" class="empty">Невозмутимость</li>
         <li onclick="fur_monger()">Меховик войны</li>
         <li onclick="()" class="empty">Носитель нечисти</li>
      </ul></li>
   <li><span>Церебелла</span>
      <ul type="none">
         <li onclick="understudy()">Дублёр</li>
         <li onclick="headstrong()">Сила мысли</li>
         <li onclick="toad_warrior()">Боевая жаба</li>
         <li onclick="gray_matter()">Мозг</li>
         <li onclick="big_top()">Мощный верх</li>
         <li onclick="harlequin()">Арлекин</li>
         <li onclick="brain_freeze()">Отмороженная</li>
         <li onclick="armed_forces()">Армия</li>
         <li onclick="criminal_mind()">Преступный умысел</li>
         <li onclick="" class="empty">Страшила</li>
         <li onclick="blitz_glamour()">Сила денег</li>
         <li onclick="heavy_handed()">Тяжёлая рука</li>
         <li onclick="star_spangled()">Звёзды и полосы</li>
      </ul></li>
   <li><span>Дабл</span>
      <ul type="none">
         <li onclick="nunsense()">Ересь</li>
         <li onclick="sundae_school()">Мороженные мощи</li>
         <li onclick="temple_tyrant()">Тиран из храма</li>
         <li onclick="myst_match()">Мистика</li>
         <li onclick="doublicious()">Двойная мята</li>
         <li onclick="rainbow_blight()">Радужный мор</li>
         <li onclick="immoral_fiber()">Аморальные устои</li>
         <li onclick="evergreen_evil()">Вечнозеленое зло</li>
         <li onclick="xenomorph()">Ксеноморф</li>
         <li onclick="()" class="empty">Порождение привычки</li>
         <li onclick="()" class="empty">Сердце тьмы</li>
         <li onclick="()" class="empty">Зуболом</li>
         <li onclick="()" class="empty">Алтарное эго</li>
      </ul></li>
   <li><span>Элайза</span>
      <ul type="none">
         <li onclick="denile()">Нилисток</li>
         <li onclick="decrypted()">Гроб да винчи</a></li>
         <li onclick="scarlet_viper()">Алая гадюка</li>
         <li onclick="bloody_valentine()">Кровь фэй</li>
         <li onclick="tomb_gloom()">Мрачная птица</li>
         <li onclick="inner_pieces()">Внутренние миры</li>
         <li onclick="red_velvet()">Красный бархат</li>
         <li onclick="lapis_luxury()">Роскошный лазурит</li>
         <li onclick="bloodbath()">Кровавая баня</li>
         <li onclick="diva_intervention()">Партия дивы</li>
         <li onclick="()" class="empty">Одна такая</li>
         <li onclick="()" class="empty">Драгоценная мумия</li>
      </ul></li>
   <li><span>Филия</span>
      <ul type="none">
         <li onclick="bad_hair()">Голова-трава</li>
         <li onclick="frayed_ends()">Концы секутся</li>
         <li onclick="ms_frosty()">Снеговичок</li>
         <li onclick="()" class="empty">Локон медичи</li>
         <li onclick="()" class="empty">Звезда вселенной</li>
         <li onclick="parasite_weave()">Паразит</li>
         <li onclick="()" class="empty">Звёздная угроза</li>
         <li onclick="()" class="empty">Волосы на ветру</li>
         <li onclick="dreadlocks()">Локоны-убийцы</li>
         <li onclick="djinn_frizz()">Кудряшка-джинн</li>
         <li onclick="class_cutter()">Мастер-класс</li>
         <li onclick="()" class="empty">Синяя молния</li>
      </ul></li>
   <li><span>Фукуа</span>
      <ul type="none">
         <li onclick="rough_copy()">Неточная копия</li>
         <li onclick="infernal_twin()">Двойник из пекла</li>
         <li onclick="souls_sister()">Сестра по духу</li>
         <li onclick="rain_shadow()">Грозовая тень</li>
         <li onclick="chameleon_twist()">Ящерица спок</li>
         <li onclick="feathered_edges()">Соколиные крылья</li>
         <li onclick="vaporwave_vixen()">Милая меломанка</li>
         <li onclick="night_terror()">Ночной кошмар</li>
         <li onclick="phantom_threads()">Призрачные нити</li>
         <li onclick="()" class="empty">Альфа-комплекс</li>
         <li onclick="()" class="empty">Демон из сна</li>
         <li onclick="shadow_puppet()">Мрачная марионетка</li>
         <li onclick="splitting_image()">Зазеркалье</li>
      </ul></li>
   <li><span>Мари</span>
      <ul type="none">
         <li onclick="bare_bones()">Голые кости</li>
         <li onclick="moody_magus()">Угрюмая колдунья</li>
         <li onclick="phantom_wrangler()">Призрачная пастушка</li>
         <li onclick="snake_charmer()">Змея-заклинательница</li>
         <li onclick="maid_of_honor()">Рыцарь-горничная</li>
         <li onclick="()" class="empty">Октоплазма</li>
         <li onclick="()" class="empty">Охотница с пылесосом</li>
         <li onclick="()" class="empty">Тёмная лошадка</li>
         <li onclick="()" class="empty">Гробокопательница</li>
         <li onclick="megalomaniac()">Мегаломаньяк</li>
         <li onclick="()" class="empty">Бессердечная</li>
      </ul></li>
   <li><span>Мисс Форчун</span>
      <ul type="none">
         <li onclick="just_kitten()">Котейка-шутейка</li>
         <li onclick="hellcat()">Адская кошка</li>
         <li onclick="ms_trial()">Мисс Адвокат</li>
         <li onclick="purrfect_dark()">Полный мр-р-рак</li>
         <li onclick="feline_lucky()">Трёхцветная удача</li>
         <li onclick="time_thief()">Похититель времени</li>
         <li onclick="hack_n_splash()">Рвать и поливать</li>
         <li onclick="claw_order()">Когти и порядок</li>
         <li onclick="rogue_agent()">Вор-одиночка</li>
         <li onclick="meow_furever()">Сейчёс и мяувсегда</li>
         <li onclick="furry_fury()">Лохматая ярость</li>
         <li onclick="wind_stalker()">Ветреный сталкер</li>
         <li onclick="foot_soldier()">Рядовой</li>
      </ul></li>
   <li><span>Пэйнвил</span>
      <ul type="none">
         <li onclick="rusty()">Ржавый</li>
         <li onclick="twisted_mettle()">Металлопрокат</li>
         <li onclick="blood_drive()">Сестра крови</li>
         <li onclick="rage_appropriate()">Подростковый</li>
         <li onclick="freaky_friday()">Жуткая пятница</li>
         <li onclick="firefly()">Светлячок</li>
         <li onclick="biting_cold()">Кусачий мороз</li>
         <li onclick="buzzkill()">Пчёлы-убийцы</li>
         <li onclick="raw_nerv()">Оголённый нерв</li>
         <li onclick="grim_fan()">Мрачное фанданго</li>
         <li onclick="()" class="empty">Паутинник</li>
         <li onclick="()" class="empty">Мухоловка</li>
         <li onclick="()" class="empty">Нейромант</li>
      </ul></li>
   <li><span>Парасоул</span>
      <ul type="none">
         <li onclick="sheltered()">Прикрытие</li>
         <li onclick="heavy_reign()">Осадки замка</li>
         <li onclick="no_egrets()">Держать строй</li>
         <li onclick="ivy_league()">Лига плюща</li>
         <li onclick="shadow_ops()">Тайные операции</li>
         <li onclick="()" class="empty">Неукротимость</li>
         <li onclick="regally_blonde()">Белая королева</li>
         <li onclick="()" class="empty">Незвёздный час</li>
         <li onclick="()" class="empty">Высший сорт</li>
         <li onclick="princess_pride()">Принцесса</li>
         <li onclick="()" class="empty">Зельдомания</li>
         <li onclick="()" class="empty">Бомба</li>
         <li onclick="()" class="empty">Рыжая авантюристка</li>
         <li onclick="summer_salt()">Соль дождя</li>
      </ul></li>
   <li><span>Пикок</span>
      <ul type="none">
         <li onclick="rerun()">Перезапуск</li>
         <li onclick="sketchy()">Мульт</li>
         <li onclick="prism_plumage()">Призматическое оперение</li>
         <li onclick="wildcard()">Джокер</li>
         <li onclick="pea_shooter()">Горошница</li>
         <li onclick="inkling()">Чернильница</li>
         <li onclick="mean_one()">Гадкая я</li>
         <li onclick="untouchable()">Неприкасаемые</li>
         <li onclick="ultraviolent()">Ультрафиолет</li>
         <li onclick="taf()">Вот и всё</li>
         <li onclick="()" class="empty">Животный дар</li>
         <li onclick="()" class="empty">Стоп-кадр</li>
         <li onclick="()" class="empty">Ловец снов</li>
      </ul></li>
   <li><span>Робо Форчун</span>
      <ul type="none">
         <li onclick="prototype()">Прототип</li>
         <li onclick="m30w()">М-РУ</li>
         <li onclick="nyanotech()">Нянотехнологии</li>
         <li onclick="blue_bomber()">Синий подрывник</li>
         <li onclick="vector_protector()">Защита вектора</li>
         <li onclick="purrminator()">Мур-р-минатор</li>
         <li onclick="()" class="empty">Головорезка</li>
         <li onclick="blue_screen()">Синий экран</li>
         <li onclick="()" class="empty">Террор-байт</li>
         <li onclick="number_cruncher()">Числодробилка</li>
         <li onclick="()" class="empty">Персона-бот</li>
         <li onclick="()" class="empty">Буферная зона</li>
         <li onclick="()" class="empty">В разгоне</li>
         <li onclick="()" class="empty">Икс-бот</li>
      </ul></li>
   <li><span>Сквигли</span>
      <ul type="none">
         <li onclick="stage_fright()">Боязнь сцены</li>
         <li onclick="scared_stiff()">Страх и паралич</li>
         <li onclick="dead_heat()">Мёртвый огонь</li>
         <li onclick="gang_green()">Бандитский зелёный</li>
         <li onclick="nearly_departed()">Почти ушедшая</li>
         <li onclick="necrobreaker()">Некробрейкер</li>
         <li onclick="thrill_shrieker()">Героиня триллера</li>
         <li onclick="()" class="empty">Холодная смерть</li>
         <li onclick="()" class="empty">Призрачный порыв</li>
         <li onclick="()" class="empty">Биоэкзорцист</li>
         <li onclick="()" class="empty">Арт-демонесса</li>
         <li onclick="plot_twisted()">Сюжетный поворот</li>
         <li onclick="love_crafted()">Лав и крафт</li>
      </ul></li>
   <li><span>Амбрелла</span>
      <ul type="none">
         <li onclick="salty()">Соль и душевная боль</li>
         <li onclick="fresh_heir()">Знатный ветер</li>
         <li onclick="rose_tinted()">Розовая звезда</li>
         <li onclick="puddle_pirate()">Пират-лужеход</li>
         <li onclick="candy_crusher()">Конфетный бой</li>
         <li onclick="()" class="empty">Сорвиголова</li>
         <li onclick="()" class="empty">Вундеркинд</li>
         <li onclick="()" class="empty">Верхом на волне</li>
         <li onclick="()" class="empty">Ты просто космос</li>
         <li onclick="()" class="empty">Юный телепат</li>
         <li onclick="()" class="empty">Прыткая пройдоха</li>
         <li onclick="()" class="empty">Жажда смерти</li>
         <li onclick="()" class="empty">Чемпионка дождя</li>
      </ul></li>
   <li><span>Валентайн</span>
      <ul type="none">
         <li onclick="scrub()">Интерн</li>
         <li onclick="icy_hot()">Горячий лёд</li>
         <li onclick="oh_mai()">Мэйдэй!</li>
         <li onclick="graveyard_shift()">В морге</li>
         <li onclick="kill_joy()">Смерть джой</li>
         <li onclick="pyro_technique()">Пиро-техника</li>
         <li onclick="silent_kill()">Сайлент килл</li>
         <li onclick="()" class="empty">Генерал-хирург</li>
         <li onclick="last_hope()">Надежда</li>
         <li onclick="()" class="empty">Последний клык</li>
         <li onclick="()" class="empty">Пламенная воительница</li>
         <li onclick="()" class="empty">Мокрое дело</li>
         <li onclick="()" class="empty">Инкогнито</li>
         <li onclick="()" class="empty">Жадность убийцы</li>
      </ul></li>
</ul>
`;
listCards.insertAdjacentHTML('afterbegin', list);

listCards.onclick = function(event) {
   if (event.target.nodeName !=='SPAN') return;
   closeAllSubMenu();
   event.target.nextElementSibling.classList.add('nav_active');
}
function closeAllSubMenu() {
   const subMenu = document.querySelectorAll('#list ul');
   Array.from(subMenu).forEach(item => item.classList.remove('nav_active'));
}

const aside = document.getElementById('aside');
const skullgirls = document.getElementById('skullgirls');
let build = document.getElementById('buildName');
let builds = document.getElementById('pop_build');

let person = {
   card_name: 'Название карточки',
   aka: '"никнейм"',
   card_src: 'main.jpg',
   description: 'Этот сайт сделан на скорую руку, не судите строго. Его цель - рассказать о карточках подробно без лишнего и в компактном виде. Будем стараться держать только актуальную информацию.На телефонах левый сайтбар находится в левой верхней вкладке "меню". После выбора закройте окно.',
   ability: 'Ключевое умение карточки в одном описании в целом.',
   marquee1: 'Две уникальных способностей персонажа.',
   marquee2: 'Может быть указано что лучше именно выбранной карточке.',
   prestige_description: 'Описание престижа, ',
   prestige_activation: 'при условии.',
   at: 'Стат',
   hp: 'Стат',
   atk_stats: ['Статы на персонажа при нападении на бота'],
   def_stats: ['Статы персонажа на защите, тоесть управляемый ботом'],
   build_1_img: 'valentine/Dead_On_Arrival.png',
   build_2_img: 'filia/Gregor_Samson.png',
   build_3_img: 'parasoul/Napalm_Shot.png',
   build_4_img: 'cerebella/Medici_Muscle.png',
   build_1_desc: 'Ульта, она же бб3 (блокбастер 3го уровня).',
   build_2_desc: 'Блокбастеры 1 и 2 уровня.',
   build_3_desc: 'Атакующие приёмы.',
   build_4_desc: 'Защитные приёмы.',
}
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
            <p>Неупал при потере более 10% НР за удар</p>
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
            <p>Неупал при потере более 10% НР за удар</p>
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
            <p>Призыв союзника с иммунитетом и ускорением на 10с, а врага с проклятьем и замедлением</p>
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
            <p>Неупал при потере более 10% НР за удар</p>
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
            <p>Неупал при потере более 10% НР за удар</p>
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
            <p>Призыв с 2 баффами в зависимости от стихии на 10 секунд</p>
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
            <p>Неупал при потере более 10% НР за удар</p>
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
            <p>Каждые 30 секунд даёт барьеры и бафф воскрешения</p>
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
            <p>При смене персонажа переносит все положительные эффекты</p>
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
            <p>Неупал при потере более 10% НР за удар</p>
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
function atkList() {return person.atk_stats.map(item => `<li>${item}</li>`)}
function defList() {return person.def_stats.map(item => `<li>${item}</li>`)}
pageGenerator();
hideNeedless();
function pageGenerator() {
   const page = `
   <h2 class="head">${person.card_name} <span class="aka">a.k.a. ${person.aka}</span></h2>
      <ul class="menu__char" type="none">
         <li class="first_main_column indent">
           <h3 class="center">Описание</h3>
           <p>${person.description}</p>
         </li>
         <li class="second_main_column indent">
           <h3 class="center">Ключевое умение</h3>
           <p>${person.ability}</p>
           <h3 class="ability">Уникальная способность</h3>
           <p>${person.marquee1}</p>
           <p>${person.marquee2}</p>
         </li>
         <li class="third_main_column">
           <table class="table" width="256px" height="100px">
             <tr>
               <th>Макс. атака</th>
               <td>${person.at}</td>
            </tr>
            <tr>
               <th>Макс. здоровье</th>
               <td>${person.hp}</td>
            </tr>
           </table>
           <p style="font-weight: bold; text-align: center;">Престиж</p>
           <p>${person.prestige_description}</p>
           <p>Активация престижа: ${person.prestige_activation}</p>
         </li>
         <li class="card_img"><img src="files/cards/${person.card_src}" width="270px" height="356px"></li>
      </ul>
      <h2 class="head">Прокачка персонажа</h2>
      <div class="char__mod">
         <div class="stats__column">
            <h2>Статы</h2>
            <div class="stats">
               <div class="stats__sub">
                  <h3>Атакующий фланг</h3>
                  <ul>${atkList().join('')}</ul>
               </div>
               <div class="stats__sub">
                  <h3>Защищающий фланг</h3>
                  <ul>${defList().join('')}</ul>
               </div>
            </div>
         </div>
         <div class="builds">
            <h2>Рекомендуемые приёмы</h2>
            <ul class="build__column" type="none">
               <li class="build__list"><img src="files/moves/${person.build_1_img}" height="100px"><span>${person.build_1_desc}</span></li>
               <li class="build__list"><img src="files/moves/${person.build_2_img}" height="100px"><span>${person.build_2_desc}</span></li>
               <li class="build__list"><img src="files/moves/${person.build_3_img}" height="100px"><span>${person.build_3_desc}</span></li>
               <li class="build__list"><img src="files/moves/${person.build_4_img}" height="100px"><span>${person.build_4_desc}</span></li>
            </ul>
         </div>
      </div>
      <h2 class="head head_mt">Дополнительная информация</h2>
   `;
   skullgirls.insertAdjacentHTML('beforeend', page);
   closer();
};

function hideNeedless() {
   if (innerWidth < 671) {
      document.querySelector('.head').replaceChildren();
      document.querySelector('.second_main_column').replaceChildren();
      document.querySelector('.third_main_column').replaceChildren();
      document.querySelector('.card_img').replaceChildren();
      document.querySelector('.stats__column').replaceChildren();
   }
}

supports_all()
function supports_all() {
   let a = `<p style="text-align: center;">Все саппорты в игре</p><div id="supp_ntfc"></div>`;
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
   let p = `<p style="text-align: center;">Подходящие саппорты</p><div id="supp_ntfc"></div>`;
   const supprs = document.getElementById('supp_ntfc');
   skullgirls.insertAdjacentHTML('beforeend', p);
   supports_fncn()
}
function supports_fncn() {
   for (let user of supports_list) {
      if (user.name == person.supps[0] ^ user.name == person.supps[1] ^ user.name == person.supps[2]) supp_ntfc.insertAdjacentHTML('beforeend', user.body);
   }
}
function addition() {
   let s = `<div style="padding-bottom: 16px;"><p style="margin: 0 10px; text-indent: 14px;">${person.addition}</p></div>`;
   skullgirls.insertAdjacentHTML('beforeend', s);
}
function buildLoad() {
   let l = `<div>
      <ul type="none" class="pop_build__list">
         <li>
            <p>${person.build_form_name1}</p>
            ${person.build_form_path1}
         </li>
         <li>
            <p>${person.build_form_name2}</p>
            ${person.build_form_path2}
         </li>
      </ul>
   </div>`;
   skullgirls.insertAdjacentHTML('beforeend', l);
}

function bg_image(arrow) {
   skullgirls.style.backgroundImage = `url(${arrow})`;
   skullgirls.style.backgroundAttachment = 'fixed';
   skullgirls.style.backgroundSize = 'cover';
   skullgirls.style.backgroundPosition = 'center';
}
