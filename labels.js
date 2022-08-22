//****************************************************************************************
//		labels.js : file of lang translation
//
// THIS FILE IS IN UTF8 : IF YOU OPEN IT IN AN EDITOR , CHECK THE ENCODING
// always save the original
// if you edit and save it in a bad encoding the file will be corrupted and not recoverable !
// ex: do not open in netbeans
// To add a new lang xx :
//		add the word 'xx' in the line "all_langs = en fr ... xx (this line is a commented line, just below here)
//		complete all arrays of this file
//		add a image of flag : work3/views/_assets/images*/flag_xx.png  			(* = all completions)
//		That's all : the studio and the catalog will auto-update from this file label.js
//****************************************************************************************
 
// ---------------- list of all langs (separated with one space, no space at end) --------------
// all_langs = en fr he ru es nl ar cn de it
// [{ 
//    "language": "English", "symbol": "en"}, 
// { "language": "Hebrew", "symbol": "iw",}, 
// { "language": "Russian", "symbol": "ru"}, 
// { "language": "Spanish", "symbol": "es",}, 
// { "language": "Dutch", "symbol": "nl", }, 
// { "language": "Arabic", "symbol": "ar",}, 
// { "language": "Chinese Simplified", "symbol": "zh-cn" }, 
// { "language": "German", "symbol": "de", "text": "Nein" }, 
// { "language": "Italian", "symbol": "it", }]
// ---------------------------------------------------------------------------------------------------------

// words to translate : 
// to Search , Refresh , Lines , to Tick , to Share , Guide ,  About , catalog , complete catalog
// amount of displayed lines: , Displayed pictures: , Pictures size: , Created by Mobislide , Downloads ,
// Contact , Record , Language , tick all , Photos , Reinitialize , Selections , Preselections , Criterions , 
// Tracking , Send , Sign in , Sign off , Remove cookies , Name , Password , Share , Tick all , Tick none ,
// Subject , Message , Phone , email address , catalog with selections , ident , link , and , or , apply , unfold ,
// Send all pictures , no form , optional form , obligatory form , simple catalog , Release is too old, please refresh
// , Your selection has been recorded , New version loaded , Unknown user , Failed identification

//------ labels of HTML tags of type : text which will be replaced automatically
var langlabels = ['search','slides','share','guide','qrcode','about','about1','about2','about3','about4','contact','ticks','refresh','reinit','sel','presel','none','all','connected','connex','deconnex','cat','track',
'formno','formob','formop','formbr','apply','unfold','sendall','rsearsh','no', 'verySmall', 'Small', 'medium', 'big', 'verybig','Sharing','name','society','lieuRencontre','commentaire','Connection','Disconnect','CatalogSlideSelection','Criteria','All'];

//--- indexes in array : En Fr He Ru Es Nl Ar Cn De It
var t_search = ['Search','Chercher','חיפוש','поиск','Búsqueda','Kijken','بحث','搜索','Suchen','cercare'];
var tsearch = t_search ; // not used
var t_refresh = ['Refresh','Rafraichir l\'écran','לרענן','Обновить','Refrescar','Verversen','تحديث','Refresh','Aktualisierung','Linee'];
var t_searchph = ['Search...','Chercher...','...חיפוש','поиск...','Búsqueda...,','Kijken...','...بحث','搜索 ...','Suchen','Cercare...'];
var t_rsearsh = ['Search','Rechercher','חיפוש','поиск','Búsqueda,','Kijken','بحث','搜索','Suchen','Cercare'];


var t_slides = ['Lines','Slides','שורות','ряды','Líneas','Lijnen','خطوط','行','Zeilen','Linee'];
var t_ticks  = ['Tick','Cocher','לְטַקטֵק','тикать','Garrapata','teek','تكتكة','蜱','abhaken','Tick'];
var t_share  = ['Share','Partager','שיתוף','поделиться','Comparte','Delen','حصة','分享','Senden','Condividere'];



var t_guide  = ['Guide','Guide','מדריך','руководство','Guía','Handleiding','دليل المستخدم','手册','Handbuch','Guida'];
var t_about  = ['About','A propos','בנוגע','насчет','Acerca de','Over','حول','关于','Über','A questo'];
var t_cat  	 = ['Catalog : ','Catalogue : ','קָטָלוֹג','каталог : ','Catalogar : ','Catalogus : ',' : قائمة','Catalog : ','Katalog : ','Catalogare : '];
var t_catfull  = ['complete catalog','Catalogue complet','קטלוג שלם','Полный каталог','Catálogo completo','Volledige catalogus','قائمة كاملة','complete catalog','ganze Katalog','Catalogo completo'];

