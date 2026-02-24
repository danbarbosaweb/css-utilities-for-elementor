# 🖱️ Mouse Cursor Effect para Elementor

![Preview do Mouse Cursor Effect](https://github.com/danbarbosaweb/css-utilities-for-elementor/raw/main/assets/gifs/gif-mouse.gif)

✨ Este projeto adiciona um efeito de cursor personalizado (círculo azul) em sites feitos com Elementor.

---

## 🚀 Como usar

### 1️⃣ Upload dos arquivos
Faça upload ou copie os arquivos:

- `mouse-cursor.css`
- `mouse-cursor.js`

Processo de Copia e Cola, separe os codigos ;) 

---

### 2️⃣ Widget HTML — Div do Cursor

Adicione um **Widget HTML** contendo:

```html
<div id="mouse-dot"></div>
```

---

### 3️⃣ Widget HTML — Script

Adicione **outro Widget HTML** contendo o conteúdo do arquivo:

`mouse-cursor.js`

---

### 4️⃣ CSS Global

Inclua o conteúdo do arquivo:

`mouse-cursor.css`

no **Custom CSS global** do Elementor (ou no CSS do tema).

---

## ✅ Resumo da Estrutura Necessária

Para funcionar perfeitamente você precisa:

- 🧩 1 Widget HTML com a `<div id="mouse-dot"></div>`
- ⚙️ 1 Widget HTML com o script (`mouse-cursor.js`)
- 🎨 CSS Global aplicado (`mouse-cursor.css`)

---

## 💻 Compatibilidade

- 🖥️ Funciona automaticamente em **desktop**
- 📱 Desativado em telas menores que **768px**
- 🎯 Elementos com `pointer-events: none;` permitem que o cursor passe por cima sem bloquear cliques

---

## 🎨 Personalização

- 📏 **Tamanho do cursor:** alterar `width` e `height` no CSS  
- 🎨 **Cor do cursor:** alterar `background` (atualmente `rgba(33,147,247,0.45)`)  
- ✨ **Suavidade:** adicionar `transition` no CSS para animações mais fluidas.
