import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_strings_present(driver):
    driver.get('http://localhost:3000/pedei')

    wait = WebDriverWait(driver, 10)  # Define um tempo máximo de espera de 10 segundos

    wait.until(EC.presence_of_element_located((By.XPATH, "//*[contains(text(), 'LAPPIS')]")))
    assert element_exists(driver, "LAPPIS"), "A string 'LAPPIS' não foi encontrada."

    wait.until(EC.presence_of_element_located((By.XPATH, "//*[contains(text(), 'LART')]")))
    assert element_exists(driver, "LART"), "A string 'LART' não foi encontrada."

    wait.until(EC.presence_of_element_located((By.XPATH, "//*[contains(text(), 'ITRAC')]")))
    assert element_exists(driver, "ITRAC"), "A string 'ITRAC' não foi encontrada."

    wait.until(EC.presence_of_element_located((By.XPATH, "//*[contains(text(), 'Projeto Catavento')]")))
    assert element_exists(driver, "Projeto Catavento"), "A string 'Projeto Catavento' não foi encontrada."

    wait.until(EC.presence_of_element_located((By.XPATH, "//*[contains(text(), 'PAULA')]")))
    assert element_exists(driver, "PAULA"), "A string 'PAULA' não foi encontrada."

    wait.until(EC.presence_of_element_located((By.XPATH, "//*[contains(text(), 'MigoC2')]")))
    assert element_exists(driver, "MigoC2"), "A string 'MigoC2' não foi encontrada."

def element_exists(driver, text):
    elements = driver.find_elements(By.XPATH, f"//*[contains(text(), '{text}')]")
    return len(elements) > 0

