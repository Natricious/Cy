describe('Account Details', () => {
    it('Account Details', () => {
      // შევდივართ საიტზე https://automationteststore.com/
      // ვაკლიკავთ Login or register ღილაკს
      // ვწერთ იუზერს
      // ვწერთ პაროლს
      // ვაკლიკავთ Login ღილაკს
      // ვაკლიკავთ Edit account details ღილაკს
      // ვშლით First Name input-ში არსებულ ტექსტს
      // ვწერთ ახლიდან First Name-ს
      // ვშლით Last Name input-ში არსებულ ტექსტს
      // ვწერთ ახლიდან Last Name-ს
      // ვშლით email-ს
      // ვწერთ ახლიდან email-ს
      // ვშლით Telephone-ს
      // ვწერთ ახლიდან Telephone-ს  
      // ვშლით Fax-ს
      // ვწერთ ახლიდან Fax-ს
      // ვკლიკავთ Continue ღილაკს
      // ვამოწმებთ თუ გამოდის ტექსტი "Success: Your account has been successfully updated."
      cy.visit('https://automationteststore.com/');
      cy.get('#customer_menu_top > li > a').click();
      cy.get('#loginFrm_loginname').type('natricious');
      cy.get('#loginFrm_password').type('asdqwe123');
      cy.get('#loginFrm > fieldset > .btn').click();
      cy.get('.side_account_list > :nth-child(3) > a').click();
      cy.get('#AccountFrm_firstname').clear();
      cy.get('#AccountFrm_firstname').type('Zurab');
      cy.get('#AccountFrm_lastname').clear();
      cy.get('#AccountFrm_lastname').type('Jvania');
      cy.get('#AccountFrm_email').clear();
      cy.get('#AccountFrm_email').type('test@zura.ge');
      cy.get('#AccountFrm_telephone').clear();
      cy.get('#AccountFrm_telephone').type('593001330');
      cy.get('#AccountFrm_fax').clear();
      cy.get('#AccountFrm_fax').type('ფაქსი შმაქსი მე არ ვიცი');
      cy.get('.col-md-12 > .btn-orange').click();
      cy.contains('Success: Your account has been successfully updated.').should('be.visible');
    });
  });
   
   
   
   
  describe('Change Passwprd', () => {
    it('Change Password', () => {
      // შევდივართ საიტზე https://automationteststore.com/
      // ვაკლიკავთ Login or register ღილაკს
      // ვწერთ იუზერს
      // ვწერთ პაროლს
      // ვაკლიკავთ Login ღილაკს
      // ვაკლიკავთ Change Password ღილაკს
      // ვწერთ Current Password-ს
      // ვწერთ New Password-ს
      // ვწერთ New Password Confirm-ს
      // ვაკლიკავთ Continue ღილაკს
      // ვამოწმებთ თუ გამოდის ტექსტი "Success: Your password has been successfully updated."
      cy.visit('https://automationteststore.com/');
      cy.get('#customer_menu_top > li > a').click();
      cy.get('#loginFrm_loginname').type('natricious');
      cy.get('#loginFrm_password').type('asdqwe123');
      cy.get('#loginFrm > fieldset > .btn').click();
      cy.get('.side_account_list > :nth-child(4) > a').click();
      cy.get('#PasswordFrm_current_password').type('asdqwe123');
      cy.get('#PasswordFrm_password').type('asdqwe123');
      cy.get('#PasswordFrm_confirm').type('asdqwe123');
      cy.get('.col-md-12 > .btn-orange').click();
      cy.contains('Success: Your password has been successfully updated.').should('be.visible');
    });
  });
   
   
  describe('Address Book', () => {
    it('Address Book', () => {
      // შევდივართ საიტზე https://automationteststore.com/
      // ვაკლიკავთ Login or register ღილაკს
      // ვწერთ იუზერს
      // ვწერთ პაროლს
      // ვაკლიკავთ Login ღილაკს
      // ვაკლიკავთ Manage Address Book ღილაკს
      // ვაკლიკავთ Edit ღილაკს
      // ვშლით First Name-ს
      // ვწერთ ახლიდან First Name-ს
      // ვშლით Last Name-ს
      // ვწერთ ახლიდან Last Name-ს
      // ვშლით Company-ს
      // ვწერთ ახლიდან Company-ს
      // ვშლით Address 1-ს
      // ვწერთ ახლიდან Address 1-ს
      // ვშლით City-ს
      // ვწერთ City-ს
      // ვირჩევთ Country-ს
      // ვირჩევთ Region / State-ს
      // ვშლით Zip/Post Code-ს
      // ვწერთ ახლიდან Zip/Post code-ს
      // ვაკლიკავთ Default Address: Yes რადიოს
      // ვაკლიკავთ Continue ღილაკს
      // ვამოწმებთ თუ გამოდის ტექსტი "Your address has been successfully updated"
      cy.visit('https://automationteststore.com/');
      cy.get('#customer_menu_top > li > a').click();
      cy.get('#loginFrm_loginname').type('natricious');
      cy.get('#loginFrm_password').type('asdqwe123');
      cy.get('#loginFrm > fieldset > .btn').click();
      cy.get('.side_account_list > :nth-child(5) > a').click();
      cy.get('tr > .pull-right > .btn').click();
      cy.get('#AddressFrm_firstname').clear();
      cy.get('#AddressFrm_firstname').type('Zurab');
      cy.get('#AddressFrm_lastname').clear();
      cy.get('#AddressFrm_lastname').type('Natroshvili');
      cy.get('#AddressFrm_company').clear();
      cy.get('#AddressFrm_company').type('Microsoft');
      cy.get('#AddressFrm_address_1').clear();
      cy.get('#AddressFrm_address_1').type('Pheradze Street N5');
      cy.get('#AddressFrm_city').clear();
      cy.get('#AddressFrm_city').type('Tbilisi');
      cy.get('#AddressFrm_country_id').select('Georgia').should('have.value', '80');
      cy.get('#AddressFrm_zone_id').select('Tbilisi').should('have.value', '1244');
      cy.get('#AddressFrm_postcode').clear();
      cy.get('#AddressFrm_postcode').type('0131');
      cy.get('#AddressFrm_default1').click();
      cy.get('.col-md-12 > .btn-orange').click();
      cy.contains('Your address has been successfully updated').should('be.visible');
      cy.get('.col-md-12 > .btn-default').should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=account/account');
      cy.get('.col-md-12 > .btn-orange').should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=account/address/insert');
    });
  });