const dahlia = {
   marquee1: 'Неполадки - особые выстрелы наносят доп 20% урона и дают раскол брони на 10 с (включая блок).',
   marquee2: 'Не время умирать - получение критического удара активирует ускорение и регенерацию на 15 сек.',
   prestige: 'Перезарядка ружья даёт меткий глаз и врагу метку смерти на 10 сек.',
   p_active: '17% за выстрел.'
}

function trigger_happy() {
   card_name = 'Авантюристка';
   aka = 'Авантюрка';
   card_src = 'Trigger_Happy.png';
   description = 'Отличная Далия и для новичков, и в целом. Прокачивать можно, алмазить на своё усмотрение, ведь есть Далии выше рангом которые лучше.';
   ability = 'Обычные выстрелы наносят урон также союзникам противника и при этом дают бешенство на 15 сек при попадании по ним.';
   marquee1 = `${dahlia.marquee1} Основной выбор.`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '7,392';
   hp = '50,381';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Death_Pendulum.png';
   build_4_img = 'dahlia/Medici_Mousetrap.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Обездвижить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function golden_gunner() {
   card_name = 'Золотой стрелок';
   aka = 'Стрелок';
   card_src = 'Golden_Gunner.png';
   description = 'Очень сильный бронзовый персонаж, можно прокачивать по надобности. Но алмазить не стоит, не выгодно.';
   ability = 'Если не осталось патронов, перезарядка даёт 5 точности. При не менее 3 точности, выстрелы неблокируемы и наносят дополнительно 100% урона.';
   marquee1 = `${dahlia.marquee1} Основной выбор.`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '9,293';
   hp = '49,824';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Death_Pendulum.png';
   build_4_img = 'dahlia/Medici_Mousetrap.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Обездвижить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function lethal_weapon() {
   card_name = 'Смертельное оружие';
   aka = 'Летальное оружие';
   card_src = 'Lethal_Weapon.png';
   description = 'Хоть урон низок, хороший кровотокер с регеном шкалы. Можно прокачивать и алмазить.';
   ability = 'Любые выстрелы из пушки накладывают противнику кровотечение на 10 сек. Находясь рядом с противником с кровотечением, получает 3% шкалы бб и 1% здоровья в секунду.';
   marquee1 = `${dahlia.marquee1} Основной выбор.`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '7,335';
   hp = '64,704';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Girls_Night.png';
   build_4_img = 'dahlia/Last_Call.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Шанс наложить метку смерти.';
   build_4_desc = 'При убийстве даёт бешенство и меткий глаз.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dame_slayer() {
   card_name = 'Наёмница рока';
   aka = 'Дум';
   card_src = 'Dame_Slayer.png';
   description = 'Не плохая вариация сама по себе, электрические заряды хороши станом противника, и гибель как бонус, но проблема в одноразовости. Не стоит прокачивать.';
   ability = 'Раз за матч при перезарядке, когда не осталось зарядов, получает 6 электрических зарядов и накладывает гибель на 20 сек противнику, которая снимается при смене или смерти Далии. Электрические снаряды наносят дополнительно 100% урона и снимают 15% шкалы блокбастера противника (включая блок).';
   marquee1 = `${dahlia.marquee1} Основной выбор.`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '8,640';
   hp = '58,791';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Girls_Night.png';
   build_4_img = 'dahlia/Stage_Hazard.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Шанс наложить метку смерти.';
   build_4_desc = 'Шанс наложить раскол защиты.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function soul_crusher() {
   card_name = 'Сокрушительница душ';
   aka = 'Сокрушитель';
   card_src = 'Soul_Crusher.png';
   description = 'Сильнейшая Далия для своего ранга. Имеет лёгкий доступ к баффу меткий глаз, очень полезный против многих защитных баффов. Рекомендуется прокачивать и алмазить, урон также очень высокий, но здоровье маленькое, аккуратнее.';
   ability = 'Когда противник получает бафф, даёт ему раскол защиты а себе меткий глаз на 10 сек. Дополнительные 10% к урону за каждый эффект противника, положительный и отрицательный.';
   marquee1 = `${dahlia.marquee1} Основной выбор.`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '9,946';
   hp = '52,877';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Death_Pendulum.png';
   build_4_img = 'dahlia/Medici_Mousetrap.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Обездвижить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function psycommander() {
   card_name = 'Психокомандир';
   aka = 'Психо';
   card_src = 'Psycommander.png';
   description = 'Очень хорошая вариация, которую также можно получить из быстрой игры Далии в ранге золото и алмаз. Рекомендуется прокачивать и алмазить.';
   ability = 'При последнем выстреле, получает неупал и 5 бешенства на 10 секунд. Под бешенством при использовании особого приёма, получает меткий глаз и 3 уклонения на 10 секунд.';
   marquee1 = `${dahlia.marquee1} Основной выбор.`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '11,616';
   hp = '61,728';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Death_Pendulum.png';
   build_4_img = 'dahlia/Onslaught.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Накладывает меткий глаз.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function red_rider() {
   card_name = 'Красный всадник';
   aka = 'Всадник';
   card_src = 'Red_Rider.png';
   description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque voluptate deleniti numquam esse quos eligendi porro quod quis.';
   ability = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque';
   marquee1 = `${dahlia.marquee1}`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '10,100';
   hp = '68,602';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Death_Pendulum.png';
   build_4_img = 'dahlia/Onslaught.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Накладывает меткий глаз.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function corrosive_agent() {
   card_name = 'Едкий агент';
   aka = 'Коррозия';
   card_src = 'Corrosive_Agent.png';
   description = 'Позиционируется как защитная вариация. Запас здоровья не очень большой, контрится в основном персонажами без блокбастеров, также безкрит из-за уникалки, но опасна когда сама атакует. Иногда используют в атаку из-за барьеров и неблокируемых атак.';
   ability = 'Когда любой из персонажей использует блокбастер, снимает все свои дебаффы и получает 3 барьера. При 5 стаках барьера, все выстрелы из пушки неблокируемые и накладывают слизь на 10 секунд.';
   marquee1 = `${dahlia.marquee1}`;
   marquee2 = `${dahlia.marquee2} ТОЛЬКО этот вариант.`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '8,564';
   hp = '75,476';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопрот криту', 'Прирост шкалы'];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Girls_Night.png';
   build_4_img = 'dahlia/Last_Call.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Шанс наложить метку смерти.';
   build_4_desc = 'При убийстве даёт бешенство и меткий глаз.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function martial_outlaw() {
   card_name = 'Военный преступник';
   aka = 'Преступник';
   card_src = 'Martial_Outlaw.png';
   description = 'Отличный саппорт, дающий ускорение основному персонажу и сильное кровотечение врагу. Можно использовать на постоянной основе. Также сама неплохо справляется в роли активного дд персонажа.';
   ability = 'Заряженные атаки любого союзника дают ему ускорение на 12 сек при ударе. Любой союзник под ускорением получает шанс 25% при ударе наложить раскол брони и сильное кровотечение на 10 сек.';
   marquee1 = `${dahlia.marquee1} Основной выбор.`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '11,616';
   hp = '61,728';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Stage_Hazard.png';
   build_3_img = 'dahlia/Death_Pendulum.png';
   build_4_img = 'dahlia/See_You_Around.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Защита спереди.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function unfazed() {
   card_name = 'Невозмутимость';
   aka = 'Невозмутимая';
   card_src = 'Unfazed.png';
   description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque voluptate deleniti numquam esse quos eligendi porro quod quis.';
   ability = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque';
   marquee1 = `${dahlia.marquee1}`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '10,100';
   hp = '68,602';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Death_Pendulum.png';
   build_4_img = 'dahlia/Onslaught.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Накладывает меткий глаз.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function fur_monger() {
   card_name = 'Меховик войны';
   aka = 'Мех';
   card_src = 'Fur_Monger.png';
   description = 'Очень мощный персонаж с огромным уроном и хиллками. Очень силён в быстрых играх и параллельках. Можно поставить на защиту при неимении хороших защитных персов.';
   ability = 'При выстреле из пушки получает безвременные бешенство, шипы или регенерацию. Снимаются при нокдауне. За каждый бафф бонус 15% к урону от выстрелов.';
   marquee1 = `${dahlia.marquee1} Основной выбор.`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '13,556';
   hp = '72,058';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['В дд статах'];
   build_1_img = 'dahlia/Door_Mat.png';
   build_2_img = 'dahlia/Empower.png';
   build_3_img = 'dahlia/Death_Pendulum.png';
   build_4_img = 'dahlia/Last_Call.png';
   build_1_desc = 'Накладывает раскол брони.';
   build_2_desc = 'Накладывает проклятье.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Совместима с первой абилкой меховика.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function unholy_host() {
   card_name = 'Носитель нечисти';
   aka = 'Нечисть';
   card_src = 'Unholy_Host.png';
   description = 'Очень сильный антибаффер и хиллер. Можно использовать в атаке против бафферов, урон хороший. Можно ставить в защиту, здоровья очень много, также противник не будет использовать критующих персонажей, из-за регенераций, но только если сам не наложит блок исцеления.';
   ability = 'Когда Далия или любой персонаж противника призывается, снимает все его баффы и накладывает проклятье на 20 секунд. Когда противник под проклятьем, вампирит 2% его максимальных НР.';
   marquee1 = `${dahlia.marquee1}`;
   marquee2 = `${dahlia.marquee2} Основной выбор.`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '10,004';
   hp = '88,052';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Точность', 'Сопрот криту'];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Girls_Night.png';
   build_4_img = 'dahlia/Death_Pendulum.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Шанс наложить метку смерти.';
   build_4_desc = 'Повышенный шанс крита.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function hex_caliber() {
   card_name = 'Ведьмовский калибр';
   aka = 'Ведьма';
   card_src = 'Hex_Caliber.png';
   description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque voluptate deleniti numquam esse quos eligendi porro quod quis.';
   ability = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque';
   marquee1 = `${dahlia.marquee1}`;
   marquee2 = `${dahlia.marquee2}`;
   prestige_description = `${dahlia.prestige}`;
   prestige_activation = `${dahlia.p_active}`;
   at = '11,770';
   hp = '80,045';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'dahlia/Empower.png';
   build_2_img = 'dahlia/Door_Mat.png';
   build_3_img = 'dahlia/Death_Pendulum.png';
   build_4_img = 'dahlia/Onslaught.png';
   build_1_desc = 'Накладывает проклятье.';
   build_2_desc = 'Накладывает раскол брони.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Накладывает меткий глаз.';
   skullgirls.replaceChildren();
   pageGenerator();
}