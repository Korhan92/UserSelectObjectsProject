
console.log(users)
console.log(Object.values(users))
//console.log(Object.values(users).length)
let max = 0
let obj = {}
for(const key in users) {
   
    if (users[key].skills.length> max) {
        max = users[key].skills.length
        obj = users[key]
    }
      
    

}

let sayac = 0
for( const key in users) {
    if (users[key].points >= 50) {
        sayac++
    }
}

let mern = []

for (const key in users) {
    if (users[key].skills.includes('MongoDB' && 'Express' && 'React' && 'Node') ) {
        console.log(users[key])
        mern.push(key)

} }

console.log(mern)
console.log(mern.length)
users.korhan = {
    email: 'korhan.tokgoz92@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 29,
    isLoggedIn: false,
    points: 100
}
console.log(users)

for( const key in users){
    console.log(`${key} is ${users[key].age} years old. He knows ${users[key].skills}.`)
}

//console.log(obj)
//console.log(sayac)  