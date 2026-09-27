Tema fixo da aplicação

Este arquivo descreve como usar o tema fixo criado com variáveis CSS e integrado ao Tailwind.

Base oficial do design:

- Figma file: Santa Casa
- Node: 420:4183 (TEMA)
- Título do header: BACKOFFICE

Cores principais (classes Tailwind geradas):

- `bg-primary` / `text-primary` — cor primária do sistema
- `bg-primary-700`, `bg-primary-500`, `bg-primary-300` — variações da primária
- `text-on-primary` — texto em fundos primários
- `bg-avatar` — fundo do avatar no header
- `bg-secondary` / `text-secondary` — cor secundária (textos)
- `bg-success` / `text-success`
- `bg-warning` / `text-warning`
- `bg-danger` / `text-danger`
- `bg-surface` — cor para cards e superfícies (branco)
- `bg-bg` — cor de fundo da aplicação

Paleta aplicada (hex):

- Header / Footer: #2071CE
- Background (app): #F4F1EB
- Seção em branco (surface): #FBFBFB
- Texto no header/footer: #FFFFFF
- Avatar no header: rgba(255, 255, 255, 0.14)
- Texto secundário: #2C3E50
- Muted / labels: #6B7280

Tokens de layout (Figma):

- Header: altura 96px, padding 12px 86px
- Footer: altura 80px, padding 15px 101px
- Sessão principal: padding 48px 47px 77px
- Borda da sessão: 16px (topo)
- Título: Inter, 600, 40px

Classes utilitárias globais adicionadas:

- `.theme-shell`
- `.theme-header`
- `.theme-header-title`
- `.theme-avatar`
- `.theme-section`
- `.theme-footer`

Exemplos de uso (React + Tailwind):

- Banner/Topo:

```jsx
<div className="bg-primary text-white p-4 rounded-lg">Título do Sistema</div>
```

- Header alinhado ao Figma:

```jsx
<header className="theme-header flex items-center justify-between">
  <h1 className="theme-header-title">BACKOFFICE</h1>
  <div className="theme-avatar" />
</header>
```

- Card:

```jsx
<div className="bg-surface text-secondary p-6 rounded shadow">
  <h3 className="text-lg font-medium">Card title</h3>
  <p className="text-muted">Descrição</p>
</div>
```

- Botão (Tailwind utility):

```jsx
<button className="bg-primary hover:bg-primary-700 text-white px-4 py-2 rounded">Salvar</button>
```

Observações:
- As variáveis estão definidas em `src/styles/global.css` e o Tailwind foi configurado para mapear essas variáveis (ver `tailwind.config.js`).
- O tema é "fixo" — use as classes utilitárias do Tailwind como mostrado acima para aplicar o estilo.
