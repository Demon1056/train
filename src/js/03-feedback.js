import throttle from 'lodash.throttle'
const FORM_KEY = 'feedback-form-state';
const form = document.querySelector ('form')
const email = document.querySelector ('input')
const message = document.querySelector ('textarea')
const dataForm = {}
const oldText = JSON.parse(localStorage.getItem (FORM_KEY))

function putDataOnLocalStorage (){ localStorage.setItem (FORM_KEY, JSON.stringify(dataForm) )

}
function catchTextForm (event){{
   const targetName = event.target.name;
   const targetValue = event.target.value;
   dataForm[targetName] = targetValue
   putDataOnLocalStorage ()
}
}

form.addEventListener('input',throttle(catchTextForm, 1000))

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
    console.log(`Email:${email.value}  
    Message:${message.value}`);
event.currentTarget.reset()
localStorage.removeItem (FORM_KEY)
}
form.addEventListener('submit', OnSubmitForm)




