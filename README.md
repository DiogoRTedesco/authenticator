## authenticator
1. Requisitos Funcionais
Registro de Usuário: Permitir que novos usuários se registrem no sistema.
Autenticação: Autenticar usuários existentes.
Autorização: Determinar os sistemas que um usuário autenticado pode acessar.
Gerenciamento de Sessão: Manter sessões de usuário ativas e seguras.
Recuperação de Senha: Permitir a recuperação de senha para usuários que a esqueceram.
Log de Atividades: Registrar atividades de login e logout.
2. Estrutura de Dados
Usuário:

ID
Nome de usuário
Email
Senha (hash)
Data de criação
Último login
Sessão:

ID da Sessão
ID do Usuário
Token de autenticação
Data de criação
Data de expiração
Permissão:

ID do Usuário
Sistema permitido
Nível de permissão
3. Endpoints da API
/register [POST]: Registro de novo usuário.

Entrada: Nome de usuário, Email, Senha.
Saída: Confirmação de registro ou erro.
/login [POST]: Autenticação de usuário.

Entrada: Nome de usuário, Senha.
Saída: Token de autenticação ou erro.
/logout [POST]: Encerrar sessão do usuário.

Entrada: Token de autenticação.
Saída: Confirmação de logout.
/authorize [POST]: Verificação de permissão para acessar um sistema.

Entrada: Token de autenticação, Sistema.
Saída: Status de permissão.
/forgot-password [POST]: Iniciar processo de recuperação de senha.

Entrada: Email.
Saída: Confirmação de envio de email de recuperação.
/reset-password [POST]: Concluir processo de recuperação de senha.

Entrada: Token de recuperação, Nova senha.
Saída: Confirmação de redefinição de senha.
