// Dates 

let myDate = new Date() //created a object of Date with varivale name myDate 
console.log(myDate)

//******** Date's toString() method *********
console.log("\n working with Date's toString() method \n")

// toString() : will convert date in string format

console.log(" Type of Date() method is : ", typeof myDate, " \n") // typeof of Date() : object

console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString()) // in simplest way, i understand this
console.log(myDate.toDateString()) // in simplest way, i understand this

//******** Already given date *********
let myCreatedDate = new Date(2023, 0, 23) // months in js start with 0 value
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)  // 5 is hour and 3 is min, am
let myCreatedDate2 = new Date("2023-01-14") //when date(yy-mm-dd) given in string, month starts with 01 not with 00
let myCreatedDate3 = new Date("01-16-2023") //when date(mm-dd-yy) given min string, month starts with 01 not with 00

console.log("\n working with already given date method \n")

console.log(myCreatedDate.toDateString())
console.log(myCreatedDate1.toLocaleString())
console.log(myCreatedDate2.toLocaleString())
console.log(myCreatedDate3.toLocaleString()) // wrong output


//******** working with timestamp *********
let myTimeStamp = Date.now() // gives exact time

console.log("\n working with Timestamp i.e Date.now() method \n")

console.log(myTimeStamp) //o/p : gives long digits i.e milli second( ms )
console.log(myCreatedDate.getTime())  // it gives the time when myCreatedDate var. was created in ms

console.log(Date.now()) //gives exact date time 
console.log(Math.floor(Date.now()/1000)) //gives time in seconds


//******** working with other methods of date*********
let newDate = new Date()  //gives exact date and time

console.log("\n working with other date method \n")

console.log(newDate); 
console.log(newDate.getMonth());  // gives month  with starting index 0
console.log(newDate.getMonth()+1) // gives exact month so that user don't confuse
console.log(newDate.getDay());  // gives day no. starts with 0 index which is sunday

console.log(`Today's date is ${newDate} and day no. of present Date is ${newDate.getDay()} and the month no. of the present date is ${newDate.getMonth() +1 }`)

console.log(newDate.toLocaleDateString('default', {
    weekday: "long"
}))  // default is internationalization









