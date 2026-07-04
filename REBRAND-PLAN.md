# Plano de Substituição de Logotipo, Logo e Favicon

Inventário completo dos assets de marca da GPUStack no projeto e referências no código, para substituição por assets personalizados.

---

## 1. Favicon (ícone da aba do navegador)

| Arquivo | Status | Observação |
| --- | --- | --- |
| `public/static/favicon.png` | **Ativo** | Referenciado em `config/config.ts:72` (`favicons: ['/static/favicon.png']`). O Umi injeta `<link rel="icon">` no `index.html` gerado a partir deste. |
| `public/static/favicon.ico` | **Ativo (legacy)** | Versão .ico ao lado do .png. Manter substituído para compatibilidade. |
| `public/favicon.ico` | **Duplicado/legacy** | Cópia na raiz de `public/`; não referenciado pelo build. |
| `public/favicon.png` | **Duplicado/legacy** | Cópia na raiz de `public/`; não referenciado pelo build. |

**Referência no código:**

- `config/config.ts:72` → `favicons: ['/static/favicon.png']` (ponto único de configuração do favicon).

---

## 2. Logo principal da marca (sidebar expandida, login, rodapé de versão)

| Arquivo | Status |
| --- | --- |
| `src/assets/images/gpustack-logo.png` | **Ativo** — logo principal |
| `src/assets/images/gpustack-logo-2.png` | **Órfão** — não referenciado em lugar nenhum do código (legacy, pode ser removido). |

**Referências no código (todas importam o mesmo arquivo):**

- `src/hooks/use-logo.ts:1` → define `sidebarLogo` (fallback).
- `src/layouts/Logo.tsx:5-9` → `LogoIcon` (renderiza `sidebarLogo` na sidebar expandida).
- `src/layouts/index.tsx:451` → usa `<LogoIcon />` na `ProLayout`.
- `src/pages/login/index.tsx:1` → logo na página de login.
- `src/pages/login/components/login-form.tsx:1` → logo no formulário de login.
- `src/components/version-info/index.tsx:1` → logo no modal/rodapé "Sobre/Versão".

---

## 3. Logo miniatura (sidebar recolhida, fallback de provider)

| Arquivo                                    | Status                          |
| ------------------------------------------ | ------------------------------- |
| `src/assets/images/small-logo-200x200.png` | **Ativo** — mini logo (200x200) |

**Referências no código:**

- `src/hooks/use-logo.ts:2` → define `miniLogo` (fallback).
- `src/layouts/Logo.tsx:11-15` → `SLogoIcon` (renderiza `miniLogo` na sidebar recolhida).
- `src/layouts/index.tsx:451` → usa `<SLogoIcon />` quando `collapsed`.
- `src/pages/maas-provider/components/provider-logo.tsx:1,71` → fallback do logo para o provider `deployments`.

---

## 4. Título da página / aba

- `config/config.ts:80` → `title: 'GPUStack'` (título do navegador e do ProLayout).
- `src/layouts/index.tsx:416` → `title={userConfig.title}`.

---

## 5. Ponto de extensão de branding (alternativa sem editar código)

Existe um mecanismo de plugin que permite sobrescrever os logos em runtime, **sem substituir arquivos**:

- `src/plugins/types.ts:84-98` → interface `BrandingPlugin` com `resolveLogos?(userSettings, isDarkTheme) => LogoSet`.
- `src/hooks/use-logo.ts:9-16` → o hook `useLogo` chama `enterprisePlugin?.branding?.resolveLogos?.()` **primeiro**; só usa os PNGs estáticos como fallback.

Ou seja: se um plugin registrar `branding.resolveLogos` retornando `{ sidebarLogo, miniLogo }`, esses valores vencem sobre os arquivos PNG. Isso permite inclusive logos diferentes para tema claro/escuro (`isDarkTheme`).

> Observação: o favicon e o título da aba **não** são cobertos por esse plugin — somente `sidebarLogo` e `miniLogo`.

---

## 6. Assets que NÃO são da marca (não substituir)

Estes são logos de terceiros/integrações e **não** devem ser trocados pela sua marca:

- `src/assets/providers-logo/*.svg` — logos de provedores de IA (OpenAI, Claude, Gemini, DeepSeek, Ollama, etc.).
- `src/assets/logo/*` — logos de vendors/frameworks (nvidia, ubuntu, jupyter, pytorch, tensorflow, cambricon, ascend, hygon, metax, vllm, sglang, lmdeploy, moore_threads, t-head, iluvatar, voxbox...).
- `src/assets/images/ollama.png`, `huggingface.png` — logos de integrações.

