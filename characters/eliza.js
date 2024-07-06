const eliza = {
   marquee1: 'Клятва - при поражении союзника восстанавливает 50% здоровья.',
   marquee2: 'Жертва - при поражении союзника восстанавливает 100% шкалы блокбастера.',
   prestige: 'В режиме сехмет шанс при ударе снять положительный эффект с врага и восстановить немного здоровья.',
   p_active: '25% за переход в режим Сехмет.'
}

function denile() {
   card_name = 'Нилисток';
   aka = 'Нилисток';
   card_src = 'In_Denile.png';
   description = 'Очень слабая карточка, не рекомендуется прокачивать. Находит своё место только на аватарке в виде алмазной шайни из-за своей красоты.';
   ability = 'При переходе в Сехмет снимает все отрицательные эффекты и дает иммунитет на 15 сек, а врагу раскол брони.';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '7,392';
   hp = '50,381';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Sekhmets_Bite.png';
   build_2_img = 'eliza/Sekhmets_Fury.png';
   build_3_img = 'eliza/Sekhmets_Turn.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Сехмет с шансом дать проклятье.';
   build_2_desc = 'Сехмет с шансом получить бешенство.';
   build_3_desc = 'Сехмет с шансом дать кровотечение и блок исцеления.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function decrypted() {
   card_name = 'Гроб да винчи';
   aka = 'Гроб';
   card_src = 'Decrypted.png';
   description = 'Достойный вариант Элайзы для новичков в целях познакомиться с персонажем. Не особо сильная, но хорошая карточка, алмазить не стоит. Алмазят только шайни для красивой аватарки.';
   ability = 'При переходе в Сехмет ворует 1 положительный эффект и даёт иссушение на 10 сек. Также увеличен урон на 25% за каждого живого противника.';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '6,951';
   hp = '61,018';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Sekhmets_Bite.png';
   build_2_img = 'eliza/Sekhmets_Fury.png';
   build_3_img = 'eliza/Sekhmets_Turn.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Сехмет с шансом дать проклятье.';
   build_2_desc = 'Сехмет с шансом получить бешенство.';
   build_3_desc = 'Сехмет с шансом дать кровотечение и блок исцеления.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function scarlet_viper() {
   card_name = 'Алая гадюка';
   aka = 'Скарлет';
   card_src = 'Scarlet_Viper.png';
   description = 'Отличная серебрянная карточка, если не играть через Сехмет. Чаще всего используется в быстрых играх под отрицательные эффекты. Алмазить можно.';
   ability = 'При переходе в режим Сехмет, вызывает кровотечение у обоих персонажей на 15 сек. При получении отрицательного эффекта, активирует бешенство на 15 секунд.';
   marquee1 = `${eliza.marquee1} Единственный выбор.`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '9,946';
   hp = '52,877';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Nekhbet_Breaker.png';
   build_2_img = 'eliza/Upper_Khat.png';
   build_3_img = 'eliza/Weight_Of_Anubis.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Может дать раскол брони при ударе.';
   build_2_desc = 'Может оглушить при ударе.';
   build_3_desc = 'Подкинуть противника к себе.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   supps = ['joy', 'persona', 'evergreen'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function bloody_valentine() {
   card_name = 'Кровь фэй';
   aka = 'Фея';
   card_src = 'Bloody_Valentine.png';
   description = 'Есть смысл прокачивать только без прокачки критов в древе. Тогда, используется в рифтах в бескрит билде.';
   ability = 'Восстанавливает 10% НР когда любой персонаж использует особый приём, и 15% шкалы блокбастеров когда любой персонаж использует блокбастер.';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '8,640';
   hp = '58,791';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Точность'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Upper_Khat.png';
   build_2_img = 'eliza/Osiris_Spiral.png';
   build_3_img = 'eliza/Weight_Of_Anubis.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Может оглушить при ударе.';
   build_2_desc = 'Шанс наложить сильное кровотечение.';
   build_3_desc = 'Подкинуть противника к себе.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   build_form_name1 = 'Не заполняем древо до конца';
   build_form_path1 = '<img src="files/moves/eliza/bv_critless.jpg">';
   build_form_name2 = 'Примерный билд для бескрит Феи';
   build_form_path2 = '<img src="files/moves/eliza/build1_bv.jpg">';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}
