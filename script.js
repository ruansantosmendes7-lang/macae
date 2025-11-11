/* Espera o HTML carregar completamente antes de rodar o script.
   'DOMContentLoaded' é um evento que avisa quando a página 
   está pronta.
*/
document.addEventListener('DOMContentLoaded', function() {

    // 1. Encontrar os elementos que vamos usar no nosso código
    // O 'const' cria uma variável que não vai mudar.
    
    // Pega o campo de busca pelo seu 'id' único: "buscaRegra"
    const campoBusca = document.getElementById('buscaRegra');
    
    // Pega TODOS os 'li' (itens da lista) que estão dentro de '.sidebar ul'
    const itensMenu = document.querySelectorAll('.sidebar ul li');

    // 2. Adicionar um "ouvinte" ao campo de busca
    // 'addEventListener' fica a "ouvir" por uma ação específica.
    // A ação é "keyup", que acontece sempre que o utilizador *solta* uma tecla.
    campoBusca.addEventListener('keyup', function() {
        
        // 3. O que fazer quando o utilizador digita:
        
        // Pega o valor atual do campo de busca (o que foi digitado)
        // e converte tudo para letras minúsculas para facilitar a comparação.
        const termoBuscado = campoBusca.value.toLowerCase();

        // 4. Passa por cada item do menu (um por um)
        // 'forEach' faz um "loop" por cada 'item' na nossa lista 'itensMenu'
        itensMenu.forEach(function(item) {
            
            // Pega o texto visível de cada item do menu
            // e também converte para minúsculas.
            const textoItem = item.textContent.toLowerCase();

            // 5. Compara o texto do item com o termo buscado
            // 'includes()' verifica se o 'textoItem' *contém* o 'termoBuscado'
            if (textoItem.includes(termoBuscado)) {
                
                // 6. Se INCLUIR (for verdadeiro):
                // Mostra o item. (Definir 'display' como vazio reverte 
                // para o padrão, que é 'block' ou 'list-item')
                item.style.display = '';
                
            } else {
                
                // 7. Se NÃO INCLUIR (for falso):
                // Esconde o item do menu.
                item.style.display = 'none';
            }
        });
    });
});