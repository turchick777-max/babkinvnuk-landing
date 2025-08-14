(function() {
	'use strict';

	// Mobile navigation toggle
	const navToggle = document.querySelector('.nav-toggle');
	const navList = document.getElementById('primary-nav');
	if (navToggle && navList) {
		navToggle.addEventListener('click', () => {
			const expanded = navToggle.getAttribute('aria-expanded') === 'true';
			navToggle.setAttribute('aria-expanded', String(!expanded));
			navList.classList.toggle('open');
		});
	}

	// Update year in footer
	const yearEl = document.getElementById('year');
	if (yearEl) {
		yearEl.textContent = String(new Date().getFullYear());
	}

	// Simple form feedback (no real submit)
	const form = document.querySelector('.signup');
	if (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const input = form.querySelector('input[type="email"]');
			const msg = form.querySelector('.form-msg');
			if (!input || !msg) return;

			const value = String(input.value || '').trim();
			const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
			msg.textContent = ok ? 'Спасибо! Мы скоро свяжемся.' : 'Введите корректный email.';
			msg.style.color = ok ? 'var(--primary)' : 'crimson';
			if (ok) {
				input.value = '';
			}
		});
	}
})();
