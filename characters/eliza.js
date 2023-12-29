const eliza = {
   marquee1: 'Клятва - при поражении союзника восстанавливает 50% здоровья.',
   marquee2: 'Жертва - при поражении союзника восстанавливает 70% шкалы блокбастера.',
   prestige: 'В режиме сехмет шанс при ударе снять положительный эффект с врага и восстановить немного здоровья.',
   p_active: '25% за переход в режим Сехмет.'
}

function denile() {
   person.card_name = 'Нилисток';
   person.aka = 'Нилисток';
   person.card_src = 'In_Denile.png';
   person.description = 'Очень слабая карточка, не рекомендуется прокачивать. Находит своё место только на аватарке в виде алмазной шайни из-за своей красоты.';
   person.ability = 'При переходе в Сехмет снимает все отрицательные эффекты и дает иммунитет на 15 сек, а врагу раскол брони.';
   person.marquee1 = `${eliza.marquee1}`;
   person.marquee2 = `${eliza.marquee2}`;
   person.prestige_description = `${eliza.prestige}`;
   person.prestige_activation = `${eliza.p_active}`;
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
   person.build_3_desc = 'Сехмет с шансом дать кровотечение и блок исцеления.';
   person.build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function decrypted() {
   person.card_name = 'Гроб да винчи';
   person.aka = 'Гроб';
   person.card_src = 'Decrypted.png';
   person.description = 'Достойный вариант Элайзы для новичков в целях познакомиться с персонажем. Не особо сильная, но хорошая карточка, алмазить не стоит. Алмазят только шайни для красивой аватарки.';
   person.ability = 'При переходе в Сехмет ворует 1 положительный эффект и даёт иссушение на 10 сек. Также увеличен урон на 25% за каждого живого противника.';
   person.marquee1 = `${eliza.marquee1}`;
   person.marquee2 = `${eliza.marquee2}`;
   person.prestige_description = `${eliza.prestige}`;
   person.prestige_activation = `${eliza.p_active}`;
   person.at = '6,951';
   person.hp = '61,018';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'eliza/Sekhmets_Bite.png';
   person.build_2_img = 'eliza/Sekhmets_Fury.png';
   person.build_3_img = 'eliza/Sekhmets_Turn.png';
   person.build_4_img = 'eliza/Chaos_Banish.png';
   person.build_1_desc = 'Сехмет с шансом дать проклятье.';
   person.build_2_desc = 'Сехмет с шансом получить бешенство.';
   person.build_3_desc = 'Сехмет с шансом дать кровотечение и блок исцеления.';
   person.build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}
