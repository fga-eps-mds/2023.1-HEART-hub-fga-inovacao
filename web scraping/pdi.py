import json

pdi = [
    {
        "nome": "PROJETO CATAVENTO",
        "descrição": "O Projeto Catavento tem o objetivo de promover a conscientização acerca do consumo e produção sustentáveis de energia com a participação de alunos do ensino médio de instituições do entorno do Campus Gama dentro de um contexto de sistemas energéticos renováveis com destaque para as fontes de energia eólica e solar. Serão desenvolvidas atividades articuladas em três eixos temáticos: meio ambiente, energia e Engenharia com o apoio de estudantes de graduação envolvendo também atividades de pesquisa e ensino."
    },
    {
        "nome": "Feira do Empreendorismo em Cálculo 3",
        "descrição": "A Feira do Empreendorismo (FE) consiste na exposição criativa de um produto educacional baseado na aprendizagem de qualquer Unidade estudada no curso MAT0027-Cálculo 3 para a turma T10 do semestre 2.2022. Essa metodologia faz parte da premissa Maker Centered Learning, ou seja, o aprendizado é mais significativo a partir da construção de algo relevante para você mesmo e/ou para a sua comunidade."
    },
    {
        "nome": "Feira de Inovação Tecnológica (FIT) da Faculdade UnB Gama (FGA)",
        "descrição": "A Feira de Inovação e Tecnologia tem como objetivo expor à comunidade acadêmica e à comunidade externa, os projetos de Inovação e Engenharia desenvolvidos pelos estudantes de graduação no âmbito das disciplinas que compõe os 5 cursos oferecidos pela Faculdade UnB Gama, a saber: Engenharia de Energia, Automotiva, Eletrônica, Aeroespacial e de Software."
    },
    {
        "nome": "GEOACÚSTICA SUBMARINA",
        "descrição": "Passar conceitos gerais dos métodos geofísicos acústicos usados na pesquisa de áreas submersas (oceanos, mares, rios, lagos, represas, etc...) e sobre as metodologias de classificação acústica do fundo marinho."
    },
    {
        "nome": "Eletrificação rural e desenvolvimento local",
        "descrição": "O presente projeto de extensão tem como objetivo divulgar e disponibilizar tecnologias de geração decentralizado de energia a partir de fontes renováveis para comunidades rurais, além de desenvolver soluções tecnológicas apropriadas para uso da energia em apoio ao desenvolvimento local dessas comunidades. Para atingir os objetivos a metodologia será de trabalhar com estudantes extensionistas o acompanhamento de diversas instalações de geração alternativa de energia, por meio de estudos dirigidos, capacitação dos estudantes e as comunidades envolvidos, além de prestação de serviços tecnológicas às comunidades. Espera se que essa ação de extensão tem como resultado a popularização das tecnologias de geração de energia elétrica a partir de fontes renováveis por meio de pico e micro usinas nas comunidades e empreendimentos rurais e dessa forma incentivar seu desenvolvimento local usando a energia para apoiar atividades econômicas que possam gerar renda ou mais valor a produção local."
    },
    {
        "nome": "APLICATIVO “PAULA” DE ALFABETIZAÇÃO INICIAL",
        "descrição": "O aplicativo, nomeado de PAULA - Paranoá Alfabetizando Usando Letramento Analógico, tem um processo de ensino-aprendizagem voltado à população específica do Paranoá, de semi e analfabetos que se utiliza de aparelhos celulares, não necessitando de conexão de rede Internet, apenas para sua instalação. A ideia é que os usuários realizem as simulações individualmente, sem constrangimentos, quantas vezes quiser, onde estiver, de forma rápida e fácil, promovendo inerentemente alfabetização e interesse nos estudos promovendo processo de autoestima, dignidade e cidadania. Os estudantes/usuários do aplicativo PAULA tiveram numa primeira versão, disponibilizada na Playstore, oportunidade apenas de ler algumas palavras, de acordo com o Método Paulo Freire. Foram criadas telas para aprendizado das vogais e palavras básicas de acordo com o cotidiano do Paranoá."
    },
    {
        "nome": "Projeto Workshop Biogama",
        "descrição": "O Projeto Workshop Biogama, vinculado ao Programa Biogama [2], pretende despertar a consciência ambiental da comunidade do Distrito Federal por meio de um workshop, cujo principal objetivo é resgatar um diálogo entre o ensino médio e a universidade, com motivação no descarte correto do óleo usado. Uma demonstração do impacto causado pelo descarte incorreto desse resíduo no ambiente urbano será apresentada, assim como modelos de reciclagem e reuso, visando minimizar os impactos ambientais e a depreciação de recursos naturais. Além da proposta ambiental, a ideia central é dialogar com os estudantes de ensino médio, despertando o interesse pela pauta ambiental e atraindo esses estudantes para as áreas multidisciplinares envolvendo as Engenharias do Campus do Gama."
    },
    {
        "nome": "Semeando futuras engenheiras",
        "descrição": "A ideia deste projeto extensionista tem a intenção de responder os seguintes questionamentos: Como motivar estudantes do sexo feminino a progredir no curso de Engenharias? E como evidenciar a importância das disciplinas de Cálculo (1, 2 e 3) para o curso de Engenharias? A resposta da primeira pergunta é motivar as alunAs através de exemplos de mulheres cientistas que fizeram história na área de Ciências Exatas (por exemplo, Marie Curie, Ada Lovelace, Katherine Johnson, etc). Já o feedback da segunda interrogação é ressaltar aplicações cotidianas na área de engenharias envolvendo conceitos das disciplinas referidas."
    },
    {
        "nome": "Clube de Ciências: definição voltada à iniciação científica",
        "descrição": "Este trabalho destina-se a construir um conceito de Clube de Ciências voltado para a iniciação científica numa revisão de literatura para o desenvolvimento de uma pesquisa que trata sobre um projeto de extensão executado no âmbito das instituições UnB campus Gama e Coordenação Regional de Ensino do Gama, onde serão desenvolvidas todas as ações de um Clube de Ciências como projeto de extensão."
    },
    {
        "nome": "APLICATIVO “MigoC2” PARA ENSINO DE CÁLCULO 2",
        "descrição": "Este projeto tenta minimizar o sofrimento dos estudantes proporcionando aprendizado lúdico para devida assimilação de conteúdos através da programação e desenvolvimento de softwares voltados à programação em plataformas de sistemas para Mobile que usam Sistema Android e Apple. é a continuidade do Projeto chamado MIGOC2. O Aplicativo tem apenas a funcionalidade de realizar pesquisas de fórmulas e temas ligados à matemática básica, cálculo 1 e cálculo 2, mas a ideia é dar continuidade com a inserção de exemplos e formas de resolver exercícios dessas áreas."
    },
    {
        "nome": "Programa BIOGAMA",
        "descrição": "O Programa BIOGAMA é um programa de extensão que existe a 12 anos no Campus do Gama. O tema central dessa ação extensionista é promover, através de palestras e oficinas realizadas em eventos e feiras locais do Distrito Federal, a informação acerca da conscientização ambiental e do descarte correto e reuso do óleo residual de fritura. Além da transformação dessa matéria-prima em produtos com maior valor agregado (sabão, vela e biodiesel), também se desenvolve diversos conceitos científicos e sociais nos alunos e na comunidade de Brasília. O Programa BIOGAMA conta com o suporte de professores dos Campi Darcy Ribeiro, da FGA e da FUP, através de um arranjo interinstitucional e multidisciplinar, o qual permite o envolvimento de docentes e discentes em diversas áreas do conhecimento como: Engenharia de Energia, Química, Ciências Naturais e Licenciatura em Educação do Campo."
    }
]
