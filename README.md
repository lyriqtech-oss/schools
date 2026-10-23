# Schools by Lyriq

Primeiro marco: landing page institucional responsiva e interativa. A plataforma escolar ainda não está implementada. As prévias de produto e IA são simulações identificadas como tal.

## Desenvolvimento

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Solicitações de demonstração

1. Crie um projeto Supabase e aplique `supabase/001_demo_leads.sql` no SQL Editor.
2. Copie `.env.example` para `.env.local` e configure `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` somente no servidor.
3. Opcionalmente, configure `SALES_WEBHOOK_URL` para avisar a equipe comercial. O webhook recebe dados pessoais: use apenas um endpoint confiável.

O formulário valida campos no servidor, usa um honeypot básico e grava em `demo_leads` com RLS habilitada e acesso direto revogado a usuários públicos. Sem as variáveis, a rota responde 503 e não finge que salvou o lead. O endpoint ainda precisa de limite de taxa robusto e proteção antiabuso antes de receber tráfego público de escala. O webhook é best effort após a gravação; monitore entregas antes de depender dele operacionalmente.

## Marca

O símbolo mostrado é um espaço reservado com a letra S e borda tracejada. Substitua pelo arquivo vetorial oficial da marca Schools e pela marca Lyriq antes da publicação. A imagem de referência não contém esses arquivos isolados.

## Próximos marcos

- Autenticação, instituições e isolamento entre escolas.
- Turmas, disciplinas, atividades, entregas e correções.
- IA educacional com controle de acesso e revisão humana.

Nenhuma tela ilustrativa nesta landing page deve ser interpretada como módulo interno já disponível.

## Teste local no Windows

Baixe o repositório como ZIP, extraia e execute `INICIAR-SCHOOLS.cmd`. Consulte [TESTAR-LOCALMENTE.md](TESTAR-LOCALMENTE.md) para instruções e limitações.

## Identidade visual

A landing page usa as duas artes de marca fornecidas pelo projeto em `public/brand-*.webp`. A prévia online no Sites é uma versão estática do mesmo design; o formulário comercial permanece dependente da configuração de Supabase no aplicativo Next.js.
