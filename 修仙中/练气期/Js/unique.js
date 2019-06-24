let arr = '2223334314aabssbsadndmfsdfsfad1122'.split("")
// function unique(arr) {
//     let newarr = []
//     arr.forEach((item, index) => {

//         if (!newarr.includes(item)) {
//             newarr.push(item)
//         }
//     });
//     return newarr
// }


// function unique(arr) {
//     let newarr = []
//     arr.forEach((item, index) => {
//         if (newarr.indexOf(item) === -1) {
//             newarr.push(item)
//             console.log(newarr)
//         }
//     });
//     return newarr
// }



function unique(arr) {

    let arr1 = []
    let obj1 = {}
    for (var i = 0; i < arr.length; i++) {

        if (!obj1[arr[i]]) {
            arr1.push(arr[i])
            obj1[arr[i]] = 1
            console.log(arr1)
        }
    }
    return arr1
}
unique(arr)