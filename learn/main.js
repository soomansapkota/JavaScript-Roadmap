import User,{printName as printUserName,printAge} from './modules.js'

const user = new User('Suman',23)
console.log(user)
printUserName(user)