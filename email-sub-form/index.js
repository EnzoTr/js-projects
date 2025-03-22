const scriptURL = 'https://script.google.com/macros/s/AKfycbyF0XXoPue1hxH6EkcZZM-dEQbzvCxxhceygmpmHYJq30hx0hwD-UpiY3tVTN4jheHQ/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                Swal.fire({
                    title: "Success!",
                    text: "Your submission was sent successfully.",
                    icon: "success",
                    confirmButtonText: "OK"
                })
                console.log('Success!', response)
                form.reset(); 
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK"
                })
                console.error('Error!', error.message)
            })
    })