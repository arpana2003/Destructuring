const person={
    name:"Akanksha",
    age:20,
    address:{
    street:"175 Syamantak Janakpur ",
    city:"Zamania",
    district:"Ghazipur",
    state:"Uttar Pradesh"
    },
}

function nestedObj(person){
    console.log(person.name);
    console.log(person.address.street);
}

nestedObj(person)






let count=0;

function CountOccurrence(...args){
     for(let i=0;i<args.length;i++){
        // console.log("i is",i);
        let key=args[i];
        
        // console.log(key);
        for(let k=i;k>=0;k--){
            if (k==0)
            return;

            if(arr[k-1]==key){
                return
            }
        }
           for(let j=i;j<args.length;j++){
        //    console.log("j is",j);
               if(key==args[j]){
                count++;
               }
               
            }
        
            console.log(`count of ${args[i]} is ${count}`);
            count=0;
     }
}

let result=CountOccurrence("a","b","a","b","c")
console.log(result);