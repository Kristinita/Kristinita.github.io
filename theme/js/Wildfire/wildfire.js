//###########
// Wildfire #
//###########
// FOSS comments system:
// https://wildfire.js.org
// [LEARN][COFFEESCRIPT] Arrow function:
// “= ->” is “= () =>” EcmaScript equivalent.
// Js2Coffee not convert it correct:
// https://stackoverflow.com/a/43593587/5951529
// [WARNING] Wildfire use Firebase database, that not open source:
// https://www.quora.com/Is-Firebase-open-source
// [INFO] Firebase open source “Spark” plan:
// https://firebase.google.com/pricing/
// [WARNING] Automatical e-mail notifications not support:
// https://github.com/cheng-kang/wildfire/issues/47#issuecomment-467726609
// [WARNING] Another issues:
// https://github.com/cheng-kang/wildfire/issues/48
// https://github.com/cheng-kang/wildfire/issues/49
// https://github.com/cheng-kang/wildfire/issues/50
var wildfireConfig;

wildfireConfig = function() {
	return {
		// [INFO] Firebase or Wilddog
		// https://wildfire.js.org/#/configuration?id=databaseprovider-required
		databaseProvider: "firebase",
		// [INFO] Configuration, that I get from Firebase:
		// https://wildfire.js.org/#/configuration?id=databaseconfig-requried
		databaseConfig: {
			apiKey: "AIzaSyBcqG96euym190CIuOLFO3PQx2a6cNcpwY",
			authDomain: "kirawildfirefirebase.firebaseapp.com",
			databaseURL: "https://kirawildfirefirebase.firebaseio.com",
			projectId: "kirawildfirefirebase",
			storageBucket: "kirawildfirefirebase.appspot.com",
			messagingSenderId: "545427878052"
		},
		// [NOTE] Set “pageURL” for same comments in multiple pages:
		// https://wildfire.js.org/#/configuration?id=pageurl-optional
		// [INFO] Light or dark:
		// https://wildfire.js.org/#/configuration?id=theme-optional
		theme: "dark",
		// [INFO] Possible set default avatar URL:
		// https://wildfire.js.org/#/configuration?id=defaultavatarurl-optional
		// [INFO] English or Chinese:
		// https://wildfire.js.org/#/configuration?id=locale-optional
		locale: "en"
	};
};
