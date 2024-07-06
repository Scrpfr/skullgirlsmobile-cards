const umbrella = {
   marquee1: 'Сладкая победа - победа на противником даст 2 бешенства на 5 сек.',
   marquee2: 'Горький итог - раз за бой когда здоровье опускается ниже 25%, получает неупал и мощную регенерацию на 15 сек.',
   prestige: 'При ударе по атакующему противнику получает 5% здоровья и накладывает слизь на 10+ сек.',
   p_active: '1% за каждые 1% шкалы голода.'
}

function salty() {
   card_name = 'Соль и душевная боль';
   aka = 'Солёная';
   card_src = 'Salty.png';
   description = 'Очень хорошая вариация для новичков для ознакомления с Амбреллой. Прокачивать можно, но берут ей в основном уник горький итог, чтобы при потери много здоровья была подстраховка.';
   ability = 'Под бешенством шанс 50% наложить кровотечение на 10 сек при броске. Раз за бой, когда здоровье падает ниже 35%, получает благославение и 3 бешенства на 10 сек.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '9,524';
   hp = '35,271';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Salt_Grinder.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Шанс наложить слизь.';
   build_3_desc = 'Пополнить шкалу Хангерна (нажимать на экран для эффекта).';
   build_4_desc = 'Захватывает в пузырь, а после создаёт лужу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function fresh_heir() {
   card_name = 'Знатный ветер';
   aka = 'Ветер';
   card_src = 'Fresh_Heir.png';
   description = 'Неплохой вариант для бронзы, но качать не стоит.';
   ability = 'Атаки в рывке отключают блокбастеры противника на 10 сек. Победа над противником с отключенными блокбастерами пополняет шкалу всех своих блокбастеров на 50%.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '9,063';
   hp = '43,104';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Salt_Grinder.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Шанс наложить слизь.';
   build_3_desc = 'Пополнить шкалу Хангерна (нажимать на экран для эффекта).';
   build_4_desc = 'Захватывает в пузырь, а после создаёт лужу.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function puddle_pirate() {
   card_name = 'Пират-лужеход';
   aka = 'Пират';
   card_src = 'Puddle_Pirate.png';
   description = 'Не для новичков, нужно уметь играть от луж. Вариация больше для рифтов, плюс-минус схожа с конфетой.';
   ability = 'Рядом с лужей противник каждые 2 секунды будет терять 1 бафф. Если пират в переполненном состоянии, получает 5% здоровья за каждый отобранный эффект.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '9,639';
   hp = '45,716';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Прирост шкалы'];
   def_stats = ['Не защитник'];
   build_1_img = 'umbrella/Bobblin_Bubble.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Salt_Grinder.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Накладывает слизь и создаёт лужу.';
   build_2_desc = 'Шанс наложить слизь.';
   build_3_desc = 'Пополнить шкалу Хангерна (нажимать на экран для эффекта).';
   build_4_desc = 'Захватывает в пузырь, а после создаёт лужу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function rose_tinted() {
   card_name = 'Розовая звезда';
   aka = 'Роза';
   card_src = 'Rose_Tinted.png';
   description = 'Очень популярный саппорт, дающий барьеры и шипы при потере здоровья, при том очень доступный. Можно пользоваться и новичкам, и опытным игрокам, в основном в защите, однозначно алмазить.';
   ability = 'Пока Амбрелла жива, активный персонаж получает барьер и шипы за каждые потерянные 25% здоровья. Также каждые 20 сек снимает ему все отрицательные эффекты.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '8,218';
   hp = '50,324';
   atk_stats = ['Только саппорт'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   build_1_img = 'umbrella/Feeding_Time.png';
   build_2_img = 'umbrella/Tongue_Twister.png';
   build_3_img = 'umbrella/Projection_Lens.png';
   build_4_img = 'umbrella/Umbrella_Burst.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_3_desc = 'Защита спереди.';
   build_4_desc = 'Прерывает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function candy_crusher() {
   card_name = 'Конфетный бой';
   aka = 'Конфета';
   card_src = 'Candy_Crusher.png';
   description = 'Нацелена больше на рифты. При шкале Хангерна синего цвета получает регенерацию, которая безвременная, но всё же может быть снята или отобрана, или просто сбито кровотечением. Тем не менее, качать можно.';
   ability = 'В переполненном состоянии каждые 3 секунды получает безвременную регенерацию, которая снимается при нокдауне. При более 3 ур регена получает постоянное ускорение.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '9,639';
   hp = '45,716';
   atk_stats = ['Атака', 'Проницание', 'Криты', 'Прирост шкалы'];
   def_stats = ['Не защитник'];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Salt_Grinder.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Используют после ударов в воздухе.';
   build_3_desc = 'Пополнить шкалу Хангерна.';
   build_4_desc = 'Захватывает в пузырь, а после создаёт лужу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function wild_child() {
   card_name = 'Сорвиголова';
   aka = 'Сорвиголова';
   card_src = 'Wild_Child.png';
   description = 'Хороший вариант. Много атаки, забирает шкалу бб, а ещё слизь, которая наносит урон противнику если тот получает бафф. Можно качать.';
   ability = 'Если не переполнена, броски с шансом 20% вампирят 15% шкалы блокбастера противника. Противник при нокдауне получает 2 слизи на 15 секунд.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '11,079';
   hp = '41,127';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Salt_Grinder.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Может наложить слизь.';
   build_3_desc = 'Пополнить шкалу Хангерна.';
   build_4_desc = 'Блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function wunderkind() {
   card_name = 'Вундеркинд';
   aka = 'Вундеркинд';
   card_src = 'Wunderkind.png';
   description = 'Можно получить в быстрых играх, в золоте набив 10 миллионов очков, в алмазе за 30 миллионов. Не смотря на высокую атаку, абилка слабая из-за низкого шанса. Не рекомендуется прокачивать, есть вариации лучше.';
   ability = 'Все удары пузырями имеют шанс 35% при ударе (включая блок) наложить всплеск энергии на 15 секунд. Когда наложит 3 всплеска будучи живой, противник теряет 50% шкалы блокбастера и здоровье от 100% атаки Амбреллы.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '12,960';
   hp = '48,039';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Bobblin_Bubble.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Может наложить слизь.';
   build_3_desc = 'Пузырь, накладывает слизь.';
   build_4_desc = 'Пузырь, блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function tidal_traveler() {
   card_name = 'Верхом на волне';
   aka = 'Волна';
   card_src = 'Tidal_Traveler.png';
   description = 'Вариация с простым получением иммунитета. Но лучше не качать, а потратить ресурсы в более хорошего персонажа.';
   ability = 'Удары лужами дают иммунитет на 15 сек. Под иммунитетом, удары пузырями имеют 50% бонус к урону и накладывают раскол брони и отключение блокбастеров на 15 сек.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '10,272';
   hp = '58,676';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Bobblin_Bubble.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Может наложить слизь.';
   build_3_desc = 'Пузырь, накладывает слизь.';
   build_4_desc = 'Пузырь, блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function space_case() {
   card_name = 'Ты просто космос';
   aka = 'Космос';
   card_src = 'Space_Case.png';
   description = 'Достойная прокачки вариация Амбреллы. Больше полагается на простой урон, обе абилки чисто под ситуацию.';
   ability = 'Когда голодна а здоровье противника опускается ниже 50%, накладывает гибель на 15 сек, которая снимется при смене или поражении Амбреллы. При убийстве получит 3 точности и ещё 3 баффа, в зависимости от стихии жертвы, на 15 сек.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '11,271';
   hp = '53,357';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Under_The_Weather.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Может наложить слизь.';
   build_3_desc = 'Может дать иссушение при жоре.';
   build_4_desc = 'Блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function psykid() {
   card_name = 'Юный телепат';
   aka = 'Телепат';
   card_src = 'Psykid.png';
   description = 'Очень сильная вариация Амбреллы. И урон, и дебаффы, и обновление времени эффектов, можно также использовать саппортов, и бафферов и дебафферов. Рекомендуется прокачивать.';
   ability = 'При ударе атакующего противника, получает меткий глаз и накладывает обратную полярность на 15 секунд. Сбрасывает таймер своих баффов и дебаффов врага когда он стукается об стену.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '12,960';
   hp = '48,039';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Salt_Grinder.png';
   build_4_img = 'umbrella/Bobblin_Bubble.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Может наложить слизь.';
   build_3_desc = 'Пополнить шкалу Хангерна.';
   build_4_desc = 'Накладывает слизь.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function palace_plunderer() {
   card_name = 'Расхитительница дворцов';
   aka = 'Расхитительница';
   card_src = 'Palace_Plunderer.png';
   description = 'Полу-саппорт, основанная на том, чтобы выйти из запасных, сделать 50+ комбо и замениться на сильного основного персонажа, на котором будут 5 бешенств.';
   ability = 'Когда не получает удары (включая блок), каждые 5 сек получает уклонение на 7 сек и восстанавливает 3% НР всем союзникам. Под действием баффа, каждые 10 комбо забирает 1 бафф с противника себе и даёт союзникам бешенство на 30 сек.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '11,271';
   hp = '53,357';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Bobblin_Bubble.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Может наложить слизь.';
   build_3_desc = 'Пузырь, накладывает слизь.';
   build_4_desc = 'Пузырь, блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function raining_champ() {
   card_name = 'Чемпионка дождя';
   aka = 'Чемпионка';
   card_src = 'Raining_Champ.png';
   description = 'Саппорт полу-деф, прокачивать не стоит: слабая и как саппорт, и как деф. Можно взять в атаку из-за непоколебимости, но на высоких рядах это не поможет, и урона нет.';
   ability = 'Начинает бой с непоколебимостью на 10 сек и 2 стаками перманентной брони, которые снимутся при неимении союзников. Если жива, каждые 20 сек активный союзник получает ускорение и неупал на 10 сек.';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2} Основной выбор.`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '11,981';
   hp = '68,468';
   atk_stats = ['Основной билд Амбреллы'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление'];
   build_1_img = 'umbrella/Feeding_Time.png';
   build_2_img = 'umbrella/Tongue_Twister.png';
   build_3_img = 'umbrella/Acid_Reflux.png';
   build_4_img = 'umbrella/Bobblin_Bubble.png';
   build_1_desc = 'Восстановит здоровье, блок воскрешения при убийстве.';
   build_2_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_3_desc = 'Может наложить слизь.';
   build_4_desc = 'Накладывает слизь.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function death_wish() {
   card_name = 'Жажда смерти';
   aka = 'Виш';
   card_src = 'Death_Wish.png';
   description = '';
   ability = '';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2}`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '13,152';
   hp = '56,045';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Bobblin_Bubble.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Может наложить слизь.';
   build_3_desc = 'Пузырь, накладывает слизь.';
   build_4_desc = 'Пузырь, блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function eager_deceiver() {
   card_name = 'Прыткая пройдоха';
   aka = 'Прыткая';
   card_src = 'Eager_Deceiver.png';
   description = '';
   ability = '';
   marquee1 = `${umbrella.marquee1}`;
   marquee2 = `${umbrella.marquee2}`;
   prestige_description = `${umbrella.prestige}`;
   prestige_activation = `${umbrella.p_active}`;
   at = '13,152';
   hp = '62,247';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'umbrella/Tongue_Twister.png';
   build_2_img = 'umbrella/Acid_Reflux.png';
   build_3_img = 'umbrella/Bobblin_Bubble.png';
   build_4_img = 'umbrella/Wish_Maker.png';
   build_1_desc = 'Неблокируемая атака, восстановит здоровье.';
   build_2_desc = 'Может наложить слизь.';
   build_3_desc = 'Пузырь, накладывает слизь.';
   build_4_desc = 'Пузырь, блокирует призыв, ос и бб противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}