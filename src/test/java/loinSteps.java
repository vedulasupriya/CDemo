import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import drivers.DriverFactory;
import pages.loginPage;

/**
 * Created by Supriya on 4/1/2017.
 */
public class loinSteps extends DriverFactory{
    @Given("^Navigate to url \"([^\"]*)\"$")
    public void navigateToUrl(String arg0) throws Throwable {
        super.createWebDriver(arg0);
    }

    @And("^Enter username as \"([^\"]*)\"$")
    public void enterUsernameAs(String arg0) throws Throwable {
        new loginPage(driver).enterUsername(arg0);
    }

    @Then("^Enter password as \"([^\"]*)\"$")
    public void enterPasswordAs(String arg0) throws Throwable {
        new loginPage(driver).enterPassword(arg0);
    }

    @And("^click on login$")
    public void clickOnLogin() throws Throwable {
        new loginPage(driver).clickSignIn();
    }

    @And("^wait for username field to appear$")
    public void waitForUsernameFieldToAppear() throws Throwable {
        new loginPage(driver).waitForUsername();
    }

    @And("^Click On Next$")
    public void clickOnNext() throws Throwable {
    new loginPage(driver).clickOnNext();
    }


}
