<% control Project %>
<section id="project">
	<div class="container">
		
		<header  style="background: #{$Colour.Value}; background: rgba({$Colour.hex2rgb}, 0.5);">
			<h1>$Title</h1>
			<span class="tagLine">$TagLine</span>
		</header>
		
		<% if getFirstImage %>
		<div class="media">
			<img src="$getFirstImage.outputImage.URL" alt="" />
		</div>
		<% end_if %>
		
		<div class="row">
			<div class="grid_2">
				<% if Quote && Citation %><blockquote>$Quote</blockquote>
				<cite>$Citation</cite><% end_if %>
				
				<div class="content">
					$ProjectInfo
				</div>
				
				<nav id="articleLinks" class="clearfix">
					<a href="#content" class="fullstory">full story</a>
					<% if SiteURL %><a href="$SiteURL" target="_blank" class="website">visit website</a><% end_if %>
				</nav>
			</div>
			
			<aside class="grid_1">
				<% if Services %>
				<strong>services:</strong>
				<ul class="services">
					<% loop Services %>
					<li>$Name</li>
					<% end_loop %>
				</ul>
				<% end_if %>
				
				<% if ProjectAwards %>
				<strong>awards:</strong>
				<ul class="awards">
					<% loop ProjectAwards %>
					<% if Award.Logo %>
					<li><% if URL %><a href="$URL" target="_blank"><% end_if %><% control Award.Logo.SetWidth(60) %><img src="$URL" width="$Width" height="$Height" alt="" /><% end_control %><% if URL %></a><% end_if %></li>
					<% end_if %>
					<% end_loop %>
				</ul>
				<% end_if %>
			</aside>
		</div>
	</div>
	
	
	<div class="container" id="media">
		<% loop getAllMedia %>
			<% if $Type = SWF %>
			<img src="$outputFallback.URL" alt="" />
			<% end_if %>
		<% end_loop %>
	</div>
</section>
<% end_control %>