//<![CDATA[
// Recent posts by label
function labelthumbs(e){document.write('<ul id="label_with_thumbs">');for(var t=0;t<numposts;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++){if(n.link[o].rel=="replies"&&n.link[o].type=="text/html"){var u=n.link[o].title;var f=n.link[o].href}if(n.link[o].rel=="alternate"){i=n.link[o].href;break}}var l;try{l=n.media$thumbnail.url}catch(h){s=n.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!=""){l=d}else l="https://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s100/picture_not_available.png"}var p=n.published.$t;var v=p.substring(0,4);var m=p.substring(5,7);var g=p.substring(8,10);var y=new Array;y[1]="Jan";y[2]="Feb";y[3]="Mar";y[4]="Apr";y[5]="May";y[6]="June";y[7]="July";y[8]="Aug";y[9]="Sept";y[10]="Oct";y[11]="Nov";y[12]="Dec";document.write('<li class="recapk-box">');if(showpostthumbnails==true)document.write('<div class="imageContainer"><a href="'+i+'" target ="_top"><img class="label_thumb lazyload" src="'+l+'" title="'+r+'" alt="'+r+'"/></a></div>');document.write('<a class="label_title" href="'+i+'" target ="_top">'+r+"</a>");var w="";var E=0;document.write("");p=n.published.$t;var S=[1,2,3,4,5,6,7,8,9,10,11,12];var x=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];var T=p.split("-")[2].substring(0,2);var N=p.split("-")[1];var C=p.split("-")[0];for(var k=0;k<S.length;k++){if(parseInt(N)==S[k]){N=x[k];break}}var L=T+" "+N+" "+C;if(showpostdate==true){document.write('<div class="toe"><a href="'+i+'" class="post-date">'+L+"</a>")}if(showcommentnum==true){if(E==1){w=w+" | "}if(u=="1 Comments")u="1 Comment";if(u=="0 Comments")u="No Comments";w=w+u;E=1;document.write('<a class="recent-com" href="'+f+'" target ="_top">'+u+"</a></div>");}if("content"in n){var A=n.content.$t}else if("summary"in n){var A=n.summary.$t}else var A="";var O=/<\S[^>]*>/g;A=A.replace(O,"");if(showpostsummary==true){if(A.length<numchars){document.write("");document.write(A);document.write("")}else{document.write("");A=A.substring(0,numchars);var M=A.lastIndexOf(" ");A=A.substring(0,M);document.write('<p class="post-summary">'+A+"...</p>")}}document.write("</li>");if(t!=numposts-1)document.write("")}document.write("</ul>")};$(document).ready(function() {$('.label_thumb').attr('src', function(i, src) {return src.replace( 's72-c', 's100' );});});$(document).ready(function() {$('.label_thumb').attr('src', function(i, src) {return src.replace( 'default.jpg', 'mqdefault.jpg' );});});
// Featured post
function recentposts1(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,numposts1<=e.feed.entry.length?maxpost=numposts1:maxpost=e.feed.entry.length,document.write('<div class="featured_mini">');for(var t=0;t<maxpost;t++){var i,n=e.feed.entry[t],r=n.title.$t,l=n.category[0].term;newsize;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++)if("alternate"==n.link[o].rel){i=n.link[o].href;break}for(o=0;o<n.link.length;o++)if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){n.link[o].title.split(" ")[0];break}if("content"in n)var g=n.content.$t;else if("summary"in n)g=n.summary.$t;else g="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=g,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var m=[1,2,3,4,5,6,7,8,9,10,11,12],f=["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],p=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),u=(postdate.split("-")[0],0);u<m.length;u++)if(parseInt(p)==m[u]){p=f[u];break}if(0==t){var v='<div class="featured_miniapk first"><a href="'+i+'"><div class="blog_contents"><span>'+l+"</span><h3>"+r+'</h3></div><div class="feat-img lazyload" style="background-image:url('+img[t]+');"></div></a></div>';document.write(v)}if(1==t){v='<div class="featured_miniapk second"><a href="'+i+'"><div class="blog_contents"><span>'+l+"</span><h3>"+r+'</h3></div><div class="feat-img lazyload" style="background-image:url('+img[t]+');"></div></a></div>';document.write(v)}if(2==t){v='<div class="featured_miniapk third"><a href="'+i+'"><div class="blog_contents"><span>'+l+"</span><h3>"+r+'</h3></div><div class="feat-img lazyload" style="background-image:url('+img[t]+');"></div></a></div>';document.write(v)}j++}document.write("</div>")}imgr=new Array,imgr[0]="data:image/gif;base64,R0lGODlhAQABAIAAAPHx8AAAACH5BAEAAAAALAAAAAABAAEAQAICRAEAOw==",showRandomImg=!0,aBold=!0,numposts1=3,numposts11=0,newsize=320;
//]]>
