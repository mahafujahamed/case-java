// problem-1: can you dind out who will get the delicious cake

const Jim = 84;
const Dela = 75;

if (Jim > Dela){
    console.log('jim will get the cake');
}
else{
    console.log('dela will get the cake');
}

// problem-2: get the lowes number in an array

function maxInArray (numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 137, 265];
const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest);