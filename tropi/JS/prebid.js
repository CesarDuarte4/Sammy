!(function(d)
	{
		var s=window.pbjsChunk;window.pbjsChunk=function(e,t,n)
		{
			for(var r,i,o,a=0,u=[];a<e.length;a++)
			i=e[a],c[i]&&u.push(c[i][0]),c[i]=0;
			for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(d[r]=t[r]);
			for(s&&s(e,t,n);u.length;)
			u.shift()();if(n)for(a=0;a<n.length;a++)o=f(f.s=n[a]);
		return o
		}

		;var n={},c={151:0};
		function f(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}
	}

	;return d[e].call(t.exports,t,t.exports,f),
	t.l=!0,t.exports}f.m=d,f.c=n,f.d=function(e,t,n)
	{
		f.o(e,t)||Object.defineProperty
		(e,t,{configurable:!1,enumerable:!0,get:n})
	}

	,f.n=function(e)
	{
		var t=e&&e.__esModule?function(){return e.default}:
		function(){return e};
		return f.d(t,"a",t),t
	}
	,f.o=function(e,t)
		{return Object.prototype.hasOwnProperty.call(e,t)}
		,f.p="",f.oe=function(e){throw console.error(e),e},
		f(f.s=514)})({0:function(e,a,t)
			{
				"use strict";Object.defineProperty(a,"__esModule",{value:!0})
				,a.getLatestHighestCpmBid=a.getOldestHighestCpmBid=a.getHighestCpm=void 0;
				var r=Object.assign||function(e)
				{for(var t=1;t<arguments.length;t++)
					{var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call
					(n,r)&&(e[r]=n[r])}return e},
					u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}
					:function(e)
					{
						return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":
						typeof e
					}
				;
				a.getAdUnitSizes=function(e)
				{
					if(!e)return;var t=[];if(e.mediaTypes&&e.mediaTypes.banner&&Array.isArray(e.mediaTypes.banner.sizes))
					var n=e.mediaTypes.banner.sizes;Array.isArray(n[0])?t=n:t.push(n)
				}
					else Array.isArray(e.sizes)&&(Array.isArray(e.sizes[0])?t=e.sizes:t.push(e.sizes));
					return t
			}
			,a.parseSizesInput=function(e){var t=[];if("string"==typeof e)
			{var n=e.split(","),r=/^(\d)+x(\d)+$/i;if(n)for(var i in n)T(n,i)&&n[i].match(r)&&t.push(n[i])}
			else if("object"===(void 0===e?"undefined":u(e))){var o=e.length;if(0<o)
				if(2===o&&"number"==typeof e[0]&&"number"==typeof e[1])t.push(h(e));
				else for(var a=0;a<o;a++)t.push(h(e[a]))}return t}
				,a.parseGPTSingleSizeArray=h,a.uniques=I,a.flatten=_,a.getBidRequest=function(n,e)
				{
					var r=void 0;return e.some((function(e){var t=(0,o.default)(e.bids,(function(t)
					{return["bidId","adId","bid_id"].some((function(e){return t[e]===n}))}));
					return t&&(r=t),t
				}
				)),r},a.getKeys=w,a.getValue=C,a.getBidderCodes=function()
					{
						return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:pbjs.adUnits)
						.map((function(e)
						{return e.bids.map((function(e){return e.bidder}))
						.reduce(_,[])})).reduce(_).filter(I)
					}
				,a.isGptPubadsDefined=function(){if(window.googletag&&a.isFn(window.googletag.pubads)
					&&a.isFn(window.googletag.pubads().getSlots))return!0},a.shuffle=function(e)
				{
					var t=e.length;for(;0<t;){var n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e
				}
				,a.adUnitsFilter=function(e,t){return(0,d.default)(e,t&&t.adUnitCode)},
				a.isSrcdocSupported=function(e){return e.defaultView&&e.defaultView.frameElement&&"srcdoc"in
				 e.defaultView.frameElement&&!/firefox/i.test(navigator.userAgent)},a.deepClone=function(e)
				 {return(0,i.default)(e)},a.inIframe=function(){try{return a.getWindowSelf()!==a.getWindowTop()}
				 catch(e){return!0}},a.isSafariBrowser=function(){return/^((?!chrome|android).)*safari/i.test
				 	(navigator.userAgent)},a.replaceAuctionPrice=function(e,t){if(!e)return;return e.replace
				 		(/\$\{AUCTION_PRICE\}/g,t)},a.timestamp=function(){return(new Date).getTime()}
				 		,a.checkCookieSupport=function(){if(window.navigator.cookieEnabled||document.cookie.length)
				 		return!0},a.cookiesAreEnabled=function(){if(a.checkCookieSupport())
				 		return!0;return window.document.cookie="prebid.cookieTest",-1!=window.document.cookie.indexOf
				 		("prebid.cookieTest")},a.delayExecution=function(e,t){if(t<1)throw new Error
				 		("numRequiredCalls must be a positive number. Got "+t);var n=0;return function()
				 			{++n===t&&e.apply(null,arguments)}},a.groupBy=function(e,n)
				 		{return e.reduce((function(e,t){return(e[t[n]]=e[t[n]]||[]).push(t),e}),{})},

				 a.deepAccess=function(e,t){if(!e)return;t=String(t).split(".");
				 for(var n=0;n<t.length;n++)if(void 0===(e=e[t[n]]))return;return e},
				 	a.createContentToExecuteExtScriptInFriendlyFrame=function(e){if(!e)return"";
				 return'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
				 <html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--
				 \x3e<script src="'+e+'"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>'}
				 ,a.getDefinedParams=function(n,e){return e.filter((function(e){return n[e]}))
				 .reduce((function(e,t){return r(e,(function(e,t,n){t in e?Object.defineProperty
				 (e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e})({},t,n[t]))}),{})}
				 ,a.isValidMediaTypes=function(e){var t=["banner","native","video"];if(!Object.keys(e)
				 .every((function(e){return(0,d.default)(t,e)})))return!1;if(e.video&&e.video.context)
				 return(0,d.default)(["instream","outstream"],e.video.context);
				 return!0},a.getBidderRequest=function(e,t,n)
			{return(0,o.default)(e,(function(e){return 0<e.bids.filter((function(e)
				{return e.bidder===t&&e.adUnitCode===n})).length}))||{start:null,auctionId:null}},
				a.getUserConfiguredParams=function(e,t,n){return e.filter((function(e){return e.code===t}))
		.map((function(e){return e.bids})).reduce(_,[]).filter((function(e){return e.bidder===n}))

		.map((function(e){return e.params||{}}))},a.getOrigin=function()
			{return window.location.origin?window.location.origin:window.location.protocol+
			"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")},

a.getDNT=function(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||
"yes"===navigator.doNotTrack},

a.isAdUnitCodeMatchingSlot=function(t){return function(e){return B(t,e)}},
a.isSlotMatchingAdUnitCode=function(t){return function(e)
	{return B(e,t)}},a.unsupportedBidderMessage=function(e,t)
	{var n=Object.keys(e.mediaTypes||{banner:"banner"}).join(", ");
	return"\n    "+e.code+" is a "+n+" ad unit\n    containing bidders that don't support "+n+": "+t+".
	\n    This bidder won't fetch demand.\n  "},a.deletePropertyFromObject=function(e,t){var n=r({},e);
	return delete n[t],n},a.removeRequestId=function(e){return a.deletePropertyFromObject(e,"requestId")},
a.isInteger=function(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&isFinite(e)&&Math
.floor(e)===e},a.convertCamelToUnderscore=function(e){return e.replace(/(?:^|\.?)([A-Z])/g,(function(e,t)
	{return"_"+t.toLowerCase()})).replace(/^_/,"")},a.transformBidderParamKeywords=function(e)
{var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"keywords",i=[];return a._each
(e,(function(e,t){if(a.isArray(e)){var n=[];a._each(e,(function(e){(e=a.getValueString(r+"."+t,e))
	&&n.push(e)})),e=n}else{if(e=a.getValueString(r+"."+t,e),!a.isStr(e))return;e=[e]}i
.push({key:t,value:e})})),i};var n=t(3),i=c(t(64)),o=c(t(10)),d=c(t(6)),s=t(11);
function c(e){return e&&e.__esModule?e:{default:e}}var f=t(4),l=!1,g=Object.prototype.toString,
p=null,v=null;try{p=console.info.bind(window.console),v=console.warn.bind(window.console)}
catch(e){}a.replaceTokenInString=function(i,e,o){return a._each(e,(function(e,t){e=void 0===e?"":e;
	var n=o+t.toUpperCase()+o,r=new RegExp(n,"g");i=i.replace(r,e)})),i};var y,m=(y=0,function()
{return++y});function b(){return m()+Math.random().toString(16).substr(2)}function h(e)
	{if(a.isArray(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1]))return e[0]+"x"+e[1]}function S()
			{return window.console&&window.console.log}a.getUniqueIdentifierStr=b,a.generateUUID=function e(t)
			{return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},
a.getBidIdParameter=function(e,t){return t&&t[e]?t[e]:""},a.tryAppendQueryString=function(e,t,n)
{return n?e+(t+"=")+encodeURIComponent(n)+"&":e},a.parseQueryStringParameters=function(e)
{var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t}
,a.transformAdServerTargetingObj=function(t){return t&&0<Object.getOwnPropertyNames(t).length?w(t)
	.map((function(e){return e+"="+encodeURIComponent(C(t,e))})).join("&"):""},
	a.getTopWindowLocation=function(){if(a.inIframe()){var e=void 0;try{e=a.getAncestorOrigins()||
		a.getTopFrameReferrer()}catch(e){logInfo("could not obtain top window location",e)}if(e)
		return(0,s.parse)(e,{decodeSearchAsString:!0})}return a.getWindowLocation()},a.getTopFrameReferrer=
		function(){try{window.top.location.toString();for(var e="",t=void 0;(t=t?t.parent:window)

.document&&t.document.referrer&&(e=t.document.referrer),t!==window.top;);return e}catch(e)
		{return window.document.referrer}},a.getAncestorOrigins=function()
		{
			if(window.document.location&&window.document.location.ancestorOrigins&&1
				<=window.document.location.ancestorOrigins.length)return window.document.location.ancestorOrigins
				[window.document.location.ancestorOrigins.length-1]
		}

,a.getWindowTop=function(){return window.top},a.getWindowSelf=function(){return window.self},
a.getWindowLocation=function(){return window.location},a.getTopWindowUrl=function(){var t=void 0;try
	{t=a.getTopWindowLocation().href}catch(e){t=""}return t},a.getTopWindowReferrer=function()
	{
		try{return window.top.document.referrer}catch(e){return document.referrer}},a.logWarn=function(e,t){E()
		&&console.warn&&v&&(t&&0!==t.length||(t=""),v("WARNING: "+e+(""===t?"":" : params : "),t))
	}

,a.logInfo=function(e,t){E()&&S()&&p&&(t&&0!==t.length||(t=""),p("INFO: "+e+(""===t?"":" : params : "),t))}
,a.logMessage=function(e){E()&&S()&&console.log("MESSAGE: "+e)},a.hasConsoleLogger=S;var E=function()
{if(!1===n.config.getConfig("debug")&&!1===l){var e="TRUE"===A(f.DEBUG_MODE).toUpperCase();

n.config.setConfig({debug:e}),l=!0}return!!n.config.getConfig("debug")};a.debugTurnedOn=E,a.logError=function()
{E()&&window.console&&window.console.error&&console.error.apply(console,arguments)}
,a.createInvisibleIframe=function(){var e=document.createElement("iframe");return e.id=b(),
e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",
e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e};

var A=function(e){var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":
decodeURIComponent(t[1].replace(/\+/g," "))};

a.getParameterByName=A,a.hasValidBidRequest=function(e,n,t){var r=!1;function i(e,t)
	{t===n[o]&&(r=!0)}for(var o=0;o<n.length;o++)if(r=!1,a._each(e,i),!r)return a.logError
	("Params are missing for bid request. One of these required paramaters are missing: "+n,t),
	!1;return!0},a.addEventHandler=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!0)
		:e.attachEvent&&e.attachEvent("on"+t,n)},a.isA=function(e,t){return g.call(e)==="[object "+t+"]"}
		,a.isFn=function(e){return a.isA(e,"Function")},a.isStr=function(e){return a.isA(e,"String")}
		,a.isArray=function(e){return a.isA(e,"Array")},a.isNumber=function(e){return a.isA(e,"Number")}
		,a.isPlainObject=function(e){return a.isA(e,"Object")},a.isBoolean=function(e){return a.isA(e,"Boolean")},
		a.isEmpty=function(e){if(!e)return!0;if(a.isArray(e)||a.isStr(e))return!(0<e.length);for(var t in e)
			if(hasOwnProperty.call(e,t))return!1;return!0},a.isEmptyStr=function(e){return a.isStr(e)&&(!e||0===e.length)}
			a._each=function(e,t){if(!a.isEmpty(e)){if(a.isFn(e.forEach))return e.forEach(t,this);var n=0,r=e.length;

	if(0<r)for(;n<r;n++)t(e[n],n,e);else for(n in e)hasOwnProperty.call(e,n)&&t.call(this,e[n],n)}},
	a.contains=function(e,t){if(a.isEmpty(e))return!1;if(a.isFn(e.indexOf))return-1!==e.indexOf(t);

	for(var n=e.length;n--;)if(e[n]===t)return!0;return!1},a.indexOf=(function()
		{if(Array.prototype.indexOf)return Array.prototype.indexOf})(),a._map=function(n,r)
		{if(a.isEmpty(n))return[];if(a.isFn(n.map))return n.map(r);var i=[];return a._each(n,(function(e,t)
			{i.push(r(e,t,n))})),i};var T=function(e,t){return e.hasOwnProperty?e.hasOwnProperty(t):
			void 0!==e[t]&&e.constructor.prototype[t]!==e[t]};function I(e,t,n){return n.indexOf(e)===t}
			function _(e,t){return e.concat(t)}function w(e){return Object.keys(e)}function C(e,t){return e[t]}
			a.insertElement=function(e,t,n){t=t||document;var r=void 0;r=n?t.getElementsByTagName(n):
			t.getElementsByTagName("head");try{(r=r.length?r:t.getElementsByTagName("body")).length&&(r=r[0])
			.insertBefore(e,r.firstChild)}catch(e){}},a.triggerPixel=function(e){(new Image).src=e},
			a.callBurl=function(e){var t=e.source,n=e.burl;t===f.S2S.SRC&&n&&a.triggerPixel(n)},
			a.insertHtmlIntoIframe=function(e){if(e){var t=document.createElement("iframe");

t.id=a.getUniqueIdentifierStr(),t.width=0,t.height=0,t.hspace="0",t.vspace="0",t.marginWidth="0",
t.marginHeight="0",t.style.display="none",t.style.height="0px",t.style.width="0px",t.scrolling="no",
t.frameBorder="0",t.allowtransparency="true",a.insertElement(t,document,"body")
,t.contentWindow.document.open(),t.contentWindow.document.write(e),t.contentWindow.document.close()}}
,a.insertUserSyncIframe=function(e){var t=a.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin")
,n=document.createElement("div");n.innerHTML=t;var r=n.firstChild;a.insertElement(r)},
a.createTrackPixelHtml=function(e){if(!e)return"";var t='<div style="position:absolute;

left:0px;top:0px;visibility:hidden;">';return t+='<img src="'+encodeURI(e)+'"></div>'},
a.createTrackPixelIframeHtml=function(e){var t=!(1<arguments.length&&void 0!==arguments[1])
	||arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";return e?
	(t&&(e=encodeURI(e)),n&&(n='sandbox="'+n+'"'),"<iframe "+n+' id="'+a.getUniqueIdentifierStr()+
		'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n 
		   width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n    
		    scrolling="no"\n      src="'+e+'">\n    </iframe>'):""},a.getIframeDocument=function(e){if(e)
		    {var t=void 0;try{t=e.contentWindow?e.contentWindow.document:e.contentDocument.document?
		    e.contentDocument.document:e.contentDocument}catch(e){a.logError("Cannot get iframe document",e)}
		    return t}},a.getValueString=function(e,t,n){return null==t?n:a.isStr(t)?t:a.isNumber(t)?
		    	t.toString():void a.logWarn("Unsuported type for param: "+e+" required type: String")};

a.getHighestCpm=O("timeToRespond",(function(e,t){return t<e})),a.getOldestHighestCpmBid=O
("responseTimestamp",(function(e,t){return t<e})),a.getLatestHighestCpmBid=O("responseTimestamp",
(function(e,t){return e<t}));function O(n,r){return function(e,t){return e.cpm===t.cpm?r(e[n],t[n])
	?t:e:e.cpm<t.cpm?t:e}}var B=function(e,t){return e.getAdUnitPath()===t||e.getSlotElementId()===t}},
	1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=function(e,t)
	{if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return(function(e,t)
	{var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&
		(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}
		finally{if(i)throw o}}return n})(e,t);

throw new TypeError("Invalid attempt to destructure non-iterable instance")},
p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e)
{return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},
v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)
	Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};

