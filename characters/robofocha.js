const robofocha = {
   marquee1: 'DDOS - рядом с противником накладывает скачок напряжения на 5 сек каждые 3 сек.',
   marquee2: 'PING - далеко от противника получает бешенство на 5 сек каждые 2 сек.',
   prestige: 'Получает 5 стаков точности и отражает часть получаемого урона, в зависимости от кол-ва баффов на ней или противнике.',
   p_active: '7% за любой бафф или дебафф.'
}

function prototype() {
   person.card_name = 'Прототип';
   person.aka = 'Прототип';
   person.card_src = 'Prototype.png';
   person.description = 'Хорошая вариация для ознакомления с Робо Форчун. Всплеск энергии это эффект, который отнимает часть здоровья при активации блокбастера, Робо Форчун любит такой эффект. Качать можно, но до золота: алмазить уже не стоит.';
   person.ability = 'При активации блокбастера, получит 25% шкалы блокбастерам. Удары блокбастеров с шансом 25% наложат всплеск энергии на 10 сек.';
   person.marquee1 = `${robofocha.marquee1}`;
   person.marquee2 = `${robofocha.marquee2}`;
   person.prestige_description = `${robofocha.prestige}`;
   person.prestige_activation = `${robofocha.p_active}`;
   person.at = '8,295';
   person.hp = '39,188';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   person.build_2_img = 'robofocha/MAGNETIC_TRAP_B.png';
   person.build_3_img = 'robofocha/CIRCUIT_BREAKER_B.png';
   person.build_4_img = 'robofocha/Theonite_Beam_B.png';
   person.build_1_desc = 'Накладывает иссушение.';
   person.build_2_desc = 'Используется к подброшенному противнику, с цепью увеличен урон.';
   person.build_3_desc = 'Заряжает цепь, но отнимает часть здоровья при активации.';
   person.build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function m30w() {
   person.card_name = 'М-РУ';
   person.aka = 'Мру';
   person.card_src = 'M-3OW.png';
   person.description = 'Очень хороший зонер, но врядли для новичков, так как требует игру на дистанции лазерами и хорошо прокачанные характеристики, ускорение зарядки ос или блокбастеров например. Но прокачивать можно.';
   person.ability = 'Если находится далеко от противника, удваивает урон и получает неуязвимость на 5 секунд каждые 3 секунды.';
   person.marquee1 = `${robofocha.marquee1}`;
   person.marquee2 = `${robofocha.marquee2} ТОЛЬКО Пинг.`;
   person.prestige_description = `${robofocha.prestige}`;
   person.prestige_activation = `${robofocha.p_active}`;
   person.at = '7,162';
   person.hp = '55,431';
   person.atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   person.build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   person.build_3_img = 'robofocha/Phaser_Burn_B.png';
   person.build_4_img = 'robofocha/Theonite_Beam_B.png';
   person.build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   person.build_2_desc = 'Накладывает иссушение.';
   person.build_3_desc = 'Шанс снять баффы и оглушить.';
   person.build_4_desc = 'Мета приём.';
   person.build_form_name1 = 'Финальное развитие билда (можно качать шанс крита, так как у алмазных Робо есть точность, что даёт им 100% шанса)';
   person.build_form_path1 = '<img src="files/moves/robofocha/build1_xbot.jpg">';
   person.build_form_name2 = 'Второй вариант';
   person.build_form_path2 = '<img src="files/moves/robofocha/build1_overclocked.jpg">';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}

function nyanotech() {
   person.card_name = 'Нянотехнологии';
   person.aka = 'Няно';
   person.card_src = 'Nyanotech.png';
   person.description = 'Отличный вариант для новичков, особенно с саппортами что дадут барьеры. Под барьером ей не страшны негативные эффекты, возможно кроме порчи (которая деактивирует абилку). Качать можно, но в алмазе уже менее полезна.';
   person.ability = 'Запуск дрона активирует барьер на 10 секунд. Под барьером, превращает отрицательные эффекты в бешенство.';
   person.marquee1 = `${robofocha.marquee1} Основной выбор.`;
   person.marquee2 = `${robofocha.marquee2}`;
   person.prestige_description = `${robofocha.prestige}`;
   person.prestige_activation = `${robofocha.p_active}`;
   person.at = '7,335';
   person.hp = '57,485';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'robofocha/ASSAULT_BATTERY_B.png';
   person.build_2_img = 'robofocha/MAGNETIC_TRAP_B.png';
   person.build_3_img = 'robofocha/CIRCUIT_BREAKER_B.png';
   person.build_4_img = 'robofocha/Theonite_Beam_B.png';
   person.build_1_desc = 'Может дать всплеск энергии.';
   person.build_2_desc = 'Используется к подброшенному противнику, с цепью увеличен урон.';
   person.build_3_desc = 'Заряжает цепь, но отнимает часть здоровья при активации.';
   person.build_4_desc = 'Мета приём.';
   person.supps = ['persona', 'joy', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}
function blue_bomber() {
   person.card_name = 'Синий подрывник';
   person.aka = 'Подрывник';
   person.card_src = 'Blue_Bomber.png';
   person.description = 'Абилка связанная с блокбастером третьего уровня (с черепами на рамке блокбастера). При этом защитная, не помогает в атаке, а в защите также бесполезна. Не стоит качать.';
   person.ability = 'Лучевые и энергетические атаки имеют шанс 25% активировать раскол брони на 15 сек. При активации бб3, восстанавливает 25% здоровья и получает 5 барьеров.';
   person.marquee1 = `${robofocha.marquee1}`;
   person.marquee2 = `${robofocha.marquee2}`;
   person.prestige_description = `${robofocha.prestige}`;
   person.prestige_activation = `${robofocha.p_active}`;
   person.at = '8,218';
   person.hp = '50,324';
   person.atk_stats = ['Атака', 'Проницание', 'Прирост шкалы', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   person.build_2_img = 'robofocha/MAGNETIC_TRAP_B.png';
   person.build_3_img = 'robofocha/CIRCUIT_BREAKER_B.png';
   person.build_4_img = 'robofocha/Theonite_Beam_B.png';
   person.build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   person.build_2_desc = 'Используется к подброшенному противнику, с цепью увеличен урон.';
   person.build_3_desc = 'Заряжает цепь, но отнимает часть здоровья при активации.';
   person.build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function vector_protector() {
   person.card_name = 'Защита вектора';
   person.aka = 'Векторман';
   person.card_src = 'Vector_Protector.png';
   person.description = 'Не для новичков, требует мощный билд. Неплохой вариант, но надоест быстро и качать его не так уж важно. Проще не качать.';
   person.ability = 'Когда любой персонаж использует особый приём, получает броню на 10 сек. Использование блокбастера превращает все уровни брони в миазмы на 10 сек.';
   person.marquee1 = `${robofocha.marquee1}`;
   person.marquee2 = `${robofocha.marquee2} Основной выбор.`;
   person.prestige_description = `${robofocha.prestige}`;
   person.prestige_activation = `${robofocha.p_active}`;
   person.at = '7,604';
   person.hp = '58,791';
   person.atk_stats = ['Атака', 'Проницание', 'Перез приёмов', 'Криты'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   person.build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   person.build_3_img = 'robofocha/Phaser_Burn_B.png';
   person.build_4_img = 'robofocha/Theonite_Beam_B.png';
   person.build_1_desc = 'Снимает баффы при этом увеличивает урон, убитые враги не воскреснут.';
   person.build_2_desc = 'Накладывает иссушение.';
   person.build_3_desc = 'Шанс снять баффы и оглушить.';
   person.build_4_desc = 'Мета приём.';
   person.build_form_name1 = 'Финальное развитие билда (можно качать шанс крита для вектора)';
   person.build_form_path1 = '<img src="files/moves/robofocha/build1_xbot.jpg">';
   person.build_form_name2 = 'Второй вариант';
   person.build_form_path2 = '<img src="files/moves/robofocha/build1_overclocked.jpg">';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
}
function purrminator() {
   person.card_name = 'Мур-р-минатор';
   person.aka = 'Мурка';
   person.card_src = 'Purrminator.png';
   person.description = 'Отличный персонаж как для новичков, так и для опытных игроков: может разгонять себе урон критами до бесконечности. Достойна алмаза.';
   person.ability = 'Каждый критический удар перманентно увеличивает урон на 3%. Удары в блок дают шанс 15% получить точность и наложить метку смерти на 10 сек.';
   person.marquee1 = `${robofocha.marquee1}`;
   person.marquee2 = `${robofocha.marquee2}`;
   person.prestige_description = `${robofocha.prestige}`;
   person.prestige_activation = `${robofocha.p_active}`;
   person.at = '9,946';
   person.hp = '47,021';
   person.atk_stats = ['Проницание', 'Точность', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   person.build_2_img = 'robofocha/ASSAULT_BATTERY_B.png';
   person.build_3_img = 'robofocha/Fidget_Spin_B.png';
   person.build_4_img = 'robofocha/Theonite_Beam_B.png';
   person.build_1_desc = 'Накладывает иссушение.';
   person.build_2_desc = 'Может дать всплеск энергии.';
   person.build_3_desc = 'Используется в комбинации.';
   person.build_4_desc = 'Мета приём.';
   person.supps = ['sheltered', 'joy', 'rosetin'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}

function number_cruncher() {
   person.card_name = 'Числодробилка';
   person.aka = 'Числодробилка';
   person.card_src = 'Number_Cruncher.png';
   person.description = 'Можно получить только за официальные ивенты и только платно. Поэтому эта карточка никому не нужна, и абилка выглядит слабовато.';
   person.ability = 'Шанс 50% получить благославение на 20 сек за каждые 5 комбо. При достижении 5 стаков благославения, они снимаются и противник получает 5 расколов брони на 10 сек.';
   person.marquee1 = `${robofocha.marquee1} Основной выбор.`;
   person.marquee2 = `${robofocha.marquee2}`;
   person.prestige_description = `${robofocha.prestige}`;
   person.prestige_activation = `${robofocha.p_active}`;
   person.at = '11,271';
   person.hp = '53,357';
   person.atk_stats = ['Атака', 'Проницание', 'Шанс крита', 'Урон крита'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'robofocha/ASSAULT_BATTERY_B.png';
   person.build_2_img = 'robofocha/MAGNETIC_TRAP_B.png';
   person.build_3_img = 'robofocha/CIRCUIT_BREAKER_B.png';
   person.build_4_img = 'robofocha/Theonite_Beam_B.png';
   person.build_1_desc = 'Может дать всплеск энергии.';
   person.build_2_desc = 'Используется к подброшенному противнику, с цепью увеличен урон.';
   person.build_3_desc = 'Заряжает цепь, но отнимает часть здоровья при активации.';
   person.build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
}
function blue_screen() {
   person.card_name = 'Синий экран';
   person.aka = 'Кран';
   person.card_src = 'Blue_Screen.png';
   person.description = 'Очень хорошая защитная карточка, довольно популярная. В основном, ставят на защиту в рифтах на правый соло нод с катализатором "Ледяная броня".';
   person.ability = 'Получает броню каждые 5 сек, но снимаются при нокдауне. При смерти взрывается и наносит доп 50% урона за каждый уровень брони на себе.';
   person.marquee1 = `${robofocha.marquee1} Основной выбор.`;
   person.marquee2 = `${robofocha.marquee2}`;
   person.prestige_description = `${robofocha.prestige}`;
   person.prestige_activation = `${robofocha.p_active}`;
   person.at = '7,527';
   person.hp = '75,476';
   person.atk_stats = ['Не атакующий'];
   person.def_stats = ['Здоровье', 'Защита', 'Сопротивление', 'Сопрот криту'];
   person.build_1_img = 'robofocha/CATASTROPHE_CANNON_OMEGA_B.png';
   person.build_2_img = 'robofocha/CATASTROPHE_CANNON_ALPHA_B.png';
   person.build_3_img = 'robofocha/Burst_B.png';
   person.build_4_img = 'robofocha/Theonite_Beam_B.png';
   person.build_1_desc = 'Снимает баффы, при убийстве блокирует воскрешение.';
   person.build_2_desc = 'Накладывает иссушение.';
   person.build_3_desc = 'Прерывает атаку врага.';
   person.build_4_desc = 'Мета приём.';
   skullgirls.replaceChildren();
   pageGenerator();
}
