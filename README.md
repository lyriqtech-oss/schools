# Schools by Lyriq

Landing page e primeiro módulo navegável da plataforma escolar. Acesse `/plataforma` para testar a experiência com dados fictícios. Na prévia hospedada, use o botão **Testar plataforma**.

## O que funciona nesta etapa

- Painel por perfil: aluno, professor, coordenação e responsável.
- Professor publica atividades, aluno envia uma resposta e professor registra uma devolutiva.
- Coordenação publica comunicados e adiciona eventos à agenda.
- Busca de atividades e indicadores atualizados conforme as ações.
- Dados da demonstração persistem apenas no `localStorage` do navegador.

A troca de perfis é exclusiva da demonstração. **Não há autenticação, autorização, isolamento de escolas ou banco de dados.** Não use dados reais de estudantes nesta versão. Os módulos são a base visual e de fluxo para integrar o banco e autenticação no próximo marco.

## Desenvolvimento

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Próximo marco com banco de dados

Modelos iniciais: instituição, usuário e vínculo com instituição/perfil, turma, matrícula, disciplina, atividade, entrega, devolutiva, comunicado e evento. A interface atual agrupa isso em `Activity`, `Notice` e `Event` dentro de `app/plataforma/Platform.tsx`; substitua o armazenamento local por serviços de leitura/gravação com autorização no servidor. Alunos e responsáveis devem ver apenas seus vínculos. Professores só podem gerir turmas atribuídas a eles. A coordenação deve ficar restrita à própria instituição.

O projeto também contém uma rota separada para solicitação de demonstração em `app/api/demo-requests`; ela exige as variáveis `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` e não faz parte do módulo da plataforma.

## Marca

Os arquivos `public/brand-schools.webp` e `public/brand-lyriq.webp` são recortes transparentes das artes fornecidas.
