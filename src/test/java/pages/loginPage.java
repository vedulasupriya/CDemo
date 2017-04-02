package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import static drivers.DriverFactory.driver;

/**
 * Created by Supriya on 4/1/2017.
 */
public class loginPage {
    private WebDriver localDriver;
    @FindBy(id ="Email")
    private WebElement username;
    @FindBy(id = "Passwd")
    private WebElement password;
    @FindBy (id = "signInBtn")
    private WebElement signIn;
    @FindBy(id = "next")
    private WebElement next;
    public loginPage (WebDriver driver) {
        PageFactory.initElements(driver,this);
        this.localDriver=driver;
    }
    public void waitForUsername(){
        WebDriverWait waitObject = new WebDriverWait(driver,300);
//        waitObject.until(ExpectedConditions.presenceOfElementLocated(By.xpath("Email")));
    }
    public void enterUsername(String UN){
        username.sendKeys(UN);
    }
    public void enterPassword(String Pw){
        password.sendKeys(Pw);
    }
    public void clickSignIn() {
        signIn.click();
    }
    public  void clickOnNext(){
        next.click();
    }

}
