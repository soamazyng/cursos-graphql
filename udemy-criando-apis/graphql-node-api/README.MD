# EXT VS.Code :heart_eyes:
* vscode-icons
* advanced new file

### Express
> serve para receber requisicoes http precisamos do express

# Pacotes npm para validação de tipos
> como estamos trabalhando com o typescript + express precisamos instalar o validador de tipos npm i -D @types/express
> Também precisamos instalar os tipos para o node npm i -D @types/node

# Instalação do GraphQL
> npm i -S -E express-graphql -- esse é um middleware que fará com que o express trabalhe com o graphql
> npm i -S -E graphql -- esse é a implementação js do graphql
> npm i -S -E graphql-tools  -- utilitário para criar as queries em graphql

### Pacotes de tipos para os pacotes instalados pois estamos utilizando o typescript
> npm i -D -E @types/express-graphql
> npm i -D -E @types/graphql@0.11.5

### Sequelize
> É um ORM baseado em promises para **Node.Js**
> docs.sequelizejs.com
> instalação: npm i -S -E sequelize
> npm i -D -E @types/sequelize@4.0.76  **instalacao de tipos pois estamos utilizar o typescript**

### Mysql
> Instalação do mysql no projeto **npm i -S -E mysql2**

### Pacote do npm para criptografar senha
> npm i -S -E bcryptjs
> npm i -S -D -E @types/bcryptjs **esse é o pacote de tipos**

### Pacote do npm para conectar o sequelize ao mysql **cli que inicializa no padrão dele**
> npm i -g sequelize-cli
**comandos para rodar o sequelize**
> sequelize init:config --config src/config/config.json **gera um arquivo de configuração**