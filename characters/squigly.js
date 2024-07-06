const squigly = {
   marquee1: 'Мертвецы - стоя на трупе Сквигли, атаки союзников накладывают на противника проклятье и иссушение на 15 сек.',
   marquee2: 'Мертвечина - стоя на трупе Сквигли, союзник получает Неупал на 15 сек при получении ударов.',
   prestige: 'Получает заряд каждые 7 секунд стоя на трупе. После активации, мертвецов нельзя воскрешать.',
   p_active: '12% за каждый полученный или использованный заряд.'
}

function stage_fright() {
   card_name = 'Боязнь сцены';
   aka = 'Сцена';
   card_src = 'Stage_Fright.png';
   description = 'Очень слабая вариация, не стоит прокачивать. Могла бы быть полезна гибелью, которую даёт при смерти от блокбастера, но в атаке такое сложно реализовать, в защите легко обойти.';
   ability = 'Когда здоровье противника падает ниже 25%, он получит проклятье и порчу на 15 сек. При поражении с помощью блокбастера, накладывает гибель на 30 сек.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '6,490';
   hp = '50,381';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопрот криту', 'Атака'];
   build_1_img = 'squigly/Rage_of_the_Dragon.png';
   build_2_img = 'squigly/Inferno_of_Leviathan.png';
   build_3_img = 'squigly/Daisy_Pusher.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Неблокируемая атака.';
   build_2_desc = 'Хороший приём для защиты.';
   build_3_desc = 'Неблокируемый приём.';
   build_4_desc = 'Резкая атака с притягиванием.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function scared_stiff() {
   card_name = 'Страх и паралич';
   aka = 'Паралич';
   card_src = 'Scared_Stiff.png';
   description = 'Крайне большой запас здоровья для бронзового персонажа, притом нельзя снести более 5% здоровья сразу, но можно накладывать кровотоки для победы. В довес, получает постоянную непоколебимость, еще затрудняя игру. Отличный танк для новичков, качать рекомендуется. В некоторых случаях можно играть ею в атаке.';
   ability = 'При сражении с одним и тем же противником более 15 сек, получает непоколебимость, которая снимется только при смене персонажа. Тажке, каждый полученный удар снимает не более 5% максимального здоровья.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '6,048';
   hp = '61,037';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'squigly/Rage_of_the_Dragon.png';
   build_2_img = 'squigly/Inferno_of_Leviathan.png';
   build_3_img = 'squigly/Daisy_Pusher.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Неблокируемая атака.';
   build_2_desc = 'Хороший приём для защиты.';
   build_3_desc = 'Неблокируемый приём.';
   build_4_desc = 'Резкая атака с притягиванием.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function dead_heat() {
   card_name = 'Мёртвый огонь';
   aka = 'Огонь';
   card_src = 'Dead_Heat.png';
   description = 'Очень интересная вариация. Особые приёмы пробивают блок, но только под бешенством. Что значит, что играть ею надо только под саппортами дающими бешенство. Новичкам качать можно, если есть подходящий саппорт.';
   ability = 'Если здоровье ниже 50%, каждые 10 сек получает 2 бешенства на 5 сек. Особые приёмы неблокируемы под бешенством.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2}`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '8,717';
   hp = '52,954';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопрот криту'];
   build_1_img = 'squigly/Inferno_of_Leviathan.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Draugen_Punch.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   build_3_desc = 'Накладывает проклятье и подбрасывает.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   supps = ['rerun', 'starlight', 'inner'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function gang_green() {
   card_name = 'Бандитский зелёный';
   aka = 'Бандитка';
   card_src = 'Gang_Green.png';
   description = 'Не сможет нанести большой урон, поэтому используется как дополнительный дд: зажав врага в углу и положив труп, вызывается Бандитка и душит миазмами. Прокачивать можно.';
   ability = 'Пополняет шкалу блокбастера при движении на 3%. Получает миазмы на 5 сек каждые 1 секунду стоя на трупе и без блока.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '6,471';
   hp = '64,704';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'squigly/Daisy_Pusher.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Draugen_Punch.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Нокдаун противнику.';
   build_2_desc = 'Накладывает иссушение';
   build_3_desc = 'Накладывает проклятье и подбрасывает.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function nearly_departed() {
   card_name = 'Почти ушедшая';
   aka = 'Ушедшая';
   card_src = 'Nearly_Departed.png';
   description = 'Возможно универсал, но слабый и в атаке и в защите. Все её забыли и никому не нужна. Не качайте.';
   ability = 'При использовании блокбастера с нечётным количеством комбо, получает неуязвимость на 8 секунд. Воскресит союзников с 25% здоровья, когда потеряет 50% здоровья.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '7,604';
   hp = '58,791';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'squigly/Inferno_of_Leviathan.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Draugen_Punch.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   build_3_desc = 'Накладывает проклятье и подбрасывает.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function necrobreaker() {
   card_name = 'Некробрейкер';
   aka = 'Некро';
   card_src = 'Necrobreaker.png';
   description = 'Можно получить только в ивент Хеллоуин (октябрь). В защите очень слабая, нет смысла ставить в защиту. В атаке также слабая. Не стоит качать.';
   ability = 'Восстанавливает 7% здоровья во время зарядки хвоста змеи. Один раз за матч пережить смертельный удар и получить неупал на 15 секунд.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '6,471';
   hp = '64,704';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'squigly/Inferno_of_Leviathan.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Draugen_Punch.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   build_3_desc = 'Накладывает проклятье и подбрасывает.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function thrill_shrieker() {
   card_name = 'Героиня триллера';
   aka = 'Триллер';
   card_src = 'Thrill_Shrieker.png';
   description = 'В золоте - хороший дд вариант Сквигли, качать стоит. Алмазить стоит, но превращается в полу-саппорта, играя второй абилкой: меняем активного танкующего врага на саппортящего его товарища, попутно снимая сразу 50% его здоровья.';
   ability = 'При получении заряда дракона, также получает постоянное бешенство, снимается при расходе заряда. При принудительной смене противника под бешенством, он теряет 50% своих текущих НР.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '10,157';
   hp = '61,767';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'squigly/Inferno_of_Leviathan.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Basso_Buffo.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   build_3_desc = 'Сменить противника, сочетается с абилкой Триллера.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dead_of_winter() {
   card_name = 'Холодная смерть';
   aka = 'Холод';
   card_src = 'Dead_of_Winter.png';
   description = 'Привлекает к себе внимание из-за постоянной брони и бусту урона, но имеет и недостатки: броню можно получить только после 30 секунд смерти, и она ломается с удара. Можно прокачать, больше как фановую вариацию, можно поставить в рифты под ледянки, но и там она не сильна.';
   ability = 'Воскрешается через 30 секунд после смерти с 25% здоровьем и 5 стаками брони. Броня безвременная, но снимается при получении удара. Бонус 100% к урону под действием брони.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '7,527';
   hp = '75,476';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'squigly/Inferno_of_Leviathan.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Draugen_Punch.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   build_3_desc = 'Накладывает проклятье и подбрасывает.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function poltergust() {
   card_name = 'Призрачный порыв';
   aka = 'Порыв';
   card_src = 'Poltergust.png';
   description = 'Быстро заряжает блокбастеры и наносит больше урона, если условия совпадают. Довольно хорошая вариация, стоит прокачивать.';
   ability = 'Бонус 100% к урону, если у противника есть заряженный блокбастер. Когда положительный эффект Сквигли или противника истекает, получает 25% к шкале всех блокбастеров.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '10,157';
   hp = '61,767';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'squigly/Inferno_of_Leviathan.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Draugen_Punch.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   build_3_desc = 'Накладывает проклятье и подбрасывает.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function bio_exorcist() {
   card_name = 'Биоэкзорцист';
   aka = 'Био';
   card_src = 'Bio-Exorcist.png';
   description = 'Хорошая вариация для новичков для игры в золотом ранге. При получении смертельного удара, воскрешается за счёт заряда хвоста и здоровья союзников, что полезно в некоторых ситуациях. Также во время комбо будет вампирить 2% НР у противника, тоже хороший бонус. Можно также поставить в защиту в золоте. Алмазить не стоит, для алмаза слаба.';
   ability = 'Стоя вплотную к противнику не в блоке и с заряженным хвостом, вампирит 2% его НР в секунду. Если хвост заряжен, при получении смертельного удара, вампирит 25% НР у каждого союзника и снимает заряд.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '8,852';
   hp = '68,602';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'squigly/Inferno_of_Leviathan.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Draugen_Punch.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   build_3_desc = 'Накладывает проклятье и подбрасывает.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function demon_artist() {
   card_name = 'Арт-демонесса';
   aka = 'Демонесса';
   card_src = 'Demon_Artist.png';
   description = 'В золоте, очень хорошая вариация; в алмазе, что-то среднее. Прокачивать стоит.';
   ability = 'Когда заряжена, накладывает кровотечение на 10 сек за каждые потерянные 15% НР любым из персонажей. Когда у противника кровотечение, активация блокбастера даёт бешенство и регенерацию на 12 сек.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '10,157';
   hp = '61,767';
   atk_stats = ['Атака', 'Проницание', 'Точность'];
   def_stats = ['Не защитник'];
   build_1_img = 'squigly/Inferno_of_Leviathan.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Draugen_Punch.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   build_3_desc = 'Накладывает проклятье и подбрасывает.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   supps = ['octoplasm', 'evergreen', 'martial_outlaw'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}

function love_crafted() {
   card_name = 'Лав и крафт';
   aka = 'Лавка';
   card_src = 'Love_Crafted.png';
   description = 'Очень мощная карточка за счёт кучи отрицательных эффектов и большого урона. В основном используется как атакующий персонаж, но из-за большого запаса здоровья и блока блокбастеров, можно ставить на защиту. Конечно, защитная версия контрится персонажами без блокастеров, но её урон может также сыграть.';
   ability = 'Каждый 10 комбо удар будет критическим и даст метку смерти и сильное кровотечение на 15 сек. Вплотную к противнику через 1 сек накладывает блок исцеления и отключает блокбастеры.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '11,847';
   hp = '72,058';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Атака', 'Здоровье'];
   build_1_img = 'squigly/Inferno_of_Leviathan.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Draugen_Punch.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   build_3_desc = 'Накладывает проклятье и подбрасывает.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   supps = ['honormaid', 'horse', 'surgeon'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function plot_twisted() {
   card_name = 'Сюжетный поворот';
   aka = 'Твист';
   card_src = 'Plot_Twisted.png';
   description = 'Используется на защите под водяными модами. В рифтах с катализаторами "Ледяная броня" и "Вернуть отправителю" на 3х местной ноде. Не супер танк, но проблем может создать.';
   ability = 'Раз за бой воскрешается с 50% НР, наложив на себя 5 рандом дебаффов на 10 сек и 5 шипов на 20 сек. Бонус к урону 50% за каждый дебафф на себе.';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2} Основной выбор.`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '10,330';
   hp = '80,045';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопрот криту', 'Атака'];
   build_1_img = 'squigly/Rage_of_the_Dragon.png';
   build_2_img = 'squigly/Inferno_of_Leviathan.png';
   build_3_img = 'squigly/Daisy_Pusher.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Неблокируемая атака.';
   build_2_desc = 'Хороший приём для защиты.';
   build_3_desc = 'Неблокируемый приём.';
   build_4_desc = 'Резкая атака с притягиванием.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function grave_danger() {
   card_name = 'Смертельная опасность';
   aka = 'Смертельная';
   card_src = 'Grave_Danger.png';
   description = '';
   ability = '';
   marquee1 = `${squigly.marquee1}`;
   marquee2 = `${squigly.marquee2}`;
   prestige_description = `${squigly.prestige}`;
   prestige_activation = `${squigly.p_active}`;
   at = '11,847';
   hp = '72,058';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'squigly/Inferno_of_Leviathan.png';
   build_2_img = 'squigly/Battle_Opera.png';
   build_3_img = 'squigly/Draugen_Punch.png';
   build_4_img = 'squigly/The_Silver_Chord.png';
   build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   build_3_desc = 'Накладывает проклятье и подбрасывает.';
   build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}