Aqui está um **README.md** completo e bem estruturado, sintetizando todas as regras de negócio, categorias, fluxo operacional e as tecnologias utilizadas no projeto.

---

# 🏢 Portal de Fornecedores

> Sistema para unificação, consulta e homologação de cadastros de fornecedores, integrado com validação contábil e parametrização ERP.

---

## 🛠️ Tecnologias Utilizadas

* **[React](https://react.dev/)** — Biblioteca principal para construção da interface.
* **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança e produtividade.
* **[Tailwind CSS](https://tailwindcss.com/)** — Estilização moderna e utilitária.
* **[PrimeReact](https://primereact.org/)** — Componentes de UI ricos e biblioteca de ícones (`primeicons`).
* **[React Router DOM](https://reactrouter.com/)** — Gerenciamento de rotas e navegação.

---

## 📌 Visão Geral do Sistema

O **Portal de Fornecedores** otimiza o processo de inclusão de novos fornecedores. O fluxo reduz o tempo de análise, previne inconsistências cadastrais e direciona as solicitações para os setores responsáveis (**Contabilidade** e **Parametrização**).

### ✨ Principais Funcionalidades

* **Formulário Padronizado:** Coleta estruturada de dados cadastrais, bancários e anexos.
* **Acompanhamento Transparente:** Status em tempo real do andamento da solicitação.
* **Devolução e Ajustes:** Notificação e histórico de pendências apontadas pelos setores de aprovação.
* **Diferenciação por Categoria:** Fluxos de validação personalizados de acordo com o tipo de fornecedor.

---

## 🏷️ Tipos de Fornecedores (Categorização)

| Categoria | Descrição | Regra de Negócio |
| --- | --- | --- |
| **1. Terceiros** | Serviços gerais, manutenção, reformas e infraestrutura. | Exige vinculo manual de **Código Contábil**. |
| **2. Fornecedor Cliente** | Reembolsos fiscais ou financeiros diretos (PF ou PJ). | **Fluxo Automático** (Não exige código contábil manual). |
| **3. Prestador de Saúde** | Médicos credenciados, clínicas, laboratórios e hospitais. | Exige **Código Contábil** e conferência técnica. |

---

## 🔄 Fluxograma Operacional

```
[ 01. Início da Solicitação ] 
         │ (Acesso via credenciais corporativas)
         ▼
[ 02. Preenchimento de Dados ] 
         │ (Seleção de categoria, dados cadastrais e bancários)
         ▼
[ 03. Análise da Contabilidade ] 
         ├──► Fornecedor Cliente: Fluxo automático
         ├──► Terceiros / Saúde: Atribuição manual do Código Contábil
         └──► Reprovação: Solicitação encerrada (necessário novo cadastro)
         │
         ▼
[ 04. Setor de Parametrização (ERP) ] 
         ├──► Aprovação Final (Cadastro Liberado)
         └──► Devolução para Correção (Ajustes pelo solicitante)

```

---

## 💡 Boas Práticas de Preenchimento

* **Validação Prévia:** Verifique o **CPF** ou **CNPJ** antes de concluir o envio.
* **Dados Bancários:** Valide agência, conta e chave Pix para evitar estornos ou devoluções.
* **Acompanhamento:** Verifique periodicamente o histórico da solicitação para responder a eventuais pendências.

---

## 🚀 Como Executar o Projeto Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/portal-fornecedores.git

```


2. **Acesse o diretório:**
```bash
cd portal-fornecedores

```


3. **Instale as dependências:**
```bash
npm install
# ou
yarn install

```


4. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev

```


5. Acesse o projeto no navegador em `http://localhost:5173` (ou na porta configurada pelo Vite).

---

## 🏢 Institucional

Desenvolvido para o **Portal de Fornecedores** — *Núcleo de Inteligência*.

Uso restrito a colaboradores autorizados.