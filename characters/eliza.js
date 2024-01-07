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

function scarlet_viper() {
   person.card_name = 'Алая гадюка';
   person.aka = 'Скарлет';
   person.card_src = 'Scarlet_Viper.png';
   person.description = 'Отличная серебрянная карточка, если не играть через Сехмет. Чаще всего используется в быстрых играх под отрицательные эффекты. Алмазить можно.';
   person.ability = 'При переходе в режим Сехмет, вызывает кровотечение у обоих персонажей на 15 сек. При получении отрицательного эффекта, активирует бешенство на 15 секунд.';
   person.marquee1 = `${eliza.marquee1} Единственный выбор.`;
   person.marquee2 = `${eliza.marquee2}`;
   person.prestige_description = `${eliza.prestige}`;
   person.prestige_activation = `${eliza.p_active}`;
   person.at = '9,946';
   person.hp = '52,877';
   person.atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'eliza/Nekhbet_Breaker.png';
   person.build_2_img = 'eliza/Upper_Khat.png';
   person.build_3_img = 'eliza/Weight_Of_Anubis.png';
   person.build_4_img = 'eliza/Chaos_Banish.png';
   person.build_1_desc = 'Может дать раскол брони при ударе.';
   person.build_2_desc = 'Может оглушить при ударе.';
   person.build_3_desc = 'Подкинуть противника к себе.';
   person.build_4_desc = 'Снимает все положительные эффекты врага.';
   person.supps = ['joy', 'persona', 'evergreen'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function bloody_valentine() {
   person.card_name = 'Кровь фэй';
   person.aka = 'Фея';
   person.card_src = 'Bloody_Valentine.png';
   person.description = 'Есть смысл прокачивать только без прокачки критов в древе. Тогда, используется в рифтах в бескрит билде.';
   person.ability = 'Восстанавливает 10% НР когда любой персонаж использует особый приём, и 15% шкалы блокбастеров когда любой персонаж использует блокбастер.';
   person.marquee1 = `${eliza.marquee1}`;
   person.marquee2 = `${eliza.marquee2}`;
   person.prestige_description = `${eliza.prestige}`;
   person.prestige_activation = `${eliza.p_active}`;
   person.at = '8,640';
   person.hp = '58,791';
   person.atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Точность'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'eliza/Upper_Khat.png';
   person.build_2_img = 'eliza/Osiris_Spiral.png';
   person.build_3_img = 'eliza/Weight_Of_Anubis.png';
   person.build_4_img = 'eliza/Chaos_Banish.png';
   person.build_1_desc = 'Может оглушить при ударе.';
   person.build_2_desc = 'Шанс наложить сильное кровотечение.';
   person.build_3_desc = 'Подкинуть противника к себе.';
   person.build_4_desc = 'Снимает все положительные эффекты врага.';
   person.build_form_name1 = 'Не заполняем древо до конца';
   person.build_form_path1 = '<img src="files/moves/eliza/bv_critless.jpg">';
   person.build_form_name2 = 'Примерный билд для бескрит Феи';
   person.build_form_path2 = '<img src="files/moves/eliza/build1_bv.jpg">';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}
function tomb_gloom() {
   person.card_name = 'Мрачная птица';
   person.aka = 'Птица';
   person.card_src = 'Tomb_Gloom.png';
   person.description = 'Не смотря на низкий урон, вполне пригодна к прокачке, хотя бы как серебрянный персонаж. Алмазить не стоит, Баня будет лучше.';
   person.ability = 'При использовании блокбастера, получает уклонение на 10 сек и даёт проклятье, блок исцеления, порчу или метку смерти.';
   person.marquee1 = `${eliza.marquee1}`;
   person.marquee2 = `${eliza.marquee2}`;
   person.prestige_description = `${eliza.prestige}`;
   person.prestige_activation = `${eliza.p_active}`;
   person.at = '7,335';
   person.hp = '64,704';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'eliza/Sekhmets_Bite.png';
   person.build_2_img = 'eliza/Sekhmets_Fury.png';
   person.build_3_img = 'eliza/Sekhmets_Turn.png';
   person.build_4_img = 'eliza/Chaos_Banish.png';
   person.build_1_desc = 'Сехмет с шансом дать проклятье.';
   person.build_2_desc = 'Сехмет с шансом получить бешенство.';
   person.build_3_desc = 'Сехмет с шансом дать кровотечение и блок исцеления.';
   person.build_4_desc = 'Снимает все положительные эффекты врага.';
   person.supps = ['joy', 'honormaid', 'horse'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}

function inner_pieces() {
   person.card_name = 'Внутренние миры';
   person.aka = 'Миры';
   person.card_src = 'Inner_Pieces.png';
   person.description = 'Получить можно только с подарка от друга. Можно использовать как дд, можно как саппорт, перекладывающий баффы с перса на перса. Однозначно качать.';
   person.ability = 'При переходе в режим Сехмет, получает эффект в зависимости от стихии союзников на 15 сек. При смене с Элайзы или на неё, переносит все положительные эффекты на активного персонажа.';
   person.marquee1 = `${eliza.marquee1}`;
   person.marquee2 = `${eliza.marquee2}`;
   person.prestige_description = `${eliza.prestige}`;
   person.prestige_activation = `${eliza.p_active}`;
   person.at = '10,100';
   person.hp = '68,602';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
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
function red_velvet() {
   person.card_name = 'Красный бархат';
   person.aka = 'Бархат';
   person.card_src = 'Red_Velvet.png';
   person.description = 'Самый простой способ наложить противнику порчу, которая блокирует абилку. Но качать её не стоит: низкий урон и негде использовать.';
   person.ability = 'При переходе в режим Сехмет, накладывает врагу порчу. Если противник меняет персонажа под порчей, призванный получит 3 случайных дебаффа на 15 сек.';
   person.marquee1 = `${eliza.marquee1}`;
   person.marquee2 = `${eliza.marquee2}`;
   person.prestige_description = `${eliza.prestige}`;
   person.prestige_activation = `${eliza.p_active}`;
   person.at = '8,564';
   person.hp = '75,476';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
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
function lapis_luxury() {
   person.card_name = 'Роскошный лазурит';
   person.aka = 'Лазурь';
   person.card_src = 'Lapis_Luxury.png';
   person.description = 'Самый красивый скин в игре и высокая атака. И бесполезная абилка. Максимум, можно снизить своё здоровье до 1% с неупалом, и при активации бб3 поменяться здоровьем с врагом и убить его этой бб3. Но качать не стоит.';
   person.ability = 'Один раз за матч при призыве пополняет шкалу блокбастера до того же уровня что у противника и даёт ему раскол брони на 15 сек. Один раз за матч при использовании бб3, меняет счётчик НР персонажей и получает мощную регенерацию на 15 сек.';
   person.marquee1 = `${eliza.marquee1}`;
   person.marquee2 = `${eliza.marquee2}`;
   person.prestige_description = `${eliza.prestige}`;
   person.prestige_activation = `${eliza.p_active}`;
   person.at = '11,616';
   person.hp = '61,728';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'eliza/Lady_of_Slaughter.png';
   person.build_2_img = 'eliza/Sekhmets_Fury.png';
   person.build_3_img = 'eliza/Upper_Khat.png';
   person.build_4_img = 'eliza/Chaos_Banish.png';
   person.build_1_desc = 'Наложит рандом дебафф и сбросит ос приёмы и призыв.';
   person.build_2_desc = 'Сехмет с шансом получить бешенство.';
   person.build_3_desc = 'Может оглушить при ударе.';
   person.build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function bloodbath() {
   person.card_name = 'Кровавая баня';
   person.aka = 'Баня';
   person.card_src = 'Bloodbath.png';
   person.description = 'Очень мощная карточка! Огромный урон, кровотечения, и ещё много чего от приёмов Элайзы. Также некий иммунитет к кровотечениям. Достойна алмаза.';
   person.ability = 'Если любой из персонажей использует блокбастер, оба получают кровотечение на 10 сек. Кровотечения на себе конвертирует в регенерацию.';
   person.marquee1 = `${eliza.marquee1}`;
   person.marquee2 = `${eliza.marquee2}`;
   person.prestige_description = `${eliza.prestige}`;
   person.prestige_activation = `${eliza.p_active}`;
   person.at = '11,616';
   person.hp = '61,728';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'eliza/Khepri_Sun.png';
   person.build_2_img = 'eliza/Sekhmets_Fury.png';
   person.build_3_img = 'eliza/Upper_Khat.png';
   person.build_4_img = 'eliza/Chaos_Banish.png';
   person.build_1_desc = 'Увеличен урон по противнику с отрицательным эффектом.';
   person.build_2_desc = 'Сехмет с шансом получить бешенство.';
   person.build_3_desc = 'Может оглушить при ударе.';
   person.build_4_desc = 'Снимает все положительные эффекты врага.';
   person.supps = ['martial_outlaw', 'starlight', 'horse'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function diva_intervention() {
   person.card_name = 'Партия дивы';
   person.aka = 'Дива';
   person.card_src = 'Diva_Intervention.png';
   person.description = 'Отличная для золота и также для алмаза, можно играть и в быстрых играх, и в рифтах, против Пэйнвил с отражением урона и некоторых бафферов. Рекомендуется к прокачке.';
   person.ability = 'В режиме Сехмет, обычные атаки вампирят 8% шкалы блокбастера врага и восстанавливают здоровье в размере 50% от урона.';
   person.marquee1 = `${eliza.marquee1}`;
   person.marquee2 = `${eliza.marquee2}`;
   person.prestige_description = `${eliza.prestige}`;
   person.prestige_activation = `${eliza.p_active}`;
   person.at = '10,100';
   person.hp = '68,602';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'eliza/Lady_of_Slaughter.png';
   person.build_2_img = 'eliza/Sekhmets_Fury.png';
   person.build_3_img = 'eliza/Sekhmets_Bite.png';
   person.build_4_img = 'eliza/Chaos_Banish.png';
   person.build_1_desc = 'Наложит рандом дебафф и сбросит ос приёмы и призыв.';
   person.build_2_desc = 'Сехмет с шансом получить бешенство.';
   person.build_3_desc = 'Сехмет с шансом дать проклятье.';
   person.build_4_desc = 'Снимает все положительные эффекты врага.';
   person.supps = ['martial_outlaw', 'starlight', 'persona'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
