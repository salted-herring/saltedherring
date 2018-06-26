<!DOCTYPE html>
<!--[if lt IE 7]>	   <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>		   <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>		   <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
		<base href="$base_tag">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		$MetaTags(true)
		$OGTags
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<link rel="apple-touch-icon" href="$ThemeDir/img/touch-icon-iphone.png">
		<link rel="apple-touch-icon" sizes="76x76" href="$ThemeDir/img/touch-icon-ipad.png">
		<link rel="apple-touch-icon" sizes="120x120" href="$ThemeDir/img/touch-icon-iphone-retina.png">
		<link rel="apple-touch-icon" sizes="152x152" href="$ThemeDir/img/touch-icon-ipad-retina.png">

		$getCSS.RAW

		<script src="$ThemeDir/js/lib/modernizr.min.js"></script>
		<script type="text/javascript" src="//use.typekit.net/fxa7vos.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

		<% include GA %>

		<% if ClassName = HomePage %>
			<script type="application/ld+json">
			  {
			"@context": "http://schema.org",
			"@type": "Organization",
			"url": "http://www.saltedherring.com",
			"name": "Salted Herring",
			"alternateName": "SaltedHerring",
			"logo": "https://www.saltedherring.com/themes/default/img/sprites/SH_logo_site_black.png",
			"contactPoint" : [
				{ "@type" : "ContactPoint",
				  "telephone" : "+64 (0)4 473 1344",
				  "email" : "info@saltedherring.com",
				  "contactType" : "customer service"
				} ],
			"sameAs" : [
				"https://www.facebook.com/pages/Salted-Herring/123449174364209",
				"https://plus.google.com/+saltedherring"]
			  }
			  </script>
		<% end_if %>
	</head>
	<body class="page-$URLSegment<% if $Parent.ClassName == 'SaltedHerring\Layout\WorkPage' %> page-work<% end_if %> page-$ElementName<% if isMobile %> mobile<% end_if %>">
		<% include Header %>
		<div id="loader">
			<span>Getting</span>
			<span class="salt">Salted</span>
		</div>
		<div id="content" class="clearfix" data-title="$getTitle">
			$Layout
		</div>

		<% include Footer %>
		$getRequireJS.RAW
	</body>
</html>
