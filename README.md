
# Cast Admins v1.0.1 [Nova Feature](https://github.com/samuelvictorol/Semana1Cast/blob/main/Features/FeatureBuscarDescricao.md)
  <img align="center" alt="Samuel-CSS" height="300px" width="100%" src="/Imagens/logo.png" alt="logo"/>                  

## Projeto Semana 1 Cast
- Por: [Samuel Victor Oliveira Lima](https://github.com/samuelvictorol)
- Data de Entrega: 14/07/2022
- Projeto o qual as instruções estão podem ser consultadas clicando no [Enunciado](https://github.com/samuelvictorol/Semana1Cast/blob/main/Enunciado.pdf).
## Contexto
- "Eu como Administrador, desejo gerenciar os cursos disponíveis na Cast (cadastrar, visualizar, alterar e excluir um curso)."
### Restrições 
- Não será permitida a inclusão de cursos com a data de início menor que a data atual;
- Deve ter um botão “Adicionar”, para a inclusão no curso na lista;
- Deve apresentar mensagem de alerta caso o campo não for preenchido;
- Deve ter um botão “Voltar”, para encerrar o acesso e retorno a tela principal;
- Deve apresentar mensagem de alerta de dados gravados com sucesso;
- Deve apresentar mensagem de alerta de curso já cadastrada;
- Deve permitir a pesquisa pelo nome do curso e período que ele ocorre;
- Não deve permitir a exclusão de cursos já realizados;
- Deve registrar em uma tabela de log a data da inclusão, data da última atualização e usuário responsável.

# Descrição técnica da solução implementada
- No primeiro momento foi elaborado um Diagrama UML que continuou a ser modificado e atualizado ao longo do projeto
- O diagrama foi a base para criação das classes modelos pra criação das entidade pro Entity Framework transformar os modelos em tabelas
- Após a configuração do program.cs criação das Models, Controllers, DbSets, Migrations e Update-database inicializamos o Swagger configurado com o comando 'dotnet watch run'
<div style="display: inline_block"><br>
  <img align="center" height="300px" width="100%" src="/Diagrama UML.png" alt="logo"/>      
 </div> 
 
## Lógica de Negócios
 - A lógica de negócios foi implementada em sua grande maioria pelo FrontEnd, utilizando Angular e TypeScript. Isso se deve por ser a tecnologia que tive mais familiaridade
 - Grande parte do FrontEnd foi feito na mão à fim de deixar um projeto mais interativo e de fácil uso para o usuário final
 - As requisições HTTP, foram feitas utilizando o HttpClient do angular common http. As funções HTTP foram criadas no service e podem ser utilizadas em qualquer componente configurado no modulo 

## Git Branchs
- Para melhor organização do projeto, foi utilizado o Git para versionamento de código. E duas branchs foram criadas: main e development.
- A branch 'development' era onde estava sendo desenvolvido o projeto e apenas depois de ser commitada ela poderia ser 'mergeada' com a branch main (master)

<div style="display: inline_block"><br>
  <img align="center" height="300px" width="40%" src="/Imagens/git.png" alt="logo"/>      
  <img align="center"  height="300px" width="40%" src="/Imagens/gitBranchs.png" alt="logo"/>                  
 </div>

# O Backend
- Nesse Projeto foi utilizado a técnica de Code First, que consiste em fazer primeiro o código fonte.
- Foi utilizado o EntityFramework para construções de tabelas e o Swagger para Requisições HTTP.
- O banco de dados escolhido foi o SQLServer

<div style="display: inline_block"><br>
  <img align="center"  height="300px" width="40%" src="/Imagens/FrameworkBackend.png" alt="logo"/>                  
  <img align="center" height="300px" width="40%" src="/Imagens/backEnd.png" alt="logo"/>      
  <img align="center"  height="300px" width="40%" src="/Imagens/swagger.png" alt="logo"/>   
  <img align="center"  height="300px" width="40%" src="/Imagens/Categorias_ssms.png" alt="logo"/>                  
 </div>

# O FrontEnd
- Para esse projeto foi utilizado o Angular como Framework principal
- Bibliotecas e ferramentas externas como [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/), [Animate CSS](https://animate.style/), [Google Fonts](https://fonts.google.com/), [Box-Shadow Generator](https://html-css-js.com/css/generator/box-shadow/) e [UIGradients](https://uigradients.com/)
- As telas foram criadas de modo que sejam facilmente utilizadas, rápidas, interativas e intuitivas:
<div style="display: inline_block"><br>
  <img align="center" height="300px" width="45%" src="/Imagens/loginSucces.png" alt="logo"/>      
  <img align="center" height="300px" width="45%" src="/Imagens/paginaInicial.png" alt="logo"/>      
  <img align="center" height="300px" width="45%" src="/Imagens/telaEdit.png" alt="logo"/>      
  <img align="center" height="300px" width="45%" src="/Imagens/telaAdd.png" alt="logo"/>                  
</div>

## Validações e Testes
- As Validações de Campo de Formulários foram feitas via TypeScript
- Os testes serão mostrados durante a Apresentação do Projeto 

### Exemplo de Validação no Login:
 FrontEnd:
<div style="display: inline_block"><br>
  <img align="center" height="300px" width="40%" src="/Imagens/loginfail.png" alt="logo"/>      
  <img align="center"  height="300px" width="40%" src="/Imagens/loginSucces.png" alt="logo"/>                  
 </div>
<br>
 BackEnd:
<div style="display: inline_block"><br>
  <img align="center" height="300px" width="40%" src="/Imagens/admin_swagger.png" alt="logo"/>      
  <img align="center" height="300px" width="40%" src="/Imagens/admin_ssms.png" alt="logo"/>                  
</div>
 
## Tecnologias Utilizadas
 <div style="display: inline_block"><br>
  <link align="center" height="40" width="60 rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
  <img align="center" height="40" width="60"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
  <img align="center" alt="Samuel-ts" height="40" width="60" src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-plain.svg">
  <img align="center" alt="Samuel-ts" height="40" width="60" src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" alt="Samuel-Js" height="40" width="60" src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="Samuel-CS" height="40" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg">   
  <img align="center" alt="Samuel-HTML" height="40" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Samuel-CSS" height="40" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Samuel-SQLSERVER" height="40" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" />
  <img align="center" alt="Samuel-GIT" height="40" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
  <img align="center" alt="Samuel-BS" height="40" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
  <img align="center" alt="Samuel-SG" height="40" width="100" style="margin-top:10px" src="https://www.mocklab.io/images/screenshots/swagger-logo2.png" />
</div>



