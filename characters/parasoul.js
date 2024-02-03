const parasoul = {
   marquee1: 'Мышление - 15% бонус к шансу крита за слезу.',
   marquee2: 'Масса - 15% бонус к крит урону за слезу.',
   prestige: 'Получает точность каждые несколько секунд рядом со слезой.',
   p_active: '12% за каждую слезу.'
}

function sheltered() {
   person.card_name = 'Прикрытие';
   person.aka = 'Шелтередка';
   person.card_src = 'Sheltered.png';
   person.description = 'Шикарный персонаж для новичков, очень сильная карточка. Однозначно стоит алмазить, даже в алмазе можно часто играть за неё.';
   person.ability = 'При критическом ударе получает бешенство на 7 секунд. Повышает шанс крита на 20% для всех союзников.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '7,392';
   person.hp = '44,794';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Motor_Brigade.png';
   person.build_3_img = 'parasoul/Silent_Scope.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Хороший урон с оглушением.';
   person.build_3_desc = 'Дистанционный выстрел.';
   person.build_4_desc = 'Вызывает кровотечение.';
   person.supps = ['icyhot', 'evergreen', 'sundae'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function heavy_reign() {
   person.card_name = 'Осадки замка';
   person.aka = 'Осадки';
   person.card_src = 'Heavy_Reign.png';
   person.description = 'Не для новичков, требует очень высокие статы. Основной геймплей замков: быстро накопить ульту и использовать. Несмотря на очень низкую атаку, довольно неплохая карточка, можно использовать в параллельных мирах, включая беспощадку. Прокачивать не стоит, больше фановый персонаж, как нейромант на минималках, только при этом намного дешевле.';
   person.ability = 'При нанесении или получении критического урона шанс 50% получить 15% шкалы для всех блокбастеров.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '6,951';
   person.hp = '54,202';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Inferno_Brigade.png';
   person.build_2_img = 'parasoul/Motor_Brigade.png';
   person.build_3_img = 'parasoul/Baillement.png';
   person.build_4_img = 'parasoul/Napalm_Shower.png';
   person.build_1_desc = 'Увеличенный урон при 3х слезах.';
   person.build_2_desc = 'Хороший урон с оглушением.';
   person.build_3_desc = 'Получить иммунитет.';
   person.build_4_desc = 'Выбросит 3 слезы, используют перед ультой.';
   person.supps = ['sheltered', 'peashooter', 'martial_outlaw'];
   person.build_form_name1 = 'Примерный билд';
   person.build_form_path1 = '<img src="files/moves/parasoul/build1_Heavy_Reign.jpg">';
   person.build_form_name2 = 'Видео геймплея';
   person.build_form_path2 = '<iframe src="https://www.youtube.com/embed/s-h-byOZFjo?si=KU44t5VurNxEoy3K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   buildLoad();
}

function no_egrets() {
   person.card_name = 'Держать строй';
   person.aka = 'Строй';
   person.card_src = 'No_Egrets.png';
   person.description = 'Очень хороший серебрянный персонаж. Но нужно хорошо прокачать шанс крита для неё, уникальное умение при это массу. Можно прокачивать, но до золота: в алмазе слабовата как уроном, так и абилкой.';
   person.ability = 'Критический удар блокирует блокбастеры и ос приёмы противника на 4 секунды.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '8,640';
   person.hp = '52,263';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Egret_Call.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Получить точность.';
   person.build_4_desc = 'Дальняя атака, вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function ivy_league() {
   person.card_name = 'Лига плюща';
   person.aka = 'Плющ';
   person.card_src = 'Ivy_League.png';
   person.description = 'Хороший урон для серебра, но качать эту вариацию не стоит: слабая в алмазе и нет применения.';
   person.ability = 'При выбросе слезы, накладывает замедление на 10 секунд. При взрыве слёз наложит иссушение за каждую слезу на 10 сек.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '9,946';
   person.hp = '47,021';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Motor_Brigade.png';
   person.build_3_img = 'parasoul/Napalm_Shower.png';
   person.build_4_img = 'parasoul/Napalm_Toss.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Может оглушить цель.';
   person.build_3_desc = 'Выпустить 3 слезы.';
   person.build_4_desc = 'Выпустить 1 слезу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function shadow_ops() {
   person.card_name = 'Тайные операции';
   person.aka = 'Тока Киришима';
   person.card_src = 'Shadow_Ops.png';
   person.description = 'В основном, рифтовый персонаж для серебра и золота. Зажав противника у стены, он будет под вечным проклятьем, но управлять абилкой сложно. Не стоит алмазить.';
   person.ability = 'Себе накладывает шипы, противник получает проклятье. Срабатывает если персонаж стоит у слезы Парасоул 1 секунду, снимается отойдя от слезы.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '7,335';
   person.hp = '57,485';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Egret_Call.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Получить точность.';
   person.build_4_desc = 'Дальняя атака, вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function indomitable() {
   person.card_name = 'Неукротимость';
   person.aka = 'Неукротимость';
   person.card_src = 'Indomitable.png';
   person.description = 'Новая карточка, но выглядит впечатляюще из-за постоянного меткого глаза, воровства баффов и миазм.';
   person.ability = 'Когда здоровье противника падает ниже 80%, получает меткий глаз и даёт блок исцеления. Эффекты постоянные, но снимаются при нокдауне Парасоул. Под метким глазом и на стороне противника, каждые 3 секунды забирает 1 бафф с врага и получает миазмы на 7 сек.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '8,564';
   person.hp = '67,047';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Motor_Brigade.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Шанс оглушить.';
   person.build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function regally_blonde() {
   person.card_name = 'Белая королева';
   person.aka = 'Королева';
   person.card_src = 'Regally_Blonde.png';
   person.description = 'Универсальный вариант Парасоул, хороший урон и защитная абилка. Качать не рекомендуется, слаба и в атаке, и в защите.';
   person.ability = 'Стоя вплотную, не даст противнику использовать ос приёмы и получает автоблок каждые 2 сек (снимается отойдя от противника). Когда любой перс использует блокбастер, с шансом 50% противник получит увечье и потеряет 50% шкалы всех бб.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '10,100';
   person.hp = '60,960';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Точность', 'Сопрот криту'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Egret_Dive.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Щит с оглушением.';
   person.build_4_desc = 'Дальняя атака, вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function star_crossed() {
   person.card_name = 'Незвёздный час';
   person.aka = 'Незвёздка';
   person.card_src = 'Star-Crossed.png';
   person.description = 'Можно получить только из ивентовых реликвий ветра. Урона на высоких рядах в би не хватит, но качать можно, хорошая.';
   person.ability = 'Свовременный блок обычных атак с шансом 50% оглушает на 3 секунды. Блокбастеры наносят на 100% больше урона по оглушённым противникам.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '10,100';
   person.hp = '60,960';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Egret_Call.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Получить точность.';
   person.build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function primed() {
   person.card_name = 'Высший сорт';
   person.aka = 'Высорт';
   person.card_src = 'Primed.png';
   person.description = 'Очень сильная карточка, которую также можно получить из быстрой игры в золоте (набрав 10 миллионов очков) и в алмазе (за 30 миллионов). Рекомендуется качать, даже в алмазе очень достойная.';
   person.ability = 'При выбросе слезы, активирует бешенство на 10 секунд. Взорванные слёзы накладывают кровотечение на 5 секунд.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '11,616';
   person.hp = '54,874';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Motor_Brigade.png';
   person.build_3_img = 'parasoul/Egret_Call.png';
   person.build_4_img = 'parasoul/Napalm_Shower.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Получить точность.';
   person.build_4_desc = 'Выбросить 3 слезы.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function princess_pride() {
   person.card_name = 'Принцесса';
   person.aka = 'Принцесса';
   person.card_src = 'Princess_Pride.png';
   person.description = 'Атакующая рифтовая карточка. Урон низкий, но используют из-за восстановления здоровья. Уже потеряла актуальность, но всё ещё применима.';
   person.ability = 'При выпадении слезы получает регенерацию на 6 сек. При взрыве слёз восстанавливает 6% НР за каждую слезу.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '8,564';
   person.hp = '67,047';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Baillement.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Получить иммунитет.';
   person.build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function high_ruler() {
   person.card_name = 'Зельдомания';
   person.aka = 'Зельда';
   person.card_src = 'High_Ruler.png';
   person.description = 'Отличная рифтовая карточка, дающая сразу и порчу и проклятье. Урон низкий, но всё равно популярная.';
   person.ability = 'Если противник стоит близко со слезой, через 1 секунду у него блокируются блокбастеры и призыв. Удар от взрыва слёз накладывает проклятье и порчу на 10 сек, а тёмные персонажи также получают усталость на 5 сек.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '8,564';
   person.hp = '67,047';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Napalm_Trigger.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Детонатор слёз.';
   person.build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function bombshell() {
   person.card_name = 'Бомба';
   person.aka = 'Барби';
   person.card_src = 'Bombshell.png';
   person.description = 'Новая и не понятная карточка, бесстихийная и меняет наряд при взрыве слёз, что ей ничего не даёт кроме внешности. Пока недоступна.';
   person.ability = 'При появлении слезы, получает бешенство, барьер или регенерацию на 15 сек. При взрыве не менее 3 слёз, взрыв неблокируемый и меняет палитру Парасоул. Взрыв 5 слёз даст оглушение на 2 сек.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '11,770';
   person.hp = '71,117';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Napalm_Shower.png';
   person.build_3_img = 'parasoul/Napalm_Trigger.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Выбросить 3 слезы.';
   person.build_3_desc = 'Детонатор слёз.';
   person.build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function risky_ginger() {
   person.card_name = 'Рыжая авантюристка';
   person.aka = 'Рыжуха';
   person.card_src = 'Risky_Ginger.png';
   person.description = 'Менее популярна чем Сорт, но более сильная, просто неудобная абилка, заставляющая атаковать противника в движении и не получать ударов в блок. Качайте по своему желанию.';
   person.ability = 'При ударе движущегося противника, даёт ему метку смерти на 15 сек и получает постоянное бешенство, которое снимается при получении ударов в блок. Блокбастеры неблокируемые при не менее 3 стаков бешенства.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '11,770';
   person.hp = '71,117';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Motor_Brigade.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Шанс оглушить.';
   person.build_4_desc = 'Вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function summer_salt() {
   person.card_name = 'Соль дождя';
   person.aka = 'Сасальто';
   person.card_src = 'Summer_Salt.png';
   person.description = 'Имба. Огромный урон, снятие баффов, точность которая блокирует абилку противника. Всё это делает её одним из самых лучших персонажей в игре.';
   person.ability = 'Противники теряют 1 бафф и 3% здоровья каждые 2 сек находясь рядом со слезой. При взрыве не менее 3 слёз, снимает с себя все дебаффы и получает 5 ур точности, взорванные слёзы наносят 100% доп урона.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '13,556';
   person.hp = '64,032';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Egret_Call.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Получить точность.';
   person.build_4_desc = 'Вызывает кровотечение.';
   person.addition = 'Отсылка: отсылает на Амбреллу, младшую сестру Парасоул. Отсылает только палитрой и фразой, абилка скорее всего Парасоул.';
   skullgirls.replaceChildren();
   pageGenerator();
   addition();
}
