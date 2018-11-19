(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(43)},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(16),s=n.n(i),r=(n(22),n(3)),c=n(4),l=n(7),u=n(5),d=n(6),p=n(1),f=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("li",{role:"button",className:"box",tabIndex:"0",onKeyPress:this.props.openInfoWindow.bind(this,this.props.data.marker),onClick:this.props.openInfoWindow.bind(this,this.props.data.marker)},this.props.data.name)}}]),t}(o.Component),h=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={locations:[],flocations:[],query:"",suggestions:!0},n.filterLocations=n.filterLocations.bind(Object(p.a)(Object(p.a)(n))),n.toggleLocations=n.toggleLocations.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"filterLocations",value:function(e){this.props.closeInfoWindow();var t=e.target.value,n=[];this.state.locations.forEach(function(e){e.name.toLowerCase().indexOf(t.toLowerCase())>=0?(e.marker.setVisible(!0),n.push(e)):e.marker.setVisible(!1)}),this.setState({flocations:n,query:t})}},{key:"componentWillReceiveProps",value:function(){this.setState({locations:this.props.locations}),0===this.state.flocations.length&&this.setState({flocations:this.props.locations})}},{key:"toggleLocations",value:function(){this.setState({suggestions:!this.state.suggestions})}},{key:"render",value:function(){var e=this,t=this.state.flocations.map(function(t,n){return a.a.createElement(f,{key:n,openInfoWindow:e.props.openInfoWindow.bind(e),data:t})});return a.a.createElement("div",null,a.a.createElement("h3",{className:"title"},"Neighborhood Map"),a.a.createElement("input",{role:"search","aria-labelledby":"filter",id:"search-field",className:"search-field",type:"text",placeholder:"Search Location",value:this.state.query,onChange:this.filterLocations}),a.a.createElement("ul",null,this.state.suggestions&&t),a.a.createElement("button",{className:"button",onClick:this.toggleLocations},"Show/Hide Locations"))}}]),t}(o.Component),m=n(9),w=n.n(m),g="PH1VDYM1KA5DNYMN0W5JZKU3RD4UATS3BBR0KWPYL4MIWGB2",b="4STAFPPLEFAIY1SDN4A0AJTVM2RQJFDKBNZ3FAVYNGG4GC0Q",v="Food",k="Kanpur",y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getVenues=function(){var e={client_id:g,client_secret:b,query:v,near:k,v:"20181011"};w.a.get("https://api.foursquare.com/v2/venues/explore?"+new URLSearchParams(e)).then(function(e){var t=[];e.data.response.groups[0].items.forEach(function(e){t.push({name:e.venue.name,latitude:e.venue.location.lat,longitude:e.venue.location.lng,streetAddress:e.venue.location.address})}),n.setState({allLocations:t},n.renderMap())}).catch(function(e){console.log("ERROR: "+e)})},n.state={allLocations:[],map:"",infowindow:"",prevmarker:""},n.initMap=n.initMap.bind(Object(p.a)(Object(p.a)(n))),n.openInfoWindow=n.openInfoWindow.bind(Object(p.a)(Object(p.a)(n))),n.closeInfoWindow=n.closeInfoWindow.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getVenues()}},{key:"renderMap",value:function(){window.initMap=this.initMap,function(e){var t=window.document.getElementsByTagName("script")[0],n=window.document.createElement("script");n.src=e,n.async=!0,n.onerror=function(){document.write("Google Maps can't be loaded")},t.parentNode.insertBefore(n,t)}("https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBswAXGDfR310nBInGC4fA3HJN-v-2PBzk","&callback=initMap"))}},{key:"initMap",value:function(){var e=this,t=document.getElementById("map");t.style.height=window.innerHeight+"px";var n=new window.google.maps.Map(t,{center:{lat:+"".concat(26.449923),lng:+"".concat(80.331871)},zoom:12,mapTypeControl:!1}),o=new window.google.maps.InfoWindow({});window.google.maps.event.addListener(o,"closeclick",function(){e.closeInfoWindow()}),this.setState({map:n,infowindow:o}),window.google.maps.event.addDomListener(window,"resize",function(){var t=n.getCenter();window.google.maps.event.trigger(n,"resize"),e.state.map.setCenter(t)}),window.google.maps.event.addListener(n,"click",function(){e.closeInfoWindow()});var a=[];this.state.allLocations.forEach(function(t){var o=new window.google.maps.Marker({position:new window.google.maps.LatLng(t.latitude,t.longitude),animation:window.google.maps.Animation.DROP,map:n});o.addListener("click",function(){e.openInfoWindow(o)}),t.marker=o,a.push(t)}),this.setState({allLocations:a})}},{key:"openInfoWindow",value:function(e){this.closeInfoWindow(),this.state.infowindow.open(this.state.map,e),e.setAnimation(window.google.maps.Animation.BOUNCE),this.setState({prevmarker:e}),this.state.infowindow.setContent("Loading Data..."),this.state.map.setCenter(e.getPosition()),this.state.map.panBy(0,-100),this.getMarkerInfo(e)}},{key:"getMarkerInfo",value:function(e){var t=this,n="https://api.foursquare.com/v2/venues/search?client_id=".concat(g,"&client_secret=").concat(b,"&v=20130815&ll=").concat(e.getPosition().lat(),",").concat(e.getPosition().lng(),"&limit=1");w.a.get(n).then(function(e){if(200===e.status){var n=e.data.response.venues[0],o="<b>Verified Location: </b>"+(n.verified?"Yes":"No")+"<br>",a="<b>Number of CheckIn: </b>"+n.stats.checkinsCount+"<br>",i="<b>Number of Users: </b>"+n.stats.usersCount+"<br>",s="<b>Number of Tips: </b>"+n.stats.tipCount+"<br>",r='<a href="https://foursquare.com/v/'+n.id+'" target="_blank">Read More on Foursquare Website</a>';t.state.infowindow.setContent(a+i+s+o+r)}else t.state.infowindow.setContent("No data found!")}).catch(function(e){t.state.infowindow.setContent("No data found!")})}},{key:"closeInfoWindow",value:function(){this.state.prevmarker&&this.state.prevmarker.setAnimation(null),this.setState({prevmarker:""}),this.state.infowindow.close()}},{key:"render",value:function(){return a.a.createElement("main",null,a.a.createElement("div",{className:"sidebar"},a.a.createElement(h,{locations:this.state.allLocations,openInfoWindow:this.openInfoWindow,closeInfoWindow:this.closeInfoWindow})),a.a.createElement("div",{id:"map"}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.abdb4b42.chunk.js.map