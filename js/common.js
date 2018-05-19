/* 
* @Author: Marte
* @Date:   2018-01-21 13:54:30
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-21 14:17:51
*/

$(document).ready(function(){
  //包含最大值和最小值。
  function getRandom(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;//The maximum is inclusive and the minimum is inclusive;包含最大值和最小值。
  }
});