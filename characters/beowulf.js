const beowulf = {
   marquee1: 'Претендент - Доп 15% урона если здоровье ниже чем у противника.',
   marquee2: 'Чемпион - Доп 15% урона если здоровье выше чем у противника.',
   prestige: 'Каждые 20 сек получает доп урон в режиме хайпа.',
   p_active: '50% за активацию хайпа.'
}

function cold_stones() {
   card_name = 'Ледяная глыба';
   aka = 'Глыба';
   card_src = 'Cold_Stones.png';
   description = 'Имба Беовульф с огромным уроном и постоянно оглушающий врага, качают ему обычно 3 вульфшота. Однозначно стоит алмазить, даже для алмаза уровень атаки вполне хороший. Можно также поставить на защиту, если нечего ставить больше.';
   ability = 'При броске шанс 20% оглушить врага на 6 сек. Оглушённые враги получают 50% дополнительного урона.';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2} Основной выбор.`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '10,522';
   hp = '44,333';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Перез. приёмов'];
   def_stats = ['В дд статах'];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/HurtingHurdle.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Много ударов, способных прокнуть абилку.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   build_form_name1 = 'Примерный билд на глыбу';
   build_form_path1 = '<img src="files/moves/beowulf/build_cold_stones.jpg">';
   build_form_name2 = 'Царский билд';
   build_form_path2 = '<img src="files/moves/beowulf/build1_beowulf.jpg">';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}
function underdog() {
   card_name = 'Волк отпущения';
   aka = 'Опущенец';
   card_src = 'Underdog.png';
   description = 'Будет снижать получаемый урон из-за негативных эффектов на себе, 5 брони даст 100% защиту и 0 входящего урона. В целом, очень слабый вариант: раскол брони сбросит стаки брони, кровоток также снижает здоровье, да и просто прокачав проницание часть брони игнорируется. Не качаем.';
   ability = 'При получении отрицательного эффекта, получает броню и ускорение на 15 секунд.';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2}`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '8,295';
   hp = '44,794';
   atk_stats = ['Атака', 'Проницание', 'Перез. приёмов'];
   def_stats = ['Здоровье', 'Защита', 'Сопрот криту'];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/HurtingHurdle.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Резкий подбрасывающий удар.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function number_one() {
   card_name = 'Первый';
   aka = 'Намба ван';
   card_src = 'Number_One.png';
   description = 'Вполне хороший вариант для серебра. Играть можно от блокбастеров-захватов и комбо. Качать можно если вы фанат Беовульфа.';
   ability = 'При активации режима Хайпа, получает ускорение на 15 сек. При активном ускорении, шанс 20% при ударе активировать бешенство на 10 сек.';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2} Основной выбор.`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '8,218';
   hp = '57,485';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/GiganticArm.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Шанс оглушить противника.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function hype_man() {
   card_name = 'Показушник';
   aka = 'Хайпман';
   card_src = 'Hype_Man.png';
   description = 'Крутой полу-саппорт, отбирающий шкалу бб врага и дающий её себе и союзникам. Играть можно от блокбастеров-захватов. Вполне хайповый вариант, прокачивать стоит.';
   ability = 'При активации режима Хайпа, союзники в запасе получают +50% к шкале блокбастеров. В режиме хайпа, каждый нанесённый удар забирает 10% шкалы блокбастеров противника.';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2} Основной выбор.`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '9,639';
   hp = '52,263';
   atk_stats = ['Атака', 'Проницание', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/Airwulf.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Блокируемый, но добавит 1 заряд хайпа.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function wrestler() {
   card_name = 'Рестлер Х';
   aka = 'Рестлер';
   card_src = 'Wrestler_X.png';
   description = 'Игра заставит вас его прокачать и зазолотить, чтобы пройти историю Восхождение девы (мастер) узел с беовульфами. Для этого рекомендуют дать ему 3 вульфшота, Люпин и гигант арм свип. Но к сожалению, больше он вам не понадобится, других применений у него нет.';
   ability = 'Получает регенерацию на 10 сек за каждые потерянные 10% НР но единожды. В хайпе все удары с шансом 25% вызывают кровотечение на 5 сек.';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2}`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '11,079';
   hp = '47,021';
   atk_stats = ['Точность', 'Перез. приёмов', 'Здоровье', 'Атака'];
   def_stats = ['Не защитник'];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/GiganArmSweep.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Может дать кровотечение.';
   build_3_desc = 'Много ударов под хайпом.';
   build_4_desc = 'Много ударов под хайпом.';
   build_form_name1 = 'Типичный билд для прохождения мастер девы (точка беовульфов) и примерные статы';
   build_form_path1 = '<img src="files/moves/beowulf/build_wrestler.jpg">';
   build_form_name2 = 'Прохождение от Сендвича (с 5:14)';
   build_form_path2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SgjnP6J6M0M?si=gAJv1AYTVYXlx3u9&amp;start=314" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}
function fan_favorite() {
   card_name = 'Любимец публики';
   aka = 'Любимец';
   card_src = 'Fan_Favorite.png';
   description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque voluptate deleniti numquam esse quos eligendi porro quod quis.';
   ability = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2}`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '11,079';
   hp = '47,021';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/HurtingHurdle.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function dragon_brawler() {
   card_name = 'Кулак дракона';
   aka = 'Кулак';
   card_src = 'Dragon_Brawler.png';
   description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque voluptate deleniti numquam esse quos eligendi porro quod quis.';
   ability = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2}`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '11,271';
   hp = '60,960';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/HurtingHurdle.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function freedom_fighter() {
   card_name = 'Борец за свободу';
   aka = 'Борец';
   card_src = 'Freedom_Fighter.png';
   description = 'Интересная абилка, которая легко контрится в защите. Можно было бы играть за него, оглушая противника просто стоя в блоке, но для Беовульфа это не надо, так как у него очень много неотменяемых захватов, и урона у этой вариации мало. Не рекомендуется прокачивать.';
   ability = 'При получении удара (включая блок), шанс 10% получить автоблок и наложить раскол брони на 10 сек. Блок ударов блокбастера или особых приёмов оглушают противника на 4 сек и отключают ему блокбастеры на 15 сек.';
   marquee1 = `${beowulf.marquee1} Основной выбор.`;
   marquee2 = `${beowulf.marquee2}`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '9,581';
   hp = '67,047';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/BeoBurst.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Прервать атаку противника.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function wulfsbane() {
   card_name = 'Волкодав';
   aka = 'Волк';
   card_src = 'Wulfsbane.png';
   description = 'Сильный и популярный вариант Беовульфа, которого можно заполучить в золотой и алмазной быстрой игре Бео. Играют обычно с 3 вульфшотами, которые также дадут врагу блок исцеления, что полезно против Далий, Валентайн (особенно жадной убийце), также броски не могут нанести критический урон, поэтому играют против Пэйнвил. Криты не качают вообще, они не работают на бросках. Рекомендуется алмазить.';
   ability = 'При броске шанс 50% дать увечье и блок исцеления на 10 секунд. 50% дополнительного урона противнику под отрицательными эффектами.';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2} Основной выбор.`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '12,960';
   hp = '54,874';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Перез. приёмов'];
   def_stats = ['Не защитник'];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/HurtingHurdle.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   supps = ['martial_outlaw', 'harlequin', 'surgeon'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function weekend_warrior() {
   card_name = 'Воин на час';
   aka = 'Шлюхан';
   card_src = 'Weekend_Warrior.png';
   description = 'Возможно задуманный как деф вариант, очень легко контрится в защите. Но его вторая абилка очень хорошая, поэтому им пользуются в атаке в рифтах. Прокачивать рекомендуется игрокам рифтов. Может использовать как крит билд, чтобы вносить больше урона, можно безкрит для контра Пэйнвилам. Первая абилка тоже неплохая как запасной вариант.';
   ability = 'Раз за матч при здоровье ниже 50%, получит ускорение на 10 секунд и максимальный заряд хайпа. При активации хайпа, снимает все дебаффы и получает иммунитет, неупал и мощную регенерацию на 15 сек.';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2} Основной выбор.`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '9,581';
   hp = '67,047';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Перез. приёмов'];
   def_stats = ['Не защитник'];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/HurtingHurdle.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function beast_king() {
   card_name = 'Царь зверей';
   aka = 'Царь';
   card_src = 'Beast_King.png';
   description = 'Мета, один из самых сильных персонажей в игре. Можно играть через билд вульфшотов, но в основном играют билдом со стульями, так как с них больше урон. Однозначно качать.';
   ability = 'При нанесении урона больше чем 10% максимальных НР противника, даёт иссушение и проклятье на 10 сек. Бонус 25% к урону за каждый стак дебаффов на любом из персонажей.';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2} ТОЛЬКО чемпион.`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '13,152';
   hp = '71,117';
   atk_stats = ['Атака', 'Проницание', 'Урон крита', 'Перез. приёмов'];
   def_stats = ['В дд статах'];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/HurtingHurdle.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   supps = ['peashooter', 'harlequin', 'seraph'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function snake_bite() {
   card_name = 'Укус змеи';
   aka = 'Укус';
   card_src = 'Snake_Bite.png';
   description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque voluptate deleniti numquam esse quos eligendi porro quod quis.';
   ability = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2}`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '15,130';
   hp = '64,032';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/HurtingHurdle.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dark_might() {
   card_name = 'Тёмный навсегда';
   aka = 'Ватман';
   card_src = 'Dark_Might.png';
   description = 'Можно играть в атаке, но ему нужна либо Тёмная лошадка, либо смерть союзника для реализации абилки, но на высоких рядах ему не хватает урона. Больше ставят в защиту, вторым номером или третьим. В защите также слабоват: не хватает здоровья и проходится персонажами, которые не играют от баффов. Посредственный вариант, качают только Бео мейнеры.';
   ability = 'Пока жив, снимает все баффы врага и накладывает перманентные проклятье и 3 стака всплеска энергии при поражении любого союзника. Если противник под проклятьем, атаки особыми приёмами и блокбастерами неблокируемые и дают непоколебимость на 10 сек.';
   marquee1 = `${beowulf.marquee1} Основной выбор.`;
   marquee2 = `${beowulf.marquee2}`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '13,152';
   hp = '71,117';
   atk_stats = ['Атака', 'Проницание', 'Точность'];
   def_stats = ['Здоровье', 'Защита', 'Атака', 'Точность'];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/HurtingHurdle.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GiganArmSweep.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Удар почти на весь экран, наложит кровотечение.';
   supps = ['joy', 'horse', 'martial_outlaw'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function ogre_achiever() {
   card_name = 'Огряной зелёный';
   aka = 'Огр';
   card_src = 'Ogre_Achiever.png';
   description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque voluptate deleniti numquam esse quos eligendi porro quod quis.';
   ability = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque';
   marquee1 = `${beowulf.marquee1}`;
   marquee2 = `${beowulf.marquee2}`;
   prestige_description = `${beowulf.prestige}`;
   prestige_activation = `${beowulf.p_active}`;
   at = '11,175';
   hp = '78,221';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'beowulf/WulfShoot.png';
   build_2_img = 'beowulf/HurtingHurdle.png';
   build_3_img = 'beowulf/LupinePummel.png';
   build_4_img = 'beowulf/GeatishTrepak.png';
   build_1_desc = 'Неотменяемый захват на пол экрана.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Шанс дать увечье и замедление.';
   build_4_desc = 'Больше урона и ударов под хайпом.';
   skullgirls.replaceChildren();
   pageGenerator();
}