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
   person.description = 'Вполне хорошая вариация Энни, достойная прокачки до алмаза. Разработчики решили усложнить игру за неё добавив усталость, но можно активировать режим будучи под иммунитетом чтобы не получить усталость, либо снять этот эффект.';
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
   person.build_3_desc = 'Обездвижит ударами.';
   person.build_4_desc = 'Может дать раскол защиты.';
   person.supps = ['honormaid', 'martial_outlaw', 'surgeon'];
   skullgirls.replaceChildren();
   pageGenerator();
   supports();
}

function triple_threat() {
   person.card_name = 'Тройная угроза';
   person.aka = 'Троян';
   person.card_src = 'Triple_Threat.png';
   person.description = 'Весьма интересный персонаж, но не для новичков: требует высокие статы. Может быть постоянно под неуязвимостью, таким образом не получать никакого урона, а наносить урон апперкотами, у которых специальный бонус урона.';
   person.ability = 'Даёт иммунитет, непоколебимость или неуязвимость на 9 сек при активации звёздного влияния, перестаёт быть постоянным при отключении режима. При исп особ приёма, шанс 33% сбросить таймеры баффов и получить 20% к шкале влияния.';
   person.marquee1 = `${annie.marquee1} ЕДИНСТВЕННЫЙ выбор.`;
   person.marquee2 = `${annie.marquee2}`;
   person.prestige_description = `${annie.prestige}`;
   person.prestige_activation = `${annie.p_active}`;
   person.at = '7,335';
   person.hp = '57,485';
   person.atk_stats = ['Атака', 'Точность', 'Шанс крита', 'Урон крита', 'Перез приёмов'];
   person.def_stats = ['Не защитник'];
   person.build_1_img = 'annie/Destruction_Pillar.png';
   person.build_2_img = 'annie/Sagan_Beam.png';
   person.build_3_img = 'annie/Gravity_Slingshot.png';
   person.build_4_img = 'annie/Crescent_Cut.png';
   person.build_1_desc = 'Бонус к урону при критическом ударе.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Обездвижит ударами.';
   person.build_4_desc = 'Может дать раскол защиты.';
   person.build_form_name1 = 'Основной билд';
   person.build_form_path1 = '<img src="files/moves/annie/build1_triple_threat.jpg">';
   person.build_form_name2 = 'Видео';
   person.build_form_path2 = '<iframe src="https://www.youtube.com/embed/MFkD86Rnfgc?si=WIyJ7cL9LM1IcTG3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
   skullgirls.replaceChildren();
   pageGenerator();
   buildLoad();
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
   person.build_4_img = 'annie/Crescent_Cut.png';
   person.build_1_desc = 'Перекладывает с себя дебаффы и станит.';
   person.build_2_desc = 'Восстановить здоровье.';
   person.build_3_desc = 'Обездвижит ударами.';
   person.build_4_desc = 'Может дать раскол защиты.';
   person.addition = 'Отсылка: отсылает на персонажа Несса из покемон меч и щит. Гим лидер, использующий водяных покемонов, а как лидер, обладает своим стадионом, который водяные гим лидеры обычно наполняют водой, о чём и говорится в фразе.';
   skullgirls.replaceChildren();
   pageGenerator();
   addition();
}