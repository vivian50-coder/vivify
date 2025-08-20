// document.querySelectorAll('#slider-btns>a')
// console.log([1, 2, 3, 4, 5][5]);
// console.log(42+42)
// console.log('Message')
// const integers= [80,90,100];
// console.log(integers[2])
// for(const i of integers) console.log(i-5);
// const animals = ["Owl" , "hArPy", "Sloth" , "penguin"];
// console.log(animals.at(-1))
// for(const a of animals) {
// if(a.toLowerCase() === animals[2].toLowerCase) continue;
    // console.log(a.toLowerCase())
// }
function slogger(p,d){
    console.log("I drink", p, "and", d, "everyday.");
}
slogger( "watre", "Juice");

function findSquare(n){
    console.log(`The square of ${n} is ${n*n}.`)
}
findSquare(8);







const anchors = document.querySelectorAll(`#slider-btns>a`)
for( const a of anchors){
    a.addEventListener(`click`,()=>{
        // console.log(a.getAttribute(`href`))
        anchors.forEach((anc)=> anc.classList.remove('on'))
        a.classList.add('on');
    })
}







