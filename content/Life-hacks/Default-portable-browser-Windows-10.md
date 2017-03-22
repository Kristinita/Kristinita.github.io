Title: Установка портативной версии Pale Moon в качестве браузера по умолчанию в Windows 10
Date: 2017-02-13 19:15:15
Author: Sasha Chernykh
Lang: en
Summary: 
Pagetitle: Портативный браузер по умолчанию в Windows 10
Metacontent: Description, how to make Pale Moon default browser in Windows
Pagecolors: life-hacks
Iconleftorright: left
Tags: life-hacks, pale-moon
Category: Life-hacks,
JQuery: true
Rainbow: true
Tooltipster: true
ClipboardJs: true
DetailsPolyfill: false
Stylesheets: personal/Life-hacks/default-portable-browser.css
Noco: 1vWK5

<a href="#Why-Portable" target="_self">Почему портативный браузер?</a>
<br />
<a href="#Why-Pale-Moon" target="_self">Почему Pale Moon?</a>
<br />
<a href="#Not-work" target="_self">Установка Pale Moon браузером по умолчанию обычными методами</a>
<br />
<a href="#Solution" target="_self">Решение</a>
<br />
<br />
<br />
<h3 id="Why-Portable">Почему портативный браузер?</h3>
<br />
<ol>
	Всё нижеперечисленное можно отнести к достоинствам любых других <a href="http://computerstory.ru/?p=3524">портативных программ</a>, не только браузеров.
	<br />
	<br />
	<li>Настройки браузера: профили, расширения, скрипты, стили и т. д. не слетают без всяких дополнительных действий со стороны пользователя при следующих обстоятельствах:
		<br />
		<br />
		<ul type="disc">
			<li>Если предстоит переустановка — число каковых на моём веку перевалило за десяток — операционной системы.</li>
			<li>Когда вы на некоторое время оказались отлучённым от компьютера, которым обычно пользуетесь. Запустив Pale Moon Portable (далее также просто <em>Pale Moon</em>, <em>PM</em>) на чужом компьютере c внешнего съёмного носителя, окажетесь в родной среде, со всеми настройками, которые у вас присутствовали. Портативный браузер можно установить с флэшки, внешнего жёсткого диска, как который допустимо использовать и диск с интерфейсом SATA, подключив его к док-станции.</li>
		</ul>
		<br />
	</li>
	<li>При пользовании другим компьютером или замене жёсткого диска, чтобы продолжить работу в PM со всеми накопленными настройками достаточно перенести в новое место только папку, куда установлен этот браузер, — и не придётся ничего копировать с локального диска
		<dfn>С</dfn>, переживая, как что-то пойдёт не так. А после переустановки ОС будет достаточно запустить свой портативный браузер, прежде настроенный под ваши предпочтения, не предпринимая иных действий.</li>
	<br />
	<ul type="disc" class="russianletters">Существуют отдельные средства для экспорта/импорта паролей, закладок, однако
		<br />
		<br />
		<li> лично у меня они, бывало, отказывали, когда возникала в них острая необходимость,</li>
		<li> восстанавливают не всё-всё, как было,</li>
		<li> перенос отнимает время.</li>
		<br /> В силу причин
		<dfn>а</dfn> и
		<dfn>в</dfn> я вообще стараюсь не использовать программы, сохраняющие какие-либо пользовательские данные на системном диске.
	</ul>
	<br />
	<li>Чтобы просмотреть созданные файлы Pale Moon и/или изменить их через проводник Windows либо файловый менеджер, в инсталлированной версии браузера придётся переходить по пути
		<dfn>C:\Users\SashaGoddess\AppData\Roaming\Moonchild Productions\Pale Moon</dfn>, используя переносимую —
		<dfn>E:\Pale Moon</dfn>. Лично для меня второй вариант много удобнее.</li>
	<br />
	<li>Дополнительное подспорье к безопасности ваших данных. Известные мне <a href="http://tophope.ru/threads/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%81%D1%82%D0%B8%D0%BB%D0%B5%D1%80-%D1%81%D1%82%D0%B8%D0%BB%D0%BB%D0%B5%D1%80-stealer-%D0%B8-%D0%B1%D0%BE%D1%80%D1%8C%D0%B1%D0%B0-%D1%81-%D0%BD%D0%B8%D0%BC.1965/">стилеры</a>, в том числе встроенные в «<a href="http://www.spy-soft.net/chto-takoe-rat/">ратники</a>», не воруют пароли из portable программ.</li>