t.registerBidder=function(t){var n=Array.isArray(t.supportedMediaTypes)?
	{supportedMediaTypes:t.supportedMediaTypes}:void 0;function r(e){var t=l(e);

i.default.registerBidAdapter(t,e.code,n)}r(t),Array.isArray(t.aliases)&&t.aliases.forEach
((function(e){i.default.aliasRegistry[e]=t.code,r(v({},t,{code:e}))}))}
,t.newBidder=l,t.isValid=E;var r=s(n(28)),i=s(n(8)),y=n(3),m=s(n(18)),o=n(14),a=n(17),u=n(66),b=s(n(4)),
h=s(n(9)),d=s(n(6)),S=n(0);function s(e){return e&&e.__esModule?e:{default:e}}var f=["requestId","cpm",
"ttl","creativeId","netRevenue","currency"];

function l(f){return v(new r.default(f.code),{getSpec:function(){return Object.freeze(f)}
,registerSyncs:l,callBids:function(o,a,r,n){if(Array.isArray(o.bids)){var u={},d=[],e=o.bids.filter(g);

if(0!==e.length){var s={};e.forEach((function(e){(s[e.bidId]=e).adUnitCode||(e.adUnitCode=e.placementCode)}));
var t=f.buildRequests(e,o);if(t&&0!==t.length){Array.isArray(t)||(t=[t]);var c=(0,S.delayExecution)
	(i,t.length);t.forEach((function(i){switch(i.method){case"GET":n(""+i.url+(function(e){if(e)return"?"+
	("object"===(void 0===e?"undefined":p(e))?(0,S.parseQueryStringParameters)(e):e);return""})
	(i.data),{success:e,error:t},void 0,v({method:"GET",withCredentials:!0},i.options));break;

case"POST":n(i.url,{success:e,error:t},"string"==typeof i.data?i.data:JSON.stringify(i.data),
v({method:"POST",contentType:"text/plain",withCredentials:!0},i.options));break;default:(0,S.logWarn)
("Skipping invalid request from "+f.code+". Request type "+i.type+" must be GET or POST"),
c()}function e(e,t){try{e=JSON.parse(e)}catch(e){}e={body:e,headers:{get:t.getResponseHeader.bind(t)}},
d.push(e);var n=void 0;try{n=f.interpretResponse(e,i)}catch(e){return(0,S.logError)
	("Bidder "+f.code+" failed to interpret the server's response. Continuing without bids",null,e),
	void c()}function r(e){var t,n,r=s[e.requestId];if(r){var i=v(m.default.createBid(b.default.STATUS.GOOD,r),e);

t=r.adUnitCode,n=i,u[t]=!0,E(t,n,[o])&&a(t,n)}else(0,S.logWarn)("Bidder "+f.code+
" made bid for unknown request ID: "+e.requestId+". Ignoring.")}n&&(n.forEach?n.forEach(r):r(n)),c(n)}
function t(e){(0,S.logError)("Server call for "+f.code+" failed: "+e+". Continuing without bids."),
c()}}))}else i()}else i()}function i(e){var t=(e?e[0]?e:[e]:[]).some((function(e){return"video"===e.mediaType}))
,n=y.config.getConfig("cache.url");t&&n||r(),h.default.emit(b.default.EVENTS.BIDDER_DONE,o),l(d,o.gdprConsent)}}});

function l(e,t){if(f.getUserSyncs){var n=y.config.getConfig("userSync.filterSettings"),
r=f.getUserSyncs({iframeEnabled:!!(y.config.getConfig("userSync.iframeEnabled")||n&&(n.iframe||n.all)),
pixelEnabled:!!(y.config.getConfig("userSync.pixelEnabled")||n&&(n.image||n.all))},e,t);r&&(Array.isArray(r)||
(r=[r]),r.forEach((function(e){o.userSync.registerSync(e.type,f.code,e.url)})))}}function g(e)
{return!!f.isBidRequestValid(e)||((0,S.logWarn)("Invalid bid sent to bidder "+f.code+": 
"+JSON.stringify(e)),!1)}}function E(e,t,n){function r(e){return"Invalid bid from "+t.bidderCode+"
. Ignoring bid: "+e}return e?t?(i=Object.keys(t),f.every((function(e){return(0,d.default)(i,e)}))?
"native"!==t.mediaType||(0,a.nativeBidIsValid)(t,n)?"video"!==t.mediaType||(0,u.isValidVideoBid)
(t,n)?!("banner"===t.mediaType&&!(function(e,t,n){if((t.width||0===t.width)&&(t.height||0===t.height))
	return!0;var r=(0,S.getBidderRequest)(n,t.bidderCode,e),i=r&&r.bids&&r.bids[0]&&r.bids[0]
	.sizes,o=(0,S.parseSizesInput)(i);if(1===o.length){var a=o[0].split("x"),u=c(a,2),d=u[0],s=u[1];
	return t.width=d,t.height=s,!0}return!1})(e,t,n))||((0,S.logError)(r("Banner bids require a width and height"))
	,!1):((0,S.logError)(r("Video bid does not have required vastUrl or renderer property")),!1):((0,S.logError)
	(r("Native bid missing some required properties.")),!1):((0,S.logError)
	(r("Bidder "+t.bidderCode+" is missing required params. 
	Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")),!1)):((0,S.logWarn)
	("Some adapter tried to add an undefined bid for "+e+"."),!1):((0,S.logWarn)
	("No adUnitCode was supplied to addBidResponse."),!1);var i}},10:function(e,t,n)
	{n(44),e.exports=n(13).Array.find},103:function(e,t,n){"use strict";var r=n(15),i=n(34)(6),
	o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(e)
		{return i(this,e,1<arguments.length?arguments[1]:void 0)}}),n(27)(o)},11:function(e,t,n)
		{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t)
		{if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return(function(e,t)
			{var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&
				(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}
				finally{if(i)throw o}}return n})(e,t);throw new TypeError
				("Invalid attempt to destructure non-iterable instance")};

function i(e){return e?e.replace(/^\?/,"").split("&").reduce((function(e,t){var n=t.split("="),r=a(n,2),i=r[0],
o=r[1];return/\[\]$/.test(i)?(e[i=i.replace("[]","")]=e[i]||[],e[i].push(o)):e[i]=o||"",e}),{}):{}}function r(e)
{return Object.keys(e).map((function(t){return Array.isArray(e[t])?e[t].map((function(e){return t+"[]="+e}))
.join("&"):t+"="+e[t]})).join("&")}t.parseQS=i,t.formatQS=r,t.parse=function(e,t){var n=document.createElement
	("a");t&&"noDecodeWholeURL"in t&&t.noDecodeWholeURL?n.href=e:n.href=decodeURIComponent(e);
	var r=t&&"decodeSearchAsString"in t&&t.decodeSearchAsString;return{href:n.href,protocol:(n.protocol||"")
	.replace(/:$/,""),hostname:n.hostname,port:+n.port,pathname:n.pathname.replace(/^(?!\/)/,"/"),search:r?
	n.search:i(n.search||""),hash:(n.hash||"").replace(/^#/,""),host:n.host||window.location.host}},
	t.format=function(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":"+e.port:""))
	+(e.pathname||"")+(e.search?"?"+r(e.search||""):"")+(e.hash?"#"+e.hash:"")}},
	12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})
	,t.Renderer=r;var u=n(22),d=(function(e){{if(e&&e.__esModule)return e;var t={};
		if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);
		return t.default=e,t}})(n(0));function r(e){var t=this,n=e.url,r=e.config,
			i=e.id,o=e.callback,a=e.loaded;this.url=n,this.config=r,this.handlers={},
			this.id=i,this.loaded=a,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():
			t.cmd.push(e):d.logError("Commands given to Renderer.push must be wrapped in a function")},
			this.callback=o||function(){t.loaded=!0,t.process()},(0,u.loadScript)(n,this.callback,!0)}
			r.install=function(e){return new r({url:e.url,config:e.config,id:e.id,
				callback:e.callback,loaded:e.loaded})},r.prototype.getConfig=function()
			{return this.config},r.prototype.setRender=function(e){this.render=e},
			r.prototype.setEventHandlers=function(e){this.handlers=e},r.prototype.handleVideoEvent=function
			(e){var t=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),
			d.logMessage("Prebid Renderer event for id "+t+" type "+n)},r.prototype.process=function()
			{for(;0<this.cmd.length;)try{this.cmd.shift().call()}catch(e)
			{d.logError("Error processing Renderer command: ",e)}}},13:function(e,t)
			{var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},14:function(e,t,n)
			{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.userSync=void 0;var i=function(e,t)
			{if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return(function(e,t)
				{var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)
					&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally
				{
					try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n})(e,t);throw new TypeError
						("Invalid attempt to destructure non-iterable instance")},s=Object.assign||function(e)
					{
						for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)
							Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};

			t.newUserSync=a;var r,c=(function(e){{if(e&&e.__esModule)return e;var 
					t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)
						&&(t[n]=e[n]);return t.default=e,t}})(n(0)),f=n(3),o=n(6),l=(r=o)&&
						r.__esModule?r:{default:r};function a(e){var t={},o={image:[],
				iframe:[]},n=!1,a={},u={image:!1,iframe:!1},d=e.config;function r()
				{if(d.syncEnabled&&e.browserSupportsCookies&&!n){try{!(function(){if(!d.pixelEnabled&&!u.image)
					return;c.shuffle(o.image).forEach((function(e){var t=i(e,2),n=t[0],r=t[1];c.logMessage
						("Invoking image pixel user sync for bidder: "+n),c.triggerPixel(r)}))})(),(function()
						{if(!d.iframeEnabled&&!u.iframe)return;c.shuffle(o.iframe).forEach((function(e){var 
							t=i(e,2),n=t[0],r=t[1];c.logMessage("Invoking iframe user sync for bidder: "+n)
							,c.insertUserSyncIframe(r)}))})()}catch(e){return c.logError
							("Error firing user syncs",e)}o={image:[],iframe:[]},n=!0}}return 
							f.config.getConfig("userSync",(function(e){d=s(d,e.userSync)})),
							t.registerSync=function(e,t,n){if(!d.syncEnabled||!c.isArray(o[e]))
								return c.logWarn('User sync type "'+e+'" not supported');if(!t)
								return c.logWarn("Bidder is required for registering sync");
								if(Number(a[t])>=d.syncsPerBidder)return 
									c.logWarn('Number of user syncs exceeded for "'+t+'"');

				if(d.filterSettings){if(function(e,t){var n=d.filterSettings;
				if(function(e,t){if(e.all&&e[t])return c.logWarn('Detected presence of the "filterSettings.all" 
					and "filterSettings.'+t+'" in userSync config.  You cannot mix "all" with "iframe/image" 
					configs; they are mutually exclusive.'),!1;var n=e.all?e.all:e[t],r=e.all?"all":t;if(!n)
					return!1;var i=n.filter,o=n.bidders;if(i&&"include"!==i&&"exclude"!==i)
					return c.logWarn('UserSync "filterSettings.'+r+".filter\" setting '"+i+"'
					 is not a valid option; use either 'include' or 'exclude'."),!1;

				if("*"!==o&&!(Array.isArray(o)&&0<o.length&&o.every((function(e){return c.isStr(e)&&"*"!==e}))))
					return c.logWarn('Detected an invalid setup in userSync "filterSettings.'+r+".bidders\"; 
						use either '*' (to represent all bidders) or an array of bidders."),!1;return!0}(n,e))
						{u[e]=!0;var r=n.all?n.all:n[e],i="*"===r.bidders?[t]:r.bidders,o=r.filter||"include",
						a={include:function(e,t){return!(0,l.default)(e,t)},exclude:function(e,t){return(0,l.default)
							(e,t)}};return a[o](i,t)}return!1}(e,t))return c.logWarn("Bidder '"+t+
							"' is not permitted to register their userSync "+e+" pixels as per filterSettings config.")}
							else if(d.enabledBidders&&d.enabledBidders.length&&d.enabledBidders.indexOf(t)<0)return 
								c.logWarn('Bidder "'+t+'" not permitted to register their userSync pixels.');var r,i;o[e]
							.push([t,n]),(r=a)[i=t]?r[i]+=1:r[i]=1,a=r},t.syncUsers=function(){var e=0<arguments.length&&void 
								0!==arguments[0]?arguments[0]:0;if(e)return setTimeout(r,Number(e));r()},t.triggerUserSyncs=function()
								{d.enableOverride&&t.syncUsers()},t}f.config.setDefaults({userSync:{syncEnabled:!0,pixelEnabled:
									!0,syncsPerBidder:5,syncDelay:3e3}});var u=!c.isSafariBrowser()&&c.cookiesAreEnabled();

t.userSync=a({config:f.config.getConfig("userSync"),browserSupportsCookies:u})},15:function(e,t,n)
{var v=n(19),y=n(13),m=n(32),b=n(46),h=n(53),S="prototype",E=function(e,t,n){var r,i,o,a=e&E.F,u=e&E.G,d=e&E.S,s
	=e&E.P,c=e&E.B,f=e&E.W,l=u?y:y[t]||(y[t]={}),g=l[S],p=u?v:d?v[t]:(v[t]||{})[S];for(r in u&&(n=t),n)
	(i=!a&&p&&void 0!==p[r])&&h(l,r)||(o=i?p[r]:n[r],l[r]=u&&"function"!=typeof p[r]?n[r]:c&&i?m(o,v):
		f&&p[r]==o?(function(r){var e=function(e,t,n){if(this instanceof r){switch(arguments.length)
			{case 0:return new r;case 1:return new r(e);case 2:return new r(e,t)}return new r(e,t,n)
		}return r.apply(this,arguments)};return e[S]=r[S],e})(o):s&&"function"==typeof o?m(Function.call,o)
		:o,s&&((l.virtual||(l.virtual={}))[r]=o,e&E.R&&g&&!g[r]&&b(g,r,o)))};
	E.F=1,E.G=2,E.S=4,E.P=8,E.B=16,E.W=32,E.U=64,E.R=128,e.exports=E},16:function(e,t)
	{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}}
	,17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})
	,t.hasNonNativeBidder=t.nativeBidder=t.nativeAdUnit=t.NATIVE_TARGETING_KEYS=t.NATIVE_KEYS=t.nativeAdapters=void 
	0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}
	:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol"
	:typeof e};t.processNativeAdUnitParams=function(e){if(e&&e.type&&(function(e){if(!e||!(0,u.default)
		(Object.keys(c),e))return(0,a.logError)(e+" nativeParam is not supported"),!1;return!0})(e.type))
	return c[e.type];return e},t.nativeBidIsValid=function(t,e){var n=(0,a.getBidRequest)(t.adId,e);
		if(!n)return!1;if(!(0,a.deepAccess)(t,"native.clickUrl"))return!1;if((0,a.deepAccess)(t,"native.image")
			&&(!(0,a.deepAccess)(t,"native.image.height")||!(0,a.deepAccess)(t,"native.image.width")))return!1;
		if((0,a.deepAccess)(t,"native.icon")&&(!(0,a.deepAccess)(t,"native.icon.height")||!(0,a.deepAccess)
			(t,"native.icon.width")))return!1;var r=n.nativeParams;if(!r)return!0;var i=Object.keys(r)
			.filter((function(e){return r[e].required})),o=Object.keys(t.native).filter((function(e)
				{return t.native[e]}));return i.every((function(e){return(0,u.default)(o,e)}))}
		,t.fireNativeTrackers=function(e,t){var n=void 0;"click"===e.action?n=t.native&&
		t.native.clickTrackers:(n=t.native&&t.native.impressionTrackers,t.native&&t.native.javascriptTrackers&&
		(0,a.insertHtmlIntoIframe)(t.native.javascriptTrackers));(n||[]).forEach(a.triggerPixel)}
		,t.getNativeTargeting=function(r){var i={};return Object.keys(r.native).forEach((function(e)
			{var t=s[e],n=r.native[e];"object"===(void 0===n?"undefined":o(n))&&n.url&&(n=n.url),t&&(i[t]=n)})),i};
		var r,a=n(0),i=n(6),u=(r=i)&&r.__esModule?r:{default:r};var d=t.nativeAdapters=[],s=t.NATIVE_KEYS=
		{title:"hb_native_title",body:"hb_native_body",sponsoredBy:"hb_native_brand",image:"hb_native_image",
		icon:"hb_native_icon",clickUrl:"hb_native_linkurl",cta:"hb_native_cta"},
		c=(t.NATIVE_TARGETING_KEYS=Object.keys(s).map((function(e){return s[e]})),
			{image:{image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},
			body:{required:!1},icon:{required:!1}}});t.nativeAdUnit=function(e)
		{var t="native"===e.mediaType,n=(0,a.deepAccess)(e,"mediaTypes.native")
		;return t||n};var f=t.nativeBidder=function(e){return(0,u.default)(d,e.bidder)};

