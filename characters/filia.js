const filia = {
   marquee1: 'Пиявка - восстанавливает 35% здоровья от наносимого урона.',
   marquee2: 'Первая рана - каждый удар имеет шанс 15% превратить эффект кровотечения в постоянное кровотечение.',
   prestige: 'Уклон от снарядов при рывке и шанс наложить метку смерти на атакующего противника.',
   p_active: '20% за удар по атакующему противнику.'
}

function bad_hair() {
   person.card_name = 'Голова-трава';
   person.aka = 'Травка';
   person.card_src = 'Bad_Hair_Day.png';
   person.description = 'Для новичков, позволяет познакомиться с Филией лучше всего: наносит врагу кровотечение любыми ударами. С раной очень эффективна, кровотоки станут постоянными и складываться с временными. Прокачать стоит только до золота, далее можно пересесть на Паразит или МК. Актуальности не теряет, ведь раз любые удары дают кровоток, то и прокачивать билд ей не нужно, что существенно экономит монеты.';
   person.ability = 'Шанс 10% дать кровотечение при ударе, 15% бонус к шансу крита если у врага кровотечение';
   person.marquee1 = `${filia.marquee1}`;
   person.marquee2 = `${filia.marquee2} Основной выбор.`;
   person.prestige_description = `${filia.prestige}`;
   person.prestige_activation = `${filia.p_active}`;
   person.at = '7,392';
   person.hp = '39,188';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Уровень блока'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'filia/Drill_Tempered.png';
   person.build_2_img = 'filia/Widows_Peak.png';
   person.build_3_img = 'filia/Ringlet_Spike.png';
   person.build_4_img = 'filia/Filia_Burst.png';
   person.build_1_desc = 'Шанс снять все положительные эффекты.';
   person.build_2_desc = 'Подбрасывает и наносит раскол брони.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Сбивает атаку врага и накладывает кровотечение.';
   person.build_form_name1 = 'Финальный билд для Филии, к которому стоит стремиться';
   person.build_form_path1 = '<img src="files/moves/filia/build1_class_cutter.jpg">';
   person.build_form_name2 = 'Видеоурок как пользоваться шипами';
   person.build_form_path2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Gucp2ss3YSE?si=1Z2nqpn9sNPfQoVj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}
