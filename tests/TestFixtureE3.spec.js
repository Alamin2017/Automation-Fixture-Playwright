import {test} from '../fixtures/POMFixtures';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

test('Login with valid credentials',async({loginObj}) => {
 
        await loginObj.navigate_url();
        await loginObj.login_valid_credentials("JackG","jack@123");
        await loginObj.click_login_button();
        await delay(3000);
});

    

