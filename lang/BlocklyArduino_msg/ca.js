var MSG = {
  title: "Programació gràfica de les interfícies Arduino, reescrit des el treball de BlocklyDuino, basat en Blockly",
  labelArduinoCard: "Tria la targeta : ",
  btn_switch: " Modifica la orientació del menú",
  btn_variable: "Valida",
  span_card_picture_change: "Canvia",
  span_config: " Configura els blocs",
  span_config_kit: "Com configurar",
  span_picture: " Afegeix la targeta",
  span_wiring: " Plan de cablejat",
  span_supervision: " Supervisió",
  span_delete: " Esborra TOTS els blocs",
  span_saveXML:" Desa fitxer B@",
  span_fakeload:" Obre fitxer B@",
  span_example: " Obre exemple",
  span_create_example: " Gestiona exemples",
  span_doc: " Wiki",
  span_tuto: " Fòrum",
  span_videos: "Vídeo tutorials",
  span_miniMenuPanel: " Canvia la mida dels botons",
  span_undo: "Anul·la (ctrl+z)",
  span_redo: "Restableix (ctrl+y)",
  span_block_capture: "Captura pantalla dels blocs",
  span_copycode: "Copia el codi",
  span_configGlobal: " Configuració global",
  span_levelChoice: " Tria de nivell",
  span_font: " Tria la font",
  span_colors: " Tria el color",
  span_reset: " Reinicialitza",
  span_wiring: " Cablejat a fer ",
  span_blockfactory: " Crea blocs ",
  span_screenduino: " make LCD custom characters",
  span_RGB: " Conversió color <-> valors RGB",
  span_convert: " Conversió text <-> binari",
  span_bin2txt: " Binari -> text ",
  span_txt2bin: " Text -> binari ",
  span_edit_code: " Edita el codi",
  span_saveIno: " Desa el codi com INO",
  span_verify_local: " Verificació de codi",
  span_flash_local: " Transfereix a la targeta",
  span_flash_local_result: " Resultat de la descarrega",
  span_detailedCompilation: " Resultats detallats",
  firstModalLabel: "Benvingut a Blockly@rduino !",
  span_first_msg: "Marca per no veure més aquest missatge",
  btn_valid_first_msg: "Ho he entés",
  exampleModalLabel: "Tria un exemple",
  convertModalLabel: "Conversió binaria <-> text ASCII",
  RGBModalLabel: "Conversió color <-> codi",
  wiringModalLabel: "Cablejat",
  configModalGlobalLabel: "Configuració global",
  configGlobalLabel: "Configuració global",
  span_languageMenu: "Tria la llengua : ",
  span_colorToggle: "Blanc o negre, o colors : ",
  span_colorBW: "Blanc & negre",
  span_colorColors: "Colors",
  span_toolbox_algo: "Algoritme simple",
  span_toolbox_arduino_1: "Arduino per  principiants",
  span_toolbox_arduino_2: "Arduino per habituats",
  span_toolbox_arduino_3: "Arduino per confirmats",
  span_toolbox_arduino_4: "Arduino per experts",
  span_toolbox_all: "TOT",
  span_OnLine: "Accés web",
  span_OffLine: "Fora de línia",
  span_Upload: "Descarrega en la targeta : ",
  span_Upload_local: "Un servidor local ",
  cb_cf_verify_btn: "Verifica el codi",
  btn_edit_code :"Edita el codi",
  cb_cf_flash_btn: "Carrega al microcontrolador",
  button_saveArduino: "Desa en fitxer INO",
  span_pasteIDEArduino: "Obre amb l'IDE Arduino",
  span_copyIDEArduino: "copy",
  span_saveIDEArduino: "download",
  span_uploadIDEArduino: "upload",
  span_connect_serial: " Connecta la consola sèrie",
  a_blocks:" Blocs",
  a_arduino:" Codi",
  a_term:" Consola Sèrie",
  configModalLabel:"Tria les categories de blocs",
  span_functionToggle:"Classifica els blocs per categories de ",
  span_functionON:"Referencia",
  span_functionOFF:"Funció",
  span_pymata_upload_text:"Pengeu el firmware : ",
  span_pymata_toggle_text:"Servidor de comunicació : ",
  span_pymataON:"En curs",
  span_pymataOFF:"Aturat",
  span_select_all:"Selecciona-ho TOT",
  btn_close:"Tanca",
  btn_saveConfig:"enregistrer la configuration",
  btn_valid:"Valida",
  editModalLabel:"Edició de codi",
  btn_closeCode:"Anul·la",
  btn_validCode:"Valida",
  btn_size_min:"Redueix la finestra",
  btn_size_max:"Fes gran la finestra",
  btn_preview:"Vista prèvia del codi",
  btn_inline:"Commuta l’orientació dels blocs",
  httpRequestError: "Hi ha un problema amb la petició.",
  linkAlert: "Compartiu els blocs amb aquest enllaç:\n\n%1",
  hashError: " '%1' no correspon a cap programa desat.",
  xmlError: "Imposible de carregar el fitxer desat. Tal vegada ha estat creat amb una altra versió de Blockly ?",
  xmlLoad:"Voleu reemplaçar els blocs actuals ?\n 'Anul·la els fusionarà.",
  timeout: "S'ha superat el nombre màxim d'iteracions d'execució.",
  badCode: "Error del programa :\n%1",
  discard: "Voleu suprimir tots els blocs (%1 blocs) ?",
  badXml: "Error d’anàlisi de XML :\n%1\n\nSeleccioneu 'OK' per abandonar les vostres modificacions o 'Anul·la' per continuar i modificar el XML.",
  pre_verify:"Verificació en curs... ",
  verification_succeed: "Verificació acabada amb èxit, mida de la memòria : ",
  verification_failed:"La verificació ha fracassat, l'error és : ",
  arduino_card:"Suprimeix tot i selecciona una targeta",
  span_about:"Quant a",
  aboutModalLabel:"Quanta a ...",
  aboutBody:"<br />- Desenvolupat per Sébastien Canet (<a href='mailto:sebastien.canet@ac-nantes.fr' traget=_blank>sebastien.canet@ac-nantes.fr</a>), ajudat per Olivier Métayer, gràcies a tots els contribuidors per correu o pel fòrum !" 
	+ "<br />"
	+ "<br />S'ajuda de :",
  msg_ajax_ko:"Les sol·licituds de AJAX no són compatibles amb el vostre navegador, ni les funcionalitats\n"
	+ "següènts no seran operacionals : \n"
	+ "- carregament de blocs via URL \n"
	+ "- supervisió\n"
	+ "\n\n"
	+ "Seguiu les instruccions de la pàgina següent :\n"
	+ "http://testingfreak.com/how-to-fix-cross-origin-request-security-cors-error-in-firefox-chrome-and-ie/\n",
  paypalModalLabel:"Ajudeu el programari lliure !",
  paypalBody:"Si us plau, feu una donació per ajudar a desenvolupar i millorar aquest programari, SENSE VOSALTRES EL PROGRAMARI LLIURE NO POT SOBREVIURE !" 
	+ "<br />"
	+ "<br />PROFESSORS I ASSOCIACIONS"
	+ "<br />Em podeu demanar una factura (<a href='mailto:scanet@libreduc.cc' traget=_blank>scanet@libreduc.cc</a>), per tal que la vostra estructura en pugui fer una 'donació' oficial per transferència bancària. No cobro una llicència, però compto amb vosaltres per ajudar-nos a l’import en què calculeu aquest treball.",
  msg_ajax_ko:"Les sol·licituds de AJAX no són compatibles amb el vostre navegador, ni les funcionalitats\n"
	+ "suivantes ne seront pas opérationnelles : \n"
	+ "- carregament de blocs via URL \n"
	+ "- supervisió\n"
	+ "\n\n"
	+ "Seguiu les instruccions de la pàgina següent :\n"
	+ "http://testingfreak.com/how-to-fix-cross-origin-request-security-cors-error-in-firefox-chrome-and-ie/\n",  
  span_ajax_msg:"No mostreu més aquest missatgee.",
  span_forms:"UTILITZADORS, QUI SOU VOSALTRES ???",
  span_menu_1:"Projectes",
  span_menu_11:"Obre...",
  span_menu_12:"Anomena i desa...",
  span_menu_13:"Exemples",
  span_menu_131:"Obre un exemple",
  span_menu_132:"Gestiona els exemples",
  span_menu_133:"Diposit d'exemples",
  span_menu_2:"Etapes",
  span_menu_21:"Pla de cablejat",
  span_menu_22:"Supervisió",
  span_menu_23:"Blocs",
  span_menu_24:"Codi",
  span_menu_25:"Consola",
  span_menu_3:"Eines",
  span_menu_31:"Conversions",
  span_menu_32:"Codificat dels colors",
  span_menu_4:"Options",
  span_menu_41:"Configuració global",
  span_menu_42:"configuració de treball",
  span_menu_420:"Algoritme simple",
  span_menu_421:"Arduino per principiants",
  span_menu_422:"Arduino per habituats",
  span_menu_423:"Arduino per confirmats",
  span_menu_424:"Arduino per experts",
  span_menu_429:"TOT",
  span_menu_43:"Tria de blocs",
  span_menu_44:"Accessibilitat",
  span_menu_441:"Colors",
  span_menu_442:"Font",
  span_menu_5:"Ajuda",
  span_menu_51:"Vídeos",
  span_menu_52:"Wiki",
  span_menu_53:"Fórum",
  span_menu_6:"Quant a",
  varText1:"La variable ",
  varText2:"ha sigut  escrita com '",
  varText3:"'\n",
  varText4:"i aquest bloc intenta canviar el tipus '",
  varText5:"'!",
};
