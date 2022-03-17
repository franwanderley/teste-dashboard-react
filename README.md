# Projeto de teste
### Francisco Wanderley
Este é apenas um projeto de teste que se aproxima do ambiente real de frontend utilizado atualmente.

###Tecnologias usados
* React
* reactstrap
* styled components
* contextApi
* json-server

### 1. Ambiente de desenvolvimento

- [x] Configurar projeto para rodar com `typescript`
- [x] Atualizar dependências que não prejudiquem o funcionamento do projeto
- [x] Configurar, iniciar e utilizar o projeto com `git flow` (conceitos básicos)
- [ ] Reorganizar estrutura de pastas do projeto, apenas se achar necesário
- [x] Configuração padronização de código `eslint`

---
### 2. Estilização
Fique à vontade para utilizar a biblioteca de estilização favorita (damos preferência para `styled-components`)
- [x] Reproduzir um componente bootstrap SASS/SCSS do Tema por biblioteca de estilização javascript de sua escolha

### 3. Criar hooks

- [x] Criar hook para troca de Tema da aplicação (não criei mas usei um hook para tema)
- [ ] Requisitar um Tema para o servidor backend (utilize simulação de Promises com mocks);

### 6. Componentizar tabela
A tabela componentizada muda de acordo com a aparência da tabela do próprio Tema, podendo aproveitar as classes de tabela e outros componentes do bootstrap.

#### Requerimentos
- [x] A Tabela deve receber um Tema como propriedade `themeColor` (Muda de acordo com o tema)
- [x] A Tabela deve ser capaz de receber Células personalizáveis
- [ ] Deve ser capaz de ordenar por coluna (configurável)
- [x] Quando configurado propriedade `fetchData`, deve ser capaz de requisitar informações do backend com paginação automática. (simular Promises de requisição com dados mocados)
  - `{{url}}/paginate?page=1&pageSize=20`


### Tempo utilizado
usei do meu tempo livre, noite e fim de semana para fazer esse projeto, infelizmente não está totalmente pronto, faltou responsividade.

## Como usar no seu pc
* primeiro deve ter nodejs instalado na maquina.
* ```cmd git clone {este repositorio} ```
* ```cmd cd {nome do repositorio} ```
* ```cmd npm install ```
* ```cmd npm start ```
* Depois precisa baixar json-server ```cmd npm install -g json-server ```
* E ativar ele servirá como um back-end, é preciso que db.json esteja na raiz da aplicação ```cmd npx json-server db.json --port=3333 ```
* Pronto depois é só acessar a pagina estará em admin/challenge.
