Documentação da API de Inscrições
Introdução
Esta documentação é para a API de Inscrições desenvolvida como parte do curso de Programação Web na Universidade do Estado do Pará (UEPA). Esta API foi criada para gerenciar as inscrições de candidatos em um sistema de processos seletivos. A aplicação permite criar, ler, atualizar e deletar inscrições de candidatos. Este projeto é fundamental para a avaliação das duas principais provas do curso.

Endpoints
1. Criar Inscrição
Rota: POST /inscritos

Descrição: Cria uma nova inscrição de candidato.

Request:

{
  "nome": "Nome do Candidato",
  "cpf": "123.456.789-10",
  "email": "email@example.com",
  "telefone": "(12) 34567-8901",
  "dataNascimento": "2000-01-01",
  "sexo": "masculino",
  "cargo": "cargo desejado",
  "curriculo": "link para o currículo em pdf",
  "termos": true
}

Response:

Status: 201 Created
Body:
{
  "nome": "Nome do Candidato",
  "cpf": "123.456.789-10",
  "email": "email@example.com",
  "telefone": "(12) 34567-8901",
  "dataNascimento": "2000-01-01",
  "sexo": "masculino",
  "cargo": "cargo desejado",
  "curriculo": "link para o currículo em pdf",
  "termos": true
}

2. Listar Inscritos
Rota: GET /inscritos

Descrição: Lista todas as inscrições ou filtra inscrições por nome, email e CPF.

Request:

Query Params (opcional):
nome
email
cpf
Response:

Status: 200 OK
Body:
[
  {
    "id": 1,
    "nome": "Nome do Candidato",
    "cpf": "123.456.789-10",
    "email": "email@example.com",
    "telefone": "(12) 34567-8901",
    "dataNascimento": "2000-01-01",
    "sexo": "masculino",
    "cargo": "cargo desejado",
    "curriculo": "link para o currículo em pdf",
    "termos": true
  },
  ...
]

3. Atualizar Inscrição
Rota: PUT /inscritos/:id

Descrição: Atualiza uma inscrição existente com base no ID fornecido.

Request:

Params:

id: ID da inscrição a ser atualizada.
Body:
{
  "nome": "Nome Atualizado",
  "cpf": "123.456.789-10",
  "email": "email@example.com",
  "telefone": "(12) 34567-8901",
  "dataNascimento": "2000-01-01",
  "sexo": "masculino",
  "cargo": "cargo atualizado",
  "curriculo": "link para o currículo em pdf",
  "termos": true
}

Response:

Status: 201 Created
Body: Retorna os dados atualizados da inscrição.

4. Deletar Inscrição
Rota: DELETE /inscritos/:id

Descrição: Deleta uma inscrição existente com base no ID fornecido.

Request:

Params:
id: ID da inscrição a ser deletada.
Response:

Status: 200 OK
Body:
{
  "message": "Usuário deletado com sucesso!"
}
