## PORT-BR

# Sobre

O Projeto foi construído com [Create React App](https://github.com/facebook/create-react-app).

# Inicialização

Para iniciar o projeto é necessário clonar o repositório e executá-lo localmente.
Na pasta do projeto, execute o comando `npm start` para iniciar o projeto. O comando foi configurado para não abrir um navegador automaticamente, então, é necessário acessar o caminho `http://localhost:3000` no navegador de sua preferência para abrir o projeto.

# Utilização

O projeto se inicia com um formulário simulando um cadastro simples. Há validações para que um cadastro não seja confirmado sem que os dados necessários sejam preenchidos. Confirmando o cadastro é possível fazer um login e visualizar os dados inseridos, assim como deletá-los do armazenamento local do navegador (Local Storage).

# Considerações

- Foi criado um hook para acesso ao LocalStorage, porém, se utilizado na página inical para permitir um login mais rápido, ocorre um erro na execução da aplicação. Não sendo utilizado, não é possível um login dinâmico porém e os dados devem ser preenchidos novamente. O problema seria resolvido mais facilmente caso utilizasse Angular para criação do projeto, ferramenta com a qual tenho maior familiaridade, porém, me desafiei a utilizar o React que tenho estudado.

- Foi utilizado estritamente o esquema de cores solicitado. Há certa dificuldade de visualização de um dado de formulário preenchido e não focado. Nesse caso eu alteraria levemente o esquema de cores para melhorar a usabilidade.

## ENG
# About

The project was built with [Create React App](https://github.com/facebook/create-react-app).

# Initialization

To initialize the project it's necessary to clone the project and execute it locally.
In the project filder, execute the command `npm start` to initialize the project. The command was configured to not open a browser, so, it's required to open `http://localhost:3000` in your preferred browser.

# How to use

The initial screen has a simple registry simulation form. There are some validations so a registry cannot be confirmed until the required data are filled in. Confirming the registration it is possible to login and visualize the inserted data and delete them from the browser Local Storage if desired.

# Considerations

- A personalized hook was created to access the Local Storage, but, if used in the initial page to permit a faster login, the application returns an error. If it's not used, the dynamic login is not possible, being necessary to fill out the form again. The issue could be easily resolved if the project was build using Angular, which I'm used to, but I challenged myself to use React that I've been studying lately.

- The required color schema was stricted followed. There is certain difficulty to visualize a filled but not focused form field. In this case, I would lightly change the color schema to improve usability.