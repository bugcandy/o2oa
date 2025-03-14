o2.LP = window.LP || {
    "name": "Nombre",
    "description": "Descripción",
    "searchKey": "Introduce una palabra clave de búsqueda",
    "desktop_style": "Estilo de escritorio",
    "flat_style": "Estilo plano",
    "cmsName" : "Gestión del contenido",
    "processName" : "Gestión de procesos",
    "portalName" : "Gestión de portales",
    "serviceName" : "Gestión de servicios"
};

o2.LP.process = {
    "unnamed": "Sin nombre",
    "unknow": "Desconocido",
    "processConfig": "Configuración de proceso",
    "formConfig": "Configuración de formulario",

    "createCategory": "Crear categoría",
    "searchCategory": "Buscar categorías",
    "noCategoryNotice": "Actualmente no existe ninguna categoría de proceso. Puede hacer clic aquí para crear una.",
    "noProcessNoticeNode": "No hay flujo en esta categoría. Puede hacer clic aquí para crear uno.",

    "activity": "Actividad",
    "route": "Ruta",
    "property": "Propiedad",
    "showJson": "Ver JSON",
    "unrealized": "Esta función aún no está implementada",
    "tools": "Herramientas",
    "repetitions": "Nombre de propiedad repetido",
    "repetitionsValue": "Elemento de contenido repetido",
    "repetitionsEvent": "Nombre de evento repetido",
    "repetitionsId": "Identificador de elemento repetido",
    "repetitionsOrUnvalid": "Nombre de propiedad repetido o no válido",
    "notNullId": "El identificador de elemento no puede estar vacío",
    "editCategory": "Editar categoría",
    "createProcess": "Nuevo proceso",
    "deleteCategory": "Eliminar categoría",
    "deleteProcess": "Eliminar proceso",
    "editProcess": "Editar proceso",
    "createForm": "Nuevo formulario",
    "deleteForm": "Eliminar formulario",
    "editForm": "Editar formulario",


    "menu": {
        "newRoute": "Nueva ruta",
        "newActivity": "Nueva actividad",
        "newActivityType": {
            "manual": "Actividad manual",
            "condition": "Actividad condicional",
            "auto": "Actividad automática",
            "split": "Actividad de división",
            "merge": "Actividad de fusión",
            "embed": "Actividad de subproceso",
            "invoke": "Actividad de invocación",
            "begin": "Actividad de inicio",
            "end": "Actividad de fin"
        },

        "copyActivity": "Copiar actividad",

        "deleteActivity": "Eliminar actividad",
        "deleteRoute": "Eliminar ruta",

        "saveProcess": "Guardar proceso",
        "saveProcessNew": "Guardar como nueva versión",
        "checkProcess": "Verificar proceso",
        "exportProcess": "Exportar proceso",
        "printProcess": "Imprimir proceso",

        "showGrid": "Mostrar cuadrícula",
        "hideGrid": "Ocultar cuadrícula"
    },
    "notice": {
        "save_success": "¡El proceso se ha guardado con éxito!",
        "deleteForm_success": "¡El formulario se ha eliminado!",
        "deleteProcess_success": "¡El proceso se ha eliminado!",
        "one_begin": "¡Cada proceso solo puede tener una actividad de inicio!",
        "deleteRoute": "¿Está seguro de que desea eliminar la ruta seleccionada?",
        "deleteRouteTitle": "Confirmación de eliminación de ruta",
        "deleteActivityTitle": "Confirmación de eliminación de actividad",
        "deleteActivity": "La eliminación de la actividad también eliminará todas las rutas asociadas a ella. ¿Estás seguro de que deseas eliminar la actividad seleccionada?",
        "deleteDecisionTitle": "Confirmación de eliminación de decisión",
        "deleteDecision": "¿Está seguro de que desea eliminar la decisión seleccionada?",
        "deleteScriptTitle": "Confirmación de eliminación de script",
        "deleteScript": "¿Está seguro de que desea eliminar el script actual?",
        "deleteElementTitle": "Confirmación de eliminación de elemento de formulario",
        "deleteElement": "¿Está seguro de que desea eliminar el elemento actual y sus subelementos?",
        "deleteEventTitle": "Confirmación de eliminación de evento",
        "deleteEvent": "¿Está seguro de que desea eliminar el evento actual?",

        "deleteActionTitle": "Confirmación de eliminación de acción",
        "deleteAction": "¿Está seguro de que desea eliminar la acción actual?",

        "deleteRowTitle": "Confirmación de eliminación de fila de tabla",
        "deleteRow": "La eliminación de la fila también eliminará todos los contenidos en todas las celdas de la fila. ¿Está seguro de que desea eliminar la fila seleccionada?",
        "deleteColTitle": "Confirmación de eliminación de columna de tabla",
        "deleteCol": "La eliminación de la columna también eliminará todos los contenidos en todas las celdas de la columna. ¿Está seguro de que desea eliminar la columna seleccionada?",

        "deleteProcessTitle": "Confirmación de eliminación de proceso",
        "deleteProcess": "¿Está seguro de que desea eliminar el proceso actual?",

        "deleteFormTitle": "Confirmación de eliminación de formulario",
        "deleteForm": "¿Está seguro de que desea eliminar el formulario actual?",

        "deleteTreeNodeTitle": "Confirmación de eliminación de nodo",
        "deleteTreeNode": "¿Está seguro de que desea eliminar el nodo actual?",

        "inputScriptName": "¡Introduzca un nombre de script!",
        "inputCategoryName": "¡Introduzca un nombre de categoría!"
    },
    "button": {
        "ok": "Aceptar",
        "cancel": "Cancelar",
        "reset": "Restablecer"
    },
    "formAction": {
        "insertRow": "Insertar fila",
        "insertCol": "Insertar columna",
        "deleteRow": "Eliminar fila",
        "deleteCol": "Eliminar columna",
        "mergerCell": "Combinar celdas",
        "splitCell": "Dividir celdas",
        "move": "Mover",
        "copy": "Copiar",
        "delete": "Eliminar",
        "add": "Agregar",
        "script": "Script",
        "clickScript": "Script de evento de clic",
        "defaultNode": "Nodo predeterminado"
    }
};
o2.LP.desktop = {
    "homepage": "Página de inicio",
    "taskCenter": "Centro de tareas",
    "info": "Plataforma de información",
    "calendar": "Agenda",
    "profile": "Configuración personal",
    "loadding": "Cargando recursos del sistema, por favor espere...",
    "lowBrowser": "¡Su versión de navegador es demasiado antigua! El sistema ya no admite IE8 y versiones anteriores.",
    "upgradeBrowser": "Por favor, actualice su navegador:",

    "menuAction": "Menú",
    "configAction": "Configurar su área de trabajo",
    "userMenu": "Opciones de usuario",
    "userChat": "Configuración de usuario",
    "styleAction": "Cambiar tema",
    "showDesktop": "Mostrar escritorio",
    "showMessage": "Mensajes",
    "logout": "Cerrar sesión",
    "safeLogout": "Cerrar sesión segura",
    "safeLogoutTitle": "Confirmación de cierre de sesión seguro",
    "safeLogoutMessage": "El cierre de sesión seguro cerrará su cuenta en todos los dispositivos, incluyendo móviles y otros navegadores. ¿Está seguro de que desea hacerlo?",
    "userConfig": "Config",
    "userLanguage": "Configuración de idioma",
    "application": "Aplicaciones",
    "widget": "Widgets",
    "process": "Proceso",
    "nosign": "Falta una firma personalizada",
    "searchUser": "Buscar: Nombre de usuario",
    "say": "Dice",
    "clearMessage": "Borrar mensajes",
    "returnZoom": "Restablecer escala al 100%",

    "refresh": "Actualizar",
    "close": "Cerrar",
    "closeAll": "Cerrar todo",
    "closeOther": "Cerrar otros",
    "openInBrowser": "Nuevo ventana",

    "lnkAppTitle": "Aplicaciones comunes",
    "deleteLnk": "Eliminar acceso directo a la aplicación común",
    "addLnk": "Agregar acceso directo a la aplicación común",

    "changeViewTitle": "Confirmación para cambiar el estilo de vista",
    "changeView": "¿Está seguro de que desea cambiar el estilo de vista?<br><br>Si elige 'Aceptar', la página se actualizará y es posible que pierda datos no guardados.",
    "refreshMenu": "Restaurar el orden predeterminado del menú",
    "defaultMenuTitle": "Confirmación de restauración del menú predeterminado",
    "defaultMenuInfor": "¿Está seguro de que desea restaurar el orden y los grupos del menú al estado predeterminado?",

    "deleteLink" : "Eliminar acceso directo",

    "messsage": {
        "appliction": "App",
		"application": "App",
		"process": "Proceso",
		"infor": "Info",
		"query": "Datos",
		"taskMessage": "Recordatorio de tareas pendientes",		"receiveTask": "Ha recibido una tarea pendiente. El título es:",
		"activity": "Actividad",

		"readMessage": "Recordatorio de lectura pendiente",
		"receiveRead": "Ha recibido una lectura pendiente. El título es:",

		"reviewMessage": "Recordatorio de revisión",
		"receiveReview": "Ha recibido una revisión pendiente. El título es:",

		"fileEditorMessage": "Archivo recibido",
		"receiveFileEditor": "Le han enviado un archivo:",

		"fileShareMessage": "Archivo compartido",
		"receiveFileShare": "Le han compartido un archivo:",

		"meetingInviteMessage": "Invitación a reunión",
        "meetingInvite": "<font style='color: #ea621f'>{person}</font> le invita a la reunión “{subject}”, que se realizará el día <font style='color: #ea621f'>{date}</font> en “{addr}”.",
        "meetingCancelMessage": "Reunión cancelada",
        "meetingCancel": "<font style='color: #ea621f'>{person}</font> ha cancelado la reunión “<font style='color: #ea621f'>{addr}</font>” prevista para el día <font style='color: #ea621f'>{date}</font> en “{subject}”",
        "meetingAcceptMessage": "Invitación a reunión aceptada",
        "meetingAccept": "<font style='color: #ea621f'>{person}</font> ha aceptado su invitación a la reunión “{subject}”, que se realizará el día <font style='color: #ea621f'>{date}</font> en “<font style='color: #ea621f'>{addr}</font>”.",
        "meetingRejectMessage": "Invitación a reunión rechazada",
        "meetingReject": "<font style='color: #ea621f'>{person}</font> ha rechazado su invitación a la reunión “{subject}” programada para el día <font style='color: #ea621f'>{date}</font>.",

        "meetingDeleteInviteMessage": "Invitación a reunión cancelada",
        "meetingDeleteInvite": "<font style='color: #ea621f'>{person}</font> ha cancelado su invitación a la reunión “{subject}”, programada para el día <font style='color: #ea621f'>{date}</font> en ”<font style='color: #ea621f'>{addr}</font>“.",

        "attendanceAppealInviteMessage": "Solicitud de asistencia pendiente requiere su aprobación",
        "attendanceAppealInvite": "{subject}",
        "attendanceAppealAcceptMessage": "Solicitud de asistencia aprobada",
        "attendanceAppealAccept": "{subject}",
        "attendanceAppealRejectMessage": "Solicitud de asistencia rechazada",
        "attendanceAppealReject": "{subject}",

        "canlendarAlarmMessage" : "Recordatorio de calendario",
        "canlendarAlarm" : "{title}",

		"teamwork":{
			"executor":"Responsable",
			"creatorPerson":"Creador"
		},

		"publishDocument" : "Publicar documento:",

		"customMessageTitle": "Recordatorio de mensaje:",
		"customMessage": "Ha recibido un mensaje",
		"emoji": "Emoji",
		"processWork": "Trabajo",
		"cmsDoc": "Documento de información"
    },
	"styleMenu": {
		"default": "Predeterminado",
		"color": "Color",
		"black": "Negro elegante",
		"lotus": "Flor de loto",
		"crane": "Grulla",
		"peony": "Peonía",
		"car": "Coche antiguo",
		"dock": "Muelle",
		"panda": "Panda",
		"star": "Cielo estrellado"
	},
	"styleFlatMenu": {
		"blue": "Azul",
		"red": "Rojo",
		"orange": "Naranja",
		"green": "Verde",
		"cyan": "Cian",
		"purple": "Púrpura",
		"gray": "Gris",
		"darkgreen": "Verde oscuro",
		"tan": "Marrón claro",
		"navy": "Azul marino"
	},
	"notice": {
		"unload": "Si cierra o actualiza la página actual, se perderán los cambios no guardados. Por favor confirme su operación.",
		"changePassword": "Su contraseña ha caducado. Por favor cambie su contraseña a tiempo.",
		"errorConnectCenter1": "No se puede conectar al servidor del centro de aplicaciones. Asegúrese de que una de las siguientes direcciones es accesible:",
		"errorConnectCenter2": "Si no puede acceder a ninguna de las direcciones anteriores, verifique su red o póngase en contacto con el administrador."
	 },
	"login": {
		"title": "Inicio de sesión de usuario",
		"loginButton": "Iniciar sesión",

		"mobileDownload": "Escanee el código QR con su teléfono para instalar",

		"inputUsernamePassword": "Ingrese su nombre de usuario y contraseña...",
		"loginWait": "Iniciando sesión, por favor espere...",
		"loginError": "Nombre de usuario o contraseña incorrectos, por favor inténtelo de nuevo...",

		"camera_logining": "Iniciando sesión para usted, coloque la cara frente a la cámara ...",
		"camera_logining_1": "Por favor, sonría ...",
		"camera_logining_2": "Por favor, mire hacia arriba ...",
		"camera_logining_3": "Verificación exitosa ...",

		"camera_logining2": "Mueva la cabeza a diferentes ángulos o cambie de expresión facial ...",
		"camera_loginSuccess": "¡Hola {name}, iniciando sesión para usted...!",
		"camera_loginError": "No se pudo verificar su identidad. Inicie sesión de otra manera ...",
		"camera_loginError2": "Fallo al iniciar sesión, inicie sesión de otra manera ...",
		"camera_loginError_camera": "No se puede abrir la cámara, es posible que ya esté en uso..."
	},

	"action": {
		"uploadTitle": "Subiendo",
		"uploadComplete": "Carga completa",
		"sendReady": "Codificando datos, preparándose para la transferencia...",
		"sendStart": "Comenzar la transferencia",
		"sendError": "Se produjo un error al transferir el archivo",
		"sendAbort": "La transferencia de archivos ha sido cancelada",
		"speed": "Velocidad",
		"time": "Tiempo",
		"hour": "hora(s)",
		"minute": "minuto(s)",
		"second": "segundo(s)",

		"cancelUploadTitle": "Confirmación de cancelación de carga",
		"cancelUpload": "¿Está seguro de que desea cancelar la carga del archivo '{name}'?"
	},
	"person": {
		"personEmployee": "Número de empleado",
		"personMobile": "Móvil",
		"personMail": "Correo electrónico",
		"personDuty": "Posición",
		"personQQ": "Número de QQ",
		"personWeixin": "WeChat",
		"duty": "Posición"
	},
	"collect": {
		"collectNotConnected": "Fallo en la conexión a la nube O2",
		"collectNotConnectedText": "No se pudo conectar a la nube O2, ¡verifique la red del servidor!"
	}
};
o2.LP.desktop.message = o2.LP.desktop.messsage;
o2.LP.widget = {
	"upload": "Subir",
	"uploadTitle": "Subir archivo",
	"uploadInfor": "Seleccione el archivo que desea subir",
	"delete": "Eliminar",
	"previewAtt" : "Previsualización",
	"editAtt" : "Editar",
	"replace": "Reemplazar",
	"select": "Seleccionar",

    "download": "Descargar",
	"share": "Compartir",
	"send": "Enviar",
	"downloadAll": "Descargar todo",
	"createFolder": "Crear carpeta",
	"rename": "Cambiar nombre",
	"property": "Propiedad",
	"refuseUpload": "Prohibir la carga de archivos",
	"refuseUploadHTML": "<div>El archivo llamado: <font style='color:#0000ff'>“{filename}”</font> no cumple con los tipos permitidos para la carga, <font style='color:#ff0000'>se ha excluido</font></div>",
	"refuseUploadNotice" : "El archivo “{filename}” no cumple con los tipos permitidos para la carga",
	"refuseUploadHTML_size" : "<div>El archivo llamado: <font style='color:#0000ff'>“{filename}”</font> excede el tamaño permitido, <font style='color:#ff0000'>ha sido excluido</font> (solo se permiten cargar archivos menores a {size}M)</div>",
	"refuseUploadNotice_size": "El archivo “{filename}” excede el tamaño permitido (solo se permiten cargar archivos menores a {size}M)",
	"notUploadNotice": "No se permite la carga de archivos adjuntos en este momento",

	"list": "Lista",
	"sequence": "Secuencia",
	"icon": "Icono",
	"preview": "Previsualización",

	"min": "Modo simple",
	"max": "Modo completo",

	"size": "Tamaño",
	"uploader": "Cargador",
	"uploadTime": "Tiempo de carga",
	"modifyTime": "Modificar",
	"uploadActivity": "Actividad",
	"attCount": "Archivos",
	"folderCount": "Carpetas",

    "pictureSize": "Ancho {width} píxeles, alto {height} píxeles para la visualización de imágenes.",
	"pictureRatio": "La relación de aspecto de la imagen es de {ratio}",

	"ok": "Aceptar",
	"cancel": "Cancelar",
	"refresh": "Actualizar",
	"close": "Cerrar",
	"open": "Abrir",
	"choiceWork": "Por favor seleccione un documento para abrir",
	"workcompleted": "El flujo de trabajo ha finalizado",

	"months": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
	"days_abbr": ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
	"clear": "Borrar",
	"year": "Año",
	"month": "Mes",
	"date": "Día",
	"hour": "Hora",
	"minute": "Minuto",
	"second": "Segundo",
	"week": "Semana",
	"dateGreaterThanCurrentNotice" : "La fecha elegida debe ser posterior a la fecha actual",

	"unknow": "Desconocido",
	"uploadImg": "Cargar imagen",
	"clearImg": "Borrar imagen",
	"clearImg_confirmTitle": "Confirmación para borrar imagen",
	"clearImg_confirm": "¿Está seguro de que desea borrar la imagen?",
	"office": "Abrir en el controlador de documentos",
	"closeOffice": "Cerrar archivo adjunto",
	"configAttachment": "Configurar permisos de archivo adjunto",
	"configAttachmentText": "Configuración",
	"checkOcrText": "Corregir el texto en las imágenes identificadas automáticamente",
	"order": "Orden de archivo adjunto",

	"record": "Grabación",
	"stop": "Parar",
	"play": "Reproducir",
	"save": "Guardar",
	"userRefuse" : "El usuario rechazó proporcionar información.",
	"explorerNotSupportDevice" : "El navegador no admite dispositivos de hardware.",
    "canNotFindDevice": "No se pudo encontrar el dispositivo de hardware especificado.",
	"canNotOpenMicrophone": "No se puede abrir el micrófono. Información de error:",
	"explorerNotSupportRecordVoice" : "El navegador no admite la función de grabación de voz.",

	"clickToEditCss" : "Haga clic aquí para escribir CSS",
	"uploadSuccess": "¡Carga exitosa!",
	"uploadFail": "Error al cargar. Por favor, vuelva a intentar.",
	"selectLocalImage" : "Seleccionar imagen local",
	"selectCloudImage": "Seleccionar imagen en la nube",
	"reset": "Reiniciar",
	"uploadOriginalImage": "Subir imagen original",

	"startRecord" : "Comenzar grabación",
	"completeRecord": "Finalizar grabación",
	"requireHttps" : "La función de grabación de video debe usarse con el protocolo https",
	"canNotToRecordVideo" : "La función de grabación de video no se puede utilizar porque su navegador no admite las siguientes funciones:",

	"pageJumperTitle": "Ingrese el número de página, presione enter o salga del cuadro de entrada para saltar",

	"scriptAreaEditNotice" : "Haga clic aquí para escribir código de script",
	"empty" : "Vaciar",
	"undo" : "Deshacer",
	"redo" : "Rehacer",
	"eraserRadius": "Tamaño del borrador",
	"eraser": "Borrador",
	"input": "Entrada de texto",
	"pen": "Lápiz",
	"thickness" : "Grosor",
	"color" : "Color",
	"insertImage" : "Insertar imagen",
	"imageClipper" : "Recortar imagen",
	"fontSize": "Tamaño de fuente",
	"fontFamily": "Fuente",

	"explorerNotSupportFeatures" : "Su navegador no admite las siguientes funciones:"
};

