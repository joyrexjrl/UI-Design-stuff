const formFirstName = document.getElementById('formFirstName');
const formLastName = document.getElementById('formLastName');
const formEmail = document.getElementById('formEmail');
const formPhoneNumber = document.getElementById('formPhoneNumber');
const formPetsName = document.getElementById('formPetsName');
const formPetsAge = document.getElementById('formPetsAge');
const formMessage = document.getElementById('formMessage');
const messageSentText = document.getElementById('messageSentText');

const formTimeZone = document.getElementById('formTimeZone');
const formPetType = document.getElementById('formPetType');

function handleFormSubmission(){
    if(formFirstName.value.trim() === '' || formLastName.value.trim() === '' || formEmail.value.trim() === '' || formPhoneNumber.value.trim() === '' ||
        formPetsName.value.trim() === '' || formPetsAge.value.trim() === ''){
        alert('Please fill in all the required fields.');
        return;
    }

    messageSentText.classList.remove('hide-sent-text');
    messageSentText.classList.add('show-sent-text');

    formFirstName.value = '';
    formLastName.value = '';
    formEmail.value = '';
    formPhoneNumber.value = '';
    formPetsName.value = '';
    formPetsAge.value = '';
    formMessage.value = '';

    formTimeZone.selectedIndex = 0;
    formPetType.selectedIndex = 0;

    setTimeout(() =>{
        messageSentText.classList.remove('show-sent-text');
        messageSentText.classList.add('hide-sent-text');
    }, 1000);
}