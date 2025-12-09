// // let GridBox=document.querySelector(".box");
// // GridBox.addEventListener('click',()=>{

// // });
// const emojis=["❤️","❤️","🥰","🥰","😍","😍","🤣","🤣","😎","😎","😫","😫","✅","✅","😘","😘"];
// var shuf_emojis=

const imoji = [
  { name: "smile", img: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f600.png" },
  { name: "heart", img: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/2764.png" },
  { name: "star",  img: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/2b50.png" },
  { name: "cool",  img: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png" },
  { name: "sad",   img: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f62b.png" },
  { name: "angry", img: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f621.png" }
];




// step 2.
// suffle imojies
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let fullList = [...imoji, ...imoji];// 6 pairs = 12 cards
fullList= shuffle(fullList);


// using short process
// let fullList= [...imoji, ...imoji];  // 12 cards
// fullList.sort(() => Math.random() - 0.5);


// step 1.
const parentDiv=document.querySelector('#card-section');

for(let i=0;i<fullList.length;i++){

  let  childDiv=document.createElement('div');
  childDiv.classList.add('card');
    parentDiv.appendChild(childDiv);

    childDiv.dataset.name=fullList[i].name;
    //  childDiv.style.backgroundImage=`url(${fullList[i].img})`;

  const front_div=document.createElement('div');
  front_div.classList.add('front-card');
  
  const back_div=document.createElement('div');
  back_div.classList.add('back-div');
  
   back_div.style.backgroundImage=`url(${fullList[i].img})`;

  childDiv.appendChild(front_div);
  childDiv.appendChild(back_div);
}

let selectedCard=[];

   //step 3,4
   let counter=0;
 parentDiv.addEventListener('click',(e)=>{
  if(counter>=2){

  return;
} 
    let card=e.target;
    if(card.id==="card-section") return false;
    card.parentNode.classList.add('card-selected');
    selectedCard.push(card);
    counter++;
  if(counter==2) checkMatch();
})

function checkMatch() {
  let card1=selectedCard[0];
  let card2=selectedCard[1];
  if (card1.parentNode.dataset.name === card2.parentNode.dataset.name) {
        console.log("MATCH! ❤️");
        card1.parentNode.classList.add('card-match');
        card2.parentNode.classList.add('card-match');
        selectedCard = []; 
        counter=0; // reset for next round
    } 
    else{
      setTimeout(() => {
            card1.parentNode.classList.remove('card-selected');
            card2.parentNode.classList.remove('card-selected');

            selectedCard = [];
            counter = 0;
        }, 900);
    }

}