const mixedArray = ['Matrix', 1, true, 2, false, 3]


function multiplyNumbers(array) {
    return new Promise((resolve, reject) => {
        let tempArray = array.filter((item) => typeof item === 'number').map(item => item*5)
        if (tempArray && tempArray.length > 0){
            resolve(tempArray)
        } else {
            reject("Error filtering numbers")
        }
    })
 }
 
 
 multiplyNumbers(mixedArray).then((res) => {
    console.log('Yay!!! it Works', res)
 }).catch((err) => {
    console.log('Bummer! try again', err )
 })