'use strict';
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jQuery-tools"),require("jquery")):"function"==typeof define&&define.amd?define("jQuery-storeLocator",["jQuery-tools","jquery"],t):"object"==typeof exports?exports["jQuery-storeLocator"]=t(require("jQuery-tools"),require("jquery")):e["jQuery-storeLocator"]=t(e["jQuery-tools"],e.jquery)}(this,function(e,t){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){(function(e,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=o(4),u=r(c);o(3);var h=function(){return"undefined"===u["default"].type(window)?"undefined"===u["default"].type(e)?"undefined"===u["default"].type(n)?{}:n:e:window}();!h.hasOwnProperty("document")&&u["default"].hasOwnProperty("context")&&(h.document=u["default"].context);var d=function(e){function t(){return i(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.initialize=function(){var t=this,o=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return this.currentSearchResults=[],this.currentSearchText=null,this.resultsDomNode=null,this.currentSearchResultsDomNode=null,this.currentlyOpenWindow=null,this.currentlyHighlightedMarker=null,this.searchResultsDirty=!1,this.seenLocations=[],this.markers=[],this.currentSearchResultRange=null,this._options={stores:{northEast:{latitude:85,longitude:180},southWest:{latitude:-85,longitude:-180},number:100,generateProperties:function(e){return e}},addtionalStoreProperties:{},iconPath:"/webAsset/image/storeLocator/",defaultMarkerIconFileName:null,startLocation:null,fallbackLocation:{latitude:51.124213,longitude:10.147705},ip:null,ipToLocation:{applicationInterfaceURL:"{1}://freegeoip.net/json/{2}",timeoutInMilliseconds:5e3,bounds:{northEast:{latitude:85,longitude:180},southWest:{latitude:-85,longitude:-180}}},map:{zoom:3},showInputAfterLoadedDelayInMilliseconds:500,inputFadeInOption:{duration:"fast"},distanceToMoveByDuplicatedEntries:1e-4,marker:{cluster:{gridSize:100,maxZoom:11},icon:{size:{width:44,height:49,unit:"px"},scaledSize:{width:44,height:49,unit:"px"}}},successfulSearchZoom:12,infoWindow:{content:null,additionalMoveToBottomInPixel:120,loadingContent:'<div class="idle">loading...</div>'},searchBox:50,onLoaded:u["default"].noop,onInfoWindowOpen:u["default"].noop,onInfoWindowOpened:u["default"].noop,onAddSearchResults:u["default"].noop,onRemoveSearchResults:u["default"].noop,onOpenSearchResults:u["default"].noop,onCloseSearchResults:u["default"].noop,onMarkerHighlighted:u["default"].noop},e.prototype.initialize.call(this,o),this._options.startLocation?this.initializeMap():!function(){t._options.startLocation=t._options.fallbackLocation;var e=!1;setTimeout(function(){e||(e=!0,t.initializeMap())},t._options.ipToLocation.timeoutInMilliseconds),u["default"].ajax({url:t.stringFormat(t._options.ipToLocation.applicationInterfaceURL,document.location.protocol.substring(0,document.location.protocol.length-1),t._options.ip||""),dataType:"jsonp",cache:!0}).always(function(o,n){e||(e=!0,"success"===n&&(t._options.ipToLocation.bounds&&!new h.google.maps.LatLngBounds(new h.google.maps.LatLng(t._options.ipToLocation.bounds.southWest.latitude,t._options.ipToLocation.bounds.southWest.longitude),new h.google.maps.LatLng(t._options.ipToLocation.bounds.northEast.latitude,t._options.ipToLocation.bounds.northEast.longitude)).contains(new h.google.maps.LatLng(o.latitude,o.longitude))||(t._options.startLocation=o)),t.initializeMap())})}(),this.$domNode},t.prototype.initializeMap=function(){var e=this;this._options.map.center=new h.google.maps.LatLng(this._options.startLocation.latitude,this._options.startLocation.longitude),this.map=new h.google.maps.Map((0,u["default"])("<div>").appendTo(this.$domNode)[0],this._options.map);var t=null;if(this._options.marker.cluster&&(t=new h.MarkerClusterer(this.map,[],this._options.marker.cluster)),u["default"].isArray(this._options.stores))for(var o=this._options.stores,n=Array.isArray(o),r=0,o=n?o:o[Symbol.iterator]();;){var i;if(n){if(r>=o.length)break;i=o[r++]}else{if(r=o.next(),r.done)break;i=r.value}var s=i;u["default"].extend(!0,s,this._options.addtionalStoreProperties);var a=this.createMarker(s);t&&t.addMarker(a)}else if("string"===u["default"].type(this._options.stores))u["default"].getJSON(this._options.stores,function(o){for(var n=o,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var s;if(r){if(i>=n.length)break;s=n[i++]}else{if(i=n.next(),i.done)break;s=i.value}var a=s;u["default"].extend(!0,a,e._options.addtionalStoreProperties);var l=e.createMarker(a);t&&t.addMarker(l)}});else for(var c=new h.google.maps.LatLng(this._options.stores.southWest.latitude,this._options.stores.southWest.longitude),d=new h.google.maps.LatLng(this._options.stores.northEast.latitude,this._options.stores.northEast.longitude),p=0;p<this._options.stores.number;p++){var f=u["default"].extend({latitude:c.lat()+(d.lat()-c.lat())*Math.random(),longitude:c.lng()+(d.lng()-c.lng())*Math.random()},this._options.addtionalStoreProperties),m=this.createMarker(u["default"].extend(f,this._options.stores.generateProperties(f)));t&&t.addMarker(m)}return this.map.controls[h.google.maps.ControlPosition.TOP_LEFT].push(this.$domNode.find("input")[0]),"number"===u["default"].type(this._options.searchBox)?this.initializeGenericSearchBox():(h.google.maps.event.addListener(this.map,"click",function(){return e.closeSearchResults()}),h.google.maps.event.addListener(this.map,"dragstart",function(){return e.closeSearchResults()}),this._options.searchBox=u["default"].extend(!0,{maximumNumberOfResults:50,numberOfAdditionalGenericPlaces:[2,5],maximalDistanceInMeter:1e6,loadingContent:this._options.infoWindow.loadingContent,genericPlaceFilter:function(e){return e.formatted_address.indexOf(" Deutschland")!==-1||e.formatted_address.indexOf(" Germany")!==-1},prefereGenericResults:!0,genericPlaceSearchOptions:{radius:"50000"}},this._options.searchBox),this.initializeDataSourceSearchBox()),h.google.maps.event.addListener(this.map,"zoom_changed",function(){"object"===l(e.currentlyOpenWindow)&&e.currentlyOpenWindow&&e.currentlyOpenWindow.isOpen&&e.map.getZoom()<=e._options.marker.cluster.maxZoom&&(e.currentlyOpenWindow.isOpen=!1,e.currentlyOpenWindow.close())}),this.fireEvent("loaded"),this},t.prototype.initializeDataSourceSearchResultsBox=function(){for(var e={},t=["position","width","top","left","border"],o=0;o<t.length;o++){var n=t[o];e[n]=this.$domNode.find("input").css(n)}return e.marginTop=this.$domNode.find("input").outerHeight(!0),this.resultsDomNode=(0,u["default"])("<div>").addClass(this.constructor.stringCamelCaseToDelimited(this.__name__+"SearchResults")).css(e),this.$domNode.find("input").after(this.resultsDomNode),this},t.prototype.initializeDataSourceSearchBox=function(){var e=this;return this.on(this.$domNode,"keydown",function(t){if(e.currentSearchResults.length){e.currentSearchResultRange?e.currentSearchResultRange=[Math.max(0,e.currentSearchResultRange[0]),Math.min(e.currentSearchResults.length-1,e.currentSearchResultRange[1])]:e.currentSearchResultRange=[0,e.currentSearchResults.length-1];var o=-1;e.currentlyHighlightedMarker&&(o=e.currentSearchResults.indexOf(e.currentlyHighlightedMarker)),t.keyCode===e.keyCode.DOWN?o===-1||e.currentSearchResultRange[1]<o+1?e.highlightMarker(e.currentSearchResults[e.currentSearchResultRange[0]],t):e.highlightMarker(e.currentSearchResults[o+1],t):t.keyCode===e.keyCode.UP?[e.currentSearchResultRange[0],-1].includes(o)?e.highlightMarker(e.currentSearchResults[e.currentSearchResultRange[1]],t):e.highlightMarker(e.currentSearchResults[o-1],t):t.keyCode===e.keyCode.ENTER&&e.currentlyHighlightedMarker&&(t.stopPropagation(),e.currentlyHighlightedMarker&&(e.currentlyHighlightedMarker.infoWindow?e.openMarker(e.currentlyHighlightedMarker,t):e.openPlace(e.currentlyHighlightedMarker.data,t)))}}),this.on(this.$domNode.find("input"),"focus",function(){e.currentSearchText&&e.openSearchResults()}),this.on(this.$domNode.find("input"),"keydown",function(t){for(var o in e.keyCode)if(e.keyCode.hasOwnProperty(o)&&t.keyCode===e.keyCode[o]&&"DOWN"!==o)return}),this.currentSearchText&&this.openSearchResults(),this.on(this.$domNode.find("input"),"click",function(){e.currentSearchText&&e.openSearchResults()}),h.google.maps.event.addListener(this.map,"center_changed",function(){e.currentSearchText&&e.resultsDomNode&&(e.searchResultsDirty=!0)}),this.on(this.$domNode.find("input"),"keyup",this.getUpdateSearchResultsHandler()),this},t.prototype.getUpdateSearchResultsHandler=function(){var e=this,t=new h.google.maps.places.PlacesService(this.map);return this.debounce(function(o){for(var n in e.keyCode)if(o&&o.keyCode===e.keyCode[n]&&!["DELETE","BACKSPACE"].includes(n))return;e.acquireLock(e.constructor._name+"Search",function(){var o=e.$domNode.find("input").val().trim();if(e.currentSearchText===o&&!e.searchResultsDirty)return e.releaseLock(e.constructor._name+"Search");if(e.searchResultsDirty=!1,e.resultsDomNode||e.initializeDataSourceSearchResultsBox(),!o&&e.resultsDomNode)return e.currentSearchText="",e.currentSearchResults=[],e.resultsDomNode.html(""),e.currentSearchResultsDomNode=null,e.closeSearchResults(),e.releaseLock(e.constructor._name+"Search");e.openSearchResults();var n=(0,u["default"])(e._options.searchBox.loadingContent);e.resultsDomNode&&!e.fireEvent("addSearchResults",!1,e,n,e.resultsDomNode,e.currentSearchResultsDomNode||[])&&e.resultsDomNode.html(n),e.currentSearchResultsDomNode&&e.currentSearchResultsDomNode.length&&e.fireEvent("removeSearchResults",!1,e,e.currentSearchResultsDomNode),e.currentSearchResultsDomNode=n,e._options.searchBox.numberOfAdditionalGenericPlaces?t.textSearch(u["default"].extend({query:o,location:e.map.getCenter()},e._options.searchBox.genericPlaceSearchOptions),function(t){t&&e.handleGenericSearchResults(t,o)}):e.performLocalSearch(o)},1e3)})},t.prototype.handleGenericSearchResults=function(e,t){for(var o=this,n=[],r=1,i=function(){if(a){if(l>=s.length)return"break";c=s[l++]}else{if(l=s.next(),l.done)return"break";c=l.value}var e=c;r+=1;var t=h.google.maps.geometry.spherical.computeDistanceBetween(o.map.getCenter(),e.geometry.location);if(t>o._options.searchBox.maximalDistanceInMeter)return"break";if(o._options.searchBox.genericPlaceFilter(e)){var i={data:u["default"].extend(e,{logoFilePath:e.icon.replace(/^http:(\/\/)/,document.location.protocol+"$1"),address:e.formatted_address,distance:t}),position:e.geometry.location,open:function(t){return o.openPlace(e,t)},highlight:function(e,t){o.isHighlighted="stop"!==t}};if(n.push(i),o._options.searchBox.numberOfAdditionalGenericPlaces[1]<r)return"break"}},s=e.sort(function(e,t){return h.google.maps.geometry.spherical.computeDistanceBetween(o.map.getCenter(),e.geometry.location)-h.google.maps.geometry.spherical.computeDistanceBetween(o.map.getCenter(),t.geometry.location)}),a=Array.isArray(s),l=0,s=a?s:s[Symbol.iterator]();;){var c,d=i();if("break"===d)break}return this.performLocalSearch(t,n)},t.prototype.performLocalSearch=function(e){for(var t=this,o=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],n=o.length,r=function(){if(s){if(a>=i.length)return"break";l=i[a++]}else{if(a=i.next(),a.done)return"break";l=a.value}for(var n=l,r=t._options.searchBox.properties,c=Array.isArray(r),u=0,r=c?r:r[Symbol.iterator]();;){var h;if(c){if(u>=r.length)break;h=r[u++]}else{if(u=r.next(),u.done)break;h=u.value}var d=h;if((n.data[d]||0===n.data[d])&&(""+n.data[d]).toLowerCase().replace(/[-_&]+/g," ").indexOf(e.toLowerCase().replace(/[-_&]+/g," "))!==-1){n.open=function(e){return t.openMarker(n,e)},n.highlight=function(e,o){return t.highlightMarker(n,e,o)},o.push(n);break}}},i=this.markers,s=Array.isArray(i),a=0,i=s?i:i[Symbol.iterator]();;){var l,c=r();if("break"===c)break}this._options.searchBox.numberOfAdditionalGenericPlaces&&o.length&&n>this._options.searchBox.numberOfAdditionalGenericPlaces[0]&&o.length>this._options.searchBox.numberOfAdditionalGenericPlaces[1]&&o.splice(this._options.searchBox.numberOfAdditionalGenericPlaces[0],n-this._options.searchBox.numberOfAdditionalGenericPlaces[0]);var d=!1;this._options.searchBox.maximumNumberOfResults<o.length&&(d=!0,o.splice(this._options.searchBox.maximumNumberOfResults,o.length)),o.sort(function(e,o){return t._options.searchBox.prefereGenericResults&&!e.infoWindow&&o.infoWindow?-1:t._options.searchBox.prefereGenericResults&&!o.infoWindow&&e.infoWindow?1:h.google.maps.geometry.spherical.computeDistanceBetween(t.map.getCenter(),e.position)-h.google.maps.geometry.spherical.computeDistanceBetween(t.map.getCenter(),o.position)});var p=this.makeSearchResults(o,d);if("string"===u["default"].type(p)){var f=(0,u["default"])(p);this.resultsDomNode&&!this.fireEvent("addSearchResults",!1,this,f,this.resultsDomNode,this.currentSearchResultsDomNode||[])&&this.resultsDomNode.html(f),this.currentSearchResultsDomNode&&this.currentSearchResultsDomNode.length&&this.fireEvent("removeSearchResults",!1,this,this.currentSearchResultsDomNode),this.currentSearchResultsDomNode=f,setTimeout(function(){return t.releaseLock(t.constructor._name+"Search")},0)}else p instanceof Promise&&p.then(function(e){var o=(0,u["default"])(e);t.resultsDomNode&&!t.fireEvent("addSearchResults",!1,t,o,t.resultsDomNode,t.currentSearchResultsDomNode||[])&&t.resultsDomNode.html(o),t.currentSearchResultsDomNode&&t.currentSearchResultsDomNode.length&&t.fireEvent("removeSearchResults",!1,t,t.currentSearchResultsDomNode),t.currentSearchResultsDomNode=o,t.releaseLock(t._name+"Search")});return this.currentSearchText=e,this.currentSearchResults=o.slice(),this},t.prototype.openSearchResults=function(e){return e&&e.stopPropagation(),this.getUpdateSearchResultsHandler()(e),!this.resultsDomNode||this.resultsDomNode.hasClass("open")||this.fireEvent("openSearchResults",!1,this,e,this.resultsDomNode)||this.resultsDomNode.addClass("open"),this},t.prototype.closeSearchResults=function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return e&&e.stopPropagation(),this.resultsDomNode&&this.resultsDomNode.hasClass("open")&&!this.fireEvent("closeSearchResults",!1,this,e,this.resultsDomNode)&&this.resultsDomNode.removeClass("open"),this},t.prototype.initializeGenericSearchBox=function(){var e=this,t=new h.google.maps.places.SearchBox(this.$domNode.find("input")[0]);return h.google.maps.event.addListener(this.map,"bounds_changed",function(){return t.setBounds(e.map.getBounds())}),h.google.maps.event.addListener(t,"places_changed",function(){return e.ensurePlaceLocations(t.getPlaces()).then(function(t){var o=e.determineBestSearchResult(t);if(o){for(var n=Number.MAX_VALUE,r=null,i=e.markers,s=Array.isArray(i),a=0,i=s?i:i[Symbol.iterator]();;){var l;if(s){if(a>=i.length)break;l=i[a++]}else{if(a=i.next(),a.done)break;l=a.value}var c=l,u=h.google.maps.geometry.spherical.computeDistanceBetween(o.geometry.location,c.position);u<n&&(n=u,r=c)}if(r&&n<=e._options.searchBox)return e._options.successfulSearchZoom&&e.map.setZoom(e._options.successfulSearchZoom),e.openMarker(r),t;e.currentlyOpenWindow&&(e.currentlyOpenWindow.isOpen=!1,e.currentlyOpenWindow.close()),e.map.setCenter(o.geometry.location),e._options.successfulSearchZoom&&e.map.setZoom(e._options.successfulSearchZoom)}return t})}),this},t.prototype.ensurePlaceLocations=function(e){var t=this;return new Promise(function(o){for(var n=0,r=new h.google.maps.Geocoder,i=(function(){if(a){if(l>=s.length)return"break";c=s[l++]}else{if(l=s.next(),l.done)return"break";c=l.value}var i=c;"geometry"in i&&"location"in i.geometry||(t.warn('Found place "{1}" doesn\'t have a location. Full object:',i.name),t.warn(i),t.info('Geocode will be determined separately. With address "{1}".',i.name),n+=1,r.geocode({address:i.name},function(r,s){n-=1,s===h.google.maps.GeocoderStatus.OK?i.geometry=r[0].geometry:(delete e[e.indexOf(i)],t.warn('Found place "{1}" couldn\'t be geocoded by google. Removing it from the places list.',i.name)),0===n&&o(e)}))}),s=e,a=Array.isArray(s),l=0,s=a?s:s[Symbol.iterator]();;){var c,u=i();if("break"===u)break}})},t.prototype.determineBestSearchResult=function(e){var t=null;if(e.length)for(var o=Number.MAX_VALUE,n=e,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var s;if(r){if(i>=n.length)break;s=n[i++]}else{if(i=n.next(),i.done)break;s=i.value}var a=s,l=h.google.maps.geometry.spherical.computeDistanceBetween(a.geometry.location,this.map.getCenter());l<o&&(t=a,o=l)}return t},t.prototype.onLoaded=function(){var e=this;return setTimeout(function(){return e.$domNode.find("input").fadeIn(e._options.inputFadeInOption)},this._options.showInputAfterLoadedDelayInMilliseconds),this},t.prototype.createMarker=function(e){for(var t=0;this.seenLocations.includes(e.latitude+"-"+e.longitude);)t%2?e.latitude+=this._options.distanceToMoveByDuplicatedEntries:e.longitude+=this._options.distanceToMoveByDuplicatedEntries,t+=1;this.seenLocations.push(e.latitude+"-"+e.longitude);var o={position:new h.google.maps.LatLng(e.latitude,e.longitude),map:this.map,data:e};return(e.markerIconFileName||this._options.defaultMarkerIconFileName)&&(o.icon=u["default"].extend({},this._options.marker.icon),o.icon.size&&(o.icon.size=new h.google.maps.Size(o.icon.size.width,o.icon.size.height,o.icon.size.unit,o.icon.size.unit)),o.icon.scaledSize&&(o.icon.scaledSize=new h.google.maps.Size(o.icon.scaledSize.width,o.icon.scaledSize.height,o.icon.scaledSize.unit,o.icon.scaledSize.unit)),e.markerIconFileName?o.icon.url=this._options.iconPath+e.markerIconFileName:o.icon.url=this._options.iconPath+this._options.defaultMarkerIconFileName),e.title&&(o.title=e.title),o.infoWindow=new h.google.maps.InfoWindow({content:""}),o.infoWindow.isOpen=!1,h.google.maps.event.addListener(o.infoWindow,"closeclick",function(){o.infoWindow.isOpen=!1}),o.nativeMarker=new h.google.maps.Marker(o),h.google.maps.event.addListener(o.nativeMarker,"click",this.getMethod("openMarker",this,o)),this.markers.push(o),o.nativeMarker},t.prototype.openMarker=function(e,t){if(t&&t.stopPropagation(),this.highlightMarker(e,t,"stop"),"cluster"in this._options.marker&&this._options.marker.cluster.maxZoom&&this.map.getZoom()<=this._options.marker.cluster.maxZoom&&this.map.setZoom(this._options.marker.cluster.maxZoom+1),this.closeSearchResults(t),this.currentlyOpenWindow===e.infoWindow&&this.currentlyOpenWindow.isOpen)return this;this.fireEvent("infoWindowOpen",t,e),e.refreshSize=function(){return e.infoWindow.setContent(e.infoWindow.getContent())};var o=this.makeInfoWindow(e);return"string"==typeof o?e.infoWindow.setContent(o):(e.infoWindow.setContent(this._options.infoWindow.loadingContent),o.then(function(t){return e.infoWindow.setContent(t)})),this.currentlyOpenWindow&&(this.currentlyOpenWindow.isOpen=!1,this.currentlyOpenWindow.close()),this.currentlyOpenWindow=e.infoWindow,e.infoWindow.isOpen=!0,e.infoWindow.open(this.map,e.nativeMarker),this.map.panTo(e.nativeMarker.position),this.map.panBy(0,-this._options.infoWindow.additionalMoveToBottomInPixel),this.fireEvent("infoWindowOpened",t,e),this},t.prototype.openPlace=function(e,t){return t&&t.stopPropagation(),this.closeSearchResults(t),this.currentlyOpenWindow&&(this.currentlyOpenWindow.isOpen=!1,this.currentlyOpenWindow.close()),this.map.setCenter(e.geometry.location),this.map.setZoom(this._options.successfulSearchZoom),this},t.prototype.highlightMarker=function(e,t){var o=arguments.length<=2||void 0===arguments[2]?"bounce":arguments[2];return t&&t.stopPropagation(),this.currentlyHighlightedMarker&&("nativeMarker"in this.currentlyHighlightedMarker&&this.currentlyHighlightedMarker.nativeMarker.setAnimation(null),this.currentlyHighlightedMarker.isHighlighted=!1,this.currentlyHighlightedMarker=null),"nativeMarker"in e&&("stop"===o?e.nativeMarker.setAnimation(null):("cluster"in this._options.marker&&this._options.marker.cluster.maxZoom&&this.map.getZoom()<=this._options.marker.cluster.maxZoom&&"position"in e.nativeMarker&&this.map.getBounds().contains(e.nativeMarker.positioning)&&(this.map.setCenter(e.nativeMarker.position),this.map.setZoom(this._options.marker.cluster.maxZoom+1)),e!==this.currentlyHighlightedMarker&&e.nativeMarker&&(e.nativeMarker.setAnimation(h.google.maps.Animation[o.toUpperCase()]),e.isHighlighted=!0,this.currentlyHighlightedMarker=e),this.fireEvent("markerHighlighted",e))),this},t.prototype.makeInfoWindow=function(e){if(u["default"].isFunction(this._options.infoWindow.content))return this._options.infoWindow.content.apply(this,arguments);if("content"in this._options.infoWindow)return this._options.infoWindow.content;var t="<div>";for(var o in e.data)e.data.hasOwnProperty(o)&&(t+=o+": "+e.data[o]+"<br />");return t+"</div>"},t.prototype.makeSearchResults=function(e){if(u["default"].isFunction(this._options.searchBox.content))return this._options.searchBox.content.apply(this,arguments);if("content"in this._options.searchBox.content)return this._options.searchBox.content;for(var t="",o=e,n=Array.isArray(o),r=0,o=n?o:o[Symbol.iterator]();;){var i;if(n){if(r>=o.length)break;i=o[r++]}else{if(r=o.next(),r.done)break;i=r.value}var s=i;t+="<div>";for(var a in s.data)s.data.hasOwnProperty(a)&&(t+=a+": "+s.data[a]+"<br />");t+="</div>"}return t},t}(u["default"].Tools["class"]);d._name="StoreLocator",u["default"].fn.StoreLocator=function(){return u["default"].Tools().controller(d,arguments,this)},t["default"]=d}).call(t,function(){return this}(),o(2)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(t,o){t.exports=e},function(e,o){e.exports=t}])});