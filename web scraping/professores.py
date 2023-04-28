import requests
from bs4 import BeautifulSoup

linkprofs = []

url = "https://fga.unb.br/professores"
response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")

ul_list = soup.find_all("div", class_="common-profile-list-block")

for ul in ul_list:
    nome = ul.find("a", class_="profile_link url")
    href = nome["href"]
    linkprofs.append(href) 

#print(linkprofs)
"""
for profurl in linkprofs:
    response2 = requests.get(profurl)

    sp = BeautifulSoup(response2.content, "html.parser")
    #print(sp)

    prof = sp.find_all("div", class_="article-body article-body-text-article")
    
    if len(prof) > 0:
        nome2 = prof[0].find_all("p", class_="MsoNormal")
        
        for p in nome2:
            print(p.text)
    else:
        print(f"Não foi encontrada nenhuma informação deste professor {profurl}")
"""
profurl = linkprofs[2]
response2 = requests.get(profurl)

sp = BeautifulSoup(response2.content, "html.parser")
    #print(sp)

prof = sp.find_all("div", class_="article-body article-body-text-article")
nome2 = prof[0].find_all("p", class_="MsoNormal")
nome3 = nome2[0].find_all("span")
print(nome3[1].text)
print(nome2[1].text)