t.hasNonNativeBidder=function(e){return e.bids.filter((function(e){return!f(e)})).length}},
18:function(e,t,n){"use strict";var o=n(0);function r(e,t){var n=t&&t.bidId||o.getUniqueIdentifierStr(),
	r=t&&t.src||"client",i=e||0;this.bidderCode=t&&t.bidder||"",this.width=0,this.height=0,this.statusMessage=
	(function(){switch(i){case 0:return"Pending";case 1:return"Bid available";case 2:
		return"Bid returned empty or error response";case 3:return"Bid timed out"}})()
		,this.adId=n,this.mediaType="banner",this.source=r,this.getStatusCode=function(){return i},
		this.getSize=function(){return this.width+"x"+this.height}}t.createBid=function(e,t)
		{return new r(e,t)}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",
			{value:!0}),t.store=function(e,t){var n={puts:e.map(a)};(0,i.ajax)(o.config.getConfig("cache.url"),
			(r=t,{success:function(e){var t=void 0;try{t=JSON.parse(e).responses}catch(e){return void r(e,[])}
				t?r(null,t):r(new Error("The cache server didn't respond with a responses property."),[])},error:
				function(e,t){r(new Error("Error storing video ad in the cache: "+e+": "+JSON.stringify(t)),[])}}),
			JSON.stringify(n),{contentType:"text/plain",withCredentials:!0});var r},t.getCacheUrl=function(e)
			{return o.config.getConfig("cache.url")+"?uuid="+e};var i=n(7),o=n(3);function a(e){var t,n;return
				{type:"xml",value:e.vastXml?e.vastXml:(t=e.vastUrl,n=e.vastImpUrl,'<VAST version="3.0">\n    <Ad>\n
			}<Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['+t+"]]>
			</VASTAdTagURI>\n        <Impression>"+(n?"<![CDATA["+n+"]]>":"")+"</Impression>\n        
			<Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")}}},19:function(e,t)
			{var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==
			Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},2:function(e,t,n){"use strict";

	Object.defineProperty(t,"__esModule",{value:!0});t.NATIVE="native",t.VIDEO="video",t.BANNER="banner"}
	,20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||
	function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)
		Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d="function"==typeof Symbol&&"symbol"
		==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&
		e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.createHook=function(r,i,e){var u=
			[{fn:i,priority:0}],o={sync:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]
				=arguments[r];u.forEach((function(e){e.fn.apply(t,n)}))},asyncSeries:function(){for(var o=this,
					e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=0;return u[a].fn.apply
					(this,t.concat((function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];
					var i=u[++a];if("object"===(void 0===i?"undefined":d(i))&&"function"==typeof i.fn)
					return i.fn.apply(o,n.concat(e))})))}};if(!o[r])throw"invalid hook type";
					var t={addHook:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:10;
						"function"==typeof e&&(u.push({fn:e,priority:t}),u.sort((function(e,t){return t.priority-
							e.priority})))},removeHook:function(t){u=u.filter((function(e){return e.fn===i||e.fn!==t}))}
						,hasHook:function(t){return u.some((function(e){return e.fn===t}))}};"string"==typeof e&&(s[e]=t);
						return a((function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];
							if(1===u.length&&u[0].fn===i)return i.apply(this,t);return o[r].apply(this,t)}),t)};var s=t.hooks={}},
						21:function(e,t,n){n(103),e.exports=n(13).Array.findIndex},22:function(e,t,n){"use strict";var r,i=n(6),
						o=(r=i)&&r.__esModule?r:{default:r},a=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)
						for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}})(n(0));
							var u={},d=["criteo"];function s(e,t){var n=document.createElement("script");n.type="text/javascript",
						n.async=!0,t&&"function"==typeof t&&(n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&
							complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()}),
							n.src=e;var r=document.getElementsByTagName("head");(r=r.length?r:document.getElementsByTagName("body"))
							.length&&(r=r[0]).insertBefore(n,r.firstChild)}t.loadExternalScript=function(e,t){if(t&&e)if((0,o.default)(d,t))
								{if(!u[e]){a.logWarn("module "+t+" is loading external JavaScript");var n=document.createElement("script");
								n.type="text/javascript",n.async=!0,n.src=e,a.insertElement(n),u[e]=!0}}else a.logError
								(t+" not whitelisted for loading external JavaScript");else a.logError
								("cannot load external script without url and moduleCode")},t.loadScript=function
								(t,e,n){t?n?u[t]?e&&"function"==typeof e&&(u[t].loaded?e():u[t].callbacks.push(e)):
								(u[t]={loaded:!1,callbacks:[]},e&&"function"==typeof e&&u[t].callbacks.push(e),
									s(t,(function(){u[t].loaded=!0;try{for(var e=0;e<u[t].callbacks.length;e++)u[t]
										.callbacks[e]()}catch(e){a.logError("Error executing callback","adloader.js:loadScript",e)}})))
								:s(t,e):a.logError("Error attempting to request empty URL","adloader.js:loadScript")}},
								23:function(e,t,n){e.exports=!n(33)((function(){return 7!=Object.defineProperty({},"a",{get:function()
									{return 7}}).a}))},24:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e)
									.slice(8,-1)}},25:function(e,t){e.exports=function(e){if(null==e)throw TypeError
										("Can't call method on  "+e);return e}},26:function(e,t,n){var r=n(57)("wks")
										,i=n(59),o=n(19).Symbol,a="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=a&&o[e]||
											(a?o:i)("Symbol."+e))}).store=r},27:function(e,t){e.exports=function(){}},28:function(e,t,n){
											"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e)
											{var t=e;return{callBids:function(){},setBidderCode:function(e){t=e},getBidderCode:function()
											{return t}}}},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
											t.auctionManager=void 0,t.newAuctionManager=d;var r,i=n(0),s=n(41),o=n(10),a=(r=o)&&
											r.__esModule?r:{default:r};var u=n(4);function d(){var d=[],r={};return r.addWinningBid=function(t)
											{var e=(0,a.default)(d,(function(e){return e.getAuctionId()===t.auctionId}));
										e?e.addWinningBid(t):utils.logWarn("Auction not found when adding winning bid")},
										r.getAllWinningBids=function(){return d.map((function(e){return e.getWinningBids()})).reduce(i.flatten,[])}
										,r.getBidsRequested=function(){return d.map((function(e){return e.getBidRequests()})).reduce(i.flatten,[])},
										r.getBidsReceived=function(){return d.map((function(e){if(e.getAuctionStatus()===
											s.AUCTION_COMPLETED)return e.getBidsReceived()})).reduce(i.flatten,[]).filter((function(e){return e}))}
										,r.getAdUnits=function(){return d.map((function(e){return e.getAdUnits()})).reduce(i.flatten,[])},
										r.getAdUnitCodes=function(){return d.map((function(e){return e.getAdUnitCodes()})).reduce(i.flatten,[])
										.filter(i.uniques)},r.createAuction=function(e){var t,n=e.adUnits,r=e.adUnitCodes,i=e.callback,o=e.cbTimeout,
											a=e.labels,u=(0,s.newAuction)({adUnits:n,adUnitCodes:r,callback:i,cbTimeout:o,labels:a});return t=u,d.push(t),u}
											,r.findBidByAdId=function(t){return(0,a.default)(d.map((function(e){return e.getBidsReceived()}))
												.reduce(i.flatten,[]),(function(e){return e.adId===t}))},r.getStandardBidderAdServerTargeting=function()
											{return(0,s.getStandardBidderSettings)()[u.JSON_MAPPING.ADSERVER_TARGETING]},r.setStatusForBids=function(e,t)
											{var n=r.findBidByAdId(e);n&&(n.status=t)},r}t.auctionManager=d()},3:function(e,t,n)
									{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.RANDOM=void 0;var d=
									Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)
										Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s="function"==typeof Symbol&&"symbol"
										==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&
										e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.newConfig=u;var r=n(31),c=o(n(10)),
										f=o(n(6)),i=n(20);function o(e){return e&&e.__esModule?e:{default:e}}var l=n(0),g=!1,p=3e3,
										v=window.location.origin,y=100,m=!0,b=200,a=t.RANDOM="random",h={};h[a]=!0,h.fixed=!0;
										var S=a,E={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"}
										,A="*";function u(){var o=[],a=void 0,u=void 0;function e(){function i(t){return(0,c.default)
											(Object.keys(E),(function(e){return t===E[e]}))}function o(e){if(!e)return l.logError
												("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof e)i(e)||
												l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, 
													using `medium` as default.");else if("object"===(void 0===e?"undefined":s(e))
													&&!(0,r.isValidPriceConfig)(e))return l.logError("Invalid custom price value passed to 
													`setPriceGranularity()`"),!1;return!0}a={},u={_debug:g,get debug(){return this._debug}
													,set debug(e){this._debug=e},_bidderTimeout:p,get bidderTimeout(){return this._bidderTimeout}
													,set bidderTimeout(e){this._bidderTimeout=e},_publisherDomain:v,get publisherDomain()
										{return this._publisherDomain},set publisherDomain(e){this._publisherDomain=e},_cookieSyncDelay:y,
										get cookieSyncDelay(){return pbjs.cookieSyncDelay||this._cookieSyncDelay},set cookieSyncDelay(e)
										{this._cookieSyncDelay=e},_priceGranularity:E.MEDIUM,set priceGranularity(e){o(e)&&
										("string"==typeof e?this._priceGranularity=i(e)?e:E.MEDIUM:"object"===(void 0===e?"undefined":
										s(e))&&(this._customPriceBucket=e,this._priceGranularity=E.CUSTOM,l.logMessage
										("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},
										_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_mediaTypePriceGranularity:{}
										,get mediaTypePriceGranularity(){return this._mediaTypePriceGranularity},set mediaTypePriceGranularity(n)
										{var r=this;this._mediaTypePriceGranularity=Object.keys(n).reduce((function(e,t){return o(n[t])?"string"==
											typeof n?e[t]=i(n[t])?n[t]:r._priceGranularity:"object"===(void 0===n?"undefined":s(n))&&(e[t]=n[t],
												l.logMessage("Using custom price granularity for "+t)):l.logWarn("Invalid price granularity for media 
												type: "+t),e}),{})},_sendAllBids:m,get enableSendAllBids(){return this._sendAllBids},
												set enableSendAllBids(e){this._sendAllBids=e},_bidderSequence:S,get bidderSequence()
												{return this._bidderSequence},set bidderSequence(e){h[e]?this._bidderSequence=e:l.logWarn
													("Invalid order: "+e+". Bidder Sequence was not set.")},_timoutBuffer:b,get timeoutBuffer()
													{return this._timoutBuffer},set timeoutBuffer(e){this._timoutBuffer=e}}}var t=(0,i.createHook)
													("asyncSeries",(function(n){if("object"===(void 0===n?"undefined":s(n))){var i,t,e=Object.keys(n)
													,r={};e.forEach((function(e){var t=n[e];"object"===s(a[e])&&"object"===(void 0===t?"undefined":s(t))
														&&(t=d({},a[e],t)),r[e]=u[e]=t})),i=r,t=Object.keys(i),o.filter((function(e){return(0,f.default)
															(t,e.topic)})).forEach((function(e){var t,n,r;e.callback((t={},n=e.topic,r=i[e.topic],n in 
																t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}))
												,o.filter((function(e){return e.topic===A})).forEach((function(e){return e.callback(i)}))}
												else l.logError("setConfig options must be an object")}));return e(),{getConfig:function()
														{if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0]))
														{var e=arguments.length<=0?void 0:arguments[0];return e?l.deepAccess(u,e):u}
														return function(e,t){var n=t;if("string"!=typeof e&&(n=e,e=A),"function"==typeof n)
														return o.push({topic:e,callback:n}),function(){o.splice(o.indexOf(t),1)};l.logError
														("listener must be a function")}.apply(void 0,arguments)},setConfig:t,setDefaults:function(e)
														{"object"===(void 0===a?"undefined":s(a))?(d(a,e),d(u,e)):l.logError("defaults must be an object")}
														,resetConfig:e}}t.config=u()},30:function(pr,qr){var rr;rr=(function(){return this})();try{rr=rr||
														Function("return this")()||eval("this")}catch(e){"object"==typeof window&&(rr=window)}pr.exports=rr},
														31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
														t.isValidPriceConfig=t.getPriceBucketString=void 0;var r,i=n(10),v=(r=i)&&r.__esModule?r:
														{default:r};var o=n(0),y=2,a={buckets:[{min:0,max:5,increment:.5}]},u={buckets:[
															{min:0,max:20,increment:.1}]},d={buckets:[{min:0,max:20,increment:.01}]},s={buckets:
															[{min:0,max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}]},
															c={buckets:[{min:0,max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}]};


function f(n,e,r){var i="";if(!m(e))return i;var t,o,a,u,d,s,c,f,l,g=e.buckets.reduce
((function(e,t){return e.max>t.max?e:t}),{max:0}),p=(0,v.default)(e.buckets,(function(e)
	{if(n>g.max*r){var t=e.precision;void 0===t&&(t=y),i=(e.max*r).toFixed(t)}else if(n<=e.max*r&&n>=e.min*r)
	return e}));
return p&&(t=n,a=r,u=void 0!==(o=p).precision?o.precision:y,d=o.increment*a,s=o.min*a,c=Math.pow
	(10,u+2),f=(t*c-s*c)/(d*c),l=Math.floor(f)*d+s,i=(l=Number(l.toFixed(10))).toFixed(u)),i}function m(e)
{if(o.isEmpty(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var t=!0;return e.buckets.forEach((function(e)
	{void 0!==e.min&&e.max&&e.increment||(t=!1)})),t}t.getPriceBucketString=function(e,t)
{var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,r=parseFloat(e);return isNaN(r)&&(r=""),
{low:""===r?"":f(e,a,n),med:""===r?"":f(e,u,n),high:""===r?"":f(e,d,n),auto:""===r?"":f(e,c,n),dense:""===r?"":
f(e,s,n),custom:""===r?"":f(e,t,n)}},t.isValidPriceConfig=m},32:function(e,t,n){var o=n(45);
	e.exports=function(r,i,e){if(o(r),void 0===i)return r;switch(e){case 1:return function(e){return r.call(i,e)};
	case 2:return function(e,t){return r.call(i,e,t)};case 3:return function(e,t,n){return r.call(i,e,t,n)}}
return function(){return r.apply(i,arguments)}}},33:function(e,t){e.exports=function(e){try{return!!e()}
catch(e){return!0}}},34:function(e,t,n){var h=n(32),S=n(35),E=n(54),A=n(36),r=n(55);e.exports=function(f,e)
	{var l=1==f,g=2==f,p=3==f,v=4==f,y=6==f,m=5==f||y,b=e||r;return function(e,t,n){for(var r,i,o=E(e),a=S(o),
		u=h(t,n,3),d=A(a.length),s=0,c=l?b(e,d):g?b(e,0):void 0;s<d;s++)if((m||s in a)&&(i=u(r=a[s],s,o),f))
if(l)c[s]=i;else if(i)switch(f){case 3:return!0;case 5:return r;case 6:return s;case 2:c.push(r)}
else if(v)return!1;return y?-1:p||v?v:c}}},35:function(e,t,n){var r=n(24);e.exports=Object("z")
.propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},
36:function(e,t,n){var r=n(37),i=Math.min;e.exports=function(e){return 0<e?i(r(e),9007199254740991):0}},
37:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},
38:function(e,t,n){var r=n(24);e.exports=Array.isArray||function(e){return"Array"==r(e)}},39:function(e,t,n)
{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getGlobal=function(){return window.pbjs}
,window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[]}
,4:function(e,t){e.exports={JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",
PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:
"adserverTargeting",BD_SETTING_STANDARD:"standard"},REPO_AND_VERSION:"prebid_prebid_1.16.0"
,DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1,NO_BID:2},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",
AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon",REQUEST_BIDS:"requestBids"}},EVENTS:
{AUCTION_INIT:"auctionInit",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:
"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",BID_WON:"bidWon",BIDDER_DONE:"bidderDone",
SET_TARGETING:"setTargeting",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits",AD_RENDER_FAILED:
"adRenderFailed"},AD_RENDER_FAILED_REASON:{PREVENT_WRITING_ON_MAIN_DOCUMENT:"preventWritingOnMainDocuemnt",
NO_AD:"noAd",EXCEPTION:"exception",CANNOT_FIND_AD:"cannotFindAd",MISSING_DOC_OR_ADID:"missingDocOrAdid"},
EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",
DENSE:"dense",CUSTOM:"custom"},TARGETING_KEYS:["hb_bidder","hb_adid","hb_pb","hb_size","hb_deal","hb_source",
"hb_format"],S2S:{SRC:"s2s",DEFAULT_ENDPOINT:
"https://prebid.adnxs.com/pbs/v1/openrtb2/auction",SYNCED_BIDDERS_KEY:"pbjsSyncs"}}},
40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
t.targeting=t.isBidNotExpired=t.RENDERED=t.BID_TARGETING_SET=void 0;var h=Object.assign||function(e)
{for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)
	Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};
	t.getHighestCpmBidsFromBidPool=B,t.newTargeting=c;var r,S=n(0),E=n(3),A=n(17),i=n(29),o=n(6),T=(r=o)
	&&r.__esModule?r:{default:r};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,
	enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=n(0),w=n(4),C=[],a=t
	.BID_TARGETING_SET="targetingSet",u=t.RENDERED="rendered",O=20,d=(t.isBidNotExpired=function(e)
	{return e.responseTimestamp+1e3*e.ttl+1e3>(0,S.timestamp)()},function(e)
	{return e&&(e.status&&!(0,T.default)([a,u],e.status)||!e.status)});

function B(e,n){var r=[],i=(0,S.groupBy)(e,"adUnitCode");return Object.keys(i).forEach((function(e)
	{var t=(0,S.groupBy)(i[e],"bidderCode");Object.keys(t).forEach((function(e){return r.push(t[e].reduce
		(n,s()))}))})),r}function s(e){return{adUnitCode:e,cpm:0,adserverTargeting:{},timeToRespond:0}}

function c(n){var g={};function p(e){return"string"==typeof e?[e]:_.isArray(e)?e:n.getAdUnitCodes()||[]}

function v(){return B(n.getBidsReceived().filter(d).filter(t.isBidNotExpired),S.getOldestHighestCpmBid)}

function y(){return n.getStandardBidderAdServerTargeting().map((function(e){return e.key})).concat
(w.TARGETING_KEYS).filter(S.uniques)}function m(r,i,e,t){return Object.keys(i.adserverTargeting)
	.filter(o()).forEach((function(e){var t,n;r.length&&r.filter((n=e,function(e)
		{return e.adUnitCode===i.adUnitCode&&e.adserverTargeting[n]})).forEach((t=e,function(e)
		{_.isArray(e.adserverTargeting[t])||(e.adserverTargeting[t]=[e.adserverTargeting[t]])
			,e.adserverTargeting[t]=e.adserverTargeting[t].concat(i.adserverTargeting[t])
			.filter(S.uniques),delete i.adserverTargeting[t]}))})),r.push(i),r}function o()
	{var t=y();return function(e){return-1===t.indexOf(e)}}function b(t){return I({}
		,t.adUnitCode,Object.keys(t.adserverTargeting).filter(o()).map((function(e)
		{return I({},e.substring(0,O),[t.adserverTargeting[e]])})))}return 
	g.resetPresetTargeting=function(e){if((0,S.isGptPubadsDefined)()){var t=p(e),r=n.getAdUnits()
		.filter((function(e){return(0,T.default)(t,e.code)}));window.googletag.pubads().getSlots()
		.forEach((function(n){C.forEach((function(t){r.forEach((function(e){e.code!==n.getAdUnitPath()&&
		e.code!==n.getSlotElementId()||n.setTargeting(t,null)}))}))}))}},g.getAllTargeting=function(e)
		{var r,t,i,n,o,a,u,d,s,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:v(),f=p(e),
			l=(a=f,u=c,d=g.getWinningBids(a,u),s=y(),d=d.map((function(t){return I({},t.adUnitCode,Object.keys
			(t.adserverTargeting).filter((function(e){return void 0===t.sendStandardTargeting||
			t.sendStandardTargeting||-1===s.indexOf(e)})).map((function(e){return I({},"hb_deal"===e?
			(e+"_"+t.bidderCode).substring(0,O):e.substring(0,O),[t.adserverTargeting[e]])})))})))
			.concat((n=f,o=c,o.filter((function(e){return(0,T.default)(n,e.adUnitCode)}))
			.map((function(e){return h({},e)})).reduce(m,[]).map(b).filter((function(e){return e}))))
			.concat(E.config.getConfig("enableSendAllBids")?(r=f,t=c,i=w.TARGETING_KEYS.concat
			(A.NATIVE_TARGETING_KEYS),B(t,S.getHighestCpm).map((function(t){if(t.adserverTargeting&&r&&
			(_.isArray(r)&&(0,T.default)(r,t.adUnitCode)||"string"==typeof r&&t.adUnitCode===r))
			return I({},t.adUnitCode,(n=t,i.filter((function(e){return void 0!==t.adserverTargeting[e]}))
			.map((function(e){return I({},(e+"_"+n.bidderCode).substring(0,O),[n.adserverTargeting[e]])}))));
			var n})).filter((function(e){return e}))):[]);return l.map((function(t){Object.keys(t)
			.map((function(e){t[e].map((function(e){-1===C.indexOf(Object.keys(e)[0])&&(C=Object.keys(e)
			.concat(C))}))}))})),l=l.map((function(e){return I({},Object.keys(e)[0],e[Object.keys(e)[0]]
			.map((function(e){return I({},Object.keys(e)[0],e[Object.keys(e)[0]].join(", "))}))
			.reduce((function(e,t){return h(t,e)}),{}))})).reduce((function(e,t){var n=Object.keys(t)[0];
			return e[n]=h({},e[n],t[n]),e}),{}),f.forEach((function(e){l[e]||(l[e]={})})),l},
			g.setTargetingForGPT=function(i,e){window.googletag.pubads().getSlots().forEach((function(r)
				{Object.keys(i).filter(e?e(r):(0,S.isAdUnitCodeMatchingSlot)(r)).forEach((function(n){return Object.keys(i[n])
				.forEach((function(t){var e=i[n][t].split(",");(e=1<e.length?[e]:e).map((function(e){return _.logMessage
					("Attempting to set key value for slot: "+r.getSlotElementId()+" key: "+t+" value: "+e),e}))
				.forEach((function(e){r.setTargeting(t,e)}))}))}))}))},g.getWinningBids=function(e)
			{var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:v(),t=p(e);return n.filter((function(e)
				{return(0,T.default)(t,e.adUnitCode)})).filter((function(e){return 0<e.cpm})).map((function(e)
				{return e.adUnitCode})).filter(S.uniques).map((function(t){return n.filter((function(e)
				{return e.adUnitCode===t?e:null})).reduce(S.getHighestCpm,s(t))}))},g.setTargetingForAst=function()
				{var r=g.getAllTargeting();Object.keys(r).forEach((function(n){return Object.keys(r[n]).forEach
				((function(e){if(_.logMessage("Attempting to set targeting for targetId: "+n+" key: "+e+" value: "+r[n][e])
				,_.isStr(r[n][e])||_.isArray(r[n][e])){var t={};e.search(/pt[0-9]/)<0?t[e.toUpperCase()]=r[n][e]:t[e]=r[n][e],
				window.apntag.setKeywords(n,t)}}))}))},g.isApntagDefined=function(){if(window.apntag&&_.isFn
				(window.apntag.setKeywords))return!0},g}t.targeting=c(i.auctionManager)},41:function(e,t,n)
				{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addBidResponse=
				t.AUCTION_COMPLETED=t.AUCTION_IN_PROGRESS=t.AUCTION_STARTED=void 0;var l="function"==typeof Symbol&&"symbol"
				==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof 
				Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g=Object.assign||
				function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)
				Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.newAuction=function(e)
				{var f=e.adUnits,t=e.adUnitCodes,n=e.callback,r=e.cbTimeout,i=e.labels,d=f,s=i,l=t,g=[],
					p=[],c=void 0,v=C.generateUUID(),y=void 0,m=n,b=void 0,h=r,o=[];function S(e,t){if(t&&clearTimeout(b),
					null!=m){var n=[];e&&(C.logMessage("Auction "+v+" timedOut"),u=p,d=(a=g).filter((function(e)
					{return!e.doneCbCallCount})).map((function(e){return e.bidderCode})).filter(A.uniques),
					s=u.map((function(e){return e.bidder})).filter(A.uniques),c=d.filter((function(e){return!
					(0,_.default)(s,e)})),(n=a.map((function(e){return(e.bids||[]).filter((function(e)
						{return(0,_.default)(c,e.bidder)}))})).reduce(A.flatten,[]).map((function(e)
					{return{bidId:e.bidId,bidder:e.bidder,adUnitCode:e.adUnitCode,auctionId:e.auctionId}})))
					.length&&B.emit(N.EVENTS.BID_TIMEOUT,n)),B.emit(N.EVENTS.AUCTION_END,{auctionId:v});
				try{y=D;var r=l,i=p.filter(A.adUnitsFilter.bind(this,r)).reduce(q,{});m.apply(pbjs,[i,e])}
				catch(e){C.logError("Error executing bidsBackHandler",null,e)}finally{n.length&&O.callTimedOutBidders
					(f,n,h);var o=T.config.getConfig("userSync")||{};o.enableOverride||w(o.syncDelay)}m=null}
					var a,u,d,s,c}function E(){g.every((function(e){return 1<=e.doneCbCallCount}))&&(C.logInfo
						("Bids Received for Auction with id: "+v,p),y=D,S(!1,!0))}return{addBidReceived:function(e)
						{p=p.concat(e)},executeCallback:S,callBids:function(){var r=this;y=R,c=Date.now();
						var i=O.makeBidRequests(d,c,v,h,s);C.logInfo("Bids Requested for Auction with id: "+v,i),
						i.forEach((function(e){var t;t=e,g=g.concat(t)}));var o={},e={bidRequests:i,run:function()
						{var e,t;e=S.bind(null,!0),t=setTimeout(e,h),b=t,y=U;var n={timestamp:c,auctionId:v,timeout:h};
						B.emit(N.EVENTS.AUCTION_INIT,n),O.callBids(d,i,M.bind(r),function(e){var t=e;return(0,A.delayExecution)
							(function(){var e=(0,I.default)(g,(function(e){return t===e.bidderRequestId}));e.doneCbCallCount+=1,
								E()}),1)}.bind(r),{request:function(e,t){u(P,t),u(o,e),k[e]||(k[e]={SRA:!0,origin:t}),1<o[e]&&(k[e]
						.SRA=!1)},done:function(e){P[e]--,x[0]&&a(x[0])&&x.shift()}},h)}};a(e)||(C.logWarn
("queueing auction due to limited endpoint capacity"),x.push(e));function a(e){var r=!0,i=T.config.getConfig
					("maxRequestsPerOrigin")||j;return e.bidRequests.some
					((function(e){var t=1,n=void 0!==e.src&&e.src===N.S2S.SRC?"s2s":e.bidderCode;return k[n]&&
					(!1===k[n].SRA&&(t=Math.min(e.bids.length,i)),P[k[n].origin]+t>i&&(r=!1)),!r})),r&&e.run(),r}
					function u(e,t){void 0===e[t]?e[t]=1:e[t]++}},bidsBackAll:E,addWinningBid:function(e)
					{o=o.concat(e)},getWinningBids:function(){return o},getTimeout:function(){return h},
					getAuctionId:function(){return v},getAuctionStatus:function(){return y},getAdUnits:function()
					{return d},getAdUnitCodes:function(){return l},getBidRequests:function(){return g},
					getBidsReceived:function(){return p}}},t.getStandardBidderSettings=u,t.
					getKeyValueTargetingPairs=m,t.adjustBids=s;var A=n(0),p=n(31),i=n(17),c=n(189),v=n(12),
					T=n(3),r=n(14),o=n(20),I=a(n(10)),_=a(n(6));function a(e){return e&&e.__esModule?e:
					{default:e}}var w=r.userSync.syncUsers,C=n(0),O=n(8),B=n(9),N=n(4),R=t.AUCTION_STARTED=
					"started",U=t.AUCTION_IN_PROGRESS="inProgress",D=t.AUCTION_COMPLETED="completed";

					B.on(N.EVENTS.BID_ADJUSTMENT,(function(e){s(e)}));var j=4,P={},k={},x=[];function
					 f(e,t){t.timeToRespond>e.getTimeout()+T.config.getConfig("timeoutBuffer")
					 &&e.executeCallback(!0)}function y(e,t){B.emit(N.EVENTS.BID_RESPONSE,t)
					 	,e.addBidReceived(t),f(e,t)}var M=t.addBidResponse=(0,o.createHook)
					 	("asyncSeries",(function(e,t){var n,r,i,o,a=this.getBidRequests(),
					 	u=this.getAuctionId(),d=(0,A.getBidderRequest)(a,t.bidderCode,e),
					 	s=(function(e){var t=e.adUnitCode,n=e.bid,r=e.bidRequest,i=e.auctionId,o=r.start,a=g
					 	({},n,{auctionId:i,responseTimestamp:(0,A.timestamp)(),requestTimestamp:
					 	o,cpm:parseFloat(n.cpm)||0,bidder:n.bidderCode,adUnitCode:t});
					 	a.timeToRespond=a.responseTimestamp-a.requestTimestamp,B.emit
					 	(N.EVENTS.BID_ADJUSTMENT,a);var u=r.bids&&(0,I.default)(r.bids,(function(e)
					 	{return e.adUnitCode==t})),d=u&&u.renderer;d&&d.url&&(a.renderer=v.Renderer.install
					 	({url:d.url}),a.renderer.setRender(d.render));var s,c=T.config.getConfig
					 	("mediaTypePriceGranularity."+n.mediaType),f=(0,p.getPriceBucketString)
					 	(a.cpm,"object"===(void 0===c?"undefined":l(c))?c:T.config.getConfig
					 	("customPriceBucket"),T.config.getConfig("currency.granularityMultiplier"));
					 	a.pbLg=f.low,a.pbMg=f.med,a.pbHg=f.high,a.pbAg=f.auto,a.pbDg=f.dense,a.pbCg=f.custom,
					 	a.bidderCode&&(0<a.cpm||a.dealId)&&(s=m(a.bidderCode,a));return a.adserverTargeting=g
					 	(a.adserverTargeting||{},s),a})({adUnitCode:e,bid:t,bidRequest:d,auctionId:u});"video"
					 	===s.mediaType?(n=this,r=s,i=d,o=!0,T.config.getConfig("cache.url")&&(r.videoCacheKey?
					 		r.vastUrl||(C.logError("videoCacheKey specified but not required vastUrl for video bid")
					 		,o=!1):(o=!1,(0,c.store)([r],(function(e,t){e?(C.logWarn
					 		("Failed to save to the video cache: "+e+". Video bid must be discarded."),f(n,r)):
					 		(r.videoCacheKey=t[0].uuid,r.vastUrl||(r.vastUrl=(0,c.getCacheUrl)(r.videoCacheKey))
					 		,i.doneCbCallCount+=1,y(n,r),n.bidsBackAll())})))),o&&y(n,r)):y(this,s)}),"addBidResponse")
					 	;function u(e){var t=T.config.getConfig("mediaTypePriceGranularity."+e),n="string"==typeof e&&t?
					 	"string"==typeof t?t:"custom":T.config.getConfig("priceGranularity"),r=pbjs.bidderSettings;
					 	return r[N.JSON_MAPPING.BD_SETTING_STANDARD]||(r[N.JSON_MAPPING.BD_SETTING_STANDARD]={}),
					 	r[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING]||
					 	(r[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING]=
					 		[{key:"hb_bidder",val:function(e){return e.bidderCode}},{key:"hb_adid",val:function(e)
					 		{return e.adId}},{key:"hb_pb",val:function(e){return n===N.GRANULARITY_OPTIONS.AUTO?
					 		e.pbAg:n===N.GRANULARITY_OPTIONS.DENSE?e.pbDg:n===N.GRANULARITY_OPTIONS.LOW?e.pbLg:n===
					 		N.GRANULARITY_OPTIONS.MEDIUM?e.pbMg:n===N.GRANULARITY_OPTIONS.HIGH?e.pbHg:n===
					 		N.GRANULARITY_OPTIONS.CUSTOM?e.pbCg:void 0}},{key:"hb_size",val:function(e)
					 		{return e.size}},{key:"hb_deal",val:function(e){return e.dealId}},{key:"hb_source",
					 		val:function(e){return e.source}},{key:"hb_format",val:function(e){return e.mediaType}}]),
					 	r[N.JSON_MAPPING.BD_SETTING_STANDARD]}function m(e,t){if(!t)return{};var n={},
					 	r=pbjs.bidderSettings;r&&(d(n,u(t.mediaType),t),e&&r[e]&&r[e][N.JSON_MAPPING.ADSERVER_TARGETING]
					 	&&(d(n,r[e],t),t.sendStandardTargeting=r[e].sendStandardTargeting));return t.native&&(n=g({},n,
					 		(0,i.getNativeTargeting)(t))),n}function d(r,i,o){var e=i[N.JSON_MAPPING.ADSERVER_TARGETING];
					 		return o.size=o.getSize(),C._each(e,(function(e){var t=e.key,n=e.val;if(r[t]&&C.logWarn
					 		("The key: "+t+" is getting ovewritten"),C.isFn(n))try{n=n(o)}catch(e){C.logError
					 			("bidmanager","ERROR",e)}(void 0===i.suppressEmptyKeys||!0!==i.suppressEmptyKeys)
					 			&&"hb_deal"!==t||!C.isEmptyStr(n)&&null!=n?r[t]=n:C.logInfo("suppressing empty key 
					 				'"+t+"' from adserver targeting")})),r}function s(e){var t=e.bidderCode,n=e.cpm,
					 				r=void 0;if(pbjs.bidderSettings&&(t&&pbjs.bidderSettings[t]&&"function"==typeof 
					 				pbjs.bidderSettings[t].bidCpmAdjustment?r=pbjs.bidderSettings[t]
					 				.bidCpmAdjustment:pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD]&&
					 				"function"==typeof pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD]
					 				.bidCpmAdjustment&&(r=pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD]
					 				.bidCpmAdjustment),r))try{n=r(e.cpm,g({},e))}catch(e){C.logError
					 					("Error during bid adjustment","bidmanager.js",e)}0<=n&&(e.cpm=n)}
					 				function q(e,t){return e[t.adUnitCode]||(e[t.adUnitCode]={bids:[]}),e[t.adUnitCode]
					 				.bids.push(t),e}},44:function(e,t,n){"use strict";var r=n(15),i=n(34)(5),o="find",
					 				a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{find:function(e)
					 				{return i(this,e,1<arguments.length?arguments[1]:void 0)}}),n(27)(o)},45:function
					 				(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a 
					 				function!");return e}},46:function(e,t,n){var r=n(47),i=n(52);e.exports=n(23)?
					 				function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},
					 				47:function(e,t,n){var r=n(48),i=n(49),o=n(51),a=Object.defineProperty;t.f=n(23)?
					 				Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}
					 				catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");
					 				return"value"in n&&(e[t]=n.value),e}},48:function(e,t,n){var r=n(16);e.exports=function(e)
					 				{if(!r(e))throw TypeError(e+" is not an object!");return e}},49:function(e,t,n)
					 				{e.exports=!n(23)&&!n(33)((function(){return 7!=Object.defineProperty(n(50)("div"),"a"
					 				,{get:function(){return 7}}).a}))},50:function(e,t,n){var r=n(16),i=n(19).document,o=r(i)
					 				&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},51:function
					 				(e,t,n){var i=n(16);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==
					 				typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i
					 				(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))
					 		return r;throw TypeError("Can't convert object to primitive value")}},514:function(e,t,n)
					 		{e.exports=n(515)},515:function(e,t,n){"use strict";var r,i="function"==typeof Symbol&&"symbol"
					 		==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==
					 		typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||
					 		function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)
					 			Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(39),u=n(0),
					 			d=n(516),s=n(14),c=n(22),f=n(3),l=n(29),g=n(40),p=n(20),v=n(517),y=n(6),m=(r=y)
					 			&&r.__esModule?r:{default:r};var b=(0,a.getGlobal)(),h=n(4),S=n(0),E=n(8),A=n(18),
					 			T=n(9),I=s.userSync.triggerUserSyncs,_=h.EVENTS,w=_.ADD_AD_UNITS,C=_.BID_WON,O=
					 			_.REQUEST_BIDS,B=_.SET_TARGETING,N=_.AD_RENDER_FAILED,R=h.AD_RENDER_FAILED_REASON,
					 			U=R.PREVENT_WRITING_ON_MAIN_DOCUMENT,D=R.NO_AD,j=R.EXCEPTION,P=R.CANNOT_FIND_AD,
					 			k=R.MISSING_DOC_OR_ADID,x={bidWon:function(e){var t=l.auctionManager.getBidsRequested()
					 		.map((function(e){return e.bids.map((function(e){return e.adUnitCode}))})).reduce(u.flatten)
					 		.filter(u.uniques);if(!S.contains(t,e))return void S.logError('The "'+e+'" placement is not defined.')
					 		;return!0}};function M(e,t,n){e.defaultView&&e.defaultView.frameElement&&
					 			(e.defaultView.frameElement.width=t,e.defaultView.frameElement.height=n)}
					 			function q(e,t,n){var r={};r.reason=e,r.message=t,n&&(r.bid=n),S.logError(t),T.emit(N,r)}


