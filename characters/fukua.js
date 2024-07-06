const fukua = {
   marquee1: 'Ярость - доп 1% урона за каждые 5% потерянного здоровья.',
   marquee2: 'Гнев - снижает получаемый урон на 1% за каждые потерянные 5% здоровья.',
   prestige: 'При активации блокбастера, забирает ~5% шкалы и даёт блок исцеления.',
   p_active: '25% за использование блокбастера.'
}

function rough_copy() {
   card_name = 'Неточная копия';
   aka = 'Неточка';
   card_src = 'Rough_Copy.png';
   description = 'Вполне хорошая карточка, способная дать постоянное ускорение, которое нельзя снять. Ускорение позволяет быстрее заряжать шкалу блокбастера, а замедление наоборот медленнее. Но статы очень низкие, не поиграть ею на высоких уровнях, так что можно оставить в золоте.';
   ability = 'Когда любой персонаж с противником находится активным 5 сек, даёт постоянное ускорение союзнику против противника той же стихии, и постоянное замедление противнику того же типа.';
   marquee1 = `${fukua.marquee1}`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '7,392';
   hp = '39,188';
   atk_stats = ['Только саппорт'];
   def_stats = ['Не защитник'];
   build_1_img = 'fukua/Inevitable_Snuggle.png';
   build_2_img = 'fukua/Lobs_of_Love.png';
   build_3_img = 'fukua/Best_Friends_Forever.png';
   build_4_img = 'fukua/Fukua_Drillationship.png';
   build_1_desc = 'Восстановить здоровье.';
   build_2_desc = 'Используется в комбинации.';
   build_3_desc = 'Может передать дебаффы и забрать баффы.';
   build_4_desc = 'Может дать метку смерти, раскол брони и увечье.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function infernal_twin() {
   card_name = 'Двойник из пекла';
   aka = 'Пекло';
   card_src = 'Infernal_Twin.png';
   description = 'Очень сильный персонаж для новичков, если научиться ловить врага при атаке, стоит прокачивать. Достойна алмаза.';
   ability = 'При ударе атакующего противника даёт бешенство на 15 сек и обновляет кд всех уровней бешенства. При получении удара при 3 стаках бешенства, накладывает усталость на 5 сек.';
   marquee1 = `${fukua.marquee1} Только ярость.`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '9,293';
   hp = '38,861';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'fukua/Drill_of_My_Dreams.png';
   build_2_img = 'fukua/Lobs_of_Love.png';
   build_3_img = 'fukua/Best_Friends_Forever.png';
   build_4_img = 'fukua/Fukua_Drillationship.png';
   build_1_desc = 'Используется в комбинации.';
   build_2_desc = 'Используется в комбинации.';
   build_3_desc = 'Может передать дебаффы и забрать баффы.';
   build_4_desc = 'Может дать метку смерти, раскол брони и увечье.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function souls_sister() {
   card_name = 'Сестра по духу';
   aka = 'Ермак';
   card_src = 'Souls_Sister.png';
   description = 'Весьма хорошая вариация, достойная прокачки, но может быстро надоесть, так как в текущей игре зонеры очень ограничены в возможностях.';
   ability = 'Если противник далеко, заряжает шкалу блокбастера на 3% в секунду и даёт бешенство на 10 сек при ударе.';
   marquee1 = `${fukua.marquee1} Только ярость.`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '9,946';
   hp = '41,127';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'fukua/Love_Dart.png';
   build_2_img = 'fukua/Lobs_of_Love.png';
   build_3_img = 'fukua/Best_Friends_Forever.png';
   build_4_img = 'fukua/Goodnight_Kiss.png';
   build_1_desc = 'Низкий урон, но дистанционный.';
   build_2_desc = 'Для дальней дистанции.';
   build_3_desc = 'Может передать дебаффы и забрать баффы.';
   build_4_desc = 'Шанс дать иссушение и усталость.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function rain_shadow() {
   card_name = 'Грозовая тень';
   aka = 'Рэйн';
   card_src = 'Rain_Shadow.png';
   description = 'Потрясающий антибаффер, и оглушает случайно. Очень сильный серебрянный персонаж, можно качать и алмазить: в алмазном ранге также может пригодиться.';
   ability = 'При ударах в блок шанс 15% дать раскол брони и всплеск энергии на 15 сек. Если противник стоит на вашей стороне и не оглушён, через каждые 5 сек враг теряет все баффы и получает усталость на 10 сек.';
   marquee1 = `${fukua.marquee1} Только ярость.`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '8,640';
   hp = '45,716';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'fukua/Drill_of_My_Dreams.png';
   build_2_img = 'fukua/Breakdown.png';
   build_3_img = 'fukua/Forever_a_Clone.png';
   build_4_img = 'fukua/Fukua_Drillationship.png';
   build_1_desc = 'Используется в комбинации.';
   build_2_desc = 'Получить миазмы.';
   build_3_desc = 'Наложит блок исцеления.';
   build_4_desc = 'Может дать метку смерти, раскол брони и увечье.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function chameleon_twist() {
   card_name = 'Ящерица';
   aka = 'Хамелеон';
   card_src = 'Chameleon_Twist.png';
   description = 'Неплохой универсал, в атаке можно давить миазмами, в защите опасна уклонением. Как серебрянный и золотой танк сойдет, алмазить не стоит.';
   ability = 'Удар по движущемуся противнику даст миазмы на 10 сек. При ударе пока не заряжен блокбастер шанс 5% получить уклонение и миазмы на 10 сек.';
   marquee1 = `${fukua.marquee1}`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '7,335';
   hp = '50,324';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'fukua/Breakdown.png';
   build_2_img = 'fukua/Drill_of_My_Dreams.png';
   build_3_img = 'fukua/Best_Friends_Forever.png';
   build_4_img = 'fukua/Goodnight_Kiss.png';
   build_1_desc = 'Получить миазмы.';
   build_2_desc = 'Больше урона в комбо.';
   build_3_desc = 'Может передать дебаффы и забрать баффы.';
   build_4_desc = 'Шанс дать иссушение и усталость.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function hell_belle() {
   card_name = 'Адская девица';
   aka = 'Девица';
   card_src = 'Hell_Belle.png';
   description = 'Сомнительная вариация из-за своей второй абилки. дд-полусаппорт выходит.';
   ability = 'Когда здоровье противника выше 50%, при ударе есть шанс 10% наложить кровотечение и рандом дебафф на 5 сек. Пока Фукуа активна, каждые 10 сек она накладывает на союзников миазмы на 15 сек и уклонение.';
   marquee1 = `${fukua.marquee1} Только ярость.`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '10,100';
   hp = '53,357';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'fukua/Drill_of_My_Dreams.png';
   build_2_img = 'fukua/Lobs_of_Love.png';
   build_3_img = 'fukua/Best_Friends_Forever.png';
   build_4_img = 'fukua/Fukua_Drillationship.png';
   build_1_desc = 'Используется в комбинации.';
   build_2_desc = 'Используется в комбинации.';
   build_3_desc = 'Может передать дебаффы и забрать баффы.';
   build_4_desc = 'Может дать метку смерти, раскол брони и увечье.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function feathered_edges() {
   card_name = 'Соколиные крылья';
   aka = 'Сокол';
   card_src = 'Feathered_Edges.png';
   description = 'Возможно задуманная как деф вариация, используется только в атаке даже с её не великим уроном. В основном в рифтах, так как относительно легко получает барьеры, что является некой второй шкалой здоровья. Качать можно, но не сильно важная вариация.';
   ability = 'Вовремя поставленный блок даёт 3 барьера и блокирует блокбастеры и призыв противника. Находясь под барьером, полученный удар от снаряда непоколебим и отражает 200% урона.';
   marquee1 = `${fukua.marquee1} Только ярость.`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '8,564';
   hp = '58,676';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'fukua/Best_Friends_Forever.png';
   build_2_img = 'fukua/Inevitable_Snuggle.png';
   build_3_img = 'fukua/Goodnight_Kiss.png';
   build_4_img = 'fukua/Fukua_Drillationship.png';
   build_1_desc = 'Может передать дебаффы и забрать баффы.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать иссушение и усталость.';
   build_4_desc = 'Может дать метку смерти, раскол брони и увечье.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function vaporwave_vixen() {
   card_name = 'Милая меломанка';
   aka = 'Мыло';
   card_src = 'Vaporwave_Vixen.png';
   description = 'Хорошая вариация сама по себе, можно взять в атаку и душить миазмами, да и урон хороший, можно поставить в защиту из-за шипов. Но в защите легко контрится, в атаке также слабовата стала с выходом Невозмутимости (Далия). Не стоит качать.';
   ability = 'Стоя афк 1 сек и не получая урона, получает непоколебимость, которая снимается при проявлении активности. Не атакуя и не получая ударов 2 секунды (включая блок), получает шипы и миазмы на 10 сек.';
   marquee1 = `${fukua.marquee1} Основной выбор.`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '10,100';
   hp = '53,357';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление'];
   build_1_img = 'fukua/Best_Friends_Forever.png';
   build_2_img = 'fukua/Inevitable_Snuggle.png';
   build_3_img = 'fukua/Goodnight_Kiss.png';
   build_4_img = 'fukua/Breakdown.png';
   build_1_desc = 'Может передать дебаффы и забрать баффы.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать иссушение и усталость.';
   build_4_desc = 'Получить миазмы.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function night_terror() {
   card_name = 'Ночной кошмар';
   aka = 'Кошмар';
   card_src = 'Night_Terror.png';
   description = 'Неплохая вариация, можно наложить неподвижность и расстреливать издалека в ожидании оглушения. Но всё же, есть Фукуа лучше. Не стоит качать.';
   ability = 'Находясь далеко от противника, каждые 2 сек получает 2 миазмы на 10 сек. Находясь близко к противнику, каждые 2 сек накладывает на противника усталость и неподвижность на 10 сек.';
   marquee1 = `${fukua.marquee1} Только ярость.`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '10,100';
   hp = '53,357';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'fukua/Best_Friends_Forever.png';
   build_2_img = 'fukua/Inevitable_Snuggle.png';
   build_3_img = 'fukua/Goodnight_Kiss.png';
   build_4_img = 'fukua/Lobs_of_Love.png';
   build_1_desc = 'Может передать дебаффы и забрать баффы.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать иссушение и усталость.';
   build_4_desc = 'Неблокируема на дальней дистанции, вампирит шкалу бб.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function phantom_threads() {
   card_name = 'Призрачные нити';
   aka = 'Нить';
   card_src = 'Phantom_Threads.png';
   description = 'Лучшая вариация Фукуа до алмазной, подходит и новичкам, и выше рангом. Высокий урон, который ещё увеличивается бешенством, и благославения, воскрешающие вас при гибели. Однозначно качать и алмазить.';
   ability = 'Отправляя противника в нокдаун, снимает 1 его бафф и получает благославение на 20 сек. Используя блокбастер, превращает все благославения в бешенство на 10 сек и лечит 10% здоровья за каждое благославение.';
   marquee1 = `${fukua.marquee1} Только ярость.`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '11,616';
   hp = '48,039';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'fukua/Best_Friends_Forever.png';
   build_2_img = 'fukua/Goodnight_Kiss.png';
   build_3_img = 'fukua/Swarm_Embrace.png';
   build_4_img = 'fukua/Lobs_of_Love.png';
   build_1_desc = 'Может передать дебаффы и забрать баффы.';
   build_2_desc = 'Шанс дать иссушение и усталость.';
   build_3_desc = 'Наложит усталость.';
   build_4_desc = 'Неблокируема на дальней дистанции, вампирит шкалу бб.';
   supps = ['evergreen', 'persona', 'surgeon'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}

function dream_demon() {
   card_name = 'Демон из сна';
   aka = 'Демон';
   card_src = 'Dream_Demon.png';
   description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque voluptate deleniti numquam esse quos eligendi porro quod quis.';
   ability = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque';
   marquee1 = `${fukua.marquee1}`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '13,556';
   hp = '56,045';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'fukua/Best_Friends_Forever.png';
   build_2_img = 'fukua/Goodnight_Kiss.png';
   build_3_img = 'fukua/Swarm_Embrace.png';
   build_4_img = 'fukua/Lobs_of_Love.png';
   build_1_desc = 'Может передать дебаффы и забрать баффы.';
   build_2_desc = 'Шанс дать иссушение и усталость.';
   build_3_desc = 'Наложит усталость.';
   build_4_desc = 'Неблокируема на дальней дистанции, вампирит шкалу бб.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function splitting_image() {
   card_name = 'Зазеркалье';
   aka = 'Зеркало';
   card_src = 'Splitting_Image.png';
   description = 'Универсал, по началу способный играть против Филий, Фукуа и всех светлых вариаций. В конце будет только деф для быстрых игр и рифтов.';
   ability = 'Когда здоровье ниже чем у противника, получает постоянный иммунитет и восстанавливает 2% НР в секунду. При столкновении с Фукуа или Филией, или стихией света, каждые 3 секунды получает точность и 5% шкалы блокбастера.';
   marquee1 = `${fukua.marquee1}`;
   marquee2 = `${fukua.marquee2} Только гнев.`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '10,004';
   hp = '68,506';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'fukua/Twice_Shy.png';
   build_2_img = 'fukua/Goodnight_Kiss.png';
   build_3_img = 'fukua/Best_Friends_Forever.png';
   build_4_img = 'fukua/Lobs_of_Love.png';
   build_1_desc = 'Восстановить здоровье.';
   build_2_desc = 'Шанс дать иссушение и усталость.';
   build_3_desc = 'Может передать дебаффы и забрать баффы.';
   build_4_desc = 'Неблокируема на дальней дистанции, вампирит шкалу бб.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function shadow_puppet() {
   card_name = 'Мрачная марионетка';
   aka = 'Марио';
   card_src = 'Shadow_Puppet.png';
   description = 'Очень мощная и простая вариация, способная сохранить себе жизнь при смертельном ударе. Можно поставить в защиту, контрится поражением под порчей или точностью. Однозначно прокачивать.';
   ability = 'При ударе шанс 5% сбросить время всех своих баффов и дебаффов противника. Раз за бой при смертельном ранении, замораживает время и получает 5 миазмов на 7 секунд. Время запустится при ударе.';
   marquee1 = `${fukua.marquee1} Только ярость.`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '15,591';
   hp = '50,439';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['В дд статах'];
   build_1_img = 'fukua/Best_Friends_Forever.png';
   build_2_img = 'fukua/Goodnight_Kiss.png';
   build_3_img = 'fukua/Inevitable_Snuggle.png';
   build_4_img = 'fukua/Lobs_of_Love.png';
   build_1_desc = 'Может передать дебаффы и забрать баффы.';
   build_2_desc = 'Шанс дать иссушение и усталость.';
   build_3_desc = 'Восстановить здоровье.';
   build_4_desc = 'Неблокируема на дальней дистанции, вампирит шкалу бб.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function apex_complex() {
   card_name = 'Альфа-комплес';
   aka = 'Альфа';
   card_src = 'Apex_Complex.png';
   description = '';
   ability = '';
   marquee1 = `${fukua.marquee1}`;
   marquee2 = `${fukua.marquee2}`;
   prestige_description = `${fukua.prestige}`;
   prestige_activation = `${fukua.p_active}`;
   at = '13,556';
   hp = '56,045';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'fukua/Best_Friends_Forever.png';
   build_2_img = 'fukua/Goodnight_Kiss.png';
   build_3_img = 'fukua/Swarm_Embrace.png';
   build_4_img = 'fukua/Lobs_of_Love.png';
   build_1_desc = 'Может передать дебаффы и забрать баффы.';
   build_2_desc = 'Шанс дать иссушение и усталость.';
   build_3_desc = 'Наложит усталость.';
   build_4_desc = 'Неблокируема на дальней дистанции, вампирит шкалу бб.';
   skullgirls.replaceChildren();
   pageGenerator();
}