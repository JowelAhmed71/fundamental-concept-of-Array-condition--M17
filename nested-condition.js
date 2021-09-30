// nested condition :
var biriani = 180 ;
var faloda = 70 ;
var tea = 15 ;
var isWelled = true ;

var budget = 190 

if ( biriani < budget ) {
    if ( isWelled == true ) {
        console.log( 'eat that . biriani awesome ...');
    }else{
        console.log( 'not be safe');
    }
}
else if ( faloda < budget ) {
    console.log( ' try it that ...');
}
else if ( tea == budget ) {
    console.log( ' drink tea ');
}
else{
    console.log( 'try it other way');
}