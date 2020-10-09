// var tampung = []

// function slice(data, start, end) {
//     if(!start){
//         console.log('if start')
//         return data
//     }else if(start > data.length){
//         console.log('else if start')
//         return []
//     }else if(!end){
//         for(i=start; i<=data.length; i++){
//             tampung.push(data[i])
//         }
//         return tampung
//     }else{
//         for(i=start; i<=end; i++){
//             console.log('masuk else')
//             return data[i]
//         }
//     }
// }

// console.log(slice(['aa', 'bb', 'cc', 'dd', 'ee'], 2))

const ladder=(word)=>{
    var kata = word.split('')
    var arr = []

    for (i=kata.length; i<=0; i--){
        arr.push(kata[i])
    }
    console.log(kata)
    return arr
}

console.log(ladder('tangkuban'))