var t_about1  = ['Displayed lines : ','Slides affichées : ','מספר השורות המוצגות','отображаемые строки : ','Número de filas que se muestran : ','Aantal rijen weergegeven : ','عرض عدد الصفوف','显示的的行数 : ','angezeigte Zeilen : ','Quantità di righe visualizzate : '];
var t_about2  = ['Displayed pictures : ','Photos affichées : ','מספר התמונות מוצגות','отображаемые фотографии : ','Número de imágenes que se muestran : ','Aantal beelden weergegeven : ','عرض عدد من الصور','显示的照片数 : ','angezeigte Fotos : ','Immagini visualizzate : '];
var t_about3  = ['Pictures size : ','Taille photos : ','גודל התמונות','размер фотографий : ','Fotos tamaño : ','Grootte van de foto\'s : ','حجم الصور','尺寸图片 : ','Fotos Größe : ','Dimensioni delle immagini : '];
var t_about4  = ['Created by Mobislide','Créé par Mobislide','Mobislide נוצר על ידי','Создано Mobislide','Creado por Mobislide','Gemaakt door Mobislide','Mobislide لتي أنشأتها','创造者 Mobislide','Erstellt von Mobislide','Creato da Mobislide'];
var t_downs  = ['Downloads','Téléchargements','הורדות','Загрузки','Descargas','Downloads','عملية تنزيل','Downloads','Summe von Downloads','scaricamenti'];

var t_qrcode  = ['Qrcode','Qrcode','Qrcode','QR код','Qrcode','Qrcode','رمز الاستجابة السريعة','二维码','Qrcode','Qrcode'];
var t_contact= ['Contact','Contact','קשר','контакт','Contacto','Contact','اتصال','联系','Kontakt','Contatto'];
var t_record = ['Record','Enreg.','תקליט','записать','Registrar','Opnemen','تسجيل','Record','aufzuzeichnen','registrare'];

// ---- hna selection qr code
var t_no  = ['No','Aucun','לא','нет','No','Nee','لا','没有','Nein','no'];
var t_verySmall  = ['Very small','Très petit','קטן מאוד','очень маленький','muy pequeño','heel klein','صغير جد','很小','sehr klein','molto piccolo'];
var t_Small  = ['Small','Petit','קָטָן','маленький','pequeño','kleine','صغير','小','klein','piccolo'];
var t_medium  = ['Medium','Moyen','בינוני','Средняя','meza','medium','متوسط','中','Mittel','medio'];
var t_big  = ['Big','Grand','גָדוֹל','Большой','Granda','Groot','كبير','大','Groß','Grande'];
var t_verybig  = ['Very big','Très grand','גדול מאוד','Очень большой','Tre granda','Erg groot','كبير جدا','很大','Sehr groß','Molto grande'];



var t_lang   = ['Language','Langue','שפה','язык','Lengua','Taal','لغة','语','Sprache','Linguaggio'];

var t_seeticks  = ['tick all','Cocher tout','צג מסומן' ,'Отметьте все','mostrar la marcada','tonen de gemarkeerde','تظهر تميز','显示滴答','kreuzen alle','spuntare tutto']; // not used

var t_photo = ['Photos','Photos','תמונות','Фото','Fotos,','fotos','صور','图片','Fotos','Foto'];

var t_reinit = ['Reinitialize','Reinitialiser','אתחול מחדש','Сбросьте','Reiniciar','Reset','اعادة تعيين','Reinitialize','Neuinitialisierung','azzerare'];
var t_sel = ['Selections','Selections','בחירות','Выборы','Selecciones','Selecties','الاختيارات','Selections','Auswahlen','Selezioni'];
var t_presel = ['Preselections','Preselections','בחירות מוקדמות','Предварительные выборы','Preselecciones,','Voorkeuzen','حدد الاختيار','Preselections','Vorwahlen','Preselezioni'];

var t_criteres = ['Criterions','Critères','מבחן','критерии','criterios','criteria','معايير','Criterions','Kriterien','Criteri'];

var t_track = ['Tracking','Suivi de l\'envoi','מעקב','отслеживание','Rastreo','tracking','تعقب','Tracking','Verfolgung','Rintracciare'];

var t_langs  = ['En','Fr','He','Ru','Es','Nl','Ar','Cn','De','It']; 

var t_sharesend = ['Send','Envoyer','לשלוח','доля','Enviar','Stuur','إرسال','送','Senden','Inviare'];

var t_connex	= ['Sign in','Connexion','להתחבר','соединиться','Conexión','Te loggen','اتصال','Connection','Einloggen','Accedere'];
var t_deconnex	= ['Sign off','Déconnexion','להתנתק','Разъедините','desconexión','ontkoppeling','الفصل','Sign off','Ausloggen','Scollegarsi'];
var t_connected	= ['Connected','Connecté','מחובר','связано','Conectado','ingelogd','متصل','Connected','eingeloggt','collegato'];
var t_deconnected	= ['Not connected','Déconnecté','מנותק','отключил','No conectado','afgesloten','فصلت','Not connected','ausgeloggt','Scollegato'];

