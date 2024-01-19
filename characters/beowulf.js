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
   person.build_1_desc = 'Неотменяемый захват на пол экрана.';
   person.build_2_desc = 'Повышенный шанс крита.';
   person.build_3_desc = 'Много ударов, способных прокнуть абилку.';
   person.build_4_desc = 'Больше урона и ударов под хайпом.';
   person.build_form_name1 = 'Примерный билд на глыбу';
   person.build_form_path1 = '<img src="files/moves/beowulf/build_cold_stones.jpg">';
   person.build_form_name2 = 'Царский билд';
   person.build_form_path2 = '<img src="files/moves/beowulf/build1_beowulf.jpg">';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}
function underdog() {
   person.card_name = 'Волк отпущения';
   person.aka = 'Опущенец';
   person.card_src = 'Underdog.png';
   person.description = 'Будет снижать получаемый урон из-за негативных эффектов на себе, 5 брони даст 100% защиту и 0 входящего урона. В целом, очень слабый вариант: раскол брони сбросит стаки брони, кровоток также снижает здоровье, да и просто прокачав проницание часть брони игнорируется. Не качаем.';
   person.ability = 'При получении отрицательного эффекта, получает броню и ускорение на 15 секунд.';
   person.marquee1 = `${beowulf.marquee1}`;
   person.marquee2 = `${beowulf.marquee2}`;
   person.prestige_description = `${beowulf.prestige}`;
   person.prestige_activation = `${beowulf.p_active}`;
   person.at = '8,295';
   person.hp = '44,794';
   person.atk_stats = ['Атака', 'Проницание', 'Перез. приёмов'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопрот криту'];
   person.build_1_img = 'beowulf/WulfShoot.png';
   person.build_2_img = 'beowulf/HurtingHurdle.png';
   person.build_3_img = 'beowulf/LupinePummel.png';
   person.build_4_img = 'beowulf/GeatishTrepak.png';
   person.build_1_desc = 'Неотменяемый захват на пол экрана.';
   person.build_2_desc = 'Резкий подбрасывающий удар.';
   person.build_3_desc = 'Шанс дать увечье и замедление.';
   person.build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function number_one() {
   person.card_name = 'Первый';
   person.aka = 'Намба ван';
   person.card_src = 'Number_One.png';
   person.description = 'Вполне хороший вариант для серебра. Играть можно от блокбастеров-захватов и комбо. Качать можно если вы фанат Беовульфа.';
   person.ability = 'При активации режима Хайпа, получает ускорение на 15 сек. При активном ускорении, шанс 20% при ударе активировать бешенство на 10 сек.';
   person.marquee1 = `${beowulf.marquee1}`;
   person.marquee2 = `${beowulf.marquee2} Основной выбор.`;
   person.prestige_description = `${beowulf.prestige}`;
   person.prestige_activation = `${beowulf.p_active}`;
   person.at = '8,218';
   person.hp = '57,485';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'beowulf/WulfShoot.png';
   person.build_2_img = 'beowulf/GiganticArm.png';
   person.build_3_img = 'beowulf/LupinePummel.png';
   person.build_4_img = 'beowulf/GeatishTrepak.png';
   person.build_1_desc = 'Неотменяемый захват на пол экрана.';
   person.build_2_desc = 'Шанс оглушить противника.';
   person.build_3_desc = 'Шанс дать увечье и замедление.';
   person.build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function hype_man() {
   person.card_name = 'Показушник';
   person.aka = 'Хайпман';
   person.card_src = 'Hype_Man.png';
   person.description = 'Крутой полу-саппорт, отбирающий шкалу бб врага и дающий её себе и союзникам. Играть можно от блокбастеров-захватов. Вполне хайповый вариант, прокачивать стоит.';
   person.ability = 'При активации режима Хайпа, союзники в запасе получают +50% к шкале блокбастеров. В режиме хайпа, каждый нанесённый удар забирает 10% шкалы блокбастеров противника.';
   person.marquee1 = `${beowulf.marquee1}`;
   person.marquee2 = `${beowulf.marquee2} Основной выбор.`;
   person.prestige_description = `${beowulf.prestige}`;
   person.prestige_activation = `${beowulf.p_active}`;
   person.at = '9,639';
   person.hp = '52,263';
   person.atk_stats = ['Атака', 'Проницание', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'beowulf/WulfShoot.png';
   person.build_2_img = 'beowulf/Airwulf.png';
   person.build_3_img = 'beowulf/LupinePummel.png';
   person.build_4_img = 'beowulf/GeatishTrepak.png';
   person.build_1_desc = 'Неотменяемый захват на пол экрана.';
   person.build_2_desc = 'Блокируемый, но добавит 1 заряд хайпа.';
   person.build_3_desc = 'Шанс дать увечье и замедление.';
   person.build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
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
   person.build_1_desc = 'Неотменяемый захват на пол экрана.';
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

function freedom_fighter() {
   person.card_name = 'Борец за свободу';
   person.aka = 'Борец';
   person.card_src = 'Freedom_Fighter.png';
   person.description = 'Интересная абилка, которая легко контрится в защите. Можно было бы играть за него, оглушая противника просто стоя в блоке, но для Беовульфа это не надо, так как у него очень много неотменяемых захватов, и урона у этой вариации мало. Не рекомендуется прокачивать.';
   person.ability = 'При получении удара (включая блок), шанс 10% получить автоблок и наложить раскол брони на 10 сек. Блок ударов блокбастера или особых приёмов оглушают противника на 4 сек и отключают ему блокбастеры на 15 сек.';
   person.marquee1 = `${beowulf.marquee1} Основной выбор.`;
   person.marquee2 = `${beowulf.marquee2}`;
   person.prestige_description = `${beowulf.prestige}`;
   person.prestige_activation = `${beowulf.p_active}`;
   person.at = '9,581';
   person.hp = '67,047';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'beowulf/WulfShoot.png';
   person.build_2_img = 'beowulf/BeoBurst.png';
   person.build_3_img = 'beowulf/LupinePummel.png';
   person.build_4_img = 'beowulf/GeatishTrepak.png';
   person.build_1_desc = 'Неотменяемый захват на пол экрана.';
   person.build_2_desc = 'Прервать атаку противника.';
   person.build_3_desc = 'Шанс дать увечье и замедление.';
   person.build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function wulfsbane() {
   person.card_name = 'Волкодав';
   person.aka = 'Волк';
   person.card_src = 'Wulfsbane.png';
   person.description = 'Сильный и популярный вариант Беовульфа, которого можно заполучить в золотой и алмазной быстрой игре Бео. Играют обычно с 3 вульфшотами, которые также дадут врагу блок исцеления, что полезно против Далий, Валентайн (особенно жадной убийце), также броски не могут нанести критический урон, поэтому играют против Пэйнвил. Криты не качают вообще, они не работают на бросках. Рекомендуется алмазить.';
   person.ability = 'При броске шанс 50% дать увечье и блок исцеления на 10 секунд. 50% дополнительного урона противнику под отрицательными эффектами.';
   person.marquee1 = `${beowulf.marquee1}`;
   person.marquee2 = `${beowulf.marquee2} Основной выбор.`;
   person.prestige_description = `${beowulf.prestige}`;
   person.prestige_activation = `${beowulf.p_active}`;
   person.at = '12,960';
   person.hp = '54,874';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Перез. приёмов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'beowulf/WulfShoot.png';
   person.build_2_img = 'beowulf/HurtingHurdle.png';
   person.build_3_img = 'beowulf/LupinePummel.png';
   person.build_4_img = 'beowulf/GeatishTrepak.png';
   person.build_1_desc = 'Неотменяемый захват на пол экрана.';
   person.build_2_desc = 'Повышенный шанс крита.';
   person.build_3_desc = 'Шанс дать увечье и замедление.';
   person.build_4_desc = 'Больше урона и ударов под хайпом.';
   person.supps = ['martial_outlaw', 'harlequin', 'surgeon'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function weekend_warrior() {
   person.card_name = 'Воин на час';
   person.aka = 'Шлюхан';
   person.card_src = 'Weekend_Warrior.png';
   person.description = 'Возможно задуманный как деф вариант, очень легко контрится в защите. Но его вторая абилка очень хорошая, поэтому им пользуются в атаке в рифтах. Прокачивать рекомендуется игрокам рифтов. Может использовать как крит билд, чтобы вносить больше урона, можно безкрит для контра Пэйнвилам. Первая абилка тоже неплохая как запасной вариант.';
   person.ability = 'Раз за матч при здоровье ниже 50%, получит ускорение на 10 секунд и максимальный заряд хайпа. При активации хайпа, снимает все дебаффы и получает иммунитет, неупал и мощную регенерацию на 15 сек.';
   person.marquee1 = `${beowulf.marquee1}`;
   person.marquee2 = `${beowulf.marquee2} Основной выбор.`;
   person.prestige_description = `${beowulf.prestige}`;
   person.prestige_activation = `${beowulf.p_active}`;
   person.at = '9,581';
   person.hp = '67,047';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Перез. приёмов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'beowulf/WulfShoot.png';
   person.build_2_img = 'beowulf/HurtingHurdle.png';
   person.build_3_img = 'beowulf/LupinePummel.png';
   person.build_4_img = 'beowulf/GeatishTrepak.png';
   person.build_1_desc = 'Неотменяемый захват на пол экрана.';
   person.build_2_desc = 'Повышенный шанс крита.';
   person.build_3_desc = 'Шанс дать увечье и замедление.';
   person.build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function beast_king() {
   person.card_name = 'Царь зверей';
   person.aka = 'Царь';
   person.card_src = 'Beast_King.png';
   person.description = 'Мета, один из самых сильных персонажей в игре. Можно играть через билд вульфшотов, но в основном играют билдом со стульями, так как с них больше урон. Однозначно качать.';
   person.ability = 'При нанесении урона больше чем 10% максимальных НР противника, даёт иссушение и проклятье на 10 сек. Бонус 25% к урону за каждый стак дебаффов на любом из персонажей.';
   person.marquee1 = `${beowulf.marquee1}`;
   person.marquee2 = `${beowulf.marquee2} ТОЛЬКО чемпион.`;
   person.prestige_description = `${beowulf.prestige}`;
   person.prestige_activation = `${beowulf.p_active}`;
   person.at = '13,152';
   person.hp = '71,117';
   person.atk_stats = ['Атака', 'Проницание', 'Урон крита', 'Перез. приёмов'];
   person.def_stats = ['В дд статах'];
   person.build_1_img = 'beowulf/WulfShoot.png';
   person.build_2_img = 'beowulf/HurtingHurdle.png';
   person.build_3_img = 'beowulf/LupinePummel.png';
   person.build_4_img = 'beowulf/GeatishTrepak.png';
   person.build_1_desc = 'Неотменяемый захват на пол экрана.';
   person.build_2_desc = 'Повышенный шанс крита.';
   person.build_3_desc = 'Шанс дать увечье и замедление.';
   person.build_4_desc = 'Больше урона и ударов под хайпом.';
   person.supps = ['peashooter', 'harlequin', 'seraph'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function dark_might() {
   person.card_name = 'Тёмный навсегда';
   person.aka = 'Ватман';
   person.card_src = 'Dark_Might.png';
   person.description = 'Можно играть в атаке, но ему нужна либо Тёмная лошадка, либо смерть союзника для реализации абилки, но на высоких рядах ему не хватает урона. Больше ставят в защиту, вторым номером или третьим. В защите также слабоват: не хватает здоровья и проходится персонажами, которые не играют от баффов. Посредственный вариант, качают только Бео мейнеры.';
   person.ability = 'Пока жив, снимает все баффы врага и накладывает перманентные проклятье и 3 стака всплеска энергии при поражении любого союзника. Если противник под проклятьем, атаки особыми приёмами и блокбастерами неблокируемые и дают непоколебимость на 10 сек.';
   person.marquee1 = `${beowulf.marquee1} Основной выбор.`;
   person.marquee2 = `${beowulf.marquee2}`;
   person.prestige_description = `${beowulf.prestige}`;
   person.prestige_activation = `${beowulf.p_active}`;
   person.at = '13,152';
   person.hp = '71,117';
   person.atk_stats = ['Атака', 'Проницание', 'Точность'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Точность'];
   person.build_1_img = 'beowulf/WulfShoot.png';
   person.build_2_img = 'beowulf/HurtingHurdle.png';
   person.build_3_img = 'beowulf/LupinePummel.png';
   person.build_4_img = 'beowulf/GiganArmSweep.png';
   person.build_1_desc = 'Неотменяемый захват на пол экрана.';
   person.build_2_desc = 'Повышенный шанс крита.';
   person.build_3_desc = 'Шанс дать увечье и замедление.';
   person.build_4_desc = 'Удар почти на весь экран, наложит кровотечение.';
   person.supps = ['joy', 'horse', 'martial_outlaw'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