o2.LP.widget.SimpleEditor = {
	"insertEmotion": "Insertar emoticono",
	"insertImage": "Insertar imagen",
	"Emotions": "regular_smile|Sonrisa,teeth_smile|Risa,angry_smile|Enojado,confused_smile|Perplejo,cry_smile|Llanto,embaressed_smile|Avergonzado,omg_smile|Sorprendido,sad_smile|Tristeza,shades_smile|Genial,tounge_smile|Sacar la lengua,wink_smile|Guiño,angel_smile|Ángel,devil_smile|Demonio,heart|Corazón,broken_heart|Corazón roto,thumbs_up|Pulgar hacia arriba,thumbs_down|Pulgar hacia abajo,cake|Pastel,lightbulb|Bombilla,envelope|Sobre"
};
o2.LP.authentication = {
    "LoginFormTitle": "Bienvenido al inicio de sesión",
    "SignUpFormTitle": "Bienvenido a registrarse",
    "ResetPasswordFormTitle": "Recuperar contraseña",
    "ChangePasswordFormTitle" : "La contraseña ha caducado",
    "userName": "Nombre de usuario",
    "password": "Contraseña",
    "verificationCode": "Código de verificación",
    "loginAction": "Iniciar sesión",
    "autoLogin": "Iniciar automáticamente la próxima vez",
    "signUp": "Registrarse",
    "forgetPassword": "¿Olvidó su contraseña?",
    "inputYourUserName": "Ingrese su nombre de usuario",
    "inputYourPassword": "Ingrese su contraseña",
    "inputYourMail": "Ingrese su dirección de correo electrónico",
    "inputYourMobile": "Ingrese su número de teléfono móvil",
    "inputPicVerificationCode": "Ingrese el código de verificación a la derecha",
    "inputComfirmPassword": "Confirme su contraseña",
    "inputVerificationCode": "Teléfono código",
    "confirmPassword": "Confirmar contraseña",
    "sendVerification": "Enviar código de verificación",
    "resendVerification": "Reenviar",
    "passwordIsSimple": "Utilice una combinación de letras y números y al menos 7 caracteres",
    "mobileIsRegisted": "El número de teléfono móvil ya está registrado",
    "mailFormatError": "Ingrese una dirección de correo electrónico en formato correcto",
    "hasAccount": "¿Ya tienes una cuenta?",
    "gotoLogin": "Ir a iniciar sesión",
    "weak": "Débil",
    "middle": "Medio",
    "high": "Fuerte",
    "userExist": "El usuario ya existe",
    "userNotExist": "Usuario no existe",
    "passwordNotEqual": "La contraseña no coincide con la de arriba, por favor ingrese de nuevo",
    "changeVerification": "Cambia de imagen",
    "mail": "Correo electrónico",
    "genderType": "Género",
    "genderTypeText": ",Hombre,Mujer",
    "genderTypeValue": ",m,f",
    "selectGenderType": "Por favor seleccione un género",
    "registeSuccess": "Contraseña iniciar",
    "codeLogin": "SMS iniciar",
    "passwordLogin": "Inicio con contraseña",
    "bindLogin": "Inicio de sesión del código QR",
    "bingLoginTitle": "Escanee el código con su teléfono móvil para iniciar sesión de forma segura.",
    "o2downloadLink": "https://sample.o2oa.net/app/download.html",
    "loginSuccess": "¡Inicio de sesión exitoso!",
    "userCheck": "Autenticación de usuario",
    "shotMessageCheck": "Verificación de mensaje de texto",
    "setMewPassword": "Establecer nueva contraseña",
    "completed": "Completado",
    "nextStep": "Siguiente",
    "mobile": "Teléfono móvil",
    "setNewPassword": "Establecer nueva contraseña",
    "confirmNewPassword": "Confirmar nueva contraseña",
    "passwordIsWeak": "La contraseña es demasiado débil, utilize una combinación de letras y números, y su longitud debe ser mayor a 7",
    "resetPasswordSuccess": "¡Restablecer contraseña correctamente!",
    "resetPasswordFail": "¡Error al restablecer contraseña!",
    "resetPasswordSuccessWord": "Por favor, recuerde su nueva contraseña establecida.",
    "resetPasswordFailWord": "Por favor verifique su nombre de usuario y código de verificación del mensaje de texto.",
    "backtoModify": "Regresar para modificar",
    "pageNotFound": "Error 404, servicio no encontrado o el servidor está desconectado",
    "submitAction" : "Confirmar",
    "oldPassword" : "Contraseña anterior",
    "inputYourOldPassword" : "Ingrese su contraseña anterior",
    "newPassword" : "Nueva contraseña",
    "inputYourNewPassword" : "Ingrese su nueva contraseña",
    "changePasswordSuccess" : "Se ha modificado correctamente la contraseña",
    "userAppCameraHtml" : "<div>Abre <div styles='bindTipLinkArea'>APP</div> para escanear</div>",
    "loginToPage": "Iniciar sesión en la versión web",
    "accessError": "Falló al acceder a los servicios de backend"
};
o2.LP.script = {
    "error": "Error de ejecución del script, por favor revise la información detallada a continuación."
};
