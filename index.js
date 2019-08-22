/*function name(parameters){
    var container=document.getElementById("main") 
    var newdiv=document.createElement("div")
    var txtnode=document.createTextNode("hgfwhdfj fxcdywef hsgwdfjy")
 newdiv.appendchild(txtnode)
 container.appendChild(newdiv)    
};

 console.log(main)
 console.log(newdiv)*/
 /*function image() {
     console.log("this is working")
     var container=document.getElementById('main');
     console.log(container)
     var image=document.createElement('img')
     image.setAttribute('id','myimg')
     image.setAttribute('src','https://img.freepik.com/free-photo/high-angle-view-white-flowers-blue-backdrop_23-2148076672.jpg?size=626&ext=jpg')
     container.appendChild(image);
 }*/
 var main=document.getElementById("main");
 console.log(main)
 main.style.border="solid 2px gray";
 var newtaskcont=document.createElement('div');
 var taskname=document.createElement('input');
 newtaskcont.appendChild(taskname);
 main.appendChild(newtaskcont);