function frayed_ends() {
   person.card_name = 'Концы секутся';
   person.aka = 'Концы';
   person.card_src = 'Frayed_Ends.png';
   person.description = 'Для новичков это универсальный персонаж, так как можно ставить её на защиту в быстрых играх, а можно и играть за нее, основной урон будет от кровотоков. Новичкам прокачивать не рекомендуется; из-за буста урона умения она сильнее травы, но ресурсы лучше вложить в другую Филию.';
   person.ability = 'Шанс 20% вызвать кровотечение на 7 сек при получении удара, 50% бонус к урону против врага с кровотечением.';
   person.marquee1 = `${filia.marquee1}`;
   person.marquee2 = `${filia.marquee2} Основной выбор.`;
   person.prestige_description = `${filia.prestige}`;
   person.prestige_activation = `${filia.p_active}`;
   person.at = '6,951';
   person.hp = '47,482';
   person.atk_stats = ['Атака', 'Проницание', 'Криты', 'Уровень блока'];
   person.def_stats = ['Здоровье', 'Защита', 'Точность', 'Сопрот криту'];
   person.build_1_img = 'filia/Drill_Tempered.png';
   person.build_2_img = 'filia/Drillationship.png';
   person.build_3_img = 'filia/Ringlet_Spike.png';
   person.build_4_img = 'filia/Filia_Burst.png';
   person.build_1_desc = 'Шанс снять все положительные эффекты.';
   person.build_2_desc = 'Защитный приём.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Сбивает атаку врага и накладывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function ms_frosty() {
   person.card_name = 'Снеговичок';
   person.aka = 'Снег';
   person.card_src = 'Bad_Ms_Frosty.png';
   person.description = 'Хорошая филия как для новичков, так и для опытных. Найдёт своё применение в рифтах против модов на броню.';
   person.ability = 'Критический удар с шансом 50% отключает блокбастеры врага и даёт раскол брони на 4 сек.';
   person.marquee1 = `${filia.marquee1} Основной выбор.`;
   person.marquee2 = `${filia.marquee2}`;
   person.prestige_description = `${filia.prestige}`;
   person.prestige_activation = `${filia.p_active}`;
   person.at = '8,640';
   person.hp = '45,716';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'filia/Drill_Tempered.png';
   person.build_2_img = 'filia/Gregor_Samson.png';
   person.build_3_img = 'filia/Ringlet_Spike.png';
   person.build_4_img = 'filia/Lash_Out.png';
   person.build_1_desc = 'Шанс снять все положительные эффекты.';
   person.build_2_desc = 'Нападающий приём с кровотечением.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function hair_apparent() {
   person.card_name = 'Локон медичи';
   person.aka = 'Локон';
   person.card_src = 'Hair_Apparent.png';
   person.description = 'Очень хорошая вариация для новичков для серебра, но алмазить не стоит.';
   person.ability = 'При использовании особого приёма, получает ускорение на 15 сек. При использовании блокбастера, сбрасывает кд всех особых приёмов.';
   person.marquee1 = `${filia.marquee1} Основной выбор.`;
   person.marquee2 = `${filia.marquee2}`;
   person.prestige_description = `${filia.prestige}`;
   person.prestige_activation = `${filia.p_active}`;
   person.at = '9,946';
   person.hp = '41,127';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'filia/Drill_Tempered.png';
   person.build_2_img = 'filia/Gregor_Samson.png';
   person.build_3_img = 'filia/Ringlet_Spike.png';
   person.build_4_img = 'filia/Born_With_It.png';
   person.build_1_desc = 'Шанс снять все положительные эффекты.';
   person.build_2_desc = 'Шанс вызвать кровотечение.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Получить бешенство.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function rock_star() {
   person.card_name = 'Звезда вселенной';
   person.aka = 'Рок стар';
   person.card_src = 'Rock_Star.png';
   person.description = 'Не особо полезный саппорт, можно не качать. Скорее полу-саппорт, ведь сама по себе неплохой боец, поэтому играют периодическими сменами персонажей с основного на неё а потом обратно.';
   person.ability = 'Если жива, смена персонажа даёт 3 барьера на 10 сек, а после истечения его времени, даст неупал на 10 сек и 20% к шкале блокбастера.';
   person.marquee1 = `${filia.marquee1} Основной выбор.`;
   person.marquee2 = `${filia.marquee2}`;
   person.prestige_description = `${filia.prestige}`;
   person.prestige_activation = `${filia.p_active}`;
   person.at = '7,335';
   person.hp = '50,324';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'filia/Drill_Tempered.png';
   person.build_2_img = 'filia/Gregor_Samson.png';
   person.build_3_img = 'filia/Ringlet_Spike.png';
   person.build_4_img = 'filia/Lash_Out.png';
   person.build_1_desc = 'Шанс снять все положительные эффекты.';
   person.build_2_desc = 'Шанс вызвать кровотечение.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Сменить противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function parasite_weave() {
   person.card_name = 'Паразит';
   person.aka = 'Паразитка';
   person.card_src = 'Parasite_Weave.png';
   person.description = 'Требует хорошо прокачанный билд с шипами для игры, высокий шанс крита. В таком случае, получается хороший боец с оглушениями и кровотечениями. Можно прокачать рану для превращения Паразита в дебаффера и усиленную Траву, но выгоднее качать пиявку. Вторая абилка бесполезна, не обращайте внимания на неё, выгоднее всего играть шипами.';
   person.ability = 'Критический удар с шансом 50% наложит противнику замедление на 10 сек и оглушение на 3 сек, если еще нет замедления. По оглушённому врагу удар с шансом 15% наложит кровотечение на 5 сек.';
   person.marquee1 = `${filia.marquee1}`;
   person.marquee2 = `${filia.marquee2}`;
   person.prestige_description = `${filia.prestige}`;
   person.prestige_activation = `${filia.p_active}`;
   person.at = '10,100';
   person.hp = '53,357';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'filia/Drill_Tempered.png';
   person.build_2_img = 'filia/Widows_Peak.png';
   person.build_3_img = 'filia/Ringlet_Spike.png';
   person.build_4_img = 'filia/Gregor_Samson.png';
   person.build_1_desc = 'Шанс снять все положительные эффекты.';
   person.build_2_desc = 'Подбрасывает и наносит раскол брони.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Шанс вызвать кровотечение.';
   person.supps = ['peashooter', 'harlequin', 'seraph'];
   person.build_form_name1 = 'Финальный билд для Филии, к которому стоит стремиться';
   person.build_form_path1 = '<img src="files/moves/filia/build1_class_cutter.jpg">';
   person.build_form_name2 = 'Видеоурок как пользоваться шипами';
   person.build_form_path2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Gucp2ss3YSE?si=1Z2nqpn9sNPfQoVj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   buildLoad();
}
function windswept() {
   person.card_name = 'Волосы на ветру';
   person.aka = 'Волосы';
   person.card_src = 'Windswept.png';
   person.description = 'Метовый поломанный персонаж из-за уклонений и постоянной точности, которая не просто даёт 100% шанса крита, но и не позволяет срабатывать абилке противника, что делает большинство дэф персонажей ничем против неё. Добавьте сюда хилл от уника, кровотоки от шипов и снятия всех баффов от сверла. Играют также через шипы, но не требует прокачку шанса крита из-за точности.';
   person.ability = 'При ударе атакующего противника, получает бешенство на 10 сек и уклонение. Успешное уклонение даёт постоянную точность, снимается при смерти противника.';
   person.marquee1 = `${filia.marquee1} Лучший выбор.`;
   person.marquee2 = `${filia.marquee2}`;
   person.prestige_description = `${filia.prestige}`;
   person.prestige_activation = `${filia.p_active}`;
   person.at = '11,616';
   person.hp = '48,039';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'filia/Drill_Tempered.png';
   person.build_2_img = 'filia/Widows_Peak.png';
   person.build_3_img = 'filia/Ringlet_Spike.png';
   person.build_4_img = 'filia/Gregor_Samson.png';
   person.build_1_desc = 'Шанс снять все положительные эффекты.';
   person.build_2_desc = 'Подбрасывает и наносит раскол брони.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Шанс вызвать кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dreadlocks() {
   person.card_name = 'Локоны-убийцы';
   person.aka = 'Дрэд';
   person.card_src = 'Dread_Locks.png';
   person.description = 'Это защитный персонаж, основанный на отражении урона. В рифтах стоит поставить под катализаторы "Светлое начало" и "Последнее слово". Не рекомендуют прокачивать: достаточно низкий запас здоровья и контрится любой Валей с битом.';
   person.ability = 'Отражает 35% урона. Если противник совершает критический удар, то получает сильное кровотечение на 10 сек.';
   person.marquee1 = `${filia.marquee1} Основной выбор.`;
   person.marquee2 = `${filia.marquee2}`;
   person.prestige_description = `${filia.prestige}`;
   person.prestige_activation = `${filia.p_active}`;
   person.at = '8,564';
   person.hp = '58,676';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Прирост шкалы'];
   person.build_1_img = 'filia/Fenrir_Drive.png';
   person.build_2_img = 'filia/Widows_Peak.png';
   person.build_3_img = 'filia/Drillationship.png';
   person.build_4_img = 'filia/Filia_Burst.png';
   person.build_1_desc = 'Больше урона по кровоточащему врагу.';
   person.build_2_desc = 'Достаточно резкая атака.';
   person.build_3_desc = 'Хороший защитный приём.';
   person.build_4_desc = 'Сбивает атаку врага и накладывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function djinn_frizz() {
   person.card_name = 'Кудряшка-Джинн';
   person.aka = 'Кудря';
   person.card_src = 'Djinn_Frizz.png';
   person.description = 'Очень сильный персонаж, но рандомный - не всегда получается сделать 5 стаков бешенства. Но её бешенство нельзя снять или забрать, поэтому если повезло - это будет очень сильно. Популярно прокачивать её без критов в статах, чтобы противостоять дэф пейнвилам и далиям, а урона и без критов достаточно.';
   person.ability = 'Каждые 10 сек получает 3 рандом баффа на 5 сек. При использовании блокбастера шанс 33% превратить 3 баффа в перманентное бешенство.';
   person.marquee1 = `${filia.marquee1} Основной выбор.`;
   person.marquee2 = `${filia.marquee2}`;
   person.prestige_description = `${filia.prestige}`;
   person.prestige_activation = `${filia.p_active}`;
   person.at = '15,591';
   person.hp = '50,439';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Прирост шкалы'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'filia/Drill_Tempered.png';
   person.build_2_img = 'filia/Widows_Peak.png';
   person.build_3_img = 'filia/Ringlet_Spike.png';
   person.build_4_img = 'filia/Trichobezoar.png';
   person.build_1_desc = 'Шанс снять все положительные эффекты.';
   person.build_2_desc = 'Подбрасывает и наносит раскол брони.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Мощный урон под яростью.';
   person.supps = ['evergreen', 'prisma', 'seraph'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function class_cutter() {
   person.card_name = 'Мастер-класс';
   person.aka = 'МК';
   person.card_src = 'Class_Cutter.png';
   person.description = 'Очень сильный и популярный вариант Филии. Используется и в быстрых играх, и в рифтах. Можно поставить на защиту из-за неблокируемых атак, но только при отсутствии нормальных деф персонажей.';
   person.ability = 'При снятии не менее 5% НР противника с удара, накладывает сильное кровотечение и блок исцеления на 10 сек. Блокбастеры и ос приёмы с шансом 10% неблокируемы и при этом накладывают метку смерти на 15 сек.';
   person.marquee1 = `${filia.marquee1} Основной выбор.`;
   person.marquee2 = `${filia.marquee2}`;
   person.prestige_description = `${filia.prestige}`;
   person.prestige_activation = `${filia.p_active}`;
   person.at = '13,556';
   person.hp = '56,045';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['С дд статами'];
   person.build_1_img = 'filia/Drill_Tempered.png';
   person.build_2_img = 'filia/Widows_Peak.png';
   person.build_3_img = 'filia/Ringlet_Spike.png';
   person.build_4_img = 'filia/Gregor_Samson.png';
   person.build_1_desc = 'Шанс снять все положительные эффекты.';
   person.build_2_desc = 'Подбрасывает и наносит раскол брони.';
   person.build_3_desc = 'Мета приём.';
   person.build_4_desc = 'Шанс вызвать кровотечение.';
   person.supps = ['peashooter', 'harlequin', 'horse'];
   person.build_form_name1 = 'Основной билд для МК';
   person.build_form_path1 = '<img src="files/moves/filia/build1_class_cutter.jpg">';
   person.build_form_name2 = 'Фановый билд для МК';
   person.build_form_path2 = '<img src="files/moves/filia/build2_class_cutter.jpg">';
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   buildLoad();
}
