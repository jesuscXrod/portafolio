var menuLink = 'http://remote.fizzmod.com/menu.json';
var bodyLink = 'http://remote.fizzmod.com/body.json';
var menuNav = document.getElementById('nav-menu');
var menu = [];
var slides = [];
var filter = [];
var product = [];
var id_indice = 0;
var slider = document.getElementsByClassName('slider');
var slide = document.getElementById('slide');
var arrowLeft = document.getElementById('arrow-left');
var arrowRight = document.getElementById('arrow-right');
var main = document.getElementById('main');
var productos = document.getElementById("productos");
    
fetch(menuLink)
.then(function(response) {
    return response.json();
})
.then(function(menuJson) {
    menu = menuJson.menu.categories;
    menurender();
})
.catch(function(err){
    console.log('Fetch error', err)
});

fetch(bodyLink)
.then(function(response){
    return response.json();
})
.then(function(bodyJson){
    slides = bodyJson.slides;
    product = bodyJson.products;
    filter = bodyJson.filters;
    slideRender();
    productsRender(product);
    filter_render();
    get_id_filter();
})
.catch(function(err){
    console.log('Fetch error', err)
});
//menu
function menurender(){
    menu.forEach(element=>{
        let a = document.createElement("a");
        a.innerHTML = element.title;
        a.href = element.href;
        menuNav.appendChild(a);
    })
}