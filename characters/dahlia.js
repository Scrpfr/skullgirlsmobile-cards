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
   person.description = 'Отличная Далия и для новичков, и в целом. Прокачивать можно, алмазить на своё усмотрение, ведь есть Далии еще сильнее.';
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
   person.build_3_desc = 'Резкая защищённая атака.';
   person.build_4_desc = 'Обездвижить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function golden_gunner() {
   person.card_name = 'Золотой стрелок';
   person.aka = 'Стрелок';
   person.card_src = 'Golden_Gunner.png';
   person.description = 'Очень сильный бронзовый персонаж, но при этом есть вариации еще сильнее. Качать можно, но авантюристка будет лучше.';
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
   person.build_3_desc = 'Резкая защищённая атака.';
   person.build_4_desc = 'Обездвижить противника.';
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
   person.build_3_desc = 'Резкая защищённая атака.';
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
   person.build_3_desc = 'Резкая защищённая атака.';
   person.build_4_desc = 'Совместима с первой абилкой меховика.';
   skullgirls.replaceChildren();
   pageGenerator();
}