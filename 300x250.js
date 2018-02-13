(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.icx_templant = function() {
	this.initialize(img.icx_templant);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,190);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,209);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib._046064копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,209,30,0.847)").s().p("Av5JxIAAzhIfzAAIAAThg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._046064копия, new cjs.Rectangle(-101.7,-62.5,203.5,125), null);


(lib._0466копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(241,199,29,0.8)").s().p("A3bJxIAAzhMAu3AAAIAAThg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._0466копия, new cjs.Rectangle(-150,-62.5,300,125), null);


(lib._0460копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF2A1").s().p("Eg6gAJxIAAzhMB1BAAAIAAThg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._0460копия, new cjs.Rectangle(-374.5,-62.5,749,125), null);


(lib.свет = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-130.5,-104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.свет, new cjs.Rectangle(-130.5,-104.5,261,209), null);


(lib.пла1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ЗАГ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBoQgIAAgCgDQgDgCAAgIIAAgPQAAgHADgDQACgDAIAAIAIAAQAHAAACADQADADABAHIAAAPQgBAIgDACQgCADgHAAgAgNAoIgEg6IAAhVIAjAAIAABVIgEA6g");
	this.shape.setTransform(72.1,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzA8QgRgSAAgqQAAgqARgRQAQgRAlAAQAjAAAQAMQAQANAAAaQAAApgnAAIg7AAQACATAIAGQAJAHATAAQAXAAAegEIADAXQgVAKgnAAQgnAAgRgRgAgWgoQgHAIgBAXIAyAAQANAAAAgRQAAgMgGgFQgHgFgQAAQgTAAgHAIg");
	this.shape_1.setTransform(59.6,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBJIAAhAIg/AAIAABAIgkAAIAAiSIAkAAIAAA4IA/AAIAAg4IAkAAIAACSg");
	this.shape_2.setTransform(42.4,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBJIAAhTIACgWIgBAAQgDAHgIANIg+BVIgeAAIAAiSIAgAAIAABWQAAAKgBAKIABAAQAFgLAGgHIA+hYIAeAAIAACSg");
	this.shape_3.setTransform(24.6,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BCQgNgLAAgVIAAgPQAAgRAMgJQALgKAVAAIA2AAIAAgIQAAgNgGgEQgFgEgQAAQgWAAgnADIgDgaQAmgHAiAAQAcAAAOALQAOALAAAdIAABjIgdAAIgEgXQgXAaggAAQgVAAgNgLgAgbAMQgDAEAAAIIAAAGQAAAJAEAEQAEAFALAAQAVAAAVgSIAAgXIguAAQgJABgDAEg");
	this.shape_4.setTransform(6.9,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBpIAAjNIAdAAIADAWQALgLAQgHQAQgIAQAAQAzAAAABPQAAApgPARQgNARgdAAQgdAAgVgPIABAfIAAAngAgLhFQgJAEgOAKIAABFQAcAGAKAAQARAAAHgJQAGgJAAgbQAAgcgGgKQgGgLgOAAQgKAAgJAFg");
	this.shape_5.setTransform(-9.8,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeBJQgOgpgHgKQgIgLgRgBIgBAAIgPAAIABAOIAAAxIgkAAIAAiSIAkAAIAAApQAAAIgCAJIAQAAQARAAAIgMQAHgLAMgjIAlAAQgPApgFAKQgJAOgSAEIgHACIAAAAIALACIAJADIAIAEQADADAEAFIAFAJIAFAOIAHAPIAGAUg");
	this.shape_6.setTransform(-26.7,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+BkIAEgbIARABIALgBIAJgBIAFgFQAEgDABgDIAFgLIACgHIgKAAQgTAAgFgSIgtiBIAmAAIAlBwQABAEAEAAIAJAAIAnh0IAnAAIg1CaQgJAagLANQgLAOgTACIgIAAQgRAAgSgFg");
	this.shape_7.setTransform(-44.1,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCBKIAAiTQAYgBApAAQAjAAAOAIQANAIAAAXQAAAQgHAIQgIAIgQABIAAABQAUABAIAJQAJAKAAASQAAAXgOAIQgNAHghABQguAAgbgCgAggAxIAhAAQARAAAGgFQAGgDAAgLQAAgLgGgFQgHgFgRAAIggAAgAgggNIAgAAQAPAAAGgEQAGgEAAgKQAAgKgGgDQgHgDgQAAIgeAAg");
	this.shape_8.setTransform(-67.6,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzA8QgRgSAAgqQAAgqARgRQAQgRAlAAQAjAAAQAMQAQANAAAaQAAApgnAAIg7AAQACATAIAGQAJAHATAAQAXAAAegEIADAXQgVAKgnAAQgnAAgRgRgAgWgoQgHAIgBAXIAyAAQANAAAAgRQAAgMgGgFQgHgFgQAAQgTAAgHAIg");
	this.shape_9.setTransform(55.2,-15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhZBJIgCAAIAAiTIAjAAIAAA1IAcAAQAjABANAJQAOALAAAbQAAAbgNAKQgNALgeAAQgsAAgXgCgAg4AvIAcAAQAPAAAGgFQAFgDAAgOQAAgNgFgEQgGgEgPgBIgcAAgAA4BJIAAiTIAkAAIAACTg");
	this.shape_10.setTransform(35.5,-15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhCBKIAAiTQAYgCApAAQAjAAAOAJQANAIAAAXQAAAQgHAIQgIAIgQABIAAABQAUABAIAKQAJAJAAASQAAAWgOAIQgNAJghAAQgugBgbgBgAggAxIAhAAQARAAAGgFQAGgDAAgLQAAgMgGgEQgHgFgRABIggAAgAgggNIAgAAQAPAAAGgEQAGgEAAgKQAAgKgGgDQgHgDgQgBIgeAAg");
	this.shape_11.setTransform(16.2,-15.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhHBpIAAjNIAfAAIADAWQAKgLAQgHQAQgIAQAAQAzAAgBBPQABApgOARQgOARgdAAQgdAAgVgPIABAfIAAAngAgKhFQgKAEgOAKIAABFQAcAGAKAAQARAAAGgJQAHgJAAgbQAAgcgGgKQgGgLgOAAQgJAAgJAFg");
	this.shape_12.setTransform(-1.2,-13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzA8QgRgSAAgqQAAgqARgRQAQgRAlAAQAjAAAQAMQAQANAAAaQAAApgnAAIg7AAQACATAIAGQAJAHATAAQAXAAAegEIADAXQgVAKgnAAQgnAAgRgRgAgWgoQgHAIgBAXIAyAAQANAAAAgRQAAgMgGgFQgHgFgQAAQgTAAgHAIg");
	this.shape_13.setTransform(-18.7,-15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAfBKIAAh3Ig9AAIAAB3IgkAAIAAiTICEAAIAACTg");
	this.shape_14.setTransform(-35.8,-15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhKBoIAAjOQAagDAuAAQAoAAAPAMQAQAKAAAgQAAAXgJALQgIAMgTACIAAABQAWACALANQAJANAAAaQAAAfgQAMQgOALgmAAQg0AAgdgCgAgmBLIAnABQAVgBAIgFQAIgHAAgSQgBgUgHgIQgJgHgVAAIgmAAgAgmgRIAmAAQATAAAGgFQAIgGgBgSQAAgRgHgGQgIgGgUABIgjAAg");
	this.shape_15.setTransform(-53.5,-18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ПЛА
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#57C9C1").s().p("A3bJxIAAzhMAu3AAAIAAThg");

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

}).prototype = getMCSymbolPrototype(lib.пла1, new cjs.Rectangle(-150,-62.5,300,125), null);


(lib.лого_ХД = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBoIAAhIIhEiGIAgAAIAyBnIA0hnIAfAAIhECFIAABJg");
	this.shape.setTransform(3.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBoQgTAAgLgKQgMgKAAgRIAAiFQAAgRAMgKQAMgKASAAIBQAAIAAAaIhLAAQgJAAgEAEQgDAEAAALIAAApIBWAAIAAAYIhWAAIAAA1QAAAKADAFQAEADAFAAIBPAAIAAAag");
	this.shape_1.setTransform(-82.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtBoIAAhiIhZAAIAABiIgeAAIAAjOIAeAAIAABTIBZAAIAAhTIAeAAIAADOg");
	this.shape_2.setTransform(-99.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA8BoIgTg/IhRAAIgUA/IgeAAIBBjGQACgJAJABIAdAAQAJgBACAJIBBDGgAggAPIBBAAIgdhfIgHAAg");
	this.shape_3.setTransform(-64.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBoQgsAAAAgpIAAimIAdAAIAACiQAAAKAFAFQAEAEAKAAIBJAAIABAag");
	this.shape_4.setTransform(-46.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBoIAAizIhCAAIAAgbIChAAIAAAbIhCAAIAACzg");
	this.shape_5.setTransform(-34.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAtBoIAAhiIhaAAIAABiIgdAAIAAjOIAdAAIAABTIBaAAIAAhTIAfAAIAADOg");
	this.shape_6.setTransform(-15.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTBoQgTAAgLgKQgMgKAAgRIAAiFQAAgRAMgKQAMgKASAAIBRAAIAAAaIhMAAQgJAAgEAEQgDAEAAALIAAApIBWAAIAAAYIhWAAIAAA1QAAAKADAFQAEADAFAAIBQAAIAAAag");
	this.shape_7.setTransform(61.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhNBnIAAjOQArgCAfAAQAtAAASAXQASAYAAA6QAAA8gSAXQgSAXgtAAQgiAAgogDgAgwhPIAACeIAtABQAbAAAMgRQAKgSABgtQgBgtgKgRQgMgRgbAAg");
	this.shape_8.setTransform(44.8,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AApBoQgIgBgEgIIhMipIgEAAQABAMAAAQIAACWIgeAAIAAjDQAAgMAMABIAbAAQAJAAAEAJIBMCnIAFAAIgCiwIAeAAIAADCQAAAMgLAAg");
	this.shape_9.setTransform(79.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBoIAAizIhBAAIAAgbICgAAIAAAbIhBAAIAACzg");
	this.shape_10.setTransform(98.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.лого_ХД, new cjs.Rectangle(-106.8,-10.6,213.6,21.3), null);


(lib.лого_СТАР = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADigkIgwAkIAkgwIzpgPITpgOIgkgxIAwAkIAPilIAPClIAxgkIglAxIMIAOIsIAPIAlAwIgxgkIgPEkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.лого_СТАР, new cjs.Rectangle(-104.4,-25.5,208.8,51.1), null);


(lib.лого_СК = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAcQgGgEAAgIIAAgIQABgHAEgDQAEgEAIAAIAbAAIAAgHQAAgGgCgDQgDgDgIAAQgKAAgRACIgBgGQATgDALAAQAJAAAGAFQAEAEAAAKIAAAtIgGAAIgBgLQgFAEgHAEQgHAEgIAAQgIAAgEgFgAgRAKIAAAFQAAALALAAQAFAAAHgDQAHgDAFgFIAAgPIgaAAQgJAAAAAKg");
	this.shape.setTransform(93.3,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAfQgHgQgDgEQgFgJgIAAIgBAAIgLAAIAAAHIAAAWIgIAAIAAg+IAIAAIAAAUIAAAHIAKAAQAFABACgCIAFgDIAEgHIAEgHIAEgJIAIAAIgDAIIgDAIIgEAGIgDAEIgGADIgFACIAAAAIAFAAIAEACIADACIADAEIADAEIADAGIACAGIADAHg");
	this.shape_1.setTransform(86.8,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUAfIAAgsIAAgIIgFAHIgiAtIgHAAIAAg+IAHAAIAAAsIAAAIIAFgGIAjguIAGAAIAAA+g");
	this.shape_2.setTransform(79.2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAfIAAgeIgkAAIAAAeIgIAAIAAg+IAIAAIAAAaIAkAAIAAgaIAIAAIAAA+g");
	this.shape_3.setTransform(71.7,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUAfIAAgsIAAgIIgFAHIgiAtIgHAAIAAg+IAIAAIAAAsIAAAIIAEgGIAjguIAGAAIAAA+g");
	this.shape_4.setTransform(64.1,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAZQAFgBACgCIAEgGIACgEIABgFIABgFIABgFIAAgFIABgFIAAgEQABgHAEgDQADgEAHAAIAZAAIAAA+IgIAAIAAg3IgQAAQgEAAgBACQgCACgBAEIAAAFIgBAEIAAAFIgBAEIgBAEIgBAFIgBAEIgCADQgEANgNABg");
	this.shape_5.setTransform(56.3,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAfQgGgQgEgEQgFgJgIAAIgBAAIgLAAIAAAHIAAAWIgHAAIAAg+IAHAAIAAAUIAAAHIALAAQADABADgCIAFgDIAEgHIAEgHIAEgJIAIAAIgDAIIgDAIIgEAGIgDAEIgGADIgFACIAAAAIAEAAIAFACIADACIADAEIADAEIADAGIACAGIADAHg");
	this.shape_6.setTransform(50,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASAgIAAgYIgSAAQgKAAgCAHIgFARIgIAAIAFgTQACgHALgBIAAgBQgPgBgBgQQABgIAFgFQAFgFAMAAIAbABIAAA+gAgLgVQgDADAAAHQAAAHADADQAEACAIAAIARAAIAAgZIgSAAQgIAAgDADg");
	this.shape_7.setTransform(18.6,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAcQgEgEgBgIIAAgIQAAgHAFgDQAEgEAIAAIAbAAIAAgHQAAgGgDgDQgCgDgIAAQgKAAgRACIgBgGQATgDAKAAQAKAAAGAFQAEAEAAAKIAAAtIgGAAIgBgLQgEAEgIAEQgHAEgIAAQgIAAgFgFgAgRAKIAAAFQAAALALAAQAGAAAFgDQAIgDAFgFIAAgPIgaAAQgJAAAAAKg");
	this.shape_8.setTransform(11.6,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASAfQgHgQgEgEQgFgJgIAAIgBAAIgLAAIABAHIAAAWIgIAAIAAg+IAIAAIAAAUIgBAHIALAAQADABADgCIAFgDIAFgHIADgHIAEgJIAIAAIgDAIIgDAIIgEAGIgDAEIgGADIgFACIAAAAIAEAAIAFACIADACIADAEIADAEIADAGIACAGIAEAHg");
	this.shape_9.setTransform(5.1,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAaQgGgIAAgSQAAgRAGgHQAHgIAQAAQALAAAIACIgBAGIgRgBQgMAAgEAFQgGAGAAAOQAAAPAGAFQAEAGAMAAQAKAAAIgCIABAGQgKADgKAAQgQAAgHgHg");
	this.shape_10.setTransform(-1.7,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAaQgGgIAAgSQAAgRAGgIQAHgHAOAAQANAAAHAFQAGAEAAAKQAAARgOAAIgfAAQABAMAFAFQAFAFAKAAIAWgCIABAGQgIADgQAAQgPAAgHgHgAgNgUQgFAFAAANIAdAAQAIAAAAgLQAAgGgEgDQgFgDgJAAQgKAAgEAFg");
	this.shape_11.setTransform(-8.5,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQAfIAAgcQgMAGgNAAQgPAAAAgNIAAgbIAIAAIAAAZQAAAFADABQACACAFAAQAKAAAMgEIAAgdIAJAAIAAA+g");
	this.shape_12.setTransform(-15.6,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUAfIAAgsIAAgIIgFAHIgiAtIgHAAIAAg+IAHAAIAAAsIAAAIIAFgGIAjguIAGAAIAAA+g");
	this.shape_13.setTransform(-22.6,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAfIAAgwQAAgHAEgDQADgEAHAAIAfABIgBAGIgbAAQgIAAAAAJIAAAug");
	this.shape_14.setTransform(-29,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAaQgHgIAAgSQAAgRAHgHQAGgIAPAAQAPAAAIAIQAGAHAAARQAAASgGAIQgIAHgPAAQgPAAgGgHgAgPgUQgFAGABAOQgBAPAFAFQAEAGALAAQALAAAFgGQAEgFAAgPQAAgOgEgGQgFgFgLAAQgLAAgEAFg");
	this.shape_15.setTransform(-35.9,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcAZIAHgDIAEgGIACgEIABgFIABgFIABgFIAAgFIABgFIAAgEQABgHAEgDQADgEAHAAIAZAAIAAA+IgIAAIAAg3IgQAAQgEAAgBACQgCACgBAEIAAAFIgBAEIAAAFIgBAEIgBAEIgBAFIgBAEIgCADQgEANgNABg");
	this.shape_16.setTransform(-43.7,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAaQgHgIAAgSQAAgRAHgHQAGgIAPAAQAPAAAIAIQAGAHAAARQAAASgGAIQgIAHgPAAQgPAAgGgHgAgPgUQgEAGgBAOQABAPAEAFQAEAGALAAQAMAAADgGQAFgFAAgPQAAgOgFgGQgDgFgMAAQgLAAgEAFg");
	this.shape_17.setTransform(-50.5,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAfIAAg3IgYAAIAAgHIA3AAIAAAHIgYAAIAAA3g");
	this.shape_18.setTransform(-57.3,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAcQgGgEAAgIIAAgIQABgHAEgDQAEgEAIAAIAbAAIAAgHQAAgGgCgDQgDgDgIAAQgKAAgRACIgBgGQATgDALAAQAJAAAGAFQAEAEAAAKIAAAtIgGAAIgBgLQgFAEgHAEQgHAEgIAAQgIAAgEgFgAgRAKIAAAFQAAALALAAQAFAAAHgDQAHgDAFgFIAAgPIgaAAQgJAAAAAKg");
	this.shape_19.setTransform(-64.2,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeAfIgCg3IgCAAIgTAuQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIgFAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIgTguIgCAAIgCA3IgIAAIACg6QAAgBABgBQAAAAAAgBQABAAAAAAQABgBABAAIAJAAQABAAAAABQABAAAAAAQABABAAAAQAAABABABIAPAmIADAJIABAAIADgJIAPgmQABgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAJAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIADA6g");
	this.shape_20.setTransform(-72.4,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVAaQgHgIAAgSQAAgRAHgHQAGgIAPAAQAPAAAIAIQAGAHAAARQAAASgGAIQgIAHgPAAQgPAAgGgHgAgPgUQgEAGAAAOQAAAPAEAFQAEAGALAAQAMAAAEgGQAEgFAAgPQAAgOgEgGQgEgFgMAAQgLAAgEAFg");
	this.shape_21.setTransform(-80.8,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAfIAAg3IgYAAIAAgHIA3AAIAAAHIgYAAIAAA3g");
	this.shape_22.setTransform(-87.7,2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSAaQgGgIAAgSQAAgRAGgHQAHgIAQAAQALAAAIACIgBAGIgRgBQgMAAgEAFQgFAGgBAOQABAPAFAFQAEAGAMAAQALAAAHgCIABAGQgKADgKAAQgQAAgHgHg");
	this.shape_23.setTransform(-93.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.лого_СК, new cjs.Rectangle(-99.2,-9.8,198.4,19.6), null);


(lib.звизда = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAcIgxAlIAlgxIi+gPIC+gOIglgwIAxAkIAOilIAOClIAxgkIglAwIC7AOIi7APIAlAxIgxglIgOCjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.звизда, new cjs.Rectangle(-21.4,-19,43,38.2), null);


(lib._0460467 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAzIAAghIgNAAQgDABgCABQgCABgBAEIgGAaIglAAIAIggQACgIARgCIAAgBQgWgEAAgWQAAgTAJgGQAJgHAaAAQAlAAAOACIAABjgAgHgXQgCADAAAFQAAAHACADQACADAGAAIAOAAIAAgWIgOAAQgGAAgCABg");
	this.shape.setTransform(57.9,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAoQgLgLAAgdQAAgcAMgMQALgLAcAAQAYAAAPAGIgEAXIgdAAQgMAAgDAFQgEAEAAANQAAAOAEAEQADAFAMAAQARAAAOgBIADAXQgPAHgaAAQgbAAgMgMg");
	this.shape_1.setTransform(45.3,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAxIgBAAIAAhiIAiAAIAAAgIAMAAQAbAAAKAIQAKAHAAASQAAAUgKAHQgKAHgWAAIgygBgAgMAaIAMAAQAGAAADgCQACgCAAgHQAAgHgCgCQgDgCgGAAIgMAAg");
	this.shape_2.setTransform(32.9,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAyIAAhHIgfAAIAAgcIBiAAIAAAcIggAAIAABHg");
	this.shape_3.setTransform(19.9,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAtQgKgIAAgNIAAgKQAAgMAJgGQAIgGAPAAIAgAAIAAgDQAAgGgDgDQgDgCgHAAIgrABIgCgXQAagFAbAAQAVAAAKAIQALAJgBAVIAAA/IgdAAIgDgPQgOARgUAAQgPAAgJgHgAgOAPIAAAEQAAAIAJAAQAJAAAKgHIAAgMIgUAAQgIAAAAAHg");
	this.shape_4.setTransform(6.6,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAoQgLgLAAgdQAAgcAMgMQALgLAcAAQAYAAAPAGIgEAXIgdAAQgMAAgDAFQgEAEAAANQAAAOAEAEQADAFAMAAQARAAAOgBIADAXQgPAHgaAAQgbAAgMgMg");
	this.shape_5.setTransform(-6.2,3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAyIAAgtIABgQIgBAAQgCAIgGAHIgeAuIgfAAIAAhjIAgAAIAAAvIgBAPIAAAAQADgHAFgHIAegwIAgAAIAABjg");
	this.shape_6.setTransform(-19.6,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAyIAAhKIgdAAIAABKIgjAAIAAhjIBjAAIAABjg");
	this.shape_7.setTransform(-33.9,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoAtQgKgIAAgNIAAgKQABgMAIgGQAJgGAOAAIAgAAIAAgDQAAgGgDgDQgDgCgHAAIgqABIgDgXQAagFAbAAQAVAAAKAIQAKAJAAAVIAAA/IgdAAIgDgPQgOARgUAAQgPAAgJgHgAgOAPIAAAEQAAAIAJAAQAJAAAKgHIAAgMIgTAAQgJAAAAAHg");
	this.shape_8.setTransform(-48,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvAwIADgYQAVACAVAAQAIAAACgBQACgBAAgGQAAgEgCgCQgDgBgHAAIgfgBIAAgUIAfgBIAIgBQACgCAAgEQAAgEgDgBQgCgCgIAAQgRAAgUADIgCgYQAQgFAWAAQAcAAAKAFQAMAFAAARQgBAMgFAFQgEAFgMABIAAABQAOAAAFAGQAHAHgBAMQABARgLAFQgLAFgaAAQgaAAgVgEg");
	this.shape_9.setTransform(-61,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._0460467, new cjs.Rectangle(-68.2,-14,136.4,28), null);


(lib._046064 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(108,228,219,0.698)").s().p("Av5JxIAAzhIfzAAIAAThg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._046064, new cjs.Rectangle(-101.7,-62.5,203.5,125), null);


(lib._040646 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A9695").s().p("AgeAcQgFgIADgUQACgLACgHQADgIAFgDQAEgDAFgCIAMgBQARAAAQAEIgJBBIgLAAIABgMQgMAOgRAAQgMAAgEgIgAgFgXQgEABgDADQgDADgBAEIgCAMQgCAQABAEQACAEAGAAQAHAAAFgDQAGgEAIgHIAFghIgPgBIgKABg");
	this.shape.setTransform(-28.5,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8A9695").s().p("AgZAgQgGgFABgKQABgHAEgEQAEgEAJgDIARgHQAIgCACgDQADgCABgDQAAgEgDgBQgDgBgKAAIgaAEIAAgKQAMgEAPgBIAJAAQAEAAADABQAEABADACQADABABADQABAEAAAFQgBAEgCAEQgCAEgEACIgGAEIgFABIgBABIgTAHIgGAEQgDACAAADQAAAEADABIAJABQAPAAARgFIAAALQgPAGgRAAQgNAAgHgEg");
	this.shape_1.setTransform(-36.3,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8A9695").s().p("AgbAbQgHgIADgTQACgTAJgIQAIgIARAAQARAAAHAIQAGAJgCASQgDAUgIAIQgJAIgQAAQgRAAgHgJgAgKgTQgFAFgCAOQgCAOADAFQADAGAKAAQAKgBAFgFQAFgGACgNQACgOgDgFQgDgEgKAAQgKAAgFAEg");
	this.shape_2.setTransform(-43.8,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8A9695").s().p("AgjAiIgCgLQAIgBABgCQADgBACgFQAEgJAHgXQACgIAFgEQADgEAIAAIAgAAIgKBEIgOAAIAIg5IgNAAQgEAAgCACQgCACgBAFQgFASgGAPQgDAJgHADQgFAEgHAAIgCgBg");
	this.shape_3.setTransform(-52.1,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8A9695").s().p("AgbAbQgHgIADgTQACgTAJgIQAIgIARAAQARAAAHAIQAGAJgCASQgDAUgIAIQgJAIgQAAQgRAAgHgJgAgKgTQgFAFgCAOQgCAOADAFQADAGAKAAQAKgBAFgFQAFgGACgNQACgOgDgFQgDgEgKAAQgKAAgFAEg");
	this.shape_4.setTransform(-59.7,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8A9695").s().p("AAhAjIAHguQABgGgCgDQgCgCgEAAQgFAAgFADQgFADgJAIIgGArIgNAAIAHguQABgGgCgDQgBgCgFAAQgFAAgFADQgFACgKAJIgGArIgNAAIAKhEIAKAAIgBAPQARgQANAAQAHAAAEAEQAEAEAAAHQAIgIAHgDQAGgEAHAAQAJAAAEAFQAEAFgBAJIgHAyg");
	this.shape_5.setTransform(-69.9,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8A9695").s().p("AAMAiIAEgfIggAAIgFAfIgNAAIAKhDIANAAIgEAbIAhAAIADgbIAOAAIgKBDg");
	this.shape_6.setTransform(-80,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8A9695").s().p("AgeAcQgFgIADgUQACgLACgHQADgIAFgDQAEgDAFgCIAMgBQARAAAQAEIgJBBIgLAAIABgMQgMAOgRAAQgMAAgEgIgAgFgXQgEABgDADQgDADgBAEIgCAMQgCAQABAEQACAEAGAAQAHAAAFgDQAGgEAIgHIAFghIgPgBIgKABg");
	this.shape_7.setTransform(-88.1,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8A9695").s().p("AgkAiIgBgLQAIgBABgCQADgBACgFQAEgJAHgXQACgIAFgEQAEgEAHAAIAfAAIgKBEIgNAAIAJg5IgOAAQgEAAgCACQgDACAAAFQgFASgGAPQgEAJgFADQgGAEgHAAIgDgBg");
	this.shape_8.setTransform(-96.5,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8A9695").s().p("AANAjIAHguQABgHgCgCQgBgCgFAAQgFAAgHADQgFADgKAIIgGArIgNAAIAJhEIALAAIgBAPQASgQAOAAQAIAAAFAFQAEAFgBAJIgHAyg");
	this.shape_9.setTransform(-104.3,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8A9695").s().p("AAcAiIAFg5IgCAAIgWAtQgCAFgEAAIgJAAQgEAAgBgFIgKgtIgCAAIgKA5IgNAAIAMg+QAAgFAFAAIAOAAQAEAAAAAFIAIAjIABALIACAAIAEgKIASglQACgEAEAAIANAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEIgHA+g");
	this.shape_10.setTransform(-113.7,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8A9695").s().p("AgdAeQgEgFABgJIAHgyIAOAAIgHAvQgBAGACACQABACAFAAQAGAAAFgDIAOgMIAGgqIAOAAIgKBDIgKAAIABgOQgQAQgPAAQgJAAgEgFg");
	this.shape_11.setTransform(-122.8,10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8A9695").s().p("AALAjIAEgaIgPAAQgLAAgCAIIgGASIgPAAIAHgUQACgFAFgDQAEgDAFABIAAAAQgPgDACgQQABgMAIgEQAHgDAQgBIAbABIgKBEgAgHgUQgDACgBAGQgBAHADADQABACAIAAIARAAIADgXIgRAAQgHABgDACg");
	this.shape_12.setTransform(52.8,-6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8A9695").s().p("AgdAeQgEgFABgJIAHgyIAOAAIgHAvQgBAGACACQABACAFAAQAGAAAFgDIAOgMIAGgqIAOAAIgKBDIgKAAIABgOQgQAQgPAAQgJAAgEgFg");
	this.shape_13.setTransform(45.3,-6.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8A9695").s().p("AATAtIAFgVQgGgBgCgDQgDgDAAgGIAAgBQgPAQgPAAQgJAAgEgFQgEgGABgIIAHgzIAOAAIgHAvQgBAGACADQABACAFAAQAGAAAFgDIAOgLIAGgsIAOAAIgIA3QAAAAAAABQAAABAAAAQABAAAAABQABAAABAAIAHAAIgBAKIgDAVg");
	this.shape_14.setTransform(37,-5.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8A9695").s().p("AgeAcQgFgIADgUQACgLACgHQADgIAFgDQAEgDAFgCIAMgBQARAAAQAEIgJBBIgLAAIABgMQgMAOgRAAQgMAAgEgIgAgFgXQgEABgDADQgDADgBAEIgCAMQgCAQABAEQACAEAGAAQAHAAAFgDQAGgEAIgHIAFghIgPgBIgKABg");
	this.shape_15.setTransform(28.8,-6.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8A9695").s().p("AAhAjIAHgvQABgFgCgDQgCgDgEABQgFAAgFACQgFADgJAKIgGAqIgNAAIAHgvQABgFgCgDQgBgDgFABQgFAAgFACQgFADgKAJIgGArIgNAAIAKhDIAKAAIgBAOQARgQANAAQAHAAAEAEQAEAEAAAHQAIgIAHgEQAGgDAHAAQAJAAAEAFQAEAFgBAJIgHAyg");
	this.shape_16.setTransform(18.6,-6.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8A9695").s().p("AgEAjIgEgBIgFAAIgFgCIgEgCIgDgDIgCgFIAAgHIAHgxIANAAIgEAdQAIgDAGAAQAQAAAFAFQAGAEgCAMQgCANgGAEQgGAFgOAAIgEAAgAgNADIgBAMQgBAGADABQAEACAHAAQAHAAAEgCQADgDABgHQABgGgCgDQgDgCgIAAQgGAAgJACg");
	this.shape_17.setTransform(9,-6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8A9695").s().p("AgkAiIgBgLQAIgBABgCQADgBACgFQAEgJAHgXQACgIAEgEQAFgEAHAAIAfAAIgKBEIgNAAIAJg5IgOAAQgEAAgDACQgBACgBAFQgFASgGAPQgEAJgFADQgGAEgHAAIgDgBg");
	this.shape_18.setTransform(1.1,-6.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8A9695").s().p("AgkAwIABgLQASADAPgVIgHAAQgDAAgCgCQgCgBgCgDIgMg9IAOAAIAKA2QAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAGAAIADgGQAMgYAFgbIAOAAQgGAegOAZQgGAOgHAJQgGAJgHAEQgHAEgGABIgGABIgIgBg");
	this.shape_19.setTransform(-6.4,-4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8A9695").s().p("AgZAcQgGgJADgTQACgTAJgIQAIgIARAAQANAAAJAEIgCAIIgSAAQgMAAgFAFQgFAFgCANQgCAQADAEQAEAFAKAAQAMAAAJgCIABAJQgLAEgMAAQgSAAgHgIg");
	this.shape_20.setTransform(-13.4,-6.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8A9695").s().p("AAMAiIAEgfIggAAIgFAfIgNAAIAKhDIANAAIgEAbIAgAAIAFgbIANAAIgKBDg");
	this.shape_21.setTransform(-21.1,-6.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8A9695").s().p("AgbAcQgHgJADgTQACgTAJgIQAIgIARAAQARAAAHAJQAGAIgCATQgDATgIAIQgJAIgQAAQgRAAgHgIgAgKgTQgFAGgCAOQgCANADAGQADAEAKAAQAKABAFgGQAFgFACgOQACgNgDgGQgDgEgKAAQgKAAgFAEg");
	this.shape_22.setTransform(-29.2,-6.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8A9695").s().p("AAMAiIgGgWQgDgHgGgBIgDAAIgKAAIAAAHIgEAXIgNAAIAJhDIAOAAIgDAUIgCAIIAJAAQAIAAAEgGQAFgGAJgQIAOAAQgJASgGAHQgFAGgLACQALAAADAGQADAGAFASIABAEg");
	this.shape_23.setTransform(-36.7,-6.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8A9695").s().p("AAMAjIADgaIgPAAQgKAAgDAIIgHASIgNAAIAGgUQACgFAFgDQAEgDAEABIABAAQgPgDACgQQACgMAHgEQAIgDAPgBIAaABIgJBEgAgHgUQgDACgBAGQgBAHACADQACACAIAAIAQAAIAEgXIgRAAQgHABgDACg");
	this.shape_24.setTransform(-47.8,-6.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8A9695").s().p("AgeAcQgFgIADgUQACgLACgHQADgIAFgDQAEgDAFgCIAMgBQARAAAQAEIgJBBIgLAAIABgMQgMAOgRAAQgMAAgEgIgAgFgXQgEABgDADQgDADgBAEIgCAMQgCAQABAEQACAEAGAAQAHAAAFgDQAGgEAIgHIAFghIgPgBIgKABg");
	this.shape_25.setTransform(-55.4,-6.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8A9695").s().p("AAMAiIAFgfIgiAAIgEAfIgNAAIAJhDIAOAAIgEAbIAhAAIADgbIAOAAIgKBDg");
	this.shape_26.setTransform(-63.5,-6.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8A9695").s().p("AAhAjIAHgvQABgFgCgDQgCgDgEABQgFAAgFACQgFADgJAKIgGAqIgNAAIAHgvQABgFgCgDQgBgDgFABQgFAAgFACQgFADgKAJIgGArIgNAAIAKhDIAKAAIgBAOQARgQANAAQAHAAAEAEQAEAEAAAHQAIgIAHgEQAGgDAHAAQAJAAAEAFQAEAFgBAJIgHAyg");
	this.shape_27.setTransform(-73.8,-6.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8A9695").s().p("AgeAcQgFgIADgUQACgLACgHQADgIAFgDQAEgDAFgCIAMgBQARAAAQAEIgJBBIgLAAIABgMQgMAOgRAAQgMAAgEgIgAgFgXQgEABgDADQgDADgBAEIgCAMQgCAQABAEQACAEAGAAQAHAAAFgDQAGgEAIgHIAFghIgPgBIgKABg");
	this.shape_28.setTransform(-83.9,-6.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8A9695").s().p("AgkAiIgBgLQAIgBABgCQADgBACgFQAEgJAHgXQACgIAFgEQADgEAIAAIAgAAIgKBEIgOAAIAIg5IgNAAQgEAAgCACQgCACgBAFQgEASgHAPQgEAJgGADQgFAEgHAAIgDgBg");
	this.shape_29.setTransform(-92.2,-6.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8A9695").s().p("AANAjIAHgvQABgGgCgDQgBgBgFAAQgFAAgHADQgFADgKAJIgGAqIgNAAIAJhDIALAAIgBAOQASgQAOAAQAIAAAFAFQAEAFgBAJIgHAyg");
	this.shape_30.setTransform(-100.1,-6.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8A9695").s().p("AgZAcQgGgJADgTQACgTAJgIQAIgIARAAQANAAAJAEIgCAIIgSAAQgMAAgFAFQgFAFgCANQgCAQADAEQAEAFAKAAQAMAAAJgCIABAJQgLAEgMAAQgSAAgHgIg");
	this.shape_31.setTransform(-107.3,-6.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8A9695").s().p("AgbAbQgGgJACgTQADgTAIgIQAIgHASAAQAQAAAGAGQAFAFgBALQgCAKgGAEQgGAEgNABIgXACQAAAKAEADQAFAEAJAAQAIAAAQgCIABAJQgKAEgSAAQgRAAgHgJgAgKgTQgFAEgCAOIAWgCQAGgBADgCQADgCABgGQABgGgDgCQgDgCgJAAQgKAAgEAFg");
	this.shape_32.setTransform(-114.6,-6.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8A9695").s().p("AgkAwIAOhfIAdgBIAeABIgDALIgsAAIgEAeIASAAQASAAAGAGQAHAFgDARQgCAQgHAGQgIAFgPAAIgkgBgAgUAlIASAAQALAAAEgDQAEgDABgLQACgKgDgDQgDgDgLAAIgTAAg");
	this.shape_33.setTransform(-122.5,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._040646, new cjs.Rectangle(-128.7,-18.8,257.5,37.6), null);


(lib._0466 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(75,173,167,0.8)").s().p("A3bJxIAAzhMAu3AAAIAAThg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._0466, new cjs.Rectangle(-150,-62.5,300,125), null);


(lib._0460 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEF0EB").s().p("Eg6gAJxIAAzhMB1BAAAIAAThg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._0460, new cjs.Rectangle(-374.5,-62.5,749,125), null);


(lib.ФИНАЛ_ЛОГО = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F8983").s().p("AgGA1IAAglIgkhEIARAAIAZA0IAag0IARAAIgjBEIAAAlg");
	this.shape.setTransform(2.6,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F8983").s().p("AgJA2QgLAAgFgFQgGgGAAgIIAAhEQAAgJAGgFQAGgGAKAAIApAAIAAAOIgnAAQgFAAgBACQgCACAAAGIAAAVIAsAAIAAALIgsAAIAAAcQAAAFACACQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIApAAIAAAOg");
	this.shape_1.setTransform(-41.4,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F8983").s().p("AAXA1IAAgyIguAAIAAAyIgPAAIAAhpIAPAAIAAArIAuAAIAAgrIAQAAIAABpg");
	this.shape_2.setTransform(-50.2,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F8983").s().p("AAgA1IgKggIgqAAIgKAgIgQAAIAihlQABgEAEAAIAPAAQAFAAABAEIAhBlgAgQAIIAhAAIgPgwIgDAAg");
	this.shape_3.setTransform(-32.3,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F8983").s().p("AgIA2QgXAAAAgWIAAhUIAQAAIAABSQAAAFACADQACACAGAAIAkAAIABAOg");
	this.shape_4.setTransform(-23.3,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F8983").s().p("AgHA1IAAhcIgiAAIAAgNIBTAAIAAANIgiAAIAABcg");
	this.shape_5.setTransform(-16.7,7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3F8983").s().p("AAYA1IAAgyIguAAIAAAyIgQAAIAAhpIAQAAIAAArIAuAAIAAgrIAPAAIAABpg");
	this.shape_6.setTransform(-7.1,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F8983").s().p("AgJA2QgLAAgFgFQgGgGAAgIIAAhEQAAgJAGgFQAGgGAKAAIApAAIAAAOIgnAAQgFAAgBACQgCACAAAGIAAAVIAsAAIAAALIgsAAIAAAcQAAAFACACQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIApAAIAAAOg");
	this.shape_7.setTransform(32.8,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F8983").s().p("AgoA1IAAhpIAngCQAXAAAJAMQAJAMAAAeQAAAfgJAMQgJAMgXAAIgngCgAgYApIAXAAQANAAAHgJQAFgJAAgXQAAgWgFgJQgHgJgNAAIgXAAg");
	this.shape_8.setTransform(24,7.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3F8983").s().p("AAVA1QgEAAgCgEIgnhXIgCAAIABBbIgQAAIAAhjQAAgGAGAAIAOAAQAFAAACAEIAnBWIACAAIgBhaIAQAAIAABjQAAAGgGAAg");
	this.shape_9.setTransform(41.8,7.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F8983").s().p("AgHA1IAAhcIghAAIAAgNIBSAAIAAANIgjAAIAABcg");
	this.shape_10.setTransform(51.9,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3F8983").s().p("AB1gSIgZASIATgYIqIgIIKIgHIgTgZIAZASIAHhVIAIBVIAZgSIgTAZIGQAHImQAIIATAYIgZgSIgICWg");
	this.shape_11.setTransform(0.4,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3F8983").s().p("AgKAPQgCgDgBgDIAAgFQABgDABgBQADgCAEAAIAOAAIAAgEQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgCgEAAIgOABIgBgEIAQgBQAEAAADACQACADABAFIAAAXIgDAAIgBgGIgGAEQgEACgEAAQgDAAgDgCgAgJAFIAAADQABAGAFgBIAGgBIAHgEIAAgIIgOAAQgEAAgBAFg");
	this.shape_12.setTransform(44.1,-7.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3F8983").s().p("AAJAQIgFgLQgDgEgEAAIAAAAIgGAAIABADIAAAMIgFAAIAAgfIAFAAIAAAKIgBAEIAGAAIADgBIACgCIACgDIACgEIACgEIAFAAIgCAEIgCADIgCAEIgBACIgDACIgDAAIACAAIADABIABABIACACIABADIACACIABAEIACADg");
	this.shape_13.setTransform(40.7,-7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F8983").s().p("AAKAQIAAgWIAAgEIgCADIgRAXIgEAAIAAgfIAEAAIAAAWIAAAEIACgDIARgXIAEAAIAAAfg");
	this.shape_14.setTransform(36.9,-7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F8983").s().p("AAKAQIAAgPIgSAAIAAAPIgFAAIAAgfIAFAAIAAANIASAAIAAgNIAEAAIAAAfg");
	this.shape_15.setTransform(33,-7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F8983").s().p("AAKAQIAAgWIAAgEIgCADIgRAXIgEAAIAAgfIAEAAIAAAWIAAAEIADgDIAQgXIAEAAIAAAfg");
	this.shape_16.setTransform(29.1,-7.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#408A84").s().p("AgOANIADgCIACgDIABgCIABgCIABgDIAAgCIABgDIAAgCIAAgDQAAgDACgBQACgCADAAIANAAIAAAfIgEAAIAAgcIgIAAIgDABIgBADIgBADIAAACIAAACIgBACIAAACIAAACIgBACIAAADQgDAFgGABg");
	this.shape_17.setTransform(25.1,-7.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#408A84").s().p("AAJAQIgFgLQgDgEgEAAIAAAAIgGAAIABADIAAAMIgFAAIAAgfIAFAAIAAAKIgBAEIAGAAIADgBIACgCIACgDIACgEIACgEIAFAAIgCAEIgCADIgCAEIgBACIgDACIgDAAIACAAIADABIABABIACACIABADIACACIABAEIACADg");
	this.shape_18.setTransform(21.8,-7.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3F8983").s().p("AAJAQIAAgMIgJAAQgFAAgBAEIgCAIIgFAAIADgJQABgEAGgBQgIgBAAgHQAAgFADgCQACgCAGAAIAOAAIAAAfgAgFgKQgCABAAAEQAAADACACQACABADAAIAJAAIAAgNIgJAAQgEAAgBACg");
	this.shape_19.setTransform(5.6,-7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3F8983").s().p("AgKAPQgCgDgBgDIAAgFQAAgDACgBQADgCAEAAIAOAAIAAgEQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgDAAIgOABIgBgEIAPgBQAFAAADACQADADgBAFIAAAXIgCAAIgBgGIgHAEQgDACgEAAQgEAAgCgCgAgIAFIAAADQAAAGAFgBIAGgBIAHgEIAAgIIgOAAQgEAAAAAFg");
	this.shape_20.setTransform(2,-7.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F8983").s().p("AAJAQIgFgLQgDgEgEAAIAAAAIgGAAIABADIAAAMIgFAAIAAgfIAFAAIAAAKIgBAEIAGAAIADgBIACgCIACgDIACgEIACgEIAFAAIgCAEIgCADIgCAEIgBACIgDACIgDAAIACAAIADABIABABIACACIABADIACACIABAEIACADg");
	this.shape_21.setTransform(-1.4,-7.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3F8983").s().p("AgIANQgEgEAAgJQAAgIAEgEQADgEAIAAQAFAAAEABIAAADIgJAAQgFAAgDACQgCADAAAHQAAAIACADQADACAFAAIAJAAIABADQgFABgFAAQgIAAgDgEg");
	this.shape_22.setTransform(-4.8,-7.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3F8983").s().p("AgKANQgDgEAAgJQAAgIADgEQAEgEAGAAQAHAAAEACQADADAAAFQAAAIgIAAIgPAAQABAHACACQADACAEAAIAMAAIAAACQgEACgIAAQgHAAgEgEgAgGgKQgDADAAAHIAOAAQAFAAAAgGQAAgDgDgCQgCgBgEAAQgFAAgCACg");
	this.shape_23.setTransform(-8.3,-7.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3F8983").s().p("AAIAQIAAgOQgGADgGAAQgIAAAAgGIAAgOIAEAAIAAAMQAAABAAAAQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQAFAAAGgCIAAgOIAFAAIAAAfg");
	this.shape_24.setTransform(-12,-7.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#408A84").s().p("AAKAQIAAgWIAAgEIgCADIgSAXIgDAAIAAgfIAEAAIAAAWIAAAEIACgDIARgXIAEAAIAAAfg");
	this.shape_25.setTransform(-15.6,-7.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3F8983").s().p("AgLAQIAAgYQAAgEACgCQACgBADAAIAQAAIgBADIgNAAQgFAAAAAFIAAAXg");
	this.shape_26.setTransform(-18.9,-7.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3F8983").s().p("AgLANQgDgEAAgJQAAgIADgEQAEgEAHAAQAIAAAEAEQADAEAAAIQAAAJgDAEQgEAEgIAAQgHAAgEgEgAgHgJQgDACAAAHQAAAIADADQACACAFAAQAGAAACgCQADgDAAgIQAAgHgDgCQgCgDgGAAQgFAAgCADg");
	this.shape_27.setTransform(-22.5,-7.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3F8983").s().p("AgOANIADgCIADgDIABgCIAAgCIABgDIAAgCIABgDIAAgCIAAgDQAAgDACgBQACgCADAAIANAAIAAAfIgEAAIAAgcIgIAAIgDABIgBADIgBADIAAACIAAACIgBACIAAACIgBACIAAACIgBADQgCAFgHABg");
	this.shape_28.setTransform(-26.4,-7.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3F8983").s().p("AgKANQgEgEAAgJQAAgIAEgEQADgEAHAAQAIAAADAEQAEAEAAAIQAAAJgEAEQgDAEgIAAQgHAAgDgEgAgHgJQgCACgBAHQABAIACADQACACAFAAQAGAAACgCQACgDAAgIQAAgHgCgCQgCgDgGAAQgFAAgCADg");
	this.shape_29.setTransform(-30,-7.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3F8983").s().p("AgBAQIAAgcIgMAAIAAgDIAbAAIAAADIgMAAIAAAcg");
	this.shape_30.setTransform(-33.5,-7.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3F8983").s().p("AgKAPQgDgDAAgDIAAgFQAAgDADgBQACgCAEAAIAOAAIAAgEQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgEAAIgNABIgBgEIAPgBQAFAAADACQACADAAAFIAAAXIgDAAIAAgGIgHAEQgDACgEAAQgEAAgCgCgAgIAFIAAADQAAAGAFgBIAGgBIAHgEIAAgIIgOAAQgEAAAAAFg");
	this.shape_31.setTransform(-37,-7.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3F8983").s().p("AAQAQIgCgcIgBAAIgJAYIgCABIgDAAIgCgBIgJgYIgCAAIgBAcIgEAAIACgeQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAFAAIACABIAIATIABAFIABAAIABgFIAIgTQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAFAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIACAeg");
	this.shape_32.setTransform(-41.3,-7.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3F8983").s().p("AgLANQgDgEAAgJQAAgIADgEQAEgEAHAAQAIAAAEAEQADAEAAAIQAAAJgDAEQgEAEgIAAQgHAAgEgEgAgHgJQgCACgBAHQABAIACADQACACAFAAQAGAAACgCQACgDAAgIQAAgHgCgCQgCgDgGAAQgFAAgCADg");
	this.shape_33.setTransform(-45.6,-7.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3F8983").s().p("AgBAQIAAgcIgMAAIAAgDIAbAAIAAADIgMAAIAAAcg");
	this.shape_34.setTransform(-49.2,-7.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3F8983").s().p("AgIANQgEgEAAgJQAAgIAEgEQADgEAHAAQAHAAADABIgBADIgIAAQgGAAgCACQgDADABAHQgBAIADADQACACAGAAIAJAAIABADQgFABgGAAQgHAAgDgEg");
	this.shape_35.setTransform(-52.3,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ФИНАЛ_ЛОГО, new cjs.Rectangle(-56,-14.2,112.1,28.5), null);


(lib._ЦЕНОБЛОК = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B9696").s().p("AgJAzQgGgHAAgMIAAgwIgQAAIAAgPIAQAAIAAgaIAVAAIAAAaIAaAAIAAAPIgaAAIAAAsQAAAGACACQACACAGAAIAMAAIADARQgKADgNAAQgKAAgHgHg");
	this.shape.setTransform(77.1,-35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B9696").s().p("AATAtIAAg6QAAgIgCgCQgCgDgFAAQgGAAgGADIgQAIIAAA8IgWAAIAAhXIASAAIACANQAUgPARAAQAMAAAGAGQAGAGAAAMIAABBg");
	this.shape_1.setTransform(68.3,-34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8B9696").s().p("AggAoQgIgHAAgMIAAgJQAAgLAHgFQAHgGANAAIAgAAIAAgFQAAgHgEgDQgDgCgJAAIgkABIgDgPQAYgEAUAAQARAAAIAGQAIAHAAARIAAA7IgSAAIgCgNQgOAPgTAAQgMAAgIgGgAgQAHQgCADAAAEIAAAEQAAALAMAAQAMAAANgLIAAgOIgbAAQgGABgCACg");
	this.shape_2.setTransform(57.7,-34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8B9696").s().p("AgOA5QgGgGAAgLIAAhnIAVAAIAABhQgBAGADACQADADAFAAIAIAAIACAQQgGADgNAAQgKAAgGgHg");
	this.shape_3.setTransform(50.7,-35.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B9696").s().p("AgqA/IAAh6IASAAIACANQAGgHAKgEQAJgFAKAAQAeAAAAAvQAAAYgJALQgHAKgSAAQgRAAgNgJIABATIAAAXgAgGgpIgOAIIAAApQARAEAGAAQAJAAAEgFQAFgGAAgQQAAgQgEgHQgDgGgJAAQgFAAgGADg");
	this.shape_4.setTransform(42.2,-32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8B9696").s().p("AAtAtIAAg6QAAgHgCgDQgDgDgFAAQgGAAgEACIgPAJIAAA8IgTAAIAAg6QgBgHgCgDQgDgDgFAAQgGAAgEACQgFACgJAHIAAA8IgWAAIAAhXIASAAIACANQARgPARAAQAQAAAFAOQARgOARAAQALAAAHAGQAGAGAAAMIAABBg");
	this.shape_5.setTransform(28.9,-34.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8B9696").s().p("AgeAkQgKgLAAgZQAAgZAJgKQAKgKAWAAQAVAAAKAHQAJAIAAAPQAAAYgXAAIgjAAQABAMAFAEQAFAEALAAQAOAAASgDIACAOQgMAGgYAAQgXAAgKgKgAgNgXQgEAEgBAOIAeAAQAIAAAAgKQAAgHgEgDQgEgDgKAAQgKAAgFAFg");
	this.shape_6.setTransform(16.1,-34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8B9696").s().p("AgJAzQgGgHAAgMIAAgwIgQAAIAAgPIAQAAIAAgaIAVAAIAAAaIAaAAIAAAPIgaAAIAAAsQAAAGACACQACACAGAAIAMAAIADARQgKADgNAAQgKAAgHgHg");
	this.shape_7.setTransform(7.5,-35.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8B9696").s().p("AgaAIIAAgPIA1AAIAAAPg");
	this.shape_8.setTransform(0.1,-34.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8B9696").s().p("AAdA+Igbg4IgDAAIgbA4IgYAAIAhg/Igfg8IAYAAIAZAzIADAAIAZgzIAYAAIgfA8IAhA/g");
	this.shape_9.setTransform(-9.4,-35.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8B9696").s().p("AggAyQgMgOAAgkQAAgiAMgPQALgOAbAAQAVAAAPAEIgCARIgigBQgOAAgGAJQgFAKgBAYQABAaAFAJQAGAKAOAAQAXAAANgCIACARQgPAEgXAAQgbAAgLgOg");
	this.shape_10.setTransform(-20,-35.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8B9696").s().p("AgKA+IAAh7IAVAAIAAB7g");
	this.shape_11.setTransform(-27.9,-35.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8B9696").s().p("Ag1ArIgBAAIAAhXIAVAAIAAAgIAQAAQAVAAAIAGQAIAGAAAQQAAARgIAFQgHAHgSgBIgogBgAghAcIAQAAQAKAAADgDQADgCAAgIQAAgIgDgCQgDgDgKAAIgQAAgAAhArIAAhXIAWAAIAABXg");
	this.shape_12.setTransform(-41.1,-34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8B9696").s().p("AgKAsIAAhGIgeAAIAAgRIBRAAIAAARIgeAAIAABGg");
	this.shape_13.setTransform(-52.4,-34.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8B9696").s().p("AATAsIAAgnIglAAIAAAnIgWAAIAAhXIAWAAIAAAhIAlAAIAAghIAWAAIAABXg");
	this.shape_14.setTransform(-62.2,-34.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8B9696").s().p("AggAoQgIgHAAgMIAAgJQAAgLAHgFQAHgGAMAAIAhAAIAAgFQgBgHgDgDQgDgCgKAAIgkABIgCgPQAXgEAUAAQARAAAIAGQAJAHAAARIAAA7IgSAAIgCgNQgOAPgTAAQgMAAgIgGgAgQAHQgCADAAAEIAAAEQAAAGADACQACADAHAAQAMAAANgLIAAgOIgcAAQgFABgCACg");
	this.shape_15.setTransform(-72.7,-34.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B9696").s().p("AgpAsIgCgQQAHgBADgDQADgCACgFQAEgLACgcQACgLAFgFQAGgGALAAIAqAAIAABXIgWAAIAAhHIgOAAQgFAAgCACQgCACAAAGQgEAegEALQgFAWgXAAIgEgBg");
	this.shape_16.setTransform(-83.3,-34);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8B9696").s().p("AATAsIAAhGIgkAAIAABGIgWAAIAAhXIBPAAIAABXg");
	this.shape_17.setTransform(-93.3,-34.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8B9696").s().p("AAmAsIgDhHIgDAAIgRA2QgBAGgHAAIgOAAQgFAAgDgGIgRg2IgCAAIgDBHIgUAAIADhPQAAgIAIAAIAVAAQAHAAABAGIANArIAEAOIABAAIADgOIAOgrQACgGAGAAIAVAAQAIAAAAAIIADBPg");
	this.shape_18.setTransform(-105.4,-34.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8B9696").s().p("AAbA+IAAhRIACgPIgCAAIgGAPIguBRIgXAAIAAh7IAVAAIAABPQABAJgCAHIABAAIAIgOIAthRIAXAAIAAB7g");
	this.shape_19.setTransform(-118.6,-35.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#233836").s().p("AgJBIIAAiAIg2AAIAAgPIB/AAIAAAPIg3AAIAACAg");
	this.shape_20.setTransform(27.4,32.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#233836").s().p("AArBIIAAhGIhUAAIAABGIgTAAIAAiPIATAAIAAA8IBUAAIAAg8IASAAIAACPg");
	this.shape_21.setTransform(11.5,32.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#233836").s().p("AgxBBQgLgKAAgTIAAgRQAAgQAJgJQALgJASAAIBAAAIAAgPQAAgPgHgGQgGgHgSAAQgZAAgnAEIgBgOQArgHAaAAQAXAAAMALQALAKAAAYIAABnIgPAAIgCgZQgLALgRAIQgQAJgTAAQgTAAgLgLgAgpAWIAAANQAAAYAZAAQAOAAAPgHQAQgGANgMIAAgiIg9AAQgWAAAAAWg");
	this.shape_22.setTransform(-5.7,32.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#233836").s().p("AhCA6QAKgDAHgFQAFgFAEgJIADgJIADgMIADgMIACgMIABgLIABgMIABgJQACgQAIgIQAIgHAQAAIA7AAIAACQIgUAAIAAiBIglAAQgJAAgDAEQgFAFgBAKIgBAKIgBALIgCALIgBAKIgDAKIgCAKIgCAKIgEAIQgKAdgeACg");
	this.shape_23.setTransform(-22.8,32.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#233836").s().p("AApBIIAAiAIhSAAIAACAIgSAAIAAiPIB3AAIAACPg");
	this.shape_24.setTransform(-38.7,32.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#233836").s().p("ABHBIIgHiBIgFAAIgrBtQgDAFgFAAIgQAAQgFAAgDgFIgqhtIgGAAIgGCBIgRAAIAGiIQAAgHAIAAIAVAAQAFgBADAHIAjBZIAHAVIAEAAIAIgVIAjhZQACgHAGABIAVAAQAIAAAAAHIAGCIg");
	this.shape_25.setTransform(-58.4,32.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#233836").s().p("AAtBIIAAhnIAAgSIAAAAQgDAGgHAJIhRBqIgPAAIAAiPIARAAIAABmIAAASIAAAAIAKgPIBRhpIAPAAIAACPg");
	this.shape_26.setTransform(-78.2,32.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#233836").s().p("AgxBBQgLgKAAgTIAAgRQAAgQAKgJQAJgJATAAIBAAAIAAgPQAAgPgHgGQgGgHgSAAQgZAAgnAEIgBgOQArgHAaAAQAXAAAMALQALAKAAAYIAABnIgPAAIgCgZQgLALgRAIQgRAJgSAAQgTAAgLgLgAgpAWIAAANQAAAYAZAAQAOAAAPgHQARgGAMgMIAAgiIg9AAQgWAAAAAWg");
	this.shape_27.setTransform(-102.3,32.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#233836").s().p("Ag5BHIACgPQAeACAWAAQAXABAJgGQAJgFAAgPQAAgPgJgHQgJgFgXAAIggAAIAAgOIAgAAQAVAAAIgGQAIgFAAgPQAAgOgJgFQgKgFgZAAQgZAAgQADIgCgPQASgEAZAAQAjAAAOAIQAOAIAAAXQAAAQgHAIQgGAIgSACIAAAAQATABAJAJQAIAJAAATQAAAVgOAIQgNAJghAAQgeAAgZgEg");
	this.shape_28.setTransform(-117.8,32.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#233836").s().p("AAcBKIAAg+Ig3AAIAAA+IgsAAIAAiTIAsAAIAAA2IA3AAIAAg2IAsAAIAACTg");
	this.shape_29.setTransform(-3.2,-0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#233836").s().p("AhKBpIAAjMIAkAAIADAVQAKgLAQgHQAPgIARAAQA0AAAABQQAAAqgOARQgOAQgdABQgdAAgUgPQACAPgBARIAAAkgAgeg2IAABCQAYAHAJgBQAPAAAFgIQAGgIAAgaQAAgagFgKQgFgIgNgBQgOAAgWAPg");
	this.shape_30.setTransform(-21,1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#233836").s().p("Ag8BLIAAhxQAAgkAmAAQA7AAAYAEIgCAfIg9AAQgHAAgEADQgDADAAAHIAABlg");
	this.shape_31.setTransform(-36.9,-0.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#233836").s().p("Ag9BTQgSgXAAg8QAAg7ASgXQASgYArAAQAsAAASAYQASAXAAA7QAAA8gSAXQgSAZgsAAQgrAAgSgZgAgag3QgHAOAAApQAAAqAHAOQAHAPATAAQAUAAAHgPQAIgOAAgqQAAgpgIgOQgHgPgUAAQgTAAgHAPg");
	this.shape_32.setTransform(-60.7,-3.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#233836").s().p("Ag9BTQgSgXAAg8QAAg7ASgXQASgYArAAQAsAAASAYQASAXAAA7QAAA8gSAXQgSAZgsAAQgrAAgSgZgAgag3QgHAOAAApQAAAqAHAOQAHAPATAAQAUAAAHgPQAIgOAAgqQAAgpgIgOQgHgPgUAAQgTAAgHAPg");
	this.shape_33.setTransform(-79.5,-3.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#233836").s().p("AhIBpIAAgZQAAgMAGgHIAzg2QAkgmgBgVQABgIgHgDQgGgCgPAAQgfAAgfACIgCgiQAjgHAjAAQAiAAARAKQARAKAAAcQAAASgGAOQgHAPgUAUIg0A3QALgCASAAIA+AAIAAApg");
	this.shape_34.setTransform(-97.6,-3.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#233836").s().p("Ag8BfQgQgNAAgeQAAg0AjgDIAAgBQgPgCgIgNQgHgNAAgTQAAgeAPgNQAPgMApAAQAqAAAPAMQAPANAAAeQAAATgHANQgJANgPACIAAABQAUACAIAOQAIAOAAAZQAAAegQAMQgQANgtAAQgrAAgRgMgAgaASQgHAGAAASQAAASAHAGQAHAGAUAAQAUAAAGgGQAHgGgBgSQABgSgHgGQgGgGgUAAQgUAAgHAGgAgXhEQgHAFAAARQAAAQAHAFQAFAGATAAQASAAAGgFQAFgFAAgRQAAgRgFgFQgGgGgSAAQgTAAgFAGg");
	this.shape_35.setTransform(-115.5,-3.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("A3bJxIAAzhMAu3AAAIAAThg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._ЦЕНОБЛОК, new cjs.Rectangle(-150,-62.5,300,125), null);


(lib._ФОТО = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icx_templant();
	this.instance.parent = this;
	this.instance.setTransform(-66.2,-66.2,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._ФОТО, new cjs.Rectangle(-66.2,-66.2,132.5,132.5), null);


(lib._ЗАГОБЛОК = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#233836").s().p("AgRBVQgLgLAAgUIAAhOIgbAAIAAgcIAbgCIAAgqIArAAIAAAqIApAAIAAAeIgpAAIAABFQAAAIADADQAEADAJAAIATAAIAFAgQgSAFgYABQgTAAgLgMg");
	this.shape.setTransform(57.4,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#233836").s().p("AAcBMIAAhhQAAgJgEgEQgCgEgJAAQgNAAgbAOIAABkIgsAAIAAiTIAkAAIADAWQAggaAfAAQATAAALAKQALALAAAUIAABug");
	this.shape_1.setTransform(42.4,36.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#233836").s().p("Ag5BDQgNgMAAgUIAAgPQAAgRAMgJQAMgKAVAAIA0AAIAAgHQgBgLgFgEQgFgEgOAAQgXAAgmACIgEgeQAogHAkAAQAeAAAOAMQAOANAAAdIAABhIgjAAIgFgWQgWAagfAAQgVAAgOgLgAgbAYIAAAFQAAAQASAAQARAAATgPIAAgUIgnAAQgPAAAAAOg");
	this.shape_2.setTransform(24.6,36.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#233836").s().p("AgaBgQgMgKAAgUIAAisIArAAIAAChQAAAPARAAIAMAAIAFAfQgLAGgZAAQgSAAgLgLg");
	this.shape_3.setTransform(12.4,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#233836").s().p("AhJBpIAAjNIAkAAIACAWQAKgLAQgHQAQgHARAAQAzgBgBBQQAAApgNARQgOARgdAAQgdAAgTgOQABAQAAAPIAAAlgAgdg3IAABEQAXAFAJAAQAOABAHgJQAEgJAAgZQAAgagEgJQgGgJgMAAQgOAAgVANg");
	this.shape_4.setTransform(-2.1,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#233836").s().p("ABGBMIAAhhQAAgJgDgDQgEgEgJgBQgHAAgGADIgUALIAABkIgpAAIAAhhQAAgJgEgDQgEgEgIgBQgMAAgVAOIAABkIgsAAIAAiTIAkAAIACAVQAdgZAcAAQAdAAAIAYQAagYAcAAQAUAAALAKQAKALAAAUIAABug");
	this.shape_5.setTransform(-24.5,36.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#233836").s().p("Ag2A8QgSgSAAgqQAAgqASgSQARgRAoAAQAkAAARANQAQANABAaQAAAUgLAKQgLAKgXAAIg1AAQACAQAIAGQAIAFAQAAQAYAAAggDIAEAcQgXALgqAAQgoAAgSgSgAgSgmQgHAHgBAUIApAAQAJAAACgDQADgEAAgIQAAgKgFgEQgFgEgPAAQgQAAgGAGg");
	this.shape_6.setTransform(-46.1,36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#233836").s().p("AgRBVQgLgLAAgUIAAhOIgbAAIAAgcIAbgCIAAgqIArAAIAAAqIApAAIAAAeIgpAAIAABFQAAAIADADQAEADAJAAIATAAIAFAgQgSAFgYABQgTAAgLgMg");
	this.shape_7.setTransform(-60.8,34.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#233836").s().p("AgsAPIAAgcIBZAAIAAAcg");
	this.shape_8.setTransform(-73.1,36.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#233836").s().p("AAuBoIgshdIgDAAIgsBdIgvAAIA2hpIgyhlIAvAAIAoBVIADAAIAohVIAvAAIgyBlIA2Bpg");
	this.shape_9.setTransform(-88.9,33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#233836").s().p("Ag4BTQgUgYAAg7QAAg6AUgYQATgYAvAAQAjAAAbAGIgEAjQgYgBgiAAQgVAAgIAOQgJAOAAAmQAAAnAJAOQAIAPAVAAQAqAAAVgDIAEAhQgbAJgoAAQgvAAgTgYg");
	this.shape_10.setTransform(-107.1,33.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#233836").s().p("AgWBoIAAjOIAtAAIAADOg");
	this.shape_11.setTransform(-120.5,33.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#233836").s().p("AhgBJIgBAAIAAiTIArAAIAAA0IAWAAQAmgBAOALQAPAKAAAbQAAAcgOALQgOALgfAAQguAAgagCgAg2ArIAWAAQAOABAEgEQAFgEAAgMQAAgMgFgEQgEgDgOAAIgWAAgAA2BJIAAiTIAsAAIAACTg");
	this.shape_12.setTransform(17.8,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#233836").s().p("AgVBKIAAhwIgxAAIAAgjICNAAIAAAjIgxAAIAABwg");
	this.shape_13.setTransform(-1.5,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#233836").s().p("AAcBKIAAg+Ig3AAIAAA+IgsAAIAAiTIAsAAIAAA2IA3AAIAAg2IAsAAIAACTg");
	this.shape_14.setTransform(-18.3,3.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#233836").s().p("Ag5BDQgNgMAAgUIAAgPQAAgRAMgJQAMgKAVAAIA0AAIAAgHQgBgLgEgEQgFgEgOAAQgYAAgmACIgEgeQAogHAkAAQAeAAAOAMQAOANAAAdIAABhIgjAAIgEgWQgXAagfAAQgWAAgNgLgAgbAYIAAAFQAAAQASAAQAQAAAUgPIAAgUIgnAAQgPAAAAAOg");
	this.shape_15.setTransform(-36.2,3.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#233836").s().p("AhIBKIgEghQAMgCAFgDQAGgDACgIQAGgQAEguQADglAlAAIBOAAIAACTIgsAAIAAh0IgTAAQgIAAgDADQgDADgBAJQgGAwgFASQgHAlgpAAIgMgBg");
	this.shape_16.setTransform(-54.1,3.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#233836").s().p("AAbBKIAAhzIg1AAIAABzIgrAAIAAiTICLAAIAACTg");
	this.shape_17.setTransform(-71.1,3.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#233836").s().p("AA9BKIgEhyIgFAAIgXBSQgEANgNAAIgXAAQgOAAgEgNIgXhSIgEAAIgEByIgoAAIAFiDQAAgQAPAAIAoAAQAOAAACAOIATBBIAEAVIADAAIABgKIACgLIAThBQADgOANAAIApAAQAPAAAAAQIAFCDg");
	this.shape_18.setTransform(-91.8,3.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#233836").s().p("AAqBoIAAh7QAAgOACgOIgCAAQgEAOgIANIhEB8IguAAIAAjPIArAAIAAB5QAAANgCAQIACAAQAEgMAIgPIBFh7IAtAAIAADPg");
	this.shape_19.setTransform(-114.2,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#233836").s().p("Ag2A8QgSgSAAgqQAAgqARgRQASgSAnAAQAlAAARANQAQANABAaQAAAUgLAKQgLAKgXAAIg1AAQACAQAIAGQAIAFAQAAQAYAAAfgDIAFAcQgXALgqAAQgoAAgSgSgAgSgmQgHAHgBAUIApAAQAJAAACgDQADgEAAgIQAAgKgFgEQgGgEgOAAQgQAAgGAGg");
	this.shape_20.setTransform(15.5,-29.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#233836").s().p("AAhBKIAAhMIABgYIgBAAQgDALgIALIg4BOIglAAIAAiTIAnAAIAABOIgCAWIABAAQAFgKAHgKIA3hQIAmAAIAACTg");
	this.shape_21.setTransform(-2.1,-29.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#233836").s().p("AAZBKQgMgqgHgKQgGgJgPAAIgOAAIACAMIAAAxIgsAAIAAiTIAsAAIAAAmQAAAJgCAJIALAAQASAAAFgKQAHgJAKglIAtAAQgOAqgEAIQgIAOgOAEIgNACIAAABIAPACQAGABAFAEIAJAIIAHAPIAHATIAJAbg");
	this.shape_22.setTransform(-19,-29.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#233836").s().p("AAzBfIgDgqIiAAAIAAiTIAsAAIAABzIAyAAIAAhzIAsAAIAABzIAXAAIAABKg");
	this.shape_23.setTransform(-36.9,-27.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#233836").s().p("Ag2A8QgSgSAAgqQAAgqARgRQASgSAnAAQAlAAARANQAQANABAaQAAAUgLAKQgLAKgXAAIg1AAQACAQAIAGQAIAFAQAAQAYAAAfgDIAFAcQgXALgqAAQgoAAgSgSgAgSgmQgHAHgBAUIApAAQAJAAACgDQADgEAAgIQAAgKgFgEQgGgEgOAAQgQAAgGAGg");
	this.shape_24.setTransform(-55.2,-29.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#233836").s().p("AA9BKIgEhzIgFAAIgXBSQgEAOgNAAIgXAAQgOAAgEgOIgXhSIgEAAIgEBzIgoAAIAFiEQAAgPAPAAIAnAAQAOAAADAOIATBAIAEAXIADAAIABgKIACgNIAThAQACgOAOAAIApAAQAPAAAAAPIAFCEg");
	this.shape_25.setTransform(-75.5,-29.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#233836").s().p("Ag2A8QgSgSAAgqQAAgqARgRQASgSAnAAQAlAAARANQAQANABAaQAAAUgLAKQgLAKgXAAIg1AAQACAQAIAGQAIAFAQAAQAYAAAfgDIAFAcQgXALgqAAQgoAAgSgSgAgSgmQgHAHgBAUIApAAQAJAAACgDQADgEAAgIQAAgKgFgEQgGgEgOAAQgQAAgGAGg");
	this.shape_26.setTransform(-95.6,-29.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#233836").s().p("AAkBnIAAhcIhIAAIAABcIgtAAIAAjOIAtAAIAABQIBIAAIAAhQIAuAAIAADOg");
	this.shape_27.setTransform(-114.5,-32.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("A3bJxIAAzhMAu3AAAIAAThg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._ЗАГОБЛОК, new cjs.Rectangle(-150,-62.5,300,125), null);


(lib.ФИНАЛ_ТОПЕР = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ФИНАЛ_ЛОГО();
	this.instance.parent = this;
	this.instance.setTransform(-72.4,-32.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#233836").s().p("Ag/AxIgBAAIAAhiIAcAAIAAAiIAPAAQAZAAAKAHQAJAHAAASQAAATgJAHQgJAHgVAAIgvgBgAgkAdIAPAAQAJAAADgCQADgDAAgIQAAgIgDgCQgDgDgJAAIgPAAgAAkAxIAAhiIAdAAIAABig");
	this.shape.setTransform(67.7,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#233836").s().p("AgNAxIAAhLIgiAAIAAgWIBfAAIAAAWIghAAIAABLg");
	this.shape_1.setTransform(54.8,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#233836").s().p("AATAxIAAgqIgkAAIAAAqIgeAAIAAhhIAeAAIAAAkIAkAAIAAgkIAdAAIAABhg");
	this.shape_2.setTransform(43.6,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#233836").s().p("AglAsQgKgHABgOIAAgJQgBgMAJgGQAHgGAPgBIAiAAIAAgEQAAgHgDgDQgEgCgJgBIgpACIgDgUQAbgFAXAAQAVAAAJAIQAKAJgBAUIAABAIgXAAIgDgQQgOASgWAAQgNAAgJgIgAgRAPIAAAFQAAAJALABQALAAANgKIAAgOIgaAAQgJAAAAAJg");
	this.shape_3.setTransform(31.7,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#233836").s().p("AgwAyIgCgWQAHgCAEgCQAEgBABgGQAEgLACgeQADgZAZAAIAzAAIAABiIgdAAIAAhNIgNAAQgFAAgCABQgCADAAAGQgEAggDALQgGAZgbAAIgIAAg");
	this.shape_4.setTransform(19.8,32.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#233836").s().p("AASAyIAAhNIgjAAIAABNIgdAAIAAhiIBdAAIAABig");
	this.shape_5.setTransform(8.5,32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#233836").s().p("AAoAxIgChMIgEAAIgPA2QgCAKgKAAIgOAAQgJAAgDgKIgPg2IgEAAIgCBMIgbAAIADhXQAAgKALAAIAbAAQAIAAADAJIALAqIADAPIACAAIABgGIABgJIAMgqQACgJAKAAIAbAAQAJAAABAKIADBXg");
	this.shape_6.setTransform(-5.3,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#233836").s().p("AAWAxIAAgyIABgQIgBAAQgDAHgEAIIgkAzIgaAAIAAhhIAbAAIAAAzIgBAPIAAAAQACgHAGgHIAkg0IAZAAIAABhg");
	this.shape_7.setTransform(-19.2,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#233836").s().p("AgkAoQgMgMAAgcQAAgcAMgLQAMgMAaAAQAZAAALAJQAKAIABARQAAAPgIAFQgGAHgRAAIgiAAQACALAEADQAGAEAKABQARAAAUgDIADASQgQAIgbAAQgbAAgMgMgAgMgZQgEAFgBAOIAcAAQAFgBACgDQACgCAAgFQAAgHgEgDQgEgDgJABQgLAAgEAEg");
	this.shape_8.setTransform(-35.2,32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#233836").s().p("AAWAxIAAgyIABgQIgBAAQgDAHgFAIIgjAzIgaAAIAAhhIAaAAIAAAzIAAAPIAAAAQADgHAFgHIAkg0IAZAAIAABhg");
	this.shape_9.setTransform(-46.9,32.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#233836").s().p("AASAxQgJgcgFgGQgEgHgJAAIgJAAIABAJIAAAgIgeAAIAAhhIAeAAIAAAZIgBAMIAGAAQAMAAADgHQAFgGAHgYIAeAAIgNAhQgEAJgJADIgJABIAAABIAJABQAEABAEADIAFAFIAFAJIAFANIAGASg");
	this.shape_10.setTransform(-58.2,32.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#233836").s().p("AAiA/IgCgcIhVAAIAAhhIAeAAIAABMIAhAAIAAhMIAdAAIAABMIAPAAIAAAxg");
	this.shape_11.setTransform(-70.1,33.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#233836").s().p("AgkAoQgLgMgBgcQABgcALgLQAMgMAaAAQAZAAALAJQAKAIABARQAAAPgIAFQgGAHgQAAIgjAAQABALAFADQAGAEAKABQAQAAAVgDIADASQgQAIgbAAQgbAAgMgMgAgMgZQgEAFAAAOIAbAAQAFgBACgDQACgCAAgFQAAgHgEgDQgDgDgKABQgLAAgEAEg");
	this.shape_12.setTransform(-82.3,32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#233836").s().p("AApAxIgEhMIgCAAIgRA2QgBAKgJAAIgQAAQgJAAgBgKIgRg2IgCAAIgCBMIgbAAIADhXQAAgKAKAAIAaAAQAKAAABAJIANAqIADAPIAAAAIACgGIABgJIANgqQABgJAKAAIAaAAQALAAAAAKIAEBXg");
	this.shape_13.setTransform(-95.8,32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#233836").s().p("AgjAoQgMgMgBgcQABgcAMgLQALgMAaAAQAYAAAMAJQALAIgBARQABAPgIAFQgGAHgQAAIgjAAQABALAFADQAGAEAKABQARAAAUgDIADASQgQAIgbAAQgbAAgLgMgAgMgZQgEAFAAAOIAbAAQAFgBACgDQABgCABgFQgBgHgDgDQgDgDgKABQgKAAgFAEg");
	this.shape_14.setTransform(-109.2,32.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#233836").s().p("AATAxIAAgqIgkAAIAAAqIgeAAIAAhhIAeAAIAAAkIAkAAIAAgkIAdAAIAABhg");
	this.shape_15.setTransform(-121,32.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#233836").s().p("AgkAoQgMgMAAgbQAAgcAMgMQAMgMAaAAQAZAAALAIQAKAJABASQAAANgIAGQgGAHgRAAIgiAAQACALAEAEQAGADAKAAQARAAAUgCIADATQgQAHgbAAQgbAAgMgMgAgMgZQgEAFgBAOIAcAAQAFAAACgDQACgDAAgFQAAgHgEgCQgEgDgJgBQgLAAgEAFg");
	this.shape_16.setTransform(-23.5,9.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#233836").s().p("Ag/AxIgBAAIAAhiIAcAAIAAAiIAPAAQAZAAAKAHQAJAHAAASQAAATgJAHQgJAHgVAAIgvgBgAgkAdIAPAAQAJAAADgCQADgDAAgIQAAgIgDgCQgDgDgJAAIgPAAgAAkAxIAAhiIAdAAIAABig");
	this.shape_17.setTransform(-37,9.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#233836").s().p("AATAxIAAgqIgkAAIAAAqIgeAAIAAhhIAeAAIAAAkIAkAAIAAgkIAdAAIAABhg");
	this.shape_18.setTransform(-50.8,9.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#233836").s().p("AATAxIAAhMIgkAAIAABMIgdAAIAAhiIBdAAIAABig");
	this.shape_19.setTransform(-62.8,9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#233836").s().p("AgvBEIADgTQARAAAJgEQAHgFAEgLIgFAAQgIAAgCgHIgfhbIAeAAIATBAIAEAOIABAAIADgOIAThAIAgAAIgkBjQgIAZgSAJQgJAGgPAAIgQgCg");
	this.shape_20.setTransform(-74.4,11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#233836").s().p("AgNAxIAAhLIgiAAIAAgWIBfAAIAAAWIgiAAIAABLg");
	this.shape_21.setTransform(-85.1,9.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#233836").s().p("AggAoQgLgMAAgcQAAgbALgMQAMgMAaAAQAWAAAOAHIgDASIgcAAQgNgBgEAGQgGAGAAAPQAAARAGAFQAEAGANAAQASAAAMgCIADAUQgPAGgYAAQgZAAgMgMg");
	this.shape_22.setTransform(-95.3,9.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#233836").s().p("AgmAoQgMgMAAgbQAAgcAMgMQALgMAbAAQAcAAALAMQAMAMAAAcQAAAbgMAMQgLAMgcAAQgbAAgLgMgAgPgXQgEAHAAARQAAARAEAGQAEAGALAAQAMAAAEgGQAEgGAAgRQAAgRgEgHQgEgFgMAAQgLAAgEAFg");
	this.shape_23.setTransform(-106.4,9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#233836").s().p("AAwBUIgCgeIhbAAIgCAeIgWAAIAAg0IAPAAQAOgjAEgzQABgNAIgIQAJgIAOAAIA4AAIAABzIASAAIAAA0gAgEg7QgDADAAAHQgDAdgEATQgEARgIAQIAvAAIAAhdIgSAAQgFAAgCACg");
	this.shape_24.setTransform(-119.7,8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("A3bJxIAAzhMAu3AAAIAAThg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ФИНАЛ_ТОПЕР, new cjs.Rectangle(-150,-62.5,300,125), null);


(lib.ЛОГО = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.лого_ХД();
	this.instance.parent = this;
	this.instance.setTransform(1.2,14.1);

	this.instance_1 = new lib.лого_СК();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,-17.3);

	this.instance_2 = new lib.лого_СТАР();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ЛОГО, new cjs.Rectangle(-107.9,-27.1,215.9,54.3), null);


(lib._ХЭДЭР = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// ЦЕНОБЛОК
	this.instance = new lib._ЦЕНОБЛОК();
	this.instance.parent = this;
	this.instance.setTransform(258,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({x:0},5).wait(31));

	// ЗАГ
	this.instance_1 = new lib._ЗАГОБЛОК();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-62.5,300,125);


(lib._ФУТЭР = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// 1
	this.instance = new lib._0466();
	this.instance.parent = this;
	this.instance.setTransform(20,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-25},14).wait(1));

	// 2
	this.instance_1 = new lib._046064();
	this.instance_1.parent = this;
	this.instance_1.setTransform(262.3,0,0.533,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,scaleX:0.36,x:233.4},14).wait(1));

	// фото
	this.instance_2 = new lib._ФОТО();
	this.instance_2.parent = this;
	this.instance_2.setTransform(184.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:169.3},14).wait(1));

	// 3
	this.instance_3 = new lib._0460();
	this.instance_3.parent = this;
	this.instance_3.setTransform(233.8,0,0.413,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-66,518.5,132.5);


(lib._ФИНАЛ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// ЗАПИСАЦЦА
	this.instance = new lib._0460467();
	this.instance.parent = this;
	this.instance.setTransform(399.3,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1.4,regY:3.3,x:373.4,y:36.7},0).wait(1).to({x:351.9},0).wait(1).to({x:332.8},0).wait(1).to({x:315.7},0).wait(1).to({x:300.3},0).wait(1).to({x:286.3},0).wait(1).to({x:273.6},0).wait(1).to({x:262},0).wait(1).to({x:251.4},0).wait(1).to({x:241.7},0).wait(1).to({x:232.8},0).wait(1).to({x:224.6},0).wait(1).to({x:217},0).wait(1).to({x:210.1},0).wait(1).to({x:203.8},0).wait(1).to({x:198},0).wait(1).to({x:192.7},0).wait(1).to({x:187.8},0).wait(1).to({x:183.4},0).wait(1).to({x:179.4},0).wait(1).to({x:175.8},0).wait(1).to({x:172.6},0).wait(1).to({x:169.7},0).wait(1).to({x:167.1},0).wait(1).to({x:164.9},0).wait(1).to({x:163},0).wait(1).to({x:161.3},0).wait(1).to({x:160},0).wait(1).to({regX:0,regY:0,x:160.3,y:33.4},0).wait(1));

	// 1
	this.instance_1 = new lib._0466копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(314.5,35,0.535,0.56,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,scaleX:0.5,x:281.5},0).wait(1).to({scaleX:0.46,x:252.8},0).wait(1).to({scaleX:0.43,x:227.3},0).wait(1).to({scaleX:0.4,x:204.5},0).wait(1).to({scaleX:0.38,x:184},0).wait(1).to({scaleX:0.35,x:165.3},0).wait(1).to({scaleX:0.33,x:148.4},0).wait(1).to({scaleX:0.31,x:132.9},0).wait(1).to({scaleX:0.3,x:118.7},0).wait(1).to({scaleX:0.28,x:105.7},0).wait(1).to({scaleX:0.27,x:93.8},0).wait(1).to({scaleX:0.25,x:82.9},0).wait(1).to({scaleX:0.24,x:72.8},0).wait(1).to({scaleX:0.23,x:63.6},0).wait(1).to({scaleX:0.22,x:55.2},0).wait(1).to({scaleX:0.21,x:47.4},0).wait(1).to({scaleX:0.2,x:40.3},0).wait(1).to({scaleX:0.19,x:33.9},0).wait(1).to({scaleX:0.19,x:28},0).wait(1).to({scaleX:0.18,x:22.6},0).wait(1).to({scaleX:0.17,x:17.8},0).wait(1).to({scaleX:0.17,x:13.5},0).wait(1).to({scaleX:0.16,x:9.7},0).wait(1).to({scaleX:0.16,x:6.3},0).wait(1).to({scaleX:0.16,x:3.3},0).wait(1).to({scaleX:0.15,x:0.7},0).wait(1).to({scaleX:0.15,x:-1.5},0).wait(1).to({scaleX:0.15,x:-3.3},0).wait(1).to({scaleX:0.14,x:-4.7},0).wait(1));

	// 2
	this.instance_2 = new lib._046064копия();
	this.instance_2.parent = this;
	this.instance_2.setTransform(421.6,35,0.939,0.56);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.95,x:394.3},0).wait(1).to({scaleX:0.95,x:370.4},0).wait(1).to({scaleX:0.96,x:349.2},0).wait(1).to({scaleX:0.96,x:330.2},0).wait(1).to({scaleX:0.96,x:313.1},0).wait(1).to({scaleX:0.97,x:297.6},0).wait(1).to({scaleX:0.97,x:283.5},0).wait(1).to({scaleX:0.97,x:270.6},0).wait(1).to({scaleX:0.98,x:258.8},0).wait(1).to({scaleX:0.98,x:248},0).wait(1).to({scaleX:0.98,x:238.1},0).wait(1).to({scaleX:0.98,x:229},0).wait(1).to({scaleX:0.98,x:220.6},0).wait(1).to({scaleX:0.99,x:212.9},0).wait(1).to({scaleX:0.99,x:205.9},0).wait(1).to({scaleX:0.99,x:199.5},0).wait(1).to({scaleX:0.99,x:193.6},0).wait(1).to({scaleX:0.99,x:188.2},0).wait(1).to({scaleX:0.99,x:183.3},0).wait(1).to({scaleX:0.99,x:178.9},0).wait(1).to({scaleX:0.99,x:174.8},0).wait(1).to({scaleX:0.99,x:171.3},0).wait(1).to({scaleX:1,x:168},0).wait(1).to({x:165.2},0).wait(1).to({scaleX:1,x:162.7},0).wait(1).to({x:160.6},0).wait(1).to({scaleX:1,x:158.8},0).wait(1).to({x:157.3},0).wait(1).to({regX:0.1,x:156.1},0).wait(1));

	// фото
	this.instance_3 = new lib._ФОТО();
	this.instance_3.parent = this;
	this.instance_3.setTransform(248,35,0.528,0.528);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:225.9},0).wait(1).to({x:206.6},0).wait(1).to({x:189.4},0).wait(1).to({x:174.1},0).wait(1).to({x:160.2},0).wait(1).to({x:147.6},0).wait(1).to({x:136.2},0).wait(1).to({x:125.8},0).wait(1).to({x:116.2},0).wait(1).to({x:107.5},0).wait(1).to({x:99.4},0).wait(1).to({x:92.1},0).wait(1).to({x:85.3},0).wait(1).to({x:79.1},0).wait(1).to({x:73.4},0).wait(1).to({x:68.2},0).wait(1).to({x:63.4},0).wait(1).to({x:59},0).wait(1).to({x:55.1},0).wait(1).to({x:51.5},0).wait(1).to({x:48.2},0).wait(1).to({x:45.3},0).wait(1).to({x:42.7},0).wait(1).to({x:40.4},0).wait(1).to({x:38.4},0).wait(1).to({x:36.7},0).wait(1).to({x:35.2},0).wait(1).to({x:34},0).wait(1).to({x:33},0).wait(1));

	// 3
	this.instance_4 = new lib._0460копия();
	this.instance_4.parent = this;
	this.instance_4.setTransform(300.3,35,0.324,0.56,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,x:287.4},0).wait(1).to({x:276.1},0).wait(1).to({x:266.1},0).wait(1).to({x:257.2},0).wait(1).to({x:249.2},0).wait(1).to({x:241.8},0).wait(1).to({x:235.2},0).wait(1).to({x:229.1},0).wait(1).to({x:223.6},0).wait(1).to({x:218.5},0).wait(1).to({x:213.8},0).wait(1).to({x:209.5},0).wait(1).to({x:205.6},0).wait(1).to({x:202},0).wait(1).to({x:198.7},0).wait(1).to({x:195.6},0).wait(1).to({x:192.9},0).wait(1).to({x:190.3},0).wait(1).to({x:188},0).wait(1).to({x:185.9},0).wait(1).to({x:184},0).wait(1).to({x:182.4},0).wait(1).to({x:180.8},0).wait(1).to({x:179.5},0).wait(1).to({x:178.3},0).wait(1).to({x:177.3},0).wait(1).to({x:176.5},0).wait(1).to({x:175.8},0).wait(1).to({regX:0.1,x:175.3},0).wait(1));

	// ДОП ТЕКСТ
	this.instance_5 = new lib._040646();
	this.instance_5.parent = this;
	this.instance_5.setTransform(174.3,96.4);
	this.instance_5.alpha = 0.141;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({regX:-35,regY:0.8,x:133,y:97.2,alpha:0.276},0).wait(1).to({x:127.9,alpha:0.384},0).wait(1).to({x:123.7,alpha:0.476},0).wait(1).to({x:120,alpha:0.554},0).wait(1).to({x:116.9,alpha:0.621},0).wait(1).to({x:114.1,alpha:0.681},0).wait(1).to({x:111.6,alpha:0.734},0).wait(1).to({x:109.5,alpha:0.78},0).wait(1).to({x:107.5,alpha:0.822},0).wait(1).to({x:105.8,alpha:0.859},0).wait(1).to({x:104.3,alpha:0.891},0).wait(1).to({x:103,alpha:0.92},0).wait(1).to({x:101.8,alpha:0.945},0).wait(1).to({x:100.8,alpha:0.967},0).wait(1).to({x:99.9,alpha:0.985},0).wait(1).to({regX:0,regY:0,x:134.3,y:96.4,alpha:1},0).wait(1));

	// БГ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6SJxIAAzhMA0kAAAIAAThg");
	this.shape.setTransform(121.3,62.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.9,0,564,125);


(lib._ИНТРО = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// ТЕМА
	this.instance = new lib.пла1();
	this.instance.parent = this;
	this.instance.setTransform(0,191.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(1).to({y:140},0).wait(1).to({y:104.5},0).wait(1).to({y:79.4},0).wait(1).to({y:62.5},0).to({alpha:0.48},3).to({alpha:1},3).wait(24));

	// ЛОГО
	this.instance_1 = new lib.ЛОГО();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.4,5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).wait(5).to({regX:1.1,regY:1.6,x:-0.3,y:-16.4},0).wait(1).to({y:-34.6},0).wait(1).to({y:-49},0).wait(1).to({regX:0,regY:0,x:-1.4,y:-62},0).wait(30));

	// свет
	this.instance_2 = new lib.свет();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.6,-1.5,0.532,0.532,0,0,0,0.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({scaleX:2.64,scaleY:2.09,x:0.8},3).to({regX:0,scaleX:0.41,scaleY:0.41,x:22.5,alpha:0.129},8).to({_off:true},1).wait(37));

	// лого_ХД
	this.instance_3 = new lib.лого_ХД();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.7,19.1);
	this.instance_3.alpha = 0.129;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).wait(1).to({x:13.3,alpha:0.408},0).wait(1).to({x:9.1,alpha:0.593},0).wait(1).to({x:5.8,alpha:0.732},0).wait(1).to({x:3.3,alpha:0.843},0).wait(1).to({x:1.3,alpha:0.931},0).wait(1).to({x:-0.3,alpha:1},0).to({_off:true},1).wait(37));

	// лого_СК
	this.instance_4 = new lib.лого_СК();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.8,-12.3);
	this.instance_4.alpha = 0.129;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).wait(1).to({regX:-0.2,regY:2,x:3.2,y:-10.3,alpha:0.408},0).wait(1).to({x:-1,alpha:0.593},0).wait(1).to({x:-4.2,alpha:0.732},0).wait(1).to({x:-6.7,alpha:0.843},0).wait(1).to({x:-8.8,alpha:0.931},0).wait(1).to({regX:0,regY:0,x:-10.2,y:-12.3,alpha:1},0).to({_off:true},1).wait(37));

	// лого_СТАР
	this.instance_5 = new lib.лого_СТАР();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-23.9,6.6);
	this.instance_5.alpha = 0.129;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({alpha:1},5).wait(1).to({x:-21.5},0).wait(1).to({x:-18.5},0).wait(1).to({x:-15},0).wait(1).to({x:-11},0).wait(1).to({x:-6.5},0).wait(1).to({x:-1.4},0).to({_off:true},1).wait(37));

	// звизда2
	this.instance_6 = new lib.звизда();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-14.1,125.2,1.905,1.905,0,0,0,0,0.1);
	this.instance_6.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:0,scaleX:1.71,scaleY:1.71,rotation:12.9,x:-106.4,y:28.7,alpha:0.295},0).wait(1).to({scaleX:1.55,scaleY:1.55,rotation:23.4,x:-135.8,y:-55.7,alpha:0.452},0).wait(1).to({scaleX:1.42,scaleY:1.42,rotation:32,x:-65.6,y:-92.1,alpha:0.581},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:39.2,x:2.6,y:-59.3,alpha:0.688},0).wait(1).to({scaleX:1.23,scaleY:1.23,rotation:45,x:46.2,y:-21.1,alpha:0.776},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:49.8,x:69.7,y:12.4,alpha:0.847},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:53.6,x:63.3,y:36.5,alpha:0.904},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:56.4,x:32.8,y:26.5,alpha:0.947},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:58.4,x:13.1,y:11.9,alpha:0.977},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:59.6,x:3,y:2.8,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,rotation:60,x:0.1,y:0,alpha:1},0).to({_off:true},1).wait(48));

	// звизда1
	this.instance_7 = new lib.звизда();
	this.instance_7.parent = this;
	this.instance_7.setTransform(14.2,-125,2.048,2.048);
	this.instance_7.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX:1.82,scaleY:1.82,rotation:-19.6,x:107.3,y:-27.8,alpha:0.297},0).wait(1).to({scaleX:1.63,scaleY:1.63,rotation:-35.5,x:135.5,y:58.1,alpha:0.456},0).wait(1).to({scaleX:1.48,scaleY:1.48,rotation:-48.7,x:61,y:90.9,alpha:0.588},0).wait(1).to({scaleX:1.36,scaleY:1.36,rotation:-59.5,x:-6.6,y:56.2,alpha:0.695},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:-68.3,x:-48.9,y:17.8,alpha:0.783},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-75.4,x:-70.9,y:-15.9,alpha:0.854},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-80.9,x:-59.4,y:-36.8,alpha:0.909},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-85,x:-30.6,y:-25.3,alpha:0.95},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-87.8,x:-11.9,y:-11,alpha:0.978},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-89.5,x:-2.6,y:-2.5,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,rotation:-90,x:0.1,y:0,alpha:1},0).to({_off:true},1).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-164,113.2,325.4);


(lib.____ROLIK____ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_239 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// ФИНАЛ_ХЭДЭР
	this.instance = new lib.ФИНАЛ_ТОПЕР();
	this.instance.parent = this;
	this.instance.setTransform(290,-62.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({_off:false},0).wait(1).to({x:212.6},0).wait(1).to({x:153.8},0).wait(1).to({x:107.7},0).wait(1).to({x:71},0).wait(1).to({x:41.7},0).wait(1).to({x:18.3},0).wait(1).to({x:0},0).wait(51));

	// ФИНАЛ_ФУТЭР
	this.instance_1 = new lib._ФИНАЛ();
	this.instance_1.parent = this;
	this.instance_1.setTransform(194,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(175).to({_off:false},0).wait(1).to({regX:235.1,regY:62.5,x:347.3,y:62.5},0).wait(1).to({x:281.1},0).wait(1).to({x:226.8},0).wait(1).to({x:182.3},0).wait(1).to({x:146.7},0).wait(1).to({x:119.8},0).wait(1).to({regX:0,regY:0,x:-133.5,y:0},0).wait(58));

	// ХЭДЭР
	this.instance_2 = new lib._ХЭДЭР();
	this.instance_2.parent = this;
	this.instance_2.setTransform(304.5,-62.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({x:0},7).wait(181));

	// ФУТЭР
	this.instance_3 = new lib._ФУТЭР();
	this.instance_3.parent = this;
	this.instance_3.setTransform(205,62.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({x:-232.4},7).wait(174));

	// ИНТРО 40
	this.instance_4 = new lib._ИНТРО();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(240));

	// БГ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BADA7").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-164.2,300,325.4);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_478 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(478).call(this.frame_478).wait(1));

	// РАМА
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(479));

	// РОЛИК - копия
	this.instance = new lib.____ROLIK____();
	this.instance.parent = this;
	this.instance.setTransform(150,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({_off:false},0).wait(240));

	// РОЛИК
	this.instance_1 = new lib.____ROLIK____();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},240).wait(239));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,85.8,301,325.4);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/icx_templant.jpg", id:"icx_templant"},
		{src:"images/light.png", id:"light"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;