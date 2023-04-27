import requests
from bs4 import BeautifulSoup

url = "https://fga.unb.br/professores"
response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")

ul_list = soup.find_all("div", class_="common-profile-list-block")

for ul in ul_list:
    nome = ul.find("a", class_="profile_link url")
    href = nome["href"]
    print(href)
