package oct20;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Demo1 {

	public static void main(String[] args) {
		WebDriver driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http:/www.facebook.com/");
		//create object for Webdriver wait class
		WebDriverWait mywait=new WebDriverWait(driver, 10);
		//wait for elememt to be clickable
		mywait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.linkText("Create New Account"))));
		driver.findElement(By.linkText("Create New Account")).click();
		mywait.until(ExpectedConditions.visibilityOfElementLocated(By.name("firstname")));
				driver.findElement(By.name("firstname")).sendKeys("testing");

	}
}
