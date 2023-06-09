
import json

equipes = [
    {
        "nome": "Titans",
        "site": "https://linktr.ee/robotictitans",
        "descrição": "O projeto Titans é uma equipe de competição composta por estudantes da Universidade de Brasília que busca aplicar, de forma prática, os conhecimentos teóricos adquiridos nos cursos de engenharia, tanto em aspectos de hardware quanto de software e estruturais. Por esse motivo, o projeto inclui alunos de todas as engenharias do campus Gama. A equipe Titans oferece cursos para os estudantes durante as semanas universitárias, além de propagar o conhecimento para fora da universidade, beneficiando alunos de escolas públicas por meio do desenvolvimento de aulas e projetos de robótica. Dessa forma, a equipe busca fomentar nos jovens o desejo pela engenharia e pela universidade. O desenvolvimento desses projetos coloca em prática conceitos de engenharia, empreendedorismo e metodologias organizacionais. O projeto foi iniciado em 30 de novembro de 2016 por alunos e professores da UnB que fundaram a equipe. Atualmente, a equipe conta com 29 membros, incluindo o professor orientador Gerardo Antonio Idrobo Pizo e alunos voluntários de outras universidades.",
        "instagram": "https://www.instagram.com/robotictitans/"
        },
    {
        "nome": "EDRA",
        "site": "",
        "descrição": "A Equipe de Robótica Aérea é uma equipe com o objetivo de projetar e construir drones autônomos, fomentando o desenvolvimento tecnológico do Distrito Federal. Além disso, atua na capacitação técnica de estudantes e promove a Universidade de Brasília internacionalmente, através da participação em diversas competições de caráter internacional. A primeira competição da equipe foi a 24 Hours Hover Machine Conceptual Design, promovida pela American Helicopter Society - AHS - International no ano de 2017. No ano seguinte a EDRA participou da Cobruf Drones e em 2019 da International Micro Air Vehicle Conference and Competitions. A equipe é composta por estudantes de engenharia da Universidade de Brasília campus Gama, que trabalham nas áreas de design estrutural, eletrônica, aerodinâmica e propulsão, estabilidade e controle, e software. A pesquisa na área de drones é de fácil aplicação em inúmeros setores, desde entregas e serviços até o uso militar. Nos últimos anos, a pesquisa vem tomando proporções cada vez maiores e englobando as mais diversas inovações, como o uso da inteligência artificial no imageamento. A EDRA contribui para o avanço de um campo de estudo recente, promissor e versátil. Para isso, é necessária a pesquisa contínua e o aperfeiçoamento desta tecnologia.",
        "instagram": "https://www.instagram.com/edraunb/"
        },
    {
        "nome": "UnBaja",
        "site": "https://beacons.ai/unbaja",
        "descrição": "O projeto Baja SAE visa o desenvolvimento de um protótipo monoposto de competição fora de estrada, com o intuito de propiciar capacitação e desenvolvimento prático aos estudantes de engenharia para o mercado de trabalho através de projetos que vão do conceito inicial a construção do protótipo. São projetados sistemas de suspensão, freios, estrutura, transmissão, feito acerto de motores e desenvolvimento ergonômico. Os alunos fazem procedimentos de testes, modelagem e simulações computacionais conforme o regulamento proposto pela SAE (Sociedade de Engenharia Automotiva). Participam de competições enfrentando equipes de outras universidades com intuito de ter a melhor classificação e competir fora do Brasil. O trabalho neste projeto ajuda a desenvolver competências e habilidades professionais como trabalho em equipe, empreendedorismo, inovação. Durante o projeto de extensão os alunos, além de se preparar para a competição, interagem com a comunidade fazendo apresentações sobre seu trabalho para incentivar o ingresso às engenharias, ministram cursos e palestras de caráter técnico, participam da mostra de cursos, entre outros.",
        "instagram": "https://www.instagram.com/unbaja/"
        },
    {
        "nome": "FGR",
        "site": "https://linktr.ee/fgr_unb",
        "descrição": "FGR é Faculdade do Gama Racing, somos equipe de competição que  projeta e constrói um carro fórmula elétrico para participar da competição Fórmula SAE Brasil. Nascemos do ensino e da pesquisa na UnB e nossa missão é gerar soluções mais sustentáveis para o ecossistema, inovando no setor automotivo brasileiro. A equipe é a primeira do Centro-Oeste a projetar um formula elétrico.",
        "instagram": "https://www.instagram.com/fgr.unb/"
        },
    {
        "nome": "Mamutes do Cerrado",
        "site": "https://mamutesdocerrado.webnode.page/",
        "descrição": "A equipe Mamutes do Cerrado Aerodesign é uma equipe de competição que foi criada em 2015 por graduandos de Engenharia Aeroespacial e Eletrônica da Faculdade do Gama, FGA. A equipe participa desde então na categoria Micro da competição SAE Aerodesign, que ocorre anualmente em São José dos Campos e é desenvolvida pela Embraer em conjunto com a SAE. A competição conta com equipes de todo o país e até equipes estrangeiras. Os campeões das categorias presentes na competição são convidados a participar do campeonato mundial que acontece nos Estados Unidos, também anualmente. O regulamento da competição sofre modificações anualmente e a equipe deve então desenvolver um protótipo de aeronave que atenda a requisitos que a cada ano se mostram mais desafiadores, requerendo do time a implementação de avanços tecnológicos contínuos. Nesse contexto, o intuito da equipe é o desenvolvimento de aeronaves desmontáveis controladas por rádio, para participação na competição SAE Aerodesign, categoria Micro, de forma a mostrar o avanço e o desenvolvimento de tecnologias aeronáuticas por parte de seus membros, capacitando-os em todas as fases de um projeto aeronáutico, o que gera valor para cada um dos participantes individualmente e para a Universidade de Brasília, como desenvolvedora de tecnologia na área de aeronáutica. Esse reconhecimento atrai parcerias para a UnB, fortalecendo cada vez mais a instituição. Além disso, a equipe tem por objetivo concomitante o desenvolvimento de atividades envolvendo a comunidade externa, principalmente estudantes de ensino médio, familiarizando-os com o contexto aeronáutico e incentivando-os a seguir carreira na referida área.",
        "instagram": "https://www.instagram.com/mmtsdocerrado/"
        },
    {
        "nome":
        "Gama CubeDesign",
        "site": "https://gamacubedesign.wixsite.com/website",
        "descrição": "A equipe de desenvolvimento de nanossatélites da classificação CubeSat, denominada Gama CubeDesign, tem como objetivo geral promover estudos, pesquisas e desenvolvimento de tecnologias espaciais na Universidade de Brasília. Essa equipe é constituída por alunos de graduação de engenharia da Faculdade do Gama, os quais atuam nas áreas de controle de atitude, estruturas e cargas, eletrônica embarcada, energia e software voltado para o desenvolvimento de nanossatélites. Os avanços na tecnologia miniaturizada proporcionam amplas oportunidades para projetos de exploração e pesquisa espacial relacionados a aplicações civis e de defesa. Os pequenos satélites, especialmente os CubeSats, representam uma das inovações que transformaram o setor de satélites, integrando serviços de satélites para diferentes objetivos e abrindo horizontes para novos negócios. O número de missões de pequenos satélites propostas ou lançadas aumentou significativamente nos últimos anos, devido ao crescimento das oportunidades de lançamento, aos avanços tecnológicos e à criação de padrões dedicados que contribuíram para a criação de um novo mercado mundial de desenvolvedores e clientes. Pequenos satélites demonstraram ser adequados para uma série de objetivos diferentes, como investigações científicas, sensoriamento remoto e aplicações de comunicação. No entanto, atender aos requisitos desafiadores colocados por esse tipo de missão requer avanços tecnológicos contínuos.",
        "instagram": "https://www.instagram.com/gamacubedesign/"
        },
    {
        "nome": "Dragonfly",
        "site": "",
        "descrição": "Equipe de aviação experimental, formada por estudantes da Universidade de Brasília, com destaque para aeroespacial.",
        "instagram": "https://www.instagram.com/dragonflyunb/"
        },
    {
        "nome": "Capital Rocket Team (CRT)",
        "site": "http://capitalrocketteam.com/",
        "descrição": "A Capital Rocket Team é a equipe de foguetes da Universidade de Brasília, cujo objetivo é a pesquisa e o desenvolvimento de foguetes experimentais, com vistas à participação em competições universitárias de nível nacional e internacional.",
        "instagram": "https://www.instagram.com/capitalrocketteam/"
        }
]

with open("EquipesCompeticao.json", "w") as f:
    json.dump(equipes, f, indent=4)