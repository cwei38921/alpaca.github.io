let hair = [{name:'default',value:'預設'},{name:'bang',value:'瀏海'},{name:'curls',value:'雲狀'},{name:'elegant',value:'優雅'},{name:'quiff',value:'飛機頭'},{name:'short',value:'短'}];
let ears = [{name:'default',value:'預設'},{name:'tilt-backward',value:'偏左'},{name:'tilt-forward',value:'偏右'}];
let eyes = [{name:'default',value:'預設'},{name:'angry',value:'生氣'},{name:'naughty',value:'淘氣'},{name:'panda',value:'熊貓'},{name:'smart',value:'聰明的'},{name:'star',value:'星星'}];
let mouth = [{name:'default',value:'預設'},{name:'astonished',value:'驚訝'},{name:'eating',value:'微笑'},{name:'laugh',value:'大笑'},{name:'tongue',value:'吐舌'}];
let neck = [{name:'default',value:'預設'},{name:'bend-backward',value:'左到右'},{name:'bend-forward',value:'右到左'},{name:'thick',value:'粗'}];
let leg = [{name:'default',value:'預設'},{name:'bubble-tea',value:'拿珍奶'},{name:'cookie',value:'拿餅乾'},{name:'game-console',value:'拿電動'},{name:'tilt-backward',value:'偏左'},{name:'tilt-forward',value:'偏右'}]
let accessories = [{name:'earings',value:'耳環'},{name:'flower',value:'花'},{name:'glasses',value:'眼鏡'},{name:'headphone',value:'耳機'}];
let backgrounds = [
    {name:'blue50',value:'淺藍'},{name:'blue60',value:'藍'},{name:'blue70',value:'深藍'},
    {name:'darkblue30',value:'深灰'},{name:'darkblue50',value:'湛藍'},{name:'darkblue70',value:'黑'},
    {name:'green50',value:'淺綠'},{name:'green60',value:'綠'},{name:'green70',value:'深綠'},
    {name:'red50',value:'淺紅'},{name:'red50',value:'紅'},{name:'red50',value:'深紅'},
    {name:'yellow50',value:'淺黃'},{name:'yellow50',value:'黃'},{name:'yellow50',value:'深黃'}
]

//新增按鈕
function addbtn(num , position){
    var button = document.createElement('input');
    button.type = 'button';
    button.id = num.name;
    button.value = num.value;
    button.className = 'btn';
    button.onclick = function() {
        deleteimg(position); 
        var allbtn = [];
        var btn = document.querySelectorAll('.btn');
        allbtn.push(btn);
        changebtncolor(btn,button);
        var img = document.createElement('img');
        img.src = "image/"+`${position}`+"/"+`${num.name}`+".png"
        // img.src = "/羊駝/"+`${position}`+"/"+`${num}`+".png"
        img.id = position;
        img.className = position;
        var show = document.querySelector('.show');
        show.appendChild(img);
    };
    var container = document.querySelector('#options');
    container.appendChild(button);

}
//換選項時清空按鈕
function deletebtn(){
    var options = document.querySelector('#options');
    options.innerHTML = '';
}   
//換樣式時清掉前一個
function deleteimg(num){
    if(num === 'hair' /*&& check.hair===true*/){
        var options = document.querySelector('#hair');
        options.remove();
}

    else if(num === 'ears' /*&& check.ears === true*/){
        var options = document.querySelector('#ears');
        options.remove();

}

    else if(num === 'eyes'/*&& check.eyes === true*/){
        var options = document.querySelector('#eyes');
        options.remove();
}

    else if(num === 'mouth' /*&& check.mouth === true*/){
        var options = document.querySelector('#mouth');
        options.remove();
}

    else if(num === 'neck' /*&& check.neck === true*/){
        var options = document.querySelector('#neck');
        options.remove();
}

    else if(num === 'leg' /*&& check.leg === true*/){
        var options = document.querySelector('#leg');
        options.remove();
}

    else if(num === 'accessories' /*&& check.accessories === true*/){
        var options = document.querySelector('#accessories');
        options.remove();
}

    else if(num === 'backgrounds'){
        var options = document.querySelector('#backgrounds');
        options.remove();
}
}