function G(e){e.forEach((function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e)
	{S.logError("Error processing command :","prebid.js",e)}}))}(0,v.sessionLoader)(),
b.bidderSettings=b.bidderSettings||{},b.cbTimeout=b.cbTimeout||200,b.libLoaded=!0,
b.version="v1.16.0",S.logInfo("Prebid.js v1.16.0 loaded"),b.adUnits=b.adUnits||[],
b.triggerUserSyncs=I,b.getAdserverTargetingForAdUnitCodeStr=function(e)
{if(S.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e)
{var t=b.getAdserverTargetingForAdUnitCode(e);return S.transformAdServerTargetingObj(t)}
S.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},
b.getAdserverTargetingForAdUnitCode=function(e){return b.getAdserverTargeting(e)[e]},
b.getAdserverTargeting=function(e){return S.logInfo("Invoking pbjs.getAdserverTargeting",arguments)
,g.targeting.getAllTargeting(e)},b.getBidResponses=function(){S.logInfo("Invoking pbjs.getBidResponses",
	arguments);var e=l.auctionManager.getBidsReceived().filter(u.adUnitsFilter.bind
	(this,l.auctionManager.getAdUnitCodes())),n=e&&e.length&&e[e.length-1].auctionId;return e.map
	((function(e){return e.adUnitCode})).filter(u.uniques).map((function(t){return e.filter((function(e)
		{return e.auctionId===n&&e.adUnitCode===t}))})).filter((function(e){return e&&e[0]&&e[0].adUnitCode}))
	.map((function(e){return t={},n=e[0].adUnitCode,r={bids:e.map(u.removeRequestId)},n in t?Object
		.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var t,n,r}))
	.reduce((function(e,t){return o(e,t)}),{})},b.getBidResponsesForAdUnitCode=function(t){
		return{bids:l.auctionManager.getBidsReceived().filter((function(e){return e.adUnitCode===t}))
		.map(u.removeRequestId)}},b.setTargetingForGPTAsync=function(e,t){if(S.logInfo
			("Invoking pbjs.setTargetingForGPTAsync",arguments),(0,u.isGptPubadsDefined)())
		{var n=g.targeting.getAllTargeting(e);g.targeting.resetPresetTargeting(e),g.targeting.setTargetingForGPT
			(n,t),Object.keys(n).forEach((function(t){Object.keys(n[t]).forEach((function(e)
				{"hb_adid"===e&&l.auctionManager.setStatusForBids(n[t][e],g.BID_TARGETING_SET)}))})),
		T.emit(B,n)}else S.logError("window.googletag is not defined on the page")},
		b.setTargetingForAst=function(){S.logInfo("Invoking pbjs.setTargetingForAn",arguments),
		g.targeting.isApntagDefined()?(g.targeting.setTargetingForAst(),T.emit(B,g.targeting.getAllTargeting()))
		:S.logError("window.apntag is not defined on the page")},b.renderAd=function(e,t){
			if(S.logInfo("Invoking pbjs.renderAd",arguments),S.logMessage("Calling renderAd with adId :"+t),
				e&&t)try{var n=l.auctionManager.findBidByAdId(t);if(n){n.status=g.RENDERED,
				n.ad=S.replaceAuctionPrice(n.ad,n.cpm),n.adUrl=S.replaceAuctionPrice(n.adUrl,n.cpm)
			,l.auctionManager.addWinningBid(n),T.emit(C,n);var r=n.height,i=n.width,o=n.ad,a=n.mediaType,
			u=n.adUrl,d=n.renderer,s=document.createComment("Creative "+n.creativeId+" served by "+n.bidder+" 
				Prebid.js Header Bidding");if(S.insertElement(s,e,"body"),d&&d.url)d.render(n);else 
				if(e===document&&!S.inIframe()||"video"===a){q(U,"Error trying to write ad. Ad render call ad id "
					t+" was prevented from writing to the main document.",n)}else if(o)e.write(o),e.close(),M(e,i,r),
					S.callBurl(n);else if(u){var c=S.createInvisibleIframe();c.height=r,c.width=i,
					c.style.display="inline",c.style.overflow="hidden",c.src=u,S.insertElement(c,e,"body"),
					M(e,i,r),S.callBurl(n)}else{q(D,"Error trying to write ad. No ad for bid response id: "+t,n)}}
					else{q(P,"Error trying to write ad. Cannot find ad by given id : "+t)}}catch(e){
						var f="Error trying to write ad Id :"+t+" to the page:"+e.message;q(j,f)}
					else q(k,"Error trying to write ad Id :"+t+" to the page. Missing document or adId")}
						,b.removeAdUnit=function(e){if(S.logInfo("Invoking pbjs.removeAdUnit",arguments),e)
					for(var t=0;t<b.adUnits.length;t++)b.adUnits[t].code===e&&b.adUnits.splice(t,1)},
						b.requestBids=(0,p.createHook)("asyncSeries",(function(){var e=0<arguments.length&&void 0!==arguments[0]
							?arguments[0]:{},t=e.bidsBackHandler,n=e.timeout,r=e.adUnits,i=e.adUnitCodes,o=e.labels;T.emit(O);
					var a=n||f.config.getConfig("bidderTimeout");if(r=r||b.adUnits,S.logInfo("Invoking pbjs.requestBids",
					arguments),i&&i.length?r=r.filter((function(e){return(0,m.default)(i,e.code)})):i=r&&r
					.map((function(e){return e.code})),r.forEach((function(i){var o=Object.keys(i.mediaTypes||{banner:
						"banner"}),e=i.bids.map((function(e){return e.bidder})),a=E.bidderRegistry,t=f.config.getConfig
					("s2sConfig"),n=t&&t.bidders,r=n?e.filter((function(e){return!(0,m.default)(n,e)})):e;i.transactionId||
					(i.transactionId=S.generateUUID()),r.forEach((function(t){var e=a[t],n=e&&e.getSpec&&e.getSpec(),
						r=n&&n.supportedMediaTypes||["banner"];o.some((function(e){return(0,m.default)(r,e)}))||
						(S.logWarn(S.unsupportedBidderMessage(i,t)),i.bids=i.bids.filter
					((function(e){return e.bidder!==t})))}))})),r&&0!==r.length){var u=l.auctionManager.createAuction}
					({adUnits:r,adUnitCodes:i,callback:t,cbTimeout:a,labels:o});return u.callBids(),u}if
					(S.logMessage("No adUnits configured. No bids requested."),"function"==typeof t)try{t()}catch(e)
					{S.logError("Error executing bidsBackHandler",null,e)}})),b.addAdUnits=function(e){
							S.logInfo("Invoking pbjs.addAdUnits",arguments),S.isArray(e)?b.adUnits.push.apply(b.adUnits,e):
							"object"===(void 0===e?"undefined":i(e))&&b.adUnits.push(e),T.emit(w)},b.onEvent=function(e,t,n)
							{S.logInfo("Invoking pbjs.onEvent",arguments),S.isFn(t)?!n||x[e].call(null,n)?T.on(e,t,n):S.logError
							('The id provided is not valid for event "'+e+'" and no handler was set.'):S.logError
							('The event handler provided is not a function and was not set on event "'+e+'".')},
							b.offEvent=function(e,t,n){S.logInfo("Invoking pbjs.offEvent",arguments),n&&!x[e].call(null,n)||
							T.off(e,t,n)},b.registerBidAdapter=function(e,t){S.logInfo("Invoking pbjs.registerBidAdapter",
								arguments);try{E.registerBidAdapter(e(),t)}catch(e){S.logError("Error registering bidder adapter 
								: "+e.message)}},b.registerAnalyticsAdapter=function(e){S.logInfo
								("Invoking pbjs.registerAnalyticsAdapter",arguments);try{E.registerAnalyticsAdapter(e)}
								catch(e){S.logError("Error registering analytics adapter : "+e.message)}},b.createBid=function(e)
								{return S.logInfo("Invoking pbjs.createBid",arguments),A.createBid(e)},b.loadScript=function(e,t,n)
								{S.logInfo("Invoking pbjs.loadScript",arguments),(0,c.loadScript)(e,t,n)},b.enableAnalytics=function(e)
								{e&&!S.isEmpty(e)?(S.logInfo("Invoking pbjs.enableAnalytics for: ",e),E.enableAnalytics(e)):
								S.logError("pbjs.enableAnalytics should be called with option {}")},b.aliasBidder=function(e,t)
								{S.logInfo("Invoking pbjs.aliasBidder",arguments),e&&t?E.aliasBidAdapter(e,t):S.logError
								("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},b.getAllWinningBids=function()
								{return l.auctionManager.getAllWinningBids().map(u.removeRequestId)},b.getAllPrebidWinningBids=function()
								{return l.auctionManager.getBidsReceived().filter((function(e){return e.status===g.BID_TARGETING_SET}))
								.map(u.removeRequestId)},b.getHighestCpmBids=function(e){var t=(0,g.getHighestCpmBidsFromBidPool)
									(l.auctionManager.getBidsReceived(),u.getLatestHighestCpmBid);return g.targeting.getWinningBids(e,t)
									.map(u.removeRequestId)},b.getConfig=f.config.getConfig,b.setConfig=f.config.setConfig,b.que.push
									((function(){return(0,d.listenMessagesFromCreative)()})),b.cmd.push=function(e){if("function"==typeof e)
									try{e.call()}catch(e){S.logError("Error processing command :",e.message,e.stack)}else S.logError
									("Commands written into pbjs.cmd.push must be wrapped in a function")},b.que.push=b.cmd.push,b.processQueue=
									function(){G(b.que),G(b.cmd)}},516:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})
									,t.listenMessagesFromCreative=function(){addEventListener("message",o,!1)};var m=i(n(9)),b=n(17),r=n(4),h=n(0),
									S=n(29),E=i(n(10));function i(e){return e&&e.__esModule?e:{default:e}}var A=r.EVENTS.BID_WON;function o(e)
									{var t,n,r,i,o,a,u,d,s,c,f,l,g,p=e.message?"message":"data",v={};try{v=JSON.parse(e[p])}catch(e){return}
									if(v.adId){var y=(0,E.default)(S.auctionManager.getBidsReceived(),(function(e){return e.adId===v.adId}));

						"Prebid Request"===v.message&&(t=y,n=v.adServerDomain,r=e.source,i=t.adId,o=t.ad,a=t.adUrl,u=t.width,d=t.height,
							i&&(c=(s=t).adUnitCode,f=s.width,l=s.height,(g=document.getElementById((0,E.default)(window.googletag.pubads()
								.getSlots().filter((0,h.isSlotMatchingAdUnitCode)(c)),(function(e){return e})).getSlotElementId())
							.querySelector("iframe")).width=""+f,g.height=""+l,r.postMessage(JSON.stringify({message:"Prebid Response",
								ad:o,adUrl:a,adId:i,width:u,height:d}),n)),S.auctionManager.addWinningBid(y),m.default.emit(A,y)),
						"Prebid Native"===v.message&&((0,b.fireNativeTrackers)(v,y),S.auctionManager.addWinningBid(y),
							m.default.emit(A,y))}}},517:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),
						n.boundHook=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];
							for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.disableOverrides=f,
								n.addBidResponseHook=l,n.getConfig=g,n.sessionLoader=function(){var e=0<arguments.length&&void 
									0!==arguments[0]?arguments[0]:window.sessionStorage,t=void 0;try{t=JSON.parse(e.getItem(u))}
									catch(e){}t&&c(t,!0)};var r=t(3),a=t(0),i=t(41),u="pbjs:debugging",d=n.boundHook=void 0;


