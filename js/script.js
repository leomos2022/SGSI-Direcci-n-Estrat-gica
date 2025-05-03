document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    // ... (código del theme toggle como antes) ...

    // --- Mobile Menu Toggle ---
    // ... (código del menú móvil como antes) ...

    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Prevent Login Form Submission (Optional Example) ---
    // Si quieres evitar que el formulario recargue la página al hacer clic en "Iniciar Sesión"
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Detiene el envío normal del formulario
            alert('Inicio de sesión no implementado en esta demo estática.');
            // Aquí podrías añadir lógica JS si quisieras hacer algo más,
            // como validar campos, pero no puedes hacer login real.
        });
    }

}); // Fin de DOMContentLoaded