//點到的按鈕變色
function changebtncolor(btn,btn1){
    for(let i = 0 ; i < btn.length ; i++){
        btn[i].style.color = '#2b299b';
        btn[i].style.backgroundColor = "#FFF";
    }
    checkcolor(btn1);

}
function checkcolor(btn){
    btn.style.color = '#FFF';
    btn.style.backgroundColor = "#2b299b";
}
//點擊要更換的項目
let hairbtn = document.querySelector('.hair-btn');
let earsbtn = document.querySelector('.ears-btn');
let eyesbtn = document.querySelector('.eyes-btn'); 
let mouthbtn = document.querySelector('.mouth-btn')
let neckbtn = document.querySelector('.neck-btn');
let legbtn = document.querySelector('.leg-btn');
let accessoriesbtn = document.querySelector('.accessories-btn');
let bgbtn = document.querySelector('.background-btn');
let btn = [hairbtn,earsbtn,eyesbtn,mouthbtn,neckbtn,legbtn,accessoriesbtn,bgbtn];

hairbtn.addEventListener('click',()=>{
    changebtncolor(btn,hairbtn);
    deletebtn();
    for(let i = 0 ; i < hair.length ; i++){       
        addbtn(hair[i],'hair');
    }
});
earsbtn.addEventListener('click',()=>{
    changebtncolor(btn,earsbtn);
    deletebtn();
    for(let i = 0 ; i < ears.length ; i++){       
        addbtn(ears[i],'ears');
    }
});
eyesbtn.addEventListener('click',()=>{
    changebtncolor(btn,eyesbtn);
    deletebtn();
    for(let i = 0 ; i < eyes.length ; i++){       
        addbtn(eyes[i],'eyes');
    }
});
mouthbtn.addEventListener('click',()=>{
    changebtncolor(btn,mouthbtn);
    deletebtn();
    for(let i = 0 ; i < mouth.length ; i++){       
        addbtn(mouth[i],'mouth');
    }
});
neckbtn.addEventListener('click',()=>{
    changebtncolor(btn,neckbtn);
    deletebtn();
    for(let i = 0 ; i < neck.length ; i++){       
        addbtn(neck[i],'neck');
    }
});
legbtn.addEventListener('click',()=>{
    changebtncolor(btn,legbtn);
    deletebtn();
    for(let i = 0 ; i < leg.length ; i++){       
        addbtn(leg[i],'leg');
    }
});
accessoriesbtn.addEventListener('click',()=>{
    changebtncolor(btn,accessoriesbtn);
    deletebtn();
    for(let i = 0 ; i < accessories.length ; i++){       
        addbtn(accessories[i],'accessories');
    }
});
bgbtn.addEventListener('click',()=>{
    changebtncolor(btn,bgbtn);
    deletebtn();
    for(let i = 0 ; i < backgrounds.length ; i++){       
        addbtn(backgrounds[i],'backgrounds');
    }
});
//隨機選擇
document.querySelector('#random').addEventListener('click',()=>{
    document.getElementById("hair").src="image/"+"hair"+"/"+`${hair[Math.floor(Math.random()* hair.length)].name}`+".png";
    document.getElementById("ears").src="image/"+"ears"+"/"+`${ears[Math.floor(Math.random()* ears.length)].name}`+".png";
    document.getElementById("eyes").src="image/"+"eyes"+"/"+`${eyes[Math.floor(Math.random()* eyes.length)].name}`+".png";
    document.getElementById("mouth").src="image/"+"mouth"+"/"+`${mouth[Math.floor(Math.random()* mouth.length)].name}`+".png";
    document.getElementById("neck").src="image/"+"neck"+"/"+`${neck[Math.floor(Math.random()* neck.length)].name}`+".png";
    document.getElementById("leg").src="image/"+"leg"+"/"+`${leg[Math.floor(Math.random()* leg.length)].name}`+".png";
    document.getElementById("accessories").src="image/"+"accessories"+"/"+`${accessories[Math.floor(Math.random()* accessories.length)].name}`+".png";
    document.getElementById("backgrounds").src="image/"+"backgrounds"+"/"+`${backgrounds[Math.floor(Math.random()* backgrounds.length)].name}`+".png";
})
//回到初始羊駝
document.querySelector('#reset').addEventListener('click',()=>{
    document.getElementById("hair").src="image/"+"hair"+"/"+`${hair[0].name}`+".png";
    document.getElementById("ears").src="image/"+"ears"+"/"+`${ears[0].name}`+".png";
    document.getElementById("eyes").src="image/"+"eyes"+"/"+`${eyes[0].name}`+".png";
    document.getElementById("mouth").src="image/"+"mouth"+"/"+`${mouth[0].name}`+".png";
    document.getElementById("neck").src="image/"+"neck"+"/"+`${neck[0].name}`+".png";
    document.getElementById("leg").src="image/"+"leg"+"/"+`${leg[0].name}`+".png";
    document.getElementById("accessories").src="image/"+"accessories"+"/"+`${accessories[0].name}`+".png";
    document.getElementById("backgrounds").src="image/"+"backgrounds"+"/"+`${backgrounds[0].name}`+".png";
})