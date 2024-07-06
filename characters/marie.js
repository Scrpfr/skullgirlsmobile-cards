const marie = {
   marquee1: 'Сжигание - при сжигании тела даёт 25% к шкале блокбастера и бешенство.',
   marquee2: 'Возрождение - пока Мари жива, союзники при воскрешении получают броню и доп 25% здоровья.',
   prestige: 'При использовании заряда накладывает вечный покой на 10 сек.',
   p_active: '14% за каждый истёкший бафф или дебафф любого перса.'
}

function bare_bones() {
   card_name = 'Голые кости';
   aka = 'Кости';
   card_src = 'Bare_Bones.png';
   description = 'Не плохой универсал для начальной стадии игры. В атаке можно играть пылесосами и душить миазмами. Также по началу игры можно ставить в защиту, но только с пылесосами и взрывами, шипы и миазмы должны доставить проблем неопытным игрокам. Можно прокачивать до золота, алмазить не стоит.';
   ability = 'При использовании особого приёма, получает шипы на 12 сек. При 3 стаков шипов, превращает все шипы в миазмы на 15 сек.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '6,490';
   hp = '50,381';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Перез приёмов'];
   build_1_img = 'marie/Hoover_Maneuver.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Suction_Obstruction.png';
   build_4_img = 'marie/Marie_Burst.png';
   build_1_desc = 'Восстановит здоровье.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Неблокируемый захват, сочетается с абилкой.';
   build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function moody_magus() {
   card_name = 'Угрюмая колдунья';
   aka = 'Колдунья';
   card_src = 'Moody_Magus.png';
   description = 'Как бронза, вполне хорошая вариация, если вкачивать в атаку и играть от комбо Мари. Но в целом, не стоит прокачивать.';
   ability = 'Получает рандомный бафф на 30 сек при победе над противником или при могильном заряде. Под действием положительных эффектов, наполняет 2% шкалы блокбастера в секунду.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '8,180';
   hp = '49,940';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'marie/Carpal_Pummel.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Marie_Go_Round.png';
   build_4_img = 'marie/A_Moment_Time.png';
   build_1_desc = 'Шанс оглушить, неблокируем под вечным покоем.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Непоколебим и даёт раскол брони.';
   build_4_desc = 'Даст случайный бафф. При могильном заряде, также наложит иссушение.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function phantom_wrangler() {
   card_name = 'Призрачная пастушка';
   aka = 'Рэнглер';
   card_src = 'Phantom_Wrangler.png';
   description = 'Хорошо накладывает слизь, которая наносит урон врагу если он получает бафф. Но своей атаки у неё мало, поэтому, прокачивать не рекомендуется.';
   ability = 'Удары скелетов наносят на 30% больше урона и с шансом 50% накладывают слизь на 15 сек. Если противник со слизью, блокбастеры накладывают вечный покой на 15 сек.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '8,717';
   hp = '52,954';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'marie/Carpal_Pummel.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Bellows_Blast.png';
   build_4_img = 'marie/Hilgards_Haymaker.png';
   build_1_desc = 'Шанс оглушить, неблокируем под вечным покоем.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Шанс перенести дебафф с себя на противника (включая блок).';
   build_4_desc = 'Наложит вечный покой.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function snake_charmer() {
   card_name = 'Змея-заклинательница';
   aka = 'Заклинательница';
   card_src = 'Snake_Charmer.png';
   description = 'Полу-саппорт, довольно сложно реализуемый.';
   ability = 'При 50% могильном заряде, особые приёмы накладывают на противника неподвижность и отключение блокбастеров на 10%. При использовании могильного заряда, все союзники получают перманентное бешенство и +50% к шкале блокбастеров.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2} Лучший выбор.`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '7,604';
   hp = '58,791';
   atk_stats = ['Только саппорт'];
   def_stats = ['Не защитник'];
   build_1_img = 'marie/Weight_of_our_Will.png';
   build_2_img = 'marie/Hop_To_It.png';
   build_3_img = 'marie/Bellows_Blast.png';
   build_4_img = 'marie/Marie_Burst.png';
   build_1_desc = 'Каждый удар снимает часть шкалы блокбастера врага.';
   build_2_desc = 'Шанс наложить сильное кровотечение.';
   build_3_desc = 'Шанс перенести дебафф с себя на противника (включая блок).';
   build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function maid_of_honor() {
   card_name = 'Рыцарь-горничная';
   aka = 'Рыцарь';
   card_src = 'Maid_of_Honor.png';
   description = 'Персонаж чисто саппорт, ей не нужно самостоятельно сражаться. Очень полезная и доступная, из-за серебрянного ранга, отлично подходит против нечисти и жажды смерти. А с Возрождением и персоной в команде, можно задефать основного атакующего персонажа, тоже полезно.';
   ability = 'Пока Мари жива, блокирование атак любым из персонажей с шансом 50% превращает 1 дебафф в барьер. Активный персонаж с барьером восстанавливает 2% здоровья в секунду.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '6,471';
   hp = '64,704';
   atk_stats = ['Только саппорт', 'Точность'];
   def_stats = ['Только саппорт', 'Точность'];
   build_1_img = 'marie/Weight_of_our_Will.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Suction_Obstruction.png';
   build_4_img = 'marie/Marie_Burst.png';
   build_1_desc = 'Каждый удар снимает часть шкалы блокбастера врага.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Неблокируемый захват.';
   build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}

function octoplasm() {
   card_name = 'Октоплазма';
   aka = 'Плазма';
   card_src = 'Octoplasm.png';
   description = 'Можно использовать только как саппорта, продляющего дебаффы противника. Но зарядить и использовать могильный заряд врядли можно в бою против сильных врагов, к тому же очень низкая атака. Играть ею не получится, только саппорт.';
   ability = 'Пока Мари жива, время действия дебаффов противника увеличено на 5 секунд (не действует на эффект оглушения и на водяных стихий). При использовании могильного заряда, снимает все баффы противника и накладывает вечный покой на 35 сек, а водяные союзники получают мощную регенерацию на постоянку.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '7,527';
   hp = '75,476';
   atk_stats = ['Только саппорт'];
   def_stats = ['Не защитник'];
   build_1_img = 'marie/Weight_of_our_Will.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Suction_Obstruction.png';
   build_4_img = 'marie/Marie_Burst.png';
   build_1_desc = 'Каждый удар снимает часть шкалы блокбастера врага.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Неблокируемый захват.';
   build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function gust_buster() {
   card_name = 'Охотница с пылесосом';
   aka = 'Охотница';
   card_src = 'Gust_Buster.png';
   description = 'Характеристики слабоваты, зато забирает сразу 3 положительных эффектов у врага. Сильных врагов не потянет, но можно играть на низких рядах, там ей точно будет комфортно. Вторая абилка как запасной вариант.';
   ability = 'Атаки призывных скелетов наносят на 35% больше урона и переносят 3 баффа с противника на Мари. При использовании могильного заряда, превращает все баффы и дебаффы на себе в барьер, миазмы или бешенство на 35 секунд.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '8,852';
   hp = '68,602';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'marie/Weight_of_our_Will.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Suction_Obstruction.png';
   build_4_img = 'marie/Marie_Burst.png';
   build_1_desc = 'Каждый удар снимает часть шкалы блокбастера врага.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Неблокируемый захват.';
   build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function grin_reaper() {
   card_name = 'Скалящийся жнец';
   aka = 'Скалящаяся';
   card_src = 'Grin_Reaper.png';
   description = '';
   ability = 'Когда любой из персонажей использует блокбастер, восстанавливает 15% шкалы бб и накладывает полярность на 15 сек. Получает полный заряд и 2 миазмы при убийстве противника.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '10,157';
   hp = '61,767';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'marie/Weight_of_our_Will.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Suction_Obstruction.png';
   build_4_img = 'marie/Marie_Burst.png';
   build_1_desc = 'Каждый удар снимает часть шкалы блокбастера врага.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Неблокируемый захват.';
   build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dark_horse() {
   card_name = 'Тёмная лошадка';
   aka = 'Лошадка';
   card_src = 'Dark_Horse.png';
   description = '';
   ability = 'При нахождении с одним и тем же противником, наложит на него постоянное проклятье, а себе даст постоянное ускорение. Если жива и находится под ускорением, союзники стихии тьмы получают бонус 50% к атаке.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '10,157';
   hp = '61,767';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'marie/Weight_of_our_Will.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Suction_Obstruction.png';
   build_4_img = 'marie/Marie_Burst.png';
   build_1_desc = 'Каждый удар снимает часть шкалы блокбастера врага.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Неблокируемый захват.';
   build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function gravedigger() {
   card_name = 'Гробокопательница';
   aka = 'Гробокоп';
   card_src = 'Gravedigger.png';
   description = '';
   ability = 'При нокдауне противника, получает иммунитет и непоколебимость на 15 секунд, под которыми каждые 2 секунды ещё получает точность.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '8,852';
   hp = '68,602';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'marie/Weight_of_our_Will.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Suction_Obstruction.png';
   build_4_img = 'marie/Marie_Burst.png';
   build_1_desc = 'Каждый удар снимает часть шкалы блокбастера врага.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Неблокируемый захват.';
   build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}

function megalomaniac() {
   card_name = 'Мегаломаньяк';
   aka = 'Санс';
   card_src = 'Megalomaniac.png';
   description = 'Можно использовать как второй или третий танк, но первой ставить не стоит. Может не представлять угрозы, ведь абилка легко контрится. Но не контрить абилку будет очень плохой идеей.';
   ability = 'Если жива, получает постоянную (несъёмную) броню и уклонение при потере 30% НР любого союзника. Одна броня снимается когда противник активирует блокбастер. Когда активна и с не менее 3 брони, каждые 15 сек оглушает на 4 сек и вампирит 10% шкалы блокбастера.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '8,775';
   hp = '88,052';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Атака', 'Защита', 'Сопротивление'];
   build_1_img = 'marie/Repetitive_Skeleton_Impact.png';
   build_2_img = 'marie/Carpal_Pummel.png';
   build_3_img = 'marie/Marie_Go_Round.png';
   build_4_img = 'marie/Suction_Obstruction.png';
   build_1_desc = 'Наложит обратную полярность. При могильном заряде доп урон.';
   build_2_desc = 'Шанс оглушить, неблокируем под вечным покоем.';
   build_3_desc = 'Непоколебим и даёт раскол брони.';
   build_4_desc = 'Неблокируемый захват.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function heartless() {
   card_name = 'Бессердечная';
   aka = 'Хартлес';
   card_src = 'Heartless.png';
   description = '';
   ability = 'Удары призывных скелетов наносят на 50% больше урона и неблокируемы, если у противника менее 50% НР или на нём минимум 3 дебаффа. Если Мари жива, последний живой противник появится с проклятьем, сильным кровотечением и вечным покоем на 20 сек каждое.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '11,847';
   hp = '72,058';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'marie/Weight_of_our_Will.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Suction_Obstruction.png';
   build_4_img = 'marie/Marie_Burst.png';
   build_1_desc = 'Каждый удар снимает часть шкалы блокбастера врага.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Неблокируемый захват.';
   build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function scythe_of_death() {
   card_name = 'Scythe Of Death';
   aka = 'Reaper';
   card_src = 'Scythe_Of_Death.png';
   description = 'Фан персонаж для Дюральки, по-приколу. Почему бы нет)))';
   ability = 'Хз чё может.';
   marquee1 = `${marie.marquee1}`;
   marquee2 = `${marie.marquee2}`;
   prestige_description = `${marie.prestige}`;
   prestige_activation = `${marie.p_active}`;
   at = '???';
   hp = '???';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'marie/Carpal_Pummel.png';
   build_2_img = 'marie/Scrub_n_Smash.png';
   build_3_img = 'marie/Marie_Go_Round.png';
   build_4_img = 'marie/A_Moment_Time.png';
   build_1_desc = 'Шанс оглушить, неблокируем под вечным покоем.';
   build_2_desc = 'Шанс снять все баффы противника.';
   build_3_desc = 'Непоколебим и даёт раскол брони.';
   build_4_desc = 'Даст случайный бафф. При могильном заряде, также наложит иссушение.';
   skullgirls.replaceChildren();
   pageGenerator();
}