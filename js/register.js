
~function(){
    var register=document.getElementById("register");
    var oInputs=register.getElementsByTagName("input");
    var reg_btn=document.getElementById("reg_btn");
       for(var i=0;i<oInputs.length;i++){
           var cur=oInputs[i];
           cur.index=i;
           cur.flag=false;
           cur.onfocus=function(){
               if(this.value.length==0){
                    utils.addClass(this,"reg_ipt");
               }
               if(this.index===2){
                   utils.next(this.parentNode).style.display="block";
               }
           }

       }

      oInputs[0].onblur=function(){
          var item=this.parentNode;
          var val = this.value.replace(/(^ +| +$)/g, "");
          var reg =/^1\d{10}$/;
          var info=utils.children(item,"span")[0];
          var icon=utils.next(this);
          if (this.value.length == 0) {
              info.style.display="block";
              icon.style.display="block";
              info.innerHTML="你还没有填写手机号哦！";
              utils.addClass(this,"reg_ipt");
          }else{
              if(reg.test(val)){
                  info.style.display="none";
                  utils.addClass(icon,"ok_icon");
                  utils.removeClass(this,"reg_ipt");
                  this.flag=true;
                  console.log(this.flag);
              }else{
                  info.style.display="block";
                  info.innerHTML="手机号格式有误，请重新输入！";
                  utils.removeClass(icon,"ok_icon");
                  utils.addClass(this,"reg_ipt");

              }
      }
      }

    oInputs[1].onblur=function(){
        var item=this.parentNode;
        var val = this.value.replace(/(^ +| +$)/g, "");
        var reg = /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/;
        var info=utils.children(item,"span")[0];
        var icon=utils.next(this);
        if (this.value.length == 0) {
            info.style.display="block";
            icon.style.display="block";
            info.innerHTML="你还没有填写昵称哦！";
            utils.addClass(this,"reg_ipt");
        }else{
            if(reg.test(val)&&this.value.length>4&&this.value.length<20){
                info.style.display="none";
                utils.addClass(icon,"ok_icon");
                utils.removeClass(this,"reg_ipt");
                this.flag=true;
            }else{
                info.style.display="block";
                info.innerHTML="支持中英文、数字、下划线，长度只能在4-20个字符之间！";
                utils.removeClass(icon,"ok_icon");
                utils.addClass(this,"reg_ipt");

            }
        }
    }

    oInputs[2].onblur=function(){
        var item=this.parentNode;
        var val = this.value.replace(/(^ +| +$)/g, "");
        var reg = /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{6,20}/;
        var info=utils.children(item,"span")[0];
        var icon=utils.next(this);
        if (this.value.length == 0) {
            info.style.display="block";
            icon.style.display="block";
            info.innerHTML="你还没有填写密码哦！";
            utils.addClass(this,"reg_ipt");
        }else{
            if(reg.test(val)){
                info.style.display="none";
                icon.style.display="block";
                utils.addClass(icon,"ok_icon");
                utils.removeClass(this,"reg_ipt");
                this.flag=true;
            }else{
                info.style.display="block";
                info.innerHTML="支持中英文、数字、下划线，长度只能在6-20个字符之间！";
                utils.removeClass(icon,"ok_icon");
                utils.addClass(this,"reg_ipt");
                if(!(val.length>6&&val.length<20)){
                    info.innerHTML="长度只能在6-20个字符之间！";
                    return;
                }
                if(/^\d+$/.test(val)){
                    info.innerHTML="不能全是数字!";
                    return;
                }


            }
        }
    }

    oInputs[3].onblur=function(){
        var item=this.parentNode;
        var val = this.value.replace(/(^ +| +$)/g, "");
        var info=utils.children(item,"span")[0];
        var icon=utils.next(this);
        if (this.value.length == 0) {
            info.style.display="block";
            icon.style.display="block";
            info.innerHTML="你还没有填写密码哦！";
            utils.addClass(this,"reg_ipt");
        }else{
            if(oInputs[2].value===val){
                info.style.display="none";
                icon.style.display="block";
                utils.addClass(icon,"ok_icon");
                utils.removeClass(this,"reg_ipt");
                this.flag=true;
            }else{
                info.style.display="block";
                info.innerHTML="两次输入的密码不一样";
                utils.removeClass(icon,"ok_icon");
                utils.addClass(this,"reg_ipt");

            }
        }
    }


    reg_btn.onclick=function(){
        for(var i=0;i<oInputs.length;i++){
            var curIn=oInputs[i];
            var flag=curIn.flag;
            if(!flag){
                curIn.focus();
                curIn.blur();
                curIn.focus();
                return;
            }
        }
    }

}()