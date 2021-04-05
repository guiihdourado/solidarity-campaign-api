<!--
Requisitos Funcionais
Requisitos funcionais são quais as funcionalidades que teremos.

Requisitos Não Funcionais
Requisitos não funcionais são requisitos da parte técnica

Regras de negócio
São as regras de negócio do nosso sistema.
-->

# Cadastrar uma campanha

**Requisitos Funcionais**

- O usuário deve poder cadastrar uma campanha informando o nome da campanha,
a data de início, a data que termina, o valor disponível para essa campanha.
- O usuário deve poder informar os selecionar os produtos que estarão disponível para cotação
das cestas baseado nos produtos cadastrados. Poderão informar também a quantidade dos produtos que já possuem.

**Regras de Negócio**

- O usuário não pode cadastrar caso a data que termina a campanha seja menor
que a data de início.

# Listar a campanha

**Requisitos Funcionais**

- O usuário deve listar a campanha com a lista de produtos que serão cotados.

# Criar uma cotação para a campanha

**Requisitos Funcionais**

- O usuário deve poder cadastrar uma cotação informando o id da campanha, e o
valor de cada produto que está cadastrado na campanha.

**Regras de Negócio**

- O usuário não pode cadastrar uma cotação de um produto que não foi vinculado
a essa campanha.`