var t_nocook	= ['Remove cookies','Vider cookies','הסר עוגיות','удалить куки','Eliminar cookies','Verwijderen cookies','إزالة الكوكيز','Remove cookies','Cookies entfernen','Rimuovi i cookies'];

var t_all    = ['All','Tous','כל','все','Todos','Allen','جميع','全','Alle','tutto'];
var t_none   = ['None','Aucun','אפס','никто','Nada','enig','لا','无','keiner','niente'];

var t_name   = ['Name','Nom','שם','имя','Nombre','Naam','اسم','Name','Name','Nome'];
var t_society    = ['society','societe','חֶברָה','societe','societe','societe','societe','societe','societe','societe'];
var t_firstname   = ['first name','Prenom','שם פרטי','Prenom','Prenom','Prenom','Prenom','Prenom','Prenom','Prenom'];
var t_lieuRencontre   = ['meeting place','lieu rencontre','מקום מפגש','lieu rencontre','lieu rencontre','lieu rencontre','lieu rencontre','lieu rencontre','lieu rencontre','lieu rencontre'];
var t_commentaire   = ['commentaire','comment','תגובה','commentaire','commentaire','commentaire','commentaire','commentaire','commentaire','commentaire'];

var t_pass   = ['Password','Mot de passe','סיסמה','пароль','contraseña','Wachtwoord','كلمه السر','Password','Kennwort','Password'];

var tshare2 = ['Share','Partager','שיתוף','делиться','Comparte','Delen','حصة','分享','Senden','Distribuire'];
var t_allticks = ['Tick all','Cocher tout','טיק הכל','Отметьте все','Todos','Alles markeren','جميع','全','kreuzen alle','Spuntare tutto'];
var t_noticks  = ['Tick none','Décocher tout','לא לתקתק','Отметить нет,','Tick ninguno','Niets markeren','مارك شيئا','无','Kreuzen keine','spuntare niente'];

var t_subject  = ['Subject','Objet','נושא','Предмет','Tema','Onderwerp ','موضوع','Subject','Betrifft','Soggetto'];

var t_message  = ['Message','Message','הודעה','послание','Mensaje','Bericht','رسالة','Message','Nachricht','Messaggio'];
var t_phone	   = ['Phone','Téléphone','טלפון','Телефон','Teléfono','Telefoon','هاتف','Phone','Telefon','Telefono'];
var t_ademail  = ['Email address','adresse email','כתובת דוא"ל','электронный адрес','e-mail','E-mailadres','بريد الكترونى','email addresse','Email-Adresse','Indirizzo email'];
var t_catwsel	 = ['Catalog with selections','Catalogue avec sélections','קטלוג עם בחירות','Каталог с выборами','catálogo con selecciones','Catalogus met selecties','كتالوج مع التحديدات','catalog with selections','Katalog mit Auswahlen','Catalogo con selezioni'];
var t_qrsel = ['sel','sel','בחירות','отб.','sel','sel','التحديدات','sel','Wahlen','sel'];
var t_qrall = t_all;
var t_qride = ['ident','ident','זיהוי','выяв.','ident','ident','هوية','ident','Ident','ident'];
var t_qrli  = ['link','lien','קישור','связь','enlaz,','link','ربط','link','Link','Collegamento'];

var t_and  = ['AND','ET','את','И','Y,','EN','و','AND','UND','e'];
var t_or  = ['OR','OU','אוֹ','или','O,','OF','أو','OR','ODER','O'];
var t_apply  = ['Apply','Appliquer','לישם','Apply','Aplicar','Toepassing','تطبق','Apply','anwenden','Applicare'];
var t_unfold  = ['Unfold','Déplier','להתפתח','применять','Desplegar,','Unfold','تتكشف ','Unfold','entfalten','Spiegare'];
var t_sendall  = ['Send all pictures','Mode présentation','לשלוח את כל התמונות','Посылка относительно всех фотографий','Enviar todas las fotos,','Stuur alle afbeeldingen','ارسال جميع الصور','Unfold','sende alle Fotos','Invia tutte le foto'];

var t_formno = ['no form','sans formulaire','ללא טופס','Без формы','sin formulario','Zonder form','بدون شكل','no form','kein Formular','nessuna modello'];
var t_formop  = ['optional form','formulaire optionnel','טופס אופציונלי','Дополнительная форма','formulario opcional,','Optionele vorm','الاستمارة الاختيارية','אפשרית טופס ','fakultatives Formular','modello opzionale'];
var t_formob  = ['obligatory form','formulaire obligatoire','טופס חובה','Обязательная форма',' formulario obligatorio,','Verplichte vorm','الشكل الالزامى','obligatory form','verbindlich Formular','formulario obbligatorio'];
var t_formbr  = ['simple catalog','catalogue brut','קטלוג פשוט','Простой каталог','catálogo simple','eenvoudige catalogus','كتالوج بسيط','simple catalog','einfacher Katalog','semplice catalogo'];

