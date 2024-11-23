async function validateUser(event) {
    event.preventDefault();
    const form = document.getElementById('validateForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('message').innerText = result.message;
}
