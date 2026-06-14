function initPaymentPage() {
  const form = document.getElementById('payment-form');
  if (!form) {
    console.log('Payment form not found');
    return;
  }

  console.log('Payment page initialized');
  console.log('BOOKS available:', window.BOOKS ? window.BOOKS.length : 'No');
  updatePaymentMethodTexts();

  const methodBtns = document.querySelectorAll('.pay-method');
  const cardInputs = form.querySelectorAll('.card-only');
  const submitBtn = form.querySelector('button[type="submit"]');
  
  methodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      methodBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const method = btn.dataset.method;
      
      if (method === 'cash') {
        cardInputs.forEach(input => {
          input.style.display = 'none';
          input.required = false;
        });
        if (submitBtn) {
          const lang = getLang();
          submitBtn.textContent = lang === 'ky' ? 'Төлөм ыкмасын тандоо' : 'Выбрать способ оплаты';
        }
      } else {
        cardInputs.forEach(input => {
          input.style.display = '';
          input.required = true;
        });
        if (submitBtn) {
          const lang = getLang();
          submitBtn.textContent = lang === 'ky' ? 'Төлөө' : 'Оплатить';
        }
      }
    });
  });

  const cardNumberInput = document.getElementById('card-number');
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', function(e) {
      let value = this.value.replace(/\s/g, '').replace(/\D/g, '');
      if (value.length > 16) value = value.slice(0, 16);
      let formatted = '';
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) formatted += ' ';
        formatted += value[i];
      }
      this.value = formatted;
    });
  }

  const expiryInput = document.getElementById('card-expiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', function(e) {
      let value = this.value.replace(/\D/g, '');
      if (value.length >= 2) {
        let month = parseInt(value.slice(0, 2));
        if (month > 12) month = 12;
        let formatted = month.toString().padStart(2, '0');
        if (value.length >= 3) {
          formatted += '/' + value.slice(2, 4);
        }
        this.value = formatted;
      } else {
        this.value = value;
      }
    });
  }

  const cvvInput = document.getElementById('card-cvv');
  if (cvvInput) {
    cvvInput.addEventListener('input', function(e) {
      this.value = this.value.replace(/\D/g, '').slice(0, 4);
    });
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Form submitted');
    processPayment();
    return false;
  });
    if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Submit button clicked');
      processPayment();
      return false;
    });
  }
}

function updatePaymentMethodTexts() {
  const lang = getLang();
  const texts = {
    ky: {
      card: 'Банк картасы',
      cash: 'Накталай',
      mbank: 'MBank'
    },
    ru: {
      card: 'Банковская карта',
      cash: 'Наличными',
      mbank: 'MBank'
    }
  };
  
  const btns = document.querySelectorAll('.pay-method');
  btns.forEach(btn => {
    const method = btn.dataset.method;
    if (method === 'card') btn.textContent = texts[lang].card;
    if (method === 'cash') btn.textContent = texts[lang].cash;
    if (method === 'mbank') btn.textContent = texts[lang].mbank;
  });
  
  const submitBtn = document.querySelector('#payment-form button[type="submit"]');
  if (submitBtn) {
    submitBtn.textContent = lang === 'ky' ? 'Төлөө' : 'Оплатить';
  }
}

function processPayment() {
  console.log('processPayment called');
  
  let cart = {};
  try {
    const cartData = localStorage.getItem('biypara_cart_v1');
    cart = cartData ? JSON.parse(cartData) : {};
    console.log('Cart:', cart);
  } catch(e) {
    console.error('Error reading cart:', e);
  }
  
  const cartItemsCount = Object.keys(cart).length;
  if (cartItemsCount === 0) {
    const msg = getLang() === 'ky' ? 'Себет бош' : 'Корзина пуста';
    showToast(msg);
    console.log('Cart is empty');
    return;
  }

  let user = null;
  try {
    const session = localStorage.getItem('biypara_session_v1');
    if (session) {
      const users = JSON.parse(localStorage.getItem('biypara_users_v1') || '{}');
      user = users[session] || null;
    }
  } catch(e) {
    console.error('Error getting user:', e);
  }

  if (!user) {
    const msg = getLang() === 'ky' ? 'Заказ берүү үчүн кириңиз' : 'Войдите, чтобы оформить заказ';
    showToast(msg);
    setTimeout(() => {
      window.location.href = 'auth.html?redirect=checkout';
    }, 1500);
    return;
  }

  const method = document.querySelector('.pay-method.active')?.dataset.method || 'card';
  console.log('Payment method:', method);
  
  if (method === 'cash') {
    const lang = getLang();
    const cashMsg = lang === 'ky' 
      ? 'Сиз накталай төлөмдү тандадыңыз. Заказ жеткирилгенден кийин төлөйсүз.'
      : 'Вы выбрали оплату наличными. Вы оплатите заказ при получении.';
    showToast(cashMsg, 2000);
    
    setTimeout(() => {
      createOrder(method);
    }, 1500);
    return;
  }
  
  const form = document.getElementById('payment-form');
  const cardNumber = document.getElementById('card-number')?.value.replace(/\s/g, '') || '';
  const expiry = document.getElementById('card-expiry')?.value || '';
  const cvv = document.getElementById('card-cvv')?.value || '';
  const holder = document.getElementById('card-holder')?.value || '';
  
  console.log('Card validation:', { cardNumber, expiry, cvv, holder });
  
  if (!cardNumber || cardNumber.length < 16) {
    showToast(getLang() === 'ky' ? 'Картанын номери туура эмес' : 'Неверный номер карты');
    return;
  }
  if (!expiry || !expiry.match(/^\d{2}\/\d{2}$/)) {
    showToast(getLang() === 'ky' ? 'Жарактуулук мөөнөтү туура эмес' : 'Неверный срок действия');
    return;
  }
  const [month, year] = expiry.split('/');
  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;
  const expYear = parseInt(year);
  const expMonth = parseInt(month);
  if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
    showToast(getLang() === 'ky' ? 'Картанын жарактуулук мөөнөтү өтүп кеткен' : 'Срок действия карты истек');
    return;
  }
  if (!cvv || cvv.length < 3) {
    showToast(getLang() === 'ky' ? 'CVV коду туура эмес' : 'Неверный CVV код');
    return;
  }
  if (!holder || holder.trim().length < 3) {
    showToast(getLang() === 'ky' ? 'Карта ээсинин атын жазыңыз' : 'Введите имя владельца карты');
    return;
  }

  showToast(getLang() === 'ky' ? 'Төлөм иштетилүүдө...' : 'Обработка платежа...', 1000);
  
  setTimeout(() => {
    createOrder(method);
  }, 1000);
}

