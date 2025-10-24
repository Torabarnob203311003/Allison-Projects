// Basic validation + simulated async submit for demo forms

function showStatus(el, message, ok = true) {
  el.textContent = message;
  el.classList.remove('success','error');
  el.classList.add(ok ? 'success' : 'error');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Demo 1: Basic submit handler */
const basicForm = document.getElementById('contact-basic');
if (basicForm) {
  basicForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const status = basicForm.querySelector('.status');
    const formData = new FormData(basicForm);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    if (!name || !email || !message) {
      showStatus(status, 'Please fill all fields.', false);
      return;
    }
    if (!validateEmail(email)) {
      showStatus(status, 'Please enter a valid email.', false);
      return;
    }

    // Simulate send
    showStatus(status, 'Sending...');
    setTimeout(() => {
      showStatus(status, 'Message sent. Thank you!');
      basicForm.reset();
    }, 800);
  });
}

/* Demo 2: Async (simulated) submit with extra checks */
const asyncForm = document.getElementById('contact-async');
if (asyncForm) {
  asyncForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const status = asyncForm.querySelector('.status');
    const formData = new FormData(asyncForm);
    const name = (formData.get('name') || '').trim();
    const email = (formData.get('email') || '').trim();
    const message = (formData.get('message') || '').trim();

    if (!name || !email || !message) {
      showStatus(status, 'Name, email and message are required.', false);
      return;
    }
    if (!validateEmail(email)) {
      showStatus(status, 'Invalid email address.', false);
      return;
    }

    showStatus(status, 'Sending...');
    try {
      // Replace this simulated request with real fetch() to your endpoint.
      await new Promise(resolve => setTimeout(resolve, 900));
      showStatus(status, 'Sent successfully (simulated).', true);
      asyncForm.reset();
    } catch (err) {
      showStatus(status, 'Failed to send. Try again later.', false);
      console.error(err);
    }
  });
}