const marie = {
   marquee1: 'Сжигание - при сжигании тела даёт 25% к шкале блокбастера и бешенство.',
   marquee2: 'Возрождение - пока Мари жива, союзники при воскрешении получают броню и доп 25% здоровья.',
   prestige: 'При использовании заряда накладывает вечный покой на 10 сек.',
   p_active: '14% за каждый истёкший бафф или дебафф любого перса.'
}

function bare_bones() {
   person.card_name = 'Голые кости';
   person.aka = 'Кости';
   person.card_src = 'Bare_Bones.png';
   person.description = 'Не плохой универсал для начальной стадии игры. В атаке можно играть пылесосами и душить миазмами. Также по началу игры можно ставить в защиту, но только с пылесосами и взрывами, шипы и миазмы должны доставить проблем неопытным игрокам. Можно прокачивать до золота, алмазить не стоит.';
   person.ability = 'При использовании особого приёма, получает шипы на 12 сек. При 3 стаков шипов, превращает все шипы в миазмы на 15 сек.';
   person.marquee1 = `${marie.marquee1}`;
   person.marquee2 = `${marie.marquee2}`;
   person.prestige_description = `${marie.prestige}`;
   person.prestige_activation = `${marie.p_active}`;
   person.at = '6,490';
   person.hp = '50,381';
   person.atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Перез приёмов'];
   person.build_1_img = 'marie/Hoover_Maneuver.png';
   person.build_2_img = 'marie/Scrub_n_Smash.png';
   person.build_3_img = 'marie/Suction_Obstruction.png';
   person.build_4_img = 'marie/Marie_Burst.png';
   person.build_1_desc = 'Восстановит здоровье.';
   person.build_2_desc = 'Шанс снять все баффы противника.';
   person.build_3_desc = 'Неблокируемый захват, сочетается с абилкой.';
   person.build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function moody_magus() {
   person.card_name = 'Угрюмая колдунья';
   person.aka = 'Колдунья';
   person.card_src = 'Moody_Magus.png';
   person.description = 'Как бронза, вполне хорошая вариация, если вкачивать в атаку и играть от комбо Мари. Но в целом, не стоит прокачивать.';
   person.ability = 'Получает рандомный бафф на 30 сек при победе над противником или при могильном заряде. Под действием положительных эффектов, наполняет 2% шкалы блокбастера в секунду.';
   person.marquee1 = `${marie.marquee1}`;
   person.marquee2 = `${marie.marquee2}`;
   person.prestige_description = `${marie.prestige}`;
   person.prestige_activation = `${marie.p_active}`;
   person.at = '8,180';
   person.hp = '49,940';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'marie/Carpal_Pummel.png';
   person.build_2_img = 'marie/Scrub_n_Smash.png';
   person.build_3_img = 'marie/Marie_Go_Round.png';
   person.build_4_img = 'marie/A_Moment_Time.png';
   person.build_1_desc = 'Шанс оглушить, неблокируем под вечным покоем.';
   person.build_2_desc = 'Шанс снять все баффы противника.';
   person.build_3_desc = 'Непоколебим и даёт раскол брони.';
   person.build_4_desc = 'Даст случайный бафф. При могильном заряде, также наложит иссушение.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function phantom_wrangler() {
   person.card_name = 'Призрачная пастушка';
   person.aka = 'Рэнглер';
   person.card_src = 'Phantom_Wrangler.png';
   person.description = 'Хорошо накладывает слизь, которая наносит урон врагу если он получает бафф. Но своей атаки у неё мало, поэтому, прокачивать не рекомендуется.';
   person.ability = 'Удары скелетов наносят на 30% больше урона и с шансом 50% накладывают слизь на 15 сек. Если противник со слизью, блокбастеры накладывают вечный покой на 15 сек.';
   person.marquee1 = `${marie.marquee1}`;
   person.marquee2 = `${marie.marquee2}`;
   person.prestige_description = `${marie.prestige}`;
   person.prestige_activation = `${marie.p_active}`;
   person.at = '8,717';
   person.hp = '52,954';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'marie/Carpal_Pummel.png';
   person.build_2_img = 'marie/Scrub_n_Smash.png';
   person.build_3_img = 'marie/Bellows_Blast.png';
   person.build_4_img = 'marie/Hilgards_Haymaker.png';
   person.build_1_desc = 'Шанс оглушить, неблокируем под вечным покоем.';
   person.build_2_desc = 'Шанс снять все баффы противника.';
   person.build_3_desc = 'Шанс перенести дебафф с себя на противника (включая блок).';
   person.build_4_desc = 'Наложит вечный покой.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function snake_charmer() {
   person.card_name = 'Змея-заклинательница';
   person.aka = 'Заклинательница';
   person.card_src = 'Snake_Charmer.png';
   person.description = 'Полу-саппорт, довольно сложно реализуемый.';
   person.ability = 'При 50% могильном заряде, особые приёмы накладывают на противника неподвижность и отключение блокбастеров на 10%. При использовании могильного заряда, все союзники получают перманентное бешенство и +50% к шкале блокбастеров.';
   person.marquee1 = `${marie.marquee1}`;
   person.marquee2 = `${marie.marquee2} Лучший выбор.`;
   person.prestige_description = `${marie.prestige}`;
   person.prestige_activation = `${marie.p_active}`;
   person.at = '7,604';
   person.hp = '58,791';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'marie/Weight_of_our_Will.png';
   person.build_2_img = 'marie/Hop_To_It.png';
   person.build_3_img = 'marie/Bellows_Blast.png';
   person.build_4_img = 'marie/Marie_Burst.png';
   person.build_1_desc = 'Каждый удар снимает часть шкалы блокбастера врага.';
   person.build_2_desc = 'Шанс наложить сильное кровотечение.';
   person.build_3_desc = 'Шанс перенести дебафф с себя на противника (включая блок).';
   person.build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function maid_of_honor() {
   person.card_name = 'Рыцарь-горничная';
   person.aka = 'Рыцарь';
   person.card_src = 'Maid_of_Honor.png';
   person.description = 'Персонаж чисто саппорт, ей не нужно самостоятельно сражаться. Очень полезная и доступная, из-за серебрянного ранга, отлично подходит против нечисти и жажды смерти. А с Возрождением и персоной в команде, можно задефать основного атакующего персонажа, тоже полезно.';
   person.ability = 'Пока Мари жива, блокирование атак любым из персонажей с шансом 50% превращает 1 дебафф в барьер. Активный персонаж с барьером восстанавливает 2% здоровья в секунду.';
   person.marquee1 = `${marie.marquee1}`;
   person.marquee2 = `${marie.marquee2} Лучший выбор.`;
   person.prestige_description = `${marie.prestige}`;
   person.prestige_activation = `${marie.p_active}`;
   person.at = '6,471';
   person.hp = '64,704';
   person.atk_stats = ['Только саппорт', 'Точность'];
   person.def_stats = ['Только саппорт', 'Точность'];
   person.build_1_img = 'marie/Weight_of_our_Will.png';
   person.build_2_img = 'marie/Scrub_n_Smash.png';
   person.build_3_img = 'marie/Suction_Obstruction.png';
   person.build_4_img = 'marie/Marie_Burst.png';
   person.build_1_desc = 'Каждый удар снимает часть шкалы блокбастера врага.';
   person.build_2_desc = 'Шанс снять все баффы противника.';
   person.build_3_desc = 'Неблокируемый захват.';
   person.build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function megalomaniac() {
   person.card_name = 'Мегаломаньяк';
   person.aka = 'Санс';
   person.card_src = 'Megalomaniac.png';
   person.description = 'Довольно спорная ситуация: качать или нет. Можно атаковать её первой под проклятьем или порчей, тогда абилка вообще бесполезна. С другой стороны, абилка крайне опасна если её не контрить.';
   person.ability = 'Если жива, получает постоянную (несъёмную) броню при потере 30% НР любого союзника. Броня снимается при активации блокбастера любым персонажем. Когда активна и с 3 брони, каждые 15 сек наносит 100% урона от своей макимальной атаки и оглушает на 3 сек.';
   person.marquee1 = `${marie.marquee1}`;
   person.marquee2 = `${marie.marquee2}`;
   person.prestige_description = `${marie.prestige}`;
   person.prestige_activation = `${marie.p_active}`;
   person.at = '8,775';
   person.hp = '88,052';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Атака', 'Защита', 'Сопротивление'];
   person.build_1_img = 'marie/Repetitive_Skeleton_Impact.png';
   person.build_2_img = 'marie/Carpal_Pummel.png';
   person.build_3_img = 'marie/Marie_Go_Round.png';
   person.build_4_img = 'marie/Suction_Obstruction.png';
   person.build_1_desc = 'Наложит обратную полярность. При могильном заряде доп урон.';
   person.build_2_desc = 'Шанс оглушить, неблокируем под вечным покоем.';
   person.build_3_desc = 'Непоколебим и даёт раскол брони.';
   person.build_4_desc = 'Неблокируемый захват.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function scythe_of_death() {
   person.card_name = 'Scythe Of Death';
   person.aka = 'Reaper';
   person.card_src = 'Scythe_Of_Death.png';
   person.description = 'Фан персонаж для Дюральки, по-приколу. Почему бы нет)))';
   person.ability = 'Хз чё может.';
   person.marquee1 = `${marie.marquee1}`;
   person.marquee2 = `${marie.marquee2}`;
   person.prestige_description = `${marie.prestige}`;
   person.prestige_activation = `${marie.p_active}`;
   person.at = '???';
   person.hp = '???';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'marie/Carpal_Pummel.png';
   person.build_2_img = 'marie/Scrub_n_Smash.png';
   person.build_3_img = 'marie/Marie_Go_Round.png';
   person.build_4_img = 'marie/A_Moment_Time.png';
   person.build_1_desc = 'Шанс оглушить, неблокируем под вечным покоем.';
   person.build_2_desc = 'Шанс снять все баффы противника.';
   person.build_3_desc = 'Непоколебим и даёт раскол брони.';
   person.build_4_desc = 'Даст случайный бафф. При могильном заряде, также наложит иссушение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