function createOrder(paymentMethod) {
  console.log('createOrder called with method:', paymentMethod);
  
  let cart = {};
  let books = window.BOOKS || [];
  
  try {
    const cartData = localStorage.getItem('biypara_cart_v1');
    cart = cartData ? JSON.parse(cartData) : {};
    console.log('Cart for order:', cart);
    console.log('Books available:', books.length);
  } catch(e) {
    console.error('Error reading data:', e);
  }
  
  function getBookTitle(book) {
    if (!book) return 'Unknown';
    if (typeof book.title === 'string') return book.title;
    const lang = getLang();
    return book.title[lang] || book.title.ky || book.title.ru || 'Unknown';
  }
  
  function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price) + ' сом';
  }
  
  const items = [];
  for (const [id, qty] of Object.entries(cart)) {
    const book = books.find(b => b && b.id === id);
    if (book) {
      items.push({
        id: id,
        title: getBookTitle(book),
        qty: qty,
        price: book.price,
        priceFormatted: formatPrice(book.price)
      });
    } else {
      // Если книги нема, ид как название
      items.push({
        id: id,
        title: id,
        qty: qty,
        price: 0,
        priceFormatted: '0 сом'
      });
    }
  }

  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  const delivery = total >= 1500 ? 0 : 150;
  const grandTotal = total + delivery;
  const lang = getLang();

  const order = {
    id: 'BP-' + Date.now().toString(36).toUpperCase(),
    date: new Date().toISOString(),
    dateFormatted: new Date().toLocaleString(lang === 'ky' ? 'ky-KG' : 'ru-RU'),
    payment: {
      method: paymentMethod,
      methodName: paymentMethod === 'card' ? (lang === 'ky' ? 'Банк картасы' : 'Банковская карта') :
                   paymentMethod === 'cash' ? (lang === 'ky' ? 'Накталай' : 'Наличными') : 'MBank',
      status: paymentMethod === 'cash' ? 'pending' : 'paid',
      statusName: paymentMethod === 'cash' ? (lang === 'ky' ? 'Күтүүдө' : 'Ожидает оплаты') : (lang === 'ky' ? 'Төлөндү' : 'Оплачен'),
      date: new Date().toISOString()
    },
    items: items,
    subtotal: total,
    subtotalFormatted: formatPrice(total),
    delivery: delivery,
    deliveryFormatted: delivery === 0 ? (lang === 'ky' ? 'Бекер' : 'Бесплатно') : formatPrice(delivery),
    grandTotal: grandTotal,
    grandTotalFormatted: formatPrice(grandTotal)
  };

  console.log('Order created:', order);

  try {
    const users = JSON.parse(localStorage.getItem('biypara_users_v1') || '{}');
    const session = localStorage.getItem('biypara_session_v1');
    
    if (session && users[session]) {
      users[session].orders = users[session].orders || [];
      users[session].orders.unshift(order);
      localStorage.setItem('biypara_users_v1', JSON.stringify(users));
      console.log('Order saved to user profile');
      console.log('Total orders now:', users[session].orders.length);
    } else {
      console.error('User session not found');
    }
  } catch(e) {
    console.error('Error saving order:', e);
  }

  //чистота после опалты в корзине
  localStorage.setItem('biypara_cart_v1', JSON.stringify({}));
  console.log('Cart cleared');
  
  if (window.updateCartBadge) {
    window.updateCartBadge();
  }
  
  let successMsg = '';
  if (paymentMethod === 'cash') {
    successMsg = lang === 'ky' 
      ? 'Заказ ийгиликтүү кабыл алынды! Жеткирүү күтүңүз.'
      : 'Заказ успешно принят! Ожидайте доставку.';
  } else {
    successMsg = lang === 'ky' ? 'Төлөм ийгиликтүү өттү!' : 'Оплата прошла успешно!';
  }
  showToast(successMsg);
  
  setTimeout(() => {
    window.location.href = 'account.html';
  }, 2000);
}

function showToast(msg, duration = 2200) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._tm);
  el._tm = setTimeout(() => el.classList.remove('show'), duration);
}

function getLang() {
  return localStorage.getItem('biypara_lang') || 'ky';
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing payment page');
  initPaymentPage();
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPaymentPage);
} else {
  initPaymentPage();
}