'use strict';
var jQueryStoreLocator=function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){(function(e,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},l=o(5),u=n(l);o(3);var h={Class:o(4),google:{}},d=function(){return"undefined"===u["default"].type(window)?"undefined"===u["default"].type(e)?"undefined"===u["default"].type(r)?{}:r:e:window}();!d.hasOwnProperty("document")&&u["default"].hasOwnProperty("context")&&(d.document=u["default"].context);var p=function(e){function t(){return i(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.initialize=function(){var t=this,o=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.currentSearchResults=[],this.currentSearchText=null,this.resultsDomNode=null,this.currentSearchResultsDomNode=null,this.currentlyOpenWindow=null,this.currentlyHighlightedMarker=null,this.searchResultsDirty=!1,this.seenLocations=[],this.markers=[],this.currentSearchResultRange=null,this._options={api:{url:"https://maps.googleapis.com/maps/api/js?{1}v=3&sensor=false&libraries=places,geometry&callback={2}",callbackName:null,key:null},stores:{northEast:{latitude:85,longitude:180},southWest:{latitude:-85,longitude:-180},number:100,generateProperties:function(e){return e}},addtionalStoreProperties:{},iconPath:"/webAsset/image/storeLocator/",defaultMarkerIconFileName:null,startLocation:null,fallbackLocation:{latitude:51.124213,longitude:10.147705},ip:null,ipToLocation:{applicationInterfaceURL:"{1}://freegeoip.net/json/{2}",timeoutInMilliseconds:5e3,bounds:{northEast:{latitude:85,longitude:180},southWest:{latitude:-85,longitude:-180}}},map:{zoom:3},showInputAfterLoadedDelayInMilliseconds:500,input:{hide:{opacity:0},showAnimation:[{opacity:1},{duration:"fast"}]},distanceToMoveByDuplicatedEntries:1e-4,marker:{cluster:{gridSize:100,maxZoom:11,imagePath:"https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m"},icon:{size:{width:44,height:49,unit:"px"},scaledSize:{width:44,height:49,unit:"px"}}},successfulSearchZoom:12,infoWindow:{content:null,additionalMoveToBottomInPixel:120,loadingContent:'<div class="idle">loading...</div>'},searchBox:50,onInfoWindowOpen:u["default"].noop,onInfoWindowOpened:u["default"].noop,onAddSearchResults:u["default"].noop,onRemoveSearchResults:u["default"].noop,onOpenSearchResults:u["default"].noop,onCloseSearchResults:u["default"].noop,onMarkerHighlighted:u["default"].noop},e.prototype.initialize.call(this,o),this.$domNode.find("input").css(this._options.input.hide);var r=!0;"object"!==c(this.constructor._apiLoad)&&(r=!1,this.constructor._apiLoad=u["default"].Deferred());var n=this.constructor._apiLoad.then(this.getMethod(this.bootstrap)).done(function(){return t.fireEvent("loaded")});if("google"in d&&"maps"in d.google)this.constructor.google=d.google,"resolved"!==this.constructor._apiLoad.state()&&setTimeout(function(){return t.constructor._apiLoad.resolve(t.$domNode)});else if("google"in d.window&&"maps"in d.window.google)this.constructor.google=d.window.google,"resolved"!==this.constructor._apiLoad.state()&&setTimeout(function(){return t.constructor._apiLoad.resolve(t.$domNode)});else if(!r){var i=void 0;i=this._options.api.callbackName?this._options.api.callbackName:this.constructor.determineUniqueScopeName(),d.window[i]=function(){t.constructor.google=d.window.google,t.constructor._apiLoad.resolve(t.$domNode)},u["default"].getScript(this.constructor.stringFormat(this._options.api.url,this._options.api.key?"key="+this._options.api.key+"&":"","window."+i))["catch"](function(e,o){return t.constructor._apiLoad.reject(o)})}return n},t.prototype.bootstrap=function(){var e=this;if(this._options.startLocation)return this.initializeMap();this._options.startLocation=this._options.fallbackLocation;var t=!1,o=u["default"].Deferred(),r=setTimeout(function(){t=!0,e.initializeMap().then(function(){return o.resolve(e.$domNode)})},this._options.ipToLocation.timeoutInMilliseconds);return u["default"].ajax({url:this.constructor.stringFormat(this._options.ipToLocation.applicationInterfaceURL,document.location.protocol.substring(0,document.location.protocol.length-1),this._options.ip||""),dataType:"jsonp",cache:!0}).always(function(n,i){t||(clearTimeout(r),t=!0,"success"===i&&(e._options.ipToLocation.bounds&&!new e.constructor.google.maps.LatLngBounds(new e.constructor.google.maps.LatLng(e._options.ipToLocation.bounds.southWest.latitude,e._options.ipToLocation.bounds.southWest.longitude),new e.constructor.google.maps.LatLng(e._options.ipToLocation.bounds.northEast.latitude,e._options.ipToLocation.bounds.northEast.longitude)).contains(new e.constructor.google.maps.LatLng(n.latitude,n.longitude))||(e._options.startLocation=n)),e.initializeMap().then(function(){return o.resolve(e.$domNode)}))}),o},t.prototype.initializeMap=function(){var e=this;this._options.map.center=new this.constructor.google.maps.LatLng(this._options.startLocation.latitude,this._options.startLocation.longitude),this.map=new this.constructor.google.maps.Map((0,u["default"])("<div>").appendTo(this.$domNode.css("display","block"))[0],this._options.map);var t=null;this._options.marker.cluster&&(u["default"].extend(h.google,this.constructor.google),t=new h.Class(this.map,[],this._options.marker.cluster));var o=u["default"].Deferred(),r=[];if(u["default"].isArray(this._options.stores))for(var n=this._options.stores,i=Array.isArray(n),s=0,n=i?n:n[Symbol.iterator]();;){var a;if(i){if(s>=n.length)break;a=n[s++]}else{if(s=n.next(),s.done)break;a=s.value}var l=a;u["default"].extend(!0,l,this._options.addtionalStoreProperties);var d=this.createMarker(l);t&&t.addMarker(d),r.push(d),o.resolve(r)}else if("string"===u["default"].type(this._options.stores))u["default"].getJSON(this._options.stores,function(n){for(var i=n,s=Array.isArray(i),a=0,i=s?i:i[Symbol.iterator]();;){var c;if(s){if(a>=i.length)break;c=i[a++]}else{if(a=i.next(),a.done)break;c=a.value}var l=c;u["default"].extend(!0,l,e._options.addtionalStoreProperties);var h=e.createMarker(l);t&&t.addMarker(h),r.push(h)}o.resolve(r)});else{for(var p=new this.constructor.google.maps.LatLng(this._options.stores.southWest.latitude,this._options.stores.southWest.longitude),m=new this.constructor.google.maps.LatLng(this._options.stores.northEast.latitude,this._options.stores.northEast.longitude),f=0;f<this._options.stores.number;f++){var g=u["default"].extend({latitude:p.lat()+(m.lat()-p.lat())*Math.random(),longitude:p.lng()+(m.lng()-p.lng())*Math.random()},this._options.addtionalStoreProperties),y=this.createMarker(u["default"].extend(g,this._options.stores.generateProperties(g)));t&&t.addMarker(y),r.push(y)}o.resolve(r)}this.map.controls[this.constructor.google.maps.ControlPosition.TOP_LEFT].push(this.$domNode.find("input")[0]),"number"===u["default"].type(this._options.searchBox)?this.initializeGenericSearchBox():(this.constructor.google.maps.event.addListener(this.map,"click",function(){return e.closeSearchResults()}),this.constructor.google.maps.event.addListener(this.map,"dragstart",function(){return e.closeSearchResults()}),this._options.searchBox=u["default"].extend(!0,{maximumNumberOfResults:50,numberOfAdditionalGenericPlaces:[2,5],maximalDistanceInMeter:1e6,loadingContent:this._options.infoWindow.loadingContent,genericPlaceFilter:function(e){return e.formatted_address.indexOf(" Deutschland")!==-1||e.formatted_address.indexOf(" Germany")!==-1},prefereGenericResults:!0,genericPlaceSearchOptions:{radius:"50000"}},this._options.searchBox),this.initializeDataSourceSearchBox()),this.constructor.google.maps.event.addListener(this.map,"zoom_changed",function(){"object"===c(e.currentlyOpenWindow)&&e.currentlyOpenWindow&&e.currentlyOpenWindow.isOpen&&e.map.getZoom()<=e._options.marker.cluster.maxZoom&&(e.currentlyOpenWindow.isOpen=!1,e.currentlyOpenWindow.close())});var v=u["default"].Deferred();return this.constructor.google.maps.event.addListenerOnce(this.map,"idle",function(){return o.then(function(){return v.resolve(e.$domNode)})}),v},t.prototype.initializeDataSourceSearchResultsBox=function(){for(var e={},t=["position","width","top","left","border"],o=0;o<t.length;o++){var r=t[o];e[r]=this.$domNode.find("input").css(r)}return e.marginTop=this.$domNode.find("input").outerHeight(!0),this.resultsDomNode=(0,u["default"])("<div>").addClass(this.constructor.stringCamelCaseToDelimited(this.__name__+"SearchResults")).css(e),this.$domNode.find("input").after(this.resultsDomNode),this},t.prototype.initializeDataSourceSearchBox=function(){var e=this;return this.on(this.$domNode,"keydown",function(t){if(e.currentSearchResults.length){e.currentSearchResultRange?e.currentSearchResultRange=[Math.max(0,e.currentSearchResultRange[0]),Math.min(e.currentSearchResults.length-1,e.currentSearchResultRange[1])]:e.currentSearchResultRange=[0,e.currentSearchResults.length-1];var o=-1;e.currentlyHighlightedMarker&&(o=e.currentSearchResults.indexOf(e.currentlyHighlightedMarker)),t.keyCode===e.keyCode.DOWN?o===-1||e.currentSearchResultRange[1]<o+1?e.highlightMarker(e.currentSearchResults[e.currentSearchResultRange[0]],t):e.highlightMarker(e.currentSearchResults[o+1],t):t.keyCode===e.keyCode.UP?[e.currentSearchResultRange[0],-1].includes(o)?e.highlightMarker(e.currentSearchResults[e.currentSearchResultRange[1]],t):e.highlightMarker(e.currentSearchResults[o-1],t):t.keyCode===e.keyCode.ENTER&&e.currentlyHighlightedMarker&&(t.stopPropagation(),e.currentlyHighlightedMarker&&(e.currentlyHighlightedMarker.infoWindow?e.openMarker(e.currentlyHighlightedMarker,t):e.openPlace(e.currentlyHighlightedMarker.data,t)))}}),this.on(this.$domNode.find("input"),"focus",function(){e.currentSearchText&&e.openSearchResults()}),this.on(this.$domNode.find("input"),"keydown",function(t){for(var o in e.keyCode)if(e.keyCode.hasOwnProperty(o)&&t.keyCode===e.keyCode[o]&&"DOWN"!==o)return}),this.currentSearchText&&this.openSearchResults(),this.on(this.$domNode.find("input"),"click",function(){e.currentSearchText&&e.openSearchResults()}),this.constructor.google.maps.event.addListener(this.map,"center_changed",function(){e.currentSearchText&&e.resultsDomNode&&(e.searchResultsDirty=!0)}),this.on(this.$domNode.find("input"),"keyup",this.getUpdateSearchResultsHandler()),this},t.prototype.getUpdateSearchResultsHandler=function(){var e=this,t=new this.constructor.google.maps.places.PlacesService(this.map);return this.debounce(function(o){for(var r in e.keyCode)if(o&&o.keyCode===e.keyCode[r]&&!["DELETE","BACKSPACE"].includes(r))return;e.acquireLock(e.constructor._name+"Search",function(){var o=e.$domNode.find("input").val().trim();if(e.currentSearchText===o&&!e.searchResultsDirty)return e.releaseLock(e.constructor._name+"Search");if(e.searchResultsDirty=!1,e.resultsDomNode||e.initializeDataSourceSearchResultsBox(),!o&&e.resultsDomNode)return e.currentSearchText="",e.currentSearchResults=[],e.resultsDomNode.html(""),e.currentSearchResultsDomNode=null,e.closeSearchResults(),e.releaseLock(e.constructor._name+"Search");e.openSearchResults();var r=(0,u["default"])(e._options.searchBox.loadingContent);e.resultsDomNode&&!e.fireEvent("addSearchResults",!1,e,r,e.resultsDomNode,e.currentSearchResultsDomNode||[])&&e.resultsDomNode.html(r),e.currentSearchResultsDomNode&&e.currentSearchResultsDomNode.length&&e.fireEvent("removeSearchResults",!1,e,e.currentSearchResultsDomNode),e.currentSearchResultsDomNode=r,e._options.searchBox.numberOfAdditionalGenericPlaces?t.textSearch(u["default"].extend({query:o,location:e.map.getCenter()},e._options.searchBox.genericPlaceSearchOptions),function(t){t&&e.handleGenericSearchResults(t,o)}):e.performLocalSearch(o)},1e3)})},t.prototype.handleGenericSearchResults=function(e,t){for(var o=this,r=[],n=1,i=function(){if(a){if(c>=s.length)return"break";l=s[c++]}else{if(c=s.next(),c.done)return"break";l=c.value}var e=l;n+=1;var t=o.constructor.google.maps.geometry.spherical.computeDistanceBetween(o.map.getCenter(),e.geometry.location);if(t>o._options.searchBox.maximalDistanceInMeter)return"break";if(o._options.searchBox.genericPlaceFilter(e)){var i={data:u["default"].extend(e,{logoFilePath:e.icon.replace(/^http:(\/\/)/,document.location.protocol+"$1"),address:e.formatted_address,distance:t}),position:e.geometry.location,open:function(t){return o.openPlace(e,t)},highlight:function(e,t){o.isHighlighted="stop"!==t}};if(r.push(i),o._options.searchBox.numberOfAdditionalGenericPlaces[1]<n)return"break"}},s=e.sort(function(e,t){return o.constructor.google.maps.geometry.spherical.computeDistanceBetween(o.map.getCenter(),e.geometry.location)-o.constructor.google.maps.geometry.spherical.computeDistanceBetween(o.map.getCenter(),t.geometry.location)}),a=Array.isArray(s),c=0,s=a?s:s[Symbol.iterator]();;){var l,h=i();if("break"===h)break}return this.performLocalSearch(t,r)},t.prototype.performLocalSearch=function(e){for(var t=this,o=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],r=o.length,n=function(){if(s){if(a>=i.length)return"break";c=i[a++]}else{if(a=i.next(),a.done)return"break";c=a.value}for(var r=c,n=t._options.searchBox.properties,l=Array.isArray(n),u=0,n=l?n:n[Symbol.iterator]();;){var h;if(l){if(u>=n.length)break;h=n[u++]}else{if(u=n.next(),u.done)break;h=u.value}var d=h;if((r.data[d]||0===r.data[d])&&(""+r.data[d]).toLowerCase().replace(/[-_&]+/g," ").indexOf(e.toLowerCase().replace(/[-_&]+/g," "))!==-1){r.open=function(e){return t.openMarker(r,e)},r.highlight=function(e,o){return t.highlightMarker(r,e,o)},o.push(r);break}}},i=this.markers,s=Array.isArray(i),a=0,i=s?i:i[Symbol.iterator]();;){var c,l=n();if("break"===l)break}this._options.searchBox.numberOfAdditionalGenericPlaces&&o.length&&r>this._options.searchBox.numberOfAdditionalGenericPlaces[0]&&o.length>this._options.searchBox.numberOfAdditionalGenericPlaces[1]&&o.splice(this._options.searchBox.numberOfAdditionalGenericPlaces[0],r-this._options.searchBox.numberOfAdditionalGenericPlaces[0]);var h=!1;this._options.searchBox.maximumNumberOfResults<o.length&&(h=!0,o.splice(this._options.searchBox.maximumNumberOfResults,o.length)),o.sort(function(e,o){return t._options.searchBox.prefereGenericResults&&!e.infoWindow&&o.infoWindow?-1:t._options.searchBox.prefereGenericResults&&!o.infoWindow&&e.infoWindow?1:t.constructor.google.maps.geometry.spherical.computeDistanceBetween(t.map.getCenter(),e.position)-t.constructor.google.maps.geometry.spherical.computeDistanceBetween(t.map.getCenter(),o.position)});var d=this.makeSearchResults(o,h);if("string"===u["default"].type(d)){var p=(0,u["default"])(d);this.resultsDomNode&&!this.fireEvent("addSearchResults",!1,this,p,this.resultsDomNode,this.currentSearchResultsDomNode||[])&&this.resultsDomNode.html(p),this.currentSearchResultsDomNode&&this.currentSearchResultsDomNode.length&&this.fireEvent("removeSearchResults",!1,this,this.currentSearchResultsDomNode),this.currentSearchResultsDomNode=p,setTimeout(function(){return t.releaseLock(t.constructor._name+"Search")},0)}else d instanceof Promise&&d.then(function(e){var o=(0,u["default"])(e);t.resultsDomNode&&!t.fireEvent("addSearchResults",!1,t,o,t.resultsDomNode,t.currentSearchResultsDomNode||[])&&t.resultsDomNode.html(o),t.currentSearchResultsDomNode&&t.currentSearchResultsDomNode.length&&t.fireEvent("removeSearchResults",!1,t,t.currentSearchResultsDomNode),t.currentSearchResultsDomNode=o,t.releaseLock(t._name+"Search")});return this.currentSearchText=e,this.currentSearchResults=o.slice(),this},t.prototype.openSearchResults=function(e){return e&&e.stopPropagation(),this.getUpdateSearchResultsHandler()(e),!this.resultsDomNode||this.resultsDomNode.hasClass("open")||this.fireEvent("openSearchResults",!1,this,e,this.resultsDomNode)||this.resultsDomNode.addClass("open"),this},t.prototype.closeSearchResults=function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return e&&e.stopPropagation(),this.resultsDomNode&&this.resultsDomNode.hasClass("open")&&!this.fireEvent("closeSearchResults",!1,this,e,this.resultsDomNode)&&this.resultsDomNode.removeClass("open"),this},t.prototype.initializeGenericSearchBox=function(){var e=this,t=new this.constructor.google.maps.places.SearchBox(this.$domNode.find("input")[0]);return this.constructor.google.maps.event.addListener(this.map,"bounds_changed",function(){return t.setBounds(e.map.getBounds())}),this.constructor.google.maps.event.addListener(t,"places_changed",function(){return e.ensurePlaceLocations(t.getPlaces()).then(function(t){var o=e.determineBestSearchResult(t);if(o){for(var r=Number.MAX_VALUE,n=null,i=e.markers,s=Array.isArray(i),a=0,i=s?i:i[Symbol.iterator]();;){var c;if(s){if(a>=i.length)break;c=i[a++]}else{if(a=i.next(),a.done)break;c=a.value}var l=c,u=e.constructor.google.maps.geometry.spherical.computeDistanceBetween(o.geometry.location,l.position);u<r&&(r=u,n=l)}if(n&&r<=e._options.searchBox)return e._options.successfulSearchZoom&&e.map.setZoom(e._options.successfulSearchZoom),e.openMarker(n),t;e.currentlyOpenWindow&&(e.currentlyOpenWindow.isOpen=!1,e.currentlyOpenWindow.close()),e.map.setCenter(o.geometry.location),e._options.successfulSearchZoom&&e.map.setZoom(e._options.successfulSearchZoom)}return t})}),this},t.prototype.ensurePlaceLocations=function(e){var t=this;return new Promise(function(o){for(var r=0,n=new t.constructor.google.maps.Geocoder,i=(function(){if(a){if(c>=s.length)return"break";l=s[c++]}else{if(c=s.next(),c.done)return"break";l=c.value}var i=l;"geometry"in i&&"location"in i.geometry||(t.warn('Found place "{1}" doesn\'t have a location. Full object:',i.name),t.warn(i),t.info('Geocode will be determined separately. With address "{1}".',i.name),r+=1,n.geocode({address:i.name},function(n,s){r-=1,s===t.constructor.google.maps.GeocoderStatus.OK?i.geometry=n[0].geometry:(delete e[e.indexOf(i)],t.warn('Found place "{1}" couldn\'t be geocoded by google. Removing it from the places list.',i.name)),0===r&&o(e)}))}),s=e,a=Array.isArray(s),c=0,s=a?s:s[Symbol.iterator]();;){var l,u=i();if("break"===u)break}})},t.prototype.determineBestSearchResult=function(e){var t=null;if(e.length)for(var o=Number.MAX_VALUE,r=e,n=Array.isArray(r),i=0,r=n?r:r[Symbol.iterator]();;){var s;if(n){if(i>=r.length)break;s=r[i++]}else{if(i=r.next(),i.done)break;s=i.value}var a=s,c=this.constructor.google.maps.geometry.spherical.computeDistanceBetween(a.geometry.location,this.map.getCenter());c<o&&(t=a,o=c)}return t},t.prototype.onLoaded=function(){var e=this;return setTimeout(function(){return e.$domNode.find("input").animate.apply(e.$domNode.find("input"),e._options.input.showAnimation)},this._options.showInputAfterLoadedDelayInMilliseconds),this},t.prototype.createMarker=function(e){for(var t=0;this.seenLocations.includes(e.latitude+"-"+e.longitude);)t%2?e.latitude+=this._options.distanceToMoveByDuplicatedEntries:e.longitude+=this._options.distanceToMoveByDuplicatedEntries,t+=1;this.seenLocations.push(e.latitude+"-"+e.longitude);var o={position:new this.constructor.google.maps.LatLng(e.latitude,e.longitude),map:this.map,data:e};return(e.markerIconFileName||this._options.defaultMarkerIconFileName)&&(o.icon=u["default"].extend({},this._options.marker.icon),o.icon.size&&(o.icon.size=new this.constructor.google.maps.Size(o.icon.size.width,o.icon.size.height,o.icon.size.unit,o.icon.size.unit)),o.icon.scaledSize&&(o.icon.scaledSize=new this.constructor.google.maps.Size(o.icon.scaledSize.width,o.icon.scaledSize.height,o.icon.scaledSize.unit,o.icon.scaledSize.unit)),e.markerIconFileName?o.icon.url=this._options.iconPath+e.markerIconFileName:o.icon.url=this._options.iconPath+this._options.defaultMarkerIconFileName),e.title&&(o.title=e.title),o.infoWindow=new this.constructor.google.maps.InfoWindow({content:""}),o.infoWindow.isOpen=!1,this.constructor.google.maps.event.addListener(o.infoWindow,"closeclick",function(){o.infoWindow.isOpen=!1}),o.nativeMarker=new this.constructor.google.maps.Marker(o),this.constructor.google.maps.event.addListener(o.nativeMarker,"click",this.getMethod("openMarker",this,o)),this.markers.push(o),o.nativeMarker},t.prototype.openMarker=function(e,t){if(t&&t.stopPropagation(),this.highlightMarker(e,t,"stop"),"cluster"in this._options.marker&&this._options.marker.cluster.maxZoom&&this.map.getZoom()<=this._options.marker.cluster.maxZoom&&this.map.setZoom(this._options.marker.cluster.maxZoom+1),this.closeSearchResults(t),this.currentlyOpenWindow===e.infoWindow&&this.currentlyOpenWindow.isOpen)return this;this.fireEvent("infoWindowOpen",t,e),e.refreshSize=function(){return e.infoWindow.setContent(e.infoWindow.getContent())};var o=this.makeInfoWindow(e);return"string"==typeof o?e.infoWindow.setContent(o):(e.infoWindow.setContent(this._options.infoWindow.loadingContent),o.then(function(t){return e.infoWindow.setContent(t)})),this.currentlyOpenWindow&&(this.currentlyOpenWindow.isOpen=!1,this.currentlyOpenWindow.close()),this.currentlyOpenWindow=e.infoWindow,e.infoWindow.isOpen=!0,e.infoWindow.open(this.map,e.nativeMarker),this.map.panTo(e.nativeMarker.position),this.map.panBy(0,-this._options.infoWindow.additionalMoveToBottomInPixel),this.fireEvent("infoWindowOpened",t,e),this},t.prototype.openPlace=function(e,t){return t&&t.stopPropagation(),this.closeSearchResults(t),this.currentlyOpenWindow&&(this.currentlyOpenWindow.isOpen=!1,this.currentlyOpenWindow.close()),this.map.setCenter(e.geometry.location),this.map.setZoom(this._options.successfulSearchZoom),this},t.prototype.highlightMarker=function(e,t){var o=arguments.length<=2||void 0===arguments[2]?"bounce":arguments[2];return t&&t.stopPropagation(),this.currentlyHighlightedMarker&&("nativeMarker"in this.currentlyHighlightedMarker&&this.currentlyHighlightedMarker.nativeMarker.setAnimation(null),this.currentlyHighlightedMarker.isHighlighted=!1,this.currentlyHighlightedMarker=null),"nativeMarker"in e&&("stop"===o?e.nativeMarker.setAnimation(null):("cluster"in this._options.marker&&this._options.marker.cluster.maxZoom&&this.map.getZoom()<=this._options.marker.cluster.maxZoom&&"position"in e.nativeMarker&&this.map.getBounds().contains(e.nativeMarker.positioning)&&(this.map.setCenter(e.nativeMarker.position),this.map.setZoom(this._options.marker.cluster.maxZoom+1)),e!==this.currentlyHighlightedMarker&&e.nativeMarker&&(e.nativeMarker.setAnimation(this.constructor.google.maps.Animation[o.toUpperCase()]),e.isHighlighted=!0,this.currentlyHighlightedMarker=e),this.fireEvent("markerHighlighted",e))),this},t.prototype.makeInfoWindow=function(e){if(u["default"].isFunction(this._options.infoWindow.content))return this._options.infoWindow.content.apply(this,arguments);if("content"in this._options.infoWindow)return this._options.infoWindow.content;var t="<div>";for(var o in e.data)e.data.hasOwnProperty(o)&&(t+=o+": "+e.data[o]+"<br />");return t+"</div>"},t.prototype.makeSearchResults=function(e){if(u["default"].isFunction(this._options.searchBox.content))return this._options.searchBox.content.apply(this,arguments);if("content"in this._options.searchBox.content)return this._options.searchBox.content;for(var t="",o=e,r=Array.isArray(o),n=0,o=r?o:o[Symbol.iterator]();;){var i;if(r){if(n>=o.length)break;i=o[n++]}else{if(n=o.next(),n.done)break;i=n.value}var s=i;t+="<div>";for(var a in s.data)s.data.hasOwnProperty(a)&&(t+=a+": "+s.data[a]+"<br />");t+="</div>"}return t},t}(u["default"].Tools["class"]);p._name="StoreLocator",u["default"].fn.StoreLocator=function(){return u["default"].Tools().controller(p,arguments,this)},t["default"]=p}).call(t,function(){return this}(),o(2)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){e.exports=$.Tools},function(e,t){e.exports=MarkerClusterer},function(e,t){e.exports=jquery}]);