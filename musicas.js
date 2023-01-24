
var pop        = ["Fireflies - Own city", "Everybody wants to rule the world - Tears for Fears","Pompeii - Bastille", "On the top of the world - Imagine dragons"];
var rock       = ["What i've done - Linkin Park", "New divide - Linkin park", "Shaking out the rust - The blue stones"];
var indie      = ["In my head - Bedroom", "Love again - Mellt", "Panache - Vacations", "Draem girl - No vacation"];
var mpb        = ["Tempo perdido - legião urbana", "O sol - Vitor Kley", "Dias de Luta, dias de glória - Charlie Brown Jr", "Só os loucos sabem - Charlie Brown Jr"];
var rap        = ["Vida loka parte 2 - Racionais'MC's ", "Jesus chorou - Racionais'MC's ", "Um bom lugar - Sabotage", "Antissocial - Froid","Sunflower - Post Malone"];
var jazz       = ["Bring it on home to me - Sam Cooke", "Let's do it - Ella Fitzgerald", "You've Got to Learn - Nina Simone", "What a Wonderful World - Louis Armstrong"];
var eletronica = ["Sunshine - Cat Dealers", "Gravity - Cat Dealers", "Hear me now - Alok", "Wake me up - Avicii", "Memories - David Guetta"];
var samba      = ["Telegrama - Exaltasamba","João E Maria - Chico Buarte","Ponto Fraco - Thiaguinho","Tira Ela de Mim - Alexandre pires"];

function mpop(){
   document.getElementById("msc").innerHTML = " ";
   
   for(var i = 0; i < pop.length; i++){    
      let lista = document.createElement("p");
      lista.append(pop[i])
      document.getElementById("msc").appendChild(lista);
   }
   
}

function mrock(){
   document.getElementById("msc").innerHTML = " ";

   for(var i = 0; i < rock.length; i++){
      var lista = document.createElement("p");
      lista.append(rock[i])
      document.getElementById("msc").appendChild(lista);
   }
}

function mindie(){
   document.getElementById("msc").innerHTML = " ";
   
   for(var i = 0; i < indie.length; i++){
    let lista = document.createElement("p");
    lista.append(indie[i])
    document.getElementById("msc").appendChild(lista);
   }
}

function mmpb(){
   document.getElementById("msc").innerHTML = " ";

   for(var i = 0; i < mpb.length; i++){ 
      let lista = document.createElement("p");
      lista.append(mpb[i])
      document.getElementById("msc").appendChild(lista);
   }   
}

function mrap(){
   document.getElementById("msc").innerHTML = " ";

   for(var i = 0; i < rap.length; i++){ 
    let lista = document.createElement("p");
    lista.append(rap[i])  
    document.getElementById("msc").appendChild(lista);
   }
}

function mjazz(){
   document.getElementById("msc").innerHTML = " ";

   for(var i = 0; i < jazz.length; i++){ 
    let lista = document.createElement("p");
    lista.append(jazz[i])  
    document.getElementById("msc").appendChild(lista);
   }
}

function meletronica(){
   document.getElementById("msc").innerHTML = " ";

   for(var i = 0; i < eletronica.length; i++){ 
    let lista = document.createElement("p");
    lista.append(eletronica[i])  
    document.getElementById("msc").appendChild(lista);
   }
}

function msamba(){
   document.getElementById("msc").innerHTML = " ";

   for(var i = 0; i < samba.length; i++){ 
    let lista = document.createElement("p");
    lista.append(samba[i])  
    document.getElementById("msc").appendChild(lista);
   }
}