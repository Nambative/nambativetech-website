var searchbar = document. querySelector("#search-bar"); 
var searchbox = document. querySelector(".search-box");
var shop = document. querySelector("#shop-cart");
var  shopcart = document. querySelector(".shopping-cart");
var menubar = document. querySelector("#menu-bar");
var mynav = document. querySelector(".navbar");


searchbar.onclick = () =>{
    searchbox.classList.toggle("active");
}
shop.onclick = () =>{
    shopcart.classList.toggle("active");
}
menubar.onclick = () =>{
    mynav.classList.toggle("active");
}
