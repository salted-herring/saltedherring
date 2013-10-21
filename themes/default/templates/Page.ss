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

		$getCSS
		
		<script src="$ThemeDir/js/lib/modernizr.min.js"></script>
		
		<% include GA %>
	</head>
	<body class="page-$URLSegment<% if isMobile %> mobile<% end_if %>">
		<% include Header %>
		<div id="content">
			$Layout
		</div>
		
		<% include Footer %>
		$getRequireJS
	</body>
</html>