# Orçamentos App

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.81.5-blue" />
  <img src="https://img.shields.io/badge/Expo-54.0.27-black" />
  <img src="https://img.shields.io/badge/TypeScript-5.3.3-blue" />
</p>

Aplicativo mobile para gerenciamento de orçamentos e cotações, desenvolvido com React Native e Expo. O projeto segue o design do Figma disponível em: [Budget App Design](https://www.figma.com/community/file/1553454451626348346)

## 📱 Sobre o Projeto

O Orçamentos App é uma solução completa para criação, edição e gerenciamento de orçamentos profissionais. Com uma interface intuitiva e moderna, permite que profissionais autônomos e pequenas empresas criem cotações detalhadas com facilidade.

### ✨ Funcionalidades

- 📋 **Gerenciamento de Orçamentos**

  - Criação de novos orçamentos com numeração automática
  - Edição de orçamentos existentes
  - Duplicação de orçamentos
  - Exclusão de orçamentos com confirmação

- 🛠️ **Gestão de Serviços**

  - Adição de múltiplos serviços por orçamento
  - Edição de serviços (título, descrição, preço, quantidade)
  - Remoção de serviços
  - Cálculo automático de subtotal

- 💰 **Cálculos Financeiros**

  - Subtotal automático dos serviços
  - Sistema de desconto por porcentagem
  - Cálculo automático do valor total
  - Visualização de valores com formatação de moeda (R$)

- 🏷️ **Sistema de Status**

  - Rascunho (Draft)
  - Enviado (Sent)
  - Aprovado (Approved)
  - Recusado (Declined)
  - Indicação visual por cores e ícones

- 📤 **Compartilhamento**

  - Captura de screenshot do orçamento
  - Compartilhamento via apps nativos (WhatsApp, Email, etc)
  - Exportação como imagem PNG

- 💾 **Armazenamento Local**

  - Persistência de dados com AsyncStorage
  - Acesso offline aos orçamentos
  - Sincronização automática

- ⌨️ **Experiência do Usuário**
  - KeyboardAvoidingView em formulários
  - Inputs com máscaras (moeda, porcentagem, quantidade)
  - Validação de campos obrigatórios
  - Feedback visual em ações

## 🎨 Design

O projeto foi desenvolvido seguindo fielmente o design disponível no Figma:

- Layout responsivo e adaptável
- Componentização modular
- Sistema de ícones personalizado (17 ícones SVG)
- Paleta de cores consistente
- Tipografia hierárquica (TitleLg, TitleSm, TitleXs, TextSm, TextXs)

## 🚀 Tecnologias

### Core

- **React Native** 0.81.5 - Framework para desenvolvimento mobile
- **Expo** 54.0.27 - Plataforma de desenvolvimento
- **TypeScript** 5.3.3 - Tipagem estática

### Navegação

- **React Navigation** 7.1.24 - Navegação entre telas
- **React Navigation Stack** 7.8.5 - Stack Navigator

### UI/UX

- **react-native-svg** 15.15.1 - Renderização de SVGs
- **react-native-safe-area-context** 5.6.0 - Áreas seguras
- **react-native-screens** - Otimização de telas
- **react-native-view-shot** 4.0.3 - Captura de screenshots
- **expo-sharing** 14.0.8 - Compartilhamento nativo

### Utilitários

- **expo-crypto** - Geração de UUIDs
- **@react-native-async-storage/async-storage** 2.2.0 - Armazenamento local
- **react-native-currency-input** 1.1.1 - Input de moeda

## 📂 Estrutura do Projeto

```
orcamentos-app/
├── src/
│   ├── app/                    # Telas da aplicação
│   │   ├── Home.tsx           # Lista de orçamentos
│   │   ├── AddBudget.tsx      # Criar/Editar orçamento
│   │   └── BudgetDetails.tsx  # Detalhes do orçamento
│   │
│   ├── components/             # Componentes reutilizáveis
│   │   ├── button.tsx
│   │   ├── check.tsx
│   │   ├── currency-value.tsx
│   │   ├── icon.tsx           # Seletor de ícones
│   │   ├── icons.tsx          # 17 ícones SVG
│   │   ├── input.tsx
│   │   ├── status.tsx
│   │   ├── tag.tsx
│   │   ├── section.tsx
│   │   ├── service-item.tsx
│   │   ├── add-service-modal.tsx
│   │   └── ...
│   │
│   ├── routes/                 # Configuração de rotas
│   │   ├── index.tsx
│   │   └── StackRoutes.tsx
│   │
│   ├── storage/                # Camada de persistência
│   │   └── budget-storage.ts
│   │
│   ├── types/                  # Definições TypeScript
│   │   ├── budget-type.ts
│   │   ├── service-type.ts
│   │   └── budget-status-types.ts
│   │
│   ├── utils/                  # Funções utilitárias
│   │   ├── currency-utils.ts
│   │   ├── budget-utils.ts
│   │   └── array-utils.ts
│   │
│   ├── config/                 # Configurações
│   │   └── budget-config.ts
│   │
│   └── consts/                 # Constantes
│       └── budget-consts.ts
│
├── android/                    # Código nativo Android
├── ios/                        # Código nativo iOS
├── app.json                    # Configuração Expo
├── tsconfig.json              # Configuração TypeScript
└── package.json               # Dependências
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Expo CLI
- Para iOS: Xcode e CocoaPods
- Para Android: Android Studio

### Passos

1. Clone o repositório

```bash
git clone <repository-url>
cd orcamentos-app
```

2. Instale as dependências

```bash
yarn install
# ou
npm install
```

3. Para iOS, instale os pods

```bash
cd ios && pod install && cd ..
```

4. Inicie o projeto

```bash
# Com Expo
npx expo start --dev-client

# Ou diretamente para iOS
yarn ios

# Ou diretamente para Android
yarn android
```

## 📱 Como Usar

### Criar um Novo Orçamento

1. Na tela inicial, toque no botão **"Nova cotação"**
2. Preencha as informações gerais (Título e Cliente)
3. Selecione o status do orçamento
4. Adicione serviços usando o botão **"Adicionar serviço"**
5. Para cada serviço, informe:
   - Título do serviço
   - Descrição
   - Preço unitário
   - Quantidade
6. (Opcional) Adicione um desconto percentual
7. Toque em **"Salvar"** para finalizar

### Visualizar Orçamento

1. Na lista de orçamentos, toque no card desejado
2. Visualize todos os detalhes:
   - Informações do cliente
   - Lista de serviços
   - Cálculos financeiros (subtotal, desconto, total)

### Compartilhar Orçamento

1. Abra o orçamento desejado
2. Toque no botão **"Compartilhar"**
3. Aguarde a captura da tela
4. Escolha o aplicativo para compartilhar (WhatsApp, Email, etc)

### Editar Orçamento

1. Abra o orçamento desejado
2. Toque no ícone de **editar** (lápis)
3. Modifique as informações necessárias
4. Toque em **"Salvar"**

### Duplicar Orçamento

1. Abra o orçamento desejado
2. Toque no ícone de **copiar**
3. Um novo orçamento será criado com os mesmos dados
4. O número do orçamento será incrementado automaticamente

## 🎯 Funcionalidades Técnicas

### Sistema de Ícones

O projeto conta com 17 ícones SVG convertidos para React Native:

- `check`
- `chevron-left`
- `chevron-right`
- `copy`
- `credit-card`
- `direction-up-right`
- `edit-pen`
- `filter`
- `multiply`
- `note-with-text`
- `plus`
- `shop`
- `tag`
- `trash-2`
- `arrow-sync`
- `declined`
- `archive-file`

Uso:

```tsx
<Icon name="edit-pen" size={24} color="#6A46EB" />
```

### Armazenamento de Dados

A camada de armazenamento (`BudgetStorage`) oferece:

- `add(budget)` - Adicionar novo orçamento
- `update(budget)` - Atualizar orçamento existente
- `remove(id)` - Remover orçamento
- `getById(id)` - Buscar orçamento específico
- `getAll()` - Listar todos os orçamentos
- `getLastBudgetNumber()` - Obter último número usado

### Formatação de Moeda

```typescript
formatCurrency(1500); // "R$ 1.500,00"
formatCurrency(1500.5); // "R$ 1.500,50"
```

### Cálculos Automáticos

```typescript
// Subtotal
priceSubtotal = services.reduce(
  (acc, service) => acc + service.price * service.quantity,
  0
);

// Desconto
discountAmount = (priceSubtotal * discountPercentage) / 100;

// Total
priceTotal = priceSubtotal - discountAmount;
```

## 🎨 Componentes Principais

### Button

Botão com variantes (primary, secondary, danger), suporte a ícones e estado desabilitado.

### Input

Campo de entrada com tipos (text, search, currency, textfield) e validação visual.

### Section

Container com header, ícone e área de conteúdo expansível.

### ServiceItem

Card de serviço com título, descrição, preço, quantidade e botão de edição.

### Status

Badge visual de status com cores específicas e ícone.

### Tag

Etiqueta colorida para destacar informações (desconto, quantidade, etc).

## 🔧 Configuração

### Personalização de Cores

Principais cores utilizadas no projeto:

- Primary: `#6A46EB`
- Danger: `#DB4D4D`
- Success: `#30752F`
- Background: `#FAFAFA`
- Border: `#F0F0F0`
- Text: `#0F0F0F`, `#4A4A4A`, `#676767`

### Status Padrão

Configurado em `src/config/budget-config.ts`:

```typescript
export const BUDGET_STATUS_DEFAULT_OPTION = {
  label: "Rascunho",
  value: "draft",
};
```

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👨‍💻 Desenvolvido por

Thiago Santos

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
