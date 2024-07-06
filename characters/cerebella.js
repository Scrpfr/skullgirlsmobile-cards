const cerebella = {
   marquee1: 'Превосходство - Броски забирают 30% шкалы всех вражеских блокбастеров.',
   marquee2: 'Лидер труппы - броски блокируют призыв союзников противника на несколько секунд.',
   prestige: 'Увеличивает урон бросков.',
   p_active: '20% за бросок (5 бросков).'
}

function understudy() {
   card_name = 'Дублёр';
   aka = 'Дублон';
   card_src = 'Understudy.png';
   description = 'Самый первый персонаж в вашей коллекции, и достаточно хороший. Новичкам стоит её прокачивать, но не выше золота.';
   ability = 'Броски дополнительно наносят 50% урона и дают броню на 15 секунд.';
   marquee1 = `${cerebella.marquee1} ЛУЧШИЙ выбор.`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '8,295';
   hp = '50,381';
   atk_stats = ['Атака', 'Проницание', 'Перезарядка приёмов'];
   def_stats = ['Здоровье', 'Защита', 'Атака'];
   build_1_img = 'cerebella/Merry_Go-rilla.png';
   build_2_img = 'cerebella/Pummel_Horse.png';
   build_3_img = 'cerebella/Diamond_Drop.png';
   build_4_img = 'cerebella/Excellebella.png';
   build_1_desc = 'Приём с захватом (бросок).';
   build_2_desc = 'Бросок с кровотечением.';
   build_3_desc = 'Бросок, при убийстве дает регенерацию.';
   build_4_desc = 'Считается броском а также оглушает.';
   supps = ['icyhot', 'sketchy', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function headstrong() {
   card_name = 'Сила мысли';
   aka = 'Мысля';
   card_src = 'Headstrong.png';
   description = 'Бронзовая светлая церебелла, и при этом достаточно мощная по статам. Прокачивать рекомендуется, но не выше золота: лучше алмазить некоторых других золотых Церебелл.';
   ability = 'При броске шанс 50% нанести увечье и раскол брони.';
   marquee1 = `${cerebella.marquee1} ЛУЧШИЙ выбор.`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '10,522';
   hp = '49,940';
   atk_stats = ['Атака', 'Проницание', 'Перезарядка приёмов'];
   def_stats = ['Здоровье', 'Защита', 'Атака'];
   build_1_img = 'cerebella/Merry_Go-rilla.png';
   build_2_img = 'cerebella/Pummel_Horse.png';
   build_3_img = 'cerebella/Diamond_Drop.png';
   build_4_img = 'cerebella/Excellebella.png';
   build_1_desc = 'Приём с захватом (бросок).';
   build_2_desc = 'Бросок с кровотечением.';
   build_3_desc = 'Бросок, при убийстве дает регенерацию.';
   build_4_desc = 'Считается броском а также оглушает.';
   supps = ['icyhot', 'sketchy', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}

function toad_warrior() {
   card_name = 'Боевая жаба';
   aka = 'Жаба';
   card_src = 'Toad_Warrior.png';
   description = 'Не такая интересная как арлекин, но достаточно популярная и сильная церебелла, в основном для новичков. Слабее арлекина, но с другой стороны, дешевле в прокачке, и быстро накапливает шкалу блокбастеров.';
   ability = 'Дополнительный 50% урон если блокбастер заряжен. Вплотную к противнику набирает 3% шкалы блокбастера.';
   marquee1 = `${cerebella.marquee1} ЛУЧШИЙ выбор.`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '11,079';
   hp = '52,935';
   atk_stats = ['Атака', 'Проницание', 'Перезарядка приёмов'];
   def_stats = ['Не защитник'];
   build_1_img = 'cerebella/Merry_Go-rilla.png';
   build_2_img = 'cerebella/Hammer_Toss.png';
   build_3_img = 'cerebella/Diamond_Drop.png';
   build_4_img = 'cerebella/Battle_Butt.png';
   build_1_desc = 'Основной приём с захватом.';
   build_2_desc = 'Для смены противника.';
   build_3_desc = 'Блокбастер с захватом.';
   build_4_desc = 'В основном после гориллы.';
   supps = ['joy', 'honormaid', 'harlequin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function gray_matter() {
   card_name = 'Мозг';
   aka = 'Мозг';
   card_src = 'Gray_Matter.png';
   description = 'Саппорт с очень низкими возможностями. Не стоит прокачивать вообще. Если и прокачивать, то только в команду для тех кому нужно быстро набрать шкалу. Не стоит ресурсов для алмаза.';
   ability = 'Все союзники начинают бой с 25% заряда шкалы блокбастера, а также раз за бой все союзники получают еще 50%, когда здоровье падает ниже 25%';
   marquee1 = `${cerebella.marquee1}`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '9,639';
   hp = '58,791';
   atk_stats = ['Только саппорт'];
   def_stats = ['Не защитник'];
   build_1_img = 'cerebella/Ultimate_Showstopper.png';
   build_2_img = 'cerebella/Excellebella.png';
   build_3_img = 'cerebella/Hammer_Toss.png';
   build_4_img = 'cerebella/Burst.png';
   build_1_desc = 'При убийстве даст 2 рандом баффа.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'Сменяет противника.';
   build_4_desc = 'Прервать атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function big_top() {
   card_name = 'Мощный верх';
   aka = 'Верх';
   card_src = 'Big_Top.png';
   description = 'Серьёзный серебрянный танк, угроза для новичков, не знающих как её выйграть и чем проходить. Качать рекомендуется, алмазить тоже можно, хоть и слабая, но не дорогая защита лучше чем без защиты.';
   ability = 'Один раз за бой воскрешается с 50% здоровья с неуязвимостью и непоколебимостью 8 сек. При падении любого персонажа, снимает с себя 1 отрицательный эффект и получает мощную регенерацию на 10 сек.';
   marquee1 = `${cerebella.marquee1}`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '8,218';
   hp = '64,704';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'cerebella/Ultimate_Showstopper.png';
   build_2_img = 'cerebella/Excellebella.png';
   build_3_img = 'cerebella/Diamond_Drop.png';
   build_4_img = 'cerebella/Burst.png';
   build_1_desc = 'При убийстве даст 2 рандом баффа.';
   build_2_desc = 'Шанс оглушить.';
   build_3_desc = 'При убийстве даст сильную регенерацию.';
   build_4_desc = 'Прервать атаку противника.';
   skullgirls.replaceChildren();
   pageGenerator();
}

function harlequin() {
   card_name = 'Арлекин';
   aka = 'Арля';
   card_src = 'Harlequin.png';
   description = 'Самая популярная карточка Церебеллы, используется и как атакующая, и как саппорт. Можно гарантированно получить в быстрых играх Церебеллы, в золоте набрав 10 миллионов очков, в алмазе 30 миллионов. Алмазить точно стоит.';
   ability = 'Для себя и для всех союзников увеличивает урон особых приёмов на 20% и их перезарядку на 35%';
   marquee1 = `${cerebella.marquee1} ЛУЧШИЙ выбор.`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '12,960';
   hp = '61,728';
   atk_stats = ['Атака', 'Проницание', 'Перезарядка приёмов'];
   def_stats = ['Не защитник'];
   build_1_img = 'cerebella/Merry_Go-rilla.png';
   build_2_img = 'cerebella/Hammer_Toss.png';
   build_3_img = 'cerebella/Diamond_Drop.png';
   build_4_img = 'cerebella/Battle_Butt.png';
   build_1_desc = 'Основной приём с захватом.';
   build_2_desc = 'Для смены противника.';
   build_3_desc = 'Блокбастер с захватом.';
   build_4_desc = 'В основном после гориллы.';
   supps = ['harlequin', 'martial_outlaw', 'seraph'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function brain_freeze() {
   card_name = 'Отмороженная';
   aka = 'Отморозок';
   card_src = 'Brain_Freeze.png';
   description = 'Слабая вариация, не стоит прокачивать. Буст урона очень низкий, а снижение урона бесполезно из-за огромного урона в этой игре: её просто шотнут, и в атаке и в защите.';
   ability = 'Урон повышается на 3% от текущего здоровья. Урон противника снижается на 3% за каждое комбо.';
   marquee1 = `${cerebella.marquee1}`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '11,271';
   hp = '68,602';
   atk_stats = ['Здоровье', 'Атака', 'Проницание', 'Прирост шкалы'];
   def_stats = ['Здоровье', 'Защита', 'Атака', 'Сопрот криту'];
   build_1_img = 'cerebella/Battle_Butt.png';
   build_2_img = 'cerebella/Lock_n_Load.png';
   build_3_img = 'cerebella/Grab_Bag.png';
   build_4_img = 'cerebella/Burst.png';
   build_1_desc = 'Таран с непоколебимостью.';
   build_2_desc = 'Удар с непоколебимостью.';
   build_3_desc = 'При убийстве даст 2 брони.';
   build_4_desc = 'Прервать атаку противника.';
   supps = ['honormaid', 'martial_outlaw', 'starlight'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function armed_forces() {
   card_name = 'Армия';
   aka = 'Армия';
   card_src = 'Armed_Forces.png';
   description = 'Очень сильный защитный золотой персонаж, в алмазе при этом слабая, легко контрится. Алмазить можно если вам хочется.';
   ability = 'Шанс 10% получить броню и непоколебимость при получении или нанесении удара (включая блок). И шанс перенести 1 отрицательный эффект на противника при получении положительного.';
   marquee1 = `${cerebella.marquee1} Основной выбор.`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '9,581';
   hp = '75,476';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'cerebella/Merry_Go-rilla.png';
   build_2_img = 'cerebella/Burst.png';
   build_3_img = 'cerebella/Diamond_Drop.png';
   build_4_img = 'cerebella/Excellebella.png';
   build_1_desc = 'Не используется вплотную, нужно небольшое расстояние.';
   build_2_desc = 'Прервать атаку противника.';
   build_3_desc = 'При убийстве даст сильную регенерацию.';
   build_4_desc = 'Шанс оглушить.';
   supps = ['surgeon', 'evergreen', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function criminal_mind() {
   card_name = 'Преступный умысел';
   aka = 'Кумыс';
   card_src = 'Criminal_Mind.png';
   description = 'Достойный для прокачки универсал. В атаке, огромный урон за счёт метки смерти и критов, кровотечения. В защите, шипы и кровотечение, однако танк из неё так себе. Не для новичков, так как требует высоких характеристик шанса: 80-100%, из-за чего боится Пэйнвил с отражением урона или Далий с регенерациями.';
   ability = 'Когда любой персонаж отнимает не менее 10% макс здоровья одним ударом, дает вам шипы на 10 сек и метку смерти на противника, а также накладывает им кровотечение на 5 секунд при отскоке под действием метки смерти.';
   marquee1 = `${cerebella.marquee1} Основной выбор.`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '12,960';
   hp = '61,728';
   atk_stats = ['Шанс крита', 'Урон крита', 'Атака', 'Проницание'];
   def_stats = ['Здоровье', 'Защита', 'Атака'];
   build_1_img = 'cerebella/Diamonds_are_Forever.png';
   build_2_img = 'cerebella/Battle_Butt.png';
   build_3_img = 'cerebella/Excellebella.png';
   build_4_img = 'cerebella/Pummel_Horse.png';
   build_1_desc = 'Наносит большой урон.';
   build_2_desc = 'Наложит раскол защиты.';
   build_3_desc = 'Шанс оглушить.';
   build_4_desc = 'Поймать подброшенного противника и дать кровотечение.';
   supps = ['horse', 'martial_outlaw', 'starlight'];
   build_form_name1 = 'Интересный билд для кумыса';
   build_form_path1 = '<img src="files/moves/cerebella/build1_criminal_mind.jpg">';
   build_form_name2 = 'Видео геймплея билда';
   build_form_path2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SRcACIE4azQ?si=nnJYFAMbhjnOomlm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function scare_giver() {
   card_name = 'Страшила';
   aka = 'Страшила';
   card_src = 'Scare_Giver.png';
   description = 'Сложно что-то однозначно сказать сейчас, карточка совсем новая ещё. Но предположительно, сильнейшая дд Церебелла.';
   ability = 'При падении противника, даёт ему иссушение и себе ускорение на 8 секунд. При ударе под ускорением, шанс 15% получить бешенство на 10 сек и забрать 3% НР противника.';
   marquee1 = `${cerebella.marquee1} Основной выбор.`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '11,271';
   hp = '68,602';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'cerebella/Diamonds_are_Forever.png';
   build_2_img = 'cerebella/Battle_Butt.png';
   build_3_img = 'cerebella/Merry_Go-rilla.png';
   build_4_img = 'cerebella/Pummel_Horse.png';
   build_1_desc = 'Наносит большой урон.';
   build_2_desc = 'Наложит раскол защиты.';
   build_3_desc = 'Не используется вплотную, нужно небольшое расстояние.';
   build_4_desc = 'Поймать подброшенного противника и дать кровотечение.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function blitz_glamour() {
   card_name = 'Сила денег';
   aka = 'Деньга';
   card_src = 'Blitz_Glamour.png';
   description = 'Сильная и достойная прокачки Церебелла. Направление узкое: играют в основном против хиллеров, накладывает полярность, под которой регенерация работает как кровотечение (смертельно). Также можно использовать приём "Гимнастический конь", который наложит кровотечение, на модах или персонажей, которые превращают кровь в регенерацию (например, параллельные миры). Может также играть против дебафферов, имея постоянный иммунитет. Урона хватает также для простых боёв.';
   ability = 'На своей стороне, каждые 5 сек снимает все отрицательные эффекты и получает постоянные иммунитет и регенерацию, снимаются при нокдауне. На стороне противника, при ударе шанс 15% наложить обратную полярность и раскол брони на 10 сек.';
   marquee1 = `${cerebella.marquee1} Основной выбор.`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '11,271';
   hp = '68,602';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Сопрот криту'];
   build_1_img = 'cerebella/Diamonds_are_Forever.png';
   build_2_img = 'cerebella/Battle_Butt.png';
   build_3_img = 'cerebella/Merry_Go-rilla.png';
   build_4_img = 'cerebella/Pummel_Horse.png';
   build_1_desc = 'Наносит большой урон.';
   build_2_desc = 'Наложит раскол защиты.';
   build_3_desc = 'Не используется вплотную, нужно небольшое расстояние.';
   build_4_desc = 'Поймать подброшенного противника и дать кровотечение.';
   supps = ['honormaid', 'martial_outlaw', 'mogul'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}

function heavy_handed() {
   card_name = 'Тяжёлая рука';
   aka = 'Рука';
   card_src = 'Heay_Handed.png';
   description = 'Задуманная как атакующая алмазная Церебелла, очень плохо себя проявляет и не рекомендуется прокачивать. Как исключение, можно прокачать в защиту с 3 таранами и 2 взрывами, иногда даёт попотеть против себя.';
   ability = 'В заряженном состоянии каждые 0,1 сек дает безвременные баффы бешенства, а при достижении 5 стаков получает непоколебимость на 10 сек. Эти эффекты снимаются при нанесении удара.';
   marquee1 = `${cerebella.marquee1}`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '13,152';
   hp = '80,045';
   atk_stats = ['Шанс крита', 'Урон крита', 'Атака', 'Проницание'];
   def_stats = ['Здоровье', 'Защита', 'Атака', 'Шанс крита'];
   build_1_img = 'cerebella/Diamonds_are_Forever.png';
   build_2_img = 'cerebella/Battle_Butt.png';
   build_3_img = 'cerebella/Lock_n_Load.png';
   build_4_img = 'cerebella/Ultimate_Showstopper.png';
   build_1_desc = 'Наносит большой урон.';
   build_2_desc = 'Наложит раскол защиты.';
   build_3_desc = 'Непоколебимая атака с увеличенным шансом крита.';
   build_4_desc = 'При убийстве получит 2 рандом баффа.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function star_spangled() {
   card_name = 'Звёзды и полосы';
   aka = 'Полоска';
   card_src = 'Star-Spangled.png';
   description = 'Весьма странная карточка: атакующая абилка и большое здоровье. Но абилку реализовать сложно в воздухе и барьер ей не помогает держать защиту. Не рекомендуется прокачивать, очень слабый персонаж.';
   ability = 'При броске или его отмене, дает барьер себе и раскол брони врагу на 15 сек. Под барьером, и если враг в воздухе, шанс 15% при ударе дать кровотечение и усталость на 7 сек.';
   marquee1 = `${cerebella.marquee1}`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '11,175';
   hp = '88,052';
   atk_stats = ['Атака', 'Проницание', 'Точность', 'Криты'];
   def_stats = ['Здоровье', 'Защита', 'Атака', 'Точность'];
   build_1_img = 'cerebella/Diamonds_are_Forever.png';
   build_2_img = 'cerebella/Diamond_Dynamo.png';
   build_3_img = 'cerebella/Cerecopter.png';
   build_4_img = 'cerebella/Diamond_Drop.png';
   build_1_desc = 'Наносит большой урон.';
   build_2_desc = 'Увеличивает урон за комбо и держит в воздухе.';
   build_3_desc = 'Много ударов в воздухе.';
   build_4_desc = 'Тоже считается как атака в воздухе, хотя захватывает с земли.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function mekastar() {
   card_name = 'Мехастар';
   aka = 'Меха';
   card_src = 'Mekastar.png';
   description = '';
   ability = '';
   marquee1 = `${cerebella.marquee1}`;
   marquee2 = `${cerebella.marquee2}`;
   prestige_description = `${cerebella.prestige}`;
   prestige_activation = `${cerebella.p_active}`;
   at = '15,130';
   hp = '72,058';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'cerebella/Merry_Go-rilla.png';
   build_2_img = 'cerebella/Hammer_Toss.png';
   build_3_img = 'cerebella/Diamond_Drop.png';
   build_4_img = 'cerebella/Battle_Butt.png';
   build_1_desc = 'Основной приём с захватом.';
   build_2_desc = 'Для смены противника.';
   build_3_desc = 'Блокбастер с захватом.';
   build_4_desc = 'В основном после гориллы.';
   skullgirls.replaceChildren();
   pageGenerator();
}