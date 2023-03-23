//<![CDATA[
// Lazy Load Share
var lazyshare=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyshare||0!=document.body.scrollTop&&!1===lazyshare)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//platform-api.sharethis.com/js/sharethis.js#property=5f5e6cc99486490011bc399d&amp;product=inline-share-buttons";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyshare=!0)},!0);
// Related Posts
$(document).ready(function(){function relatedPost(g,e,r){$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results="+r,type:"get",dataType:"jsonp",success:function(t){for(var u="",h='<div class="related">',x=0;x<t.feed.entry.length;x++){for(var z=0;z<t.feed.entry[x].link.length;z++){if("alternate"==t.feed.entry[x].link[z].rel){u=t.feed.entry[x].link[z].href;break}}
var p=t.feed.entry[x].title.$t;var c=t.feed.entry[x].content.$t;var y=$('<div>').html(c);if(c.indexOf("https://www.youtube.com/embed/")>-1||c.indexOf("https://www.youtube.com/embed/")>-1){var d=t.feed.entry[x].media$thumbnail.url,m=d.replace('/default.jpg','/mqdefault.jpg'),k=m;}else if(c.indexOf("<img")>-1){var s=y.find('img:first').attr('src'),v=s.replace('s72-c','s100');var k=v;}else{var k='https://2.bp.blogspot.com/-4lZ7DCckjkg/WtaPclghMGI/AAAAAAAAN00/4Cais5iSDRwwUyU6jEc7qlCojlg1izsVgCLcBGAs/s1600/noImage.png';}
h+='<li><div class="related-thumb"><a class="related-img lazyload" href="'+u+'" style="background:url('+k+') no-repeat center center;background-size: cover"/></div><h3 class="related-title"><a href="'+u+'">'+p+'</a></h3></li>'}
h+='</div>',g.html(h);}})}
$("#related-posts").each(function(){var g=$(this),e=g.text(),r=6;relatedPost(g,e,r);});});
// Video Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
// Post image banner
$(document).ready(function(){$(".post-body img:eq(0)").each(function(){var r=$(this),t=r.attr("src"),a=r.parent().attr("href"),e=$("#blog-banner"),c=$('<a rel="prettyPhoto" href="'+a+'"><img class="lazyload" src="'+t+'" /></a>');c.appendTo(".bckpic"),e.css({"background-image":"url("+t+")"})})});
// Double Click
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
function downloadJSAtOnload(){var e=document.createElement("script");e.src="https://rawcdn.githack.com/Indzign/theme/9cb6e56a/highlightprox.js",document.body.appendChild(e)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
// Accordion
var accords=jQuery(".accordion > dd"),accordsheading=jQuery(".accordion > dt");accords.hide(),jQuery(".accordion > dt").click(function(){return jQuery(this).hasClass("active")?(accords.slideUp(),accordsheading.removeClass("active")):(accordsheading.removeClass("active"),accords.slideUp(),jQuery(this).next().slideDown(),jQuery(this).addClass("active")),!1});
// Lazy Fancy Box
var lazyfancybox=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyfancybox||0!=document.body.scrollTop&&!1===lazyfancybox)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyfancybox=!0)},!0);
// CSS Fancy Box
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css");
// Fancybox Setting
$(document).ready(function(){$(".post-body img").parent("a:not(.no-lightbox)").each(function(){$(this).attr("src",$(this).find("img").attr("src")),$(this).attr("data-fancybox","postimages")}),$(".post-body img").parent("a:not(.no-lightbox)").fancybox({margin:[50,0],onComplete:function(t,o){t.scaleToActual(0,0,0),console.log(t)}})});
//]]>
