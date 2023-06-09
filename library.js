const commands = `
/start - Перезапустить бота 
/help - Помощь 
/film - Выбор жанра для просмотра фильма  
`
const text1 = `
<i><b>Тихое место</b></i>
История одной семьи, которая проживает в небольшой уединённой ферме в далёкой американской глубинке. 
У главных героев есть двое детей. Казалось бы, жизнь этих людей совершенно не отличается от жизни других таких семей. Но...
<b>Так же у фильма есть 2 часть.</b>
Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.inc/films/1557-tihoe-mesto-hdtv-v58-tmd3.html"><u>ФИЛЬМ</u></a>
`
const text2 = `
<i><b>Побег из Шоушенка</b></i>
Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника.
 Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. 
 Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди...
 Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.fm/1310-pobeg-iz-shoushenka-1994.html"><u>ФИЛЬМ</u></a>
`
const text3 = `
<i><b>Коммандос</b></i>
Бывший командир спецотряда, полковник в отставке Джон Матрикс, живёт в большом доме вдали от города вместе со своей 11-летней дочерью Дженни, пока однажды...
Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.biz/19164-kommandos.html"><u>ФИЛЬМ</u></a>
`
const text4 = `
<i><b>Крёстный отец</b></i>
Криминальная сага, повествующая о нью-йоркской сицилийской мафиозной семье Корлеоне. Фильм охватывает период 1945-1955 годов.Глава семьи, Дон Вито Корлеоне...
<b>Так же у фильма есть 2 и 3 часть.</b>
Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.inc/films/1799-krestnyy-otec-hd-v4.html"><u>ФИЛЬМ</u></a>
`
const text5 = `
<i><b>Достать ножи</b></i>
Знаменитый автор детективов Харлан Тромби умирает во время празднования своего 85-летия, в котором участвуют его работники и родственники. На место событий прибывают детективы. Все указывает на ...
<b>Так же у фильма есть 2 часть.</b>
Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.blue/filmy/1135-dostat-nozhi-2019.html"><u>ФИЛЬМ</u></a>
`
const text6 = `
<i><b>Пурпурные сердца</b></i>
Кэсси, мечтающая стать певицей, и Люк, недавно поступивший на службу в армию. Они совершенно разные люди, которых сводит сама судьба. По ряду причин Кэсси нужно выйти замуж за военного, чтобы получить ...
Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.film/films/11818-purpurnye-serdca-2022-smotret-onlajn-besplatno.html"><u>ФИЛЬМ</u></a>
`
const text7 = `
<i><b>Богемская рапсодия</b></i>
Чествование группы Queen, их музыки и их выдающегося вокалиста Фредди Меркьюри, который бросил вызов стереотипам и победил условности, чтобы стать одним из самых любимых артистов на планете. Фильм прослеживает головокружительный путь группы к успеху ...
Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.inc/films/544-bogemskaya-rapsodiya-hdtv-v29.html"><u>ФИЛЬМ</u></a>
`
const text8 = `
<i><b>Дивергент</b></i>
Действие развивается на Земле в будущем, в деспотичном Чикаго. Все подростки, достигшие 16 лет, обязаны выбрать одну из пяти фракций и присоединиться к ней на всю оставшуюся жизнь. Каждая фракция представляет определенное качество ...
<b>Так же у фильма есть 2 и 3 часть.</b>
Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.inc/films/6388-divergent-hd-v2-sw7.html"><u>ФИЛЬМ</u></a>
`
const text9 = `
<i><b>Легенда о Коловрате</b></i>
XIII век. Русь раздроблена и вот-вот падет на колени перед ханом Золотой Орды Батыем. Испепеляя города и заливая русские земли кровью, захватчики не встречают серьезного сопротивления, и лишь один воин бросает им вызов. Молодой рязанский витязь Евпатий Коловрат возглавляет отряд смельчаков, чтобы ...
Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.inc/films/496-legenda-o-kolovrate-hd-v1.html"><u>ФИЛЬМ</u></a>
`
const text10 = `
<i><b>28 панфиловцев</b></i>
Осенью 1941-го года немецкие части, стоявшие возле Волоколамска, отделяло от Москвы каких-нибудь два часа по шоссе. Однако, на этом шоссе стояла 316-я стрелковая дивизия под командованием генерала И. В. Панфилова. Этот военачальник обладал настолько высоким авторитетом среди личного состава ...
Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.biz/32865-28-panfilovcev.html"><u>ФИЛЬМ</u></a>
`

const text11 = `
<i><b>Джанго освобождённый</b></i>
Эксцентричный охотник за головами, также известный как «Дантист», промышляет отстрелом самых опасных преступников на Диком Западе. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Беглый раб по имени Джанго — прекрасная ...
Для того чтобы посмотреть в хорошом качестве предлагаю вам посмотреть здесь <a href="https://kinogo.biz/20043-dzhango-osvobozhdennyj.html"><u>ФИЛЬМ</u></a>
`

module.exports.commands = commands
module.exports.text1 = text1
module.exports.text2 = text2
module.exports.text3 = text3
module.exports.text4 = text4
module.exports.text5 = text5
module.exports.text6 = text6
module.exports.text7 = text7
module.exports.text8 = text8
module.exports.text9 = text9
module.exports.text10 = text10
module.exports.text11 = text11