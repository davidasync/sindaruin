$.fn.snow();
$(document).ready(function() {
	//code for data rotate
    var t = function(t, e, n) {
        this.toRotate = e, this.el = t, this.loopNum = 0, this.period = parseInt(n, 10) || 2e3, this.txt = "", this.tick(), this.isDeleting = !1
    };

    t.prototype.tick = function() {
        var t = this.loopNum % this.toRotate.length,
            e = this.toRotate[t];
        this.txt = this.isDeleting ? e.substring(0, this.txt.length - 1) : e.substring(0, this.txt.length + 1), this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
        var n = this,
            i = 300 - 100 * Math.random();
        this.isDeleting && (i /= 2), this.isDeleting || this.txt !== e ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.loopNum++, i = 500) : (i = this.period, this.isDeleting = !0), setTimeout(function() {
            n.tick()
        }, i)
    }, window.onload = function() {
        for (var e = document.getElementsByClassName("txt-rotate"), n = 0; n < e.length; n++) {
            var i = e[n].getAttribute("data-rotate"),
                o = e[n].getAttribute("data-period");
            i && new t(e[n], JSON.parse(i), o)
        }
        var r = document.createElement("style");
        r.type = "text/css", r.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }", document.body.appendChild(r)
    }
    //end of code for data rotate
    //$('body').css({'background','url(../Resource/Images/shigatsuwakiminouso.jpg) no-repeat center center fixed'});
    $('#btnHome').css('color','#66CCFF');
    $(document).scroll(function(){
    	if($("html body").scrollTop() > 0)
	    {
    		$('.Header').addClass('scrolldown');
    		if($("html body").scrollTop() >= 707)
		    {
		    	$('#btnHome').css('color','white');
		    	$('#btnProfile').css('color','#66CCFF');
		    }

		    else
		    {
		    	$('#btnHome').css('color','#66CCFF');
		    	$('#btnProfile').css('color','white');
		    }
	    }
	    else
	    {

	    	$('.Header').removeClass('scrolldown');
	    }
    });

    $('#btnHome,#logo').click(function(e){
    	$('html body').animate({scrollTop:0}, 500);
    });

    $("#btnGallery").click(function(){
    });

    $('#know,#btnProfile').click(function(e){
    	$('html body').animate({scrollTop:707}, 500);
        //$('body').css('background','url(../Resource/Images/shigatsuwakiminouso.jpg) no-repeat center center fixed');
    });
})