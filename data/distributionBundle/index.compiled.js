'use strict';
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jQuery-tools"),require("jquery")):"function"==typeof define&&define.amd?define("jQuery-storeLocator",["jQuery-tools","jquery"],e):"object"==typeof exports?exports["jQuery-storeLocator"]=e(require("jQuery-tools"),require("jquery")):t["jQuery-storeLocator"]=e(t["jQuery-tools"],t.jquery)}(this,function(t,e){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(1)},function(t,e,o){(function(t,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},u=o(5),c=i(u);o(4);var l=o(2),p=function(){return"undefined"==typeof window?"undefined"==typeof t?r:t:window}();!p.hasOwnProperty("document")&&c["default"].hasOwnProperty("context")&&(p.document=c["default"].context);var d=function(t){function e(){return n(this,e),s(this,t.apply(this,arguments))}return a(e,t),e.prototype.initialize=function(){var e=this,o=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.currentSearchResults=[],this.currentSearchText=null,this.resultsDomNode=null,this.currentSearchResultsDomNode=null,this.currentlyOpenWindow=null,this.currentlyHighlightedMarker=null,this.searchResultsDirty=!1,this.seenLocations=[],this.markers=[],this.currentSearchResultRange=null,this._options={api:{url:"https://maps.googleapis.com/maps/api/js?{1}v=3&sensor=false&libraries=places,geometry&callback={2}",callbackName:null,key:null},stores:{northEast:{latitude:85,longitude:180},southWest:{latitude:-85,longitude:-180},number:100,generateProperties:function(t){return t}},addtionalStoreProperties:{},iconPath:"/webAsset/image/storeLocator/",defaultMarkerIconFileName:null,startLocation:null,fallbackLocation:{latitude:51.124213,longitude:10.147705},ip:null,ipToLocation:{applicationInterfaceURL:"{1}://freegeoip.net/json/{2}",timeoutInMilliseconds:5e3,bounds:{northEast:{latitude:85,longitude:180},southWest:{latitude:-85,longitude:-180}}},limit:{zoom:{minimum:1,maximum:9999},bounds:{northEast:{latitude:85,longitude:180},southWest:{latitude:-85,longitude:-180}}},map:{zoom:3},showInputAfterLoadedDelayInMilliseconds:500,input:{hide:{opacity:0},showAnimation:[{opacity:1},{duration:"fast"}]},distanceToMoveByDuplicatedEntries:1e-4,marker:{cluster:{gridSize:100,maxZoom:11,imagePath:"https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m"},icon:{size:{width:44,height:49,unit:"px"},scaledSize:{width:44,height:49,unit:"px"}}},successfulSearchZoom:12,infoWindow:{content:null,additionalMoveToBottomInPixel:120,loadingContent:'<div class="idle">loading...</div>'},searchBox:50,onInfoWindowOpen:c["default"].noop,onInfoWindowOpened:c["default"].noop,onAddSearchResults:c["default"].noop,onRemoveSearchResults:c["default"].noop,onOpenSearchResults:c["default"].noop,onCloseSearchResults:c["default"].noop,onMarkerHighlighted:c["default"].noop},t.prototype.initialize.call(this,o),this.$domNode.find("input").css(this._options.input.hide);var r=!0;"object"!==h(this.constructor._apiLoad)&&(r=!1,this.constructor._apiLoad=c["default"].Deferred());var i=this.constructor._apiLoad.then(this.getMethod(this.bootstrap)).done(function(){return e.fireEvent("loaded")});if("google"in p&&"maps"in p.google)this.constructor.google=p.google,"resolved"!==this.constructor._apiLoad.state()&&setTimeout(function(){return e.constructor._apiLoad.resolve(e.$domNode)});else if("google"in p.window&&"maps"in p.window.google)this.constructor.google=p.window.google,"resolved"!==this.constructor._apiLoad.state()&&setTimeout(function(){return e.constructor._apiLoad.resolve(e.$domNode)});else if(!r){var n=void 0;n=this._options.api.callbackName?this._options.api.callbackName:this.constructor.determineUniqueScopeName(),p.window[n]=function(){e.constructor.google=p.window.google,e.constructor._apiLoad.resolve(e.$domNode)},c["default"].getScript(this.constructor.stringFormat(this._options.api.url,this._options.api.key?"key="+this._options.api.key+"&":"","window."+n))["catch"](function(t,o){return e.constructor._apiLoad.reject(o)})}return i},e.prototype.bootstrap=function(){var t=this;if(this._options.startLocation)return this.initializeMap();this._options.startLocation=this._options.fallbackLocation;var e=!1,o=c["default"].Deferred(),r=setTimeout(function(){e=!0,t.initializeMap().then(function(){return o.resolve(t.$domNode)})},this._options.ipToLocation.timeoutInMilliseconds);return c["default"].ajax({url:this.constructor.stringFormat(this._options.ipToLocation.applicationInterfaceURL,document.location.protocol.substring(0,document.location.protocol.length-1),this._options.ip||""),dataType:"jsonp",cache:!0}).always(function(i,n){e||(clearTimeout(r),e=!0,"success"===n&&(t._options.ipToLocation.bounds&&!new t.constructor.google.maps.LatLngBounds(new t.constructor.google.maps.LatLng(t._options.ipToLocation.bounds.southWest.latitude,t._options.ipToLocation.bounds.southWest.longitude),new t.constructor.google.maps.LatLng(t._options.ipToLocation.bounds.northEast.latitude,t._options.ipToLocation.bounds.northEast.longitude)).contains(new t.constructor.google.maps.LatLng(i.latitude,i.longitude))||(t._options.startLocation=i)),t.initializeMap().then(function(){return o.resolve(t.$domNode)}))}),o},e.prototype.initializeMap=function(){var t=this;this._options.map.center=new this.constructor.google.maps.LatLng(this._options.startLocation.latitude,this._options.startLocation.longitude),this.map=new this.constructor.google.maps.Map((0,c["default"])("<div>").appendTo(this.$domNode.css("display","block"))[0],this._options.map),this._options.limit.bounds&&this.constructor.google.maps.event.addListener(this.map,"dragend",function(){var e=new t.constructor.google.maps.LatLngBounds(new t.constructor.google.maps.LatLng(t._options.limit.bounds.southWest.latitude,t._options.limit.bounds.southWest.longitude),new t.constructor.google.maps.LatLng(t._options.limit.bounds.northEast.latitude,t._options.limit.bounds.northEast.longitude)),o=t.map.getCenter();if(!e.contains(o)){var r={latitude:o.lat(),longitude:o.lng()};o.lng()<e.getSouthWest().lng()&&(r.longitude=e.getSouthWest().lng()),o.lng()>e.getNorthEast().lng()&&(r.longitude=e.getNorthEast().lng()),o.lat()<e.getSouthWest().lat()&&(r.latitude=e.getSouthWest().lat()),o.lat()>e.getNorthEast().lat()&&(r.latitude=e.getNorthEast().lat()),t.map.panTo(new t.constructor.google.maps.LatLng(r.latitude,r.longitude))}}),this._options.limit.zoom&&this.constructor.google.maps.event.addListener(this.map,"zoom_changed",function(){t.map.getZoom()<t._options.limit.zoom.minimum?t.map.setZoom(t._options.limit.zoom.minimum):t.map.getZoom()>t._options.limit.zoom.maximum&&t.map.setZoom(t._options.limit.zoom.maximum)});var e=null;this._options.marker.cluster&&(c["default"].extend(l.google,this.constructor.google),e=new l.Class(this.map,[],this._options.marker.cluster));var o=c["default"].Deferred(),r=[];if(c["default"].isArray(this._options.stores))for(var i=this._options.stores,n=Array.isArray(i),s=0,i=n?i:i[Symbol.iterator]();;){var a;if(n){if(s>=i.length)break;a=i[s++]}else{if(s=i.next(),s.done)break;a=s.value}var u=a;c["default"].extend(!0,u,this._options.addtionalStoreProperties);var p=this.createMarker(u);e&&e.addMarker(p),r.push(p),o.resolve(r)}else if("string"===c["default"].type(this._options.stores))c["default"].getJSON(this._options.stores,function(i){for(var n=i,s=Array.isArray(n),a=0,n=s?n:n[Symbol.iterator]();;){var h;if(s){if(a>=n.length)break;h=n[a++]}else{if(a=n.next(),a.done)break;h=a.value}var u=h;c["default"].extend(!0,u,t._options.addtionalStoreProperties);var l=t.createMarker(u);e&&e.addMarker(l),r.push(l)}o.resolve(r)});else{for(var d=new this.constructor.google.maps.LatLng(this._options.stores.southWest.latitude,this._options.stores.southWest.longitude),m=new this.constructor.google.maps.LatLng(this._options.stores.northEast.latitude,this._options.stores.northEast.longitude),g=0;g<this._options.stores.number;g++){var f=c["default"].extend({latitude:d.lat()+(m.lat()-d.lat())*Math.random(),longitude:d.lng()+(m.lng()-d.lng())*Math.random()},this._options.addtionalStoreProperties),_=this.createMarker(c["default"].extend(f,this._options.stores.generateProperties(f)));e&&e.addMarker(_),r.push(_)}o.resolve(r)}this.map.controls[this.constructor.google.maps.ControlPosition.TOP_LEFT].push(this.$domNode.find("input")[0]),"number"===c["default"].type(this._options.searchBox)?this.initializeGenericSearchBox():(this.constructor.google.maps.event.addListener(this.map,"click",function(){return t.closeSearchResults()}),this.constructor.google.maps.event.addListener(this.map,"dragstart",function(){return t.closeSearchResults()}),this._options.searchBox=c["default"].extend(!0,{maximumNumberOfResults:50,numberOfAdditionalGenericPlaces:[2,5],maximalDistanceInMeter:1e6,loadingContent:this._options.infoWindow.loadingContent,genericPlaceFilter:function(t){return t.formatted_address.indexOf(" Deutschland")!==-1||t.formatted_address.indexOf(" Germany")!==-1},prefereGenericResults:!0,genericPlaceSearchOptions:{radius:"50000"}},this._options.searchBox),this.initializeDataSourceSearchBox()),this.constructor.google.maps.event.addListener(this.map,"zoom_changed",function(){"object"===h(t.currentlyOpenWindow)&&t.currentlyOpenWindow&&t.currentlyOpenWindow.isOpen&&t.map.getZoom()<=t._options.marker.cluster.maxZoom&&(t.currentlyOpenWindow.isOpen=!1,t.currentlyOpenWindow.close())});var y=c["default"].Deferred();return this.constructor.google.maps.event.addListenerOnce(this.map,"idle",function(){return o.then(function(){return y.resolve(t.$domNode)})}),y},e.prototype.initializeDataSourceSearchResultsBox=function(){for(var t={},e=["position","width","top","left","border"],o=0;o<e.length;o++){var r=e[o];t[r]=this.$domNode.find("input").css(r)}return t.marginTop=this.$domNode.find("input").outerHeight(!0),this.resultsDomNode=(0,c["default"])("<div>").addClass(this.constructor.stringCamelCaseToDelimited(this.__name__+"SearchResults")).css(t),this.$domNode.find("input").after(this.resultsDomNode),this},e.prototype.initializeDataSourceSearchBox=function(){var t=this;return this.on(this.$domNode,"keydown",function(e){if(t.currentSearchResults.length){t.currentSearchResultRange?t.currentSearchResultRange=[Math.max(0,t.currentSearchResultRange[0]),Math.min(t.currentSearchResults.length-1,t.currentSearchResultRange[1])]:t.currentSearchResultRange=[0,t.currentSearchResults.length-1];var o=-1;t.currentlyHighlightedMarker&&(o=t.currentSearchResults.indexOf(t.currentlyHighlightedMarker)),e.keyCode===t.keyCode.DOWN?o===-1||t.currentSearchResultRange[1]<o+1?t.highlightMarker(t.currentSearchResults[t.currentSearchResultRange[0]],e):t.highlightMarker(t.currentSearchResults[o+1],e):e.keyCode===t.keyCode.UP?[t.currentSearchResultRange[0],-1].includes(o)?t.highlightMarker(t.currentSearchResults[t.currentSearchResultRange[1]],e):t.highlightMarker(t.currentSearchResults[o-1],e):e.keyCode===t.keyCode.ENTER&&t.currentlyHighlightedMarker&&(e.stopPropagation(),t.currentlyHighlightedMarker&&(t.currentlyHighlightedMarker.infoWindow?t.openMarker(t.currentlyHighlightedMarker,e):t.openPlace(t.currentlyHighlightedMarker.data,e)))}}),this.on(this.$domNode.find("input"),"focus",function(){t.currentSearchText&&t.openSearchResults()}),this.on(this.$domNode.find("input"),"keydown",function(e){for(var o in t.keyCode)if(t.keyCode.hasOwnProperty(o)&&e.keyCode===t.keyCode[o]&&"DOWN"!==o)return}),this.currentSearchText&&this.openSearchResults(),this.on(this.$domNode.find("input"),"click",function(){t.currentSearchText&&t.openSearchResults()}),this.constructor.google.maps.event.addListener(this.map,"center_changed",function(){t.currentSearchText&&t.resultsDomNode&&(t.searchResultsDirty=!0)}),this.on(this.$domNode.find("input"),"keyup",this.getUpdateSearchResultsHandler()),this},e.prototype.getUpdateSearchResultsHandler=function(){var t=this,e=new this.constructor.google.maps.places.PlacesService(this.map);return this.constructor.debounce(function(o){for(var r in t.keyCode)if(o&&o.keyCode===t.keyCode[r]&&!["DELETE","BACKSPACE"].includes(r))return;t.acquireLock(t.constructor._name+"Search",function(){var o=t.$domNode.find("input").val().trim();if(t.currentSearchText===o&&!t.searchResultsDirty)return t.releaseLock(t.constructor._name+"Search");if(t.searchResultsDirty=!1,t.resultsDomNode||t.initializeDataSourceSearchResultsBox(),!o&&t.resultsDomNode)return t.currentSearchText="",t.currentSearchResults=[],t.resultsDomNode.html(""),t.currentSearchResultsDomNode=null,t.closeSearchResults(),t.releaseLock(t.constructor._name+"Search");t.openSearchResults();var r=(0,c["default"])(t._options.searchBox.loadingContent);t.resultsDomNode&&!t.fireEvent("addSearchResults",!1,t,r,t.resultsDomNode,t.currentSearchResultsDomNode||[])&&t.resultsDomNode.html(r),t.currentSearchResultsDomNode&&t.currentSearchResultsDomNode.length&&t.fireEvent("removeSearchResults",!1,t,t.currentSearchResultsDomNode),t.currentSearchResultsDomNode=r,t._options.searchBox.numberOfAdditionalGenericPlaces?e.textSearch(c["default"].extend({query:o,location:t.map.getCenter()},t._options.searchBox.genericPlaceSearchOptions),function(e){e&&t.handleGenericSearchResults(e,o)}):t.performLocalSearch(o)},1e3)})},e.prototype.handleGenericSearchResults=function(t,e){for(var o=this,r=[],i=1,n=function(){if(a){if(h>=s.length)return"break";u=s[h++]}else{if(h=s.next(),h.done)return"break";u=h.value}var t=u;i+=1;var e=o.constructor.google.maps.geometry.spherical.computeDistanceBetween(o.map.getCenter(),t.geometry.location);if(e>o._options.searchBox.maximalDistanceInMeter)return"break";if(o._options.searchBox.genericPlaceFilter(t)){var n={data:c["default"].extend(t,{logoFilePath:t.icon.replace(/^http:(\/\/)/,document.location.protocol+"$1"),address:t.formatted_address,distance:e}),position:t.geometry.location,open:function(e){return o.openPlace(t,e)},highlight:function(t,e){o.isHighlighted="stop"!==e}};if(r.push(n),o._options.searchBox.numberOfAdditionalGenericPlaces[1]<i)return"break"}},s=t.sort(function(t,e){return o.constructor.google.maps.geometry.spherical.computeDistanceBetween(o.map.getCenter(),t.geometry.location)-o.constructor.google.maps.geometry.spherical.computeDistanceBetween(o.map.getCenter(),e.geometry.location)}),a=Array.isArray(s),h=0,s=a?s:s[Symbol.iterator]();;){var u,l=n();if("break"===l)break}return this.performLocalSearch(e,r)},e.prototype.performLocalSearch=function(t){for(var e=this,o=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],r=o.length,i=function(){if(s){if(a>=n.length)return"break";h=n[a++]}else{if(a=n.next(),a.done)return"break";h=a.value}for(var r=h,i=e._options.searchBox.properties,u=Array.isArray(i),c=0,i=u?i:i[Symbol.iterator]();;){var l;if(u){if(c>=i.length)break;l=i[c++]}else{if(c=i.next(),c.done)break;l=c.value}var p=l;if((r.data[p]||0===r.data[p])&&(""+r.data[p]).toLowerCase().replace(/[-_&]+/g," ").indexOf(t.toLowerCase().replace(/[-_&]+/g," "))!==-1){r.open=function(t){return e.openMarker(r,t)},r.highlight=function(t,o){return e.highlightMarker(r,t,o)},o.push(r);break}}},n=this.markers,s=Array.isArray(n),a=0,n=s?n:n[Symbol.iterator]();;){var h,u=i();if("break"===u)break}this._options.searchBox.numberOfAdditionalGenericPlaces&&o.length&&r>this._options.searchBox.numberOfAdditionalGenericPlaces[0]&&o.length>this._options.searchBox.numberOfAdditionalGenericPlaces[1]&&o.splice(this._options.searchBox.numberOfAdditionalGenericPlaces[0],r-this._options.searchBox.numberOfAdditionalGenericPlaces[0]);var l=!1;this._options.searchBox.maximumNumberOfResults<o.length&&(l=!0,o.splice(this._options.searchBox.maximumNumberOfResults,o.length)),o.sort(function(t,o){return e._options.searchBox.prefereGenericResults&&!t.infoWindow&&o.infoWindow?-1:e._options.searchBox.prefereGenericResults&&!o.infoWindow&&t.infoWindow?1:e.constructor.google.maps.geometry.spherical.computeDistanceBetween(e.map.getCenter(),t.position)-e.constructor.google.maps.geometry.spherical.computeDistanceBetween(e.map.getCenter(),o.position)});var p=this.makeSearchResults(o,l);if("string"===c["default"].type(p)){var d=(0,c["default"])(p);this.resultsDomNode&&!this.fireEvent("addSearchResults",!1,this,d,this.resultsDomNode,this.currentSearchResultsDomNode||[])&&this.resultsDomNode.html(d),this.currentSearchResultsDomNode&&this.currentSearchResultsDomNode.length&&this.fireEvent("removeSearchResults",!1,this,this.currentSearchResultsDomNode),this.currentSearchResultsDomNode=d,setTimeout(function(){return e.releaseLock(e.constructor._name+"Search")},0)}else p instanceof Object&&p.then(function(t){var o=(0,c["default"])(t);e.resultsDomNode&&!e.fireEvent("addSearchResults",!1,e,o,e.resultsDomNode,e.currentSearchResultsDomNode||[])&&e.resultsDomNode.html(o),e.currentSearchResultsDomNode&&e.currentSearchResultsDomNode.length&&e.fireEvent("removeSearchResults",!1,e,e.currentSearchResultsDomNode),e.currentSearchResultsDomNode=o,e.releaseLock(e._name+"Search")});return this.currentSearchText=t,this.currentSearchResults=o.slice(),this},e.prototype.openSearchResults=function(t){return t&&t.stopPropagation(),this.getUpdateSearchResultsHandler()(t),!this.resultsDomNode||this.resultsDomNode.hasClass("open")||this.fireEvent("openSearchResults",!1,this,t,this.resultsDomNode)||this.resultsDomNode.addClass("open"),this},e.prototype.closeSearchResults=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return t&&t.stopPropagation(),this.resultsDomNode&&this.resultsDomNode.hasClass("open")&&!this.fireEvent("closeSearchResults",!1,this,t,this.resultsDomNode)&&this.resultsDomNode.removeClass("open"),this},e.prototype.initializeGenericSearchBox=function(){var t=this,e=new this.constructor.google.maps.places.SearchBox(this.$domNode.find("input")[0]);return this.constructor.google.maps.event.addListener(this.map,"bounds_changed",function(){return e.setBounds(t.map.getBounds())}),this.constructor.google.maps.event.addListener(e,"places_changed",function(){return t.ensurePlaceLocations(e.getPlaces()).then(function(e){var o=t.determineBestSearchResult(e);if(o){for(var r=Number.MAX_VALUE,i=null,n=t.markers,s=Array.isArray(n),a=0,n=s?n:n[Symbol.iterator]();;){var h;if(s){if(a>=n.length)break;h=n[a++]}else{if(a=n.next(),a.done)break;h=a.value}var u=h,c=t.constructor.google.maps.geometry.spherical.computeDistanceBetween(o.geometry.location,u.position);c<r&&(r=c,i=u)}if(i&&r<=t._options.searchBox)return t._options.successfulSearchZoom&&t.map.setZoom(t._options.successfulSearchZoom),t.openMarker(i),e;t.currentlyOpenWindow&&(t.currentlyOpenWindow.isOpen=!1,t.currentlyOpenWindow.close()),t.map.setCenter(o.geometry.location),t._options.successfulSearchZoom&&t.map.setZoom(t._options.successfulSearchZoom)}return e})}),this},e.prototype.ensurePlaceLocations=function(t){for(var e=this,o=c["default"].Deferred(),r=0,i=new this.constructor.google.maps.Geocoder,n=(function(){if(a){if(h>=s.length)return"break";u=s[h++]}else{if(h=s.next(),h.done)return"break";u=h.value}var n=u;"geometry"in n&&"location"in n.geometry||(e.warn('Found place "{1}" doesn\'t have a location. Full object:',n.name),e.warn(n),e.info('Geocode will be determined separately. With address "{1}".',n.name),r+=1,i.geocode({address:n.name},function(i,s){r-=1,s===e.constructor.google.maps.GeocoderStatus.OK?n.geometry=i[0].geometry:(delete t[t.indexOf(n)],e.warn('Found place "{1}" couldn\'t be geocoded by google. Removing it from the places list.',n.name)),0===r&&o.resolve(t)}))}),s=t,a=Array.isArray(s),h=0,s=a?s:s[Symbol.iterator]();;){var u,l=n();if("break"===l)break}return 0===r&&o.resolve(t),o},e.prototype.determineBestSearchResult=function(t){var e=null;if(t.length)for(var o=Number.MAX_VALUE,r=t,i=Array.isArray(r),n=0,r=i?r:r[Symbol.iterator]();;){var s;if(i){if(n>=r.length)break;s=r[n++]}else{if(n=r.next(),n.done)break;s=n.value}var a=s,h=this.constructor.google.maps.geometry.spherical.computeDistanceBetween(a.geometry.location,this.map.getCenter());h<o&&(e=a,o=h)}return e},e.prototype.onLoaded=function(){var t=this;return setTimeout(function(){return t.$domNode.find("input").animate.apply(t.$domNode.find("input"),t._options.input.showAnimation)},this._options.showInputAfterLoadedDelayInMilliseconds),this},e.prototype.createMarker=function(t){for(var e=0;this.seenLocations.includes(t.latitude+"-"+t.longitude);)e%2?t.latitude+=this._options.distanceToMoveByDuplicatedEntries:t.longitude+=this._options.distanceToMoveByDuplicatedEntries,e+=1;this.seenLocations.push(t.latitude+"-"+t.longitude);var o={position:new this.constructor.google.maps.LatLng(t.latitude,t.longitude),map:this.map,data:t};return(t.markerIconFileName||this._options.defaultMarkerIconFileName)&&(o.icon=c["default"].extend({},this._options.marker.icon),o.icon.size&&(o.icon.size=new this.constructor.google.maps.Size(o.icon.size.width,o.icon.size.height,o.icon.size.unit,o.icon.size.unit)),o.icon.scaledSize&&(o.icon.scaledSize=new this.constructor.google.maps.Size(o.icon.scaledSize.width,o.icon.scaledSize.height,o.icon.scaledSize.unit,o.icon.scaledSize.unit)),t.markerIconFileName?o.icon.url=this._options.iconPath+t.markerIconFileName:o.icon.url=this._options.iconPath+this._options.defaultMarkerIconFileName),t.title&&(o.title=t.title),o.infoWindow=new this.constructor.google.maps.InfoWindow({content:""}),o.infoWindow.isOpen=!1,this.constructor.google.maps.event.addListener(o.infoWindow,"closeclick",function(){o.infoWindow.isOpen=!1}),o.nativeMarker=new this.constructor.google.maps.Marker(o),this.constructor.google.maps.event.addListener(o.nativeMarker,"click",this.getMethod("openMarker",this,o)),this.markers.push(o),o.nativeMarker},e.prototype.openMarker=function(t,e){if(e&&"stopPropagation"in e&&e.stopPropagation(),this.highlightMarker(t,e,"stop"),"cluster"in this._options.marker&&this._options.marker.cluster.maxZoom&&this.map.getZoom()<=this._options.marker.cluster.maxZoom&&this.map.setZoom(this._options.marker.cluster.maxZoom+1),this.closeSearchResults(e),this.currentlyOpenWindow===t.infoWindow&&this.currentlyOpenWindow.isOpen)return this;this.fireEvent("infoWindowOpen",e,t),t.refreshSize=function(){return t.infoWindow.setContent(t.infoWindow.getContent())};var o=this.makeInfoWindow(t);return"string"==typeof o?t.infoWindow.setContent(o):(t.infoWindow.setContent(this._options.infoWindow.loadingContent),o.then(function(e){return t.infoWindow.setContent(e)})),this.currentlyOpenWindow&&(this.currentlyOpenWindow.isOpen=!1,this.currentlyOpenWindow.close()),this.currentlyOpenWindow=t.infoWindow,t.infoWindow.isOpen=!0,t.infoWindow.open(this.map,t.nativeMarker),this.map.panTo(t.nativeMarker.position),this.map.panBy(0,-this._options.infoWindow.additionalMoveToBottomInPixel),this.fireEvent("infoWindowOpened",e,t),this},e.prototype.openPlace=function(t,e){return e&&e.stopPropagation(),this.closeSearchResults(e),this.currentlyOpenWindow&&(this.currentlyOpenWindow.isOpen=!1,this.currentlyOpenWindow.close()),this.map.setCenter(t.geometry.location),this.map.setZoom(this._options.successfulSearchZoom),this},e.prototype.highlightMarker=function(t,e){var o=arguments.length<=2||void 0===arguments[2]?"bounce":arguments[2];return e&&e.stopPropagation(),this.currentlyHighlightedMarker&&("nativeMarker"in this.currentlyHighlightedMarker&&this.currentlyHighlightedMarker.nativeMarker.setAnimation(null),this.currentlyHighlightedMarker.isHighlighted=!1,this.currentlyHighlightedMarker=null),"nativeMarker"in t&&("stop"===o?t.nativeMarker.setAnimation(null):("cluster"in this._options.marker&&this._options.marker.cluster.maxZoom&&this.map.getZoom()<=this._options.marker.cluster.maxZoom&&"position"in t.nativeMarker&&this.map.getBounds().contains(t.nativeMarker.positioning)&&(this.map.setCenter(t.nativeMarker.position),this.map.setZoom(this._options.marker.cluster.maxZoom+1)),t!==this.currentlyHighlightedMarker&&t.nativeMarker&&(t.nativeMarker.setAnimation(this.constructor.google.maps.Animation[o.toUpperCase()]),t.isHighlighted=!0,this.currentlyHighlightedMarker=t),this.fireEvent("markerHighlighted",t))),this},e.prototype.makeInfoWindow=function(t){if("content"in this._options.infoWindow){if(c["default"].isFunction(this._options.infoWindow.content))return this._options.infoWindow.content.apply(this,arguments);if(this._options.infoWindow.content)return this._options.infoWindow.content}var e="<div>";for(var o in t.data)t.data.hasOwnProperty(o)&&(e+=o+": "+t.data[o]+"<br />");return e+"</div>"},e.prototype.makeSearchResults=function(t){if(c["default"].isFunction(this._options.searchBox.content))return this._options.searchBox.content.apply(this,arguments);if("content"in this._options.searchBox.content)return this._options.searchBox.content;for(var e="",o=t,r=Array.isArray(o),i=0,o=r?o:o[Symbol.iterator]();;){var n;if(r){if(i>=o.length)break;n=o[i++]}else{if(i=o.next(),i.done)break;n=i.value}var s=n;e+="<div>";for(var a in s.data)s.data.hasOwnProperty(a)&&(e+=a+": "+s.data[a]+"<br />");e+="</div>"}return e},e}(c["default"].Tools["class"]);d._name="StoreLocator",c["default"].fn.StoreLocator=function(){return c["default"].Tools().controller(d,arguments,this)},e["default"]=c["default"]}).call(e,function(){return this}(),o(3)(t))},function(t,e){function o(t,e,r){this.extend(o,n.maps.OverlayView),this.map_=t,this.markers_=[],this.clusters_=[],this.sizes=[53,56,66,78,90],this.styles_=[],this.ready_=!1;var i=r||{};this.gridSize_=i.gridSize||60,this.minClusterSize_=i.minimumClusterSize||2,this.maxZoom_=i.maxZoom||null,this.styles_=i.styles||[],this.imagePath_=i.imagePath||this.MARKER_CLUSTER_IMAGE_PATH_,this.imageExtension_=i.imageExtension||this.MARKER_CLUSTER_IMAGE_EXTENSION_,this.zoomOnClick_=!0,void 0!=i.zoomOnClick&&(this.zoomOnClick_=i.zoomOnClick),this.averageCenter_=!1,void 0!=i.averageCenter&&(this.averageCenter_=i.averageCenter),this.setupStyles_(),this.setMap(t),this.prevZoom_=this.map_.getZoom();var s=this;n.maps.event.addListener(this.map_,"zoom_changed",function(){var t=s.map_.getZoom();s.prevZoom_!=t&&(s.prevZoom_=t,s.resetViewport())}),n.maps.event.addListener(this.map_,"idle",function(){s.redraw()}),e&&e.length&&this.addMarkers(e,!1)}function r(t){this.markerClusterer_=t,this.map_=t.getMap(),this.gridSize_=t.getGridSize(),this.minClusterSize_=t.getMinClusterSize(),this.averageCenter_=t.isAverageCenter(),this.center_=null,this.markers_=[],this.bounds_=null,this.clusterIcon_=new i(this,t.getStyles(),t.getGridSize())}function i(t,e,o){t.getMarkerClusterer().extend(i,n.maps.OverlayView),this.styles_=e,this.padding_=o||0,this.cluster_=t,this.center_=null,this.map_=t.getMap(),this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(this.map_)}var n={};o.prototype.MARKER_CLUSTER_IMAGE_PATH_="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m",o.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_="png",o.prototype.extend=function(t,e){return function(t){for(var e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},o.prototype.onAdd=function(){this.setReady_(!0)},o.prototype.draw=function(){},o.prototype.setupStyles_=function(){if(!this.styles_.length)for(var t,e=0;t=this.sizes[e];e++)this.styles_.push({url:this.imagePath_+(e+1)+"."+this.imageExtension_,height:t,width:t})},o.prototype.fitMapToMarkers=function(){for(var t,e=this.getMarkers(),o=new n.maps.LatLngBounds,r=0;t=e[r];r++)o.extend(t.getPosition());this.map_.fitBounds(o)},o.prototype.setStyles=function(t){this.styles_=t},o.prototype.getStyles=function(){return this.styles_},o.prototype.isZoomOnClick=function(){return this.zoomOnClick_},o.prototype.isAverageCenter=function(){return this.averageCenter_},o.prototype.getMarkers=function(){return this.markers_},o.prototype.getTotalMarkers=function(){return this.markers_.length},o.prototype.setMaxZoom=function(t){this.maxZoom_=t},o.prototype.getMaxZoom=function(){return this.maxZoom_},o.prototype.calculator_=function(t,e){for(var o=0,r=t.length,i=r;0!==i;)i=parseInt(i/10,10),o++;return o=Math.min(o,e),{text:r,index:o}},o.prototype.setCalculator=function(t){this.calculator_=t},o.prototype.getCalculator=function(){return this.calculator_},o.prototype.addMarkers=function(t,e){for(var o,r=0;o=t[r];r++)this.pushMarkerTo_(o);e||this.redraw()},o.prototype.pushMarkerTo_=function(t){if(t.isAdded=!1,t.draggable){var e=this;n.maps.event.addListener(t,"dragend",function(){t.isAdded=!1,e.repaint()})}this.markers_.push(t)},o.prototype.addMarker=function(t,e){this.pushMarkerTo_(t),e||this.redraw()},o.prototype.removeMarker_=function(t){var e=-1;if(this.markers_.indexOf)e=this.markers_.indexOf(t);else for(var o,r=0;o=this.markers_[r];r++)if(o==t){e=r;break}return e!=-1&&(t.setMap(null),this.markers_.splice(e,1),!0)},o.prototype.removeMarker=function(t,e){var o=this.removeMarker_(t);return!(e||!o)&&(this.resetViewport(),this.redraw(),!0)},o.prototype.removeMarkers=function(t,e){for(var o,r=!1,i=0;o=t[i];i++){var n=this.removeMarker_(o);r=r||n}if(!e&&r)return this.resetViewport(),this.redraw(),!0},o.prototype.setReady_=function(t){this.ready_||(this.ready_=t,this.createClusters_())},o.prototype.getTotalClusters=function(){return this.clusters_.length},o.prototype.getMap=function(){return this.map_},o.prototype.setMap=function(t){this.map_=t},o.prototype.getGridSize=function(){return this.gridSize_},o.prototype.setGridSize=function(t){this.gridSize_=t},o.prototype.getMinClusterSize=function(){return this.minClusterSize_},o.prototype.setMinClusterSize=function(t){this.minClusterSize_=t},o.prototype.getExtendedBounds=function(t){var e=this.getProjection(),o=new n.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),r=new n.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),i=e.fromLatLngToDivPixel(o);i.x+=this.gridSize_,i.y-=this.gridSize_;var s=e.fromLatLngToDivPixel(r);s.x-=this.gridSize_,s.y+=this.gridSize_;var a=e.fromDivPixelToLatLng(i),h=e.fromDivPixelToLatLng(s);return t.extend(a),t.extend(h),t},o.prototype.isMarkerInBounds_=function(t,e){return e.contains(t.getPosition())},o.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers_=[]},o.prototype.resetViewport=function(t){for(var e,o=0;e=this.clusters_[o];o++)e.remove();for(var r,o=0;r=this.markers_[o];o++)r.isAdded=!1,t&&r.setMap(null);this.clusters_=[]},o.prototype.repaint=function(){var t=this.clusters_.slice();this.clusters_.length=0,this.resetViewport(),this.redraw(),window.setTimeout(function(){for(var e,o=0;e=t[o];o++)e.remove()},0)},o.prototype.redraw=function(){this.createClusters_()},o.prototype.distanceBetweenPoints_=function(t,e){if(!t||!e)return 0;var o=6371,r=(e.lat()-t.lat())*Math.PI/180,i=(e.lng()-t.lng())*Math.PI/180,n=Math.sin(r/2)*Math.sin(r/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),s=2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n)),a=o*s;return a},o.prototype.addToClosestCluster_=function(t){for(var e,o=4e4,i=null,n=(t.getPosition(),0);e=this.clusters_[n];n++){var s=e.getCenter();if(s){var a=this.distanceBetweenPoints_(s,t.getPosition());a<o&&(o=a,i=e)}}if(i&&i.isMarkerInClusterBounds(t))i.addMarker(t);else{var e=new r(this);e.addMarker(t),this.clusters_.push(e)}},o.prototype.createClusters_=function(){if(this.ready_)for(var t,e=new n.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),this.map_.getBounds().getNorthEast()),o=this.getExtendedBounds(e),r=0;t=this.markers_[r];r++)!t.isAdded&&this.isMarkerInBounds_(t,o)&&this.addToClosestCluster_(t);
},r.prototype.isMarkerAlreadyAdded=function(t){if(this.markers_.indexOf)return this.markers_.indexOf(t)!=-1;for(var e,o=0;e=this.markers_[o];o++)if(e==t)return!0;return!1},r.prototype.addMarker=function(t){if(this.isMarkerAlreadyAdded(t))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,o=(this.center_.lat()*(e-1)+t.getPosition().lat())/e,r=(this.center_.lng()*(e-1)+t.getPosition().lng())/e;this.center_=new n.maps.LatLng(o,r),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();t.isAdded=!0,this.markers_.push(t);var i=this.markers_.length;if(i<this.minClusterSize_&&t.getMap()!=this.map_&&t.setMap(this.map_),i==this.minClusterSize_)for(var s=0;s<i;s++)this.markers_[s].setMap(null);return i>=this.minClusterSize_&&t.setMap(null),this.updateIcon(),!0},r.prototype.getMarkerClusterer=function(){return this.markerClusterer_},r.prototype.getBounds=function(){for(var t,e=new n.maps.LatLngBounds(this.center_,this.center_),o=this.getMarkers(),r=0;t=o[r];r++)e.extend(t.getPosition());return e},r.prototype.remove=function(){this.clusterIcon_.remove(),this.markers_.length=0,delete this.markers_},r.prototype.getSize=function(){return this.markers_.length},r.prototype.getMarkers=function(){return this.markers_},r.prototype.getCenter=function(){return this.center_},r.prototype.calculateBounds_=function(){var t=new n.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)},r.prototype.isMarkerInClusterBounds=function(t){return this.bounds_.contains(t.getPosition())},r.prototype.getMap=function(){return this.map_},r.prototype.updateIcon=function(){var t=this.map_.getZoom(),e=this.markerClusterer_.getMaxZoom();if(e&&t>e)for(var o,r=0;o=this.markers_[r];r++)o.setMap(this.map_);else{if(this.markers_.length<this.minClusterSize_)return void this.clusterIcon_.hide();var i=this.markerClusterer_.getStyles().length,n=this.markerClusterer_.getCalculator()(this.markers_,i);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.setSums(n),this.clusterIcon_.show()}},i.prototype.triggerClusterClick=function(){var t=this.cluster_.getMarkerClusterer();n.maps.event.trigger(t,"clusterclick",this.cluster_),t.isZoomOnClick()&&this.map_.fitBounds(this.cluster_.getBounds())},i.prototype.onAdd=function(){if(this.div_=document.createElement("DIV"),this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(t),this.div_.innerHTML=this.sums_.text}var e=this.getPanes();e.overlayMouseTarget.appendChild(this.div_);var o=this;n.maps.event.addDomListener(this.div_,"click",function(){o.triggerClusterClick()})},i.prototype.getPosFromLatLng_=function(t){var e=this.getProjection().fromLatLngToDivPixel(t);return"object"==typeof this.iconAnchor_&&2===this.iconAnchor_.length?(e.x-=this.iconAnchor_[0],e.y-=this.iconAnchor_[1]):(e.x-=parseInt(this.width_/2,10),e.y-=parseInt(this.height_/2,10)),e},i.prototype.draw=function(){if(this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px"}},i.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},i.prototype.show=function(){if(this.div_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(t),this.div_.style.display=""}this.visible_=!0},i.prototype.remove=function(){this.setMap(null)},i.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),this.div_.parentNode.removeChild(this.div_),this.div_=null)},i.prototype.setSums=function(t){this.sums_=t,this.text_=t.text,this.index_=t.index,this.div_&&(this.div_.innerHTML=t.text),this.useStyle()},i.prototype.useStyle=function(){var t=Math.max(0,this.sums_.index-1);t=Math.min(this.styles_.length-1,t);var e=this.styles_[t];this.url_=e.url,this.height_=e.height,this.width_=e.width,this.textColor_=e.textColor,this.anchor_=e.anchor,this.textSize_=e.textSize,this.backgroundPosition_=e.backgroundPosition,this.iconAnchor_=e.iconAnchor},i.prototype.setCenter=function(t){this.center_=t},i.prototype.createCss=function(t){var e=[];e.push("background-image:url("+this.url_+");");var o=this.backgroundPosition_?this.backgroundPosition_:"0 0";e.push("background-position:"+o+";"),"object"==typeof this.anchor_?("number"==typeof this.anchor_[0]&&this.anchor_[0]>0&&this.anchor_[0]<this.height_?e.push("height:"+(this.height_-this.anchor_[0])+"px; padding-top:"+this.anchor_[0]+"px;"):"number"==typeof this.anchor_[0]&&this.anchor_[0]<0&&-this.anchor_[0]<this.height_?e.push("height:"+this.height_+"px; line-height:"+(this.height_+this.anchor_[0])+"px;"):e.push("height:"+this.height_+"px; line-height:"+this.height_+"px;"),"number"==typeof this.anchor_[1]&&this.anchor_[1]>0&&this.anchor_[1]<this.width_?e.push("width:"+(this.width_-this.anchor_[1])+"px; padding-left:"+this.anchor_[1]+"px;"):e.push("width:"+this.width_+"px; text-align:center;")):e.push("height:"+this.height_+"px; line-height:"+this.height_+"px; width:"+this.width_+"px; text-align:center;");var r=this.textColor_?this.textColor_:"black",i=this.textSize_?this.textSize_:11;return e.push("cursor:pointer; top:"+t.y+"px; left:"+t.x+"px; color:"+r+"; position:absolute; font-size:"+i+"px; font-family:Arial,sans-serif; font-weight:bold"),e.join("")},window.MarkerClusterer=o,o.prototype.addMarker=o.prototype.addMarker,o.prototype.addMarkers=o.prototype.addMarkers,o.prototype.clearMarkers=o.prototype.clearMarkers,o.prototype.fitMapToMarkers=o.prototype.fitMapToMarkers,o.prototype.getCalculator=o.prototype.getCalculator,o.prototype.getGridSize=o.prototype.getGridSize,o.prototype.getExtendedBounds=o.prototype.getExtendedBounds,o.prototype.getMap=o.prototype.getMap,o.prototype.getMarkers=o.prototype.getMarkers,o.prototype.getMaxZoom=o.prototype.getMaxZoom,o.prototype.getStyles=o.prototype.getStyles,o.prototype.getTotalClusters=o.prototype.getTotalClusters,o.prototype.getTotalMarkers=o.prototype.getTotalMarkers,o.prototype.redraw=o.prototype.redraw,o.prototype.removeMarker=o.prototype.removeMarker,o.prototype.removeMarkers=o.prototype.removeMarkers,o.prototype.resetViewport=o.prototype.resetViewport,o.prototype.repaint=o.prototype.repaint,o.prototype.setCalculator=o.prototype.setCalculator,o.prototype.setGridSize=o.prototype.setGridSize,o.prototype.setMaxZoom=o.prototype.setMaxZoom,o.prototype.onAdd=o.prototype.onAdd,o.prototype.draw=o.prototype.draw,r.prototype.getCenter=r.prototype.getCenter,r.prototype.getSize=r.prototype.getSize,r.prototype.getMarkers=r.prototype.getMarkers,i.prototype.onAdd=i.prototype.onAdd,i.prototype.draw=i.prototype.draw,i.prototype.onRemove=i.prototype.onRemove,e.Class=o,e.google=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(e,o){e.exports=t},function(t,o){t.exports=e}])});