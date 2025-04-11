# Dashboard em React  - Alygon_Front

Projeto elaborado para estudos das tecnologias de front-end e implementação do MVP da pós-graduação **Desenvolvimento Full-Stack**

O projeto consiste no desenvolvimento de um dashboard com três páginas em React. Uma página principal de Menu com três funcionalidades disponíveis: 

1) Dashboard, com figuras exemplificando a apresentação de dados e utilizando componentes reaproveitáveis;

2) Lista de Clientes - Tela com uma lista de clientes que é buscada através do acesso de uma API de clientes.

3) Serviços - Tela que mostra a cotação do dólar dada uma determinada data. Essa funcionalidade faz acesso a API externa do Banco Central disponível em (https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='04-09-2025'&$top=100&$format=json), acesso em 09/04/2025.

O projeto foi prototipado no figma (https://www.figma.com/proto/zb71CczlwwlHX4jgFqzoWG/ALYGON_FRONT?node-id=0-1&t=MmK1fx4FfhbH1AFQ-1).

## Como executar o front

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. Usamos a versão 18.12.1 do node(npm v8.19.2). Versões anteriores podem ser incompatíveis com algumas bibliotecas, principalmente com plugins trazidos do Figma.

O código está disponível no repositório (https://github.com/alygon/full_stack_front_end_avancado). Após cloná-lo, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo:

a) Para instalação das dependências:

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Nota: a dependência "parcel" faz parte do plugin "anima" do Figma, utilizado para trazer as figuras e alguns estilos do projeto de design.

b) Para executar a interface basta executar o comando: 

```
$ npm run dev
```

Abra o [http://localhost:1234](http://localhost:1234) no navegador.


## Executando através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile no terminal. Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t alygon_frontend .
```

Uma vez criada a imagem, para executar o container basta rodar o seguinte comando **como administrador** :

```
$ docker run -p 3001:3001 alygon_frontend
```

Uma vez executando, para acessar a API, basta abrir o [http://localhost:3001](http://localhost:3001) no navegador.