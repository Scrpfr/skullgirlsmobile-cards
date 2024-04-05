const cerebella = {
   marquee1: 'Превосходство - Броски забирают 30% шкалы всех вражеских блокбастеров.',
   marquee2: 'Лидер труппы - броски блокируют призыв союзников противника на несколько секунд.',
   prestige: 'Увеличивает урон бросков.',
   p_active: '20% за бросок (5 бросков).'
}

function understudy() {
   person.card_name = 'Дублёр';
   person.aka = 'Дублон';
   person.card_src = 'Understudy.png';
   person.description = 'Самый первый персонаж в вашей коллекции, и достаточно хороший. Новичкам стоит её прокачивать, но не выше золота.';
   person.ability = 'Броски дополнительно наносят 50% урона и дают броню на 15 секунд.';
   person.marquee1 = `${cerebella.marquee1} ЛУЧШИЙ выбор.`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '8,295';
   person.hp = '50,381';
   person.atk_stats = ['Атака', 'Проницание', 'Перезарядка приёмов'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака'];
   person.build_1_img = 'cerebella/Merry_Go-rilla.png';
   person.build_2_img = 'cerebella/Pummel_Horse.png';
   person.build_3_img = 'cerebella/Diamond_Drop.png';
   person.build_4_img = 'cerebella/Excellebella.png';
   person.build_1_desc = 'Приём с захватом (бросок).';
   person.build_2_desc = 'Бросок с кровотечением.';
   person.build_3_desc = 'Бросок, при убийстве дает регенерацию.';
   person.build_4_desc = 'Считается броском а также оглушает.';
   person.supps = ['icyhot', 'sketchy', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function headstrong() {
   person.card_name = 'Сила мысли';
   person.aka = 'Мысля';
   person.card_src = 'Headstrong.png';
   person.description = 'Бронзовая светлая церебелла, и при этом достаточно мощная по статам. Прокачивать рекомендуется, но не выше золота: лучше алмазить некоторых других золотых Церебелл.';
   person.ability = 'При броске шанс 50% нанести увечье и раскол брони.';
   person.marquee1 = `${cerebella.marquee1} ЛУЧШИЙ выбор.`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '10,522';
   person.hp = '49,940';
   person.atk_stats = ['Атака', 'Проницание', 'Перезарядка приёмов'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака'];
   person.build_1_img = 'cerebella/Merry_Go-rilla.png';
   person.build_2_img = 'cerebella/Pummel_Horse.png';
   person.build_3_img = 'cerebella/Diamond_Drop.png';
   person.build_4_img = 'cerebella/Excellebella.png';
   person.build_1_desc = 'Приём с захватом (бросок).';
   person.build_2_desc = 'Бросок с кровотечением.';
   person.build_3_desc = 'Бросок, при убийстве дает регенерацию.';
   person.build_4_desc = 'Считается броском а также оглушает.';
   person.supps = ['icyhot', 'sketchy', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}

function toad_warrior() {
   person.card_name = 'Боевая жаба';
   person.aka = 'Жаба';
   person.card_src = 'Toad_Warrior.png';
   person.description = 'Не такая интересная как арлекин, но достаточно популярная и сильная церебелла, в основном для новичков. Слабее арлекина, но с другой стороны, дешевле в прокачке, и быстро накапливает шкалу блокбастеров.';
   person.ability = 'Дополнительный 50% урон если блокбастер заряжен. Вплотную к противнику набирает 3% шкалы блокбастера.';
   person.marquee1 = `${cerebella.marquee1} ЛУЧШИЙ выбор.`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '11,079';
   person.hp = '52,935';
   person.atk_stats = ['Атака', 'Проницание', 'Перезарядка приёмов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'cerebella/Merry_Go-rilla.png';
   person.build_2_img = 'cerebella/Hammer_Toss.png';
   person.build_3_img = 'cerebella/Diamond_Drop.png';
   person.build_4_img = 'cerebella/Battle_Butt.png';
   person.build_1_desc = 'Основной приём с захватом.';
   person.build_2_desc = 'Для смены противника.';
   person.build_3_desc = 'Блокбастер с захватом.';
   person.build_4_desc = 'В основном после гориллы.';
   person.supps = ['joy', 'honormaid', 'harlequin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function gray_matter() {
   person.card_name = 'Мозг';
   person.aka = 'Мозг';
   person.card_src = 'Gray_Matter.png';
   person.description = 'Саппорт с очень низкими возможностями. Не стоит прокачивать вообще. Если и прокачивать, то только в команду для тех кому нужно быстро набрать шкалу. Не стоит ресурсов для алмаза.';
   person.ability = 'Все союзники начинают бой с 25% заряда шкалы блокбастера, а также раз за бой все союзники получают еще 50%, когда здоровье падает ниже 25%';
   person.marquee1 = `${cerebella.marquee1}`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '9,639';
   person.hp = '58,791';
   person.atk_stats = ['Только саппорт'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'cerebella/Ultimate_Showstopper.png';
   person.build_2_img = 'cerebella/Excellebella.png';
   person.build_3_img = 'cerebella/Hammer_Toss.png';
   person.build_4_img = 'cerebella/Burst.png';
   person.build_1_desc = 'При убийстве даст 2 рандом баффа.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'Сменяет противника.';
   person.build_4_desc = 'Прервать атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function big_top() {
   person.card_name = 'Мощный верх';
   person.aka = 'Верх';
   person.card_src = 'Big_Top.png';
   person.description = 'Защитный персонаж, очень интересный, но к сожалению очень слабый в алмазе. Как серебрянный танк может и сойдёт, но прокачивать не рекомендуется.';
   person.ability = 'Один раз за бой воскрешается с 50% здоровья с неуязвимостью и непоколебимостью 6 сек.';
   person.marquee1 = `${cerebella.marquee1}`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '8,218';
   person.hp = '64,704';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'cerebella/Ultimate_Showstopper.png';
   person.build_2_img = 'cerebella/Excellebella.png';
   person.build_3_img = 'cerebella/Diamond_Drop.png';
   person.build_4_img = 'cerebella/Burst.png';
   person.build_1_desc = 'При убийстве даст 2 рандом баффа.';
   person.build_2_desc = 'Шанс оглушить.';
   person.build_3_desc = 'При убийстве даст сильную регенерацию.';
   person.build_4_desc = 'Прервать атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function harlequin() {
   person.card_name = 'Арлекин';
   person.aka = 'Арля';
   person.card_src = 'Harlequin.png';
   person.description = 'Самая популярная карточка Церебеллы, используется и как атакующая, и как саппорт. Можно гарантированно получить в быстрых играх Церебеллы, в золоте набрав 10 миллионов очков, в алмазе 30 миллионов. Алмазить точно стоит.';
   person.ability = 'Для себя и для всех союзников увеличивает урон особых приёмов на 20% и их перезарядку на 35%';
   person.marquee1 = `${cerebella.marquee1} ЛУЧШИЙ выбор.`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '12,960';
   person.hp = '61,728';
   person.atk_stats = ['Атака', 'Проницание', 'Перезарядка приёмов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'cerebella/Merry_Go-rilla.png';
   person.build_2_img = 'cerebella/Hammer_Toss.png';
   person.build_3_img = 'cerebella/Diamond_Drop.png';
   person.build_4_img = 'cerebella/Battle_Butt.png';
   person.build_1_desc = 'Основной приём с захватом.';
   person.build_2_desc = 'Для смены противника.';
   person.build_3_desc = 'Блокбастер с захватом.';
   person.build_4_desc = 'В основном после гориллы.';
   person.supps = ['harlequin', 'martial_outlaw', 'seraph'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function brain_freeze() {
   person.card_name = 'Отмороженная';
   person.aka = 'Отморозок';
   person.card_src = 'Brain_Freeze.png';
   person.description = 'Слабая вариация, не стоит прокачивать. Буст урона очень низкий, а снижение урона бесполезно из-за огромного урона в этой игре: её просто шотнут, и в атаке и в защите.';
   person.ability = 'Урон повышается на 3% от текущего здоровья. Урон противника снижается на 3% за каждое комбо.';
   person.marquee1 = `${cerebella.marquee1}`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '11,271';
   person.hp = '68,602';
   person.atk_stats = ['Здоровье', 'Атака', 'Проницание', 'Прирост шкалы'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопрот криту'];
   person.build_1_img = 'cerebella/Battle_Butt.png';
   person.build_2_img = 'cerebella/Lock_n_Load.png';
   person.build_3_img = 'cerebella/Grab_Bag.png';
   person.build_4_img = 'cerebella/Burst.png';
   person.build_1_desc = 'Таран с непоколебимостью.';
   person.build_2_desc = 'Удар с непоколебимостью.';
   person.build_3_desc = 'При убийстве даст 2 брони.';
   person.build_4_desc = 'Прервать атаку противника.';
   person.supps = ['honormaid', 'martial_outlaw', 'starlight'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function armed_forces() {
   person.card_name = 'Армия';
   person.aka = 'Армия';
   person.card_src = 'Armed_Forces.png';
   person.description = 'Очень сильный защитный золотой персонаж, в алмазе при этом слабая, легко контрится. Алмазить можно если вам хочется.';
   person.ability = 'Шанс 10% получить броню и непоколебимость при получении или нанесении удара (включая блок). И шанс перенести 1 отрицательный эффект на противника при получении положительного.';
   person.marquee1 = `${cerebella.marquee1} Основной выбор.`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '9,581';
   person.hp = '75,476';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'cerebella/Merry_Go-rilla.png';
   person.build_2_img = 'cerebella/Burst.png';
   person.build_3_img = 'cerebella/Diamond_Drop.png';
   person.build_4_img = 'cerebella/Excellebella.png';
   person.build_1_desc = 'Не используется вплотную, нужно небольшое расстояние.';
   person.build_2_desc = 'Прервать атаку противника.';
   person.build_3_desc = 'При убийстве даст сильную регенерацию.';
   person.build_4_desc = 'Шанс оглушить.';
   person.supps = ['surgeon', 'evergreen', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function criminal_mind() {
   person.card_name = 'Преступный умысел';
   person.aka = 'Кумыс';
   person.card_src = 'Criminal_Mind.png';
   person.description = 'Достойный для прокачки универсал. В атаке, огромный урон за счёт метки смерти и критов, кровотечения. В защите, шипы и кровотечение, однако танк из неё так себе. Не для новичков, так как требует высоких характеристик шанса: 80-100%, из-за чего боится Пэйнвил с отражением урона или Далий с регенерациями.';
   person.ability = 'Когда любой персонаж отнимает не менее 10% макс здоровья одним ударом, дает вам шипы на 10 сек и метку смерти на противника, а также накладывает им кровотечение на 5 секунд при отскоке под действием метки смерти.';
   person.marquee1 = `${cerebella.marquee1} Основной выбор.`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '12,960';
   person.hp = '61,728';
   person.atk_stats = ['Шанс крита', 'Урон крита', 'Атака', 'Проницание'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака'];
   person.build_1_img = 'cerebella/Diamonds_are_Forever.png';
   person.build_2_img = 'cerebella/Battle_Butt.png';
   person.build_3_img = 'cerebella/Excellebella.png';
   person.build_4_img = 'cerebella/Pummel_Horse.png';
   person.build_1_desc = 'Наносит большой урон.';
   person.build_2_desc = 'Наложит раскол защиты.';
   person.build_3_desc = 'Шанс оглушить.';
   person.build_4_desc = 'Поймать подброшенного противника и дать кровотечение.';
   person.supps = ['horse', 'martial_outlaw', 'starlight'];
   person.build_form_name1 = 'Интересный билд для кумыса';
   person.build_form_path1 = '<img src="files/moves/cerebella/build1_criminal_mind.jpg">';
   person.build_form_name2 = 'Видео геймплея билда';
   person.build_form_path2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SRcACIE4azQ?si=nnJYFAMbhjnOomlm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function scare_giver() {
   person.card_name = 'Страшила';
   person.aka = 'Страшила';
   person.card_src = 'Scare_Giver.png';
   person.description = 'Сложно что-то однозначно сказать сейчас, карточка совсем новая ещё. Но предположительно, сильнейшая дд Церебелла.';
   person.ability = 'При падении противника, даёт ему иссушение и себе ускорение на 8 секунд. При ударе под ускорением, шанс 15% получить бешенство на 10 сек и забрать 3% НР противника.';
   person.marquee1 = `${cerebella.marquee1} Основной выбор.`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '11,271';
   person.hp = '68,602';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'cerebella/Diamonds_are_Forever.png';
   person.build_2_img = 'cerebella/Battle_Butt.png';
   person.build_3_img = 'cerebella/Merry_Go-rilla.png';
   person.build_4_img = 'cerebella/Pummel_Horse.png';
   person.build_1_desc = 'Наносит большой урон.';
   person.build_2_desc = 'Наложит раскол защиты.';
   person.build_3_desc = 'Не используется вплотную, нужно небольшое расстояние.';
   person.build_4_desc = 'Поймать подброшенного противника и дать кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function blitz_glamour() {
   person.card_name = 'Сила денег';
   person.aka = 'Деньга';
   person.card_src = 'Blitz_Glamour.png';
   person.description = 'Сильная и достойная прокачки Церебелла. Направление узкое: играют в основном против хиллеров, накладывает полярность, под которой регенерация работает как кровотечение (смертельно). Также можно использовать приём "Гимнастический конь", который наложит кровотечение, на модах или персонажей, которые превращают кровь в регенерацию (например, параллельные миры). Может также играть против дебафферов, имея постоянный иммунитет. Урона хватает также для простых боёв.';
   person.ability = 'На своей стороне, каждые 5 сек снимает все отрицательные эффекты и получает постоянные иммунитет и регенерацию, снимаются при нокдауне. На стороне противника, при ударе шанс 15% наложить обратную полярность и раскол брони на 10 сек.';
   person.marquee1 = `${cerebella.marquee1} Основной выбор.`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '11,271';
   person.hp = '68,602';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопрот криту'];
   person.build_1_img = 'cerebella/Diamonds_are_Forever.png';
   person.build_2_img = 'cerebella/Battle_Butt.png';
   person.build_3_img = 'cerebella/Merry_Go-rilla.png';
   person.build_4_img = 'cerebella/Pummel_Horse.png';
   person.build_1_desc = 'Наносит большой урон.';
   person.build_2_desc = 'Наложит раскол защиты.';
   person.build_3_desc = 'Не используется вплотную, нужно небольшое расстояние.';
   person.build_4_desc = 'Поймать подброшенного противника и дать кровотечение.';
   person.supps = ['honormaid', 'martial_outlaw', 'mogul'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}

function heavy_handed() {
   person.card_name = 'Тяжёлая рука';
   person.aka = 'Рука';
   person.card_src = 'Heay_Handed.png';
   person.description = 'Задуманная как атакующая алмазная Церебелла, очень плохо себя проявляет и не рекомендуется прокачивать. Как исключение, можно поставить в защиту с 3 таранами и 2 взрывами, иногда даёт попотеть против себя.';
   person.ability = 'В заряженном состоянии каждые 0,1 сек дает безвременные баффы бешенства, а при достижении 5 стаков получает непоколебимость на 10 сек. Эти эффекты снимаются при нанесении удара.';
   person.marquee1 = `${cerebella.marquee1}`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '13,152';
   person.hp = '80,045';
   person.atk_stats = ['Шанс крита', 'Урон крита', 'Атака', 'Проницание'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Шанс крита'];
   person.build_1_img = 'cerebella/Diamonds_are_Forever.png';
   person.build_2_img = 'cerebella/Battle_Butt.png';
   person.build_3_img = 'cerebella/Lock_n_Load.png';
   person.build_4_img = 'cerebella/Ultimate_Showstopper.png';
   person.build_1_desc = 'Наносит большой урон.';
   person.build_2_desc = 'Наложит раскол защиты.';
   person.build_3_desc = 'Непоколебимая атака с увеличенным шансом крита.';
   person.build_4_desc = 'При убийстве получит 2 рандом баффа.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function star_spangled() {
   person.card_name = 'Звёзды и полосы';
   person.aka = 'Полоска';
   person.card_src = 'Star-Spangled.png';
   person.description = 'Весьма странная карточка: атакующая абилка и большое здоровье. Но абилку реализовать сложно и здоровье ей не помогает держать защиту. Не рекомендуется прокачивать, очень слабый персонаж.';
   person.ability = 'Когда любой персонаж прерывает захват, дает врагу раскол брони на 15 сек. Под расколом, и если враг в воздухе, шанс 15% при ударе оглушить врага на 5 сек.';
   person.marquee1 = `${cerebella.marquee1}`;
   person.marquee2 = `${cerebella.marquee2}`;
   person.prestige_description = `${cerebella.prestige}`;
   person.prestige_activation = `${cerebella.p_active}`;
   person.at = '11,175';
   person.hp = '88,052';
   person.atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   person.def_stats = ['Здоровье', 'Защита', 'Атака', 'Точность'];
   person.build_1_img = 'cerebella/Diamonds_are_Forever.png';
   person.build_2_img = 'cerebella/Diamond_Dynamo.png';
   person.build_3_img = 'cerebella/Cerecopter.png';
   person.build_4_img = 'cerebella/Diamond_Drop.png';
   person.build_1_desc = 'Наносит большой урон.';
   person.build_2_desc = 'Увеличивает урон за комбо и держит в воздухе.';
   person.build_3_desc = 'Много ударов в воздухе.';
   person.build_4_desc = 'Тоже считается как атака в воздухе, хотя захватывает с земли.';
   skullgirls.replaceChildren();
   pageGenerator();
}
