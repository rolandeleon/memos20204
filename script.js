    <!-- Aquí puedes agregar tus scripts JavaScript si los tienes -->
    <script>
        // JavaScript para incrementar el número de página
        const paginaNumero = document.getElementById('pagina-numero');
        let contadorPagina = 1;

        function actualizarPagina() {
            contadorPagina++;
            paginaNumero.textContent = contadorPagina;
        }

        // Llama a esta función cada vez que cambies de página
        // Por ejemplo, después de cargar nuevo contenido o al hacer clic en un enlace
        // Ejemplo: actualizarPagina();
    </script>
