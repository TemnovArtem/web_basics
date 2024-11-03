let resoult= '';
let resoult2='';
let resoult3 = '';
let resoult4 = '';
let resoult5 = '';
let resoult6 = '';
let resoult7 = '';
let resoult8 = '';
let resoult9 = '';

let x ='*';


function kl(){

for(i=0; i<9; i++){
     resoult += x;
}

console.log(resoult);

if(resoult.length = 3){
                        
    for(i=0; i<18; i++){
        resoult2 += x;
      
   }
   console.log(resoult2);
   
}
if(resoult.length = 3){
                        
    for(i=0; i<24; i++){
        resoult3 += x;
      
   }
   console.log(resoult3);
   
} if(resoult.length = 3){
                        
    for(i=0; i<27; i++){
        resoult4 += x;
      
   }
   console.log(resoult4);
   
}  if(resoult.length = 3){
                        
    for(i=0; i<29; i++){
        resoult5 += x;
      
   }
   console.log(resoult5);
   
}  
console.log(resoult5);
    
    if(resoult.length = 3){
                        
    for(i=0; i<26; i++){
        resoult6 += x;
      
   }
   console.log(resoult6);
   
}  if(resoult.length = 3){
                        
    for(i=0; i<23; i++){
        resoult7 += x;
      
   }
   console.log(resoult7);
   
}  if(resoult.length = 3){
                        
    for(i=0; i<18; i++){
        resoult8 += x;
      
   }
   console.log(resoult8);
   
}  

if(resoult.length = 3){
                        
    for(i=0; i<10; i++){
        resoult9 += x;
      
   }
   console.log(resoult9);
   
}  


}
kl()

// завдання з таймером 

let startTime = new Date().getTime(); 
let currentTime = startTime; 

while (currentTime - startTime < 10000) { 
    currentTime = new Date().getTime(); 
}

console.log("10 секунд минуло!");