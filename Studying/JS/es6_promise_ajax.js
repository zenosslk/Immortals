// ajax 配合Promise使用


const myHttpxhr = url => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onreadystatechange = handler
        xhr.responseType = 'json'
        xhr.setRequestHeader('Accept', "application/json")
        xhr.send()

        function handler() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(this.respone)
            } else {
                reject(new Error(this.statusText))
            }
        }
    })
}

myHttpxhr(' https://www.easy-mock.com/mock/5cd9234f0d11912d235841ef/example_copy_copy_copy/mock').then(res => {
    console.log(res)
}).catch(error => {
    console.log(error)
})
// function myHttpxhr(url) {
//     return new Promise((resolve, reject) => {
//         var xhr = new XMLHttpRequest()
//         xhr.open("GET", url);
//         xhr.onreadystatechange = handler;
//         xhr.responseType = "json";
//         xhr.setRequestHeader("Accept", "application/json");
//         xhr.send();

//         function handler() {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         }
//     });
// };
// myHttpxhr('https://www.baidu.com').then(res => {
//     console.log(res);
// }).catch(error => {
//     console.log(error);
// });