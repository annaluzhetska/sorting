let numArr = []
for (let i = 0; i < 20; i++) 
{
    numArr[i] = Math.round(Math.random() * 100 - 50);
}
console.log(`array:`, numArr )

let i = 1
function sorting(array) 
{
    for(let star = 0; star < array.length - 1; star++) 
    {
        for(let i = star + 1; i < array.length; i++) 
        {
            if(array[star] >= array[i]) 
            {
                let temp = array[star]
                array[star] = array[i]
                array[i] = temp
            }
        }
    }
    return array
}
console.log("sorted array:", sorting(numArr))
