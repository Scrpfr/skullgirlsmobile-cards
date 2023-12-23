const robofocha = {
   marquee1: 'DDOS - рядом с противником накладывает скачок напряжения на 5 сек каждые 3 сек.',
   marquee2: 'PING - далеко от противника получает бешенство на 5 сек каждые 2 сек.',
   prestige: 'Получает 5 стаков точности и отражает часть получаемого урона в зависимости от кол-ва баффов на ней или противнике.',
   p_active: '7% за любой бафф или дебафф.'
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
