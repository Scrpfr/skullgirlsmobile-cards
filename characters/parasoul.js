const parasoul = {
   marquee1: 'Мышление - 15% бонус к шансу крита за слезу.',
   marquee2: 'Масса - 15% бонус к крит урону за слезу.',
   prestige: 'Получает точность каждые несколько секунд рядом со слезой.',
   p_active: '12% за каждую слезу.'
}

function sheltered() {
   person.card_name = 'Прикрытие';
   person.aka = 'Шелтередка';
   person.card_src = 'Sheltered.png';
   person.description = 'Шикарный персонаж для новичков, очень сильная карточка. Однозначно стоит алмазить, даже в алмазе можно часто играть за неё.';
   person.ability = 'При критическом ударе получает бешенство на 7 секунд. Повышает шанс крита на 20% для всех союзников.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '7,392';
   person.hp = '44,794';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Motor_Brigade.png';
   person.build_3_img = 'parasoul/Silent_Scope.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Хороший урон с оглушением.';
   person.build_3_desc = 'Дистанционный выстрел.';
   person.build_4_desc = 'Дальняя атака, вызывает кровотечение.';
   person.supps = ['icyhot', 'evergreen', 'sundae'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function heavy_reign() {
   person.card_name = 'Осадки замка';
   person.aka = 'Осадки';
   person.card_src = 'Heavy_Reign.png';
   person.description = 'Не для новичков, требует очень высокие статы. Основной геймплей замков: быстро накопить ульту и использовать. Несмотря на очень низкую атаку, довольно неплохая карточка, можно использовать в параллельных мирах, включая беспощадку. Прокачивать не стоит, больше фановый персонаж, как нейромант на минималках, только при этом намного дешевле.';
   person.ability = 'При нанесении или получении критического урона шанс 50% получить 15% шкалы для всех блокбастеров.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '6,951';
   person.hp = '54,202';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Inferno_Brigade.png';
   person.build_2_img = 'parasoul/Motor_Brigade.png';
   person.build_3_img = 'parasoul/Baillement.png';
   person.build_4_img = 'parasoul/Napalm_Shower.png';
   person.build_1_desc = 'Увеличенный урон при 3х слезах.';
   person.build_2_desc = 'Хороший урон с оглушением.';
   person.build_3_desc = 'Получить иммунитет.';
   person.build_4_desc = 'Выбросит 3 слезы, используют перед ультой.';
   person.supps = ['sheltered', 'peashooter', 'martial_outlaw'];
   person.build_form_name1 = 'Примерный билд';
   person.build_form_path1 = '<img src="files/moves/parasoul/build1_Heavy_Reign.jpg">';
   person.build_form_name2 = 'Видео геймплея';
   person.build_form_path2 = '<iframe src="https://www.youtube.com/embed/s-h-byOZFjo?si=KU44t5VurNxEoy3K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   buildLoad();
}

function princess_pride() {
   person.card_name = 'Принцесса';
   person.aka = 'Принцесса';
   person.card_src = 'Princess_Pride.png';
   person.description = 'Атакующая рифтовая карточка. Урон низкий, но используют из-за восстановления здоровья. Уже потеряла актуальность, но всё ещё применима.';
   person.ability = 'При выпадении слезы получает регенерацию на 6 сек. При взрыве слёз восстанавливает 6% НР за каждую слезу.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '8,564';
   person.hp = '67,047';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Baillement.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Получить иммунитет.';
   person.build_4_desc = 'Дальняя атака, вызывает кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function summer_salt() {
   person.card_name = 'Соль дождя';
   person.aka = 'Сасальто';
   person.card_src = 'Summer_Salt.png';
   person.description = 'Имба. Огромный урон, снятие баффов, точность которая блокирует абилку противника. Всё это делает её одним из самых лучших персонажей в игре.';
   person.ability = 'Противники теряют 1 бафф и 3% здоровья каждые 2 сек находясь рядом со слезой. При взрыве не менее 3 слёз, снимает с себя все дебаффы и получает 5 ур точности, взорванные слёзы наносят 100% доп урона.';
   person.marquee1 = `${parasoul.marquee1}`;
   person.marquee2 = `${parasoul.marquee2} Основной выбор.`;
   person.prestige_description = `${parasoul.prestige}`;
   person.prestige_activation = `${parasoul.p_active}`;
   person.at = '13,556';
   person.hp = '64,032';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'parasoul/Canopy_Bounce.png';
   person.build_2_img = 'parasoul/Silent_Scope.png';
   person.build_3_img = 'parasoul/Egret_Call.png';
   person.build_4_img = 'parasoul/Napalm_Shot.png';
   person.build_1_desc = 'Снимает положительные эффекты врага.';
   person.build_2_desc = 'Дистанционный выстрел.';
   person.build_3_desc = 'Получить точность.';
   person.build_4_desc = 'Дальняя атака, вызывает кровотечение.';
   person.addition = 'Отсылка: отсылает на Амбреллу, младшую дочь Парасоул. Отсылает только палитрой и фразой, абилка скорее всего Парасоул.';
   skullgirls.replaceChildren();
   pageGenerator();
   addition();
}