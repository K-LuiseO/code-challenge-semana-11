document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const data = {
            name: form.nombre.value,
            lastname: form.apellido.value,
            birthdate: form.fechaNacimiento.value
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            alert('Datos enviados con éxito.');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar los datos.');
        });
    });
});