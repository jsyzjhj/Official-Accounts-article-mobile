$(function() {
	
/* 页头导航 */
	$('.nav li').click(function(){
		$(this).siblings().removeClass();
		$(this).addClass('on');	
	});

	
/* 首页js */	
	/* 选择搜索类型 */	
	$('.search button').eq(0).click(function() {
		$('.search ul').slideDown(500);
	});	
	
	$('.search li').click(function() {
		var txt = $(this).text();
		$('.search button').eq(0).text(txt);
		$('.search ul').slideUp(500);
	});
	
	/* 点击搜索按钮清空输入框 */
	$('#search_bt').click(function() {
		$('.search input').val("");
	});
	
	/* 点击弹出更多 */
	$('#nav_more').click(function(){
		var dis = $('.nav_more').css('display');
		if(dis == 'none'){
			$('.nav_more').css('display','block');
			$('#nav_more').find('img').attr('src','images/up_triangle.png');
		} else {
			$('.nav_more').css('display','none');	
			$('#nav_more').find('img').attr('src','images/down_triangle.png');
		};
		i++;
	});
	
	/* 点击加载更多 */
	$('.loadMeinvMOre').click(function(){
		$(this).css('display','none');	
		$('#shclDefault').css('display','block');
	});
	$('#shclDefault').shCircleLoader();
	$('#shclCcw').shCircleLoader({clockwise:false});
	$('#shclColor').shCircleLoader({color:"#f00"});
	$('#shclDuration').shCircleLoader({duration: 2});
	$('#shclDots').shCircleLoader({dots:12,dotsRadius:5});
	$('#shclKeyframes').shCircleLoader({keyframes:"0%{background:black}40%{background:transparent}60%{background:transparent}100%{background:black}"});
	$('#shclNs').shCircleLoader({namespace:"myns",color:"transparent",dotsRadius:15});
	$('#shclFireballs').shCircleLoader({
		color: "red",
		dots: 12,
		dotsRadius: 13,
		keyframes:
		   "0%   {background: red;    {prefix}transform: scale(1)}\
			20%  {background: orange; {prefix}transform: scale(.4)}\
			40%  {background: red;    {prefix}transform: scale(0)}\
			50%  {background: red;    {prefix}transform: scale(1)}\
			70%  {background: orange; {prefix}transform: scale(.4)}\
			90%  {background: red;    {prefix}transform: scale(0)}\
			100% {background: red;    {prefix}transform: scale(1)}"
	});
	$('#shclProgress').shCircleLoader();
	var i = 0;
	setInterval(function() {
		$('#shclProgress').shCircleLoader('progress', i + '%');
		if (++i > 100) i = 0;
	}, 100);
	
/* 公众号列表页 */
	/* 如果公众号描述过长则截取前30位字符 */
	$('.oa_list').each(function(){
		var str = $(this).find('.oa_des').text();
		if(str.length>30){
			var newStr = str.substr(0, 32);
			$(this).find('.oa_des').text(newStr).append('...');
		};
	});
});


