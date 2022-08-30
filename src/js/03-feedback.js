import throttle from 'lodash.throttle'
const FORM_KEY = 'feedback-form-state';
const form = document.querySelector ('form')
const email = document.querySelector ('input')
const message = document.querySelector ('textarea')
let dataForm= {};
let oldText = JSON.parse(localStorage.getItem (FORM_KEY));
 

function putDataOnLocalStorage (event){
    if (oldText){dataForm=oldText}
    dataForm[event.target.name] = event.target.value
localStorage.setItem (FORM_KEY, JSON.stringify(dataForm) )

    }  

form.addEventListener('input',throttle(putDataOnLocalStorage, 500) )


autoFillingEmail()
autoFillingMessage()



function autoFillingEmail (){
    if (oldText && oldText.email) {
        email.value = oldText.email
}
}
function autoFillingMessage (){
    if (oldText && oldText.message) {
        message.value=oldText.message}
}

function OnSubmitForm (event) {
    event.preventDefault()
    console.log(dataForm);
event.currentTarget.reset()
localStorage.removeItem (FORM_KEY)
dataForm={}
}
form.addEventListener('submit', OnSubmitForm)




