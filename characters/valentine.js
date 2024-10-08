const valentine = {
   marquee1: 'Неотложка - пока Валентайн жива, союзники получают Неупал на 15 сек при получении удара свыше 10%.',
   marquee2: 'Бит - Получает мощную регенерацию на 15 сек при получении отрицательного эффекта.',
   prestige: 'Воскрешает союзников с 10% здоровьем и постоянно восстанавливает 1% своего здоровья.',
   p_active: '4% за каждые 1% восстановленного здоровья.'
}

function scrub() {
   card_name = 'Интерн';
   aka = 'Интерн';
   card_src = 'Scrub.png';
   description = 'К сожалению, очень плохой саппорт, прокачивать не рекомендуется. Алмазить только шайни в основном для красивой аватарки, и максимум для подстраховки в виде неотложки.';
   ability = 'При смене с Валентайн или на неё, текущий персонаж восстанавливает 15% здоровья. А союзники в запасе восстанавливают предварительный урон и шкалу блокбастеров в 2 раза быстрее.';
   marquee1 = `${valentine.marquee1}`;
   marquee2 = `${valentine.marquee2}`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '6,490';
   hp = '44,794';
   atk_stats = ['Не стоит прокачивать'];
   def_stats = ['Не защитник'];
   build_1_img = 'valentine/Countervenom_Paralysis.png';
   build_2_img = 'valentine/Forbidden_Procedure.png';
   build_3_img = 'valentine/Vial_Hazard_Type_B.png';
   build_4_img = 'valentine/Triage.png';
   build_1_desc = 'Может оглушить врага на 5 секунд.';
   build_2_desc = 'Воскресит союзника.';
   build_3_desc = 'Может снять все баффы противника.';
   build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function icy_hot() {
   card_name = 'Горячий лёд';
   aka = 'Лёд';
   card_src = 'Icy_Hot.png';
   description = 'Отличная вариация для новичка для ознакомления с Валентайн. Саппорт, но также хороша в атаке в бронзе и серебро рангах. Алмазить на своё усмотрение, но до золота точно стоит прокачивать.';
   ability = 'При смене персонажа, выходящий получает регенерацию на 15 сек и шкалу блокбастера 15%.';
   marquee1 = `${valentine.marquee1}`;
   marquee2 = `${valentine.marquee2}`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '8,180';
   hp = '44,333';
   atk_stats = ['Атака', 'Проницание', 'Криты', 'Прирост шкалы'];
   def_stats = ['Не защитник'];
   build_1_img = 'valentine/Countervenom_Paralysis.png';
   build_2_img = 'valentine/Forbidden_Procedure.png';
   build_3_img = 'valentine/Vial_Hazard_Type_B.png';
   build_4_img = 'valentine/Triage.png';
   build_1_desc = 'Может оглушить врага на 5 секунд.';
   build_2_desc = 'Воскресит союзника.';
   build_3_desc = 'Может снять все баффы противника.';
   build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}

function oh_mai() {
   card_name = 'Мэйдэй!';
   aka = 'Мэй';
   card_src = 'Oh_Mai.png';
   description = 'Можно получить только из ежедневной реликвии с небольшим шансом. Представляет из себя полу-саппорт полу-дд, качать её стоит только если вы фанат Валентайн, а так в целом не стоит.';
   ability = 'При убийстве противника, получает 2 бешенства на 20 сек и 5 точности. При смерти кого-то из союзников, активный получит 2 бешенства на 15 сек.';
   marquee1 = `${valentine.marquee1}`;
   marquee2 = `${valentine.marquee2}`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '8,717';
   hp = '47,021';
   atk_stats = ['Атака', 'Проницание', 'Криты', 'Прирост шкалы'];
   def_stats = ['Не защитник'];
   build_1_img = 'valentine/Countervenom_Paralysis.png';
   build_2_img = 'valentine/Forbidden_Procedure.png';
   build_3_img = 'valentine/Vial_Hazard_Type_B.png';
   build_4_img = 'valentine/Triage.png';
   build_1_desc = 'Может оглушить врага на 5 секунд.';
   build_2_desc = 'Воскресит союзника.';
   build_3_desc = 'Может снять все баффы противника.';
   build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function graveyard_shift() {
   card_name = 'В морге';
   aka = 'Морг';
   card_src = 'Graveyard_Shift.png';
   description = 'Саппорт полу-деф, рекомендуется прокачивать. Для защиты, обладает огромным запасом здоровья как для серебра, также хорошо лечится и быстро копит престиж, активируя его, воскресит союзников. В атаке хороша проклятьем и блоком исцеления, не дающий противнику восстанавливать здоровье. Но не обладает достаточным уроном, поэтому используется как саппорт для зарядки престижа и воскрешения союзников.';
   ability = 'При ударе шанс 15% наложить проклятье и блок исцеления на 10 сек, если есть бафф регенерации. Любой активный персонаж получит мощную регенерацию на 15 сек при смерти союзника.';
   marquee1 = `${valentine.marquee1} Только Неотложка.`;
   marquee2 = `${valentine.marquee2}`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '6,471';
   hp = '57,485';
   atk_stats = ['Основной билд Вали'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   build_1_img = 'valentine/Mortuary_Drop.png';
   build_2_img = 'valentine/Forbidden_Procedure.png';
   build_3_img = 'valentine/Chocoglycemia.png';
   build_4_img = 'valentine/Triage.png';
   build_1_desc = 'Бросок с шансом оглушить, если на вас активна регенерация.';
   build_2_desc = 'Воскресит союзника.';
   build_3_desc = 'Получить регенерацию.';
   build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function kill_joy() {
   card_name = 'Смерть джой';
   aka = 'Джой';
   card_src = 'Kill_Joy.png';
   description = 'Популярная вариация, воскрешает всех союзников при своей гибели, что безусловно полезно. Бывает ставят в защиту 3ей, но легко контрится: нужно убить её первой или под точностью, или наложив порчу.';
   ability = 'Активный союзник получит постоянную регенерацию при выгодной стихии и менее 50% здоровья. При поражении, воскресит союзников с 25% здоровья (1 раз за матч).';
   marquee1 = `${valentine.marquee1} Только Неотложка.`;
   marquee2 = `${valentine.marquee2}`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '7,584';
   hp = '52,263';
   atk_stats = ['Только саппорт'];
   def_stats = ['Сопротивление', 'Прирост шкалы'];
   build_1_img = 'valentine/Countervenom_Paralysis.png';
   build_2_img = 'valentine/Forbidden_Procedure.png';
   build_3_img = 'valentine/Vial_Hazard_Type_B.png';
   build_4_img = 'valentine/Triage.png';
   build_1_desc = 'Может оглушить врага на 5 секунд.';
   build_2_desc = 'Воскресит союзника.';
   build_3_desc = 'Может снять все баффы противника.';
   build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}

function pyro_technique() {
   card_name = 'Пиро-техника';
   aka = 'Пиро';
   card_src = 'Pyro-Technique.png';
   description = 'Можно получить только из ивентовых реликвий огня. Популярности у игроков не получила, есть варианты получше. Качать можно, если любите Валентайн.';
   ability = 'При использовании блокбастера или ос приёма, шанс 20% наложить иссушение на 10 секунд. При ударе шанс 20% получить бешенство на 10 сек, если у противника иссушение.';
   marquee1 = `${valentine.marquee1}`;
   marquee2 = `${valentine.marquee2} Только БИТ.`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '8,852';
   hp = '60,960';
   atk_stats = ['Атака', 'Проницание', 'Криты', 'Точность'];
   def_stats = ['Не защитник'];
   build_1_img = 'valentine/Countervenom_Detox.png';
   build_2_img = 'valentine/Laryngectomy.png';
   build_3_img = 'valentine/Checkmate_Incision.png';
   build_4_img = 'valentine/Mortuary_Drop.png';
   build_1_desc = 'Шанс снять все баффы врага.';
   build_2_desc = 'Наложит сильное кровотечение.';
   build_3_desc = 'Наложит кровотечение.';
   build_4_desc = 'Бросок с шансом оглушить, если на вас активна регенерация.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function silent_kill() {
   card_name = 'Сайлент Килл';
   aka = 'СК';
   card_src = 'Silent_Kill.png';
   description = 'Очень популярный персонаж, эффективно противостоящий бафферам. Постоянно используется в рифтах, в общем однозначно стоит прокачивать.';
   ability = 'При ударе шанс 25% снять с себя все негативные эффекты и шанс 25% снять с врага все положительные эффекты.';
   marquee1 = `${valentine.marquee1}`;
   marquee2 = `${valentine.marquee2} Только БИТ.`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '8,852';
   hp = '60,960';
   atk_stats = ['Атака', 'Проницание', 'Криты', 'Точность'];
   def_stats = ['Не защитник'];
   build_1_img = 'valentine/Countervenom_Sedative.png';
   build_2_img = 'valentine/Laryngectomy.png';
   build_3_img = 'valentine/Checkmate_Incision.png';
   build_4_img = 'valentine/Mortuary_Drop.png';
   build_1_desc = 'Снижает шкалу блокбастеров врага.';
   build_2_desc = 'Наложит сильное кровотечение.';
   build_3_desc = 'Наложит кровотечение.';
   build_4_desc = 'Бросок с шансом оглушить, если на вас активна регенерация.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function last_hope() {
   card_name = 'Последняя надежда';
   aka = 'Надя';
   card_src = 'Last_Hope.png';
   description = 'Полу-саппорт полу-деф, к сожалению не попадающий ни в ту ни в другую категорию полноценно. Можно поставить в команду к Биг Бенду Звёздный состав под светлые моды. Или в рифты к нему же под катализатор "Последнее слово". Не рекомендуется прокачивать: достаточно слабая.';
   ability = 'После смерти воскрешается с 50% НР, один раз за игру. Также раз за игру, пока Валентайн жива, союзники получают мощную регенерацию на 10 сек, когда их здоровье опускается ниже 25%.';
   marquee1 = `${valentine.marquee1} Только Неотложка.`;
   marquee2 = `${valentine.marquee2}`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '7,527';
   hp = '67,047';
   atk_stats = ['Только саппорт'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   build_1_img = 'valentine/Countervenom_Paralysis.png';
   build_2_img = 'valentine/Forbidden_Procedure.png';
   build_3_img = 'valentine/Vial_Hazard_Type_B.png';
   build_4_img = 'valentine/Chocoglycemia.png';
   build_1_desc = 'Может оглушить врага на 5 секунд.';
   build_2_desc = 'Воскресит союзника.';
   build_3_desc = 'Может снять все баффы противника.';
   build_4_desc = 'Получить регенерацию.';
   addition = 'Отсылка: палитра отсылает на Кристмас (Кристин) - командира взвода Валентайн "Последняя надежда" </br><div class="addition_img_container"><img src="files/arts/Skullgirls_Christmas.jpeg"><img src="files/arts/TheLastHope.jpeg"></div>';
   skullgirls.replaceChildren();
   pageGenerator();
   additions();
   highlight(m1);
}
function surgeon_general() {
   card_name = 'Генерал-хирург';
   aka = 'Гена';
   card_src = 'Surgeon_General.png';
   description = 'Самый популярный саппорт, дающий неупал, иммунитет и регенерацию. Также может сама выступать в роли атакующего персонажа. Однозначно качать и алмазить.';
   ability = 'Если жива, каждые 30 сек получает постоянное бешенство для себя, иммунитет и мощную регенерацию на 15 сек для активного союзника.';
   marquee1 = `${valentine.marquee1} Только Неотложка.`;
   marquee2 = `${valentine.marquee2}`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '10,157';
   hp = '54,874';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Только саппорт'];
   build_1_img = 'valentine/Mortuary_Drop.png';
   build_2_img = 'valentine/Forbidden_Procedure.png';
   build_3_img = 'valentine/Vial_Hazard_Type_A.png';
   build_4_img = 'valentine/Triage.png';
   build_1_desc = 'Бросок с шансом оглушить, если на вас активна регенерация.';
   build_2_desc = 'Воскресит союзника.';
   build_3_desc = 'Снимает часть шкалы бб.';
   build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function final_fang() {
   card_name = 'Последний клык';
   aka = 'Какаши';
   card_src = 'Final_Fang.png';
   description = 'Получилась вариация что-то среднее между Валентайн и Дабл. Также похожа на Инкогнито, но имеет свои плюсы и минусы в сравнении с ней. Хорошая вариация, можно качать.';
   ability = 'Когда противник получает бафф, отражает 1 из них и даёт проклятье на 7 сек. Когда у противника есть дебафф, при ударе шанс 20% наложить случайный дебафф на 15 сек.';
   marquee1 = `${valentine.marquee1}`;
   marquee2 = `${valentine.marquee2} Только БИТ.`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '10,157';
   hp = '54,874';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'valentine/Countervenom_Detox.png';
   build_2_img = 'valentine/Countervenom_Paralysis.png';
   build_3_img = 'valentine/Countervenom_Sedative.png';
   build_4_img = 'valentine/Vial_Hazard_Type_A.png';
   build_1_desc = 'Шанс снять все баффы.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Снимает часть шкалы бб.';
   build_4_desc = 'Снимает часть шкалы бб.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}

function seraph_soldier() {
   card_name = 'Пламенная воительница';
   aka = 'Серафим';
   card_src = 'Seraph_Soldier.png';
   description = 'Очень сильный баффер, особенно для огненных персонажей.';
   ability = 'Если жива, активный союзник при снесении больше 10% здоровья противнику с удара, получает бешенство на 10 сек. Атака персонажей огня каждую секунду перманентно повышается на 0,5%. Критические удары активного персонажа также восстанавливают ему 25% от нанесённого урона, если есть бешенство.';
   marquee1 = `${valentine.marquee1} Только Неотложка.`;
   marquee2 = `${valentine.marquee2}`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '10,330';
   hp = '71,117';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Только саппорт'];
   build_1_img = 'valentine/Mortuary_Drop.png';
   build_2_img = 'valentine/Forbidden_Procedure.png';
   build_3_img = 'valentine/Vial_Hazard_Type_A.png';
   build_4_img = 'valentine/Triage.png';
   build_1_desc = 'Бросок с шансом оглушить, если на вас активна регенерация.';
   build_2_desc = 'Воскресит союзника.';
   build_3_desc = 'Снимает часть шкалы бб.';
   build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function wetwork() {
   card_name = 'Мокрое дело';
   aka = 'Мокруха';
   card_src = 'Wetwork.png';
   description = 'Сравнима с Инкогнито, обе очень сильные. Обе имеют свои плюсы и минусы, но Мокрая кажется немного лучше. Качать однозначно стоит.';
   ability = 'При зарядке атаки в рывке, каждую 1 секунду получает постоянное уклонение. На подброшенного в воздух противника на 7 сек накладываются раскол брони и метка смерти, а на Валентайн бешенство.';
   marquee1 = `${valentine.marquee1}`;
   marquee2 = `${valentine.marquee2} Только БИТ.`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '10,330';
   hp = '71,117';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'valentine/Countervenom_Detox.png';
   build_2_img = 'valentine/Countervenom_Paralysis.png';
   build_3_img = 'valentine/Countervenom_Sedative.png';
   build_4_img = 'valentine/Vial_Hazard_Type_A.png';
   build_1_desc = 'Шанс снять все баффы.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Снимает часть шкалы бб.';
   build_4_desc = 'Снимает часть шкалы бб.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function tres_chic() {
   card_name = 'Инкогнито';
   aka = 'Инка';
   card_src = 'Tres_Chic.png';
   description = 'Кажется чем-то средним между Мокрой и Последним клыком, но ни разу не хуже обеих. Зажав противника в углу, дебаффает его и наносит большой урон, а на своей стороне (слева карты) получает защитные баффы. Можно ставить в защиту при неимении хорошего деф персонажа.';
   ability = 'Находясь на своей стороне, каждые 3 сек получает один постоянный эффект из: барьер, шипы или броня; снимаются при нокдауне. На стороне противника, критический удар накладывает кровотечение, метку смерти или раскол брони на 10 сек.';
   marquee1 = `${valentine.marquee1}`;
   marquee2 = `${valentine.marquee2} Только БИТ.`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '11,847';
   hp = '64,032';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   build_1_img = 'valentine/Countervenom_Detox.png';
   build_2_img = 'valentine/Countervenom_Paralysis.png';
   build_3_img = 'valentine/Countervenom_Sedative.png';
   build_4_img = 'valentine/Vial_Hazard_Type_A.png';
   build_1_desc = 'Шанс снять все баффы.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Снимает часть шкалы бб.';
   build_4_desc = 'Снимает часть шкалы бб.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function assassin_greed() {
   card_name = 'Жадность убийцы';
   aka = 'Жадина';
   card_src = 'Assassin_Greed.png';
   description = 'Танкующая версия Валентайн, в своё время была грозной. Нынче легко контрится, как блоком исцеления или поляркой, так и просто ударами без использования блокбастеров. Можно играть в атаке (обычно в рифтах), урон очень низкий, но есть кровотечения и регенерация.';
   ability = 'Когда противник использует блокбастер против вас, он теряет 25% текущих НР и получает сильное кровотечение на 5 сек. Если рядом противник с кровотечением, лечит 5% своих НР в секунду.';
   marquee1 = `${valentine.marquee1}`;
   marquee2 = `${valentine.marquee2} Только БИТ.`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '8,794';
   hp = '78,221';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   build_1_img = 'valentine/EKG_Flatliner.png';
   build_2_img = 'valentine/Laryngectomy.png';
   build_3_img = 'valentine/Checkmate_Incision.png';
   build_4_img = 'valentine/Val_Burst.png';
   build_1_desc = 'Доп урон если враг с кровотечением.';
   build_2_desc = 'Шанс наложить сильное кровотечение.';
   build_3_desc = 'Шанс наложить кровотечения.';
   build_4_desc = 'Сбивает атаку противника и накладывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function near_death() {
   card_name = 'Спутница смерти';
   aka = 'Спутница';
   card_src = 'Near_Death.png';
   description = '';
   ability = '';
   marquee1 = `${valentine.marquee1}`;
   marquee2 = `${valentine.marquee2}`;
   prestige_description = `${valentine.prestige}`;
   prestige_activation = `${valentine.p_active}`;
   at = '11,847';
   hp = '64,032';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'valentine/Countervenom_Detox.png';
   build_2_img = 'valentine/Countervenom_Paralysis.png';
   build_3_img = 'valentine/Countervenom_Sedative.png';
   build_4_img = 'valentine/Vial_Hazard_Type_A.png';
   build_1_desc = 'Шанс снять все баффы.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Снимает часть шкалы бб.';
   build_4_desc = 'Снимает часть шкалы бб.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}