function s(e){(0,a.logMessage)("DEBUG: "+e)}function c(e){var t=1<arguments.length&&void 0!==arguments[1]
	&&arguments[1];r.config.setConfig({debug:!0}),s("bidder overrides enabled"+(t?" from session":""))
	,d&&i.addBidResponse.removeHook(d),n.boundHook=d=l.bind(null,e),i.addBidResponse.addHook(d,5)}


function f(){d&&(i.addBidResponse.removeHook(d),s("bidder overrides disabled"))}


function l(e,r,i,t){if(Array.isArray(e.bidders)&&-1===e.bidders.indexOf(i.bidderCode))return n="bidder '"+i
.bidderCode+"' excluded from auction by bidder overrides",void(0,a.logWarn)("DEBUG: "+n);var n;Array.isArray
(e.bids)&&e.bids.forEach((function(n){n.bidder&&n.bidder!==i.bidderCode||n.adUnitCode&&n.adUnitCode!==r||
	(i=o({},i),Object.keys(n).filter((function(e){return-1===["bidder","adUnitCode"].indexOf(e)})).forEach
		((function(e){var t=n[e];s("bidder overrides changed '"+r+"/"+i.bidderCode+"' bid."+e+" from '"+
			i[e]+"' to '"+t+"'"),i[e]=t})))})),t(r,i)}function g(e){if(e.enabled){try{window.sessionStorage
	.setItem(u,JSON.stringify(e))}catch(e){}c(e)}else{f();try{window.sessionStorage.removeItem(u)}catch(e){}}}
	r.config.getConfig("debugging",(function(e){return g(e.debugging)}))},52:function(e,t){
		e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},
		53:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},54:function
		(e,t,n){var r=n(25);e.exports=function(e){return Object(r(e))}},55:function(e,t,n){var r=n(56);
			e.exports=function(e,t){return new(r(e))(t)}},56:function(e,t,n){var r=n(16),i=n(38),o=n(26)
				("species");e.exports=function(e){var t;return i(e)&&("function"!=typeof(t=e.constructor)||
					t!==Array&&!i(t.prototype)||(t=void 0),r(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}}
		,57:function(e,t,n){var r=n(13),i=n(19),o="__core-js_shared__",a=i[o]||(i[o]={});(e.exports=function(e,t)
			{return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(58)?"pure":"global",
			copyright:"© 2018"})},58:function(e,t){e.exports=!0},59:function(e,t){var n=0,r=Math.random();
				e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},
				6:function(e,t,n){n(60),e.exports=n(13).Array.includes},60:function(e,t,n){"use strict";var r=n
				(15),i=n(61)(!0);r(r.P,"Array",{includes:function(e){return i(this,e,1<arguments.length?arguments[1]:
					void 0)}}),n(27)("includes")},61:function(e,t,n){var d=n(62),s=n(36),c=n(63);e.exports=function(u)
					{return function(e,t,n){var r,i=d(e),o=s(i.length),a=c(n,o);if(u&&t!=t){for(;a<o;)if((r=i[a++])!=r)
					return!0}else for(;a<o;a++)if((u||a in i)&&i[a]===t)return u||a||0;return!u&&-1}}},62:function
					(e,t,n){var r=n(35),i=n(25);e.exports=function(e){return r(i(e))}},63:function(e,t,n){var r=n(37),
						i=Math.max,o=Math.min;e.exports=function(e,t){return(e=r(e))<0?i(e+t,0):o(e,t)}},64:function(e,t)
						{e.exports=function e(t){var n=Array.isArray(t)?[]:{};for(var r in t){var i=t[r];n[r]=i&&"object"==typeof i?e(i)
						:i}return n}},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var
						 f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e)
						 {return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};

		t.setSizeConfig=a,t.resolveStatus=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},
		t=e.labels,n=void 0===t?[]:t,r=e.labelAll,i=void 0!==r&&r,o=e.activeLabels,a=void 0===o?[]:o,
		u=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],d=(c=2<arguments.length&&void 0!==arguments[2]
			?arguments[2]:p,c.reduce((function(n,e){return"object"===(void 0===e?"undefined":f(e))&&"string"==typeof
			 e.mediaQuery?matchMedia(e.mediaQuery).matches&&(Array.isArray(e.sizesSupported)&&(n.shouldFilter=!0),
			 ["labels","sizesSupported"].forEach((function(t){return(e[t]||[]).forEach((function(e){return n[t][e]=!0}))})))
			 :(0,l.logWarn)('sizeConfig rule missing required property "mediaQuery"'),n}),{labels:{},sizesSupported:{}
			,shouldFilter:!1})),s=void 0;var c;s=d.shouldFilter?u.filter((function(e){return d.sizesSupported[e]})):
		u;return{active:0<s.length&&(0===n.length||!i&&(n.some((function(e){return d.labels[e]}))||n.some((function(e)
			{return(0,g.default)(a,e)})))||i&&n.reduce((function(e,t){return e?d.labels[t]||(0,g.default)(a,t):e}),!0)),
		sizes:s}};var r,i=n(3),l=n(0),o=n(6),g=(r=o)&&r.__esModule?r:{default:r};var p=[];function a(e){p=e}
		i.config.getConfig("sizeConfig",(function(e){return a(e.sizeConfig)}))},66:function(e,t,n){"use strict";

		Object.defineProperty(t,"__esModule",{value:!0}),t.hasNonVideoBidder=t.videoBidder=t.videoAdUnit=void 0,
		t.isValidVideoBid=function(e,t){var n=(0,o.getBidRequest)(e.adId,t),r=n&&(0,o.deepAccess)(n,"mediaTypes.video"),
		i=r&&(0,o.deepAccess)(r,"context");if(!n||r&&i!==s)return a.config.getConfig("cache.url")||!e.vastXml||e.vastUrl?!
		(!e.vastUrl&&!e.vastXml):((0,o.logError)
		('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n  
		   Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),!1);if(i===s)return!
		   (!e.renderer&&!n.renderer);return!0};var r,i=n(8),o=n(0),a=n(3),u=n(6),d=(r=u)&&r.__esModule?r:{default:r};

		var s="outstream",c=(t.videoAdUnit=function(e){var t="video"===e.mediaType,n=(0,o.deepAccess)(e,"mediaTypes.video");

		return t||n},t.videoBidder=function(e){return(0,d.default)(i.videoAdapters,e.bidder)});t.hasNonVideoBidder
		=function(e){return e.bids.filter((function(e){return!c(e)})).length}},7:function(e,t,n){"use strict";

		Object.defineProperty(t,"__esModule",{value:!0}),t.ajax=void 0;var l=Object.assign||function(e)
		{for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call
			(n,r)&&(e[r]=n[r])}return e},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e)
			{return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol
			.prototype?"symbol":typeof e};t.ajaxBuilder=r;var p=n(11),v=n(0),y=4;t.ajax=r();function r(){
				var s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:3e3,e=1<arguments.length&&void 
			0!==arguments[1]?arguments[1]:{},c=e.request,f=e.done;return function(e,t,n){var 
				r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};try{var i=void 0,o=r.method||
					(n?"POST":"GET"),a=document.createElement("a");a.href=e;var u="object"===(void 0===t?"
					undefined":g(t))&&null!==t?t:{success:function(){v.logMessage("xhr success")},error:
					function(e){v.logError("xhr error",null,e)}};if("function"==typeof t&&(u.success=t),
						(i=new window.XMLHttpRequest).onreadystatechange=function(){if(i.readyState===y)
							{"function"==typeof f&&f(a.origin);var e=i.status;200<=e&&e<300||304===e?u.success
							(i.responseText,i):u.error(i.statusText,i)}},i.ontimeout=function(){v.logError
								("  xhr timeout after ",i.timeout,"ms")},"GET"===o&&n){var d=(0,p.parse)(e,r);
						l(d.search,n),e=(0,p.format)(d)}i.open(o,e),i.timeout=s,r.withCredentials&&
						(i.withCredentials=!0),v._each(r.customHeaders,(function(e,t){i.setRequestHeader(t,e)}))
						,r.preflight&&i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader
						("Content-Type",r.contentType||"text/plain"),"function"==typeof c&&c(a.origin),
						"POST"===o&&n?i.send(n):i.send()}catch(e){v.logError("xhr construction",e)}}}},
						8:function(e,b,t){"use strict";var h=function(e,t){if(Array.isArray(e))return e;if
							(Symbol.iterator in Object(e))return(function(e,t){var n=[],r=!0,i=!1,o=void 0;
								try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value)
									,!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}
								finally{if(i)throw o}}return n})(e,t);throw new TypeError
								("Invalid attempt to destructure non-iterable instance")},f=Object.assign||function(e)
								{for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object
								.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S=t(0),l=t(65),g=t(17),
								c=t(1),E=t(7),A=t(3),T=n(t(6)),I=n(t(10));function n(e){return e&&e.__esModule?e:
								{default:e}}var _=t(0),w=t(4),C=t(9),O=void 0,B={};b.bidderRegistry=B,b.aliasRegistry={};
								var N={};A.config.getConfig("s2sConfig",(function(e){N=e.s2sConfig}));var r={};function p(e,t)
								return e.labelAll?{labelAll:!0,labels:e.labelAll,activeLabels:t}:{labelAll:!1,labels:e.labelAny,
								activeLabels:t}}function R(e){var r=e.bidderCode,d=e.auctionId,s=e.bidderRequestId,t=e.adUnits,
								c=e.labels;return t.reduce((function(e,a){var t=(0,l.resolveStatus)(p(a,c),a.sizes),n=t
								.active,u=t.sizes;return n&&e.push(a.bids.filter((function(e){return e.bidder===r}))
								.reduce((function(e,t){a.mediaTypes&&(_.isValidMediaTypes(a.mediaTypes)?t=f({},t,
								{mediaTypes:a.mediaTypes}):_.logError("mediaTypes is not correctly configured for adunit "+a.code));
								var n=a.nativeParams||_.deepAccess(a,"mediaTypes.native");n&&(t=f({},t,{nativeParams:
								(0,g.processNativeAdUnitParams)(n)})),t=f({},t,(0,S.getDefinedParams)(a,["mediaType","renderer"]));

						var r=(0,l.resolveStatus)(p(t,c),u),i=r.active,o=r.sizes;return i&&e.push(f({},t,
							{adUnitCode:a.code,transactionId:a.transactionId,sizes:o,bidId:t.bid_id||_.getUniqueIdentifierStr(),
							bidderRequestId:s,auctionId:d})),e}),[])),e}),[]).reduce(S.flatten,[]).filter((function(e)
							{return""!==e}))}function U(){return N&&N.enabled&&N.testing&&O}b.gdprDataHandler=
							{consentData:null,setConsentData:function(e){this.consentData=e},getConsentData:function()
							{return this.consentData}},b.makeBidRequests=function(e,i,o,a,u){var d=[];e=b.checkBidRequestSizes(e);

						var t=(0,S.getBidderCodes)(e);A.config.getConfig("bidderSequence")===A.RANDOM&&(t=(0,S.shuffle)(t));

						var n,r,s,c=t,f=[];if(N.enabled){U()&&(f=O.getSourceBidderMap(e)[O.CLIENT]);var l=N.bidders;c=t
						.filter((function(e){return!(0,T.default)(l,e)||(0,T.default)(f,e)}));var g=(n=e,r=N.bidders,
							(s=_.deepClone(n)).forEach((function(e){e.bids=e.bids.filter((function(e){return(0,T.default)
							(r,e.bidder)&&(!U()||e.finalSource!==O.CLIENT)})).map((function(e){return 
							e.bid_id=_.getUniqueIdentifierStr(),e}))})),s=s.filter((function(e){return 0!==e.bids.length}))),
						p=_.generateUUID();l.forEach((function(e){var t=_.getUniqueIdentifierStr(),n={bidderCode:e,auctionId:
							o,bidderRequestId:t,tid:p,adUnitsS2SCopy:g,bids:R({bidderCode:e,auctionId:o,bidderRequestId:t,adUnits:
							g,labels:u}),auctionStart:i,timeout:N.timeout,src:w.S2S.SRC};0!==n.bids.length&&d.push(n)}))}
						var v,y,m=(v=e,(y=_.deepClone(v)).forEach((function(e){e.bids=e.bids.filter((function(e){return!U()||
							e.finalSource!==O.SERVER}))})),y=y.filter((function(e){return 0!==e.bids.length})));return c.forEach
						((function(e){var t=_.getUniqueIdentifierStr(),n={bidderCode:e,auctionId:o,bidderRequestId:t,
							bids:R({bidderCode:e,auctionId:o,bidderRequestId:t,adUnits:m,labels:u}),auctionStart:i,timeout:a}
							,r=B[e];r||_.logError("Trying to make a request for bidder that does not exist: "+e),
							r&&n.bids&&0!==n.bids.length&&d.push(n)})),b.gdprDataHandler.getConsentData()&&d.forEach
						((function(e){e.gdprConsent=b.gdprDataHandler.getConsentData()})),d},b.checkBidRequestSizes=function(e)
						{function u(e){return Array.isArray(e)&&2===e.length&&_.isInteger(e[0])&&_.isInteger(e[1])}
						return e.forEach((function(e){e.sizes&&_.logWarn("Usage of adUnits.sizes will eventually be deprecated. 
					 Please define size dimensions within the corresponding area of the mediaTypes.<object> 
					 (eg mediaTypes.banner.sizes).");var t=e.mediaTypes;if(t&&t.banner){var n=t.banner;if(n.sizes)
					 	{var r=_.getAdUnitSizes(e);n.sizes=r,e.sizes=r}else _.logError
					 	("Detected a mediaTypes.banner object did not include sizes.  
					 	This is a required field for the mediaTypes.banner object.  
					 	Removing invalid mediaTypes.banner object from request.")
					 	,delete e.mediaTypes.banner}if(t&&t.video){var i=t.video;if(i.playerSize)
					 		if(Array.isArray(i.playerSize)&&1===i.playerSize.length&&i.playerSize.every(u))
					 			e.sizes=i.playerSize;else if(u(i.playerSize)){var o=[];o.push(i.playerSize),_
					 			.logInfo("Transforming video.playerSize from "+i.playerSize+" to "+o+" so it's in the proper format.")
					 			,e.sizes=i.playerSize=o}else _.logError("Detected incorrect configuration of mediaTypes.video.playerSize.
					 		  Please specify only one set of dimensions in a format like: [[640, 480]]. 
					 		  Removing invalid mediaTypes.video.playerSize property from request.")
					 		  ,delete e.mediaTypes.video.playerSize}if(t&&t.native){var a=t.native;
					 		  a.image&&a.image.sizes&&!Array.isArray(a.image.sizes)&&
					(_.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.")
						,delete e.mediaTypes.native.image.sizes),a.image&&a.image.aspect_ratios&&!Array
					.isArray(a.image.aspect_ratios)&&(_.logError
						("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.")
						,delete e.mediaTypes.native.image.aspect_ratios),a.icon&&a.icon.sizes&&!Array.isArray(a.icon.sizes)&&
					(_.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.")
						,delete e.mediaTypes.native.icon.sizes)}})),e},b.callBids=function(e,t,i,o,a,u){if(t.length)
					 		{var n=t.reduce((function(e,t){return e[Number(void 0!==t.src&&t.src===w.S2S.SRC)]
					 			.push(t),e}),[[],[]]),r=h(n,2),d=r[0],s=r[1];if(s.length){var c=(0,E.ajaxBuilder)
					 			(u,a?{request:a.request.bind(null,"s2s"),done:a.done}:void 0),f=N.bidders,l=B[N.adapter],
					 			g=s[0].tid,p=s[0].adUnitsS2SCopy;if(p.forEach((function(n){var e=n.bids
					 			.filter((function(t){return(0,I.default)(s,(function(e){return e.bidderCode===t.bidder&&
					 			(0,I.default)(e.bids,(function(e){return e.adUnitCode===n.code}))}))}));n.bids=e})),
					 			p=p.filter((function(e){return 0<e.bids.length})),l){var v={tid:g,ad_units:p};
					 			if(v.ad_units.length){var y=s.map((function(e){return e.start=(0,S.timestamp)(),
					 				e.doneCbCallCount=0,o(e.bidderRequestId)})),m=v.ad_units.reduce((function(e,t)
					 				{return e.concat((t.bids||[]).reduce((function(e,t){return e.concat(t.bidder)}),[]))}),[]);

				_.logMessage("CALLING S2S HEADER BIDDERS ==== "+f.filter((function(e){return(0,T.default)(m,e)})).join(","))
				,s.forEach((function(e){C.emit(w.EVENTS.BID_REQUESTED,e)})),l.callBids(v,s,i,(function(){return y
					.forEach((function(e){return e()}))}),c)}}}d.forEach((function(e){e.start=(0,S.timestamp)();

				var t=B[e.bidderCode];_.logMessage("CALLING BIDDER ======= "+e.bidderCode),C.emit(w.EVENTS.BID_REQUESTED,e),
				e.doneCbCallCount=0;var n=o(e.bidderRequestId),r=(0,E.ajaxBuilder)(u,a?{request:a.request.bind(null,e.bidderCode)
					,done:a.done}:void 0);t.callBids(e,i,n,r)}))}else _.logWarn
					("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")}
					,b.videoAdapters=[],b.registerBidAdapter=function(e,t){var n=(2<arguments.length&&void 0!==arguments[2]
						?arguments[2]:{}).supportedMediaTypes,r=void 0===n?[]:n;e&&t?"function"==typeof e.callBids?
					(B[t]=e,(0,T.default)(r,"video")&&b.videoAdapters.push(t),(0,T.default)(r,"native")
						&&g.nativeAdapters.push(t)):_.logError("Bidder adaptor error for bidder code: "+t
						+"bidder must implement a callBids() function"):_.logError("bidAdaptor or bidderCode not specified")},
						b.aliasBidAdapter=function(t,e){var n,r;if(void 0===B[e]){var i=B[t];if(void 0===i){var o=A.config.getConfig
							("s2sConfig"),a=o&&o.bidders;a&&(0,T.default)(a,e)?b.aliasRegistry[e]=t:_.logError('bidderCode "'+t
							+'" is not an existing bidder.',"adaptermanager.aliasBidAdapter")}else try{var u=void 0,d=(n=t,r=[],
								(0,T.default)(b.videoAdapters,n)&&r.push("video"),(0,T.default)(g.nativeAdapters,n)&&r.push("native"),
								r);if(i.constructor.prototype!=Object.prototype)(u=new i.constructor).setBidderCode(e);
							else{var s=i.getSpec();u=(0,c.newBidder)(f({},s,{code:e})),b.aliasRegistry[e]=t}
							this.registerBidAdapter(u,e,{supportedMediaTypes:d})}catch(e){_.logError
								(t+" bidder does not currently support aliasing.","adaptermanager.aliasBidAdapter")}}
								else _.logMessage('alias name "'+e+'" has been already specified.')},b.registerAnalyticsAdapter=function(e)
								{var t=e.adapter,n=e.code;t&&n?"function"==typeof t.enableAnalytics?(t.code=n,r[n]=t):_.logError
							('Prebid Error: Analytics adaptor error for analytics "'+n+'"\n      analytics adapter must implement an enableAnalytics() function')
							:_.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")},
							b.enableAnalytics=function(e){_.isArray(e)||(e=[e]),_._each(e,(function(e){var t=r[e.provider];

						t?t.enableAnalytics(e):_.logError("Prebid Error: no analytics adapter found in registry for\n        "
							+e.provider+".")}))},b.getBidAdapter=function(e){return B[e]},b.setS2STestingModule=function(e){O=e}
							,b.callTimedOutBidders=function(t,n,r){n=n.map((function(e){return e.params=_.getUserConfiguredParams
								(t,e.adUnitCode,e.bidder),e.timeout=r,e})),n=_.groupBy(n,"bidder"),Object.keys(n).forEach((function(t)
								{try{var e=B[t].getSpec();e&&e.onTimeout&&"function"==typeof e.onTimeout&&(_.logInfo("Invoking "+t+
								".onTimeout"),e.onTimeout(n[t]))}catch(e){_.logWarn("Error calling onTimeout of "+t)}}))}},
								9:function(e,t,n){"use strict";var u,r,i=Object.assign||function(e){
									for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)
										Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=n(0),o=n(4),
									a=Array.prototype.slice,s=Array.prototype.push,c=d._map(o.EVENTS,(function(e){return e})),
									f=o.EVENT_ID_PATHS,l=[];e.exports=(u={},(r={}).on=function(e,t,n){if(i=e,d.contains(c,i))
										{var r=u[e]||{que:[]};n?(r[n]=r[n]||{que:[]},r[n].que.push(t)):r.que.push(t),u[e]=r}
									else d.logError("Wrong event name : "+e+" Valid event names :"+c);var i},r.emit=function(e)
								{!(function(e,t){d.logMessage("Emitting event for: "+e);var n=t[0]||{},r=n[f[e]],i=u[e]||{que:[]},
									o=d._map(i,(function(e,t){return t})),a=[];l.push({eventType:e,args:n,id:r}),r&&d.contains(o,r)&&
									s.apply(a,i[r].que),s.apply(a,i.que),d._each(a,(function(e){if(e)try{e.apply(null,t)}catch(e)
										{d.logError("Error executing handler:","events.js",e)}}))})(e,a.call(arguments,1))}
										,r.off=function(e,n,r){var i=u[e];d.isEmpty(i)||d.isEmpty(i.que)&&d.isEmpty(i[r])||r&&
										(d.isEmpty(i[r])||d.isEmpty(i[r].que))||(r?d._each(i[r].que,(function(e)
											{var t=i[r].que;e===n&&t.splice(d.indexOf.call(t,e),1)})):d._each(i.que,(function(e)
											{var t=i.que;e===n&&t.splice(d.indexOf.call(t,e),1)})),u[e]=i)},r.get=function()
										{return u},r.getEvents=function(){var n=[];return d._each(l,(function(e){var t=i({},e);

							n.push(t)})),n},r)}});pbjsChunk([120],{135:function(a,e,t){t(136),a.exports=t(137)},136:function
(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.spec=void 0;var g=
function(a,e){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return(function(a,e)
	{var t=[],n=!0,r=!1,i=void 0;try{for(var o,d=a[Symbol.iterator]();!(n=(o=d.next()).done)&&
		(t.push(o.value),!e||t.length!==e);n=!0);}catch(a){r=!0,i=a}finally{try{!n&&d.return&&d.return()}
	finally{if(r)throw i}}return t})(a,e);throw new TypeError
	("Invalid attempt to destructure non-iterable instance")},
	n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a)
	{return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a}
	,r=t(1),i=t(3),p=t(11),l=t(0),b=d(t(21)),o=d(t(6));function d(a){return a&&
		a.__esModule?a:{default:a}}var w=function(a){return Array.isArray(a)&&2===a.length?a[0]+"x"+
		a[1]:a},A=function(a){return a.split("x").map(Number)},h=function(a){return(0,o.default)
			(["300x250","320x50"],a)},v=function(a){return(0,o.default)(["video","native"],a)},_=function(a)
			{return"video"===a},y=function(a){return"fullwidth"===a},x=function(){return encodeURIComponent
				((0,l.getTopWindowUrl)())},c=e.spec={code:"audienceNetwork",supportedMediaTypes:
				["banner","video"],isBidRequestValid:function(a){return"object"===n(a.params)&&
				"string"==typeof a.params.placementId&&0<a.params.placementId.length&&Array.isArray(a.sizes)&&
				0<a.sizes.length&&(!y(a.params.format)||a.sizes.map(w).some((function(a){return"300x250"===a})))
				&&(v(a.params.format)||a.sizes.map(w).some(h))},buildRequests:function(a){var t=[],r=[],i=[],o=
					[],d=[];a.forEach((function(n){return n.sizes.map(w).filter((function(a){return e=a,
						t=n.params.format,y(t)&&"300x250"===w(e)||v(t)||h(w(e));var e,t})).slice(0,1)
					.forEach((function(a){var e;t.push(n.params.placementId),r.push(n.params.format||a)
						,i.push(a),o.push((e=n.params.format,_(e)?"":"5.5.web")),d.push(n.bidId)}))}));

	var e=Boolean(window&&window.location&&"string"==typeof window.location.search&&-1!==
		window.location.search.indexOf("anhb_testmode")).toString(),n=x(),c={placementids:t,adformats:r,
		testmode:e,pageurl:n,sdk:o,adapterver:"1.0.0",platform:"241394079772386",platver:"1.16.0"},
		s=(0,b.default)(r,_);if(-1!==s){var u=A(i[s]),f=g(u,2);c.playerwidth=f[0],c.playerheight=f[1]}
		(0,l.isSafariBrowser)()&&(c.cb=(0,l.generateUUID)());var m=(0,p.formatQS)(c);

	return[{adformats:r,data:m,method:"GET",requestIds:d,sizes:i,url:"https://an.facebook.com/v2/placementbid.json"}]}
	,interpretResponse:function(a,e){var t=a.body,b=e.adformats,h=e.requestIds,v=e.sizes,
		y=Number(i.config.getConfig().bidderTimeout),n=t.bids,r=void 0===n?{}:n;return Object.keys(r)
		.map((function(a){return r[a]})).reduce((function(a,e){return a.concat(e)}),[]).map((function(a,e)
			{var t,n,r=a.bid_id,i=a.placement_id,o=a.bid_price_cents,d=b[e],c=A(w(v[e])),s=g(c,2),
				u=s[0],f=s[1],m="<html><head>"+("native"===(n=d)?'<script>window.onload=function()
				{if(parent){var o=document.getElementsByTagName("head")[0];

	var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild
	(s[i].cloneNode(true));}}<\/script>':"")+
	"</head><body><div style=\"display:none;position:relative;\">\n<script type='text/javascript'>var data = {placementid:'"+
	(t=i)+"',format:'"+n+"',bidid:'"+r+"',onAdLoaded:function(e){console.log('Audience Network ["+t+"] ad loaded');e.style.display = 'block';},onAdError:function(c,m){
		console.log('Audience Network ["+t+"] error (' + c + ') ' + m);}};\n(function(a,b,c)
			{var d='https://www.facebook.com',e='https://connect.facebook.net/en_US/fbadnw55.js',
			f={iframeLoaded:true,xhrLoaded:true},g=a.data,h=function(){if(Date.now){return Date.now();}
		else return +new Date();},i=function(aa){var ba=d+'/audience_network/client_event',
		ca={cb:h(),event_name:'ADNW_ADERROR',ad_pivot_type:'audience_network_mobile_web',sdk_version:'5.5.web',
		app_id:g.placementid.split('_')[0],publisher_id:g.placementid.split('_')[1],error_message:aa},da=[];

	for(var ea in ca)da.push(encodeURIComponent(ea)+'='+encodeURIComponent(ca[ea]));var fa=ba+'?'+da.join
		('&'),ga=new XMLHttpRequest();ga.open('GET',fa,true);ga.send();if(g.onAdError)
	g.onAdError('1000','Internal error.');},j=function(){if(b.currentScript){return b.currentScript;}
	else{var aa=b.getElementsByTagName('script');return aa[aa.length-1];}},k=function(aa){
		try{return aa.document.referrer;}catch(ba){}return '';},l=function(){var aa=a,ba=[aa];
		try{while(aa!==aa.parent&&aa.parent.document)ba.push(aa=aa.parent);}catch(ca){}
		return ba.reverse();},m=function(){var aa=l();for(var ba=0;ba<aa.length;ba++)
		{var ca=aa[ba],da=ca.ADNW||{};ca.ADNW=da;if(!ca.ADNW)continue;return da.v55=da.v55||{ads:[],window:ca};}
		throw new Error('no_writable_global');},n=function(aa){var ba=aa.indexOf('/',aa.indexOf('://')+3);

	if(ba===-1)return aa;return aa.substring(0,ba);},o=function(aa){return aa.location.href||k(aa);}
	,p=function(aa){if(aa.sdkLoaded)return;var ba=aa.window.document,ca=ba.createElement('iframe');
	ca.name='fbadnw';ca.style.display='none';ba.body.appendChild(ca);
	var da=ca.contentDocument.createElement('script');
	da.src=e;da.async=true;ca.contentDocument.body.appendChild(da);aa.sdkLoaded=true;}
	,q=function(aa){var ba=/^https?:\\/\\/www\\.google(\\.com?)?\\.\\w{2,3}$/;return !!aa.match(ba);}
	,r=function(aa){return !!aa.match(/cdn\\.ampproject\\.org$/);},
	s=function(){var aa=c.ancestorOrigins||[],ba=aa[aa.length-1]||c.origin,ca=aa[aa.length-2]||
		c.origin;if(q(ba)&&r(ca)){return n(ca);}else return n(ba);},t=function(aa){try{return JSON.parse(aa);}
	catch(ba){i(ba.message);throw ba;}},u=function(aa,ba,ca){if(!aa.iframe){var da=ca.createElement('iframe');

	da.src=d+'/audiencenetwork/iframe/';da.style.display='none';ca.body.appendChild(da);

	aa.iframe=da;aa.iframeAppendedTime=h();aa.iframeData={};}ba.iframe=aa.iframe;
	ba.iframeData=aa.iframeData;ba.tagJsIframeAppendedTime=aa.iframeAppendedTime||0;}
	,v=function(aa){var ba=d+'/audiencenetwork/xhr/?sdk=5.5.web';for(var ca in aa)
	if(typeof aa[ca]!=='function')ba+='&'+ca+'='+encodeURIComponent(aa[ca]);var da=new XMLHttpRequest();
	da.open('GET',ba,true);da.withCredentials=true;da.onreadystatechange=function(){if(da.readyState===4)
		{var ea=t(da.response);aa.events.push({name:'xhrLoaded',source:aa.iframe.contentWindow,data:ea,
			postMessageTimestamp:h(),receivedTimestamp:h()});}};da.send();},w=function(aa,ba)
		{var ca=d+'/audiencenetwork/xhriframe/?sdk=5.5.web';for(var da in ba)if(typeof ba[da]
			!=='function')ca+='&'+da+'='+encodeURIComponent(ba[da]);var ea=b.createElement('iframe');
		ea.src=ca;ea.style.display='none';b.body.appendChild(ea);ba.iframe=ea;ba.iframeData={};
	ba.tagJsIframeAppendedTime=h();},x=function(aa){var ba=function(event){try{var da=event.data;
		if(da.name in f)aa.events.push({name:da.name,source:event.source,data:da.data});}catch(ea){}}
		,ca=aa.iframe.contentWindow.parent;ca.addEventListener('message',ba,false);},y=function(aa)
		{if(aa.context&&aa.context.sourceUrl)return true;try{return !!JSON.parse(decodeURI(aa.name))
			.ampcontextVersion;}catch(ba){return false;}},z=function(aa){var ba=h(),ca=l()[0],da=j()
				.parentElement,ea=ca!=a.top,fa=ca.$sf&&ca.$sf.ext,ga=o(ca),ha=m();p(ha);var ia={amp:y(ca),events:[]
					,tagJsInitTime:ba,rootElement:da,iframe:null,tagJsIframeAppendedTime:ha.iframeAppendedTime||0,
					url:ga,domain:s(),channel:n(o(ca)),width:screen.width,height:screen.height,
					pixelratio:a.devicePixelRatio,placementindex:ha.ads.length,crossdomain:ea,safeframe:!!fa,
					placementid:g.placementid,format:g.format||'300x250',testmode:!!g.testmode,onAdLoaded:
					g.onAdLoaded,onAdError:g.onAdError};if(g.bidid)ia.bidid=g.bidid;if(ea){w(ha,ia);}
					else{u(ha,ia,ca.document);v(ia);}; x(ia);ia.rootElement.dataset.placementid=ia.placementid;
					ha.ads.push(ia);};try{z();}catch(aa){i(aa.message||aa);throw aa;}})(window,document,location);
					\n<\/script>\n"+("native"===n?'<div class="thirdPartyRoot"><a class="fbAdLink">
					<div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div>
					<div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div>
					<div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>':"")+"</div></body></html>
					",p={requestId:h[e],cpm:o/100,width:u,height:f,ad:m,ttl:y,creativeId:i,netRevenue:!0,currency:"
					USD",hb_bidder:"fan",fb_bidid:r,fb_format:d,fb_placementid:i};if(_(d)){var l=x();p.mediaType="
					video",p.vastUrl="https://an.facebook.com/v1/instream/vast.xml?placementid="+i+"&pageurl="+l+
					"&playerwidth="+u+"&playerheight="+f+"&bidid="+r}return p}))}};(0,r.registerBidder)(c)},
		137:function(a,e){}},[135]);pbjs.processQueue();var PREBID_TIMEOUT=2000;var adUnits=[{code:'div-gpt-ad-1'
		,sizes:[[300,250]],bids:[{bidder:'audienceNetwork',params:{placementId:'392316201254856_424777178008758',testmode:false
		,format:'native'}}]},{code:'div-gpt-ad-2',sizes:[[300,250]],bids:[{bidder:'audienceNetwork',
		params:{placementId:'392316201254856_424776978008778',testmode:false,format:'fullwidth'}}]}]
		;var pbjs=pbjs||{};pbjs.que=pbjs.que||[];var googletag=googletag||{};

		googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.pubads().disableInitialLoad();});
		pbjs.que.push(function(){pbjs.addAdUnits(adUnits);pbjs.requestBids({bidsBackHandler:sendAdserverRequest});});
		function sendAdserverRequest(){if(pbjs.adserverRequestSent)
			return;pbjs.adserverRequestSent=true;googletag.cmd.push(function()
				{pbjs.que.push(function(){pbjs.setTargetingForGPTAsync();googletag.pubads().refresh();});});}

