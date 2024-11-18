const countdown = document.querySelector("#time");
var q=1;
let start=1;
let time=start*60;
interval=setInterval(t,1000);

function result(){
    const q1 = document.getElementsByName('q1');
    const m1 = document.querySelector("#m1");
    const q2 = document.getElementsByName('q2');
    const m2 = document.querySelector("#m2");
    const q3 = document.getElementsByName('q3');
    const m3 = document.querySelector("#m3");
    const q4 = document.getElementsByName('q4');
    const m4 = document.querySelector("#m4");
    const q5 = document.getElementsByName('q5');
    const m5 = document.querySelector("#m5");
    const m = document.querySelector("#m");
    var total=0;
    if(q1[0].checked == true)
     {
        m1.innerHTML='1';
        ++total;
     }   
    else
        m1.innerHTML='0';
    if(q2[0].checked == true)
     {
        m2.innerHTML='1';
        ++total;
     }   
    else
        m2.innerHTML='0';
    if(q3[1].checked == true)
    {
        m3.innerHTML='1';
        ++total;
    }
    else
        m3.innerHTML='0';
    if(q4[1].checked == true)
    {
        m4.innerHTML='1';
        ++total;
    }
    else
        m4.innerHTML='0';
    if(q5[0].checked == true)
    {
        m5.innerHTML='1';
        ++total;
    }
    else
        m5.innerHTML='0';

    m.innerHTML=total;
    document.querySelector("#exam").style.display = 'none';
    document.querySelector('#end').style.display = 'block';
}


function t(){
   const min= "0" + Math.floor(time/60);
   let sec = time%60;

   sec= sec<10?'0'+sec:sec;

   countdown.innerHTML = `${min}:${sec}`
   
   if(time==0){
        clearInterval(interval);
        result();
   }
        

    time--;
}

const f=document.getElementsByTagName('form')[0];


const tag1=document.querySelector("#t1");
const tag2=document.querySelector("#t2");
const tag3=document.querySelector("#t3");
const tag4=document.querySelector("#t4");
const tag5=document.querySelector("#t5");
high(q);
tag1.onclick = function(){q=1;high(q)}
tag2.onclick = function(){q=2;high(q)}
tag3.addEventListener('click',()=>{q=3;high(q)})
tag4.addEventListener('click',()=>{q=4;high(q)})
tag5.addEventListener('click',()=>{q=5;high(q)})

const next = document.querySelector("#nxt");
const prev = document.querySelector("#prev");
const submit = document.querySelector("#submit");

next.onclick = function(){
    if(q<5)
        q=q+1;
    x = "#q"+q;
    console.log(x);
    next.setAttribute("href",x);
    high(q)
}

prev.onclick = function(){
    if(q>1)
        q=q-1;
    x = "#q"+q;
    console.log(x);
    prev.setAttribute("href",x);
    high(q)
}

f.onsubmit = function(event){
    event.preventDefault();
    result();
}

function high(q){
    if(q==1){
        tag1.style.backgroundColor = 'rgb(135, 33, 135)';
        tag1.style.color = 'white';
        tag2.style.backgroundColor = '#eeeaea';
        tag2.style.color = 'black';
        tag3.style.backgroundColor = '#eeeaea';
        tag3.style.color = 'black';
        tag4.style.backgroundColor = '#eeeaea';
        tag4.style.color = 'black';
        tag5.style.backgroundColor = '#eeeaea';
        tag5.style.color = 'black';
    }
    else if(q==2){
        tag1.style.backgroundColor = '#eeeaea';
        tag1.style.color = 'black';
        tag3.style.backgroundColor = '#eeeaea';
        tag3.style.color = 'black';
        tag4.style.backgroundColor = '#eeeaea';
        tag4.style.color = 'black';
        tag5.style.backgroundColor = '#eeeaea';
        tag5.style.color = 'black';
        tag2.style.backgroundColor = 'rgb(135, 33, 135)';
        tag2.style.color = 'white';
    }
    else if(q==3){
        tag1.style.backgroundColor = '#eeeaea';
        tag1.style.color = 'black';
        tag2.style.backgroundColor = '#eeeaea';
        tag2.style.color = 'black';
        tag4.style.backgroundColor = '#eeeaea';
        tag4.style.color = 'black';
        tag5.style.backgroundColor = '#eeeaea';
        tag5.style.color = 'black';
        tag3.style.backgroundColor = 'rgb(135, 33, 135)';
        tag3.style.color = 'white';
    }
    else if(q==4){
        tag1.style.backgroundColor = '#eeeaea';
        tag1.style.color = 'black';
        tag2.style.backgroundColor = '#eeeaea';
        tag2.style.color = 'black';
        tag3.style.backgroundColor = '#eeeaea';
        tag3.style.color = 'black';
        tag5.style.backgroundColor = '#eeeaea';
        tag5.style.color = 'black';
        tag4.style.backgroundColor = 'rgb(135, 33, 135)';
        tag4.style.color = 'white';
    }
    else if(q==5){
        tag1.style.backgroundColor = '#eeeaea';
        tag1.style.color = 'black';
        tag2.style.backgroundColor = '#eeeaea';
        tag2.style.color = 'black';
        tag3.style.backgroundColor = '#eeeaea';
        tag3.style.color = 'black';
        tag4.style.backgroundColor = '#eeeaea';
        tag4.style.color = 'black';
        tag5.style.backgroundColor = 'rgb(135, 33, 135)';
        tag5.style.color = 'white';
    }
    else{
        console.log('q value exceeded beyond range');
    }
}

