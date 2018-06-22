//等页面加载完成之后再执行js代码
$(function() {
	var nowpage = 0;
	//	获取屏幕的宽高
	var width = window.innerWidth;
	var height = window.innerHeight;
	$(".content").width(width);
	$(".content").height(4 * height);
	$(".page").width(width);
	$(".page").height(height);
	//	不是jq自带的,是引入的插件
	//手指触屏滑动事件
	$(".content").swipe({
		swipe:function(event,direction,distence,duration,fingurecount){
			if(direction=="up"){
				nowpage++;
			}else{
				nowpage--;
			}
			if(nowpage>3){
				nowpage=3;
			}else if(nowpage<0){
				nowpage=0;
			}
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				if(nowpage==1){
					$(".page2-farm").fadeIn(2000,function(){
						$(".page2-it").fadeIn(2000)
					})
				}
				//	animate({要做的动画效果},{duration:动画时长,complete:动画执行完要做的事)
				if(nowpage==2){
					$(".page3-earlyTitle").fadeIn(2000);
					$(".page3-lastBusTitle").fadeIn(2000);
					$(".page3-bus").animate({left:"-100%"},{duration:2000});
					$(".page3-busAvatar").animate({left:"40%"},{duration:2000,complete:function(){
						$(".page3-busAvatar").fadeOut("slow");
						$(".page3-bus").fadeOut("slow");
						$(".page3-earlyTitle").fadeOut("slow");
						$(".page3-lastBusTitle").fadeOut("slow");
						$(".page3-lastBusStation").fadeOut("slow",function(){
							$(".page3-myTeamAvatar").fadeIn("slow");
							$(".page3-myTeamWall").fadeIn("slow",function(){
								$(".page3-myTeamSpace").animate({width:"30%"},{duration:400,complete:function(){
									$(".page3-myteamWhereTxt").animate({width:"55%"},{duration:400})
								}})
							});
							
//							$(".page3-myteamWhereTxt").fadeIn(2000);
//							$(".page3-myTeamSpace").fadeIn(4000);
						})
					}
					})
				}
				if(nowpage==3){
					$(".page4-lightOff").click(function(){
						$(this).attr("src","img/lightOn.jpg");
						$(".page4-lightOffBg").fadeOut("slow");
						$(".page4-cornerTitle").fadeOut("slow")
						$(".page4-arrow-up").fadeOut("slow")
						$(".page4-clickGuide").fadeOut("slow",function(){
							$(".page4-lightOnBg").fadeIn("slow");
							$(".page4-lightOn").fadeIn("slow");
						});
						
					})
				}
			}})
			
		}
	});

	$(".page1-building").fadeIn(400,function(){
		$(".page1-flight").animate({width:"80%"},{duration:2000})
	});
	
})