setTimeout(function(){sendAdserverRequest();},PREBID_TIMEOUT);(function(){var gads=document.createElement('script');
	gads.async=true;gads.type='text/javascript';var useSSL='https:'==document.location.protocol;gads.src=(useSSL?'https:':'http:')+
'//www.googletagservices.com/tag/js/gpt.js';var node=document.getElementsByTagName('script')[0];

node.parentNode.insertBefore(gads,node);})();googletag.cmd.push(function()
{googletag.defineSlot('/19968336/header-bid-tag-1',[[300,250]],'div-gpt-ad-1')
.addService(googletag.pubads());googletag.defineSlot('/19968336/header-bid-tag-2'
	,[[300,250]],'div-gpt-ad-2').addService(googletag.pubads());googletag.defineSlot
('/74101851/Desktop_Animemovil.com_728x90_1',[728,90],'div-gpt-ad-1533999584710-0')
.addService(googletag.pubads());googletag.defineSlot('/74101851/Desktop_Animemovil.com_300x250_1',
	[300,250],'div-gpt-ad-1533999664038-0').addService(googletag.pubads());

googletag.defineSlot('/74101851/Desktop_Animemovil.com_160x600_1',[160,600],
	'div-gpt-ad-1533999742270-0').addService(googletag.pubads());googletag.defineSlot
('/74101851/Mobile_Animemovil.com_300x250_1',[300,250],'div-gpt-ad-1533999814039-0')
.addService(googletag.pubads());googletag.defineSlot('/74101851/Mobile_Animemovil.com_300x250_2',
	[300,250],'div-gpt-ad-1533999869132-0').addService(googletag.pubads());

pbjs.que.push(function(){pbjs.setTargetingForGPTAsync();});googletag
.pubads().enableSingleRequest();googletag.enableServices();});function detectmob(){
	if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)
		||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)
		||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)
		||navigator.userAgent.match(/Windows Phone/i)){return true;}
else{return false;}}