<div id="banner" class="collapsed">
	<div class="filters container">
		<a href="$Parent.URLSegment/"<% if category || getCurrentSession %><% else %> class="all current"<% end_if %>>all</a>
		<% loop getCategories %>
			<a href="{$Top.Parent.AbsoluteLink}category/$URLSegment"<% if $Top.category = $URLSegment || Top.getCurrentSession = $URLSegment %> class="current"<% end_if %>>$Name</a>
		<% end_loop %>
	</div>
</div>

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
	<div class="container" itemscope itemtype="http://schema.org/CreativeWork">

		<header style="background: #{$Colour.Value}; background: rgba({$Colour.hex2rgb}, 0.7);" class="overlay <% if getFirstImage %><% else %> no-images<% end_if %>">
			<div class="details">
				<h1 itemprop="name">$Title</h1>
				<span class="tagLine">$TagLine</span>
			</div>
		</header>

		<div id="projectdetails" class="detailscontainer">
			<% if getFirstImage %>
			<div class="media">
				<img src="$getFirstImage.outputImage.URL" alt="" itemprop="image" />
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
						<% if $Content %><a href="#content" class="fullstory">full story</a><% end_if %>
						<% if SiteURL %><a href="$SiteURL" target="_blank" class="website">visit website</a><% end_if %>
					</nav>
				</div>

				<aside class="grid_1">
					<% if Categories %>
					<% loop Categories %><span itemprop="genre" class="hide">$Name</span><% end_loop %>
					<% end_if %>

					<% if Services %>
					<strong>services:</strong>
					<span itemprop="keywords" class="hide"><% loop Services %>$Name<% if not Last %>,<% end_if %><% end_loop %></span>
					<ul class="services">
						<% loop Services %>
						<li>$Title</li>
						<% end_loop %>
					</ul>
					<% end_if %>

					<% if ProjectAwards %>
					<strong>awards:</strong>
					<ul class="awards">
						<% loop ProjectAwards %>
						<% if Award.Logo %>
						<li><% if URL %><a href="$URL" target="_blank"><% end_if %><% with Award.Logo.ScaleMaxHeight(70) %><img src="$URL" width="$Width" height="$Height" alt="" /><% end_with %><% if URL %></a><% end_if %></li>
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
						<% if isMobile %>
						<% else %>
                        <object
                        type="application/x-shockwave-flash"
                        data="$File.URL"
                        width="$width" height="$height">
                            <param name="movie" value="$File.URL" />
                        </object>
						<%-- <div class="image swf notloaded" data-url="$outputFallback.URL" data-width="$outputFallback.Width" data-height="$outputFallback.Height" data-swf="$File.URL" data-swf-width="$width" data-swf-height="$height" data-alt="$Up.Title" id="media_$Pos">
							<img src="$outputFallback.URL" width="$outputFallback.Width" height="$outputFallback.Height" alt="$Up.Title" />
						</div> --%>
						<% end_if %>

					<% else %>
						<% if $Type = Vimeo %>
							<div class="image vimeo notloaded" data-url="$outputFallback.URL" data-width="$outputFallback.Width" data-vimeo="$vimeoID" data-height="$outputFallback.Height" data-alt="$Up.Title" id="media_$Pos"></div>
						<% else %>
							<% with $outputImage %>
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

<% if RelatedProjects %>
<section id="interestedin" class="container records">
	<h2>You might also be interested in:</h2>

	<% loop RelatedProjects %>
		<a href="$Link" class="entry<% if MultipleOf(3) %> last<% end_if %>" title="$Name">
            <% if $getFirstImage %>
                <% with $getFirstImage.Image.FillMax(320, 320) %>
                    <img src="$URL" alt="$Title" width="$Width" height="$Height" />
                <% end_with %>
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