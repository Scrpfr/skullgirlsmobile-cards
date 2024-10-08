const painwheel = {
   marquee1: 'Кровь - при получении крита отражает 100% урона.',
   marquee2: 'Злоба - при получении крита получает бешенство на 20 сек и броню на 5 сек.',
   prestige: 'Накладывает раскол защиты на 5 сек при использовании блокбастера.',
   p_active: '4% за каждый критический удар.'
}

function rusty() {
   card_name = 'Ржавый';
   aka = 'Ржавая';
   card_src = 'Rusty.png';
   description = 'Хороший вариант для ознакомления с Пэйнвил. Стоит прокачать но только до золота, алмазить не стоит. Если нужен более мощный персонаж, превращающий баффы врага в дебаффы, то есть Гадкая (Пикок).';
   ability = 'Удар с шансом 10% провоцирует кровотечение на 3 сек и превращает 3 баффа врага в кровотечение.';
   marquee1 = `${painwheel.marquee1}`;
   marquee2 = `${painwheel.marquee2} Основной выбор.`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '9,178';
   hp = '33,600';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'painwheel/Pinion_Dash.png';
   build_2_img = 'painwheel/Gae_Bolga_Stinger.png';
   build_3_img = 'painwheel/Death_Crawl.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Мета приём.';
   build_2_desc = 'Используется для комбинаций.';
   build_3_desc = 'Может наложить кровотоки.';
   build_4_desc = 'Может наложить метку смерти.';
   supps = ['sundae', 'icyhot', 'rerun'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function twisted_mettle() {
   card_name = 'Металлопрокат';
   aka = 'Метал';
   card_src = 'Twisted_Mettle.png';
   description = 'Очень плохая защитная карточка, но создаёт опасность критующим по ней игрокам. Прокачать можно только при неимении других дэф пэйнвил, чтобы поставить в рифты под "Не буди спящего Буэра", а также дополнительно под "Ледяная броня". Алмазить не рекомендуется, в крайнем случае обычную - шайни при большом желании. При наличии Мороза, данная карточка не нужна.';
   ability = 'При получении крита накладывает врагу кровотечение на 15 сек. Если у врага кровотечение, при ударе по нему шанс 50% еще вызвать кровотечение на 3 сек.';
   marquee1 = `${painwheel.marquee1} ТОЛЬКО Кровь.`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '8,621';
   hp = '40,647';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопротивление'];
   build_1_img = 'painwheel/Buer_Overdrive.png';
   build_2_img = 'painwheel/Pinion_Dash.png';
   build_3_img = 'painwheel/Buer_Thresher.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Снижает шкалу блокбастеров врага.';
   build_2_desc = 'Мета приём.';
   build_3_desc = 'Резкая контратака.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}

function blood_drive() {
   card_name = 'Сестра крови';
   aka = 'Сестра';
   card_src = 'Blood_Drive.png';
   description = 'Вполне хороший вариант, но сложный, не для новичков. Но пятница всё-таки лучше и проще, и преступник также делает эту Пэйнвил ненужной. Не качаем.';
   ability = 'При ударе шанс 15% дать себе кровотечение и врагу сильное кровотечение на 10 сек. Блокбастеры и ос приёмы превращают все свои кровотечения в бешенства на 10 сек.';
   marquee1 = `${painwheel.marquee1}`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '10,695';
   hp = '39,188';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'painwheel/Pinion_Dash.png';
   build_2_img = 'painwheel/Gae_Bolga_Stinger.png';
   build_3_img = 'painwheel/Death_Crawl.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Мета приём.';
   build_2_desc = 'Используется для комбинаций.';
   build_3_desc = 'Может наложить кровотоки.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function rage_appropriate() {
   card_name = 'Подростковый';
   aka = 'Подросток';
   card_src = 'Rage_Appropriate.png';
   description = 'Даже очень хорошая серебряная пыня, но золотить её уже врядли стоит, алмазить точно не стоит. В серебре будет служить как в атаке, так и в защите.';
   ability = 'Активирует постоянное бешенство за потерю более 10% здоровья (включая блок). Каждые 10 комбо получает мощную регенерацию и 2 брони на 10 сек.';
   marquee1 = `${painwheel.marquee1}`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '9,082';
   hp = '43,104';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопротивление'];
   build_1_img = 'painwheel/Buer_Overdrive.png';
   build_2_img = 'painwheel/Pinion_Dash.png';
   build_3_img = 'painwheel/Buer_Thresher.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Снижает шкалу блокбастеров врага.';
   build_2_desc = 'Мета приём.';
   build_3_desc = 'Резкая контратака.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function freaky_friday() {
   card_name = 'Жуткая пятница';
   aka = 'Пятка';
   card_src = 'Freaky_Friday.png';
   description = 'Лучшая дд Пейнвил до алмазных. Можно качать до алмаза, но всё же в алмазе очень мало здоровья и много непроходимых противников, что сделает её не часто используемой.';
   ability = 'Критический удар накладывает кровотечение и метку смерти на 5 сек. Убийство противника с уроном больше 10% за удар даёт ускорение и 5 точности.';
   marquee1 = `${painwheel.marquee1}`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '12,327';
   hp = '35,271';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'painwheel/Pinion_Dash.png';
   build_2_img = 'painwheel/Gae_Bolga_Stinger.png';
   build_3_img = 'painwheel/Hatred_Install.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Мета приём.';
   build_2_desc = 'Повышенный шанс крита, сочетается с абилкой.';
   build_3_desc = 'Может дать бешенство.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}

function firefly() {
   card_name = 'Светлячок';
   aka = 'Светляк';
   card_src = 'Firefly.png';
   description = 'Очень хорошая идея с регенерацией в блоке, но бесполезная из-за ограничения в 50% здоровья. Может постоять в защите в рифтах под катализатором "Не буди спящего Буэра", но как посредственный дэф. Не стоит качать.';
   ability = 'В блоке при менее 50% здоровья восстанавливает 8% здоровья и 8% шкалы бб в секунду.';
   marquee1 = `${painwheel.marquee1} ТОЛЬКО Кровь.`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '10,618';
   hp = '50,285';
   atk_stats = ['Здоровье', 'Атака', 'Проницание', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопротивление'];
   build_1_img = 'painwheel/Buer_Overdrive.png';
   build_2_img = 'painwheel/Pinion_Dash.png';
   build_3_img = 'painwheel/Violet_Grudge.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Снижает шкалу блокбастеров врага.';
   build_2_desc = 'Мета приём.';
   build_3_desc = 'Может наложить сильное кровотечение.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function biting_cold() {
   card_name = 'Кусачий мороз';
   aka = 'Мороз';
   card_src = 'Biting_Cold.png';
   description = 'Популярный защитный персонаж. В основном ставится третьей, чтобы выходить последней и стоять на трупах. В рифтах стоит с катализаторами "Не буди спящего Буэра" и "Ледяная броня". Можно взять на атаку из-за пермакилла.';
   ability = 'Рядом с трупом получает шипы и барьер на 10 сек каждые 3 сек. При убийстве получает 5 уровней регенерации на 10 сек и +50% шкалы бб, поверженные враги не смогут воскреснуть.';
   marquee1 = `${painwheel.marquee1} ТОЛЬКО Кровь.`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '10,618';
   hp = '50,285';
   atk_stats = ['Основной дд билд пэйнвил'];
   def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопротивление'];
   build_1_img = 'painwheel/Buer_Overdrive.png';
   build_2_img = 'painwheel/Pinion_Dash.png';
   build_3_img = 'painwheel/Buer_Thresher.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Снижает шкалу блокбастеров врага.';
   build_2_desc = 'Мета приём.';
   build_3_desc = 'Резкая контратака.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function buzzkill() {
   card_name = 'Пчёлы-убийцы';
   aka = 'Пчела';
   card_src = 'Buzzkill.png';
   description = 'Огромный урон и бешенства за низкое здоровье противника, также сильное кровотечение, которое складывается с обычными кровотечениями от приёмов. Но качать её не стоит: лучше отдать ресурсы более полезным персонажам, так как Пэйнвил сама по себе не является сильным персонажем.';
   ability = 'При ударе шанс 10% наложить сильное кровотечение на 10 сек, а когда здоровье противника опускается ниже 25%, получает постоянное бешенство каждый раз.';
   marquee1 = `${painwheel.marquee1}`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '14,343';
   hp = '41,165';
   atk_stats = ['Точность', 'Атака', 'Проницание', 'Криты'];
   def_stats = ['В дд статах'];
   build_1_img = 'painwheel/Pinion_Dash.png';
   build_2_img = 'painwheel/Gae_Bolga_Stinger.png';
   build_3_img = 'painwheel/Death_Crawl.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Мета приём.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Может наложить кровотоки.';
   build_4_desc = 'Может наложить метку смерти.';
   supps = ['joy', 'honormaid', 'persona'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}
function raw_nerv() {
   card_name = 'Оголённый нерв';
   aka = 'Нерв';
   card_src = 'Raw_Nerv.png';
   description = 'Хороший урон, бешенства, восстановление здоровья, неупал, который срабатывает сам при потере здоровья. Одна из лучших Пейнвил среди всех пейнвил.';
   ability = 'Когда здоровье становится ниже 50%, получает неупал на 15 сек и накладывает постоянную метку смерти противнику. Под действием неупала, шанс 10% при нанесении удара получить бешенство и восстановить здоровье от 50% урона.';
   marquee1 = `${painwheel.marquee1}`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '12,480';
   hp = '45,716';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Точность'];
   build_1_img = 'painwheel/Pinion_Dash.png';
   build_2_img = 'painwheel/Gae_Bolga_Stinger.png';
   build_3_img = 'painwheel/Death_Crawl.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Мета приём.';
   build_2_desc = 'Повышенный шанс крита.';
   build_3_desc = 'Может наложить кровотоки.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function grim_fan() {
   card_name = 'Мрачное фанданго';
   aka = 'Фанта';
   card_src = 'Grim_Fan.png';
   description = 'Можно получить только из ивентовых реликвий света. Не рекомендуется прокачивать: слабая. Но можно ставить на защиту в рифтах под Буэра.';
   ability = 'Раз за матч когда здоровье становится ниже 50%, получает непоколебимость и иммунитет на 15 сек. Когда непоколебимость заканчивается, возрождает всех союзников с 30% НР.';
   marquee1 = `${painwheel.marquee1}`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '12,480';
   hp = '45,716';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Атака'];
   build_1_img = 'painwheel/Buer_Overdrive.png';
   build_2_img = 'painwheel/Pinion_Dash.png';
   build_3_img = 'painwheel/Buer_Thresher.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Снижает шкалу блокбастеров врага.';
   build_2_desc = 'Мета приём.';
   build_3_desc = 'Резкая контратака.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}

function web_crawler() {
   card_name = 'Паутинник';
   aka = 'Паутина';
   card_src = 'Web_Crawler.png';
   description = 'Не стоит прокачивать: мало урона. Другие Пыни эффективнее.';
   ability = 'При нахождении в режиме полёта в течении полторы секунды, получает меткий глаз на 10 сек и даёт раскол защиты на 8 сек. Если на противнике раскол защиты, удары вплотную с шансом 15% снимают бафф противника и дают вам уклонение на 10 сек.';
   marquee1 = `${painwheel.marquee1}`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '12,384';
   hp = '58,676';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'painwheel/Buer_Overdrive.png';
   build_2_img = 'painwheel/Pinion_Dash.png';
   build_3_img = 'painwheel/Gae_Bolga_Stinger.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Снижает шкалу блокбастеров врага.';
   build_2_desc = 'Мета приём.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function fly_trap() {
   card_name = 'Мухоловка';
   aka = 'Муха';
   card_src = 'Fly_Trap.png';
   description = 'Простая и эффективная универсальная вариация. В атаке, рекомендуется разблокировать престиж чтобы пробивать блоки, и высокий шанс крита, из-за чего не получится играть против других Пэйнов. Также очень мало здоровья, можно погибнуть в блоке, если бы не регены. Рекомендуют качать только кровь: с ней можно играть хоть в атаке, хоть в защите. Злоба контрится в защите, а в атаке вы не можете себе позволить получать урон, тем более критический.';
   ability = 'Бонус к урону 25% за каждую смерть любого персонажа в бою. При убийстве, получает 5 регенераций, безвременных.';
   marquee1 = `${painwheel.marquee1} Основной выбор.`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '16,743';
   hp = '48,020';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Атака'];
   build_1_img = 'painwheel/Death_Crawl.png';
   build_2_img = 'painwheel/Pinion_Dash.png';
   build_3_img = 'painwheel/Gae_Bolga_Stinger.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Может наложить кровотоки.';
   build_2_desc = 'Мета приём.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function neuromancer() {
   card_name = 'Нейромант';
   aka = 'Нейро';
   card_src = 'Neuromancer.png';
   description = 'Балансно сломанный персонаж, просто бьёте шипами в блок и почти моментально заряжается бб3 которая и так неблокируемая, а потом по-новой. Такая же тактика работает и в защите. В добавок, отражает получаемый критический урон, а рекомендуется качать только кровь, зато престиж не рекомендуют, он нужен для лома блока, что во вред абилке.';
   ability = 'Вампирит 10% шкалы блокбастера при ударе в блок, если удары не блокбастера. 15% урона блокбастерами переносятся на союзников противника.';
   marquee1 = `${painwheel.marquee1} Основной выбор.`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '14,554';
   hp = '53,338';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Атака'];
   build_1_img = 'painwheel/Buer_Overdrive.png';
   build_2_img = 'painwheel/Pinion_Dash.png';
   build_3_img = 'painwheel/Gae_Bolga_Stinger.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Снижает шкалу блокбастеров врага.';
   build_2_desc = 'Мета приём.';
   build_3_desc = 'Повышенный шанс крита, используют в блок для зарядки бб.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function masked_menace() {
   card_name = 'Угроза в маске';
   aka = 'Угроза';
   card_src = 'Masked_Menace.png';
   description = '';
   ability = '';
   marquee1 = `${painwheel.marquee1}`;
   marquee2 = `${painwheel.marquee2}`;
   prestige_description = `${painwheel.prestige}`;
   prestige_activation = `${painwheel.p_active}`;
   at = '12,384';
   hp = '58,676';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'painwheel/Buer_Overdrive.png';
   build_2_img = 'painwheel/Pinion_Dash.png';
   build_3_img = 'painwheel/Gae_Bolga_Stinger.png';
   build_4_img = 'painwheel/Fracture_Reaper.png';
   build_1_desc = 'Снижает шкалу блокбастеров врага.';
   build_2_desc = 'Мета приём.';
   build_3_desc = 'Повышенный шанс крита.';
   build_4_desc = 'Может наложить метку смерти.';
   skullgirls.replaceChildren();
   pageGenerator();
}