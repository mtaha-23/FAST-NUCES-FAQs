document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.getElementById('faq-container');
    const themeToggleButton = document.getElementById('theme-toggle');
    const searchBar = document.getElementById('search-bar');
    const toTopBtn = document.getElementById('to-top-btn');
    const body = document.body;

    // Load and display FAQs
    fetch('faq.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(faq => {
                const faqItem = document.createElement('div');
                faqItem.classList.add('faq-item');
                // Store original text on the element for easy searching
                faqItem.dataset.question = faq.question.toLowerCase();
                faqItem.dataset.answer = faq.answer.toLowerCase();

                const answerText = faq.answer
                    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')
                    .replace(/\n/g, '<br>');

                faqItem.innerHTML = `
                    <div class="faq-question">${faq.question}</div>
                    <div class="faq-answer">${answerText}</div>
                `;

                faqContainer.appendChild(faqItem);
                
                const question = faqItem.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    const wasActive = faqItem.classList.contains('active');

                    // Close all other FAQ items
                    faqContainer.querySelectorAll('.faq-item').forEach(item => {
                        item.classList.remove('active');
                    });

                    // If the item wasn't already active, open it
                    if (!wasActive) {
                        faqItem.classList.add('active');
                    }
                });
            });

        })
        .catch(error => console.error('Error fetching FAQs:', error));
    
    // Search functionality
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const allFaqItems = faqContainer.querySelectorAll('.faq-item');

        allFaqItems.forEach(item => {
            const questionText = item.dataset.question;
            const answerText = item.dataset.answer;
            const isVisible = questionText.includes(searchTerm) || answerText.includes(searchTerm);
            item.style.display = isVisible ? 'block' : 'none';
        });
    });
    
    // Theme switcher
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Optional: Save theme preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add('light-mode'); // Default theme
    }

    // "Go to top" button logic
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            toTopBtn.classList.add('visible');
        } else {
            toTopBtn.classList.remove('visible');
        }
    });

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 