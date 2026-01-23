from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time

# Optional: use undetected-chromedriver if Google blocks normal automation
# pip install undetected-chromedriver selenium
import undetected_chromedriver as uc

def get_google_meet_participants(meet_url: str, email: str = None, password: str = None):
    options = Options()
    options.add_argument("--start-maximized")
    options.add_argument("--disable-infobars")
    options.add_argument("--disable-notifications")

    # driver = webdriver.Chrome(options=options)           # normal
    driver = uc.Chrome(options=options)                   # harder to detect

    try:
        driver.get("https://meet.google.com")

        # If you need to sign in (usually required)
        if email and password:
            # ... (login steps - very fragile, many pages / 2FA issues)
            # You can copy login code from older GeeksforGeeks / GitHub repos
            print("Manual login recommended — automation often blocked")

        # Go to your meeting
        driver.get(meet_url)
        time.sleep(6)  # wait for loading

        # Turn off mic & camera if needed
        try:
            driver.find_element(By.XPATH, "//*[contains(@aria-label,'Turn off microphone')]").click()
            driver.find_element(By.XPATH, "//*[contains(@aria-label,'Turn off camera')]").click()
        except:
            pass

        # Click "People" tab (or people count button)
        wait = WebDriverWait(driver, 25)
        people_button = wait.until(
            EC.element_to_be_clickable(
                (By.XPATH, "//button[contains(@aria-label,'Show everyone')] | //div[contains(@aria-label,'people')]")
            )
        )
        people_button.click()
        time.sleep(2.5)

        # Scrape names
        # 2025–2026 common selectors (try them in order)
        selectors = [
            "div[data-self-name]",                          # classic one
            "div[role='listitem'] span[aria-hidden='true']", # sometimes
            "div.zdJuXd",                                    # 2025 variant
            "span[jsname='V67aGc']"                          # another frequent one
        ]

        names = set()  # avoid duplicates

        for sel in selectors:
            try:
                elements = driver.find_elements(By.CSS_SELECTOR, sel)
                for el in elements:
                    text = el.get_attribute("innerText").strip()
                    if text and text != "You" and len(text) > 1:
                        names.add(text)
                if len(names) > 0:
                    break
            except:
                pass

        if not names:
            print("No names found → selector probably changed.")
            print("Open DevTools → Elements → Ctrl+F → search for participant names manually.")
        else:
            print("\nParticipants currently in the meeting:")
            for name in sorted(names):
                print(f"• {name}")

        return list(names)

    finally:
        time.sleep(120)          # keep browser open for debugging
        # driver.quit()

# Usage
meet_link = "https://meet.google.com/abc-defg-hij"
get_google_meet_participants(meet_link)