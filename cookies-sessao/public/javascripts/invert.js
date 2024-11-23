function invertText() {
    const text = document.getElementById('text').value;
    const invertedText = text.split('').reverse().join('');
    document.getElementById('result').innerText = `Texto invertido: ${invertedText}`;
}
