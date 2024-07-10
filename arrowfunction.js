// const user = {
//     usernmae: "sandeep",
//     price: 999,
//     welcome: function() {
//         // console.log(this)
//         console.log(`${this.usernmae} , welcome to website`);
//     }
// }
// user.welcome()
// user.usernmae = "sam"
// user.welcome()



// function chai() {
//     let username="sandeep"
//     console.log(this.username)
// }
// chai()



// const chai = () => {
//     let username = "sandeep"
//     console.log(this.username)
// }
// chai()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(2, 5))

// const addtwo = (num1, num2) => num1 + num2
// console.log(addtwo(2, 5))




// Immedinately invoked function expressions
// (function chai() {
//     console.log(`db connect`)
// }())

/// +++++++++++++++++++++++++++++++++++ +

// ((name) => {
//     console.log(`db connect two ${name}`)
// })('sandeep')




// maps
const map = new Map()
map.set('usa', "united states of amrica")
map.set('fr', "france")
map.set('in', "india")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, "=>", value)
}