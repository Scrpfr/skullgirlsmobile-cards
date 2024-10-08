const double = {
   marquee1: 'Хаос - при преимуществе стихии при критическом ударе накладывает случайный дебафф на 15 сек.',
   marquee2: 'Непостоянство - каждые 10 сек даёт случайный бафф на 10 сек.',
   prestige: 'Увеличивает урон при преимуществе стихии.',
   p_active: '13% за каждую трансмутацию.'
}

function nunsense() {
   card_name = 'Ересь';
   aka = 'Ересь';
   card_src = 'Nunsense.png';
   description = 'Лучшая вариация для новичков для ознакомления с Дабл. Можно смело качать, хотя в алмазе ей будет тяжело. До золота точно можно качать, затем пересесть на Мор.';
   ability = 'Когда противник получает положительный эффект, получает 3 случайных баффа на 10 сек. При получении отрицательного эффекта, накладывает 3 случайных дебаффа противнику. Работает только при преимуществе стихии.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '8,295';
   hp = '33,600';
   atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/Hornet_Bomber.png';
   build_4_img = 'double/Bandwagon_Rushdown.png';
   build_1_desc = 'Резкая атака, накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   build_3_desc = 'Используют в комбо.';
   build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function sundae_school() {
   card_name = 'Мороженные мощи';
   aka = 'Мороженка';
   card_src = 'Sundae_School.png';
   description = 'Если играть персонажем накладывающим отрицательные эффекты, эта вариация будучи в команде будет продлевать их действие на 3 секунды. Не сказать что бесполезный саппорт, но 3 секунды это уж слишком мало, хотя 2 мороженки продлят уже на 6 секунд. Не сильно полезен, проще не качать.';
   ability = 'Продлевает время действия отрицательного эффекта для противника на 3 сек, а для союзника сокращает это время. Исключение - оглушение.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '7,738';
   hp = '40,647';
   atk_stats = ['Только саппорт'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/Hornet_Bomber.png';
   build_4_img = 'double/Bandwagon_Rushdown.png';
   build_1_desc = 'Резкая атака, накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   build_3_desc = 'Используют в комбо.';
   build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function myst_match() {
   card_name = 'Мистика';
   aka = 'Мистик';
   card_src = 'Myst-Match.png';
   description = 'Интересная абилка и хороший урон. Но качать её не стоит. Также как и играть против забаффанных противников.';
   ability = 'Если стихия совпадает со стихией противника, копирует его положительные эффекты. Когда время действия положительного эффекта закончится, получает 3 точности.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '11,079';
   hp = '35,271';
   atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/Hornet_Bomber.png';
   build_4_img = 'double/Bandwagon_Rushdown.png';
   build_1_desc = 'Резкая атака, накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   build_3_desc = 'Используют в комбо.';
   build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function temple_tyrant() {
   card_name = 'Тиран из храма';
   aka = 'Тиран';
   card_src = 'Temple_Tyrant.png';
   description = 'Возможно задуманный как защитный вариант, ужасно справляется с такой задачей. Можно использовать как атакующую, превращая часть своих дебаффов в регенерацию и броню. В таком случае, может подойти только против наложения дебаффов, и то слабовато. В общем, не качайте.';
   ability = 'При трансмутации в выгодную стихию, восстанавливает 25% здоровья. При выгодной стихии, шанс 50% превратить полученный дебафф в броню и регенерацию на 10 сек.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '8,218';
   hp = '43,104';
   atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/Hornet_Bomber.png';
   build_4_img = 'double/Bandwagon_Rushdown.png';
   build_1_desc = 'Резкая атака, накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   build_3_desc = 'Используют в комбо.';
   build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function doublicious() {
   card_name = 'Двойная мята';
   aka = 'Мята';
   card_src = 'Doublicious.png';
   description = 'Вариация Дабл, забирающая баффы с противника. Очень хорошая для серебра, но уже устарела: из подобных персонажей лучше прокачать Охотницу с пылесосом (Мари). Мяту прокачать можно, но не выше золота, и не смотрите на вторую абилку, лучше не получать урона специально.';
   ability = 'При нанесении удара шанс 25% забрать 1 бафф с противника. При получении удара шанс 25% перенести 1 дебафф с себя на противника.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '9,639';
   hp = '39,188';
   atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/Hornet_Bomber.png';
   build_4_img = 'double/Bandwagon_Rushdown.png';
   build_1_desc = 'Резкая атака, накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   build_3_desc = 'Используют в комбо.';
   build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}

function evergreen_evil() {
   card_name = 'Вечнозелёное зло';
   aka = 'Ёлка';
   card_src = 'Evergreen_Evil.png';
   description = 'Полу-саппорт полу-деф, в основном используется как саппорт продливающий все баффы на 5 сек, иногда также качают вторую ёлку ведь их абилки складываются и продляет уже на 10 сек. В защите может быть грозным врагом, постоянно отражающий урон и при этом регенящий своё здоровье, в рифтах обязательно под катализатор "Агрессивная стихия". Контрится порчей, точностью или просто большим уроном, проклятье и снятие баффов не помогут.';
   ability = 'Если нет выгодной стихии, при получении удара шанс 10% снять все дебаффы и получить реген и шипы на 5 сек. Когда Дабл или её союзник получает бафф, продляет его действие на 5 сек, а Дабл также получает 5% шкалы блокбастера.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2} ТОЛЬКО Непостоянство.`;
   prestige_description = `${double.prestige} НЕ КАЧАЙТЕ престиж ёлке.`;
   prestige_activation = `${double.p_active}`;
   at = '10,272';
   hp = '50,285';
   atk_stats = ['Только саппорт'];
   def_stats = ['Здоровье', 'Защита', 'Точность', 'Сопрот криту'];
   build_1_img = 'double/Megalith_Array.png';
   build_2_img = 'double/Double_Burst.png';
   build_3_img = 'double/Cilia_Slide.png';
   build_4_img = 'double/Luger_Replica.png';
   build_1_desc = 'Снижает шкалу блокбастера врага при нанесении ударов.';
   build_2_desc = 'Прерывает атаку противника.';
   build_3_desc = 'Резкая атака, накладывает замедление.';
   build_4_desc = 'Резкая атака, накладывающая рандомный дебафф.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function immoral_fiber() {
   card_name = 'Аморальные устои';
   aka = 'Аморалка';
   card_src = 'Immoral_Fiber.png';
   description = 'Не обладает большим запасом здоровья, но популярно ставят в защиту рифтов с катализатором "Агрессивная стихия", обычно в тройные ноды. Контрится порчей или убийством под баффом точности.';
   ability = 'При смерти, 50% от максимального запаса здоровья восстанавливается союзникам и наносится активному противнику.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2} ТОЛЬКО Непостоянство.`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '10,272';
   hp = '50,285';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'double/Megalith_Array.png';
   build_2_img = 'double/Double_Burst.png';
   build_3_img = 'double/Cilia_Slide.png';
   build_4_img = 'double/Luger_Replica.png';
   build_1_desc = 'Снижает шкалу блокбастера врага при нанесении ударов.';
   build_2_desc = 'Прерывает атаку противника.';
   build_3_desc = 'Резкая атака, накладывает замедление.';
   build_4_desc = 'Резкая атака, накладывающая рандомный дебафф.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function xenomorph() {
   card_name = 'Ксеноморф';
   aka = 'Ксюха';
   card_src = 'Xenomorph.png';
   description = 'Урон огромный, можно прокачивать карточку, но есть варианты и получше. На особый случай, можно взять в бой чтобы наложить гибель, или 3 кровотока. Но в целом, лучше потратить ресурсы на другого персонажа.';
   ability = 'При трансмутации в тёмную стихию накладывает на противника Гибель на 30 сек. При смерти Дабл, накладывает на противника 3 уровня постоянного кровотечения, но также снимает гибель.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '12,960';
   hp = '41,165';
   atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/Hornet_Bomber.png';
   build_4_img = 'double/Bandwagon_Rushdown.png';
   build_1_desc = 'Резкая атака, накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   build_3_desc = 'Используют в комбо.';
   build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function chaos_theory() {
   card_name = 'Теория хаоса';
   aka = 'Хаос';
   card_src = 'Chaos_Theory.png';
   description = '';
   ability = '';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '10,272';
   hp = '50,285';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'double/Megalith_Array.png';
   build_2_img = 'double/Double_Burst.png';
   build_3_img = 'double/Cilia_Slide.png';
   build_4_img = 'double/Luger_Replica.png';
   build_1_desc = 'Снижает шкалу блокбастера врага при нанесении ударов.';
   build_2_desc = 'Прерывает атаку противника.';
   build_3_desc = 'Резкая атака, накладывает замедление.';
   build_4_desc = 'Резкая атака, накладывающая рандомный дебафф.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function rainbow_blight() {
   card_name = 'Радужный мор';
   aka = 'Мор';
   card_src = 'Rainbow_Blight.png';
   description = 'Хороший урон и хорошая абилка, рекомендуется прокачивать. Примерно легко накладывает порчу, из-за чего можно играть в рифтах или против специфичных врагов. Здоровья мало, но сильная регенерация поможет жить в блоке. Небольшая проблема в рандомности, но тем не менее, одна из лучших Дабл.';
   ability = 'При трансмутации накладывает положительные и отрицательные эффекты на 10 сек в зависимости от итоговой стихии.';
   marquee1 = `${double.marquee1} Качайте Только Хаос.`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '11,271';
   hp = '45,716';
   atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/Catellite_Lives.png';
   build_4_img = 'double/Bandwagon_Rushdown.png';
   build_1_desc = 'Накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления.';
   build_3_desc = 'Шанс снять бафф противника.';
   build_4_desc = 'Наложит порчу.';
   addition = '<p style="width: 400px" class="box">Список эффектов:</br> Ветер: сильная регенерация и блок блокбастеров</br> Огонь: 2 бешенства и кровотечение</br> Вода: 2 брони и увечье</br> Свет: иммунитет и порча</br> Тьма: ускорение и блок исцеления</p>';
   skullgirls.replaceChildren();
   pageGenerator();
   additions();
   highlight(m1);
}

function creature_of_habit() {
   card_name = 'Порождение привычки';
   aka = 'Привычка';
   card_src = 'Creature_of_Habit.png';
   description = 'Играет между двумя режимами: либо с миазмами, либо с бешенствами. Режим с миазмами бесполезный, а вот режим бешенств очень даже крутой. Можно взять только 1 блокбастер и никогда его не использовать, он зарядится и даст 5 бешенств, дальше играть от комбо от ос приёмов. В целом, примерно то же что и Зуболом, только быстрее получает буст урона и он стабильный, но предел буста меньше.';
   ability = 'Когда ни один блокбастер не заряжен и когда не блокирует, каждые 5 сек получает миазмы на 10 сек. Когда хоть один блокбастер будет заряжен, каждые 2 сек получает бешенство, которое снимется только при использовании блокбастера.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '13,152';
   hp = '53,338';
   atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/Hornet_Bomber.png';
   build_4_img = 'double/Beast_Of_Gehenna.png';
   build_1_desc = 'Резкая атака, накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   build_3_desc = 'Используют в комбо.';
   build_4_desc = 'Шанс ввести ос и призыв противника в кд.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function heart_of_darkness() {
   card_name = 'Сердце тьмы';
   aka = 'Сердце';
   card_src = 'Heart_of_Darkness.png';
   description = 'Интересная идея абилки, но есть персонажи получше. Проще не качать.';
   ability = 'Раз за матч при трансмутации в стихию противника, копирует его ключевое умение, снимает все его баффы и накладывает ему порчу на 30 сек. При уничтожении противника, если на нём были отрицательные эффекты, даёт 3 миазмов и 3 рандомных дебаффа на 20 сек на следующего противника.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '13,152';
   hp = '53,338';
   atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/Hornet_Bomber.png';
   build_4_img = 'double/Bandwagon_Rushdown.png';
   build_1_desc = 'Резкая атака, накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   build_3_desc = 'Используют в комбо.';
   build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function jawbreaker() {
   card_name = 'Зуболом';
   aka = 'Зуб';
   card_src = 'Jawbreaker.png';
   description = 'Сильнейшая Дабл в игре на данный момент. Но абилка при этом довольно слабая, для лучшего результата потребуются саппорты, дающие ей баффы. Также, не стоит ей сражаться против Пэйнвил, из-за отражения урона. А также против Нечисти и Жажды Смерти, которые сделают вашу абилку бесполезной.';
   ability = 'При трансмутации даёт случайный положительный эффект на 7 сек. Дополнительный 20% урон за каждый положительный эффект на вас.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '15,130';
   hp = '48,020';
   atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/Hornet_Bomber.png';
   build_4_img = 'double/Bandwagon_Rushdown.png';
   build_1_desc = 'Резкая атака, накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   build_3_desc = 'Используют в комбо.';
   build_4_desc = 'Наложит порчу.';
   supps = ['evergreen', 'persona', 'surgeon'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function altar_ego() {
   card_name = 'Алтарное эго';
   aka = 'Алтарь';
   card_src = 'Altar_Ego.png';
   description = 'Либо надо наложить много дебаффов и убить таунтом, либо бесполезная вариация. Проще не качать.';
   ability = 'Вплотную к противнику и не в блоке, каждые 2 секунды даёт ему рандом дебафф на 10 сек. При использовании таунта "Неблагие намерения", снимает все дебаффы противника и наносит 25% урона от атаки Дабл за каждый дебафф, а в случае убийства таунтом, враг не сможет воскреснуть.';
   marquee1 = `${double.marquee1}`;
   marquee2 = `${double.marquee2}`;
   prestige_description = `${double.prestige}`;
   prestige_activation = `${double.p_active}`;
   at = '15,130';
   hp = '48,020';
   atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'double/Cilia_Slide.png';
   build_2_img = 'double/Bogus_Buzzard.png';
   build_3_img = 'double/False_Intentions.png';
   build_4_img = 'double/Bandwagon_Rushdown.png';
   build_1_desc = 'Резкая атака, накладывает замедление.';
   build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   build_3_desc = 'Получить рандом бафф, сочетается с абилкой Алтаря.';
   build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}