var t_old  = ['Release is too old, please refresh','Version trop ancienne, veuillez rafraichir','השחרור ישן מדי, בבקשה לרענן','Слишком прежняя версия, пожалуйста освежают','La versión es demasiado vieja, por favor actualiza','Deze versie is te oud, vernieuw alsjeblieft','الإصدار قديم جدا، يرجى التحديث','Release is too old, please refresh','Release ist zu alt, bitte aktualisieren','Il rilascio è troppo vecchio, si prega di aggiornare'];
var t_selmem  = ['Your selection has been recorded','Votre sélection a été enregistrée','הבחירה שלך נרשמה','Ваш выбор был зарегистрирован','Tu selección ha sido grabada','Uw selectie is opgenomen','تم تسجيل اختيارك','Your selection has been recorded','Ihre Auswahl wurde aufgezeichnet','La tua selezione è stata registrata'];

var t_msg_loaded  = ['New version loaded','Nouvelle version chargée','גרסה חדשה נטענת','Новая версия отвечающая','Nueva versión descargada,','Nieuwe versie geladen','تم تحميل إصدار جديد','New version loaded','Neue Version geladen','Nuova versione caricata'];
var t_msg_unknownuser = ['Unknown user','Utilisateur inconnu','משתמש לא ידוע','неизвестный пользователь','Usuario desconocido','Onbekende gebruiker','مستخدم غير معروف','Unknown user','Unbekannter Benutzer','Utente sconosciuto'];
var t_msg_failident = ['Failed identification','Identifiants inconnus','הזיהוי הכושל','Ошибка идентификации','Identificación fallida','Mislukte identificatie','أخفق تحديد الهوية','failed identification','fehlgeschlagene Identifizierung','Identificazione fallita'];

var t_Sharing =  [ 'Share Via','Partager via','שתף את Via','Поделиться через','Compartir vía','Delen via','شارك عبر','分享通过','Teilen Via','Condividi via'];
var t_Connection =  [ 'Connection','Connexion','חיבור','Подключения','Conexión','Verbinding','اتصال','连接','Verbindungsanschluss','Connessione'];
var t_Disconnect =  [ 'Disconnect','Déconnexion','נתק','Отключите','Desconecte','Verbreken','قطع الاتصال','断开','Abmelden','Scollegare'];
var t_CatalogSlideSelection =  [ 'Catalog Slide Selection','Sélection de slide','בחירת שקופית','Выбор слайдов','Selección de diapositivas','Diaselectie','تحديد الشريحة','幻灯片选择','Auswahl der Folie','Selezione diapositiva'];
var t_Criteria =  [ 'Criteria','Critères','קריטריונים','Критерии','Criterios','Criteria','معايير','标准','Kriterien','Criteri'];
var t_All =  [ 'All','Tout','כל','Все','todo','Alle','جميع','所有','Alles','Tutti'];

//--- true : write this lang from left to right
var toright   = [true,true,false,true,true,true,false,true,true,true];

//------ labels of HTML Attribute
var langlabelsattr = ['administration' ,'removeBanner','selection','finishpresentation','researchselection',
'ChangeID','Closetheadministrationwindow','Businesscard','Sharethecatalog','Cataloguserguide','ChoosethesizeoftheQrCodes','ChoosethesizeoftheQrCodes','Technicalinformationonthecatalog','CatalogDistributorInformation','Changecataloglanguage','ScantheQrCode',
'Numberofselected','Confirmtheselectionsmade','Validatetheselection','Allowsyoutostartthecatalog','Resetallactiveselections','Closetheselectionwindow','Selectallcriteria','Selectallthethemesofthecriterion',
'SelectedImage','Sharethecatalog','WesharethecataloginSMSmode','Enterthephonenumber','Findaclient','Findaclient','Sharingmode','Presentacatalogafterselectingacustomer','Sharewithtwitter','SharewithWhatsapp','SharewithWhatsapp',
'SharebySMS','Emailsharing','EMAILheader','Emailbody','Emailaddress','SendbyEmail','Reduirelaselectione','Expandtheselection','Sharethecatalogueselection','Viewphotostoselect','ArrowLeft','ArrowLeft','ArrowRight','FullScreen','ExitFullScreen','QuitZoomModeCycle2','StartLoop','StopLoop'];


//--- indexes in array : En Fr He Ru Es Nl Ar Cn De It
//-- var att_XXX  = ['','','','','','','','','',''];

			
//var att_administration  = ['Catalog administration','Administration du catalogue','ניהול קטלוג','Управление каталогом','','','','','',''];
//var att_removeBanner  = ['Remove banner','Retirer la banniere','הסר את הבאנר','Удалить баннер','','','','','',''];
//var att_selection  = ['Selection','Selection','בְּחִירָה','Выбор','','','','','',''];
//var att_finishpresentation  = ['Finish the presentation with a client','Finir la presentation avec un client','סיים את המצגת עם לקוח','Завершить презентацию с клиентом','','','','','',''];
//var att_researchselection  = ['Research and selection','Recherche et selection','מחקר ובחירה','Исследования и отбор','','','','','',''];
//var att_XXX  = ['','','','','','','','','',''];

