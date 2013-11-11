<div id="banner" class="collapsed">
	<div class="filters container">
		<a href="$URLSegment/"<% if category || getCurrentSession %><% else %> class="all"<% end_if %>>all</a>
		<% loop getCategories %>
			<a href="$Top.URLSegment/category/$URLSegment"<% if $Top.category = $URLSegment || Top.getCurrentSession = $URLSegment %> class="current"<% end_if %>>$Name</a>
		<% end_loop %>
	</div>
</div>
<% control Project %>

<section id="project" class="individualentry">
	<nav id="projectnav">
		<a href="#" class="previous">
			<strong>Title</strong>
			<em>Tagline</em>
		</a>
		<a href="#" class="next">
			<strong>Title</strong>
			<em>Tagline</em>
		</a>
	</nav>
	<div class="container">
		
		<header  style="background: #{$Colour.Value}; background: rgba({$Colour.hex2rgb}, 0.7);" class="overlay">
			<div class="details">
				<h1>$Title</h1>
				<span class="tagLine">$TagLine</span>
			</div>
		</header>
		
		<div id="projectdetails" class="detailscontainer">
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
			
			<% if getAllMedia %>
			<div id="media">
				<% loop getAllMedia %>
					<% if $Type = SWF %>
						<div class="image swf notloaded" data-url="$outputFallback.URL" data-width="$outputFallback.Width" data-height="$outputFallback.Height" data-swf="$File.URL" data-swf-width="$width" data-swf-height="$height" data-alt="$Up.Title" id="media_$Pos">
							<img src="$outputFallback.URL" width="$outputFallback.Width" height="$outputFallback.Height" alt="$Up.Title" />
						</div>
					<% else %>
						<% if $Type = Vimeo %>
							<div class="image vimeo notloaded" data-url="$outputFallback.URL" data-width="$outputFallback.Width" data-vimeo="$vimeoID" data-height="$outputFallback.Height" data-alt="$Up.Title" id="media_$Pos"></div>
						<% else %>
							<% with $outputImage %>
								$outputImage.Height
								<div class="image notloaded" data-url="$URL" data-width="$Width" data-height="$Height" data-alt="$Up.Title" id="media_$Pos"></div>
							<% end_with %>
						<% end_if %>
					<% end_if %>
				<% end_loop %>
			</div>
			<% end_if %>
		</div>
	</div>
	
</section>
<% end_control %>

<% if Project.RelatedProjects %>
<section id="interestedin" class="container records">
	<h2>You might also be interested in:</h2>
	
	<% loop Project.RelatedProjects %>
		<a href="$Top.URLSegment/project/$URLSegment" class="entry<% if MultipleOf(3) %> last<% end_if %>" title="$Name">
		
			<% if Thumbnail %>
				<img src="$Thumbnail.CroppedImage(320,320).URL" alt="$Name" />
			<% end_if %>
			<div class="label">
				<span>
					<strong>$Title</strong>
					<em>$TagLine</em>
				</span>
			</div>
		</a>
	<% end_loop %>
</section>
<% end_if %>