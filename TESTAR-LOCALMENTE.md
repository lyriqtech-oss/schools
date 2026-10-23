# Testar o Schools no Windows

1. Baixe o repositório como ZIP em **Code → Download ZIP** no GitHub e extraia a pasta.
2. Instale o [Node.js LTS](https://nodejs.org/) se ainda não estiver instalado.
3. Dê dois cliques em `INICIAR-SCHOOLS.cmd`. Na primeira vez, o script executa `npm install`.
4. Abra [http://localhost:3000](http://localhost:3000). Mantenha a janela do terminal aberta enquanto testa. Para encerrar, use `Ctrl+C`.

Se a porta 3000 já estiver ocupada, o Next.js poderá escolher 3001. Confira o endereço mostrado no terminal e abra esse endereço no navegador.

## O que pode ser testado

A landing page, navegação, menu mobile, alternância de perfis, exemplos de IA, FAQ e o formulário podem ser explorados localmente. As telas dos perfis e as respostas de IA são simulações identificadas na página. O envio do formulário exige Supabase configurado; sem isso, ele mostra uma mensagem de indisponibilidade.

## Habilitar o formulário

Aplique `supabase/001_demo_leads.sql` em um projeto Supabase. Copie `.env.example` para `.env.local` e preencha `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` no seu computador. Reinicie o servidor. Nunca publique o conteúdo de `.env.local`.