---

## Estratégia recomendada de substituição

**Opção A — Substituição direta de arquivos (mais simples):**

1. Substituir o conteúdo (mantendo os nomes/paths) de:
   - `src/assets/images/gpustack-logo.png` (seu logo principal)
   - `src/assets/images/small-logo-200x200.png` (seu mini logo 200x200)
   - `public/static/favicon.png` e `public/static/favicon.ico` (seu favicon)
   - `public/favicon.png` e `public/favicon.ico` (para consistência, embora não usados pelo build)
2. (Opcional) Editar `config/config.ts:80` para alterar `title: 'GPUStack'` → seu título.
3. (Opcional) Remover o órfão `src/assets/images/gpustack-logo-2.png`.

Vantagem: zero mudanças de código (imports continuam válidos). Atenção: manter as mesmas dimensões/proporções para não quebrar layouts (logo sidebar é renderizada com `height: 24px`).

**Opção B — Plugin de branding + ENV de build (avançado, com suporte a tema claro/escuro):**

> Responde à pergunta: "como faria isso? e `config/config.ts` via ENV?"

### Como o sistema de plugins funciona (verificado no código)

- `GPUStackPluginManager` é um singleton em `src/plugins/manager.ts` com `register(name, plugin)`.
- `getGPUStackPlugin()` retorna `GPUStackPluginManager.get('enterprise')` — ou seja, um plugin registrado sob o **nome `'enterprise'`** (`src/plugins/index.ts:7-9`).
- Em builds OSS, **nada** é registrado sob `'enterprise'`. O build enterprise injeta um bloco em `global.tsx` que chama `register('enterprise', ...)` e `markEnterprisePluginReady()` (`src/plugins/enterprise-ready.ts`). No OSS, `enterprisePluginReady` resolve imediatamente.
- `getInitialState()` em `src/app.tsx:56` aguarda `enterprisePluginReady` e depois chama `GPUStackPluginManager.initialize(...)`.
- `src/global.tsx` é executado **antes** de `getInitialState()`, então um `register()` síncrono ali é visível a `initialize`.
- `useLogo` em `src/hooks/use-logo.ts:9-16` chama `enterprisePlugin?.branding?.resolveLogos?.(userSettings, isDarkTheme)` **primeiro**; os PNGs estáticos são fallback.

### Padrão de ENV já existente no projeto

- `config/config.ts:23-25` já usa `define` para expor `process.env.ENABLE_ENTERPRISE` ao bundle do browser.
- `config/utils.ts:21-22` já lê `GPUSTACK_UI_VERSION` / `GPUSTACK_UI_COMMIT_ID` do env do Node em build time.
- Existe `.env` (Umi carrega automaticamente).

### Distinção crucial (build time vs browser)

- Valores usados **dentro de `config/config.ts`** (roda em Node no build): `process.env.X` é direto — **não** precisa de `define`.
- Valores usados em **código do browser** (`src/...`): precisam de `define: { 'process.env.X': JSON.stringify(process.env.X) }` para serem injetados no bundle.

### Passo a passo da Opção B

**1. Tornar `title` e `favicons` configuráveis por ENV em `config/config.ts`:**

```ts
// expandir o define existente (~linha 23)
define: {
  'process.env.ENABLE_ENTERPRISE': process.env.ENABLE_ENTERPRISE,
  'process.env.BRAND_SIDEBAR_LOGO':      JSON.stringify(process.env.BRAND_SIDEBAR_LOGO || ''),
  'process.env.BRAND_MINI_LOGO':         JSON.stringify(process.env.BRAND_MINI_LOGO || ''),
  'process.env.BRAND_SIDEBAR_LOGO_DARK': JSON.stringify(process.env.BRAND_SIDEBAR_LOGO_DARK || ''),
  'process.env.BRAND_MINI_LOGO_DARK':    JSON.stringify(process.env.BRAND_MINI_LOGO_DARK || ''),
},
// ...
favicons: [process.env.BRAND_FAVICON || '/static/favicon.png'],  // Node env, direto
title:    process.env.BRAND_TITLE || 'GPUStack',                 // Node env, direto
```

> `title` e `favicons` rodam em Node (build time) → leem `process.env` direto. Só os `BRAND_*_LOGO*` precisam de `define` porque são lidos no browser (`global.tsx`).

**2. Registrar o branding plugin em `src/global.tsx`** (adicionar ao final do arquivo):

