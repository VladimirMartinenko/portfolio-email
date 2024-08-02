const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function sendEmail() {
  const bodyMessage = `Name: ${name.value}<br> Email:${email.value}<br> Message: ${message.value}`;
  Email.send({
    SecureToken:"dcac3462-3094-43bb-8352-e3a32c5b76a4.",
    To: 'teslabest87@gmail.com',
    From: 'teslabest87@gmail.com',
    Subject: 'This is the subject',
    Body: bodyMessage,
  }).then((message) => {
    if (message == 'OK') {
      Swal.fire({
        title: 'Succes!',
        text: 'Message sent successfully!',
        icon: 'success',
      });
    }else {console.log('error')}
  });
}

function checkInputs() {
  const items = document.querySelectorAll('.item');

  for (const item of items) {
    if (item.value == '') {
      item.classList.add('error');
      item.parentElement.classList.add('error');
    }
    if (items[1].value != '') {
      checkEmail();
    }

    items[1].addEventListener('keyup', () => {
      checkEmail();
    });

    item.addEventListener('keyup', () => {
      if (item.value != '') {
        item.classList.remove('error');
        item.parentElement.classList.remove('error');
      } else {
        item.classList.add('error');
        item.parentElement.classList.add('error');
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector('.error_text.email');

  if (!email.value.match(emailRegex)) {
    email.classList.add('error');
    email.parentElement.classList.add('error');

    if (email.value != '') {
      errorTxtEmail.innerText = 'Enter avalid email address';
    }
    else {
      errorTxtEmail.innerText = 'Email can`t be blank';
    }
  } else {
    email.classList.remove('error');
    email.parentElement.classList.remove('error');
  }
}

function send(){
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();

  if (!name.classList.contains("error") && !email.classList.contains("error") && !message.classList.contains("error")){
    sendEmail();

    form.reset();
    return false;
  }
});
}
export default send;