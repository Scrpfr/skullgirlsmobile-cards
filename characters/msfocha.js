const msfocha = {
   marquee1: 'Лизь - каждые 10 сек даёт регенерацию на 20 сек если персонаж не получает ударов (включая блок).',
   marquee2: 'Пи-ип - каждые 10 сек даёт бешенство на 20 сек если персонаж не получает ударов (включая блок).',
   prestige: 'Каждые 10 сек накладывает уклонение а противнику раскол защиты на 5 сек.',
   p_active: '1,5% от скорости при движении.'
}

function just_kitten() {
   person.card_name = 'Котейка-шутейка';
   person.aka = 'Шутейка';
   person.card_src = 'Just_Kitten.png';
   person.description = 'Хороший персонаж для знакомства с Мисс Форчун, популярна и у опытных игроков - превращает дебаффы в точность, а также можно ставить на защиту - может получить уклон и контратаковать. Можно алмазить.';
   person.ability = 'При получении отрицательного эффекта шанс 50% превратить его в точность. При получении удара (не включая снаряды) шанс 15% получить уклонение и ускорение на 10 сек.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '9,178';
   person.hp = '39,188';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Точность', 'Атака'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function purrfect_dark() {
   person.card_name = 'Полный мр-р-рак';
   person.aka = 'Мрак';
   person.card_src = 'Purrfect_Dark.png';
   person.description = 'Одна из лучших кошек в игре, и персонажей в целом. Огромный урон, постоянное проклятье и шанс моментального убийства, ещё и дешевизна, просто имба! Качайте и наслаждайтесь.';
   person.ability = 'Находясь рядом с противником в течении 10 сек, накладывает на него безвременные метку смерти и проклятье. Если здоровье противника меньше 50% и наложена метка смерти, удары головой имеют шанс 10% сразу убить его.';
   person.marquee1 = `${msfocha.marquee1}`;
   person.marquee2 = `${msfocha.marquee2} Основной выбор.`;
   person.prestige_description = `${msfocha.prestige}`;
   person.prestige_activation = `${msfocha.p_active}`;
   person.at = '12,327';
   person.hp = '41,184';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['В дд статах'];
   person.build_1_img = 'msfocha/Fiber_Upper.png';
   person.build_2_img = 'msfocha/El_Gato.png';
   person.build_3_img = 'msfocha/Cat_Slide.png';
   person.build_4_img = 'msfocha/Cat_Scratch_Fever.png';
   person.build_1_desc = 'Может нанести раскол брони.';
   person.build_2_desc = 'Критический удар может оглушить противника.';
   person.build_3_desc = 'Доп урон если у оппонента есть дебафф.';
   person.build_4_desc = 'Доп урон от комбо.';
   person.supps = ['martial_outlaw', 'horse', 'joy'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
