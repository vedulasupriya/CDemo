
    package drivers;

    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.firefox.FirefoxDriver;
    import org.openqa.selenium.support.ui.WebDriverWait;

        public class DriverFactory {
        public static WebDriver driver;
        public void createWebDriver(String URL){
            driver = new FirefoxDriver();
            WebDriverWait waitObject = new WebDriverWait(driver,300);
            driver.manage().window().maximize();
            driver.get(URL);
        }



    }