var att_administration =  [ 'Catalog administration','Administration du catalogue','ניהול קטלוג','Управление каталогом','Administración de catálogos','Catalogusbeheer','إدارة الكتالوج','目录管理','Katalogverwaltung','Amministrazione catalogo'];
var att_removeBanner =  [ 'Remove banner','Retirer la bannière','הסר את הבאנר','Удалить баннер','Eliminar pancarta','Banner verwijderen','إزالة الشعار','删除横幅','Banner entfernen','Rimuovere lintestazione'];
var att_selection =  [ 'Selection','Sélection','בְּחִירָה','Выбор','Selección','Selectie','التحديد','选择','Auswahl','Selezione'];
var att_finishpresentation =  [ 'Finish the presentation with a client','Finir la présentation avec un client','סיים את המצגת עם לקוח','Завершить презентацию с клиентом','Termina la presentación con un cliente','De presentatie met een klant voltooien','إنهاء العرض التقديمي باستخدام عميل','与客户端一起完成演示文稿','Beenden der Präsentation mit einem Client','Completare la presentazione con un client'];
var att_researchselection =  [ 'Research and selection','Recherche et sélection','מחקר ובחירה','Исследования и отбор','Investigación y selección','Onderzoek en selectie','البحث والاختيار','研究和选择','Forschung und Auswahl','Ricerca e selezione'];

var att_ChangeID =  [ 'Change ID','Changer d indentifiant','שנה מזהה','Изменить ID','Cambiar ID','ID wijzigen','تغيير المعرف','更改 ID','Änderungs-ID','Modificare l ID'];
var att_Closetheadministrationwindow =  [ 'Close the administration window','Fermer la fenêtre d administration','סגור את חלון הניהול','Закройте окно администрирования','Cerrar la ventana de administración','Het beheervenster sluiten','إغلاق إطار الإدارة','关闭管理窗口','Schließen des Verwaltungsfensters','Chiudere la finestra di amministrazione'];
var att_Businesscard =  [ 'Double click for the sales representative s business card','Double clique pour avoir la carte de visite du commercial','לחץ פעמיים לכרטיס הביקור של נציג המכירות','"Дважды щелкните по визитной карточке торгового представителя','Haga doble clic para la tarjeta de visita del representante de ventas','Dubbelklik op het visitekaartje van de vertegenwoordiger','انقر نقراً مزدوجاً للحصول على بطاقة عمل مندوب المبيعات','双击销售代表的名片','Doppelklick für die Visitenkarte des Vertriebsmitarbeiters','Fare doppio clic per il biglietto da visita del rappresentante di vendita'];

var att_Sharethecatalog =  [ 'Share the catalog','Partager le catalogue','שתף את הקטלוג','Поделиться каталогом','Compartir el catálogo','De catalogus delen','مشاركة الكتالوج','共享目录','Freigeben des Katalogs','Condividere il catalogo'];
var att_Cataloguserguide =  [ 'Catalog user guide','Guide d utilisation du catalogue','מדריך למשתמש בקטלוג','Руководство пользователя каталога','Guía del usuario del catálogo','Catalogus gebruikershandleiding','دليل مستخدم الكتالوج','目录用户指南','Katalog-Benutzerhandbuch','Guida dell utente del catalogo'];
var att_ChoosethesizeoftheQrCodes =  [ 'Choose the size of the QrCodes to display on each page','Choisir la taille des QrCode à afficher sur chaque page','בחר את גודל ה- QrCodes שיוצגו בכל עמוד','"Выберите размер QR-кодов для отображения на каждой странице','Elija el tamaño de los QrCodes que se mostrarán en cada página','Kies de grootte van de QrCodes die op elke pagina moeten worden weergegeven','اختر حجم QrCodes لعرضه على كل صفحة','选择在每个页面上显示的 QrCodes 的大小','Wählen Sie die Größe der QrCodes, die auf jeder Seite angezeigt werden sollen','Scegliere le dimensioni dei QrCode da visualizzare in ogni pagina'];
var att_Technicalinformationonthecatalog =  [ 'Technical information on the catalog','Informations technique sur le catalogue','מידע טכני בקטלוג','Техническая информация в каталоге','Información técnica sobre el catálogo','Technische informatie over de catalogus','معلومات فنية عن الكتالوج','目录上的技术信息','Technische Informationen zum Katalog','Informazioni tecniche sul catalogo'];
var att_CatalogDistributorInformation =  [ 'Catalog Distributor Information','Informations sur le distributeur du catalogue','מידע על מפיץ קטלוג','Информация о распространителе каталога','Información del distribuidor de catálogos','Informatie catalogusdistributeur','معلومات موزع الكتالوج','目录分销商信息','Katalogverteilerinformationen','Informazioni sul distributore del catalogo'];
var att_Changecataloglanguage =  [ 'Change catalog language','Changer la langue du catalogue','שנה שפת קטלוג','Изменить язык каталога','Cambiar el idioma del catálogo','Catalogustaal wijzigen','تغيير لغة الكتالوج','更改目录语言','Ändern der Katalogsprache','Cambiare la lingua del catalogo'];
var att_ScantheQrCode =  [ 'Scan the QrCode to retrieve the catalog','Scanner le QrCode pour réduperer le catalgue','סרוק את ה- QrCode כדי לאחזר את הקטלוג','Отсканируйте QrCode, чтобы получить каталог','Escanee el QrCode para recuperar el catálogo','Scan de QrCode om de catalogus op te halen','مسح QrCode لاسترداد الكتالوج','扫描 Qrcode 以检索目录','Scannen Sie den QrCode, um den Katalog abzurufen','Eseguire la scansione di QrCode per recuperare il catalogo'];