function tomb_gloom() {
   card_name = 'Мрачная птица';
   aka = 'Птица';
   card_src = 'Tomb_Gloom.png';
   description = 'Не смотря на низкий урон, вполне пригодна к прокачке, хотя бы как серебрянный персонаж. Алмазить не стоит, Баня будет лучше.';
   ability = 'Активация блокбастера или ос приёма накладывает проклятье, иссушение, порчу или вечный покой на 10 сек. Блокбастер также даёт уклонение на 10 сек.';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '7,335';
   hp = '64,704';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Sekhmets_Bite.png';
   build_2_img = 'eliza/Sekhmets_Fury.png';
   build_3_img = 'eliza/Sekhmets_Turn.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Сехмет с шансом дать проклятье.';
   build_2_desc = 'Сехмет с шансом получить бешенство.';
   build_3_desc = 'Сехмет с шансом дать кровотечение и блок исцеления.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   supps = ['joy', 'honormaid', 'horse'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}

function inner_pieces() {
   card_name = 'Внутренние миры';
   aka = 'Миры';
   card_src = 'Inner_Pieces.png';
   description = 'Получить можно только с подарка от друга. Можно использовать как дд, можно как саппорт, перекладывающий баффы с перса на перса. Однозначно качать.';
   ability = 'При переходе в режим Сехмет, получает эффект в зависимости от стихии союзников на 15 сек. При смене с Элайзы или на неё, переносит все положительные эффекты на активного персонажа.';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '10,100';
   hp = '68,602';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Sekhmets_Bite.png';
   build_2_img = 'eliza/Sekhmets_Fury.png';
   build_3_img = 'eliza/Sekhmets_Turn.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Сехмет с шансом дать проклятье.';
   build_2_desc = 'Сехмет с шансом получить бешенство.';
   build_3_desc = 'Сехмет с шансом дать кровотечение и блок исцеления.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   addition = 'Список эффектов:</br> Ветер: регенерация</br> Огонь: бешенство</br> Вода: броня</br> Свет: благославение</br> Тьма: шипы</br> Бесстихийка: барьер';
   skullgirls.replaceChildren();
   pageGenerator();
   additions();
}
function red_velvet() {
   card_name = 'Красный бархат';
   aka = 'Бархат';
   card_src = 'Red_Velvet.png';
   description = 'Самый простой способ наложить противнику порчу, которая блокирует абилку. Несмотря на низкий урон, качают ей безкрит билд, и позиционируется она больше не как дамагер, а как дебаффер: также дают приём аппер для наложения оглушения. Качать можно для рифтов, но если у вас нет Жажды Смерти (Амбрелла).';
   ability = 'При переходе в режим Сехмет, накладывает врагу порчу на 15 сек. Если противник меняет персонажа под порчей, призванный получит 3 случайных дебаффа на 15 сек.';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '8,564';
   hp = '75,476';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Точность'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Sekhmets_Bite.png';
   build_2_img = 'eliza/Sekhmets_Turn.png';
   build_3_img = 'eliza/Upper_Khat.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Сехмет с шансом дать проклятье.';
   build_2_desc = 'Сехмет с шансом дать кровотечение и блок исцеления.';
   build_3_desc = 'Может оглушить при ударе.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function lapis_luxury() {
   card_name = 'Роскошный лазурит';
   aka = 'Лазурь';
   card_src = 'Lapis_Luxury.png';
   description = 'Самый красивый скин в игре и высокая атака. И бесполезная абилка. Максимум, можно снизить своё здоровье до 1% с неупалом, и при активации бб3 поменяться здоровьем с врагом и убить его этой бб3; либо играть чисто уроном без абилки. Но всё же, качать не стоит.';
   ability = 'Один раз за матч при призыве пополняет шкалу блокбастера до того же уровня что у противника и даёт ему раскол брони на 15 сек. Один раз за матч при использовании бб3, меняет счётчик НР персонажей и получает мощную регенерацию на 15 сек.';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '11,616';
   hp = '61,728';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Lady_of_Slaughter.png';
   build_2_img = 'eliza/Sekhmets_Fury.png';
   build_3_img = 'eliza/Upper_Khat.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Наложит рандом дебафф и сбросит ос приёмы и призыв.';
   build_2_desc = 'Сехмет с шансом получить бешенство.';
   build_3_desc = 'Может оглушить при ударе.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function bloodbath() {
   card_name = 'Кровавая баня';
   aka = 'Баня';
   card_src = 'Bloodbath.png';
   description = 'Очень мощная карточка! Огромный урон, кровотечения, и ещё много чего от приёмов Элайзы. Также некий иммунитет к кровотечениям. Достойна алмаза.';
   ability = 'Если любой из персонажей использует блокбастер, оба получают кровотечение на 10 сек. Кровотечения на себе конвертирует в регенерацию.';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '11,616';
   hp = '61,728';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Khepri_Sun.png';
   build_2_img = 'eliza/Sekhmets_Fury.png';
   build_3_img = 'eliza/Upper_Khat.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Увеличен урон по противнику с отрицательным эффектом.';
   build_2_desc = 'Сехмет с шансом получить бешенство.';
   build_3_desc = 'Может оглушить при ударе.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   supps = ['martial_outlaw', 'starlight', 'horse'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function diva_intervention() {
   card_name = 'Партия дивы';
   aka = 'Дива';
   card_src = 'Diva_Intervention.png';
   description = 'Отличная для золота и также для алмаза, можно играть и в быстрых играх, и в рифтах, против Пэйнвил с отражением урона и некоторых бафферов. Рекомендуется к прокачке.';
   ability = 'В режиме Сехмет, обычные атаки вампирят 8% шкалы блокбастера врага и восстанавливают здоровье в размере 50% от урона.';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '10,100';
   hp = '68,602';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Lady_of_Slaughter.png';
   build_2_img = 'eliza/Sekhmets_Fury.png';
   build_3_img = 'eliza/Sekhmets_Bite.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Наложит рандом дебафф и сбросит ос приёмы и призыв.';
   build_2_desc = 'Сехмет с шансом получить бешенство.';
   build_3_desc = 'Сехмет с шансом дать проклятье.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   supps = ['martial_outlaw', 'starlight', 'persona'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function noble_mogul() {
   card_name = 'Знатный магнат';
   aka = 'Магнат';
   card_src = 'Noble_Mogul.png';
   description = 'Барьер каждые 20 секунд это очень скудно. Бонус урона 15% это мало, хотя при 5 стаках получается 75%, играть с 5 стаками врядли выйдет, в добавок бонус только для светлых. В общем, слабо.';
   ability = 'Пока жива, все союзники получают барьер каждые 20 сек. Под барьером, получает иммунитет для себя, а другой светлый персонаж получает бонус 15% к урону за каждый барьер на нём.';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '8,564';
   hp = '75,476';
   atk_stats = ['Только саппорт'];
   def_stats = ['Не защитник'];
   build_1_img = 'eliza/Weight_Of_Anubis.png';
   build_2_img = 'eliza/Upper_Khat.png';
   build_3_img = 'eliza/Sekhmets_Bite.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Подкинуть противника к себе.';
   build_2_desc = 'Может оглушить при ударе.';
   build_3_desc = 'Сехмет с шансом дать проклятье.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function stand_out() {
   card_name = 'Одна такая';
   aka = 'Дио';
   card_src = 'Stand_Out.png';
   description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque voluptate deleniti numquam esse quos eligendi porro quod quis.';
   ability = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '11,770';
   hp = '80,045';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'eliza/Weight_Of_Anubis.png';
   build_2_img = 'eliza/Upper_Khat.png';
   build_3_img = 'eliza/Sekhmets_Bite.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Подкинуть противника к себе.';
   build_2_desc = 'Может оглушить при ударе.';
   build_3_desc = 'Сехмет с шансом дать проклятье.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function mummy_dearest() {
   card_name = 'Драгоценная мумия';
   aka = 'Мумия';
   card_src = 'Mummy_Dearest.png';
   description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque voluptate deleniti numquam esse quos eligendi porro quod quis.';
   ability = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita magnam voluptas distinctio ad voluptatum suscipit similique placeat atque earum itaque';
   marquee1 = `${eliza.marquee1}`;
   marquee2 = `${eliza.marquee2}`;
   prestige_description = `${eliza.prestige}`;
   prestige_activation = `${eliza.p_active}`;
   at = '10,004';
   hp = '88,052';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'eliza/Weight_Of_Anubis.png';
   build_2_img = 'eliza/Upper_Khat.png';
   build_3_img = 'eliza/Sekhmets_Bite.png';
   build_4_img = 'eliza/Chaos_Banish.png';
   build_1_desc = 'Подкинуть противника к себе.';
   build_2_desc = 'Может оглушить при ударе.';
   build_3_desc = 'Сехмет с шансом дать проклятье.';
   build_4_desc = 'Снимает все положительные эффекты врага.';
   skullgirls.replaceChildren();
   pageGenerator();
}