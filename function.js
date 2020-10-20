var numeri = [];

for(var i=0; i<100; i++){
    numeri[i] = i+1;
}

for(var i=0; i<100; i++){
    if( numeri[i]%3 == 0 && numeri[i]%5 == 0 ){
        console.log('FizzBuzz');
    } else if( numeri[i]%3 == 0 ) {
        console.log('Fizz');
    } else if ( numeri[i]%5 == 0 ) {
        console.log('Buzz');
    } else {
        console.log((i+1) + 'o numero: ' + numeri[i]);
    }
}
