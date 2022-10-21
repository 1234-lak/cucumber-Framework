package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ByXPath;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EmpSteps {
	WebDriver driver;
	 String expectedid="";
	 String actualdid="";
	@Given("^user navigates url  \"([^\"]*)\"$")
	public void user_navigates_url(String url )throws Throwable {
	    driver=new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get(url);
	    Thread.sleep(3000);
	    
	}

	@When("^user login as username \"([^\"]*)\" and passord \"([^\"]*)\"$")
	public void user_login_as_username_and_passord(String username, String password) throws Throwable {
	  driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(username);
	  driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(password);
	  
	}

	@When("^user click login button$")
	public void user_click_login_button() throws Throwable {
		driver.findElement(By.xpath("//input[@id='btnLogin']")).click();
	}

	@When("^user click pim and click add button$")
	public void user_click_pim_and_click_add_button() throws Throwable {
		driver.findElement(By.xpath("//b[normalize-space()='PIM']")).click();
		driver.findElement(By.xpath("//input[@id='btnAdd']")).click();
	}

	@When("^user enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and_and(String fname, String mname, String lname) throws Throwable {
		driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys( fname);
		driver.findElement(By.xpath("//input[@id='middleName']")).sendKeys( mname);
		driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys(lname);
	}

	@When("^user capature eidbefore$")
	public void user_capature_eidbefore() throws Throwable {
	    expectedid=driver.findElement(By.xpath("//input[@id='employeeId']")).getAttribute("value");
	    
	}

	@When("^user click save button$")
	public void user_click_save_button() throws Throwable {
	    driver.findElement(By.xpath("//input[@id='btnSave']")).click();
	}

	@When("^user capture eid after$")
	public void user_capture_eid_after() throws Throwable {
		actualdid=driver.findElement(By.xpath("//input[@id='personal_txtEmployeeId']")).getAttribute("value");
	      
	}

	@Then("^user validates eid$")
	public void user_validates_eid() throws Throwable {
	    if (expectedid.equals(actualdid)) {
			System.out.println("Emp creation success::::    "   +expectedid +"      "+actualdid );
			
		} 
	    else {
	    	System.out.println("Emp creation not success::::    "   +expectedid +"      "+actualdid );
		}
	}

	@Then("^user close browser$")
	public void user_close_browser() throws Throwable {
	    driver.close();
	}


}
