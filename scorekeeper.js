const p1bt=document.querySelector('#p1bt');
const p2bt=document.querySelector('#p2bt');
const p1dis=document.querySelector('#p1dis');
const p2dis=document.querySelector('#p2dis');
const reset=document.querySelector('#reset');
const topscr=document.querySelector('#topscr');


let p1scr= 0;
let p2scr=0;
let gmovr=false; 
let endpt=3;
p1bt.addEventListener('click', function() {
    if(!gmovr){
        p1scr+=1;
        if(p1scr === endpt){
            gmovr=true;
            p1dis.classList.add('has-text-success');
            p2dis.classList.add('has-text-danger');
            p1bt.disabled =true;
            p2bt.disabled =true;
        }
    }
    p1dis.textContent=p1scr; 
});
p2bt.addEventListener('click', function() {
    if(!gmovr){
        p2scr+=1;
        if(p2scr === endpt){
            gmovr=true;
            p2dis.classList.add('has-text-success');
            p1dis.classList.add('has-text-danger');
            p1bt.disabled =true;
            p2bt.disabled =true;
        }
    }
    p2dis.textContent=p2scr; 
});

topscr.addEventListener('change', function() {
    endpt=parseInt(this.value);
    resetfn();
})


reset.addEventListener('click', resetfn);

function resetfn(){
    p1dis.textContent='0';
    p2dis.textContent='0';
    p1scr= 0;
    p2scr=0;
    gmovr=false; 
    p1dis.classList.remove('has-text-success', 'has-text-danger');
    p2dis.classList.remove('has-text-success', 'has-text-danger');
    p1bt.disabled =false;
    p2bt.disabled =false;
}