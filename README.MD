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

## Executando o ESLint
Lembre-se: Instale a extensão **ESLINT** no VS-Code.
>`npx eslint . --ext .ts`

## Executando o Prettier
Lembre-se: Instale a extensão **Prettier - Code formatter** no VS-Code.
>`npx prettier . --write`