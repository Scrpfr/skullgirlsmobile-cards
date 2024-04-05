const squigly = {
   marquee1: 'Мертвецы - стоя на трупе Сквигли, атаки союзников накладывают на противника проклятье и иссушение на 15 сек.',
   marquee2: 'Мертвечина - стоя на трупе Сквигли, союзник получает Неупал на 15 сек при получении ударов.',
   prestige: 'Получает заряд каждые 7 секунд стоя на трупе. После активации, мертвецов нельзя воскрешать.',
   p_active: '12% за каждый полученный или использованный заряд.'
}

function stage_fright() {
   person.card_name = 'Боязнь сцены';
   person.aka = 'Сцена';
   person.card_src = 'Stage_Fright.png';
   person.description = 'Очень слабая вариация, не стоит прокачивать. Могла бы быть полезна гибелью, которую даёт при смерти от блокбастера, но в атаке такое сложно реализовать, в защите легко обойти.';
   person.ability = 'Когда здоровье противника падает ниже 25%, он получит проклятье и порчу на 15 сек. При поражении с помощью блокбастера, накладывает гибель на 30 сек.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '6,490';
   person.hp = '50,381';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопрот криту', 'Атака'];
   person.build_1_img = 'squigly/Rage_of_the_Dragon.png';
   person.build_2_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_3_img = 'squigly/Daisy_Pusher.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Неблокируемая атака.';
   person.build_2_desc = 'Хороший приём для защиты.';
   person.build_3_desc = 'Неблокируемый приём.';
   person.build_4_desc = 'Резкая атака с притягиванием.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function scared_stiff() {
   person.card_name = 'Страх и паралич';
   person.aka = 'Паралич';
   person.card_src = 'Scared_Stiff.png';
   person.description = 'Крайне большой запас здоровья для бронзового персонажа, притом нельзя снести более 5% здоровья сразу, но можно накладывать кровотоки для победы. В довес, получает постоянную непоколебимость, еще затрудняя игру. Отличный танк для новичков, качать рекомендуется. В некоторых случаях можно играть ею в атаке.';
   person.ability = 'При сражении с одним и тем же противником более 15 сек, получает непоколебимость, которая снимется только при смене персонажа. Тажке, каждый полученный удар снимает не более 5% максимального здоровья.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '6,048';
   person.hp = '61,037';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'squigly/Rage_of_the_Dragon.png';
   person.build_2_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_3_img = 'squigly/Daisy_Pusher.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Неблокируемая атака.';
   person.build_2_desc = 'Хороший приём для защиты.';
   person.build_3_desc = 'Неблокируемый приём.';
   person.build_4_desc = 'Резкая атака с притягиванием.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function dead_heat() {
   person.card_name = 'Мёртвый огонь';
   person.aka = 'Огонь';
   person.card_src = 'Dead_Heat.png';
   person.description = 'Очень интересная вариация. Особые приёмы пробивают блок, но только под бешенством. Что значит, что играть ею надо только под саппортами дающими бешенство. Новичкам качать можно, если есть подходящий саппорт.';
   person.ability = 'Если здоровье ниже 50%, каждые 10 сек получает 2 бешенства на 5 сек. Особые приёмы неблокируемы под бешенством.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2}`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '8,717';
   person.hp = '52,954';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопрот криту'];
   person.build_1_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_2_img = 'squigly/Battle_Opera.png';
   person.build_3_img = 'squigly/Draugen_Punch.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   person.build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   person.build_3_desc = 'Накладывает проклятье и подбрасывает.';
   person.build_4_desc = 'Притягивает и может забрать 1 бафф.';
   person.supps = ['rerun', 'starlight', 'inner'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function gang_green() {
   person.card_name = 'Бандитский зелёный';
   person.aka = 'Бандитка';
   person.card_src = 'Gang_Green.png';
   person.description = 'Не сможет нанести большой урон, поэтому используется как дополнительный дд: зажав врага в углу и положив труп, вызывается Бандитка и душит миазмами. Прокачивать можно.';
   person.ability = 'Пополняет шкалу блокбастера при движении на 3%. Получает миазмы на 5 сек каждые 1 секунду стоя на трупе и без блока.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '6,471';
   person.hp = '64,704';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'squigly/Daisy_Pusher.png';
   person.build_2_img = 'squigly/Battle_Opera.png';
   person.build_3_img = 'squigly/Draugen_Punch.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Нокдаун противнику.';
   person.build_2_desc = 'Накладывает иссушение';
   person.build_3_desc = 'Накладывает проклятье и подбрасывает.';
   person.build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function nearly_departed() {
   person.card_name = 'Почти ушедшая';
   person.aka = 'Ушедшая';
   person.card_src = 'Nearly_Departed.png';
   person.description = 'Возможно универсал, но слабый и в атаке и в защите. Все её забыли и никому не нужна. Не качайте.';
   person.ability = 'При использовании блокбастера с нечётным количеством комбо, получает неуязвимость на 8 секунд. Воскресит союзников с 25% здоровья, когда потеряет 50% здоровья.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '7,604';
   person.hp = '58,791';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_2_img = 'squigly/Battle_Opera.png';
   person.build_3_img = 'squigly/Draugen_Punch.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   person.build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   person.build_3_desc = 'Накладывает проклятье и подбрасывает.';
   person.build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function necrobreaker() {
   person.card_name = 'Некробрейкер';
   person.aka = 'Некро';
   person.card_src = 'Necrobreaker.png';
   person.description = 'Можно получить только в ивент Хеллоуин (октябрь). В защите очень слабая, нет смысла ставить в защиту. В атаке также слабая. Не стоит качать.';
   person.ability = 'Восстанавливает 7% здоровья во время зарядки хвоста змеи. Один раз за матч пережить смертельный удар и получить неупал на 15 секунд.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '6,471';
   person.hp = '64,704';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_2_img = 'squigly/Battle_Opera.png';
   person.build_3_img = 'squigly/Draugen_Punch.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   person.build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   person.build_3_desc = 'Накладывает проклятье и подбрасывает.';
   person.build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function thrill_shrieker() {
   person.card_name = 'Героиня триллера';
   person.aka = 'Триллер';
   person.card_src = 'Thrill_Shrieker.png';
   person.description = 'В золоте - хороший дд вариант Сквигли, качать стоит. Алмазить стоит, но превращается в полу-саппорта, играя второй абилкой: меняем активного танкующего врага на саппортящего его товарища, попутно снимая сразу 50% его здоровья.';
   person.ability = 'При получении заряда дракона, также получает постоянное бешенство, снимается при расходе заряда. При принудительной смене противника под бешенством, он теряет 50% своих текущих НР.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '10,157';
   person.hp = '61,767';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_2_img = 'squigly/Battle_Opera.png';
   person.build_3_img = 'squigly/Basso_Buffo.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   person.build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   person.build_3_desc = 'Сменить противника, сочетается с абилкой Триллера.';
   person.build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function dead_of_winter() {
   person.card_name = 'Холодная смерть';
   person.aka = 'Холод';
   person.card_src = 'Dead_of_Winter.png';
   person.description = 'Привлекает к себе внимание из-за постоянной брони и бусту урона, но имеет и недостатки: броню можно получить только после 30 секунд смерти, и она ломается с удара. Можно прокачать, больше как фановую вариацию, можно поставить в рифты под ледянки, но и там она не сильна.';
   person.ability = 'Воскрешается через 30 секунд после смерти с 25% здоровьем и 5 стаками брони. Броня безвременная, но снимается при получении удара. Бонус 100% к урону под действием брони.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '7,527';
   person.hp = '75,476';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_2_img = 'squigly/Battle_Opera.png';
   person.build_3_img = 'squigly/Draugen_Punch.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   person.build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   person.build_3_desc = 'Накладывает проклятье и подбрасывает.';
   person.build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function poltergust() {
   person.card_name = 'Призрачный порыв';
   person.aka = 'Порыв';
   person.card_src = 'Poltergust.png';
   person.description = 'Быстро заряжает блокбастеры и наносит больше урона, если условия совпадают. Довольно хорошая вариация, стоит прокачивать.';
   person.ability = 'Бонус 100% к урону, если у противника есть заряженный блокбастер. Когда положительный эффект Сквигли или противника истекает, получает 25% к шкале всех блокбастеров.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '10,157';
   person.hp = '61,767';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_2_img = 'squigly/Battle_Opera.png';
   person.build_3_img = 'squigly/Draugen_Punch.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   person.build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   person.build_3_desc = 'Накладывает проклятье и подбрасывает.';
   person.build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function bio_exorcist() {
   person.card_name = 'Биоэкзорцист';
   person.aka = 'Био';
   person.card_src = 'Bio-Exorcist.png';
   person.description = 'Хорошая вариация для новичков для игры в золотом ранге. При получении смертельного удара, воскрешается за счёт заряда хвоста и здоровья союзников, что полезно в некоторых ситуациях. Также во время комбо будет вампирить 2% НР у противника, тоже хороший бонус. Можно также поставить в защиту в золоте. Алмазить не стоит, для алмаза слаба.';
   person.ability = 'Стоя вплотную к противнику не в блоке и с заряженным хвостом, вампирит 2% его НР в секунду. Если хвост заряжен, при получении смертельного удара, вампирит 25% НР у каждого союзника и снимает заряд.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '8,852';
   person.hp = '68,602';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_2_img = 'squigly/Battle_Opera.png';
   person.build_3_img = 'squigly/Draugen_Punch.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   person.build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   person.build_3_desc = 'Накладывает проклятье и подбрасывает.';
   person.build_4_desc = 'Притягивает и может забрать 1 бафф.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function demon_artist() {
   person.card_name = 'Арт-демонесса';
   person.aka = 'Демонесса';
   person.card_src = 'Demon_Artist.png';
   person.description = 'В золоте, очень хорошая вариация; в алмазе, что-то среднее. Прокачивать стоит.';
   person.ability = 'Когда заряжена, накладывает кровотечение на 10 сек за каждые потерянные 15% НР любым из персонажей. Когда у противника кровотечение, активация блокбастера даёт бешенство и регенерацию на 12 сек.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '10,157';
   person.hp = '61,767';
   person.atk_stats = ['Атака', 'Проницание', 'Точность'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_2_img = 'squigly/Battle_Opera.png';
   person.build_3_img = 'squigly/Draugen_Punch.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   person.build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   person.build_3_desc = 'Накладывает проклятье и подбрасывает.';
   person.build_4_desc = 'Притягивает и может забрать 1 бафф.';
   person.supps = ['octoplasm', 'evergreen', 'martial_outlaw'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}

function love_crafted() {
   person.card_name = 'Лав и крафт';
   person.aka = 'Лавка';
   person.card_src = 'Love_Crafted.png';
   person.description = 'Очень мощная карточка за счёт кучи отрицательных эффектов и большого урона. В основном используется как атакующий персонаж, но из-за большого запаса здоровья и блока блокбастеров, можно ставить на защиту. Конечно, защитная версия контрится персонажами без блокастеров, но её урон может также сыграть.';
   person.ability = 'Каждый 10 комбо удар будет критическим и даст метку смерти и сильное кровотечение на 15 сек. Вплотную к противнику через 1 сек накладывает блок исцеления и отключает блокбастеры.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '11,847';
   person.hp = '72,058';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Атака', 'Здоровье'];
   person.build_1_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_2_img = 'squigly/Battle_Opera.png';
   person.build_3_img = 'squigly/Draugen_Punch.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Накладывает иссушение, применяется к подброшенному противнику.';
   person.build_2_desc = 'Накладывает иссушение, применяется к противнику на дистанции.';
   person.build_3_desc = 'Накладывает проклятье и подбрасывает.';
   person.build_4_desc = 'Притягивает и может забрать 1 бафф.';
   person.supps = ['honormaid', 'horse', 'surgeon'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function plot_twisted() {
   person.card_name = 'Сюжетный поворот';
   person.aka = 'Твист';
   person.card_src = 'Plot_Twisted.png';
   person.description = 'Используется на защите под водяными модами. В рифтах с катализаторами "Ледяная броня" и "Вернуть отправителю" на 3х местной ноде. Не супер танк, но проблем может создать.';
   person.ability = 'Раз за бой воскрешается с 50% НР, наложив на себя 5 рандом дебаффов на 10 сек и 5 шипов на 20 сек. Бонус к урону 50% за каждый дебафф на себе.';
   person.marquee1 = `${squigly.marquee1}`;
   person.marquee2 = `${squigly.marquee2} Основной выбор.`;
   person.prestige_description = `${squigly.prestige}`;
   person.prestige_activation = `${squigly.p_active}`;
   person.at = '10,330';
   person.hp = '80,045';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопрот криту', 'Атака'];
   person.build_1_img = 'squigly/Rage_of_the_Dragon.png';
   person.build_2_img = 'squigly/Inferno_of_Leviathan.png';
   person.build_3_img = 'squigly/Daisy_Pusher.png';
   person.build_4_img = 'squigly/The_Silver_Chord.png';
   person.build_1_desc = 'Неблокируемая атака.';
   person.build_2_desc = 'Хороший приём для защиты.';
   person.build_3_desc = 'Неблокируемый приём.';
   person.build_4_desc = 'Резкая атака с притягиванием.';
   skullgirls.replaceChildren();
   pageGenerator();
}
