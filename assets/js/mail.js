const submit = document.getElementById('submit');
const msg = document.getElementById('msg');

const cust_name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("above send");
})
function sendEmail()
{
    console.log("hello");
    var cust_name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;  

    // console.log(cust_name +"----" + email + "-----" + "-------" + subject + "-------" + message);

    Email.send({
        SecureToken: "cbdd577c-081d-4a79-b1a6-4512b3b99019",
        To: 'programmerabs@gmail.com',
        From: "absprogrammertest@gmail.com",
        Subject: "Enquiry " + subject,
        Body: `<html><b>Customer Name :- </b>${cust_name}<br><b> Customer Email :- </b>${email}<br><b>Customer Feedback :- </b>${message}`
    }).then(
        // message =>{ alert(message)
        // sendResponse(email);}
        sendResponse(email)
    );
}

 function sendResponse(email) {
    Email.send({
        SecureToken: "cbdd577c-081d-4a79-b1a6-4512b3b99019",
        To: email,
        From: "absprogrammertest@gmail.com",
        Subject: "Thankyou for contacting us",
        Body: "Thankyou for contacting us we will be right back to you soon"
    }).then(
        // message => alert("Thankyou for contacting us")
        // document.getElementById('contact_form').reset()
       message =>{ msg.innerHTML="Thankyou for contacting us"
        // resetData()
        // document.forms['contact_form'].reset()
        document.getElementById('name').value = " "
        document.getElementById('email').value = " "
        document.getElementById('subject').value = " "
        document.getElementById('message').value = " "}
    );
}

function resetData()
{
    document.getElementById('name').value = " "
    document.getElementById('email').value = " "
    document.getElementById('subject').value = " "
    document.getElementById('message').value = " "
}