// let btn1 = document.querySelector('#btn1');
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

let modeb = document.querySelector("#mode");
let currmode = "light";

modeb.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";

    }
    console.log(currmode);
});