var att_Numberofselected =  [ 'Number of selected images out of total number of images','Nombre d image sélectionnée sur nombre d image totale','מספר התמונות שנבחרו מתוך מספר התמונות הכולל','Количество выбранных изображений из общего количества изображений','Número de imágenes seleccionadas fuera del número total de imágenes','Aantal geselecteerde afbeeldingen op totaal aantal afbeeldingen','عدد الصور المختارة من إجمالي عدد الصور','从图像总数中选定的图像数量','Anzahl der ausgewählten Bilder aus der Gesamtzahl der Bilder','Numero di immagini selezionate sul numero totale di immagini'];
var att_Confirmtheselectionsmade =  [ 'Confirm the selections made','Valider les sélections effectuées','אשר את הבחירות שבוצעו','Подтвердите сделанный выбор','Confirmar las selecciones realizadas','Bevestig de gemaakte selecties','تأكيد التحديدات التي تم إجراؤها','确认已做出的选择','Bestätigen Sie die getroffenen Auswahlen','Confermare le selezioni effettuate'];
var att_Validatetheselection  =  [ 'Start presentation in big screen mode','Démarrer la présentation en mode grand écran','הפעלת מצגת במצב מסך גדול','Начало презентации в режиме большого экрана','Inicia presentación en modo pantalla grande','Presentatie starten in modus groot scherm','بدء العرض التقديمي في وضع الشاشة الكبيرة','在大屏幕模式下开始演示','Präsentation im Großbildmodus starten','Avviare la presentazione in modalità grande schermo'];

var att_Reduirelaselectione =  [ 'Réduire la sélection et sélectionner uniquement les images','Réduire la sélection et sélectionner uniquement les images','','Восстановить выбор и выбрать уникальные изображения','Reduzca la selección y seleccione solo imágenes','Selectie verminderen en alleen afbeeldingen selecteren','','减少选择并仅选择图像','Auswahl reduzieren und nur Bilder auswählen','Ridurre la selezione e selezionare solo le immagini'];
var att_Expandtheselection =  [ 'Expand the selection','Agrandir la sélection','הרחבת הבחירה','Расширить выбор','Ampliar la selección','De selectie uitbreiden','توسيع التحديد','扩大选择范围','Vergrößern Auswahl','Espandere la selezione'];

var att_Allowsyoutostartthecatalog =  [ 'Allows you to start the catalog link in zoom mode','Permet de démarrer en mode zoom le lien du catalogue','מאפשר לך להתחיל את קישור הקטלוג במצב זום','Позволяет запускать ссылку на каталог в режиме увеличени','Le permite iniciar el enlace del catálogo en modo zoom','Hiermee u de cataloguskoppeling starten in de zoommodus','تقليل التحديد وتحديد الصور فقط','允许您在缩放模式下启动目录链接','Ermöglicht es Ihnen, den Kataloglink im Zoommodus zu starten','Consente di avviare il collegamento al catalogo in modalità zoom'];
var att_Resetallactiveselections =  [ 'Reset all active selections','Réinitialiser toutes les sélections actives','אפס את כל הבחירות הפעילות','Сбросить все активные выбор','Restablecer todas las selecciones activas','Alle actieve selecties opnieuw instellen','يسمح لك ببدء ارتباط الكتالوج في وضع التكبير','重置所有活动选择','Zurücksetzen aller aktiven Auswahlen','Reimpostare tutte le selezioni attive'];
var att_Closetheselectionwindow =  [ 'Close the selection window','Fermer la fenêtre de sélection','סגור את חלון הבחירה','Закройте окно выбора','Cierre la ventana de selección','Het selectievenster sluiten','إعادة تعيين كافة التحديدات النشطة','关闭选择窗口','Schließen des Auswahlfensters','Chiudere la finestra di selezione'];
var att_Selectallcriteria =  [ 'Select all criteria','Sélectionner tout les critères','בחר את כל הקריטריונים','Выбрать все критерии','Seleccione todos los criterios','Alle criteria selecteren','إغلاق إطار التحديد','选择所有标准','Wählen Sie alle Kriterien aus','Selezionare tutti i criteri'];
var att_Selectallthethemesofthecriterion =  [ 'Select all the themes of the criterion','Sélectionner tout les thèmes du critère','בחר את כל הנושאים של הקריטריון','Выберите все темы критерия','Seleccione todos los temas del criterio','Alle thema s van het criterium selecteren','تحديد كافة المعايير','选择标准的所有主题','Wählen Sie alle Themen des Kriteriums','Selezionare tutti i temi del criterio'];
var att_Selectonlythecheckedthemes =  [ 'Select only the checked themes','Sélectionner uniquement les thèmes cochés','בחר רק את הנושאים המסומנים','Выбирать только отмеченные темы','Seleccione solo los temas comprobados','Selecteer alleen de gecontroleerde thema s','حدد كل نسق المعيار','仅选择已选中的主题','Wählen Sie nur die geprüften Themen','Selezionare solo i temi selezionati'];


