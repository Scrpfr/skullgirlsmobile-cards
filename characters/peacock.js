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

function inkling() {
   person.card_name = 'Чернильница';
   person.aka = 'Чернила';
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
   person.supps = ['joy', 'peashooter', 'harlequin'];
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
   person.supps = ['surgeon', 'peashooter', 'evergreen'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}