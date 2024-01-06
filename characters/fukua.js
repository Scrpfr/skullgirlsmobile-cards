const fukua = {
   marquee1: 'Ярость - доп 1% урона за каждые 5% потерянного здоровья.',
   marquee2: 'Гнев - снижает получаемый урон на 1% за каждые потерянные 5% здоровья.',
   prestige: 'При активации блокбастера, забирает ~5% шкалы и даёт блок исцеления.',
   p_active: '25% за использование блокбастера.'
}

function rough_copy() {
   person.card_name = 'Неточная копия';
   person.aka = 'Неточка';
   person.card_src = 'Rough_Copy.png';
   person.description = 'Вполне хорошая карточка, способная дать постоянное ускорение, которое нельзя снять. Ускорение позволяет быстрее заряжать шкалу блокбастера, а замедление наоборот медленнее. Но статы очень низкие, не поиграть ею на высоких уровнях, так что можно оставить в золоте.';
   person.ability = 'Когда любой персонаж с противником находится активным 5 сек, даёт постоянное ускорение союзнику против противника той же стихии, и постоянное замедление противнику того же типа.';
   person.marquee1 = `${fukua.marquee1}`;
   person.marquee2 = `${fukua.marquee2}`;
   person.prestige_description = `${fukua.prestige}`;
   person.prestige_activation = `${fukua.p_active}`;
   person.at = '7,392';
   person.hp = '39,188';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'fukua/Inevitable_Snuggle.png';
   person.build_2_img = 'fukua/Lobs_of_Love.png';
   person.build_3_img = 'fukua/Best_Friends_Forever.png';
   person.build_4_img = 'fukua/Fukua_Drillationship.png';
   person.build_1_desc = 'Восстановить здоровье.';
   person.build_2_desc = 'Используется в комбинации.';
   person.build_3_desc = 'Может передать дебаффы и забрать баффы.';
   person.build_4_desc = 'Может дать метку смерти, раскол брони и увечье.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function infernal_twin() {
   person.card_name = 'Двойник из пекла';
   person.aka = 'Пекло';
   person.card_src = 'Infernal_Twin.png';
   person.description = 'Очень сильный персонаж для новичков, если научиться ловить врага при атаке, стоит прокачивать. Достойна алмаза.';
   person.ability = 'При ударе атакующего противника даёт бешенство на 15 сек и обновляет кд всех уровней бешенства. При получении удара при 3 стаках бешенства, накладывает усталость на 5 сек.';
   person.marquee1 = `${fukua.marquee1} Только ярость.`;
   person.marquee2 = `${fukua.marquee2}`;
   person.prestige_description = `${fukua.prestige}`;
   person.prestige_activation = `${fukua.p_active}`;
   person.at = '9,293';
   person.hp = '38,861';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'fukua/Drill_of_My_Dreams.png';
   person.build_2_img = 'fukua/Lobs_of_Love.png';
   person.build_3_img = 'fukua/Best_Friends_Forever.png';
   person.build_4_img = 'fukua/Fukua_Drillationship.png';
   person.build_1_desc = 'Используется в комбинации.';
   person.build_2_desc = 'Используется в комбинации.';
   person.build_3_desc = 'Может передать дебаффы и забрать баффы.';
   person.build_4_desc = 'Может дать метку смерти, раскол брони и увечье.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function souls_sister() {
   person.card_name = 'Сестра по духу';
   person.aka = 'Ермак';
   person.card_src = 'Souls_Sister.png';
   person.description = 'Весьма хорошая вариация, достойная прокачки, но может быстро надоесть, так как в текущей игре зонеры очень ограничены в возможностях.';
   person.ability = 'Если противник далеко, заряжает шкалу блокбастера на 3% в секунду и даёт бешенство на 10 сек при ударе.';
   person.marquee1 = `${fukua.marquee1} Только ярость.`;
   person.marquee2 = `${fukua.marquee2}`;
   person.prestige_description = `${fukua.prestige}`;
   person.prestige_activation = `${fukua.p_active}`;
   person.at = '9,946';
   person.hp = '41,127';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'fukua/Love_Dart.png';
   person.build_2_img = 'fukua/Lobs_of_Love.png';
   person.build_3_img = 'fukua/Best_Friends_Forever.png';
   person.build_4_img = 'fukua/Goodnight_Kiss.png';
   person.build_1_desc = 'Низкий урон, но дистанционный.';
   person.build_2_desc = 'Для дальней дистанции.';
   person.build_3_desc = 'Может передать дебаффы и забрать баффы.';
   person.build_4_desc = 'Шанс дать иссушение и усталость.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function rain_shadow() {
   person.card_name = 'Грозовая тень';
   person.aka = 'Рэйн';
   person.card_src = 'Rain_Shadow.png';
   person.description = 'Потрясающий антибаффер, и оглушает случайно. Очень сильный серебрянный персонаж, можно качать и алмазить: в алмазном ранге также может пригодиться.';
   person.ability = 'При ударах в блок шанс 15% дать раскол брони и всплеск энергии на 15 сек. Если противник стоит на вашей стороне и не оглушён, через каждые 5 сек враг теряет все баффы и получает усталость на 10 сек.';
   person.marquee1 = `${fukua.marquee1} Только ярость.`;
   person.marquee2 = `${fukua.marquee2}`;
   person.prestige_description = `${fukua.prestige}`;
   person.prestige_activation = `${fukua.p_active}`;
   person.at = '8,640';
   person.hp = '45,716';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'fukua/Drill_of_My_Dreams.png';
   person.build_2_img = 'fukua/Breakdown.png';
   person.build_3_img = 'fukua/Forever_a_Clone.png';
   person.build_4_img = 'fukua/Fukua_Drillationship.png';
   person.build_1_desc = 'Используется в комбинации.';
   person.build_2_desc = 'Получить миазмы.';
   person.build_3_desc = 'Наложит блок исцеления.';
   person.build_4_desc = 'Может дать метку смерти, раскол брони и увечье.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function chameleon_twist() {
   person.card_name = 'Ящерица';
   person.aka = 'Хамелеон';
   person.card_src = 'Chameleon_Twist.png';
   person.description = 'Неплохой универсал, в атаке можно давить миазмами, в защите опасна уклонением. Как серебрянный и золотой танк сойдет, алмазить не стоит.';
   person.ability = 'Удар по движущемуся противнику даст миазмы на 10 сек. При ударе пока не заряжен блокбастер шанс 5% получить уклонение и миазмы на 10 сек.';
   person.marquee1 = `${fukua.marquee1}`;
   person.marquee2 = `${fukua.marquee2}`;
   person.prestige_description = `${fukua.prestige}`;
   person.prestige_activation = `${fukua.p_active}`;
   person.at = '7,335';
   person.hp = '50,324';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'fukua/Breakdown.png';
   person.build_2_img = 'fukua/Drill_of_My_Dreams.png';
   person.build_3_img = 'fukua/Best_Friends_Forever.png';
   person.build_4_img = 'fukua/Goodnight_Kiss.png';
   person.build_1_desc = 'Получить миазмы.';
   person.build_2_desc = 'Больше урона в комбо.';
   person.build_3_desc = 'Может передать дебаффы и забрать баффы.';
   person.build_4_desc = 'Шанс дать иссушение и усталость.';
   skullgirls.replaceChildren();
   pageGenerator();
}
