<html>
<head>

<script src="js/jquery-1.9.1.min.js"></script>
<link  href="css/style.css" rel="stylesheet" type="text/css" />
<script src="js/responsive.js"></script>

</head>
<body>
<?php
	if (isset($_GET['url'])){
		$url = $_GET['url'];
	} else { $url = "source/index.html"; }
?>
<div id="mt_responsive">
	<div class="mt_top_bar">
		<div class="mt_title">
			<h1>MG - Offline Responsive + </h1>
			<h2>The Complete Responsive Offline Testing Solution.</h2>
		</div>
		<div id="mt_controls">
			<form action="<?php $_SERVER['PHP_SELF']; ?>" method="get" >
				<input type="button" onclick="resetscreen();" value="Reset" class="reset">
				<input type="button" onclick="screen320px_480px();" value="320 - 480" >
				<input type="button" onclick="screen480px_320px();" value="480 - 320" >
				<input type="button" onclick="screen320px_568px();" value="320 - 568" >
				<input type="button" onclick="screen568px_320px();" value="568 x 320" >
				<input type="button" onclick="screen240px_320px();" value="240 x 320" >
				<input type="button" onclick="screen320px_240px();" value="320 x 240" >
				<input type="button" onclick="screen380px_685px();" value="380 x 685" >
				<input type="button" onclick="screen685px_380px();" value="685 x 380" >
				<input type="button" onclick="screen768px_1024px();" value="768 x 1024" >
				<input type="button" onclick="screen1024px_768px();" value="1024 x 768" >
				<input type="button" onclick="screen600px_1024px();" value="600 x 1024" >
				<input type="button" onclick="screen1024px_600px();" value="1024 x 600" >
				<span class="site-form">
					<input type="text" name="url" id="url" value="" size="30" Placeholder="Enter URL e.g. http://www.mgwebthemes.com"  >
					<input type="submit" value="submit" id="submit">
				</span>
			</form>
		</div>
	</div>
	
	<div id="result">
		<iframe id="target" scrolling="yes" src="<?php echo $url;?>"></iframe>
	</div>
</div>

</body>
</html>