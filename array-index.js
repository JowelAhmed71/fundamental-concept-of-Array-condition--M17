// 1. String type Array Decliear 
var banTeam = [ 'sakib' , 'Mashrafi' , ' mustafiz' , 'liton' , 'musfiq'];

    banTeam[3] = 'riyad '; // update value 
    
    banTeam.push('nasum'); //add element last 
    banTeam.push('robel'); //add element last 
    banTeam.pop(); //remove element last 
    
    banTeam.unshift('miraz'); //add element first 
    banTeam.unshift('taskin'); //add element first 
    banTeam.shift(); //remove element first 

var thirdIndexPerson = banTeam[2]; // use indexNum to check something or show undefined .

console.log( banTeam , thirdIndexPerson ); // output

// 2. Number type Array Decliear 
var jersyNum = [ 21,45,7,223,67,35,10 ];

    jersyNum[3] = 420 ; // update value 
    
    jersyNum.push(360) ; // add element last 
    jersyNum.push(100) ; // add element last 
    jersyNum.pop(); // remove element last
    
    jersyNum.unshift(100); // add element first
    jersyNum.unshift(400); // add element first
    jersyNum.shift(); // remove element first

var rolandoJersy = jersyNum[2] // use indexNum to check something or show undefined .

console.log ( jersyNum ,rolandoJersy ); // output 

