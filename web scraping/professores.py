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
fotoprofs = []
emailprofs = []

professores = {"professores": []}

for profurl in linkprofs:
    response2 = requests.get(profurl)

    sp = BeautifulSoup(response2.content, "html.parser")
    prof = sp.find_all("div", class_="article-body article-body-text-article")
    profimg = sp.find("span", class_="profile-big-image-inner2")

    if profimg is not None:
        image = profimg.find("img")
        if image:
            src = image["src"]
        else:
            src = "https://i.imgur.com/hkHm7W8.png/230x230/orc.jpg" # Ou algum valor padrão de sua escolha
    else:
        src = "https://i.imgur.com/hkHm7W8.png/230x230/orc.jpg"  # Ou algum valor padrão de sua escolha



    if len(prof) > 0:
        professor = prof[0].find_all("p")


        if len(professor) > 0:
            info = professor[0].find_all("span")
            profimg = sp.find("span", class_="profile-big-image-inner2")
            
            if len(info) > 5:
                email = info[5].text
                email = email[8:]  # Remove os 8 primeiros caracteres da string email
                #print(email)
            else:
                email = "E-mail não disponível."


            if len(professor) > 1:
                if len(info) > 0:
                    #print(info[1].text)
                    nomeprofs.append(info[1].text)
                    #print(professor[1].text)  
                    infoprofs.append(professor[1].text)
                    fotoprofs.append(src)
                    emailprofs.append(email)
                    
                    cont = cont+1

for j in range(cont):
    professores["professores"].append(
            {
            "Nome": nomeprofs[j],
            "Descricao": infoprofs[j],
            "Foto": fotoprofs[j],
            "Email": emailprofs[j]
            }
    )

with open("Professores.json", "w") as arquivos:
    json.dump(professores, arquivos,indent=4)

#print(professores)
