/* 
* @Author: Marte
* @Date:   2018-01-04 02:12:56
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-21 14:21:50
*/

$(document).ready(function(){
    /*var a = a || [];
    console.log(a);*/
/*点击菜单按钮*/
  $(".btn-menu").on("click",function(){
    if(!$(".body").hasClass('display-nav'))
    {
      $(".body").addClass('display-nav');
    }
    else
    {
      $(".body").removeClass('display-nav');
    }
  });
  $(".main").on("click",function(){
    $(".body").removeClass('display-nav');
  });
/*计算rem*/
  $(window).resize(function ()// 绑定到窗口的这个事件中
  {
    var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
  });
  var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
  var wH = window.innerHeight;// 当前窗口的高度
  var wW = window.innerWidth;// 当前窗口的宽度
  var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  $('html').css('font-size', rem + "px");
});