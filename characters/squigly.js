const squigly = {
   marquee1: 'Мертвецы - стоя на трупе Сквигли, атаки союзников накладывают на противника проклятье и иссушение на 15 сек.',
   marquee2: 'Мертвечина - стоя на трупе Сквигли, союзник получает Неупал на 15 сек при получении ударов.',
   prestige: 'Получает заряд каждые 7 секунд стоя на трупе. После активации мертвецов нельзя воскрешать.',
   p_active: '12% за каждый полученный или использованный заряд.'
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
