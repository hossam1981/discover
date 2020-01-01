// https://www.youtube.com/watch?v=eg4e-FObyJ8

console.log("its working...")

$(document).ready(function(){

    $('#contact-submit').click(function(event){
        event.preventDefault()
        console.log('clicked button')
  
    var email = $('#email').val()
    var name  = $('#name').val()    
    var subject = $('#subject').val()
    var message = $('#message').val()
    var statusElm = $('#status')
    statusElm.empty()

    if(email.length >= 5 && email.includes('@') && email.includes('.')){
        statusElm.append('<span> email is valid </span>')
    } else {
        event.preventDefault()
        statusElm.append('<span> email is not valid </span>')
    }

    if(subject.length >= 2 ){
        statusElm.append('<span> subject is valid </span>')
    } else {
        event.preventDefault()
        statusElm.append('<span> subject is not valid </span>')
    }
    if(message.length > 10 ){
        statusElm.append('<span> message is valid </span>')
    } else {
        event.preventDefault()
        statusElm.append('<span> message is not valid </span>')
    }
    
    })
})