<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
		<% base_tag %>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		$MetaTags(true)
		<% include OG %>
		<meta name="viewport" content="width=device-width">
		<link rel="apple-touch-icon" href="$ThemeDir/img/touch-icon-iphone.png">
		<link rel="apple-touch-icon" sizes="76x76" href="$ThemeDir/img/touch-icon-ipad.png">
		<link rel="apple-touch-icon" sizes="120x120" href="$ThemeDir/img/touch-icon-iphone-retina.png">
		<link rel="apple-touch-icon" sizes="152x152" href="$ThemeDir/img/touch-icon-ipad-retina.png">

		$getCSS
		
		<script src="$ThemeDir/js/lib/modernizr.min.js"></script>
		<script type="text/javascript" src="//use.typekit.net/fxa7vos.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
		
		<% include GA %>
	</head>
	<body class="page-$URLSegment<% if isMobile %> mobile<% end_if %>">
		<% include Header %>
		<div id="loader">
			<span>Getting</span>
			<span class="salt">Salted</span>
		</div>
		<div id="content" class="clearfix" data-title="$getTitle">
			$Layout
		</div>
		
		<% include Footer %>
		$getRequireJS
	</body>
</html>