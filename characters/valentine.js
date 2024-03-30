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
   person.marquee1 = `${valentine.marquee1}.`;
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
   highlight(m1);
}
function icy_hot() {
   person.card_name = 'Горячий лёд';
   person.aka = 'Лёд';
   person.card_src = 'Icy_Hot.png';
   person.description = 'Отличная вариация для новичка для ознакомления с Валентайн. Саппорт, но также хороша в атаке в бронзе и серебро рангах. Алмазить на своё усмотрение, но до золота точно стоит прокачивать.';
   person.ability = 'При смене персонажа, выходящий получает регенерацию на 15 сек и шкалу блокбастера 15%.';
   person.marquee1 = `${valentine.marquee1}`;
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
   highlight(m1);
}

function oh_mai() {
   person.card_name = 'Мэйдэй!';
   person.aka = 'Мэй';
   person.card_src = 'Oh_Mai.png';
   person.description = 'Можно получить только из ежедневной реликвии с небольшим шансом. Представляет из себя полу-саппорт полу-дд, качать её стоит только если вы фанат Валентайн, а так в целом не стоит.';
   person.ability = 'При убийстве противника, получает 2 бешенства на 20 сек и 5 точности. При смерти кого-то из союзников, активный получит 2 бешенства на 15 сек.';
   person.marquee1 = `${valentine.marquee1}`;
   person.marquee2 = `${valentine.marquee2}`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '8,717';
   person.hp = '47,021';
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
   highlight(m2);
}
function graveyard_shift() {
   person.card_name = 'В морге';
   person.aka = 'Морг';
   person.card_src = 'Graveyard_Shift.png';
   person.description = 'Саппорт полу-деф, рекомендуется прокачивать. Для защиты, обладает огромным запасом здоровья как для серебра, также хорошо лечится и быстро копит престиж, активируя его, воскресит союзников. В атаке хороша проклятьем и блоком исцеления, не дающий противнику восстанавливать здоровье. Но не обладает достаточным уроном, поэтому используется как саппорт для зарядки престижа и воскрешения союзников.';
   person.ability = 'При ударе шанс 15% наложить проклятье и блок исцеления на 10 сек, если есть бафф регенерации. Любой активный персонаж получит мощную регенерацию на 15 сек при смерти союзника.';
   person.marquee1 = `${valentine.marquee1} Только Неотложка.`;
   person.marquee2 = `${valentine.marquee2}`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '6,471';
   person.hp = '57,485';
   person.atk_stats = ['Основной билд Вали'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   person.build_1_img = 'valentine/Mortuary_Drop.png';
   person.build_2_img = 'valentine/Forbidden_Procedure.png';
   person.build_3_img = 'valentine/Chocoglycemia.png';
   person.build_4_img = 'valentine/Triage.png';
   person.build_1_desc = 'Бросок с шансом оглушить, если на вас активна регенерация.';
   person.build_2_desc = 'Воскресит союзника.';
   person.build_3_desc = 'Получить регенерацию.';
   person.build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function kill_joy() {
   person.card_name = 'Смерть джой';
   person.aka = 'Джой';
   person.card_src = 'Kill_Joy.png';
   person.description = 'Популярная вариация, воскрешает всех союзников при своей гибели, что безусловно полезно. Бывает ставят в защиту 3ей, но легко контрится: нужно убить её первой или под точностью, или наложив порчу.';
   person.ability = 'Активный союзник получит постоянную регенерацию при выгодной стихии и менее 50% здоровья. При поражении, воскресит союзников с 25% здоровья (1 раз за матч).';
   person.marquee1 = `${valentine.marquee1} Только Неотложка.`;
   person.marquee2 = `${valentine.marquee2}`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '7,584';
   person.hp = '52,263';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Сопротивление', 'Прирост шкалы'];
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
   highlight(m1);
}

function pyro_technique() {
   person.card_name = 'Пиро-техника';
   person.aka = 'Пиро';
   person.card_src = 'Pyro-Technique.png';
   person.description = 'Можно получить только из ивентовых реликвий огня. Популярности у игроков не получила, есть варианты получше. Качать можно, если любите Валентайн.';
   person.ability = 'При использовании блокбастера или ос приёма, шанс 20% наложить иссушение на 10 секунд. При ударе шанс 20% получить бешенство на 10 сек, если у противника иссушение.';
   person.marquee1 = `${valentine.marquee1}`;
   person.marquee2 = `${valentine.marquee2} Только БИТ.`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '8,852';
   person.hp = '60,960';
   person.atk_stats = ['Атака', 'Проницание', 'Криты', 'Точность'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'valentine/Countervenom_Detox.png';
   person.build_2_img = 'valentine/Laryngectomy.png';
   person.build_3_img = 'valentine/Checkmate_Incision.png';
   person.build_4_img = 'valentine/Mortuary_Drop.png';
   person.build_1_desc = 'Шанс снять все баффы врага.';
   person.build_2_desc = 'Наложит сильное кровотечение.';
   person.build_3_desc = 'Наложит кровотечение.';
   person.build_4_desc = 'Бросок с шансом оглушить, если на вас активна регенерация.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function silent_kill() {
   person.card_name = 'Сайлент Килл';
   person.aka = 'СК';
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
   highlight(m2);
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
   person.addition = 'Отсылка: палитра отсылает на Кристмас (Кристин) - командира взвода Валентайн "Последняя надежда" </br><div class="addition_img_container"><img src="files/arts/Skullgirls_Christmas.jpeg"><img src="files/arts/TheLastHope.jpeg"></div>';
   skullgirls.replaceChildren();
   pageGenerator();
   addition();
   highlight(m1);
}
function surgeon_general() {
   person.card_name = 'Генерал-хирург';
   person.aka = 'Гена';
   person.card_src = 'Surgeon_General.png';
   person.description = 'Самый популярный саппорт, дающий неупал, иммунитет и регенерацию. Также может сама выступать в роли атакующего персонажа. Однозначно качать и алмазить.';
   person.ability = 'Если жива, каждые 30 сек получает постоянное бешенство для себя, иммунитет и мощную регенерацию на 15 сек для активного союзника.';
   person.marquee1 = `${valentine.marquee1} Только Неотложка.`;
   person.marquee2 = `${valentine.marquee2}`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '10,157';
   person.hp = '54,874';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Только саппорт'];
   person.build_1_img = 'valentine/Mortuary_Drop.png';
   person.build_2_img = 'valentine/Forbidden_Procedure.png';
   person.build_3_img = 'valentine/Vial_Hazard_Type_A.png';
   person.build_4_img = 'valentine/Triage.png';
   person.build_1_desc = 'Бросок с шансом оглушить, если на вас активна регенерация.';
   person.build_2_desc = 'Воскресит союзника.';
   person.build_3_desc = 'Снимает часть шкалы бб.';
   person.build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function final_fang() {
   person.card_name = 'Последний клык';
   person.aka = 'Какаши';
   person.card_src = 'Final_Fang.png';
   person.description = 'Получилась вариация что-то среднее между Валентайн и Дабл. Также похожа на Инкогнито, но имеет свои плюсы и минусы в сравнении с ней. Хорошая вариация, можно качать.';
   person.ability = 'Когда противник получает бафф, отражает 1 из них и даёт проклятье на 7 сек. Когда у противника есть дебафф, при ударе шанс 20% наложить случайный дебафф на 15 сек.';
   person.marquee1 = `${valentine.marquee1}`;
   person.marquee2 = `${valentine.marquee2} Только БИТ.`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '10,157';
   person.hp = '54,874';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'valentine/Countervenom_Detox.png';
   person.build_2_img = 'valentine/Countervenom_Paralysis.png';
   person.build_3_img = 'valentine/Countervenom_Sedative.png';
   person.build_4_img = 'valentine/Vial_Hazard_Type_A.png';
   person.build_1_desc = 'Шанс снять все баффы.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Снимает часть шкалы бб.';
   person.build_4_desc = 'Снимает часть шкалы бб.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}

function seraph_soldier() {
   person.card_name = 'Пламенная воительница';
   person.aka = 'Серафим';
   person.card_src = 'Seraph_Soldier.png';
   person.description = 'Очень сильный баффер, особенно для огненных персонажей.';
   person.ability = 'Если жива, активный союзник при снесении больше 10% здоровья противнику с удара, получает бешенство на 10 сек. Атака персонажей огня каждую секунду перманентно повышается на 0,5%. Критические удары активного персонажа также восстанавливают ему 25% от нанесённого урона, если есть бешенство.';
   person.marquee1 = `${valentine.marquee1} Только Неотложка.`;
   person.marquee2 = `${valentine.marquee2}`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '10,330';
   person.hp = '71,117';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Только саппорт'];
   person.build_1_img = 'valentine/Mortuary_Drop.png';
   person.build_2_img = 'valentine/Forbidden_Procedure.png';
   person.build_3_img = 'valentine/Vial_Hazard_Type_A.png';
   person.build_4_img = 'valentine/Triage.png';
   person.build_1_desc = 'Бросок с шансом оглушить, если на вас активна регенерация.';
   person.build_2_desc = 'Воскресит союзника.';
   person.build_3_desc = 'Снимает часть шкалы бб.';
   person.build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function wetwork() {
   person.card_name = 'Мокрое дело';
   person.aka = 'Мокруха';
   person.card_src = 'Wetwork.png';
   person.description = 'Сравнима с Инкогнито, обе очень сильные. Обе имеют свои плюсы и минусы, но Мокрая кажется немного лучше. Качать однозначно стоит.';
   person.ability = 'При зарядке атаки в рывке, каждую 1 секунду получает постоянное уклонение. На подброшенного в воздух противника на 7 сек накладываются раскол брони и метка смерти, а на Валентайн бешенство.';
   person.marquee1 = `${valentine.marquee1}`;
   person.marquee2 = `${valentine.marquee2} Только БИТ.`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '10,330';
   person.hp = '71,117';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'valentine/Countervenom_Detox.png';
   person.build_2_img = 'valentine/Countervenom_Paralysis.png';
   person.build_3_img = 'valentine/Countervenom_Sedative.png';
   person.build_4_img = 'valentine/Vial_Hazard_Type_A.png';
   person.build_1_desc = 'Шанс снять все баффы.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Снимает часть шкалы бб.';
   person.build_4_desc = 'Снимает часть шкалы бб.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function tres_chic() {
   person.card_name = 'Инкогнито';
   person.aka = 'Инка';
   person.card_src = 'Tres_Chic.png';
   person.description = 'Кажется чем-то средним между Мокрой и Последним клыком, но ни разу не хуже обеих. Зажав противника в углу, дебаффает его и наносит большой урон, а на своей стороне (слева карты) получает защитные баффы. Можно ставить в защиту при неимении хорошего деф персонажа.';
   person.ability = 'Находясь на своей стороне, каждые 3 сек получает один постоянный эффект из: барьер, шипы или броня; снимаются при нокдауне. На стороне противника, критический удар накладывает кровотечение, метку смерти или раскол брони на 10 сек.';
   person.marquee1 = `${valentine.marquee1}`;
   person.marquee2 = `${valentine.marquee2} Только БИТ.`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '11,847';
   person.hp = '64,032';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   person.build_1_img = 'valentine/Countervenom_Detox.png';
   person.build_2_img = 'valentine/Countervenom_Paralysis.png';
   person.build_3_img = 'valentine/Countervenom_Sedative.png';
   person.build_4_img = 'valentine/Vial_Hazard_Type_A.png';
   person.build_1_desc = 'Шанс снять все баффы.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Снимает часть шкалы бб.';
   person.build_4_desc = 'Снимает часть шкалы бб.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function assassin_greed() {
   person.card_name = 'Жадность убийцы';
   person.aka = 'Жадина';
   person.card_src = 'Assassin_Greed.png';
   person.description = 'Танкующая версия Валентайн, в своё время была грозной. Нынче легко контрится, как блоком исцеления или поляркой, так и просто ударами без использования блокбастеров. Можно играть в атаке (обычно в рифтах), урон очень низкий, но есть кровотечения и регенерация.';
   person.ability = 'Когда противник использует блокбастер против вас, он теряет 25% текущих НР и получает сильное кровотечение на 5 сек. Если рядом противник с кровотечением, лечит 5% своих НР в секунду.';
   person.marquee1 = `${valentine.marquee1}`;
   person.marquee2 = `${valentine.marquee2} Только БИТ.`;
   person.prestige_description = `${valentine.prestige}`;
   person.prestige_activation = `${valentine.p_active}`;
   person.at = '8,794';
   person.hp = '78,221';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   person.build_1_img = 'valentine/EKG_Flatliner.png';
   person.build_2_img = 'valentine/Laryngectomy.png';
   person.build_3_img = 'valentine/Checkmate_Incision.png';
   person.build_4_img = 'valentine/Val_Burst.png';
   person.build_1_desc = 'Доп урон если враг с кровотечением.';
   person.build_2_desc = 'Шанс наложить сильное кровотечение.';
   person.build_3_desc = 'Шанс наложить кровотечения.';
   person.build_4_desc = 'Сбивает атаку противника и накладывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
