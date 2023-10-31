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
        ind=prompt("enter the index of the item to be deleted");
        chlist.splice(ind,1);
        ch='';
        console.log("1 item deleted..,,,!!!!");
    }
    else{
        ch = prompt("enter ur choice");
    }
    
}
console.log("bye");