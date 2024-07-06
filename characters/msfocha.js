const msfocha = {
   marquee1: 'Лизь - каждые 10 сек даёт регенерацию на 20 сек если персонаж не получает ударов (включая блок).',
   marquee2: 'Пи-ип - каждые 10 сек даёт бешенство на 20 сек если персонаж не получает ударов (включая блок).',
   prestige: 'Каждые ~10 сек накладывает уклонение а противнику раскол защиты на 5 сек.',
   p_active: '1,5% от скорости при движении.'
}

function just_kitten() {
   card_name = 'Котейка-шутейка';
   aka = 'Шутейка';
   card_src = 'Just_Kitten.png';
   description = 'Хороший персонаж для знакомства с Мисс Форчун, популярна и у опытных игроков - превращает дебаффы в точность, а также можно ставить на защиту - может получить уклон и контратаковать. Можно алмазить.';
   ability = 'При получении отрицательного эффекта шанс 50% превратить его в точность. При получении удара (не включая снаряды) шанс 15% получить уклонение и ускорение на 10 сек.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '9,178';
   hp = '39,188';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Точность', 'Атака'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function hellcat() {
   card_name = 'Адская кошка';
   aka = 'Хэллкэт';
   card_src = 'Hellcat.png';
   description = 'Очень хороший вариант для бронзы. Эффект точности позволит нанести 100% критический урон и при этом не позволяет сработать абилке противника. Качать стоит, алмазить можно но не в первую очередь.';
   ability = 'Получает постоянное бешенство каждые 8 сек при здоровье выше 50%, но снимает при здоровье менее 50%. При убийстве под бешенством, получает 5 точности.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '10,522';
   hp = '35,271';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}

