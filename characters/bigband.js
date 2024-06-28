const bigband = {
   marquee1: 'Солист - При получении удара при рывке, урон первого удара понижен на 50% и даёт мощную регенерацию на 10 сек.',
   marquee2: 'Вокалист - Когда Биг Бенд находится в окружении живых союзников, получает 15% поглощения урона и 30% к сопротивлению.',
   prestige: 'Атака в рывке с шансом ~30% неблокируема и при этом даёт бешенство на 5 сек.',
   p_active: '17% за каждые 10 комбо.'
}

function bassline() {
   person.card_name = 'Линия басов';
   person.aka = 'Бас';
   person.card_src = 'Bassline.png';
   person.description = 'Бронзовый танк в игре, самый слабый персонаж среди всех персонажей. Не прокачивайте.';
   person.ability = 'При призыве, получает мощную регенерацию и броню на 10 сек, а также +35% к шкале блокбастеров.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '6,490';
   person.hp = '55,988';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'bigband/Tuba_Tuba.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Beat_Extend.png';
   person.build_4_img = 'bigband/Big_Band_Burst.png';
   person.build_1_desc = 'Шанс снять бафф с каждым ударом, последний удар оглушает.';
   person.build_2_desc = 'Шанс оглушить и отскок назад.';
   person.build_3_desc = 'Бонус к урону за комбо удар.';
   person.build_4_desc = 'Прервать атаку противника.';
   person.supps = ['joy', 'rosetin', 'sketchy'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function beat_box() {
   person.card_name = 'Бит-бокс';
   person.aka = 'Битбокс';
   person.card_src = 'Beat_Box.png';
   person.description = 'Хорошая карточка. Имба для бронзы, но в алмазе уже не потянет. Очень простой в использовании: зарядить ульту особыми приёмами и жахнуть. Прокачивать можно.';
   person.ability = 'Использование особого приёма даёт бешенство на 5 сек и +25% к шкале блокбастера.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '8,180';
   person.hp = '55,431';
   person.atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'bigband/Beat_Extend.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Super-Sonic_Jazz.png';
   person.build_4_img = 'bigband/Strike_Up_the_Band.png';
   person.build_1_desc = 'Бонус к урону за комбо удар.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   person.build_4_desc = 'Даёт 3 регенерации.';
   person.supps = ['evergreen', 'peashooter', 'prisma'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}

function resonant_evil() {
   person.card_name = 'Симфония зла';
   person.aka = 'Симфа';
   person.card_src = 'Resonant_Evil.png';
   person.description = 'Очень грозный защитник для новичков. Но его время уже ушло, сейчас очень легко контрится: проклятьем, порчей и даже иммунитетом. Не стоит прокачивать: просто потерял актуальность.';
   person.ability = 'Полученный удар с шансом 10% даст броню на 10 сек. При получении удара под бронёй шанс 5% оглушить противника на 4 сек.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '6,471';
   person.hp = '71,847';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'bigband/Tuba_Tuba.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Sweet_Clarinet.png';
   person.build_4_img = 'bigband/Big_Band_Burst.png';
   person.build_1_desc = 'Шанс снять бафф с каждым ударом, последний удар оглушает.';
   person.build_2_desc = 'Шанс оглушить и отскок назад.';
   person.build_3_desc = 'Снижает шкалу бб врага каждым ударом.';
   person.build_4_desc = 'Прервать атаку противника.';
   person.supps = ['starlight', 'rosetin', 'model'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function treble_maker() {
   person.card_name = 'Бравурный бит';
   person.aka = 'Бравур';
   person.card_src = 'Treble_Maker.png';
   person.description = 'Как серебрянный танк - впечатляет. Но в алмазе нет ни здоровья, ни урона, множество персонажей контрят абилку меткостью или порчей. Не рекомендуется прокачивать.';
   person.ability = 'Каждые полученные 10 комбо ударов восстанавливают 10% здоровья. Если здоровье выше 50%, отражает 35% получаемого урона.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '7,584';
   person.hp = '65,319';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   person.build_1_img = 'bigband/Tuba_Tuba.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Sweet_Clarinet.png';
   person.build_4_img = 'bigband/Big_Band_Burst.png';
   person.build_1_desc = 'Шанс снять бафф с каждым ударом, последний удар оглушает.';
   person.build_2_desc = 'Шанс оглушить и отскок назад.';
   person.build_3_desc = 'Снижает шкалу бб врага каждым ударом.';
   person.build_4_desc = 'Прервать атаку противника.';
   person.supps = ['starlight', 'rosetin', 'model'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function virtuoso() {
   person.card_name = 'Классика виртуоза';
   person.aka = 'Виртуоз';
   person.card_src = 'Vintage_Virtuoso.png';
   person.description = 'Для новичков желающих поиграть за дд Бенда - лучший выбор. Очень сильный для серебра, пробивание блоков, оглушения и длинное комбо... Шикарный Биг Бенд, однако в алмазе урона уже не хватает. Алмазить можно только если вы любитель Биг Бенда.';
   person.ability = 'Каждые 10 комбо получает 1 точность. Точные удары дают бешенство и накладывают раскол брони на 10 сек.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '7,584';
   person.hp = '65,319';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'bigband/Beat_Extend.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Super-Sonic_Jazz.png';
   person.build_4_img = 'bigband/Tympani_Drive.png';
   person.build_1_desc = 'Бонус к урону за комбо удар.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   person.build_4_desc = 'Шанс дать раскол брони.';
   person.supps = ['octoplasm', 'evergreen', 'seraph'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function robocopy() {
   person.card_name = 'Робокопия';
   person.aka = 'Робокоп';
   person.card_src = 'Robocopy.png';
   person.description = 'Интересный и неплохой вариант дд Биг Бенда, но слабее Виртуоза. Не рекомендуется прокачивать: нет применения.';
   person.ability = 'Любой призыв отключает блокбастеры противника на 20 сек, но эффект снимается если противник использует особый приём. Пока блокбастеры противника отключены, каждые 3 сек получает бешенство и барьер на 10 сек.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '8,717';
   person.hp = '58,791';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'bigband/Beat_Extend.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Super-Sonic_Jazz.png';
   person.build_4_img = 'bigband/Tympani_Drive.png';
   person.build_1_desc = 'Бонус к урону за комбо удар.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   person.build_4_desc = 'Шанс дать раскол брони.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function private_dick() {
   person.card_name = 'Рядовой дик';
   person.aka = 'Дик';
   person.card_src = 'Private_Dick.png';
   person.description = 'Хороший атакующий Биг Бенд по абилке, но не по статам. Можно качать в золоте, если хочется играть за такого персонажа, но алмазить не стоит.';
   person.ability = 'При нанесении удара есть шанс 5% оглушить цель на 3 сек. Блокбастеры наносят на 50% больше урона оглушённым противникам. Шанс 50% при получении дебаффа, конвертировать его в бешенство на 8 сек.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '8,852';
   person.hp = '76,205';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Точность'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'bigband/Beat_Extend.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Super-Sonic_Jazz.png';
   person.build_4_img = 'bigband/Giant_Step.png';
   person.build_1_desc = 'Бонус к урону за комбо удар.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   person.build_4_desc = 'Снимает все баффы врага и блокирует ос приёмы.';
   person.supps = ['joy', 'rosetin', 'martial_outlaw'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function jazz() {
   person.card_name = 'Солдат джаз';
   person.aka = 'Джаз';
   person.card_src = 'G.I._Jazz.png';
   person.description = 'Хороший запас здоровья, но увы, хорошим танком ему не стать. Абилка очень легко контрится: порча, проклятье или просто снять баффы. Не качаем.';
   person.ability = 'При здоровье выше 50%, постоянная броня 1 ур. Раз за бой при здоровье ниже 25% получает 5 регенераций и 3 брони на 10 секунд.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '7,527';
   person.hp = '83,847';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'bigband/Tuba_Tuba.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Sweet_Clarinet.png';
   person.build_4_img = 'bigband/Big_Band_Burst.png';
   person.build_1_desc = 'Шанс снять бафф с каждым ударом, последний удар оглушает.';
   person.build_2_desc = 'Шанс оглушить и отскок назад.';
   person.build_3_desc = 'Снижает шкалу бб врага каждым ударом.';
   person.build_4_desc = 'Прервать атаку противника.';
   person.supps = ['starlight', 'rosetin', 'model'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function megasonic() {
   person.card_name = 'Мегасоник';
   person.aka = 'Соник';
   person.card_src = 'Megasonic.png';
   person.description = 'Очень хороший дд вариант, получить можно только из ивентовых реликвий тьмы. Немного уступает сакс гаю, зато может использоваться в рифтах из-за хилла и постоять в защите из-за шипов и хилла.';
   person.ability = 'При блоке удара снижает получаемый урон на 75% и получает бешенство и шипы на 10 сек. Каждый один ур бешенства снимается при нанесении удара. Под бешенством, 50% наносимого урона возвращается в здоровье.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '10,157';
   person.hp = '68,602';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака'];
   person.build_1_img = 'bigband/Beat_Extend.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Super-Sonic_Jazz.png';
   person.build_4_img = 'bigband/Giant_Step.png';
   person.build_1_desc = 'Бонус к урону за комбо удар.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   person.build_4_desc = 'Снимает все баффы врага и блокирует ос приёмы.';
   person.supps = ['honormaid', 'inner', 'martial_outlaw'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function epic_sax() {
   person.card_name = 'Эпик Сакс Гай';
   person.aka = 'Сакс';
   person.card_src = 'Epic_Sax.png';
   person.description = 'Предположительно сильнейший дд Биг Бенд на данный момент в игре. Можно разогнать урон и вместе с блокбастером Бит нанести невероятный урон оппоненту. Но начальный урон низкий в сравнении с другими дд персонажами, поэтому качать стоит только любителям Биг Бенда.';
   person.ability = 'Даёт 3% бонус к урону за каждый комбо удар вплоть до 200%. Каждые 10 комбо даёт случайный положительный эффект на 5 сек.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '10,157';
   person.hp = '68,602';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'bigband/Beat_Extend.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Super-Sonic_Jazz.png';
   person.build_4_img = 'bigband/Giant_Step.png';
   person.build_1_desc = 'Бонус к урону за комбо удар.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   person.build_4_desc = 'Снимает все баффы врага и блокирует ос приёмы.';
   person.supps = ['honormaid', 'evergreen', 'mogul'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}

function heavy_metal() {
   person.card_name = 'Хэви-метал';
   person.aka = 'Стар платинум';
   person.card_src = 'Heavy_Metal.png';
   person.description = 'Сильный универсал. В атаке хорош увеличенным уроном блокбастеров и оглушениями, в защите можно ставить в рифты под катализаторы "Ледяная броня" и "Сопротивление бесполезно". Но качать стоит только любителям Биг Бенда, и желательно с разблокированным престижем.';
   person.ability = 'При получении ударов ближнего боя (включая блок), с шансом 15% получает броню на 5 секунд. Во время действия брони, блокбастеры наносят двойной урон.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '10,330';
   person.hp = '88,916';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   person.build_1_img = 'bigband/Beat_Extend.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Super-Sonic_Jazz.png';
   person.build_4_img = 'bigband/Bagpipe_Blues.png';
   person.build_1_desc = 'Бонус к урону за комбо удар.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   person.build_4_desc = 'Получить броню.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dream_band() {
   person.card_name = 'Звёздный состав';
   person.aka = 'Состав';
   person.card_src = 'Dream_Band.png';
   person.description = 'Очень живучий персонаж, тяжело пробивается, ещё сложнее под разными баффами, особенно с регенерацией. Но к сожалению, баланс в игре плохой, и сам персонаж Биг Бенд является самым слабым персонажем, и все его вариации чисто фановые. Не стоит прокачивать: легко убивается Жаждой смерти (Амбрелла), независимо от буста здоровья и баффов на нём.';
   person.ability = 'Через каждые 10 комбо копирует 1 бафф противника и сбрасывает его таймер. При нокдауне, сбрасывает таймер всех своих баффов и получает иммунитет на 15 секунд.';
   person.marquee1 = `${bigband.marquee1}`;
   person.marquee2 = `${bigband.marquee2}`;
   person.prestige_description = `${bigband.prestige}`;
   person.prestige_activation = `${bigband.p_active}`;
   person.at = '8,775';
   person.hp = '97,805';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'bigband/Tuba_Tuba.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Sweet_Clarinet.png';
   person.build_4_img = 'bigband/Big_Band_Burst.png';
   person.build_1_desc = 'Шанс снять бафф с каждым ударом, последний удар оглушает.';
   person.build_2_desc = 'Шанс оглушить и отскок назад.';
   person.build_3_desc = 'Снижает шкалу бб врага каждым ударом.';
   person.build_4_desc = 'Прервать атаку противника.';
   person.supps = ['model', 'surgeon', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
