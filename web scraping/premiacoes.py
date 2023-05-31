import json

array_noticias = [
    {
        "titulo": "Aluna de mestrado da Biomédica UnB-Gama ganha Prêmio de Inovação",
        "noticia": "Aluna de mestrado da Biomédica, foi premiada na modalidade Dissertação de Mestrado, pelo Prêmio de Inovação - Engenharia Biomédica para o SUS 2021, pela SBEB e pela Boston Scientific.",
        "link": "https://fga.unb.br/unb-gama/noticias/aluna-de-mestrado-da-biomedica-unb-gama-ganha-premio-de-inovacao-engenharia-biomedica-para-o-sus-2021-pela-sbeb-e-pela-boston-scientific"
    },
    {
        "titulo": "Metodologia de ensino desenvolvida por professor da FGA recebe prêmio nacional",
        "noticia": "O projeto Eight: Aprendendo de forma criativa e passando adiante em oito minutos, criado pelo professor de engenharia Ricardo Fragelli, da Faculdade UnB Gama (FGA), venceu o 24º Prêmio Top Educacional Professor Mário Palmério. Concedida pela Associação Brasileira de Mantenedoras de Ensino Superior (Abmes), a premiação tem o objetivo de fomentar ações inovadoras no campo da educação.",
        "link": "https://noticias.unb.br/67-ensino/5089-pronta-metodologia-de-ensino-desenvolvida-por-professor-da-unb-recebe-premio-nacional"
    },
    {
        "titulo": "Equipe de Engenharia da FGA desenvolve simulador automotivo",
        "noticia": "Professores e estudantes de graduação e pós-graduação dos cursos de Engenharia da Faculdade UnB Gama (FGA) desenvolveram um simulador automotivo para execução de atividades de pesquisa, ensino e extensão. Elaborada como parte do projeto intitulado Desenvolvimento de uma Metodologia para Projeto, Verificação e Validação de Algoritmos para Controle Eletrônico de Estabilidade, a tecnologia integra comandos como aceleração, frenagem, sistema de direção e câmbio.",
        "link": "https://www.noticias.unb.br/117-pesquisa/6277-equipe-de-engenharia-da-fga-desenvolve-simulador-automotivo"
    },
    {
        "titulo": "Equipe da UnB vence campeonato internacional de lançamento de foguetes",
        "noticia": "a Capital Rocket Team, equipe de foguetes da Universidade de Brasília, viu o fruto de sete anos de seu trabalho ser lançado exitosamente ao céu no formato de um foguete durante o Latin American Space Challenge (LASC). Esta é a maior competição experimental de engenharia de foguetes e satélites da América Latina e a segunda maior do mundo, que ocorreu entre 5 e 7 de agosto. Naquele dia, o clima de comemoração, segundo quem estava presente no evento, realizado no Cabo Canavial, em Tatuí (SP), foi comparável ao de uma Copa do Mundo em terras brasileiras. Isso porque, pela primeira vez, uma equipe universitária conseguiu lançar um projétil com propulsão híbrida.",
        "link": "https://noticias.unb.br/112-extensao-e-comunidade/6023-equipe-da-unb-vence-campeonato-internacional-de-lancamento-de-foguetes"
    },
    {
        "titulo": "Alunos da UnB são selecionados para participar de programa de cooperação espacial na França",
        "noticia": "Os estudantes do 9o semestre de Engenharia Aeroespacial da UnB Igor Kinoshita, Lucas Brasileiro e Sebastião Roni estão de malas prontas para um ano de estudos e estágio em um dos mais importantes centros de pesquisa do mundo na área aeroespacial, o Instituto Superior de Aeronáutica e do Espaço (ISAE), em Toulouse, na França.  - O ISAE Supaero faz parte do maior polo aeroespacial da Europa, sendo o segundo do mundo, destacam os futuros engenheiros. “É mais uma conquista para o curso de Engenharia Aeroespacial da UnB. A responsabilidade de estar lá representando a Universidade é grande”, dizem.",
        "link": "https://noticias.unb.br/74-internacional/805-alunos-da-unb-sao-selecionados-para-participar-de-programa-de-cooperacao-espacial-na-franca"
    }
]

with open("Premiacoes.json", "w") as f:
    json.dump(array_noticias, f, indent=4)
