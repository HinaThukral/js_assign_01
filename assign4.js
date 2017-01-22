let mealCost=process.argv
let tipPercent=process.argv
const myVal=process.argv
let myArr=[]
mealCost=myArr.push(Number(myVal[2]))
tipPercent=myArr.push(Number(myVal[3]))
const tipAmount=(Number(myVal[3])/100)* Number(myVal[2])
const totalOwing=tipAmount+mealCost

const output = `your meal was $${Number(myVal[2])} + a ${Number(myVal[3])}% tip= ${totalOwing}`

console.log(output)
