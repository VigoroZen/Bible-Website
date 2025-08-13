// Create input field
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Fill Your Journal With Memories Of The Love Of God...';
input.id = 'userInput';
document.body.appendChild(input);

input.style.width = '500px';
input.style.padding = '10px';
input.style.fontSize = '16px';
input.style.border = '2px solid orange';
input.style.borderRadius = '5px';
input.style.marginRight = '10px';
input.style.outline = 'none';
input.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
input.style.marginTop='10px';


// Create button
const button = document.createElement('button');
button.textContent = 'Add To Your Journal';
document.body.appendChild(button);

button.style.marginTop='5px';
button.style.width='100px';
button.style.backgroundColor='orange';
button.style.borderRadius='30%';
button.style.padding='1%';
button.style.alignItem='center';
// Create output container
const output = document.createElement('div');
output.id = 'output';
output.style.marginTop = '20px';
output.style.padding = '10px';
output.style.border = '1px solid #918d87';
output.style.backgroundColor = '#918d87';
document.body.appendChild(output);

// Add functionalitybutton.addEventListener('click', () => {
button.addEventListener('click', () => {
  const text = input.value.trim();
  if (text !== '') {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.style.fontSize='20px';
    output.appendChild(paragraph);
    input.value = '';
  }
});

// Save journal entry to cookie
function saveJournal() {
  const entry = document.getElementById('journal').value;
  const expires = new Date(Date.now() + 7 * 864e5).toUTCString(); // 7 days
  document.cookie = 'journalEntry=' + encodeURIComponent(entry) + '; expires=' + expires + '; path=/';
  alert('Journal saved!');
}

// Load journal entry from cookie
function loadJournal() {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'journalEntry') {
      document.getElementById('journal').value = decodeURIComponent(value);
    }
  }
}

// Load on page load
window.onload = loadJournal;
button.onclick = saveJournal;