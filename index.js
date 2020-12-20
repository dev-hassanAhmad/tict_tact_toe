const cards=document.querySelectorAll(".card");
cards.forEach((card) => card.addEventListener("click", flip));

var counter=0;
var cardValue=["None","Zero","Cross"]
var zero,one,two,three,four,five,six,seven,eight;
var value;



function checkIt(){
    
    if(zero==one&one==two){console.log("You Won")
    var cheer = new Audio('cheer_sound.mp3');
    cheer.play();}
    if(zero!=null & three!=null & six!=null){
    if(zero==three&three==six){console.log("You Won")
    var cheer = new Audio('cheer_sound.mp3');
    cheer.play();}
    }
    if(zero!=null & three!=null & eight!=null)
    {
    if(zero==four&four==eight){console.log("You Won")
    var cheer = new Audio('cheer_sound.mp3');
    cheer.play();}
    }
    if(one!=null & four!=null & seven!=null){
    if(one==four&four==seven){console.log("You Won")
    var cheer = new Audio('cheer_sound.mp3');
    cheer.play();}
    }
    if(two!=null & four!=null & six!=null){
    if(two==four&four==six){console.log("You Won")
    var cheer = new Audio('cheer_sound.mp3');
    cheer.play();}
    }
    if(two!=null & five!=null & eight!=null){
    if(two==five&five==eight){console.log("You Won")
    var cheer = new Audio('cheer_sound.mp3');
    cheer.play();}
    }
    if(three!=null & four!=null & five!=null){
    if(three==four&four==five){console.log("You Won")
    var cheer = new Audio('cheer_sound.mp3');
    cheer.play();}
    }
    if(six!=null & seven!=null & eight!=null){
    if(six==seven&seven==eight){console.log("You Won")
    var cheer = new Audio('cheer_sound.mp3');
    cheer.play();
}
    }
    
};

function flip() {
    value=0;

    const selector= this.classList[1];
    var addCard= document.querySelector(`.${selector}`)
    const img=document.createElement("img");
    img.classList.add("front");
    var data_set=document.querySelector(`.${selector}`);
    var grab=data_set.dataset.image;
    if(counter%2==0){
        value=1;
        img.src="Zero.png";
    }
    else{
        value=2;
        img.src="Cross.png";  
    }
    addCard.appendChild(img);



    this.classList.add("flip");
    var audio = new Audio('flip_sound.mp3');
    audio.play();

    if(data_set.dataset.image==0){zero=cardValue[value]; }
    if(data_set.dataset.image==1){one=cardValue[value]; }
    if(data_set.dataset.image==2){two=cardValue[value]; }
    if(data_set.dataset.image==3){three=cardValue[value]; }
    if(data_set.dataset.image==4){four=cardValue[value]; }
    if(data_set.dataset.image==5){five=cardValue[value]; }
    if(data_set.dataset.image==6){six=cardValue[value]; }
    if(data_set.dataset.image==7){seven=cardValue[value]; }
    if(data_set.dataset.image==8){eight=cardValue[value]; }
    checkIt()

    counter+=1;

}

