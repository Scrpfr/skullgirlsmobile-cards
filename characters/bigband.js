const bigband = {
   marquee1: 'Солист - Когда Биг Бенд остаётся без союзников, снижает 15% урона.',
   marquee2: 'Вокалист - Когда Биг Бенд находится в окружении живых союзников, снижает 15% урона.',
   prestige: 'Атака в рывке с шансом ~30% неблокируема и при этом даёт бешенство на 5 сек.',
   p_active: '17% за каждые 10 комбо.'
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
   person.build_3_img = 'bigband/A_Train.png';
   person.build_4_img = 'bigband/Big_Band_Burst.png';
   person.build_1_desc = 'Имеет шанс оглушить.';
   person.build_2_desc = 'Шанс оглушить и отскок назад.';
   person.build_3_desc = 'Может дать брони.';
   person.build_4_desc = 'Прервать атаку противника.';
   person.supps = ['starlight', 'rosetin', 'model'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function treble_maker() {
   person.card_name = 'Бравурный бит';
   person.aka = 'Бравур';
   person.card_src = 'Treble_Maker.png';
   person.description = 'Как серебрянный танк - впечатляет. Но в алмазе нет ни здоровья, ни урона, множество персонажей контрят абилку. Не рекомендуется прокачивать.';
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
   person.build_1_desc = 'Имеет шанс оглушить.';
   person.build_2_desc = 'Шанс оглушить и отскок назад.';
   person.build_3_desc = 'Хороший зашитный приём.';
   person.build_4_desc = 'Прервать атаку противника.';
   person.supps = ['starlight', 'rosetin', 'model'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function virtuoso() {
   person.card_name = 'Классика виртуоза';
   person.aka = 'Виртуоз';
   person.card_src = 'Vintage_Virtuoso.png';
   person.description = 'Для новичков желающих поиграть за дд Бенда - лучший выбор. Очень сильный для серебра, пробивание блоков, оглушения и длинное комбо... Шикарный Биг Бенд, однако в алмазе урона уже не хватает. Алмазить можно, но далеко не в первую очередь.';
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
   person.build_1_desc = 'Мета приём.';
   person.build_2_desc = 'Шанс оглушить и часть комбо.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Увеличенный урон по оглушённому противнику.';
   person.supps = ['honormaid', 'evergreen', 'martial_outlaw'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
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
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'bigband/Beat_Extend.png';
   person.build_2_img = 'bigband/Cymbal_Clash.png';
   person.build_3_img = 'bigband/Super-Sonic_Jazz.png';
   person.build_4_img = 'bigband/Tympani_Drive.png';
   person.build_1_desc = 'Мета приём.';
   person.build_2_desc = 'Шанс оглушить и часть комбо.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Увеличенный урон по оглушённому противнику.';
   person.supps = ['honormaid', 'evergreen', 'martial_outlaw'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}