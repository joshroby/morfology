function MorfologyBody(id,sex,roundness,softness) {

	if (id == undefined) {id = Math.random().toString(36).slice(2)};
	this.id = id;

	var parameterCurves = {
		areolaeWidth:'bell',
		armLength:'bell',
		armWidth: 'bell',
		belly: 'bell',
		biceps: 'bell',
		breastSize: 'bell',
		breastProject: 'bell',
		pectorals: 'bell',
		browSize: 'bell',
		buttSize: 'bell',
		calfWidth: 'bell',
		cheekboneHeight: 'bell',
		cheekboneSize: 'bell',
		cheekboneWidth: 'bell',
		earHeight: 'bell',
		earLobe: 'bell',
		earPoint: 'bell',
		earWidth: 'bell',
		eyeDistance: 'bell',
		eyeTilt: 'bell',
		eyeSize: 'bell',
		footLength: 'bell',
		glansSize: 'camel',
		hairCurl: 'bell',
		hairBangs: 'parabolic',
		hairBangsLength: 'bell',
		hairBangsPart: 'bell',
		hairBangsSweep: 'bell',
		hairLength: 'bell',
		hairNimbus: 'exponential',
		hairTails: 'parabolic',
		hairTailCinch: 'parabolic',
		hairTailPlumpness: 'bell',
		hairTailPosition: 'exponential',
		hairlineHeight: 'bell',
		hairlinePeak: 'bell',
		handLength: 'bell',
		handWidth: 'bell',
		headHeight: 'bell',
		headWidth: 'bell',
		hipsHeight: 'bell',
		hipsWidth: 'bell',
		hipsRoundness: 'bell',
		jawWidth: 'bell',
		labioscrotalSize: 'camel',
		legHeight: 'bell',
		lipSize: 'bell',
		nailsLength: 'bell',
		neckHeight: 'bell',
		neckWidth: 'bell',
		nippleLength: 'bell',
		nippleWidth: 'bell',
		noseBridgeHeight: 'bell',
		noseBridgeDepth: 'bell',
		noseLength: 'bell',
		noseRound: 'bell',
		noseTurn: 'bell',
		pelvisWidth: 'bell',
		phallusLength: 'camel',
		phallusGirth: 'camel',
		pregnancy: 'bell',
		shouldersWidth: 'bell',
		templeHeight: 'bell',
		templeSize: 'bell',
		templeWidth: 'bell',
		thighWidth: 'bell',
		torsoHeight: 'bell',
		totalHeight: 'bell',
	};

	this.biometrics = {};
	for (var i in parameterCurves) {
		if (parameterCurves[i] == 'camel') {
			this.biometrics[i] = 5 * (Math.random() + Math.random() + Math.random())/3;
			if (Math.random() > 0.5) {this.biometrics[i] *= -1;};
		} else if (parameterCurves[i] == 'parabolic') {
			this.biometrics[i] = Math.pow((Math.random()-0.5)*2,2) * 5;
		} else if (parameterCurves[i] == 'exponential') {
			this.biometrics[i] = Math.pow(Math.random(),4) * 10 - 5;
		} else {
			this.biometrics[i] = 5*(Math.random() * Math.random());
			if (Math.random() > 0.5) {this.biometrics[i] *= -1};
		};
	};
// 	this.biometrics.totalHeight = 0;
	
	if (sex == undefined) {
		sex = 2 * (Math.random() - 0.5);
	} else if (sex == 'male' || sex == 'masculine' || sex == 'amab' || sex == 'androgen' || sex == 'testosterone') {
		sex = Math.random() * -1;
	} else if (sex == 'female' || sex == 'feminine' || sex == 'afab' || sex == 'estrogen') {
		sex = Math.random();
	};
	if (roundness == undefined) {
		roundness = 2 * (Math.random() - 0.5);
	} else if (roundness == true || roundness == 'round' || roundness == 'big') {
		roundness = Math.random();
	} else if (roundness == false || roundness == 'lean' || roundness == 'small') {
		roundness = Math.random() * -1;
	};
	if (softness == undefined) {
		softness = 2 * (Math.random() - 0.5);
	} else if (softness == true || softness == 'soft') {
		softness = Math.random();
	} else if (softness == false || softness == 'hard') {
		softness = Math.random() * -1;
	};
	
	var broadDescriptors = {
		sex: sex,
		roundness: roundness,
		softness: softness,
	};

	var broadCharacteristics = {
		areolaeWidth: {sex:-1},
		armWidth: {sex:0.2,roundness:0.8},
		belly: {softness:0.3,roundness:0.3},
		biceps: {softness:1},
		breastSize: {sex:-0.3,roundness:0.15,softness:0.15},
		pectorals: {sex:-0.75},
		buttSize: {sex:-0.25,roundness:0.5,softness:0.25},
		calfWidth: {roundness:1},
		cheekboneHeight: {sex:1},
		cheekboneSize: {roundness:1,softness:1},
		cheekboneWidth: {sex:-1,roundness:1},
		eyeSize: {sex:-0.5},
		glansSize: {sex:1},
		hairlineHeight: {sex:-1},
		pelvisWidth: {sex:-0.5,roundness:0.5},
		handLength: {sex:1},
		handWidth: {sex:1},
		hipsHeight: {sex:-1},
		hipsWidth: {sex:0.5,roundness:0.5},
		hipsRoundness: {sex:0.4,roundness:0.3,softness:0.3},
		jawWidth: {sex:1},
		labioscrotalSize: {sex:0.5},
		lipSize: {sex:-1},
		nailsLength: {sex:-1},
		neckHeight: {sex:-1},
		neckWidth: {sex:0.5,roundness:0.5},
		nippleLength: {sex:-0.75,softness:-0.5},
		nippleWidth: {sex:-0.25,roundness:0.5},
		noseBridgeHeight: {sex:1},
		pelvisWidth: {sex:-1},
		phallusLength: {sex:0.5},
		phallusGirth: {sex:1},
		shouldersWidth: {sex:0.7,roundness:0.3},
		templeWidth: {roundness:1},
		thighWidth: {roundness: 0.5,softness:0.5},
	};
	for (var parameter in broadCharacteristics) {
		var value = 0;
		for (var influence in broadCharacteristics[parameter]) {
			value += broadCharacteristics[parameter][influence] * broadDescriptors[influence];
		};
		this.biometrics[parameter] += value;
	};
	if (sex < 0 && Math.random() < 0.8) {
		this.biometrics.pregnancy = -1;
	};

	this.coloring = {};
	for (i of ['areolaePink','areolaeDark','eyeGreen','eyeBlue','hairBlue','hairGreen','hairRed','lipPink','lipDark','skinBlack','skinBrown','skinPink']) {
		this.coloring[i] = Math.random();
	};
	this.coloring.skinBlack = Math.min(this.coloring.skinBlack,0.7);
	
	this.pose = {};
	for (i of ["lean", "eyePositionX", "eyePositionY", "farEyeInnerLid", "farEyeOuterLid", "farEyeLowerLid", "farEyebrowArch", "farFootPoint", "farForearmLift", "farHandCurl", "farHandSplay", "farHandTilt", "farHandTurn", "farKneeBend", "farThighLift", "farUpperArmLift", "headNod", "headSlide", "headTip", "hipsCant", "mouthOpen", "mouthPurse", "mouthSmile", "mouthGrimace", "mouthSmirk", "nearEyeInnerLid", "nearEyeOuterLid", "nearEyeLowerLid", "nearEyebrowArch", "nearFootPoint", "nearForearmLift", "nearHandCurl", "nearHandSplay", "nearHandTilt", "nearHandTurn", "nearKneeBend", "nearThighLift", "nearUpperArmLift", "phallusErection", "shouldersTip"]) {
		this.pose[i] = Math.random() * Math.random() * Math.random() * Math.PI;
		if (Math.random() > 0.5) {this.pose[i] *= -1;};
		if (i == 'shouldersTip' || i == 'hipsCant' || i == 'headTip') {this.pose[i] /= 4;};
		if (i == 'nearEyeInnerLid' || i == 'nearEyeOuterLid' || i == 'nearEyeLowerLid' || i == 'farEyeInnerLid' || i == 'farEyeOuterLid' || i == 'farEyeLowerLid' ) {this.pose[i] = Math.max(Math.min(this.pose[i]*4,Math.PI),Math.PI*-1);};
	};
	this.pose.lean = 0;
	this.pose.nearEyeInnerLid = Math.max(this.pose.nearEyeInnerLid,this.pose.nearEyeOuterLid,this.pose.nearEyeLowerLid);
	this.pose.farEyeInnerLid = Math.max(this.pose.farEyeInnerLid,this.pose.farEyeOuterLid,this.pose.farEyeLowerLid);
	this.pose.nearEyeLowerLid = Math.min(this.pose.farEyeInnerLid,this.pose.farEyeOuterLid,this.pose.farEyeLowerLid);
	this.pose.farEyeLowerLid = Math.min(this.pose.farEyeInnerLid,this.pose.farEyeOuterLid,this.pose.farEyeLowerLid);
	this.pose.nearEyeInnerLid = this.pose.farEyeInnerLid;
	this.pose.nearEyeOuterLid = this.pose.farEyeOuterLid;
	this.pose.nearEyeLowerLid = this.pose.farEyeLowerLid;
	this.pose.mouthOpen = Math.random() * Math.PI*2 - Math.PI;
	this.pose.nearEyebrowArch = Math.random() * Math.PI*2 - Math.PI;
	this.pose.farEyebrowArch = Math.random() * Math.PI*2 - Math.PI;
	
	
	this.garment = function(modesty) {
		var garment = {};
		
		var height1 = Math.random();
		var height2 = Math.random();
		garment.absoluteTop = Math.min(height1,height2);
		garment.absoluteBottom = Math.max(height1,height2); // shirt hem, skirt hem, dress hem
		garment.bottomType = Math.random();
		garment.collarWidth = Math.random();
		garment.collarHeight = Math.random();
		garment.collarControl = Math.random();
		garment.hemFlare = Math.random();
		garment.leggingFlare = Math.random();
		garment.leggingKneeTight = Math.random();
		garment.sleeveLength = Math.random();
		garment.sleeveWidth = Math.random();
		garment.sleeveFlare = Math.random();
		garment.sleeveElbowTight = Math.random();
// 		garment.waistHeight = Math.random(); // do these after breast redesign
// 		garment.waistFlare = Math.random();
		garment.red = Math.random();
		garment.green = Math.random();
		garment.blue = Math.random();
	
		if (modesty == 'top') {
			garment.absoluteTop = garment.absoluteTop * 0.32;
			garment.absoluteBottom = garment.absoluteTop * 0.68 + 0.32;
			garment.collarHeight = garment.collarHeight * 0.5;
		} else if (modesty == 'bottom') {
			garment.absoluteTop = garment.absoluteTop * 0.5;
			garment.absoluteBottom = garment.absoluteTop * 0.33 + 0.66;
		} else if (modesty == 'both') {
			garment.absoluteTop = garment.absoluteTop * 0.32;
			garment.absoluteBottom = garment.absoluteTop * 0.33 + 0.66;
			garment.collarHeight = garment.collarHeight * 0.5;
		};
		
		return garment;
	};
// 	this.garments = [this.garment('top'),this.garment('bottom'),this.garment(),this.garment()];
	this.garments = [this.garment('both'),this.garment()];
// 	this.garments = [];
	
	this.bio = function(key) {
		var parameters = {
			areolaeWidth: 1.15,
			armLength: 1.02,
			armWidth: 1.04,
			belly: 1.2,
			biceps: 1.05,
			breastSize: 1.25,
			breastProject: 1.1,
			pectorals: 1.09,
			browSize: 1.1,
			buttSize: 1.08,
			calfWidth: 1.07,
			cheekboneHeight: 1.07,
			cheekboneSize: 1.07,
			cheekboneWidth: 1.07,
			earHeight: 1.02,
			earLobe: 1.1,
			earPoint: 1.1,
			earWidth: 1.02,
			eyeDistance: 1.02,
			eyeTilt: 1.01,
			eyeSize: 1.02,
			footLength: 1.05,
			glansSize: 1.02,
			hairCurl: 1.1,
			hairBangs: 1.2,
			hairBangsLength: 1.2,
			hairBangsPart: 1.2,
			hairBangsSweep: 1.2,
			hairLength: 1.3,
			hairNimbus: 1.2,
			hairTails: 1.4,
			hairTailCinch: 1.1,
			hairTailPlumpness: 1.1,
			hairTailPosition: 2,
			hairlineHeight: 1.08,
			hairlinePeak: 1.1,
			handLength: 1.02,
			handWidth: 1.04,
			headHeight: 1.02,
			headWidth: 1.02,
			hipsHeight: 1.1,
			hipsWidth: 1.1,
			hipsRoundness: 1.1,
			pelvisWidth: 1.04,
			jawWidth: 1.06,
			labioscrotalSize: 1.25,
			legHeight: 1.03,
			lipSize: 1.08,
			nailsLength: 1.4,
			neckHeight: 1.02,
			neckWidth: 1.025,
			nippleLength: 1.4,
			nippleWidth: 1.2,
			noseBridgeHeight: 1.2,
			noseBridgeDepth: 1.2,
			noseLength: 1.15,
			noseRound: 1.08,
			noseTurn: 1.08,
			phallusLength: 1.6,
			phallusGirth: 1.03,
			shouldersWidth: 1.04,
			templeHeight: 1.07,
			templeSize: 1.07,
			templeWidth: 1.07,
			thighWidth: 1.07,
			torsoHeight: 1.03,
			totalHeight: 1.03,
		};
		var result = this.biometrics[key];
		if (result == undefined || parameters[key] == undefined) {
			result = 1;
		} else {
			result = Math.pow(parameters[key],result);
		};
		return result;
	};
	
	this.r2d = function(radians) {
		return 180 * radians / Math.PI;
	};
	
	this.adjust = function(key,adjustment) {
		var oldValue = this.biometrics[key];
		if (oldValue == undefined) {oldValue = 0};
		this.biometrics[key] = Math.max(-10,Math.min(10,oldValue + adjustment));
		return this.biometrics[key];
	};
	
	this.pos = function(key) {
		var result = this.pose[key];
		if (result == undefined) {
			result = 0;
		};
		return result;
	};
	
	this.adoptPose = function(pose) {
		if (typeof pose == 'string') {
			var library = {
				hello: {lean:0,"eyePositionX":-0.471238898038469,"eyePositionY":-0.06458649531074478,"farEyeInnerLid":-1.41371669411541,"farEyeOuterLid":-1.36135681655558,"farEyeLowerLid":-1.5707963267949,"farEyebrowArch":-0.279252680319093,"farFootPoint":1.11701072127637,"farForearmLift":-2.75762021815104,"farHandCurl":0,"farHandSplay":2.14675497995303,"farHandTilt":3.12413936106985,"farHandTurn":-3.14159265358979,"farKneeBend":0,"farThighLift":0.349065850398866,"farUpperArmLift":1.18682389135614,"headNod":-0.010291833989164266,"headSlide":-0.24405169224369802,"headTip":0,"hipsCant":0,"mouthOpen":-0.820304748437335,"mouthPurse":1.5707963267949,"mouthSmile":3.12413936106985,"mouthGrimace":1.76278254451427,"mouthSmirk":-0.11785831040371379,"nearEyeInnerLid":-1.18682389135614,"nearEyeOuterLid":-1.85004900711399,"nearEyeLowerLid":-1.79768912955416,"nearEyebrowArch":-3.14159265358979,"nearFootPoint":0.698131700797732,"nearForearmLift":0.523598775598299,"nearHandCurl":0,"nearHandSplay":1.37881010907552,"nearHandTilt":1.08210413623648,"nearHandTurn":3.12413936106985,"nearKneeBend":-0.0035190247333446775,"nearThighLift":-0.314159265358979,"nearUpperArmLift":-0.994837673636768,"phallusErection":0,"shouldersTip":0},
				searching: {lean:-0.122173047639603, eyePositionX:-1.11701072127637, eyePositionY:-0.383972435438752, farEyeInnerLid:-1.93731546971371, farEyeOuterLid:-3.14159265358979, farEyeLowerLid:-2.26892802759263, farEyebrowArch:-1.43116998663535, farFootPoint:1.11701072127637, farForearmLift:-0.942477796076938, farHandCurl:3.12413936106985, farHandSplay:1.85004900711399, farHandTilt:-1.11701072127637, farHandTurn:3.12413936106985, farKneeBend:0.890117918517108, farThighLift:0.0349065850398867, farUpperArmLift:0.977384381116825, headNod:-0.0349065850398865, headSlide:-1.09955742875643, headTip:0.139626340159546, hipsCant:0, mouthOpen:-3.14159265358979, mouthPurse:-0.0872664625997164, mouthSmile:-0.10471975511966, mouthGrimace:-0.0698131700797731, mouthSmirk:-0.11785831040371379, nearEyeInnerLid:-1.71042266695444, nearEyeOuterLid:-3.14159265358979, nearEyeLowerLid:-2.30383461263251, nearEyebrowArch:-1.51843644923507, nearFootPoint:0.698131700797732, nearForearmLift:-2.68780704807127, nearHandCurl:-0.418879020478639, nearHandSplay:1.64060949687467, nearHandTilt:-3.14159265358979, nearHandTurn:2.37364778271229, nearKneeBend:0.383972435438753, nearThighLift:-0.680678408277788, nearUpperArmLift:-1.25663706143592, phallusErection:-3.14159265358979, shouldersTip:0},
				whoops: {lean:-0.139626340159546, eyePositionX:-0.471238898038469, eyePositionY:0.558505360638186, farEyeInnerLid:-1.41371669411541, farEyeOuterLid:-1.36135681655558, farEyeLowerLid:-1.5707963267949, farEyebrowArch:-0.279252680319093, farFootPoint:3.12413936106985, farForearmLift:1.79768912955416, farHandCurl:-0.767944870877505, farHandSplay:2.14675497995303, farHandTilt:2.04203522483337, farHandTurn:1.72787595947439, farKneeBend:0.698131700797732, farThighLift:0.855211333477222, farUpperArmLift:1.18682389135614, headNod:-0.010291833989164266, headSlide:-0.24405169224369802, headTip:-0.226892802759263, hipsCant:0, mouthOpen:0.767944870877505, mouthPurse:3.12413936106985, mouthSmile:-3.14159265358979, mouthGrimace:-3.14159265358979, mouthSmirk:-0.11785831040371379, nearEyeInnerLid:-1.18682389135614, nearEyeOuterLid:-1.85004900711399, nearEyeLowerLid:-1.79768912955416, nearEyebrowArch:-3.14159265358979, nearFootPoint:-1.44862327915529, nearForearmLift:-0.0872664625997164, nearHandCurl:0, nearHandSplay:1.37881010907552, nearHandTilt:-0.890117918517108, nearHandTurn:2.7401669256311, nearKneeBend:-0.191986217719376, nearThighLift:1.02974425867665, nearUpperArmLift:-0.994837673636768, phallusErection:0, shouldersTip:0},
				asleep: {lean:0, eyePositionX:-0.471238898038469, eyePositionY:-0.06458649531074478, farEyeInnerLid:0.0872664625997166, farEyeOuterLid:-0.0523598775598298, farEyeLowerLid:-0.0523598775598298, farEyebrowArch:-0.279252680319093, farFootPoint:1.11701072127637, farForearmLift:-0.10471975511966, farHandCurl:-0.0523598775598298, farHandSplay:1e-16, farHandTilt:-0.0349065850398865, farHandTurn:1.97222205475359, farKneeBend:0, farThighLift:0.0872664625997166, farUpperArmLift:0.418879020478639, headNod:-0.010291833989164266, headSlide:-0.24405169224369802, headTip:0, hipsCant:0, mouthOpen:-3.14159265358979, mouthPurse:-0.0872664625997164, mouthSmile:-0.10471975511966, mouthGrimace:-0.0698131700797731, mouthSmirk:-0.11785831040371379, nearEyeInnerLid:0.0349065850398867, nearEyeOuterLid:0.05235987755983, nearEyeLowerLid:-0.0174532925199432, nearEyebrowArch:0.05235987755983, nearFootPoint:0.698131700797732, nearForearmLift:0.15707963267949, nearHandCurl:0.244346095279206, nearHandSplay:0.05235987755983, nearHandTilt:1e-16, nearHandTurn:1.43116998663535, nearKneeBend:-0.0035190247333446775, nearThighLift:-0.0872664625997164, nearUpperArmLift:-0.366519142918809, phallusErection:0, shouldersTip:0},
				superhero: {lean:0.244346095279206, eyePositionX:0.977384381116825, eyePositionY:-0.680678408277788, farEyeInnerLid:-1.41371669411541, farEyeOuterLid:-1.36135681655558, farEyeLowerLid:-1.5707963267949, farEyebrowArch:-0.279252680319093, farFootPoint:1.11701072127637, farForearmLift:2.72271363311115, farHandCurl:3.12413936106985, farHandSplay:1.23918376891597, farHandTilt:3.12413936106985, farHandTurn:2.84488668075076, farKneeBend:0, farThighLift:-0.226892802759263, farUpperArmLift:2.49582083035189, headNod:-0.010291833989164266, headSlide:-0.24405169224369802, headTip:-0.488692190558412, hipsCant:0, mouthOpen:-3.14159265358979, mouthPurse:-0.401425727958696, mouthSmile:-3.14159265358979, mouthGrimace:0.767944870877505, mouthSmirk:-0.11785831040371379, nearEyeInnerLid:-1.18682389135614, nearEyeOuterLid:-1.85004900711399, nearEyeLowerLid:-1.79768912955416, nearEyebrowArch:-3.14159265358979, nearFootPoint:0.698131700797732, nearForearmLift:-0.244346095279206, nearHandCurl:0, nearHandSplay:1.37881010907552, nearHandTilt:-0.331612557878923, nearHandTurn:1.86750229963393, nearKneeBend:-0.0035190247333446775, nearThighLift:-0.226892802759263, nearUpperArmLift:-0.663225115757845, phallusErection:0, shouldersTip:0},
			};
			if (pose == 'random') {
				var poses = Object.keys(library);
				pose = library[poses[poses.length * Math.random() << 0]];
			} else {
				pose = library[pose];
			};
		};
		if (pose !== undefined) {
			for (var i in this.pose) {
				if (pose[i] !==undefined) {
					this.pose[i] = pose[i];
				};
			};
		};
	};
	this.adoptPose('random');
	this.adoptPose('searching');
	
	this.jiggle = function(iterations) {
		if (iterations == undefined) {iterations = 10};
		for (var iteration=0;iteration<iterations;iteration++) {
			for (i in this.pose) {
				this.pose[i] += (Math.random()*0.1 - 0.05);
				this.pose[i] = Math.min(Math.PI,this.pose[i]);
				this.pose[i] = Math.max(Math.PI*-1,this.pose[i]);
			};
		};
	};
	
	this.exportPose = function() {
		return JSON.stringify(this.pose);
	};
	
	this.draw = function(width,height,shot) {
		if (height == undefined) {height = 100;};
		if (width == undefined) {width = 100;};
		if (shot == undefined) {shot = 'fullBody';};
		
		var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
		
		var svgNodes = this.svg(height);
		svg.appendChild(svgNodes);
		
		// default viewport
		var minX = width/-2;
		var minY = height * -0.8
		var viewBoxString = minX + ' ' + minY + ' ' + width + ' ' + height;
		svg.setAttribute('viewBox',viewBoxString);
		
		var shotRect;
		var shotsGroup = svg.lastChild.lastChild;
		if (shotsGroup.id !== 'shotsGroup') {console.log('ERROR: #shotsGroup is not the last child node')};
		for (var rect of shotsGroup.children) {
			if (rect.id == 'shot_'+shot+"_"+this.id) {
				shotRect = rect;
			};
		};
		if (shotRect) {
			viewBoxString = shotRect.getAttribute('x') + ' ' + shotRect.getAttribute('y') + ' ' + shotRect.getAttribute('width') + ' ' + shotRect.getAttribute('height');
			svg.setAttribute('viewBox',viewBoxString);
		};
		
		return svg;
		
	};
	
	this.svg = function (height) {
	
		var defaultStrokeWidth = 3;
		
		// This is a group that is positioned as overlay so you can drop in stuff on top of the figure
		var sketchGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		sketchGroup.id = 'sketchGroup_'+this.id;
			
		// Coloring
		
		if (this.coloring.custom == undefined) {
		
			var skinRed = 255, skinGreen = 237, skinBlue = 220;
			
			var pigmentBlack = Math.max(1 - this.coloring.skinBlack,0.4);
			var pigmentBrown = Math.min(pigmentBlack * (0.5 + (1-this.coloring.skinBrown)*2),0.9);
			var pigmentPink = Math.min(pigmentBlack * (0.5 + (1-this.coloring.skinPink)*2),0.9);
		
			skinRed *= pigmentBlack;
			skinGreen *= pigmentBlack * pigmentPink;
			skinBlue *= pigmentBlack * pigmentBrown * pigmentPink;
			var skinTone = "#" + ("0" + Math.round(skinRed).toString(16)).substr(-2) + ("0" + Math.round(skinGreen).toString(16)).substr(-2) + ("0" + Math.round(skinBlue).toString(16)).substr(-2);	
			
			var areolaePink = (1-this.coloring.areolaePink*0.75);
			var areolaeDark = (1-this.coloring.areolaeDark);
			var areolaeRed = skinRed * areolaeDark;
			var areolaeGreen = skinGreen * areolaePink * areolaeDark;
			var areolaeBlue = skinBlue * areolaePink * areolaeDark;
			var areolaeTone = "#" + ("0" + Math.round(areolaeRed).toString(16)).substr(-2) + ("0" + Math.round(areolaeGreen).toString(16)).substr(-2) + ("0" + Math.round(areolaeBlue).toString(16)).substr(-2);
			
			var lipPink = (1-this.coloring.lipPink);
			var lipDark = (1-this.coloring.lipDark*0.5);
			var lipRed = skinRed * lipDark;
			var lipGreen = skinGreen * lipPink * lipDark;
			var lipBlue = skinBlue * lipPink * lipDark;
			var lipColor = "#" + ("0" + Math.round(lipRed).toString(16)).substr(-2) + ("0" + Math.round(lipGreen).toString(16)).substr(-2) + ("0" + Math.round(lipBlue).toString(16)).substr(-2);

			var mouthRed = skinRed/3;
			var mouthBlue = skinBlue/3;
			var mouthGreen = skinGreen/3;
			var mouthColor = "#" + ("0" + Math.round(mouthRed).toString(16)).substr(-2) + ("0" + Math.round(mouthGreen).toString(16)).substr(-2) + ("0" + Math.round(mouthBlue).toString(16)).substr(-2);	

			var eyeRed = 255, eyeGreen = 255, eyeBlue = 255;
			var eyePigmentGreen = 1-this.coloring.eyeGreen;
			var eyePigmentBlue = 1-this.coloring.eyeBlue;
			eyeRed *= eyePigmentGreen * eyePigmentBlue;
			eyeBlue *= eyePigmentGreen;
			eyeGreen *= eyePigmentBlue;
			var eyeColor = "#" + ("0" + Math.round(eyeRed).toString(16)).substr(-2) + ("0" + Math.round(eyeGreen).toString(16)).substr(-2) + ("0" + Math.round(eyeBlue).toString(16)).substr(-2);

			var hairRed = this.coloring.hairRed * 255;
			var hairGreen = this.coloring.hairGreen * 255;
			var hairBlue = this.coloring.hairBlue * 255;
			var hairColor = "#" + ("0" + Math.round(hairRed).toString(16)).substr(-2) + ("0" + Math.round(hairGreen).toString(16)).substr(-2) + ("0" + Math.round(hairBlue).toString(16)).substr(-2);
			hairRed *= 0.7;
			hairGreen *= 0.7;
			hairBlue *= 0.7;
			var hairShadowColor = "#" + ("0" + Math.round(hairRed).toString(16)).substr(-2) + ("0" + Math.round(hairGreen).toString(16)).substr(-2) + ("0" + Math.round(hairBlue).toString(16)).substr(-2);

			var nailRed = (255+skinRed)/2;
			var nailGreen = (255+skinGreen)/2;
			var nailBlue = (255+skinBlue)/2;
			var nailColor = "#" + ("0" + Math.round(nailRed).toString(16)).substr(-2) + ("0" + Math.round(nailGreen).toString(16)).substr(-2) + ("0" + Math.round(nailBlue).toString(16)).substr(-2);

		} else {
			var skinTone = this.coloring.custom.skinTone;
			var areolaeTone = this.coloring.custom.areolaeTone;
			var lipColor = this.coloring.custom.lipTone;
			var mouthColor = this.coloring.custom.mouthColor;
			var eyeColor = this.coloring.custom.eyeColor;
			var hairColor = this.coloring.custom.hairColor;
			var nailColor = this.coloring.custom.nailColor;
		};
		
	
		var svg = document.createElementNS('http://www.w3.org/2000/svg','g');
		svg.id = this.id;
		var defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
		svg.appendChild(defs);
		
		// Parameters
		for (var parameter of ['pose','biometrics','coloring','garments']) {
			var text = document.createElementNS('http://www.w3.org/2000/svg','text');
			defs.appendChild(text);
			text.id = parameter;
			text.innerHTML = JSON.stringify(this[parameter]);
		};
						
		// Orientation
		var upperBodyAngle ;
		if (this.pos('farUpperArmLift') >= 0 && this.pos('nearUpperArmLift') >= 0) {
			upperBodyAngle = true;
		} else if (this.pos('farUpperArmLift') <= 0 && this.pos('nearUpperArmLift') <= 0) {
			upperBodyAngle = false;
		} else if (this.pos('farUpperArmLift') >= 0 && this.pos('nearUpperArmLift') <= 0 && Math.abs(this.pos('farUpperArmLift')) > Math.abs(this.pos('nearUpperArmLift')) ) {
			upperBodyAngle = true;
		} else {
			upperBodyAngle = false;
		};
		var torsoFacing;
		if (upperBodyAngle) {
			torsoFacing = 1;
		} else {
			torsoFacing = -1;
		};
		var lowerBodyAngle ;
		if (this.pos('farThighLift') > 0 && this.pos('nearThighLift') > 0) {
			lowerBodyAngle = true;
		} else if (this.pos('farThighLift') < 0 && this.pos('nearThighLift') < 0) {
			lowerBodyAngle = false;
		} else if (this.pos('farThighLift') > 0 && this.pos('nearThighLift') < 0 && Math.abs(this.pos('farThighLift')) > Math.abs(this.pos('nearThighLift')) ) {
			lowerBodyAngle = true;
		} else {
			lowerBodyAngle = false;
		};
		var pelvisFacing;
		if (lowerBodyAngle) {
			pelvisFacing = 1;
		} else {
			pelvisFacing = -1;
		};
		var nearHandTilt = this.pos('nearHandTilt') * -180/Math.PI;
		var farHandTilt = this.pos('farHandTilt') * -180/Math.PI;	
		var nearHandTurnDX = Math.sin(this.pos('nearHandTurn')/Math.PI);
		var nearHandCurl = 0.5 * Math.abs(this.pos('nearHandCurl') * 180 / Math.PI) * -1;
		var farHandTurnDX = Math.sin(this.pos('farHandTurn')/Math.PI);
		var farHandCurl = -0.5 * Math.abs(this.pos('farHandCurl') * 180 / Math.PI) * -1;
		var facing, headFacing;
		if (upperBodyAngle) {
			facing = 12;
			headFacing = 1;
		} else {
			facing = -12;
			headFacing = -1;
		};
		var noseFacing = 1;
		if (facing < 0) {
			noseFacing = -1;
		};

		// Height Proportions
		var headHeightProportion = this.bio('headHeight')*0.2;
		var neckHeightProportion = this.bio('neckHeight')*0.03;
		var torsoHeightProportion = this.bio('torsoHeight')*0.3;
		var legHeightProportion = this.bio('legHeight')*0.57;
		var heightTotal = headHeightProportion + torsoHeightProportion + legHeightProportion;
		headHeightProportion = headHeightProportion/heightTotal;
		torsoHeightProportion = torsoHeightProportion/heightTotal;
		legHeightProportion = legHeightProportion/heightTotal;

		// Measures
		var totalHeight = height * 0.6 * this.bio('totalHeight');
		var headHeight = totalHeight * headHeightProportion;
		var neckHeight = totalHeight * neckHeightProportion;
		var torsoHeight = totalHeight * torsoHeightProportion;
		var legHeight = totalHeight * legHeightProportion;
		var headWidth = 0.7 * headHeight * this.bio('headWidth');
		var shouldersWidth = 0.22 * totalHeight * this.bio('shouldersWidth');
		var pelvisWidth = 0.15 * totalHeight * this.bio('pelvisWidth');
		var armLength = 0.4 * totalHeight * this.bio('armLength');
		var upperArmLength = 0.5 * armLength;
		var forearmLength = 0.5 * armLength;
		var thighLength = 0.5 * legHeight;
		var calfLength = 0.5 * legHeight;
		var footLength = 0.12 * totalHeight * this.bio('footLength');
		var nearLegHeight = Math.sin(this.pos('hipsCant')) * pelvisWidth/2 + Math.max(0,Math.cos(this.pos('nearThighLift')) * thighLength) + Math.max(0,Math.cos(this.pos('nearKneeBend')) * calfLength);
		var farLegHeight = Math.sin(this.pos('hipsCant')) * pelvisWidth/-2 + Math.max(0,Math.cos(this.pos('farThighLift')) * thighLength) + Math.max(0,Math.cos(this.pos('farKneeBend')) * calfLength);
		var pelvisHeight = Math.max(nearLegHeight,farLegHeight) * -1;
		var shouldersHeight = pelvisHeight - torsoHeight;
		var calfWidth = this.bio('calfWidth') * totalHeight * 0.08;
		var thighWidth = this.bio('thighWidth') * totalHeight * 0.11;
		var buttSize = this.bio('buttSize') * totalHeight * 0.06;
		var breastSize = this.bio('breastSize') * totalHeight * 0.025;
		var nippleLength = this.bio('nippleLength')  * totalHeight * 0.005;
		var nippleWidth = Math.max(nippleLength*0.33,this.bio('nippleWidth') * totalHeight * 0.01);
		var areolaeRadius = Math.max(nippleWidth*0.6,this.bio('areolaeWidth') * breastSize*0.33);
		var haunchWidth = this.bio('pelvisWidth')  * totalHeight * 0.0666;
		var lipSize = this.bio('lipSize') * totalHeight * 0.00666;
		var browSize = this.bio('browSize') * totalHeight * 0.00666;
		var phallusLength = this.bio('phallusLength')  * totalHeight * 0.0111;
		var phallusGirth = this.bio('phallusGirth') * phallusLength * 0.15;
		var glansSize = this.bio('glansSize') * phallusGirth;
		var labioscrotalSize = this.bio('labioscrotalSize') * pelvisWidth/4;
		var handLength = this.bio('handLength') * totalHeight * 0.0666;
		var handWidth = this.bio('handWidth') * handLength * 0.8;
		var hairLength = this.bio('hairLength') * headHeight * 0.5;
		var hairNimbusRadius = this.bio('hairNimbus') * headHeight * 0.5;
		var hairTailPlumpness = this.bio('hairTailPlumpness') * hairLength * 0.05;
		var hairTailCinch = hairLength * (this.biometrics.hairTailCinch + 10)/20;
		var headTilt = this.pos('headTip') * 180/Math.PI;
		var headSlide = this.pos('headSlide') * 20/Math.PI;
		var eyeSize = this.bio('eyeSize')  * totalHeight * 0.0125;
		var eyeDistance = this.bio('eyeDistance') * headWidth * 0.2;
		var noseBridgeHeight = this.biometrics.noseBridgeHeight * totalHeight * -0.001;
		var noseBridgeDepth = this.biometrics.noseBridgeDepth * totalHeight * 0.001 * noseFacing;
		var noseLength = this.bio('noseLength') * totalHeight * 0.005;
		var noseRound = 0.5 * (this.biometrics.noseRound + 10)/21;
		var noseTurn = this.biometrics.noseTurn * totalHeight * -0.0005;
		var cheekboneSize = this.bio('cheekboneSize')  * totalHeight * 0.00666;
		var mouthHeight = 5*(this.pos('mouthOpen') + Math.PI)/Math.PI;
		var templeSize = this.bio('templeSize')  * totalHeight * 0.0111;
		var mouthPurse = headWidth*0.04 + headWidth*0.04*(this.pos('mouthPurse') + Math.PI)/Math.PI;
		var mouthSmile = (1+this.pos('mouthSmile')/Math.PI) * totalHeight * 0.000555;
		var mouthGrimace = (this.pos('mouthGrimace')/Math.PI)*headHeight*0.01666;
		var neckWidth = this.bio('neckWidth') * 0.35;
		var nearEyebrowArch = 0.00666 * totalHeight * this.pos('nearEyebrowArch') / Math.PI;
		var farEyebrowArch = 0.00666 * totalHeight * this.pos('farEyebrowArch') / Math.PI;
		var hairlinePeak = this.bio('hairlinePeak') * totalHeight * 0.0111;
		var earWidth = this.bio('earWidth') * totalHeight * 0.0333;
		var earHeight = this.bio('earHeight') * totalHeight * 0.0444;
		var earPoint = 0.0111*totalHeight - this.bio('earPoint');
		var earLobe = this.bio('earLobe') * totalHeight * 0.00444;
		var armWidth = this.bio('armWidth') * totalHeight * 0.033;	
		var shoulderWidth = armWidth*0.75;
		var tricepWidth = this.bio('bicep') * totalHeight * 0.022 ;
		var bicepWidth = this.bio('bicep') * totalHeight * 0.022 ;
// 		var nodOffset = 10*this.pos('headNod')/Math.PI
		var nodOffset = 0;
		var hipHeightProportion = this.bio('hipsHeight') * 0.05 + 0.2;
				
		// Joints and Points
		var neckBase = {
			x:this.pos('lean') * 20,
			y:pelvisHeight - torsoHeight
		};
		var neckBase = {
			x:Math.sin(this.pos('lean')) * torsoHeight,
			y:pelvisHeight - Math.cos(this.pos('lean')) * torsoHeight
		};
		var spineBase = {
			x:0,
			y:pelvisHeight
		};
		var headCenter = {x:neckBase.x,y:neckBase.y - neckHeight - headHeight/2};
		var nearHipJoint = {
			x:Math.cos(this.pos('hipsCant'))*pelvisWidth/-2,
			y:pelvisHeight + Math.sin(this.pos('hipsCant'))*pelvisWidth/2,
		};
		var nearKnee = {
			x: nearHipJoint.x + Math.sin(this.pos('nearThighLift'))*thighLength,
			y: nearHipJoint.y + Math.cos(this.pos('nearThighLift'))*thighLength,
		};
		var nearAnkle = {
			x: nearKnee.x + Math.sin(this.pos('nearKneeBend'))*calfLength,
			y: nearKnee.y + Math.cos(this.pos('nearKneeBend'))*calfLength,
		};
		var farHipJoint = {
			x:Math.cos(this.pos('hipsCant'))*pelvisWidth/2,
			y:pelvisHeight - Math.sin(this.pos('hipsCant'))*pelvisWidth/2,
		};
		var farKnee = {
			x: farHipJoint.x + Math.sin(this.pos('farThighLift'))*thighLength,
			y: farHipJoint.y + Math.cos(this.pos('farThighLift'))*thighLength,
		};
		var farAnkle = {
			x: farKnee.x + Math.sin(this.pos('farKneeBend'))*calfLength,
			y: farKnee.y + Math.cos(this.pos('farKneeBend'))*calfLength,
		};
// 		var farHaunch = {
// 			x: (3*farHipJoint.x+spineBase.x)/4,
// 			y: (3*farHipJoint.y+spineBase.y)/4,
// 		};
// 		var nearHaunch = {
// 			x: (3*nearHipJoint.x+spineBase.x)/4,
// 			y: (3*nearHipJoint.y+spineBase.y)/4,
// 		};
		var nearFootAngle = Math.PI/3;
		var farFootAngle = Math.PI/3;
		if (!lowerBodyAngle) {
			nearFootAngle *= -1;
			farFootAngle *= -1;
		};
		var nearToes = {
			x: nearAnkle.x + Math.sin(nearFootAngle)*footLength,
			y: nearAnkle.y + Math.cos(nearFootAngle)*footLength,
		};
		var farToes = {
			x: farAnkle.x + Math.sin(farFootAngle)*footLength,
			y: farAnkle.y + Math.cos(farFootAngle)*footLength,
		};
		var nearShoulder = {
			x:neckBase.x + Math.cos(this.pos('shouldersTip'))*shouldersWidth/-2,
			y:neckBase.y + Math.sin(this.pos('shouldersTip'))*shouldersWidth/2,
		};
		var nearElbow = {
			x: nearShoulder.x + Math.sin(this.pos('nearUpperArmLift'))*upperArmLength,
			y: nearShoulder.y + Math.cos(this.pos('nearUpperArmLift'))*upperArmLength,
		};
		var nearWrist = {
			x: nearElbow.x + Math.sin(this.pos('nearForearmLift'))*forearmLength,
			y: nearElbow.y + Math.cos(this.pos('nearForearmLift'))*forearmLength,
		};
		var farShoulder = {
			x:neckBase.x + Math.cos(this.pos('shouldersTip'))*shouldersWidth/2,
			y:neckBase.y - Math.sin(this.pos('shouldersTip'))*shouldersWidth/2,
		};
		var farElbow = {
			x: farShoulder.x + Math.sin(this.pos('farUpperArmLift'))*upperArmLength,
			y: farShoulder.y + Math.cos(this.pos('farUpperArmLift'))*upperArmLength,
		};
		var farWrist = {
			x: farElbow.x + Math.sin(this.pos('farForearmLift'))*forearmLength,
			y: farElbow.y + Math.cos(this.pos('farForearmLift'))*forearmLength,
		};
		var farBreastAnchor = {
			x:(neckBase.x + farShoulder.x)/2,
			y:(neckBase.y+farShoulder.y)/2,
		};
		var farBreastCenter = {
			x:(neckBase.x + farShoulder.x)/2,
			y:farBreastAnchor.y + Math.max(breastSize,torsoHeight/4 * this.bio('pectorals')),
		};
		var nearBreastAnchor = {
			x:(neckBase.x + nearShoulder.x)/2,
			y:(neckBase.y+nearShoulder.y)/2,
		};
		var nearBreastCenter = {
			x:(neckBase.x + nearShoulder.x)/2,
			y:nearBreastAnchor.y + Math.max(breastSize,torsoHeight/4 * this.bio('pectorals')),
		};
// 		var bellyCollision = pelvisHeight - this.bio('belly')*60;
// 		if (farBreastCenter.y + breastSize > bellyCollision) {
// 			farBreastCenter.x -= (bellyCollision - (farBreastCenter.y + breastSize))/4 ;
// 		};
// 		if (nearBreastCenter.y + breastSize > bellyCollision) {
// 			nearBreastCenter.x += (bellyCollision - (nearBreastCenter.y + breastSize))/4 ;
// 		};
		if (upperBodyAngle) {
			farBreastCenter.x += breastSize * 0.7;
			nearBreastCenter.x += breastSize * 0.5;
		} else {
			farBreastCenter.x -= breastSize * 0.5;
			nearBreastCenter.x -= breastSize * 0.7;
		};
		if (upperBodyAngle) {
			areolaeOffset = breastSize * 0.5;
		} else {
			areolaeOffset = breastSize * -0.5;
		};
		var farAreolae = {
			x: farBreastCenter.x + areolaeOffset,
			y: Math.min(farBreastCenter.y - breastSize/2 + this.bio('pectorals')/2.4 * breastSize * 1.5,farBreastCenter.y + breastSize),
		};
		var nearAreolae = {
			x: nearBreastCenter.x + areolaeOffset,
			y: Math.min(nearBreastCenter.y - breastSize/2 + this.bio('pectorals')/2.4 * breastSize * 1.5,nearBreastCenter.y + breastSize),
		};
		if (!upperBodyAngle) {
			nippleLength *= -1;
		};
		var farNippleTop = {
			x: farAreolae.x,
			y: farAreolae.y - nippleWidth/2,
		};
		var nearNippleTop = {
			x: nearAreolae.x,
			y: nearAreolae.y - nippleWidth/2,
		};
		var nearEyeCenter = {
			x: headCenter.x+facing-eyeDistance,
			y: headCenter.y+nodOffset,
		};
		var farEyeCenter = {
			x: headCenter.x+facing+eyeDistance,
			y: headCenter.y+nodOffset,
		};
// 		var noseCenter = {
// 			x: headCenter.x+facing*headWidth/50+noseLength*facing,
// 			y: headCenter.y-noseWidth+nodOffset+noseHeight,
// 		};
// 		var noseBaseCenter = {
// 			x:headCenter.x+facing,
// 			y:headCenter.y+headHeight/4-noseWidth+nodOffset,
// 		};
// 		var noseBridge = {
// 			x: headCenter.x+facing,
// 			y: headCenter.y+nodOffset,
// 		};
		var noseRoot = {
			x: headCenter.x + facing * 1.1,
			y: headCenter.y + nodOffset,
		};
		var noseApex = {
			x: headCenter.x + facing * 1.4 + noseLength * noseFacing,
			y: headCenter.y + nodOffset + headHeight * 0.2 + noseTurn,
		};
		var noseBridge = {
			x: (noseRoot.x + noseApex.x ) * 0.5 + noseBridgeDepth,
			y: (noseRoot.y + noseApex.y ) * 0.5 + noseBridgeHeight,
		};
		var noseBottom = {
			x: headCenter.x + facing * 1.4 + noseLength * 0.66 * noseFacing,
			y: headCenter.y + nodOffset + headHeight * 0.23 + noseTurn,
		};
		var noseBase = {
			x: headCenter.x + facing * 1.2,
			y: headCenter.y + nodOffset + headHeight * 0.23,
		};
		var nearCheekbone = {
			x: nearEyeCenter.x-eyeSize - this.bio('cheekboneWidth')*3,
			y: nearEyeCenter.y + headHeight/12 + this.bio('cheekboneHeight')*5,
		};
		var farCheekbone = {
			x: farEyeCenter.x+eyeSize + this.bio('cheekboneWidth')*3,
			y: farEyeCenter.y + headHeight/12 + this.bio('cheekboneHeight')*5,
		};
		var topOfMouth = {
			x: headCenter.x + facing*1.2,
			y: headCenter.y + headHeight/3+nodOffset,
		};
		var chin = {
			x: topOfMouth.x,
			y: topOfMouth.y + mouthHeight + headHeight/8,
		};
		var nearEarCenter = {
			x: headCenter.x-headWidth*0.4,
			y: headCenter.y,
		};
		var farEarCenter = {
			x: headCenter.x+headWidth*0.4,
			y: headCenter.y,
		};
		var nearJawbone = {
			x: headCenter.x-headWidth*0.3,
			y: headCenter.y+headHeight*0.2,
		};
		var farJawbone = {
			x: headCenter.x+headWidth*0.3,
			y: headCenter.y+headHeight*0.2,
		};
		var nearTemple = {
			x: nearEyeCenter.x-eyeSize - this.bio('templeWidth')*2,
			y: nearEyeCenter.y - this.bio('templeHeight')*5,
		};
		var farTemple = {
			x: farEyeCenter.x + eyeSize + this.bio('templeWidth')*2,
			y: farEyeCenter.y - this.bio('templeHeight')*5,
		};		
		var genitalsFacing = -1;
		if (lowerBodyAngle) {
			genitalsFacing = 1;
		};
		var genitalsTop = {
			x: 0 + genitalsFacing*10,
			y: pelvisHeight,
		};
		var genitalsBottom = {
			x: 0,
			y: pelvisHeight + pelvisWidth*0.4,
		};
		var erectionAngle = Math.min(Math.max(this.pos('phallusErection'),Math.PI * 0.2),Math.PI*0.8);
		var phallusTip = {
			x: genitalsTop.x + genitalsFacing * Math.sin(erectionAngle) * phallusLength,
			y: genitalsTop.y + Math.cos(erectionAngle) * phallusLength,
		};
		var nearNeck = {
			x:neckBase.x*(1-neckWidth)+nearShoulder.x*neckWidth,
			y:neckBase.y*(1-neckWidth)+nearShoulder.y*neckWidth - shoulderWidth * 0.9,
		};
		var farNeck = {
			x:neckBase.x*(1-neckWidth)+farShoulder.x*neckWidth,
			y:neckBase.y*(1-neckWidth)+farShoulder.y*neckWidth - shoulderWidth * 0.9,
		};

		var hairlineHeight = (this.biometrics.hairlineHeight+10)/20 * (headCenter.y - headHeight/2 - (farTemple.y + nearTemple.y)/2);
		var nearScalpTemple = {
			x: nearTemple.x,
			y: headCenter.y-headHeight/2-hairlineHeight,
		};
		var farScalpTemple = {
			x: farTemple.x,
			y: headCenter.y-headHeight/2-hairlineHeight,
		};
		var scalpTop = {
			x: headCenter.x-headWidth*0.1,
			y: headCenter.y-headHeight*0.8,
		};
		var farHip = {
			x: farHipJoint.x+thighWidth*0.3+this.bio('hipsWidth')*10,
			y: farHipJoint.y,
		};
		var nearHip = {
			x: nearHipJoint.x-thighWidth*0.3-this.bio('hipsWidth')*10,
			y: nearHipJoint.y,
		};
		var farHipTop = {
			x: farHipJoint.x,
			y: neckBase.y*hipHeightProportion+spineBase.y*(1-hipHeightProportion),
		};
		var nearHipTop = {
			x: nearHipJoint.x,
			y: neckBase.y*hipHeightProportion+spineBase.y*(1-hipHeightProportion),
		};
		var farHipControl = {
			x: farHipTop.x + (5+this.bio('hipsWidth')*5)*Math.sin(Math.PI*(this.biometrics.hipsRoundness+10)/40),
			y: farHipTop.y + (5+this.bio('hipsWidth')*5)*Math.cos(Math.PI*(this.biometrics.hipsRoundness+10)/40),
		};
		var nearHipControl = {
			x: nearHipTop.x - (5+this.bio('hipsWidth')*5)*Math.sin(Math.PI*(this.biometrics.hipsRoundness+10)/40),
			y: nearHipTop.y + (5+this.bio('hipsWidth')*5)*Math.cos(Math.PI*(this.biometrics.hipsRoundness+10)/40),
		};
		
		// Arms
		var farBicepFlex = 2 - Math.pow(Math.pow(farWrist.x - farShoulder.x,2)+Math.pow(farWrist.y - farShoulder.y,2),.5) / (upperArmLength + forearmLength);
		var farTricepFlex = (1 + Math.abs(this.pos('farUpperArmLift'))) / 2;
		var farBicepPosition = (this.pos('farForearmLift') - this.pos('farUpperArmLift'))/Math.PI;
		if (farBicepPosition > 1) {farBicepPosition = 1 - farBicepPosition;};
		if (farBicepPosition < -1) {farBicepPosition = 2 + farBicepPosition;};
		var nearBicepFlex = 2 - Math.pow(Math.pow(nearWrist.x - nearShoulder.x,2)+Math.pow(nearWrist.y - nearShoulder.y,2),.5) / (upperArmLength + forearmLength);
		var nearTricepFlex = (1 + Math.abs(this.pos('nearUpperArmLift'))) / 2;
		var nearBicepPosition = (this.pos('nearForearmLift') - this.pos('nearUpperArmLift'))/Math.PI;
		if (nearBicepPosition > 1) {nearBicepPosition = 1 - nearBicepPosition;};
		if (nearBicepPosition < -1) {nearBicepPosition = 2 + nearBicepPosition;};
		
		// Defs

		var hairWavePattern =  document.createElementNS('http://www.w3.org/2000/svg','pattern');
		hairWavePattern.id = 'hairWavePattern_'+this.id;
		var curlX = 2;
		var curlY = 10/this.bio('hairCurl');
		defs.appendChild(hairWavePattern);
		hairWavePattern.setAttribute('width',curlX*2);
		hairWavePattern.setAttribute('height',curlY*2);
		hairWavePattern.setAttribute('patternUnits','userSpaceOnUse');
		var bg =  document.createElementNS('http://www.w3.org/2000/svg','rect');
		bg.setAttribute('x',0);
		bg.setAttribute('y',0);
		bg.setAttribute('width',curlX*3);
		bg.setAttribute('height',curlY*2);
		bg.setAttribute('fill',hairColor);
		hairWavePattern.appendChild(bg);
		var curl =  document.createElementNS('http://www.w3.org/2000/svg','path');
		curl.setAttribute('fill',hairShadowColor);
		var d = 'M '+curlX*0.5+',0 ';
		d += 'c '+(0.5*curlX)+',0 '+(0.5*curlX)+','+curlY+' 0,'+curlY+' ';
		d += 'c -'+(0.5*curlX)+',0 -'+(0.5*curlX)+','+curlY+' 0,'+curlY+' ';
		d += 'h'+curlX+' ';
		d += 'c -'+(0.5*curlX)+',0 -'+(0.5*curlX)+',-'+curlY+' 0,-'+curlY+' ';
		d += 'c '+(0.5*curlX)+',0 '+(0.5*curlX)+',-'+curlY+' 0,-'+curlY+' ';
		d += 'z';
		curl.setAttribute('d',d);
		hairWavePattern.appendChild(curl);
		
		var hairCurlFilter =  document.createElementNS('http://www.w3.org/2000/svg','filter');
		hairCurlFilter.id = 'hairCurl_'+this.id;
		defs.appendChild(hairCurlFilter);
		var noiseFilter = document.createElementNS('http://www.w3.org/2000/svg','feTurbulence');
		hairCurlFilter.appendChild(noiseFilter);
		noiseFilter.setAttribute('result','noise');
		noiseFilter.setAttribute('type','fractalNoise');
		noiseFilter.setAttribute('baseFrequency',1/this.bio('hairCurl'));
		var displacementMap = document.createElementNS('http://www.w3.org/2000/svg','feDisplacementMap');
		hairCurlFilter.appendChild(displacementMap);
		displacementMap.setAttribute('in','SourceGraphic');
		displacementMap.setAttribute('in2','noise');
		displacementMap.setAttribute('scale',9);

// 		var colorMatrix = document.createElementNS('http://www.w3.org/2000/svg','feColorMatrix');
// 		filter.appendChild(colorMatrix);
// 		colorMatrix.setAttribute('type','matrix');
// 		colorMatrix.setAttribute('values','0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.2 1.1');
// 		var blackFill = document.createElementNS('http://www.w3.org/2000/svg','feFlood');
// 		blackFill.setAttribute('flood-color','black');
// 		blackFill.setAttribute('result','silhouette');
// 		var composite = document.createElementNS('http://www.w3.org/2000/svg','feComposite');
// 		filter.appendChild(composite);
// 		composite.setAttribute('in','silhouette');
// 		composite.setAttribute('in2','SourceGraphic');
// 		composite.setAttribute('operator','in');
				
		var shadow = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
		svg.appendChild(shadow);
		shadow.setAttribute('x',0);
		shadow.setAttribute('y',0);
		shadow.setAttribute('rx',100);
		shadow.setAttribute('ry',20);
		shadow.setAttribute('fill','black');
		shadow.setAttribute('opacity',0.2);
				
		// Shapes
		
		var hairBack = document.createElementNS('http://www.w3.org/2000/svg','g');
		hairBack.id = 'hairBack_'+this.id;

		if (this.bio('hairTails') <= 1) {
			var hairFill = document.createElementNS('http://www.w3.org/2000/svg','path');
			hairFill.setAttribute('fill','url(#hairWavePattern_'+this.id+')');
			hairFill.setAttribute('stroke','none');
			x = nearEarCenter.x + headSlide;
			y = nearEarCenter.y;
			d = 'M '+x+','+y+' ';
			c1x = x - hairLength*0.1;
			c1y = y + Math.min(hairLength,totalHeight)*0.8;
			x = (nearEarCenter.x + farEarCenter.x)/2 + headSlide;
			y = Math.min(0,hairLength + (nearEarCenter.y + farEarCenter.y)/2);
			c2x = x - hairLength*0.2;
			c2y = y;
			d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
			c1x = x + hairLength*0.2;
			c1y = y;
			x = farEarCenter.x + headSlide;
			y = farEarCenter.y;
			c2x = x + hairLength*0.1;
			c2y = y + Math.min(hairLength,totalHeight)*0.8;
			d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
			hairFill.setAttribute('d',d);
			hairFill.setAttribute('filter','url(#hairCurl_'+this.id+')');
			var hairStroke = document.createElementNS('http://www.w3.org/2000/svg','path');
			hairStroke.setAttribute('d',d);
			hairStroke.setAttribute('fill','none');
			hairBack.appendChild(hairFill);
			hairBack.appendChild(hairStroke);
		};
		
		var hairNimbus = document.createElementNS('http://www.w3.org/2000/svg','g');
		hairBack.id = 'hairNimbus_'+this.id;
		hairBack.appendChild(hairNimbus);
		hairNimbus.setAttribute('transform','translate('+headSlide+',0) rotate('+headTilt+','+headCenter.x+','+headCenter.y+')');
		var hairNimbusBack = document.createElementNS('http://www.w3.org/2000/svg','g');
		hairNimbus.appendChild(hairNimbusBack);
		var hairNimbusFill = document.createElementNS('http://www.w3.org/2000/svg','circle');
		hairNimbusFill.setAttribute('fill','url(#hairWavePattern_'+this.id+')');
		hairNimbusFill.setAttribute('filter','url(#hairCurl_'+this.id+')');
		hairNimbusFill.setAttribute('stroke','none');
		var hairNimbusStroke = document.createElementNS('http://www.w3.org/2000/svg','circle');
		hairNimbusStroke.setAttribute('d',d);
		hairNimbusStroke.setAttribute('fill','none');
		hairNimbusFill.setAttribute('cx',headCenter.x - facing * 0.75);
		hairNimbusFill.setAttribute('cy',headCenter.y - headHeight * 0.25);
		hairNimbusFill.setAttribute('r',hairNimbusRadius);
		hairNimbusStroke.setAttribute('cx',headCenter.x - facing * 0.75);
		hairNimbusStroke.setAttribute('cy',headCenter.y - headHeight * 0.25);
		hairNimbusStroke.setAttribute('r',hairNimbusRadius);
		hairNimbus.appendChild(hairNimbusStroke);
		hairNimbus.appendChild(hairNimbusFill);
		for (var i=0;i<360;i+=10) {
			var lockEnd = {
				x: headCenter.x - facing * 0.75 + hairNimbusRadius * Math.sin(i * Math.PI / 180),
				y: headCenter.y - headHeight * 0.25 + hairNimbusRadius * Math.cos(i * Math.PI / 180),
			};
			var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
			hairNimbus.appendChild(circle);
			circle.setAttribute('cx',lockEnd.x);
			circle.setAttribute('cy',lockEnd.y);
			circle.setAttribute('r',1.2*Math.pow(this.bio('hairNimbus'),2));
			circle.setAttribute('fill','url(#hairWavePattern_'+this.id+')');
			circle.setAttribute('filter','url(#hairCurl_'+this.id+')');
			var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
			hairNimbusBack.appendChild(circle);
			circle.setAttribute('cx',lockEnd.x);
			circle.setAttribute('cy',lockEnd.y);
			circle.setAttribute('r',1.2*Math.pow(this.bio('hairNimbus'),2));
		};
		
		var butt = document.createElementNS('http://www.w3.org/2000/svg','g');
		butt.id = 'butt_'+this.id;
		butt.setAttribute('fill',skinTone);
		butt.setAttribute('stroke','inherit');
		var skirtStrokeGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		butt.appendChild(skirtStrokeGroup);
// 		var r1 = Math.min(buttSize,pelvisWidth/2);
// 		var r2 = buttSize;
// 		var nearButtockCenter = {
// 			x: nearHipJoint.x - pelvisFacing*10,
// 			y: nearHipJoint.y,
// 		};
// 		var nearButtock = document.createElementNS('http://www.w3.org/2000/svg','path');
// 		butt.appendChild(nearButtock);
// 		nearButtock.setAttribute('stroke','red');
// 		nearButtock.setAttribute('fill','none');
// 		var d = "M "+(nearButtockCenter.x+r1)+","+nearButtockCenter.y+" ";
// 		d += "C "+(nearButtockCenter.x+r1)+","+(nearButtockCenter.y+r1*0.55)+" "+(nearButtockCenter.x+r1*0.55)+","+(nearButtockCenter.y+r1)+" "+nearButtockCenter.x+","+(nearButtockCenter.y+r1)+" ";
// 		d += "C "+(nearButtockCenter.x-r2*0.55)+","+(nearButtockCenter.y+r1)+" "+(nearButtockCenter.x-r2)+","+(nearButtockCenter.y+r1*0.55)+" "+(nearButtockCenter.x-r2)+","+nearButtockCenter.y+" ";
// 		d += "C "+(nearButtockCenter.x-r2)+","+(nearButtockCenter.y-r1*0.55)+" "+(nearButtockCenter.x-r2*0.55)+","+(nearButtockCenter.y-r1)+" "+nearButtockCenter.x+","+(nearButtockCenter.y-r1)+" ";
// 		d += "C "+(nearButtockCenter.x+r1*0.55)+","+(nearButtockCenter.y-r1)+" "+(nearButtockCenter.x+r1)+","+(nearButtockCenter.y-r1*0.55)+" "+(nearButtockCenter.x+r1)+","+(nearButtockCenter.y)+" ";
// 		nearButtock.setAttribute('d',d);
		var farHaunch = document.createElementNS('http://www.w3.org/2000/svg','path');
		butt.appendChild(farHaunch);
		var farHaunchD = 'M '+farHipTop.x+' '+farHipTop.y+' ';
		farHaunchD += 'C '+farHipControl.x+' '+farHipControl.y+' '+farHip.x+','+(3*farHip.y+farHipTop.y)/4+' '+farHip.x+','+farHip.y+' ';
		if (this.pos('farThighLift') < Math.PI/2) {
			farHaunchD += 'Q '+farHip.x+','+(2*farHipJoint.y-farHipTop.y)+' '+farKnee.x+','+farKnee.y+' ';
		};
		farHaunchD += 'L '+spineBase.x+','+spineBase.y+' ';
		farHaunch.setAttribute('d',farHaunchD);
		var nearHaunch = document.createElementNS('http://www.w3.org/2000/svg','path');
		butt.appendChild(nearHaunch);
		var nearHaunchD = 'M '+farHipTop.x+' '+farHipTop.y+' ';
		if (this.pos('nearThighLift') > Math.PI/-2) {
			nearHaunchD += 'L '+nearKnee.x+','+nearKnee.y+' ';
			nearHaunchD += 'Q '+(nearHip.x)+' '+(2*nearHipJoint.y-nearHipTop.y)+' '+nearHip.x+','+nearHip.y+' ';
		} else {
			nearHaunchD += 'L '+nearHip.x+','+nearHip.y+' ';
		};
		nearHaunchD += 'C '+nearHip.x+' '+(3*nearHip.y+nearHipTop.y)/4+' '+nearHipControl.x+' '+nearHipControl.y+' '+nearHipTop.x+' '+nearHipTop.y+' ';
		nearHaunch.setAttribute('d',nearHaunchD);
		
		var bulgeCenter = {
			x: genitalsTop.x,
			y: (2*genitalsTop.y+3*genitalsBottom.y)/5,
			r: Math.min(50,Math.max(8,(5*this.bio('labioscrotalSize')+0.3*this.bio('phallusLength')+4*this.bio('phallusGirth')))),
		};
		if (pelvisFacing > 0) {
			bulgeCenter.rotation = 20;
			bulgeCenter.x -= totalHeight * 0.011;
		} else {
			bulgeCenter.rotation = -20;
			bulgeCenter.x += totalHeight * 0.011;
		};
		var bulge = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
		bulge.setAttribute('fill','none');
		bulge.setAttribute('stroke','red');
		bulge.setAttribute('cx',bulgeCenter.x);
		bulge.setAttribute('cy',bulgeCenter.y);
		bulge.setAttribute('rx',bulgeCenter.r);
		bulge.setAttribute('ry',bulgeCenter.r*1.33);
		bulge.setAttribute('transform','rotate('+bulgeCenter.rotation+' '+bulgeCenter.x+' '+bulgeCenter.y+')');
// 		var bulgeStroke = bulge.cloneNode(true);
// 		bulgeStroke.setAttribute('stroke','black');
// 		bulgeStroke.setAttribute('stroke-width',3);
// 		butt.prepend(bulgeStroke);
		
		var farCalf = document.createElementNS('http://www.w3.org/2000/svg','g');
		farCalf.id = 'farCalf_'+this.id;
		farCalf.setAttribute('fill',skinTone);
		farCalf.setAttribute('stroke','inherit');
		var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farCalf.appendChild(rect);
		rect.setAttribute('x',(farKnee.x+farKnee.x+farAnkle.x)/3-calfWidth * 0.5);
		rect.setAttribute('y',(farKnee.y+farKnee.y+farAnkle.y)/3-calfLength/3);
		rect.setAttribute('height',0.66 * calfLength);
		rect.setAttribute('width',calfWidth);
		rect.setAttribute('rx',calfWidth*0.5);
		rect.setAttribute('ry',calfLength/2);
		tilt = this.pos('farKneeBend') * -180/Math.PI;
		rect.setAttribute('transform','rotate('+tilt+' '+(farKnee.x+farKnee.x+farAnkle.x)/3+' '+(farKnee.y+farKnee.y+farAnkle.y)/3+')');
		var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farCalf.appendChild(rect);
		rect.setAttribute('x',(farKnee.x+farAnkle.x)/2-calfWidth * 0.25);
		rect.setAttribute('y',(farKnee.y+farAnkle.y)/2-calfLength/2);
		rect.setAttribute('height',calfLength);
		rect.setAttribute('width',calfWidth * 0.5);
		rect.setAttribute('rx',calfWidth * 5);
		rect.setAttribute('ry',calfLength);
		tilt = this.pos('farKneeBend') * -180/Math.PI;
		rect.setAttribute('transform','rotate('+tilt+' '+(farKnee.x+farAnkle.x)/2+' '+(farKnee.y+farAnkle.y)/2+')');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farCalf.appendChild(circle);
		circle.setAttribute('stroke','none');
		circle.setAttribute('cx',farAnkle.x);
		circle.setAttribute('cy',farAnkle.y);
		circle.setAttribute('r',totalHeight * 0.022);
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farCalf.appendChild(circle);
		circle.setAttribute('cx',farKnee.x);
		circle.setAttribute('cy',farKnee.y);
		circle.setAttribute('r',thighWidth * 0.22);
		
		var nearCalf = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearCalf.id = 'nearCalf_'+this.id;
		nearCalf.setAttribute('fill',skinTone);
		nearCalf.setAttribute('stroke','inherit');
		var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearCalf.appendChild(rect);
		rect.setAttribute('x',(nearKnee.x+nearKnee.x+nearAnkle.x)/3-calfWidth*0.5);
		rect.setAttribute('y',(nearKnee.y+nearKnee.y+nearAnkle.y)/3-calfLength/3);
		rect.setAttribute('height',0.66 * calfLength);
		rect.setAttribute('width',calfWidth);
		rect.setAttribute('rx',calfWidth * 0.5);
		rect.setAttribute('ry',calfLength/2);
		tilt = this.pos('nearKneeBend') * -180/Math.PI;
		rect.setAttribute('transform','rotate('+tilt+' '+(nearKnee.x+nearKnee.x+nearAnkle.x)/3+' '+(nearKnee.y+nearKnee.y+nearAnkle.y)/3+')');
		var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearCalf.appendChild(rect);
		rect.setAttribute('x',(nearKnee.x+nearAnkle.x)/2-calfWidth * 0.25);
		rect.setAttribute('y',(nearKnee.y+nearAnkle.y)/2-calfLength/2);
		rect.setAttribute('height',calfLength);
		rect.setAttribute('width',calfWidth * 0.5);
		rect.setAttribute('rx',calfWidth * 5);
		rect.setAttribute('ry',calfLength);
		tilt = this.pos('nearKneeBend') * -180/Math.PI;
		rect.setAttribute('transform','rotate('+tilt+' '+(nearKnee.x+nearAnkle.x)/2+' '+(nearKnee.y+nearAnkle.y)/2+')');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearCalf.appendChild(circle);
		circle.setAttribute('stroke','none');
		circle.setAttribute('cx',nearAnkle.x);
		circle.setAttribute('cy',nearAnkle.y);
		circle.setAttribute('r',totalHeight * 0.022);
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearCalf.appendChild(circle);
		circle.setAttribute('cx',nearKnee.x);
		circle.setAttribute('cy',nearKnee.y);
		circle.setAttribute('r',thighWidth * 0.22);
		
		var farThigh = document.createElementNS('http://www.w3.org/2000/svg','g');
		farThigh.id = 'farThigh_'+this.id;
		farThigh.setAttribute('fill',skinTone);
		farThigh.setAttribute('stroke','inherit');
		tilt = this.pos('farThighLift') * -180/Math.PI;
		var ellipse = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
		farThigh.appendChild(ellipse);
		ellipse.setAttribute('stroke','none');
		ellipse.setAttribute('cx',farHipJoint.x);
		ellipse.setAttribute('cy',farHipJoint.y+this.bio('hipsWidth')*5);
		ellipse.setAttribute('rx',thighWidth*0.25+this.bio('hipsWidth')*10);
		ellipse.setAttribute('ry',0.5*thighWidth*0.25+this.bio('hipsWidth')*10);
		var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farThigh.appendChild(rect);
		rect.setAttribute('x',farHipJoint.x-thighWidth * 0.5 * 0.75);
		rect.setAttribute('y',farHipJoint.y);
		rect.setAttribute('height',thighLength);
		rect.setAttribute('width',thighWidth * 0.75);
		rect.setAttribute('rx',thighWidth * 0.25);
		rect.setAttribute('ry',thighLength/2);
		rect.setAttribute('transform','rotate('+tilt+' '+farHipJoint.x+' '+farHipJoint.y+')');
		var farHamstring = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farThigh.appendChild(farHamstring);
		farHamstring.id = 'farHamstring';
		farHamstring.setAttribute('x',farHipJoint.x-thighWidth * 0.5 - thighWidth * 0.1 * pelvisFacing);
		farHamstring.setAttribute('y',farHipJoint.y - thighWidth*0.1);
		farHamstring.setAttribute('height',thighLength*0.66+thighWidth*0.1);
		farHamstring.setAttribute('width',thighWidth);
		farHamstring.setAttribute('rx',thighWidth);
		farHamstring.setAttribute('ry',thighLength/2);
		farHamstring.setAttribute('transform','rotate('+tilt+' '+farHipJoint.x+' '+farHipJoint.y+')');
		var knee = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farThigh.appendChild(knee);
		knee.setAttribute('stroke','none');
		knee.setAttribute('cx',farKnee.x);
		knee.setAttribute('cy',farKnee.y);
		knee.setAttribute('r',thighWidth * 0.22);
		
		var nearThigh = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearThigh.id = 'nearThigh_'+this.id;
		nearThigh.setAttribute('fill',skinTone);
		nearThigh.setAttribute('stroke','inherit');
		tilt = this.pos('nearThighLift') * -180/Math.PI;
		var ellipse = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
		nearThigh.appendChild(ellipse);
		ellipse.setAttribute('stroke','none');
		ellipse.setAttribute('cx',nearHipJoint.x);
		ellipse.setAttribute('cy',nearHipJoint.y+this.bio('hipsWidth')*5);
		ellipse.setAttribute('rx',thighWidth*0.25+this.bio('hipsWidth')*10);
		ellipse.setAttribute('ry',0.5*thighWidth*0.25+this.bio('hipsWidth')*10);
		var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearThigh.appendChild(rect);
		rect.setAttribute('x',nearHipJoint.x-thighWidth * 0.5 * 0.75);
		rect.setAttribute('y',nearHipJoint.y);
		rect.setAttribute('height',thighLength);
		rect.setAttribute('width',thighWidth * 0.75);
		rect.setAttribute('rx',thighWidth * 0.25);
		rect.setAttribute('ry',thighLength/2);
		rect.setAttribute('transform','rotate('+tilt+' '+nearHipJoint.x+' '+nearHipJoint.y+')');
		var nearHamstring = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearThigh.appendChild(nearHamstring);
		nearHamstring.id = 'nearHamstring';
		nearHamstring.setAttribute('x',nearHipJoint.x-thighWidth * 0.5 - thighWidth * 0.1 * pelvisFacing);
		nearHamstring.setAttribute('y',nearHipJoint.y - thighWidth * 0.1);
		nearHamstring.setAttribute('height',thighLength*0.66+thighWidth*0.1);
		nearHamstring.setAttribute('width',thighWidth);
		nearHamstring.setAttribute('rx',thighWidth);
		nearHamstring.setAttribute('ry',thighLength/2);
		nearHamstring.setAttribute('transform','rotate('+tilt+' '+nearHipJoint.x+' '+nearHipJoint.y+')');
		var knee = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearThigh.appendChild(knee);
		knee.setAttribute('stroke','none');
		knee.setAttribute('cx',nearKnee.x);
		knee.setAttribute('cy',nearKnee.y);
		knee.setAttribute('r',thighWidth * 0.22);
		
		var farUpperArm = document.createElementNS('http://www.w3.org/2000/svg','g');
		farUpperArm.id = 'farUpperArm_'+this.id;
		farUpperArm.setAttribute('fill',skinTone);
		farUpperArm.setAttribute('stroke','inherit');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farUpperArm.appendChild(circle);
		circle.setAttribute('stroke','none');
		circle.setAttribute('cx',farShoulder.x);
		circle.setAttribute('cy',farShoulder.y);
		circle.setAttribute('r',shoulderWidth);
		var arm = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farUpperArm.appendChild(arm);
		arm.setAttribute('x',(farShoulder.x+farElbow.x)/2-armWidth);
		arm.setAttribute('y',(farShoulder.y+farElbow.y)/2-upperArmLength/2);
		arm.setAttribute('height',upperArmLength * 1.05);
		arm.setAttribute('width',armWidth*2);
		arm.setAttribute('rx',armWidth);
		arm.setAttribute('ry',upperArmLength);
		tilt = this.pos('farUpperArmLift') * -180/Math.PI;
		arm.setAttribute('transform','rotate('+tilt+' '+(farShoulder.x+farElbow.x)/2+' '+(farShoulder.y+farElbow.y)/2+')');
		var tricep = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farUpperArm.appendChild(tricep);
		tricep.setAttribute('x',farShoulder.x + 0.25*armWidth/farTricepFlex);
		tricep.setAttribute('y',farShoulder.y - armWidth*0.5);
		tricep.setAttribute('height',0.5 * upperArmLength / farTricepFlex);
		tricep.setAttribute('width',tricepWidth * farTricepFlex);
		tricep.setAttribute('rx',tricepWidth*1.33);
		tricep.setAttribute('ry',0.3 * upperArmLength);
		tilt = this.pos('farUpperArmLift') * -180/Math.PI;
		tricep.setAttribute('transform','rotate('+tilt+' '+farShoulder.x+' '+farShoulder.y+')');
		var bicep = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farUpperArm.appendChild(bicep);
		bicep.setAttribute('x',farShoulder.x - (0.5*bicepWidth * farBicepFlex) + farBicepPosition*armWidth*0.5);
		bicep.setAttribute('y',farShoulder.y + upperArmLength*0.5);
		bicep.setAttribute('height',0.5 * upperArmLength );
		bicep.setAttribute('width',bicepWidth * farBicepFlex);
		bicep.setAttribute('rx',bicepWidth*1.33);
		bicep.setAttribute('ry',upperArmLength);
		tilt = this.pos('farUpperArmLift') * -180/Math.PI;
		bicep.setAttribute('transform','rotate('+tilt+' '+farShoulder.x+' '+farShoulder.y+')');

		var nearUpperArm = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearUpperArm.id = 'nearUpperArm_'+this.id;
		nearUpperArm.setAttribute('fill',skinTone);
		nearUpperArm.setAttribute('stroke','inherit');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearUpperArm.appendChild(circle);
		circle.setAttribute('stroke','none');
		circle.setAttribute('cx',nearShoulder.x);
		circle.setAttribute('cy',nearShoulder.y);
		circle.setAttribute('r',shoulderWidth);
		var arm = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearUpperArm.appendChild(arm);
		arm.setAttribute('x',(nearShoulder.x+nearElbow.x)/2-armWidth);
		arm.setAttribute('y',(nearShoulder.y+nearElbow.y)/2-upperArmLength/2);
		arm.setAttribute('height',upperArmLength * 1.05);
		arm.setAttribute('width',armWidth*2);
		arm.setAttribute('rx',armWidth);
		arm.setAttribute('ry',upperArmLength);
		tilt = this.pos('nearUpperArmLift') * -180/Math.PI;
		arm.setAttribute('transform','rotate('+tilt+' '+(nearShoulder.x+nearElbow.x)/2+' '+(nearShoulder.y+nearElbow.y)/2+')');
		var tricep = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearUpperArm.appendChild(tricep);
		tricep.setAttribute('x',nearShoulder.x - 0.25*armWidth/nearTricepFlex - tricepWidth*nearTricepFlex);
		tricep.setAttribute('y',nearShoulder.y - armWidth*0.5);
		tricep.setAttribute('height',0.5 * upperArmLength / nearTricepFlex);
		tricep.setAttribute('width',tricepWidth * nearTricepFlex);
		tricep.setAttribute('rx',tricepWidth*1.33);
		tricep.setAttribute('ry',0.3 * upperArmLength);
		tilt = this.pos('nearUpperArmLift') * -180/Math.PI;
		tricep.setAttribute('transform','rotate('+tilt+' '+nearShoulder.x+' '+nearShoulder.y+')');
		var bicep = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearUpperArm.appendChild(bicep);
		bicep.setAttribute('x',nearShoulder.x - (0.5*bicepWidth * nearBicepFlex) + nearBicepPosition*armWidth*0.5);
		bicep.setAttribute('y',nearShoulder.y + upperArmLength*0.5);
		bicep.setAttribute('height',0.5 * upperArmLength );
		bicep.setAttribute('width',bicepWidth * nearBicepFlex);
		bicep.setAttribute('rx',bicepWidth*1.33);
		bicep.setAttribute('ry',upperArmLength);
		tilt = this.pos('nearUpperArmLift') * -180/Math.PI;
		bicep.setAttribute('transform','rotate('+tilt+' '+nearShoulder.x+' '+nearShoulder.y+')');		

		var farLowerArm = document.createElementNS('http://www.w3.org/2000/svg','g');
		farLowerArm.id = 'farLowerArm_'+this.id;
		farLowerArm.setAttribute('fill',skinTone);
		farLowerArm.setAttribute('stroke','inherit');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farLowerArm.appendChild(circle);
		circle.setAttribute('stroke','none');
		circle.setAttribute('cx',farElbow.x);
		circle.setAttribute('cy',farElbow.y);
		circle.setAttribute('r',armWidth * 0.5);
		var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farLowerArm.appendChild(rect);
		rect.setAttribute('x',(farElbow.x+farWrist.x)/2-armWidth/2);
		rect.setAttribute('y',(farElbow.y+farWrist.y)/2-forearmLength/1.8);
		rect.setAttribute('height',forearmLength * 1.1);
		rect.setAttribute('width',armWidth*1.3);
		rect.setAttribute('rx',armWidth);
		rect.setAttribute('ry',forearmLength);
		tilt = this.pos('farForearmLift') * -180/Math.PI;
		rect.setAttribute('transform','rotate('+tilt+' '+(farElbow.x+farWrist.x)/2+' '+(farElbow.y+farWrist.y)/2+')');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farLowerArm.appendChild(circle);
// 		circle.setAttribute('stroke','none');
		circle.setAttribute('cx',farWrist.x);
		circle.setAttribute('cy',farWrist.y);
		circle.setAttribute('r',handWidth*0.25);

		var nearLowerArm = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearLowerArm.id = 'nearLowerArm_'+this.id;
		nearLowerArm.setAttribute('fill',skinTone);
		nearLowerArm.setAttribute('stroke','inherit');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearLowerArm.appendChild(circle);
		circle.setAttribute('stroke','none');
		circle.setAttribute('cx',nearElbow.x);
		circle.setAttribute('cy',nearElbow.y);
		circle.setAttribute('r',armWidth * 0.5);
		var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearLowerArm.appendChild(rect);
		rect.setAttribute('x',(nearElbow.x+nearWrist.x)/2-armWidth/2);
		rect.setAttribute('y',(nearElbow.y+nearWrist.y)/2-forearmLength/1.8);
		rect.setAttribute('height',forearmLength * 1.1);
		rect.setAttribute('width',armWidth*1.3);
		rect.setAttribute('rx',armWidth);
		rect.setAttribute('ry',forearmLength);
		tilt = this.pos('nearForearmLift') * -180/Math.PI;
		rect.setAttribute('transform','rotate('+tilt+' '+(nearElbow.x+nearWrist.x)/2+' '+(nearElbow.y+nearWrist.y)/2+')');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearLowerArm.appendChild(circle);
// 		circle.setAttribute('stroke','none');
		circle.setAttribute('cx',nearWrist.x);
		circle.setAttribute('cy',nearWrist.y);
		circle.setAttribute('r',handWidth*0.25);
		
		var nearHand = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearHand.id = 'nearHand_'+this.id;
		nearHand.setAttribute('fill',skinTone);
		nearHand.setAttribute('stroke','inherit');
		var nearPalm = document.createElementNS('http://www.w3.org/2000/svg','path');
		nearHand.appendChild(nearPalm);
		var palmTurnDX = nearHandTurnDX;
		x = nearWrist.x - handWidth * 0.35*palmTurnDX;
		y = nearWrist.y;
		d = 'M '+x+','+y+' ';
		c1x = x + handWidth * 0.1*palmTurnDX;
		c1y = y - handLength * 0.1;
		x = x + handWidth * 0.7*palmTurnDX;
		y = y;
		c2x = x - handWidth * 0.1*palmTurnDX;
		c2y = y - handLength * 0.1;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + handWidth * 0.1*palmTurnDX;
		c1y = y + handLength * 0.1;
		x = x;
		y = y + handLength;
		c2x = x + handWidth * 0.1*palmTurnDX;
		c2y = y - handLength * 0.1;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x - handWidth * 0.1*palmTurnDX;
		c1y = y + handLength * 0.1;
		x = x - handWidth*palmTurnDX;
		y = y - handLength * 0.1;
		c2x = x + handWidth * 0.1*palmTurnDX;
		c2y = y + handLength * 0.1;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x - handWidth * 0.1*palmTurnDX;
		c1y = y - handLength * 0.1;
		x = x + handWidth * 0.3*palmTurnDX;
		y = y - handLength * 0.9;
		c2x = x - handWidth * 0.1*palmTurnDX;
		c2y = y + handLength * 0.1;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		d += ' z';
		nearPalm.setAttribute('d',d);
		var nearPalmSide = document.createElementNS('http://www.w3.org/2000/svg','path');
		nearHand.appendChild(nearPalmSide);
		x = nearWrist.x - handWidth * 0.25;
		y = nearWrist.y;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y + handLength * 0.5;
		x = x + handWidth *0.2;
		y = y + handLength;
		c2x = x - handWidth * 0.1;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + handWidth * 0.1;
		c1y = y;
		x = x + handWidth *0.3;
		y = y - handLength;
		c2x = x;
		c2y = y + handLength * 0.5;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';		
		nearPalmSide.setAttribute('d',d);
		nearHand.setAttribute('transform','rotate('+nearHandTilt+' '+nearWrist.x+' '+nearWrist.y+')');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearHand.appendChild(circle);
		circle.setAttribute('stroke','none');
		circle.setAttribute('cx',nearWrist.x);
		circle.setAttribute('cy',nearWrist.y);
		circle.setAttribute('r',handWidth*0.25);
		var nearThumb = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearThumb.id = 'nearThumb'+this.id;
		nearThumb.setAttribute('fill',skinTone);
		nearThumb.setAttribute('stroke','inherit');
		nearThumb.setAttribute('transform','rotate('+nearHandTilt+' '+nearWrist.x+' '+nearWrist.y+')');
		var nearThumbProximal = {
			x: nearWrist.x+handWidth*0.3*nearHandTurnDX,
			y: nearWrist.y+handLength*0,
			length: handLength*0.7,
		};
		var thumbProximal = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearThumb.appendChild(thumbProximal);
		thumbProximal.setAttribute('x',nearThumbProximal.x-handWidth*0.15);
		thumbProximal.setAttribute('y',nearThumbProximal.y);
		thumbProximal.setAttribute('height',nearThumbProximal.length);
		thumbProximal.setAttribute('width',handWidth*0.3);
		thumbProximal.setAttribute('rx',handWidth*0.1);
		thumbProximal.setAttribute('ry',handLength*0.5);
		var tilt = -15 - 60*Math.max(0,this.pos('nearHandSplay'))/Math.PI;
		thumbProximal.setAttribute('transform','rotate('+(tilt*nearHandTurnDX)+' '+nearThumbProximal.x+' '+nearThumbProximal.y+')');
		var thumbJoint = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearThumb.appendChild(thumbJoint);
		var thumbJointOffset = this.pos('nearHandTurn') * -1;
		thumbJoint.id = 'thumbJoint';
		thumbJoint.setAttribute('x',nearThumbProximal.x-handWidth*0.15+thumbJointOffset);
		thumbJoint.setAttribute('y',nearThumbProximal.y - handLength * 0.1);
		thumbJoint.setAttribute('height',nearThumbProximal.length*0.7);
		thumbJoint.setAttribute('width',handWidth*0.3);
		thumbJoint.setAttribute('rx',handWidth*0.1);
		thumbJoint.setAttribute('ry',handLength*0.5);
		thumbJoint.setAttribute('stroke','none');
		var tilt = -15 - 60*Math.max(0,this.pos('nearHandSplay'))/Math.PI;
		thumbJoint.setAttribute('transform','rotate('+(tilt*nearHandTurnDX)+' '+nearThumbProximal.x+' '+nearThumbProximal.y+')');
		var thumbDistal = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearThumb.appendChild(thumbDistal);
		phalange = {
			x: nearThumbProximal.x - Math.sin((tilt*nearHandTurnDX) * Math.PI / 180) * nearThumbProximal.length,
			y: nearThumbProximal.y + Math.cos((tilt*nearHandTurnDX) * Math.PI / 180) * nearThumbProximal.length,
			length: handLength*0.4,
		};
		thumbDistal.setAttribute('x',phalange.x-handWidth*0.1);
		thumbDistal.setAttribute('y',phalange.y - handLength * 0.05);
		thumbDistal.setAttribute('height',phalange.length);
		thumbDistal.setAttribute('width',handWidth*0.2);
		thumbDistal.setAttribute('rx',handWidth*0.05);
		thumbDistal.setAttribute('ry',handLength*0.5);
		var tilt = 20 - 90*Math.max(0,this.pos('nearHandSplay'))/Math.PI;
		thumbDistal.setAttribute('transform','rotate('+(tilt*nearHandTurnDX)+' '+phalange.x+' '+phalange.y+')');
		thumbNailWidth = handWidth * 0.17 * nearHandTurnDX/0.85;
		var thumbNail = document.createElementNS('http://www.w3.org/2000/svg','path');
		if (nearHandTurnDX > 0) {
			nearThumb.appendChild(thumbNail);
		} else {
			nearThumb.prepend(thumbNail);
		};
		thumbNail.setAttribute('fill',nailColor);
		thumbNail.setAttribute('stroke','black');
		thumbNail.setAttribute('stroke-width',0.5);
		thumbNail.setAttribute('transform','rotate('+(tilt*nearHandTurnDX)+' '+phalange.x+' '+phalange.y+')');
		x = phalange.x - handWidth * 0.1;
		if (nearHandTurnDX < 0) {
			x -= thumbNailWidth;
		};
		y = phalange.y + phalange.length*0.4;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = x - thumbNailWidth * 0.05;
		y = y + phalange.length*0.3;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y +  phalange.length * 0.2 * this.bio('nailsLength');
		x = x + thumbNailWidth * 1.1;
		y = y ;
		c2x = x;
		c2y = y + phalange.length * 0.2 * this.bio('nailsLength');;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = x - thumbNailWidth * 0.05;
		y = y - phalange.length*0.3;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = x - thumbNailWidth;
		y = y;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		thumbNail.setAttribute('d',d);
		var nearHandArray = [
			document.createElementNS('http://www.w3.org/2000/svg','g'),
			document.createElementNS('http://www.w3.org/2000/svg','g'),
			document.createElementNS('http://www.w3.org/2000/svg','g'),
			document.createElementNS('http://www.w3.org/2000/svg','g'),
			document.createElementNS('http://www.w3.org/2000/svg','g'),
		];
		for (var i=0;i<nearHandArray.length;i++) {
			nearHandArray[i].id = 'nearFinger_'+i+'_'+this.id;
			nearHandArray[i].setAttribute('fill',skinTone);
			nearHandArray[i].setAttribute('stroke','inherit');
			nearHandArray[i].setAttribute('transform','rotate('+nearHandTilt+' '+nearWrist.x+' '+nearWrist.y+')');
		};
		var splayMaxAngles = [45,25,-5,-30];
		var digitLengths = [
			[0.4,0.5,0.6,0.45],
			[0.3,0.4,0.4,0.35],
			[0.2,0.3,0.3,0.25],
		];
		var proximals = [];
		var intermediates = [];
		var distals = [];
		for (var i=0;i<4;i++) {
			var proximal = document.createElementNS('http://www.w3.org/2000/svg','rect');
			nearHandArray[i].appendChild(proximal);
			var phalange = {
				x: nearWrist.x + (i*handWidth*0.29 - handWidth * 0.57)*nearHandTurnDX,
				y: nearWrist.y + handLength*0.8 + handLength*0.025*i,
				length: handLength*digitLengths[0][i],
				splay: splayMaxAngles[i] * Math.max(0,this.pos('nearHandSplay')/Math.PI)*nearHandTurnDX,
				curl: nearHandCurl,
			};
			proximals.push(phalange);
			proximal.setAttribute('x',phalange.x - handWidth*0.1);
			proximal.setAttribute('y',phalange.y);
			proximal.setAttribute('height',phalange.length);
			proximal.setAttribute('width',handWidth*0.2);
			proximal.setAttribute('rx',handWidth*0.05);
			proximal.setAttribute('ry',handLength*0.15);
			proximal.setAttribute('transform','rotate('+(phalange.splay+phalange.curl)+' '+phalange.x+' '+phalange.y+')');
			var intermediate = {
				x:phalange.x - Math.sin((phalange.curl + phalange.splay) * Math.PI / 180) * phalange.length*0.8,
				y:phalange.y + Math.cos((phalange.curl + phalange.splay) * Math.PI / 180) * phalange.length*0.8,
			};
			intermediates.push(intermediate);
		};
		for (var i=0;i<intermediates.length;i++) {
			var intermediate = document.createElementNS('http://www.w3.org/2000/svg','rect');
			nearHandArray[i].appendChild(intermediate);
			var phalange = {
				x: intermediates[i].x,
				y: intermediates[i].y,
				length: handLength*digitLengths[1][i],
				splay: proximals[i].splay,
				curl: nearHandCurl*2,
			};
			intermediates[i] = phalange;
			intermediate.setAttribute('x',phalange.x - handWidth*0.09);
			intermediate.setAttribute('y',phalange.y);
			intermediate.setAttribute('height',phalange.length);
			intermediate.setAttribute('width',handWidth*0.18);
			intermediate.setAttribute('rx',handWidth*0.065);
			intermediate.setAttribute('ry',handLength*0.15);
			intermediate.setAttribute('transform','rotate('+(phalange.splay+phalange.curl)+' '+phalange.x+' '+phalange.y+')');
			var distal = {
				x:proximals[i].x - (Math.sin((proximals[i].splay + proximals[i].curl) * Math.PI / 180) * proximals[i].length*0.8) - (Math.sin((phalange.splay + phalange.curl) * Math.PI / 180) * phalange.length*0.8),
				y:proximals[i].y + (Math.cos((proximals[i].splay + proximals[i].curl) * Math.PI / 180) * proximals[i].length*0.8) + (Math.cos((phalange.splay + phalange.curl) * Math.PI / 180) * phalange.length*0.8),
			};
			distals.push(distal);
		}
		for (var i=0;i<distals.length;i++) {
			var distal = document.createElementNS('http://www.w3.org/2000/svg','rect');
			nearHandArray[i].appendChild(distal);
			var phalange = {
				x: distals[i].x,
				y: distals[i].y,
				length: handLength*digitLengths[2][i],
				splay: proximals[i].splay,
				curl: nearHandCurl*3,
			};
			distals[i] = phalange;
			distal.setAttribute('x',phalange.x - handWidth*0.075);
			distal.setAttribute('y',phalange.y);
			distal.setAttribute('height',phalange.length);
			distal.setAttribute('width',handWidth*0.15);
			distal.setAttribute('rx',handWidth*0.05);
			distal.setAttribute('ry',handLength*0.15);
			distal.setAttribute('transform','rotate('+(phalange.splay+phalange.curl)+' '+phalange.x+' '+phalange.y+')');

			var nail = document.createElementNS('http://www.w3.org/2000/svg','path');
			if ((nearHandTurnDX < 0 && Math.abs(this.pos('nearHandCurl')) < Math.PI/3) || (nearHandTurnDX > 0 && Math.abs(this.pos('nearHandCurl')) > Math.PI/3) ) {
				nearHandArray[i].prepend(nail);
			} else {
				nearHandArray[i].appendChild(nail);
			};
			nail.setAttribute('fill',nailColor);
			nail.setAttribute('stroke','black');
			nail.setAttribute('stroke-width',0.5);
			nail.setAttribute('transform','rotate('+(distals[i].splay+distals[i].curl)+' '+distals[i].x+' '+distals[i].y+')');
			x = distals[i].x - handWidth*0.065;
			y = distals[i].y + distals[i].length * 0.7;
			d = 'M '+x+','+y+' ';
			c1x = x;
			c1y = y;
			x = x;
			y = y + distals[i].length * 0.3;
			c2x = x;
			c2y = y;
			d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
			c1x = x;
			c1y = y + distals[i].length * 0.2 * this.bio('nailsLength');
			x = x + handWidth*0.13 * Math.abs(nearHandTurnDX);
			y = y;
			c2x = x;
			c2y = y + distals[i].length * 0.2 * this.bio('nailsLength');
			d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
			c1x = x;
			c1y = y;
			x = x;
			y = y - distals[i].length * 0.3;
			c2x = x;
			c2y = y;
			d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
			c1x = x;
			c1y = y - distals[i].length * 0.1;
			x = x - handWidth*0.13 * Math.abs(nearHandTurnDX);
			y = y;
			c2x = x;
			c2y = y - distals[i].length * 0.1;
			d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
			d += 'z';
			nail.setAttribute('d',d);
		};
		var palmFacing = this.pos('nearHandTurn') < 0 && Math.abs(this.pos('nearHandCurl')) > Math.PI/3;
		if (palmFacing) {
			nearHandArray.unshift(nearHand);
		} else {
			nearHandArray.push(nearHand);
		};
		nearHandArray.push(nearThumb);
		var nearJointCovers = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearJointCovers.id = 'nearJointCovers_'+this.id;
		nearHandArray.push(nearJointCovers);
		nearJointCovers.setAttribute('transform','rotate('+nearHandTilt+' '+nearWrist.x+' '+nearWrist.y+')');
		if (!palmFacing) {
			for (var i=0;i<proximals.length;i++) {
				var proximal = document.createElementNS('http://www.w3.org/2000/svg','rect');
				proximal.setAttribute('fill',skinTone);
				proximal.setAttribute('stroke','none');
				proximal.setAttribute('x',proximals[i].x - handWidth*0.1);
				proximal.setAttribute('y',proximals[i].y);
				proximal.setAttribute('height',proximals[i].length);
				proximal.setAttribute('width',handWidth*0.2);
				proximal.setAttribute('rx',handWidth*0.05);
				proximal.setAttribute('ry',handLength*0.15);
				proximal.setAttribute('transform','rotate('+(proximals[i].splay+proximals[i].curl)+' '+proximals[i].x+' '+proximals[i].y+')');
				nearJointCovers.appendChild(proximal);
			};
		};

		var farHand = document.createElementNS('http://www.w3.org/2000/svg','g');
		farHand.id = 'farHand_'+this.id;
		farHand.setAttribute('fill',skinTone);
		farHand.setAttribute('stroke','inherit');
		var farPalm = document.createElementNS('http://www.w3.org/2000/svg','path');
		farHand.appendChild(farPalm);
		var palmTurnDX = farHandTurnDX;
		x = farWrist.x + handWidth * 0.35*palmTurnDX;
		y = farWrist.y;
		d = 'M '+x+','+y+' ';
		c1x = x - handWidth * 0.1*palmTurnDX;
		c1y = y - handLength * 0.1;
		x = x - handWidth * 0.7*palmTurnDX;
		y = y;
		c2x = x + handWidth * 0.1*palmTurnDX;
		c2y = y - handLength * 0.1;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x - handWidth * 0.1*palmTurnDX;
		c1y = y + handLength * 0.1;
		x = x;
		y = y + handLength;
		c2x = x - handWidth * 0.1*palmTurnDX;
		c2y = y - handLength * 0.1;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + handWidth * 0.1*palmTurnDX;
		c1y = y + handLength * 0.1;
		x = x + handWidth*palmTurnDX;
		y = y - handLength * 0.1;
		c2x = x - handWidth * 0.1*palmTurnDX;
		c2y = y + handLength * 0.1;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + handWidth * 0.1*palmTurnDX;
		c1y = y - handLength * 0.1;
		x = x - handWidth * 0.3*palmTurnDX;
		y = y - handLength * 0.9;
		c2x = x + handWidth * 0.1*palmTurnDX;
		c2y = y + handLength * 0.1;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		d += ' z';
		farPalm.setAttribute('d',d);
		var farPalmSide = document.createElementNS('http://www.w3.org/2000/svg','path');
		farHand.appendChild(farPalmSide);
		x = farWrist.x + handWidth * 0.25;
		y = farWrist.y;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y + handLength * 0.5;
		x = x - handWidth *0.2;
		y = y + handLength;
		c2x = x + handWidth * 0.1;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x - handWidth * 0.1;
		c1y = y;
		x = x - handWidth *0.3;
		y = y - handLength;
		c2x = x;
		c2y = y + handLength * 0.5;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';		
		farPalmSide.setAttribute('d',d);
		farHand.setAttribute('transform','rotate('+farHandTilt+' '+farWrist.x+' '+farWrist.y+')');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farHand.appendChild(circle);
		circle.setAttribute('stroke','none');
		circle.setAttribute('cx',farWrist.x);
		circle.setAttribute('cy',farWrist.y);
		circle.setAttribute('r',handWidth*0.25);
		var farThumb = document.createElementNS('http://www.w3.org/2000/svg','g');
		farThumb.id = 'farThumb'+this.id;
		farThumb.setAttribute('fill',skinTone);
		farThumb.setAttribute('stroke','inherit');
		farThumb.setAttribute('transform','rotate('+farHandTilt+' '+farWrist.x+' '+farWrist.y+')');
		var farThumbProximal = {
			x: farWrist.x-handWidth*0.3*farHandTurnDX,
			y: farWrist.y+handLength*0,
			length: handLength*0.7,
		};
		var thumbProximal = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farThumb.appendChild(thumbProximal);
		thumbProximal.setAttribute('x',farThumbProximal.x-handWidth*0.15);
		thumbProximal.setAttribute('y',farThumbProximal.y);
		thumbProximal.setAttribute('height',farThumbProximal.length);
		thumbProximal.setAttribute('width',handWidth*0.3);
		thumbProximal.setAttribute('rx',handWidth*0.1);
		thumbProximal.setAttribute('ry',handLength*0.5);
		var tilt = -15 - 60*Math.max(0,this.pos('farHandSplay'))/Math.PI;
		tilt *= -1;
		thumbProximal.setAttribute('transform','rotate('+(tilt*farHandTurnDX)+' '+farThumbProximal.x+' '+farThumbProximal.y+')');
		var thumbJoint = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farThumb.appendChild(thumbJoint);
		var thumbJointOffset = this.pos('farHandTurn') * -1;
		thumbJoint.id = 'thumbJoint';
		thumbJoint.setAttribute('x',farThumbProximal.x-handWidth*0.15-thumbJointOffset);
		thumbJoint.setAttribute('y',farThumbProximal.y - handLength * 0.1);
		thumbJoint.setAttribute('height',farThumbProximal.length*0.7);
		thumbJoint.setAttribute('width',handWidth*0.3);
		thumbJoint.setAttribute('rx',handWidth*0.1);
		thumbJoint.setAttribute('ry',handLength*0.5);
		thumbJoint.setAttribute('stroke','none');
		var tilt = -15 - 60*Math.max(0,this.pos('farHandSplay'))/Math.PI;
		tilt *= -1;
		thumbJoint.setAttribute('transform','rotate('+(tilt*farHandTurnDX)+' '+farThumbProximal.x+' '+farThumbProximal.y+')');
		var thumbDistal = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farThumb.appendChild(thumbDistal);
		phalange = {
			x: farThumbProximal.x - Math.sin((tilt*farHandTurnDX) * Math.PI / 180) * farThumbProximal.length,
			y: farThumbProximal.y + Math.cos((tilt*farHandTurnDX) * Math.PI / 180) * farThumbProximal.length,
			length: handLength*0.4,
		};
		thumbDistal.setAttribute('x',phalange.x-handWidth*0.1);
		thumbDistal.setAttribute('y',phalange.y - handLength * 0.05);
		thumbDistal.setAttribute('height',phalange.length);
		thumbDistal.setAttribute('width',handWidth*0.2);
		thumbDistal.setAttribute('rx',handWidth*0.05);
		thumbDistal.setAttribute('ry',handLength*0.5);
		var tilt = 20 - 90*Math.max(0,this.pos('farHandSplay'))/Math.PI;
		tilt *= -1;
		thumbDistal.setAttribute('transform','rotate('+(tilt*farHandTurnDX)+' '+phalange.x+' '+phalange.y+')');
		thumbNailWidth = handWidth * 0.17 * farHandTurnDX/0.85;
		var thumbNail = document.createElementNS('http://www.w3.org/2000/svg','path');
		if (farHandTurnDX > 0) {
			farThumb.appendChild(thumbNail);
		} else {
			farThumb.prepend(thumbNail);
		};
		thumbNail.setAttribute('fill',nailColor);
		thumbNail.setAttribute('stroke','black');
		thumbNail.setAttribute('stroke-width',0.5);
		thumbNail.setAttribute('transform','rotate('+(tilt*farHandTurnDX)+' '+phalange.x+' '+phalange.y+')');
		x = phalange.x + handWidth * 0.1;
		if (farHandTurnDX < 0) {
			x += thumbNailWidth;
		};
		y = phalange.y + phalange.length*0.4;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = x + thumbNailWidth * 0.05;
		y = y + phalange.length*0.3;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y +  phalange.length * 0.2 * this.bio('nailsLength');
		x = x - thumbNailWidth * 1.1;
		y = y ;
		c2x = x;
		c2y = y + phalange.length * 0.2 * this.bio('nailsLength');;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = x + thumbNailWidth * 0.05;
		y = y - phalange.length*0.3;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = x + thumbNailWidth;
		y = y;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		thumbNail.setAttribute('d',d);
		var farHandArray = [
			document.createElementNS('http://www.w3.org/2000/svg','g'),
			document.createElementNS('http://www.w3.org/2000/svg','g'),
			document.createElementNS('http://www.w3.org/2000/svg','g'),
			document.createElementNS('http://www.w3.org/2000/svg','g'),
			document.createElementNS('http://www.w3.org/2000/svg','g'),
		];
		for (var i=0;i<farHandArray.length;i++) {
			farHandArray[i].id = 'farFinger_'+i+'_'+this.id;
			farHandArray[i].setAttribute('fill',skinTone);
			farHandArray[i].setAttribute('stroke','inherit');
			farHandArray[i].setAttribute('transform','rotate('+farHandTilt+' '+farWrist.x+' '+farWrist.y+')');
		};
		var proximals = [];
		var intermediates = [];
		var distals = [];
		for (var i=0;i<4;i++) {
			var proximal = document.createElementNS('http://www.w3.org/2000/svg','rect');
			farHandArray[i].appendChild(proximal);
			var phalange = {
				x: farWrist.x - (i*handWidth*0.29 - handWidth * 0.57)*farHandTurnDX,
				y: farWrist.y + handLength*0.8 + handLength*0.025*i,
				length: handLength*digitLengths[0][i],
				splay: -1 * splayMaxAngles[i] * Math.max(0,this.pos('farHandSplay')/Math.PI)*farHandTurnDX,
				curl: farHandCurl,
			};
			proximals.push(phalange);
			proximal.setAttribute('x',phalange.x - handWidth*0.1);
			proximal.setAttribute('y',phalange.y);
			proximal.setAttribute('height',phalange.length);
			proximal.setAttribute('width',handWidth*0.2);
			proximal.setAttribute('rx',handWidth*0.05);
			proximal.setAttribute('ry',handLength*0.15);
			proximal.setAttribute('transform','rotate('+(phalange.splay+phalange.curl)+' '+phalange.x+' '+phalange.y+')');
			var intermediate = {
				x:phalange.x - Math.sin((phalange.curl + phalange.splay) * Math.PI / 180) * phalange.length*0.8,
				y:phalange.y + Math.cos((phalange.curl + phalange.splay) * Math.PI / 180) * phalange.length*0.8,
			};
			intermediates.push(intermediate);
		};
		for (var i=0;i<intermediates.length;i++) {
			var intermediate = document.createElementNS('http://www.w3.org/2000/svg','rect');
			farHandArray[i].appendChild(intermediate);
			var phalange = {
				x: intermediates[i].x,
				y: intermediates[i].y,
				length: handLength*digitLengths[1][i],
				splay: proximals[i].splay,
				curl: farHandCurl*2,
			};
			intermediates[i] = phalange;
			intermediate.setAttribute('x',phalange.x - handWidth*0.09);
			intermediate.setAttribute('y',phalange.y);
			intermediate.setAttribute('height',phalange.length);
			intermediate.setAttribute('width',handWidth*0.18);
			intermediate.setAttribute('rx',handWidth*0.065);
			intermediate.setAttribute('ry',handLength*0.15);
			intermediate.setAttribute('transform','rotate('+(phalange.splay+phalange.curl)+' '+phalange.x+' '+phalange.y+')');
			var distal = {
				x:proximals[i].x - (Math.sin((proximals[i].splay + proximals[i].curl) * Math.PI / 180) * proximals[i].length*0.8) - (Math.sin((phalange.splay + phalange.curl) * Math.PI / 180) * phalange.length*0.8),
				y:proximals[i].y + (Math.cos((proximals[i].splay + proximals[i].curl) * Math.PI / 180) * proximals[i].length*0.8) + (Math.cos((phalange.splay + phalange.curl) * Math.PI / 180) * phalange.length*0.8),
			};
			distals.push(distal);
		}
		for (var i=0;i<distals.length;i++) {
			var distal = document.createElementNS('http://www.w3.org/2000/svg','rect');
			farHandArray[i].appendChild(distal);
			var phalange = {
				x: distals[i].x,
				y: distals[i].y,
				length: handLength*digitLengths[2][i],
				splay: proximals[i].splay,
				curl: farHandCurl*3,
			};
			distals[i] = phalange;
			distal.setAttribute('x',phalange.x - handWidth*0.075);
			distal.setAttribute('y',phalange.y);
			distal.setAttribute('height',phalange.length);
			distal.setAttribute('width',handWidth*0.15);
			distal.setAttribute('rx',handWidth*0.05);
			distal.setAttribute('ry',handLength*0.15);
			distal.setAttribute('transform','rotate('+(phalange.splay+phalange.curl)+' '+phalange.x+' '+phalange.y+')');

			var nail = document.createElementNS('http://www.w3.org/2000/svg','path');
			if ((farHandTurnDX < 0 && Math.abs(this.pos('farHandCurl')) < Math.PI/3) || (farHandTurnDX > 0 && Math.abs(this.pos('farHandCurl')) > Math.PI/3) ) {
				farHandArray[i].prepend(nail);
			} else {
				farHandArray[i].appendChild(nail);
			};
			nail.setAttribute('fill',nailColor);
			nail.setAttribute('stroke','black');
			nail.setAttribute('stroke-width',0.5);
			nail.setAttribute('transform','rotate('+(distals[i].splay+distals[i].curl)+' '+distals[i].x+' '+distals[i].y+')');
			x = distals[i].x + handWidth*0.065;
			y = distals[i].y + distals[i].length * 0.7;
			d = 'M '+x+','+y+' ';
			c1x = x;
			c1y = y;
			x = x;
			y = y + distals[i].length * 0.3;
			c2x = x;
			c2y = y;
			d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
			c1x = x;
			c1y = y + distals[i].length * 0.2 * this.bio('nailsLength');
			x = x - handWidth*0.13 * Math.abs(farHandTurnDX);
			y = y;
			c2x = x;
			c2y = y + distals[i].length * 0.2 * this.bio('nailsLength');
			d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
			c1x = x;
			c1y = y;
			x = x;
			y = y - distals[i].length * 0.3;
			c2x = x;
			c2y = y;
			d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
			c1x = x;
			c1y = y - distals[i].length * 0.1;
			x = x + handWidth*0.13 * Math.abs(farHandTurnDX);
			y = y;
			c2x = x;
			c2y = y - distals[i].length * 0.1;
			d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
			d += 'z';
			nail.setAttribute('d',d);
		};
		var palmFacing = this.pos('farHandTurn') < 0 && Math.abs(this.pos('farHandCurl')) > Math.PI/3;
		if (palmFacing) {
			farHandArray.unshift(farHand);
		} else {
			farHandArray.push(farHand);
		};
		farHandArray.push(farThumb);
		var farJointCovers = document.createElementNS('http://www.w3.org/2000/svg','g');
		farJointCovers.id = 'farJointCovers_'+this.id;
		farHandArray.push(farJointCovers);
		farJointCovers.setAttribute('transform','rotate('+farHandTilt+' '+farWrist.x+' '+farWrist.y+')');
		if (!palmFacing) {
			for (var i=0;i<proximals.length;i++) {
				var proximal = document.createElementNS('http://www.w3.org/2000/svg','rect');
				proximal.setAttribute('fill',skinTone);
				proximal.setAttribute('stroke','none');
				proximal.setAttribute('x',proximals[i].x - handWidth*0.1);
				proximal.setAttribute('y',proximals[i].y);
				proximal.setAttribute('height',proximals[i].length);
				proximal.setAttribute('width',handWidth*0.2);
				proximal.setAttribute('rx',handWidth*0.05);
				proximal.setAttribute('ry',handLength*0.15);
				proximal.setAttribute('transform','rotate('+(proximals[i].splay+proximals[i].curl)+' '+proximals[i].x+' '+proximals[i].y+')');
				farJointCovers.appendChild(proximal);
			};
		};

		var farElbowJoint = document.createElementNS('http://www.w3.org/2000/svg','use');
		farElbowJoint.id = 'farElbowJoint_'+this.id;
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farElbowJoint.appendChild(circle);
		circle.setAttribute('cx',farElbow.x);
		circle.setAttribute('cy',farElbow.y);
		circle.setAttribute('r',armWidth * 0.5);
				
		var nearElbowJoint = document.createElementNS('http://www.w3.org/2000/svg','use');
		nearElbowJoint.id = 'nearElbowJoint_'+this.id;
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearElbowJoint.appendChild(circle);
		circle.setAttribute('cx',nearElbow.x);
		circle.setAttribute('cy',nearElbow.y);
		circle.setAttribute('r',armWidth * 0.5);
		
		var torsoGarmentGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		torsoGarmentGroup.id = 'torsoGarmentGroup'+this.id;
		var nearSleeveGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearSleeveGroup.id = 'nearSleeveGroup'+this.id;
		var farSleeveGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		farSleeveGroup.id = 'farSleeveGroup'+this.id;
		var nearLeggingGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearLeggingGroup.id = 'nearLeggingGroup'+this.id;
		var farLeggingGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		farLeggingGroup.id = 'farLeggingGroup'+this.id;
		var skirtGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		skirtGroup.id = 'skirtGroup_'+this.id;
		
		var torso = document.createElementNS('http://www.w3.org/2000/svg','g');
		torso.id = 'torso_'+this.id;
		torso.setAttribute('fill',skinTone);
		torso.setAttribute('stroke','inherit');
// 		var pelvisBacking = document.createElementNS('http://www.w3.org/2000/svg','polyline');
// 		torso.appendChild(pelvisBacking);
// 		var pointsArray = [
// 			{x:nearHipJoint.x,y:Math.min(nearHipJoint.y,farHipJoint.y)},
// 			{x:farHipJoint.x,y:Math.min(nearHipJoint.y,farHipJoint.y)},
// 			{x:farHipJoint.x,y:Math.max(nearHipJoint.y,farHipJoint.y)},
// 			genitalsBottom,
// 			{x:nearHipJoint.x,y:Math.max(nearHipJoint.y,farHipJoint.y)},
// 		];
// 		var pelvisPointsString = '';
// 		for (var i of pointsArray) {
// 			pelvisPointsString += i.x + ',' + i.y + ' ';
// 		};
// 		pelvisBacking.setAttribute('points',pelvisPointsString);
// 		pelvisBacking.setAttribute('stroke','none');
		var chest = document.createElementNS('http://www.w3.org/2000/svg','path');
		chest.setAttribute('stroke','none');
		torso.appendChild(chest);
		var farSide = document.createElementNS('http://www.w3.org/2000/svg','path');
		farSide.setAttribute('fill','none');
		torso.appendChild(farSide);
		var nearSide = document.createElementNS('http://www.w3.org/2000/svg','path');
		nearSide.setAttribute('fill','none');
		torso.appendChild(nearSide);
		var x = nearHipJoint.x;
		var y = nearHipJoint.y;
		var chestD = 'M '+x+','+y+' ';
		var nearD = 'M '+x+','+(y)+' ';
		var farD = 'M '+(farShoulder.x+shoulderWidth*Math.pow(2,0.5)*0.5)+','+(farShoulder.y+shoulderWidth*Math.pow(2,0.5)*0.5)+' ';
		var nearControl = (nearHipJoint.y - nearShoulder.y)/2;
		var farControl = (farHipJoint.y - farShoulder.y)/2;
		var nearArmpit = {
			x: nearShoulder.x-shoulderWidth*Math.pow(2,0.5)*0.5,
			y: nearShoulder.y+shoulderWidth*Math.pow(2,0.5)*0.5,
		};
		var farArmpit = {
			x: farShoulder.x+shoulderWidth*Math.pow(2,0.5)*0.5,
			y: farShoulder.y+shoulderWidth*Math.pow(2,0.5)*0.5,
		};
		// Up To Near Shoulder
		c1x = x;
		c1y = y - nearControl;
		x = nearArmpit.x;
		y = nearArmpit.y;
		c2x = x;
		c2y = y + nearControl;
		chestD += 'C' + c1x + ',' + c1y + ' ' + c2x + ',' + c2y + ' ' + x + ',' + y + ' ';
		nearD += 'C' + c1x + ',' + (c1y) + ' ' + c2x + ',' + c2y + ' ' + x + ',' + y + ' ';
		// Up to Neck
		c1x = x+10;
		c1y = y+0;
		x = (neckBase.x + headCenter.x)/2;
		y = (neckBase.y + headCenter.y)/2;
		c2x = x;
		c2y = y+10;
		chestD += 'C' + c1x + ',' + c1y + ' ' + c2x + ',' + c2y + ' ' + x + ',' + y + ' ';
		// Down to Far Shoulder
		c1x = x+0;
		c1y = y+10;
		x = farArmpit.x;
		y = farArmpit.y;
		c2x = x-10;
		c2y = y;
		chestD += 'C' + c1x + ',' + c1y + ' ' + c2x + ',' + c2y + ' ' + x + ',' + y + ' ';
		// To Far Hip
		c1x = x;
		c1y = y + farControl;
		x = farHipJoint.x;
		y = farHipJoint.y;
		c2x = x;
		c2y = y - farControl;
		chestD += 'C' + c1x + ',' + c1y + ' ' + c2x + ',' + c2y + ' ' + x + ',' + y + ' ';
		farD += 'C' + c1x + ',' + c1y + ' ' + c2x + ',' + c2y + ' ' + x + ',' + y + ' ';
		// To Genitals, then Near Hip
		chestD += 'L '+bulgeCenter.x+','+bulgeCenter.y+' ';
		chestD += 'L '+nearHipJoint.x+','+nearHipJoint.y+' ';
		chest.setAttribute('d',chestD);
		nearSide.setAttribute('d',nearD);
		farSide.setAttribute('d',farD);

		var shoulders = document.createElementNS('http://www.w3.org/2000/svg','g');
		shoulders.id = 'shoulders_'+this.id;
		shoulders.setAttribute('fill',skinTone);
		shoulders.setAttribute('stroke','inherit');
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		shoulders.appendChild(circle);
		circle.setAttribute('cx',farShoulder.x);
		circle.setAttribute('cy',farShoulder.y);
		circle.setAttribute('r',shoulderWidth);
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		shoulders.appendChild(circle);
		circle.setAttribute('cx',nearShoulder.x);
		circle.setAttribute('cy',nearShoulder.y);
		circle.setAttribute('r',shoulderWidth);
		var polyline = document.createElementNS('http://www.w3.org/2000/svg','polyline');
		shoulders.appendChild(polyline);
		var pointsArray = [
			{x:nearShoulder.x,y:nearShoulder.y+shoulderWidth},
			{x:nearShoulder.x,y:nearShoulder.y-shoulderWidth},
			{x:(2*neckBase.x + headCenter.x)/3,y:(2*neckBase.y + headCenter.y)/3},
			{x:farShoulder.x,y:farShoulder.y-shoulderWidth},
			{x:farShoulder.x,y:farShoulder.y+shoulderWidth},
		];
		var pointsStringShoulders = '';
		for (var i of pointsArray) {
			pointsStringShoulders += i.x + ',' + i.y + ' ';
		};
		polyline.setAttribute('points',pointsStringShoulders);

		// Breasts Workspace
// 		var nearBreasts = document.createElementNS('http://www.w3.org/2000/svg','g');
// 		nearBreasts.id = 'nearBreasts_'+this.id;
// 		nearBreasts.setAttribute('fill',skinTone);
// 		nearBreasts.setAttribute('stroke','inherit');
// 		var farBreasts = document.createElementNS('http://www.w3.org/2000/svg','g');
// 		farBreasts.id = 'farBreasts_'+this.id;
// 		farBreasts.setAttribute('fill',skinTone);
// 		farBreasts.setAttribute('stroke','inherit');
		var nearBreasts = [];
		var farBreasts = [];

		var pecInnerRadius = this.bio('pectorals')*shouldersWidth*0.3*0.2;
		var pecWidth = shouldersWidth*0.3*(0.5+this.bio('pectorals'));
		var pecHeight = pecWidth*0.66;
		var collarboneTurn = 0.4;
		if (torsoFacing == -1) {
			collarboneTurn = 0.6;
		};
		var nearCollarboneStart = {
			x: (nearShoulder.x*collarboneTurn+farShoulder.x*(1-collarboneTurn))*0.95+spineBase.x*0.05-shouldersWidth*0.035,
			y: (nearShoulder.y*collarboneTurn+farShoulder.y*(1-collarboneTurn))*0.95+spineBase.y*0.05,
		};
		var farCollarboneStart = {
			x: (nearShoulder.x*collarboneTurn+farShoulder.x*(1-collarboneTurn))*0.95+spineBase.x*0.05+shouldersWidth*0.035,
			y: (nearShoulder.y*collarboneTurn+farShoulder.y*(1-collarboneTurn))*0.95+spineBase.y*0.05,
		};
		var collarboneProjection = 0.1+Math.max(0,Math.min(5,this.biometrics.pectorals))*0.18;
		var nearCollarboneEnd = {
			x: nearCollarboneStart.x*(1-collarboneProjection) + nearShoulder.x*collarboneProjection,
			y: nearCollarboneStart.y*(1-collarboneProjection) + nearShoulder.y*collarboneProjection,
		};
		var farCollarboneEnd = {
			x: farCollarboneStart.x*(1-collarboneProjection) + farShoulder.x*collarboneProjection,
			y: farCollarboneStart.y*(1-collarboneProjection) + farShoulder.y*collarboneProjection,
		};
		if (this.bio('pectorals')>1) {
			var nearCollarbone = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearBreasts.push(nearCollarbone);
			d = "M "+nearCollarboneStart.x+","+nearCollarboneStart.y+" ";
			d += "C "+nearCollarboneStart.x+","+(nearCollarboneStart.y-pecInnerRadius*0.55)+" "+(nearCollarboneEnd.x)+","+nearCollarboneEnd.y+" "+(nearCollarboneEnd.x)+","+nearCollarboneEnd.y+" ";
			nearCollarbone.setAttribute('d',d);
			nearCollarbone.setAttribute('fill','none');
			nearCollarbone.setAttribute('stroke-width',1);
			var farCollarbone = document.createElementNS('http://www.w3.org/2000/svg','path');
			farBreasts.push(farCollarbone);
			d = "M "+farCollarboneStart.x+","+farCollarboneStart.y+" ";
			d += "C "+farCollarboneStart.x+","+(farCollarboneStart.y-pecInnerRadius*0.55)+" "+(farCollarboneEnd.x)+","+farCollarboneEnd.y+" "+(farCollarboneEnd.x)+","+farCollarboneEnd.y+" ";
			farCollarbone.setAttribute('d',d);
			farCollarbone.setAttribute('fill','none');
			farCollarbone.setAttribute('stroke-width',1);
		};

		var breastRows;
		if (this.biometrics.breastRows == undefined) {
			breastRows = 1;
		} else {
			breastRows = Math.max(1,this.biometrics.breastRows-5);
		};
		var breastTurn = 0.7;
		if (torsoFacing == -1) {
			breastTurn = 0.3;
		};
		var farBreastsTop = {
			x: 0.8*(neckBase.x*(1-breastTurn)+farShoulder.x*breastTurn)+0.2*(spineBase.x*(1-breastTurn)+farHipJoint.x*breastTurn),
			y: 0.8*(neckBase.y*(1-breastTurn)+farShoulder.y*breastTurn)+0.2*(spineBase.y*(1-breastTurn)+farHipJoint.y*breastTurn),
		};
		var farBreastsBottom = {
			x: 0.2*(neckBase.x*(1-breastTurn)+farShoulder.x*breastTurn)+0.8*(spineBase.x*(1-breastTurn)+farHipJoint.x*breastTurn),
			y: 0.2*(neckBase.y*(1-breastTurn)+farShoulder.y*breastTurn)+0.8*(spineBase.y*(1-breastTurn)+farHipJoint.y*breastTurn),
		};
		var nearBreastsTop = {
			x: 0.8*(neckBase.x*(breastTurn)+nearShoulder.x*(1-breastTurn))+0.2*(spineBase.x*(breastTurn)+nearHipJoint.x*(1-breastTurn)),
			y: 0.8*(neckBase.y*(breastTurn)+nearShoulder.y*(1-breastTurn))+0.2*(spineBase.y*(breastTurn)+nearHipJoint.y*(1-breastTurn)),
		};
		var nearBreastsBottom = {
			x: 0.2*(neckBase.x*(breastTurn)+nearShoulder.x*(1-breastTurn))+0.8*(spineBase.x*(breastTurn)+nearHipJoint.x*(1-breastTurn)),
			y: 0.2*(neckBase.y*(breastTurn)+nearShoulder.y*(1-breastTurn))+0.8*(spineBase.y*(breastTurn)+nearHipJoint.y*(1-breastTurn)),
		};
		if (breastRows == 1) {
			farBreastsBottom = farBreastsTop;
			nearBreastsBottom = nearBreastsTop;
		};
		var breastCenter,breastBottom,pecStart,curveCenter,stops = Math.max(1,breastRows-1);
		var areolaCenter,nippleCenter;
		var breastProjection = 0.8+this.bio('breastProject')*0.2;
		var breastAngle = this.bio('pectorals')*40;
		
		var nipplesShowing = true;
		for (var garment of this.garments) {
			if (garment.absoluteTop < 0.32 && garment.absoluteBottom > 0.34) {
				nipplesShowing = false;
			};
		};
		
		for (var b=0;b<breastRows;b++) {
		
			var farBreast = document.createElementNS('http://www.w3.org/2000/svg','g');
			farBreast.id = 'farBreast'+b+"_"+this.id;
			farBreast.setAttribute('fill',skinTone);
			farBreast.setAttribute('stroke','inherit');
			farBreasts.push(farBreast);
			var nearBreast = document.createElementNS('http://www.w3.org/2000/svg','g');
			nearBreast.id = 'nearBreast'+b+"_"+this.id;
			nearBreast.setAttribute('fill',skinTone);
			nearBreast.setAttribute('stroke','inherit');
			nearBreasts.push(nearBreast);
		
			// Far Pec and Breast
			var farBreastCenter = {
				x: farBreastsTop.x*(b)/stops+farBreastsBottom.x*(stops-b)/stops,
				y: farBreastsTop.y*(b)/stops+farBreastsBottom.y*(stops-b)/stops,
			};
			var farBreastBottom = {
				y: farBreastCenter.y + breastSize*1.5 + breastSize*(breastProjection-1)*(90-breastAngle)/90,
			};
// 			var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
// 			sketchGroup.appendChild(circle);
// 			circle.setAttribute('fill','red');
// 			circle.setAttribute('r',1);
// 			circle.setAttribute('cx',farBreastCenter.x);
// 			circle.setAttribute('cy',farBreastCenter.y);
			var pecStart = {
				x: farBreastCenter.x - shouldersWidth*0.225,
				y: farBreastCenter.y + shouldersWidth*0.15 - pecInnerRadius,
			};
			var pecBottom = {
				x: farBreastCenter.x+pecWidth*0.15,
				y: farBreastCenter.y+pecHeight*0.5,
			};
			if (breastSize < pecWidth*0.5) {
				pecBottom.y = Math.max(farBreastBottom.y,farBreastCenter.y+pecHeight*0.5);
			};
			var farPecEnd = {
				x: farBreastCenter.x + pecWidth*0.5,
				y: farBreastCenter.y,
			};
			var farPec = document.createElementNS('http://www.w3.org/2000/svg','path');
			farBreast.appendChild(farPec);
			var pecStroke = document.createElementNS('http://www.w3.org/2000/svg','path');
			farBreast.appendChild(pecStroke);
			d = "M "+pecStart.x+","+pecStart.y+" ";
			d += "C "+(pecStart.x)+","+(pecStart.y+pecInnerRadius*0.55)+" "+(pecStart.x+0.45*pecInnerRadius)+','+(pecStart.y+pecInnerRadius)+' '+(pecStart.x+pecInnerRadius)+','+(pecStart.y+pecInnerRadius)+' ';
			d += "C "+(pecStart.x+pecInnerRadius)+','+(pecStart.y+pecInnerRadius)+' '+pecBottom.x+","+pecBottom.y+" "+pecBottom.x+","+pecBottom.y+" ";
			d += "C "+(pecBottom.x+pecHeight*0.6-pecInnerRadius)+","+pecBottom.y+" "+farPecEnd.x+","+(farPecEnd.y+pecInnerRadius)+" "+farPecEnd.x+","+farPecEnd.y+" ";
			if (farPecEnd.x < farArmpit.x) {
				pecStroke.setAttribute('d',d);
			};
			d += "C "+farPecEnd.x+","+(farPecEnd.y-pecInnerRadius)+" "+farArmpit.x+","+farArmpit.y+" "+farArmpit.x+","+farArmpit.y+" ";
			if (farPecEnd.x > farArmpit.x) {
				pecStroke.setAttribute('d',d);
			};
			d += "L "+pecStart.x+","+farArmpit.y+" ";
			farPec.setAttribute('d',d);
			farPec.setAttribute('stroke','none');
			pecStroke.setAttribute('fill','none');

			// Near Pec and Breast			
			var nearBreastCenter = {
				x: nearBreastsTop.x*(b)/stops+nearBreastsBottom.x*(stops-b)/stops,
				y: nearBreastsTop.y*(b)/stops+nearBreastsBottom.y*(stops-b)/stops,
			};
			var nearBreastBottom = {
				y: nearBreastCenter.y + breastSize*1.5 + breastSize*(breastProjection-1)*(90-breastAngle)/90
			};
			pecStart = {
				x: nearBreastCenter.x + shouldersWidth*0.225,
				y: nearBreastCenter.y + shouldersWidth*0.15 - pecInnerRadius,
			};
			pecBottom = {
				x: nearBreastCenter.x-pecWidth*0.15,
				y: nearBreastCenter.y+pecHeight*0.5,
			};
			if (breastSize < pecWidth*0.5) {
				pecBottom.y = Math.max(nearBreastBottom.y,nearBreastCenter.y+pecHeight*0.5);
			};
			var nearPecEnd = {
				x: nearBreastCenter.x - pecWidth*0.5,
				y: nearBreastCenter.y,
			};
			var nearPec = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearBreast.appendChild(nearPec);
			var pecStroke = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearBreast.appendChild(pecStroke);
			d = "M "+pecStart.x+","+pecStart.y+" ";
			d += "C "+(pecStart.x)+","+(pecStart.y+pecInnerRadius*0.55)+" "+(pecStart.x-0.45*pecInnerRadius)+','+(pecStart.y+pecInnerRadius)+' '+(pecStart.x-pecInnerRadius)+','+(pecStart.y+pecInnerRadius)+' ';
			d += "C "+(pecStart.x-pecInnerRadius)+','+(pecStart.y+pecInnerRadius)+' '+pecBottom.x+","+pecBottom.y+" "+pecBottom.x+","+pecBottom.y+" ";
			d += "C "+(pecBottom.x-pecHeight*0.6+pecInnerRadius)+","+pecBottom.y+" "+nearPecEnd.x+","+(nearPecEnd.y+pecInnerRadius)+" "+nearPecEnd.x+","+nearPecEnd.y+" ";
			if (nearPecEnd.x > nearArmpit.x) {
				pecStroke.setAttribute('d',d);
			};
			d += "C "+nearPecEnd.x+","+(nearPecEnd.y-pecInnerRadius)+" "+nearArmpit.x+","+nearArmpit.y+" "+nearArmpit.x+","+nearArmpit.y+" ";
			if (nearPecEnd.x < nearArmpit.x) {
				pecStroke.setAttribute('d',d);
			};
			d += "L "+pecStart.x+","+nearArmpit.y+" ";
			nearPec.setAttribute('d',d);
			nearPec.setAttribute('stroke','none');
			pecStroke.setAttribute('fill','none');

			var breastRowScale = 0.5+0.5*(b+1)/breastRows;
			farBreast.setAttribute('transform','translate('+(farBreastCenter.x*breastRowScale)+' '+farBreastCenter.y+') scale('+breastRowScale+') translate('+(-1*farBreastCenter.x)+' '+(-1*farBreastCenter.y)+') ');
			nearBreast.setAttribute('transform','translate('+(nearBreastCenter.x*breastRowScale)+' '+nearBreastCenter.y+') scale('+breastRowScale+') translate('+(-1*nearBreastCenter.x)+' '+(-1*nearBreastCenter.y)+') ');
			
			// Projecting Breast
			if (torsoFacing == 1) { // far projecting breast
				curveCenter = {
					x: Math.max(farBreastCenter.x+pecWidth*0.25,pecStart.x+breastSize),
					y: farBreastCenter.y + breastSize*0.5,
				};
				farBreastBottom = {
					x: curveCenter.x-breastSize*Math.cos(breastAngle/180*Math.PI),
					y: curveCenter.y+breastSize*Math.sin(breastAngle/180*Math.PI),
				};
				breastPoint = {
					x: curveCenter.x+breastSize*breastProjection*Math.sin(breastAngle/180*Math.PI),
					y: curveCenter.y+breastSize*breastProjection*Math.cos(breastAngle/180*Math.PI),
				};
				breastTop = {
					x: curveCenter.x+breastSize*Math.cos(breastAngle/180*Math.PI),
					y: Math.max(farCollarboneStart.y+torsoHeight*0.01,curveCenter.y-breastSize*Math.sin(breastAngle/180*Math.PI)),
				};
				areolaCenter = {
					x: curveCenter.x*0.4+breastPoint.x*0.6,
					y: curveCenter.y*0.4+breastPoint.y*0.6,
				};
				
// 				var breastEllipse = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
// 				sketchGroup.appendChild(breastEllipse);
// 				breastEllipse.setAttribute('cx',curveCenter.x);
// 				breastEllipse.setAttribute('cy',curveCenter.y);
// 				breastEllipse.setAttribute('rx',breastSize);
// 				breastEllipse.setAttribute('ry',breastSize*breastProjection);
// 				breastEllipse.setAttribute('transform','rotate('+(-1*breastAngle)+' '+curveCenter.x+' '+curveCenter.y+')');
// 				breastEllipse.setAttribute('stroke','green');
// 				breastEllipse.setAttribute('fill','none');
								
				var breastPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				farBreast.appendChild(breastPath);
				d = 'M '+pecStart.x+','+pecStart.y+' ';
				d += 'C '+pecStart.x+','+(pecStart.y+pecInnerRadius*0.55)+' '+(farBreastBottom.x-0.55*breastSize*breastProjection*Math.sin(breastAngle/180*Math.PI))+','+(farBreastBottom.y-0.55*breastSize*breastProjection*Math.cos(breastAngle/180*Math.PI))+" "+farBreastBottom.x+","+farBreastBottom.y+" ";
				d += 'C '+(farBreastBottom.x+0.55*breastSize*breastProjection*Math.sin(breastAngle/180*Math.PI))+','+(farBreastBottom.y+0.55*breastSize*breastProjection*Math.cos(breastAngle/180*Math.PI))+' '+(breastPoint.x-0.55*breastSize*Math.cos(breastAngle/180*Math.PI))+','+(breastPoint.y+0.55*breastSize*Math.sin(breastAngle/180*Math.PI))+' '+breastPoint.x+','+breastPoint.y+' ';
				d += 'C '+(breastPoint.x+0.55*breastSize*Math.cos(breastAngle/180*Math.PI))+','+(breastPoint.y-0.55*breastSize*Math.sin(breastAngle/180*Math.PI))+' '+(breastTop.x+breastSize*breastProjection*Math.sin(breastAngle/180*Math.PI)*0.55)+','+(breastTop.y+breastSize*breastProjection*Math.cos(breastAngle/180*Math.PI)*0.55)+' '+breastTop.x+','+breastTop.y+' ';
				if (breastTop.x > farBreastCenter.x+pecWidth*0.5) {
					d += 'C '+(breastTop.x-breastSize*breastProjection*Math.sin(breastAngle/180*Math.PI)*0.55)+','+(breastTop.y-breastSize*breastProjection*Math.cos(breastAngle/180*Math.PI)*0.55)+' '+(farBreastCenter.x+pecWidth*0.5)+','+(farBreastCenter.y-pecHeight*0.5)+' '+(farBreastCenter.x+pecWidth*0.5)+','+(farBreastCenter.y-pecHeight*0.5)+' ';
				};
				breastPath.setAttribute('d',d);
				var breastClipPath = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
				defs.appendChild(breastClipPath);
				breastClipPath.id = 'farBreast'+b+'ClipPath_'+this.id;
				breastClipPath.appendChild(farPec.cloneNode(true));
				breastClipPath.appendChild(breastPath.cloneNode(true));
				var areolaCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
				farBreast.appendChild(areolaCircle);
				areolaCircle.setAttribute('cx',areolaCenter.x);
				areolaCircle.setAttribute('cy',areolaCenter.y);
				areolaCircle.setAttribute('r',areolaeRadius);
				areolaCircle.setAttribute('fill',areolaeTone);
				areolaCircle.setAttribute('stroke','none');
				areolaCircle.setAttribute('clip-path','url(#farBreast'+b+'ClipPath_'+this.id+")");
				
				if (nipplesShowing) {
					var nippleBaseAngle = -1*breastAngle+90;
					var nippleTipAngle = Math.min(85,nippleBaseAngle+this.bio('nippleLength')*3);

					var nippleBaseTop = {
						x: areolaCenter.x + Math.sin(nippleBaseAngle/(180/Math.PI))*nippleWidth*0.5,
						y: areolaCenter.y - Math.cos(nippleBaseAngle/(180/Math.PI))*nippleWidth*0.5,
					};
					var nippleBaseBottom = {
						x: areolaCenter.x - Math.sin(nippleBaseAngle/(180/Math.PI))*nippleWidth*0.5,
						y: areolaCenter.y + Math.cos(nippleBaseAngle/(180/Math.PI))*nippleWidth*0.5,
					};
					var nippleTipTop = {
						x: areolaCenter.x + Math.sin((90+nippleTipAngle)/(180/Math.PI))*nippleLength + Math.sin((nippleTipAngle)/(180/Math.PI))*nippleWidth*0.5,
						y: areolaCenter.y - Math.cos((90+nippleTipAngle)/(180/Math.PI))*nippleLength - Math.cos((nippleTipAngle)/(180/Math.PI))*nippleWidth*0.5,
					};
					var nippleTipBottom = {
						x: areolaCenter.x + Math.sin((90+nippleTipAngle)/(180/Math.PI))*nippleLength - Math.sin((nippleTipAngle)/(180/Math.PI))*nippleWidth*0.5,
						y: areolaCenter.y - Math.cos((90+nippleTipAngle)/(180/Math.PI))*nippleLength + Math.cos((nippleTipAngle)/(180/Math.PI))*nippleWidth*0.5,
					};
					var nipplePath = document.createElementNS('http://www.w3.org/2000/svg','path');
					farBreast.appendChild(nipplePath);
					nipplePath.setAttribute('fill',areolaeTone);
					nipplePath.setAttribute('stroke-linejoin','round');
					nipplePath.setAttribute('stroke-linecap','round');
					nipplePath.setAttribute('stroke-width',1.5);
					var d = 'M '+nippleBaseTop.x+','+nippleBaseTop.y+' ';
					d += 'C '+(nippleBaseTop.x+Math.sin((nippleBaseAngle+90)/(180/Math.PI))*nippleLength*0.25)+','+(nippleBaseTop.y - Math.cos((nippleBaseAngle+90)/(180/Math.PI))*nippleLength*0.25)+' '+(nippleTipTop.x)+','+(nippleTipTop.y)+' '+nippleTipTop.x+','+nippleTipTop.y+' ';
					d += 'L '+nippleTipBottom.x+','+nippleTipBottom.y+' ';
					d += 'C '+nippleTipBottom.x+','+nippleTipBottom.y+' '+(nippleBaseBottom.x+Math.sin((nippleBaseAngle+90)/(180/Math.PI))*nippleLength*0.25)+','+(nippleBaseBottom.y - Math.cos((nippleBaseAngle+90)/(180/Math.PI))*nippleLength*0.25)+' '+nippleBaseBottom.x+','+nippleBaseBottom.y+' ';
					nipplePath.setAttribute('d',d);
				
					var nippleGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
					farBreast.appendChild(nippleGroup);
					nippleGroup.setAttribute('transform','rotate('+nippleTipAngle+' '+areolaCenter.x+' '+areolaCenter.y+')');
				
					var nippleTip = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
					nippleGroup.appendChild(nippleTip);
					nippleTip.setAttribute('fill',areolaeTone);
					nippleTip.setAttribute('cx',areolaCenter.x+nippleLength);
					nippleTip.setAttribute('cy',areolaCenter.y);
					nippleTip.setAttribute('rx',nippleWidth*0.35);
					nippleTip.setAttribute('ry',nippleWidth*0.5);

					if (this.biometrics.nippleLength>0) {
						nipplePath.setAttribute('stroke','black');
						nippleTip.setAttribute('stroke','black');
					};
				
					if (this.biometrics.nippleWidth>2) {
						var nippleDuct = document.createElementNS('http://www.w3.org/2000/svg','path');
						nippleGroup.appendChild(nippleDuct);
						nippleDuct.setAttribute('fill','none');
						nippleDuct.setAttribute('stroke','black');
						nippleDuct.setAttribute('stroke-linecap','round');
						var d = 'M '+(areolaCenter.x+nippleLength)+','+(areolaCenter.y+nippleWidth*0.2)+' ';
						d += 'Q '+(areolaCenter.x+nippleLength-nippleWidth*0.15)+','+areolaCenter.y+' '+(areolaCenter.x+nippleLength)+','+(areolaCenter.y-nippleWidth*0.2)+' ';
						nippleDuct.setAttribute('d',d);
					};
				};			
				
			} else { // near projecting breast
				curveCenter = {
					x: Math.min(nearBreastCenter.x-pecWidth*0.25,pecStart.x-breastSize),
					y: nearBreastCenter.y + breastSize*0.5,
				};
				nearBreastBottom = {
					x: curveCenter.x+breastSize*Math.cos(breastAngle/180*Math.PI),
					y: curveCenter.y+breastSize*Math.sin(breastAngle/180*Math.PI),
				};
				breastPoint = {
					x: curveCenter.x-breastSize*breastProjection*Math.sin(breastAngle/180*Math.PI),
					y: curveCenter.y+breastSize*breastProjection*Math.cos(breastAngle/180*Math.PI),
				};
				breastTop = {
					x: curveCenter.x-breastSize*Math.cos(breastAngle/180*Math.PI),
					y: Math.max(nearCollarboneStart.y+torsoHeight*0.01,curveCenter.y-breastSize*Math.sin(breastAngle/180*Math.PI)),
				};
				areolaCenter = {
					x: curveCenter.x*0.4+breastPoint.x*0.6,
					y: curveCenter.y*0.4+breastPoint.y*0.6,
				};

// 				var breastEllipse = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
// 				sketchGroup.appendChild(breastEllipse);
// 				breastEllipse.setAttribute('cx',curveCenter.x);
// 				breastEllipse.setAttribute('cy',curveCenter.y);
// 				breastEllipse.setAttribute('rx',breastSize);
// 				breastEllipse.setAttribute('ry',breastSize*breastProjection);
// 				breastEllipse.setAttribute('transform','rotate('+(breastAngle)+' '+curveCenter.x+' '+curveCenter.y+')');
// 				breastEllipse.setAttribute('stroke','green');
// 				breastEllipse.setAttribute('fill','none');
				
				var breastPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				nearBreast.appendChild(breastPath);
				d = 'M '+pecStart.x+','+pecStart.y+' ';
				d += 'C '+pecStart.x+','+(pecStart.y+pecInnerRadius*0.55)+' '+(nearBreastBottom.x+0.55*breastSize*breastProjection*Math.sin(breastAngle/180*Math.PI))+','+(nearBreastBottom.y-0.55*breastSize*breastProjection*Math.cos(breastAngle/180*Math.PI))+" "+nearBreastBottom.x+","+nearBreastBottom.y+" ";
				d += 'C '+(nearBreastBottom.x-0.55*breastSize*breastProjection*Math.sin(breastAngle/180*Math.PI))+','+(nearBreastBottom.y+0.55*breastSize*breastProjection*Math.cos(breastAngle/180*Math.PI))+' '+(breastPoint.x+0.55*breastSize*Math.cos(breastAngle/180*Math.PI))+','+(breastPoint.y+0.55*breastSize*Math.sin(breastAngle/180*Math.PI))+' '+breastPoint.x+','+breastPoint.y+' ';
				d += 'C '+(breastPoint.x-0.55*breastSize*Math.cos(breastAngle/180*Math.PI))+','+(breastPoint.y-0.55*breastSize*Math.sin(breastAngle/180*Math.PI))+' '+(breastTop.x-breastSize*breastProjection*Math.sin(breastAngle/180*Math.PI)*0.55)+','+(breastTop.y+breastSize*breastProjection*Math.cos(breastAngle/180*Math.PI)*0.55)+' '+breastTop.x+','+breastTop.y+' ';
				if (breastTop.x < nearBreastCenter.x-pecWidth*0.5) {
					d += 'C '+(breastTop.x+breastSize*breastProjection*Math.sin(breastAngle/180*Math.PI)*0.55)+','+(breastTop.y-breastSize*breastProjection*Math.cos(breastAngle/180*Math.PI)*0.55)+' '+(nearBreastCenter.x-pecWidth*0.5)+','+(nearBreastCenter.y-pecHeight*0.5)+' '+(nearBreastCenter.x-pecWidth*0.5)+','+(nearBreastCenter.y-pecHeight*0.5)+' ';
				};
				breastPath.setAttribute('d',d);
				
				var breastClipPath = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
				defs.appendChild(breastClipPath);
				breastClipPath.id = 'nearBreast'+b+'ClipPath_'+this.id;
				breastClipPath.appendChild(nearPec.cloneNode(true));
				breastClipPath.appendChild(breastPath.cloneNode(true));
				var areolaCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
				nearBreast.appendChild(areolaCircle);
				areolaCircle.setAttribute('cx',areolaCenter.x);
				areolaCircle.setAttribute('cy',areolaCenter.y);
				areolaCircle.setAttribute('r',areolaeRadius);
				areolaCircle.setAttribute('fill',areolaeTone);
				areolaCircle.setAttribute('stroke','none');
				areolaCircle.setAttribute('clip-path','url(#nearBreast'+b+'ClipPath_'+this.id+")");
				
				if (nipplesShowing) {
					var nippleBaseAngle = breastAngle-90;
					var nippleTipAngle = Math.max(-85,nippleBaseAngle+this.bio('nippleLength')*-3);

					var nippleBaseTop = {
						x: areolaCenter.x + Math.sin(nippleBaseAngle/(180/Math.PI))*nippleWidth*0.5,
						y: areolaCenter.y - Math.cos(nippleBaseAngle/(180/Math.PI))*nippleWidth*0.5,
					};
					var nippleBaseBottom = {
						x: areolaCenter.x - Math.sin(nippleBaseAngle/(180/Math.PI))*nippleWidth*0.5,
						y: areolaCenter.y + Math.cos(nippleBaseAngle/(180/Math.PI))*nippleWidth*0.5,
					};
					var nippleTipTop = {
						x: areolaCenter.x + Math.sin((90+nippleTipAngle)/(180/Math.PI))*nippleLength + Math.sin((nippleTipAngle)/(180/Math.PI))*nippleWidth*0.5,
						y: areolaCenter.y - Math.cos((90+nippleTipAngle)/(180/Math.PI))*nippleLength - Math.cos((nippleTipAngle)/(180/Math.PI))*nippleWidth*0.5,
					};
					var nippleTipBottom = {
						x: areolaCenter.x + Math.sin((90+nippleTipAngle)/(180/Math.PI))*nippleLength - Math.sin((nippleTipAngle)/(180/Math.PI))*nippleWidth*0.5,
						y: areolaCenter.y - Math.cos((90+nippleTipAngle)/(180/Math.PI))*nippleLength + Math.cos((nippleTipAngle)/(180/Math.PI))*nippleWidth*0.5,
					};
					var nipplePath = document.createElementNS('http://www.w3.org/2000/svg','path');
					nearBreast.appendChild(nipplePath);
					nipplePath.setAttribute('fill',areolaeTone);
					nipplePath.setAttribute('stroke-linejoin','round');
					nipplePath.setAttribute('stroke-linecap','round');
					nipplePath.setAttribute('stroke-width',1.5);
					var d = 'M '+nippleBaseTop.x+','+nippleBaseTop.y+' ';
					d += 'C '+(nippleBaseTop.x+Math.sin((nippleBaseAngle+90)/(180/Math.PI))*nippleLength*0.25)+','+(nippleBaseTop.y - Math.cos((nippleBaseAngle+90)/(180/Math.PI))*nippleLength*0.25)+' '+(nippleTipTop.x)+','+(nippleTipTop.y)+' '+nippleTipTop.x+','+nippleTipTop.y+' ';
					d += 'L '+nippleTipBottom.x+','+nippleTipBottom.y+' ';
					d += 'C '+nippleTipBottom.x+','+nippleTipBottom.y+' '+(nippleBaseBottom.x+Math.sin((nippleBaseAngle+90)/(180/Math.PI))*nippleLength*0.25)+','+(nippleBaseBottom.y - Math.cos((nippleBaseAngle+90)/(180/Math.PI))*nippleLength*0.25)+' '+nippleBaseBottom.x+','+nippleBaseBottom.y+' ';
					nipplePath.setAttribute('d',d);
				
					var nippleGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
					nearBreast.appendChild(nippleGroup);
					nippleGroup.setAttribute('transform','rotate('+nippleTipAngle+' '+areolaCenter.x+' '+areolaCenter.y+')');
				
					var nippleTip = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
					nippleGroup.appendChild(nippleTip);
					nippleTip.setAttribute('fill',areolaeTone);
					nippleTip.setAttribute('cx',areolaCenter.x+nippleLength);
					nippleTip.setAttribute('cy',areolaCenter.y);
					nippleTip.setAttribute('rx',nippleWidth*0.35);
					nippleTip.setAttribute('ry',nippleWidth*0.5);

					if (this.biometrics.nippleLength>0) {
						nipplePath.setAttribute('stroke','black');
						nippleTip.setAttribute('stroke','black');
					};
				
					if (this.biometrics.nippleWidth>2) {
						var nippleDuct = document.createElementNS('http://www.w3.org/2000/svg','path');
						nippleGroup.appendChild(nippleDuct);
						nippleDuct.setAttribute('fill','none');
						nippleDuct.setAttribute('stroke','black');
						nippleDuct.setAttribute('stroke-linecap','round');
						var d = 'M '+(areolaCenter.x+nippleLength)+','+(areolaCenter.y+nippleWidth*0.2)+' ';
						d += 'Q '+(areolaCenter.x+nippleLength-nippleWidth*0.15)+','+areolaCenter.y+' '+(areolaCenter.x+nippleLength)+','+(areolaCenter.y-nippleWidth*0.2)+' ';
						nippleDuct.setAttribute('d',d);
					};
				};			
			};

			// Round Breast
			if (torsoFacing == -1) {
				// far round breast
				curveCenter = {
					x: Math.min(farBreastCenter.x,farArmpit.x-breastSize*1.2),
					y: farBreastCenter.y + breastSize*0.5 + breastSize*(breastProjection-1)*(90-breastAngle)/90,
				};
				breastTop = {
					x: curveCenter.x,
					y: Math.max(farCollarboneStart.y+torsoHeight*0.01,curveCenter.y-breastSize),
				};
				areolaCenter.x = curveCenter.x-breastSize*0.1;
				
// 				var breastEllipse = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
// 				sketchGroup.appendChild(breastEllipse);
// 				breastEllipse.setAttribute('cx',curveCenter.x);
// 				breastEllipse.setAttribute('cy',curveCenter.y);
// 				breastEllipse.setAttribute('rx',breastSize);
// 				breastEllipse.setAttribute('ry',breastSize);
// 				breastEllipse.setAttribute('stroke','green');
// 				breastEllipse.setAttribute('fill','none');

				var breastPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				farBreast.appendChild(breastPath);
				d = "M "+farPecEnd.x+","+farPecEnd.y+" ";
				if (curveCenter.x-breastSize < farPecEnd.x) {
					d += "C "+farPecEnd.x+","+(farPecEnd.y)+" "+(curveCenter.x-breastSize)+","+(curveCenter.y-breastSize*0.55)+" "+(curveCenter.x-breastSize)+","+(curveCenter.y)+" ";
					d += "C "+(curveCenter.x-breastSize)+","+(curveCenter.y+breastSize*0.55)+" "+(curveCenter.x-breastSize*0.7)+","+(curveCenter.y+breastSize)+" "+(curveCenter.x)+","+(curveCenter.y+breastSize)+" ";
				} else {
					d += "L "+farPecEnd.x+","+curveCenter.y+" ";
					d += "C "+farPecEnd.x+","+(curveCenter.y+breastSize*0.55)+" "+(curveCenter.x-breastSize*0.7)+","+(curveCenter.y+breastSize)+" "+(curveCenter.x)+","+(curveCenter.y+breastSize)+" ";
				};
				if (curveCenter.x+breastSize > pecStart.x) {
					d += "C "+(curveCenter.x+breastSize*0.7)+","+(curveCenter.y+breastSize)+" "+(curveCenter.x+breastSize)+","+(curveCenter.y+breastSize*0.55)+" "+(curveCenter.x+breastSize)+","+(curveCenter.y)+" ";
				} else {
					d += "C "+(curveCenter.x+breastSize*0.7)+","+(curveCenter.y+breastSize)+" "+(pecStart.x)+","+(curveCenter.y+breastSize*0.55)+" "+(pecStart.x)+","+(curveCenter.y)+" ";
				};
				d += "C "+(curveCenter.x+breastSize)+","+(curveCenter.y-breastSize*0.55)+" "+(breastTop.x+breastSize*0.55)+","+(breastTop.y)+" "+(breastTop.x)+","+(breastTop.y)+" ";
				breastPath.setAttribute('d',d);
				
				var breastClipPath = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
				defs.appendChild(breastClipPath);
				breastClipPath.id = 'farBreast'+b+'ClipPath_'+this.id;
				breastClipPath.appendChild(farPec.cloneNode(true));
				breastClipPath.appendChild(breastPath.cloneNode(true));	
				var areolaCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
				farBreast.appendChild(areolaCircle);
				areolaCircle.setAttribute('cx',areolaCenter.x);
				areolaCircle.setAttribute('cy',areolaCenter.y);
				areolaCircle.setAttribute('r',areolaeRadius);
				areolaCircle.setAttribute('fill',areolaeTone);
				areolaCircle.setAttribute('stroke','none');
				areolaCircle.setAttribute('clip-path','url(#farBreast'+b+'ClipPath_'+this.id+")");

				if (nipplesShowing) {
					var nippleTipCenter = {
						x: areolaCenter.x,
						y: areolaCenter.y - Math.cos((90+nippleTipAngle)/(180/Math.PI))*nippleLength,
					};

					var nipplePath = document.createElementNS('http://www.w3.org/2000/svg','path');
					farBreast.appendChild(nipplePath);
					var fnl = nippleLength * Math.cos(breastAngle/180*Math.PI);
					nipplePath.setAttribute('fill',areolaeTone);
					d = 'M '+(areolaCenter.x+nippleWidth/2)+','+(areolaCenter.y)+' ';
					d += 'L '+(nippleTipCenter.x+nippleWidth*0.5)+','+(nippleTipCenter.y)+' ';
					d += 'L '+(nippleTipCenter.x-nippleWidth*0.5)+','+(nippleTipCenter.y)+' ';
					d += 'L '+(areolaCenter.x-nippleWidth/2)+','+(areolaCenter.y)+' ';
					nipplePath.setAttribute('d',d);

					var nippleGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
					farBreast.appendChild(nippleGroup);

					var nippleTip = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
					nippleGroup.appendChild(nippleTip);
					nippleTip.setAttribute('fill',areolaeTone);
					nippleTip.setAttribute('cx',nippleTipCenter.x);
					nippleTip.setAttribute('cy',nippleTipCenter.y);
					nippleTip.setAttribute('rx',nippleWidth*0.5);
					nippleTip.setAttribute('ry',nippleWidth*0.45);
				
					if (this.biometrics.nippleLength>0) {
						nipplePath.setAttribute('stroke','black');
						nippleTip.setAttribute('stroke','black');
					};

					if (this.biometrics.nippleWidth>2) {
						var nippleDuct = document.createElementNS('http://www.w3.org/2000/svg','path');
						nippleGroup.appendChild(nippleDuct);
						nippleDuct.setAttribute('fill','none');
						nippleDuct.setAttribute('stroke','black');
						nippleDuct.setAttribute('stroke-linecap','round');
						var d = 'M '+(nippleTipCenter.x)+','+(nippleTipCenter.y+nippleWidth*0.2)+' ';
						d += 'Q '+(nippleTipCenter.x-nippleWidth*0.15)+','+nippleTipCenter.y+' '+nippleTipCenter.x+','+(nippleTipCenter.y-nippleWidth*0.2)+' ';
						nippleDuct.setAttribute('d',d);
						nippleDuct.setAttribute('transform','rotate(90 '+nippleTipCenter.x+' '+nippleTipCenter.y+')');
					};
				};
			} else {
				// near round breast
				curveCenter = {
					x: Math.max(nearBreastCenter.x,nearArmpit.x+breastSize*1.2),
					y: nearBreastCenter.y + breastSize*0.5 + breastSize*(breastProjection-1)*(90-breastAngle)/90,
				};
				breastTop = {
					x: curveCenter.x,
					y: Math.max(nearCollarboneStart.y+torsoHeight*0.01,curveCenter.y-breastSize),
				};
				areolaCenter.x = curveCenter.x+breastSize*0.1;
				
// 				var breastEllipse = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
// 				sketchGroup.appendChild(breastEllipse);
// 				breastEllipse.setAttribute('cx',curveCenter.x);
// 				breastEllipse.setAttribute('cy',curveCenter.y);
// 				breastEllipse.setAttribute('rx',breastSize);
// 				breastEllipse.setAttribute('ry',breastSize);
// 				breastEllipse.setAttribute('stroke','green');
// 				breastEllipse.setAttribute('fill','none');

				var breastPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				nearBreast.appendChild(breastPath);
				d = "M "+nearPecEnd.x+","+nearPecEnd.y+" ";
				if (curveCenter.x-breastSize < nearPecEnd.x) {
					d += "C "+nearPecEnd.x+","+(nearPecEnd.y)+" "+(curveCenter.x-breastSize)+","+(curveCenter.y-breastSize*0.55)+" "+(curveCenter.x-breastSize)+","+(curveCenter.y)+" ";
					d += "C "+(curveCenter.x-breastSize)+","+(curveCenter.y+breastSize*0.55)+" "+(curveCenter.x-breastSize*0.7)+","+(curveCenter.y+breastSize)+" "+(curveCenter.x)+","+(curveCenter.y+breastSize)+" ";
				} else {
					d += "L "+nearPecEnd.x+","+curveCenter.y+" ";
					d += "C "+nearPecEnd.x+","+(curveCenter.y+breastSize*0.55)+" "+(curveCenter.x-breastSize*0.7)+","+(curveCenter.y+breastSize)+" "+(curveCenter.x)+","+(curveCenter.y+breastSize)+" ";
				};
				if (curveCenter.x+breastSize > pecStart.x) {
					d += "C "+(curveCenter.x+breastSize*0.7)+","+(curveCenter.y+breastSize)+" "+(curveCenter.x+breastSize)+","+(curveCenter.y+breastSize*0.55)+" "+(curveCenter.x+breastSize)+","+(curveCenter.y)+" ";
				} else {
					d += "C "+(curveCenter.x+breastSize*0.7)+","+(curveCenter.y+breastSize)+" "+(pecStart.x)+","+(curveCenter.y+breastSize*0.55)+" "+(pecStart.x)+","+(curveCenter.y)+" ";
				};
				d += "C "+(curveCenter.x+breastSize)+","+(curveCenter.y-breastSize*0.55)+" "+(breastTop.x+breastSize*0.55)+","+(breastTop.y)+" "+(breastTop.x)+","+(breastTop.y)+" ";
				breastPath.setAttribute('d',d);
				
				var breastClipPath = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
				defs.appendChild(breastClipPath);
				breastClipPath.id = 'nearBreast'+b+'ClipPath_'+this.id;
				breastClipPath.appendChild(nearPec.cloneNode(true));
				breastClipPath.appendChild(breastPath.cloneNode(true));	
				var areolaCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
				nearBreast.appendChild(areolaCircle);
				areolaCircle.setAttribute('cx',areolaCenter.x);
				areolaCircle.setAttribute('cy',areolaCenter.y);
				areolaCircle.setAttribute('r',areolaeRadius);
				areolaCircle.setAttribute('fill',areolaeTone);
				areolaCircle.setAttribute('stroke','none');
				areolaCircle.setAttribute('clip-path','url(#nearBreast'+b+'ClipPath_'+this.id+")");

				if (nipplesShowing) {
					var nippleTipCenter = {
						x: areolaCenter.x,
						y: areolaCenter.y - Math.cos((90+nippleTipAngle)/(180/Math.PI))*nippleLength,
					};

					var nipplePath = document.createElementNS('http://www.w3.org/2000/svg','path');
					nearBreast.appendChild(nipplePath);
					var fnl = nippleLength * Math.cos(breastAngle/180*Math.PI);
					nipplePath.setAttribute('fill',areolaeTone);
					d = 'M '+(areolaCenter.x+nippleWidth/2)+','+(areolaCenter.y)+' ';
					d += 'L '+(nippleTipCenter.x+nippleWidth*0.5)+','+(nippleTipCenter.y)+' ';
					d += 'L '+(nippleTipCenter.x-nippleWidth*0.5)+','+(nippleTipCenter.y)+' ';
					d += 'L '+(areolaCenter.x-nippleWidth/2)+','+(areolaCenter.y)+' ';
					nipplePath.setAttribute('d',d);

					var nippleGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
					nearBreast.appendChild(nippleGroup);

					var nippleTip = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
					nippleGroup.appendChild(nippleTip);
					nippleTip.setAttribute('fill',areolaeTone);
					nippleTip.setAttribute('cx',nippleTipCenter.x);
					nippleTip.setAttribute('cy',nippleTipCenter.y);
					nippleTip.setAttribute('rx',nippleWidth*0.5);
					nippleTip.setAttribute('ry',nippleWidth*0.45);
				
					if (this.biometrics.nippleLength>0) {
						nipplePath.setAttribute('stroke','black');
						nippleTip.setAttribute('stroke','black');
					};

					if (this.biometrics.nippleWidth>2) {
						var nippleDuct = document.createElementNS('http://www.w3.org/2000/svg','path');
						nippleGroup.appendChild(nippleDuct);
						nippleDuct.setAttribute('fill','none');
						nippleDuct.setAttribute('stroke','black');
						nippleDuct.setAttribute('stroke-linecap','round');
						var d = 'M '+(nippleTipCenter.x)+','+(nippleTipCenter.y+nippleWidth*0.2)+' ';
						d += 'Q '+(nippleTipCenter.x-nippleWidth*0.15)+','+nippleTipCenter.y+' '+nippleTipCenter.x+','+(nippleTipCenter.y-nippleWidth*0.2)+' ';
						nippleDuct.setAttribute('d',d);
						nippleDuct.setAttribute('transform','rotate(90 '+nippleTipCenter.x+' '+nippleTipCenter.y+')');
					};
				};

			};
		};
				
		var belly = document.createElementNS('http://www.w3.org/2000/svg','g');
		belly.id = 'belly_'+this.id;
		belly.setAttribute('stroke','inherit');
		belly.setAttribute('fill',skinTone);

		var bellySize = this.bio('belly') * totalHeight*0.1;
		var bellyFacing = 1;
		if (!upperBodyAngle) {
			bellyFacing = -1;
		};
		var nearTopAbRoll = {
			cx: neckBase.x*0.5 + bellyFacing * bellySize * 0.1 - pelvisWidth*0.2,
			cy: (nearArmpit.y*0.5 + nearHipJoint.y*0.5) + bellySize*0.075,
			width: (shouldersWidth*0.3+pelvisWidth*0.7)*0.4 + bellySize * 0.35,
			height: torsoHeight * 0.2 * (1+this.bio('belly')*0.5),
			rotation: Math.min(4,this.bio('belly'))*6,
		};
		var farTopAbRoll = {
			cx: neckBase.x*0.5 + bellyFacing * bellySize * 0.1 + pelvisWidth*0.2,
			cy: (farArmpit.y*0.5 + farHipJoint.y*0.5) + bellySize*0.075,
			width: (shouldersWidth*0.3+pelvisWidth*0.7)*0.4 + bellySize * 0.35,
			height: torsoHeight * 0.2 * (1+this.bio('belly')*0.5),
			rotation: Math.min(4,this.bio('belly'))*-6,
		};
		var nearBottomAbRoll = {
			cx: neckBase.x*0.3 + bellyFacing * bellySize * 0.1 - pelvisWidth*0.2,
			cy: (nearArmpit.y*0.3 + nearHipJoint.y*0.7) + bellySize*0.1,
			width: (shouldersWidth*0.1+pelvisWidth*0.9)*0.3 + bellySize * 0.6,
			height: torsoHeight * 0.2 * (1+this.bio('belly')*0.5),
			rotation: Math.min(4,this.bio('belly'))*6,
		};
		var farBottomAbRoll = {
			cx: neckBase.x*0.3 + bellyFacing * bellySize * 0.1 + pelvisWidth*0.2,
			cy: (farArmpit.y*0.3 + farHipJoint.y*0.7) + bellySize*0.1,
			width: (shouldersWidth*0.1+pelvisWidth*0.9)*0.3 + bellySize * 0.6,
			height: torsoHeight * 0.2 * (1+this.bio('belly')*0.5),
			rotation: Math.min(4,this.bio('belly'))*-6,
		};
		var abRolls = [
			farBottomAbRoll,
			nearBottomAbRoll,
			farTopAbRoll,
			nearTopAbRoll,
		];
		if (bellyFacing < 0) {
			abRolls = [
				nearBottomAbRoll,
				farBottomAbRoll,
				nearTopAbRoll,
				farTopAbRoll,
			];
		};
		var abRollCorner = 0.1 + this.bio('belly')*0.2;
		for (var abRoll of abRolls) {
			abRoll.x = abRoll.cx - abRoll.width/2;
			abRoll.y = abRoll.cy - abRoll.height/2;
			abRoll.rx = abRoll.width * abRollCorner;
			abRoll.ry = abRoll.height * abRollCorner;
			var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
			belly.appendChild(rect);
			rect.setAttribute('x',abRoll.x);
			rect.setAttribute('y',abRoll.y);
			rect.setAttribute('rx',abRoll.rx);
			rect.setAttribute('ry',abRoll.ry);
			rect.setAttribute('width',abRoll.width);
			rect.setAttribute('height',abRoll.height);
			rect.setAttribute('transform','rotate('+abRoll.rotation+' '+abRoll.cx+' '+abRoll.cy+')');
			rect.setAttribute('fill','inherit');
		};
		var polygon = document.createElementNS('http://www.w3.org/2000/svg','polygon');
		belly.appendChild(polygon);
		polygon.id = 'bellyStrokeCover_'+this.id;
		var points = [
			{x:nearBottomAbRoll.cx,y:nearBottomAbRoll.cy},
			{x:nearHipTop.x,y:nearBottomAbRoll.cy},
			{x:nearArmpit.x,y:nearArmpit.y},
			{x:farArmpit.x,y:farArmpit.y},
			{x:farTopAbRoll.cx,y:farTopAbRoll.cy},
		];
		if (bellyFacing < 0) {
			points = [
				{x:farBottomAbRoll.cx,y:farBottomAbRoll.cy},
				{x:farHipTop.x,y:farBottomAbRoll.cy},
				{x:farArmpit.x,y:farArmpit.y},
				{x:nearArmpit.x,y:nearArmpit.y},
				{x:nearTopAbRoll.cx,y:nearTopAbRoll.cy},
			];
		};
		var pointsString = "";
		for (var point of points) {
			pointsString += point.x+","+point.y+" ";
		};
		polygon.setAttribute('points',pointsString);
		polygon.setAttribute('stroke','none');
		var pregSize = Math.max(0,this.biometrics.pregnancy*torsoHeight*0.1);
		var pregStats = {
			cx: neckBase.x*0.3 + bellyFacing * ( bellySize * 0.25 + pregSize * 0.1 ),
			cy: spineBase.y - torsoHeight * 0.2,
			height: Math.min(pregSize,torsoHeight*0.4),
			width: bellyFacing * Math.min(pregSize,pelvisWidth*0.7),
			depth: bellyFacing * pregSize,
		};
		if (this.biometrics.pregnancy > 0) {
			pregStats.width = bellyFacing * Math.min(pregSize,Math.abs(pregStats.cx)+pelvisWidth*0.5);
			var pregnancy = document.createElementNS('http://www.w3.org/2000/svg','path');
			belly.appendChild(pregnancy);
			var d = "M "+(pregStats.cx-pregStats.width)+","+pregStats.cy+" ";
			d += "C "+(pregStats.cx-pregStats.width)+","+(pregStats.cy+0.55*pregStats.height)+" "+(pregStats.cx-pregStats.width*0.55)+","+(pregStats.cy+pregStats.height)+" "+pregStats.cx+","+(pregStats.cy+pregStats.height);
			d += "C "+(pregStats.cx+0.55*pregStats.depth)+","+(pregStats.cy+pregStats.height)+" "+(pregStats.cx+pregStats.depth)+","+(pregStats.cy+0.55*pregStats.height)+" "+(pregStats.cx+pregStats.depth)+","+pregStats.cy+" ";
			d += "C "+(pregStats.cx+pregStats.depth)+","+(pregStats.cy-0.55*pregStats.height)+" "+(pregStats.cx+pregStats.depth*0.55)+","+(pregStats.cy-pregStats.height)+" "+pregStats.cx+","+(pregStats.cy-pregStats.height)+" ";
			pregnancy.setAttribute('d',d);
		};
		var navel = {
			x: bellyFacing*bellySize*0.05 + pregStats.depth*0.9 + (nearBottomAbRoll.cx+farBottomAbRoll.cx+nearTopAbRoll.cx+farTopAbRoll.cx)/4,
			y: bellySize*0.05 + (nearBottomAbRoll.cy+farBottomAbRoll.cy+nearTopAbRoll.cy+farTopAbRoll.cy)/4,
		};
		var bellyButton = document.createElementNS('http://www.w3.org/2000/svg','path');
		belly.appendChild(bellyButton);
		if (this.biometrics.pregnancy > 3) {
			var r = totalHeight*0.01*bellyFacing;
			var d = "M "+navel.x+","+(navel.y-r);
			d += "C "+(navel.x+r*0.55)+","+(navel.y-r)+" "+(navel.x+r)+","+(navel.y-r*0.55)+" "+(navel.x+r)+","+navel.y+" ";
			d += "C "+(navel.x+r)+","+(navel.y+r*0.55)+" "+(navel.x+r*0.55)+","+(navel.y+r)+" "+(navel.x)+","+(navel.y+r)+" ";
		} else {
			var r = totalHeight*-0.01*bellyFacing;
			var d = "M "+navel.x+","+(navel.y-r);
			d += "C "+(navel.x+r*0.55*0.5)+","+(navel.y-r)+" "+(navel.x+r*0.5)+","+(navel.y-r*0.55)+" "+(navel.x+r*0.5)+","+navel.y+" ";
			d += "C "+(navel.x+r*0.5)+","+(navel.y+r*0.55)+" "+(navel.x+r*0.55*0.5)+","+(navel.y+r)+" "+(navel.x)+","+(navel.y+r)+" ";
			var rotation = Math.max(0,Math.min(75,5*(this.biometrics.belly+10)))*bellyFacing;
			bellyButton.setAttribute('transform','rotate('+rotation+' '+navel.x+' '+navel.y+')');
		};
		bellyButton.setAttribute('d',d);
		bellyButton.setAttribute('stroke','black');
		bellyButton.setAttribute('stroke-linecap','round');
		var bellyBottom = Math.max(nearBottomAbRoll.y+nearBottomAbRoll.width*0.6,farBottomAbRoll.y+farBottomAbRoll.width*0.6,pregStats.cy+pregStats.height);
		
		var genitals = document.createElementNS('http://www.w3.org/2000/svg','g');
		genitals.id = 'genitals_'+this.id;
		genitals.setAttribute('fill',skinTone);
		genitals.setAttribute('stroke','inherit');
		var genitalsBacking = document.createElementNS('http://www.w3.org/2000/svg','circle');
// 		genitals.appendChild(genitalsBacking);
		genitalsBacking.setAttribute('stroke','none');
		genitalsBacking.setAttribute('cx',genitalsTop.x);
		genitalsBacking.setAttribute('cy',genitalsTop.y);
		genitalsBacking.setAttribute('r',pelvisWidth*0.08);
		var genitalsHeight = genitalsBottom.y - genitalsTop.y;
		var labioscrotalDrop;
		if (genitalsHeight > labioscrotalSize * 1.2) {
			labioscrotalDrop = genitalsHeight * 0.5;
		} else {
			labioscrotalDrop = labioscrotalSize * 0.5;
		};
		var farScrotum = document.createElementNS('http://www.w3.org/2000/svg','path');
		genitals.appendChild(farScrotum);
		x = genitalsTop.x+genitalsFacing*labioscrotalSize/8;
		y = genitalsTop.y;
		d = 'M '+x+','+y+' ';
		c1x = x + genitalsFacing*labioscrotalSize/16;
		c1y = y + labioscrotalSize/4;
		x = x + labioscrotalSize/4 * genitalsFacing;
		y = y + labioscrotalDrop;
		c2x = x;
		c2y = y - labioscrotalSize/4;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y + labioscrotalSize/4;
		x = (x + labioscrotalSize * genitalsFacing * -0.25 + genitalsBottom.x)/2;
		y = y + labioscrotalDrop;
		c2x = x - genitalsFacing * labioscrotalSize * -0.25;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + genitalsFacing *labioscrotalSize * -0.25;
		c1y = y;
		x = genitalsBottom.x - labioscrotalSize*0.25*genitalsFacing;
		y = genitalsBottom.y;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		farScrotum.setAttribute('d',d);
		var nearScrotum = document.createElementNS('http://www.w3.org/2000/svg','path');
		genitals.appendChild(nearScrotum);
		nearScrotum.setAttribute('stroke','black');
		x = genitalsTop.x-genitalsFacing*labioscrotalSize/8;
		y = genitalsTop.y;
		d = 'M '+x+','+y+' ';
		c1x = x + genitalsFacing*labioscrotalSize/16;
		c1y = y + labioscrotalSize/4;
		x = x + labioscrotalSize/4 * genitalsFacing;
		y = y + labioscrotalDrop;
		c2x = x;
		c2y = y - labioscrotalSize/4;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y + labioscrotalSize/4;
		x = (x + labioscrotalSize * genitalsFacing * -0.25 + genitalsBottom.x)/2;
		y = y + labioscrotalDrop;
		c2x = x - genitalsFacing * labioscrotalSize * -0.25;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + genitalsFacing *labioscrotalSize * -0.25;
		c1y = y;
		x = genitalsBottom.x - labioscrotalSize*0.25*genitalsFacing;
		y = genitalsBottom.y;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = genitalsTop.x-genitalsFacing*pelvisWidth*0.5;
		y = genitalsTop.y;
 		c2x = x;
		c2y = y + genitalsBottom.y - genitalsTop.y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		nearScrotum.setAttribute('d',d);
				
		var phallus = document.createElementNS('http://www.w3.org/2000/svg','g');
		phallus.id = 'phallus_'+this.id;
		phallus.setAttribute('fill',skinTone);
		phallus.setAttribute('stroke','inherit');
		var phallusBase = document.createElementNS('http://www.w3.org/2000/svg','circle');
		phallus.appendChild(phallusBase);
		phallusBase.setAttribute('cx',genitalsTop.x);
		phallusBase.setAttribute('cy',Math.min((genitalsBottom.y + genitalsTop.y)/2,genitalsTop.y+phallusGirth/2));
		phallusBase.setAttribute('r',Math.min((genitalsBottom.y - genitalsTop.y)/2,phallusGirth*0.6));
		phallusBase.setAttribute('stroke','none');
		var shaft = document.createElementNS('http://www.w3.org/2000/svg','path');
		phallus.appendChild(shaft);
		var phallusHeadTop = {
			x:phallusTip.x,
			y:phallusTip.y,
		};
		var phallusHeadBottom = {
			x:phallusTip.x,
			y:phallusTip.y,
		};
		if (genitalsFacing > 0 && erectionAngle < Math.PI/2) {
			phallusHeadTop.x += 0.8 * glansSize * Math.cos(erectionAngle);
			phallusHeadTop.y -= 0.8 * glansSize * Math.sin(erectionAngle);
			phallusHeadBottom.x -= 0.8 * glansSize * Math.cos(erectionAngle);
			phallusHeadBottom.y += 0.8 * glansSize * Math.sin(erectionAngle);
		} else if (genitalsFacing > 0 && erectionAngle > Math.PI/2) {
			phallusHeadTop.x += 0.8 * glansSize * Math.cos(erectionAngle);
			phallusHeadTop.y -= 0.8 * glansSize * Math.sin(erectionAngle);
			phallusHeadBottom.x -= 0.8 * glansSize * Math.cos(erectionAngle);
			phallusHeadBottom.y += 0.8 * glansSize * Math.sin(erectionAngle);
		} else if (genitalsFacing < 0 && erectionAngle < Math.PI/2) {
			phallusHeadTop.x -= 0.8 * glansSize * Math.cos(erectionAngle);
			phallusHeadTop.y -= 0.8 * glansSize * Math.sin(erectionAngle);
			phallusHeadBottom.x += 0.8 * glansSize * Math.cos(erectionAngle);
			phallusHeadBottom.y += 0.8 * glansSize * Math.sin(erectionAngle);
		} else {
			phallusHeadTop.x -= 0.8 * glansSize * Math.cos(erectionAngle);
			phallusHeadTop.y -= 0.8 * glansSize * Math.sin(erectionAngle);
			phallusHeadBottom.x += 0.8 * glansSize * Math.cos(erectionAngle);
			phallusHeadBottom.y += 0.8 * glansSize * Math.sin(erectionAngle);
		}
		var erectionControl = (erectionAngle - Math.PI/2)*genitalsFacing*phallusGirth*0.5;
		erectionControl = Math.min(pelvisWidth/6,erectionControl);
		erectionControl = Math.max(pelvisWidth/-6,erectionControl);
		x = genitalsTop.x - erectionControl;
		y = genitalsTop.y;
		d = 'M '+x+','+y+' ';
		c1x = x + 0.3*phallusLength*genitalsFacing;
		c1y = y;
		x = phallusHeadTop.x;
		y = phallusHeadTop.y;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = phallusHeadBottom.x;
		y = phallusHeadBottom.y;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = genitalsTop.x + erectionControl;
		y = Math.min(genitalsTop.y + phallusGirth,genitalsBottom.y);
		c2x = x + 0.3*phallusLength*genitalsFacing;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		shaft.setAttribute('d',d);
		var glans = document.createElementNS('http://www.w3.org/2000/svg','path');
		phallus.appendChild(glans);
		x = phallusTip.x + glansSize;
		y = phallusTip.y - glansSize/3;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y + glansSize/3;
		x = phallusTip.x;
		y = phallusTip.y + glansSize;
		c2x = x + glansSize/4;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x - glansSize/4;
		c1y = y;
		x = phallusTip.x - glansSize;
		y = phallusTip.y - glansSize/3;
		c2x = x;
		c2y = y + glansSize/3;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y - phallusGirth/2;
		x = phallusTip.x + glansSize;
		y = phallusTip.y - glansSize/3;
		c2x = x;
		c2y = y - glansSize/2;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		glans.setAttribute('d',d);
		var erectionDegrees = erectionAngle * 180 / Math.PI;
		if (genitalsFacing == 1) {
			erectionDegrees = 360 - erectionDegrees;
		};
		glans.setAttribute('transform','rotate('+erectionDegrees+' '+phallusTip.x+' '+phallusTip.y+')');
				
		var farFoot = document.createElementNS('http://www.w3.org/2000/svg','g');
		farFoot.id = 'farFoot_'+this.id;
		farFoot.setAttribute('fill',skinTone);
		farFoot.setAttribute('stroke','inherit');
		var heel = document.createElementNS('http://www.w3.org/2000/svg','rect');
		farFoot.appendChild(heel);
		heel.setAttribute('x',farAnkle.x-totalHeight * 0.022);
		heel.setAttribute('y',farAnkle.y-totalHeight * 0.022);
		heel.setAttribute('width',totalHeight * 0.044);
		heel.setAttribute('height',totalHeight * 0.044);
		heel.setAttribute('rx',totalHeight * 0.02);
		heel.setAttribute('ry',totalHeight * 0.02);
		var footFront = document.createElementNS('http://www.w3.org/2000/svg','polyline');
		farFoot.appendChild(footFront);
		var footPoints = [
			{x:farAnkle.x,y:farAnkle.y-totalHeight * 0.022},
			{x:farToes.x,y:(farAnkle.y + 2*farToes.y)/3},
			farToes,
			{x:(farAnkle.x + 2*farToes.x)/3,y:farToes.y},
			{x:farAnkle.x,y:farAnkle.y+totalHeight * 0.022},
		];
		var footPointsString = '';
		for (var i=0;i<footPoints.length;i++) {
			footPointsString += footPoints[i].x + ',' + footPoints[i].y + ' ';
		};
		footFront.setAttribute('points',footPointsString);
		var bigToe = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farFoot.appendChild(bigToe);
		bigToe.setAttribute('cx',farToes.x);
		bigToe.setAttribute('cy',(farAnkle.y + 5*farToes.y)/6);
		bigToe.setAttribute('r',totalHeight * 0.011);
		var tendon = document.createElementNS('http://www.w3.org/2000/svg','polyline')
		farFoot.appendChild(tendon);
		var footPoints = [
			{x:(4*farAnkle.x+farKnee.x)/5,y:(4*farAnkle.y+farKnee.y)/5},
			{x:(farToes.x+2*farAnkle.x)/3,y:(farToes.y+2*farAnkle.y)/3},
			farAnkle,
		];
		var footPointsString = '';
		for (var i=0;i<footPoints.length;i++) {
			footPointsString += footPoints[i].x + ',' + footPoints[i].y + ' ';
		};
		tendon.setAttribute('points',footPointsString);
		var tilt = this.pos('farFootPoint') * -180/Math.PI / 6;
		heel.setAttribute('transform','rotate('+tilt+' '+farAnkle.x+' '+farAnkle.y+')');
		bigToe.setAttribute('transform','rotate('+tilt+' '+farAnkle.x+' '+farAnkle.y+')');
		footFront.setAttribute('transform','rotate('+tilt+' '+farAnkle.x+' '+farAnkle.y+')');
				
		var nearFoot = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearFoot.id = 'nearFoot_'+this.id;
		nearFoot.setAttribute('fill',skinTone);
		nearFoot.setAttribute('stroke','inherit');
		var heel = document.createElementNS('http://www.w3.org/2000/svg','rect');
		nearFoot.appendChild(heel);
		heel.setAttribute('x',nearAnkle.x-totalHeight * 0.022);
		heel.setAttribute('y',nearAnkle.y-totalHeight * 0.022);
		heel.setAttribute('width',totalHeight * 0.044);
		heel.setAttribute('height',totalHeight * 0.044);
		heel.setAttribute('rx',totalHeight * 0.02);
		heel.setAttribute('ry',totalHeight * 0.02);
		var footFront = document.createElementNS('http://www.w3.org/2000/svg','polyline');
		nearFoot.appendChild(footFront);
		var footPoints = [
			{x:nearAnkle.x,y:nearAnkle.y-totalHeight * 0.022},
			{x:nearToes.x,y:(nearAnkle.y + 2*nearToes.y)/3},
			nearToes,
			{x:(nearAnkle.x + 2*nearToes.x)/3,y:nearToes.y},
			{x:nearAnkle.x,y:nearAnkle.y+totalHeight * 0.022},
		];
		var footPointsString = '';
		for (var i=0;i<footPoints.length;i++) {
			footPointsString += footPoints[i].x + ',' + footPoints[i].y + ' ';
		};
		footFront.setAttribute('points',footPointsString);
		var bigToe = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearFoot.appendChild(bigToe);
		bigToe.setAttribute('cx',nearToes.x);
		bigToe.setAttribute('cy',(nearAnkle.y + 5*nearToes.y)/6);
		bigToe.setAttribute('r',totalHeight * 0.011);
		var tendon = document.createElementNS('http://www.w3.org/2000/svg','polyline')
		nearFoot.appendChild(tendon);
		var footPoints = [
			{x:(4*nearAnkle.x+nearKnee.x)/5,y:(4*nearAnkle.y+nearKnee.y)/5},
			{x:(nearToes.x+2*nearAnkle.x)/3,y:(nearToes.y+2*nearAnkle.y)/3},
			nearAnkle,
		];
		var footPointsString = '';
		for (var i=0;i<footPoints.length;i++) {
			footPointsString += footPoints[i].x + ',' + footPoints[i].y + ' ';
		};
		tendon.setAttribute('points',footPointsString);	
		var tilt = this.pos('nearFootPoint') * -180/Math.PI / 6;
		heel.setAttribute('transform','rotate('+tilt+' '+nearAnkle.x+' '+nearAnkle.y+')');
		bigToe.setAttribute('transform','rotate('+tilt+' '+nearAnkle.x+' '+nearAnkle.y+')');
		footFront.setAttribute('transform','rotate('+tilt+' '+nearAnkle.x+' '+nearAnkle.y+')');
					
		var hairTails = document.createElementNS('http://www.w3.org/2000/svg','g');
		hairTails.id = 'hairTails_'+this.id;
		hairTails.setAttribute('transform','translate('+headSlide+',0)');
		if (this.bio('hairTails') > 1) {
			hairTails.setAttribute('fill','none');
			hairTails.setAttribute('stroke-linecap','round');
			hairTails.setAttribute('transform','translate(0 0)');
			var hairTailsBacks = document.createElementNS('http://www.w3.org/2000/svg','g');
			hairTails.appendChild(hairTailsBacks);
			hairTailsBacks.setAttribute('stroke','black');
			var hairTailsFronts = document.createElementNS('http://www.w3.org/2000/svg','g');
			hairTails.appendChild(hairTailsFronts);
			hairTailsFronts.setAttribute('stroke','url(#hairWavePattern_'+this.id+')');
			hairTailsFronts.setAttribute('filter','url(#hairCurl_'+this.id+')');
			var tailNum = Math.floor(this.bio('hairTails'));
			var totalPairs = Math.ceil(tailNum/2);
			var topTailAngle = Math.abs(this.biometrics.hairTailPosition) * 16;
			var hairTailSegments = Math.ceil(hairLength / hairTailPlumpness);
			var newX, newY, curlPhase;
			for (var t=0;t<tailNum;t++) {
				var tailPair = Math.ceil((t+1)/2);
				var hairTail = {
					x: headCenter.x,
					y: headCenter.y,
					angle: topTailAngle,
					width: hairTailPlumpness,			
				};
				if (tailPair !== totalPairs) {
					hairTail.angle = 160 - (160-topTailAngle) * (tailPair/(totalPairs));
				};
				if (t % 2 == 0) {
					hairTail.x += headWidth * 0.2;
					hairTail.angle += this.pos('headTip') * 180 / Math.PI;
				} else {
					hairTail.x -= headWidth * 0.2;
					hairTail.angle -= this.pos('headTip') * 180 / Math.PI;
					hairTail.angle = 360 - hairTail.angle;
				};
				if (t==0 && tailNum == 1) {
					hairTail.x = headCenter.x;
					if (this.biometrics.hairTailPosition > 0) {
						hairTail.angle = 360 - hairTail.angle;
					};
				};
				if (hairTail.angle < 0) {
					hairTail.angle += 360;
				} else if (hairTail.angle > 360) {
					hairTail.angle -= 360;
				};
				var hairTailGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
				hairTails.appendChild(hairTailGroup);
				var hairTailBack = document.createElementNS('http://www.w3.org/2000/svg','g');
				hairTailsBacks.appendChild(hairTailBack);
				for (var s=0;s<hairTailSegments;s++) {
					if (s==0) {
					} else if (s*hairTailPlumpness > hairTailCinch) {
						// After the Cinch
						hairTail.width *= 0.8;
						if (hairTail.angle <= 150) {
							hairTail.angle += 20;
						} else if (hairTail.angle >= 210) {
							hairTail.angle -= 20;
						} else {
							hairTail.angle = (hairTail.angle + 180) / 2;
						};
						curlPhase++;
					} else {
						// In the Cinch
						hairTail.width *= 0.95;
						if (hairTail.angle <=150) {
							hairTail.angle += 15;
						} else if (hairTail.angle >= 210) {
							hairTail.angle -= 15;
						} else {
							hairTail.angle = (hairTail.angle + 180) / 2;
						};
						curlPhase = 0;
					};
					if (s * hairTailPlumpness < hairTailCinch + hairTailPlumpness && s * hairTailPlumpness > hairTailCinch - hairTailPlumpness) {
						hairTail.width = hairTailPlumpness;
					};
					newX = hairTail.x + hairTailPlumpness * Math.sin(hairTail.angle * Math.PI / 180);
					newY = hairTail.y - hairTailPlumpness * Math.cos(hairTail.angle * Math.PI / 180);
					d = 'M '+hairTail.x+','+hairTail.y+' ';
					var curl = {
						cx: (hairTail.x + newX) / 2,
						cy: (hairTail.y + newY) / 2,
						offset: Math.max(0,this.bio('hairCurl')-0.5) * hairTail.width,
						offsetAngle: hairTail.angle,
					};
					if (curlPhase % 2 == 0) {
						curl.offsetAngle += 90;
					} else {
						curl.offsetAngle -= 90;
					};
					if (curl.offsetAngle > 360) {
						curl.offsetAngle -= 360;
					} else if (curl.offsetAngle < 0) {
						curl.offsetAngle += 360;
					};
					curl.cx += Math.sin(curl.offsetAngle * Math.PI / 180) * curl.offset;
					curl.cy -= Math.cos(curl.offsetAngle * Math.PI / 180) * curl.offset;
// 					if (curlPhase % 2 == 0) {
// 						curl.cx += curl.offset;
// 						curl.cy += curl.offset;
// 					} else if (curlPhase % 2 == 1) {
// 						curl.cx -= curl.offset;
// 						curl.cy -= curl.offset;
// 					};
					d += 'Q '+curl.cx+','+curl.cy+' '+newX+','+newY+' ';
					var hairTailSegment = document.createElementNS('http://www.w3.org/2000/svg','path');
					hairTailsFronts.appendChild(hairTailSegment);
					hairTailSegment.setAttribute('stroke-width',hairTail.width);
					hairTailSegment.setAttribute('d',d);
					var hairTailSegmentBack = document.createElementNS('http://www.w3.org/2000/svg','path');
					hairTailBack.appendChild(hairTailSegmentBack);
					hairTailSegmentBack.setAttribute('stroke-width',hairTail.width+3);
					hairTailSegmentBack.setAttribute('d',d);
					hairTail.x = newX;
					hairTail.y = newY;
				};
			};
		};


		var headGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		headGroup.id = 'headGroup_'+this.id;
		headGroup.setAttribute('transform','translate('+headSlide+',0) rotate('+headTilt+','+headCenter.x+','+headCenter.y+')');
		headGroup.setAttribute('fill',skinTone);
		headGroup.setAttribute('stroke','inherit');

		var hairNimbusFill = document.createElementNS('http://www.w3.org/2000/svg','circle');
		hairNimbusFill.setAttribute('fill','url(#hairWavePattern_'+this.id+')');
		hairNimbusFill.setAttribute('filter','url(#hairCurl_'+this.id+')');
		hairNimbusFill.setAttribute('stroke','none');
		hairNimbusFill.setAttribute('cx',headCenter.x - facing * 0.5);
		hairNimbusFill.setAttribute('cy',headCenter.y - headHeight * 0.25);
		hairNimbusFill.setAttribute('r',Math.min(hairNimbusRadius * 0.7,headHeight * 0.5));
		headGroup.appendChild(hairNimbusFill);

		var skull = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
		headGroup.appendChild(skull);
		skull.setAttribute('cx',headCenter.x);
		skull.setAttribute('cy',headCenter.y-headHeight/2+headWidth/2);
		skull.setAttribute('rx',headWidth/2);
		skull.setAttribute('ry',headWidth/2);
		var skullPath = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		skullPath.id = 'skullPath_'+this.id;
		defs.appendChild(skullPath);
		var skull = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
		skullPath.appendChild(skull);
		skull.setAttribute('cx',headCenter.x);
		skull.setAttribute('cy',headCenter.y-headHeight/2+headWidth/2);
		skull.setAttribute('rx',headWidth/2);
		skull.setAttribute('ry',headWidth/2);
		var face = document.createElementNS('http://www.w3.org/2000/svg','path');
		headGroup.appendChild(face);
		var facePath = document.createElementNS('http://www.w3.org/2000/svg','path');
		skullPath.appendChild(facePath);
		if (facing > 0) {
			startX = farEyeCenter.x + eyeSize;
			startY = farEyeCenter.y
			cheekboneX = farCheekbone.x;
			cheekboneY = farCheekbone.y;
			jawX = nearJawbone.x;
			jawY = nearJawbone.y;
			earX = nearEarCenter.x;
			earY = nearEarCenter.y;
			templeX = farTemple.x;
			templeY = farTemple.y;
		} else {
			startX = nearEyeCenter.x - eyeSize;
			startY = nearEyeCenter.y
			cheekboneX = nearCheekbone.x;
			cheekboneY = nearCheekbone.y;
			jawX = farJawbone.x;
			jawY = farJawbone.y;
			earX = farEarCenter.x;
			earY = farEarCenter.y;
			templeX = nearTemple.x;
			templeY = nearTemple.y;
		};
		x = startX;
		y = startY;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = cheekboneX;
		y = cheekboneY;
		c2x = x;
		c2y = y-cheekboneSize;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y+cheekboneSize;
		x = chin.x;
		y = chin.y;
		c2x = x+this.bio('jawWidth')*facing;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x+this.bio('jawWidth')*facing*-2;
		c1y = y;
		x = jawX;
		y = jawY;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = earX;
		y = earY;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		d += 'L '+headCenter.x+','+(headCenter.y-headHeight*0.48)+' ';
		c1x = headCenter.x + headWidth*facing*0.05;
		c1y = headCenter.y - headHeight*0.48;
		x = templeX;
		y = templeY;
		c2x = x;
		c2y = y-templeSize;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y+templeSize;
		x = startX;
		y = startY;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		face.setAttribute('d',d);
		facePath.setAttribute('d',d);
		
		var nearEyeGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		headGroup.appendChild(nearEyeGroup);
		var nearEyelids = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearEyeGroup.appendChild(nearEyelids);
		nearEyelids.setAttribute('cx',nearEyeCenter.x);
		nearEyelids.setAttribute('cy',nearEyeCenter.y);
		nearEyelids.setAttribute('r',eyeSize);
		var nearEyeBall = document.createElementNS('http://www.w3.org/2000/svg','g');
		nearEyeGroup.appendChild(nearEyeBall);
		var nearEye = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearEyeBall.appendChild(nearEye);
		nearEye.setAttribute('stroke','firebrick');
		nearEye.setAttribute('stroke-width',1);
		nearEye.setAttribute('fill','ghostwhite');
		nearEye.setAttribute('cx',nearEyeCenter.x);
		nearEye.setAttribute('cy',nearEyeCenter.y);
		nearEye.setAttribute('r',eyeSize);
		var nearEyePupil = document.createElementNS('http://www.w3.org/2000/svg','circle');
		var nearEyeIris = document.createElementNS('http://www.w3.org/2000/svg','circle');
		var nearEyeHighlight = document.createElementNS('http://www.w3.org/2000/svg','circle');
		nearEyeBall.appendChild(nearEyeIris);
		nearEyeBall.appendChild(nearEyePupil);
		nearEyeBall.appendChild(nearEyeHighlight);
		nearEyePupil.setAttribute('cx',nearEyeCenter.x+this.pos('eyePositionX')/Math.PI*eyeSize);
		nearEyeIris.setAttribute('cx',nearEyeCenter.x+this.pos('eyePositionX')/Math.PI*eyeSize);
		nearEyeHighlight.setAttribute('cx',nearEyeCenter.x+eyeSize/4+this.pos('eyePositionX')/Math.PI*eyeSize);
		nearEyePupil.setAttribute('cy',nearEyeCenter.y+this.pos('eyePositionY')/Math.PI*eyeSize);
		nearEyeIris.setAttribute('cy',nearEyeCenter.y+this.pos('eyePositionY')/Math.PI*eyeSize);
		nearEyeHighlight.setAttribute('cy',nearEyeCenter.y-eyeSize/4+this.pos('eyePositionY')/Math.PI*eyeSize);
		nearEyePupil.setAttribute('r',eyeSize/4);
		nearEyeIris.setAttribute('r',eyeSize/2);
		nearEyeHighlight.setAttribute('r',eyeSize/4);
		nearEyePupil.setAttribute('fill','black');
		nearEyeIris.setAttribute('fill',eyeColor);
		nearEyeHighlight.setAttribute('fill','white');
		var nearEyeLidsClipPath = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		nearEyeLidsClipPath.id = 'nearEyeLidsClipPath_'+this.id;
		defs.appendChild(nearEyeLidsClipPath);
		var nearEyeLids = document.createElementNS('http://www.w3.org/2000/svg','path');
		nearEyeLidsClipPath.appendChild(nearEyeLids);
		var nearEyeLidsStroke = document.createElementNS('http://www.w3.org/2000/svg','path');
		nearEyeGroup.appendChild(nearEyeLidsStroke);
		nearEyeLidsStroke.setAttribute('stroke','black');
		nearEyeLidsStroke.setAttribute('stroke-width',0.75);
		nearEyeLidsStroke.setAttribute('fill','none');
		d = 'M '+(nearEyeCenter.x+eyeSize)+','+nearEyeCenter.y+' ';
		d += 'C '+(nearEyeCenter.x+eyeSize)+','+ (nearEyeCenter.y+this.pos('nearEyeInnerLid')*eyeSize/Math.PI) +' '+(nearEyeCenter.x-eyeSize)+','+ (nearEyeCenter.y+this.pos('nearEyeOuterLid')*eyeSize/Math.PI) +' '+(nearEyeCenter.x-eyeSize)+','+nearEyeCenter.y+' ';
		d += 'C '+(nearEyeCenter.x-eyeSize)+','+ (nearEyeCenter.y+this.pos('nearEyeLowerLid')*-1*eyeSize/Math.PI) +' '+(nearEyeCenter.x+eyeSize)+','+ (nearEyeCenter.y+this.pos('nearEyeLowerLid')*-1*eyeSize/Math.PI) +' '+(nearEyeCenter.x+eyeSize)+','+nearEyeCenter.y+' ';
		nearEyeLids.setAttribute('d',d);
		nearEyeLidsStroke.setAttribute('d',d);
		nearEyeLids.setAttribute('transform','rotate('+(150*(this.bio('eyeTilt')-1))+' '+nearEyeCenter.x+' '+nearEyeCenter.y+')');
		nearEyeLidsStroke.setAttribute('transform','rotate('+(150*(this.bio('eyeTilt')-1))+' '+nearEyeCenter.x+' '+nearEyeCenter.y+')');
		nearEyeBall.setAttribute('clip-path','url(#nearEyeLidsClipPath_'+this.id+')');
		
		var farEyeGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		headGroup.appendChild(farEyeGroup);
		var farEyelids = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farEyeGroup.appendChild(farEyelids);
		farEyelids.setAttribute('cx',farEyeCenter.x);
		farEyelids.setAttribute('cy',farEyeCenter.y);
		farEyelids.setAttribute('r',eyeSize);
		var farEyeBall = document.createElementNS('http://www.w3.org/2000/svg','g');
		farEyeGroup.appendChild(farEyeBall);
		var farEye = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farEyeBall.appendChild(farEye);
		farEye.setAttribute('stroke','firebrick');
		farEye.setAttribute('stroke-width',1);
		farEye.setAttribute('fill','white');
		farEye.setAttribute('cx',headCenter.x+facing+eyeDistance);
		farEye.setAttribute('cy',headCenter.y+nodOffset);
		farEye.setAttribute('r',eyeSize);
		var farEyePupil = document.createElementNS('http://www.w3.org/2000/svg','circle');
		var farEyeIris = document.createElementNS('http://www.w3.org/2000/svg','circle');
		var farEyeHighlight = document.createElementNS('http://www.w3.org/2000/svg','circle');
		farEyeBall.appendChild(farEyeIris);
		farEyeBall.appendChild(farEyePupil);
		farEyeBall.appendChild(farEyeHighlight);
		farEyePupil.setAttribute('cx',farEyeCenter.x+this.pos('eyePositionX')/Math.PI*eyeSize);
		farEyeIris.setAttribute('cx',farEyeCenter.x+this.pos('eyePositionX')/Math.PI*eyeSize);
		farEyeHighlight.setAttribute('cx',farEyeCenter.x+eyeSize/4+this.pos('eyePositionX')/Math.PI*eyeSize);
		farEyePupil.setAttribute('cy',farEyeCenter.y+this.pos('eyePositionY')/Math.PI*eyeSize);
		farEyeIris.setAttribute('cy',farEyeCenter.y+this.pos('eyePositionY')/Math.PI*eyeSize);
		farEyeHighlight.setAttribute('cy',farEyeCenter.y-eyeSize/4+this.pos('eyePositionY')/Math.PI*eyeSize);
		farEyePupil.setAttribute('r',eyeSize/4);
		farEyeIris.setAttribute('r',eyeSize/2);
		farEyeHighlight.setAttribute('r',eyeSize/4);
		farEyePupil.setAttribute('fill','black');
		farEyeIris.setAttribute('fill',eyeColor);
		farEyeHighlight.setAttribute('fill','white');
		var farEyeLidsClipPath = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		farEyeLidsClipPath.id = 'farEyeLidsClipPath_'+this.id;
		defs.appendChild(farEyeLidsClipPath);
		var farEyeLids = document.createElementNS('http://www.w3.org/2000/svg','path');
		farEyeLidsClipPath.appendChild(farEyeLids);
		var farEyeLidsStroke = document.createElementNS('http://www.w3.org/2000/svg','path');
		farEyeGroup.appendChild(farEyeLidsStroke);
		farEyeLidsStroke.setAttribute('stroke','black');
		farEyeLidsStroke.setAttribute('stroke-width',0.75);
		farEyeLidsStroke.setAttribute('fill','none');
		d = 'M '+(farEyeCenter.x-eyeSize)+','+farEyeCenter.y+' ';
		d += 'C '+(farEyeCenter.x-eyeSize)+','+ (farEyeCenter.y+this.pos('farEyeInnerLid')*eyeSize/Math.PI) +' '+(farEyeCenter.x+eyeSize)+','+ (farEyeCenter.y+this.pos('farEyeOuterLid')*eyeSize/Math.PI) +' '+(farEyeCenter.x+eyeSize)+','+farEyeCenter.y+' ';
		d += 'C '+(farEyeCenter.x+eyeSize)+','+ (farEyeCenter.y+this.pos('farEyeLowerLid')*-1*eyeSize/Math.PI) +' '+(farEyeCenter.x-eyeSize)+','+ (farEyeCenter.y+this.pos('farEyeLowerLid')*-1*eyeSize/Math.PI) +' '+(farEyeCenter.x-eyeSize)+','+farEyeCenter.y+' ';
		farEyeLids.setAttribute('d',d);
		farEyeLidsStroke.setAttribute('d',d);
		farEyeLids.setAttribute('transform','rotate('+(-150*(this.bio('eyeTilt')-1))+' '+farEyeCenter.x+' '+farEyeCenter.y+')');
		farEyeLidsStroke.setAttribute('transform','rotate('+(-150*(this.bio('eyeTilt')-1))+' '+farEyeCenter.x+' '+farEyeCenter.y+')');
		farEyeBall.setAttribute('clip-path','url(#farEyeLidsClipPath_'+this.id+')');
		

		var mouthGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		headGroup.appendChild(mouthGroup);

		var lips = document.createElementNS('http://www.w3.org/2000/svg','path');
		mouthGroup.appendChild(lips);
		lips.setAttribute('fill',lipColor);
		// Lip Liner
// 		if (this.bio('lipSize') > 1) {
// 			lips.setAttribute('stroke','black');
// 			lips.setAttribute('stroke-width',0.375);
// 			lips.setAttribute('stroke-linecap','round');
// 		};
		x = topOfMouth.x;
		y = topOfMouth.y-lipSize*0.5;
		d = 'M '+x+','+y+' ';
		dc1x = mouthPurse/2;
		dc1y = -1 * lipSize;
		dx = mouthPurse*(1+mouthSmile) + lipSize*0.25;
		dy = mouthSmile*mouthHeight*-0.5;
		dc2x = dx - mouthPurse/2;
		dc2y = dy;
		d += 'c '+dc1x+','+dc1y+' '+dc2x+','+dc2y+' '+dx+','+dy+' ';
		dc1x = mouthPurse/2;
		dc1y = 0;
		dx = mouthPurse * mouthSmile * -1;
		dy = mouthHeight*(1+mouthSmile) + lipSize;
		dc2x = dx + Math.abs(mouthGrimace);
		dc2y = dy - mouthGrimace;
		d += 'c '+dc1x+','+dc1y+' '+dc2x+','+dc2y+' '+dx+','+dy+' ';
		dc1x = -1 * Math.abs(mouthGrimace);
		dc1y = mouthGrimace + lipSize;
		dx = mouthPurse * -2 - lipSize*0.5;
		dy = 0;
		dc2x = dx + Math.abs(mouthGrimace);
		dc2y = dy + mouthGrimace + lipSize;
		d += 'c '+dc1x+','+dc1y+' '+dc2x+','+dc2y+' '+dx+','+dy+' ';
		dc1x = -1 * Math.abs(mouthGrimace);
		dc1y = mouthGrimace * -1;
		dx = mouthPurse * mouthSmile * -1;
		dy = mouthHeight * -1 * (1+mouthSmile) - lipSize;
		dc2x = dx - mouthPurse/2;
		dc2y = dy;
		d += 'c '+dc1x+','+dc1y+' '+dc2x+','+dc2y+' '+dx+','+dy+' ';
		dc1x = mouthPurse/2;
		dc1y = 0;
		dx = mouthPurse*(1+mouthSmile) + lipSize*0.25;
		dy = mouthSmile*mouthHeight*0.5;
		dc2x = dx - mouthPurse/2;
		dc2y = dy - lipSize;
		d += 'c '+dc1x+','+dc1y+' '+dc2x+','+dc2y+' '+dx+','+dy+' ';
		lips.setAttribute('d',d);

		var mouth = document.createElementNS('http://www.w3.org/2000/svg','path');
		mouthGroup.appendChild(mouth);
		mouth.setAttribute('stroke','black');
		mouth.setAttribute('stroke-width',0.75);
		mouth.setAttribute('stroke-linecap','round');
		mouth.setAttribute('fill',mouthColor);
		x = topOfMouth.x;
		y = topOfMouth.y;
		d = 'M '+x+','+y+' ';
		dc1x = mouthPurse/2;
		dc1y = 0;
		dx = mouthPurse*(1+mouthSmile);
		dy = mouthSmile*mouthHeight*-0.5;
		dc2x = dx - mouthPurse/2;
		dc2y = dy;
		d += 'c '+dc1x+','+dc1y+' '+dc2x+','+dc2y+' '+dx+','+dy+' ';
		dc1x = mouthPurse/2;
		dc1y = 0;
		dx = mouthPurse * mouthSmile * -1;
		dy = mouthHeight*(1+mouthSmile);
		dc2x = dx + Math.abs(mouthGrimace);
		dc2y = dy - mouthGrimace;
		d += 'c '+dc1x+','+dc1y+' '+dc2x+','+dc2y+' '+dx+','+dy+' ';
		dc1x = -1 * Math.abs(mouthGrimace);
		dc1y = mouthGrimace;
		dx = mouthPurse * -2;
		dy = 0;
		dc2x = dx + Math.abs(mouthGrimace);
		dc2y = dy + mouthGrimace;
		d += 'c '+dc1x+','+dc1y+' '+dc2x+','+dc2y+' '+dx+','+dy+' ';
		dc1x = -1 * Math.abs(mouthGrimace);
		dc1y = mouthGrimace * -1;
		dx = mouthPurse * mouthSmile * -1;
		dy = mouthHeight * -1 * (1+mouthSmile);
		dc2x = dx - mouthPurse/2;
		dc2y = dy;
		d += 'c '+dc1x+','+dc1y+' '+dc2x+','+dc2y+' '+dx+','+dy+' ';
		dc1x = mouthPurse/2;
		dc1y = 0;
		dx = mouthPurse*(1+mouthSmile);
		dy = mouthSmile*mouthHeight*0.5;
		dc2x = dx - mouthPurse/2;
		dc2y = dy;
		d += 'c '+dc1x+','+dc1y+' '+dc2x+','+dc2y+' '+dx+','+dy+' ';
		mouth.setAttribute('d',d);
		mouthClipPath = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		defs.appendChild(mouthClipPath);
		mouthClipPath.id = 'mouthClipPath_'+this.id;
		mouthPath = document.createElementNS('http://www.w3.org/2000/svg','path');
		mouthClipPath.appendChild(mouthPath);
		mouthPath.setAttribute('d',d);
		
		var teeth = document.createElementNS('http://www.w3.org/2000/svg','g');
		mouthGroup.appendChild(teeth);
		teeth.setAttribute('fill','ivory');
		teeth.setAttribute('stroke-width',0.5);
		teeth.setAttribute('clip-path','url(#mouthClipPath_'+this.id+')');
		var topTeeth = document.createElementNS('http://www.w3.org/2000/svg','path');
		teeth.appendChild(topTeeth);
		var topTeethApex = {
			x: topOfMouth.x,
			y: topOfMouth.y + headHeight * 0.01,
		};
		var nearTopTeeth = {
			x: nearCheekbone.x,
			y: nearCheekbone.y+headHeight*0.1,
		};
		var farTopTeeth = {
			x: farCheekbone.x,
			y: farCheekbone.y+headHeight*0.1,
		};
		d = 'M '+farTopTeeth.x+','+farTopTeeth.y+" ";
		c1x = farTopTeeth.x;
		c1y = farTopTeeth.y;
		c2x = topTeethApex.x + headWidth * 0.25;
		c2y = topTeethApex.y;
		d += "C "+c1x+","+c1y+" "+c2x+","+c2y+" "+topTeethApex.x+","+topTeethApex.y+" ";
		c1x = topTeethApex.x - headWidth * 0.25;
		c1y = topTeethApex.y;
		c2x = nearTopTeeth.x;
		c2y = nearTopTeeth.y;
		d += "C "+c1x+","+c1y+" "+c2x+","+c2y+" "+nearTopTeeth.x+","+nearTopTeeth.y+" ";
		topTeeth.setAttribute('d',d);
		var bottomTeeth = document.createElementNS('http://www.w3.org/2000/svg','path');
		teeth.appendChild(bottomTeeth);
		var bottomTeethApex = {
			x: topOfMouth.x,
			y: topOfMouth.y + mouthHeight,
		};
		var nearBottomTeeth = {
			x: nearCheekbone.x,
			y: nearCheekbone.y+headHeight*0.1,
		};
		var farBottomTeeth = {
			x: farCheekbone.x,
			y: farCheekbone.y+headHeight*0.1,
		};
		d = 'M '+farBottomTeeth.x+','+farBottomTeeth.y+" ";
		c1x = farBottomTeeth.x;
		c1y = farBottomTeeth.y;
		c2x = bottomTeethApex.x + headWidth * 0.25;
		c2y = bottomTeethApex.y;
		d += "C "+c1x+","+c1y+" "+c2x+","+c2y+" "+bottomTeethApex.x+","+bottomTeethApex.y+" ";
		c1x = bottomTeethApex.x - headWidth * 0.25;
		c1y = bottomTeethApex.y;
		c2x = nearBottomTeeth.x;
		c2y = nearBottomTeeth.y;
		d += "C "+c1x+","+c1y+" "+c2x+","+c2y+" "+nearBottomTeeth.x+","+nearBottomTeeth.y+" ";
		d += "v "+headHeight+" h"+(headWidth*0.8)+" z";
		bottomTeeth.setAttribute('d',d);
		
		// Lip Highlights (needs complementary shadow)
// 		if (this.bio('lipSize') > 1) {
// 			var nearLipHighlight = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
// 			headGroup.appendChild(nearLipHighlight);
// 			nearLipHighlight.setAttribute('cx',topOfMouth.x+mouthPurse*0.5+facing/10);
// 			nearLipHighlight.setAttribute('cy',topOfMouth.y+mouthHeight+lipSize*0.5+mouthGrimace*0.5+mouthSmile);
// 			nearLipHighlight.setAttribute('rx',mouthPurse*0.2);
// 			nearLipHighlight.setAttribute('ry',lipSize*0.2);
// 			nearLipHighlight.setAttribute('fill','white');
// 			nearLipHighlight.setAttribute('stroke','none');
// 			nearLipHighlight.setAttribute('opacity','0.2');
// 		
// 			var farLipHighlight = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
// 			headGroup.appendChild(farLipHighlight);
// 			farLipHighlight.setAttribute('cx',topOfMouth.x-mouthPurse*0.5+facing/10);
// 			farLipHighlight.setAttribute('cy',topOfMouth.y+mouthHeight+lipSize*0.5+mouthGrimace*0.5+mouthSmile);
// 			farLipHighlight.setAttribute('rx',mouthPurse*0.2);
// 			farLipHighlight.setAttribute('ry',lipSize*0.2);
// 			farLipHighlight.setAttribute('fill','white');
// 			farLipHighlight.setAttribute('stroke','none');
// 			farLipHighlight.setAttribute('opacity','0.2');
// 		};
				
		var noseGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
		headGroup.appendChild(noseGroup);
		noseGroup.id = 'noseGroup';
		
		// Straight Line Guide for Nose Path Below
// 		var noseLine = document.createElementNS('http://www.w3.org/2000/svg','polyline');
// 		noseGroup.appendChild(noseLine);
// 		nosePoints = '';
// 		for (var point of [noseRoot,noseBridge,noseApex,noseBottom,noseBase]) {
// 			nosePoints += point.x + "," + point.y + " ";
// 		};
// 		noseLine.setAttribute('fill','none');
// 		noseLine.setAttribute('stroke','red');
// 		noseLine.setAttribute('stroke-linecap','round');
// 		noseLine.setAttribute('points',nosePoints);
		
		var nosePath = document.createElementNS('http://www.w3.org/2000/svg','path');
		noseGroup.appendChild(nosePath);
		nosePath.setAttribute('fill','none');
		nosePath.setAttribute('stroke','black');
		nosePath.setAttribute('stroke-width',0.75);
		nosePath.setAttribute('stroke-linecap','round');
		var bridgeControl ={
			x: Math.abs(noseApex.x - noseRoot.x) * 0.25,
			y: (noseApex.y - noseRoot.y) * 0.25
		};
		d = 'M ' + noseBase.x + ',' + noseBase.y + " ";
		c1x = noseBase.x;
		c1y = noseBase.y;
		c2x = (noseBase.x + noseBottom.x) / 2;
		c2y = noseBottom.y;
		d += "C "+c1x+","+c1y+" "+c2x+","+c2y+" "+noseBottom.x+","+noseBottom.y+" ";
		c1x = noseBottom.x + noseRound*noseFacing*Math.abs(noseApex.x-noseBottom.x);
		c1y = noseBottom.y;
		c2x = noseApex.x;
		c2y = noseApex.y - noseRound*(noseApex.y-noseBottom.y);
		d += "C "+c1x+","+c1y+" "+c2x+","+c2y+" "+noseApex.x+","+noseApex.y+" ";
		c1x = noseApex.x + noseRound*Math.abs(noseApex.x-noseBridge.x)*noseFacing;
		c1y = noseApex.y + 2*noseRound*(noseBridge.y-noseApex.y);
		c2x = noseBridge.x + bridgeControl.x*noseFacing;
		c2y = noseBridge.y + bridgeControl.y;
		d += "C "+c1x+","+c1y+" "+c2x+","+c2y+" "+noseBridge.x+","+noseBridge.y+" ";
		if (this.biometrics.noseBridgeHeight > 0 && this.biometrics.noseBridgeDepth > -2.5) {
			c1x = noseBridge.x - bridgeControl.x*noseFacing;
			c1y = noseBridge.y - bridgeControl.y;
			c2x = noseRoot.x;
			c2y = noseRoot.y;
			d += "C "+c1x+","+c1y+" "+c2x+","+c2y+" "+noseRoot.x+","+noseRoot.y+" ";
		};
		nosePath.setAttribute('d',d);
		
		var nearEyebrowBack = document.createElementNS('http://www.w3.org/2000/svg','path');
		headGroup.appendChild(nearEyebrowBack);
		x = nearEyeCenter.x-eyeSize*1.2;
		y = nearTemple.y;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y + nearEyebrowArch;
		x = nearEyeCenter.x+eyeSize*0.8;
		y = nearTemple.y;
		c2x = x - browSize;
		c2y = y + nearEyebrowArch;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x - browSize;
		c1y = y - headHeight/8;
		x = nearEyeCenter.x-eyeSize*1.2;
		y = nearTemple.y;
		c2x = x;
		c2y = y - headHeight/8;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		nearEyebrowBack.setAttribute('d',d);
		
		var nearEyebrow = document.createElementNS('http://www.w3.org/2000/svg','path');
		headGroup.appendChild(nearEyebrow);
		nearEyebrow.setAttribute('fill',hairColor);
		nearEyebrow.setAttribute('stroke','black');
		nearEyebrow.setAttribute('stroke-width',0.5);
		x = nearEyeCenter.x-eyeSize*1.2;
		y = nearTemple.y;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y + nearEyebrowArch;
		x = nearEyeCenter.x+eyeSize*0.8;
		y = nearTemple.y;
		c2x = x - browSize;
		c2y = y + nearEyebrowArch;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + browSize;
		c1y = y - nearEyebrowArch;
		x = nearEyeCenter.x+eyeSize*0.8;
		y = nearTemple.y - browSize;
		c2x = x + browSize;
		c2y = y - nearEyebrowArch;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x - browSize;
		c1y = y + nearEyebrowArch;
		x = nearEyeCenter.x-eyeSize*1.2;
		y = nearTemple.y;
		c2x = x;
		c2y = y + nearEyebrowArch;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		nearEyebrow.setAttribute('d',d);
				
		var farEyebrowBack = document.createElementNS('http://www.w3.org/2000/svg','path');
		headGroup.appendChild(farEyebrowBack);
		x = farEyeCenter.x+eyeSize*1.2;
		y = farTemple.y;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y + farEyebrowArch;
		x = farEyeCenter.x-eyeSize*0.8;
		y = farTemple.y;
		c2x = x + browSize;
		c2y = y + farEyebrowArch;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + browSize;
		c1y = y - headHeight/8;
		x = farEyeCenter.x+eyeSize*1.2;
		y = farTemple.y;
		c2x = x;
		c2y = y - headHeight/8;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		farEyebrowBack.setAttribute('d',d);
		
		var farEyebrow = document.createElementNS('http://www.w3.org/2000/svg','path');
		headGroup.appendChild(farEyebrow);
		farEyebrow.setAttribute('fill',hairColor);
		farEyebrow.setAttribute('stroke','black');
		farEyebrow.setAttribute('stroke-width',0.5);
		x = farEyeCenter.x+eyeSize*1.2;
		y = farTemple.y;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y + farEyebrowArch;
		x = farEyeCenter.x-eyeSize*0.8;
		y = farTemple.y;
		c2x = x + browSize;
		c2y = y + farEyebrowArch;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x - browSize;
		c1y = y - farEyebrowArch;
		x = farEyeCenter.x-eyeSize*0.8;
		y = farTemple.y - browSize;
		c2x = x - browSize;
		c2y = y - farEyebrowArch;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + browSize;
		c1y = y + farEyebrowArch;
		x = farEyeCenter.x+eyeSize*1.2;
		y = farTemple.y;
		c2x = x;
		c2y = y + farEyebrowArch;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		farEyebrow.setAttribute('d',d);
		
				
		// Face Guides
// 		var faceGuides = document.createElementNS('http://www.w3.org/2000/svg','g');
// 		headGroup.appendChild(faceGuides);
// 		faceGuides.setAttribute('stroke','black');
// 		faceGuides.setAttribute('stroke-width',0.05);
// 		faceGuides.setAttribute('fill','none');
// 		var verticalGuide = document.createElementNS('http://www.w3.org/2000/svg','path');
// 		faceGuides.appendChild(verticalGuide);
// 		facing = headWidth/3;
// 		if (!upperBodyAngle) {
// 			facing *= -1;
// 		};
// 		d = 'M '+headCenter.x+','+(headCenter.y-headHeight/2)+' ';
// 		d += 'C '+(headCenter.x+facing)+','+(headCenter.y-headHeight/2)+' '+(headCenter.x+facing)+','+(headCenter.y+headHeight/2)+' '+' '+(headCenter.x)+','+(headCenter.y+headHeight/2);
// 		verticalGuide.setAttribute('d',d);
// 		var middleGuide = document.createElementNS('http://www.w3.org/2000/svg','path');
// 		faceGuides.appendChild(middleGuide);
// 		var nearFacing, farFacing;
// 		var facing = 10*this.pos('headNod')/Math.PI;
// 		if (upperBodyAngle) {
// 			nearFacing = facing;
// 			farFacing  = 2*facing;
// 		} else {
// 			nearFacing = 2*facing;
// 			farFacing  = facing;
// 		};
// 		d = 'M '+(headCenter.x+headWidth/2)+','+(headCenter.y)+' ';
// 		d += 'C '+(headCenter.x+headWidth/2)+','+(headCenter.y+farFacing)+' '+(headCenter.x-headWidth/2)+','+(headCenter.y+nearFacing)+' '+' '+(headCenter.x-headWidth/2)+','+(headCenter.y);
// 		middleGuide.setAttribute('d',d);
// 		var noseGuide = document.createElementNS('http://www.w3.org/2000/svg','path');
// 		faceGuides.appendChild(noseGuide);
// 		var facing = 10*this.pos('headNod')/Math.PI;
// 		if (!upperBodyAngle) {
// 			facing *= -1;
// 		};
// 		d = 'M '+(headCenter.x+headWidth/2)+','+(headCenter.y + headHeight/4)+' ';
// 		d += 'C '+(headCenter.x+headWidth/2)+','+(headCenter.y + headHeight/4+farFacing)+' '+(headCenter.x-headWidth/2)+','+(headCenter.y + headHeight/4+nearFacing)+' '+' '+(headCenter.x-headWidth/2)+','+(headCenter.y + headHeight/4);
// 		noseGuide.setAttribute('d',d);
// 		var mouthGuide = document.createElementNS('http://www.w3.org/2000/svg','path');
// 		faceGuides.appendChild(mouthGuide);
// 		var facing = 10*this.pos('headNod')/Math.PI;
// 		if (!upperBodyAngle) {
// 			facing *= -1;
// 		};
// 		d = 'M '+(headCenter.x+headWidth/2)+','+(headCenter.y + headHeight/3)+' ';
// 		d += 'C '+(headCenter.x+headWidth/2)+','+(headCenter.y + headHeight/3+farFacing)+' '+(headCenter.x-headWidth/2)+','+(headCenter.y + headHeight/3+nearFacing)+' '+' '+(headCenter.x-headWidth/2)+','+(headCenter.y + headHeight/3);
// 		mouthGuide.setAttribute('d',d);
				
		var scalp = document.createElementNS('http://www.w3.org/2000/svg','g');
		headGroup.appendChild(scalp);
		scalp.setAttribute('fill','url(#hairWavePattern_'+this.id+')');
		scalp.setAttribute('filter','url(#hairCurl_'+this.id+')');
		scalp.setAttribute('clip-path','url(#skullPath_'+this.id+')');
		var scalpHairline = document.createElementNS('http://www.w3.org/2000/svg','path');
		scalp.appendChild(scalpHairline);
		x = scalpTop.x;
		y = scalpTop.y;
		d = 'M '+x+','+y+' ';
		c1x = x - headWidth*0.5*0.55;
		c1y = y;
		x = nearScalpTemple.x;
		y = nearScalpTemple.y;
		c2x = x;
		c2y = y+hairlineHeight/2;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = (nearTemple.x+farTemple.x)/2;
		y = headCenter.y-headHeight/2-hairlineHeight-headHeight*0.05;
		c2x = x - headWidth/10;
		c2y = y-hairlinePeak;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + headWidth/10;
		c1y = y-hairlinePeak;
		x = farScalpTemple.x;
		y = farScalpTemple.y;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y+hairlineHeight/2;
		x = scalpTop.x;
		y = scalpTop.y;
		c2x = x + headWidth*0.5*0.55;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		d += 'z';
		scalpHairline.setAttribute('d',d);
		var scalpSide = document.createElementNS('http://www.w3.org/2000/svg','path');
		scalp.appendChild(scalpSide);
		var sideEar, sideTemple;
		if (facing > 0) {
			sideEar = nearEarCenter;
			sideTemple = nearScalpTemple;
		} else {
			sideEar = farEarCenter;
			sideTemple = farScalpTemple;
		};
		x = sideEar.x;
		y = sideEar.y+headHeight/8;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = sideTemple.x;
		y = sideTemple.y;
		c2x = x - facing*0.8;
		c2y = y + headHeight*0.1;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = scalpTop.x;
		y = scalpTop.y;
		c2x = x;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x - facing*2;
		c1y = y;
		x = sideEar.x;
		y = sideEar.y+headHeight/8;
		c2x = x-facing*3;
		c2y = y-headHeight/2;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		scalpSide.setAttribute('d',d);
				
		var ear = document.createElementNS('http://www.w3.org/2000/svg','g');
		headGroup.appendChild(ear);
		ear.setAttribute('stroke','black');
		ear.setAttribute('stroke-width',1);
		ear.setAttribute('stroke-linecap','round');
		var outerEar = document.createElementNS('http://www.w3.org/2000/svg','path');
		ear.appendChild(outerEar);
		x = sideEar.x + earWidth*0.5*headFacing;
		y = sideEar.y;
		d = 'M '+x+','+y+' ';
		c1x = x;
		c1y = y;
		x = x - earWidth*0.75*headFacing;
		y = y - earHeight*0.2;
		c2x = x + earPoint*headFacing;
		c2y = y - earPoint;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x - earPoint*headFacing;
		c1y = y + earPoint;
		x = x + earWidth*0.25*headFacing;
		y = y + earHeight;
		c2x = x - earWidth*0.1*headFacing;
		c2y = y-earLobe;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x + earWidth*0.1*headFacing;
		c1y = y+earLobe;
		x = x + earWidth*0.5*headFacing;
		y = y;
		c2x = x - earLobe*headFacing;
		c2y = y+earLobe;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		outerEar.setAttribute('d',d);
		var innerEar = document.createElementNS('http://www.w3.org/2000/svg','path');
		ear.appendChild(innerEar);
		innerEar.setAttribute('stroke-width',0.75);
		x = sideEar.x + earWidth*0.5*headFacing;
		y = sideEar.y + earHeight*0.5;
		d = 'M '+x+','+y+' ';
		c1x = x - earWidth*0.2*headFacing;
		c1y = y - earHeight*0.1;
		x = x - earWidth*0.1*headFacing;
		y = y - earHeight*0.3;
		c2x = x - earWidth*0.2*headFacing;
		c2y = y + earHeight*0.1;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		c1x = x;
		c1y = y - earHeight*0.1;
		x = x - earWidth*0.41*headFacing;
		y = y - earHeight*0.3;
		c2x = x + earWidth*0.1*headFacing;
		c2y = y;
		d += 'C '+c1x+','+c1y+' '+c2x+','+c2y+' '+x+','+y+' ';
		innerEar.setAttribute('d',d);
		
		if (this.bio('hairBangsLength') > 1) {
			var hairFront = document.createElementNS('http://www.w3.org/2000/svg','g');
			headGroup.appendChild(hairFront);
			var bangs = document.createElementNS('http://www.w3.org/2000/svg','path');
			var bangsStroke = document.createElementNS('http://www.w3.org/2000/svg','path');
// 			hairFront.appendChild(bangsStroke);
			hairFront.appendChild(bangs);
			bangs.setAttribute('fill','url(#hairWavePattern_'+this.id+')');
			bangs.setAttribute('filter','url(#hairCurl_'+this.id+')');
			bangsStroke.setAttribute('fill','none');
			bangsStroke.setAttribute('stroke','black');
			var bangsNum = Math.max(Math.ceil(this.bio('hairBangs')),1);
			var bangsPart = (this.biometrics.hairBangsPart + 10) / 20;
			var bangsLength = this.bio('hairBangsLength') * headHeight * 0.05;
			var bangsSweep = this.bio('hairBangsSweep') * headWidth * 0.02;
			var hairlinePeak = {
				x: (nearTemple.x+farTemple.x)/2,
				y: headCenter.y-headHeight/2-hairlineHeight-headHeight*0.05,
			}
			var bangsEnd = {
				x: sideEar.x,
				y: sideEar.y,
			};
			if (headFacing < 0) {
				bangsEnd.x += farScalpTemple.x;
				bangsEnd.y += farScalpTemple.y;
			} else {
				bangsEnd.x += nearScalpTemple.x;
				bangsEnd.y += nearScalpTemple.y;
			};
			bangsEnd.x /= 2;
			bangsEnd.y /= 2;
			var d = '',strokeD = '';
			strokeD = 'M '+farScalpTemple.x+','+farScalpTemple.y+' ';
			d = 'M ' + nearScalpTemple.x + ',' + (nearScalpTemple.y-headHeight * 0.05) + ' ';
			d += 'L '+hairlinePeak.x+','+(hairlinePeak.y-headHeight * 0.05)+' ';
			d += 'L '+farScalpTemple.x+','+(farScalpTemple.y-headHeight * 0.05)+' ';
			x = farScalpTemple.x;
			y = farScalpTemple.y;
			for (var b=0;b<bangsNum;b++) {
				c1x = x + bangsSweep;
				c1y = y + bangsLength;
				x = x - ((farScalpTemple.x - nearScalpTemple.x) * bangsPart) / bangsNum;
				y = y;
				c2x = x + bangsSweep;
				c2y = y + bangsLength;
				d += 'C '+c1x+','+c1y+" "+c2x+','+c2y+' '+x+','+y+' ';
				strokeD += 'C '+c1x+','+c1y+" "+c2x+','+c2y+' '+x+','+y+' ';
			};
			for (var b=0;b<bangsNum;b++) {
				c1x = x - bangsSweep;
				c1y = y + bangsLength;
				x = x - ((farScalpTemple.x - nearScalpTemple.x) * (1-bangsPart)) / bangsNum;
				y = y;
				c2x = x - bangsSweep;
				c2y = y + bangsLength;
				d += 'C '+c1x+','+c1y+" "+c2x+','+c2y+' '+x+','+y+' ';
				strokeD += 'C '+c1x+','+c1y+" "+c2x+','+c2y+' '+x+','+y+' ';
			};
			bangs.setAttribute('d',d);
			bangsStroke.setAttribute('d',strokeD);
		};
		
		var neck = document.createElementNS('http://www.w3.org/2000/svg','g');
		neck.id = 'neck_'+this.id;
		neck.setAttribute('fill',skinTone);
		neck.setAttribute('stroke','inherit');
		var neckPath = document.createElementNS('http://www.w3.org/2000/svg','polyline');
		neck.appendChild(neckPath);
		var neckPoints = [
			nearNeck,
			{x:headCenter.x+headSlide,y:headCenter.y},
			farNeck,
		];
		var neckPointsString = '';
		for (var i=0;i<neckPoints.length;i++) {
			neckPointsString += neckPoints[i].x + ',' + neckPoints[i].y + ' ';
		};
		neckPath.setAttribute('points',neckPointsString);
		var nearNeckCap = document.createElementNS('http://www.w3.org/2000/svg','circle');
		neck.appendChild(nearNeckCap);
		nearNeckCap.setAttribute('cx',nearNeck.x);
		nearNeckCap.setAttribute('cy',nearNeck.y);
		nearNeckCap.setAttribute('r',defaultStrokeWidth * 0.55);
		nearNeckCap.setAttribute('fill',skinTone);
		nearNeckCap.setAttribute('stroke','none');
		var farNeckCap = document.createElementNS('http://www.w3.org/2000/svg','circle');
		neck.appendChild(farNeckCap);
		farNeckCap.setAttribute('cx',farNeck.x);
		farNeckCap.setAttribute('cy',farNeck.y);
		farNeckCap.setAttribute('r',defaultStrokeWidth * 0.55);
		farNeckCap.setAttribute('fill',skinTone);
		farNeckCap.setAttribute('stroke','none');
		
		// Order the Stack
		
		var lapSizedBreasts = Math.max(nearBreastCenter.y + breastSize,farBreastCenter.y + breastSize) > Math.min(nearHipJoint.y - this.bio('pelvisWidth') * 30,farHipJoint.y - this.bio('pelvisWidth') * 30);
// 		var bigBelly = farBellyBottom.y > (3*farHipJoint.y+spineBase.y)/4 || nearBellyBottom.y > (3*nearHipJoint.y+spineBase.y)/4;
		var bigBelly = (this.biometrics.belly > 2 || this.biometrics.pregnancy > 2);
		var genitalsShowing = false;
		for (var garment of this.garments) {
			if (garment.absoluteTop < 0.5 && garment.absoluteBottom > 0.6 && garment.bottomType < 0.66) {
				genitalsShowing = true;
			};
		};
		
		var breastsArray = [];
		if (upperBodyAngle) {
			for (var node of farBreasts) {
				breastsArray.push(node);
			};
			for (var node of nearBreasts) {
				breastsArray.push(node);
			};
		} else {
			for (var node of nearBreasts) {
				breastsArray.push(node);
			};
			for (var node of farBreasts) {
				breastsArray.push(node);
			};
		};
				
		var bodyParts = [hairBack,shoulders];
		
		if (lowerBodyAngle) {
			bodyParts = bodyParts.concat([butt,farFoot,farCalf,farThigh,farLeggingGroup]);
		} else {
			bodyParts = bodyParts.concat([butt,nearFoot,nearCalf,nearThigh,nearLeggingGroup]);
		};
		
		if (upperBodyAngle) {
			bodyParts = bodyParts.concat([farElbowJoint,farUpperArm,farLowerArm,farSleeveGroup]);
			bodyParts = bodyParts.concat(farHandArray);
		} else {
			bodyParts = bodyParts.concat([nearElbowJoint,nearUpperArm,nearLowerArm,nearSleeveGroup]);
			bodyParts = bodyParts.concat(nearHandArray);
		};
		
		torso.appendChild(belly);
		bodyParts = bodyParts.concat([torso,neck]);
		if (!genitalsShowing) {
			bodyParts = bodyParts.concat([genitals,phallus]);
		};
		bodyParts.push(torsoGarmentGroup);

		if (!lapSizedBreasts) {
			bodyParts = bodyParts.concat(breastsArray);
		};
		
		if (lowerBodyAngle) {
			bodyParts = bodyParts.concat([nearFoot,nearCalf,nearThigh,nearLeggingGroup]);
		} else {
			bodyParts = bodyParts.concat([farFoot,farCalf,farThigh,farLeggingGroup]);
		};
		bodyParts.push(skirtGroup);
		
		if (lapSizedBreasts) {
			bodyParts = bodyParts.concat(breastsArray);
		};
		
		bodyParts = bodyParts.concat([hairTails,headGroup]);
		
		if (bigBelly) {
			bodyParts = bodyParts.concat([skirtGroup,belly]);
			bodyParts = bodyParts.concat(breastsArray);
		};
		
		if (upperBodyAngle) {
			bodyParts = bodyParts.concat([nearElbowJoint,nearUpperArm,nearLowerArm,nearSleeveGroup]);
			bodyParts = bodyParts.concat(nearHandArray);
		} else {
			bodyParts = bodyParts.concat([farElbowJoint,farUpperArm,farLowerArm,farSleeveGroup]);
			bodyParts = bodyParts.concat(farHandArray);
		};

		// Special Render Order Goes Here (for hands behind back or similar exceptions)

		for (var i of bodyParts) {
			defs.appendChild(i);
			if (i.id !== '') {
				var stroke = document.createElementNS('http://www.w3.org/2000/svg','use');
				view.setHref(stroke,i.id);
				stroke.setAttribute('stroke','black');
				stroke.setAttribute('stroke-width',defaultStrokeWidth);
				stroke.setAttribute('stroke-linecap','round');
				svg.appendChild(stroke);
			};
// 			svg.appendChild(i);
			var shape = document.createElementNS('http://www.w3.org/2000/svg','use');
// 			shape.setAttribute('href','#'+i.id);
			view.setHref(shape,i.id);
			svg.appendChild(shape);
		};
		
		// Garments
		
		var neckTop = headCenter.y;
		var shoulderTop = (2*neckBase.y + headCenter.y)/3;
		var nippleLine = Math.min(nearNippleTop.y,farNippleTop.y);
		var waistLine = (nearHipJoint.y + farHipJoint.y)/2 - thighWidth*0.25;
		var crotchLine = (nearHipJoint.y + farHipJoint.y)/2 + thighWidth*0.25; // needs labioscrotal size
		var ankleLine = Math.max(nearAnkle.y,farAnkle.y);
		var footBottom = ankleLine + 50;
		var garmentMarks = [neckTop,shoulderTop,nippleLine,waistLine,crotchLine,ankleLine,footBottom];
		
// 		var marksGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
// 		svg.appendChild(marksGroup);
// 		if (this.garments.length > 0) {
// 			for (var mark of garmentMarks) {
// 				var line = document.createElementNS('http://www.w3.org/2000/svg','line');
// 				marksGroup.appendChild(line);
// 				line.setAttribute('x1',150);
// 				line.setAttribute('x2',170);
// 				line.setAttribute('y1',mark);
// 				line.setAttribute('y2',mark);
// 				line.setAttribute('stroke','red');
// 				line.setAttribute('stroke-width',2);
// 			};
// 		};
		
		// Garment Clip Paths
		var garmentBody = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		garmentBody.id = 'garmentBodyClip_'+this.id;
		defs.appendChild(garmentBody);
		garmentBody.setAttribute('fill','none');
		garmentBody.setAttribute('stroke','red');
		var garmentNeck = document.createElementNS('http://www.w3.org/2000/svg','polyline');
		garmentBody.appendChild(garmentNeck);
		garmentNeck.setAttribute('points',neckPointsString);
		var garmentTorso = document.createElementNS('http://www.w3.org/2000/svg','path');
		garmentBody.appendChild(garmentTorso)
		garmentTorso.setAttribute('d',chestD);
		
		// Speedo
		var nearSpeedoSide = {
			x: nearBottomAbRoll.cx-Math.cos(nearBottomAbRoll.rotation*Math.PI/180)*nearBottomAbRoll.width/2,
			y: nearBottomAbRoll.cy-Math.sin(nearBottomAbRoll.rotation*Math.PI/180)*nearBottomAbRoll.width/2,
		};
		var farSpeedoSide = {
			x: farBottomAbRoll.cx+Math.cos(farBottomAbRoll.rotation*Math.PI/180)*farBottomAbRoll.width/2,
			y: farBottomAbRoll.cy+Math.sin(farBottomAbRoll.rotation*Math.PI/180)*farBottomAbRoll.width/2,
		};
		var nearSpeedoBulge = {
			x: bulgeCenter.x-Math.sin((bulgeCenter.rotation+90)*Math.PI/180)*bulgeCenter.r,
			y: bulgeCenter.y+Math.cos((bulgeCenter.rotation+90)*Math.PI/180)*bulgeCenter.r,
		};
		var farSpeedoBulge = {
			x: bulgeCenter.x-Math.sin((bulgeCenter.rotation-90)*Math.PI/180)*bulgeCenter.r,
			y: bulgeCenter.y+Math.cos((bulgeCenter.rotation-90)*Math.PI/180)*bulgeCenter.r,
		};
		var speedoBottom = {
			x: bulgeCenter.x-Math.sin(bulgeCenter.rotation*Math.PI/180)*bulgeCenter.r*1.33,
			y: bulgeCenter.y+Math.cos(bulgeCenter.rotation*Math.PI/180)*bulgeCenter.r*1.33,
		};			
		var speedoD = 'M '+nearSpeedoSide.x+","+nearSpeedoSide.y+" ";
		speedoD += "C "+nearSpeedoSide.x+","+(nearSpeedoSide.y+torsoHeight*0.3)+" "+(nearSpeedoBulge.x+Math.sin(bulgeCenter.rotation*Math.PI/180)*bulgeCenter.r*1.33*0.55)+","+(nearSpeedoBulge.y-Math.cos(bulgeCenter.rotation*Math.PI/180)*bulgeCenter.r*1.33*0.55)+" "+nearSpeedoBulge.x+","+nearSpeedoBulge.y+" ";
		speedoD += "C "+(nearSpeedoBulge.x-Math.sin(bulgeCenter.rotation*Math.PI/180)*bulgeCenter.r*1.33*0.55)+","+(nearSpeedoBulge.y+Math.cos(bulgeCenter.rotation*Math.PI/180)*bulgeCenter.r*1.33*0.55)+" "+(speedoBottom.x-Math.sin((bulgeCenter.rotation+90)*Math.PI/180)*bulgeCenter.r*0.55)+","+(speedoBottom.y+Math.cos((bulgeCenter.rotation+90)*Math.PI/180)*bulgeCenter.r*0.55)+" "+speedoBottom.x+","+speedoBottom.y+" ";
		speedoD += "C "+(speedoBottom.x-Math.sin((bulgeCenter.rotation-90)*Math.PI/180)*bulgeCenter.r*0.55)+","+(speedoBottom.y+Math.cos((bulgeCenter.rotation-90)*Math.PI/180)*bulgeCenter.r*0.55)+" "+(farSpeedoBulge.x)+","+(farSpeedoBulge.y)+" "+farSpeedoBulge.x+","+farSpeedoBulge.y+" ";
		speedoD += "C "+(farSpeedoBulge.x+Math.sin(bulgeCenter.rotation*Math.PI/180)*bulgeCenter.r*1.33*0.55)+","+(farSpeedoBulge.y-Math.cos(bulgeCenter.rotation*Math.PI/180)*bulgeCenter.r*1.33*0.55)+" "+farSpeedoSide.x+","+(farSpeedoSide.y+torsoHeight*0.3)+" "+farSpeedoSide.x+","+farSpeedoSide.y+" ";
		var garmentSpeedoClip = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		garmentSpeedoClip.id = 'garmentSpeedoClip_'+this.id;
		defs.appendChild(garmentSpeedoClip)
		var garmentSpeedoPath = document.createElementNS('http://www.w3.org/2000/svg','path');
		garmentSpeedoClip.appendChild(garmentSpeedoPath);
		garmentSpeedoPath.setAttribute('d',speedoD);
		
		var garmentBellyClip = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		garmentBellyClip.id = 'garmentBellyClip_'+this.id;
		defs.appendChild(garmentBellyClip);
		for (var childNode of belly.children) {
			var nodeCopy = childNode.cloneNode(true);
			garmentBellyClip.appendChild(nodeCopy);
		};

		var garmentShouldersClip = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		garmentShouldersClip.id = 'garmentShouldersClip_'+this.id;
		defs.appendChild(garmentShouldersClip);
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		garmentBody.appendChild(circle);
		circle.setAttribute('cx',farShoulder.x);
		circle.setAttribute('cy',farShoulder.y);
		circle.setAttribute('r',shoulderWidth);
		var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
		garmentBody.appendChild(circle);
		circle.setAttribute('cx',nearShoulder.x);
		circle.setAttribute('cy',nearShoulder.y);
		circle.setAttribute('r',shoulderWidth);
		var polyline = document.createElementNS('http://www.w3.org/2000/svg','polyline');
		garmentBody.appendChild(polyline);
		polyline.setAttribute('points',pointsStringShoulders);
		
		garmentNearSleeveClip = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		garmentNearSleeveClip.id = 'nearSleeveClip_'+this.id;
		defs.appendChild(garmentNearSleeveClip);
		for (var shape of [nearUpperArm,nearLowerArm]) {
			for (var child of shape.childNodes) {
				var copy = child.cloneNode(true);
				garmentNearSleeveClip.appendChild(copy);
			};
		};
		
		garmentFarSleeveClip = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		garmentFarSleeveClip.id = 'farSleeveClip_'+this.id;
		defs.appendChild(garmentFarSleeveClip);
		for (var shape of [farUpperArm,farLowerArm]) {
			for (var child of shape.childNodes) {
				var copy = child.cloneNode(true);
				garmentFarSleeveClip.appendChild(copy);
			};
		};

		garmentNearLeggingClip = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		garmentNearLeggingClip.id = 'nearLeggingClip_'+this.id;
		defs.appendChild(garmentNearLeggingClip);
		var copy = nearHaunch.cloneNode(true);
		garmentNearLeggingClip.appendChild(copy);
		for (var shape of [nearHaunch,nearFoot,nearCalf,nearThigh]) {
			for (var child of shape.childNodes) {
				copy = child.cloneNode(true);
				garmentNearLeggingClip.appendChild(copy);
			};
		};
		
		garmentFarLeggingClip = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
		garmentFarLeggingClip.id = 'farLeggingClip_'+this.id;
		defs.appendChild(garmentFarLeggingClip);
		copy = farHaunch.cloneNode(true);
		garmentFarLeggingClip.appendChild(copy);
		for (var shape of [farHaunch,farFoot,farCalf,farThigh]) {
			for (var child of shape.childNodes) {
				copy = child.cloneNode(true);
				garmentFarLeggingClip.appendChild(copy);
			};
		};
		
		var longestSkirt = 0;
		for (var i =0;i<this.garments.length;i++) {
			var garment = this.garments[i];
			var garmentColor = "#" + ("0" + Math.round(255*garment.red).toString(16)).substr(-2) + ("0" + Math.round(255*garment.green).toString(16)).substr(-2) + ("0" + Math.round(255*garment.blue).toString(16)).substr(-2);
			var garmentBounds = {};
			var topBracket = Math.floor((garment.absoluteTop * 100) / (100 / garmentMarks.length));
			var topPercentage = (garment.absoluteTop * 100) / (100 / garmentMarks.length) - topBracket;
			garmentBounds.top = garmentMarks[topBracket] + topPercentage*(garmentMarks[topBracket+1] - garmentMarks[topBracket]);
			var bottomBracket = Math.floor((garment.absoluteBottom * 100) / (100 / garmentMarks.length));
			var bottomPercentage = (garment.absoluteBottom * 100) / (100 / garmentMarks.length) - bottomBracket;
			garmentBounds.bottom = garmentMarks[bottomBracket] + bottomPercentage*(garmentMarks[bottomBracket+1] - garmentMarks[bottomBracket]);
			if (garment.bottomType > 0.66 && garment.absoluteBottom > 0.4) {
				garmentBounds.bottom = 5 + (nearHipTop.y + farHipTop.y)/2;
			};
			if (isNaN(garmentBounds.top)) {garmentBounds.top = neckTop};
			if (isNaN(garmentBounds.bottom)) {garmentBounds.bottom = footBottom};
			var nearSleeveTop = nearNeck.x;
			var farSleeveTop = farNeck.x;
// 			console.log('brackets:',topBracket,bottomBracket);

			var garmentBand = document.createElementNS('http://www.w3.org/2000/svg','path');
			garmentBand.id = 'garmentBand_' + i + '_' + this.id;
			var d = 'M -250,'+garmentBounds.top+' '
			if (topBracket == 0) {
				nearSleeveTop = Math.min(garment.sleeveLength * 4,1)*nearShoulder.x;
				farSleeveTop = Math.min(garment.sleeveLength * 4,1)*farShoulder.x;
				var collarHeight;
				if (garment.collarHeight < 0.5) {
					collarHeight = (garment.collarHeight * 2 ) * (Math.min(nearNippleTop.y,farNippleTop.y) - shoulderTop);
				} else {
					collarHeight = (Math.min(nearNippleTop.y,farNippleTop.y) - shoulderTop) + (garment.collarHeight-0.5)*2 * (waistLine - Math.min(nearNippleTop.y,farNippleTop.y));
				};
				var collarWidth = 0.5*(farShoulder.x - nearShoulder.x)*garment.collarWidth;
				var collarControl = 2*collarWidth * garment.collarControl;
				var farBreastSlope = (farAreolae.x - farBreastAnchor.x) / (farAreolae.y - farBreastAnchor.y);
				var nearBreastSlope = (nearAreolae.x - nearBreastAnchor.x) / (nearAreolae.y - nearBreastAnchor.y);
				var breastSlope = ( nearBreastSlope + farBreastSlope ) / 2;
				var nearCollar = {
					x: neckBase.x - collarWidth,
					y: shoulderTop,
				};
				var farCollar = {
					x: neckBase.x + collarWidth,
					y: shoulderTop,
				};
				var collarPoint = {
					x: (nearCollar.x+farCollar.x)/2 + torsoFacing * (farShoulder.x - nearShoulder.x) * 0.2,
					y: Math.min(shoulderTop + collarHeight,garmentBounds.bottom),
				};
				if (collarPoint.y < (nearNippleTop.y+farNippleTop.y)/2 ) {
					collarPoint.x += 0.75*breastSlope*collarHeight;
				};
				nearSleeveTop = Math.min(nearSleeveTop,nearCollar.x);
				farSleeveTop = Math.max(farSleeveTop,farCollar.x);
				d += ' L '+ nearArmpit.x+','+nearArmpit.y+' ';
				d += ' L '+nearSleeveTop+','+nearCollar.y+' ';
				d += ' L '+nearCollar.x+','+farCollar.y+' ';
				d += ' C '+nearCollar.x+','+nearCollar.y+' '+(collarPoint.x-collarControl)+','+collarPoint.y+' '+collarPoint.x+','+collarPoint.y;
				d += ' C '+(collarPoint.x+collarControl)+','+collarPoint.y+' '+farCollar.x+','+farCollar.y+' '+farCollar.x+','+farCollar.y;
				d += ' L '+farSleeveTop+','+farCollar.y+' ';
				d += ' L '+farArmpit.x+','+farArmpit.y+' ';
				d += ' L 250,'+garmentBounds.top;
			} else if (topBracket == 1 || (topBracket == 2 && garmentBounds.top < Math.min(nearBreastCenter.y,farBreastCenter.y)+breastSize*0.8)) {
				var nearBreastOutside = nearBreastCenter.x - breastSize;
				var nearBreastInside = nearBreastCenter.x + breastSize;
				var farBreastInside = farBreastCenter.x - breastSize;
				var farBreastOutside = farBreastCenter.x + breastSize;
				if (nearBreastInside > farBreastInside && upperBodyAngle) {
					farBreastInside = nearBreastInside;
				} else {
					nearBreastInside = farBreastInside;				
				};
				var breastControl = breastSize*0.4;
				if (topBracket == 2) {breastControl *= -1;};
				d += 'C -250,'+garmentBounds.top+' '+nearBreastOutside+','+(garmentBounds.top+breastControl)+' '+nearBreastOutside+','+garmentBounds.top;
				d += 'C '+nearBreastOutside+','+(garmentBounds.top-breastControl)+' '+nearBreastInside+','+(garmentBounds.top-breastControl)+' '+nearBreastInside+','+garmentBounds.top+' ';
				d += 'L '+farBreastInside+','+garmentBounds.top;
				d += 'C '+farBreastInside+','+(garmentBounds.top-breastControl)+' '+farBreastOutside+','+(garmentBounds.top-breastControl)+' '+farBreastOutside+','+garmentBounds.top+' ';
				d += 'C '+farBreastOutside+','+(garmentBounds.top+breastControl)+' 250,'+garmentBounds.top+' 250,'+garmentBounds.top;
			} else if (topBracket == 2) {
				console.log('bottom curve on garment');
				d += ' h500 ';
			} else if (topBracket == 3) {
				var nearHipJointSide = nearHipJoint.x - thighWidth * 0.5;
				var farHipJointSide = farHipJoint.x + thighWidth * 0.5;
				var waistControl = (farHipJointSide - nearHipJointSide) * 0.1;
				d += 'L '+nearHipJointSide+','+garmentBounds.top+' ';
				d += 'C '+nearHipJointSide+','+(garmentBounds.top+waistControl)+' '+farHipJointSide+','+(garmentBounds.top+waistControl)+' '+farHipJointSide+','+garmentBounds.top+' ';
				d += 'L 250,'+garmentBounds.top+' ';
			} else if (topBracket == 4) {
				d += ' h500 '; // genital pouches?
			} else {
				d += ' h500 ';
			};
			d += ' L 250,'+garmentBounds.bottom;
			if (bottomBracket == 0) { // choker
				var neckControl = (farNeck.x-nearNeck.x)*0.1;
				d += 'L '+farNeck.x+','+garmentBounds.bottom+' ';
				d += 'C '+farNeck.x+','+(garmentBounds.bottom+neckControl)+' '+nearNeck.x+','+(garmentBounds.bottom+neckControl)+' '+nearNeck.x+','+garmentBounds.bottom+' ';
				d += 'L -250,'+garmentBounds.bottom+' ';
			} else if (bottomBracket == 1) { // scarf ?
// 				var chestControl = (farShoulder.x-nearShoulder.x)*0.4;
// 				var nearOutsideShoulder = nearShoulder.x-shoulderWidth;
// 				var farOutsideShoulder = farShoulder.x+shoulderWidth;
// 				d += 'L '+farOutsideShoulder+','+garmentBounds.bottom+' ';
// 				d += 'C '+farOutsideShoulder+','+(garmentBounds.bottom+chestControl)+' '+nearOutsideShoulder+','+(garmentBounds.bottom+chestControl)+' '+nearOutsideShoulder+','+garmentBounds.bottom+' ';
// 				d += 'L -250,'+garmentBounds.bottom+' ';
				var nearBreastOutside = nearBreastCenter.x - breastSize;
				var nearBreastInside = nearBreastCenter.x + breastSize;
				var farBreastInside = farBreastCenter.x - breastSize;
				var farBreastOutside = farBreastCenter.x + breastSize;
				if (nearBreastInside > farBreastInside && upperBodyAngle) {
					farBreastInside = nearBreastInside;
				} else {
					nearBreastInside = farBreastInside;				
				};
				var breastControl = breastSize*0.4;
				d += 'C 250,'+garmentBounds.bottom+' '+farBreastOutside+','+(garmentBounds.bottom+breastControl)+' '+farBreastOutside+','+garmentBounds.bottom;
				d += 'C '+farBreastOutside+','+(garmentBounds.bottom-breastControl)+' '+farBreastInside+','+(garmentBounds.bottom-breastControl)+' '+farBreastInside+','+garmentBounds.bottom+' ';
				d += 'L '+farBreastInside+','+garmentBounds.bottom+' ';
				d += 'C '+nearBreastInside+','+(garmentBounds.bottom-breastControl)+' '+nearBreastOutside+','+(garmentBounds.bottom-breastControl)+' '+nearBreastOutside+','+garmentBounds.bottom+' ';
				d += 'C '+nearBreastOutside+','+(garmentBounds.bottom+breastControl)+' -250,'+garmentBounds.bottom+' -250,'+garmentBounds.bottom;
			} else if (bottomBracket == 2) { // nips to waist
				if (garmentBounds.bottom < Math.min(nearBreastCenter.y,farBreastCenter.y)+breastSize*0.8) { // underbreast curves
					var nearBreastOutside = nearBreastCenter.x - breastSize;
					var nearBreastInside = nearBreastCenter.x + breastSize;
					var farBreastInside = farBreastCenter.x - breastSize;
					var farBreastOutside = farBreastCenter.x + breastSize;
					if (nearBreastInside > farBreastInside && upperBodyAngle) {
						farBreastInside = nearBreastInside;
					} else if (nearBreastInside > farBreastInside) {
						nearBreastInside = farBreastInside;				
					};
					var breastControl = breastSize*-0.4;
					d += 'C 250,'+garmentBounds.bottom+' '+farBreastOutside+','+(garmentBounds.bottom+breastControl)+' '+farBreastOutside+','+garmentBounds.bottom;
					d += 'C '+farBreastOutside+','+(garmentBounds.bottom-breastControl)+' '+farBreastInside+','+(garmentBounds.bottom-breastControl)+' '+farBreastInside+','+garmentBounds.bottom+' ';
					d += 'L '+farBreastInside+','+garmentBounds.bottom+' ';
					d += 'C '+nearBreastInside+','+(garmentBounds.bottom-breastControl)+' '+nearBreastOutside+','+(garmentBounds.bottom-breastControl)+' '+nearBreastOutside+','+garmentBounds.bottom+' ';
					d += 'C '+nearBreastOutside+','+(garmentBounds.bottom+breastControl)+' -250,'+garmentBounds.bottom+' -250,'+garmentBounds.bottom;
				} else { // across belly
					d += ' h-500 z'
					console.log('missing curve');
				};
			} else if (bottomBracket == 3) { // waist to hips
				d += ' h-500 z'
			} else if (bottomBracket == 4) { // hips down -- cup genitals, skirts
				d += ' h-500 z'
			} else if (bottomBracket == 5) { // floor-length skirt
				d += ' h-500 z'
			} else {
				d += ' h-500 z'
			};
			garmentBand.setAttribute('d',d);
			garmentBand.setAttribute('fill',garmentColor);
			garmentBand.setAttribute('stroke','black');
			garmentBand.setAttribute('stroke-width',1);
			defs.appendChild(garmentBand);
			var garmentD = d;
			
			var garmentBandClip = document.createElementNS('http://www.w3.org/2000/svg','clipPath');
			defs.appendChild(garmentBandClip);
			garmentBandClip.id = 'garmentBandClip_'+i+'_'+this.id;
			var garmentBandPath = document.createElementNS('http://www.w3.org/2000/svg','path');
			garmentBandPath.setAttribute('d',d);
			garmentBandClip.appendChild(garmentBandPath);
			
			var torsoGarmentBand = document.createElementNS('http://www.w3.org/2000/svg','use');
			view.setHref(torsoGarmentBand,'garmentBand_'+i+'_'+this.id);
			torsoGarmentGroup.appendChild(torsoGarmentBand);
			torsoGarmentBand.setAttribute('clip-path','url(#garmentBodyClip_'+this.id+')');
			
			var bellyGarmentBand = document.createElementNS('http://www.w3.org/2000/svg','use');
			view.setHref(bellyGarmentBand,'garmentBand_'+i+'_'+this.id);
			belly.appendChild(bellyGarmentBand);
			bellyGarmentBand.setAttribute('clip-path','url(#garmentBellyClip_'+this.id+')');
			
			if (garment.absoluteBottom > 0.4 && garment.bottomType > 0.66) {
				var bellyBottomHeight = Math.max(bellyBottom-nearHipTop.y,bellyBottom-farHipTop.y);
				var bellyBottomGarmentBand = document.createElementNS('http://www.w3.org/2000/svg','rect');
				bellyBottomGarmentBand.setAttribute('x',-250);
				bellyBottomGarmentBand.setAttribute('width',500);
				bellyBottomGarmentBand.setAttribute('y',(nearHipTop.y+farHipTop.y)/2);
				bellyBottomGarmentBand.setAttribute('height',(garment.absoluteBottom-0.4)*5*bellyBottomHeight);
				bellyBottomGarmentBand.setAttribute('fill',garmentColor);
				belly.appendChild(bellyBottomGarmentBand);
				bellyBottomGarmentBand.setAttribute('clip-path','url(#garmentBellyClip_'+this.id+')');
			};
			
			// Breast GarmentBands
			for (var breast of breastsArray) {
				if (breast.id) {
					var clipPathName = breast.id.replace('_','ClipPath_');
					var garmentBand = document.createElementNS('http://www.w3.org/2000/svg','use');
					view.setHref(garmentBand,'garmentBand_'+i+'_'+this.id);
					breast.appendChild(garmentBand);
					garmentBand.setAttribute('clip-path','url(#'+clipPathName+')');
				};
			};

// 			var unclippedGarmentBand = document.createElementNS('http://www.w3.org/2000/svg','use');
// 			view.setHref(unclippedGarmentBand,'garmentBand_'+i+'_'+this.id);
// 			svg.appendChild(unclippedGarmentBand);

			// Sleeves
			
			var nearSleeveEnd = {x:nearSleeveTop,y:0}, farSleeveEnd = {x:farSleeveTop,y:0};
			if (garment.sleeveLength < 0.25) {
				nearSleeveEnd.x = nearNeck.x;
				nearSleeveEnd.y = nearNeck.y;
				farSleeveEnd.x = farNeck.x;
				farSleeveEnd.y = farNeck.y;
			} else if (garment.sleeveLength < 0.5) {
				var topSleeveLength = (garment.sleeveLength - 0.25) * 4;
				nearSleeveEnd.x = nearShoulder.x * (1-topSleeveLength) + nearElbow.x * topSleeveLength;
				nearSleeveEnd.y = nearShoulder.y * (1-topSleeveLength) + nearElbow.y * topSleeveLength;
				farSleeveEnd.x = farShoulder.x * (1-topSleeveLength) + farElbow.x * topSleeveLength;
				farSleeveEnd.y = farShoulder.y * (1-topSleeveLength) + farElbow.y * topSleeveLength;
			} else if (garment.sleeveLength < 0.75) {
				var bottomSleeveLength = (garment.sleeveLength - 0.5) * 4;
				nearSleeveEnd.x = nearElbow.x * (1-bottomSleeveLength) + nearWrist.x * bottomSleeveLength;
				nearSleeveEnd.y = nearElbow.y * (1-bottomSleeveLength) + nearWrist.y * bottomSleeveLength;
				farSleeveEnd.x = farElbow.x * (1-bottomSleeveLength) + farWrist.x * bottomSleeveLength;
				farSleeveEnd.y = farElbow.y * (1-bottomSleeveLength) + farWrist.y * bottomSleeveLength;
			} else {
				var bottomSleeveLength = (garment.sleeveLength - 0.75) * 4;
				nearSleeveEnd.x = nearWrist.x;
				nearSleeveEnd.y = nearWrist.y + bottomSleeveLength * totalHeight * 0.1;
				farSleeveEnd.x = farWrist.x;
				farSleeveEnd.y = farWrist.y + bottomSleeveLength * totalHeight * 0.1;
			};
// 			var nearSleeveGuide = document.createElementNS('http://www.w3.org/2000/svg','circle');
// 			nearSleeveGuide.setAttribute('cx',nearSleeveEnd.x);
// 			nearSleeveGuide.setAttribute('cy',nearSleeveEnd.y);
// 			nearSleeveGuide.setAttribute('r',5);
// 			nearSleeveGuide.setAttribute('fill',garmentColor);
// 			nearSleeveGuide.setAttribute('stroke','red');
// 			svg.appendChild(nearSleeveGuide);
// 			var farSleeveGuide = document.createElementNS('http://www.w3.org/2000/svg','circle');
// 			farSleeveGuide.setAttribute('cx',farSleeveEnd.x);
// 			farSleeveGuide.setAttribute('cy',farSleeveEnd.y);
// 			farSleeveGuide.setAttribute('r',5);
// 			farSleeveGuide.setAttribute('fill',garmentColor);
// 			farSleeveGuide.setAttribute('stroke','red');
// 			svg.appendChild(farSleeveGuide);
			
			var sleeveWidth = garment.sleeveWidth * totalHeight * 0.05;
			sleeveWidth = totalHeight * 0.05;
			
			// Near Sleeve
			
			var nearCuffRotation;
			nearSleeveShape = document.createElementNS('http://www.w3.org/2000/svg','g');
			nearSleeveShape.id = 'nearSleeveShape';
			svg.appendChild(nearSleeveShape);
			nearSleeveShape.setAttribute('fill',garmentColor);
			nearSleeveShape.setAttribute('stroke','black');
			nearSleeveShape.setAttribute('stroke-linejoin','round');
			nearSleeveShoulder = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearSleeveShape.appendChild(nearSleeveShoulder);
			nearSleeveUpperArm = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearSleeveShape.appendChild(nearSleeveUpperArm);
			nearSleeveForearm = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearSleeveShape.appendChild(nearSleeveForearm);
			var nearSleeveFlood = document.createElementNS('http://www.w3.org/2000/svg','g');
			nearSleeveFlood.id = 'nearSleeveFlood'+i+'_'+this.id;
			defs.appendChild(nearSleeveFlood);
			nearSleeveCuff = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearSleeveFlood.appendChild(nearSleeveCuff);
			nearSleeveCuff.setAttribute('stroke','black');
			nearSleeveCuff.setAttribute('fill',garmentColor);
			var nearSleeveFloodPath = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearSleeveFlood.appendChild(nearSleeveFloodPath);
			nearSleeveFloodPath.setAttribute('fill','none');
			nearSleeveFloodPath.setAttribute('stroke',garmentColor);
			nearSleeveFloodPath.setAttribute('stroke-width',totalHeight * 0.2);
			nearSleeveFloodPath.setAttribute('stroke-linejoin','round');
			nearSleeveFloodPath.setAttribute('stroke-linecap','butt');
			var cuffD = 'M '+nearSleeveEnd.x+','+nearSleeveEnd.y+' ';
			var floodD = 'M '+nearNeck.x+','+nearNeck.y+' ';
			d = 'M '+nearNeck.x+','+nearNeck.y+' ';
			if (garment.sleeveLength > 0.25) { // over shoulder
				floodD += 'L '+nearShoulder.x+','+nearShoulder.y + ' ';
			};
			if (garment.sleeveLength > 0.5) { // down upper arm
				floodD += 'L '+nearElbow.x + ',' + nearElbow.y + ' ';
			};
			if (garment.sleeveLength > 0.75) { // down forearm
				floodD += 'L '+nearWrist.x + ',' + nearWrist.y + ' ';
			};
			floodD += 'L '+nearSleeveEnd.x+','+nearSleeveEnd.y+ ' ';
			if (garment.sleeveLength < 0.25) { // shoulder cuff
				nearCuffRotation = 90;
			} else if (garment.sleeveLength < 0.5) { // upper arm cuff
				nearCuffRotation = this.pos('nearUpperArmLift') * -180/Math.PI;
			} else if (garment.sleeveLength < 0.75) { // forearm cuff
				nearCuffRotation = this.pos('nearForearmLift') * -180/Math.PI;
			} else { // hanging cuff
				nearCuffRotation = 0;
			};
			nearSleeveCuff.setAttribute('transform','rotate('+nearCuffRotation+' '+nearSleeveEnd.x+' '+nearSleeveEnd.y+')');
			cuffD += 'c '+(sleeveWidth/2)+',0 '+sleeveWidth+',5 '+sleeveWidth+',5 ';
			cuffD += 'l 0,-10 ';
			cuffD += 'l '+(sleeveWidth*-2)+',0 ';
			cuffD += 'l 0,10';
			cuffD += 'c 0,0 '+(sleeveWidth/2)+',-5  '+sleeveWidth+',-5 ';
			if (garment.sleeveLength > 0.75) { // to wrist
				d += 'L '+nearWrist.x + ',' + nearWrist.y + ' ';
			};
			if (garment.sleeveLength > 0.5) { // to elbow
				d += 'L '+nearElbow.x + ',' + nearElbow.y + ' ';
			};
			if (garment.sleeveLength > 0.25) { // to shoulder
				d += 'L '+nearShoulder.x+','+nearShoulder.y + ' ';
			};
			d += 'L '+nearNeck.x+','+nearNeck.y + ' ';
			nearSleeveFloodPath.setAttribute('d',floodD);
			nearSleeveCuff.setAttribute('d',cuffD);
			
			// Far Sleeve
			
			var farCuffRotation;
			farSleeveShape = document.createElementNS('http://www.w3.org/2000/svg','g');
			farSleeveShape.id = 'farSleeveShape';
			svg.appendChild(farSleeveShape);
			farSleeveShape.setAttribute('fill',garmentColor);
			farSleeveShape.setAttribute('stroke','black');
			farSleeveShape.setAttribute('stroke-linejoin','round');
			farSleeveShoulder = document.createElementNS('http://www.w3.org/2000/svg','path');
			farSleeveShape.appendChild(farSleeveShoulder);
			farSleeveUpperArm = document.createElementNS('http://www.w3.org/2000/svg','path');
			farSleeveShape.appendChild(farSleeveUpperArm);
			farSleeveForearm = document.createElementNS('http://www.w3.org/2000/svg','path');
			farSleeveShape.appendChild(farSleeveForearm);
			var farSleeveFlood = document.createElementNS('http://www.w3.org/2000/svg','g');
			farSleeveFlood.id = 'farSleeveFlood'+i+'_'+this.id;
			defs.appendChild(farSleeveFlood);
			farSleeveCuff = document.createElementNS('http://www.w3.org/2000/svg','path');
			farSleeveFlood.appendChild(farSleeveCuff);
			farSleeveCuff.setAttribute('stroke','black');
			farSleeveCuff.setAttribute('fill',garmentColor);
			var farSleeveFloodPath = document.createElementNS('http://www.w3.org/2000/svg','path');
			farSleeveFlood.appendChild(farSleeveFloodPath);
			farSleeveFloodPath.setAttribute('fill','none');
			farSleeveFloodPath.setAttribute('stroke',garmentColor);
			farSleeveFloodPath.setAttribute('stroke-width',totalHeight * 0.2);
			farSleeveFloodPath.setAttribute('stroke-linejoin','round');
			farSleeveFloodPath.setAttribute('stroke-linecap','butt');
			var cuffD = 'M '+farSleeveEnd.x+','+farSleeveEnd.y+' ';
			var floodD = 'M '+farNeck.x+','+farNeck.y+' ';
			d = 'M '+farNeck.x+','+farNeck.y+' ';
			if (garment.sleeveLength > 0.25) { // over shoulder
				floodD += 'L '+farShoulder.x+','+farShoulder.y + ' ';
			};
			if (garment.sleeveLength > 0.5) { // down upper arm
				floodD += 'L '+farElbow.x + ',' + farElbow.y + ' ';
			};
			if (garment.sleeveLength > 0.75) { // down forearm
				floodD += 'L '+farWrist.x + ',' + farWrist.y + ' ';
			};
			floodD += 'L '+farSleeveEnd.x+','+farSleeveEnd.y+ ' ';
			if (garment.sleeveLength < 0.25) { // shoulder cuff
				farCuffRotation = 90;
			} else if (garment.sleeveLength < 0.5) { // upper arm cuff
				farCuffRotation = this.pos('farUpperArmLift') * -180/Math.PI;
			} else if (garment.sleeveLength < 0.75) { // forearm cuff
				farCuffRotation = this.pos('farForearmLift') * -180/Math.PI;
			} else { // hanging cuff
				farCuffRotation = 0;
			};
				farSleeveCuff.setAttribute('transform','rotate('+farCuffRotation+' '+farSleeveEnd.x+' '+farSleeveEnd.y+')');
			cuffD += 'c '+(sleeveWidth/2)+',0 '+sleeveWidth+',5 '+sleeveWidth+',5 ';
			cuffD += 'l 0,-10 ';
			cuffD += 'l '+(sleeveWidth*-2)+',0 ';
			cuffD += 'l 0,10';
			cuffD += 'c 0,0 '+(sleeveWidth/2)+',-5  '+sleeveWidth+',-5 ';
			if (garment.sleeveLength > 0.75) { // to wrist
				d += 'L '+farWrist.x + ',' + farWrist.y + ' ';
			};
			if (garment.sleeveLength > 0.5) { // to elbow
				d += 'L '+farElbow.x + ',' + farElbow.y + ' ';
			};
			if (garment.sleeveLength > 0.25) { // to shoulder
				d += 'L '+farShoulder.x+','+farShoulder.y + ' ';
			};
			d += 'L '+farNeck.x+','+farNeck.y + ' ';
			farSleeveFloodPath.setAttribute('d',floodD);
			farSleeveCuff.setAttribute('d',cuffD);
			
			// Place Sleves
			
			if (garment.absoluteTop < 0.15) {
				var nearSleeveFloodUse = document.createElementNS('http://www.w3.org/2000/svg','use');
				nearSleeveGroup.appendChild(nearSleeveFloodUse);
				view.setHref(nearSleeveFloodUse,'nearSleeveFlood'+i+'_'+this.id);
				nearSleeveFloodUse.setAttribute('clip-path','url(#nearSleeveClip_'+this.id+')');

			
				var farSleeveFloodUse = document.createElementNS('http://www.w3.org/2000/svg','use');
				farSleeveGroup.appendChild(farSleeveFloodUse);
				view.setHref(farSleeveFloodUse,'farSleeveFlood'+i+'_'+this.id);
				farSleeveFloodUse.setAttribute('clip-path','url(#farSleeveClip_'+this.id+')');
			};

			// Leggings
			var nearLeggingEnd = {}, farLeggingEnd = {};
			var legSeam = 2.5*(garment.absoluteBottom-0.6);
			if (legSeam < 0.25) {
				var topLeggingLength = legSeam * 4;
				nearLeggingEnd.x = nearHipTop.x * (1-topLeggingLength) + nearHipJoint.x * topLeggingLength;
				nearLeggingEnd.y = nearHipTop.y * (1-topLeggingLength) + nearHipJoint.y * topLeggingLength;
				farLeggingEnd.x = farHipTop.x * (1-topLeggingLength) + farHipJoint.x * topLeggingLength;
				farLeggingEnd.y = farHipTop.y * (1-topLeggingLength) + farHipJoint.y * topLeggingLength;
			} else if (legSeam < 0.5) {
				var topLeggingLength = (legSeam - 0.25) * 4;
				nearLeggingEnd.x = nearHipJoint.x * (1-topLeggingLength) + nearKnee.x * topLeggingLength;
				nearLeggingEnd.y = nearHipJoint.y * (1-topLeggingLength) + nearKnee.y * topLeggingLength;
				farLeggingEnd.x = farHipJoint.x * (1-topLeggingLength) + farKnee.x * topLeggingLength;
				farLeggingEnd.y = farHipJoint.y * (1-topLeggingLength) + farKnee.y * topLeggingLength;
			} else if (legSeam < 0.75) {
				var bottomLeggingLength = (legSeam - 0.5) * 4;
				nearLeggingEnd.x = nearKnee.x * (1-bottomLeggingLength) + nearAnkle.x * bottomLeggingLength;
				nearLeggingEnd.y = nearKnee.y * (1-bottomLeggingLength) + nearAnkle.y * bottomLeggingLength;
				farLeggingEnd.x = farKnee.x * (1-bottomLeggingLength) + farAnkle.x * bottomLeggingLength;
				farLeggingEnd.y = farKnee.y * (1-bottomLeggingLength) + farAnkle.y * bottomLeggingLength;
			} else {
				var bottomLeggingLength = (legSeam - 0.75) * 4;
				nearLeggingEnd.x = nearAnkle.x * (1-bottomLeggingLength) + nearToes.x * bottomLeggingLength;
				nearLeggingEnd.y = nearAnkle.y * (1-bottomLeggingLength) + nearToes.y * bottomLeggingLength;
				farLeggingEnd.x = farAnkle.x * (1-bottomLeggingLength) + farToes.x * bottomLeggingLength;
				farLeggingEnd.y = farAnkle.y * (1-bottomLeggingLength) + farToes.y * bottomLeggingLength;
			};
// 			var nearLeggingGuide = document.createElementNS('http://www.w3.org/2000/svg','circle');
// 			nearLeggingGuide.setAttribute('cx',nearLeggingEnd.x);
// 			nearLeggingGuide.setAttribute('cy',nearLeggingEnd.y);
// 			nearLeggingGuide.setAttribute('r',5);
// 			nearLeggingGuide.setAttribute('fill',garmentColor);
// 			nearLeggingGuide.setAttribute('stroke','red');
// 			svg.appendChild(nearLeggingGuide);
// 			var farLeggingGuide = document.createElementNS('http://www.w3.org/2000/svg','circle');
// 			farLeggingGuide.setAttribute('cx',farLeggingEnd.x);
// 			farLeggingGuide.setAttribute('cy',farLeggingEnd.y);
// 			farLeggingGuide.setAttribute('r',5);
// 			farLeggingGuide.setAttribute('fill',garmentColor);
// 			farLeggingGuide.setAttribute('stroke','red');
// 			svg.appendChild(farLeggingGuide);
			
			var leggingWidth = garment.leggingWidth * totalHeight * 0.1;
			leggingWidth = totalHeight * 0.1;
			
			// Near Legging
			
			var nearCuffRotation;
			nearLeggingShape = document.createElementNS('http://www.w3.org/2000/svg','g');
			nearLeggingShape.id = 'nearLeggingShape';
			svg.appendChild(nearLeggingShape);
			nearLeggingShape.setAttribute('fill',garmentColor);
			nearLeggingShape.setAttribute('stroke','black');
			nearLeggingShape.setAttribute('stroke-linejoin','round');
			nearLeggingHip = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearLeggingShape.appendChild(nearLeggingHip);
			nearLeggingUpperArm = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearLeggingShape.appendChild(nearLeggingUpperArm);
			nearLeggingForearm = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearLeggingShape.appendChild(nearLeggingForearm);
			var nearLeggingFlood = document.createElementNS('http://www.w3.org/2000/svg','g');
			nearLeggingFlood.id = 'nearLeggingFlood'+i+'_'+this.id;
			defs.appendChild(nearLeggingFlood);
			nearLeggingCuff = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearLeggingFlood.appendChild(nearLeggingCuff);
			nearLeggingCuff.setAttribute('stroke','black');
			nearLeggingCuff.setAttribute('fill',garmentColor);
			var nearLeggingFloodPath = document.createElementNS('http://www.w3.org/2000/svg','path');
			nearLeggingFlood.appendChild(nearLeggingFloodPath);
			nearLeggingFloodPath.setAttribute('fill','none');
			nearLeggingFloodPath.setAttribute('stroke',garmentColor);
			nearLeggingFloodPath.setAttribute('stroke-width',totalHeight * 0.2);
			nearLeggingFloodPath.setAttribute('stroke-linejoin','round');
			nearLeggingFloodPath.setAttribute('stroke-linecap','butt');
			var cuffD = 'M '+nearLeggingEnd.x+','+nearLeggingEnd.y+' ';
			var floodD = 'M '+nearHipTop.x+','+nearHipTop.y+' ';
			d = 'M '+nearHipTop.x+','+nearHipTop.y+' ';
			if (legSeam > 0.25) { // down hip
				floodD += 'L '+nearHipJoint.x+','+nearHipJoint.y + ' ';
			};
			if (legSeam > 0.5) { // down upper leg
				floodD += 'L '+nearKnee.x + ',' + nearKnee.y + ' ';
			};
			if (legSeam > 0.75) { // down lower leg
				floodD += 'L '+nearAnkle.x + ',' + nearAnkle.y + ' ';
			};
			floodD += 'L '+nearLeggingEnd.x+','+nearLeggingEnd.y+ ' ';
			if (garment.absoluteBottom > 0.4 && garment.bottomType <= 0.66 && garment.bottomType <= 0.66) {
				if (legSeam < 0.25) { // hip cuff
					nearCuffRotation = 0;
				} else if (legSeam < 0.5) { // upper leg cuff
					nearCuffRotation = this.pos('nearThighLift') * -180/Math.PI;
				} else if (legSeam < 0.75) { // lower leg cuff
					nearCuffRotation = this.pos('nearKneeBend') * -180/Math.PI;
				} else { // footie cuff
					nearCuffRotation = this.pos('nearFootPoint') * -180/Math.PI;
				};
				nearLeggingCuff.setAttribute('transform','rotate('+nearCuffRotation+' '+nearLeggingEnd.x+' '+nearLeggingEnd.y+')');
			};
			cuffD += 'c '+(leggingWidth/2)+',0 '+leggingWidth+',5 '+leggingWidth+',5 ';
			cuffD += 'l 0,-10 ';
			cuffD += 'l '+(leggingWidth*-2)+',0 ';
			cuffD += 'l 0,10';
			cuffD += 'c 0,0 '+(leggingWidth/2)+',-5  '+leggingWidth+',-5 ';
			nearLeggingFloodPath.setAttribute('d',floodD);
			nearLeggingCuff.setAttribute('d',cuffD);
			
			// Far Legging
			
			var farCuffRotation;
			farLeggingShape = document.createElementNS('http://www.w3.org/2000/svg','g');
			farLeggingShape.id = 'farLeggingShape';
			svg.appendChild(farLeggingShape);
			farLeggingShape.setAttribute('fill',garmentColor);
			farLeggingShape.setAttribute('stroke','black');
			farLeggingShape.setAttribute('stroke-linejoin','round');
			farLeggingHip = document.createElementNS('http://www.w3.org/2000/svg','path');
			farLeggingShape.appendChild(farLeggingHip);
			farLeggingUpperArm = document.createElementNS('http://www.w3.org/2000/svg','path');
			farLeggingShape.appendChild(farLeggingUpperArm);
			farLeggingForearm = document.createElementNS('http://www.w3.org/2000/svg','path');
			farLeggingShape.appendChild(farLeggingForearm);
			var farLeggingFlood = document.createElementNS('http://www.w3.org/2000/svg','g');
			farLeggingFlood.id = 'farLeggingFlood'+i+'_'+this.id;
			defs.appendChild(farLeggingFlood);
			farLeggingCuff = document.createElementNS('http://www.w3.org/2000/svg','path');
			farLeggingFlood.appendChild(farLeggingCuff);
			farLeggingCuff.setAttribute('stroke','black');
			farLeggingCuff.setAttribute('fill',garmentColor);
			var farLeggingFloodPath = document.createElementNS('http://www.w3.org/2000/svg','path');
			farLeggingFlood.appendChild(farLeggingFloodPath);
			farLeggingFloodPath.setAttribute('fill','none');
			farLeggingFloodPath.setAttribute('stroke',garmentColor);
			farLeggingFloodPath.setAttribute('stroke-width',totalHeight * 0.2);
			farLeggingFloodPath.setAttribute('stroke-linejoin','round');
			farLeggingFloodPath.setAttribute('stroke-linecap','butt');
			var cuffD = 'M '+farLeggingEnd.x+','+farLeggingEnd.y+' ';
			var floodD = 'M '+farHipTop.x+','+farHipTop.y+' ';
			d = 'M '+farHipTop.x+','+farHipTop.y+' ';
			if (legSeam > 0.25) { // down hip
				floodD += 'L '+farHipJoint.x+','+farHipJoint.y + ' ';
			};
			if (legSeam > 0.5) { // down upper leg
				floodD += 'L '+farKnee.x + ',' + farKnee.y + ' ';
			};
			if (legSeam > 0.75) { // down lower leg
				floodD += 'L '+farAnkle.x + ',' + farAnkle.y + ' ';
			};
			floodD += 'L '+farLeggingEnd.x+','+farLeggingEnd.y+ ' ';
			if (garment.bottomType <= 0.66) {
				if (legSeam < 0.25) { // hip cuff
					farCuffRotation = 0;
				} else if (legSeam < 0.5) { // upper leg cuff
					farCuffRotation = this.pos('farThighLift') * -180/Math.PI;
				} else if (legSeam < 0.75) { // lower leg cuff
					farCuffRotation = this.pos('farKneeBend') * -180/Math.PI;
				} else { // footie cuff
					farCuffRotation = this.pos('farFootPoint') * -180/Math.PI;
				};
				farLeggingCuff.setAttribute('transform','rotate('+farCuffRotation+' '+farLeggingEnd.x+' '+farLeggingEnd.y+')');
			};
			cuffD += 'c '+(leggingWidth/2)+',0 '+leggingWidth+',5 '+leggingWidth+',5 ';
			cuffD += 'l 0,-10 ';
			cuffD += 'l '+(leggingWidth*-2)+',0 ';
			cuffD += 'l 0,10';
			cuffD += 'c 0,0 '+(leggingWidth/2)+',-5  '+leggingWidth+',-5 ';
			farLeggingFloodPath.setAttribute('d',floodD);
			farLeggingCuff.setAttribute('d',cuffD);
			
			// Place Leggings
			if (garment.absoluteBottom > 0.4 && garment.bottomType > 0.33 && garment.bottomType <= 0.66) {
			
				var nearLeggingFloodUse = document.createElementNS('http://www.w3.org/2000/svg','use');
				nearLeggingGroup.appendChild(nearLeggingFloodUse);
				view.setHref(nearLeggingFloodUse,'nearLeggingFlood'+i+'_'+this.id);
				nearLeggingFloodUse.setAttribute('clip-path','url(#nearLeggingClip_'+this.id+')');

				var farLeggingFloodUse = document.createElementNS('http://www.w3.org/2000/svg','use');
				farLeggingGroup.appendChild(farLeggingFloodUse);
				view.setHref(farLeggingFloodUse,'farLeggingFlood'+i+'_'+this.id);
				farLeggingFloodUse.setAttribute('clip-path','url(#farLeggingClip_'+this.id+')');
			};
			
			if (garment.absoluteBottom > 0.6 && garment.bottomType > 0.66) {
			
				var skirt = document.createElementNS('http://www.w3.org/2000/svg','g');
				skirtGroup.appendChild(skirt);

				skirt.setAttribute('stroke','none');
				skirt.setAttribute('fill',garmentColor);

				var nearSkirtSideFloodPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				skirt.appendChild(nearSkirtSideFloodPath);
				nearSkirtSideFloodPath.setAttribute('stroke','none');
				nearSkirtSideFloodPath.setAttribute('fill',garmentColor);
				nearSkirtSideFloodPath.setAttribute('clip-path','url(#nearLeggingClip_'+this.id+')');
				var nearFloodD = 'M '+nearHipTop.x+','+nearHipTop.y+' ';

				var farSkirtSideFloodPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				skirt.appendChild(farSkirtSideFloodPath);
				farSkirtSideFloodPath.setAttribute('stroke','none');
				farSkirtSideFloodPath.setAttribute('fill',garmentColor);
				farSkirtSideFloodPath.setAttribute('clip-path','url(#farLeggingClip_'+this.id+')');
				var farFloodD = 'M '+farHipTop.x+','+farHipTop.y+' ';
				
				var relativeProportion, farHem, nearHem;
				
				var hemFlare = garment.hemFlare * totalHeight * 0.1;
				
				var nearSkirt = document.createElementNS('http://www.w3.org/2000/svg','path');
				skirt.appendChild(nearSkirt);
				var nearSkirtD = "M "+spineBase.x+","+(farHipTop.y+nearHipTop.y)/2+" ";

				var farSkirt = document.createElementNS('http://www.w3.org/2000/svg','path');
				skirt.appendChild(farSkirt);
				var farSkirtD = "M "+spineBase.x+","+(farHipTop.y+nearHipTop.y)/2+" ";
				
				farSkirtD += "L "+farHipTop.x+","+farHipTop.y+" ";
				nearSkirtD += "L "+nearHipTop.x+","+nearHipTop.y+" ";
								
				if (garment.absoluteBottom < 0.6) { // hip flare
					relativeProportion = 10*(garment.absoluteBottom - 0.4);
					farHem = {
						x: farHip.x*relativeProportion + farHipTop.x*(1-relativeProportion) + hemFlare,
						y: farHip.y*relativeProportion + farHipTop.y*(1-relativeProportion),
					};
					nearHem = {
						x: nearHip.x*relativeProportion + nearHipTop.x*(1-relativeProportion) - hemFlare,
						y: nearHip.y*relativeProportion + nearHipTop.y*(1-relativeProportion),
					};
					farSkirtD += 'C '+farHipControl.x+' '+farHipControl.y+' '+farHem.x+','+(3*farHem.y+farHipTop.y)/4+' '+farHem.x+','+farHem.y+' ';
					nearSkirtD += 'C '+nearHipControl.x+' '+nearHipControl.y+' '+nearHem.x+','+(3*nearHem.y+nearHipTop.y)/4+' '+nearHem.x+','+nearHem.y+' ';
					nearFloodD += "L "+nearHem.x+","+nearHem.y+" ";
					farFloodD += "L "+farHem.x+","+farHem.y+" ";
				} else { // through hip
					farSkirtD += 'C '+farHipControl.x+' '+farHipControl.y+' '+farHip.x+','+(3*farHip.y+farHipTop.y)/4+' '+farHip.x+','+farHip.y+' ';
					nearSkirtD += 'C '+nearHipControl.x+' '+nearHipControl.y+' '+nearHip.x+','+(3*nearHip.y+nearHipTop.y)/4+' '+nearHip.x+','+nearHip.y+' ';
					nearFloodD += "L "+nearHip.x+","+nearHip.y+" ";
					farFloodD += "L "+farHip.x+","+farHip.y+" ";
				};
				
				if (garment.absoluteBottom >= 0.6 && garment.absoluteBottom < 0.8) { // hem at mid-thigh
					relativeProportion = 5*(garment.absoluteBottom - 0.6);
					farHem = {
						x: farKnee.x*relativeProportion + farHip.x*(1-relativeProportion) + hemFlare,
						y: farKnee.y*relativeProportion + farHip.y*(1-relativeProportion),
					};
					nearHem = {
						x: nearKnee.x*relativeProportion + nearHip.x*(1-relativeProportion) - hemFlare,
						y: nearKnee.y*relativeProportion + nearHip.y*(1-relativeProportion),
					};
					farSkirtD += "L "+farHem.x+","+farHem.y+" ";
					nearSkirtD += "L "+nearHem.x+","+nearHem.y+" ";
					nearFloodD += "L "+nearHem.x+","+nearHem.y+" ";
					farFloodD += "L "+farHem.x+","+farHem.y+" ";
				} else if (garment.absoluteBottom >= 0.8) { // hem past knee
					farSkirtD += "L "+farKnee.x+","+farKnee.y+" ";
					nearSkirtD += "L "+nearKnee.x+","+nearKnee.y+" ";
					nearFloodD += "L "+nearKnee.x+","+nearKnee.y+" ";
					farFloodD += "L "+farKnee.x+","+farKnee.y+" ";
				};
				
				if (garment.absoluteBottom >= 0.8 && garment.absoluteBottom < 0.9) { // hem at mid-calf
					relativeProportion = 10*(garment.absoluteBottom - 0.8);
					farHem = {
						x: farAnkle.x*relativeProportion + farKnee.x*(1-relativeProportion) + hemFlare,
						y: farAnkle.y*relativeProportion + farKnee.y*(1-relativeProportion),
					};
					nearHem = {
						x: nearAnkle.x*relativeProportion + nearKnee.x*(1-relativeProportion) - hemFlare,
						y: nearAnkle.y*relativeProportion + nearKnee.y*(1-relativeProportion),
					};
					farSkirtD += "L "+farHem.x+","+farHem.y+" ";
					nearSkirtD += "L "+nearHem.x+","+nearHem.y+" ";
					farFloodD += "L "+farHem.x+","+farHem.y+" ";
					nearFloodD += "L "+nearHem.x+","+nearHem.y+" ";
				} else if (garment.absoluteBottom >= 0.9)  { // hem past ankle
					farSkirtD += "L "+farAnkle.x+","+farAnkle.y+" ";
					nearSkirtD += "L "+nearAnkle.x+","+nearAnkle.y+" ";
					nearFloodD += "L "+nearAnkle.x+","+nearAnkle.y+" ";
					farFloodD += "L "+farAnkle.x+","+farAnkle.y+" ";
				};
				
				if (garment.absoluteBottom >= 0.9) { // hem past ankle
					farHem = {
						x: farAnkle.x + hemFlare,
						y: farAnkle.y+20,
					};
					nearHem = {
						x: nearAnkle.x - hemFlare,
						y: nearAnkle.y+20,
					};
					farSkirtD += "L "+farHem.x+","+farHem.y+" ";
					nearSkirtD += "L "+nearHem.x+","+nearHem.y+" ";
				};
				
				var skirtBottom = {
					x: (farHem.x + nearHem.x)/2,
					y: (farHem.y + nearHem.y)/2 + (garment.absoluteBottom - 0.6)*20,
				};
			
				farSkirtD += 'C '+farHem.x+','+farHem.y+' '+(farHem.x+skirtBottom.x)/2+','+skirtBottom.y+' '+(skirtBottom.x-1)+','+skirtBottom.y+' Z';
				nearSkirtD += 'C '+nearHem.x+','+nearHem.y+' '+(nearHem.x+skirtBottom.x)/2+','+skirtBottom.y+' '+(skirtBottom.x+1)+','+skirtBottom.y+' Z';
				
				farSkirt.setAttribute('d',farSkirtD);
				nearSkirt.setAttribute('d',nearSkirtD);
				
				var hem = document.createElementNS('http://www.w3.org/2000/svg','path');
				skirt.appendChild(hem);
				hem.setAttribute('stroke','black');
				hem.setAttribute('stroke','black');
				var hemD = 'M '+farHem.x+','+farHem.y+' ';
				hemD += 'C '+farHem.x+','+farHem.y+' '+(farHem.x+skirtBottom.x)/2+','+skirtBottom.y+' '+(skirtBottom.x-1)+','+skirtBottom.y+' ';
				hemD += 'C '+(nearHem.x+skirtBottom.x)/2+','+skirtBottom.y+' '+nearHem.x+','+nearHem.y+' '+nearHem.x+','+nearHem.y;
				hem.setAttribute('d',hemD);
				
				var skirtStroke = skirt.cloneNode(true);
				skirtStroke.setAttribute('stroke-width',3);
				skirtStroke.setAttribute('stroke','black');
				skirtStrokeGroup.appendChild(skirtStroke);
				
				nearFloodD += 'h-100 L '+(nearHipTop.x-100)+","+nearHipTop.y+" z";
				farFloodD += 'h100 L '+(farHipTop.x+100)+","+farHipTop.y+" z";
				
				nearSkirtSideFloodPath.setAttribute('d',nearFloodD);
				farSkirtSideFloodPath.setAttribute('d',farFloodD);
				
				if (longestSkirt < garment.absoluteBottom) {
					longestSkirt = garment.absoluteBottom;
				};
				
			} else if (garment.absoluteBottom > 0.4 && garment.bottomType <= 0.66 && longestSkirt == 0) {
			
				// pants and loincloths get a speedo on skirtGroup
				var speedoStroke = document.createElementNS('http://www.w3.org/2000/svg','path');
				skirtGroup.appendChild(speedoStroke);
				speedoStroke.setAttribute('stroke-width',1);
				speedoStroke.setAttribute('stroke','black');
				speedoStroke.setAttribute('fill','none');
				speedoStroke.setAttribute('d',speedoD);
				speedoStroke.setAttribute('clip-path','url(#garmentBandClip_'+i+'_'+this.id+')');
				
				if (garment.bottomType <= 0.33) { // loinclothes need a stroke on speedo				
					var speedoGarmentBand = document.createElementNS('http://www.w3.org/2000/svg','use');
					view.setHref(speedoGarmentBand,'garmentBand_'+i+'_'+this.id);
					skirtGroup.appendChild(speedoGarmentBand);
					speedoGarmentBand.setAttribute('clip-path','url(#garmentSpeedoClip_'+this.id+')');
				};

			};
			
			// end garment loop
		};

		svg.appendChild(sketchGroup);

// 	Wireframe (Old)
		var wireframe = document.createElementNS('http://www.w3.org/2000/svg','g');
// 		sketchGroup.appendChild(wireframe);
		wireframe.setAttribute('fill','none');
		wireframe.setAttribute('stroke','red');
		wireframe.setAttribute('stroke-width',0.5);
		var legs = document.createElementNS('http://www.w3.org/2000/svg','polyline');
		wireframe.appendChild(legs);
		var pointsArray = [
			nearToes,
			nearAnkle,
			nearKnee,
			nearHipJoint,
			farHipJoint,
			farKnee,
			farAnkle,
			farToes,
		];
		var pointsString = '';
		for (var p of pointsArray) {
			pointsString += p.x + "," + p.y + " ";
		};
		legs.setAttribute('points',pointsString);		
		var spine = document.createElementNS('http://www.w3.org/2000/svg','line');
		wireframe.appendChild(spine);
		spine.setAttribute('x1',neckBase.x);
		spine.setAttribute('y1',neckBase.y);
		spine.setAttribute('x2',spineBase.x);
		spine.setAttribute('y2',spineBase.y);
		spine.setAttribute('points',pointsString);
		var arms = document.createElementNS('http://www.w3.org/2000/svg','polyline');
		wireframe.appendChild(arms);
		var pointsArray = [
			nearWrist,
			nearElbow,
			nearShoulder,
			neckBase,
			farShoulder,
			farElbow,
			farWrist,
		];
		var pointsString = '';
		for (var p of pointsArray) {
			pointsString += p.x + "," + p.y + " ";
		};
		arms.setAttribute('points',pointsString);		
		var head = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
		wireframe.appendChild(head);
		head.setAttribute('cx',headCenter.x);
		head.setAttribute('cy',headCenter.y);
		head.setAttribute('rx',headWidth/2);
		head.setAttribute('ry',headHeight/2);

		var skeleton = {
			headCenter: headCenter,
			neckBase: neckBase,
			spineBase: spineBase,
			nearHipJoint: nearHipJoint,
			nearKnee: nearKnee,
			nearAnkle: nearAnkle,
			farHipJoint: farHipJoint,
			farKnee: farKnee,
			farAnkle: farAnkle,
// 			farHaunch: farHaunch,
// 			nearHaunch: nearHaunch,
			nearToes: nearToes,
			farToes: farToes,
			nearShoulder: nearShoulder,
			nearElbow: nearElbow,
			nearWrist: nearWrist,
			farShoulder: farShoulder,
			farElbow: farElbow,
			farWrist: farWrist,
			farBreastAnchor: farBreastAnchor,
			farBreastCenter: farBreastCenter,
			nearBreastAnchor: nearBreastAnchor,
			nearBreastCenter: nearBreastCenter,
			farAreolae: farAreolae,
			nearAreolae: nearAreolae,
			farNippleTop: farNippleTop,
			nearNippleTop: nearNippleTop,
			nearEyeCenter: nearEyeCenter,
			farEyeCenter: farEyeCenter,
			noseRoot: noseRoot,
			noseApex: noseApex,
			noseBridge: noseBridge,
			noseBottom: noseBottom,
			noseBase: noseBase,
			nearCheekbone: nearCheekbone,
			farCheekbone: farCheekbone,
			topOfMouth: topOfMouth,
			chin: chin,
			nearEarCenter: nearEarCenter,
			farEarCenter: farEarCenter,
			nearJawbone: nearJawbone,
			farJawbone: farJawbone,
			nearTemple: nearTemple,
			farTemple: farTemple,
			genitalsTop: genitalsTop,
			genitalsBottom: genitalsBottom,
			phallusTip: phallusTip,
			nearNeck: nearNeck,
			farNeck: farNeck,
		};
		
		var shots = document.createElementNS('http://www.w3.org/2000/svg','g');
		shots.id ='shotsGroup';
		svg.appendChild(shots);
// 		shots.setAttribute('stroke','red');
		shots.setAttribute('fill','none');
		var headShot = document.createElementNS('http://www.w3.org/2000/svg','rect');
		headShot.id = 'shot_head_'+this.id;
		var headShotSize = totalHeight * 0.3;
		headShot.setAttribute('x',headCenter.x - headShotSize/2);
		headShot.setAttribute('y',headCenter.y - headShotSize/2);
		headShot.setAttribute('width',headShotSize);
		headShot.setAttribute('height',headShotSize);
		shots.appendChild(headShot);
		var moneyShot = document.createElementNS('http://www.w3.org/2000/svg','rect');
		moneyShot.id = 'shot_money_'+this.id;
		var moneyShotPoints = {
			x: (genitalsBottom.x + phallusTip.x)/2,
			y: (genitalsBottom.y + phallusTip.y)/2,
		};
		moneyShotPoints.width = Math.max(20,Math.abs(moneyShotPoints.x - genitalsBottom.x),Math.abs(moneyShotPoints.x - phallusTip.x)) * 2,
		moneyShotPoints.height = Math.max(20,Math.abs(moneyShotPoints.y - genitalsBottom.y),Math.abs(moneyShotPoints.y - phallusTip.y)) * 2,
		moneyShot.setAttribute('x',moneyShotPoints.x - moneyShotPoints.width/2);
		moneyShot.setAttribute('y',moneyShotPoints.y - moneyShotPoints.height/2);
		moneyShot.setAttribute('width',moneyShotPoints.width);
		moneyShot.setAttribute('height',moneyShotPoints.height);
		shots.appendChild(moneyShot);
		
		for (var joint in skeleton) {
			var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
			rect.id = 'shot_'+joint+'_'+this.id;
			rect.setAttribute('x',skeleton[joint].x - 50);
			rect.setAttribute('y',skeleton[joint].y - 50);
			rect.setAttribute('width',100);
			rect.setAttribute('height',100);
			shots.appendChild(rect);
		};
	
					
		return svg;
	};
};