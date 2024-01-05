const double = {
   marquee1: 'Хаос - при преимуществе стихии при критическом ударе накладывает случайный дебафф на 15 сек.',
   marquee2: 'Непостоянство - каждые 10 сек даёт случайный бафф на 10 сек.',
   prestige: 'Увеличивает урон при преимуществе стихии.',
   p_active: '13% за каждую трансмутацию.'
}

function nunsense() {
   person.card_name = 'Ересь';
   person.aka = 'Ересь';
   person.card_src = 'Nunsense.png';
   person.description = 'Лучшая вариация для новичков для ознакомления с Дабл. Можно смело качать, хотя в алмазе ей будет тяжело. До золота точно можно качать, затем пересесть на Мор.';
   person.ability = 'Когда противник получает положительный эффект, получает 3 случайных баффа на 10 сек. При получении отрицательного эффекта, накладывает 3 случайных дебаффа противнику. Работает только при преимуществе стихии.';
   person.marquee1 = `${double.marquee1} Качайте Только Хаос.`;
   person.marquee2 = `${double.marquee2}`;
   person.prestige_description = `${double.prestige}`;
   person.prestige_activation = `${double.p_active}`;
   person.at = '8,295';
   person.hp = '33,600';
   person.atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'double/Cilia_Slide.png';
   person.build_2_img = 'double/Bogus_Buzzard.png';
   person.build_3_img = 'double/Hornet_Bomber.png';
   person.build_4_img = 'double/Bandwagon_Rushdown.png';
   person.build_1_desc = 'Резкая атака, накладывает замедление.';
   person.build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   person.build_3_desc = 'Используют в комбо.';
   person.build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function sundae_school() {
   person.card_name = 'Мороженные мощи';
   person.aka = 'Мороженка';
   person.card_src = 'Sundae_School.png';
   person.description = 'Если играть персонажем накладывающим отрицательные эффекты, эта вариация будучи в команде будет продлевать их действие на 3 секунды. Не сказать что бесполезный саппорт, но 3 секунды это уж слишком мало, хотя 2 мороженки продлят уже на 6 секунд. Не сильно полезен, проще не качать.';
   person.ability = 'Продлевает время действия отрицательного эффекта для противника на 3 сек, а для союзника сокращает это время. Исключение - оглушение.';
   person.marquee1 = `${double.marquee1}`;
   person.marquee2 = `${double.marquee2}`;
   person.prestige_description = `${double.prestige}`;
   person.prestige_activation = `${double.p_active}`;
   person.at = '7,738';
   person.hp = '40,647';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'double/Cilia_Slide.png';
   person.build_2_img = 'double/Bogus_Buzzard.png';
   person.build_3_img = 'double/Hornet_Bomber.png';
   person.build_4_img = 'double/Bandwagon_Rushdown.png';
   person.build_1_desc = 'Резкая атака, накладывает замедление.';
   person.build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   person.build_3_desc = 'Используют в комбо.';
   person.build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function myst_match() {
   person.card_name = 'Мистика';
   person.aka = 'Мистик';
   person.card_src = 'Myst-Match.png';
   person.description = 'Интересная абилка и хороший урон. Но качать её не стоит. Также как и играть против забаффанных противников.';
   person.ability = 'Если стихия совпадает со стихией противника, копирует его положительные эффекты. Когда время действия положительного эффекта закончится, получает 3 точности.';
   person.marquee1 = `${double.marquee1} Качайте Только Хаос.`;
   person.marquee2 = `${double.marquee2}`;
   person.prestige_description = `${double.prestige}`;
   person.prestige_activation = `${double.p_active}`;
   person.at = '11,079';
   person.hp = '35,271';
   person.atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'double/Cilia_Slide.png';
   person.build_2_img = 'double/Bogus_Buzzard.png';
   person.build_3_img = 'double/Hornet_Bomber.png';
   person.build_4_img = 'double/Bandwagon_Rushdown.png';
   person.build_1_desc = 'Резкая атака, накладывает замедление.';
   person.build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   person.build_3_desc = 'Используют в комбо.';
   person.build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function temple_tyrant() {
   person.card_name = 'Тиран из храма';
   person.aka = 'Тиран';
   person.card_src = 'Temple_Tyrant.png';
   person.description = 'Возможно задуманный как защитный вариант, ужасно справляется с такой задачей. Можно использовать как атакующую, превращая часть своих дебаффов в регенерацию и броню. В таком случае, может подойти только против наложения дебаффов, и то слабовато. В общем, не качайте.';
   person.ability = 'При трансмутации в выгодную стихию, восстанавливает 25% здоровья. При выгодной стихии, шанс 50% превратить полученный дебафф в броню и регенерацию на 10 сек.';
   person.marquee1 = `${double.marquee1} Качайте Только Хаос.`;
   person.marquee2 = `${double.marquee2}`;
   person.prestige_description = `${double.prestige}`;
   person.prestige_activation = `${double.p_active}`;
   person.at = '8,218';
   person.hp = '43,104';
   person.atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'double/Cilia_Slide.png';
   person.build_2_img = 'double/Bogus_Buzzard.png';
   person.build_3_img = 'double/Hornet_Bomber.png';
   person.build_4_img = 'double/Bandwagon_Rushdown.png';
   person.build_1_desc = 'Резкая атака, накладывает замедление.';
   person.build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   person.build_3_desc = 'Используют в комбо.';
   person.build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function doublicious() {
   person.card_name = 'Двойная мята';
   person.aka = 'Мята';
   person.card_src = 'Doublicious.png';
   person.description = 'Очень сильный персонаж против бафферов, шикарный для серебра. А с хаосом закидает оппонента также множеством дебаффов. Но здоровья очень мало, не смотрите на вторую абилку, играйте от первой.';
   person.ability = 'При нанесении удара шанс 25% забрать 1 бафф с противника. При получении удара шанс 25% перенести 1 дебафф с себя на противника.';
   person.marquee1 = `${double.marquee1} Качайте Только Хаос.`;
   person.marquee2 = `${double.marquee2}`;
   person.prestige_description = `${double.prestige}`;
   person.prestige_activation = `${double.p_active}`;
   person.at = '9,639';
   person.hp = '39,188';
   person.atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'double/Cilia_Slide.png';
   person.build_2_img = 'double/Bogus_Buzzard.png';
   person.build_3_img = 'double/Hornet_Bomber.png';
   person.build_4_img = 'double/Bandwagon_Rushdown.png';
   person.build_1_desc = 'Резкая атака, накладывает замедление.';
   person.build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   person.build_3_desc = 'Используют в комбо.';
   person.build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function evergreen_evil() {
   person.card_name = 'Вечнозелёное зло';
   person.aka = 'Ёлка';
   person.card_src = 'Evergreen_Evil.png';
   person.description = 'Полу-саппорт полу-деф, в основном используется как саппорт продливающий все баффы на 5 сек, иногда также качают вторую ёлку ведь их абилки складываются и продляет уже на 10 сек. В защите может быть грозным врагом, постоянно отражающий урон и при этом регенящий своё здоровье, в рифтах обязательно под катализатор "Агрессивная стихия". Контрится порчей или точностью, проклятье и снятие баффов не помогут.';
   person.ability = 'Если нет выгодной стихии, при получении удара шанс 10% снять все дебаффы и получить реген и шипы на 5 сек. Когда Дабл или её союзник получает бафф, продляет его действие на 5 сек, а Дабл также получает 5% шкалы блокбастера.';
   person.marquee1 = `${double.marquee1}`;
   person.marquee2 = `${double.marquee2} ТОЛЬКО Непостоянство.`;
   person.prestige_description = `${double.prestige} НЕ КАЧАЙТЕ престиж ёлке.`;
   person.prestige_activation = `${double.p_active}`;
   person.at = '10,272';
   person.hp = '50,285';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Здоровье', 'Защита', 'Точность', 'Сопрот криту'];
   person.build_1_img = 'double/Megalith_Array.png';
   person.build_2_img = 'double/Double_Burst.png';
   person.build_3_img = 'double/Cilia_Slide.png';
   person.build_4_img = 'double/Luger_Replica.png';
   person.build_1_desc = 'Снижает шкалу блокбастера врага при нанесении ударов.';
   person.build_2_desc = 'Прерывает атаку противника.';
   person.build_3_desc = 'Резкая атака, накладывает замедление.';
   person.build_4_desc = 'Резкая атака, накладывающая рандомный дебафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function immoral_fiber() {
   person.card_name = 'Аморальные устои';
   person.aka = 'Аморалка';
   person.card_src = 'Immoral_Fiber.png';
   person.description = 'Не обладает большим запасом здоровья, но популярно ставят в защиту рифтов с катализатором "Агрессивная стихия", обычно в тройные ноды. Контрится порчей или убийством под баффом точности.';
   person.ability = 'При смерти, 50% от максимального запаса здоровья восстанавливается союзникам и наносится активному противнику.';
   person.marquee1 = `${double.marquee1}`;
   person.marquee2 = `${double.marquee2} ТОЛЬКО Непостоянство.`;
   person.prestige_description = `${double.prestige}`;
   person.prestige_activation = `${double.p_active}`;
   person.at = '10,272';
   person.hp = '50,285';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'double/Megalith_Array.png';
   person.build_2_img = 'double/Double_Burst.png';
   person.build_3_img = 'double/Cilia_Slide.png';
   person.build_4_img = 'double/Luger_Replica.png';
   person.build_1_desc = 'Снижает шкалу блокбастера врага при нанесении ударов.';
   person.build_2_desc = 'Прерывает атаку противника.';
   person.build_3_desc = 'Резкая атака, накладывает замедление.';
   person.build_4_desc = 'Резкая атака, накладывающая рандомный дебафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function xenomorph() {
   person.card_name = 'Ксеноморф';
   person.aka = 'Ксюха';
   person.card_src = 'Xenomorph.png';
   person.description = 'Урон огромный, можно прокачивать карточку, но есть варианты и получше. На особый случай, можно взять в бой чтобы наложить гибель, или 3 кровотока. Но в целом, лучше потратить ресурсы на другого персонажа.';
   person.ability = 'При трансмутации в тёмную стихию накладывает на противника Гибель на 30 сек. При смерти Дабл, накладывает на противника 3 уровня постоянного кровотечения, но также снимает гибель.';
   person.marquee1 = `${double.marquee1} Качайте Только Хаос.`;
   person.marquee2 = `${double.marquee2}`;
   person.prestige_description = `${double.prestige}`;
   person.prestige_activation = `${double.p_active}`;
   person.at = '12,960';
   person.hp = '41,165';
   person.atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'double/Cilia_Slide.png';
   person.build_2_img = 'double/Bogus_Buzzard.png';
   person.build_3_img = 'double/Hornet_Bomber.png';
   person.build_4_img = 'double/Bandwagon_Rushdown.png';
   person.build_1_desc = 'Резкая атака, накладывает замедление.';
   person.build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   person.build_3_desc = 'Используют в комбо.';
   person.build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function rainbow_blight() {
   person.card_name = 'Радужный мор';
   person.aka = 'Мор';
   person.card_src = 'Rainbow_Blight.png';
   person.description = 'Хороший урон и хорошая абилка, рекомендуется прокачивать. Список эффектов:</br> Ветер: сильная регенерация и блок блокбастеров</br> Огонь: 2 бешенства и кровотечение</br> Вода: 2 брони и увечье</br> Свет: иммунитет и порча</br> Тьма: ускорение и блок исцеления';
   person.ability = 'При трансмутации накладывает положительные и отрицательные эффекты на 10 сек в зависимости от итоговой стихии.';
   person.marquee1 = `${double.marquee1} Качайте Только Хаос.`;
   person.marquee2 = `${double.marquee2}`;
   person.prestige_description = `${double.prestige}`;
   person.prestige_activation = `${double.p_active}`;
   person.at = '11,271';
   person.hp = '45,716';
   person.atk_stats = ['Атака', 'Проницание', 'Стихийный бонус', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'double/Cilia_Slide.png';
   person.build_2_img = 'double/Bogus_Buzzard.png';
   person.build_3_img = 'double/Hornet_Bomber.png';
   person.build_4_img = 'double/Bandwagon_Rushdown.png';
   person.build_1_desc = 'Резкая атака, накладывает замедление.';
   person.build_2_desc = 'Наложит блок исцеления, используют после слайда.';
   person.build_3_desc = 'Используют в комбо.';
   person.build_4_desc = 'Наложит порчу.';
   skullgirls.replaceChildren();
   pageGenerator();
}