</ol>
<br />
<br />
<h3 id="Why-Pale-Moon">Почему Pale Moon?</h3>
<br /> Pale Moon я рассматриваю как оптимизированную под низкое — по личному опыту, меньшее, нежели у Firefox, Chrome, Opera, Avant, Maxthon и SeaMonkey — потребление оперативной памяти версию Firefox — наиболее функционального на мой взгляд браузера. Аддоны для Mozilla поддерживаются Pale Moon.
<br />
<br />
<br />
<h3 id="Not-work">Установка Pale Moon браузером по умолчанию обычными методами</h3>
<br />
<img src="http://i.imgur.com/gQywm8B.png" alt="">
<br /> Не помогает. В «Выборе программ по умолчанию», «Приложениях по умолчанию» и «Настройке доступа программ и параметров компьютера по умолчанию» Pale Moon Portable нет.
<br />
<br />
<img src="http://i.imgur.com/HCIt8xR.png" alt="">
<img src="http://i.imgur.com/l9HgjBJ.png" alt="">
<img src="http://i.imgur.com/LNFEjsi.png" alt="">
<br /> Связать протоколы с Pale Moon также не получается:
<br />
<br />
<img src="http://i.imgur.com/UiS638u.png" alt="">
<br />
<br />
<h3 id="Solution">Решение</h3>
<br /> Устанавливаем <a href="http://portableapps.com/apps/internet/firefox_portable">Firefox Portable</a>, <a href="https://support.mozilla.org/ru/kb/kak-sdelat-firefox-brauzerom-po-umolchaniyu">делаем Firefox браузером по умолчанию</a>, — в отличие от Pale Moon «огнелис» становится браузером по умолчанию без особых проблем.
<br />
<br />Правой кнопкой мыши по окошку меню «Пуск» → <em>Выполнить</em> → <em>regedit.exe</em> → проходим по реестру дважды до <em>command</em>:
<br />
<br />HKEY_CLASSES_ROOT
<br />├───FirefoxHTML
<br />│ └───shell
<br />│ └───open
<br />│ └───command
<br />└───FirefoxURL
<br />└───shell
<br />└───open
<br />└───command
<br />
<br /> Т. е. <em>HKEY_CLASSES_ROOT</em> → <em>FirefoxHTML</em> → <em>shell</em> → <em>open</em> → <em>command</em>. Заменяем путь к Firefox на путь к Pale Moon Portable: правой кнопкой мыши на «По умолчанию» → <em>Изменить</em>.
<br />
<br />
<img src="http://i.imgur.com/qKogH11.png" alt="" />
<br /> Например, у меня
<br />Было: "<em>E:\FirefoxPortable\App\Firefox\firefox.exe" -osint -url "%1"</em>
<br />Стало: <em>"E:Pale Moon\Palemoon-Portable.exe" -osint -url "%1"</em>
<br />
<br /> Далее там же в реестре <em>HKEY_CLASSES_ROOT</em> → <em>FirefoxURL</em> → <em>shell</em> → <em>open</em> → <em>command</em>. Снова вместо пути к Firefox указываем путь к PM.
<br />
<br />Пробуем открыть гиперссылку при работе в какой-нибудь программе, например, почтовой, → в диалоговом окне выбираем <em>Palemoon-Portable</em>, дополнительно поставив галочку напротив <em>Всегда использовать это приложение</em>:
<br />
<br /><img src="http://i.imgur.com/mcGNijr.png" alt="" />
<br />Отныне ссылки, кликнутые в любой программе, будут открываться браузером Pale Moon Portable. При открытии файлов с расширениями <em>html</em>, <em>htm</em>, <em>xhtml</em> в появившемся диалоговом окне выбираем <em>Palemoon-Portable.exe</em>, помня о галочке.
<br />
<br />
<img src="http://i.imgur.com/DjwBc2Q.png" alt="">
<br /> Pale Moon Portable установлен браузером по умолчанию.
