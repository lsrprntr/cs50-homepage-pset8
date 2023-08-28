// When DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    // The validation checker
    // From Bootstrap documentation on validation example
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated')
            }, false)
        })
    })();

    // Submit form if successful
    document.addEventListener('submit', function() {
        event.preventDefault();
        var name = document.querySelector('#validationCustom01').value;
        var email = document.querySelector('#validationCustom02').value;
        var comment = document.querySelector('#validationCustom03').value;
        var text = `Name: ${name}<br>
        Email: ${email}<br>
        Comment: ${comment}<br><br>
        This site is for educational purposes. If the form validated successfully the above text was grabbed and shown on this modal. No data is saved or uploaded.`;
        document.querySelector('#modal-body').innerHTML = text;
        const mmodal = (document.getElementById('tmodal'));
        const ttmodal = new bootstrap.Modal(mmodal);
        ttmodal.show();

    });
});