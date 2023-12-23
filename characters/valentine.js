const valentine = {
   marquee1: 'Неотложка - пока Валентайн жива, союзники получают Неупал на 15 сек при получении удара свыше 10%.',
   marquee2: 'Бит - Получает мощную регенерацию на 15 сек при получении отрицательного эффекта.',
   prestige: 'Воскрешает союзников с 10% здоровьем и постоянно восстанавливает 1% своего здоровья.',
   p_active: '4% за каждые 1% восстановленного здоровья.'
}

function scrub() {
   person.card_name = 'Интерн';
   person.aka = 'Интерн';
   person.card_src = 'Scrub.png';
   person.description = 'К сожалению, очень плохой саппорт, прокачивать не рекомендуется. Алмазить только шайни в основном для красивой аватарки, и максимум для подстраховки в виде неотложки.';
   person.ability = 'При смене с Валентайн или на неё, текущий персонаж восстанавливает 15% здоровья. А союзники в запасе восстанавливают предварительный урон и шкалу блокбастеров в 2 раза быстрее.';
   person.marquee1 = `${valentine.marquee1} ЛУЧШЕЕ.`;
   person.marquee2 = `${valentine.marquee2}`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '6,490';
   person.hp = '44,794';
   person.atk_stats = ['Не стоит прокачивать'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'valentine/Countervenom_Paralysis.png';
   person.build_2_img = 'valentine/Forbidden_Procedure.png';
   person.build_3_img = 'valentine/Vial_Hazard_Type_B.png';
   person.build_4_img = 'valentine/Triage.png';
   person.build_1_desc = 'Может оглушить врага на 5 секунд.';
   person.build_2_desc = 'Воскресит союзника.';
   person.build_3_desc = 'Может снять все баффы противника.';
   person.build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function icy_hot() {
   person.card_name = 'Горячий лёд';
   person.aka = 'Лёд';
   person.card_src = 'Icy_Hot.png';
   person.description = 'Отличная валентайн для новичка. Саппорт, но также хороша в атаке. Алмазить на своё усмотрение, но до золота точно стоит прокачивать.';
   person.ability = 'При смене персонажа, выходящий получает регенерацию на 15 сек и шкалу блокбастера 15%.';
   person.marquee1 = `${valentine.marquee1} ЛУЧШЕЕ.`;
   person.marquee2 = `${valentine.marquee2}`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '8,180';
   person.hp = '44,333';
   person.atk_stats = ['Атака', 'Проницание', 'Криты', 'Прирост шкалы'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'valentine/Countervenom_Paralysis.png';
   person.build_2_img = 'valentine/Forbidden_Procedure.png';
   person.build_3_img = 'valentine/Vial_Hazard_Type_B.png';
   person.build_4_img = 'valentine/Triage.png';
   person.build_1_desc = 'Может оглушить врага на 5 секунд.';
   person.build_2_desc = 'Воскресит союзника.';
   person.build_3_desc = 'Может снять все баффы противника.';
   person.build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function silent_kill() {
   person.card_name = 'Сайлент Килл';
   person.aka = 'Сайлент';
   person.card_src = 'Silent_Kill.png';
   person.description = 'Очень популярный персонаж, эффективно противостоящий бафферам. Постоянно используется в рифтах, в общем однозначно стоит прокачивать.';
   person.ability = 'При ударе шанс 25% снять с себя все негативные эффекты и шанс 25% снять с врага все положительные эффекты.';
   person.marquee1 = `${valentine.marquee1}`;
   person.marquee2 = `${valentine.marquee2} Только БИТ.`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '8,852';
   person.hp = '60,960';
   person.atk_stats = ['Атака', 'Проницание', 'Криты', 'Точность'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'valentine/Countervenom_Sedative.png';
   person.build_2_img = 'valentine/Laryngectomy.png';
   person.build_3_img = 'valentine/Checkmate_Incision.png';
   person.build_4_img = 'valentine/Mortuary_Drop.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Наложит сильное кровотечение.';
   person.build_3_desc = 'Наложит кровотечение.';
   person.build_4_desc = 'Бросок с шансом оглушить, если на вас активна регенерация.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function last_hope() {
   person.card_name = 'Последняя надежда';
   person.aka = 'Надя';
   person.card_src = 'Last_Hope.png';
   person.description = 'Полу-саппорт полу-деф, к сожалению не попадающий ни в ту ни в другую категорию полноценно. Можно поставить в команду к Биг Бенду Звёздный состав под светлые моды. Или в рифты к нему же под катализатор "Последнее слово". Не рекомендуется прокачивать: достаточно слабая.';
   person.ability = 'После смерти воскрешается с 50% НР, один раз за игру. Также раз за игру, пока Валентайн жива, союзники получают мощную регенерацию на 10 сек, когда их здоровье опускается ниже 25%.';
   person.marquee1 = `${valentine.marquee1} Только Неотложка.`;
   person.marquee2 = `${valentine.marquee2}`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '7,527';
   person.hp = '67,047';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   person.build_1_img = 'valentine/Countervenom_Paralysis.png';
   person.build_2_img = 'valentine/Forbidden_Procedure.png';
   person.build_3_img = 'valentine/Vial_Hazard_Type_B.png';
   person.build_4_img = 'valentine/Chocoglycemia.png';
   person.build_1_desc = 'Может оглушить врага на 5 секунд.';
   person.build_2_desc = 'Воскресит союзника.';
   person.build_3_desc = 'Может снять все баффы противника.';
   person.build_4_desc = 'Получить регенерацию.';
   skullgirls.replaceChildren();
   pageGenerator();
}