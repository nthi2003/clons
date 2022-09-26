var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
mobileMenu.onclick = function()
{
 var isClosed = header.clientHeight == 47;
 if(isClosed)
 {
    header.style.height='auto';
 }
 else{
    header.style.height=null;
 }

}
 // tự động đóng menu
 var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

 for(var i = 0;i<menuItems.length;i++)
 {
   var menuItem = menuItems[i];
   menuItem.onclick = function(){
      header.style.height=null;
   }
 }
