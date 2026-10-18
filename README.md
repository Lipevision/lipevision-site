# LIPE.VISION — Site Profissional de Fotografia

Site pessoal da marca **LIPE.VISION**, fotografia profissional em Salvador, Bahia.

---

## 🚀 Como testar o site localmente

### Opção 1 — Abrir direto no navegador (mais simples)

1. Abra a pasta `lipevision-site` no explorador de arquivos
2. Dê duplo clique no arquivo `index.html`
3. O site abrirá no seu navegador padrão

> ⚠️ Algumas fontes e ícones dependem de internet para carregar. Mantenha conexão ativa ao testar.

### Opção 2 — Servidor local com VS Code (recomendado)

1. Instale a extensão **Live Server** no VS Code (ou Kiro IDE)
2. Clique com o botão direito no `index.html`
3. Selecione **"Open with Live Server"**
4. O site abrirá em `http://127.0.0.1:5500`

### Opção 3 — Servidor local com Node.js

```bash
npx serve .
```

---

## ⚙️ Configurações essenciais antes de publicar

### 1. Número do WhatsApp

Abra o arquivo `script.js` e localize a linha comentada no final do arquivo:

```js
// configureWhatsApp('5571999991234');
```

Remova o `//` e substitua pelo seu número real com DDI + DDD + número (sem espaços):

```js
configureWhatsApp('5571999991234');  // exemplo Salvador/BA
```

Ou, se preferir, edite manualmente todos os links `href="https://wa.me/SEU_NUMERO_AQUI"` no `index.html`.

---

### 2. Foto de capa (Hero)

No arquivo `style.css`, localize o comentário `/* ━━━ HERO: troque a URL abaixo... */` e substitua a URL do Unsplash pelo caminho da sua foto:

```css
background-image: url('assets/images/sua-foto-hero.jpg');
```

---

### 3. Foto da seção Eventos

No mesmo `style.css`, localize `/* ━━━ EVENTOS: troque por foto de evento ━━━ */` e faça o mesmo.

---

### 4. Sua foto (seção "Sobre mim")

No `index.html`, localize o bloco com classe `sobre__img-placeholder` e substitua pelo elemento `<img>`:

```html
<img 
  src="assets/images/sua-foto.jpg" 
  alt="Fotógrafo Lipe — LIPE.VISION" 
  class="sobre__img-placeholder" 
  style="object-fit:cover;"
/>
```

---

### 5. Fotos do portfólio

No arquivo `script.js`, no array `portfolioItems`, substitua cada objeto `placeholder` por:

```js
src: 'assets/images/nome-da-foto.jpg',
```

E no HTML gerado, troque `portfolio__placeholder` por uma `<img>` com classe `portfolio__thumb`.

---

### 6. Formulário funcional

O formulário está em **modo demonstração**. Para ativá-lo com envio real de e-mail, cadastre-se em um dos serviços abaixo (ambos gratuitos no plano básico):

- **Formspree** → https://formspree.io
- **Web3Forms** → https://web3forms.com

Após cadastrar, adicione `action="https://formspree.io/f/SEU_ID"` na tag `<form>` e remova a lógica de simulação no `script.js`.

---

## 📤 Publicar no GitHub e Vercel

### Passo 1 — Criar repositório no GitHub

1. Acesse https://github.com e faça login
2. Clique em **New repository**
3. Nome o repositório: `lipevision-site`
4. Deixe como **Public** e clique em **Create repository**

### Passo 2 — Enviar os arquivos

No terminal (dentro da pasta do projeto):

```bash
git init
git add .
git commit -m "feat: site inicial LIPE.VISION"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/lipevision-site.git
git push -u origin main
```

> Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

### Passo 3 — Publicar na Vercel

1. Acesse https://vercel.com e faça login com sua conta GitHub
2. Clique em **Add New Project**
3. Selecione o repositório `lipevision-site`
4. Clique em **Deploy** — nenhuma configuração adicional é necessária
5. Aguarde o deploy. O site ficará disponível em `https://lipevision-site.vercel.app` (ou similar)

---

## 📁 Estrutura de arquivos

```
lipevision-site/
├── index.html          ← Estrutura completa do site
├── style.css           ← Toda a identidade visual e layout
├── script.js           ← Interatividade, animações e portfólio
├── assets/
│   └── images/         ← Coloque suas fotos aqui
└── README.md           ← Este arquivo
```

---

## 🎨 Personalização rápida

| O que mudar | Onde |
|-------------|------|
| Cor dourada | `style.css` → variável `--color-gold` |
| Fontes | `index.html` → link do Google Fonts + `style.css` variáveis `--font-*` |
| Textos | `index.html` — busque por `<!-- substitua -->` |
| Logo | `style.css` → `.nav__logo` e `.footer__logo` |
| Favicon | Adicione `<link rel="icon" href="assets/favicon.ico">` no `<head>` |

---

## 📸 Créditos de imagens

Todas as imagens são fotografias reais de **LIPE.VISION** — todos os direitos reservados.

### ⚠️ Arquivos HEIC não convertidos

Os arquivos `IMG_3976.HEIC`, `IMG_4008.HEIC` e `IMG_4020.HEIC` **não são suportados nativamente pelos navegadores** e foram mantidos como originais. Para incluí-los na galeria, converta-os para JPG ou WebP com qualquer uma destas ferramentas:

- **iPhone/Mac**: Abra no Fotos → Exportar → JPEG
- **Windows**: Use o aplicativo [iMazing HEIC Converter](https://imazing.com/heic) (gratuito)
- **Online**: [heictojpg.com](https://heictojpg.com)

Após a conversão, coloque os arquivos em `assets/images/` e adicione-os ao array `portfolioItems` em `script.js`.

---

**LIPE.VISION** · Salvador, Bahia, Brasil  
Instagram: [@lipe.vision](https://www.instagram.com/lipe.vision/)
