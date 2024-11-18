function user(){
    let x = Math.floor(Math.random()*10)+1;
    return "USER "+x;  
}

const form = document.getElementsByTagName('form')[0];
const date = new Date();

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const m = document.querySelector('#msg').value.trim();
    console.log(m);
    console.log(user())
    if(m != '')
    {

        const container = document.querySelector('.container');
        const d = document.createElement('div');

        var url = '/Attachments/profile.png';
        var image = new Image();
        image.src = url;
        //image.width = 50;
        d.appendChild(image);

        const p = document.createElement('span');
        const text = document.createTextNode(user());
        
        p.appendChild(text);
        d.appendChild(p);
        const b = document.createElement('br');
        d.appendChild(b);
        const t = document.createElement('span');
        const time = document.createTextNode(date.getDate() +'/'+ (date.getMonth()+1) +'/'+ date.getFullYear() +' '+ date.getHours()+':'+date.getMinutes());
        t.appendChild(time);
        d.appendChild(t);
        t.style.fontWeight = 'normal';
        
        const reply = document.createElement('button');
        const r = document.createTextNode('REPLY');
        reply.appendChild(r);
        d.appendChild(reply);
        reply.addEventListener(onclick,()=>{

            const rt = document.createElement('input');
            rt.setAttribute('type','text');
        
            d.appendChild(rt);
        
            const send = document.createElement('button');
            const l = document.createTextNode('SEND');
            send.appendChild(l);
        
            d.appendChild(send);
        
        })

        const c = document.createElement('div');
        const content = document.createTextNode(m);
        c.appendChild(content);
        d.appendChild(c);
        
        container.appendChild(d);
    }
    
})

