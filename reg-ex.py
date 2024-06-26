https://github.com/automatethem-py-web-selenium/car-auction-site-detail-info-screen-capture-rpa-app-reflex/blob/main/app/auction_sites/auto_bell.py

    def extract_data(self):
        p_element = self.wait_until(expected_conditions.presence_of_element_located((By.CSS_SELECTOR, "p.carnm")))                
        p_element = self.driver.find_element(By.CSS_SELECTOR, "p.carnm")
        s = p_element.text
        logging.debug(s)
        for maker_name in re.findall(r'\[(.+)\]', s): #제조사
            self.maker_name = maker_name
            logging.debug(maker_name)
        for car_name in re.findall(r'\] (.+)', s): #차이름
            self.car_name = car_name
            logging.debug(car_name)

        li_elements = self.driver.find_elements(By.CSS_SELECTOR, "div.in > ul > li")
        for li_element in li_elements:
            span_elements = li_element.find_elements(By.CSS_SELECTOR, "span")
            if len(span_elements) > 0:
                if span_elements[0].text == "차대번호": #차대번호
                    self.vehicle_identification_number = span_elements[1].text
                    logging.debug(self.vehicle_identification_number) #WDDZF4JB1JA387043
                elif span_elements[0].text == "최초등록일": #연식
                    s = span_elements[1].text
                    for car_year in re.findall(r'(\d+)년', s):
                        self.car_year = car_year
                        logging.debug(car_year)
                elif span_elements[0].text == "주행거리": #주행거리
                    s = span_elements[1].text
                    logging.debug(s)
                    for car_distance in re.findall(r'([\d,]+)Km', s):
                        self.car_distance = car_distance
                        logging.debug(car_distance)
        #차량등급
