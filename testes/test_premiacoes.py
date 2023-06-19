import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_strings_present(driver):
    driver.get('http://localhost:3000/premia%C3%A7%C3%B5es')

    driver.implicitly_wait(10)  # Define um tempo máximo de espera de 10 segundos

    assert element_exists(driver, "Aluna de mestrado da Biomédica UnB-Gama ganha Prêmio de Inovação"), "A string 'Aluna de mestrado da Biomédica UnB-Gama ganha Prêmio de Inovação' não foi encontrada."

    assert element_exists(driver, "Metodologia de ensino desenvolvida por professor da FGA recebe prêmio nacional"), "A string 'Metodologia de ensino desenvolvida por professor da FGA recebe prêmio nacional' não foi encontrada."

    assert element_exists(driver, "Equipe de Engenharia da FGA desenvolve simulador automotivo"), "A string 'Equipe de Engenharia da FGA desenvolve simulador automotivo' não foi encontrada."

    assert element_exists(driver, "Equipe da UnB vence campeonato internacional de lançamento de foguetes"), "A string 'Equipe da UnB vence campeonato internacional de lançamento de foguetes' não foi encontrada."

    assert element_exists(driver, "Alunos da UnB são selecionados para participar de programa de cooperação espacial na França"), "A string 'Alunos da UnB são selecionados para participar de programa de cooperação espacial na França' não foi encontrada."

def element_exists(driver, text):
    elements = driver.find_elements(By.XPATH, f"//*[contains(text(), '{text}')]")
    return len(elements) > 0