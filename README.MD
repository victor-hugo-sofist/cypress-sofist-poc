# PROJETO DE TESTES E2E - SOFIST - CYPRESS

## TECNOLOGIAS
- **TYPESCRIPT** - Linguagem de programação
- **NPM** - Gerenciador de pacotes
- **CYPRESS** - Framework de testes Web e API
- **ESLINT** - Ferramenta de lint
- **PRETTIER** - Padronizador estilístico
- **ALLURE REPORT** - Relatório de execução de testes personalizado

## INSTALANDO AS DEPENDÊNCIAS

### Dependências NPM
Execute:
>`npm install`

### Dependências Java - Allure Report
Instale o JDK-Java 8 ou superior. [Link para download.](https://www.oracle.com/java/technologies/downloads/#jdk20-windows)

Crie a variável de ambiente `JAVA_HOME` e insira o diretório do local onde foi instalado o JDK.

Exemplo: `C:\Program Files\Java\jdk-20`

## Abrindo o CYPRESS
>`npm run cypress:open`

## Executando testes em modo debuger
Para executar testes em modo debug é preciso abrir o **CYPRESS** e incluir no código que se deseja analisar o seguinte método no ponto que se deseja analisar. Pense neste método como um análogo do convencional break-point.
>`cy.debug();`

## Executando testes localmente em um navegador em específico
>`npx cypress run --browser=chrome`

>`npx cypress run --browser=firefox`

>`npx cypress run --browser=edge`

>`npx cypress run`

**OBS:** Se nenhum browser é informado, o padrão é executar utilizando o Electron. Os testes são executados em headless, mas é possível também usar a flag `--headless`

## Executando testes gerando um relatório Allure

OBS: O relatório Allure não funciona adequadamente a partir da versão 12.15.0 do CYPRESS. Até que este bug seja resolvido nas versões mais recentes, foi utilizada nesta branch a versão 12.14.0 do CYPRESS.

>`npx cypress run --env allure=true`

>`npx allure generate ./allure-results --clean`

>`npx allure open ./allure-report`

## Executando o ESLint
Lembre-se: Instale a extensão **ESLINT** no VS-Code.
>`npx eslint . --ext .ts`

## Executando o Prettier
Lembre-se: Instale a extensão **Prettier - Code formatter** no VS-Code.
>`npx prettier . --write`