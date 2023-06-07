import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_strings_present(driver):
    driver.get('http://localhost:3000/pedei')

    assert element_exists(driver, "LAPPIS"), "A string 'LAPPIS' não foi encontrada."

    assert element_exists(driver, "LART"), "A string 'LART' não foi encontrada."

    assert element_exists(driver, "ITRAC"), "A string 'ITRAC' não foi encontrada."

    assert element_exists(driver, "Projeto Catavento"), "A string 'Projeto Catavento' não foi encontrada."

    assert element_exists(driver, "PAULA"), "A string 'PAULA' não foi encontrada."

    assert element_exists(driver, "MigoC2"), "A string 'MigoC2' não foi encontrada."

def element_exists(driver, text):
    elements = driver.find_elements(By.XPATH, f"//*[contains(text(), '{text}')]")
    return len(elements) > 0
