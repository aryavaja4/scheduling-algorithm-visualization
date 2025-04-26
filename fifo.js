const nf=document.querySelector(".nf");
const fo=document.querySelector(".fo");
const fb=document.querySelector(".fb");

const sq=document.querySelector(".sq");
const so=document.querySelector(".so");
const sb=document.querySelector(".sb");
const sf=document.querySelector(".sf");

let m;
let a=[];
let v;
let c=0;
let t=0;
let count=0;
let s=document.querySelector(".show");
let s1=document.querySelector(".show1");
let s2=document.querySelector(".show2");

fb.addEventListener('click',function(){
    fo.innerHTML+=nf.value;
    v=nf.value;
});

sb.addEventListener('click',function(){
    so.innerHTML+=sq.value;
    m=so.innerHTML;
    sq.value="";
});


sf.addEventListener('click',function(){

   for(let i=0;i<m.length;i++){
       m[i];

       if(i<=(v-1)){
        a[i]=m[i];

        if(i==0){
            s.innerHTML+=" <br>  ";
        }
        
        for(let q=0;q<=i;q++){
            if(q==0){
                s.innerHTML+=a[i]+"  |  ";
            }
            s.innerHTML+=a[q];
        }
        s.innerHTML+=" |<br>";
        

       }

       if(i>(v-1)){
        for(let j=0;j<v;j++){
            if(m[i]==a[j]){
                t++;
            }
        }
        if(t==0){
            a[c]=m[i];
            c++;
            if(c>(v-1)){
                c=0;
            }
            for(let j=0;j<v;j++){
                if(j==0){
                    s.innerHTML+=m[i]+"  |  ";
                }
                s.innerHTML+=a[j];
            }
            s.innerHTML+=" |<br> ";
        }
        if(t==1){
            s.innerHTML+=m[i]+"|<br>";
            t=0;
        }
       }
    }
});
