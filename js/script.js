document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const THEME_KEY = 'sgsi-theme';

    // Función para aplicar el tema
    function setTheme(theme) {
        body.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
        // Actualizar iconos
        if (theme === 'dark') {
            document.querySelector('.icon-light').style.display = 'none';
            document.querySelector('.icon-dark').style.display = 'inline-block';
        } else {
            document.querySelector('.icon-light').style.display = 'inline-block';
            document.querySelector('.icon-dark').style.display = 'none';
        }
    }

    // Restaurar preferencia guardada o usar preferencia del sistema
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    // Toggle al hacer clic
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // --- Mobile Menu Toggle ---
    // ... (código del menú móvil como antes) ...

    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Prevent Login Form Submission (Optional Example) ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Inicio de sesión no implementado en esta demo estática.');
        });
    }

}); // Fin de DOMContentLoaded