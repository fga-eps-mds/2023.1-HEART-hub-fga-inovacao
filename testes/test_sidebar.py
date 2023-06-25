import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_argument("--headless")

@pytest.fixture
def driver():
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()

def test_sidebar_buttons(driver):
    driver.get('http://localhost:3000/2023.1-HEART-hub-fga-inovacao')

    driver.implicitly_wait(10)  # Define um tempo máximo de espera de 10 segundos

    assert element_exists(driver, "Inicio"), "O botão 'Inicio' não foi encontrado."
    assert element_exists(driver, "P&D&I"), "O botão 'P&D&I' não foi encontrado."
    assert element_exists(driver, "Professores"), "O botão 'Professores' não foi encontrado."
    assert element_exists(driver, "Empresas Juniores"), "O botão 'Empresas Juniores' não foi encontrado."
    assert element_exists(driver, "Equipes de Competição"), "O botão 'Equipes de Competição' não foi encontrado."
    assert element_exists(driver, "Premiações"), "O botão 'Premiações' não foi encontrado."
    assert element_exists(driver, "Editais"), "O botão 'Editais' não foi encontrado."
    assert element_exists(driver, "Contatos"), "O botão 'Contatos' não foi encontrado."

def element_exists(driver, text):
    elements = driver.find_elements(By.XPATH, f"//*[contains(text(), '{text}')]")
    return len(elements) > 0