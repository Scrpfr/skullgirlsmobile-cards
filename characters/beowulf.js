const beowulf = {
   marquee1: 'Претендент - Доп 15% урона если здоровье ниже чем у противника.',
   marquee2: 'Чемпион - Доп 15% урона если здоровье выше чем у противника.',
   prestige: 'Каждые 20 сек получает доп урон в режиме хайпа.',
   p_active: '50% за активацию хайпа.'
}

function cold_stones() {
   person.card_name = 'Ледяная глыба';
   person.aka = 'Глыба';
   person.card_src = 'Cold_Stones.png';
   person.description = 'Имба Беовульф с огромным уроном и постоянно оглушающий врага, качают ему обычно 3 вульфшота. Однозначно стоит алмазить, даже для алмаза уровень атаки вполне хороший. Можно также поставить на защиту, если нечего ставить больше.';
   person.ability = 'При броске шанс 20% оглушить врага на 6 сек. Оглушённые враги получают 50% дополнительного урона.';
   person.marquee1 = `${beowulf.marquee1}`;
   person.marquee2 = `${beowulf.marquee2} Основной выбор.`;
   person.prestige_description = `${beowulf.prestige}`;
   person.prestige_activation = `${beowulf.p_active}`;
   person.at = '10,522';
   person.hp = '44,333';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Перез. приёмов'];
   person.def_stats = ['В дд статах'];
   person.build_1_img = 'beowulf/WulfShoot.png';
   person.build_2_img = 'beowulf/HurtingHurdle.png';
   person.build_3_img = 'beowulf/LupinePummel.png';
   person.build_4_img = 'beowulf/GeatishTrepak.png';
   person.build_1_desc = 'Основное оружие волка.';
   person.build_2_desc = 'На всякий случай.';
   person.build_3_desc = 'Много ударов, способных прокнуть абилку.';
   person.build_4_desc = 'Много ударов под хайпом.';
   person.build_form_name1 = 'Примерный билд на глыбу';
   person.build_form_path1 = '<img src="files/moves/beowulf/build_cold_stones.jpg">';
   person.build_form_name2 = 'Царский билд';
   person.build_form_path2 = '<img src="files/moves/beowulf/build1_beowulf.jpg">';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}

function wrestler() {
   person.card_name = 'Рестлер Х';
   person.aka = 'Рестлер';
   person.card_src = 'Wrestler_X.png';
   person.description = 'Игра заставит вас его прокачать и зазолотить, чтобы пройти историю Восхождение девы (мастер) узел с беовульфами. Для этого рекомендуют дать ему 3 вульфшота, Люпин и гигант арм свип. Но к сожалению, больше он вам не понадобится, других применений у него нет.';
   person.ability = 'Получает регенерацию на 10 сек за каждые потерянные 10% НР но единожды. В хайпе все удары с шансом 25% вызывают кровотечение на 5 сек.';
   person.marquee1 = `${beowulf.marquee1}`;
   person.marquee2 = `${beowulf.marquee2}`;
   person.prestige_description = `${beowulf.prestige}`;
   person.prestige_activation = `${beowulf.p_active}`;
   person.at = '11,079';
   person.hp = '47,021';
   person.atk_stats = ['Точность', 'Перез. приёмов', 'Здоровье', 'Атака'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'beowulf/WulfShoot.png';
   person.build_2_img = 'beowulf/GiganArmSweep.png';
   person.build_3_img = 'beowulf/LupinePummel.png';
   person.build_4_img = 'beowulf/GeatishTrepak.png';
   person.build_1_desc = 'Основное оружие волка.';
   person.build_2_desc = 'Может дать кровотечение.';
   person.build_3_desc = 'Много ударов под хайпом.';
   person.build_4_desc = 'Много ударов под хайпом.';
   person.build_form_name1 = 'Типичный билд для прохождения мастер девы (точка беовульфов) и примерные статы';
   person.build_form_path1 = '<img src="files/moves/beowulf/build_wrestler.jpg">';
   person.build_form_name2 = 'Прохождение от Сендвича (с 5:14)';
   person.build_form_path2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SgjnP6J6M0M?si=gAJv1AYTVYXlx3u9&amp;start=314" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}