const dahlia = {
   marquee1: 'Неполадки - особые выстрелы наносят доп 20% урона и дают раскол брони на 10 с (включая блок).',
   marquee2: 'Не время умирать - получение критического удара активирует ускорение и регенерацию на 15 сек.',
   prestige: 'Перезарядка ружья даёт меткий глаз и врагу метку смерти на 10 сек.',
   p_active: '17% за выстрел.'
}

function trigger_happy() {
   person.card_name = 'Авантюристка';
   person.aka = 'Авантюрка';
   person.card_src = 'Trigger_Happy.png';
   person.description = 'Отличная Далия и для новичков, и в целом. Прокачивать можно, алмазить на своё усмотрение, ведь есть Далии выше рангом которые лучше.';
   person.ability = 'Обычные выстрелы наносят урон также союзникам противника и при этом дают бешенство на 15 сек при попадании по ним.';
   person.marquee1 = `${dahlia.marquee1} Основной выбор.`;
   person.marquee2 = `${dahlia.marquee2}`;
   person.prestige_description = `${dahlia.prestige}`;
   person.prestige_activation = `${dahlia.p_active}`;
   person.at = '7,392';
   person.hp = '50,381';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'dahlia/Empower.png';
   person.build_2_img = 'dahlia/Door_Mat.png';
   person.build_3_img = 'dahlia/Death_Pendulum.png';
   person.build_4_img = 'dahlia/Medici_Mousetrap.png';
   person.build_1_desc = 'Накладывает проклятье.';
   person.build_2_desc = 'Накладывает раскол брони.';
   person.build_3_desc = 'Повышенный шанс крита.';
   person.build_4_desc = 'Обездвижить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function golden_gunner() {
   person.card_name = 'Золотой стрелок';
   person.aka = 'Стрелок';
   person.card_src = 'Golden_Gunner.png';
   person.description = 'Очень сильный бронзовый персонаж, можно прокачивать по надобности. Но алмазить не стоит, не выгодно.';
   person.ability = 'Если не осталось патронов, перезарядка даёт 5 точности. При не менее 3 точности, выстрелы неблокируемы и наносят дополнительно 100% урона.';
   person.marquee1 = `${dahlia.marquee1} Основной выбор.`;
   person.marquee2 = `${dahlia.marquee2}`;
   person.prestige_description = `${dahlia.prestige}`;
   person.prestige_activation = `${dahlia.p_active}`;
   person.at = '9,293';
   person.hp = '49,824';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'dahlia/Empower.png';
   person.build_2_img = 'dahlia/Door_Mat.png';
   person.build_3_img = 'dahlia/Death_Pendulum.png';
   person.build_4_img = 'dahlia/Medici_Mousetrap.png';
   person.build_1_desc = 'Накладывает проклятье.';
   person.build_2_desc = 'Накладывает раскол брони.';
   person.build_3_desc = 'Повышенный шанс крита.';
   person.build_4_desc = 'Обездвижить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function lethal_weapon() {
   person.card_name = 'Смертельное оружие';
   person.aka = 'Летальное оружие';
   person.card_src = 'Lethal_Weapon.png';
   person.description = 'Хоть урон низок, хороший кровотокер с регеном шкалы. Можно прокачивать и алмазить.';
   person.ability = 'Любые выстрелы из пушки накладывают противнику кровотечение на 10 сек. Находясь рядом с противником с кровотечением, получает 3% шкалы бб и 1% здоровья в секунду.';
   person.marquee1 = `${dahlia.marquee1} Основной выбор.`;
   person.marquee2 = `${dahlia.marquee2}`;
   person.prestige_description = `${dahlia.prestige}`;
   person.prestige_activation = `${dahlia.p_active}`;
   person.at = '7,335';
   person.hp = '64,704';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'dahlia/Empower.png';
   person.build_2_img = 'dahlia/Door_Mat.png';
   person.build_3_img = 'dahlia/Girls_Night.png';
   person.build_4_img = 'dahlia/Last_Call.png';
   person.build_1_desc = 'Накладывает проклятье.';
   person.build_2_desc = 'Накладывает раскол брони.';
   person.build_3_desc = 'Шанс наложить метку смерти.';
   person.build_4_desc = 'При убийстве даёт бешенство и меткий глаз.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dame_slayer() {
   person.card_name = 'Наёмница рока';
   person.aka = 'Дум';
   person.card_src = 'Dame_Slayer.png';
   person.description = 'Не плохая вариация сама по себе, электрические заряды хороши станом противника, и гибель как бонус, но проблема в одноразовости. Не стоит прокачивать.';
   person.ability = 'Раз за матч при перезарядке, когда не осталось зарядов, получает 6 электрических зарядов и накладывает гибель на 20 сек противнику, которая снимается при смене или смерти Далии. Электрические снаряды наносят дополнительно 100% урона и снимают 15% шкалы блокбастера противника (включая блок).';
   person.marquee1 = `${dahlia.marquee1} Основной выбор.`;
   person.marquee2 = `${dahlia.marquee2}`;
   person.prestige_description = `${dahlia.prestige}`;
   person.prestige_activation = `${dahlia.p_active}`;
   person.at = '8,640';
   person.hp = '58,791';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'dahlia/Empower.png';
   person.build_2_img = 'dahlia/Door_Mat.png';
   person.build_3_img = 'dahlia/Girls_Night.png';
   person.build_4_img = 'dahlia/Stage_Hazard.png';
   person.build_1_desc = 'Накладывает проклятье.';
   person.build_2_desc = 'Накладывает раскол брони.';
   person.build_3_desc = 'Шанс наложить метку смерти.';
   person.build_4_desc = 'Шанс наложить раскол защиты.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function soul_crusher() {
   person.card_name = 'Сокрушительница душ';
   person.aka = 'Сокрушитель';
   person.card_src = 'Soul_Crusher.png';
   person.description = 'Сильнейшая Далия для своего ранга. Имеет лёгкий доступ к баффу меткий глаз, очень полезный против многих защитных баффов. Рекомендуется прокачивать и алмазить, урон также очень высокий, но здоровье маленькое, аккуратнее.';
   person.ability = 'Когда противник получает бафф, даёт ему раскол защиты а себе меткий глаз на 10 сек. Дополнительные 10% к урону за каждый эффект противника, положительный и отрицательный.';
   person.marquee1 = `${dahlia.marquee1} Основной выбор.`;
   person.marquee2 = `${dahlia.marquee2}`;
   person.prestige_description = `${dahlia.prestige}`;
   person.prestige_activation = `${dahlia.p_active}`;
   person.at = '9,946';
   person.hp = '52,877';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'dahlia/Empower.png';
   person.build_2_img = 'dahlia/Door_Mat.png';
   person.build_3_img = 'dahlia/Death_Pendulum.png';
   person.build_4_img = 'dahlia/Medici_Mousetrap.png';
   person.build_1_desc = 'Накладывает проклятье.';
   person.build_2_desc = 'Накладывает раскол брони.';
   person.build_3_desc = 'Повышенный шанс крита.';
   person.build_4_desc = 'Обездвижить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function psycommander() {
   person.card_name = 'Психокомандир';
   person.aka = 'Психо';
   person.card_src = 'Psycommander.png';
   person.description = 'Очень хорошая вариация, которую также можно получить из быстрой игры Далии в ранге золото и алмаз. Рекомендуется прокачивать и алмазить.';
   person.ability = 'При последнем выстреле, получает неупал и 5 бешенства на 10 секунд. Под бешенством при использовании особого приёма, получает меткий глаз и 3 уклонения на 10 секунд.';
   person.marquee1 = `${dahlia.marquee1} Основной выбор.`;
   person.marquee2 = `${dahlia.marquee2}`;
   person.prestige_description = `${dahlia.prestige}`;
   person.prestige_activation = `${dahlia.p_active}`;
   person.at = '11,616';
   person.hp = '61,728';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'dahlia/Empower.png';
   person.build_2_img = 'dahlia/Door_Mat.png';
   person.build_3_img = 'dahlia/Death_Pendulum.png';
   person.build_4_img = 'dahlia/Onslaught.png';
   person.build_1_desc = 'Накладывает проклятье.';
   person.build_2_desc = 'Накладывает раскол брони.';
   person.build_3_desc = 'Повышенный шанс крита.';
   person.build_4_desc = 'Накладывает меткий глаз.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function corrosive_agent() {
   person.card_name = 'Едкий агент';
   person.aka = 'Коррозия';
   person.card_src = 'Corrosive_Agent.png';
   person.description = 'Позиционируется как защитная вариация. Запас здоровья не очень большой, контрится в основном персонажами без блокбастеров, также безкрит из-за уникалки, но опасна когда сама атакует. Иногда используют в атаку из-за барьеров и неблокируемых атак.';
   person.ability = 'Когда любой из персонажей использует блокбастер, снимает все свои дебаффы и получает 3 барьера. При 5 стаках барьера, все выстрелы из пушки неблокируемые и накладывают слизь на 10 секунд.';
   person.marquee1 = `${dahlia.marquee1}`;
   person.marquee2 = `${dahlia.marquee2} ТОЛЬКО этот вариант.`;
   person.prestige_description = `${dahlia.prestige}`;
   person.prestige_activation = `${dahlia.p_active}`;
   person.at = '8,564';
   person.hp = '75,476';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопрот криту', 'Прирост шкалы'];
   person.build_1_img = 'dahlia/Empower.png';
   person.build_2_img = 'dahlia/Door_Mat.png';
   person.build_3_img = 'dahlia/Girls_Night.png';
   person.build_4_img = 'dahlia/Last_Call.png';
   person.build_1_desc = 'Накладывает проклятье.';
   person.build_2_desc = 'Накладывает раскол брони.';
   person.build_3_desc = 'Шанс наложить метку смерти.';
   person.build_4_desc = 'При убийстве даёт бешенство и меткий глаз.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function martial_outlaw() {
   person.card_name = 'Военный преступник';
   person.aka = 'Преступник';
   person.card_src = 'Martial_Outlaw.png';
   person.description = 'Отличный саппорт, дающий ускорение основному персонажу и сильное кровотечение врагу. Можно использовать на постоянной основе. Также сама неплохо справляется в роли активного дд персонажа.';
   person.ability = 'Заряженные атаки любого союзника дают ему ускорение на 12 сек при ударе. Любой союзник под ускорением получает шанс 25% при ударе наложить раскол брони и сильное кровотечение на 10 сек.';
   person.marquee1 = `${dahlia.marquee1} Основной выбор.`;
   person.marquee2 = `${dahlia.marquee2}`;
   person.prestige_description = `${dahlia.prestige}`;
   person.prestige_activation = `${dahlia.p_active}`;
   person.at = '11,616';
   person.hp = '61,728';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'dahlia/Empower.png';
   person.build_2_img = 'dahlia/Stage_Hazard.png';
   person.build_3_img = 'dahlia/Death_Pendulum.png';
   person.build_4_img = 'dahlia/See_You_Around.png';
   person.build_1_desc = 'Накладывает проклятье.';
   person.build_2_desc = 'Защита спереди.';
   person.build_3_desc = 'Повышенный шанс крита.';
   person.build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function fur_monger() {
   person.card_name = 'Меховик войны';
   person.aka = 'Мех';
   person.card_src = 'Fur_Monger.png';
   person.description = 'Очень мощный персонаж с огромным уроном и хиллками. Очень силён в быстрых играх и параллельках. Можно поставить на защиту при неимении хороших защитных персов.';
   person.ability = 'При выстреле из пушки получает безвременные бешенство, шипы или регенерацию. Снимаются при нокдауне. За каждый бафф бонус 15% к урону от выстрелов.';
   person.marquee1 = `${dahlia.marquee1} Основной выбор.`;
   person.marquee2 = `${dahlia.marquee2}`;
   person.prestige_description = `${dahlia.prestige}`;
   person.prestige_activation = `${dahlia.p_active}`;
   person.at = '13,556';
   person.hp = '72,058';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['В дд статах'];
   person.build_1_img = 'dahlia/Door_Mat.png';
   person.build_2_img = 'dahlia/Empower.png';
   person.build_3_img = 'dahlia/Death_Pendulum.png';
   person.build_4_img = 'dahlia/Last_Call.png';
   person.build_1_desc = 'Накладывает раскол брони.';
   person.build_2_desc = 'Накладывает проклятье.';
   person.build_3_desc = 'Повышенный шанс крита.';
   person.build_4_desc = 'Совместима с первой абилкой меховика.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function unholy_host() {
   person.card_name = 'Носитель нечисти';
   person.aka = 'Нечисть';
   person.card_src = 'Unholy_Host.png';
   person.description = 'Очень сильный антибаффер и хиллер. Можно использовать в атаке против бафферов, урон хороший. Можно ставить в защиту, здоровья очень много, также противник не будет использовать критующих персонажей, из-за регенераций, но только если сам не наложит блок исцеления.';
   person.ability = 'Когда Далия или любой персонаж противника призывается, снимает все его баффы и накладывает проклятье на 20 секунд. Когда противник под проклятьем, вампирит 2% его максимальных НР.';
   person.marquee1 = `${dahlia.marquee1}`;
   person.marquee2 = `${dahlia.marquee2} Основной выбор.`;
   person.prestige_description = `${dahlia.prestige}`;
   person.prestige_activation = `${dahlia.p_active}`;
   person.at = '10,004';
   person.hp = '88,052';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Точность', 'Сопрот криту'];
   person.build_1_img = 'dahlia/Empower.png';
   person.build_2_img = 'dahlia/Door_Mat.png';
   person.build_3_img = 'dahlia/Girls_Night.png';
   person.build_4_img = 'dahlia/Death_Pendulum.png';
   person.build_1_desc = 'Накладывает проклятье.';
   person.build_2_desc = 'Накладывает раскол брони.';
   person.build_3_desc = 'Шанс наложить метку смерти.';
   person.build_4_desc = 'Повышенный шанс крита.';
   skullgirls.replaceChildren();
   pageGenerator();
}
