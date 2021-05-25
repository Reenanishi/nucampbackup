function getName() {
    const userName = prompt('what is your name?');
    sayHello(userName);
}
function sayHello(name) { 
     
     alert ('sayHello'+ name + '!');
     console.log('Alert sent!');
}