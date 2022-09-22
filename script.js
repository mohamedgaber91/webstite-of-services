//local storage
let local = localStorage.getItem("option")
if(local !==null){
    document.documentElement.style.setProperty('--main-color',local)
    document.querySelectorAll(".colors .colorscont ul li ").forEach(function(li){
        li.classList.remove("active")
        if(li.dataset.color===local){
            li.classList.add("active")
        }
    

    })
    
    
}

//settingbox
let settingbox= document.querySelector(".boxSetting");
let icon= document.querySelector(".boxSetting .iconContainer i");
icon.onclick=function(){
    this.classList.toggle("fa-spin");
    settingbox.classList.toggle("open");
}


////////////sahm////////////


let sahm = document.querySelector(".sahm");


window.onscroll=function(){

if(window.scrollY >= 700){

   console.log(window.scrollY)
}
else{

    console.log("windowscrollY")
}

}


//backgroundImage

let heading= document.querySelector(".heading");

let myImges= ["p1.jpg","p2.jpg","p3.jpg","p4.jpg"];
let myBack= true;
let myInterval;
let local2 = localStorage.getItem("optionBack")
if(local2 !==null){
    if(local2==="yes"){
        myBack=true;
        

    }
    else
    {
        myBack=false;
       

        
    }
    document.querySelectorAll(".backs .backscont .butons button").forEach(element=>{
        element.classList.remove("active")
    })
    
    if(local2==="yes"){
        document.querySelector(".backs .backscont .butons .but1 button").classList.add("active");
    }
    else{
        document.querySelector(".backs .backscont .butons .but2 button").classList.add("active");
    }
    

 
}


function backgroundControl(){
if(myBack===true){
     myInterval= setInterval(function(){
let randomNumber= Math.floor(Math.random()*myImges.length)
heading.style.backgroundImage= 'url("imges/'+ myImges[randomNumber] + ' ")'
},2000)
}

}
backgroundControl();





//colors options

let colors= document.querySelectorAll(".colors .colorscont ul li ");

colors.forEach(li => {
   li.addEventListener("click",(e)=>{

    document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
    localStorage.setItem("option",e.target.dataset.color)
    
    e.target.parentElement.querySelectorAll(".active").forEach(function(element){
        element.classList.remove("active")
    })

    e.target.classList.add("active")
    
    })
  
});
//background control
let butons = document.querySelectorAll(".backs .backscont .butons button");
let buttonClass= document.querySelector(".backs .backscont .butons ")
butons.forEach(function(but){
    but.addEventListener("click",(e)=>{
     if(e.target.dataset.but==="yes"){
       
        backgroundControl();
        localStorage.setItem("optionBack","yes")
        
        
     }
     else{
        
       clearInterval(myInterval);
        myBack===false;
        localStorage.setItem("optionBack","no")
     }
     

    buttonClass.querySelectorAll(".active").forEach(function(element){
            element.classList.remove("active")
        })
        e.target.classList.add("active")
        
    })
})
//////////////////////////////// skills /////////////////////
let skills = document.querySelector(".skills");

window.onscroll= function(){
    let skillstop = skills.offsetTop;
    let skillsheight = skills.offsetHeight;
    let winheight = this.innerHeight;
    let winscrooltop = this.pageYOffset;
    let myVar =(skillstop + skillsheight - winheight)-300 ;
    if(winscrooltop >= myVar){
       document.querySelectorAll(".skills .skillcont .progress .progvalue").forEach(function(ski){
        ski.style.width= ski.dataset.prog
       })

    }
    else
    {
        let zero = 0;
        document.querySelectorAll(".skills .skillcont .progress .progvalue").forEach(function(ski){
            ski.style.width= zero;
           })
    }
   
}




////////////////gallary/////////////////

let gallery = document.querySelector(".gallery");
let myimgesGallery = document.querySelectorAll(".gallery .gallerycont img");


myimgesGallery.forEach(function(img){
    
    img.addEventListener("click",(e)=>{

         let overlay= document.createElement("div");
          overlay.className="overlayClass";
         document.body.appendChild(overlay) ;

         let box= document.createElement("div");
         box.className=("boxClass")
         let button = document.createElement("button")
         let text = document.createTextNode("x")
         button.className=("buttonClass")
         button.appendChild(text);
         
         box.appendChild(button);
         let headBox= document.createElement("h3");
        

         headBox.textContent=e.target.dataset.gall
         
         box.appendChild(headBox)
        
         let imgBox= document.createElement("img");
         imgBox.src=img.src;

         box.appendChild(imgBox);

         document.body.appendChild(box);

        
      })
      
})
document.addEventListener("click",(e)=>{
    if (e.target.className=="buttonClass"){
        document.querySelector(".boxClass").remove();
        document.querySelector(".overlayClass").remove();
    }
})




///////////////////navigation ///////////
 

let mybults= document.querySelectorAll(".review .bcont");

mybults.forEach(function(bult){
    
     bult.addEventListener("click",(e)=>{


        document.querySelector(e.target.dataset.box).scrollIntoView({

                behavior: "smooth"

        })

      
           

        


     })

})


////////////////// bults in box setting///////////////


let bults = document.querySelector(".review");

let local3= localStorage.getItem("optionBults");

if(local3 !== null){

    if(local3==="yes"){
        document.querySelector(".bults .bultscont .butons .but1 button").classList.add("active")
        bults.style.display = 'block'
    }
    else {
        document.querySelector(".bults .bultscont .butons .but2 button").classList.add("active")
        bults.remove();
    }

}


document.querySelectorAll(".bults .bultscont .butons button").forEach(function(bult){
     
    bult.addEventListener("click",(e)=>{

        if(e.target.dataset.but==="yes"){
            document.querySelectorAll(".bults .bultscont .butons button").forEach(function(element){
      
                element.classList.remove("active");

            }) ;
            e.target.classList.add("active");

            localStorage.setItem("optionBults","yes")
            bults.style.display = 'block';

        }
        else{
           
            bults.style.display="none";
            document.querySelectorAll(".bults .bultscont .butons button").forEach(function(element){
      
                element.classList.remove("active");

            }) ;
            e.target.classList.add("active");
            localStorage.setItem("optionBults","no")
            

        }


    })


})






