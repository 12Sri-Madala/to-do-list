export function randomString(length){
    const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVQRSTUVWXYZ1234567890';

    let randomString = '';

    for (let x = 0; x < length; x++){
        const randIndex = Math.floor(Math.random() * values.length);

        randomString += values[randIndex];
    }

    return randomString
}