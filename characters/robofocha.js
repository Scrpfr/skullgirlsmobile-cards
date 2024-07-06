const robofocha = {
   marquee1: 'DDOS - рядом с противником накладывает всплеск энергии на 5 сек каждые 3 сек.',
   marquee2: 'PING - далеко от противника получает бешенство на 5 сек каждые 2 сек.',
   prestige: 'Получает 5 стаков точности и отражает часть получаемого урона, в зависимости от кол-ва баффов на ней или противнике (до 100%).',
   p_active: '7% за любой бафф или дебафф.'
}

function prototype() {
   card_name = 'Прототип';
   aka = 'Прототип';
   card_src = 'Prototype.png';
   description = 'Хорошая вариация для ознакомления с Робо Форчун. Всплеск энергии это эффект, который отнимает часть здоровья при активации блокбастера, Робо Форчун любит такой эффект. Качать можно, но до золота: алмазить уже не стоит.';
   ability = 'При активации блокбастера, получит 25% шкалы блокбастерам. Удары блокбастеров с шансом 25% наложат всплеск энергии на 10 сек.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '8,295';
   hp = '39,188';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_2_img = 'robofocha/MAGNETIC_TRAP_B.png';
   build_3_img = 'robofocha/CIRCUIT_BREAKER_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Накладывает иссушение.';
   build_2_desc = 'Используется к подброшенному противнику, с цепью увеличен урон.';
   build_3_desc = 'Заряжает цепь, но отнимает часть здоровья при активации.';
   build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function m30w() {
   card_name = 'М-РУ';
   aka = 'Мру';
   card_src = 'M-3OW.png';
   description = 'Очень хороший зонер, но врядли для новичков, так как требует игру на дистанции лазерами и хорошо прокачанные характеристики, ускорение зарядки ос или блокбастеров например. Но прокачивать можно.';
   ability = 'Если находится далеко от противника, удваивает урон и получает неуязвимость на 5 секунд каждые 3 секунды.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '7,162';
   hp = '55,431';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_3_img = 'robofocha/Phaser_Burn_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   build_2_desc = 'Накладывает иссушение.';
   build_3_desc = 'Шанс снять баффы и оглушить.';
   build_4_desc = 'Мета приём.';
   build_form_name1 = 'Финальное развитие билда (можно качать шанс крита, так как у алмазных Робо есть точность, что даёт им 100% шанса)';
   build_form_path1 = '<img src="files/moves/robofocha/build1_xbot.jpg">';
   build_form_name2 = 'Второй вариант';
   build_form_path2 = '<img src="files/moves/robofocha/build1_overclocked.jpg">';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
   highlight(m2);
}

function nyanotech() {
   card_name = 'Нянотехнологии';
   aka = 'Няно';
   card_src = 'Nyanotech.png';
   description = 'Отличный вариант для новичков, особенно с саппортами что дадут барьеры. Под барьером ей не страшны негативные эффекты, возможно кроме порчи (которая деактивирует абилку). Качать можно, но в алмазе уже менее полезна.';
   ability = 'Запуск дрона активирует барьер на 10 секунд. Под барьером, превращает отрицательные эффекты в бешенство.';
   marquee1 = `${robofocha.marquee1} Основной выбор.`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '7,335';
   hp = '57,485';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'robofocha/ASSAULT_BATTERY_B.png';
   build_2_img = 'robofocha/MAGNETIC_TRAP_B.png';
   build_3_img = 'robofocha/CIRCUIT_BREAKER_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Может дать всплеск энергии.';
   build_2_desc = 'Используется к подброшенному противнику, с цепью увеличен урон.';
   build_3_desc = 'Заряжает цепь, но отнимает часть здоровья при активации.';
   build_4_desc = 'Мета приём.';
   supps = ['persona', 'joy', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m1);
}
function blue_bomber() {
   card_name = 'Синий подрывник';
   aka = 'Подрывник';
   card_src = 'Blue_Bomber.png';
   description = 'Абилка связанная с блокбастером третьего уровня (с черепами на рамке блокбастера). При этом защитная, не помогает в атаке, а в защите также бесполезна. Не стоит качать.';
   ability = 'Лучевые и энергетические атаки имеют шанс 25% активировать раскол брони на 15 сек. При активации бб3, восстанавливает 25% здоровья и получает 5 барьеров.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '8,218';
   hp = '50,324';
   atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/MAGNETIC_TRAP_B.png';
   build_3_img = 'robofocha/CIRCUIT_BREAKER_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   build_2_desc = 'Используется к подброшенному противнику, с цепью увеличен урон.';
   build_3_desc = 'Заряжает цепь, но отнимает часть здоровья при активации.';
   build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function vector_protector() {
   card_name = 'Защита вектора';
   aka = 'Векторман';
   card_src = 'Vector_Protector.png';
   description = 'Не для новичков, требует мощный билд. Неплохой вариант, но качать не стоит: время баффов слишком короткое и низкий урон, лучше прокачать что-то лучше.';
   ability = 'Когда любой персонаж использует особый приём, получает броню на 10 сек. Использование блокбастера превращает все уровни брони в миазмы на 10 сек.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2} Основной выбор.`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '7,604';
   hp = '58,791';
   atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   def_stats = ['Не защитник'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_3_img = 'robofocha/Phaser_Burn_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   build_2_desc = 'Накладывает иссушение.';
   build_3_desc = 'Шанс снять баффы и оглушить.';
   build_4_desc = 'Мета приём.';
   build_form_name1 = 'Финальное развитие билда (можно качать шанс крита для вектора)';
   build_form_path1 = '<img src="files/moves/robofocha/build1_xbot.jpg">';
   build_form_name2 = 'Второй вариант';
   build_form_path2 = '<img src="files/moves/robofocha/build1_overclocked.jpg">';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
   highlight(m2);
}
function purrminator() {
   card_name = 'Мур-р-минатор';
   aka = 'Мурка';
   card_src = 'Purrminator.png';
   description = 'Отличный персонаж как для новичков, так и для опытных игроков: может разгонять себе урон критами до бесконечности. Достойна алмаза.';
   ability = 'Каждый критический удар перманентно увеличивает урон на 3%. Удары в блок дают шанс 15% получить точность и наложить метку смерти на 10 сек.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '9,946';
   hp = '47,021';
   atk_stats = ['Проницание', 'Точность', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_2_img = 'robofocha/MAGNETIC_TRAP_B.png';
   build_3_img = 'robofocha/CIRCUIT_BREAKER_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Накладывает иссушение.';
   build_2_desc = 'Восстановит НР и даст барьер.';
   build_3_desc = 'Может дать всплеск энергии.';
   build_4_desc = 'Мета приём.';
   supps = ['sheltered', 'joy', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
   highlight(m2);
}

function head_hunter() {
   card_name = 'Головорезка';
   aka = 'Резка';
   card_src = 'Head_Hunter.png';
   description = 'Большая базовая атака, точность, неблокируемые атаки и бешенство от уника делают головорезку очень сильным и полезным персонажем, однозначно качать. Но здоровья мало, нужно играть аккуратнее, чем икс-ботом например.';
   ability = 'Каждые 0,5 сек получает точность, стоя в блоке и не получая ударов. Более чем 3 стака точности даёт лучевым и лазерным атакам быть неблокируемыми и накладывать всплеск энергии на 15 сек.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '12,960';
   hp = '48,039';
   atk_stats = ['Атака', 'Проницание', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_3_img = 'robofocha/Phaser_Burn_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   build_2_desc = 'Накладывает иссушение.';
   build_3_desc = 'Шанс снять баффы и оглушить.';
   build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function number_cruncher() {
   card_name = 'Числодробилка';
   aka = 'Числодробилка';
   card_src = 'Number_Cruncher.png';
   description = 'Можно получить только за официальные ивенты и только платно. Поэтому эта карточка никому не нужна, и абилка выглядит слабовато.';
   ability = 'Шанс 50% получить благославение на 20 сек за каждые 5 комбо. При достижении 5 стаков благославения, они снимаются и противник получает 5 расколов брони на 10 сек.';
   marquee1 = `${robofocha.marquee1} Основной выбор.`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '11,271';
   hp = '53,357';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'robofocha/ASSAULT_BATTERY_B.png';
   build_2_img = 'robofocha/MAGNETIC_TRAP_B.png';
   build_3_img = 'robofocha/CIRCUIT_BREAKER_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Может дать всплеск энергии.';
   build_2_desc = 'Используется к подброшенному противнику, с цепью увеличен урон.';
   build_3_desc = 'Заряжает цепь, но отнимает часть здоровья при активации.';
   build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function blue_screen() {
   card_name = 'Синий экран';
   aka = 'Кран';
   card_src = 'Blue_Screen.png';
   description = 'Очень хорошая защитная карточка, довольно популярная. В основном, ставят на защиту в рифтах на правый соло нод с катализатором "Ледяная броня".';
   ability = 'Получает броню каждые 5 сек, но снимаются при нокдауне. При смерти взрывается и наносит доп 50% урона за каждый уровень брони на себе.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '7,527';
   hp = '75,476';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_3_img = 'robofocha/Burst_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы, при убийстве блокирует воскрешение.';
   build_2_desc = 'Накладывает иссушение.';
   build_3_desc = 'Прерывает атаку врага.';
   build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function terror_byte() {
   card_name = 'Террор-байт';
   aka = 'Терка';
   card_src = 'Terror_Byte.png';
   description = 'Полезна только обратной полярностью, которая делает баффы регенерации практически кровотечением, при этом может убить, в отличии от кровотечений. Можно качать для контры хиллеров.';
   ability = 'Каждые 5 сек, не получая ударов (включая блок), накладывает замедление и всплеск энергии на 10 сек. Удары дронов (включая блок) накладывают обратную полярность на 15 сек.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '10,100';
   hp = '60,960';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_3_img = 'robofocha/Phaser_Burn_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   build_2_desc = 'Накладывает иссушение.';
   build_3_desc = 'Шанс снять баффы и оглушить.';
   build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function persona_assistant() {
   card_name = 'Персона-бот';
   aka = 'Персона';
   card_src = 'Persona_Assistant.png';
   description = 'Вполне крутая и полезная атакующая карточка, можно качать и алмазить. Может также использоваться как саппорт, дающий барьеры и баффы воскрешения, но как саппорт, очень слаба.';
   ability = 'Пока жива, каждые 30 сек получает 5 точности и 5 бешенств на 5 сек, а другой активный персонаж получает благославение и барьер. Под бешенством, атака в рывке неблокируема.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '10,157';
   hp = '61,767';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Не защитник'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_3_img = 'robofocha/Phaser_Burn_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   build_2_desc = 'Накладывает иссушение.';
   build_3_desc = 'Шанс снять баффы и оглушить.';
   build_4_desc = 'Мета приём.';
   supps = ['peashooter', 'joy', 'evergreen'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function buffer_zone() {
   card_name = 'Буферная зона';
   aka = 'Буфер';
   card_src = 'Buffer_Zone.png';
   description = 'Универсал, слабый в алмазе, можно не качать эту вариацию. Но в золоте, вполне хороший вариант для новичков. Антибафф и непоколебимость можно использовать и в атаке, и в защите. Алмазить не стоит.';
   ability = 'При выходе из запасных, снимает все баффы противника и накладывает проклятье и блок призыва на 10 сек. Энергетические и лучевые атаки с шансом 10% дают барьер и непоколебимость. При смене персонажа, передаёт все свои баффы активному.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '8,564';
   hp = '67,047';
   atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_3_img = 'robofocha/Phaser_Burn_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   build_2_desc = 'Накладывает иссушение.';
   build_3_desc = 'Шанс снять баффы и оглушить.';
   build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}

function overclocked() {
   card_name = 'В разгоне';
   aka = 'Разгон';
   card_src = 'Overclocked.png';
   description = '';
   ability = '';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '11,770';
   hp = '71,117';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_3_img = 'robofocha/Phaser_Burn_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   build_2_desc = 'Накладывает иссушение.';
   build_3_desc = 'Шанс снять баффы и оглушить.';
   build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}
function reimaged() {
   card_name = 'Новый образ';
   aka = 'Образ';
   card_src = 'Reimaged.png';
   description = 'Не смотря на то, что абилка сочетается с престижем, тоесть может заполнять престиж, слабовата, ведь только первый полученный удар даёт броню, эффект не сложится не прервав комбо.';
   ability = 'Первый полученный комбо удар даёт броню на 5 сек и преобразует бафф врага в дебафф. Детонация или смерть уменьшает шкалу блокбастера врага на 100%. Раз за бой, воскрешается с 15% НР с постоянными регенерацией и бешенством.';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '10,004';
   hp = '88,052';
   atk_stats = ['Не атакующий'];
   def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_3_img = 'robofocha/Burst_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы, при убийстве блокирует воскрешение.';
   build_2_desc = 'Накладывает иссушение.';
   build_3_desc = 'Прерывает атаку врага.';
   build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m1);
}
function x_bot() {
   card_name = 'Икс-бот';
   aka = 'Хобот';
   card_src = 'X-Bot.png';
   description = '';
   ability = '';
   marquee1 = `${robofocha.marquee1}`;
   marquee2 = `${robofocha.marquee2}`;
   prestige_description = `${robofocha.prestige}`;
   prestige_activation = `${robofocha.p_active}`;
   at = '10,330';
   hp = '80,045';
   atk_stats = [''];
   def_stats = [''];
   build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   build_3_img = 'robofocha/Phaser_Burn_B.png';
   build_4_img = 'robofocha/Theonite_Beam_B.png';
   build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   build_2_desc = 'Накладывает иссушение.';
   build_3_desc = 'Шанс снять баффы и оглушить.';
   build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
   highlight(m2);
}