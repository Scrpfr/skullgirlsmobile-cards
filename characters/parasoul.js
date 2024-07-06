const parasoul = {
   marquee1: 'Мышление - 15% бонус к шансу крита за слезу.',
   marquee2: 'Масса - 15% бонус к крит урону за слезу.',
   prestige: 'Получает точность каждые несколько секунд рядом со слезой.',
   p_active: '12% за каждую слезу.'
}

function sheltered() {
   card_name = 'Прикрытие';
   aka = 'Шелтередка';
   card_src = 'Sheltered.png';
   description = 'Шикарный персонаж для новичков, очень сильная карточка. Однозначно стоит алмазить, даже в алмазе можно часто играть за неё.';
   ability = 'При критическом ударе получает бешенство на 7 секунд. Повышает шанс крита на 20% для всех союзников.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2}`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '7,392';
   hp = '44,794';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Motor_Brigade.png';
   build_3_img = 'parasoul/Silent_Scope.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Хороший урон с оглушением.';
   build_3_desc = 'Дистанционный выстрел.';
   build_4_desc = 'Вызывает кровотечение.';
   supps = ['icyhot', 'evergreen', 'sundae'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function heavy_reign() {
   card_name = 'Осадки замка';
   aka = 'Осадки';
   card_src = 'Heavy_Reign.png';
   description = 'Не для новичков, требует очень высокие статы. Основной геймплей замков: быстро накопить ульту и использовать. Несмотря на очень низкую атаку, довольно неплохая карточка, можно использовать в параллельных мирах, включая беспощадку. Прокачивать не стоит, больше фановый персонаж, как нейромант на минималках, только при этом намного дешевле.';
   ability = 'При нанесении или получении критического урона шанс 50% получить 15% шкалы для всех блокбастеров.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2}`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '6,951';
   hp = '54,202';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Inferno_Brigade.png';
   build_2_img = 'parasoul/Motor_Brigade.png';
   build_3_img = 'parasoul/Baillement.png';
   build_4_img = 'parasoul/Napalm_Shower.png';
   build_1_desc = 'Увеличенный урон при 3х слезах.';
   build_2_desc = 'Хороший урон с оглушением.';
   build_3_desc = 'Получить иммунитет.';
   build_4_desc = 'Выбросит 3 слезы, используют перед ультой.';
   supps = ['sheltered', 'peashooter', 'martial_outlaw'];
   build_form_name1 = 'Примерный билд';
   build_form_path1 = '<img src="files/moves/parasoul/build1_Heavy_Reign.jpg">';
   build_form_name2 = 'Видео геймплея';
   build_form_path2 = '<iframe src="https://www.youtube.com/embed/s-h-byOZFjo?si=KU44t5VurNxEoy3K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   buildLoad();
   highlight(m2);
}

function no_egrets() {
   card_name = 'Держать строй';
   aka = 'Строй';
   card_src = 'No_Egrets.png';
   description = 'Очень хороший серебрянный персонаж. Но нужно хорошо прокачать шанс крита для неё, уникальное умение при это массу. Можно прокачивать, но до золота: в алмазе слабовата как уроном, так и абилкой.';
   ability = 'Критический удар блокирует блокбастеры и ос приёмы противника на 4 секунды.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2}`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '8,640';
   hp = '52,263';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Silent_Scope.png';
   build_3_img = 'parasoul/Egret_Call.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Дистанционный выстрел.';
   build_3_desc = 'Получить точность.';
   build_4_desc = 'Дальняя атака, вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function ivy_league() {
   card_name = 'Лига плюща';
   aka = 'Плющ';
   card_src = 'Ivy_League.png';
   description = 'Хороший урон для серебра, но качать эту вариацию не стоит: слабая в алмазе и нет применения.';
   ability = 'При выбросе слезы, накладывает замедление на 10 секунд. При взрыве слёз наложит иссушение за каждую слезу на 10 сек.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2} Основной выбор.`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '9,946';
   hp = '47,021';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Motor_Brigade.png';
   build_3_img = 'parasoul/Napalm_Shower.png';
   build_4_img = 'parasoul/Napalm_Toss.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Может оглушить цель.';
   build_3_desc = 'Выпустить 3 слезы.';
   build_4_desc = 'Выпустить 1 слезу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function shadow_ops() {
   card_name = 'Тайные операции';
   aka = 'Тока Киришима';
   card_src = 'Shadow_Ops.png';
   description = 'В основном, рифтовый персонаж для серебра и золота. Зажав противника у стены, он будет под вечным проклятьем, но управлять абилкой сложно. Не стоит алмазить.';
   ability = 'Себе накладывает шипы, противник получает проклятье. Срабатывает если персонаж стоит у слезы Парасоул 1 секунду, снимается отойдя от слезы.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2} Основной выбор.`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '7,335';
   hp = '57,485';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Silent_Scope.png';
   build_3_img = 'parasoul/Egret_Call.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Дистанционный выстрел.';
   build_3_desc = 'Получить точность.';
   build_4_desc = 'Дальняя атака, вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function indomitable() {
   card_name = 'Неукротимость';
   aka = 'Неукротимость';
   card_src = 'Indomitable.png';
   description = 'Новая карточка, но выглядит впечатляюще из-за постоянного меткого глаза, воровства баффов и миазм.';
   ability = 'Когда здоровье противника падает ниже 80%, получает меткий глаз и даёт блок исцеления. Эффекты постоянные, но снимаются при нокдауне Парасоул. Под метким глазом и на стороне противника, каждые 3 секунды забирает 1 бафф с врага и получает миазмы на 7 сек.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2} Основной выбор.`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '8,564';
   hp = '67,047';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Silent_Scope.png';
   build_3_img = 'parasoul/Motor_Brigade.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Дистанционный выстрел.';
   build_3_desc = 'Шанс оглушить.';
   build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function regally_blonde() {
   card_name = 'Белая королева';
   aka = 'Королева';
   card_src = 'Regally_Blonde.png';
   description = 'Универсальный вариант Парасоул, хороший урон и защитная абилка. Качать не рекомендуется, слаба и в атаке, и в защите.';
   ability = 'Стоя вплотную, не даст противнику использовать ос приёмы и получает автоблок каждые 2 сек (снимается отойдя от противника). Когда любой перс использует блокбастер, с шансом 50% противник получит увечье и потеряет 50% шкалы всех бб.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2} Основной выбор.`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '10,100';
   hp = '60,960';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Точность', 'Сопрот криту'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Silent_Scope.png';
   build_3_img = 'parasoul/Egret_Dive.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Дистанционный выстрел.';
   build_3_desc = 'Щит с оглушением.';
   build_4_desc = 'Дальняя атака, вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function star_crossed() {
   card_name = 'Незвёздный час';
   aka = 'Незвёздка';
   card_src = 'Star-Crossed.png';
   description = 'Можно получить только из ивентовых реликвий ветра. Урона на высоких рядах в би не хватит, но качать можно, хорошая.';
   ability = 'Свовременный блок обычных атак с шансом 50% оглушает на 3 секунды. Блокбастеры наносят на 100% больше урона по оглушённым противникам.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2} Основной выбор.`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '10,100';
   hp = '60,960';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Silent_Scope.png';
   build_3_img = 'parasoul/Egret_Call.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Дистанционный выстрел.';
   build_3_desc = 'Получить точность.';
   build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function primed() {
   card_name = 'Высший сорт';
   aka = 'Высорт';
   card_src = 'Primed.png';
   description = 'Очень сильная карточка, которую также можно получить из быстрой игры в золоте (набрав 10 миллионов очков) и в алмазе (за 30 миллионов). Рекомендуется качать, даже в алмазе очень достойная.';
   ability = 'При выбросе слезы, активирует бешенство на 10 секунд. Взорванные слёзы накладывают кровотечение на 5 секунд.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2}`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '11,616';
   hp = '54,874';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Motor_Brigade.png';
   build_3_img = 'parasoul/Egret_Call.png';
   build_4_img = 'parasoul/Napalm_Shower.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Получить точность.';
   build_4_desc = 'Выбросить 3 слезы.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function princess_pride() {
   card_name = 'Принцесса';
   aka = 'Принцесса';
   card_src = 'Princess_Pride.png';
   description = 'Атакующая рифтовая карточка. Урон низкий, но используют из-за восстановления здоровья. Уже потеряла актуальность, но всё ещё применима.';
   ability = 'При выпадении слезы получает регенерацию на 6 сек. При взрыве слёз восстанавливает 6% НР за каждую слезу.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2} Основной выбор.`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '8,564';
   hp = '67,047';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Silent_Scope.png';
   build_3_img = 'parasoul/Baillement.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Дистанционный выстрел.';
   build_3_desc = 'Получить иммунитет.';
   build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function high_ruler() {
   card_name = 'Зельдомания';
   aka = 'Зельда';
   card_src = 'High_Ruler.png';
   description = 'Отличная рифтовая карточка, дающая сразу и порчу и проклятье. Урон низкий, но всё равно популярная.';
   ability = 'Если противник стоит близко со слезой, через 1 секунду у него блокируются блокбастеры и призыв. Удар от взрыва слёз накладывает проклятье и порчу на 10 сек, а тёмные персонажи также получают усталость на 5 сек.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2} Основной выбор.`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '8,564';
   hp = '67,047';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Silent_Scope.png';
   build_3_img = 'parasoul/Napalm_Trigger.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Дистанционный выстрел.';
   build_3_desc = 'Детонатор слёз.';
   build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function bombshell() {
   card_name = 'Бомба';
   aka = 'Барби';
   card_src = 'Bombshell.png';
   description = 'Подойдёт, если научиться спамить от трёх слёз и взрывать их под противником, чтобы атаки были неблокируемыми, а реализовать это проще у стены. Может получать бешенства для увеличения урона, но это больше рандом из-за регенерации и барьера, да и 5 стаков бешенства не выйдет сделать.';
   ability = 'При появлении слезы, получает бешенство, барьер или регенерацию на 15 сек. При взрыве не менее 3 слёз, взрыв неблокируемый и меняет палитру Парасоул. Взрыв 5 слёз даст оглушение на 2 сек.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2} Основной выбор.`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '11,770';
   hp = '71,117';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Napalm_Shower.png';
   build_3_img = 'parasoul/Napalm_Trigger.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Выбросить 3 слезы.';
   build_3_desc = 'Детонатор слёз.';
   build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function risky_ginger() {
   card_name = 'Рыжая авантюристка';
   aka = 'Рыжуха';
   card_src = 'Risky_Ginger.png';
   description = 'Менее популярна чем Сорт, но более сильная, просто неудобная абилка, заставляющая атаковать противника в движении и не получать ударов в блок. Качайте по своему желанию.';
   ability = 'При ударе движущегося противника, даёт ему метку смерти на 15 сек и получает постоянное бешенство, которое снимается при получении ударов в блок. Блокбастеры неблокируемые при не менее 3 стаков бешенства.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2} Основной выбор.`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '11,770';
   hp = '71,117';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Silent_Scope.png';
   build_3_img = 'parasoul/Motor_Brigade.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Дистанционный выстрел.';
   build_3_desc = 'Шанс оглушить.';
   build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function summer_salt() {
   card_name = 'Соль дождя';
   aka = 'Сасальто';
   card_src = 'Summer_Salt.png';
   description = 'Имба. Огромный урон, снятие баффов, точность которая блокирует абилку противника. Всё это делает её одним из самых лучших персонажей в игре.';
   ability = 'Противники теряют 1 бафф и 3% здоровья каждые 2 сек находясь рядом со слезой. При взрыве не менее 3 слёз, снимает с себя все дебаффы и получает 5 ур точности, взорванные слёзы наносят 100% доп урона.';
   marquee1 = `${parasoul.marquee1}`;
   marquee2 = `${parasoul.marquee2} Основной выбор.`;
   prestige_description = `${parasoul.prestige}`;
   prestige_activation = `${parasoul.p_active}`;
   at = '13,556';
   hp = '64,032';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'parasoul/Canopy_Bounce.png';
   build_2_img = 'parasoul/Silent_Scope.png';
   build_3_img = 'parasoul/Egret_Call.png';
   build_4_img = 'parasoul/Napalm_Shot.png';
   build_1_desc = 'Снимает положительные эффекты врага.';
   build_2_desc = 'Дистанционный выстрел.';
   build_3_desc = 'Получить точность.';
   build_4_desc = 'Вызывает кровотечение.';
   addition = 'Отсылка: отсылает на Амбреллу, младшую сестру Парасоул. Отсылает только палитрой и фразой, абилка скорее всего Парасоул.';
   skullgirls.replaceChildren();
   pageGenerator();
   additions();
}