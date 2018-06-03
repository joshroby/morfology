var model = {

	gameTitle: 'Morfology Character Designer',
	gameSavePrefix: 'morfologyCharacter',

	gameDivContents: function() {
		var svgDiv = document.createElement('div');
		svgDiv.id = 'svgDiv';
		
		model.body = new MorfologyBody('morfo');
		var svg = model.body.draw(500,750);
		svgDiv.appendChild(svg);
		
// 		model.secondBody = new MorfologyBody();
// 		var secondSVG = model.secondBody.svg(750);
// 		secondSVG.setAttribute('transform','translate(250 75)');
// 		svg.appendChild(secondSVG);
// 		
// 		model.thirdBody = new MorfologyBody();
// 		var thirdBody = model.thirdBody.svg(750);
// 		thirdBody.setAttribute('transform','translate(-250 75)');
// 		svg.appendChild(thirdBody);

		var buttonsDiv = document.createElement('div');
		buttonsDiv.id = 'buttonsDiv';
		svgDiv.appendChild(buttonsDiv);
		
		var fullBodyShotBtn = document.createElement('button');
		fullBodyShotBtn.id = 'fullBodyShotBtn';
		fullBodyShotBtn.innerHTML = 'Full Body Shot';
		fullBodyShotBtn.setAttribute('onclick','handlers.toggleShot("fullBody")');
		buttonsDiv.appendChild(fullBodyShotBtn);
		
		var headShotBtn = document.createElement('button');
		headShotBtn.id = 'headShotBtn';
		headShotBtn.innerHTML = 'Head Shot';
		headShotBtn.setAttribute('onclick','handlers.toggleShot("head")');
		buttonsDiv.appendChild(headShotBtn);
		
		var moneyShotBtn = document.createElement('button');
		moneyShotBtn.id = 'moneyShotBtn';
		moneyShotBtn.innerHTML = 'Money Shot';
		moneyShotBtn.setAttribute('onclick','handlers.toggleShot("money")');
		buttonsDiv.appendChild(moneyShotBtn);
		
		var handShotBtn = document.createElement('button');
		handShotBtn.id = 'handShotBtn';
		handShotBtn.innerHTML = 'Hand Shot';
		handShotBtn.setAttribute('onclick','handlers.toggleShot("hand")');
		buttonsDiv.appendChild(handShotBtn);
		
		var handShotBtn = document.createElement('button');
		handShotBtn.id = 'handShotBtn';
		handShotBtn.innerHTML = 'Hand Shot 2';
		handShotBtn.setAttribute('onclick','handlers.toggleShot("hand2")');
		buttonsDiv.appendChild(handShotBtn);
		
		buttonsDiv.appendChild(document.createElement('br'));
		
		var jiggleBtn = document.createElement('button');
		jiggleBtn.id = 'handShotBtn';
		jiggleBtn.innerHTML = 'Jiggle';
		jiggleBtn.setAttribute('onclick','handlers.jiggle()');
		buttonsDiv.appendChild(jiggleBtn);
		
		var animateBtn = document.createElement('button');
		animateBtn.id = 'animateBtn';
		animateBtn.innerHTML = 'Animate';
		animateBtn.setAttribute('onclick','handlers.animate()');
		buttonsDiv.appendChild(animateBtn);
		
		buttonsDiv.appendChild(document.createElement('br'));
		
		var normalizeBtn = document.createElement('button');
		normalizeBtn.id = 'normalizeBtn';
		normalizeBtn.innerHTML = '-10s';
		normalizeBtn.setAttribute('onclick','handlers.normalize(-10)');
		buttonsDiv.appendChild(normalizeBtn);
		
		var normalizeBtn = document.createElement('button');
		normalizeBtn.id = 'normalizeBtn';
		normalizeBtn.innerHTML = '-5s';
		normalizeBtn.setAttribute('onclick','handlers.normalize(-5)');
		buttonsDiv.appendChild(normalizeBtn);
		
		var normalizeBtn = document.createElement('button');
		normalizeBtn.id = 'normalizeBtn';
		normalizeBtn.innerHTML = '0s';
		normalizeBtn.setAttribute('onclick','handlers.normalize(0)');
		buttonsDiv.appendChild(normalizeBtn);
		
		var normalizeBtn = document.createElement('button');
		normalizeBtn.id = 'normalizeBtn';
		normalizeBtn.innerHTML = '5s';
		normalizeBtn.setAttribute('onclick','handlers.normalize(5)');
		buttonsDiv.appendChild(normalizeBtn);
		
		var normalizeBtn = document.createElement('button');
		normalizeBtn.id = 'normalizeBtn';
		normalizeBtn.innerHTML = '10s';
		normalizeBtn.setAttribute('onclick','handlers.normalize(10)');
		buttonsDiv.appendChild(normalizeBtn);
		
		buttonsDiv.appendChild(document.createElement('br'));
		
		var exportBtn = document.createElement('button');
		exportBtn.innerHTML = "Export to SVG with embedded parameters";
		buttonsDiv.appendChild(exportBtn);
		
		var importBtn = document.createElement('button');
		importBtn.innerHTML = "Import parameters embedded in SVG";
		buttonsDiv.appendChild(importBtn);
		
		buttonsDiv.appendChild(document.createElement('br'));
		
		var todoHead = document.createElement('h3');
		todoHead.innerHTML = 'To Do';
		buttonsDiv.appendChild(todoHead);
		
		var ul = document.createElement('ul');
		buttonsDiv.appendChild(ul);
		
		var todoList = [
			'neck disconnect',
			'sleeves',
			'leggings',
			'skirts',
			'pregnancy',
			'Export with embedded parameters',
			'Import parameters embedded in svg',
			'one leg / one arm / one hand / etc',
			'Sidelocks?',
		];
		for (var item of todoList) {
			var li = document.createElement('li');
			li.innerHTML = item;
			ul.appendChild(li);
		};
		
		var ticklist = document.createElement('datalist');
		ticklist.id = 'ticklist';
// 		for (var i of [-5,0,5]) {
		for (var i of [0]) {
			var option = document.createElement('option');
			option.innerHTML = i;
			ticklist.appendChild(option);
		};
		
		var controlsWrapper = document.createElement('div');
		controlsWrapper.id = 'controlsWrapper';
		
		var poseWrapper = document.createElement('div');
		controlsWrapper.appendChild(poseWrapper);
		var poseHead = document.createElement('h3');
		poseWrapper.appendChild(poseHead);
		poseHead.innerHTML = "Pose";
		var poseDiv = document.createElement('div');
		poseDiv.id = 'poseDiv';
		poseDiv.className = 'controlsDiv';
		poseWrapper.appendChild(poseDiv);
		poseDiv.style.display = 'none';
		for (var i in model.body.pose) {
			var sliderLabel = document.createElement('p');
			sliderLabel.innerHTML = i;
			poseDiv.appendChild(sliderLabel);
			var slider = document.createElement('input');
			slider.id = i + "Slider";
			slider.setAttribute('list','ticklist');
			slider.setAttribute('type','range');
			slider.setAttribute('min',Math.PI*-1);
			slider.setAttribute('max',Math.PI);
			slider.setAttribute('step',Math.PI/180);
			slider.setAttribute('value',model.body.pose[i]);
			slider.setAttribute('oninput','handlers.updatePose("'+i+'")');
			slider.setAttribute('onchange','handlers.updatePose("'+i+'")');
			sliderLabel.prepend(slider);
		};
		poseHead.addEventListener('click',handlers.exposeDiv.bind(handlers,'poseDiv'));
		
		var bioWrapper = document.createElement('div');
		controlsWrapper.appendChild(bioWrapper);
		var bioHead = document.createElement('h3');
		bioWrapper.appendChild(bioHead);
		bioHead.innerHTML = "Biometrics";
		var bioDiv = document.createElement('div');
		bioDiv.id = 'bioDiv';
		bioDiv.className = 'controlsDiv';
		bioWrapper.appendChild(bioDiv);
		bioDiv.style.display = 'none';
		for (var i in model.body.biometrics) {
			var sliderLabel = document.createElement('p');
			sliderLabel.innerHTML = i;
			bioDiv.appendChild(sliderLabel);
			var slider = document.createElement('input');
			slider.id = i + "Slider";
			slider.setAttribute('list','ticklist');
			slider.setAttribute('type','range');
			slider.setAttribute('min',-10);
			slider.setAttribute('max',10);
			slider.setAttribute('step',0.01);
			slider.setAttribute('value',model.body.biometrics[i]);
			slider.setAttribute('oninput','handlers.updateBio("'+i+'")');
			slider.setAttribute('onchange','handlers.updateBio("'+i+'")');
			sliderLabel.prepend(slider);
		};
		bioHead.addEventListener('click',handlers.exposeDiv.bind(handlers,'bioDiv'));
		
		var colorWrapper = document.createElement('div');
		controlsWrapper.appendChild(colorWrapper);
		var colorHead = document.createElement('h3');
		colorWrapper.appendChild(colorHead);
		colorHead.innerHTML = "Coloring";
		var colorDiv = document.createElement('div');
		colorDiv.id = 'colorDiv';
		colorDiv.className = 'controlsDiv';
		colorWrapper.appendChild(colorDiv);
		colorDiv.style.display = 'none';
		for (var i in model.body.coloring) {
			var sliderLabel = document.createElement('p');
			sliderLabel.innerHTML = i;
			colorDiv.appendChild(sliderLabel);
			var slider = document.createElement('input');
			slider.id = i + "Slider";
			slider.setAttribute('type','range');
			slider.setAttribute('min',0.1);
			slider.setAttribute('max',0.9);
			slider.setAttribute('step',0.01);
			slider.setAttribute('value',model.body.coloring[i]);
			slider.setAttribute('oninput','handlers.updateColor("'+i+'")');
			slider.setAttribute('onchange','handlers.updateColor("'+i+'")');
			sliderLabel.prepend(slider);
		};
		colorHead.addEventListener('click',handlers.exposeDiv.bind(handlers,'colorDiv'));
		
		for (var g in model.body.garments) {
			var garmentWrapper = document.createElement('div');
			controlsWrapper.appendChild(garmentWrapper);
			var garmentHead = document.createElement('h3');
			garmentWrapper.appendChild(garmentHead);
			garmentHead.innerHTML = "Garment #"+g+" ";
// 			var deleteGarmentBtn = document.createElement('button');
// 			garmentWrapper.appendChild(deleteGarmentBtn);
// 			deleteGarmentBtn.innerHTML = '-';
			var garmentsDiv = document.createElement('div');
			garmentsDiv.id = 'garment'+g+'Div';
			garmentsDiv.className = 'controlsDiv';
			garmentWrapper.appendChild(garmentsDiv);
			garmentsDiv.style.display = 'none';
			for (var i in model.body.garments[g]) {
				var sliderLabel = document.createElement('p');
				sliderLabel.innerHTML = i;
				garmentsDiv.appendChild(sliderLabel);
				var slider = document.createElement('input');
				slider.id = i + g + "Slider";
				slider.setAttribute('type','range');
				slider.setAttribute('min',0.01);
				slider.setAttribute('max',0.99);
				slider.setAttribute('step',0.01);
				slider.setAttribute('value',model.body.garments[0][i]);
				slider.setAttribute('oninput','handlers.updateGarment("'+g+'","'+i+'")');
				slider.setAttribute('onchange','handlers.updateGarment("'+g+'","'+i+'")');
				sliderLabel.prepend(slider);
			};
			garmentHead.addEventListener('click',handlers.exposeDiv.bind(handlers,'garment'+g+'Div'));
		};
				
		return [svgDiv, ticklist, controlsWrapper];
	},
	
	options: {
		shot: 'headShot',
	},

};

