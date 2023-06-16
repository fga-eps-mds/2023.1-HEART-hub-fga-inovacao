import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

def test_number_of_cards_and_empty_cards():
    driver = webdriver.Chrome()
    
    try:
        driver.get("http://localhost:3000/equipesdecompetição")
    
        element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "card"))
        )

        card_elements = driver.find_elements(By.CLASS_NAME, "card")
    
        assert len(card_elements) == 8, "Expected 8 card elements, but found a different number."
    
        empty_card_count = 0

        for card_element in card_elements:
            card_text = card_element.text.strip()
            if card_text == "":
                empty_card_count += 1
    
        assert empty_card_count > 3, "Expected more than 3 empty cards, but found a different number."
    
    finally:
        driver.quit()