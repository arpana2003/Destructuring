function swap(x,y){
    console.log(`Before swapping x is ${x} and y is ${y}`);
    x=y+x;  //15
    y=x-y;  //10
    x=x-y;  //5
    console.log(`After swapping x is ${x} and y is ${y}`);

}

let value= new Array(10,5)
swap(...value)
