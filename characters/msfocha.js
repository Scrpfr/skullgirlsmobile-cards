const msfocha = {
   marquee1: 'Лизь - каждые 10 сек даёт регенерацию на 20 сек если персонаж не получает ударов (включая блок).',
   marquee2: 'Пи-ип - каждые 10 сек даёт бешенство на 20 сек если персонаж не получает ударов (включая блок).',
   prestige: 'Каждые ~10 сек накладывает уклонение а противнику раскол защиты на 5 сек.',
   p_active: '1,5% от скорости при движении.'
}

function just_kitten() {
   person.card_name = 'Котейка-шутейка';
   person.aka = 'Шутейка';
   person.card_src = 'Just_Kitten.png';
   person.description = 'Хороший персонаж для знакомства с Мисс Форчун, популярна и у опытных игроков - превращает дебаффы в точность, а также можно ставить на защиту - может получить уклон и контратаковать. Можно алмазить.';
   person.ability = 'При получении отрицательного эффекта шанс 50% превратить его в точность. При получении удара (не включая снаряды) шанс 15% получить уклонение и ускорение на 10 сек.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '9,178';
   person.hp = '39,188';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Точность', 'Атака'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function hellcat() {
   person.card_name = 'Адская кошка';
   person.aka = 'Хэллкэт';
   person.card_src = 'Hellcat.png';
   person.description = 'Очень хороший вариант для бронзы. Эффект точности позволит нанести 100% критический урон и при этом не позволяет сработать абилке противника. Качать стоит, алмазить можно но не в первую очередь.';
   person.ability = 'Постоянное бешенство при здоровье выше 50%. При убийстве под бешенством, получает 5 точности.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '10,522';
   person.hp = '35,271';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function purrfect_dark() {
   person.card_name = 'Полный мр-р-рак';
   person.aka = 'Мрак';
   person.card_src = 'Purrfect_Dark.png';
   person.description = 'Одна из лучших кошек в игре, и персонажей в целом. Огромный урон, постоянное проклятье и шанс моментального убийства, ещё и дешевизна, просто имба! Качайте и наслаждайтесь.';
   person.ability = 'Находясь рядом с противником в течении 10 сек, накладывает на него безвременные метку смерти и проклятье. Если здоровье противника меньше 50% и наложена метка смерти, удары головой имеют шанс 10% сразу убить его.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '12,327';
   person.hp = '41,184';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['В дд статах'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   person.supps = ['martial_outlaw', 'horse', 'joy'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function ms_trial() {
   person.card_name = 'Мисс адвокат';
   person.aka = 'Адвокат';
   person.card_src = 'Ms._Trial.png';
   person.description = 'Не для новичков, так как требует хорошие статы и умение ловить противника на движении. Зато умение играть головой не требует.';
   person.ability = 'При ударе движущегося противника, снимает 1 его бафф и получает 5 точности. Удары с точностью игнорируют защиту и броню противника.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '10,695';
   person.hp = '45,716';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/Cat_Scratch.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/El_Gato.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Шанс наложить метку смерти, либо (при блоке) раскол брони.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Критический удар может оглушить противника.';
   person.addition = 'Видео пример игры: </br><iframe width="560" height="315" src="https://www.youtube.com/embed/dv4IrnsY9lA?si=Mn7hfeGMVOHRmvw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   addition();
}
function feline_lucky() {
   person.card_name = 'Трёхцветная удача';
   person.aka = 'Трёхцветка';
   person.card_src = 'Feline_Lucky.png';
   person.description = 'Интересная абилка, которая делает трёхцветку практически непобедимой. Можно ставить в рифты на защиту под катализатор "Когтеточка" и возможно "Светлое начало", но если нет более подходящих Форчун. В атаке тоже может участвовать, но 2% шанс всё же крайне низко. Качать стоит только фанатам Мисс Форчун.';
   person.ability = 'Каждые 7 секунд получает 3 точности. Крит удары любого персонажа с шансом 2% дадут иммунитет, неуязвимость, неупал и непоколебимость на 15 сек.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '9,082';
   person.hp = '50,324';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Точность', 'Атака'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function time_thief() {
   person.card_name = 'Похититель времени';
   person.aka = 'Похихитель';
   person.card_src = 'Time_Thief.png';
   person.description = 'Крайне интересная вариация. Наносит 100% урона просто снимая голову! Тоесть, полностью прокачанная карточка просто сняв голову снесёт 10 000 урона! Который будет ещё увеличен статами (например +100%) и ещё баффами бешенства. При этом можно вернуть голову и снова её метнуть, абилка каждый раз будет срабатывать. Играют в основном в рифты, но очень редко. Качать можно, но есть варианты ещё лучше.';
   person.ability = 'При метании головы, даёт метку смерти на 10 сек и наносит 100% урона от своей максимальной атаки. 100% полученного урона в безголовом режиме восстановится при возвращении головы на место.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '10,618';
   person.hp = '58,714';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function hack_n_splash() {
   person.card_name = 'Рвать и поливать';
   person.aka = 'Поливайка';
   person.card_src = 'Hack_N_Splash.png';
   person.description = 'Честно говоря, абилку сложно реализовать в бою, поэтому мало кто ей пользуется. Качать стоит, играть чисто огромным уроном.';
   person.ability = 'Своевременный блок обычных атак даёт 5 точности, а противнику увечья и раскол брони на 10 сек. Если враг с увечьем, крит удары головой наносят дополнительно 3% максимального здоровья противника.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '14,343';
   person.hp = '48,039';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function claw_order() {
   person.card_name = 'Когти и порядок';
   person.aka = 'Когти';
   person.card_src = 'Claw_Order.png';
   person.description = 'Одна из лучших вариаций кошки. Не даст противнику использовать никакие приёмы. Рекомендуется качать.';
   person.ability = 'Шанс 50% что критический удар сбросит таймеры отрицательных эффектов противника (кроме оглушения и гибели). Удар, снимающий более 5% НР за удар, перезаряжают особые приёмы и отключает блокбастеры противника на 15 сек.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '12,519';
   person.hp = '53,357';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function rogue_agent() {
   person.card_name = 'Вор-одиночка';
   person.aka = 'Вор';
   person.card_src = 'Rogue_Agent.png';
   person.description = 'Одна из лучших вариаций кошки. Урон невероятно большой, точность, уклонения. Рекомендуется качать, но очень желательно уметь играть головой.';
   person.ability = 'Каждый удар головой имеет шанс 25% забрать 1 бафф превратив его в 3 точности. Удары с точностью дают уклонение, а противнику метку смерти на 10 сек.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '14,343';
   person.hp = '48,039';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function meow_furever() {
   person.card_name = 'Сейчёс и мяувсегда';
   person.aka = 'Сейчёска';
   person.card_src = 'Meow_Furever.png';
   person.description = 'Универсал, гроза новичков в защите. Якобы неубиваемая и оглушает ещё. Но контрится весьма легко, проще всего Элайзами. В рифтах ещё опаснее, ставят под катализаторы "Когтеточка" и "Светлое начало", но даже так не представляет серьёзной угрозы. В атаке играет через точность. Качать не стоит, устарела.';
   person.ability = 'За каждую потерю 10% НР получает неупал на 10 сек и 5 точности. Когда эффект неупал закончится, наложит на врага метку смерти на 10 сек и оглушение на 4с.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '10,618';
   person.hp = '58,714';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Атака'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}
