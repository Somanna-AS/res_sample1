let ch = prompt("enter ur choice");
let chlist= []; 
while(ch !== 'quit'){
    if(ch === 'new'){
        let item=prompt("enter the item ");
        chlist.push(item);
        ch='';
        console.log("1 item added to the list..,,,!!!!");
    }
    else if(ch === 'list'){
        console.log('################');
        for(let i=0;i<chlist.length;i++){
            console.log(`${i}:${chlist[i]}`);
        }
        console.log('################');
        ch='';
    }
    else if(ch === 'delete'){
        ind=parseInt(prompt("enter the index of the item to be deleted"));
        if(!Number.isNaN(ind)){
            chlist.splice(ind,1);
            console.log("1 item deleted..,,,!!!!");
        }
        ch='';
    }
    else{
        ch = prompt("enter ur choice");
    }
    
}
console.log("bye");