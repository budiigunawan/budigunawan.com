import axios from 'axios';

const thisForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');
const headers_ = {
  Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  'Content-Type': 'application/json',
};

thisForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  submitButton.disabled = true;
  axios
    .post(
      `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${
        import.meta.env.VITE_TABLE_ID
      }`,
      {
        records: [
          {
            fields: {
              Name: document.getElementById('name').value,
              Email: document.getElementById('email').value,
              Messages: document.getElementById('messages').value,
            },
          },
        ],
      },
      {
        headers: headers_,
      }
    )
    .then(() => {
      alert('Thank you for your message!');
      thisForm.reset();
      submitButton.disabled = false;
    })
    .catch((err) => {
      console.error(err, 'error');
      alert('Error');
    });
});
