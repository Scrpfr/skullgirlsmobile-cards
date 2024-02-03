const peacock = {
   marquee1: 'Функция - шанс 20% мгновенно откатить особый приём после его использования.',
   marquee2: 'Тусовка - шанс неблокируемой атаки при смене персонажа.',
   prestige: 'Ос приёмы имеют шанс дать точность, бешенство или ускорение на 5 сек.',
   p_active: '3% за попадание снаряда.'
}

function rerun() {
   person.card_name = 'Перезапуск';
   person.aka = 'Перепопуск';
   person.card_src = 'Rerun.png';
   person.description = 'Хороший персонаж для новичков для ознакомления с Пикок. Может использоваться как саппорт из-за баффа бешенства.';
   person.ability = 'При смене персонажа, активный персонаж получает бешенство на 15 сек. Перезарядка призыва снижена на 50% для всех союзников.';
   person.marquee1 = `${peacock.marquee1}`;
   person.marquee2 = `${peacock.marquee2} Основной выбор.`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '8,295';
   person.hp = '39,188';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Только саппорт'];
   person.build_1_img = 'peacock/Argus_Agony.png';
   person.build_2_img = 'peacock/Impending_Doom.png';
   person.build_3_img = 'peacock/Georges_Day_Out.png';
   person.build_4_img = 'peacock/Boxcar_George.png';
   person.build_1_desc = 'Может наложить раскол брони.';
   person.build_2_desc = 'Может оглушить противника.';
   person.build_3_desc = 'Медленная бомбочка.';
   person.build_4_desc = 'Быстрая бомбочка с края карты.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function sketchy() {
   person.card_name = 'Мульт';
   person.aka = 'Мульт';
   person.card_src = 'Sketchy.png';
   person.description = 'Прекрасный саппорт, достойный прокачки. До алмаза может и сможет самостоятельно сражаться, но в алмазе стоит использовать только как саппорт.';
   person.ability = 'Пока Пикок жива, призванные союзники выходят в бой с ускорением и иммунитетом на 10 сек, а противники с замедлением и проклятьем на 10 сек.';
   person.marquee1 = `${peacock.marquee1}`;
   person.marquee2 = `${peacock.marquee2} Основной выбор.`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '10,522';
   person.hp = '38,861';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Только саппорт'];
   person.build_1_img = 'peacock/Argus_Agony.png';
   person.build_2_img = 'peacock/Whos_On_Second.png';
   person.build_3_img = 'peacock/Georges_Day_Out.png';
   person.build_4_img = 'peacock/Boxcar_George.png';
   person.build_1_desc = 'Может наложить раскол брони.';
   person.build_2_desc = 'Сменить противника.';
   person.build_3_desc = 'Медленная бомбочка.';
   person.build_4_desc = 'Быстрая бомбочка с края карты.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function prism_plumage() {
   person.card_name = 'Призматическое оперение';
   person.aka = 'Призма';
   person.card_src = 'Prism_Plumage.png';
   person.description = 'Может использоваться как саппорт, может как дд. Снаряды дают дебаффы, которые контрят большинство стихийных модов, что очень полезно и применяемо, к тому же снаряды не только самой Призмы дают эти дебаффы, можно использовать любого персонажа. Рекомендуется прокачивать.';
   person.ability = 'Пока жива, все союзники призываются с 2 эффектами в зависимости от их стихии на 10 сек, и все снаряды с шансом 10% накладывают на противника дебафф в зависимости от его стихии.';
   person.marquee1 = `${peacock.marquee1} Основной выбор.`;
   person.marquee2 = `${peacock.marquee2}`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '8,218';
   person.hp = '50,324';
   person.atk_stats = ['Атака', 'Проницание', 'Криты', 'Перез приемов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'peacock/Argus_Agony.png';
   person.build_2_img = 'peacock/Impending_Doom.png';
   person.build_3_img = 'peacock/Bandwagon_Rushdown.png';
   person.build_4_img = 'peacock/Georges_Day_Out.png';
   person.build_1_desc = 'Может наложить раскол брони.';
   person.build_2_desc = 'Может оглушить противника.';
   person.build_3_desc = 'Может снять с противника все положительные эффекты.';
   person.build_4_desc = 'Выпустить бомбочку.';
   person.addition = 'Список эффектов:</br> Ветер: кровотечение</br> Огонь: увечья</br> Вода: раскол брони</br> Свет: обратная полярность</br> Тьма: иссушение';
   skullgirls.replaceChildren();
   pageGenerator();
   addition();
}
function wildcard() {
   person.card_name = 'Джокер';
   person.aka = 'Джокер';
   person.card_src = 'Wildcard.png';
   person.description = 'Не такой простой персонаж как другие Пикок, но качать можно, больше фанатам Пикок. При смерти если у врага дебафф, забирает сразу 50% полных НР, что может быть полезно в некоторых ситуациях, но есть вариации получше.';
   person.ability = 'При использовании особого приёма, накладывает случайный дебафф на 5 сек. При поражении, если у противника есть дебафф, снижает максимальное здоровье противника на 50%.';
   person.marquee1 = `${peacock.marquee1} Основной выбор.`;
   person.marquee2 = `${peacock.marquee2}`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '8,218';
   person.hp = '50,324';
   person.atk_stats = ['Атака', 'Проницание', 'Криты', 'Перез приемов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'peacock/Argus_Agony.png';
   person.build_2_img = 'peacock/Impending_Doom.png';
   person.build_3_img = 'peacock/BANG_BANG.png';
   person.build_4_img = 'peacock/Georges_Day_Out.png';
   person.build_1_desc = 'Может наложить раскол брони.';
   person.build_2_desc = 'Может оглушить противника.';
   person.build_3_desc = '3 нажатия = 3 выстрела.';
   person.build_4_desc = 'Выпустить бомбочку.';
   person.supps = ['joy', 'peashooter', 'harlequin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function pea_shooter() {
   person.card_name = 'Горошница';
   person.aka = 'Горох';
   person.card_src = 'Pea_Shooter.png';
   person.description = 'Для серебра, очень сильный персонаж, можно также алмазить. Может также использоваться как саппорт, увеличивающий урон от снарядов. Рекомендуется качать.';
   person.ability = 'Увеличивает урон снарядов на 35%. Снаряды с шансом 15% накладывают раскол брони на 6 сек.';
   person.marquee1 = `${peacock.marquee1} Основной выбор.`;
   person.marquee2 = `${peacock.marquee2}`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '11,079';
   person.hp = '41,127';
   person.atk_stats = ['Атака', 'Проницание', 'Криты', 'Перез приемов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'peacock/Boxcar_George.png';
   person.build_2_img = 'peacock/Impending_Doom.png';
   person.build_3_img = 'peacock/Bandwagon_Rushdown.png';
   person.build_4_img = 'peacock/Georges_Day_Out.png';
   person.build_1_desc = 'Быстрая бомбочка с края карты.';
   person.build_2_desc = 'Может оглушить противника.';
   person.build_3_desc = 'Может снять с противника все положительные эффекты.';
   person.build_4_desc = 'Выпустить бомбочку.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function inkling() {
   person.card_name = 'Чернильница';
   person.aka = 'Инк';
   person.card_src = 'Inkling.png';
   person.description = 'Огромный урон и неблокируемые атаки, эта карточка точно стоит прокачки. В основном, требует хорошую прокачку статов, желательно максимальные 50% перезарядки приёмов, но для новичков тоже подойдёт.';
   person.ability = 'Бонус 25% к урону за каждого живого союзника, особые приёмы с шансом 25% неблокируемы пока живы союзники.';
   person.marquee1 = `${peacock.marquee1} Основной выбор.`;
   person.marquee2 = `${peacock.marquee2}`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '9,639';
   person.hp = '45,716';
   person.atk_stats = ['Атака', 'Проницание', 'Криты', 'Перез приемов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'peacock/George_at_the_Air_Show.png';
   person.build_2_img = 'peacock/BANG_BANG.png';
   person.build_3_img = 'peacock/Georges_Day_Out.png';
   person.build_4_img = 'peacock/Boxcar_George.png';
   person.build_1_desc = 'Накладывает раскол брони.';
   person.build_2_desc = '3 нажатия = 3 выстрела.';
   person.build_3_desc = 'Медленная бомбочка.';
   person.build_4_desc = 'Быстрая бомбочка с края карты.';
   person.supps = ['horse', 'peashooter', 'harlequin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}

function mean_one() {
   person.card_name = 'Гадкая я';
   person.aka = 'Гринч';
   person.card_src = 'Mean_One.png';
   person.description = 'Невероятно сильный персонаж, также отличный антибаффер. Безвременные баффы превращает также в безвременные дебаффы, включая проклятье, что однозначно имбово. Подойдёт и новичкам, и опытным игрокам, вполне может подняться на высокие ряды в быстрой игре. Но обладает очень низким запасом здоровья, нужно играть очень аккуратно.';
   person.ability = 'Получает бешенство на 15 сек за каждый положительный эффект полученный противником. Снаряды с шансом 50% превращают положительный эффект противника в случайный отрицательный.';
   person.marquee1 = `${peacock.marquee1} Основной выбор.`;
   person.marquee2 = `${peacock.marquee2}`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '12,960';
   person.hp = '48,039';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'peacock/Argus_Agony.png';
   person.build_2_img = 'peacock/Impending_Doom.png';
   person.build_3_img = 'peacock/Bandwagon_Rushdown.png';
   person.build_4_img = 'peacock/Georges_Day_Out.png';
   person.build_1_desc = 'Может наложить раскол брони.';
   person.build_2_desc = 'Может оглушить противника.';
   person.build_3_desc = 'Может снять с противника все положительные эффекты.';
   person.build_4_desc = 'Выпустить бомбочку.';
   person.supps = ['seraph', 'peashooter', 'evergreen'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function ultraviolent() {
   person.card_name = 'Ультрафиолет';
   person.aka = 'Уфа';
   person.card_src = 'Ultraviolent.png';
   person.description = 'Хороший персонаж сам по себе, большой урон и игнорирование всей защиты противника. Но уже устарела и Гадкая выглядит поинтереснее, не стоит качать.';
   person.ability = 'Шанс 50% что снаряд проигнорирует защиту и броню противника. Увеличен урон на 50% по противнику с непоколебимостью или бронёй.';
   person.marquee1 = `${peacock.marquee1} Основной выбор.`;
   person.marquee2 = `${peacock.marquee2}`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '12,960';
   person.hp = '48,039';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'peacock/Argus_Agony.png';
   person.build_2_img = 'peacock/Impending_Doom.png';
   person.build_3_img = 'peacock/Bandwagon_Rushdown.png';
   person.build_4_img = 'peacock/Georges_Day_Out.png';
   person.build_1_desc = 'Может наложить раскол брони.';
   person.build_2_desc = 'Может оглушить противника.';
   person.build_3_desc = 'Может снять с противника все положительные эффекты.';
   person.build_4_desc = 'Выпустить бомбочку.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function untouchable() {
   person.card_name = 'Неприкасаемые';
   person.aka = 'Неприкасайка';
   person.card_src = 'Untouchable.png';
   person.description = 'Не стоит прокачивать: весьма слабая и очень легко контрится, как порчей и проклятьем, так и метким глазом и точностью.';
   person.ability = 'При получении удара, шанс 15% не получить урона и активировать непоколебимость на 6 секунд (распространяется на блок).';
   person.marquee1 = `${peacock.marquee1} Основной выбор.`;
   person.marquee2 = `${peacock.marquee2}`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '10,272';
   person.hp = '58,676';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Точность'];
   person.build_1_img = 'peacock/Argus_Agony.png';
   person.build_2_img = 'peacock/Impending_Doom.png';
   person.build_3_img = 'peacock/Georges_Day_Out.png';
   person.build_4_img = 'peacock/Peacock_Burst.png';
   person.build_1_desc = 'Может наложить раскол брони.';
   person.build_2_desc = 'Может оглушить противника.';
   person.build_3_desc = 'Выпустить бомбочку.';
   person.build_4_desc = 'Прервать атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function taf() {
   person.card_name = 'Вот и всё';
   person.aka = 'Таф';
   person.card_src = 'Thats_All_Folks.png';
   person.description = 'Не для новичков, так как нужна только полностью прокачанная (включая статы). Ставят в рифты под катализаторы "Разрывные", "Последнее слово" и можно "Светлое начало". Здоровье низкое, но уклонения могут создать сложности в победе над ней.';
   person.ability = 'При получении удара, шанс 15% наложить раскол брони на 10 сек и получить 5 точности и 1 уклонение. Пока жива, шанс крита противника понижен на 75%.';
   person.marquee1 = `${peacock.marquee1} Основной выбор.`;
   person.marquee2 = `${peacock.marquee2}`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '11,271';
   person.hp = '53,357';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Точность'];
   person.build_1_img = 'peacock/Argus_Agony.png';
   person.build_2_img = 'peacock/Impending_Doom.png';
   person.build_3_img = 'peacock/Georges_Day_Out.png';
   person.build_4_img = 'peacock/Peacock_Burst.png';
   person.build_1_desc = 'Может наложить раскол брони.';
   person.build_2_desc = 'Может оглушить противника.';
   person.build_3_desc = 'Выпустить бомбочку.';
   person.build_4_desc = 'Прервать атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function freeze_frame() {
   person.card_name = 'Стоп-кадр';
   person.aka = 'Стопка';
   person.card_src = 'Freeze_Frame.png';
   person.description = 'Не стоит прокачивать: высокие ряды би не потянет, в рифтах тоже не нужна, негде использовать. Абилка хорошая, но карточка не окупает вложенные в неё ресурсы.';
   person.ability = 'Снаряды при ударе с шансом 50% накладывают замедление и иссушение на 15 сек, но снимаются если противник использует блокбастер. Когда эффекты закончатся, противник получает оглушение на 3 секунды и урон 50% от максимальной атаки Пикок.';
   person.marquee1 = `${peacock.marquee1} Основной выбор.`;
   person.marquee2 = `${peacock.marquee2}`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '11,981';
   person.hp = '68,468';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'peacock/Argus_Agony.png';
   person.build_2_img = 'peacock/Impending_Doom.png';
   person.build_3_img = 'peacock/Bandwagon_Rushdown.png';
   person.build_4_img = 'peacock/Georges_Day_Out.png';
   person.build_1_desc = 'Может наложить раскол брони.';
   person.build_2_desc = 'Может оглушить противника.';
   person.build_3_desc = 'Может снять с противника все положительные эффекты.';
   person.build_4_desc = 'Выпустить бомбочку.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dream_catcher() {
   person.card_name = 'Ловец снов';
   person.aka = 'Ловец';
   person.card_src = 'Dream_Catcher.png';
   person.description = 'Скорее фановый персонаж, так как урона на высоких рядах не хватает, и современных деф персов не победит. Но на высоких рядах можно взять билд бомбочек и использовать саппортов: внутренние миры для оглушения и баффов атаки, перезапуск для снижения кд смены персов и баффов атаки. В таком случае, призывается на уже оглушённого противника, заряжается об него точностью и бьёт бомбочками.';
   person.ability = 'Выход на поле или особый приём при ударе имеет шанс 25% оглушить цель на 6 сек (кроме тёмных стихий). Находясь рядом с оглушённым противником, каждую 1 секунду получает точность и восстанавливает 5% шкалы и 5% здоровья союзникам.';
   person.marquee1 = `${peacock.marquee1}`;
   person.marquee2 = `${peacock.marquee2} Основной выбор.`;
   person.prestige_description = `${peacock.prestige}`;
   person.prestige_activation = `${peacock.p_active}`;
   person.at = '13,152';
   person.hp = '62,247';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'peacock/Argus_Agony.png';
   person.build_2_img = 'peacock/Impending_Doom.png';
   person.build_3_img = 'peacock/Bandwagon_Rushdown.png';
   person.build_4_img = 'peacock/Georges_Day_Out.png';
   person.build_1_desc = 'Может наложить раскол брони.';
   person.build_2_desc = 'Может оглушить противника.';
   person.build_3_desc = 'Может снять с противника все положительные эффекты.';
   person.build_4_desc = 'Выпустить бомбочку.';
   person.supps = ['rerun', 'peashooter', 'inner'];
   person.addition = 'Видео игры с билдом бомбочек и с саппортами</br> <iframe width="560" height="315" src="https://www.youtube.com/embed/tk1c2PVyP_E?si=ldzxWECunWHkSvs9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   addition();
}
