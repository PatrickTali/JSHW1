//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str,arr){
    for (let i = 0; i < arr.length; i++) {
        
        if (str.includes(arr[i])){
            console.log(`Matched ${arr[i]}`)

        }else{
            console.log('No Matches')
        }
        
    }
    //Your code goes here
};

//Call method here with parameters
console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Givenarr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i%2==0){
            arr.splice(i,1,"even_index")
        }
    }
    return arr
};console.log("==")
console.log(replaceEvens(Givenarr))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


function hoopCount (n) {
    if (n>=10) return 'Great, now move on to tricks'
    return 'Keep at it until you get it'
}