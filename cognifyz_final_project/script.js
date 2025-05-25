// script.js

// Theme toggle
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Render posts from local array (no fetch)
const posts = [
  {
    title: "5 Front-End Best Practices",
    body: "Learn how to write clean, maintainable, and responsive front-end code using HTML, CSS, and JavaScript."
  },
  {
    title: "Why Responsive Design Matters",
    body: "Responsive design improves usability across all devices. Here's how to implement it effectively."
  },
  {
    title: "Dark Mode in Web Design",
    body: "Implementing a dark theme not only looks good but also enhances accessibility for users."
  },
  {
    title: "Form Validation Tips",
    body: "Ensure data integrity and user guidance by using clear client-side validation techniques."
  },
  {
    title: "Integrating Public APIs",
    body: "Fetching dynamic content from APIs can bring your website to life. Here's a quick guide."
  },
  {
    title: "Mastering Bootstrap 5",
    body: "Speed up your UI development with Bootstrap's responsive and reusable components."
  }
];

const container = document.getElementById('postContainer');
posts.forEach(post => {
  const postHTML = `
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', postHTML);
});

// Form validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you for your message!');
  contactForm.reset();
});
