let data = [2, 5, 15, 8, 20];

let input = [...data];

for(let i=0; i<input.length; i++)
    for(let j=i; j<input.length; j++)
        if(input[j] > input[j+1]){
            let temp = input[j+1];
            input[j+1] = input[j];
            input[j] = temp;
        }

console.log(`Original Array: ${data}
Sorted Array: ${input}`);
data.sort((first, second)=>first > second);