function purrfect_dark() {
   card_name = 'Полный мр-р-рак';
   aka = 'Мрак';
   card_src = 'Purrfect_Dark.png';
   description = 'Одна из лучших кошек в игре, и персонажей в целом. Огромный урон, постоянное проклятье и шанс моментального убийства, ещё и дешевизна, просто имба! Качайте и наслаждайтесь.';
   ability = 'Находясь рядом с противником в течении 10 сек, накладывает на него безвременные метку смерти и проклятье. Если здоровье противника меньше 50% и наложена метка смерти, удары головой имеют шанс 10% сразу убить его.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2}`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '12,327';
   hp = '41,184';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['В дд статах'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   supps = ['martial_outlaw', 'horse', 'joy'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function ms_trial() {
   card_name = 'Мисс адвокат';
   aka = 'Адвокат';
   card_src = 'Ms._Trial.png';
   description = 'Не для новичков, так как требует хорошие статы и умение ловить противника на движении. Зато умение играть головой не требует.';
   ability = 'При ударе движущегося противника, снимает 1 его бафф и получает 5 точности. Удары с точностью игнорируют защиту и броню противника.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '10,695';
   hp = '45,716';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/Cat_Scratch.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/El_Gato.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Шанс наложить метку смерти, либо (при блоке) раскол брони.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Критический удар может оглушить противника.';
   addition = 'Видео пример игры: </br><iframe width="560" height="315" src="https://www.youtube.com/embed/dv4IrnsY9lA?si=Mn7hfeGMVOHRmvw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   addition();
   highlight(m2);
}
function feline_lucky() {
   card_name = 'Трёхцветная удача';
   aka = 'Трёхцветка';
   card_src = 'Feline_Lucky.png';
   description = 'Интересная абилка, которая делает трёхцветку практически непобедимой. Можно ставить в рифты на защиту под катализатор "Когтеточка" и возможно "Светлое начало", но если нет более подходящих Форчун. В атаке тоже может участвовать, но 2% шанс всё же крайне низко. Качать стоит только фанатам Мисс Форчун.';
   ability = 'Каждые 7 секунд получает 3 точности. Крит удары любого персонажа с шансом 2% дадут иммунитет, неуязвимость, неупал и непоколебимость на 15 сек.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '9,082';
   hp = '50,324';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Точность', 'Атака'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function time_thief() {
   card_name = 'Похититель времени';
   aka = 'Похихитель';
   card_src = 'Time_Thief.png';
   description = 'Крайне интересная вариация. Наносит 100% урона просто снимая голову! Тоесть, полностью прокачанная карточка просто сняв голову снесёт 10 000 урона! Который будет ещё увеличен статами (например +100%) и ещё баффами бешенства. При этом можно вернуть голову и снова её метнуть, абилка каждый раз будет срабатывать. Играют в основном в рифты, но очень редко. Качать можно, но есть варианты ещё лучше.';
   ability = 'При метании головы, даёт метку смерти на 10 сек и наносит 100% урона от своей максимальной атаки. 100% полученного урона в безголовом режиме восстановится при возвращении головы на место.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '10,618';
   hp = '58,714';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function hack_n_splash() {
   card_name = 'Рвать и поливать';
   aka = 'Поливайка';
   card_src = 'Hack_N_Splash.png';
   description = 'Честно говоря, абилку сложно реализовать в бою, поэтому мало кто ей пользуется. Качать стоит, играть чисто огромным уроном.';
   ability = 'Своевременный блок обычных атак даёт 5 точности, а противнику увечья и раскол брони на 10 сек. Если враг с увечьем, крит удары головой наносят дополнительно 3% максимального здоровья противника.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '14,343';
   hp = '48,039';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function claw_order() {
   card_name = 'Когти и порядок';
   aka = 'Когти';
   card_src = 'Claw_Order.png';
   description = 'Одна из лучших вариаций кошки. Не даст противнику использовать никакие приёмы. Рекомендуется качать.';
   ability = 'Шанс 50% что критический удар сбросит таймеры отрицательных эффектов противника (кроме оглушения и гибели). Удар, снимающий более 5% НР за удар, перезаряжают особые приёмы и отключает блокбастеры противника на 15 сек.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '12,519';
   hp = '53,357';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function rogue_agent() {
   card_name = 'Вор-одиночка';
   aka = 'Вор';
   card_src = 'Rogue_Agent.png';
   description = 'Одна из лучших вариаций кошки. Урон невероятно большой, точность, уклонения. Рекомендуется качать, но очень желательно уметь играть головой.';
   ability = 'Каждый удар головой имеет шанс 25% забрать 1 бафф превратив его в 3 точности. Удары с точностью дают уклонение, а противнику метку смерти на 10 сек.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '14,343';
   hp = '48,039';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   supps = ['martial_outlaw', 'horse', 'octoplasm'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function meow_furever() {
   card_name = 'Сейчёс и мяувсегда';
   aka = 'Сейчёска';
   card_src = 'Meow_Furever.png';
   description = 'Универсал, гроза новичков в защите. Якобы неубиваемая и оглушает ещё. Но контрится весьма легко, проще всего Элайзами. В рифтах ещё опаснее, ставят под катализаторы "Когтеточка" и "Светлое начало", но даже так не представляет серьёзной угрозы. В атаке играет через точность. Качать не стоит, устарела.';
   ability = 'За каждую потерю 10% НР получает неупал на 10 сек и 5 точности. Когда эффект неупал закончится, наложит на врага метку смерти на 10 сек и оглушение на 4с.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '10,618';
   hp = '58,714';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Атака'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function furmidable() {
   card_name = 'Котомощь';
   aka = 'Фурмидабл';
   card_src = 'Furmidable.png';
   description = '';
   ability = '';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2}`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '11,847';
   hp = '80,045';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function furry_fury() {
   card_name = 'Лохматая ярость';
   aka = 'Лохма';
   card_src = 'Furry_Fury.png';
   description = 'Имба Форчун, гигантский урон, бешенства, кровотоки, обязательно качаем. Довольно проста в использовании при этом.';
   ability = 'Если ваше здоровье выше чем у противника, шанс 20% при ударе на 10 сек вызвать кровотечение врагу и активировать бешенство. При не менее 3 бешенства, через каждую секунду снимает бафф у противника.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2}`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '14,592';
   hp = '62,247';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   supps = ['evergreen', 'octoplasm', 'seraph'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function wind_stalker() {
   card_name = 'Ветреный сталкер';
   aka = 'Свалкер';
   card_src = 'WindStalker.png';
   description = 'Не плохая вариация, но увы, Лохматая или Мрак смотрятся лучше. Не стоит качать.';
   ability = 'Если противник находится рядом с головой, вампирит 5% шкалы блокбастера. Когда здоровье противника опускается ниже 35%, блокирует смену персонажа и накладывает метку смерти и гибель на 15 сек. Гибель снимется если цель использует блокбастер.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '12,384';
   hp = '68,506';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function foot_soldier() {
   card_name = 'Рядовой';
   aka = 'Джури';
   card_src = 'Foot_Soldier.png';
   description = 'Очень крутая вариация. Меньше урона в сравнении с Лохматкой, но лучше контроллирует эффекты.';
   ability = 'Удары головой снимают с противника 1 бафф и дают метку смерти на 7 сек, также снимает с себя дебафф. Дополнительный урон 10% за каждый бафф на любом из персонажей, до 100%.';
   marquee1 = `${msfocha.marquee1}`;
   marquee2 = `${msfocha.marquee2} Основной выбор.`;
   prestige_description = `${msfocha.prestige}`;
   prestige_activation = `${msfocha.p_active}`;
   at = '12,384';
   hp = '68,506';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'msfocha/Fiber_Upper.png';
   build_2_img = 'msfocha/El_Gato.png';
   build_3_img = 'msfocha/Cat_Slide.png';
   build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   build_1_desc = 'Может нанести раскол брони.';
   build_2_desc = 'Критический удар может оглушить противника.';
   build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}