var handlers = {
	
	newGame: function() {
		gamen.init();
	},
	
	draw: function() {
		var svg = model.body.draw(500,750,model.options.shot);
		var buttonsDiv = document.getElementById('buttonsDiv');
		document.getElementById('svgDiv').innerHTML = '';
		document.getElementById('svgDiv').appendChild(svg);
		document.getElementById('svgDiv').appendChild(buttonsDiv);
	},
	
	toggleShot: function(shot) {
		model.options.shot = shot;
		handlers.draw();
	},
	
	exposeDiv: function(divID) {
		var divs = document.getElementById('controlsWrapper').children;
		for (var div of divs) {
			div.lastChild.style.display = 'none';
		};
		var exposeDiv = document.getElementById(divID);
		if (view.exposedOptions == divID) {
			exposeDiv.style.display = 'none';
			view.exposedOptions = undefined;
		} else {
			exposeDiv.style.display = 'block';
			view.exposedOptions = divID;
		};
	},
	
	updatePose: function(poseKey) {
		model.body.pose[poseKey] = parseFloat(document.getElementById(poseKey + "Slider").value);
		handlers.draw();
	},
	
	updateBio: function(bioKey) {
		model.body.biometrics[bioKey] = parseFloat(document.getElementById(bioKey + "Slider").value);
		handlers.draw();
	},
	
	updateColor: function(bioKey) {
		model.body.coloring[bioKey] = parseFloat(document.getElementById(bioKey + "Slider").value);
		handlers.draw();
	},
	
	updateGarment: function(garmentIndex,key) {
		model.body.garments[garmentIndex][key] = parseFloat(document.getElementById(key + garmentIndex + "Slider").value);
		handlers.draw();
	},
	
	normalize: function(num) {
		for (var i in model.body.biometrics) {
			model.body.biometrics[i] = num;
			document.getElementById(i+'Slider').value = num;
		};
		for (i in model.body.library.boring) {
			model.body.pose[i] = model.body.library.boring[i];
			document.getElementById(i+'Slider').value = model.body.library.boring[i];
		};
		handlers.draw();
	},
	
	animate: function() {
		model.body.animate();
		for (i in model.body.biometrics) {
			document.getElementById(i + "Slider").value = model.body.biometrics[i];
		}
		for (i in model.body.pose) {
			document.getElementById(i + "Slider").value = model.body.pose[i];
		}
		for (i in model.body.coloring) {
			document.getElementById(i + "Slider").value = model.body.coloring[i];
		}
		handlers.draw();
		var timedEvent = setTimeout(handlers.animate,10);
	},
	
	jiggle: function(iterations) {
		model.body.jiggle(iterations);
		for (i in model.body.biometrics) {
			document.getElementById(i + "Slider").value = model.body.biometrics[i];
		}
		for (i in model.body.pose) {
			document.getElementById(i + "Slider").value = model.body.pose[i];
		}
		for (i in model.body.coloring) {
			document.getElementById(i + "Slider").value = model.body.coloring[i];
		}
		handlers.draw();
	},
	
	jiggly: function() {
		handlers.jiggle(1);
		var timedEvent = setTimeout(handlers.jiggly,10);
	},

};

var view = {
	setHref: function(element,href) {
		element.setAttribute('href','#'+href);
		element.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','#'+href);
	},
};