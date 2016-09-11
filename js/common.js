//顶部
~function(){
    var drop=utils.getElementsByClass("drop")[0];
    drop.onmouseover=function(){
        utils.children(this,"ul")[0].style.display="block";
    }
    drop.onmouseout=function(){
        utils.children(this,"ul")[0].style.display="none";
    }
}();

//搜索
~function(){
    var search=utils.getElementsByClass("search_tab")[0];
    var searchS=utils.children(search,"span");
    var old=0;
    for(var i= 0,len=searchS.length;i<len;i++){
        var curL=searchS[i];
        curL.index=i;
        curL.onclick=function(){
               tab(this.index);
        }
    }
    function tab(index){
        searchS[old].className="";
        searchS[index].className="active";
        old=index;
    }
}();
//侧导航

+function(){
    var outerList=document.getElementById("outerList") ;
    var oLis=utils.children(outerList,"li");

    for(var i=0;i<oLis.length;i++){
        var cur=oLis[i];
        cur.onmouseenter=function(){
            console.log(utils.children(this,"ul")[0]);
            utils.addClass(this,"active");
             utils.children(this,"ul")[0].style.display="block";
        }
        cur.onmouseleave=function(){
            utils.removeClass(this,"active");
            utils.children(this,"ul")[0].style.display="none";
        }
    }

}();

//选项卡
var hifan_item=utils.getElementsByClass("hifan_item")[0];
var recommend_item=utils.getElementsByClass("recommend_item")[0];
var box1 = new myTab(hifan_item, 0);
var box2 = new myTab(recommend_item, 0);


//滑过的效果
~function(){
    var oPs=recommend_item.getElementsByTagName("p");
    //var oPs=utils.children(oDivs,"p");
    for(var i= 0,len=oPs.length;i<len;i++){
        var curD=oPs[i];
        curD.onmouseenter=function(){
            utils.getElementsByClass("go",this)[0].style.display="block";
        }
        curD.onmouseleave=function(){
            utils.getElementsByClass("go",this)[0].style.display="none";
        }
    }
}();

//文字轮播
~function(){
    var slideD=document.getElementById("link-slide");
    var timer=setInterval(function(){
        zhufengAnimate(slideD, {marginTop: -18}, 300,function(){
            utils.css(slideD,"marginTop",0);
            slideD.appendChild(utils.firstChild(slideD,"li"))
        });
    },3000)
}();

//侧导航
~function(){
    var nav=document.getElementById("nav_box");
    var navT=utils.offset(nav).top;
    var sidebar=document.getElementById("global-sidebar");
    var goLink = document.getElementById("goLink");
    var showD=utils.getElementsByClass("side-other",sidebar)[0];
    sidebar.onmouseenter=function(){
        utils.addClass(showD,"slide-in");
        utils.removeClass(showD,"show-other slide-out");
    }
    sidebar.onmouseleave=function(){
        utils.removeClass(showD,"slide-in");
        utils.addClass(showD,"show-other slide-out");
    }

    window.onscroll = computedDisplay;
    function computedDisplay() {
        var curTop = utils.win("scrollTop");
        var curHeight = utils.win("clientHeight");
        goLink.style.display = curTop > curHeight ? "block" : "none";
        console.log(navT);
        if(curTop>=navT){
            utils.css(nav,{position:"fixed",top:0,left:0,zIndex:123});
        }else{
            utils.css(nav,"position","relative");
        }
    }
    goLink.onclick=function(){
        this.style.display = "none";
        window.onscroll = null;
        var duration = 500, interval = 10, target = utils.win("scrollTop");
        var step = (target / duration) * interval;
        var timer = window.setInterval(function () {
            var curTop =utils.win("scrollTop");
            if (curTop === 0) {
                window.clearInterval(timer);
                utils.css(nav,"position","relative");
                window.onscroll = computedDisplay;
                return;
            }
            curTop -= step;
            utils.win("scrollTop",curTop);
        }, interval);
    }

}()

