console.log("[Auto SSO] Running!");

	function getCookie(name) {
		var cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		return cookie ? cookie[2] : null;
	};
	if (getCookie("_username") == null) {
			alert("[Auto SSO] Disclaimer:" + "/n" + "This script only encodes your credentials, this means that only obfuscation occurs. NOT encryption. I am not responsible to any loss that may occur when this script is used");
			console.log("[Auto SSO] Cookie non-existant! Initialising setup...");
			var username = prompt("Please enter your username /n Username:");
			var password = prompt("Please enter your password /n Password:");
			document.cookie = "_username=" + window.btoa(username);
			document.cookie = "_password=" + window.btoa(password);
			inputCredentials();
		} else {
			function inputCredentials() {
				var usernameSSO = window.atob(getCookie("_username"));
				var passwordSSO = window.atob(getCookie("_password"));
				console.log("[Auto SSO] Inputting Preset Credentials...");
				document.getElementById("username").value = usernameSSO;
				document.getElementById("password").value = passwordSSO;
}; inputCredentials();
};
console.log("[Auto SSO] Done!");
document.getElementById("loginbutton").click()
