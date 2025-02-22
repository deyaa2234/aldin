// إضافة مستمع حدث للنموذج عند الإرسال
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault(); // منع إعادة تحميل الصفحة

  // الحصول على قيم الحقول
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  
  // يمكن هنا تنفيذ عملية إرسال البيانات إلى الخادم باستخدام fetch أو AJAX
  // على سبيل المثال: إرسال البيانات عبر fetch (غير مفعل في هذا المثال التجريبي)

  // عرض رسالة تأكيد للمستخدم
  const bookingMessage = document.getElementById('bookingMessage');
  bookingMessage.textContent = `شكراً يا ${name}، تم حجز موعدك في ${date}. سنتواصل معك عبر البريد الإلكتروني: ${email}.`;
});
