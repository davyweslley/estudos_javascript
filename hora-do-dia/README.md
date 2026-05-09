# 🌅 Hora do Dia

Exercício prático de manipulação do DOM com JavaScript,
utilizando o objeto Date para detectar a hora do sistema
e adaptar a interface dinamicamente.

## 📋 O que o exercício faz

A página detecta automaticamente a hora atual e adapta
toda a interface conforme o período do dia:

- 🌄 **Manhã** (00h às 11h) -> imagem e fundo amarelo claro
- ☀️ **Tarde** (12h às 17h) -> imagem e fundo laranja
- 🌙 **Noite** (18h às 23h) -> imagem e fundo escuro

## 🧠 Conceitos praticados

- Objeto `Date()` e método `getHours()`
- Estrutura condicional `if / else if / else`
- Template literals com variáveis
- Manipulação de `src` de imagem via JavaScript
- Alteração dinâmica de `background` via `element.style`
- Separação de arquivos HTML, CSS e JavaScript

## 🛠️ Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📁 Estrutura

- hora-do-dia/
- - hora-do-dia.html
- - style.css
- - script.js
- - img/
- - - fotomanha.png
- - - fototarde.png
- - - fotonoite.png
