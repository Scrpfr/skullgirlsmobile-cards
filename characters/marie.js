const marie = {
   marquee1: 'Сжигание - при сжигании тела даёт 25% к шкале блокбастера и бешенство.',
   marquee2: 'Возрождение - пока Мари жива, союзники при воскрешении получают броню и доп 25% здоровья.',
   prestige: 'При использовании заряда накладывает вечный покой на 10 сек.',
   p_active: '14% за каждый истёкший бафф или дебафф любого перса.'
}

function denile() {
   person.card_name = 'Нилисток';
   person.aka = 'Нилисток';
   person.card_src = 'In_Denile.png';
   person.description = 'Очень слабая карточка, не рекомендуется прокачивать. Находит своё место только на аватарке в виде алмазной шайни из-за своей красоты.';
   person.ability = 'При переходе в Сехмет снимает все отрицательные эффекты и дает иммунитет на 15 сек, а врагу раскол брони.';
   person.marquee1 = `${marie.marquee1}`;
   person.marquee2 = `${marie.marquee2}`;
   person.prestige_description = `${marie.prestige}`;
   person.prestige_activation = `${marie.p_active}`;
   person.at = '7,392';
   person.hp = '50,381';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'eliza/Sekhmets_Bite.png';
   person.build_2_img = 'eliza/Sekhmets_Fury.png';
   person.build_3_img = 'eliza/Sekhmets_Turn.png';
   person.build_4_img = 'eliza/Chaos_Banish.png';
   person.build_1_desc = 'Сехмет с шансом дать проклятье.';
   person.build_2_desc = 'Сехмет с шансом получить бешенство.';
   person.build_3_desc = 'Сехмет с шансом дать кровотечение и блок исцеления..';
   person.build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}
