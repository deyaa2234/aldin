// عند تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const feedbackDiv = document.getElementById('feedback');

  // عند إرسال النموذج
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على القيم المدخلة
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const messageValue = document.getElementById('message').value.trim();

    // التحقق من صحة البيانات (كمثال بسيط)
    if (nameValue === '' || emailValue === '' || messageValue === '') {
      feedbackDiv.style.color = 'red';
      feedbackDiv.textContent = 'يرجى ملء جميع الحقول المطلوبة.';
      return;
    }

    // في الواقع، يمكن إرسال البيانات إلى الخادم باستخدام fetch أو AJAX
    // لكن في هذا المثال، سنكتفي بعرض رسالة نجاح
    feedbackDiv.style.color = 'green';
    feedbackDiv.textContent = `شكرًا لك يا ${nameValue}! تم إرسال رسالتك بنجاح.`;

    // إعادة تعيين النموذج
    contactForm.reset();
  });
});
