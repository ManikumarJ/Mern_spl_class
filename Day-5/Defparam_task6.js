// Default Parameters Task Create a function welcomeUser(). 
// Requirements: 
// If name is passed → print name
//  If no name passed → print "Guest" 
// Example welcomeUser(); welcomeUser("Ravi");

const welcomeUser = ( name = "Guest" ) =>{

    return `Welcome ${name}`
    
}
console.log(welcomeUser());
console.log(welcomeUser("mk"));
