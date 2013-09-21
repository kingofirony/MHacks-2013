var _t=(function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,e){if(this===null){throw new TypeError()}var d=this;var a=d.length>>>0;if(a===0){return -1}var f=0;if(arguments.length>1){f=Number(arguments[1]);if(f!=f){f=0}else{if(f!==0&&f!=Infinity&&f!=-Infinity){f=(f>0||-1)*Math.floor(Math.abs(f))}}}if(f>=a){return -1}var b=f>=0?f:Math.max(a-Math.abs(f),0);for(;b<a;b++){if(b in d&&d[b]===c){return b}}return -1}}return{isLoggedIn:function(){return(document.cookie.indexOf("logged_in=1")!=-1)},sanitize:function(a,b){if(b){a=decodeURIComponent(a)}return a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},getVars:function(){var a={};window.location.hash.replace(/[#?&]+([^=&]+)(=[^&]*)?/gi,function(b,c,d){a[c]=(d===undefined)?true:d.substring(1);if(a[c].indexOf("/")!==-1){a[c]=encodeURIComponent(a[c])}});window.location.search.replace(/[?&]+([^=&]+)(=[^&]*)?/gi,function(b,c,d){a[c]=(d===undefined)?true:d.substring(1)});return a},objSize:function(b){var a=0,c;for(c in b){if(b.hasOwnProperty(c)){a++}}return a},randomProperty:function(c){var a,b=0,d;for(d in c){if(Math.random()<1/b++){a=d}}return a},findParent:function(c,b){var a=c.parentNode;while(!_t.matchesSelector(a,b)){if(!a.parentNode){return false}a=a.parentNode}return a},containsElement:function(c,d,b){if(!c||!d){return false}if(!b&&c===d){return false}var a=d;do{if(c===a){return true}}while((a=a.parentNode));return false},matchesSelector:function(c,a){if(!c){return false}if(c.webkitMatchesSelector){return c.webkitMatchesSelector(a)}if(c.mozMatchesSelector){return c.mozMatchesSelector(a)}var b=document.querySelectorAll(a);for(var d in b){return b[d]===c}return false},addClass:function(a,b){if((" "+a.className+" ").indexOf(" "+b+" ")==-1){a.className=a.className===""?b:a.className+" "+b}},removeClass:function(b,a){if(b.className.indexOf(a)==-1){return}var c=b.className.split(" ");c.splice(c.indexOf(a),1);b.className=c.join(" ")},addClasses:function(c,b){for(var a=0;a<b.length;a++){_t.addClass(c,b[a])}},removeClasses:function(c,b){for(var a=0;a<b.length;a++){_t.removeClass(c,b[a])}},toggleClass:function(b,a){if(hasClass(b,a)){_t.removeClass(b,a)}else{_t.addClass(b,a)}},hasClass:function(b,a){if(!b){return}var c=b.className;return(c.split(" ").indexOf(a)!==-1)},serialize:function(e,c){var f=[];for(var d in e){var b=c?c+"["+d+"]":d,a=e[d];f.push(typeof a=="object"?serialize(a,b):encodeURIComponent(b)+"="+encodeURIComponent(a))}return f.join("&")},relativeDate:function(b){var a=new Date();if(b){a.setTime(a.getTime()+b)}return a},getRootDomain:function(b,a){if(!b){b=document.location.href}var c=b.replace(/^[^\/]+\/\/([^\/]+).*/i,"$1");var e=c.split(".");if(e.length<2){return c}var d=e.slice(a?1:-2).join(".");if(d.toLowerCase()==="tumblr.net"){return c}return d},getCookie:function(d){var b=document.cookie;var g,f=b.split(";");var e,a=f.length;for(e=0;e<a;e+=1){if((g=f[e].replace(/^\s+|\s+$/g,"").split("="))[0]==d){return{name:g[0],value:g[1]}}}return false},setCookie:function(a,f,h,c){c=c||{};var b=new Date();var g=(typeof(c.path)!=="undefined")?c.path:"/";var e=(typeof(c.is_secure)!=="undefined")?true:false;var d=(typeof(c.domain)!=="undefined")?c.domain:"";b.setDate(b.getDate()+h);if(typeof(c.expire_date)!=="undefined"){expire_dates=true;b=c.expire_date}document.cookie=a+"="+escape(f)+((h===null)?"":";expires="+b.toGMTString())+";path="+g+((e===false)?"":";secure")+((d==="")?"":";domain="+d)},unsetCookie:function(a){_t.setCookie(a,"",-1)},getStyle:function(c,a){var b;if(typeof c.currentStyle!="undefined"){b=c.currentStyle}else{b=document.defaultView.getComputedStyle(c,null)}return b[a]||false},sortObj:function(e,d){var f=[];for(var c in e){if(e.hasOwnProperty(c)){f.push(c)}}if(typeof d==="function"){f.sort(d)}else{if(d==="value"){f.sort(function(i,h){var g=e[i];var j=e[h];return((g<j)?-1:((g>j)?1:0))})}else{f.sort()}}var a={};for(var b=0;b<f.length;b++){a[f[b]]=e[f[b]]}return a},reverseObj:function(e){var f=[];var c={};for(var d in e){var b={};b.key=d;b.val=e[d];f.push(b)}f.reverse();for(var a in f){c[f[a].key]=f[a].val}return c},protocol_host:function(){return document.location.protocol+"//"+document.location.host},postMessage:function(c,a,b){if(!b){b=parent}if(typeof c!=="string"){c=c.join(";")}if(b!==window){b.postMessage(c,a)}},each:function(c,b){for(var a=0;a<c.length;a++){if(b.apply(this,[a,c[a]])===false){return}}},trim:function(a){return a.replace(/\s*(.*\S)?\s*/i,"$1")},delay:function(d,c,a,b){if(!a){a=this}if(!b){b=[]}if(c<0){d.apply(a,b);return false}return setTimeout(function(){d.apply(a,b)},c)},is_mobile:function(b){if(typeof b==="undefined"){b=(navigator.userAgent||navigator.vendor||window.opera)}return !!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))}}})();