import{test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/loginlocator";

exports.test=baseTest.extend({
    loginObj: async ({ page }, use) => {
        const loginObj = new LoginPage(page);
        await use(loginObj);
    }
});