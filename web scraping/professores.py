import requests
from bs4 import BeautifulSoup
import json

linkprofs = []

url = "https://fga.unb.br/professores"
response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")

ul_list = soup.find_all("div", class_="common-profile-list-block")

for ul in ul_list:
    nome = ul.find("a", class_="profile_link url")
    href = nome["href"]
    linkprofs.append(href) 

cont =0
nomeprofs = []
infoprofs = []
professores = {"professores": []}
for profurl in linkprofs:
    response2 = requests.get(profurl)

    sp = BeautifulSoup(response2.content, "html.parser")
    prof = sp.find_all("div", class_="article-body article-body-text-article")

    if len(prof) > 0:
        professor = prof[0].find_all("p")

        if len(professor) > 0:
            info = professor[0].find_all("span")

            if len(professor) > 1:
                if len(info) > 0:
                    #print(info[1].text)
                    nomeprofs.append(info[1].text)
                    #print(professor[1].text)  
                    infoprofs.append(professor[1].text)
                    cont = cont+1

for j in range(cont):
    professores["professores"].append(
            {
            "Nome": nomeprofs[j],
            "Descricao": infoprofs[j]
            }
    )

with open("Professores.json", "w") as arquivos:
    json.dump(professores, arquivos,indent=4)

#print(professores)
