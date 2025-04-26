const nf=document.querySelector(".nf");
const fo=document.querySelector(".fo");
const fb=document.querySelector(".fb");

const sq=document.querySelector(".sq");
const so=document.querySelector(".so");
const sb=document.querySelector(".sb");
const sf=document.querySelector(".sf");

let m;
let a=[];
let b=[];
let v;
let c=0;
let c1=0;
let t=0;
let s=document.querySelector(".show");

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
            for(let k=i;k>=0;k--){

                for(let f=0;f<v;f++){
                    if(a[f]==m[k]){

                        if(b[f]==1){
                            b[f]=2;
                        }
                        b[f]=1;
                        if(b[f]==1){
                            c1++;
                        }
                    }
                }
                
                if(c1==v-1){
                for(let f=0;f<v;f++){
                    if(b[f]==1){

                    }
                    else{
                        a[f]=m[i];
                        c++;
                    }
                }
                }

                if(c!=0){
                    for(let y=0;y<v;y++){
                        if(y==0){
                            s.innerHTML+=m[i]+"  |  ";
                        }
                        s.innerHTML+=a[y];
                    }
                    s.innerHTML+=" |<br>";
                    c=0;
                    c1=0;
                    for(let z=0;z<v;z++){
                        b[z]=0;
                    }
                    break;
                }

            }
        }
        if(t==1){
            s.innerHTML+=m[i]+"|<br>";
            t=0;
        }
       }
       
    } 
});