var att_SelectedImage =  [ 'Selected Image','Image Sélectionnée','תמונה נבחרת','Выбранное изображение','Imagen seleccionada','Geselecteerde afbeelding','','选定图像','Ausgewähltes Bild','Immagine selezionata'];
var att_PDFtodisplay =  [ 'PDF to display','PDF à afficher','PDF לתצוגה','PDF для отображения','PDF para mostrar','PDF om weer te geven','الصورة المحددة','显示 PDF','PDF zum Anzeigen','PDF da visualizzare'];
var att_Videotowatch =  [ 'Video to watch','Vidéo à visualiser','סרטון לצפייה','Видео для просмотра','Vídeo para ver','Video om naar te kijken','PDF لعرض','要观看的视频','Video zum Anschauen','Video da guardare'];

var att_Sharethecatalog =  [ 'Share the catalog','Partager le catalogue','שתף את הקטלוג','Поделиться каталогом','Compartir el catálogo','De catalogus delen','مشاركة الكتالوج','共享目录','Freigeben des Katalogs','Condividere il catalogo'];
var att_WesharethecataloginSMSmode =  [ 'We share the catalog in SMS mode','On partage le catalogue en mode SMS','אנו חולקים את הקטלוג במצב SMS','Делимся каталогом в режиме СМС','Compartimos el catálogo en modo SMS','We delen de catalogus in sms-modus','نحن نشارك الكتالوج في وضع SMS','我们在短信模式下共享目录','Wir teilen den Katalog im SMS-Modus','Condividiamo il catalogo in modalità SMS'];
var att_Enterthephonenumber =  [ 'Enter the phone number to whom you want to send the catalog','Saisir le numéro de téléphone à qui on veut envoyer le catalogue','הזן את מספר הטלפון שאליו ברצונך לשלוח את הקטלוג','Введите номер телефона, на который хотите отправить каталог','Introduzca el número de teléfono al que desea enviar el catálogo','Voer het telefoonnummer in waarnaar u de catalogus wilt verzenden','أدخل رقم الهاتف الذي تريد إرسال الكتالوج إليه','输入要发送目录的电话号码','Geben Sie die Telefonnummer ein, an die Sie den Katalog senden möchten.','Immettere il numero di telefono a cui si desidera inviare il catalogo'];
var att_Findaclient =  [ 'Find a client','Chercher un client','מצא לקוח','Найти клиента','Encontrar un cliente','Zoek een klant','البحث عن عميل','查找客户端','Suchen eines Clients','Trovare un client'];
var att_Sharingmode =  [ 'Sharing mode','Mode de partage','מצב שיתוף','Режим обмена','Modo de uso compartido','Deelmodus','وضع المشاركة','共享模式','Freigabemodus','Modalità di condivisione'];
var att_Presentacatalogafterselectingacustomer =  [ 'Present a catalog after selecting a customer','Présenter un catalogue après avoir sélectionner un client','הציגו קטלוג לאחר בחירת לקוח','Представьте каталог после выбора покупателя','Presentar un catálogo después de seleccionar un cliente','Een catalogus presenteren na het selecteren van een klant','تقديم كتالوج بعد تحديد عميل','选择客户后提交目录','Präsentieren eines Katalogs nach auswahl eines Kunden','Presentare un catalogo dopo aver selezionato un cliente'];
var att_Sharewithtwitter =  [ 'Share with twitter','Partager avec Twitter','שתף עם טוויטר','Поделиться с твиттером','Compartir con twitter','Delen met twitter','شارك مع تويتر','与推特分享','Teilen mit Twitter','Condividi con Twitter'];
var att_SharewithWhatsapp =  [ 'Share with Whatsapp','Partager avec Whatsapp','שתף עם Whatsapp','Поделиться с WhatsApp','Compartir con Whatsapp','Delen met Whatsapp','شارك مع WhatsApp','与 Whatsapp 分享','Teilen mit Whatsapp','Condividi con Whatsapp'];
var att_SharebySMS =  [ 'Share by SMS','Partager par SMS','שתף באמצעות SMS','Поделиться по SMS','Compartir por SMS','Delen via SMS','شارك بواسطة SMS','通过短信分享','Teilen per SMS','Condividi via SMS'];


