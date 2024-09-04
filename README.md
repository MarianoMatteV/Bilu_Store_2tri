# BiluStore

Neste trabalho recebemos a proposta de criar um mercado místico na área de técnico de informática, então criamos um mercado digital com o tema de alienígenas, para isso utilizamos as linguagens de programação HTML, CSS e JS.

Na página principal fizemos um design com tom esverdeado para remeter aos alienígenas. No header fizemos um página de Cadastro (Cabeça do alien) e a página do Carrinho. Como nome do site utilizamos Bilu Store, acompanhado de uma frase para deixar o título mais chamativo. No body fizemos a parte dos produtos, na qual utilizamos o display grid para ficarem duas div's de produtos em cada linha.

Os 8 produtos que criamos são:

Pistola Alienígena; Mini Aliens; Pedaços de Planetas; Gosma de Alien viva; Rifle de Precisão Alienígena; Dente de Monstro Alienígena; Porte de Arma Alienígena; Viagem para outra galáxia. Ao clicar no botão "Inspecionar produto" uma janela modal é aberta e aparecem a descrição do produto e a opção de adicionar o item ao carrinho.

Na página do carrinho a pessoa vê quais produtos escolheu, depois é só clicar no botão "Finalizar compra". Após clicar no botão, escolha a forma de pagamento (PIX ou cartão) e preencha o formulário e faça o que é pedido.

Também criamos uma página para os usuários se cadastrarem, utilizando CSS e HTML.

O aluno Mariano Matte Viegas fez a página inicial, fez os produtos, criou a descrição, para isso utilizou HTML, CSS e JS. Além de fazer grande parte do JS e ajudar em algumas outras coisas, como a estilização de algumas partes do site.

O aluno Artur Correa fez a página de cadastro, em conjunto com o Mariano fez o localStorage para deixar o carrinho funcional, fez a página de pagamento e ajudou na estilização de outras partes do código.

O aluno Lucas Dionísio fez a página do carrinho.

# Links

https://marianomattev.github.io/Mercado-m-stico/

Vídeo de apresentação do projeto: 

https://youtu.be/uNk8JLYlJKs


----------------------------------------------------------------------------------------


# PARTE 2 / Segundo trimestre - Bilu Store


1. Banco de dados:

- Certifique-se de ter instalado o MySQL Workbench em seu computador.

- Abra o MySQL e selecione o workbench, use a senha "root" para acessá-la.

- Copie o código do arquivo MySQL presente no arquivo do VScode, cole no workbench do MySQL e certifique-se de salvar para testar o código, utilizando "ctrl + enter" em todo ele, ou selecionando todo código e clicando no ícone do raio.

2. Node

- Certifique-se de possuir instalado na máquina o Git Bash e execute-o.

- Utilize os comandos em ordem: "cd projeto_biluStore"/"cd backend"/"cd src", para poder acessar a pasta do arquivo.

- Certifique-se de possuir o Node instalado no dispositivo.

- Utilize o comando "npm i" para baixar os arquivos JSON.

- Utilize o comando "npm start" para rodar o sistema do NODE.

3. Testando as API's

- Para testar as API, certifique-se de que esteja instalado no computador o thunder client (Caso não tenha instalado o thunder client, clique na opção extensões, no VScode, e pesquise por thunder client, então é só instalar).

- Abra o Thunder client no Visual code.

- Clique na opção New request.

- Selecione o método a ser utilizado, neste caso, o POST.

- Adicione a URL aonde se pede.

- Clique na opção "Body", abaixo de onde é inserido a URL, e teste de acordo com os exemplos mostrados abaixo.

- Após isso, clique na opção "Send" (certifique-se de que o npm esteja rodando. Caso não esteja, utilize o "npm start").



<!-- Cadastrar o usuário! -->

- É necessário utilizar o método POST

# URL: http://localhost:3001/usuario/cadastrar

# POST(/usuario/cadastrar)

- BODY:
{
    "cpf": "cpf do usuário",
    "nome": "nome do usuário",
    "email": "email do usuário",
    "senha": "senha do usuário"
}

Retorna as mensagens de sucesso ao funcionar e sem sucesso quando não funcionar.

# Essa API serve para criar um novo usuário no sistema.

<!-- Cadastrar produto -->

É necessário utilizar o método POST

# URL: http://localhost:3001/produto/cadastrar

# POST(/produto/cadastrar)

- BODY:
{
    "ID_produto":"ID do produto",
    "nome_produto":"Nome do produto",
    "preco_produto":"Preço do produto",
    "quantidade_produto":"Quantidade do produto",
    "descricao_produto":"Descrição do produto"
}

Se funcionar, o sistema retornará uma mensagem de "Sucesso", caso dê erro, uma mensagem de "Sem Sucesso" irá aparecer.

# Essa API serve para adicionar um produto no sistema.

<!-- Login do usuário -->

É necessário utilizar o método POST

# URL: http://localhost:3001/usuario/login

# POST(/usuario/login)

- BODY:
{
    "email":"Email do usuário",
    "senha":"Senha do usuário"
}

Se funcionar, o sistema retornará uma mensagem de "Sucesso", caso dê erro, uma mensagem de "Sem Sucesso" irá aparecer.

# Essa API serve para autenticar um usuário no sistema.