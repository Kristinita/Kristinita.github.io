# [DEPRECATED] Wildfire no longer functioning more
############
# Wildfire #
############
###
[INFO] FOSS comments system:
https://wildfire.js.org

[LEARN][COFFEESCRIPT] Arrow function:
“= ->” is “= () =>” EcmaScript equivalent.
Js2Coffee not convert it correct:
https://stackoverflow.com/a/43593587/5951529

[NOTE] Wildfire use Firebase database, that not open source:
https://www.quora.com/Is-Firebase-open-source

[INFO] Firebase open source “Spark” plan:
https://firebase.google.com/pricing/

[WARNING] Automatical e-mail notifications not support:
https://github.com/cheng-kang/wildfire/issues/47#issuecomment-467726609

[WARNING] Another issues:
https://github.com/cheng-kang/wildfire/issues/48
https://github.com/cheng-kang/wildfire/issues/49
https://github.com/cheng-kang/wildfire/issues/50
###


###
wildfireConfig = ->

	[INFO] Firebase or Wilddog
	https://wildfire.js.org/#/configuration?id=databaseprovider-required

	databaseProvider: "firebase"

	[INFO] Configuration, that I get from Firebase:
	https://wildfire.js.org/#/configuration?id=databaseconfig-requried

	databaseConfig:
		apiKey: "<%= api_key_wildfire_firebase %>"
		authDomain: "<%= wildfire_firebase_project %>.firebaseapp.com"
		databaseURL: "https://<%= wildfire_firebase_project %>.firebaseio.com"
		projectId: "<%= wildfire_firebase_project %>"
		storageBucket: "<%= wildfire_firebase_project %>.appspot.com"
		messagingSenderId: "<%= wildfire_messaging_sender_id %>"


	[NOTE] Set “pageURL” for same comments in multiple pages:
	https://wildfire.js.org/#/configuration?id=pageurl-optional
	[INFO] Light or dark:
	https://wildfire.js.org/#/configuration?id=theme-optional

	theme: "dark"


	[INFO] Possible set default avatar URL:
	https://wildfire.js.org/#/configuration?id=defaultavatarurl-optional
	[INFO] English or Chinese:
	https://wildfire.js.org/#/configuration?id=locale-optional

	locale: "en"
###
