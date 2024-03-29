function verificar() {
    // Obter a data atual
    let data = new Date();
    // Extrair o ano atual
    let ano = data.getFullYear();
    // Obter o elemento de entrada de texto para o ano de nascimento
    let fano = document.getElementById('txtano');
    // Obter o elemento de resultado
    let res = document.getElementById('res');

    // Verificar se o campo do ano de nascimento está vazio ou contém um valor inválido
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        // Exibir uma mensagem de erro se o ano de nascimento for inválido
        window.alert('[ERRO] Digite um ano válido!');
    } else {
        // Obter os elementos de entrada de radio para o sexo
        let fsex = document.getElementsByName('radsex');
        // Calcular a idade subtraindo o ano de nascimento do ano atual
        let idade = ano - Number(fano.value);
        // Definir uma variável para o gênero
        let genero = '';
        // Criar um elemento de imagem
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        // Verificar o gênero selecionado
        if (fsex[0].checked) {
            // Se o gênero for masculino, definir a variável genero e atribuir uma imagem de acordo com a faixa etária
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/1-H.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/2-H.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/3-H.jpg');
            } else {
                img.setAttribute('src', 'img/4-H.jpg');
            }
        } else if (fsex[1].checked) {
            // Se o gênero for feminino, definir a variável genero e atribuir uma imagem de acordo com a faixa etária
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/1-M.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/2-M.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/3-M.jpg');
            } else {
                img.setAttribute('src', 'img/4-M.jpg');
            }
        }

        // Centralizar o texto do resultado
        res.style.textAlign = 'center';
        // Exibir a mensagem com o gênero e idade
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        // Adicionar a imagem ao resultado
        res.appendChild(img);
    }
}
