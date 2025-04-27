javascript
// وظائف إمكانية الوصول
function adjustFontSize(change) {
    const current = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = `${current + change}px`;
    localStorage.setItem('fontSize', current + change);
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isHighContrast);
}

// تهيئة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    // استعادة إعدادات الخط
    const savedSize = localStorage.getItem('fontSize');
    if (savedSize) {
        document.body.style.fontSize = `${savedSize}px`;
    }

    // استعادة إعدادات التباين
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }

    // إضافة الأحداث للأزرار
    document.querySelectorAll('[data-font]').forEach(btn => {
        btn.addEventListener('click', () => {
            adjustFontSize(parseInt(btn.dataset.font));
        });
    });

    document.getElementById('contrast-btn').addEventListener('click', toggleContrast);
});

