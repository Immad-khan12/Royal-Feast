/* ============================================================
   ROYAL FEAST — Main JavaScript
   ============================================================ */

'use strict';

/* ── Loading Screen ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 2000);
});

/* ── Dark Mode ── */
const darkToggle = document.getElementById('dark-toggle');
const savedTheme = localStorage.getItem('rf-theme') || 'dark';
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
darkToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  if (current === 'light') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('rf-theme', 'dark');
    darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('rf-theme', 'light');
    darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

/* ── Navbar ── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('scroll-top').classList.toggle('visible', window.scrollY > 400);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

// Close mobile nav on link click
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

/* ── Active Nav Link ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(s => observerNav.observe(s));

/* ── Scroll To Top ── */
document.getElementById('scroll-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Scroll Reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Toast ── */
function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle toast-icon"></i><span>${msg}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

/* ── Cart System ── */
let cart = JSON.parse(localStorage.getItem('rf-cart') || '[]');

function saveCart() {
  localStorage.setItem('rf-cart', JSON.stringify(cart));
}

function getTotalItems() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getTotalPrice() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateBadge() {
  const badge = document.getElementById('cart-badge');
  const count = getTotalItems();
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartFooter = document.getElementById('cart-footer');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');

  if (cart.length === 0) {
    cartItems.innerHTML = '';
    cartEmpty.style.display = 'flex';
    cartFooter.style.display = 'none';
    return;
  }

  cartEmpty.style.display = 'none';
  cartFooter.style.display = 'block';

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-display">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        <button class="cart-item-remove" onclick="removeItem(${item.id})"><i class="fas fa-times"></i></button>
      </div>
    </div>
  `).join('');

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1;
  subtotalEl.innerHTML = `<span>Subtotal</span><span>$${subtotal.toFixed(2)}</span>`;
  totalEl.innerHTML = `<span>Total (incl. tax)</span><span>$${(subtotal + tax).toFixed(2)}</span>`;
}

function addToCart(id, name, price, img) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, img, qty: 1 });
  }
  saveCart();
  updateBadge();
  renderCart();
  showToast(`${name} added to cart`);
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  updateBadge();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateBadge();
  renderCart();
}

// Cart Open/Close
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('visible');
  document.body.style.overflow = '';
}

document.getElementById('cart-btn').addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

document.querySelector('.checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) return;
  showToast('Order placed! Thank you for choosing Royal Feast 🍽️');
  cart = [];
  saveCart();
  updateBadge();
  renderCart();
  closeCart();
});

// Init cart on load
updateBadge();
renderCart();

/* ── Menu Filter ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.filter;

    menuCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = 'cardFadeIn 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Inject card fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes cardFadeIn {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
`;
document.head.appendChild(style);

/* ── Reservation Form ── */
const form = document.getElementById('reservation-form');
const formSuccess = document.getElementById('form-success');

// Set min date to today
const dateInput = document.getElementById('res-date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}

function validateField(input, errorId, rule) {
  const errorEl = document.getElementById(errorId);
  const valid = rule(input.value.trim());
  input.classList.toggle('error', !valid);
  input.classList.toggle('success', valid);
  errorEl.classList.toggle('show', !valid);
  return valid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('res-name');
  const emailInput = document.getElementById('res-email');
  const dateInput = document.getElementById('res-date');
  const timeInput = document.getElementById('res-time');
  const msgInput = document.getElementById('res-message');

  const today = new Date().toISOString().split('T')[0];

  const v1 = validateField(nameInput, 'err-name', v => v.length >= 2);
  const v2 = validateField(emailInput, 'err-email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
  const v3 = validateField(dateInput, 'err-date', v => v && v >= today);
  const v4 = validateField(timeInput, 'err-time', v => v.length > 0);
  const v5 = validateField(msgInput, 'err-message', v => v.length >= 10);

  if (v1 && v2 && v3 && v4 && v5) {
    form.style.display = 'none';
    formSuccess.classList.add('show');
  }
});

// Live validation on blur
['res-name', 'res-email', 'res-date', 'res-time', 'res-message'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('blur', () => el.dispatchEvent(new Event('validate')));
});

/* ── Animated Counter ── */
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + suffix;
    if (current >= target) clearInterval(timer);
  }, 20);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-number').forEach(el => {
        animateCounter(el, parseInt(el.dataset.target), el.dataset.suffix || '');
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);
