# Arquitetura

## Introdução
O objetivo deste relatório é documentar o processo de arquitetura do projeto Heart - Hub FGA Inovação, as tecnologias utilizadas em cada camada e suas funcionalidades.

## Arquitetura do Projeto
O projeto consiste em três partes principais: a extração de dados por web scraping utilizando Python, a criação de um front-end utilizando React e a hospedagem do site utilizando git pages. Vamos entender cada uma delas separadamente.

### Extração de Dados por Web Scraping em Python
O HEART utiliza técnicas de web scraping em Python para coletar informações de fontes relevantes relacionadas à Faculdade do Gama. O web scraping é realizado seguindo as seguintes etapas:

1. Identificação das Fontes de Dados: Foram identificadas as fontes de dados que contêm as informações necessárias para o HEART. Como o site oficial da UnB - Gama (https://fga.unb.br/), e o SIGAA (https://sigaa.unb.br/) para a extração de dados.
2. Análise da Estrutura das Páginas: As páginas das fontes de dados foram analisadas para entender a estrutura HTML e localizar os elementos que contêm as informações desejadas. Isso é feito usando ferramentas como o inspetor de elementos do navegador.
3. Bibliotecas de Web Scraping: Foram utilizadas bibliotecas Python para web scraping, como BeautifulSoup ou Selenium. Essas bibliotecas fornecem métodos e funcionalidades para navegar pelo código HTML, encontrar os elementos desejados e extrair as informações relevantes.
4. Extração e Transformação dos Dados: Com base na estrutura das páginas e nos elementos identificados, são escritos scripts em Python para percorrer as páginas, encontrar e extrair as informações necessárias. Os dados extraídos foram então transformados em formato JSON para serem utilizados no front-end do HEART.

### Front-End com React
No HEART, o front-end é desenvolvido utilizando o React, uma biblioteca JavaScript popular para a construção de interfaces de usuário interativas. O React permite criar componentes reutilizáveis e uma interface de usuário responsiva, proporcionando uma experiência agradável aos usuários. Aqui estão as principais etapas da arquitetura do front-end:

1. Componentes React: O projeto HEART é dividido em componentes React. Cada componente representa uma parte específica da interface do usuário, temos as páginas de professores, editais de acesso, empresas juniores, equipes de competição, premiações e P&D&I (Pesquisa, Desenvolvimento e Inovação) onde constam laboratórios e iniciativas. Esses componentes podem ser reutilizados e combinados para construir a interface completa do HEART.
2. Estilização: A estilização do HEART foi implementada utilizando CSS. Isso permite que a interface seja visualmente atraente e coerente em todos os componentes e páginas.
3. Integração com Dados em JSON: Os dados extraídos e transformados em formato JSON por meio do web scraping (explicado na seção anterior) são utilizados para preencher os componentes React. Esses dados são passados como propriedades (props) para os componentes, permitindo que eles sejam exibidos corretamente na interface.

### Implementação no Git Pages
Para hospedar o HEART, o projeto utiliza o Git Pages, um serviço de hospedagem fornecido pelo Git. O Git Pages permite que o site seja implantado de forma simples e acessível por meio de um link público. Dessa forma, o HEART pode ser compartilhado e acessado facilmente pela população.

## Conclusão
Em conclusão, a arquitetura do projeto HEART, sem a necessidade de um back-end e banco de dados, oferece uma solução eficiente e de baixo custo para ser utilizada pela Universidade de Brasília - Campus Gama (UnB-Gama). Ao utilizar o React no front-end e o web scraping em Python para coletar e transformar os dados em formato JSON, é possível fornecer uma plataforma acessível e informativa sem incorrer em despesas adicionais.

A ausência de um back-end e banco de dados reduz a complexidade da arquitetura, simplificando o desenvolvimento e a manutenção do projeto. Ao optar por hospedar o site no Git Pages, você pode disponibilizar a plataforma de forma gratuita, garantindo que o acesso às informações seja aberto a todos os usuários interessados.

Portanto, a arquitetura do projeto HEART, sem um back-end e banco de dados, é uma solução viável, econômica e adequada para a Universidade de Brasília - Campus Gama. Ela permite que o hub de inovação seja desenvolvido, implantado e mantido de forma acessível e eficiente, conectando o conhecimento e as atividades desenvolvidas na faculdade com a população.
