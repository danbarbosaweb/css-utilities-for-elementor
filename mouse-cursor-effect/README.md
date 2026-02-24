
# Mouse Cursor Effect para Elementor
![Preview do Mouse Cursor Effect](https://github.com/danbarbosaweb/css-utilities-for-elementor/raw/main/assets/gifs/gif-mouse.gif)

Este projeto adiciona um efeito de cursor personalizado (círculo azul) em sites feitos com Elementor.

## Como usar
1) Faça upload/copie dos arquivos mouse-cursor.css e mouse-cursor.js para a sua biblioteca de temas ou Elementor.

2) Adicione um Widget HTML contendo a seguinte div:
<div id="mouse-dot"></div>

3) Adicione outro Widget HTML contendo o conteúdo do arquivo mouse-cursor.js (script).

4) Inclua o CSS do arquivo mouse-cursor.css no Custom CSS global do Elementor (ou no CSS do tema).

O cursor funcionará automaticamente em desktops.
Ele será desativado em telas menores que 768px..

4. O cursor funcionará automaticamente em desktops.  
   Ele será desativado em telas menores que 768px.

## Personalização

- **Tamanho do cursor:** alterar `width` e `height` no CSS.  
- **Cor do cursor:** alterar `background` no CSS (atualmente rgba(33,147,247,0.45)).  
- **Suavidade:** adicionar `transition` no CSS para animações.

## Observações

- Compatível apenas com **desktop**; mobile desativado via media query.  
- Elementos com `pointer-events: none;` permitem que o cursor passe por cima sem atrapalhar cliques.
