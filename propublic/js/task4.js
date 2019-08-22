var data,
    link;
    
    
    if (window.location.pathname == '/house-data.html' || window.location.pathname == '/house-party-loyalty.html' || window.location.pathname == '/house-attendance.html') {
      link = "https://api.propublica.org/congress/v1/113/house/members.json";
    }else{
      link = "https://api.propublica.org/congress/v1/113/senate/members.json"
    }

var stadistics = {
  party_democrat: "D",
  party_republican:"R",
  party_inde:"I",
  total_democrat:0,
  total_republican:0,
  total_inde:0,
  votes_democrat:0,
  votes_republican:0,
  votes_inde:0
}

//Request JSON

requestHeader = new Headers();
requestHeader.append('X-API-Key', '9KGloWpB847cRGpRUT9YqKsgni0pHDTHAtwbhFlq');
var init = {
  method: 'GET',
  mode: 'cors',
  headers: requestHeader
}

fetch(link, init)
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  app.object = myJson.results[0].members;
  app.filter = myJson.results[0].members;
  appLeastLoyal.object = myJson.results[0].members;
  appMostLoyal.object = myJson.results[0].members;
  appLeastEngaged.object = myJson.results[0].members;
  appMostEngaged.object = myJson.results[0].members;
  updateVueTable();
});

//VueJS

var app = new Vue({
  el: '#appTable',
  data: {
    object:{},
    filter:{}
  }
})

var appMostLoyal = new Vue({
  el: '#mostLoyal',
  data:{
    object:{}
  }
})
var appLeastEngaged = new Vue({
  el: '#leastEngaged',
  data:{
    object:{}
  }
})
var appMostEngaged = new Vue({
  el: '#mostEngaged',
  data:{
    object:{}
  }
})

var glanceTable = new Vue({
  el:'#glance',
  data:{
    stadistics:this.stadistics
  }
})

var appLeastLoyal = new Vue({
  el: '#leastLoyal',
  data:{
    object:{}
  }
})

