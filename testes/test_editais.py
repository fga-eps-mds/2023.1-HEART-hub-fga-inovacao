import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_strings_present(driver):
    driver.get('http://localhost:3000/editais')

    driver.implicitly_wait(10)  # Define um tempo máximo de espera de 10 segundos

    assert element_exists(driver, "ACESSO PAS - UnB"), "A string 'ACESSO PAS - UnB' não foi encontrada."

    assert element_exists(driver, "ACESSO Vestibular - UnB"), "A string 'ACESSO Vestibular - UnB' não foi encontrada."

    assert element_exists(driver, "ACESSO ENEM - UnB"), "A string 'ACESSO ENEM - UnB' não foi encontrada."

    assert element_exists(driver, "Transferência Facultativa"), "A string 'Transferência Facultativa' não foi encontrada."

def element_exists(driver, text):
    elements = driver.find_elements(By.XPATH, f"//*[contains(text(), '{text}')]")
    return len(elements) > 0
