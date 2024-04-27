//VAR-LET-CONST


//! var:Function scope

function selamver(){
    var selam = "herkese selam";//function scope
    console.log(selam);
}
selamver();

//? let:block scope
if(true){
    let a=5;
    let b=10;

}
console.log(a);


// todo: const:block 

const user= {
    username :"nuri",
    password :"313152"
}

console.log(user);

