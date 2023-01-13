setTimeout(() => {
	var interval;
	var mtc = document.querySelector("meta[name=theme-color]");
	let themecolor;

	if (mtc === null) {
		console.log("theme-color absent");
	}
	else {
		console.log("theme-color present");
		interval = setInterval(() => {
			var mtc_fix = document.querySelector("meta[name=theme-color]");
			if (mtc_fix === null) {
				return;
			}
			else {
				themecolor = mtc_fix.getAttribute("content");
				console.log("Website theme-color: " + themecolor);
				mtc_fix.remove();
				console.log("Element was removed");
			}
		}, 100);
	}

	setTimeout(() => {
		clearInterval(interval);
	}, 4500);
}, 0);