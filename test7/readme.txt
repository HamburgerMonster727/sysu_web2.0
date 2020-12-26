1.Calculator
Before:202
After:134

2.Maze
Before:68
After:57

3.Whac-a-mole
Before:73
After:66

4.Fifteen Puzzle
Before:128
After:110

5.Toolkits使用心得
(1)jQuery 选择器使用方便，有效缩短代码长度，使代码可读性更高
(2)jQuery 事件 $(selector).click(function) 一次设置多个元素，不用再遍历数组中每个元素
(3)jQuery 对象有“批量操作”的特点可调用css对象方便修改对象的CSS
$('#test').css('background-color', 'black').css('color', 'red');
(4)jQuery prop()方法 设置或返回被选元素的属性和值,用于检索属性值

6.Tablesort
神秘代码:
var importJs=document.createElement('script')
importJs.setAttribute("type","text/javascript")
importJs.setAttribute("src", 'https://cdn.bootcss.com/jquery.tablesorter/2.31.1/js/jquery.tablesorter.js') 
document.getElementsByTagName("head")[0].appendChild(importJs)
$("table").tablesorter();

网站：http://stock.eastmoney.com/newstock.html

