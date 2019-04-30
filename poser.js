var model = {

	gameTitle: 'Morfology Character Modeling Tool',
	gameSavePrefix: 'morfologyCharacter',
	
	supportLink: 'http://patreon.com/joshroby',
	supportLinkLabel: 'Patreon',

	gameDivContents: function() {
		var svgDiv = document.createElement('div');
		svgDiv.id = 'svgDiv';
		
		if (model.body == undefined) {
			model.body = new MorfologyBody('morfo');
			model.body.biometrics.totalHeight = 0;
		};
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
		
		var randomizeBtn = document.createElement('button');
		randomizeBtn.innerHTML = "Randomize";
		buttonsDiv.appendChild(randomizeBtn);
		randomizeBtn.addEventListener('click',handlers.randomize);
		
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
		
		var nipShotBtn = document.createElement('button');
		nipShotBtn.id = 'farNipple';
		nipShotBtn.innerHTML = 'Nip Shot';
		nipShotBtn.setAttribute('onclick','handlers.toggleShot("farNipple")');
		buttonsDiv.appendChild(nipShotBtn);
		
		buttonsDiv.appendChild(document.createElement('br'));
		
		var exportPoseBtn = document.createElement('button');
		exportPoseBtn.innerHTML = "Copy Pose to Clipboard";
		buttonsDiv.appendChild(exportPoseBtn);
		exportPoseBtn.addEventListener('click',view.displayPose);
		
		buttonsDiv.appendChild(document.createElement('br'));
		
		var exportBtn = document.createElement('button');
		exportBtn.innerHTML = "Export to SVG";
		buttonsDiv.appendChild(exportBtn);
		
		var importBtn = document.createElement('button');
		importBtn.innerHTML = "Import SVG";
		buttonsDiv.appendChild(importBtn);
		
		var controlsWrapper = document.createElement('div');
		controlsWrapper.id = 'controlsWrapper';
		
		var poseWrapper = document.createElement('div');
		controlsWrapper.appendChild(poseWrapper);
		poseWrapper.id = 'poseDiv';
		var poseHead = document.createElement('h3');
		poseWrapper.appendChild(poseHead);
		var poseLabel = document.createElement('span');
		poseHead.appendChild(poseLabel);
		poseLabel.innerHTML = '&#9658; Pose';
		var poseDiv = document.createElement('div');
		poseDiv.className = 'controlsDiv';
		poseWrapper.appendChild(poseDiv);
		poseDiv.style.display = 'none';
		for (var i in model.body.pose) {
			var sliderDiv = document.createElement('div');
			sliderDiv.id = i+"_Slider";
			var sliderP = document.createElement('p');
			sliderP.className = 'sliderSpan';
			sliderDiv.appendChild(sliderP);
			var sliderLabel = document.createElement('p');
			sliderDiv.appendChild(sliderLabel);
			sliderLabel.className = 'sliderLabel';
			sliderLabel.innerHTML = i;
			poseDiv.appendChild(sliderDiv);
			var input = document.createElement('input');
			sliderP.appendChild(input);
			input.id = i + "Slider";
			input.setAttribute('type','range');
			input.setAttribute('min',Math.PI*-1);
			input.setAttribute('max',Math.PI);
			input.setAttribute('step',Math.PI/180);
			input.setAttribute('value',model.body.pose[i]);
			input.setAttribute('oninput','handlers.updatePose("'+i+'")');
			input.setAttribute('onchange','handlers.updatePose("'+i+'")');
		};
		poseHead.addEventListener('click',handlers.exposeDiv.bind(handlers,'poseDiv'));
		
		var bioWrapper = document.createElement('div');
		controlsWrapper.appendChild(bioWrapper);
		bioWrapper.id = 'bioDiv';
		var bioHead = document.createElement('h3');
		bioWrapper.appendChild(bioHead);
		var bioLabel = document.createElement('span');
		bioHead.appendChild(bioLabel);
		bioLabel.innerHTML = "&#9658; Biometrics";
		var bioDiv = document.createElement('div');
		bioDiv.className = 'controlsDiv';
		bioWrapper.appendChild(bioDiv);
		bioDiv.style.display = 'none';
		for (var i in model.body.biometrics) {
			var sliderDiv = document.createElement('div');
			sliderDiv.id = i+"_Slider";
			var sliderP = document.createElement('p');
			sliderP.className = 'sliderSpan';
			sliderDiv.appendChild(sliderP);
			var sliderLabel = document.createElement('p');
			sliderDiv.appendChild(sliderLabel);
			sliderLabel.className = 'sliderLabel';
			sliderLabel.innerHTML = i;
			bioDiv.appendChild(sliderDiv);
			var input = document.createElement('input');
			sliderP.appendChild(input);
			input.id = i + "Slider";
			input.setAttribute('type','range');
			input.setAttribute('min',-10);
			input.setAttribute('max',10);
			input.setAttribute('value',model.body.biometrics[i]);
			input.setAttribute('oninput','handlers.updateBio("'+i+'")');
			input.setAttribute('onchange','handlers.updateBio("'+i+'")');
		};
		bioHead.addEventListener('click',handlers.exposeDiv.bind(handlers,'bioDiv'));
		
		var colorWrapper = document.createElement('div');
		controlsWrapper.appendChild(colorWrapper);
		colorWrapper.id = 'colorDiv';
		var colorHead = document.createElement('h3');
		colorWrapper.appendChild(colorHead);
		var colorLabel = document.createElement('span');
		colorHead.appendChild(colorLabel);
		colorLabel.innerHTML = "&#9658; Coloring";
		var colorDiv = document.createElement('div');
		colorDiv.className = 'controlsDiv';
		colorWrapper.appendChild(colorDiv);
		colorDiv.style.display = 'none';
		for (var i in model.body.coloring) {
			var sliderDiv = document.createElement('div');
			sliderDiv.id = i+"_Slider";
			var sliderP = document.createElement('p');
			sliderP.className = 'sliderSpan';
			sliderDiv.appendChild(sliderP);
			var sliderLabel = document.createElement('p');
			sliderDiv.appendChild(sliderLabel);
			sliderLabel.className = 'sliderLabel';
			sliderLabel.innerHTML = i;
			colorDiv.appendChild(sliderDiv);
			var input = document.createElement('input');
			sliderP.appendChild(input);
			input.id = i + "Slider";
			input.setAttribute('type','range');
			input.setAttribute('min',0.1);
			input.setAttribute('max',0.9);
			input.setAttribute('step',0.01);
			input.setAttribute('value',model.body.coloring[i]);
			input.setAttribute('oninput','handlers.updateColor("'+i+'")');
			input.setAttribute('onchange','handlers.updateColor("'+i+'")');
		};
		colorHead.addEventListener('click',handlers.exposeDiv.bind(handlers,'colorDiv'));
		
		for (var g=0;g<model.body.garments.length;g++) {
			var garmentWrapper = document.createElement('div');
			controlsWrapper.appendChild(garmentWrapper);
			garmentWrapper.id = 'garment'+g+'Div';
			var garmentHead = document.createElement('h3');
			garmentWrapper.appendChild(garmentHead);
			garmentHead.id = 'garmentHead_'+g;
			var garment = model.body.garments[g];
			var garmentColor = "#" + ("0" + Math.round(255*garment.red).toString(16)).substr(-2) + ("0" + Math.round(255*garment.green).toString(16)).substr(-2) + ("0" + Math.round(255*garment.blue).toString(16)).substr(-2);
			garmentHead.style.backgroundColor = garmentColor;
			var garmentLabel = document.createElement('span');
			garmentHead.appendChild(garmentLabel);
			garmentLabel.innerHTML = "&#9658; Garment Layer #"+(g+1)+" ";
			var deleteGarmentBtn = document.createElement('button');
			garmentHead.appendChild(deleteGarmentBtn);
			deleteGarmentBtn.innerHTML = '&#x2620;';
			deleteGarmentBtn.addEventListener('click',model.deleteGarment.bind(this,g));
			var moveUpGarmentBtn = document.createElement('button');
			garmentHead.appendChild(moveUpGarmentBtn);
			moveUpGarmentBtn.innerHTML = '&uarr;';
			moveUpGarmentBtn.addEventListener('click',model.moveGarment.bind(this,g,-1));
			var moveDownGarmentBtn = document.createElement('button');
			garmentHead.appendChild(moveDownGarmentBtn);
			moveDownGarmentBtn.innerHTML = '&darr;';
			moveDownGarmentBtn.addEventListener('click',model.moveGarment.bind(this,g,1));
			var garmentsDiv = document.createElement('div');
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
				slider.setAttribute('step',0.001);
				slider.setAttribute('value',model.body.garments[0][i]);
				slider.setAttribute('oninput','handlers.updateGarment("'+g+'","'+i+'")');
				slider.setAttribute('onchange','handlers.updateGarment("'+g+'","'+i+'")');
				sliderLabel.prepend(slider);
			};
			garmentLabel.addEventListener('click',handlers.exposeDiv.bind(handlers,'garment'+g+'Div'));
		};
		
		var addGarmentBtn = document.createElement('button');
		addGarmentBtn.innerHTML = 'Add Garment';
		controlsWrapper.appendChild(addGarmentBtn);
		addGarmentBtn.addEventListener('click',model.addGarment);
		
		var premiseDiv = document.createElement('div');
		premiseDiv.id = 'premiseDiv';
		controlsWrapper.appendChild(premiseDiv);
		var lines = [
			"Morfology is an ungendered character modeling tool intended to be as inclusive as possible of the vast and beautiful range of human shapes, sizes, and colors.",
			"It is and will probably remain an eternal work in progress.  There will always be more variations on the human form to include.  If morfology cannot do something you think it should, please contact me via the patreon link above.",
			"Future developments will include: visible disabilities, age & wrinkles, and possibly even handheld props.",
			"Despite those developments, the figures' data structure is designed to be 'future proofed' against later developments. Figures designed with earlier versions should always display and import with minor adjustments as the tool develops.",
			"",
		];
		for (var string of lines) {
			var p = document.createElement('p');
			premiseDiv.appendChild(p);
			p.innerHTML = string;
		};
		
		var todoDiv = document.createElement('div');
		todoDiv.id = 'todoDiv';
		
		var todoHead = document.createElement('h3');
		todoHead.innerHTML = 'To Do';
		todoDiv.appendChild(todoHead);
		
		var ul = document.createElement('ul');
		todoDiv.appendChild(ul);
		
		var todoList = [
			'nipples poking out of clothing',
			'vulva (incl. fupa)',
			'pants need a speedo without stroke',
			'separate sleeve and legging clip paths to upper and lower, apply to those groups rather than the svg top layer',
			'puffy sleeves',
			'puffy leggings',
			'puffy skirts',
			'empire waists (garment.waistHeight)',
			'shoes',
			'Export with embedded parameters',
			'Import parameters embedded in svg',
			'one leg / one arm / one hand / etc',
		];
		for (var item of todoList) {
			var li = document.createElement('li');
			li.innerHTML = item;
			ul.appendChild(li);
		};
				
		return [svgDiv, controlsWrapper, todoDiv];
	},
	
	addGarment: function() {
		var newGarment = new model.body.garment();
		model.body.garments.push(newGarment);
		view.refreshView();
	},
	
	deleteGarment: function(index) {
		if (index !== -1) {
			model.body.garments.splice(index,1);
		};
		view.refreshView();
	},
	
	moveGarment: function(index,direction) {
		var movingGarment = model.body.garments[index];
		model.body.garments.splice(index,1);
		model.body.garments.splice(index+direction,0,movingGarment)
		view.refreshView();
	},
	
	options: {
		shot: 'headShot',
	},

};

