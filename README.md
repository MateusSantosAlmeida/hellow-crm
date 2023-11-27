## Começando

#### Etapa 1: clonar o repositório

```bash
clone do git https://github.com/MateusSantosAlmeida/hellow-crm.git
```

```bash
cd hellow-crm
```

#### Etapa 2: Crie sua conta MongoDB e banco de dados/cluster

- Crie sua própria conta MongoDB visitando o site do MongoDB e inscrevendo-se para uma nova conta.

- Crie um novo banco de dados ou cluster seguindo as instruções fornecidas na documentação do MongoDB. Lembre-se de anotar o "URI de conexão ao seu aplicativo" do banco de dados, pois você precisará dele mais tarde. Além disso, certifique-se de alterar `<senha>` com sua própria senha

- adicione seu endereço IP atual à lista de permissões de IP do banco de dados MongoDB para permitir conexões (isso é necessário sempre que seu IP mudar)

#### Etapa 3: edite o arquivo de ambiente

- Verifique um arquivo chamado .env no diretório /backend.

   Este arquivo armazenará variáveis de ambiente para a execução do projeto.

#### Etapa 4: atualizar o URI do MongoDB

No arquivo .env, encontre a linha que diz:

`DATABASE="seu-mongodb-uri"`

Substitua “your-mongodb-uri” pelo URI real do seu banco de dados MongoDB.

#### Etapa 5: instalar dependências de back-end

Em seu terminal, navegue até o diretório /backend do projeto e execute o seguinte comando para instalar as dependências de backend:

```bash
npm install
```

Este comando instalará todos os pacotes necessários especificados no arquivo package.json.

#### Etapa 6: Execute o script de configuração

Ainda no diretório /backend do projeto, execute o seguinte comando para executar o script de configuração:

```bash
npm run setup
```

Este script de configuração pode realizar migrações de banco de dados necessárias ou qualquer outra tarefa de inicialização necessária para o projeto.

#### Etapa 7: execute o servidor back-end

No mesmo terminal, execute o seguinte comando para iniciar o servidor backend:

```bash
npm run dev
```

Este comando iniciará o servidor back-end e escutará as solicitações recebidas.

#### Etapa 8: Instalar dependências de front-end

Abra uma nova janela de terminal e execute o seguinte comando para instalar as dependências do frontend:

```bash
cd frontend
```

```bash
npm install
```

#### Etapa 9: execute o servidor front-end

Após instalar as dependências frontend, execute o seguinte comando no mesmo terminal para iniciar o servidor frontend:

```bash
npm run dev
```

Este comando iniciará o servidor frontend e você poderá acessar o site em localhost:3000 em seu navegador.

:exclamation: :warning:` Se você encontrar um erro OpenSSL ao executar o servidor front-end, siga estas etapas adicionais:`


Veja como você pode habilitar o provedor OpenSSL legado

- No tipo Unix (Linux, macOS, Git bash, etc.)

```bash
exportar NODE_OPTIONS=--openssl-legacy-provider
```

- No prompt de comando do Windows:

```bash
definir NODE_OPTIONS=--openssl-legacy-provider
```

- No PowerShell:

```bash
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

Depois de tentar as soluções acima, execute o comando abaixo

```bash
npm run start
```
### Credenciais de login do site

Assim que o site estiver instalado e funcionando, você poderá fazer login usando as seguintes credenciais:

`nome de usuário: admin@demo.com - senha: admin123`

Agora você deve estar pronto para executar o projeto localmente em sua máquina e explorar seus recursos.