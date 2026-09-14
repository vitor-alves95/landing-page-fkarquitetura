// Efeito de sombra e redimensionamento do header ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Lógica do Botão Call to Action
    const btnContato = document.getElementById('btn-contato');
    
    if(btnContato) {
        btnContato.addEventListener('click', () => {
            // Futuramente, isso pode direcionar para a seção de formulário
            // window.location.href = '#contato';
            alert('Ação registrada! Em breve conectaremos ao formulário de contato.');
        });
    }
    // Efeito para diminuir o tamanho e adicionar sombra ao header ao rolar a página
        document.addEventListener('DOMContentLoaded', () => {
            const header = document.getElementById('header');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        });
});