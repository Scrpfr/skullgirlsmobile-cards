const annie = {
   marquee1: 'Красное смещение - каждый использованный бб или ос приём даёт 25% бонус урона для бб и ос приёмов до окончания комбо.',
   marquee2: 'Фиолетовое смещение - урон, наносимый противником, снижается на 20% для каждого комбо-удара до 5.',
   prestige: 'Увеличивает урон звёзд в режиме звёздного влияния.',
   p_active: '2% за каждые потраченные 1% шкалы влияния.'
}

function solar_flair() {
   person.card_name = 'Солнечный дар';
   person.aka = 'Соларка';
   person.card_src = 'Solar_Flair.png';
   person.description = 'Вполне хорошая вариация Энни, достойная прокачки до алмаза. Разработчики решили усложнить игру за неё добавив усталость, но можно активировать режим будучи под иммунитетом чтобы не получить усталость, либо снять этот эффект. Может играть как от комбо, так и от билда столпов.';
   person.ability = 'Шкала влияния набирается на 50% быстрее. При активации влияния, получает 5 бешенства и усталость на 5 сек, а при деактивации эти эффекты снимаются.';
   person.marquee1 = `${annie.marquee1} ЕДИНСТВЕННЫЙ выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '9,293';
   person.hp = '44,333';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'annie/Destruction_Pillar.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Crescent_Cut.png';
   person.build_1_desc = 'Бонус к урону при критическом ударе.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'Может дать раскол защиты.';
   person.supps = ['honormaid', 'martial_outlaw', 'surgeon'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function star_child() {
   person.card_name = 'Звёздное дитя';
   person.aka = 'Дитя';
   person.card_src = 'Star_Child.png';
   person.description = 'Не смотря на необходимость ожидать заполнения шкалы влияния, очень хорошая вариация. Для новичков это неплохая возможность потренироваться в комбо Энни, а при заполнении шкалы, разбить блок противника ударами, либо активировать режим уже в комбо, чтобы увеличить урон блокбастерами. Алмазить можно, но урон весьма низкий, так что не в первую очередь.';
   person.ability = 'В режиме звёздного влияния, блокбастеры наносят на 50% больше урона, а удары противнику в блок дают шанс 10% наложить раскол защиты и замедление на 15 секунд.';
   person.marquee1 = `${annie.marquee1} ЕДИНСТВЕННЫЙ выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '7,392';
   person.hp = '44,794';
   person.atk_stats = ['Атака', 'Проницание', 'Криты', 'Прирост шкалы'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'annie/Pillar_of_Creation.png';
   person.build_2_img = 'annie/Meteor_Strike.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Re-Entry.png';
   person.build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   person.build_2_desc = 'Низкий урон, но выше шанс крита.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'Используется в комбинации.';
   person.supps = ['honormaid', 'martial_outlaw', 'joy'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}

function galactic_glamour() {
   person.card_name = 'Галактический гламур';
   person.aka = 'Гламур';
   person.card_src = 'Galactic_Glamour.png';
   person.description = 'Серебрянный универсал от Энни. Слабая, не стоит прокачивать.';
   person.ability = 'Шанс 50% при критическом ударе наложить раскол защиты на 10 сек. Шанс 50% при получении крит удара активировать автоблок на 10 сек.';
   person.marquee1 = `${annie.marquee1}`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '8,640';
   person.hp = '52,263';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Точность', 'Сопротивление'];
   person.build_1_img = 'annie/Pillar_of_Creation.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/North_Knuckle.png';
   person.build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'При комбо более 15 ударов, даст непоколебимость.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function ninja_star() {
   person.card_name = 'Звезда-ниндзя';
   person.aka = 'Ниндзя';
   person.card_src = 'Ninja_Star.png';
   person.description = 'Однозначно хорошая вариация, которую стоит прокачивать до алмаза. Играется от комбо, можно играть на подлове, чтобы снимать баффы врага.';
   person.ability = 'При ударе по атакующему противнику, снимает 1 его бафф и даёт раскол защиты. Снаряды наносят доп 50% урона по противнику за каждый его дебафф.';
   person.marquee1 = `${annie.marquee1} ЕДИНСТВЕННЫЙ выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '9,946';
   person.hp = '47,021';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'annie/Pillar_of_Creation.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/North_Knuckle.png';
   person.build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'При комбо более 15 ударов, даст непоколебимость.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function triple_threat() {
   person.card_name = 'Тройная угроза';
   person.aka = 'Троян';
   person.card_src = 'Triple_Threat.png';
   person.description = 'Не для новичков: требует прокачанный билд столпов. При активации режима звёздного влияния, получает только один из трёх баффов, но если это неуязвимость, то персонаж будет непобедим, а наносить урон будет апперкотами с процентным уроном от здоровья противника.';
   person.ability = 'Даёт иммунитет, непоколебимость или неуязвимость на 9 сек при активации звёздного влияния, снимается при отключении режима. При исп особ приёма, шанс 33% сбросить таймеры баффов и получить 20% к шкале влияния.';
   person.marquee1 = `${annie.marquee1} ЕДИНСТВЕННЫЙ выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '7,335';
   person.hp = '57,485';
   person.atk_stats = ['Шанс крита', 'Точность', 'Перез приёмов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'annie/Destruction_Pillar.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Crescent_Cut.png';
   person.build_1_desc = 'Бонус к урону при критическом ударе.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'Может дать раскол защиты.';
   person.build_form_name1 = 'Основной билд';
   person.build_form_path1 = '<img src="files/moves/annie/build1_triple_threat.jpg">';
   person.build_form_name2 = 'Видео геймплея';
   person.build_form_path2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dwwcaKTaw8A?si=KCCSLRULe170HMbq&amp;start=1508" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}

function cosmic_rebel() {
   person.card_name = 'Космическая мятежница';
   person.aka = 'Мятежница';
   person.card_src = 'Cosmic_Rebel.png';
   person.description = 'Не для новичков: требует прокачанный билд столпов. Схожа с Тройной угрозой, больше урон но меньше длительность неуязвимости. Здесь неуязвимость только как контра отражению урона при атаке.';
   person.ability = 'Каждые 10 комбо (снаряды не учитываются) накладывают метку смерти и усталость на 15 секунд. Критические удары дают иммунитет на 5 сек и неуязвимость на 1 сек. Если на противника наложена метка смерти, крит удар также увеличен на 25%.';
   person.marquee1 = `${annie.marquee1} ЕДИНСТВЕННЫЙ выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '11,616';
   person.hp = '54,874';
   person.atk_stats = ['Шанс крита', 'Точность', 'Перез приёмов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'annie/Destruction_Pillar.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Crescent_Cut.png';
   person.build_1_desc = 'Бонус к урону при критическом ударе.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'Может дать раскол защиты.';
   person.build_form_name1 = 'Основной билд';
   person.build_form_path1 = '<img src="files/moves/annie/build1_triple_threat.jpg">';
   person.build_form_name2 = 'Видео геймплея';
   person.build_form_path2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dwwcaKTaw8A?si=walDfjJQwYzRfrUl&amp;start=1675" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}
function materia_girl() {
   person.card_name = 'Девочка-материя';
   person.aka = 'Материя';
   person.card_src = 'Materia_Girl.png';
   person.description = 'Не самый хороший персонаж, так как вынужден получать урон в блок. И шкала звёздного влияния расходуется очень быстро. Не стоит прокачивать: есть Энни лучше.';
   person.ability = 'При получении удара (включая блок), шанс 10% получить +15% к шкале влияния. При активации звёздного влияния, перманентно получает бешенство, регенерацию, точность, автоблок или ускорение, а также +5% к шкале бб каждую секунду. При выходе из режима, перманент баффы снимаются.';
   person.marquee1 = `${annie.marquee1} ЕДИНСТВЕННЫЙ выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '10,100';
   person.hp = '60,960';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Уровень блока'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'annie/Pillar_of_Creation.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Re-Entry.png';
   person.build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'Используется в комбинации.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function timeless_hero() {
   person.card_name = 'Вневременный кумир';
   person.aka = 'Кумир';
   person.card_src = 'Timeless_Hero.png';
   person.description = 'Тяжело разгоняется вначале, нужно сделать как минимум 60 комбо чтобы включилась абилка. Но бесконечная шкала звёздного влияния это имба! К тому же под бешенствами! Рекомендуется прокачивать.';
   person.ability = 'Каждые 20 комбо ударов дают бешенство, автоблок или регенерацию (постоянные, но снимаются при получении удара). Раз за бой при получении всех трёх баффов, полностью заполняется шкала влияния, и она становится бесконечной.';
   person.marquee1 = `${annie.marquee1} ЕДИНСТВЕННЫЙ выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '10,100';
   person.hp = '60,960';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'annie/Meteor_Strike.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Crescent_Cut.png';
   person.build_1_desc = 'Увеличенный шанс нанести крит.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'Шанс наложить раскол защиты.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function moonstruck() {
   person.card_name = 'Сила луны';
   person.aka = 'Сейлор Мун';
   person.card_src = 'Moonstruck.png';
   person.description = 'Очень крутая вариация. При высоком шансе крита, удары будут постоянно восстанавливать шкалу звёздного влияния, она будет будто бесконечная. Иссушения будут убирать шкалу блокбастера противника, так что он не сможет ими пользоваться. Вторая абилка, как запасной вариант, также имеет место быть. Рекомендуется качать.';
   person.ability = 'Крит удар снарядами даёт 15% к шкале влияния и иссушение на 10 сек противнику. Раз за бой при активации звёздного влияния, если шкала полностью заполнена, воскрешает союзников и восстанавливает им здоровье от своего потерянного здоровья.';
   person.marquee1 = `${annie.marquee1} ЕДИНСТВЕННЫЙ выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '11,616';
   person.hp = '54,874';
   person.atk_stats = ['Шанс крита', 'Атака', 'Проницание', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'annie/Pillar_of_Creation.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Crescent_Cut.png';
   person.build_1_desc = 'При комбо более 30 ударов, вылечит союзников. Снаряд.';
   person.build_2_desc = 'Удары считаются снарядами.';
   person.build_3_desc = 'Удары считаются снарядами.';
   person.build_4_desc = 'Удары считаются снарядами.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function ageless_wonder() {
   person.card_name = 'Нестареющее чудо';
   person.aka = 'Нестарейка';
   person.card_src = 'Ageless_Wonder.png';
   person.description = 'Интересный универсал. В золоте можно ставить в защиту, но очень легко контрится. В атаке играют через билд столпов из-за баффов точности, также подстраховка в виде неупала. В целом, не стоит прокачивать: другие Энни будут лучше.';
   person.ability = 'Своевременный блок даёт автоблок, иммунитет и неупал на 10 сек. При блокировании снаряда любым персонажем, обездвиживает противника на 10 сек и получает 5 точности.';
   person.marquee1 = `${annie.marquee1} Основной выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '8,564';
   person.hp = '67,047';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление'];
   person.build_1_img = 'annie/Destruction_Pillar.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Crescent_Cut.png';
   person.build_1_desc = 'Бонус к урону при критическом ударе.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'Может дать раскол защиты.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function model_leader() {
   person.card_name = 'Лидер-модель';
   person.aka = 'Бордель';
   person.card_src = 'Model_Leader.png';
   person.description = 'Некогда очень сильный защитник, снижающий урон до нуля и постоянно уходящий в блок. Но уже потеряла свою актуальность: идеально контрится Филией волосы на ветру. Не рекомендуется прокачивать, особенно новичкам.';
   person.ability = 'Получает постоянный автоблок при каждой потере 15% здоровья. Каждые 20 сек, если Энни жива, себе и союзникам снимает отрицательные эффекты и дает броню на 15 сек.';
   person.marquee1 = `${annie.marquee1}`;
   person.marquee2 = `${annie.marquee2} ТОЛЬКО фиол.`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '10,004';
   person.hp = '78,221';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'annie/Photo_Bop.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Annie_Burst.png';
   person.build_1_desc = 'Перекладывает с себя дебаффы и станит.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'Прервать атаку противника.';
   person.addition = 'Отсылка: отсылает на персонажа Несса из покемон меч и щит. Гим лидер, использующий водяных покемонов, а как лидер, обладает своим стадионом, который водяные гим лидеры обычно наполняют водой, о чём и говорится в фразе.';
   skullgirls.replaceChildren();
   pageGenerator();
   addition();
}
function star_shine() {
   person.card_name = 'Сияние звёзд';
   person.aka = 'Сияние';
   person.card_src = 'Star_Shine.png';
   person.description = 'В теории, очень крутая вариация: бесконечный иммунитет, бесконечная точность, которая даёт 100% шанса крита и деактивирует срабатывание абилки врага. Но слишком долго придётся ждать, к тому же есть Волосы на ветру (Филия), которая также с бесконечной точностью, при этом проще активирует и сама дешевле стоит. Качают только Энни мейнеры.';
   person.ability = 'При игре с одним и тем же противником более 20 сек, получает иммунитет и благословение, которые снимаются при смене одного из персонажей. После 30 сек в качестве активного персонажа, получает перманентную точность, снимается при смене персонажа.';
   person.marquee1 = `${annie.marquee1} ЕДИНСТВЕННЫЙ выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '11,770';
   person.hp = '71,117';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'annie/Pillar_of_Creation.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Re-Entry.png';
   person.build_1_desc = 'При комбо более 30 ударов, вылечит союзников.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Шанс дать обездвиживание.';
   person.build_4_desc = 'Используется в комбинации.';
   skullgirls.replaceChildren();
   pageGenerator();
}
