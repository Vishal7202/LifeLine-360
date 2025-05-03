
  // FAQ Accordion Toggle
document.querySelectorAll('.toggle-faq').forEach(item => {
  item.addEventListener('click', () => {
    const faqContent = item.nextElementSibling;
    faqContent.classList.toggle('hidden');
    // Toggle the plus/minus icon
    if (faqContent.classList.contains('hidden')) {
      item.innerHTML = item.innerHTML.replace('–', '+');
    } else {
      item.innerHTML = item.innerHTML.replace('+', '–');
    }
  });
});

// Modal Pop-up for Help Topics
const helpCards = document.querySelectorAll('.bg-white');
helpCards.forEach(card => {
  card.addEventListener('click', () => {
    const topic = card.querySelector('h3').innerText;
    const description = card.querySelector('p').innerText;
    openHelpModal(topic, description);
  });
});

function openHelpModal(topic, description) {
  const modal = document.createElement('div');
  modal.classList.add('fixed', 'inset-0', 'bg-gray-900', 'bg-opacity-50', 'flex', 'items-center', 'justify-center');
  modal.innerHTML = `
    <div class="bg-white p-8 rounded-xl max-w-md mx-auto shadow-lg">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Help - ${topic}</h2>
      <p class="text-gray-600 mb-4">${description}</p>
      <button onclick="closeModal()" class="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">Close</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeModal() {
  const modal = document.querySelector('.fixed');
  if (modal) {
    modal.remove();
  }
}

// Smooth Scroll for Read More Buttons
document.querySelectorAll('.inline-block').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(button.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: 'smooth'
    });
  });
});

// Toggle the mobile menu for smaller screens
document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});
