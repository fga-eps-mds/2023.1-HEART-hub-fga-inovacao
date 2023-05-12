
import json

empresas = [
    {"nome": "Eletrojun", "link": "http://www.eletrojun.com.br", "descrição": "A EletronJun é a pioneira entre as empresas-juniores dos cursos de engenharia da Faculdade do Gama, sendo gerida por alunos da mesma. Foca-se em aliar a teoria estudada em sala de aula com práticas em diversas áreas tanto na própria engenharia em si quanto em gestão e admnistração, visando colaborar com a capacitação do estudante para atuar nas mais diversas áreas que estão disponíveis no mercado de trabalho.", "instagram": "https://instagram.com/eletronjun?igshid=YmMyMTA2M2Y="},
    {"nome": "Orc'estra", "link": "http://www.orcestra.com.br", "descrição": "A Orc'estra é uma empresa júnior, formada e gerida por alunos de Engenharia de Software da Universidade de Brasília - Faculdade  Gama, criada para que esses alunos possam colocar em prática tudo o que aprendem em suas aulas, além de ter um primeiro contato com o mercado de trabalho.", "instagram": "https://instagram.com/orcgamificacao?igshid=NTc4MTIwNjQ2YQ=="},
    {"nome": "Matriz Energia", "link": "http://www.matrizenergia.com", "descrição": "A Matriz Engenharia de Energia nasceu em 2015 com o ideal de trazer a seus clientes produtos e serviços exclusivos na área de energia e sustentabilidade, voltada à redução de custos com energia, visando buscar a excelência e superar suas expectativas.", "instagram": "https://instagram.com/matrizenergia?igshid=YmMyMTA2M2Y="},
    {"nome": "Zenit Aerospace", "link": "http://www.zenitaerospace.com", "descrição": "A Zenit Aerospace é uma empresa júnior formada por alunos de graduação da Universidade de Brasília (UnB), que possuem o desejo comum de promover o avanço da tecnologia aeroespacial no Brasil e no mundo.", "instagram": "https://instagram.com/zenitaerospace?igshid=YmMyMTA2M2Y="},
    {"nome": "Engrena", "link": "http://www.engrenaengenharia.com", "descrição": "A Engrena: Soluções em Engenharia é a primeira e única empresa júnior de Engenharia Automotiva do Brasil. Criada por estudantes da Universidade de Brasília - Faculdade do Gama com o objetivo de colocar em prática o aprendizado em sala, prestam serviços de qualidade a seus clientes e promovem um aprendizado focado no mercado de trabalho automobilístico, colaborando para uma melhor atuação nas diversas áreas das engenharias - em especial, a automotiva.", "instagram": "https://instagram.com/engrenaengenharia?igshid=NTc4MTIwNjQ2YQ=="}
]

with open("EmpresasJuniores.json", "w") as f:
    json.dump(empresas, f, indent=4)
    

