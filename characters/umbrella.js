const umbrella = {
   marquee1: 'Сладкая победа - победа на противником даст 2 бешенства на 5 сек.',
   marquee2: 'Горький итог - раз за бой когда здоровье опускается ниже 25%, получает неупал и мощную регенерацию на 15 сек.',
   prestige: 'При ударе по атакующему противнику получает 5% здоровья и накладывает слизь на 10+ сек.',
   p_active: '1% за каждые 1% шкалы голода.'
}

function salty() {
   person.card_name = 'Соль и душевная боль';
   person.aka = 'Солёная';
   person.card_src = 'Salty.png';
   person.description = 'Очень хорошая вариация для новичков для ознакомления с Амбреллой. Прокачивать можно, но берут ей в основном уник горький итог, чтобы при потери много здоровья была подстраховка.';
   person.ability = 'Под бешенством шанс 50% наложить кровотечение на 10 сек при броске. Раз за бой, когда здоровье падает ниже 35%, получает благославение и 3 бешенства на 10 сек.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '9,524';
   person.hp = '35,271';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'umbrella/Tongue_Twister.png';
   person.build_2_img = 'umbrella/Acid_Reflux.png';
   person.build_3_img = 'umbrella/Salt_Grinder.png';
   person.build_4_img = 'umbrella/Wish_Maker.png';
   person.build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_2_desc = 'Шанс наложить слизь.';
   person.build_3_desc = 'Пополнить шкалу Хангерна (нажимать на экран для эффекта).';
   person.build_4_desc = 'Захватывает в пузырь, а после создаёт лужу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function fresh_heir() {
   person.card_name = 'Знатный ветер';
   person.aka = 'Ветер';
   person.card_src = 'Fresh_Heir.png';
   person.description = 'Неплохой вариант для бронзы, но качать не стоит.';
   person.ability = 'Атаки в рывке отключают блокбастеры противника на 10 сек. Победа над противником с отключенными блокбастерами пополняет шкалу всех своих блокбастеров на 50%.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '9,063';
   person.hp = '43,104';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'umbrella/Tongue_Twister.png';
   person.build_2_img = 'umbrella/Acid_Reflux.png';
   person.build_3_img = 'umbrella/Salt_Grinder.png';
   person.build_4_img = 'umbrella/Wish_Maker.png';
   person.build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_2_desc = 'Шанс наложить слизь.';
   person.build_3_desc = 'Пополнить шкалу Хангерна (нажимать на экран для эффекта).';
   person.build_4_desc = 'Захватывает в пузырь, а после создаёт лужу.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function puddle_pirate() {
   person.card_name = 'Пират-лужеход';
   person.aka = 'Пират';
   person.card_src = 'Puddle_Pirate.png';
   person.description = 'Не для новичков, нужно уметь играть от луж. Вариация больше для рифтов, плюс-минус схожа с конфетой.';
   person.ability = 'Рядом с лужей противник каждые 2 секунды будет терять 1 бафф. Если пират в переполненном состоянии, получает 5% здоровья за каждый отобранный эффект.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '9,639';
   person.hp = '45,716';
   person.atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Прирост шкалы'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'umbrella/Bobblin_Bubble.png';
   person.build_2_img = 'umbrella/Acid_Reflux.png';
   person.build_3_img = 'umbrella/Salt_Grinder.png';
   person.build_4_img = 'umbrella/Wish_Maker.png';
   person.build_1_desc = 'Накладывает слизь и создаёт лужу.';
   person.build_2_desc = 'Шанс наложить слизь.';
   person.build_3_desc = 'Пополнить шкалу Хангерна (нажимать на экран для эффекта).';
   person.build_4_desc = 'Захватывает в пузырь, а после создаёт лужу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function rose_tinted() {
   person.card_name = 'Розовая звезда';
   person.aka = 'Роза';
   person.card_src = 'Rose_Tinted.png';
   person.description = 'Очень популярный саппорт, дающий барьеры и шипы при потере здоровья, при том очень доступный. Можно пользоваться и новичкам, и опытным игрокам, в основном в защите, однозначно алмазить.';
   person.ability = 'Пока Амбрелла жива, активный персонаж получает барьер и шипы за каждые потерянные 25% здоровья. Также каждые 20 сек снимает ему все отрицательные эффекты.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '8,218';
   person.hp = '50,324';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   person.build_1_img = 'umbrella/Feeding_Time.png';
   person.build_2_img = 'umbrella/Tongue_Twister.png';
   person.build_3_img = 'umbrella/Projection_Lens.png';
   person.build_4_img = 'umbrella/Umbrella_Burst.png';
   person.build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_2_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_3_desc = 'Защита спереди.';
   person.build_4_desc = 'Прерывает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function candy_crusher() {
   person.card_name = 'Конфетный бой';
   person.aka = 'Конфета';
   person.card_src = 'Candy_Crusher.png';
   person.description = 'Нацелена больше на рифты. При шкале Хангерна синего цвета получает регенерацию, которая безвременная, но всё же может быть снята или отобрана, или просто сбито кровотечением. Тем не менее, качать можно.';
   person.ability = 'В переполненном состоянии каждые 3 секунды получает безвременную регенерацию, которая снимается при нокдауне. При более 3 ур регена получает постоянное ускорение.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '9,639';
   person.hp = '45,716';
   person.atk_stats = ['Атака', 'Проницание', 'Криты', 'Прирост шкалы'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'umbrella/Tongue_Twister.png';
   person.build_2_img = 'umbrella/Acid_Reflux.png';
   person.build_3_img = 'umbrella/Salt_Grinder.png';
   person.build_4_img = 'umbrella/Wish_Maker.png';
   person.build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_2_desc = 'Используют после ударов в воздухе.';
   person.build_3_desc = 'Пополнить шкалу Хангерна.';
   person.build_4_desc = 'Захватывает в пузырь, а после создаёт лужу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function wild_child() {
   person.card_name = 'Сорвиголова';
   person.aka = 'Сорвиголова';
   person.card_src = 'Wild_Child.png';
   person.description = 'Хороший вариант. Много атаки, забирает шкалу бб, а ещё слизь, которая наносит урон противнику если тот получает бафф. Можно качать.';
   person.ability = 'Если не переполнена, броски с шансом 20% вампирят 15% шкалы блокбастера противника. Противник при нокдауне получает 2 слизи на 15 секунд.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '11,079';
   person.hp = '41,127';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'umbrella/Tongue_Twister.png';
   person.build_2_img = 'umbrella/Acid_Reflux.png';
   person.build_3_img = 'umbrella/Salt_Grinder.png';
   person.build_4_img = 'umbrella/Wish_Maker.png';
   person.build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_2_desc = 'Может наложить слизь.';
   person.build_3_desc = 'Пополнить шкалу Хангерна.';
   person.build_4_desc = 'Блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function wunderkind() {
   person.card_name = 'Вундеркинд';
   person.aka = 'Вундеркинд';
   person.card_src = 'Wunderkind.png';
   person.description = 'Можно получить в быстрых играх, в золоте набив 10 миллионов очков, в алмазе за 30 миллионов. Не смотря на высокую атаку, абилка слабая из-за низкого шанса. Не рекомендуется прокачивать, есть вариации лучше.';
   person.ability = 'Все удары пузырями имеют шанс 35% при ударе (включая блок) наложить всплеск энергии на 15 секунд. Когда наложит 3 всплеска будучи живой, противник теряет 50% шкалы блокбастера и здоровье от 100% атаки Амбреллы.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '12,960';
   person.hp = '48,039';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'umbrella/Tongue_Twister.png';
   person.build_2_img = 'umbrella/Acid_Reflux.png';
   person.build_3_img = 'umbrella/Bobblin_Bubble.png';
   person.build_4_img = 'umbrella/Wish_Maker.png';
   person.build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_2_desc = 'Может наложить слизь.';
   person.build_3_desc = 'Пузырь, накладывает слизь.';
   person.build_4_desc = 'Пузырь, блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function tidal_traveler() {
   person.card_name = 'Верхом на волне';
   person.aka = 'Волна';
   person.card_src = 'Tidal_Traveler.png';
   person.description = 'Не легко реализуемая абилка, к тому же слабая. Не стоит прокачивать.';
   person.ability = 'Получает иммунитет, находясь рядом со своей лужей более секунды. Под иммунитетом, атаки пузырями (включая блок) дают 50% бонус урона и накладывают раскол брони на 10 секунд.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '10,272';
   person.hp = '58,676';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'umbrella/Tongue_Twister.png';
   person.build_2_img = 'umbrella/Acid_Reflux.png';
   person.build_3_img = 'umbrella/Bobblin_Bubble.png';
   person.build_4_img = 'umbrella/Wish_Maker.png';
   person.build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_2_desc = 'Может наложить слизь.';
   person.build_3_desc = 'Пузырь, накладывает слизь.';
   person.build_4_desc = 'Пузырь, блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function space_case() {
   person.card_name = 'Ты просто космос';
   person.aka = 'Космос';
   person.card_src = 'Space_Case.png';
   person.description = 'Достойная прокачки вариация Амбреллы. Больше полагается на простой урон, обе абилки чисто под ситуацию.';
   person.ability = 'Когда голодна а здоровье противника опускается ниже 50%, накладывает гибель на 15 сек, которая снимется при смене или поражении Амбреллы. При убийстве получит 3 точности и ещё 3 баффа, в зависимости от стихии жертвы, на 15 сек.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '11,271';
   person.hp = '53,357';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'umbrella/Tongue_Twister.png';
   person.build_2_img = 'umbrella/Acid_Reflux.png';
   person.build_3_img = 'umbrella/Under_The_Weather.png';
   person.build_4_img = 'umbrella/Wish_Maker.png';
   person.build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_2_desc = 'Может наложить слизь.';
   person.build_3_desc = 'Может дать иссушение при жоре.';
   person.build_4_desc = 'Блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function psykid() {
   person.card_name = 'Юный телепат';
   person.aka = 'Телепат';
   person.card_src = 'Psykid.png';
   person.description = 'Очень сильная вариация Амбреллы. И урон, и дебаффы, и обновление времени эффектов, можно также использовать саппортов, и бафферов и дебафферов. Рекомендуется прокачивать.';
   person.ability = 'При ударе атакующего противника, получает меткий глаз и накладывает обратную полярность на 15 секунд. Сбрасывает таймер своих баффов и дебаффов врага когда он стукается об стену.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '12,960';
   person.hp = '48,039';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'umbrella/Tongue_Twister.png';
   person.build_2_img = 'umbrella/Acid_Reflux.png';
   person.build_3_img = 'umbrella/Salt_Grinder.png';
   person.build_4_img = 'umbrella/Bobblin_Bubble.png';
   person.build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_2_desc = 'Может наложить слизь.';
   person.build_3_desc = 'Пополнить шкалу Хангерна.';
   person.build_4_desc = 'Накладывает слизь.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function raining_champ() {
   person.card_name = 'Чемпионка дождя';
   person.aka = 'Чемпионка';
   person.card_src = 'Raining_Champ.png';
   person.description = 'Саппорт полу-деф, прокачивать не стоит: слабая и как саппорт, и как деф. Можно взять в атаку из-за непоколебимости, но на высоких рядах это не поможет, и урона нет.';
   person.ability = 'Начинает бой с непоколебимостью на 10 сек и 2 стаками перманентной брони, которые снимутся при неимении союзников. Если жива, каждые 20 сек активный союзник получает ускорение и неупал на 10 сек.';
   person.marquee1 = `${umbrella.marquee1}`;
   person.marquee2 = `${umbrella.marquee2} Основной выбор.`;
   person.prestige_description = `${umbrella.prestige}`;
   person.prestige_activation = `${umbrella.p_active}`;
   person.at = '11,981';
   person.hp = '68,468';
   person.atk_stats = ['Основной билд Амбреллы'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление'];
   person.build_1_img = 'umbrella/Feeding_Time.png';
   person.build_2_img = 'umbrella/Tongue_Twister.png';
   person.build_3_img = 'umbrella/Acid_Reflux.png';
   person.build_4_img = 'umbrella/Bobblin_Bubble.png';
   person.build_1_desc = 'Восстановит здоровье, блок воскрешения при убийстве.';
   person.build_2_desc = 'Неблокируемая атака, восстановит здоровье.';
   person.build_3_desc = 'Может наложить слизь.';
   person.build_4_desc = 'Накладывает слизь.';
   skullgirls.replaceChildren();
   pageGenerator();
}
