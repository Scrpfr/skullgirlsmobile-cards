const bigband = {
   marquee1: 'Солист - При получении удара при рывке, урон первого удара понижен на 50% и даёт мощную регенерацию на 10 сек.',
   marquee2: 'Вокалист - Когда Биг Бенд находится в окружении живых союзников, получает 15% поглощения урона и 30% к сопротивлению.',
   prestige: 'Атака в рывке с шансом ~30% неблокируема и при этом даёт бешенство на 5 сек.',
   p_active: '17% за каждые 10 комбо.'
}

function bassline() {
   card_name = 'Линия басов';
   aka = 'Бас';
   card_src = 'Bassline.png';
   description = 'Бронзовый танк в игре, самый слабый персонаж среди всех персонажей. Не прокачивайте.';
   ability = 'При призыве, получает мощную регенерацию и броню на 10 сек, а также +35% к шкале блокбастеров.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '6,490';
   hp = '55,988';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'bigband/Tuba_Tuba.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Beat_Extend.png';
   build_4_img = 'bigband/Big_Band_Burst.png';
   build_1_desc = 'Шанс снять бафф с каждым ударом, последний удар оглушает.';
   build_2_desc = 'Шанс оглушить и отскок назад.';
   build_3_desc = 'Бонус к урону за комбо удар.';
   build_4_desc = 'Прервать атаку противника.';
   supps = ['joy', 'rosetin', 'sketchy'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function beat_box() {
   card_name = 'Бит-бокс';
   aka = 'Битбокс';
   card_src = 'Beat_Box.png';
   description = 'Хорошая карточка. Имба для бронзы, но в алмазе уже не потянет. Очень простой в использовании: зарядить ульту особыми приёмами и жахнуть. Прокачивать можно.';
   ability = 'Использование особого приёма даёт бешенство на 5 сек и +25% к шкале блокбастера.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '8,180';
   hp = '55,431';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'bigband/Beat_Extend.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Super-Sonic_Jazz.png';
   build_4_img = 'bigband/Strike_Up_the_Band.png';
   build_1_desc = 'Бонус к урону за комбо удар.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   build_4_desc = 'Даёт 3 регенерации.';
   supps = ['evergreen', 'peashooter', 'prisma'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}

function resonant_evil() {
   card_name = 'Симфония зла';
   aka = 'Симфа';
   card_src = 'Resonant_Evil.png';
   description = 'Очень грозный защитник для новичков. Но его время уже ушло, сейчас очень легко контрится: проклятьем, порчей и даже иммунитетом. Не стоит прокачивать: просто потерял актуальность.';
   ability = 'Полученный удар с шансом 10% даст броню на 10 сек. При получении удара под бронёй шанс 5% оглушить противника на 4 сек.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '6,471';
   hp = '71,847';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'bigband/Tuba_Tuba.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Sweet_Clarinet.png';
   build_4_img = 'bigband/Big_Band_Burst.png';
   build_1_desc = 'Шанс снять бафф с каждым ударом, последний удар оглушает.';
   build_2_desc = 'Шанс оглушить и отскок назад.';
   build_3_desc = 'Снижает шкалу бб врага каждым ударом.';
   build_4_desc = 'Прервать атаку противника.';
   supps = ['starlight', 'rosetin', 'model'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function treble_maker() {
   card_name = 'Бравурный бит';
   aka = 'Бравур';
   card_src = 'Treble_Maker.png';
   description = 'Как серебрянный танк - впечатляет. Но в алмазе нет ни здоровья, ни урона, множество персонажей контрят абилку меткостью или порчей. Не рекомендуется прокачивать.';
   ability = 'Каждые полученные 10 комбо ударов восстанавливают 10% здоровья. Если здоровье выше 50%, отражает 35% получаемого урона.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '7,584';
   hp = '65,319';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   build_1_img = 'bigband/Tuba_Tuba.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Sweet_Clarinet.png';
   build_4_img = 'bigband/Big_Band_Burst.png';
   build_1_desc = 'Шанс снять бафф с каждым ударом, последний удар оглушает.';
   build_2_desc = 'Шанс оглушить и отскок назад.';
   build_3_desc = 'Снижает шкалу бб врага каждым ударом.';
   build_4_desc = 'Прервать атаку противника.';
   supps = ['starlight', 'rosetin', 'model'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function virtuoso() {
   card_name = 'Классика виртуоза';
   aka = 'Виртуоз';
   card_src = 'Vintage_Virtuoso.png';
   description = 'Для новичков желающих поиграть за дд Бенда - лучший выбор. Очень сильный для серебра, пробивание блоков, оглушения и длинное комбо... Шикарный Биг Бенд, однако в алмазе урона уже не хватает. Алмазить можно только если вы любитель Биг Бенда.';
   ability = 'Каждые 10 комбо получает 1 точность. Точные удары дают бешенство и накладывают раскол брони на 10 сек.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '7,584';
   hp = '65,319';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'bigband/Beat_Extend.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Super-Sonic_Jazz.png';
   build_4_img = 'bigband/Tympani_Drive.png';
   build_1_desc = 'Бонус к урону за комбо удар.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   build_4_desc = 'Шанс дать раскол брони.';
   supps = ['octoplasm', 'evergreen', 'seraph'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function robocopy() {
   card_name = 'Робокопия';
   aka = 'Робокоп';
   card_src = 'Robocopy.png';
   description = 'Интересный и неплохой вариант дд Биг Бенда, но слабее Виртуоза. Не рекомендуется прокачивать.';
   ability = 'При получении смертельного удара, выживает с 3 стаками брони и барьерами на 10 сек. После победы над противником, получает 2 бешенства на 30 сек и 50% к шкале блокбастеров.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '8,717';
   hp = '58,791';
   atk_stats = ['Атака', 'Проницание', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'bigband/Beat_Extend.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Super-Sonic_Jazz.png';
   build_4_img = 'bigband/Tympani_Drive.png';
   build_1_desc = 'Бонус к урону за комбо удар.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   build_4_desc = 'Шанс дать раскол брони.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}

function private_dick() {
   card_name = 'Рядовой дик';
   aka = 'Дик';
   card_src = 'Private_Dick.png';
   description = 'Хороший атакующий Биг Бенд по абилке, но не по статам. Можно качать в золоте, если хочется играть за такого персонажа, но алмазить не стоит.';
   ability = 'При нанесении удара есть шанс 5% оглушить цель на 3 сек. Блокбастеры наносят на 50% больше урона оглушённым противникам. Шанс 50% при получении дебаффа, конвертировать его в бешенство на 8 сек.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '8,852';
   hp = '76,205';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Точность'];
   def_stats = ['Не защитник'];
   build_1_img = 'bigband/Beat_Extend.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Super-Sonic_Jazz.png';
   build_4_img = 'bigband/Giant_Step.png';
   build_1_desc = 'Бонус к урону за комбо удар.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   build_4_desc = 'Снимает все баффы врага и блокирует ос приёмы.';
   supps = ['seraph', 'honormaid', 'evergreen'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function jazz() {
   card_name = 'Солдат джаз';
   aka = 'Джаз';
   card_src = 'G.I._Jazz.png';
   description = 'Хороший запас здоровья, но увы, хорошим танком ему не стать. Абилка очень легко контрится: порча, проклятье или просто снять баффы. Не качаем.';
   ability = 'При здоровье выше 50%, постоянная броня 1 ур. Раз за бой при здоровье ниже 25% получает 5 регенераций и 3 брони на 10 секунд.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '7,527';
   hp = '83,847';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'bigband/Tuba_Tuba.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Sweet_Clarinet.png';
   build_4_img = 'bigband/Big_Band_Burst.png';
   build_1_desc = 'Шанс снять бафф с каждым ударом, последний удар оглушает.';
   build_2_desc = 'Шанс оглушить и отскок назад.';
   build_3_desc = 'Снижает шкалу бб врага каждым ударом.';
   build_4_desc = 'Прервать атаку противника.';
   supps = ['starlight', 'rosetin', 'model'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function megasonic() {
   card_name = 'Мегасоник';
   aka = 'Соник';
   card_src = 'Megasonic.png';
   description = 'Очень хороший дд вариант, получить можно только из ивентовых реликвий тьмы. Немного уступает сакс гаю, зато может использоваться в рифтах из-за хилла и постоять в защите из-за шипов и хилла.';
   ability = 'При блоке удара снижает получаемый урон на 75% и получает бешенство и шипы на 10 сек. Каждый один ур бешенства снимается при нанесении удара. Под бешенством, 50% наносимого урона возвращается в здоровье.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '10,157';
   hp = '68,602';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Атака'];
   build_1_img = 'bigband/Beat_Extend.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Super-Sonic_Jazz.png';
   build_4_img = 'bigband/Giant_Step.png';
   build_1_desc = 'Бонус к урону за комбо удар.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   build_4_desc = 'Снимает все баффы врага и блокирует ос приёмы.';
   supps = ['honormaid', 'inner', 'martial_outlaw'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function epic_sax() {
   card_name = 'Эпик Сакс Гай';
   aka = 'Сакс';
   card_src = 'Epic_Sax.png';
   description = 'Предположительно сильнейший дд Биг Бенд на данный момент в игре. Можно разогнать урон и вместе с блокбастером Бит нанести невероятный урон оппоненту. Но начальный урон низкий в сравнении с другими дд персонажами, поэтому качать стоит только любителям Биг Бенда.';
   ability = 'Даёт 3% бонус к урону за каждый комбо удар вплоть до 200%. Каждые 10 комбо даёт случайный положительный эффект на 5 сек.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '10,157';
   hp = '68,602';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы'];
   def_stats = ['Не защитник'];
   build_1_img = 'bigband/Beat_Extend.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Super-Sonic_Jazz.png';
   build_4_img = 'bigband/Giant_Step.png';
   build_1_desc = 'Бонус к урону за комбо удар.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   build_4_desc = 'Снимает все баффы врага и блокирует ос приёмы.';
   supps = ['honormaid', 'evergreen', 'mogul'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}

function heavy_metal() {
   card_name = 'Хэви-метал';
   aka = 'Стар платинум';
   card_src = 'Heavy_Metal.png';
   description = 'Сильный универсал. В атаке хорош увеличенным уроном блокбастеров и оглушениями, в защите можно ставить в рифты под катализаторы "Ледяная броня" и "Сопротивление бесполезно". Но качать стоит только любителям Биг Бенда, и желательно с разблокированным престижем.';
   ability = 'При получении ударов ближнего боя (включая блок), с шансом 15% получает броню на 5 секунд. Во время действия брони, блокбастеры наносят двойной урон.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '10,330';
   hp = '88,916';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Прирост шкалы'];
   build_1_img = 'bigband/Beat_Extend.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Super-Sonic_Jazz.png';
   build_4_img = 'bigband/Bagpipe_Blues.png';
   build_1_desc = 'Бонус к урону за комбо удар.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Шанс при ударе наложить сильное кровотечение.';
   build_4_desc = 'Получить броню.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dream_band() {
   card_name = 'Звёздный состав';
   aka = 'Состав';
   card_src = 'Dream_Band.png';
   description = 'Очень живучий персонаж, тяжело пробивается, ещё сложнее под разными баффами, особенно с регенерацией. Но к сожалению, баланс в игре плохой, и сам персонаж Биг Бенд является самым слабым персонажем, и все его вариации чисто фановые. Не стоит прокачивать: легко убивается Жаждой смерти (Амбрелла), независимо от буста здоровья и баффов на нём.';
   ability = 'Через каждые 10 комбо копирует 1 бафф противника и сбрасывает его таймер. При нокдауне, сбрасывает таймер всех своих баффов и получает иммунитет на 15 секунд.';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '8,775';
   hp = '97,805';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'bigband/Tuba_Tuba.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Sweet_Clarinet.png';
   build_4_img = 'bigband/Big_Band_Burst.png';
   build_1_desc = 'Шанс снять бафф с каждым ударом, последний удар оглушает.';
   build_2_desc = 'Шанс оглушить и отскок назад.';
   build_3_desc = 'Снижает шкалу бб врага каждым ударом.';
   build_4_desc = 'Прервать атаку противника.';
   supps = ['model', 'surgeon', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function brass_bandit() {
   card_name = 'Медный разбойник';
   aka = 'Медный';
   card_src = 'Brass_Bandit.png';
   description = '';
   ability = '';
   marquee1 = `${bigband.marquee1}`;
   marquee2 = `${bigband.marquee2}`;
   prestige_description = `${bigband.prestige}`;
   prestige_activation = `${bigband.p_active}`;
   at = '11,847';
   hp = '80,045';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'bigband/Beat_Extend.png';
   build_2_img = 'bigband/Cymbal_Clash.png';
   build_3_img = 'bigband/Super-Sonic_Jazz.png';
   build_4_img = 'bigband/Tympani_Drive.png';
   build_1_desc = 'Доп урон в комбо.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Шанс оглушить.';
   build_4_desc = 'Увеличенный урон по оглушённому противнику.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}