let arr = '2223334314aabssbsadndmfsdfsfad1122'.split("")
function unique(arr) {
    let newarr = []
    arr.forEach((item, index) => {

        if (!newarr.includes(item)) {
            newarr.push(item)
        }
    });
    return newarr
}


// function unique(arr) {
//     let newarr = []
//     arr.forEach((item, index) => {
//         if (newarr.indexOf(item) === -1) {
//             newarr.push(item)
//         }
//     });
//     return newarr
// }
