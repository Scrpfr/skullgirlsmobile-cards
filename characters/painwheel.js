const painwheel = {
   marquee1: 'Кровь - при получении крита отражает 100% урона.',
   marquee2: 'Злоба - при получении крита получает бешенство на 20 сек и броню на 5 сек.',
   prestige: 'Накладывает раскол защиты на 5 сек при использовании блокбастера.',
   p_active: '4% за каждый критический удар.'
}

function rusty() {
   person.card_name = 'Ржавый';
   person.aka = 'Ржавая';
   person.card_src = 'Rusty.png';
   person.description = 'Хороший вариант для ознакомления с Пэйнвил. Стоит прокачать но только до золота, алмазить не стоит.';
   person.ability = 'Удар с шансом 10% провоцирует кровотечение на 3 сек и превращает 3 баффа врага в кровотечение.';
   person.marquee1 = `${painwheel.marquee1}`;
   person.marquee2 = `${painwheel.marquee2} Основной выбор.`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '9,178';
   person.hp = '33,600';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'painwheel/Pinion_Dash.png';
   person.build_2_img = 'painwheel/Gae_Bolga_Stinger.png';
   person.build_3_img = 'painwheel/Death_Crawl.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Мета приём.';
   person.build_2_desc = 'Используется для комбинаций.';
   person.build_3_desc = 'Может наложить кровотоки.';
   person.build_4_desc = 'Может наложить метку смерти.';
   person.supps = ['sundae', 'icyhot', 'rerun'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function twisted_mettle() {
   person.card_name = 'Металлопрокат';
   person.aka = 'Метал';
   person.card_src = 'Twisted_Mettle.png';
   person.description = 'Очень плохая защитная карточка, но создаёт опасность критующим по ней игрокам. Прокачать можно только при неимении других дэф пэйнвил, чтобы поставить в рифты под "Не буди спящего Буэра", а также дополнительно под "Ледяная броня". Алмазить не рекомендуется, в крайнем случае обычную - шайни при большом желании. При наличии Мороза, данная карточка не нужна.';
   person.ability = 'При получении крита накладывает врагу кровотечение на 15 сек. Если у врага кровотечение, при ударе по нему шанс 50% еще вызвать кровотечение на 3 сек.';
   person.marquee1 = `${painwheel.marquee1} ТОЛЬКО Кровь.`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '8,621';
   person.hp = '40,647';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопротивление'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Buer_Thresher.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Резкая контратака.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function firefly() {
   person.card_name = 'Светлячок';
   person.aka = 'Светляк';
   person.card_src = 'Firefly.png';
   person.description = 'В золотом ранге - хороший универсал, обладающий хорошей атакой и приёмами с кровотечением, может быть играбельна в золоте. В защите тоже может постоять, особенно в рифтах под катализатором "Не буди спящего Буэра". Алмазить не стоит, слабая. Если алмазить, то найдет своё место лишь в рифтах под буэрами как посредственный дэф; лучше оставить в золоте.';
   person.ability = 'В блоке при менее 50% здоровья восстанавливает 8% здоровья и 8% шкалы бб в секунду.';
   person.marquee1 = `${painwheel.marquee1} ТОЛЬКО Кровь.`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '10,618';
   person.hp = '50,285';
   person.atk_stats = ['Здоровье', 'Атака', 'Проницание', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопротивление'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Violet_Grudge.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Может наложить сильное кровотечение.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function biting_cold() {
   person.card_name = 'Кусачий мороз';
   person.aka = 'Мороз';
   person.card_src = 'Biting_Cold.png';
   person.description = 'Популярный защитный персонаж. В основном ставится третьей, чтобы выходить последней и стоять на трупах. В рифтах стоит с катализаторами "Не буди спящего Буэра" и "Ледяная броня". Можно взять на атаку из-за пермакилла.';
   person.ability = 'Рядом с трупом получает шипы и барьер на 10 сек каждые 3 сек. При убийстве получает 5 уровней регенерации на 10 сек и +50% шкалы бб, поверженные враги не смогут воскреснуть.';
   person.marquee1 = `${painwheel.marquee1} ТОЛЬКО Кровь.`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '10,618';
   person.hp = '50,285';
   person.atk_stats = ['Основной дд билд пэйнвил'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Прирост шкалы'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Buer_Thresher.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Резкая контратака.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
}