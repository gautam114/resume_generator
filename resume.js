'use strict';
function add(){
let a=document.createElement('textarea');
a.classList.add('form-control');
a.classList.add('mt-2');
a.classList.add('exp');//class name of tag;
a.placeholder='enter here';
a.setAttribute('rows',2);
//document.getElementById('div1').appendChild(a);

let div=document.getElementById('div1');
let btn=document.getElementById('ex_btn');
div.insertBefore(a,btn);
}

function addd(){
    let a=document.createElement('textarea');
    a.classList.add('form-control');
    a.classList.add('mt-2');
    a.classList.add('quali')
    a.setAttribute('rows',2);
    a.placeholder='enter here';

    let div=document.getElementById('div2');
    let div2=document.getElementById('quali_btn');
    div.insertBefore(a,div2);
}

/* template */
document.getElementById('f1').addEventListener('submit',(f1)=>{
    f1.preventDefault();
generate();
});

function generate(){
    
    document.getElementById('cv-form').style.display='none';
    document.getElementById('template').style.display='block';
    let nm=document.getElementById('nm');
    let cn=document.getElementById('cn');
    let ads=document.getElementById('ads');
    let fb=document.getElementById('fb');
    let insta=document.getElementById('insta');
    let linked=document.getElementById('linked');
  let obj=document.getElementById('obj');
  
    
    document.getElementById('lblnm').innerHTML=nm.value;
    document.getElementById('lblcn').innerHTML=cn.value;
    document.getElementById('lbladrs').innerHTML=ads.value;
   document.getElementById('head_nm').innerHTML=nm.value;


let file=document.getElementById('pic_file').files[0];
//console.log(file);
if(file!=undefined){
let reader=new FileReader();
reader.readAsDataURL(file);
reader.onloadend=()=>{
  document.getElementById('pic').src=reader.result;
  /*console.log(reader.result);*///     file src
}
}


   if(fb.value.trim()!=''){
    let fb_link=document.createElement('a');
    fb_link.href=fb.value;
    fb_link.innerHTML='click here';
    document.getElementById('lblfb').appendChild(fb_link);
   }else{
    document.getElementById('lblfb').innerHTML='no link';

   }

   if(insta.value.trim()!=''){
    let insta_link=document.createElement('a');
    insta_link.href=insta.value;
    insta_link.innerHTML='click here';
    document.getElementById('lblinsta').appendChild(insta_link);
   }else{
    document.getElementById('lblinsta').innerHTML='no link';

   }

   if(linked.value.trim()!=''){
    let linked_link=document.createElement('a');
    linked_link.href=linked.value;
    linked_link.innerHTML='click here';
    document.getElementById('lbllinked').appendChild(linked_link);
   }else{
    document.getElementById('lbllinked').innerHTML='no link';

   }
  /*objective */  

  if(obj.value.trim()!=''){
document.getElementById('lblobj').innerHTML='obj.value';
  }else{
    document.getElementById('lblobj').innerHTML='no objective provided';
  }



/* experience*/



    let exp=document.getElementsByClassName('exp');

    let a='';
    let _a;
    for(let i of exp){
if(i.value.trim()!=''){
    a+=`<li>${i.value}</li>`;
_a=0;
}
}
if(_a==0){
    document.getElementById('ull').innerHTML=a;   
}

/* qualification*/

let quali=document.getElementsByClassName('quali');
//console.log(quali.value);
let b='';
let _b;
for(let i of quali){
    if(i.value.trim()!=''){
    b+=`<li>${i.value}</li>`;
    _b=0;
    }
}
if(_b==0){
document.getElementById('ulll').innerHTML=b;
}



}

function priint(template){
let backup=document.body.innerHTML;
let div=document.getElementById(template).innerHTML;
document.body.innerHTML=div;
window.print();
document.body.innerHTML=backup;
}
