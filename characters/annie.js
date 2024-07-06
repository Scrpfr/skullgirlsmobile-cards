const annie = {
   marquee1: 'Красное смещение - каждый использованный бб или ос приём даёт 25% бонус урона для бб и ос приёмов до окончания комбо.',
   marquee2: 'Фиолетовое смещение - урон, наносимый противником, снижается на 20% для каждого комбо-удара до 5.',
   prestige: 'Увеличивает урон звёзд в режиме звёздного влияния.',
   p_active: '2% за каждые потраченные 1% шкалы влияния.'
}

function solar_flair() {
   card_name = 'Солнечный дар';
   aka = 'Соларка';
   card_src = 'Solar_Flair.png';
   description = 'Вполне хорошая вариация Энни, достойная прокачки до алмаза. Разработчики решили усложнить игру за неё добавив усталость, но можно активировать режим будучи под иммунитетом чтобы не получить усталость, либо снять этот эффект. Может играть как от комбо, так и от билда столпов.';
   ability = 'Шкала влияния набирается на 50% быстрее. При активации влияния, получает 5 бешенства и усталость на 5 сек, а при деактивации эти эффекты снимаются.';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '9,293';
   hp = '44,333';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'annie/Destruction_Pillar.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Crescent_Cut.png';
   build_1_desc = 'Бонус к урону при критическом ударе.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Может дать раскол защиты.';
   supps = ['honormaid', 'martial_outlaw', 'surgeon'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function star_child() {
   card_name = 'Звёздное дитя';
   aka = 'Дитя';
   card_src = 'Star_Child.png';
   description = 'Не смотря на необходимость ожидать заполнения шкалы влияния, очень хорошая вариация. Для новичков это неплохая возможность потренироваться в комбо Энни, а при заполнении шкалы, разбить блок противника ударами, либо активировать режим уже в комбо, чтобы увеличить урон блокбастерами. Алмазить можно, но урон весьма низкий, так что не в первую очередь.';
   ability = 'В режиме звёздного влияния, блокбастеры наносят на 50% больше урона, а удары противнику в блок дают шанс 10% наложить раскол защиты и замедление на 15 секунд.';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '7,392';
   hp = '44,794';
   atk_stats = ['Атака', 'Проницание', 'Криты', 'Прирост шкалы'];
   def_stats = ['Не защитник'];
   build_1_img = 'annie/Pillar_of_Creation.png';
   build_2_img = 'annie/Meteor_Strike.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Re-Entry.png';
   build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   build_2_desc = 'Низкий урон, но выше шанс крита.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Используется в комбинации.';
   supps = ['honormaid', 'martial_outlaw', 'joy'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}

function galactic_glamour() {
   card_name = 'Галактический гламур';
   aka = 'Гламур';
   card_src = 'Galactic_Glamour.png';
   description = 'Серебрянный универсал от Энни. Слабая, не стоит прокачивать.';
   ability = 'Шанс 50% при критическом ударе наложить раскол защиты на 10 сек. Шанс 50% при получении крит удара активировать автоблок на 10 сек.';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '8,640';
   hp = '52,263';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Точность', 'Сопротивление'];
   build_1_img = 'annie/Pillar_of_Creation.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/North_Knuckle.png';
   build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'При комбо более 15 ударов, даст непоколебимость.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function ninja_star() {
   card_name = 'Звезда-ниндзя';
   aka = 'Ниндзя';
   card_src = 'Ninja_Star.png';
   description = 'Однозначно хорошая вариация, которую стоит прокачивать до алмаза. Играется от комбо, можно играть на подлове, чтобы снимать баффы врага.';
   ability = 'При ударе по атакующему противнику, снимает 1 его бафф и даёт раскол защиты. Снаряды наносят доп 50% урона по противнику за каждый его дебафф.';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '9,946';
   hp = '47,021';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'annie/Pillar_of_Creation.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/North_Knuckle.png';
   build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'При комбо более 15 ударов, даст непоколебимость.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function triple_threat() {
   card_name = 'Тройная угроза';
   aka = 'Троян';
   card_src = 'Triple_Threat.png';
   description = 'Не для новичков: требует прокачанный билд столпов. При активации режима звёздного влияния, получает только один из трёх баффов, но если это неуязвимость, то персонаж будет непобедим, а наносить урон будет апперкотами с процентным уроном от здоровья противника.';
   ability = 'Даёт иммунитет, непоколебимость или неуязвимость на 9 сек при активации звёздного влияния, снимается при отключении режима. При исп особ приёма, шанс 33% сбросить таймеры баффов и получить 20% к шкале влияния.';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '7,335';
   hp = '57,485';
   atk_stats = ['Шанс крита', 'Точность', 'Перез приёмов'];
   def_stats = ['Не защитник'];
   build_1_img = 'annie/Destruction_Pillar.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Crescent_Cut.png';
   build_1_desc = 'Бонус к урону при критическом ударе.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Может дать раскол защиты.';
   build_form_name1 = 'Основной билд';
   build_form_path1 = '<img src="files/moves/annie/build1_triple_threat.jpg">';
   build_form_name2 = 'Видео геймплея';
   build_form_path2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dwwcaKTaw8A?si=KCCSLRULe170HMbq&amp;start=1508" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
   highlight(m1);
}

function cosmic_rebel() {
   card_name = 'Космическая мятежница';
   aka = 'Мятежница';
   card_src = 'Cosmic_Rebel.png';
   description = 'Не для новичков: требует прокачанный билд столпов. Схожа с Тройной угрозой, больше урон но меньше длительность неуязвимости. Здесь неуязвимость только как контра отражению урона при атаке.';
   ability = 'Каждые 10 комбо (снаряды не учитываются) накладывают метку смерти и усталость на 15 секунд. Критические удары дают иммунитет на 5 сек и неуязвимость на 1 сек. Если на противника наложена метка смерти, крит удар также увеличен на 25%.';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '11,616';
   hp = '54,874';
   atk_stats = ['Шанс крита', 'Точность', 'Перез приёмов'];
   def_stats = ['Не защитник'];
   build_1_img = 'annie/Destruction_Pillar.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Crescent_Cut.png';
   build_1_desc = 'Бонус к урону при критическом ударе.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Может дать раскол защиты.';
   build_form_name1 = 'Основной билд';
   build_form_path1 = '<img src="files/moves/annie/build1_triple_threat.jpg">';
   build_form_name2 = 'Видео геймплея';
   build_form_path2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dwwcaKTaw8A?si=walDfjJQwYzRfrUl&amp;start=1675" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
   highlight(m1);
}
function materia_girl() {
   card_name = 'Девочка-материя';
   aka = 'Материя';
   card_src = 'Materia_Girl.png';
   description = 'Шкала звёздного влияния расходуется очень быстро, так что врядли вы разыграетесь ей. Не стоит прокачивать: есть Энни лучше.';
   ability = 'При получении или нанесении удара (включая блок), шанс 10% получить +5% к шкале влияния. При активации звёздного влияния, перманентно получает точность, меткий глаз или ускорение, а также +5% к шкале бб каждую секунду. При выходе из режима, перманент баффы снимаются.';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '10,100';
   hp = '60,960';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Уровень блока'];
   def_stats = ['Не защитник'];
   build_1_img = 'annie/Pillar_of_Creation.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Re-Entry.png';
   build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Используется в комбинации.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function timeless_hero() {
   card_name = 'Вневременный кумир';
   aka = 'Кумир';
   card_src = 'Timeless_Hero.png';
   description = 'Тяжело разгоняется вначале, нужно сделать как минимум 60 комбо чтобы включилась абилка. Но бесконечная шкала звёздного влияния это имба! К тому же под бешенствами! Рекомендуется прокачивать.';
   ability = 'Каждые 20 комбо ударов дают бешенство, автоблок или регенерацию (постоянные, но снимаются при получении удара). Раз за бой при получении всех трёх баффов, полностью заполняется шкала влияния, и она становится бесконечной.';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '10,100';
   hp = '60,960';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'annie/Meteor_Strike.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Crescent_Cut.png';
   build_1_desc = 'Увеличенный шанс нанести крит.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Шанс наложить раскол защиты.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function moonstruck() {
   card_name = 'Сила луны';
   aka = 'Сейлор Мун';
   card_src = 'Moonstruck.png';
   description = 'Очень крутая вариация. При высоком шансе крита, удары будут постоянно восстанавливать шкалу звёздного влияния, она будет будто бесконечная. Иссушения будут убирать шкалу блокбастера противника, так что он не сможет ими пользоваться. Вторая абилка, как запасной вариант, также имеет место быть. Рекомендуется качать.';
   ability = 'Крит удар снарядами даёт 15% к шкале влияния и иссушение на 10 сек противнику. Раз за бой при активации звёздного влияния, если шкала полностью заполнена, воскрешает союзников и восстанавливает им здоровье от своего потерянного здоровья.';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '11,616';
   hp = '54,874';
   atk_stats = ['Шанс крита', 'Атака', 'Проницание', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'annie/Pillar_of_Creation.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Crescent_Cut.png';
   build_1_desc = 'При комбо более 30 ударов, вылечит союзников. Снаряд.';
   build_2_desc = 'Удары считаются снарядами.';
   build_3_desc = 'Удары считаются снарядами.';
   build_4_desc = 'Удары считаются снарядами.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function ageless_wonder() {
   card_name = 'Нестареющее чудо';
   aka = 'Нестарейка';
   card_src = 'Ageless_Wonder.png';
   description = 'Интересный универсал. В золоте можно ставить в защиту, но очень легко контрится. В атаке играют через билд столпов из-за баффов точности, также подстраховка в виде неупала. В целом, не стоит прокачивать: другие Энни будут лучше.';
   ability = 'Своевременный блок даёт автоблок, иммунитет и неупал на 10 сек. При блокировании снаряда любым персонажем, обездвиживает противника на 10 сек и получает 5 точности.';
   marquee1 = `${annie.marquee1} Основной выбор.`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '8,564';
   hp = '67,047';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление'];
   build_1_img = 'annie/Destruction_Pillar.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Crescent_Cut.png';
   build_1_desc = 'Бонус к урону при критическом ударе.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Может дать раскол защиты.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function model_leader() {
   card_name = 'Лидер-модель';
   aka = 'Бордель';
   card_src = 'Model_Leader.png';
   description = 'Некогда очень сильный защитник, снижающий урон до нуля и постоянно уходящий в блок. Но уже потеряла свою актуальность: идеально контрится Филией волосы на ветру. Не рекомендуется прокачивать, особенно новичкам.';
   ability = 'Получает постоянный автоблок при каждой потере 15% здоровья. Каждые 20 сек, если Энни жива, себе и союзникам снимает отрицательные эффекты и дает броню на 15 сек.';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '10,004';
   hp = '78,221';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'annie/Photo_Bop.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Annie_Burst.png';
   build_1_desc = 'Перекладывает с себя дебаффы и станит.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Прервать атаку противника.';
   addition = 'Отсылка: отсылает на персонажа Несса из покемон меч и щит. Гим лидер, использующий водяных покемонов, а как лидер, обладает своим стадионом, который водяные гим лидеры обычно наполняют водой, о чём и говорится в фразе.';
   skullgirls.replaceChildren();
   pageGenerator();
   additions();
   highlight(m2);
}
function star_shine() {
   card_name = 'Сияние звёзд';
   aka = 'Сияние';
   card_src = 'Star_Shine.png';
   description = 'Можно прокачивать из-за постоянных эффектов имммунитета и точности, также есть эффект воскрешения, что также пригодится. Но урон свой она не усиливает, поэтому некоторых танков не потянет.';
   ability = 'При игре с одним и тем же противником, каждые 10 секунд получает благославение и иммунитет(снимаются при смене любого из персонажей), а после 15 сек, получает перманентную точность (снимается при уничтожении противника).';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '11,770';
   hp = '71,117';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'annie/Pillar_of_Creation.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Re-Entry.png';
   build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Используется в комбинации.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function starlight_rose() {
   card_name = 'Звёздная роза';
   aka = 'Роза';
   card_src = 'Starlight_Rose.png';
   description = '';
   ability = '';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '10,004';
   hp = '78,221';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'annie/Pillar_of_Creation.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Re-Entry.png';
   build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Используется в комбинации.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function fire_branded() {
   card_name = 'Клейменная огнём';
   aka = 'Клеймо';
   card_src = 'Fire_Branded.png';
   description = '';
   ability = '';
   marquee1 = `${annie.marquee1}`;
   marquee2 = `${annie.marquee2}`;
   prestige_description = `${annie.prestige}`;
   prestige_activation = `${annie.p_active}`;
   at = '13,556';
   hp = '64,032';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'annie/Pillar_of_Creation.png';
   build_2_img = 'annie/Sagan_Beam.png';
   build_3_img = 'annie/Gravity_Slingshot.png';
   build_4_img = 'annie/Re-Entry.png';
   build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   build_2_desc = 'Восстановить здоровье.';
   build_3_desc = 'Шанс дать обездвиживание.';
   build_4_desc = 'Используется в комбинации.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}