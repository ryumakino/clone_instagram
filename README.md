# Clone do Instagram - Ruby on Rails 6.1

Este projeto é um clone básico do Instagram, desenvolvido com Ruby on Rails 6.1. O objetivo é replicar algumas das funcionalidades principais do Instagram, como o upload de fotos, criação de posts, feed de imagens e curtidas.

## Funcionalidades

- **Autenticação de Usuário**: Cadastro, login e logout de usuários.
- **Criação de Posts**: Usuários podem criar posts com imagens e descrições.
- **Feed de Posts**: Visualização de posts de todos os usuários no feed.
- **Curtidas**: Usuários podem curtir posts.
- **Comentários**: Usuários podem comentar nas fotos.
- **Perfil de Usuário**: Cada usuário tem um perfil com seus próprios posts.

## Tecnologias

- **Ruby on Rails 6.1**: Framework web utilizado para construir a aplicação.
- **SQLite**: Banco de dados para desenvolvimento.
- **Active Storage**: Gerenciamento de arquivos de imagem.
- **Devise**: Gem para autenticação de usuários.
- **Bootstrap**: Framework CSS para design responsivo.

## Instalação

### Pré-requisitos

- Ruby 2.6.0 ou superior
- Rails 6.1
- SQLite (ou qualquer banco de dados configurado)

### Passos para Rodar a Aplicação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/clone-instagram.git
   cd clone-instagram

2. **Instale as dependências**

   ```bash
   bundle install

3. **Configure o banco de dados**

   Execute o comando abaixo para criar o banco de dados e as tabelas necessárias:

   ```bash
   rails db:create
   rails db:migrate

4. **Inicie o servidor**

   Após a instalação, inicie o servidor Rails:

   ```bash
   rails server
   ```
   
   Agora, acesse a aplicação no seu navegador:

   ```bash
   http://localhost:3000

