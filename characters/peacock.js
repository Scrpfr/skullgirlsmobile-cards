const peacock = {
   marquee1: 'Функция - 20% шанс мгновенно откатить особый приём после его использования.',
   marquee2: 'Тусовка - 50% шанс неблокируемой атаки при смене персонажа.',
   prestige: 'Ос приёмы имеют шанс дать точность, бешенство или ускорение на 5 сек.',
   p_active: '3% за попадание снаряда.'
}

function rerun() {
   card_name = 'Перезапуск';
   aka = 'Перепопуск';
   card_src = 'Rerun.png';
   description = 'Хороший персонаж для новичков для ознакомления с Пикок. Может использоваться как саппорт из-за баффа бешенства.';
   ability = 'При смене персонажа, активный персонаж получает бешенство на 15 сек. Перезарядка призыва снижена на 50% для всех союзников.';
   marquee1 = `${peacock.marquee1}`;
   marquee2 = `${peacock.marquee2} Основной выбор.`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '8,295';
   hp = '39,188';
   atk_stats = ['Только саппорт'];
   def_stats = ['Только саппорт'];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Georges_Day_Out.png';
   build_4_img = 'peacock/Boxcar_George.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Медленная бомбочка.';
   build_4_desc = 'Быстрая бомбочка с края карты.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function sketchy() {
   card_name = 'Мульт';
   aka = 'Мульт';
   card_src = 'Sketchy.png';
   description = 'Прекрасный саппорт, достойный прокачки. До алмаза может и сможет самостоятельно сражаться, но в алмазе стоит использовать только как саппорт.';
   ability = 'Пока Пикок жива, призванные союзники выходят в бой с ускорением и иммунитетом на 10 сек, а противники с замедлением и проклятьем на 10 сек.';
   marquee1 = `${peacock.marquee1}`;
   marquee2 = `${peacock.marquee2} Основной выбор.`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '10,522';
   hp = '38,861';
   atk_stats = ['Только саппорт'];
   def_stats = ['Только саппорт'];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Whos_On_Second.png';
   build_3_img = 'peacock/Georges_Day_Out.png';
   build_4_img = 'peacock/Boxcar_George.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Сменить противника.';
   build_3_desc = 'Медленная бомбочка.';
   build_4_desc = 'Быстрая бомбочка с края карты.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function prism_plumage() {
   card_name = 'Призматическое оперение';
   aka = 'Призма';
   card_src = 'Prism_Plumage.png';
   description = 'Может использоваться как саппорт, может как дд. Снаряды дают дебаффы, которые контрят большинство стихийных модов, что очень полезно и применяемо, к тому же снаряды не только самой Призмы дают эти дебаффы, можно использовать любого персонажа. Рекомендуется прокачивать.';
   ability = 'Пока жива, все союзники призываются с 2 эффектами в зависимости от их стихии на 10 сек, и все снаряды с шансом 10% накладывают на противника дебафф в зависимости от его стихии.';
   marquee1 = `${peacock.marquee1} Основной выбор.`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '8,218';
   hp = '50,324';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Bandwagon_Rushdown.png';
   build_4_img = 'peacock/Georges_Day_Out.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Может снять с противника все положительные эффекты.';
   build_4_desc = 'Выпустить бомбочку.';
   addition = '<ul style="margin-left: 24px">Список эффектов (при призыве; при ударе снарядом):<li> Ветер: регенерация и уклонение; кровотечение</li><li> Огонь: бешенство и 3 точности; увечья</li><li> Вода: броня и автоблок; раскол брони</li><li> Свет: иммунитет и непоколебимость; обратная полярность</li><li> Тьма: шипы и ускорение; иссушение</li><li> Бесстихийные: барьер и миазмы; порча</li></ul>';
   skullgirls.replaceChildren();
   pageGenerator();
   additions();
}
function wildcard() {
   card_name = 'Джокер';
   aka = 'Джокер';
   card_src = 'Wildcard.png';
   description = 'Не такой простой персонаж как другие Пикок, но качать можно, больше фанатам Пикок. При смерти если у врага дебафф, забирает сразу 50% полных НР, что может быть полезно в некоторых ситуациях, но есть вариации получше.';
   ability = 'При использовании особого приёма, накладывает случайный дебафф на 5 сек. При поражении, если у противника есть дебафф, снижает максимальное здоровье противника на 50%.';
   marquee1 = `${peacock.marquee1} Основной выбор.`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '8,218';
   hp = '50,324';
   atk_stats = ['Атака', 'Проницание', 'Криты', 'Перез приемов'];
   def_stats = ['Не защитник'];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/BANG_BANG.png';
   build_4_img = 'peacock/Georges_Day_Out.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = '3 нажатия = 3 выстрела.';
   build_4_desc = 'Выпустить бомбочку.';
   supps = ['joy', 'peashooter', 'harlequin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function pea_shooter() {
   card_name = 'Горошница';
   aka = 'Горох';
   card_src = 'Pea_Shooter.png';
   description = 'Для серебра, очень сильный персонаж, можно также алмазить. Может также использоваться как саппорт, увеличивающий урон от снарядов. Рекомендуется качать.';
   ability = 'Увеличивает урон снарядов на 35%. Снаряды с шансом 15% накладывают раскол брони на 6 сек.';
   marquee1 = `${peacock.marquee1} Основной выбор.`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '11,079';
   hp = '41,127';
   atk_stats = ['Атака', 'Проницание', 'Криты', 'Перез приемов'];
   def_stats = ['Не защитник'];
   build_1_img = 'peacock/Boxcar_George.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Bandwagon_Rushdown.png';
   build_4_img = 'peacock/Georges_Day_Out.png';
   build_1_desc = 'Быстрая бомбочка с края карты.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Может снять с противника все положительные эффекты.';
   build_4_desc = 'Выпустить бомбочку.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function inkling() {
   card_name = 'Чернильница';
   aka = 'Инк';
   card_src = 'Inkling.png';
   description = 'Огромный урон и неблокируемые атаки, эта карточка точно стоит прокачки. В основном, требует хорошую прокачку статов, желательно максимальные 50% перезарядки приёмов, но для новичков тоже подойдёт.';
   ability = 'Бонус 25% к урону за каждого живого союзника, особые приёмы с шансом 25% неблокируемы пока живы союзники.';
   marquee1 = `${peacock.marquee1} Основной выбор.`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '9,639';
   hp = '45,716';
   atk_stats = ['Атака', 'Проницание', 'Криты', 'Перез приемов'];
   def_stats = ['Не защитник'];
   build_1_img = 'peacock/George_at_the_Air_Show.png';
   build_2_img = 'peacock/BANG_BANG.png';
   build_3_img = 'peacock/Georges_Day_Out.png';
   build_4_img = 'peacock/Boxcar_George.png';
   build_1_desc = 'Накладывает раскол брони.';
   build_2_desc = '3 нажатия = 3 выстрела.';
   build_3_desc = 'Медленная бомбочка.';
   build_4_desc = 'Быстрая бомбочка с края карты.';
   supps = ['horse', 'peashooter', 'harlequin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}

function mean_one() {
   card_name = 'Гадкая я';
   aka = 'Гринч';
   card_src = 'Mean_One.png';
   description = 'Невероятно сильный персонаж, также отличный антибаффер. Безвременные баффы превращает также в безвременные дебаффы, включая проклятье, что однозначно имбово. Подойдёт и новичкам, и опытным игрокам, вполне может подняться на высокие ряды в быстрой игре. Но обладает очень низким запасом здоровья, нужно играть очень аккуратно.';
   ability = 'Получает бешенство на 15 сек за каждый положительный эффект полученный противником. Снаряды с шансом 50% превращают положительный эффект противника в случайный отрицательный.';
   marquee1 = `${peacock.marquee1} Основной выбор.`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '12,960';
   hp = '48,039';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Bandwagon_Rushdown.png';
   build_4_img = 'peacock/Georges_Day_Out.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Может снять с противника все положительные эффекты.';
   build_4_desc = 'Выпустить бомбочку.';
   supps = ['seraph', 'peashooter', 'evergreen'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function ultraviolent() {
   card_name = 'Ультрафиолет';
   aka = 'Уфа';
   card_src = 'Ultraviolent.png';
   description = 'Очень хорошая вариация, достойная прокачки и алмаза. На высоких рядах врядли сможет проявить себя против танков, но и это золотой ранг.';
   ability = 'Удары снарядами с шансом 50% дают меткий глаз и барьер на 15 секунд. Под действием меткого глаза, снаряды наносят на 50% больше урона и дают ускорение на 10 секунд.';
   marquee1 = `${peacock.marquee1}`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '12,960';
   hp = '48,039';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Bandwagon_Rushdown.png';
   build_4_img = 'peacock/Georges_Day_Out.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Может снять с противника все положительные эффекты.';
   build_4_desc = 'Выпустить бомбочку.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function untouchable() {
   card_name = 'Неприкасаемые';
   aka = 'Неприкасайка';
   card_src = 'Untouchable.png';
   description = 'Не стоит прокачивать: весьма слабая и очень легко контрится, как порчей и проклятьем, так и метким глазом и точностью.';
   ability = 'При получении удара, шанс 15% не получить урона и активировать непоколебимость на 6 секунд (распространяется на блок).';
   marquee1 = `${peacock.marquee1}`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '10,272';
   hp = '58,676';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Точность'];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Georges_Day_Out.png';
   build_4_img = 'peacock/Peacock_Burst.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Выпустить бомбочку.';
   build_4_desc = 'Прервать атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function taf() {
   card_name = 'Вот и всё';
   aka = 'Таф';
   card_src = 'Thats_All_Folks.png';
   description = 'Не для новичков, так как нужна только полностью прокачанная (включая статы). Ставят в рифты под катализаторы "Разрывные", "Последнее слово" и можно "Светлое начало". Здоровье низкое, но уклонения могут создать сложности в победе над ней.';
   ability = 'При получении удара, шанс 15% наложить раскол брони на 10 сек и получить 5 точности и 1 уклонение. Пока жива, шанс крита противника понижен на 75%.';
   marquee1 = `${peacock.marquee1}`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '11,271';
   hp = '53,357';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Точность'];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Georges_Day_Out.png';
   build_4_img = 'peacock/Peacock_Burst.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Выпустить бомбочку.';
   build_4_desc = 'Прервать атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function primal_prodigy() {
   card_name = 'Животный дар';
   aka = 'Дар';
   card_src = 'Primal_Prodigy.png';
   description = '';
   ability = '';
   marquee1 = `${peacock.marquee1}`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '11,271';
   hp = '53,357';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Bandwagon_Rushdown.png';
   build_4_img = 'peacock/Georges_Day_Out.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Может снять с противника все положительные эффекты.';
   build_4_desc = 'Выпустить бомбочку.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function deal_breaker() {
   card_name = 'Сделка отменяется';
   aka = 'Сделка';
   card_src = 'Deal_Breaker.png';
   description = '';
   ability = '';
   marquee1 = `${peacock.marquee1}`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '15,130';
   hp = '56,045';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Bandwagon_Rushdown.png';
   build_4_img = 'peacock/Georges_Day_Out.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Может снять с противника все положительные эффекты.';
   build_4_desc = 'Выпустить бомбочку.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function freeze_frame() {
   card_name = 'Стоп-кадр';
   aka = 'Стопка';
   card_src = 'Freeze_Frame.png';
   description = 'Не стоит прокачивать: высокие ряды би не потянет, в рифтах тоже не нужна, негде использовать. Абилка хорошая, но карточка не окупает вложенные в неё ресурсы.';
   ability = 'Снаряды при ударе с шансом 50% накладывают замедление и иссушение на 15 сек, но снимаются если противник использует блокбастер. Когда эффекты закончатся, противник получает оглушение на 3 секунды и урон 50% от максимальной атаки Пикок.';
   marquee1 = `${peacock.marquee1}`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '11,981';
   hp = '68,468';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Bandwagon_Rushdown.png';
   build_4_img = 'peacock/Georges_Day_Out.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Может снять с противника все положительные эффекты.';
   build_4_desc = 'Выпустить бомбочку.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dream_catcher() {
   card_name = 'Ловец снов';
   aka = 'Ловец';
   card_src = 'Dream_Catcher.png';
   description = 'Скорее фановый персонаж, так как урона на высоких рядах не хватает, и современных деф персов не победит. Но на высоких рядах можно взять билд бомбочек и использовать саппортов: внутренние миры для оглушения и баффов атаки, перезапуск для снижения кд смены персов и баффов атаки. В таком случае, призывается на уже оглушённого противника, заряжается об него точностью и бьёт бомбочками.';
   ability = 'Выход на поле или особый приём при ударе имеет шанс 25% оглушить цель на 6 сек (кроме тёмных стихий). Находясь рядом с оглушённым противником, каждую 1 секунду получает точность и восстанавливает 5% шкалы и 5% здоровья союзникам.';
   marquee1 = `${peacock.marquee1}`;
   marquee2 = `${peacock.marquee2}`;
   prestige_description = `${peacock.prestige}`;
   prestige_activation = `${peacock.p_active}`;
   at = '13,152';
   hp = '62,247';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'peacock/Argus_Agony.png';
   build_2_img = 'peacock/Impending_Doom.png';
   build_3_img = 'peacock/Bandwagon_Rushdown.png';
   build_4_img = 'peacock/Georges_Day_Out.png';
   build_1_desc = 'Может наложить раскол брони.';
   build_2_desc = 'Может оглушить противника.';
   build_3_desc = 'Может снять с противника все положительные эффекты.';
   build_4_desc = 'Выпустить бомбочку.';
   supps = ['rerun', 'peashooter', 'inner'];
   addition = 'Видео игры с билдом бомбочек и с саппортами</br> <iframe width="560" height="315" src="https://www.youtube.com/embed/tk1c2PVyP_E?si=ldzxWECunWHkSvs9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   additions();
}