<% control Project %>
<section id="project">
	<article>
		<header>
			<h1>$Title</h1>
			<span class="tagLine">$TagLine</span>
		</header>
		
		<% if Media %>
		<ul class="media">
			<% loop Media %>
			<% if singular_name = Image %>
			<li>
				<img src="$outputImage.URL" alt="" />
			</li>
			<% end_if %>
			<% end_loop %>
		</ul>
		<% end_if %>
		
		<% if Quote && Citation %><blockquote>$Quote</blockquote>
		<cite>$Citation</cite><% end_if %>
		
		<div class="content">
			$ProjectInfo
		</div>
		
	</article>
	
	<nav id="articleLinks" class="clearfix">
		<a href="#content" class="fullstory">full story</a>
		<% if SiteURL %><a href="$SiteURL" target="_blank" class="website">visit website</a><% end_if %>
	</nav>
	
	<aside>
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
</section>
<% end_control %>