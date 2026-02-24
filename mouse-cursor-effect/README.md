
# Mouse Cursor Effect para Elementor
![Preview](../assets/gifs/gif.mouse.gif)

Este projeto adiciona um efeito de cursor personalizado (círculo azul) em sites feitos com Elementor.

## Como usar

1. Faça upload/copie dos arquivos `mouse-cursor.css` e `mouse-cursor.js` para a sua biblioteca de temas ou Elementor (Widgets de HTML ou Custom CSS/JS).

2. Inclua o CSS global do arquivo `mouse-cursor.css` no **Custom CSS** do Elementor (ou no tema).

3. Inclua o JS do arquivo `mouse-cursor.js` em um **HTML Widget** ou usando o **Custom JS do tema**.

4. O cursor funcionará automaticamente em desktops.  
   Ele será desativado em telas menores que 768px.

## Personalização

- **Tamanho do cursor:** alterar `width` e `height` no CSS.  
- **Cor do cursor:** alterar `background` no CSS (atualmente rgba(33,147,247,0.45)).  
- **Suavidade:** adicionar `transition` no CSS para animações.

## Observações

- Compatível apenas com **desktop**; mobile desativado via media query.  
- Elementos com `pointer-events: none;` permitem que o cursor passe por cima sem atrapalhar cliques.