var handlers = {
	
	newGame: function() {
		model.body = undefined;
		gamen.init();
	},
	
	randomize: function() {
		model.body = new MorfologyBody();
		handlers.draw();
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
			if (div.id !== 'premiseDiv' && div.innerHTML !== 'Add Garment') {
				div.firstChild.firstChild.innerHTML = '&#9658; ' + div.firstChild.firstChild.innerHTML.substr(div.firstChild.firstChild.innerHTML.indexOf(' '));
				div.lastChild.style.display = 'none';
			};
		};
		var exposeDiv = document.getElementById(divID);
		if (view.exposedOptions == divID) {
			exposeDiv.lastChild.style.display = 'none';
			view.exposedOptions = undefined;
		} else {
			exposeDiv.lastChild.style.display = 'block';
			exposeDiv.firstChild.firstChild.innerHTML = '&#9660; ' + exposeDiv.firstChild.firstChild.innerHTML.substr(exposeDiv.firstChild.firstChild.innerHTML.indexOf(' '));
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
		view.updateGarmentColor(garmentIndex);
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
	refreshView: function() {
		var gameDiv = document.body.children[1];
		gameDiv.innerHTML = '';
		var gameDivContents = model.gameDivContents();
		for (var node of gameDivContents) {
			gameDiv.appendChild(node);
		};
	},
	setHref: function(element,href) {
		element.setAttribute('href','#'+href);
		element.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','#'+href);
	},
	updateGarmentColor: function(garmentIndex) {
		var garment = model.body.garments[garmentIndex];
		var garmentColor = "#" + ("0" + Math.round(255*garment.red).toString(16)).substr(-2) + ("0" + Math.round(255*garment.green).toString(16)).substr(-2) + ("0" + Math.round(255*garment.blue).toString(16)).substr(-2);
		document.getElementById('garmentHead_'+garmentIndex).style.backgroundColor = garmentColor;
	},
	displayPose: function() {
		var todoDiv = document.getElementById('todoDiv');
		var textarea = document.createElement('textarea');
		textarea.innerHTML = JSON.stringify(model.body.exportPose().replace(/"/g,'').replace(/,/g,', '));
		todoDiv.appendChild(textarea);
		textarea.focus();
		textarea.select();
		document.execCommand('copy');
		todoDiv.removeChild(textarea);
	},
};