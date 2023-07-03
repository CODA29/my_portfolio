var form = document.getElementById("myForm");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,  
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    if (response.ok) {
        alert("Thanks, I will get back to you soon! ✨");
        status.innerHTML = '<i class="fa-regular fa-face-smile"></i>';
        form.reset()
        
    } else {
        response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
            //status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
            status.innerHTML = "Oops! There was a problem submitting your form 😞"
        }
        })
    }
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form 😞"
    });
}
form.addEventListener("submit", handleSubmit)
