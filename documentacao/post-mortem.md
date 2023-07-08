# _Post Mortem_ - HEART: HUB FGA Inovação 💜


## Histórico de revisão

| Data       | Versão | Modificação                                                 | Autor(a)                                               |
| :--------- | :----- | :---------------------------------------------------------- | :----------------------------------------------------- |
| 05/07/2023 | 0.1    | Criação do documento                                        | [@izabellaalves](https://github.com/izabellaalves)     |
| 06/07/2023 | 0.2    | Criação da estrutura do documento                           | [@algorithmorphic](https://github.com/algorithmorphic) |


## Introdução
Este documento apresenta o post mortem do projeto "Heart - Hub FGA Inovação", desenvolvido como trabalho da disciplina de Métodos de Desenvolvimento de Software. O projeto teve como objetivo criar uma plataforma digital chamada Heart, dedicada a promover a interação e o compartilhamento de informações entre estudantes, professores e a comunidade acadêmica em geral da Faculdade do Gama (FGA).

A plataforma Heart foi concebida como um espaço virtual que reúne uma variedade de recursos e funcionalidades com o intuito de auxiliar no desenvolvimento acadêmico e profissional dos seus usuários. Seu objetivo era proporcionar um ambiente colaborativo que facilitasse a troca de conhecimentos, a divulgação de eventos e oportunidades, além de promover a conexão entre os membros da comunidade acadêmica da FGA.

## Pontos fortes e pontos fracos

### Pontos fortes
- Conseguimos achar bons exemplos de HUBs para nos inspirar, então tínhamos uma ideia muito clara do que achávamos interessante num HUB, e no que achávamos que devia melhorar.
- Reunimos nossos requisitos rapidamente, então ficou muito claro pra equipe o que fazer.
- Os dois grupos: web scraping e frontend aprenderam as tecnologias sem muitos problemas.
- Os dois grupos, apesar de trabalhar em áreas separadas, se ajudavam e conversavam sempre, então estávamos por dentro do trabalho um do outro.

### Pontos fracos
- As vezes estipulávamos errado o tempo de duração de uma tarefa, e acabávamos saindo do cronograma previsto.
- Não conseguimos achar um horário de reunião realmente bom para todos, etão era muito difícil reunir todo o grupo numa reunião.
- Perdemos muito tempo tentando resolver problemas muito complexos que devíamos ter substituído por soluções mais simples.


## Metodologia e Processo
O projeto Heart Hub FGA Inovação adotou uma metodologia que envolveu uma combinação de pesquisa, estudo e trabalho em equipe, que se desdobrou em diferentes etapas.

Inicialmente, buscamos inspiração em hubs de inovação de outras universidades, analisando suas funcionalidades e requisitos. A partir dessa análise, reunimos os requisitos específicos para o nosso próprio site. Essa fase inicial foi essencial para estabelecer uma visão clara do que queríamos alcançar com o Heart.

Em seguida, dividimos a equipe em grupos, cada um com uma área de foco específica. Enquanto alguns membros se dedicaram ao estudo aprofundado de web scraping, aprendendo as melhores práticas e técnicas necessárias para coletar dados sobre a Faculdade do Gama, outros se concentraram no estudo e desenvolvimento de React, uma tecnologia amplamente utilizada para construir interfaces de usuário interativas.

Essa divisão permitiu que cada equipe se especializasse em sua área de atuação, adquirindo conhecimentos e habilidades específicas. Ao mesmo tempo, o trabalho em equipe e a comunicação constante foram fundamentais para garantir a integração entre as equipes e a sinergia no desenvolvimento do projeto.

Após o período de estudos e preparação, a equipe avançou para a etapa de desenvolvimento propriamente dito. Uma equipe se concentrou no web scraping, implementando técnicas para coletar e organizar os dados relevantes sobre a Faculdade do Gama. Enquanto isso, outra equipe se dedicou inteiramente ao frontend, utilizando o React para criar uma interface atraente e amigável para os usuários do Heart.


## Tecnologias utilizadas
- **BeautifulSoup**: biblioteca em Python que permite analisar e extrair informações de documentos HTML e XML. Usada para realizar a raspagem dos dados usados no projeto.
  
- **JSON**: formado de dados usada para armazenar os dados extraídos através da biblioteca BeautifulSoup.

- **React.js**: permite a criação de componentes reutilizáveis e eficientes, os quais facilitam a construção de aplicativos web complexos e escaláveis. Usado para criar todo o frontend da aplicação e consumir os arquivos JSON.

- **Selenium**: biblioteca popular de automação de testes para aplicações web. Ela permite que os desenvolvedores simulem a interação de um usuário com um navegador, executando ações como clicar em botões, preencher formulários, navegar por páginas e realizar verificações automatizadas. Usada nos testes de integração da aplicação.

- **Pytest**: framework de teste em Python que simplifica e aprimora a escrita e execução de casos de teste.

## Entrega da R1
A primeira release do Heart, Release Notes v1.0.0, foi entregue no dia 08 de março de 2023 e contém os seguintes recursos: 
- Protótipo de alta fidelidade.
- Implementação inicial do software.
- Raspagem de dados de professores, empresas juniores e equipes de competições.
- Adição do componente sidebar.
- Criação das rotas de cada página da aplicação.
## Entrega da R2


## Recomendações para os próximos semestres
Olá e bem-vindos à disciplina de Métodos de Desenvolvimento de Software (MDS)! Nesta jornada, vocês terão a oportunidade de trabalhar em projetos interessantes. A primeira recomendação da nossa equipe é escolher um projeto com uma temática que vocês gostem e realmente acreditem. Quando falamos em acreditar, estamos nos referindo à convicção de que o projeto será útil e impactará positivamente as pessoas.

Desde o início do Heart, nos animamos com a ideia de desenvolver um projeto que levasse para mais pessoas todo o potencial que a FGA tem a oferecer. Uma das diretrizes que norteou nosso trabalho foi sempre nos perguntarmos como tornar o projeto mais acessível e explicativo para a população. Sugerimos que vocês também busquem exemplos de projetos semelhantes ao que terão que desenvolver. Façam pesquisas no Google e explorem repositórios no GitHub. Reúnam-se como equipe para analisar esses exemplos, identificar o que desejam ter em seu projeto e o que pode ser aprimorado. Isso ajudará a ter uma visão mais clara do que precisa ser feito.

No início do projeto, recomendamos documentar o máximo possível. Escrevam o objetivo do projeto, desenvolvam personas que representem os usuários do produto e pensem em casos de uso relacionados ao projeto. Não se apressem em começar a desenvolver imediatamente. É crucial ter uma compreensão clara do que precisa ser feito.

Quanto ao desenvolvimento, definam áreas específicas para cada membro dentro do grupo. Estabeleçam duplas ou trios responsáveis por determinadas partes, como front-end, back-end, entre outras. No entanto, mesmo que estejam divididos, comuniquem-se o máximo possível. Isso evitará que alguém atropele o trabalho do outro. Lembrem-se de que a colaboração e a comunicação são fundamentais para o sucesso do projeto.

Por fim, não entrem em desespero. No início, tudo pode parecer desafiador, mas ao longo da disciplina, as coisas vão se organizando. No entanto, é importante lembrar que o desenvolvimento de software é um trabalho contínuo. A cada sprint, esforcem-se para entregar o necessário, mas estejam cientes de que o progresso é gradual.

Desejamos a todos muito sucesso neste projeto e ao longo da disciplina de Métodos de Desenvolvimento de Software. Aproveitem a experiência e aprendam o máximo possível.  :purple_heart:

## Sentimentos da Equipe

### [@algorithmorphic](https://github.com/algorithmorphic)

### [@esmsena](https://github.com/esmsena)

### [@izabellaalves](https://github.com/izabellaalves)

### [@Lucas13032003](https://github.com/Lucas13032003)

### [@LucasOliveiraDiasMarquesFerreira](https://github.com/LucasOliveiraDiasMarquesFerreira)

### [@lucassouzs](https://github.com/lucassouzs)

### [@Maryyscreuza](https://github.com/Maryyscreuza)


## Conclusão
