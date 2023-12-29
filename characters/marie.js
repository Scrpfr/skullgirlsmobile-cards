const marie = {
   marquee1: 'Сжигание - при сжигании тела даёт 25% к шкале блокбастера и бешенство.',
   marquee2: 'Возрождение - пока Мари жива, союзники при воскрешении получают броню и доп 25% здоровья.',
   prestige: 'При использовании заряда накладывает вечный покой на 10 сек.',
   p_active: '14% за каждый истёкший бафф или дебафф любого перса.'
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
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Только саппорт'];
   person.build_1_img = 'marie/Weight_of_our_Will.png';
   person.build_2_img = 'marie/Scrub_n_Smash.png';
   person.build_3_img = 'marie/Suction_Obstruction.png';
   person.build_4_img = 'marie/Marie_Burst.png';
   person.build_1_desc = 'Каждый удар снимает 2% шкалы блокбастера врага.';
   person.build_2_desc = 'Шанс снять все баффы противника.';
   person.build_3_desc = 'Неблокируемый захват.';
   person.build_4_desc = 'Сбивает атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
