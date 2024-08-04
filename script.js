document.getElementById('readmoreBtn').addEventListener('click', function() {
    var readMoreContent = document.querySelector('#readmore');
    if (readMoreContent.style.display === 'none' || readMoreContent.style.display === '') {
        readMoreContent.style.display = 'inline';
        this.textContent = 'Read Less';
    } else {
        readMoreContent.style.display = 'none';
        this.textContent = 'Read More';
    }
});

function sendMail(){
    var persons = {
    name :document.getElementById('name').value,
    email :document.getElementById('email').value,
    message :document.getElementById('message').value,
    };

const serviceID ="service_vzp8efr";
const templateID ="template_9at164w";

emailjs.send(serviceID,templateID,persons).then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully");
    }
)
.catch((err) => console.log('Failed to send email', err));
}