```ts
import { GPUStackPluginManager } from '@/plugins/manager';

const sidebarLogo = process.env.BRAND_SIDEBAR_LOGO;
const miniLogo = process.env.BRAND_MINI_LOGO;
const sidebarLogoDark = process.env.BRAND_SIDEBAR_LOGO_DARK;
const miniLogoDark = process.env.BRAND_MINI_LOGO_DARK;

if (sidebarLogo || miniLogo || sidebarLogoDark || miniLogoDark) {
  GPUStackPluginManager.register('enterprise', {
    branding: {
      resolveLogos: (_userSettings, isDarkTheme) => ({
        sidebarLogo: (isDarkTheme ? sidebarLogoDark : sidebarLogo) || undefined,
        miniLogo: (isDarkTheme ? miniLogoDark : miniLogo) || undefined
      })
    }
  });
}
```

> Registrar sob `'enterprise'` faz `getGPUStackPlugin()` enxergá-lo **sem mudar `use-logo.ts`**. Em OSS nada mais registra sob esse nome, então não há conflito.

**3. Dispor os arquivos de logo em `public/brand/`** e apontar as ENVs:

```
BRAND_TITLE=RuteAI
BRAND_FAVICON=/brand/favicon.png
BRAND_SIDEBAR_LOGO=/brand/sidebar-logo.png
BRAND_SIDEBAR_LOGO_DARK=/brand/sidebar-logo-dark.png
BRAND_MINI_LOGO=/brand/mini-logo.png
```

Coloque em `.env` (Umi carrega sozinho) ou exporte antes de `npm run build` / `npm run dev`.

### Cobertura da Opção B

| Item | Coberto por ENV? | Mecanismo |
| --- | --- | --- |
| Título da aba | ✅ | `BRAND_TITLE` (`config.ts`) |
| Favicon | ✅ | `BRAND_FAVICON` (`config.ts`) |
| Logo sidebar expandida | ✅ | `BRAND_SIDEBAR_LOGO` (+ dark) via plugin → `useLogo` |
| Mini logo sidebar recolhida | ✅ | `BRAND_MINI_LOGO` (+ dark) via plugin → `useLogo` |
| Fallback provider `deployments` | ✅ | via plugin → `useLogo` (`provider-logo.tsx`) |
| **Logo da página de login** | ❌ **NÃO** | `login/index.tsx:1` e `login-form.tsx:1` importam `gpustack-logo.png` **diretamente**, burlando `useLogo` |
| **Logo do modal "Sobre/Versão"** | ❌ **NÃO** | `version-info/index.tsx:1` importa `gpustack-logo.png` **diretamente**, burlando `useLogo` |

### ⚠️ Limitação crítica da Opção B

O hook `useLogo` só é usado na **sidebar** (`Logo.tsx`) e no **fallback de provider** (`provider-logo.tsx`). A página de **login** e o modal de **versão** importam o PNG diretamente, **burlando o plugin**. Logo, a Opção B por si só **NÃO** troca o logo do login nem do "Sobre".

Para cobrir 100% via plugin, seria preciso refatorar esses 3 arquivos para usar `useLogo()`:

- `src/pages/login/index.tsx:1`
- `src/pages/login/components/login-form.tsx:1`
- `src/components/version-info/index.tsx:1`

Trocar cada `import LogoIcon from '@/assets/images/gpustack-logo.png'` por `import { LogoIcon } from '@/layouts/Logo'` (que já usa `useLogo`). Aí a Opção B passaria a cobrir tudo.

### Recomendação final (A vs B)

| Cenário | Recomendação |
| --- | --- |
| "Trocar tudo pela minha marca com mínimo risco" | **Opção A** — substituir 4 arquivos + 1 linha de `title`. Cobre 100% sem tocar em lógica. |
| "Quero logos diferentes por tema claro/escuro" | **Opção B** + **refatorar login/version-info** para usar `useLogo` (3 arquivos). Cobre 100% com tema dinâmico. |
| "Quero configurar tudo via ENV sem mexer em código a cada rebrand" | **Opção B** + refatoração + `define` em `config.ts`. Rebuild muda marca só via ENV/`.env`. |

---

## Resumo dos pontos de edição

| O que | Onde |
| --- | --- |
| Favicon (build) | `config/config.ts:72` + arquivos em `public/static/` |
| Logo principal | `src/assets/images/gpustack-logo.png` (+ 6 referências listadas) |
| Mini logo | `src/assets/images/small-logo-200x200.png` (+ 4 referências listadas) |
| Título da aba | `config/config.ts:80` |
| Override runtime (opcional) | `src/plugins/types.ts:95-98` + `src/hooks/use-logo.ts:9-16` |
