const painwheel = {
   marquee1: 'Кровь - при получении крита отражает 100% урона.',
   marquee2: 'Злоба - при получении крита получает бешенство на 20 сек и броню на 5 сек.',
   prestige: 'Накладывает раскол защиты на 5 сек при использовании блокбастера.',
   p_active: '4% за каждый критический удар.'
}

function rusty() {
   person.card_name = 'Ржавый';
   person.aka = 'Ржавая';
   person.card_src = 'Rusty.png';
   person.description = 'Хороший вариант для ознакомления с Пэйнвил. Стоит прокачать но только до золота, алмазить не стоит.';
   person.ability = 'Удар с шансом 10% провоцирует кровотечение на 3 сек и превращает 3 баффа врага в кровотечение.';
   person.marquee1 = `${painwheel.marquee1}`;
   person.marquee2 = `${painwheel.marquee2} Основной выбор.`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '9,178';
   person.hp = '33,600';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'painwheel/Pinion_Dash.png';
   person.build_2_img = 'painwheel/Gae_Bolga_Stinger.png';
   person.build_3_img = 'painwheel/Death_Crawl.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Мета приём.';
   person.build_2_desc = 'Используется для комбинаций.';
   person.build_3_desc = 'Может наложить кровотоки.';
   person.build_4_desc = 'Может наложить метку смерти.';
   person.supps = ['sundae', 'icyhot', 'rerun'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function twisted_mettle() {
   person.card_name = 'Металлопрокат';
   person.aka = 'Метал';
   person.card_src = 'Twisted_Mettle.png';
   person.description = 'Очень плохая защитная карточка, но создаёт опасность критующим по ней игрокам. Прокачать можно только при неимении других дэф пэйнвил, чтобы поставить в рифты под "Не буди спящего Буэра", а также дополнительно под "Ледяная броня". Алмазить не рекомендуется, в крайнем случае обычную - шайни при большом желании. При наличии Мороза, данная карточка не нужна.';
   person.ability = 'При получении крита накладывает врагу кровотечение на 15 сек. Если у врага кровотечение, при ударе по нему шанс 50% еще вызвать кровотечение на 3 сек.';
   person.marquee1 = `${painwheel.marquee1} ТОЛЬКО Кровь.`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '8,621';
   person.hp = '40,647';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопротивление'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Buer_Thresher.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Резкая контратака.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}

function blood_drive() {
   person.card_name = 'Сестра крови';
   person.aka = 'Сестра';
   person.card_src = 'Blood_Drive.png';
   person.description = 'Вполне хороший вариант, но сложный, не для новичков. Но пятница всё-таки лучше и проще, и преступник также делает эту Пэйнвил ненужной. Не качаем.';
   person.ability = 'При ударе шанс 15% дать себе кровотечение и врагу сильное кровотечение на 10 сек. Блокбастеры и ос приёмы превращают все свои кровотечения в бешенства на 10 сек.';
   person.marquee1 = `${painwheel.marquee1}`;
   person.marquee2 = `${painwheel.marquee2} Основной выбор.`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '10,695';
   person.hp = '39,188';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'painwheel/Pinion_Dash.png';
   person.build_2_img = 'painwheel/Gae_Bolga_Stinger.png';
   person.build_3_img = 'painwheel/Death_Crawl.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Мета приём.';
   person.build_2_desc = 'Используется для комбинаций.';
   person.build_3_desc = 'Может наложить кровотоки.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function rage_appropriate() {
   person.card_name = 'Подростковый';
   person.aka = 'Подросток';
   person.card_src = 'Rage_Appropriate.png';
   person.description = 'Гибридный вариант Пэйнвил. В защиту только под катализатор Пэйнвил и ледяную броню. В атаку только под саппорт с неупал. В целом, прокачивать не стоит, балансно очень слабая.';
   person.ability = 'Активирует постоянное бешенство за потерю более 10% здоровья. Один раз за бой получит мощную регенерацию и 2 брони на 10 сек, когда здоровье опустится ниже 50%.';
   person.marquee1 = `${painwheel.marquee1} Основной выбор.`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '9,082';
   person.hp = '43,104';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопротивление'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Buer_Thresher.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Резкая контратака.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function freaky_friday() {
   person.card_name = 'Жуткая пятница';
   person.aka = 'Пятка';
   person.card_src = 'Freaky_Friday.png';
   person.description = 'Лучшая дд Пейнвил до алмазных. Можно качать до алмаза, но всё же в алмазе очень мало здоровья и много непроходимых противников, что сделает её не часто используемой.';
   person.ability = 'Критический удар накладывает кровотечение и метку смерти на 5 сек. Убийство противника с уроном больше 10% за удар даёт ускорение и 5 точности.';
   person.marquee1 = `${painwheel.marquee1}`;
   person.marquee2 = `${painwheel.marquee2} Основной выбор.`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '12,327';
   person.hp = '35,271';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'painwheel/Pinion_Dash.png';
   person.build_2_img = 'painwheel/Gae_Bolga_Stinger.png';
   person.build_3_img = 'painwheel/Hatred_Install.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Мета приём.';
   person.build_2_desc = 'Повышенный шанс крита, сочетается с абилкой.';
   person.build_3_desc = 'Может дать бешенство.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}

function firefly() {
   person.card_name = 'Светлячок';
   person.aka = 'Светляк';
   person.card_src = 'Firefly.png';
   person.description = 'Очень хорошая идея с регенерацией в блоке, но бесполезная из-за ограничения в 50% здоровья. Может постоять в защите в рифтах под катализатором "Не буди спящего Буэра", но как посредственный дэф. Не стоит качать.';
   person.ability = 'В блоке при менее 50% здоровья восстанавливает 8% здоровья и 8% шкалы бб в секунду.';
   person.marquee1 = `${painwheel.marquee1} ТОЛЬКО Кровь.`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '10,618';
   person.hp = '50,285';
   person.atk_stats = ['Здоровье', 'Атака', 'Проницание', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопротивление'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Violet_Grudge.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Может наложить сильное кровотечение.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function biting_cold() {
   person.card_name = 'Кусачий мороз';
   person.aka = 'Мороз';
   person.card_src = 'Biting_Cold.png';
   person.description = 'Популярный защитный персонаж. В основном ставится третьей, чтобы выходить последней и стоять на трупах. В рифтах стоит с катализаторами "Не буди спящего Буэра" и "Ледяная броня". Можно взять на атаку из-за пермакилла.';
   person.ability = 'Рядом с трупом получает шипы и барьер на 10 сек каждые 3 сек. При убийстве получает 5 уровней регенерации на 10 сек и +50% шкалы бб, поверженные враги не смогут воскреснуть.';
   person.marquee1 = `${painwheel.marquee1} ТОЛЬКО Кровь.`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '10,618';
   person.hp = '50,285';
   person.atk_stats = ['Основной дд билд пэйнвил'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопротивление'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Buer_Thresher.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Резкая контратака.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function buzzkill() {
   person.card_name = 'Пчёлы-убийцы';
   person.aka = 'Пчела';
   person.card_src = 'Buzzkill.png';
   person.description = 'Красивая палитра и слабая абилка. Раньше использовалась из-за сильного кровотечения, которое стакается с обычным от приёмов, и буста урона. Но Пятница переиграла пчелу в полезности, а с выходом военного преступника (георгин), которая позволяет просто находясь в команде накладывать сильное кровотечение любым активным персонажем, пчела полностью забылась и никому не нужна.';
   person.ability = 'При ударе шанс 10% наложить сильное кровотечение на 10 сек, а когда здоровье противника опускается ниже 25%, получает постоянное бешенство.';
   person.marquee1 = `${painwheel.marquee1}`;
   person.marquee2 = `${painwheel.marquee2} Основной выбор`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '14,343';
   person.hp = '41,165';
   person.atk_stats = ['Точность', 'Атака', 'Проницание', 'Криты'];
   person.def_stats = ['В дд статах'];
   person.build_1_img = 'painwheel/Pinion_Dash.png';
   person.build_2_img = 'painwheel/Gae_Bolga_Stinger.png';
   person.build_3_img = 'painwheel/Death_Crawl.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Мета приём.';
   person.build_2_desc = 'Используется для комбинаций.';
   person.build_3_desc = 'Может наложить кровотоки.';
   person.build_4_desc = 'Может наложить метку смерти.';
   person.supps = ['joy', 'honormaid', 'persona'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function raw_nerv() {
   person.card_name = 'Оголённый нерв';
   person.aka = 'Нерв';
   person.card_src = 'Raw_Nerv.png';
   person.description = 'Очередная бесполезная вариация. Единственный плюс - это возможность наложить постоянную (несъемную) метку смерти, но за счёт здоровья (или жизни) нерва, к тому же напрасно если у врага иммунитет или сработает сопротивление. Да и метка смерти не стоит таких действий, хотя перманентная и временная складываются. Прокачивать не стоит эту вариацию.';
   person.ability = 'Когда здоровье становится ниже 50%, получает постоянные бешенство и ускорение. Когда здоровье становится ниже 25%, накладывает постоянную метку смерти противнику.';
   person.marquee1 = `${painwheel.marquee1}`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '12,480';
   person.hp = '45,716';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Только саппорт'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Buer_Thresher.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Резкая контратака.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function grim_fan() {
   person.card_name = 'Мрачное фанданго';
   person.aka = 'Фанта';
   person.card_src = 'Grim_Fan.png';
   person.description = 'Можно получить только из ивентовых реликвий света. Не рекомендуется прокачивать: слабая. Но можно ставить на защиту в рифтах под Буэра.';
   person.ability = 'Раз за матч когда здоровье становится ниже 50%, получает непоколебимость и иммунитет на 15 сек. Когда непоколебимость заканчивается, возрождает всех союзников с 30% НР.';
   person.marquee1 = `${painwheel.marquee1}`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '12,480';
   person.hp = '45,716';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Атака'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Buer_Thresher.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Резкая контратака.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}

function web_crawler() {
   person.card_name = 'Паутинник';
   person.aka = 'Паутина';
   person.card_src = 'Web_Crawler.png';
   person.description = 'Ещё новая карточка и не особо проверенная, но абилка звучит слабовато и урона маловато.';
   person.ability = 'При нахождении в режиме полёта в течении полторы секунды, получает меткий глаз на 10 сек и даёт раскол защиты на 8 сек. Если на противнике раскол защиты, удары вплотную с шансом 15% снимают бафф противника и дают вам уклонение на 10 сек.';
   person.marquee1 = `${painwheel.marquee1}`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '12,384';
   person.hp = '58,676';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Gae_Bolga_Stinger.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Повышенный шанс крита.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function fly_trap() {
   person.card_name = 'Мухоловка';
   person.aka = 'Муха';
   person.card_src = 'Fly_Trap.png';
   person.description = 'Простая и эффективная универсальная вариация. В атаке, рекомендуется разблокировать престиж чтобы пробивать блоки, и высокий шанс крита, из-за чего не получится играть против других Пэйнов. Также очень мало здоровья, можно погибнуть в блоке, если бы не регены. Рекомендуют качать только кровь: с ней можно играть хоть в атаке, хоть в защите. Злоба контрится в защите, а в атаке вы не можете себе позволить получать урон, тем более критический.';
   person.ability = 'Бонус к урону 25% за каждую смерть любого персонажа в бою. При убийстве, получает 5 регенераций, безвременных.';
   person.marquee1 = `${painwheel.marquee1} Основной выбор.`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '16,743';
   person.hp = '48,020';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Атака'];
   person.build_1_img = 'painwheel/Death_Crawl.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Gae_Bolga_Stinger.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Может наложить кровотоки.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Повышенный шанс крита.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function neuromancer() {
   person.card_name = 'Нейромант';
   person.aka = 'Нейро';
   person.card_src = 'Neuromancer.png';
   person.description = 'Балансно сломанный персонаж, просто бьёте шипами в блок и почти моментально заряжается бб3 которая и так неблокируемая, а потом по-новой. Такая же тактика работает и в защите. В добавок, отражает получаемый критический урон, а рекомендуется качать только кровь, зато престиж не рекомендуют, он нужен для лома блока, что во вред абилке.';
   person.ability = 'Вампирит 10% шкалы блокбастера при ударе в блок, если удары не блокбастера. 15% урона блокбастерами переносятся на союзников противника.';
   person.marquee1 = `${painwheel.marquee1} Основной выбор.`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '14,554';
   person.hp = '53,338';
   person.atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Атака'];
   person.build_1_img = 'painwheel/Buer_Overdrive.png';
   person.build_2_img = 'painwheel/Pinion_Dash.png';
   person.build_3_img = 'painwheel/Gae_Bolga_Stinger.png';
   person.build_4_img = 'painwheel/Fracture_Reaper.png';
   person.build_1_desc = 'Снижает шкалу блокбастеров врага.';
   person.build_2_desc = 'Мета приём.';
   person.build_3_desc = 'Повышенный шанс крита, используют в блок для зарядки бб.';
   person.build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}

function true_ovagva() {
   person.card_name = 'Кийоко Огава';
   person.aka = 'Овагва';
   person.card_src = 'true_ovagva.png';
   person.description = 'Легенда ру сгм комьюнити, Кийоко Огава. Самая настоящая, Тру Овагва 2022.';
   person.ability = 'Периодически наматывается на проблемы, хоть и не хочет этого. Решать проблемы также не хочет. Иногда не может нормально изложить свои мысли, из-за чего часто также наматывается на проблемы.';
   person.marquee1 = `${painwheel.marquee1}`;
   person.marquee2 = `${painwheel.marquee2}`;
   person.prestige_description = `${painwheel.prestige}`;
   person.prestige_activation = `${painwheel.p_active}`;
   person.at = '0';
   person.hp = 'терпила';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Не защитница'];
   person.build_1_img = 'painwheel/Smile.png';
   person.build_2_img = 'painwheel/Painwheel_Burst.png';
   person.build_3_img = 'cerebella/Medici_Muscle.png';
   person.build_4_img = 'cerebella/Grab_Bag.png';
   person.build_1_desc = 'Несъёмная маска клоуна.';
   person.build_2_desc = 'Блаженная.';
   person.build_3_desc = 'Полосы норм ты чё.';
   person.build_4_desc = 'Бесконечное терпение.';
   skullgirls.replaceChildren();
   pageGenerator();
}