var att_Emailsharing =  [ 'Email sharing','Partage par Email','שיתוף דוא"ל','Обмен электронной почтой','','E-mail delen','مشاركة البريد الإلكتروني','电子邮件共享','E-Mail-Freigabe','Condivisione della posta elettronica'];
var att_EMAILheader =  [ 'EMAIL header','Entête de l EMAIL','כותרת EMAIL','Заголовок EMAIL','','E-mailkoptekst','رأس البريد الإلكتروني','电子邮件标题','EMAIL-Header','Intestazione EMAIL'];
var att_Emailbody =  [ 'Email body','Corps de l EMAIL','גוף דוא"ל','Текст сообщения','','Hoofdtekst van e-mail','نص البريد الإلكتروني','电子邮件主体','E-Mail-Text','Corpo e-mail'];
var att_Emailaddress =  [ 'Email address','Adresse de l EMAIL','כתובת דוא"ל','Адрес электронной почты','','E-mailadres','عنوان البريد الإلكتروني','电子邮件地址','E-Mail-Adresse','indirizzo email'];
var att_SendbyEmail =  [ 'Send by Email','Envoie par Email','שלח במייל','Послать по электронной почте','','Verzenden per e-mail','إرسال عن طريق البريد الإلكتروني','通过电子邮件发送','Per E-Mail senden','Invia via e-mail'];

var att_Sharethecatalogueselection =  [ 'Share the catalogue selection','Partager la sélection du catalogue','שיתוף בחירת הקטלוג','Поделитесь выбором каталога','Compartir la selección del catálogo','Deel de catalogusselectie','شارك اختيار الكتالوج','分享目录选择','Katalogauswahl teilen','Condividi la selezione del catalogo'];
var att_Viewphotostoselect =  [ 'View photos to select','Afficher les photos à sélectionner','הצג תמונות לבחירה','Просмотр фотографий для выбора','Ver fotos para seleccionar','Fotos weergeven om te selecteren','عرض الصور لتحديد','查看要选择的照片','Zur Auswahl auswählenden Fotos anzeigen','Visualizzare le foto da selezionare'];

// Bouton dans Cycle 2
var att_ArrowLeft = [ 'Previous image','Image précédente','התמונה הקודמת','Предыдущее изображение','Imagen anterior','Vorige afbeelding','الصورة السابقة','上一張圖片','Vorheriges Bild','Immagine precedente'];
var att_ArrowRight = [ 'Next Image','Image suivante','התמונה הבאה','Следующее изображение','Siguiente imagen','Volgende afbeelding','الصورة التالية','下一張圖片','Nächstes Bild','Immagine successivaa'];
var att_FullScreen = [ 'Full Screen','Plein Ecran','מסך מלא','Полноэкранный режим','Pantalla completa','Volledig scherm','ملء الشاشة','全螢幕','Vollbildmodus','Schermo intero'];
var att_ExitFullScreen = [ 'Full Screen Mode Output','Sortie Mode Plein Ecran','פלט מצב מסך מלא','Вывод в полноэкранном режиме','Salida de modo de pantalla completa','Uitvoer in modus Volledig scherm','إخراج وضع ملء الشاشة','全屏模式輸出','Vollbildausgabe','Output a schermo intero'];
var att_QuitZoomModeCycle2 = [ 'Exit zoom mode','Quitter le mode zoom','יציאה ממצב מרחק מתצוגה','Выход из режима масштабирования','Salir del modo de zoom','Zoommodus afsluiten','إنهاء وضع التكبير/التصغير','退出縮放模式','Skalierungsmodus beenden','Esci dalla modalità zoom'];
var att_StartLoop = [ 'Scrolling photos','Défilement des photos','גלילת תמונות','Прокрутка фотографий','Fotos de desplazamiento','Scrollende foto s','تمرير الصور,滾動照片','Scrollen Sie durch die Fotos','Scorrimento delle foto'];
var att_StopLoop = [ 'Stop scrolling','Arrêt du défilement','הפסקת גלילה','Остановка прокрутки','Detener el desplazamiento','Stoppen met scrollen','إيقاف التمرير','停止滾動','Scrollen beenden','Interrompi scorrimento'];


//var att_Connection =  [ 'Connection','Connexion','חיבור','Подключения','Conexión','Verbinding','اتصال','连接','Verbindungsanschluss','Connessione'];
//var att_Disconnect =  [ 'Disconnect','Déconnexion','נתק','Отключите','Desconecte','Verbreken','قطع الاتصال','断开','Abmelden','Scollegare'];
