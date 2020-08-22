(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"making shake_atlas_1", frames: [[1434,823,161,116],[1255,972,243,174],[0,324,1838,322],[0,972,656,610],[658,972,595,479],[0,648,1432,322],[0,0,1913,322],[1434,648,241,173]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["making shake_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["making shake_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2554,1433);


(lib.CachedBmp_6 = function() {
	this.initialize(ss["making shake_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2535,322);


(lib.CachedBmp_4 = function() {
	this.initialize(ss["making shake_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["making shake_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["making shake_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["making shake_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["making shake_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(10,10,10,0.043)").s().p("AgiAUIAAgxIA7AAIAKAAIAAAKQgFAAgFABQgmAPgVAhIAAgKg");
	this.shape.setTransform(1.25,1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(126,126,126,0.506)").s().p("AEiAFIpNAAIAAgJIJNAAIAKAAIAAAJIgKAAg");
	this.shape_1.setTransform(34.75,-0.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(189,189,189,0.757)").s().p("AlxgFILZAAIAKAAIAAAJIgKAAQhxAChvAAQkCAAj3gLg");
	this.shape_2.setTransform(34.75,8.1625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(250,251,251,0.992)").s().p("AFoAoIrZAAIAAgKIAAgUQAVghAngPQAFgBAFAAIJNAAIAKAAQA9AJAJA8IAAAKIgKAAg");
	this.shape_3.setTransform(34.75,3.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(15,15,15,0.059)").s().p("AAcApIAAgKQgJg8g8gJIAAgKQBtgTgiB1QgBABgFAAIAAgKg");
	this.shape_4.setTransform(68.9278,3.4117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-1.7,75.3,10.5);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,80.5,58), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,121.5,87), null);


(lib.strawberry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(104,0,0,0.522)").s().p("AgDAAIAHAAIgHAAg");
	this.shape.setTransform(48.95,184.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(77,0,0,0.388)").s().p("AgDAAIAHAAIgHAAg");
	this.shape_1.setTransform(46.4,184.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(49,0,0,0.251)").s().p("AAOAAIgcAAIAAAAIAcAAIABAAIAAAAg");
	this.shape_2.setTransform(43.225,184.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(130,0,0,0.647)").s().p("AAEAAIgIAAIAJAAIAAAAg");
	this.shape_3.setTransform(40.525,184.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FD8800").s().p("AmoD9QgNgKgBgXQAGgmAWgUQAMgKAQgFQANgFAOAEQAQAGAEAQQADAPgEAOQgJAggZASQgNAJgTACIgEAAQgLAAgHgFgAgaCGQgKgIAAgUQAJgiAbgQIAKgFQAPgHAVABQAKAAAHADQATAIgBAcIgCAIQgNAegdAOQgOAHgVAAQgRAAgLgJgAFyiIQgOgEgHgMQgGgNABgTQAFglAWgVQALgKASgEQAKgCAIAEQAYANgEAmQgBAJgDAIQgKAggcAPQgHAEgIAAIgLgBg");
	this.shape_4.setTransform(112.7036,136.2488);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(104,0,0,0.518)").s().p("AgDAAIAHAAIAAAAIAAAAIgDAAIgEAAg");
	this.shape_5.setTransform(38.875,184.1833);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(143,4,0,0.643)").s().p("AAAAEIAAgHQABADgBADIAAABg");
	this.shape_6.setTransform(0.0333,150.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F66A55").s().p("AAAAKIAAgTIAAAAIAAATIAAAAg");
	this.shape_7.setTransform(29.925,101.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E94D3E").s().p("AgFAAIALAAIAAAAIgGAAIgFAAg");
	this.shape_8.setTransform(43.275,115.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F37E0C").s().p("AAAgDIAAAAIAAAHIAAgHg");
	this.shape_9.setTransform(67.825,120.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#866A09").s().p("AAAANIAAgBIAAgYQABAMgBANg");
	this.shape_10.setTransform(132.3833,62.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE4443").s().p("AgDAAIAAAAIAHAAIgHAAg");
	this.shape_11.setTransform(93.775,66.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9BC00").s().p("Am8JYQgNAAgHgHQgMgLABgZQAHgjAXgUQAMgJARgFQAOgEAMAGQAWALgEAhQgCAJgDAHQgNAegcAPQgJAFgOAAIgDAAgAnWD8QgHgCgFgEQgPgNABgdQAGglAWgVQALgKASgDQAKgCAIAEQAYANgEAmQgBAJgDAIQgLAggcAPQgHADgIAAIgLgBgAg9DvQgEgBgEgDQgMgHgCgRIAAgBIAAgIIAAAAIAAgEQAJgiAYgSQAQgLAXgCQALgCAHAEQATAIgCAaQAAAPgGAKQgPAcgcAOQgJAEgMAAQgHAAgIgBgAGjBbQgHAAgFgEQgQgLACgbQAHgjAYgTQALgJARgFQAMgEAMAEQAXAJgDAgQAAAJgEAIQgMAegaAQQgLAHgPAAIgJgBgAldiJQgKgCgFgHQgNgOABgcQAGglAWgUQALgKATgDQAIgBAGADQAZAMgDAmQgCATgHAOQgLAWgVALQgHAEgIAAIgLgBgABlilQgEAAgEgCQgQgIAAgYQAGgmAUgWQAOgRAUgLQAOgIAUAEQAJABAFAGQAJAMgDAWQgDASgIAOQgPAbgaARQgNAJgVAAIgEAAgAgYnnQgagHADgjQAHgjAYgUQANgKATgEQALgCAIADQAYAKgFAjQgCANgFALQgPAcgeAMQgGADgIAAQgGAAgGgCg");
	this.shape_12.setTransform(76.2638,99.4871);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FD9A7D").s().p("AjLF9IgMAAIAAAAQgUAAgOgFQgIgjgcgNQgIgEgJAAQgLgBgIABIgEgFQgPgcgCgoIAAgBIAAgUIAAAAIAAgJQAEgmAJgiQAJghAMggQALgfANgdIABgEQgDAQAAAWQAAAVAGAPQALAdAgAHQALADAKgDQAagGARgPQAWgVAMgeQAMgbgDgjQgCgTgHgOQgMgXgcgGQgMgDgMADQgZAHgQAQQgLAKgJANQANgeAOgdQAOgcAQgcQAPgbARgaQARgZATgYQATgXAWgWQAVgVAZgSQAYgSAcgPQAcgOAigIQALgDAMgBQgWAUgPAcQgNAZADAkQABAKACAIQAMAfAnADQALAAAJgCQAhgIAWgVQAWgWAMgdQAKgXgDgeIgBgLQAfALAZASQAZARATAYQATAYAKAhQAJAggDAqQgDAmgKAfQgLgIgRgCIgBAAIgJAAIAAAAIgLACQgiAJgXAUQgXAUgRAaQgQAZgGAkQgEAVAFARQAKAhAoADIgDAEIgoAtIgqArIguAoQgXAUgYASQgZASgZAQQgaARgcAOQgdAPgfALQggALgoACg");
	this.shape_13.setTransform(64.2221,76.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(97,4,0,0.431)").s().p("AANAAIgaAAIAAAAIAaAAIAAAAIABAAIAAAAg");
	this.shape_14.setTransform(86.25,19.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(106,174,16,0.996)").s().p("ACZFoQAOgdAGgkQAHggAAglIAAAAQABgOgBgMQgBglgEghQgFgmgHgjQgcAAgVAGQgjAIgcAOQgdAPgYARQgZARgYATQgXATgXAUQgOgSgHgZQgHgUABgbQACgoAOgeIACgHQAGgUALgNQATgYAagRQAbgQAdgMQAfgMAhgJIgVgCIhLgJIgdgDQgegCgcgEQglgGgdgOQgdgNgXgTQgYgVgRgYIAAgBIgBAAQgRgYgMgcQgNgegIgiQgIgjgCgoQAMATAWALIAPAGIA6AbIA8AZIA+AYIA/AVQAhALAdAMQAeAMAdAPQAcAOAbAQQAaARAZASQAZASAYASQAXAUAXAUIAAABIAKBMIAKBKIAKBMIAJBLIADANIgCANQgGAlgQAbQgPAcgXATQgYATgeANIgQAFQgWAFgZACQgUACgOAGQAYgUANgcg");
	this.shape_15.setTransform(114.35,40.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(123,199,23,0.996)").s().p("AgmBaIgognIAAgBIAsgqIAsgoIAtgoQALgJANgJIgQAaIgjA0IggAzIghA0g");
	this.shape_16.setTransform(152.85,29.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(121,4,8,0.655)").s().p("AAAAFIAAgKIAAAAIAAABQABAFgBAFg");
	this.shape_17.setTransform(174.6833,114.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(210,5,6,0.996)").s().p("AmdM5IgMAAIgBAAIgdAAIgBAAIgGAAIAAAAIgKAAIgBAAIgGAAIAAgBIgJAAIgggBQgngEgkgGQgkgIgggLQgfgLgbgPQgcgQgWgUQgXgUgRgZQgTgYgMgeQgNgegIgjQgHgjgCgqIAAAAQABgEgCgDIAAgBIAAgJIAAAAIAAgSQADgpAFgmQAGgkAHgjQAJgjAJghIAThBIAVhCIAUhCIAUg/IAVhAIAWg/IAYg+IAYg9IAbg7IAcg5QAPgcAQgbQAPgbARgaQAQgaATgYQASgZATgXQAUgXAVgWQAWgVAXgTQAXgUAZgSQAZgSAbgPQAcgPAfgMQAegNAggJQAhgLAkgGQAigHAngBIAaAAIABAAQARAYAYAVQAXATAdANQAdAOAlAGQAcAEAeACIAdADIBMAJIAVACQghAJgfAMQgeAMgbAQQgaARgTAYQgLAOgGAUIgCAHQgOAegCAoQgBAbAHAUQAHAZAOASQAXgUAXgTQAYgTAZgRQAZgRAdgPQAcgOAjgIQAVgGAcAAQAHAjAFAmQAEAhABAlIAAAZIAAABQAAAlgHAgQgGAkgOAdQgNAcgYAUQAOgGAUgCQAZgCAWgFIAQgFQAegNAYgTQAXgTAPgcQAQgbAGglIACgNQAGglAIgiIAHgTQACApAHAkQAHAjAJAiIAUBBQAJAhAMAfQANAfAOAcQAPAcASAZQASAYAWAVQAWAUAeAMIAcAMQAFAeABAiIAAAAIABAIIAAAAIAAAGIAAABIAAALIAAAAIAAASIAAABIAAAAIAAALIAAAAQgBAigFAdQgHAkgKAhQgLAggMAdQgOAegPAcQgPAbgSAZQgQAagUAXQgTAXgVAWQgVAWgXAUQgWAUgaASQgYARgcAPQgcAPgdAOQgdAOgeAMQggALgfALQghAKgiAJIhFAQQgjAIglAFIhKAMIhMAKIhNAHQgnADglAGIhNAJIhNAHQgnAEgpACIAAAAIgIAAIAAAAIAAAAIgRABIgBAAIgIAAIAAAAgAiAHsQgRAFgLALQgXATgFAmQABAXANAKQAIAGANgBQAUgBAMgKQAagRAJghQAEgOgDgOQgEgRgQgGQgHgCgHAAQgHAAgGADgAoPHRQgRAGgMAJQgWAUgIAjQgBAYAMAMQAHAGANABQARAAAJgFQAcgPAOgeQADgIABgJQAEgggWgLQgHgEgIAAIgLABgAEIGMIgLAFQgcAQgIAiQAAAUAKAJQALAIASABQAVAAAOgIQAdgOAMgeIACgIQACgbgTgJQgHgDgKAAIgDAAQgUAAgNAGgAolBvQgTACgKALQgXAUgFAmQgCAdAPANQAFAEAHACQAQADAKgFQAcgPALggQADgJABgIQAEgmgYgNQgFgDgHAAIgFABgAjCC8IAAAAQACASAMAHQAEACAFACQAUAEAQgIQAdgOAPgbQAFgLAAgOQACgagTgJQgIgDgLACQgXABgQAMQgYASgJAiIAAADIAAABIgBAAIABAIgAKOBYQgSAEgLAKQgWAVgGAlQAAATAGANQAGAMAPAEQAOAEALgHQAcgPALggQADgIABgJQADgmgXgMQgGgDgGAAIgGAAgAoVBMQAJABAIADQAcAOAIAjQAOAEATABIABAAQAFABAIgBQAogCAggLQAfgLAcgPQAdgPAagQQAagRAYgRQAZgTAXgSIAtgpIArgrIAogtIADgDQgogDgKghQgFgSADgUQAHglAQgZQARgbAXgTQAWgUAhgJIAMgCIAJAAIABAAQARACALAIQAKgfACgmQAEgqgJghQgKgggUgYQgSgYgZgRQgZgSgfgMIACAMQACAegJAWQgNAegVAVQgWAWghAIQgKACgKAAQgngEgMgeQgCgJgBgJQgEgkAOgaQAPgcAWgTQgMABgLACQgjAJgcAOQgcAPgZARQgYATgWAVQgVAVgTAYQgTAYgRAZQgRAagQAbQgPAbgOAdQgOAcgNAfQAJgNALgLQAQgPAZgHQALgEANAEQAcAFAMAYQAHAOACATQACAkgLAbQgMAegXAUQgQAQgaAGQgKACgLgCQgggHgMgeQgFgPgBgVQAAgVAEgQIgBAEQgNAdgMAfQgLAggJAhQgJAigEAmIAAAJIAAAAIgBAAIAAAUIABAAQACAoAPAbIAEAFIAIAAIALAAgAFWgpQgRAEgMAKQgXATgIAiQgCAcAQALQAFAEAHAAQAVADAOgJQAbgQALgfQAEgHABgJQADgggYgJQgGgCgGAAQgGAAgFACgAmtkYQgTACgLALQgWAUgFAlQgBAcAMAOQAGAHAJACQAPADAMgGQAUgLALgWQAHgOACgTQADgngZgMQgEgBgFAAIgFAAgAAak1QgTALgOAQQgUAXgGAmQAAAYAQAHQAEACAFABQAWABAOgKQAagRAPgbQAIgOADgSQADgWgJgMQgFgGgIgBIgNgCQgMAAgKAGgAheptQgUAFgNAKQgXAUgIAiQgCAkAZAHQAPAEAMgFQAegNAPgcQAGgKACgNQAEgkgYgJQgFgCgGAAIgIAAg");
	this.shape_18.setTransform(87.35,101.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(37,65,1,0.522)").s().p("AAAAEIAAgBIAAgGIAAAAIAAAGIAAABg");
	this.shape_19.setTransform(198.275,18.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(29,51,1,0.369)").s().p("AAGAAIgMAAIAAAAIANAAIAAAAg");
	this.shape_20.setTransform(184.575,19.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(82,140,6,0.996)").s().p("AAnG7IgGgBIgcgMQgdgNgWgUQgWgVgSgYQgSgZgPgcQgOgcgNgfQgMgfgJggIgUhCQgJghgHgkQgHgjgCgpIgHATQgIAhgGAlIgDgNIgJhKIgKhMIgKhLIgKhMIATARIAAABIAoAnIABABIAhg0IAhg0IAjg0IAQgaIAAAAQAYgSAcgPQAbgQAfgLQAfgLAkgGQAjgGAiAFQAmAFAeANQAXAJAUAMQANAHAEARIAAAHIAAAAIgBADQgLAdgcAMIgagPIgQgLQgSgNgegCIAAAAIgOAAIAAAAQgMAAgJACQglAGghAKQgfALgbAPQgdAOgZASQgZARgYAUQgXATgXAUIgsApIAqAsQAVAWATAXQAUAXATAYQASAYAPAbQARAaAJAgQAJAZABAeQACAjAFAhQADATAEAQQAIAiAMAeQANAfANAdIAcA6IAcA5IAHARIhAgVg");
	this.shape_21.setTransform(170.65,58.456);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.3,184.3);


(lib.straw = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BA272D").ss(1,1,1).p("AhkjtIBdAAIBsHb");
	this.shape.setTransform(10.1,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.2,49.6);


(lib.Scene_1_title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// title
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,145.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(12.75,247.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},29).wait(368));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_shake_cup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shake_cup
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.8)").s().p("AhoDkIgqnHQCSBOCThOIgjHHg");
	this.shape.setTransform(463.775,340.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(414).to({_off:false},0).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_juice2_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// juice2_
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6666").s().p("AiTB0QgciPB+gYQDBiBAJCBIAACng");
	this.shape.setTransform(517.788,305.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6666").s().p("AgpgxQChiHAfCHIgICZIkaAOQgrieCNgJg");
	this.shape_1.setTransform(517.0476,305.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6666").s().p("AgigwQCCiMA0CMIgPCMIkJAbQg5irCbAEg");
	this.shape_2.setTransform(516.2587,305.3375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6666").s().p("AgaguQBjiTBJCTIgWB9Ij4AqQhHi6CpATg");
	this.shape_3.setTransform(515.4644,305.1875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC6666").s().p("AgRgtQBDiYBeCYIgdBvIjmA4QhWjIC4Ahg");
	this.shape_4.setTransform(514.6304,305.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6666").s().p("AgJgsQAjidB0CdIgkBiIjVBGQhljXDHAvg");
	this.shape_5.setTransform(513.811,304.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6666").s().p("AgBgqQAFikCICkIgrBUIjEBTQhyjlDUA+g");
	this.shape_6.setTransform(512.9704,304.7625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC6666").s().p("AAHgpQgZipCcCpIgyBGIiyBhQiBjzDiBMg");
	this.shape_7.setTransform(512.1428,304.6094);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC6666").s().p("Ah5AtQgbi1C1BsQgPhlBrB8IhcBPQhngxgzAUg");
	this.shape_8.setTransform(511.7002,303.3631);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC6666").s().p("AiEgxQBLh3CHCLQgDghA6BPIiHBYQh0iRgOgJg");
	this.shape_9.setTransform(509.3,303.493);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC6666").s().p("AiLiFQCwg4BaCqIARBGIiyBhQiBjzAYgmg");
	this.shape_10.setTransform(506.5147,302.4632);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC6666").s().p("AiSiHQDOg0BKCkIANA/IieBtQiMj6AFgig");
	this.shape_11.setTransform(504.168,302.3976);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC6666").s().p("AiXiIQDtgxA4CdIAKA5IiKB4QiWkAgPgdg");
	this.shape_12.setTransform(501.625,302.3436);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC6666").s().p("AiciKQELguAoCYIAGAxIh2CFQihkGgigag");
	this.shape_13.setTransform(499.125,302.2746);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC6666").s().p("AihiMQEqgqAWCRIADArIhiCQQiskMg1gWg");
	this.shape_14.setTransform(496.575,302.2196);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC6666").s().p("AiniOQFJgmAGCLIAAAlIhOCbQi3kShKgTg");
	this.shape_15.setTransform(494.05,302.1426);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC6666").s().p("AiniJQDgg9BvChIAAAlIhOCbQj+kYgDgMg");
	this.shape_16.setTransform(494.05,301.7488);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC6666").s().p("AihiFQB4hSDWC3IAAAkIhOCcQlEkfBEgGg");
	this.shape_17.setTransform(493.4545,301.2932);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC6666").s().p("AiUiAQAPhoE/DMIAAAkIhOCcQmLklCLABg");
	this.shape_18.setTransform(492.2443,300.822);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC6666").s().p("AiGh7Qhah+GoDiIAAAkIhOCcQnSkrDSAHg");
	this.shape_19.setTransform(490.7921,300.3147);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC6666").s().p("AimhMQh9jHH3D5IAAAkIhOCcQnYk9CsBLg");
	this.shape_20.setTransform(489.5567,300.6926);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC6666").s().p("AjXhGQAIAUAOAXQgrguAVADQhZjOIVD4IAAAkIhOCcQlDjigrgIg");
	this.shape_21.setTransform(487.8979,300.837);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC6666").s().p("AjSAWQjFlXKXElIAAAkIhOCcQnjlhBfDTg");
	this.shape_22.setTransform(485.1814,300.8668);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC6666").s().p("AjjBJQjomgLnE7IAAAkIhOCcQnqlyA5EXg");
	this.shape_23.setTransform(482.4477,300.8141);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC6666").s().p("AjeBsQjxm7LpEsIAAAkIhOCcQnsl/BCFOg");
	this.shape_24.setTransform(482.622,301.5396);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC6666").s().p("AjYCQQj7nXLrEdIAAAlIhOCbQnumLBMGFg");
	this.shape_25.setTransform(482.7968,302.2198);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC6666").s().p("AEXhCIAAAlIhOCbQnymYBXG8QkFnzLuEPg");
	this.shape_26.setTransform(482.9439,304.6092);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC6666").s().p("AEVhcIAAAlIhOCbQn0mlBhHyQkPoNLwEAg");
	this.shape_27.setTransform(483.0984,307.2857);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC6666").s().p("AEUiAIAAAlIhOCbQn2mwBpJAQkYpTLzEDg");
	this.shape_28.setTransform(483.2261,310.8877);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC6666").s().p("AETikIAAAlIhOCbQn4m7BxKOQkgqYL1EFg");
	this.shape_29.setTransform(483.3352,314.4448);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC6666").s().p("AERjHIAAAlIhOCcQn5nHB5LbQkprcL3EHg");
	this.shape_30.setTransform(483.4544,317.9412);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC6666").s().p("AEQjqIAAAlIhOCcQn6nSCAMoQkyshL6EKg");
	this.shape_31.setTransform(483.5537,321.4345);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC6666").s().p("AEQjwIAAAlIhOCcQn7nTCBM1QkystL6EKg");
	this.shape_32.setTransform(483.5577,322.0743);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC6666").s().p("AEQj2IAAAlIhOCcQn7nTCBNAQkys4L6EKg");
	this.shape_33.setTransform(483.5577,322.6838);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC6666").s().p("AEQj9IAAAlIhOCcQn7nSCBNMQkytFL6EKg");
	this.shape_34.setTransform(483.5577,323.319);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC6666").s().p("AEQkDIAAAlIhOCcQn7nSCBNXQkytQL6EKg");
	this.shape_35.setTransform(483.5577,323.9271);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC6666").s().p("AEQkJIAAAlIhOCcQn6nTCANkQkytcL6EKg");
	this.shape_36.setTransform(483.5537,324.558);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC6666").s().p("AD2kdIABAFIAAAfIg6CcIgHgDQnPmtB/NeQkxtbLBDtg");
	this.shape_37.setTransform(480.5221,323.7399);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC6666").s().p("ADbkwIADAEIAAAeIgmCdIgFABQmumWCANgQkxtaKHDQg");
	this.shape_38.setTransform(477.4828,322.8967);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC6666").s().p("ADBlDIAEADIAAAdIgSCeIgDAGQmMmACANiQkxtZJOCzg");
	this.shape_39.setTransform(474.3701,321.9794);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC6666").s().p("ACrlTIACDFQlrlpCANjQkxtcIaCdg");
	this.shape_40.setTransform(471.3231,321.0194);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC6666").s().p("ACOlUIAeC4QlrkqCHMzQkxtcH3Cbg");
	this.shape_41.setTransform(470.7103,320.9856);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC6666").s().p("ABxlUIA6CoQlrjpCPMCQkytcHUCbg");
	this.shape_42.setTransform(470.0709,320.9497);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC6666").s().p("ABVlVIBVCbQlqiqCWLRQkytcGxCag");
	this.shape_43.setTransform(469.3854,320.9317);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC6666").s().p("AA4lVIBxCMQlphqCdKhQkytcGNCZg");
	this.shape_44.setTransform(468.6917,320.8957);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC6666").s().p("AAclWICNB+QlpgqCkJwQkytcFqCYg");
	this.shape_45.setTransform(467.9595,320.8576);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC6666").s().p("AhhAiQAXBnAuCKQhCiegDhTgAApkAQAaBAA2CwQjehrAECdQhVl8DfBag");
	this.shape_46.setTransform(467.7585,315.4451);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC6666").s().p("AghBKQALAyARA7QikjSCIBlQhFk2CyBBQgSBDAmEfQhThJgugkg");
	this.shape_47.setTransform(465.3622,310.0049);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC6666").s().p("AAIg1QgijYCCAmQg+BEAVGQQkvmVD4Bzg");
	this.shape_48.setTransform(463.7141,319.1652);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC6666").s().p("AAPkiIBsAAQhqBFAEIBQkboQEVg2g");
	this.shape_49.setTransform(462.9369,328.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC6666").s().p("AAJidQgKg6BjgfQhMBFAMGoQj6mTDhgBg");
	this.shape_50.setTransform(463.628,326.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC6666").s().p("AAEgWQhMh0CSg/QgvBFAUFPQjZkYCuA3g");
	this.shape_51.setTransform(464.2787,324.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC6666").s().p("AgIBkIAIALQhfhTBXBIQh/ilC7hdQgSBGAbD3IhFg7g");
	this.shape_52.setTransform(464.8367,323.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC6666").s().p("AAqizQAMBGAiCeQiYghBICjQjPjmDxiAg");
	this.shape_53.setTransform(464.0625,327.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC6666").s().p("AAgjfIBTCLQh2BaAVDaQkQkgEeifg");
	this.shape_54.setTransform(463.2691,335.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC6666").s().p("AAvizQAqB5ADAsQh6BOAbB0QjHjnD5iAg");
	this.shape_55.setTransform(463.4651,335.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC6666").s().p("AA3iCQArCrgjASQhiA0gDAVQhwioDNheg");
	this.shape_56.setTransform(464.2866,334.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC6666").s().p("Ag/BCQgzh2CuhCQAqDfhJgIQgxAWgaAAQgnAAAWg1g");
	this.shape_57.setTransform(465.5152,337.8689);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC6666").s().p("AhQgcQAYg9CHgjQArEThvgjQgYAIgTABQhSAAAiiZg");
	this.shape_58.setTransform(465.2313,342.9502);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC6666").s().p("AgGCBQiJAeAukgIDEgIQAlEThlAAQgTAAgWgJg");
	this.shape_59.setTransform(464.8607,348.7609);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},414).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[]},70).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2C653").s().p("AkzGrIAAtVIJnAAIAANVg");
	this.shape.setTransform(523.325,318.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2C653").s().p("Ak3GrIAAtVIJnAAQARJVgREAg");
	this.shape_1.setTransform(523.7367,318.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},414).to({state:[{t:this.shape_1}]},70).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ent_title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ent_title
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(814.25,247.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(381.4,224.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(410.1,344.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(52,183.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},307).to({state:[]},107).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.pear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993366").ss(1,1,1).p("AgPkwIAgJh");
	this.shape.setTransform(1479.95,88);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(112,121,49,0.553)").s().p("AgEBzIAAgKIAAjbIAJAAIAADbIAAAKIgJAAg");
	this.shape_1.setTransform(3140.5,3193.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,115,37,0.573)").s().p("AAABZQgFhZAAhZQAQBIgHBhIAAAKIgEgBg");
	this.shape_2.setTransform(60.625,1684.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(104,118,38,0.588)").s().p("AgFBLIAAifIAJAAIAAAKQAHBbgQBEIAAgKg");
	this.shape_3.setTransform(60.625,1645.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(161,190,51,0.996)").s().p("EATJEhOQg8gBg8ABIr3gdQtXgfsIhyQsRhzrBi8QrEi9qCj9QqCj9o8lAQpBlBn7mEQn8mDm+nBQm+nBl9n/QmAoCk7o/Qk/pFj3qEQj5qJitrYQirrOhtsRQhtsUgitdIAAgKIAAvUQAhteBjsdQBjsbCergQCfrhDRqsQDTqvDzqFQD3qOEXpwQCOlDCxkuQDYlyhEooQgvmOhslQQjaqrjHq+QhglYheleQhfljhblqQiyrJiLr2QiKr0hcskQhVrpgOsvIAAgKQAIhigShIIAAgKIAAjIQAShDgIhdIAAgKIAAgKIAAkiQA0tLCerpQCcrbEJp2QEIp3FioaQFkoeGpnUQGqnXHlmbQHkmbIcllQFCjXFXjFQJLjlNLgVIAKAAQB4FnFcCHQACABAAAFQiSC5iMC/Ql7ICnWGpQnVGpmOHxQmOHxkhJfQkgJfjZKiQjaKoiJLuQiLL8gqNWQgOOMBcMrQBbMeCvLKQCyLSD4KBQCoGxC+GbQBfDOBlDHQCTEoCuERQFeIlFWIqQDaFjB/G6QAIAcAAAeQkQJvjnKgQjjKUjEK+QjCK5ikLWQikLfh9MGQh6MBhDM/QhCNKAaN4QAYNpB6MIQB5MDDOK5QDKKtEeJmQEbJgFpIZQFnIUGuHRQGvHQHuGPQHwGRI1FMQIyFLJ2EJQJ0EKKyDOQKyDMLuCSQLtCRMsBVQMoBVNeAcQN2AbN0gXQNngXM9hCQKNg0J9hEQmVC4mtCsQp2D+q4DIQq4DHreCjQlvBRlxBeQkuBLlXAoQmYAwl+A9QsLB8s0BJQs3BJuBgBIAAAKIgKAAg");
	this.shape_4.setTransform(1031.5,2714.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(182,204,71,0.992)").s().p("AHRkXQBCgdBPgVQAuDRA/C/QABAEAAAFIgKAAQtKAVpLDlQIxlOJvkTg");
	this.shape_5.setTransform(596,855.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(134,145,58,0.663)").s().p("Ah8gFQB8AAB9AFIAAAEIgKAAQgmACgkAAQhYAAhNgLg");
	this.shape_6.setTransform(1066.5,753.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(81,87,35,0.4)").s().p("AhUgEICfAAIAKAAIgBAEQhUAFhUAAIAAgJg");
	this.shape_7.setTransform(1008.5,753.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(81,136,8,0.757)").s().p("ABLAFIifAAIAAgJQBUAABVAEIAAAFIgKAAg");
	this.shape_8.setTransform(849.5,408.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(50,84,4,0.471)").s().p("AhUgFQBUAABUAFIABAEIgKAAQgaACgZAAQg8AAgwgLg");
	this.shape_9.setTransform(879.5,409.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(27,45,2,0.255)").s().p("ACWAFIk1AAIAAgJQCfAACgAEIAAAFIgKAAg");
	this.shape_10.setTransform(788,359.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(104,42,30,0.996)").s().p("EAKqBHEQAAgFgCgBQlciHh4lnQAAgFgCgFQg+i/gujRQg7n1iCnfQjArAjEqyQjJq/i8rGQi6rAimrgQikrUiIruQgkjGg8ivQhvlJgOm0QESmHKkALIAKAAQEYA2BwDmQEiJWB/MIQB9L6CULlQApDRAdDKQAMBXAtApQAAAFgCABQgIAEgKAAQAzDuAsD7QAAABAFAAQB9MBCdLbQCfLnDRK1QBxFyDPEbQCJDeBdEMQAeBZgFBuQgTGhkmCeQjOBvj2AAQiLAAiXgjg");
	this.shape_11.setTransform(646.8102,458.2819);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(64,88,20,0.392)").s().p("AClAFIlTAAIAAgJQCuAACvAEIAAAFIgKAAg");
	this.shape_12.setTransform(1544.5,52.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(107,181,11,0.996)").s().p("EABeAxxQgKgJgPgJQpAk6qdjfQqijhsHh4IAFAAQngl3mVn5QmOnxkUptQkTppirrUQgFAAgEgBQnciupxgZIAAgFQhVgFhVAAIgKAAIh4AAIAAgFQhVgFhVAAIAAAKIgKAAQrqATqiBbQgFAAAAgBQgrj6g0jvQAKAAAIgEQACgBAAgFQFvhYG7gMIAKAAIE2AAIAKAAQNhAfLqCUQEDAzEEAyQAAAFgCADQhcB7hgB3QBDAxBwAKQMqBNMhBhQIwBDIwBGQG1nLG9nBQG+nBG2nIQD6kEDzkLQlpIWmPHuQmRHvm3HIQi9DEi+DDIYzDXQHeBAHQApQJDk8G+nBQG/nAGOnvQCgjFCgjDQkWJpnBG+QnCG9oNF1QiwB+jABxQMLB0MOBuQI4BQInBeQHnmYGhndQB9iOBwiaQBeiCBViLQAAC+hgCOQgpA8gqA7QlOHOmnFzQhoBbhkBfIPBCnII4BjQL2CELUCmQFBBKE0BRQAPALALAPQAJAPgFADQlxDomBDPQpIE6pbEiQl5C1mHCoQjtBljzBgQqAD9qrDOQq0DRr9CGQpSBpqgAAQjHAAjOgKg");
	this.shape_13.setTransform(1461.5893,535.5071);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(165,227,54,0.996)").s().p("EBWlAoZQrUimr2iFIo4hjIvBinQBjhfBphcQGmlyFPnOQAqg7Aog8QBhiOAAi+QhVCLheCBQhxCbh8COQmhHdnnGYQonheo4hQQsOhusKh0QDAhyCvh9QINl1HBm9QHCm+EWpoQigDDigDFQmOHtm/HBQm/HBpBE8QnQgpnehBI40jWQC+jDC9jEQG2nIGSnvQGQntFpoWQj0EKj5EFQm3HIm+HAQm+HBm0HLQowhGoxhDQsghhsqhNQhxgLhCgwQBfh3Bch7QADgDAAgFQGGn6GnnWQGonXHhmfQHhmdIqlSQIulVKujXQEdhZFLguQDpghD+gMIFUAAIAKAAQNMAxKDD/QKAD9IjFfQIfFdHgGfQCkCNCfCUQEwEcEbE0QGtHQGFH8QGDH7FiIeQEcGyD5HXQk1hRlAhKgEgU1ggkIghpig");
	this.shape_14.setTransform(1615,327.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DAE276").s().p("EAqiDRKQr4iEo3lLQozlJmwnOQmxnPlZohQlconkrpTQkrpVkZplQkapnjOq0QjNquhGs5QgYkjgGk1QAdtiDJq9QDGqzE8pEQE7pDG2nJQG2nIJJk1QJLk1MuhAQDfgSDhANQNDAvJkETQJwEYHxGLQHzGOGcHkQGbHjFXIpQFXInEjJaQEkJdEBJ7QECKADsKZQDpKQCkLYQCXKehLLtQgoGUh/FFQj6KCmnHYQmnHZoKFzQoMF0qAEFQp3ECsjBbQkKAekDAAQlyAAlig+gEggcgxHQi+gWiHheQmJkSjgnDQkopSjIq0QjIq6j5qQQi2nejRnQQkVpnkxpSQkvpNlQotQlRowl3oEQl5oJm+nCQg5g5hDgtQmVkMl8klQiAhjh0hyQhxhwgCjfQCskmGrAcQD7AQDTBFQKlDaIfFgQIgFgHOGwQHPGwGVHpQGWHqFiIeQFhIdE4JHQE4JIETJvQERJqDtKQQDuKTDyKYQBIDFA+DiQBmF1hTGsQhtIpn4CxQhpAliMAAQhHAAhPgJg");
	this.shape_15.setTransform(2011.8945,2347.0542);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(197,216,83,0.996)").s().p("EgYHEc2QtegcsohVQsshVrtiRQruiRqyjNQqyjOp1kJQp2kKoylLQo1lMnwmRQnumOmvnQQmvnRlmoVQlqoZkapgQkepmjKqtQjOq5h5sCQh6sJgZtpQgZt4BCtKQBCs+B7sCQB8sFClrfQCjrXDDq4QDErADjqTQDnqgEQpvQAAgegIgbQh/m7jaliQlXorldokQiukSiUknQhkjIhfjNQi+mciomxQj4qBiyrRQiwrLhaseQhcsqAOuNQAqtVCLr9QCIruDbqoQDZqiEgpfQEgpeGPnyQGNnxHWmoQHWmqF7oCQCMi/CSi5QGkBhFCisQEmieATmhQAFhvgehZQhdkLiJjfQLZimNIhAQDkgRD9gDQBVAABUgFIABgFIFoAAIAKAAQBrASCFgHIAKgBQJ5AMItBXIAKABQMHB4KhDhQKdDfJBE6QAPAJALAJQI2FJHrGVQHpGVGsHTQGsHTF8IAQF+IDFYInQFYInE8I+QFAJEEcJfQBQCqBNCrQDKG+C9HGQEJJ8D+KAQD+KBD7KHQD6KCJaEeQDoBuDjBwQJVEnIYFhQCLBbCJBUQIvFUIKFzQINF1HoGVQHqGWHIG3QHIG3GpHWQGpHWGIH4QGHH3FnIZQFmIXE6JIQE4JEENJwQEOJzDdKnQDbKfBsMOQA0F/AYGWIAAGQIAAAKIgKAAIAADcIAAAKQgWHyhJHDQh8L/jSK0QjOKqkVJmQkXJtlWImQlYIpmMHyQmNHzm9HCQm9HCneGhQnfGhn6GEQn7GEoYFqQoVFno2FOQowFKpREwQpPEupkEbQplEbp8ECQp9BFqNAzQs9BCtnAXQmSALmUAAQnhAAnigPgEBCDgeuQsuBBpLE1QpJE0m2HJQm2HJk8JBQk8JEjFKzQjJK9gdNiQAFE2AYEiQBGM6DNKuQDPK0EaJnQEYJlEsJVQEqJTFcImQFaIiGxHOQGxHOIzFJQI2FML4CEQJbBoKHhJQMihaJ4kCQJ/kFIMl0QILl0GnnYQGmnYD7qCQB/lGAomTQBLruiXqdQilrYjoqQQjsqZkDqAQkAp8kkpcQkjpblXonQlYoomaniQmcnln0mNQnxmMpwkYQpkkStDgwQhegFheAAQiCAAiCAKgEhYpjx8QABDgByBvQB0ByCABjQF8ElGVENQBDAsA5A6QG9HCF6IIQF3IFFRIvQFQIuEuJNQExJSEVJmQDSHQC2HfQD5KPDIK6QDHK1EoJSQDhHCGIESQCGBeC+AWQDuAcCdg3QH5iyBsopQBUmrhnl2Qg+jhhIjGQjyqXjuqTQjtqQkRprQkTpvk3pIQk3pHlhocQljoemVnqQmVnqnPmwQnPmwoglgQoflfqljbQjThEj6gQQglgDgkAAQlyAAicEMg");
	this.shape_16.setTransform(1741.4132,2577.5362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3141,4565.1);


(lib.Kitchen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1277,716.5);


(lib.juice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// juice
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6666").s().p("AiWBdQgZiUCmglQCkgmAACKIgKBKQg3AThfAAQhAAAhRgIg");
	this.shape.setTransform(16.8435,12.955);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6666").s().p("AiPBwQhFjgC4gHQC3gHAHCZIgKBKQg2AThgAAQg/AAhSgIg");
	this.shape_1.setTransform(16.0585,11.0918);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6666").s().p("AiOBWQhFjfCpA2QCoA3AlAdIgKBKQg3AThfAAQg/AAhSgIg");
	this.shape_2.setTransform(15.9988,13.6594);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6666").s().p("AiYBlQgChgCShWQCRhWAQC3IgKBKQg3ATheAAQhAAAhSgIg");
	this.shape_3.setTransform(16.9979,12.1548);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC6666").s().p("AiTBxQgwixCogvQCogvARC7IgKBKQg2AThfAAQhAAAhSgJg");
	this.shape_4.setTransform(16.455,10.9332);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6666").s().p("AiRA2Qg2iICgAZQCgAYAnADIgKBJQg3AThfAAQhAAAhRgIg");
	this.shape_5.setTransform(16.3313,16.898);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6666").s().p("AiZBaQgUi7CwAAQCxgBgcBnIgKBKQg3ATheAAQhAAAhSgIg");
	this.shape_6.setTransform(17.0832,13.2572);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC6666").s().p("AiaBRQAbiNCYgYQCZgXgbBoIgKBJQg3AThfAAQg/AAhSgIg");
	this.shape_7.setTransform(17.2073,14.1881);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC6666").s().p("AiPBnQhKjnDJATQDJAUgXBrIgKBKQg3AThgAAQg+AAhSgIg");
	this.shape_8.setTransform(16.1161,11.9561);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC6666").s().p("AiKBFQhVjNCxBTQCwBSAlgrIgKBJQg3AThgAAQg/AAhRgJg");
	this.shape_9.setTransform(15.6434,15.3112);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC6666").s().p("AiMCFQhSjaDHgvQDFgvgJDjIgKBKQg3AThgAAQg+AAhSgIg");
	this.shape_10.setTransform(15.8218,8.9777);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC6666").s().p("AiYB5QAViQCThTQCUhUgLDjIgKBKQg3AThfAAQhAAAhRgJg");
	this.shape_11.setTransform(17.0391,10.1187);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC6666").s().p("AiQBbQg+iNC6gnQC6gogFCHIgKBKQg3AThgAAQg/AAhRgIg");
	this.shape_12.setTransform(16.2339,13.1655);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[]},2).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-5.1,33.7,28.200000000000003);


(lib.blander_botton2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BA272D").ss(2,1,1).p("AAPAAIgdAA");
	this.shape.setTransform(8.475,5.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFCFC").s().p("AgEAyQgSgCgMgNQgOgOAAgVQAAgNAGgKQADgGAFgFIABgBQAOgNATAAIAJAAQAOADALAKIABABIAFAGQAKANAAAPQAAARgKANIgFAFQgLALgPADIgJABIgEAAgAAigDIgdAAg");
	this.shape_1.setTransform(6.55,5.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDCCCC").s().p("AguBRIAAgBQgPgQgDgmQgBgOAAgPQACgoAIgVIAHgMIAGgHQAVgQAcACIACABQAbADAQAXQAPAZgCAoQgCAngKAeQgKAdgiAFIAAAAIgKAAQgbAAgSgRgAghhMIgBABQgFAFgDAGQgHALAAANQAAAVAPAOQAMAMARACIAFAAIAJgBQAPgDALgKIAFgFQAJgNAAgRQAAgQgJgNIgFgGIgBgBQgLgKgOgCIgJgBQgTAAgOANg");
	this.shape_2.setTransform(6.5531,9.8406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.1,19.7);


(lib.blander_botton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BA272D").ss(2,1,1).p("AAAgOIAAAd");
	this.shape.setTransform(6.95,3.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFCFC").s().p("AgEAyQgSgCgMgNQgOgOAAgVQAAgNAGgKQADgGAFgFIABgBQAOgNATAAIAJAAQAOADALAKIABABIAFAGQAKANAAAPQAAARgKANIgFAFQgLALgPADIgJABIgEAAgAAEgFIAAgeg");
	this.shape_1.setTransform(6.55,5.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDCCCC").s().p("AguBRIAAgBQgPgQgDgmQgBgOAAgPQACgoAIgVIAHgMIAGgHQAVgQAcACIACABQAbADAQAXQAPAZgCAoQgCAngKAeQgKAdgiAFIAAAAIgKAAQgbAAgSgRgAghhMIgBABQgFAFgDAGQgHALAAANQAAAVAPAOQAMAMARACIAFAAIAJgBQAPgDALgKIAFgFQAJgNAAgRQAAgQgJgNIgFgGIgBgBQgLgKgOgCIgJgBQgTAAgOANg");
	this.shape_2.setTransform(6.5531,9.8406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.1,19.7);


(lib.blander = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,203,203,0.996)").s().p("ABwAYIhDAAIhDAAIhDAAIhEAAQgXgEgFgWIAAgVIBEAAIBEAAIBCAAIBEAAIBEABIAhgBIAAATIAAABQgEAWgYAFIguAAg");
	this.shape.setTransform(20.1875,71.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B4B3").s().p("AgTAbQgMgEgKgHQgTgOgDgfQAFAdAVAMIALAGQAPAHAUgDQASgCANgJQARgMAGgYQAAgDAAADIAAAFQgGAbgVANQgKAGgPADIgLABQgKAAgJgDg");
	this.shape_1.setTransform(20.1625,60.1231);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(123,124,124,0.498)").s().p("AAAADIAAgFIAAAFg");
	this.shape_2.setTransform(36.625,49.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(125,125,125,0.502)").s().p("AiiAVIAAgHIAAAAQAAAFAAACgACjgVIAAAHIAAABIAAgIg");
	this.shape_3.setTransform(20.2,48.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(155,155,155,0.624)").s().p("AAAgCQABACgBADIAAABIAAgGg");
	this.shape_4.setTransform(36.4333,44.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(158,158,158,0.635)").s().p("AAAADIAAgFIAAAEIAAABg");
	this.shape_5.setTransform(36.475,46.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(124,125,125,0.502)").s().p("AAAgCIAAAAIAAAEIAAABIAAgFg");
	this.shape_6.setTransform(36.375,42.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(63,63,63,0.255)").s().p("AAAADIAAAAIAAgFQABACgBADIAAAAg");
	this.shape_7.setTransform(36.3833,42.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CF6458").s().p("AAAAKIAAgTIAAATg");
	this.shape_8.setTransform(20.6625,47.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(44,45,44,0.255)").s().p("AAAAEIAAAAIAAgIIAAAAIAAAIIAAAAg");
	this.shape_9.setTransform(27.525,34.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(104,105,104,0.996)").s().p("AALADIgdAAIAAAAIAAgFIAbAAIAAAAIAJAAIABAAIAAAEIAAABIgEABIgEgBg");
	this.shape_10.setTransform(26.275,26.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(105,105,104,0.996)").s().p("AgdADIAAgBIAAgFIAfAAIAUAAIABAAIAGAAIABAAIAAAFIAAABIg7AAg");
	this.shape_11.setTransform(27.4,29.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBFCFC").s().p("AgPAtQgagIgHgaQgCgHAAgIQAGgdAXgKQALgGARACQAPACAKAHQARAMACAaQABAIgCAGQgKAZgaAHQgHACgHAAQgHAAgIgDgAgBgrQAAABgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIAAAUQAAADADABQAFAAABgDIAAgVIAAAAQgBgDgFAAg");
	this.shape_12.setTransform(20.15,50.2122);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C1292F").s().p("AgBANQgDAAAAgEIAAgSQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAIAAgBQAFAAABADIAAABIAAATIAAAAQgBAEgEAAIgBgBg");
	this.shape_13.setTransform(20.15,47.1531);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CDCCCC").s().p("AgbBYIgLgGQgUgOgFgcIAAgKIAAhCQAEgeAUgOQAKgGAOgEQAPgDAOAEQAbAGANAVQAMASgCAgIgBAcQABAOgBAOQAAgDgBADQgFAYgSANQgMAJgTACIgLABQgNAAgLgFgAgWhJQgXALgGAcQAAAKACAHQAIAZAZAIQAOAFAPgEQAbgHAJgYQACgGgBgIQgBgcgSgMQgKgHgPgBIgIgBQgMAAgIAEg");
	this.shape_14.setTransform(20.2337,53.1883);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(92,92,92,0.373)").s().p("AAAADIAAgFIAAAAIAAAAQABADgBACg");
	this.shape_15.setTransform(3.9333,49.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(156,156,156,0.627)").s().p("AAAADIAAgGIAAAAIAAABIAAAGg");
	this.shape_16.setTransform(3.975,48.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(62,62,62,0.251)").s().p("AAAgFIAAAKIAAABIAAgLg");
	this.shape_17.setTransform(3.9875,41.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(126,143,146,0.722)").s().p("AAAAKIAAgTIAAAAIAAABIAAASIAAAAg");
	this.shape_18.setTransform(3.275,30.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(89,90,89,0.506)").s().p("AAAAEIAAAAIAAgIQABAEgBAEIAAAAg");
	this.shape_19.setTransform(12.2333,34.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(221,230,232,0.996)").s().p("AgKArIAAAAIAAgCIAJg6IADgYQACgBAEAAIAAAWIADA/IgVAAg");
	this.shape_20.setTransform(12.825,25.5417);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(39,44,45,0.22)").s().p("AAAABIAAAAIAAgBIAAAAIAAABIAAAAg");
	this.shape_21.setTransform(0.025,0.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(159,175,178,0.808)").s().p("AgiCVIAAAAIgBgBIgGg0IgGg8IgHg8IgHg9IgGg9IAAgBIAAgCIBDAAIAAAAIA8AAIACBBIADBBIACBBIABARQgEAAgCABIgEAXIgJA8IAAABIAAABIgRAAIhCAAg");
	this.shape_22.setTransform(6.825,14.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(122,139,141,0.702)").s().p("AAMAbIgTAAIAAAAIgDgYIAIAAIAAgBIAAgEIgBAAIgJAAIAAgBIgDgXIAeAAIABAAIAAAAIgEAwIAAAFIAAAAg");
	this.shape_23.setTransform(28.45,26.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(104,104,103,0.996)").s().p("AgdADIAAAAIAAgGIAXAAIAAAAIAgAAIADABIABACQABAEgFgBIAAAAIgfAAIgMABIgMgBg");
	this.shape_24.setTransform(27.4275,23.4125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(189,207,210,0.996)").s().p("AA8BnIhDAAIhEAAIAAAAQABgFgBgEIgLAAIgBAAIg1AAQgVgDgDgUIAAAAIAAgTIBDAAIARgBIAWAAIgDg/IAAgWIAPAAIAAAAIAIg6IACgJIBFgBIACABIAJA5IABAKQALAAALABIACAQIAAABIAAAAIgXAAIAAAHIAAAAIAYAAIAEAXIAAAAIgBAAIgbAAIAAAGIAAABIAdAAIADAXIAAABIggAAIAAAGIAAAAIA8ABIA6gBIAAgBIAAgBIAAAAQADAWgIAMIAAABQgHAIgMACIg2AAIgBAAIgIAAIAAAAIAAAJIAAAAIgRAAg");
	this.shape_25.setTransform(19.8048,24.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#686867").s().p("AgcBQIgBAAIAAgGIAAgBIAkAAIABAAIAAAGIAAABIgSAAIgSAAgAgcAxIgBAAIAAgFIAAgBIA6AAIABAAIAAAFIAAABIgnAAIgTAAgAgcATIgBAAIAAgGIAAgBIAkAAIABAAIAAAGIAAAAIgYABIgMAAgAgdgLIAAgGIAAAAIA6AAIABAAIAAAFIAAABIg6AAgAgdgpIAAgGIAAgBIAkAAIABAAIAAAFIAAABIgkABgAgdhIIAAgGIAAgBIA6AAIABAAIAAAGIAAABIg6AAg");
	this.shape_26.setTransform(27.4,12.6875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(121,138,140,0.702)").s().p("AAtBzIAAgBIgCgQQgLgBgKAAIgCgKIgJg5IgCgBIhFABIgCAJIgIA6IAAAAIgPAAIAAgRIgDhBIgChAIgDhBIAIAAIA7AAIAIAAIA7AAIAIAAIAtAAIgDAlIgEA/IgEA+IgEBAIAAADIgiAAgAAWBWIAAAFIABAAIAlAAIAAgBIAAgFIgBAAIglAAIAAABgAAWA3IAAAGIABAAQAeAAAdgBIAAAAIAAgGIgBAAIg7AAIAAABgAAWAYIAAAGIABAAQASABATgBIAAgBIAAgFIgBAAIglAAgAAWgFIAAAFIABAAIA7AAIAAAAIAAgGIgBAAIg7AAgAAWgkIAAAGIABAAIAlAAIAAgBIAAgFIgBAAIglAAgAAWhCIAAAGIABAAIA7gBIAAgBIAAgFIgBAAIg7AAIAAABg");
	this.shape_27.setTransform(22.2,11.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(126,126,126,0.506)").s().p("AgUAAIAAAAIAqAAIgqAAg");
	this.shape_28.setTransform(41.2,4.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(151,171,174,0.804)").s().p("AgpCUIAAgGIAAAAIgHAAIAAAAIAAgFIAEgxIAAAAQAEABAAgFIgBgCIgDgBIAAgEIAEg/IAEg+IAEhAIADglIAWAAIA4AAIAAABIgEAmIAAADIAAABIgEAkIgHA8IgGA8IgHA9IAAADIAAAAIAAAAIgEAgIAAABIgBABIAAAAIg5ABIAAgBg");
	this.shape_29.setTransform(34.575,14.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(251,252,252,0.996)").s().p("AAeFXIhDAAIhEAAIhDAAIhEAAIAAgBQAHgbAFgdQAEgeADgeQADgdABgfQAAgDAAgEIAAgBIAAgFQABgCAAgEIAAAAIAAgDIAAgHIAAgBIAAAAIAAgPIAAgGIAAgBIAAgKIAAgbIAAgBIAAgLIAAAAIAAgHIAAgBIAAgGIAAAAIAAgEQAGgcAYgJQANgEATAAIAUABIAAAAIBEAAIBDAAIARAAIAAAAQAZgBAWACIAHABQAaAIAIAaIABAFIAAARIAAABIAAAIIAAAAIAAAGIAAAAIAAAGIAAANIAAABIABAHIAAAGIAAABIAAAGIAAAAIAAACIAAABIAAAHIABAUIAAAAIAAAGIAAAAQACAgADAfQACAfAEAeQAEAeAFAcIACAFIghABIhEgBgAhGBhQgOAEgJAGQgUAOgFAeIAABDIAAAKQADAfATAPQAJAHANAEQAOAEARgDQAPgCAKgHQAUgMAGgcIAAgFQABgOgBgOIABgdQACgggLgSQgMgVgbgGQgJgCgIAAQgHAAgHABgABkgNQAIgLgCgWIAAgBIAAgBIADgfIABAAQARgRAOgUQAOgTALgXQALgWAIgaQAIgaAEgfQAAgLgBgLIgCgGQgGgIgLgCIgrAAIAAgDIADgmIAAgBIApAAIAAAAQAfADAQASQAJAKAGAQIABALIAAAMIAAAAQgCAegGAaQgGAcgKAYQgKAYgMAVQgNAWgOATQgPATgSAQQgQARgTAPg");
	this.shape_30.setTransform(25.7,34.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.8,73.4);


(lib.banana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(150,129,19,0.651)").s().p("AgFABIALgBIgLABg");
	this.shape.setTransform(148.55,207.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#977400").s().p("AgIAAIAAgBQADgGAHgDIAAAAQAEABACADQADAKgFAHIAAAAQgIgEgGgHg");
	this.shape_1.setTransform(46.0779,84.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(174,149,22,0.753)").s().p("AABAGIAAgBIgCgKQACAFABAGg");
	this.shape_2.setTransform(1.725,66.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(143,117,0,0.996)").s().p("AEZLaIgNgCIAAgBQgUgKgIggQgCgOAAgNIAAAAQACAAAAgFQABgJADgIQAJggAhgSIAJgDQAWgEANALQARAOAEAdQADAVgEAQQgHAagSATQgKAJgSAFIgLACIgFgBgAjTCbIAAAAQgGgGgDgMIgBAAIgCgJQgCgbAJgUIAAAAIAJgNQAMgVAZgOQARgKARADQATACAJAQQAHALABAOQABAXgHARQgNAfgiATQgMAHgOAAIgBAAQgSAAgNgLgAlep/IAAAAIgBgGQgBgQAGgNQADgKAIgIIALgMIALgIQAQgMAbgFQAggEAPAXIACACQAEAIgBAJQgEAigbAVQgOALgVAGQgOAEgLAAQgbAAgOgYg");
	this.shape_3.setTransform(35.5122,112.2298);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(145,127,33,0.596)").s().p("AAHgBIAAAAIgNADIANgDg");
	this.shape_4.setTransform(138.275,55.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#967300").s().p("AjFLOQgJgLgHgOIgBgCQAGgOAWgDIAMAAIgFAfIAAABIgSAMgAALIQIAAgCQAAgFACgFIAAAAQASgEADATIgBAAIgTABQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBgAMRF5QgNgBgHgIQgGgHgEgKQAVgFASAEQAJAIgFALQgDAIgJAAIgBAAgAr5EKIgHgbIABgEIAAgBQAJgIANABQALABAKADIgPAdIAAABIgVAFIgBAAgAntCaIgFgBQgDgBgBgFQADgGAEgFIAAgBQAHAAAFAGIAAAAQADAJgBAGQgHAAgFgCgALxBNIgDAAIgEgCIAAgBIgEgLIgBAAIABgGIAAgBQAFgGAKgCIABAAQAIAKAAAPIAAADIgJABIgEAAgAFRhJIAAgBIACgMIABgBQAGgEAJgBQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAFgDACIgRAPIgCgGgAMuhNIgDAAIgCgGIAAAAQAAgIADgIIAAAAQATgFAIAUIABAGIgSACIgIgBgAHAjIIAAAAQADgJAGgHIAAAAQAJgBAFAFIAAAAQgIAKgIAJIgBAAQgEAAgCgHgAAJlgIgCgDIgBgDQACgJAHgFIAAAAQAJgCAHAEIABAAQgBAQgMAIIAAABQgGgCgEgFgACimjQgHgDgFgGIAAAAQAEgJALgFIAAAAQAGABADAFIACAHIAAAAIgNAKgAPwnSIgCgFQADgUAXgCIAFABQAQAIANAPQgCALgJAGIgTANQgSgIgKgTgAwonFIgBAAQACgOAEgMIACgCQAOgEALAHIANAJIgZATIAAABQgLgBgJgDgAH9ofQgDAAgBgDQABgIAFgFIAAAAQAOgCABASIgBAFQgHgDgJgCgAFPrAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQADgHAIgDQAEABACAEIABAAQACALgGAGIgNgJg");
	this.shape_5.setTransform(124.975,131.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE353").s().p("Ag3ICQAogQAjgSQAkgRAigVQAjgTAfgTIA+grQAfgVAcgXQAdgVAagYQAbgXAagYQAagYAYgZIAwgyQAXgZAXgbIAqg1IApg1IAlg3IAlg5IAig5IAdgzQgJAhgMAgIgaA+IgdA9QgQAegSAcQgQAcgUAcQgTAcgUAbQgVAbgWAaQgXAZgYAZQgYAagbAXQgaAYgcAWQgcAXgeAVQgeAVghAUQghAUgjASQgkATglARQgmAQgqAQQgoAPgsANQgqAMgnAJQAsgNAngQgAnhB2QgmAAgmgCIgNgCQAmABAogEQApgCArgHQAqgGAsgJQAtgKAtgNQAugNAqgPQAqgOAngQQAmgQAlgRQAlgRAjgTQAjgSAigUIBBgoQAggUAegVIA8grIA5gtIA2guQAcgYAZgYIAWgVQgSAdgWAaQgVAbgXAZQgXAagZAYQgYAZgcAXQgaAXgdAXQgcAWggAVQgfAVggATQgiAVgjASQgkAQgmARQgmARgqAOQgrAOgtANQguALgrAJQgrAIgqADQgpAFgpABQgfACgfAAIgQAAgAkBlxQgmgBglgFQglgCgkgHIhGgMQgigJghgJQghgKghgLQgggMgfgNQgggNgegOIgPgIQAfAMAhAKQAgALAiAKIBFAOQAkAHAjAFQAkAFAlAEQAkADAnAAIBNABIBQgDQAogCApgFIBVgLQAqgHAsgKQAsgKAtgLQAugMAsgOQArgNApgQIAqgPQgfAVgkASQgjASgnASQgmAQgqAOQgqAPguAMQguAMgrAJQgrAIgpAEQgqAFgnACIg0ABIgaAAg");
	this.shape_6.setTransform(121.1,108.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(149,122,6,0.996)").s().p("ABDC4QgPgHgRgDQgFAAgDgDIgBgEQABgngCgnIgCANQgHAigKAiIgLgOQgZgagdgPIAAgDQAGgjAFgkIgCAEQgJAigNAgIAAABQgJgEgLABQgOACgKAFIAAAAQgLgHgQAAIAAgBIAShDIAQhDQAHgjAGgjIABgBIgigOQgHgJABgLQABgOAHgKQAKgOAMgNQAEgFAGgDQAQgHAOABQAmADAgAKQAiAJAfAMIA0ATIAVAeIAAAAIAAABIABABIgBAAIgEA4QgDAFgHADQgNAHgMgBIABAMQADAoAAAmQAAAngDAlQgDAmgGAiIgdgNg");
	this.shape_7.setTransform(212.75,19.6938);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(57,49,6,0.251)").s().p("AAEAOIgBgBIgGgaIAHAbg");
	this.shape_8.setTransform(244.5,80.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(149,127,19,0.643)").s().p("AAAgDIAAAAIABAIIgBgIg");
	this.shape_9.setTransform(243.775,77.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4D228").s().p("Ag/OEQgmgCgkgFQgkgEgjgHQgjgHghgKQghgKgggLQgggNgegPQgegOgdgSQgcgSgbgWQgbgUgYgZQgYgZgVgfIAMADQAIABAIgCQASgFAKgKQATgTAGgZQAEgRgDgUQgDgegSgOQgNgKgWAEIgIADQghARgKAhQgCAIgBAJQAAAFgDgBQABgJACgIQAKghAbgXIgggLQgggLgfgOQgggNgegPQgegPgcgSQgdgRgbgUQgcgVgZgXQgagXgXgaQgYgagVgeQgWgfgSgjQgTgjgMgtQANALATAAQAOgBALgGQAigTANggQAIgRgBgVQgBgOgHgLQgKgQgSgDQgRgCgSAKQgYANgNAVIgIANIAAgBQALggAkgSQAigSAsgIQArgIAogCQAZgCAYABIg5gkQgcgSgbgVQgbgVgZgXQgagXgYgZQgYgZgXgdQgWgcgVggQgUgfgSglQgSgkgOgsIgDgNIAAAAQgBgHgCgEIgBgBIgCgKQgKgtgCgoQgCgoAEgkIACgHQATAiAugOQAVgGAPgMQAbgUAEgiQABgJgEgIIgCgDQgPgXggAFQgbAEgRANIgLAHIAAAAQAMgOAWgHIAAgBIALgDIAAAAQArgGAjAGIAiAHIAiAKQAhAKAfANQAHADAGAEQAcATAdARQAdAQAfAQQAdAPAgAMQAfANAgALQAhALAhAKQAiAJAjAHQAiAHAkAFQAkAGAlADQAkAEAnABQAmACAngBQAngBApgDQAogDAqgFQAqgFArgIQAqgIAtgKQAjgIAlgKIAOgDQAugNAsgOQAqgOAqgPQApgPAogQQAngPAngSQAmgQAkgSQAlgRAjgTQAjgSAigUQAUgNAWgKIAEgBQAQAAALAHIAAAAQAKgFAOgCQALgBAJAEIABAAIALADIAAAAQAeAPAYAaIANAOIABAAIAKACQAGAAAEgBQADADAFAAQARADAOAHIAdANQAQAIANAOIAGAGIAqA+QAVAgATAhQATAiASAlQARAkAQAoQAPAlAMAnIAAAAIACAJIACAHIAAAAIAHAbIABABQAKAnAGAlQAGArADAoQACAogBAmQgCAngFAjQgFAkgIAiQgIAhgLAhQgLAhgNAfQgNAfgQAeQgQAdgSAcQgSAdgUAcQgTAbgWAaIgtA0IgwAyIgyAwQgbAYgbAXQgcAXgdAWIg7ArIg+AqIhBApIhDAmQgiATgkASQgkASgnAQQgnARgsANIAAABIgBAAIgpALIgBAAIgBABIgLACIAAAAIAAAAIgEACQgeAHgeAFQgsAHgoAEQgpAEgoABIgSAAIg6gBgAiuMKQgWADgGANIABADQAHANAJALIAAAAIASgMIAAAAIAFggIgMABgAAZJrIAAABQgCAEAAAGIAAACQAAABABAAQAAABAAABQABAAAAAAQAAAAABAAIATAAIABAAQgDgQgMAAIgGAAgAL/HGQAEALAGAGQAHAIANABQAKABADgIQAFgLgJgIQgIgCgKAAQgKAAgLACgAK2lIIgjA6IgkA5IgmA3IgpA2IgqA1QgWAbgYAYIgvAyQgZAZgaAYQgZAYgbAXQgbAXgdAWQgcAXgfAVIg+AqQgfAUgiATQgiAUgkASQgkASgoAQQgnAQgsANQAngJAqgMQAsgOAogOQAqgQAmgQQAlgRAkgTQAjgSAhgUQAhgUAegVQAegWAcgWQAcgXAbgYQAagXAYgZQAYgZAXgaQAWgaAVgaQAVgaASgcQAUgcARgdQARgcAQgeIAeg9IAag+QAMggAIgiIgcAzgArzFSIAAAAIgBAFIAHAbIABAAIAVgGIAAAAIAPgdQgKgDgLgBIgEAAQgKAAgIAHgAnjDvIAAAAQgEAFgDAHQABAEADABIAFABQAFADAHAAQABgHgDgJIAAABQgEgGgHAAIgBAAgAL9C0QAFACAIgDIAAgCQAAgPgIgLIgBAAQgKADgFAGIAAAAIgBAGIABABIAEALIAAAAIAEACIABAAIACAAgAFgAQIgBAAIgCANIAAAAIACAHIARgPQADgDAAgEQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgJAAgGAFgAM1ATIAAABIACAFIADABIAIAAIASgBIgBgGQgIgUgTAFIAAAAQgDAHAAAIgApHgKQAlACAmABQAnAAAogCQAogBApgFQAqgEArgIQArgIAugLQAugNArgOQApgPAngQQAmgRAjgRQAkgTAhgUQAhgTAfgVQAfgVAcgWQAdgXAbgXQAbgYAYgYQAZgYAXgaQAYgZAVgbQAVgaASgdIgWAVQgZAYgcAXIg2AuIg5AtIg8ArQgeAWgfAUIhCAoQgiAUgiASQgkATgkARQglARgnAQQgnARgqAOQgqAPguANQgtANgsAJQgtAKgqAGQgrAGgoADQgpADgmAAIAOABgAHMhhIAAABQACAHAFgBQAIgIAIgKIAAgBQgFgEgJABIAAAAQgGAHgDAIgAASj+IABADIACACQAEAFAGADIAAgBQAMgJABgPIgBgBQgHgEgJACIAAAAQgHAGgCAJgACilFIAAABQAFAGAHADIABAAIANgKIAAAAIgCgHQgDgGgGAAIAAAAQgLAEgEAJgAQUmFQgXACgDATIACAGQAKASASAIIATgNQAJgGACgKQgNgQgQgIIgDAAIgCAAgAsRlmIAAAAQAGAIAJAFIAAgBQAFgGgDgLQgCgEgEgBIAAAAQgIADgDAHgAwIlaIAAAAIAZgTIgNgJQgLgHgOADIgCACQgEANgCAOIABgBQAJAEALAAgAIFm7QABADADABQAJABAHADIABgFQgBgRgOABIAAAAQgFAGgBAHgAr4plQAeAOAgANQAgANAgALQAgAMAhAKQAhAJAjAIIBGANQAjAGAlADQAlAEAmABQAmABAogCQAogCApgEQAqgEArgJQAqgIAugMQAvgMAqgPQApgOAngRQAmgRAjgSQAlgSAegVIgqAPQgpAPgrANQgrAOgvANQgtALgsAJQgsAKgqAHIhVAMQgpAEgoADIhQADIhNgBQgmgBglgDQglgDgkgGQgjgEgkgHIhEgPQgigJghgLQghgKgfgNIAPAJgAFapcQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIANAJQAGgGgCgMIgBAAQgCgEgEAAQgIADgDAGg");
	this.shape_10.setTransform(123.7514,120.6563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.5,210.8);


(lib.apple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(62,0,6,0.431)").s().p("AAYAAIgwAAIAAAAIAwAAIABAAIAAAAg");
	this.shape.setTransform(176.975,310.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(76,1,8,0.529)").s().p("AgFAAIAKAAIABAAIgLAAg");
	this.shape_1.setTransform(180.625,310.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(56,0,6,0.392)").s().p("AgFAAIAAAAIAKAAIAAAAIAAAAIgKAAg");
	this.shape_2.setTransform(112.35,310.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(36,0,4,0.255)").s().p("AgVAAIANAAIAAAAIAAAAIAAAAIgEABIgJgBgAAIAAIANAAIABAAIAAAAIgOAAIAAAAg");
	this.shape_3.setTransform(108.125,310.7063);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(89,1,9,0.616)").s().p("AAGABIgMAAIAAgBIAMAAIAAABg");
	this.shape_4.setTransform(147.35,308.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(36,0,4,0.259)").s().p("AgGAAIAMAAIABAAIAAAAIgBAAIgDABIgJgBg");
	this.shape_5.setTransform(146.025,308.8063);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(35,0,3,0.247)").s().p("AgGAAIAMAAIABAAIAAAAIgNABIAAgBg");
	this.shape_6.setTransform(143.675,308.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(88,1,9,0.608)").s().p("AAGABIgMAAIAAgBIAMAAIABAAIAAABIgBAAg");
	this.shape_7.setTransform(142.3,308.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(150,0,14,0.757)").s().p("AAAAHIAAgCIAAgLQABAGgBAHg");
	this.shape_8.setTransform(0.0333,141.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(151,0,14,0.761)").s().p("AAAAHIAAgCIAAgLQABAGgBAHg");
	this.shape_9.setTransform(0.0333,137.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8B4930").s().p("AgHAAIAOAAIABAAIgIAAIgHAAg");
	this.shape_10.setTransform(80.2,61.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,37,17,0.255)").s().p("AANAAIgZAAIAAAAIAZAAIABAAIAAAAg");
	this.shape_11.setTransform(59.75,0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,79,36,0.541)").s().p("AgGAAIANAAIAAAAIgBAAIgDABIgJgBg");
	this.shape_12.setTransform(62.65,0.1063);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(142,2,16,0.965)").s().p("AGJAOIhRgpQAsASAoAUIBKAmIAAACIAAABIhNgmgAnVAUQAngWAsgRQAsgRAvgOIAFgBIADABIAAAAQgFAAgCABQgvAPgrARQgsARgpAUg");
	this.shape_13.setTransform(84.7,63.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FB002E").s().p("AjRIXQgrgSgYglQgXgmgMgxQgMgygBg8IAAgeQADg6AJg1QAJgzAOgwQAOguASgsIAbhAQASgsAUgpQAVgoAXgmQAYglAbgjQAagjAegfQAegfAhgbQAjgbAogWQAlgTA1gDQAXgBARAFQAuAQAXAnQAWAnAFA4QAEAsgFAsQgGA3gMAwQgNAxgSArQgRAsgVApQgUAogXAmIgJANQgLAzgPAuQgPAugTAqQgTArgXAnQgWAmgaAjQgbAjgfAdQgfAegpAVQgeAQgtAAQgVgBgQgHg");
	this.shape_14.setTransform(70.0639,135.5923);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C6737").s().p("AgEAAIAJAAIABAAIAAAAIgKAAIAAAAg");
	this.shape_15.setTransform(83.5,61.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(56,180,73,0.996)").s().p("ACKDmIgTAAIgBAAIgPAAIgWAAQg7gCg0gIQg1gIgwgOIAAAAIgDgBQgZgHgYgJQgtgQgogVQgpgVgkgYQglgZghgcQghgcgegfQgdgggbgiQgbgjgYglQgYglgVgoIAAgBIBhAaIBgAaIBgAaIBhAbIBgAaIBhAaIBfAaIBgAaIBgAZIBhAaIBgAbIBgAaIBhAaIAIACIABAAQgWALgYAJIAAABQgqAQgsAPQgvAQgwAMIgmAKQgxAKg2AIQg2AHg7ACIgBAAIgKAAIAAABg");
	this.shape_16.setTransform(69.075,38.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,147,67,0.996)").s().p("AJuD4IhggbIhggaIhhgaIhggbIhggaIhhgaIhfgaIhggaIhhgaIhggZIhggbIhggaIhhgaIAAABIgBAAIAAgBQAmgXAqgUQApgUAsgRQAsgSAvgOQAvgOAygLQAzgKA4gFQAggDAhgBIAaAAIABAAIAHAAIABAAQAGABAIAAIABAAQA5ACA0AKQAzAKAtAQQAuAPAoAVQApAVAlAYQAkAZAiAcQAhAcAeAgQAdAeAbAjQAbAiAZAkQAZAlAWAnIAKASIATAiIAAABIgJgBg");
	this.shape_17.setTransform(69,24.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(23,0,0,0.243)").s().p("AAFAAIgKAAIAAAAIALAAIAAAAg");
	this.shape_18.setTransform(160.625,15.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(74,1,8,0.514)").s().p("AAAAHIAAgOIAAAAIAAABQABAHgBAHIAAgBg");
	this.shape_19.setTransform(285.3333,159.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(72,1,7,0.502)").s().p("AtpMFIgRAAIAAgBIARAAIAAAAIAAABgAN6r3IAAgBIAAgMIABAAIAAAMIAAABg");
	this.shape_20.setTransform(196.325,233.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(110,2,12,0.757)").s().p("AAAAQIAAgBIAAgeIAAAAIAAAeIAAABg");
	this.shape_21.setTransform(285.3875,154.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(73,1,8,0.506)").s().p("AAAAGIAAAAIAAgLIAAAAIAAALIAAAAg");
	this.shape_22.setTransform(285.375,152.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(93,1,10,0.643)").s().p("AAAAFIAAgJQABAEgBAFIAAAAg");
	this.shape_23.setTransform(285.3333,149.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(129,0,11,0.651)").s().p("AgGAAIANAAIAAAAIAAAAIgGAAIgHAAg");
	this.shape_24.setTransform(191.325,55.295);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(57,0,0,0.569)").s().p("AAAAFIAAgKIAAAAIAAAAQABAGgBAFg");
	this.shape_25.setTransform(172.1563,32.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#822C15").s().p("AipDNQALgyANgwIAbhfQAOguASgsQASgsAVgnQAQgfARgdQAVgmAkgbQATgOAegFQAOgCAOADQAxALAUAqQACAEAAAHIgCAEIAAABQgRANgTANQgkAZgfAeQgfAegcAhQgbAigYAlQgYAkgUApQgVApgQAtQgQAtgLAyIgHAgQgWgFgMAPQgKAMgHAPIAVhmg");
	this.shape_26.setTransform(150.3792,47.7682);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(104,0,1,0.996)").s().p("AjbFdIglgIQgagFgJgVIAAgBIAAgJQADgHAGgEIABAAQAuAMA5AGQAVACAXgBQAGg2AKg0IAGggIAAAAIAAgCIAMg4QALgzANguIAAAAQgkgJgpgEIAAAAQAYgIAVgMIAAAAIAAgBIgTgiQAnADAdAMIABAAQAQgtATgqQATgqAWgnQAWgnAZglQAVggAcgZQAUgUAkgDIALAAIABAAQA4AFAYAmIALATQAVAogCBAIAAADIgBAAIAAALIAAABIAAAAQAAALgEAIIgQAGQgtAPgjAbQgjAagcAiQgbAhgWAmQgXAngRArQgSAsgPAvIAAABIgCAIQgNAwgHAzQAbgEAZgHQAxgMArgSIABAAQAQACAGAMQgBAOgIAGQgUAOgYAIQgtAQgyAMQgxALg8ABIgPAAQg1AAgtgJgACllUQgdAFgUAOQgjAbgXAmQgRAdgQAfQgVAngQAsQgSAsgOAvIgcBeQgNAwgLAyIgUBmQAHgPAKgMQAMgPAWAFIAGggQAMgyAQgtQAQgtATgpQAUgoAYglQAZglAbgiQAcghAfgeQAggeAkgZQASgNARgNIAAgBIACgEQABgHgDgEQgTgqgygLQgHgCgIAAIgNABg");
	this.shape_27.setTransform(143.0087,51.2594);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(223,0,29,0.988)").s().p("AhaSFQg9AAg5gEQg6gEg3gGQg3gGg1gJQg0gIgzgLQgygLgvgOQgvgOgrgTQgrgSgmgXQgmgXgjgbQgigbgfgeQgfgegcghQgcgigagkQgZgkgWgnQgWgngUgqQgTgpgSgsIAAABIgahIQgQgtgNgwQgOgvgMgyQgLgygKgyQgKg0gJg0QgIg1gHg2QgHg2gFg5QgEg4gCg8IAAAAIAAgQIAAAAQABgHgBgGIAAgBIAAgfIAAAAQABgHgBgGIAAAAIAAgPQACg7AGg3QAGg3ALgzQAKgyAPgvQAPguATgqQAUgqAYglQAZglAegfQAegfAigbQAigbAngXQAbgRAegQQApgUArgSQAsgRAugPQADgBAEAAQAwAOA1AIQA1AIA7ACIAXAAQAHABAJgBIATAAIAAAAIALAAIAAgBQA8gCA1gHQA2gIAygKIAlgKQAgAPAhAOIAAAAIBRAqIBNAmIgGAfQgKA0gGA3QgXAAgVgCQg5gFgugNIgBAAQgGAFgDAHIAAAJIAAAAQAJAVAaAGIAlAHQAzALA+gCQA7gBAygLQAygLAtgQQAYgJAUgNQAIgGABgPQgGgLgQgDIgBAAQgrASgxANQgZAGgcAFQAHg0AOgwIACgHQAzgLAngWQAngWAmgYQAmgXArgRQAtgRA1gJQA0gJA7gCIANgBQAGACAIgBIAAgBQA/gBA3AGQA4AFAyALIABACIgBAAQAcAIAaAJQAsARAnAWQAnAXAiAbQAiAbAdAgQAeAfAaAkQAaAjAXAnQAWAmATArQATAqAPAuQAQAuAMAxQAMAxAIA1QAJA1AFA4QAEA5ABA8QABA+gEA6QgDA6gGA2QgHA3gJAzQgJA1gMAxQgNAxgOAuQgPAvgRAtQgQAsgSAsQgSArgUApQgUApgYAmQgXAmgZAkQgaAjgcAiQgcAhgeAfQgeAfgjAbQgiAbgmAXQgnAXgpAUQgpAUgrARQgtASguAPQguAPgxAMQgxAMgzAKQg0AKg2AHQg2AHg4AFQg5AFg7ACQgvABgwAAIgYAAgAm7t/Qg1ADgmAUQgoAVgiAbQgiAbgeAgQgeAfgbAjQgbAigXAmQgYAmgUAoQgVApgSArIgbBAQgSAsgOAvQgNAwgKA0QgJA0gDA7IABAdQABA8AMAxQALAxAYAmQAXAmArASQAQAHAWAAQAtAAAegQQAogVAggdQAggeAagjQAbgiAWgmQAWgnATgqQATgqAQgvQAPguAKgyIAKgOQAXgmAUgoQAUgpASgsQARgsANgxQANgwAGg3QAFgsgEgsQgGg4gWgmQgWgogugPQgOgFgTAAIgHAAg");
	this.shape_28.setTransform(133.2111,170.9473);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(146,2,16,0.996)").s().p("AEnTyIgEAAIgBAAIgxAAQgUAAgSgBQg5gFg3gFQg3gGg7gCIAAgBIgNAAIgBAAIgNAAIAAAAIgJAAIgBAAIgNAAIgBAAIgNAAIAAABIg5ACIhyAJQg4AEg8ACIAAAAIgLAAIAAABIAAAAIgPAAIgBAAIgMAAIgBAAIgQAAIgBAAIgNAAQgcAAgbgCQg4gGgxgMQgxgNgsgRQgrgRgogWQgogUglgZQglgYghgdQgigbgfgfQgfgegcghQgdgggagjQgagjgZgmQgXgkgWgoQgXgngUgpQgUgpgTgqQgSgrgRguQgQgsgNgvIAAgBQARArAUAqQATApAWAnQAXAnAZAlQAZAkAcAhQAcAiAfAeQAfAeAiAbQAjAaAmAXQAmAYArASQArATAwANQAvAOAxALQAzALA1AJQA1AIA3AHQA3AGA5ADQA6AEA8ABQA8AAA9gCQA6gCA6gEQA3gFA2gHQA1gIA0gKQAzgJAxgMQAxgNAugOQAvgPAsgSQAsgSApgUQAogTAngYQAmgWAjgbQAigcAfgeQAdgfAcgiQAcghAagjQAaglAXgmQAXglAUgpQAVgqARgrQASgrARgtQAQgtAPguQAPgvAMgwQAMgxAJg0QAJg0AHg3QAGg3ADg5QAEg6gBg+QAAg9gFg4QgFg4gJg1QgIg1gMgxQgMgxgQguQgPgugTgqQgTgrgWgmQgWgogbgiQgagkgeggQgdgfgigbQgigcgngWQgngWgsgRQgagJgbgIIAAAAQA2AHAvAOQAwANArATQArASAnAWQAnAXAjAaQAkAaAfAdQAgAeAcAhQAcAgAZAlQAZAkAWAoQAWAnASAqQATArAQAuQAPAuALAyQAMAxAHA2QAIA2AEA5IABAhIAAALIABAAIAAAOIAAABIAAALIAAAAIAAAgIAAAAIAAAMIAAAAIAAAPIAAAAIgBAAIAAAPIAAABQgCAsgDArQgGA5gIA0QgIA0gLAzQgKAygNAwQgOAwgPAuQgQAvgQArQgRAtgTArIgnBTQgTAqgWAoQgVAogWAoIgtBNQgXAmgYAlQgYAlgbAjQgaAigdAhQgcAhgfAeQggAegiAcQgiAbgkAYQglAYgpAVQgoAVgtARQgsAQgzALQgyALg6ADIgBAAIgMAAIAAAAg");
	this.shape_29.setTransform(150.4,184.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.4,310.9);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Scene_1_tadam = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tadam
	this.instance = new lib.Symbol1();
	this.instance.setTransform(500.65,315.5,1,1,0,0,0,60.6,43.5);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(500.7,315.45,1,1,0,0,0,40.3,28.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.CachedBmp_8();
	this.instance_2.setTransform(440.35,272.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},533).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(533).to({_off:false},0).wait(1).to({regX:60.8,x:500.85},0).wait(3).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(538).to({_off:false},0).wait(1).to({regX:40.2,regY:29,x:500.6,y:315.55},0).wait(2).to({_off:true},1).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_strawberry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// strawberry
	this.instance = new lib.strawberry("synched",0);
	this.instance.setTransform(1014.35,137.55,0.9596,0.9596,0,0,0,99.2,92.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true},10).wait(70).to({_off:false,regX:101.7,regY:94.3,scaleX:0.0817,scaleY:0.0817,x:484.85,y:356.2},0).wait(101).to({regX:101,regY:93.7,scaleX:0.0816,scaleY:0.0816},0).wait(1).to({regX:99.2,regY:92.2,scaleX:0.0817,scaleY:0.0817,rotation:-0.4238,x:484.8,y:351.35},0).wait(1).to({rotation:-0.8677,x:484.9,y:346.55},0).wait(1).to({rotation:-1.3318,x:485.05,y:341.6},0).wait(1).to({rotation:-1.8148,x:485.25,y:336.75},0).wait(1).to({rotation:-2.3179,x:485.45,y:331.75},0).wait(1).to({rotation:-2.8411,x:485.7,y:326.85},0).wait(1).to({rotation:-3.3833,x:486,y:321.95},0).wait(1).to({rotation:-3.9456,x:486.3,y:317.15},0).wait(1).to({rotation:-4.5269,x:486.7,y:312.35},0).wait(1).to({rotation:-5.1294,x:487.05,y:307.75},0).wait(1).to({rotation:-5.7509,x:487.5,y:303.2},0).wait(1).to({rotation:-6.3925,x:488,y:298.8},0).wait(1).to({rotation:-7.0531,x:488.55,y:294.55},0).wait(1).to({rotation:-7.7338,x:489.15,y:290.55},0).wait(1).to({rotation:-8.4346,x:489.8,y:286.8},0).wait(1).to({rotation:-9.1544,x:490.55,y:283.3},0).wait(1).to({rotation:-9.8942,x:491.35,y:280.05},0).wait(1).to({rotation:-10.6542,x:492.2,y:277.15},0).wait(1).to({rotation:-11.4332,x:493.15,y:274.65},0).wait(1).to({rotation:-12.2323,x:494.15,y:272.45},0).wait(1).to({rotation:-13.0503,x:495.25,y:270.7},0).wait(1).to({rotation:-13.8896,x:496.4,y:269.4},0).wait(1).to({rotation:-14.7478,x:497.7,y:268.6},0).wait(1).to({rotation:-15.6262,x:499.05,y:268.3},0).wait(1).to({rotation:-16.5235,x:500.5,y:268.55},0).wait(1).to({rotation:-17.441,x:502.1,y:269.45},0).wait(1).to({rotation:-18.3786,x:503.75,y:270.95},0).wait(1).to({rotation:-19.3351,x:505.6,y:273.1},0).wait(1).to({rotation:-20.3117,x:507.5,y:276.05},0).wait(1).to({rotation:-21.3085,x:509.55,y:279.7},0).wait(1).to({rotation:-22.3242,x:511.7,y:284.2},0).wait(1).to({rotation:-23.36,x:514.05,y:289.6},0).wait(1).to({rotation:-24.416,x:516.55,y:295.85},0).wait(1).to({rotation:-25.4909,x:519.15,y:303.1},0).wait(1).to({rotation:-26.5859,x:520.55,y:307.2},0).wait(1).to({rotation:-27.701,x:520.65},0).wait(1).to({rotation:-28.8351,x:520.85,y:307.25},0).wait(1).to({rotation:-29.9893,x:520.9},0).wait(1).to({rotation:-31.1637,x:521.05,y:307.3},0).wait(1).to({rotation:-32.3569,x:521.2},0).wait(1).to({rotation:-33.5703,x:521.25},0).wait(1).to({rotation:-34.8039,x:521.4,y:307.4},0).wait(1).to({rotation:-36.0563,x:521.55,y:307.45},0).wait(1).to({rotation:-37.3289,x:521.65},0).wait(1).to({rotation:-38.6205,x:521.8,y:307.5},0).wait(1).to({rotation:-39.9333,x:521.9,y:307.45},0).wait(1).to({rotation:-41.2651,x:522,y:307.5},0).wait(1).to({rotation:-42.617,x:522.15,y:307.55},0).wait(1).to({rotation:-43.9878,x:522.35,y:307.6},0).wait(1).to({rotation:-45.3788,x:522.45,y:307.65},0).wait(1).to({rotation:-46.7899,x:522.6},0).wait(1).to({rotation:-48.2199,x:522.7},0).wait(1).to({rotation:-49.6701,x:522.85,y:307.7},0).wait(1).to({rotation:-51.1392,x:523},0).wait(1).to({rotation:-52.6296,x:523.15,y:307.75},0).wait(1).to({rotation:-54.139,x:523.3,y:307.8},0).wait(1).to({rotation:-55.6672,x:523.4,y:307.85},0).wait(1).to({rotation:-57.2168,x:523.65,y:307.9},0).wait(1).to({rotation:-58.7854,x:523.75},0).wait(1).to({rotation:-60.3741,x:523.9},0).wait(1).to({rotation:-61.9817,x:524.05,y:308},0).wait(1).to({rotation:-63.6094,x:524.25,y:308.05},0).wait(1).to({rotation:-65.2572,x:524.4,y:307.55},0).wait(1).to({rotation:-66.924,x:521.95,y:306.25},0).wait(1).to({rotation:-68.611,x:520.95,y:304.85},0).wait(1).to({rotation:-70.3168,x:518.9,y:305.35},0).wait(1).to({rotation:-72.044,x:523,y:306.25},0).wait(1).to({rotation:-77.2789,x:521.6,y:307.35},0).wait(1).to({rotation:-69.3419,x:520.4,y:303.4},0).wait(1).to({rotation:-54.0473,x:520.25,y:303.35},0).wait(1).to({rotation:-52.4502,y:304},0).wait(1).to({rotation:-50.8353,x:520.3,y:304.5},0).wait(1).to({rotation:-49.2036,x:520.35,y:305.1},0).wait(1).to({rotation:-47.5541,x:520.3,y:305.7},0).wait(1).to({rotation:-45.8868,x:520.4,y:306.35},0).wait(1).to({rotation:-44.2027,y:306.95},0).wait(1).to({rotation:-42.5009,y:307.6},0).wait(1).to({rotation:-40.7812,x:520.45,y:308.15},0).to({_off:true},1).wait(132));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_straw = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// straw
	this.instance = new lib.straw("synched",0);
	this.instance.setTransform(401.6,228.15,1,1,0,0,0,9.8,23.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(488).to({_off:false},0).wait(1).to({regX:10.1,regY:23.8,x:404,y:232.45},0).wait(1).to({x:406.1,y:236.45},0).wait(1).to({x:408.25,y:240.5},0).wait(1).to({x:410.35,y:244.5},0).wait(1).to({x:412.5,y:248.55},0).wait(1).to({x:414.6,y:252.55},0).wait(1).to({x:416.75,y:256.6},0).wait(1).to({x:418.85,y:260.6},0).wait(1).to({x:421,y:264.6},0).wait(1).to({x:423.1,y:268.65},0).wait(1).to({x:425.25,y:272.65},0).wait(1).to({x:427.35,y:276.7},0).wait(1).to({x:429.5,y:280.7},0).wait(1).to({x:431.6,y:284.75},0).wait(1).to({x:433.75,y:288.75},0).wait(1).to({x:435.85,y:292.8},0).wait(1).to({x:438,y:296.8},0).wait(1).to({x:440.1,y:300.8},0).wait(1).to({x:442.25,y:304.85},0).wait(1).to({x:444.35,y:308.85},0).wait(1).to({x:446.5,y:312.9},0).wait(1).to({x:448.6,y:316.9},0).wait(1).to({x:450.75,y:320.95},0).wait(1).to({x:452.85,y:324.95},0).wait(1).to({x:454.95,y:328.95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_pear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pear
	this.instance = new lib.pear("synched",0);
	this.instance.setTransform(1061.45,550.15,0.0482,0.0482,37.2036,0,0,1572.9,2284.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},15).wait(65).to({_off:false,regX:2240.6,regY:3052.8,scaleX:0.0054,scaleY:0.0054,rotation:0,x:471.8,y:355.5},0).wait(2).to({startPosition:0},0).wait(74).to({regX:2321.8,regY:3155.1,scaleX:0.0053,scaleY:0.0053,x:472.35,y:356.15},0).wait(1).to({regX:1570.5,regY:2282.5,scaleX:0.0054,scaleY:0.0054,rotation:0.0589,x:468.95,y:346.75},0).wait(1).to({rotation:0.1201,x:469.6,y:342.25},0).wait(1).to({scaleX:0.0053,scaleY:0.0053,rotation:0.1835,x:470.25,y:337.9},0).wait(1).to({rotation:0.2492,x:470.9,y:333.65},0).wait(1).to({rotation:0.3173,x:471.6,y:329.55},0).wait(1).to({rotation:0.3875,x:472.25,y:325.55},0).wait(1).to({rotation:0.4601,x:472.95,y:321.7},0).wait(1).to({rotation:0.5349,x:473.6,y:317.95},0).wait(1).to({rotation:0.612,x:474.35,y:314.35},0).wait(1).to({rotation:0.6914,x:475.05,y:310.85},0).wait(1).to({rotation:0.7731,x:475.8,y:307.45},0).wait(1).to({rotation:0.857,x:476.6,y:304.2},0).wait(1).to({rotation:0.9434,x:477.35,y:301.05},0).wait(1).to({rotation:1.0318,x:478.05,y:298.05},0).wait(1).to({rotation:1.1225,x:478.9,y:295.15},0).wait(1).to({rotation:1.2155,x:479.7,y:292.35},0).wait(1).to({rotation:1.3108,x:480.55,y:289.65},0).wait(1).to({rotation:1.4084,x:481.35,y:287.1},0).wait(1).to({rotation:1.5082,x:482.25,y:284.7},0).wait(1).to({rotation:1.6104,x:483.15,y:282.4},0).wait(1).to({rotation:1.7148,x:484,y:280.25},0).wait(1).to({rotation:1.8215,x:484.95,y:278.25},0).wait(1).to({rotation:1.9304,x:485.9,y:276.35},0).wait(1).to({rotation:2.0417,x:486.9,y:274.7},0).wait(1).to({rotation:2.1552,x:487.95,y:273.15},0).wait(1).to({rotation:2.271,x:488.95,y:271.75},0).wait(1).to({scaleX:0.0052,scaleY:0.0052,rotation:2.3891,x:489.95,y:270.5},0).wait(1).to({rotation:2.5094,x:491.1,y:269.5},0).wait(1).to({rotation:2.632,x:492.25,y:268.6},0).wait(1).to({rotation:2.7568,x:493.45,y:268},0).wait(1).to({rotation:2.8839,x:494.6,y:267.6},0).wait(1).to({rotation:3.0134,x:495.85,y:267.4},0).wait(1).to({rotation:3.145,x:497.15,y:267.5},0).wait(1).to({rotation:3.279,x:498.55,y:267.8},0).wait(1).to({rotation:3.4152,x:499.95,y:268.45},0).wait(1).to({rotation:3.5539,x:501.35,y:269.35},0).wait(1).to({rotation:3.6945,x:502.95,y:270.7},0).wait(1).to({rotation:3.8376,x:504.65,y:272.4},0).wait(1).to({rotation:3.9829,x:506.35,y:274.6},0).wait(1).to({rotation:4.1306,x:508.2,y:277.35},0).wait(1).to({rotation:4.2805,x:510.2,y:280.65},0).wait(1).to({rotation:4.4326,x:512.25,y:284.65},0).wait(1).to({scaleX:0.0051,scaleY:0.0051,rotation:4.587,x:514.65,y:289.6},0).wait(1).to({rotation:4.7437,x:517.2,y:295.8},0).wait(1).to({rotation:4.9028,x:519.65,y:302.1},0).wait(1).to({rotation:5.0639,x:519.6,y:302.05},0).wait(1).to({rotation:5.2275,y:301.95},0).wait(1).to({rotation:5.3933,y:301.85},0).wait(1).to({rotation:5.5614,x:519.65,y:301.75},0).wait(1).to({rotation:5.7317,x:519.6,y:301.65},0).wait(1).to({rotation:5.9043,y:301.6},0).wait(1).to({rotation:6.0793,x:519.65,y:301.55},0).wait(1).to({rotation:6.2565,x:519.6,y:301.4},0).wait(1).to({rotation:6.436,y:301.3},0).wait(1).to({rotation:6.6176,x:519.65,y:301.2},0).wait(1).to({rotation:6.8016,x:519.6,y:301.05},0).wait(1).to({scaleX:0.005,scaleY:0.005,rotation:6.9878,y:300.95},0).wait(1).to({rotation:7.1763,y:300.9},0).wait(1).to({rotation:7.3672,y:300.75},0).wait(1).to({rotation:7.5603,y:300.65},0).wait(1).to({rotation:7.7556,y:300.55},0).wait(1).to({rotation:7.9532,y:300.5},0).wait(1).to({rotation:8.1533,y:300.35},0).wait(1).to({rotation:8.3554,x:519.55,y:300.2},0).wait(1).to({rotation:8.5598,x:519.6,y:300.1},0).wait(1).to({rotation:8.7665,x:519.65,y:300},0).wait(1).to({rotation:8.9757,x:519.6,y:299.9},0).wait(1).to({scaleX:0.0049,scaleY:0.0049,rotation:9.1869,y:299.7},0).wait(1).to({rotation:9.4004,y:299.65},0).wait(1).to({rotation:9.6162,y:299.55},0).wait(1).to({rotation:9.8343,y:299.4},0).wait(1).to({rotation:10.0546,x:519.55,y:299.3},0).wait(1).to({rotation:10.2773,x:519.6,y:299.15},0).wait(1).to({rotation:10.5023,y:299.05},0).wait(1).to({rotation:10.7295,y:298.9},0).wait(1).to({rotation:10.959,y:298.75},0).wait(1).to({rotation:11.1907,y:298.65},0).wait(1).to({scaleX:0.0048,scaleY:0.0048,rotation:11.4247,x:519.65,y:298.6},0).wait(1).to({rotation:11.6611,x:519.6,y:298.45},0).wait(1).to({rotation:11.8996,y:298.3},0).wait(1).to({rotation:12.1405,y:298.2},0).wait(1).to({rotation:12.3836,x:519.55,y:298.05},0).wait(1).to({rotation:12.629,x:519.65,y:297.9},0).wait(1).to({rotation:12.8766,x:519.6,y:297.75},0).wait(1).to({rotation:13.1265,y:297.65},0).wait(1).to({rotation:13.3788,y:297.55},0).wait(1).to({scaleX:0.0047,scaleY:0.0047,rotation:13.6332,y:297.35},0).wait(1).to({rotation:13.89,x:519.55,y:297.2},0).wait(1).to({rotation:14.149,y:297.05},0).wait(1).to({rotation:14.4105,x:519.6,y:296.9},0).wait(1).to({rotation:14.6739,x:519.55,y:296.8},0).wait(1).to({rotation:14.9397,y:296.65},0).wait(1).to({rotation:15.2079,y:296.45},0).wait(1).to({rotation:15.4784,x:519.65,y:303.65},0).wait(1).to({scaleX:0.0046,scaleY:0.0046,rotation:15.7511,x:521.95,y:298.65},0).wait(1).to({rotation:16.0259,x:522.95,y:303.85},0).wait(1).to({rotation:17.2495,x:519.15,y:299.05},0).wait(1).to({rotation:22.7426,x:520.7,y:298},0).wait(1).to({rotation:28.2818,x:520.4,y:295.75},0).wait(1).to({rotation:31.2491,x:519.35,y:302.55},0).wait(1).to({rotation:32.5724,x:519.8,y:302.6},0).wait(1).to({rotation:33.9057,x:520.2,y:302.35},0).wait(1).to({scaleX:0.0045,scaleY:0.0045,rotation:35.2499,x:520.75,y:302.15},0).wait(1).to({rotation:36.6041,x:521.25,y:302},0).wait(1).to({rotation:37.9692,x:521.7,y:301.8},0).wait(1).to({rotation:39.345,x:522.2,y:301.65},0).wait(1).to({rotation:40.731,x:522.7,y:301.45},0).wait(1).to({rotation:42.1277,x:523.2,y:301.2},0).to({_off:true},1).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_kitchen_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// kitchen_copy
	this.instance = new lib.Kitchen("synched",0);
	this.instance.setTransform(638.5,358.2,1,1,0,0,0,638.5,358.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(414).to({_off:false},0).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_kitchen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// kitchen
	this.instance = new lib.Kitchen("synched",0);
	this.instance.setTransform(638.5,358.2,1,1,0,0,0,638.5,358.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(40).to({startPosition:0},0).to({_off:true},238).wait(132));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_juice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// juice
	this.instance = new lib.juice();
	this.instance.setTransform(520.2,311.45,0.9999,0.9999,0,0,0,17.1,13.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(279).to({_off:false},0).to({_off:true},28).wait(236));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_blander2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blander2
	this.instance = new lib.blander("synched",0);
	this.instance.setTransform(542.4,339.95,0.9944,0.9944,0,0,0,44.1,54.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(414).to({_off:false},0).wait(1).to({regX:24.9,regY:36.7,scaleX:0.9945,scaleY:0.9945,rotation:-2.3679,x:522.6,y:321.05},0).wait(1).to({rotation:-4.7357,x:521.95,y:320.2},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,rotation:-7.1036,x:521.25,y:319.5},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,rotation:-9.4715,x:520.65,y:318.8},0).wait(1).to({rotation:-11.8393,x:520.15,y:318.05},0).wait(1).to({rotation:-14.2072,x:519.6,y:317.45},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,rotation:-16.5751,x:519.15,y:316.8},0).wait(1).to({rotation:-18.9429,x:518.7,y:316.15},0).wait(1).to({rotation:-21.3108,x:518.25,y:315.55},0).wait(1).to({rotation:-23.6787,x:517.95,y:314.95},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,rotation:-26.0466,x:517.65,y:314.4},0).wait(1).to({rotation:-28.4144,x:517.35,y:313.8},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,rotation:-30.7823,x:517.1,y:313.3},0).wait(1).to({rotation:-33.1502,x:516.95,y:312.7},0).wait(1).to({rotation:-35.518,x:516.8,y:312.2},0).wait(1).to({rotation:-37.8859,x:516.7,y:311.7},0).wait(1).to({rotation:-40.2538,x:516.65,y:311.15},0).wait(1).to({rotation:-42.6216,x:516.6,y:310.65},0).wait(1).to({rotation:-44.9895,x:516.65,y:310.1},0).wait(1).to({rotation:-44.1074,x:516.7,y:310.4},0).wait(1).to({rotation:-43.2252,y:310.7},0).wait(1).to({rotation:-42.3431,y:310.95},0).wait(1).to({rotation:-41.4609,x:516.65,y:311.25},0).wait(1).to({rotation:-40.5788,x:516.7,y:311.5},0).wait(1).to({rotation:-39.6966,y:311.85},0).wait(1).to({rotation:-38.8145,x:516.8,y:312.1},0).wait(1).to({rotation:-37.9323,x:516.85,y:312.4},0).wait(1).to({rotation:-37.0502,y:312.7},0).wait(1).to({rotation:-36.168,x:516.9,y:312.95},0).wait(1).to({rotation:-35.2859,x:516.95,y:313.25},0).wait(1).to({rotation:-34.4037,x:517,y:313.5},0).wait(1).to({rotation:-33.5216,x:517.05,y:313.85},0).wait(1).to({rotation:-32.6394,x:517.15,y:314.1},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,rotation:-31.7573,x:517.2,y:314.35},0).wait(1).to({rotation:-30.8751,x:517.3,y:314.65},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,rotation:-29.993,x:517.4,y:314.95},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,rotation:-29.1109,x:517.5,y:315.25},0).wait(1).to({rotation:-28.2287,x:517.55,y:315.55},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,rotation:-27.3466,x:517.7,y:315.85},0).wait(1).to({rotation:-26.4644,x:517.8,y:316.1},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,rotation:-25.5823,x:517.95,y:316.4},0).wait(1).to({rotation:-24.7001,x:518.05,y:316.75},0).wait(1).to({rotation:-23.818,x:518.2,y:317.05},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,rotation:-22.9358,x:518.3,y:317.35},0).wait(1).to({rotation:-22.0537,x:518.5,y:317.7},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,rotation:-21.1715,x:518.65,y:318},0).wait(1).to({rotation:-20.2894,x:518.8,y:318.3},0).wait(1).to({rotation:-19.4072,x:519,y:318.55},0).wait(1).to({rotation:-18.5251,x:519.15,y:318.95},0).wait(1).to({rotation:-17.6429,x:519.3,y:319.25},0).wait(1).to({rotation:-16.7608,x:519.45,y:319.55},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,rotation:-15.8786,x:519.65,y:319.9},0).wait(1).to({rotation:-14.9965,x:519.85,y:320.2},0).wait(1).to({rotation:-14.1144,x:520.05,y:320.55},0).wait(1).to({rotation:-13.2322,x:520.25,y:320.9},0).wait(1).to({rotation:-12.3501,x:520.45,y:321.2},0).wait(1).to({rotation:-11.4679,x:520.65,y:321.55},0).wait(1).to({rotation:-10.5858,x:520.9,y:321.9},0).wait(1).to({rotation:-9.7036,x:521.1,y:322.25},0).wait(1).to({rotation:-8.8215,x:521.3,y:322.6},0).wait(1).to({rotation:-7.9393,x:521.55,y:323},0).wait(1).to({rotation:-7.0572,x:521.8,y:323.3},0).wait(1).to({rotation:-6.175,x:522.05,y:323.7},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,rotation:-5.2929,x:522.3,y:324.05},0).wait(1).to({rotation:-4.4107,x:522.55,y:324.45},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,rotation:-3.5286,x:522.8,y:324.85},0).wait(1).to({rotation:-2.6464,x:523.1,y:325.15},0).wait(1).to({rotation:-1.7643,x:523.3,y:325.6},0).wait(1).to({rotation:-0.8821,x:523.6,y:325.9},0).wait(1).to({rotation:0,x:523.85,y:326.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_blander_top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blander_top
	this.instance = new lib.top("synched",0);
	this.instance.setTransform(519.45,282.4,0.523,1,0,0,0,37.6,5.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({regX:35.4,regY:3.5,x:518.25,y:280.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:30,x:527.4,y:292.75},0).wait(1).to({rotation:60,x:536.5,y:305.35},0).wait(1).to({rotation:90,x:545.45,y:318.4},0).wait(1).to({rotation:120,x:553.85,y:331.8},0).wait(1).to({rotation:150,x:561.7,y:345.2},0).wait(1).to({rotation:180,x:569.1,y:358.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:154.2857,x:563,y:347.25},0).wait(1).to({rotation:128.5714,x:556.5,y:335.85},0).wait(1).to({rotation:102.8571,x:549.7,y:324.5},0).wait(1).to({rotation:77.1429,x:542.4,y:313.3},0).wait(1).to({rotation:51.4286,x:534.85,y:302.35},0).wait(1).to({rotation:25.7143,x:527.25,y:291.8},0).wait(1).to({rotation:0,x:519.55,y:281.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(236));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_blander_bottum = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blander_bottum
	this.instance = new lib.blander_botton("synched",0);
	this.instance.setTransform(520.6,340.95,0.9999,0.9999,0,0,0,6.9,10.2);
	this.instance._off = true;

	this.instance_1 = new lib.blander_botton2("synched",0);
	this.instance_1.setTransform(531.65,351.45,0.9963,0.9963,0,0,0,18.2,21.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({regX:6.6,regY:9.8,x:520.25,y:340.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(282));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(261).to({_off:false},0).to({_off:true},46).wait(107).to({_off:false,regX:19.4,regY:22.6,scaleX:0.996,scaleY:0.996,x:533.2,y:350.7},0).wait(1).to({regX:6.6,regY:9.8,rotation:-2.3684,x:520.4,y:337.1},0).wait(1).to({rotation:-4.7368,x:520.45,y:336.3},0).wait(1).to({rotation:-7.1053,x:520.5,y:335.5},0).wait(1).to({rotation:-9.4737,x:520.6,y:334.65},0).wait(1).to({rotation:-11.8421,x:520.7,y:333.9},0).wait(1).to({scaleX:0.9959,scaleY:0.9959,rotation:-14.2105,x:520.75,y:333.15},0).wait(1).to({rotation:-16.5789,x:520.95,y:332.35},0).wait(1).to({rotation:-18.9474,x:521.05,y:331.7},0).wait(1).to({rotation:-21.3158,x:521.3,y:330.95},0).wait(1).to({rotation:-23.6842,x:521.5,y:330.25},0).wait(1).to({rotation:-26.0526,x:521.8,y:329.55},0).wait(1).to({rotation:-28.4211,x:522.1,y:328.9},0).wait(1).to({rotation:-30.7895,x:522.4,y:328.25},0).wait(1).to({rotation:-33.1579,x:522.75,y:327.55},0).wait(1).to({rotation:-35.5263,x:523.1,y:326.95},0).wait(1).to({rotation:-37.8947,x:523.55,y:326.25},0).wait(1).to({rotation:-40.2632,x:523.9,y:325.65},0).wait(1).to({rotation:-42.6316,x:524.4,y:325},0).wait(1).to({rotation:-45,x:524.9,y:324.35},0).wait(1).to({rotation:-44.1176,x:524.7,y:324.65},0).wait(1).to({rotation:-43.2353,x:524.55,y:325},0).wait(1).to({rotation:-42.3529,x:524.25,y:325.3},0).wait(1).to({rotation:-41.4706,x:524.1,y:325.65},0).wait(1).to({rotation:-40.5882,x:523.95,y:326},0).wait(1).to({rotation:-39.7059,x:523.75,y:326.35},0).wait(1).to({rotation:-38.8235,x:523.55,y:326.7},0).wait(1).to({rotation:-37.9412,x:523.4,y:327},0).wait(1).to({rotation:-37.0588,x:523.25,y:327.4},0).wait(1).to({rotation:-36.1765,x:523.05,y:327.7},0).wait(1).to({rotation:-35.2941,x:522.9,y:328},0).wait(1).to({rotation:-34.4118,x:522.7,y:328.4},0).wait(1).to({rotation:-33.5294,x:522.6,y:328.7},0).wait(1).to({rotation:-32.6471,x:522.45,y:329.05},0).wait(1).to({rotation:-31.7647,x:522.3,y:329.4},0).wait(1).to({rotation:-30.8824,x:522.15,y:329.8},0).wait(1).to({rotation:-30,x:522.05,y:330.05},0).wait(1).to({rotation:-29.1176,x:521.9,y:330.45},0).wait(1).to({rotation:-28.2353,x:521.75,y:330.8},0).wait(1).to({rotation:-27.3529,x:521.65,y:331.1},0).wait(1).to({rotation:-26.4706,x:521.5,y:331.45},0).wait(1).to({rotation:-25.5882,x:521.4,y:331.8},0).wait(1).to({rotation:-24.7059,x:521.3,y:332.15},0).wait(1).to({rotation:-23.8235,x:521.15,y:332.55},0).wait(1).to({rotation:-22.9412,x:521.05,y:332.9},0).wait(1).to({rotation:-22.0588,x:520.95,y:333.25},0).wait(1).to({rotation:-21.1765,x:520.9,y:333.6},0).wait(1).to({rotation:-20.2941,x:520.75,y:333.9},0).wait(1).to({rotation:-19.4118,x:520.7,y:334.25},0).wait(1).to({rotation:-18.5294,x:520.6,y:334.65},0).wait(1).to({rotation:-17.6471,x:520.5,y:335},0).wait(1).to({rotation:-16.7647,x:520.45,y:335.4},0).wait(1).to({rotation:-15.8824,x:520.35,y:335.75},0).wait(1).to({rotation:-15,y:336.15},0).wait(1).to({rotation:-14.1176,x:520.25,y:336.5},0).wait(1).to({rotation:-13.2353,x:520.2,y:336.9},0).wait(1).to({rotation:-12.3529,x:520.1,y:337.25},0).wait(1).to({rotation:-11.4706,y:337.6},0).wait(1).to({rotation:-10.5882,x:520,y:338},0).wait(1).to({rotation:-9.7059,y:338.4},0).wait(1).to({rotation:-8.8235,x:519.9,y:338.8},0).wait(1).to({rotation:-7.9412,x:519.85,y:339.15},0).wait(1).to({rotation:-7.0588,x:519.8,y:339.6},0).wait(1).to({rotation:-6.1765,y:339.95},0).wait(1).to({rotation:-5.2941,x:519.75,y:340.35},0).wait(1).to({rotation:-4.4118,y:340.75},0).wait(1).to({rotation:-3.5294,x:519.7,y:341.15},0).wait(1).to({rotation:-2.6471,y:341.55},0).wait(1).to({rotation:-1.7647,x:519.65,y:341.95},0).wait(1).to({rotation:-0.8824,y:342.35},0).wait(1).to({rotation:0,y:342.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_blander = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blander
	this.instance = new lib.blander("synched",0);
	this.instance.setTransform(539.35,337.2,0.9955,0.9955,0,0,0,39.6,51.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(230).to({startPosition:0},0).to({_off:true},48).wait(236));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_banana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// banana
	this.instance = new lib.banana("synched",0);
	this.instance.setTransform(660.55,547.85,0.8495,0.8495,14.9983,0,0,123.9,105.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},20).wait(60).to({_off:false,regX:125.7,regY:107,scaleX:0.1018,scaleY:0.1018,rotation:0,x:433.35,y:352},0).wait(56).to({regX:123.8,regY:103.7,x:433.15,y:351.8},0).wait(1).to({regY:105.4,scaleX:0.1017,scaleY:0.1017,rotation:-0.023,x:435.5,y:346.6},0).wait(1).to({rotation:-0.0466,x:437.95,y:341.3},0).wait(1).to({scaleX:0.1016,scaleY:0.1016,rotation:-0.071,x:440.4,y:336},0).wait(1).to({scaleX:0.1015,scaleY:0.1015,rotation:-0.096,x:442.8,y:330.8},0).wait(1).to({scaleX:0.1014,scaleY:0.1014,rotation:-0.1218,x:445.35,y:325.6},0).wait(1).to({rotation:-0.1482,x:447.9,y:320.5},0).wait(1).to({scaleX:0.1013,scaleY:0.1013,rotation:-0.1753,x:450.5,y:315.45},0).wait(1).to({scaleX:0.1012,scaleY:0.1012,rotation:-0.2032,x:453.05,y:310.55},0).wait(1).to({scaleX:0.1011,scaleY:0.1011,rotation:-0.2317,x:455.6,y:305.8},0).wait(1).to({scaleX:0.101,scaleY:0.101,rotation:-0.2609,x:458.25,y:301.2},0).wait(1).to({scaleX:0.1009,scaleY:0.1009,rotation:-0.2908,x:460.85,y:296.75},0).wait(1).to({scaleX:0.1008,scaleY:0.1008,rotation:-0.3214,x:463.5,y:292.5},0).wait(1).to({scaleX:0.1007,scaleY:0.1007,rotation:-0.3526,x:466.05,y:288.35},0).wait(1).to({scaleX:0.1006,scaleY:0.1006,rotation:-0.3846,x:468.7,y:284.55},0).wait(1).to({scaleX:0.1005,scaleY:0.1005,rotation:-0.4172,x:471.35,y:280.95},0).wait(1).to({scaleX:0.1004,scaleY:0.1004,rotation:-0.4506,x:474,y:277.65},0).wait(1).to({scaleX:0.1003,scaleY:0.1003,rotation:-0.4846,x:476.55,y:274.55},0).wait(1).to({scaleX:0.1002,scaleY:0.1002,rotation:-0.5194,x:479.15,y:271.85},0).wait(1).to({scaleX:0.1001,scaleY:0.1001,rotation:-0.5548,x:481.7,y:269.45},0).wait(1).to({scaleX:0.1,scaleY:0.1,rotation:-0.5909,x:484.25,y:267.3},0).wait(1).to({scaleX:0.0999,scaleY:0.0999,rotation:-0.6277,x:486.7,y:265.65},0).wait(1).to({scaleX:0.0998,scaleY:0.0998,rotation:-0.6652,x:489.2,y:264.3},0).wait(1).to({scaleX:0.0997,scaleY:0.0997,rotation:-0.7033,x:491.7,y:263.4},0).wait(1).to({scaleX:0.0995,scaleY:0.0995,rotation:-0.7422,x:494.05,y:262.95},0).wait(1).to({scaleX:0.0994,scaleY:0.0994,rotation:-0.7818,x:496.45,y:263},0).wait(1).to({scaleX:0.0993,scaleY:0.0993,rotation:-0.8221,x:498.75,y:263.45},0).wait(1).to({scaleX:0.0992,scaleY:0.0992,rotation:-0.863,x:500.95,y:264.45},0).wait(1).to({scaleX:0.099,scaleY:0.099,rotation:-0.9047,x:503.15,y:266.05},0).wait(1).to({scaleX:0.0989,scaleY:0.0989,rotation:-0.947,x:505.3,y:268.15},0).wait(1).to({scaleX:0.0988,scaleY:0.0988,rotation:-0.99,x:507.45,y:270.9},0).wait(1).to({scaleX:0.0986,scaleY:0.0986,rotation:-1.0338,x:509.4,y:274.3},0).wait(1).to({scaleX:0.0985,scaleY:0.0985,rotation:-1.0781,x:511.3,y:278.3},0).wait(1).to({scaleX:0.0984,scaleY:0.0984,rotation:-1.1232,x:513.1,y:283},0).wait(1).to({scaleX:0.0982,scaleY:0.0982,rotation:-1.169,x:514.85,y:288.45},0).wait(1).to({scaleX:0.0981,scaleY:0.0981,rotation:-1.2155,x:516.5,y:294.65},0).wait(1).to({scaleX:0.0979,scaleY:0.0979,rotation:-1.2626,x:518.05,y:301.6},0).wait(1).to({scaleX:0.0978,scaleY:0.0978,rotation:-1.3105,x:519.3,y:308.15},0).wait(1).to({scaleX:0.0977,scaleY:0.0977,rotation:-1.3591,y:308.2},0).wait(1).to({scaleX:0.0975,scaleY:0.0975,rotation:-1.4083,x:519.2,y:308.15},0).wait(1).to({scaleX:0.0974,scaleY:0.0974,rotation:-1.4583,y:308.2},0).wait(1).to({scaleX:0.0972,scaleY:0.0972,rotation:-1.5089},0).wait(1).to({scaleX:0.097,scaleY:0.097,rotation:-1.5602,y:308.15},0).wait(1).to({scaleX:0.0969,scaleY:0.0969,rotation:-1.6122},0).wait(1).to({scaleX:0.0967,scaleY:0.0967,rotation:-1.6649,x:519.15,y:308.2},0).wait(1).to({scaleX:0.0966,scaleY:0.0966,rotation:-1.7183,y:308.15},0).wait(1).to({scaleX:0.0964,scaleY:0.0964,rotation:-1.7724,x:519.1,y:308.2},0).wait(1).to({scaleX:0.0962,scaleY:0.0962,rotation:-1.8272,x:519.05},0).wait(1).to({scaleX:0.0961,scaleY:0.0961,rotation:-1.8826,x:519.1,y:308.15},0).wait(1).to({scaleX:0.0959,scaleY:0.0959,rotation:-1.9388,x:519.05,y:308.2},0).wait(1).to({scaleX:0.0957,scaleY:0.0957,rotation:-1.9956},0).wait(1).to({scaleX:0.0955,scaleY:0.0955,rotation:-2.0531,x:519},0).wait(1).to({scaleX:0.0954,scaleY:0.0954,rotation:-2.1113,x:518.95,y:308.15},0).wait(1).to({scaleX:0.0952,scaleY:0.0952,rotation:-2.1703},0).wait(1).to({scaleX:0.095,scaleY:0.095,rotation:-2.2299},0).wait(1).to({scaleX:0.0948,scaleY:0.0948,rotation:-2.2902,y:308.2},0).wait(1).to({scaleX:0.0946,scaleY:0.0946,rotation:-2.3511,x:518.9,y:308.15},0).wait(1).to({scaleX:0.0944,scaleY:0.0944,rotation:-2.4129},0).wait(1).to({scaleX:0.0942,scaleY:0.0942,rotation:-2.4752,x:518.85},0).wait(1).to({scaleX:0.094,scaleY:0.094,rotation:-2.5383},0).wait(1).to({scaleX:0.0939,scaleY:0.0939,rotation:-2.602,x:518.8},0).wait(1).to({scaleX:0.0937,scaleY:0.0937,rotation:-2.6665},0).wait(1).to({scaleX:0.0935,scaleY:0.0935,rotation:-2.7316,x:518.75},0).wait(1).to({scaleX:0.0933,scaleY:0.0933,rotation:-2.7975,x:518.8},0).wait(1).to({scaleX:0.0931,scaleY:0.0931,rotation:-2.8639,x:518.7,y:308.2},0).wait(1).to({scaleX:0.0928,scaleY:0.0928,rotation:-2.9312,y:308.1},0).wait(1).to({scaleX:0.0926,scaleY:0.0926,rotation:-2.9991,x:518.65,y:308.15},0).wait(1).to({scaleX:0.0924,scaleY:0.0924,rotation:-3.0677,x:518.6,y:308.2},0).wait(1).to({scaleX:0.0922,scaleY:0.0922,rotation:-3.1369,x:518.65,y:308.15},0).wait(1).to({scaleX:0.092,scaleY:0.092,rotation:-3.2069,x:518.55},0).wait(1).to({scaleX:0.0918,scaleY:0.0918,rotation:-3.2776},0).wait(1).to({scaleX:0.0916,scaleY:0.0916,rotation:-3.349,x:518.5},0).wait(1).to({scaleX:0.0913,scaleY:0.0913,rotation:-3.421},0).wait(1).to({scaleX:0.0911,scaleY:0.0911,rotation:-3.4937},0).wait(1).to({scaleX:0.0909,scaleY:0.0909,rotation:-3.5671,y:308.1},0).wait(1).to({scaleX:0.0907,scaleY:0.0907,rotation:-3.6413,x:518.4,y:308.15},0).wait(1).to({scaleX:0.0904,scaleY:0.0904,rotation:-3.7161,x:518.35,y:308.1},0).wait(1).to({scaleX:0.0902,scaleY:0.0902,rotation:-3.7916,x:518.4},0).wait(1).to({scaleX:0.09,scaleY:0.09,rotation:-3.8678,x:518.35},0).wait(1).to({scaleX:0.0897,scaleY:0.0897,rotation:-3.9447,y:308.15},0).wait(1).to({scaleX:0.0895,scaleY:0.0895,rotation:-4.0223,x:518.3,y:308.1},0).wait(1).to({scaleX:0.0893,scaleY:0.0893,rotation:-4.1005,x:518.2},0).wait(1).to({scaleX:0.089,scaleY:0.089,rotation:-4.1795,x:518.25},0).wait(1).to({scaleX:0.0888,scaleY:0.0888,rotation:-4.2591,x:518.2,y:308.15},0).wait(1).to({scaleX:0.0885,scaleY:0.0885,rotation:-4.3395,y:308.1},0).wait(1).to({scaleX:0.0883,scaleY:0.0883,rotation:-4.4205,x:518.15},0).wait(1).to({scaleX:0.088,scaleY:0.088,rotation:-4.5023,x:518.1},0).wait(1).to({scaleX:0.0878,scaleY:0.0878,rotation:-4.5846},0).wait(1).to({scaleX:0.0875,scaleY:0.0875,rotation:-4.6678,x:518.05},0).wait(1).to({scaleX:0.0873,scaleY:0.0873,rotation:-4.7515,x:518,y:308.05},0).wait(1).to({scaleX:0.087,scaleY:0.087,rotation:-4.836,y:308.1},0).wait(1).to({scaleX:0.0868,scaleY:0.0868,rotation:-4.9212},0).wait(1).to({scaleX:0.0865,scaleY:0.0865,rotation:-5.0071,x:517.9},0).wait(1).to({scaleX:0.0862,scaleY:0.0862,rotation:-5.0937},0).wait(1).to({scaleX:0.086,scaleY:0.086,rotation:-5.1809,x:517.85,y:308.05},0).wait(1).to({scaleX:0.0857,scaleY:0.0857,rotation:-5.2688,y:308.1},0).wait(1).to({scaleX:0.0854,scaleY:0.0854,rotation:-5.3575,y:308.05},0).wait(1).to({scaleX:0.0852,scaleY:0.0852,rotation:-5.4468,x:517.8,y:308.1},0).wait(1).to({scaleX:0.0849,scaleY:0.0849,rotation:-5.5368,x:517.7},0).wait(1).to({scaleX:0.0846,scaleY:0.0846,rotation:-5.6275,x:517.65,y:308},0).wait(1).to({scaleX:0.0843,scaleY:0.0843,rotation:-5.7189,x:517.7,y:308.05},0).wait(1).to({scaleX:0.084,scaleY:0.084,rotation:-5.811,x:517.65},0).wait(1).to({scaleX:0.0838,scaleY:0.0838,rotation:-5.9038,x:517.6,y:308.1},0).wait(1).to({scaleX:0.0835,scaleY:0.0835,rotation:-5.9972,y:308.05},0).wait(1).to({scaleX:0.0832,scaleY:0.0832,rotation:-6.0914,x:517.55},0).wait(1).to({scaleX:0.0829,scaleY:0.0829,rotation:-6.1863,x:517.5},0).wait(1).to({scaleX:0.0826,scaleY:0.0826,rotation:-6.2818,x:517.45},0).wait(1).to({scaleX:0.0823,scaleY:0.0823,rotation:-6.3781,y:308},0).wait(1).to({scaleX:0.082,scaleY:0.082,rotation:-6.475,x:517.4,y:308.05},0).wait(1).to({scaleX:0.0817,scaleY:0.0817,rotation:-6.5726},0).wait(1).to({scaleX:0.0814,scaleY:0.0814,rotation:-6.6709,x:517.3},0).wait(1).to({scaleX:0.0811,scaleY:0.0811,rotation:-6.7699,x:517.25},0).wait(1).to({scaleX:0.0808,scaleY:0.0808,rotation:-6.8696,y:308},0).wait(1).to({scaleX:0.0805,scaleY:0.0805,rotation:-6.97},0).wait(1).to({scaleX:0.0802,scaleY:0.0802,rotation:-7.071,x:517.2,y:308.05},0).wait(1).to({scaleX:0.0799,scaleY:0.0799,rotation:-7.1728,x:517.15,y:308},0).wait(1).to({scaleX:0.0796,scaleY:0.0796,rotation:-7.2752,x:517.05},0).wait(1).to({scaleX:0.0792,scaleY:0.0792,rotation:-7.3784,y:308.05},0).wait(1).to({scaleX:0.0789,scaleY:0.0789,rotation:-7.4823,y:307.6},0).wait(1).to({scaleX:0.0786,scaleY:0.0786,rotation:-7.5868,x:518.45,y:305.95},0).wait(1).to({scaleX:0.0783,scaleY:0.0783,rotation:-7.692,x:515.5,y:303.7},0).wait(1).to({scaleX:0.078,scaleY:0.078,rotation:-7.7979,x:520.65,y:307.9},0).wait(1).to({scaleX:0.0776,scaleY:0.0776,rotation:-7.9045,x:516.4,y:304.7},0).wait(1).to({scaleX:0.0773,scaleY:0.0773,rotation:-8.0118,x:515.8,y:306.6},0).wait(1).to({scaleX:0.077,scaleY:0.077,rotation:-16.8228,x:518.85,y:303.95},0).wait(1).to({scaleX:0.0766,scaleY:0.0766,rotation:6.7547,x:520,y:303.2},0).wait(1).to({scaleX:0.0763,scaleY:0.0763,rotation:3.0351,y:303.85},0).wait(1).to({scaleX:0.076,scaleY:0.076,rotation:-1.3851,x:519.95,y:304.4},0).wait(1).to({scaleX:0.0756,scaleY:0.0756,rotation:-5.83,x:519.9,y:305},0).wait(1).to({scaleX:0.0753,scaleY:0.0753,rotation:-10.3053,x:519.8,y:305.6},0).wait(1).to({scaleX:0.075,scaleY:0.075,rotation:-14.8081,y:306.2},0).wait(1).to({scaleX:0.0746,scaleY:0.0746,rotation:-19.3384,x:519.75,y:306.75},0).wait(1).to({scaleX:0.0743,scaleY:0.0743,rotation:-23.8963,x:519.7,y:307.4},0).wait(1).to({scaleX:0.0739,scaleY:0.0739,rotation:-28.4817,y:308},0).to({_off:true},1).wait(131));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_apple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// apple
	this.instance = new lib.apple("synched",0);
	this.instance.setTransform(165.1,503.65,0.6284,0.6284,-14.9984,0,0,142.7,155.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},25).wait(55).to({_off:false,regX:187.4,regY:187.4,scaleX:0.0526,scaleY:0.0526,rotation:0,x:449.65,y:356.75},0).wait(21).to({regX:186.5,regY:186.5},0).wait(1).to({regX:142.7,regY:155.4,scaleX:0.0525,scaleY:0.0525,rotation:0.0113,x:448.95,y:350.4},0).wait(1).to({rotation:0.0229,x:450.6,y:345.75},0).wait(1).to({rotation:0.0348,x:452.3,y:341.1},0).wait(1).to({rotation:0.0469,x:454,y:336.5},0).wait(1).to({rotation:0.0595,x:455.75,y:331.95},0).wait(1).to({rotation:0.0722,x:457.5,y:327.5},0).wait(1).to({scaleX:0.0524,scaleY:0.0524,rotation:0.0853,x:459.3,y:323.1},0).wait(1).to({rotation:0.0987,x:461.1,y:318.8},0).wait(1).to({rotation:0.1124,x:462.95,y:314.55},0).wait(1).to({rotation:0.1264,x:464.75,y:310.45},0).wait(1).to({rotation:0.1407,x:466.6,y:306.5},0).wait(1).to({scaleX:0.0523,scaleY:0.0523,rotation:0.1553,x:468.45,y:302.65},0).wait(1).to({rotation:0.1702,x:470.35,y:299},0).wait(1).to({rotation:0.1854,x:472.25,y:295.4},0).wait(1).to({rotation:0.2009,x:474.15,y:292.15},0).wait(1).to({scaleX:0.0522,scaleY:0.0522,rotation:0.2167,x:476.1,y:289},0).wait(1).to({rotation:0.2328,x:478.05,y:286.1},0).wait(1).to({rotation:0.2492,x:479.95,y:283.4},0).wait(1).to({rotation:0.2659,x:481.95,y:280.95},0).wait(1).to({scaleX:0.0521,scaleY:0.0521,rotation:0.2829,x:483.9,y:278.75},0).wait(1).to({rotation:0.3002,x:485.85,y:276.8},0).wait(1).to({rotation:0.3178,x:487.8,y:275.2},0).wait(1).to({rotation:0.3357,x:489.8,y:273.85},0).wait(1).to({scaleX:0.052,scaleY:0.052,rotation:0.3539,x:491.7,y:272.85},0).wait(1).to({rotation:0.3724,x:493.65,y:272.2},0).wait(1).to({rotation:0.3912,x:495.6,y:271.85},0).wait(1).to({scaleX:0.0519,scaleY:0.0519,rotation:0.4103,x:497.55,y:271.9},0).wait(1).to({rotation:0.4297,x:499.5,y:272.35},0).wait(1).to({rotation:0.4494,x:501.45,y:273.25},0).wait(1).to({rotation:0.4694,x:503.35,y:274.55},0).wait(1).to({scaleX:0.0518,scaleY:0.0518,rotation:0.4897,x:505.25,y:276.3},0).wait(1).to({rotation:0.5103,x:507.15,y:278.55},0).wait(1).to({rotation:0.5313,x:509.05,y:281.25},0).wait(1).to({scaleX:0.0517,scaleY:0.0517,rotation:0.5525,x:510.85,y:284.5},0).wait(1).to({rotation:0.574,x:512.6,y:288.25},0).wait(1).to({rotation:0.5958,x:514.4,y:292.65},0).wait(1).to({scaleX:0.0516,scaleY:0.0516,rotation:0.6179,x:516.2,y:297.5},0).wait(1).to({rotation:0.6403,x:517.95,y:303},0).wait(1).to({rotation:0.663,x:519.65,y:309.1},0).wait(1).to({scaleX:0.0515,scaleY:0.0515,rotation:0.686,x:520.1,y:310.65},0).wait(1).to({rotation:0.7093,y:310.6},0).wait(1).to({rotation:0.7329,x:520.15,y:310.55},0).wait(1).to({scaleX:0.0514,scaleY:0.0514,rotation:0.7569},0).wait(1).to({rotation:0.7811,x:520.2,y:310.5},0).wait(1).to({scaleX:0.0513,scaleY:0.0513,rotation:0.8056,x:520.15},0).wait(1).to({rotation:0.8304,x:520.2,y:310.4},0).wait(1).to({rotation:0.8555,y:310.35},0).wait(1).to({scaleX:0.0512,scaleY:0.0512,rotation:0.8809,x:520.25},0).wait(1).to({rotation:0.9067,x:520.2,y:310.3},0).wait(1).to({scaleX:0.0511,scaleY:0.0511,rotation:0.9326,x:520.25,y:310.25},0).wait(1).to({rotation:0.959},0).wait(1).to({rotation:0.9856,x:520.3,y:310.2},0).wait(1).to({scaleX:0.051,scaleY:0.051,rotation:1.0125},0).wait(1).to({rotation:1.0397,y:310.15},0).wait(1).to({scaleX:0.0509,scaleY:0.0509,rotation:1.0672,y:310.1},0).wait(1).to({rotation:1.0951,x:520.35,y:310.05},0).wait(1).to({rotation:1.1232,x:520.4},0).wait(1).to({scaleX:0.0508,scaleY:0.0508,rotation:1.1516,y:310},0).wait(1).to({rotation:1.1803,x:520.45,y:309.95},0).wait(1).to({scaleX:0.0507,scaleY:0.0507,rotation:1.2093,y:309.9},0).wait(1).to({rotation:1.2387,x:520.5,y:309.85},0).wait(1).to({scaleX:0.0506,scaleY:0.0506,rotation:1.2683,x:520.45,y:309.8},0).wait(1).to({rotation:1.2982,y:309.75},0).wait(1).to({scaleX:0.0505,scaleY:0.0505,rotation:1.3284,x:520.5,y:309.7},0).wait(1).to({rotation:1.359},0).wait(1).to({rotation:1.3898,x:520.55,y:309.65},0).wait(1).to({scaleX:0.0504,scaleY:0.0504,rotation:1.4209,x:520.6},0).wait(1).to({rotation:1.4523,y:309.55},0).wait(1).to({scaleX:0.0503,scaleY:0.0503,rotation:1.4841,x:520.65},0).wait(1).to({rotation:1.5161,x:520.6,y:309.5},0).wait(1).to({scaleX:0.0502,scaleY:0.0502,rotation:1.5484,x:520.65,y:309.45},0).wait(1).to({rotation:1.581,x:520.7,y:309.4},0).wait(1).to({scaleX:0.0501,scaleY:0.0501,rotation:1.614,y:309.35},0).wait(1).to({rotation:1.6472,x:520.75},0).wait(1).to({scaleX:0.05,scaleY:0.05,rotation:1.6807,y:309.25},0).wait(1).to({rotation:1.7146,x:520.7,y:309.2},0).wait(1).to({scaleX:0.0499,scaleY:0.0499,rotation:1.7487,x:520.75,y:309.15},0).wait(1).to({rotation:1.7831,x:520.8,y:309.1},0).wait(1).to({scaleX:0.0498,scaleY:0.0498,rotation:1.8178,y:309.05},0).wait(1).to({rotation:1.8529,x:520.85},0).wait(1).to({scaleX:0.0497,scaleY:0.0497,rotation:1.8882,x:520.9,y:309},0).wait(1).to({scaleX:0.0496,scaleY:0.0496,rotation:1.9238,x:520.95,y:308.95},0).wait(1).to({rotation:1.9598,x:520.9,y:308.9},0).wait(1).to({scaleX:0.0495,scaleY:0.0495,rotation:1.996,x:520.95,y:308.85},0).wait(1).to({rotation:2.0326,x:521,y:308.8},0).wait(1).to({scaleX:0.0494,scaleY:0.0494,rotation:2.0694,x:520.95,y:308.7},0).wait(1).to({rotation:2.1065,x:521,y:308.65},0).wait(1).to({scaleX:0.0493,scaleY:0.0493,rotation:2.144,x:521.05,y:308.6},0).wait(1).to({rotation:2.1817,y:308.55},0).wait(1).to({scaleX:0.0492,scaleY:0.0492,rotation:2.2197,y:308.5},0).wait(1).to({scaleX:0.0491,scaleY:0.0491,rotation:2.258,x:521.1,y:308.45},0).wait(1).to({rotation:2.2967,x:521.15,y:308.4},0).wait(1).to({scaleX:0.049,scaleY:0.049,rotation:2.3356,x:521.2},0).wait(1).to({rotation:2.3749,y:308.35},0).wait(1).to({scaleX:0.0489,scaleY:0.0489,rotation:2.4144,y:308.3},0).wait(1).to({scaleX:0.0488,scaleY:0.0488,rotation:2.4543,x:521.25,y:308.25},0).wait(1).to({rotation:2.4944,y:308.15},0).wait(1).to({scaleX:0.0487,scaleY:0.0487,rotation:2.5348,x:521.3,y:308.1},0).wait(1).to({rotation:2.5756,y:308.05},0).wait(1).to({scaleX:0.0486,scaleY:0.0486,rotation:2.6166,x:521.35,y:308},0).wait(1).to({scaleX:0.0485,scaleY:0.0485,rotation:2.6579,y:307.95},0).wait(1).to({rotation:2.6996,x:521.4,y:307.85},0).wait(1).to({scaleX:0.0484,scaleY:0.0484,rotation:2.7415,x:521.45},0).wait(1).to({scaleX:0.0483,scaleY:0.0483,rotation:2.7838,x:521.5,y:307.75},0).wait(1).to({rotation:2.8263,y:307.7},0).wait(1).to({scaleX:0.0482,scaleY:0.0482,rotation:2.8692,y:307.65},0).wait(1).to({scaleX:0.0481,scaleY:0.0481,rotation:2.9123,y:307.55},0).wait(1).to({rotation:2.9558,x:521.55,y:307.5},0).wait(1).to({scaleX:0.048,scaleY:0.048,rotation:2.9995,x:521.6,y:307.45},0).wait(1).to({scaleX:0.0479,scaleY:0.0479,rotation:3.0436,x:521.65,y:307.4},0).wait(1).to({rotation:3.0879,y:307.35},0).wait(1).to({scaleX:0.0478,scaleY:0.0478,rotation:3.1326,y:307.25},0).wait(1).to({scaleX:0.0477,scaleY:0.0477,rotation:3.1775,x:521.7},0).wait(1).to({rotation:3.2227,x:521.75,y:307.2},0).wait(1).to({scaleX:0.0476,scaleY:0.0476,rotation:3.2683,x:521.8,y:307.15},0).wait(1).to({scaleX:0.0475,scaleY:0.0475,rotation:3.3142,x:521.75,y:307},0).wait(1).to({rotation:3.3603,x:521.8,y:306.95},0).wait(1).to({scaleX:0.0474,scaleY:0.0474,rotation:3.4067,x:521.85,y:306.9},0).wait(1).to({scaleX:0.0473,scaleY:0.0473,rotation:3.4535,x:521.9,y:306.85},0).wait(1).to({scaleX:0.0472,scaleY:0.0472,rotation:3.5005,x:521.95,y:306.8},0).wait(1).to({rotation:3.5479,y:306.7},0).wait(1).to({scaleX:0.0471,scaleY:0.0471,rotation:3.5956,x:522,y:306.65},0).wait(1).to({scaleX:0.047,scaleY:0.047,rotation:3.6435,y:306.55},0).wait(1).to({rotation:3.6918,x:522.05},0).wait(1).to({scaleX:0.0469,scaleY:0.0469,rotation:3.7403,y:306.45},0).wait(1).to({scaleX:0.0468,scaleY:0.0468,rotation:3.7892,y:306.4},0).wait(1).to({scaleX:0.0467,scaleY:0.0467,rotation:3.8383,x:522.1,y:306.35},0).wait(1).to({rotation:3.8878,x:522.15,y:306.3},0).wait(1).to({scaleX:0.0466,scaleY:0.0466,rotation:3.9376,x:522.2,y:306.15},0).wait(1).to({scaleX:0.0465,scaleY:0.0465,rotation:3.9876,y:306.1},0).wait(1).to({scaleX:0.0464,scaleY:0.0464,rotation:4.038,x:522.25,y:306.05},0).wait(1).to({rotation:4.0886,x:522.3,y:306},0).wait(1).to({scaleX:0.0463,scaleY:0.0463,rotation:4.1396,x:522.35,y:305.85},0).wait(1).to({scaleX:0.0462,scaleY:0.0462,rotation:4.1909},0).wait(1).to({scaleX:0.0461,scaleY:0.0461,rotation:4.2424,y:305.8},0).wait(1).to({scaleX:0.046,scaleY:0.046,rotation:4.2943,x:522.4,y:305.75},0).wait(1).to({rotation:4.3464,x:522.45,y:305.6},0).wait(1).to({scaleX:0.0459,scaleY:0.0459,rotation:4.3989,x:522.5,y:305.55},0).wait(1).to({scaleX:0.0458,scaleY:0.0458,rotation:4.4517,y:305.5},0).wait(1).to({scaleX:0.0457,scaleY:0.0457,rotation:4.5047,x:522.55,y:305.45},0).wait(1).to({scaleX:0.0456,scaleY:0.0456,rotation:4.5581,x:522.6,y:305.3},0).wait(1).to({rotation:4.6117,x:522.65,y:305.25},0).wait(1).to({scaleX:0.0455,scaleY:0.0455,rotation:4.6657},0).wait(1).to({scaleX:0.0454,scaleY:0.0454,rotation:4.72,y:305.15},0).wait(1).to({scaleX:0.0453,scaleY:0.0453,rotation:4.7745,x:522.75,y:305.05},0).wait(1).to({scaleX:0.0452,scaleY:0.0452,rotation:4.8294,x:522.8,y:305},0).wait(1).to({scaleX:0.0451,scaleY:0.0451,rotation:4.8846,y:304.9},0).wait(1).to({rotation:4.94,x:522.85,y:304.85},0).wait(1).to({scaleX:0.045,scaleY:0.045,rotation:4.9958,x:522.9,y:304.75},0).wait(1).to({scaleX:0.0449,scaleY:0.0449,rotation:5.0519,x:522.95,y:304.65},0).wait(1).to({scaleX:0.0448,scaleY:0.0448,rotation:5.1082,y:304.6},0).wait(1).to({scaleX:0.0447,scaleY:0.0447,rotation:5.1649,x:523,y:304.5},0).wait(1).to({scaleX:0.0446,scaleY:0.0446,rotation:5.2219,y:304.45},0).wait(1).to({scaleX:0.0445,scaleY:0.0445,rotation:5.2791,x:523.05,y:304.4},0).wait(1).to({rotation:5.3367,y:304.35},0).wait(1).to({scaleX:0.0444,scaleY:0.0444,rotation:5.3946,x:523.15,y:304.2},0).wait(1).to({scaleX:0.0443,scaleY:0.0443,rotation:5.4527,x:523.2,y:304.15},0).wait(1).to({scaleX:0.0442,scaleY:0.0442,rotation:5.5112,x:523.25,y:304.05},0).wait(1).to({scaleX:0.0441,scaleY:0.0441,rotation:5.57,x:520.3,y:298.95},0).wait(1).to({scaleX:0.044,scaleY:0.044,rotation:5.6291,x:518.95,y:301.15},0).wait(1).to({scaleX:0.0439,scaleY:0.0439,rotation:5.6884,x:521.2,y:301.95},0).wait(1).to({scaleX:0.0438,scaleY:0.0438,rotation:5.7481,x:521.15,y:304.35},0).wait(1).to({scaleX:0.0437,scaleY:0.0437,rotation:-24.709,x:520.15,y:305.3},0).wait(1).to({scaleX:0.0436,scaleY:0.0436,rotation:-25.1515,x:522.65,y:308.35},0).wait(1).to({rotation:-25.5963,x:517.6,y:298.65},0).wait(1).to({scaleX:0.0435,scaleY:0.0435,rotation:-26.0435,x:516.8,y:299.2},0).wait(1).to({scaleX:0.0434,scaleY:0.0434,rotation:-26.4926,x:517.25,y:300.8},0).wait(1).to({scaleX:0.0433,scaleY:0.0433,rotation:-26.9441,x:517.65,y:302.4},0).wait(1).to({scaleX:0.0432,scaleY:0.0432,rotation:-27.3976,x:518.05,y:303.95},0).wait(1).to({scaleX:0.0431,scaleY:0.0431,rotation:-27.8535,x:518.5,y:305.55},0).wait(1).to({scaleX:0.043,scaleY:0.043,rotation:-28.3116,x:518.9,y:307.2},0).wait(1).to({scaleX:0.0429,scaleY:0.0429,rotation:-28.7719,x:519.3,y:308.8},0).wait(1).to({scaleX:0.0428,scaleY:0.0428,rotation:-29.2344,x:519.75,y:310.4},0).to({_off:true},1).wait(131));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.makingshake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [4,9,14,19,84,89,94,99,600];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_4 = function() {
		playSound("Blopwav");
	}
	this.frame_9 = function() {
		playSound("Blopwav");
	}
	this.frame_14 = function() {
		playSound("Blopwav");
	}
	this.frame_19 = function() {
		playSound("Blopwav");
	}
	this.frame_84 = function() {
		playSound("Blopwav");
	}
	this.frame_89 = function() {
		playSound("Blopwav");
	}
	this.frame_94 = function() {
		playSound("Blopwav");
	}
	this.frame_99 = function() {
		playSound("Blopwav");
	}
	this.frame_600 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(65).call(this.frame_84).wait(5).call(this.frame_89).wait(5).call(this.frame_94).wait(5).call(this.frame_99).wait(501).call(this.frame_600).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(23).to({scaleX:0.9639,scaleY:0.9639,x:637.9421,y:358.1921},0).wait(1).to({scaleX:0.9278,scaleY:0.9278,x:635.8842,y:356.3842},0).wait(1).to({scaleX:0.8917,scaleY:0.8917,x:633.8263,y:354.5763},0).wait(1).to({scaleX:0.8556,scaleY:0.8556,x:631.7684,y:352.7684},0).wait(1).to({scaleX:0.8195,scaleY:0.8195,x:629.7105,y:350.9605},0).wait(1).to({scaleX:0.7834,scaleY:0.7834,x:627.6526,y:349.1526},0).wait(1).to({scaleX:0.7473,scaleY:0.7473,x:625.5947,y:347.3447},0).wait(1).to({scaleX:0.7112,scaleY:0.7112,x:623.5368,y:345.5368},0).wait(1).to({scaleX:0.684,scaleY:0.684,x:621.479,y:343.729},0).wait(1).to({scaleX:0.6569,scaleY:0.6569,x:619.4211,y:341.9211},0).wait(1).to({scaleX:0.6298,scaleY:0.6298,x:617.3632,y:340.1132},0).wait(1).to({scaleX:0.6027,scaleY:0.6027,x:615.3053,y:338.3053},0).wait(1).to({scaleX:0.5756,scaleY:0.5756,x:613.2474,y:336.4974},0).wait(1).to({scaleX:0.5484,scaleY:0.5484,x:611.1895,y:334.6895},0).wait(1).to({scaleX:0.5213,scaleY:0.5213,x:609.1316,y:332.8816},0).wait(1).to({scaleX:0.4942,scaleY:0.4942,x:607.0737,y:331.0737},0).wait(1).to({scaleX:0.4671,scaleY:0.4671,x:605.0158,y:329.2658},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:602.9579,y:327.4579},0).wait(1).to({scaleX:0.4128,scaleY:0.4128,x:600.9,y:325.65},0).wait(1).to({scaleX:0.4016,scaleY:0.4016,x:595.3115,y:322.6577},0).wait(1).to({scaleX:0.3903,scaleY:0.3903,x:589.7231,y:319.6654},0).wait(1).to({scaleX:0.379,scaleY:0.379,x:584.1346,y:316.6731},0).wait(1).to({scaleX:0.3677,scaleY:0.3677,x:578.5462,y:313.6808},0).wait(1).to({scaleX:0.3564,scaleY:0.3564,x:572.9577,y:310.6885},0).wait(1).to({scaleX:0.3451,scaleY:0.3451,x:567.3692,y:307.6962},0).wait(1).to({scaleX:0.3339,scaleY:0.3339,x:561.7808,y:304.7039},0).wait(1).to({scaleX:0.3226,scaleY:0.3226,x:556.1923,y:301.7115},0).wait(1).to({scaleX:0.3113,scaleY:0.3113,x:550.6039,y:298.7192},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:545.0154,y:295.7269},0).wait(1).to({scaleX:0.2887,scaleY:0.2887,x:539.4269,y:292.7346},0).wait(1).to({scaleX:0.2774,scaleY:0.2774,x:533.8385,y:289.7423},0).wait(1).to({scaleX:0.2662,scaleY:0.2662,x:528.25,y:286.75},0).wait(1).to({scaleX:0.2536,scaleY:0.2536,x:524.8889,y:289.1722},0).wait(1).to({scaleX:0.241,scaleY:0.241,x:521.5278,y:291.5944},0).wait(1).to({scaleX:0.2284,scaleY:0.2284,x:518.1667,y:294.0167},0).wait(1).to({scaleX:0.2159,scaleY:0.2159,x:514.8056,y:296.4389},0).wait(1).to({scaleX:0.2033,scaleY:0.2033,x:511.4444,y:298.8611},0).wait(1).to({scaleX:0.1907,scaleY:0.1907,x:508.0833,y:301.2833},0).wait(1).to({scaleX:0.1781,scaleY:0.1781,x:504.7222,y:303.7056},0).wait(1).to({scaleX:0.1656,scaleY:0.1656,x:501.3611,y:306.1278},0).wait(1).to({scaleX:0.153,scaleY:0.153,x:498,y:308.55},0).wait(181).to({x:498.0246,y:308.5579},0).wait(1).to({scaleX:0.1529,scaleY:0.1529,x:498.0492,y:308.5659},0).wait(1).to({x:498.0738,y:308.5738},0).wait(1).to({x:498.0984,y:308.5818},0).wait(1).to({scaleX:0.1528,scaleY:0.1528,x:498.123,y:308.5897},0).wait(1).to({x:498.1476,y:308.5976},0).wait(1).to({x:498.1722,y:308.6056},0).wait(1).to({x:498.1968,y:308.6135},0).wait(1).to({scaleX:0.1527,scaleY:0.1527,x:498.2214,y:308.6214},0).wait(1).to({x:498.246,y:308.6294},0).wait(1).to({x:498.2706,y:308.6373},0).wait(1).to({x:498.2952,y:308.6452},0).wait(1).to({scaleX:0.1526,scaleY:0.1526,x:498.3198,y:308.6532},0).wait(1).to({x:498.3444,y:308.6611},0).wait(1).to({x:498.3691,y:308.6691},0).wait(1).to({scaleX:0.1525,scaleY:0.1525,x:498.3937,y:308.677},0).wait(1).to({x:498.4183,y:308.6849},0).wait(1).to({x:498.4429,y:308.6929},0).wait(1).to({x:498.4675,y:308.7008},0).wait(1).to({scaleX:0.1524,scaleY:0.1524,x:498.4921,y:308.7087},0).wait(1).to({x:498.5167,y:308.7167},0).wait(1).to({x:498.5413,y:308.7246},0).wait(1).to({x:498.5659,y:308.7325},0).wait(1).to({scaleX:0.1523,scaleY:0.1523,x:498.5905,y:308.7405},0).wait(1).to({x:498.6151,y:308.7484},0).wait(1).to({x:498.6397,y:308.7564},0).wait(1).to({scaleX:0.1522,scaleY:0.1522,x:498.6643,y:308.7643},0).wait(1).to({x:498.6889,y:308.7722},0).wait(1).to({x:498.7135,y:308.7802},0).wait(1).to({x:498.7381,y:308.7881},0).wait(1).to({scaleX:0.1521,scaleY:0.1521,x:498.7627,y:308.796},0).wait(1).to({x:498.7873,y:308.804},0).wait(1).to({x:498.8119,y:308.8119},0).wait(1).to({x:498.8365,y:308.8198},0).wait(1).to({scaleX:0.152,scaleY:0.152,x:498.8611,y:308.8278},0).wait(1).to({x:498.8857,y:308.8357},0).wait(1).to({x:498.9103,y:308.8437},0).wait(1).to({scaleX:0.1519,scaleY:0.1519,x:498.9349,y:308.8516},0).wait(1).to({x:498.9595,y:308.8595},0).wait(1).to({x:498.9841,y:308.8675},0).wait(1).to({x:499.0087,y:308.8754},0).wait(1).to({scaleX:0.1518,scaleY:0.1518,x:499.0333,y:308.8833},0).wait(1).to({x:499.0579,y:308.8913},0).wait(1).to({x:499.0825,y:308.8992},0).wait(1).to({x:499.1071,y:308.9071},0).wait(1).to({scaleX:0.1517,scaleY:0.1517,x:499.1318,y:308.9151},0).wait(1).to({x:499.1564,y:308.923},0).wait(1).to({x:499.181,y:308.931},0).wait(1).to({scaleX:0.1516,scaleY:0.1516,x:499.2056,y:308.9389},0).wait(1).to({x:499.2302,y:308.9468},0).wait(1).to({x:499.2548,y:308.9548},0).wait(1).to({x:499.2794,y:308.9627},0).wait(1).to({scaleX:0.1515,scaleY:0.1515,x:499.304,y:308.9706},0).wait(1).to({x:499.3286,y:308.9786},0).wait(1).to({x:499.3532,y:308.9865},0).wait(1).to({x:499.3778,y:308.9944},0).wait(1).to({scaleX:0.1514,scaleY:0.1514,x:499.4024,y:309.0024},0).wait(1).to({x:499.427,y:309.0103},0).wait(1).to({x:499.4516,y:309.0183},0).wait(1).to({scaleX:0.1513,scaleY:0.1513,x:499.4762,y:309.0262},0).wait(1).to({x:499.5008,y:309.0341},0).wait(1).to({x:499.5254,y:309.0421},0).wait(1).to({x:499.55,y:309.05},0).wait(1).to({scaleX:0.7121,scaleY:0.7121,x:628.1,y:330.9},0).wait(1).to({scaleX:0.7069,scaleY:0.7069,x:626.8926,y:330.7125},0).wait(1).to({scaleX:0.7017,scaleY:0.7017,x:625.6852,y:330.525},0).wait(1).to({scaleX:0.6965,scaleY:0.6965,x:624.4778,y:330.3375},0).wait(1).to({scaleX:0.6913,scaleY:0.6913,x:623.2704,y:330.15},0).wait(1).to({scaleX:0.6861,scaleY:0.6861,x:622.063,y:329.9625},0).wait(1).to({scaleX:0.681,scaleY:0.681,x:620.8556,y:329.775},0).wait(1).to({scaleX:0.6758,scaleY:0.6758,x:619.6482,y:329.5875},0).wait(1).to({scaleX:0.6706,scaleY:0.6706,x:618.4407,y:329.4},0).wait(1).to({scaleX:0.6654,scaleY:0.6654,x:617.2333,y:329.2125},0).wait(1).to({scaleX:0.6602,scaleY:0.6602,x:616.0259,y:329.025},0).wait(1).to({scaleX:0.655,scaleY:0.655,x:614.8185,y:328.8375},0).wait(1).to({scaleX:0.6498,scaleY:0.6498,x:613.6111,y:328.65},0).wait(1).to({scaleX:0.6446,scaleY:0.6446,x:612.4037,y:328.4625},0).wait(1).to({scaleX:0.6394,scaleY:0.6394,x:611.1963,y:328.275},0).wait(1).to({scaleX:0.6343,scaleY:0.6343,x:609.9889,y:328.0875},0).wait(1).to({scaleX:0.6291,scaleY:0.6291,x:608.7815,y:327.9},0).wait(1).to({scaleX:0.6239,scaleY:0.6239,x:607.5741,y:327.7125},0).wait(1).to({scaleX:0.6187,scaleY:0.6187,x:606.3667,y:327.525},0).wait(1).to({scaleX:0.6135,scaleY:0.6135,x:605.1593,y:327.3375},0).wait(1).to({scaleX:0.6083,scaleY:0.6083,x:603.9519,y:327.15},0).wait(1).to({scaleX:0.6031,scaleY:0.6031,x:602.7444,y:326.9625},0).wait(1).to({scaleX:0.5979,scaleY:0.5979,x:601.537,y:326.775},0).wait(1).to({scaleX:0.5927,scaleY:0.5927,x:600.3296,y:326.5875},0).wait(1).to({scaleX:0.5876,scaleY:0.5876,x:599.1222,y:326.4},0).wait(1).to({scaleX:0.5824,scaleY:0.5824,x:597.9148,y:326.2125},0).wait(1).to({scaleX:0.5772,scaleY:0.5772,x:596.7074,y:326.025},0).wait(1).to({scaleX:0.572,scaleY:0.572,x:595.5,y:325.8375},0).wait(1).to({scaleX:0.5668,scaleY:0.5668,x:594.2926,y:325.65},0).wait(1).to({scaleX:0.5616,scaleY:0.5616,x:593.0852,y:325.4625},0).wait(1).to({scaleX:0.5564,scaleY:0.5564,x:591.8778,y:325.275},0).wait(1).to({scaleX:0.5512,scaleY:0.5512,x:590.6704,y:325.0875},0).wait(1).to({scaleX:0.5461,scaleY:0.5461,x:589.463,y:324.9},0).wait(1).to({scaleX:0.5409,scaleY:0.5409,x:588.2556,y:324.7125},0).wait(1).to({scaleX:0.5357,scaleY:0.5357,x:587.0482,y:324.525},0).wait(1).to({scaleX:0.5305,scaleY:0.5305,x:585.8407,y:324.3375},0).wait(1).to({scaleX:0.5253,scaleY:0.5253,x:584.6333,y:324.15},0).wait(1).to({scaleX:0.5201,scaleY:0.5201,x:583.4259,y:323.9625},0).wait(1).to({scaleX:0.5149,scaleY:0.5149,x:582.2185,y:323.775},0).wait(1).to({scaleX:0.5097,scaleY:0.5097,x:581.0111,y:323.5875},0).wait(1).to({scaleX:0.5045,scaleY:0.5045,x:579.8037,y:323.4},0).wait(1).to({scaleX:0.4994,scaleY:0.4994,x:578.5963,y:323.2125},0).wait(1).to({scaleX:0.4942,scaleY:0.4942,x:577.3889,y:323.025},0).wait(1).to({scaleX:0.489,scaleY:0.489,x:576.1815,y:322.8375},0).wait(1).to({scaleX:0.4838,scaleY:0.4838,x:574.9741,y:322.65},0).wait(1).to({scaleX:0.4786,scaleY:0.4786,x:573.7667,y:322.4625},0).wait(1).to({scaleX:0.4734,scaleY:0.4734,x:572.5593,y:322.275},0).wait(1).to({scaleX:0.4682,scaleY:0.4682,x:571.3519,y:322.0875},0).wait(1).to({scaleX:0.463,scaleY:0.463,x:570.1444,y:321.9},0).wait(1).to({scaleX:0.4578,scaleY:0.4578,x:568.937,y:321.7125},0).wait(1).to({scaleX:0.4527,scaleY:0.4527,x:567.7296,y:321.525},0).wait(1).to({scaleX:0.4475,scaleY:0.4475,x:566.5222,y:321.3375},0).wait(1).to({scaleX:0.4423,scaleY:0.4423,x:565.3148,y:321.15},0).wait(1).to({scaleX:0.4371,scaleY:0.4371,x:564.1074,y:320.9625},0).wait(1).to({scaleX:0.4319,scaleY:0.4319,x:562.9,y:320.775},0).wait(1).to({scaleX:0.4267,scaleY:0.4267,x:561.6926,y:320.5875},0).wait(1).to({scaleX:0.4215,scaleY:0.4215,x:560.4852,y:320.4},0).wait(1).to({scaleX:0.4163,scaleY:0.4163,x:559.2778,y:320.2125},0).wait(1).to({scaleX:0.4112,scaleY:0.4112,x:558.0704,y:320.025},0).wait(1).to({scaleX:0.406,scaleY:0.406,x:556.863,y:319.8375},0).wait(1).to({scaleX:0.4008,scaleY:0.4008,x:555.6556,y:319.65},0).wait(1).to({scaleX:0.3956,scaleY:0.3956,x:554.4482,y:319.4625},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,x:553.2407,y:319.275},0).wait(1).to({scaleX:0.3852,scaleY:0.3852,x:552.0333,y:319.0875},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:550.8259,y:318.9},0).wait(1).to({scaleX:0.3748,scaleY:0.3748,x:549.6185,y:318.7125},0).wait(1).to({scaleX:0.3696,scaleY:0.3696,x:548.4111,y:318.525},0).wait(1).to({scaleX:0.3645,scaleY:0.3645,x:547.2037,y:318.3375},0).wait(1).to({scaleX:0.3593,scaleY:0.3593,x:545.9963,y:318.15},0).wait(1).to({scaleX:0.3541,scaleY:0.3541,x:544.7889,y:317.9625},0).wait(1).to({scaleX:0.3489,scaleY:0.3489,x:543.5815,y:317.775},0).wait(1).to({scaleX:0.3437,scaleY:0.3437,x:542.3741,y:317.5875},0).wait(1).to({scaleX:0.3385,scaleY:0.3385,x:541.1667,y:317.4},0).wait(1).to({scaleX:0.3333,scaleY:0.3333,x:539.9593,y:317.2125},0).wait(1).to({scaleX:0.3281,scaleY:0.3281,x:538.7519,y:317.025},0).wait(1).to({scaleX:0.323,scaleY:0.323,x:537.5444,y:316.8375},0).wait(1).to({scaleX:0.3178,scaleY:0.3178,x:536.337,y:316.65},0).wait(1).to({scaleX:0.3126,scaleY:0.3126,x:535.1296,y:316.4625},0).wait(1).to({scaleX:0.3074,scaleY:0.3074,x:533.9222,y:316.275},0).wait(1).to({scaleX:0.3022,scaleY:0.3022,x:532.7148,y:316.0875},0).wait(1).to({scaleX:0.297,scaleY:0.297,x:531.5074,y:315.9},0).wait(1).to({scaleX:0.2918,scaleY:0.2918,x:530.3,y:315.7125},0).wait(1).to({scaleX:0.2866,scaleY:0.2866,x:529.0926,y:315.525},0).wait(1).to({scaleX:0.2814,scaleY:0.2814,x:527.8852,y:315.3375},0).wait(1).to({scaleX:0.2763,scaleY:0.2763,x:526.6778,y:315.15},0).wait(1).to({scaleX:0.2711,scaleY:0.2711,x:525.4704,y:314.9625},0).wait(1).to({scaleX:0.2659,scaleY:0.2659,x:524.263,y:314.775},0).wait(1).to({scaleX:0.2607,scaleY:0.2607,x:523.0556,y:314.5875},0).wait(1).to({scaleX:0.2555,scaleY:0.2555,x:521.8482,y:314.4},0).wait(1).to({scaleX:0.2503,scaleY:0.2503,x:520.6407,y:314.2125},0).wait(1).to({scaleX:0.2451,scaleY:0.2451,x:519.4333,y:314.025},0).wait(1).to({scaleX:0.2399,scaleY:0.2399,x:518.2259,y:313.8375},0).wait(1).to({scaleX:0.2347,scaleY:0.2347,x:517.0185,y:313.65},0).wait(1).to({scaleX:0.2296,scaleY:0.2296,x:515.8111,y:313.4625},0).wait(1).to({scaleX:0.2244,scaleY:0.2244,x:514.6037,y:313.275},0).wait(1).to({scaleX:0.2192,scaleY:0.2192,x:513.3963,y:313.0875},0).wait(1).to({scaleX:0.214,scaleY:0.214,x:512.1889,y:312.9},0).wait(1).to({scaleX:0.2088,scaleY:0.2088,x:510.9815,y:312.7125},0).wait(1).to({scaleX:0.2036,scaleY:0.2036,x:509.7741,y:312.525},0).wait(1).to({scaleX:0.1984,scaleY:0.1984,x:508.5667,y:312.3375},0).wait(1).to({scaleX:0.1932,scaleY:0.1932,x:507.3593,y:312.15},0).wait(1).to({scaleX:0.1881,scaleY:0.1881,x:506.1519,y:311.9625},0).wait(1).to({scaleX:0.1829,scaleY:0.1829,x:504.9444,y:311.775},0).wait(1).to({scaleX:0.1777,scaleY:0.1777,x:503.737,y:311.5875},0).wait(1).to({scaleX:0.1725,scaleY:0.1725,x:502.5296,y:311.4},0).wait(1).to({scaleX:0.1673,scaleY:0.1673,x:501.3222,y:311.2125},0).wait(1).to({scaleX:0.1621,scaleY:0.1621,x:500.1148,y:311.025},0).wait(1).to({scaleX:0.1569,scaleY:0.1569,x:498.9074,y:310.8375},0).wait(1).to({scaleX:0.1517,scaleY:0.1517,x:497.7,y:310.65},0).wait(127).to({_off:true},1).wait(58));

	// tadam_obj_
	this.tadam = new lib.Scene_1_tadam();
	this.tadam.name = "tadam";
	this.tadam.depth = 0;
	this.tadam.isAttachedToCamera = 0
	this.tadam.isAttachedToMask = 0
	this.tadam.layerDepth = 0
	this.tadam.layerIndex = 0
	this.tadam.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tadam).wait(533).to({regX:400.7,regY:256.1,scaleX:6.5912,scaleY:6.5912,x:0.3,y:0.35},0).wait(1).to({regX:500.8,regY:315.5,scaleX:1,scaleY:1,x:100.15,y:59.5},0).wait(4).to({regX:400.7,regY:256.1,scaleX:6.5912,scaleY:6.5912,x:0.35,y:0.35},0).wait(1).to({regX:500.8,regY:315.5,scaleX:1,scaleY:1,x:100.15,y:59.5},0).wait(3).to({regX:400.7,regY:256.1,scaleX:6.5912,scaleY:6.5912,x:0.35,y:0.35},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).wait(58));

	// shake_cup_obj_
	this.shake_cup = new lib.Scene_1_shake_cup();
	this.shake_cup.name = "shake_cup";
	this.shake_cup.depth = 0;
	this.shake_cup.isAttachedToCamera = 0
	this.shake_cup.isAttachedToMask = 0
	this.shake_cup.layerDepth = 0
	this.shake_cup.layerIndex = 1
	this.shake_cup.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shake_cup).wait(414).to({regX:398.6,regY:254.4,scaleX:6.3726,scaleY:6.3726,x:0.3,y:0.05},0).to({_off:true},129).wait(58));

	// ent_title_obj_
	this.ent_title = new lib.Scene_1_ent_title();
	this.ent_title.name = "ent_title";
	this.ent_title.depth = 0;
	this.ent_title.isAttachedToCamera = 0
	this.ent_title.isAttachedToMask = 0
	this.ent_title.layerDepth = 0
	this.ent_title.layerIndex = 2
	this.ent_title.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ent_title).wait(307).to({regX:172.4,regY:74.6,scaleX:1.4043,scaleY:1.4043},0).wait(107).to({regX:398.6,regY:254.4,scaleX:6.3726,scaleY:6.3726,x:0.3,y:0.05},0).wait(2).to({regX:400.7,regY:256.1,scaleX:6.5912,scaleY:6.5912,x:0.35,y:0.35},0).to({_off:true},127).wait(58));

	// blander_bottum_obj_
	this.blander_bottum = new lib.Scene_1_blander_bottum();
	this.blander_bottum.name = "blander_bottum";
	this.blander_bottum.depth = 0;
	this.blander_bottum.isAttachedToCamera = 0
	this.blander_bottum.isAttachedToMask = 0
	this.blander_bottum.layerDepth = 0
	this.blander_bottum.layerIndex = 3
	this.blander_bottum.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blander_bottum).wait(29).to({regX:147.4,regY:78.4,scaleX:1.3382,scaleY:1.3382,y:0.05},0).wait(1).to({regX:523.8,regY:332.8,scaleX:1,scaleY:1,x:376.45,y:254.5},0).wait(231).to({regX:400.9,regY:253.8,scaleX:6.5582,scaleY:6.5582,x:0,y:-0.3},0).wait(46).to({regX:172.4,regY:74.6,scaleX:1.4043,scaleY:1.4043,y:0},0).wait(107).to({regX:398.6,regY:254.4,scaleX:6.3726,scaleY:6.3726,x:0.3,y:0.05},0).wait(1).to({regX:523.8,regY:332.8,scaleX:1,scaleY:1,x:125.3,y:78.45},0).wait(127).to({_off:true},1).wait(58));

	// blander2_obj_
	this.blander2 = new lib.Scene_1_blander2();
	this.blander2.name = "blander2";
	this.blander2.depth = 0;
	this.blander2.isAttachedToCamera = 0
	this.blander2.isAttachedToMask = 0
	this.blander2.layerDepth = 0
	this.blander2.layerIndex = 4
	this.blander2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blander2).wait(414).to({regX:398.6,regY:254.4,scaleX:6.3726,scaleY:6.3726,x:0.3,y:0.05},0).wait(1).to({regX:516.7,regY:314.8,scaleX:1,scaleY:1,x:118.2,y:60.45},0).wait(127).to({_off:true},1).wait(58));

	// blander_obj_
	this.blander = new lib.Scene_1_blander();
	this.blander.name = "blander";
	this.blander.depth = 0;
	this.blander.isAttachedToCamera = 0
	this.blander.isAttachedToMask = 0
	this.blander.layerDepth = 0
	this.blander.layerIndex = 5
	this.blander.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blander).wait(29).to({regX:147.4,regY:78.4,scaleX:1.3382,scaleY:1.3382,y:0.05},0).wait(230).to({regX:400.8,regY:253.8,scaleX:6.5556,scaleY:6.5556,y:0},0).wait(48).to({regX:172.4,regY:74.6,scaleX:1.4043,scaleY:1.4043},0).to({_off:true},236).wait(58));

	// straw_obj_
	this.straw = new lib.Scene_1_straw();
	this.straw.name = "straw";
	this.straw.depth = 0;
	this.straw.isAttachedToCamera = 0
	this.straw.isAttachedToMask = 0
	this.straw.layerDepth = 0
	this.straw.layerIndex = 6
	this.straw.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.straw).wait(488).to({regX:400.7,regY:256.1,scaleX:6.5912,scaleY:6.5912,x:0.35,y:0.35},0).wait(1).to({regX:428.4,regY:278.7,scaleX:1,scaleY:1,x:27.75,y:22.7},0).wait(53).to({_off:true},1).wait(58));

	// juice2__obj_
	this.juice2_ = new lib.Scene_1_juice2_();
	this.juice2_.name = "juice2_";
	this.juice2_.depth = 0;
	this.juice2_.isAttachedToCamera = 0
	this.juice2_.isAttachedToMask = 0
	this.juice2_.layerDepth = 0
	this.juice2_.layerIndex = 7
	this.juice2_.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.juice2_).wait(414).to({regX:398.6,regY:254.4,scaleX:6.3726,scaleY:6.3726,x:0.3,y:0.05},0).wait(1).to({regX:400.7,regY:256.1,scaleX:6.5912,scaleY:6.5912,x:0.35,y:0.35},0).wait(128).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).to({_off:true},39).wait(19));

	// juice_obj_
	this.juice = new lib.Scene_1_juice();
	this.juice.name = "juice";
	this.juice.depth = 0;
	this.juice.isAttachedToCamera = 0
	this.juice.isAttachedToMask = 0
	this.juice.layerDepth = 0
	this.juice.layerIndex = 8
	this.juice.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.juice).wait(278).to({regX:401.7,regY:254.2,scaleX:6.5779,scaleY:6.5779,x:0.35,y:0.35},0).wait(1).to({scaleX:6.5793,scaleY:6.5793},0).wait(28).to({regX:172.4,regY:74.6,scaleX:1.4043,scaleY:1.4043,x:0,y:0},0).wait(1).to({regX:174.5,regY:76.2,scaleX:1.4147,scaleY:1.4147,y:-0.1},0).wait(104).to({regX:394.3,regY:251.1,scaleX:5.9774,scaleY:5.9774,x:0.05,y:0.3},0).to({_off:true},131).wait(58));

	// apple_obj_
	this.apple = new lib.Scene_1_apple();
	this.apple.name = "apple";
	this.apple.depth = 0;
	this.apple.isAttachedToCamera = 0
	this.apple.isAttachedToMask = 0
	this.apple.layerDepth = 0
	this.apple.layerIndex = 9
	this.apple.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.apple).wait(29).to({regX:147.4,regY:78.4,scaleX:1.3382,scaleY:1.3382,y:0.05},0).wait(55).to({regX:400.1,regY:253.5,scaleX:6.5366,scaleY:6.5366,x:0.05},0).wait(22).to({regX:292.2,regY:442.4,scaleX:1,scaleY:1,x:-107.85,y:188.95},0).wait(173).to({regX:401.7,regY:254.2,scaleX:6.5793,scaleY:6.5793,x:0.35,y:0.35},0).wait(26).to({regX:402.8,regY:254.6,scaleX:6.6104,scaleY:6.6104,y:0},0).wait(1).to({regY:254.7,scaleX:6.6118,scaleY:6.6118,x:0,y:0.35},0).to({_off:true},104).wait(191));

	// banana_obj_
	this.banana = new lib.Scene_1_banana();
	this.banana.name = "banana";
	this.banana.depth = 0;
	this.banana.isAttachedToCamera = 0
	this.banana.isAttachedToMask = 0
	this.banana.layerDepth = 0
	this.banana.layerIndex = 10
	this.banana.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.banana).wait(29).to({regX:147.4,regY:78.4,scaleX:1.3382,scaleY:1.3382,y:0.05},0).wait(28).to({regX:372.1,regY:211.8,scaleX:4.3778,scaleY:4.3778,x:0.25,y:-0.2},0).wait(32).to({regX:400.1,regY:253.5,scaleX:6.5366,scaleY:6.5366,x:0.05,y:0.05},0).wait(57).to({regX:602.9,regY:456.9,scaleX:1,scaleY:1,x:202.85,y:203.45},0).wait(133).to({regX:401.7,regY:254.2,scaleX:6.5793,scaleY:6.5793,x:0.35,y:0.35},0).wait(27).to({regX:402.8,regY:254.7,scaleX:6.6118,scaleY:6.6118,x:0},0).to({_off:true},104).wait(191));

	// pear_obj_
	this.pear = new lib.Scene_1_pear();
	this.pear.name = "pear";
	this.pear.depth = 0;
	this.pear.isAttachedToCamera = 0
	this.pear.isAttachedToMask = 0
	this.pear.layerDepth = 0
	this.pear.layerIndex = 11
	this.pear.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pear).wait(29).to({regX:147.4,regY:78.4,scaleX:1.3382,scaleY:1.3382,y:0.05},0).wait(28).to({regX:372.1,regY:211.8,scaleX:4.3778,scaleY:4.3778,x:0.25,y:-0.2},0).wait(37).to({regX:400.1,regY:253.5,scaleX:6.5366,scaleY:6.5366,x:0.05,y:0.05},0).wait(77).to({regX:824,regY:469.3,scaleX:1,scaleY:1,x:423.95,y:215.85},0).wait(108).to({regX:401.7,regY:254.2,scaleX:6.5793,scaleY:6.5793,x:0.35,y:0.35},0).wait(27).to({regX:402.8,regY:254.7,scaleX:6.6118,scaleY:6.6118,x:0},0).to({_off:true},108).wait(187));

	// strawberry_obj_
	this.strawberry = new lib.Scene_1_strawberry();
	this.strawberry.name = "strawberry";
	this.strawberry.depth = 0;
	this.strawberry.isAttachedToCamera = 0
	this.strawberry.isAttachedToMask = 0
	this.strawberry.layerDepth = 0
	this.strawberry.layerIndex = 12
	this.strawberry.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.strawberry).wait(29).to({regX:147.4,regY:78.4,scaleX:1.3382,scaleY:1.3382,y:0.05},0).wait(28).to({regX:372.1,regY:211.8,scaleX:4.3778,scaleY:4.3778,x:0.25,y:-0.2},0).wait(42).to({regX:400.1,regY:253.5,scaleX:6.5366,scaleY:6.5366,x:0.05,y:0.05},0).wait(102).to({regX:793,regY:206.4,scaleX:1,scaleY:1,x:392.95,y:-47.05},0).wait(78).to({regX:401.7,regY:254.2,scaleX:6.5793,scaleY:6.5793,x:0.35,y:0.35},0).wait(26).to({regX:402.8,regY:254.6,scaleX:6.6104,scaleY:6.6104,y:0},0).wait(1).to({regY:254.7,scaleX:6.6118,scaleY:6.6118,x:0,y:0.35},0).to({_off:true},105).wait(190));

	// title_obj_
	this.title = new lib.Scene_1_title();
	this.title.name = "title";
	this.title.setTransform(640.1,277.2,1,1,0,0,0,640.1,277.2);
	this.title.depth = 0;
	this.title.isAttachedToCamera = 0
	this.title.isAttachedToMask = 0
	this.title.layerDepth = 0
	this.title.layerIndex = 13
	this.title.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.title).wait(29).to({regX:625.7,regY:285.5,scaleX:1.3382,scaleY:1.3382},0).wait(15).to({regX:584.2,regY:285.4,scaleX:2.6386,scaleY:2.6386,x:640.05,y:277.35},0).wait(36).to({regX:498,regY:295.9,scaleX:6.5366,scaleY:6.5366,x:639.95,y:277.2},0).to({_off:true},317).wait(204));

	// blander_top_obj_
	this.blander_top = new lib.Scene_1_blander_top();
	this.blander_top.name = "blander_top";
	this.blander_top.depth = 0;
	this.blander_top.isAttachedToCamera = 0
	this.blander_top.isAttachedToMask = 0
	this.blander_top.layerDepth = 0
	this.blander_top.layerIndex = 14
	this.blander_top.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blander_top).wait(29).to({regX:147.4,regY:78.4,scaleX:1.3382,scaleY:1.3382,y:0.05},0).wait(1).to({regX:543.7,regY:319.5,scaleX:1,scaleY:1,x:396.35,y:241.2},0).wait(277).to({regX:172.4,regY:74.6,scaleX:1.4043,scaleY:1.4043,x:0,y:0},0).wait(1).to({regX:174.5,regY:76.2,scaleX:1.4147,scaleY:1.4147,y:-0.1},0).wait(1).to({regX:176.6,regY:77.9,scaleX:1.4251,scaleY:1.4251,x:-0.05,y:-0.05},0).wait(1).to({regX:178.7,regY:79.7,scaleX:1.4357,scaleY:1.4357,y:0.1},0).wait(2).to({regX:183,regY:83,scaleX:1.4574,scaleY:1.4574,x:0,y:0},0).to({_off:true},231).wait(58));

	// green_obj_
	this.green = new lib.Scene_1_green();
	this.green.name = "green";
	this.green.depth = 0;
	this.green.isAttachedToCamera = 0
	this.green.isAttachedToMask = 0
	this.green.layerDepth = 0
	this.green.layerIndex = 15
	this.green.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.green).wait(414).to({regX:398.6,regY:254.4,scaleX:6.3726,scaleY:6.3726,x:0.3,y:0.05},0).wait(70).to({regX:400.7,regY:256.1,scaleX:6.5912,scaleY:6.5912,x:0.35,y:0.35},0).to({_off:true},59).wait(58));

	// kitchen_copy_obj_
	this.kitchen_copy = new lib.Scene_1_kitchen_copy();
	this.kitchen_copy.name = "kitchen_copy";
	this.kitchen_copy.depth = 0;
	this.kitchen_copy.isAttachedToCamera = 0
	this.kitchen_copy.isAttachedToMask = 0
	this.kitchen_copy.layerDepth = 0
	this.kitchen_copy.layerIndex = 16
	this.kitchen_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.kitchen_copy).wait(307).to({regX:172.4,regY:74.6,scaleX:1.4043,scaleY:1.4043},0).wait(1).to({regX:174.5,regY:76.2,scaleX:1.4147,scaleY:1.4147,y:-0.1},0).wait(106).to({regX:398.6,regY:254.4,scaleX:6.3726,scaleY:6.3726,x:0.3,y:0.05},0).to({_off:true},129).wait(58));

	// kitchen_obj_
	this.kitchen = new lib.Scene_1_kitchen();
	this.kitchen.name = "kitchen";
	this.kitchen.depth = 0;
	this.kitchen.isAttachedToCamera = 0
	this.kitchen.isAttachedToMask = 0
	this.kitchen.layerDepth = 0
	this.kitchen.layerIndex = 17
	this.kitchen.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.kitchen).wait(29).to({regX:147.4,regY:78.4,scaleX:1.3382,scaleY:1.3382,y:0.05},0).wait(40).to({regX:400.1,regY:253.5,scaleX:6.5366,scaleY:6.5366,x:0.05},0).wait(238).to({regX:172.4,regY:74.6,scaleX:1.4043,scaleY:1.4043,x:0,y:0},0).wait(106).to({regX:396.4,regY:252.7,scaleX:6.1687,scaleY:6.1687},0).to({_off:true},26).wait(162));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1281,721);
// library properties:
lib.properties = {
	id: 'F399DA425C3B4791BDD88B72BFF45F56',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_7.png?1598115318559", id:"CachedBmp_7"},
		{src:"images/CachedBmp_5.png?1598115318559", id:"CachedBmp_5"},
		{src:"images/making shake_atlas_1.png?1598115318004", id:"making shake_atlas_1"},
		{src:"sounds/Blopwav.mp3?1598115318559", id:"Blopwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F399DA425C3B4791BDD88B72BFF45F56'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;