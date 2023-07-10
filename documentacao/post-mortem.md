# _Post Mortem_ - HEART: HUB FGA Inovação 💜


## Histórico de revisão

| Data       | Versão | Modificação                                                 | Autor(a)                                               |
| :--------- | :----- | :---------------------------------------------------------- | :----------------------------------------------------- |
| 05/07/2023 | 0.1    | Criação do documento                                        | [@izabellaalves](https://github.com/izabellaalves)     |
| 06/07/2023 | 0.2    | Criação da estrutura do documento                           | [@algorithmorphic](https://github.com/algorithmorphic) |
| 10/07/2023 | 0.3    | Criação_protótipo/contribuição no post-mortem               | [@Lucas13032003](https://github.com/Lucas13032003)     |
| 10/07/2023 | 0.4    | Adição/contribuição em Sentimentos da Equipe                | [@algorithmorphic](https://github.com/algorithmorphic) |


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
Na minha visão e opinião, Métodos de Desenvolvimento de Software (MDS), sem dúvidas, é uma das disciplinas mais importantes e desafiadoras de todo o curso de Engenharia de Software oferecido pela Universidade de Brasília - UnB. Construir um software, mesmo que em equipe, de fato, não é uma tarefa simples. Talvez a coisa mais importante a se desenvolver aqui, antes mesmo do "trabalho em equipe" propriamente dito, seja a comunicação. É imprescindível que a sua equipe estabeleça uma comunicação efetiva entre seus membros, visto que o diálogo será necessário na maioria das etapas no decorrer do desenvolvimento de um projeto de software, como, por exemplo, no planejamento e tomada de decisões, na divisão de tarefas e, principalmente, nos feedbacks e interações trazidos por cada integrante do time. Uma equipe com uma boa comunicação, com toda a certeza, conseguirá obter melhores resultados no desenvolvimento de projetos como os propostos em MDS com a professora Carla Rocha ([@RochaCarla](https://github.com/RochaCarla)). Nesta disciplina pude aproveitar a oportunidade de estar desenvolvendo e/ou melhorando habilidades como, por exemplo, a comunicação e o trabalho em equipe, e sou muito grato por isso, pois, tratam-se estas de habilidades comportamentais (as chamadas "[soft skills](https://pt.wikipedia.org/wiki/Soft_skills)") realmente importantes tanto para a nossa carreira como futuros(as) engenheiros(as) de software quanto para a nossa vida pessoal e em sociedade, no geral.

Hoje consigo compreender a importância de se fazer parte de uma equipe que tenha se empenhado em construir algo grande e o quão incrível é conseguir enxergar, ao final do semestre, a diferença que a contribuição de cada integrante do time/equipe faz no resultado de uma possível entrega final ou release de um projeto. É fascinante como que, aos poucos e com constância, torna-se possível realizar feitos grandiosos!

### [@esmsena](https://github.com/esmsena)
Sempre ouvi comentários sobre como este projeto era desafiador e exigia muito tempo, e realmente pude entender o significado dessas palavras. Ao longo dessa jornada, dediquei uma quantidade significativa de tempo e adquiri um vasto conhecimento. No entanto, percebi que o aspecto mais importante que moldou essa experiência foi ter uma equipe comprometida em aprender e crescer juntos. Sem uma equipe colaborativa, o projeto não avança e a evolução se torna limitada tanto em termos didáticos quanto práticos.

Através desse projeto, minha perspectiva em relação ao desenvolvimento de projetos mudou drasticamente. Consegui me aprimorar e descobri que existem diversos métodos eficientes que podem auxiliar nesses processos. Além disso, aprendi a adotar uma abordagem mais profissional em relação à apresentação e ao produto. Sou imensamente grata por tudo o que aprendi aqui e sei que levarei e aplicarei esses conhecimentos em todos os aspectos da minha vida.

### [@izabellaalves](https://github.com/izabellaalves)
Desenvolver um projeto de software com novas tecnologias para aprender, e em equipe, é trabalhoso e exige muito de nós profissionalmente e interpessoalmente, e isso é ótimo, porque é disso que se trata o desenvolvimento de qualquer software que existe. Sendo assim, aproveite a oportunidade para aprender a trabalhar em grupo e confiar no trabalho das outras pessoas, veja MDS como uma oportunidade de melhorar tecnicamente como engenheiro de software, mas veja também como uma forma de aprender e colaborar com outras pessoas que com certeza terão muito para te oferecer. 

### [@Lucas13032003](https://github.com/Lucas13032003)
Durante a disciplina de Métodos de Desenvolvimento de Software e o desenvolvimento do projeto Heart, experimentei uma mistura de desafios e sentimentos gratificantes. No início, enfrentei certa dificuldade ao lidar com a tecnologia React, o que inicialmente me deixou inseguro. Além disso, havia uma preocupação constante em relação à organização do meu tempo, especialmente para equilibrar as demandas do projeto com outras disciplinas da faculdade.

No entanto, à medida que me envolvia cada vez mais com o projeto Heart, passei a apreciar muito a experiência. Trabalhar nesse projeto trouxe um senso de propósito e realização, pois pude contribuir para a criação de algo que poderia impactar positivamente os usuários e a comunidade acadêmica.

Apesar do desejo de ter tido mais tempo para aprimorar o Heart, reconheço que os recursos temporais eram limitados. Mesmo assim, busquei fazer o meu melhor dentro das circunstâncias, explorando diferentes funcionalidades, refinando o design e realizando testes para garantir a qualidade do produto.

Olhando para o futuro, tenho o interesse em continuar buscando melhorias para o Heart. Uma ideia que me motiva é adaptar o projeto para ser compatível com telas mobile, ampliando o alcance e a acessibilidade do produto. Pretendo explorar essa possibilidade, aplicar novos conhecimentos adquiridos e continuar contribuindo para o crescimento e o aprimoramento contínuo do Heart.

### [@LucasOliveiraDiasMarquesFerreira](https://github.com/LucasOliveiraDiasMarquesFerreira)

### [@lucassouzs](https://github.com/lucassouzs)
No decorrer da disciplina de Métodos de Desenvolvimento de Software, enfrentei diversos desafios iniciais com as principais tecnologias utilizadas durante a produção do Heart, o que gerou insegurança. Também precisei me preocupar com a organização do meu tempo, equilibrando as demandas do projeto com outras disciplinas da faculdade. No entanto, à medida que me envolvia cada vez mais com o projeto Heart, passei a valorizar a experiência gratificante que ele proporcionava, trazendo propósito e realização ao contribuir para algo que poderia impactar positivamente os usuários e a comunidade acadêmica.

Apesar das limitações temporais, procurei fazer o meu melhor dentro das circunstâncias, explorando diferentes funcionalidades, refinando o design e realizando testes para garantir a qualidade do produto. Olhando para o futuro, tenho interesse em continuar aprimorando o Heart, adaptando-o para ser compatível com telas mobile, ampliando sua acessibilidade e alcance. Pretendo aplicar novos conhecimentos adquiridos e contribuir para seu crescimento e aprimoramento contínuo.

### [@Maryyscreuza](https://github.com/Maryyscreuza)
Trabalhar no projeto HEART foi incrivelmente gratificante e enriquecedor. Desde o início, sabíamos que estávamos embarcando em um projeto com impacto positivo na comunidade acadêmica da FGA e na população em geral. Ver o HEART ganhar vida, com o esforço conjunto da equipe, foi emocionante. Aprendemos habilidades valiosas ao utilizar o React, explorar técnicas de web scraping e colaborar em equipe para encontrar soluções inovadoras. 

Aprender a otimizar o tempo entre máterias da faculdade e o projeto foi a parte que mais me ensinou, pois a cada semana é um aprendizado novo e uma organização diferente, sendo necessária devida atenção ao projeto. A comunicação é crucial em um projeto em equipe, sem ela com certeza não conseguiriamos entregar o trabalho completo.

Em geral, acreditamos que o HEART deixará um legado duradouro, fortalecendo a conexão entre a faculdade e a comunidade e estamos felizes em contribuir para a disseminação do conhecimento. Trabalhar no projeto HEART foi verdadeiramente gratificante e nos inspira a buscar novos desafios e oportunidades de impacto positivo.
