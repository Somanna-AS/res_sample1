var cont= document.querySelector("#container");
const base= "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon";

for(let i=1;i<=151;i++){
    const newdiv=document.createElement('div');
    newdiv.classList.add("pokemon");
    const lable=document.createElement('span');
    lable.innerText=`#${i}`;
    const newimg=document.createElement('img');
    newimg.src=`${base}/${i}.png`;
    newdiv.appendChild(newimg);
    newdiv.appendChild(lable);
    cont.appendChild(newdiv);

}

