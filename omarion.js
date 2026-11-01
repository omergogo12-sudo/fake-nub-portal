document.addEventListener('DOMContentLoaded', () => {
    
    // التفاعل عند النقر على كروت الخدمات
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const label = card.querySelector('.service-label')?.textContent.trim();
            if (label) {
                console.log(`تم النقر على الخدمة: ${label}`);
            }
        });
    });

    // أزرار التحكم السفلي بالبانر
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('هل ترغب في تسجيل الخروج؟')) {
                alert('69.');
            }
        });
    }

    const keyBtn = document.getElementById('keyBtn');
    if (keyBtn) {
        keyBtn.addEventListener('click', () => {
            alert('69');
        });
    }

    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            alert('69.');
        });
    }

});
