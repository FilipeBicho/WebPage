<!DOCTYPE html>
<html lang="en">

<head>
	<!--CSS Styles & JavaScrip extern files-->
	<link rel="stylesheet" href="styleCSS.css" type="text/css">
    <script type="text/javascript" src="java.js" ></script>
    
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
    <title>Contact</title>
</head>
<body>
	 <!-- Sliding Menu -->
	<div id="mySidenav" class="sidenav">
		<div style=" display: inline-block; position:absolute; top:10px;">
			<img class="logo" src="images/github.png" alt="GitHub" >
			<a href="https://github.com/FilipeBicho" style="float:right"> Filipe Bicho </a>"
		</div>
		<hr>
		<a href="resume.html">Resume</a>
		<a href="rules.html" >Rules</a>
		<a href="code.html">Code</a>
		<a href="play.html" >Play</a>
		<a href="#" style="background-color:#FF9900">Contact</a>
		<hr>
	</div>
	
	<!-- Open & Close Menu -->
	<div id="main">
		<!-- Open & Close Menu -->	
		<span class="menu" rel="mySidenav" onclick="openClose(this,'View ','Hide')">&#9776; Menu</span>
		<div class="center">
			<!-- HeadLine -->
			<link href='http://fonts.googleapis.com/css?family=Leckerli+One' rel='stylesheet' type='text/css'> 
			<h1 class="headline"> Contact </h1>
			<form  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
				<table class="contactMenu">
					<tr>
						<td colspan="2">
							<h1 class="title">Contact me any time</h1>
							<hr>
						</td>
					</tr>		
					<tr>
						<td>
							First Name:<br> <input class="form" type="text" name="first_name">
							<span class="error">*<br> <?php echo $first_nameErr;?></span><br>
							Last Name:<br> <input class="form" type="text" name="last_name">
							<span class="error">*<br> <?php echo $last_nameErr;?></span><br>
							Email:<br> <input class="form" type="text" name="email">
							<span class="error">*<br> <?php echo $emailErr;?></span><br>
							
						</td>
						<td>
							Message:<br><textarea class="textArea" class="form" name="message" ></textarea><br>
							<input type="submit" name="submit" value="Submit">
						</td>		
					</tr>
					<tr>
						<td colspan="2"><div id="googleMap"></div>	</td>	
					</tr>
				</table>
			</form>
		</div>
	</div>

	<!-- Validate form and send values to mail-->
	<?php
		// define variables and set to empty values
		$first_nameErr= $last_nameErr = $emailErr = "";

		if ($_SERVER["REQUEST_METHOD"] == "POST") 
		{
			 $flag = true;
			 //validate first name
			 if (empty($_POST["first_name"])) 
			 {
	    		$first_nameErr= "First name is required";
	    		$flag = false;
	  		 } 
	  		 else 
	  		 {
	   			$first_name = test_input($_POST["first_name"]);
	   			// check if name only contains letters and whitespace
	    		if (!preg_match("/^[a-zA-Z ]*$/",$first_name)) 
	    		{
	      			$first_nameErr= "Only letters and white space allowed"; 
	      			$flag = false;
	    		}
	  		 }
	  		 
	  		 //validate last name
	  		 if (empty($_POST["last_name"])) 
			 {
	    		$last_nameErr= "Last name is required";
	    		$flag = false;
	  		 } 
	  		 else 
	  		 {
	   			$last_name = test_input($_POST["last_name"]);
	   			// check if name only contains letters and whitespace
	    		if (!preg_match("/^[a-zA-Z ]*$/",$last_name)) 
	    		{
	      			$last_nameErr= "Only letters and white space allowed"; 
	      			$flag = false;
	    		}
	  		 }
	  		 
	  		 if (empty($_POST["email"])) 
	  		 {
   			 	$emailErr = "Email is required";
   			 	$flag = false;
  			 } 
  			 else 
  			 {
    			$email = test_input($_POST["email"]);
    			// check if e-mail address is well-formed
    			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
    			{
      				$emailErr = "Invalid email format"; 
      				$flag = false;
    			}
  			}
  			
  			session_start();
  			 $_SESSION['Message'] = $_POST['message'];

  			$_SESSION['FirstName'] = $first_name;
  			$_SESSION['LastName'] = $last_name;
			$_SESSION['Email'] = $email;
			$_SESSION['Comment'] = $message;

  			//if valid then redirect
  			if($flag)
  			{
  				header('Location: mail.php?');
   				exit();
  			}

		}
		
		//validate form
		function test_input($data) 
		{
		  $data = trim($data);
		  $data = stripslashes($data);
		  $data = htmlspecialchars($data);
		  return $data;
		}
	?>
	
</body>
</html>
