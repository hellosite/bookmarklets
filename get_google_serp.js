s='';f=document.querySelectorAll(".g");Array.prototype.forEach.call(f,function(el,i){d=el.querySelectorAll(".r a");if(d[0])s+=d[0].getAttribute('href')+'\n';});var node=document.createElement("textarea");var textnode=document.createTextNode(s);node.appendChild(textnode);node.style.position="fixed";node.style.top="0px";node.style.right="0px";node.style.width="40%";node.style.height="30%";node.style.zIndex="9999";node.setAttribute("onclick","this.select()");document.body.appendChild(node);ad_str='';ad=document.querySelectorAll(".ads-visurl");Array.prototype.forEach.call(ad,function(el,i){d=el.querySelectorAll("._WGk");ad_str+=d[0].innerHTML+'\n';});var node=document.createElement("textarea");var textnode=document.createTextNode(ad_str);node.appendChild(textnode);node.style.position="fixed";node.style.top="50%";node.style.right="0px";node.style.width="40%";node.style.height="30%";node.setAttribute("onclick","this.select()");document.body.appendChild(node);