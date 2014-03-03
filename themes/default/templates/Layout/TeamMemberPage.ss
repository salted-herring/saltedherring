<div id="banner" class="collapsed">
	<div class="filters container">
		<a href="$URLSegment">all</a>
		<% loop getTeam %>
			<a href="$Top.URLSegment/$URLSegment"<% if $URLSegment = Member.URLSegment %> class="current"<% end_if %>>$FirstName</a>
		<% end_loop %>
	</div>
</div>
<div class="contain">
	<% with Member %>
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
<section id="teammember" class="container individualentry">
	<article>
		<header style="background: #{$Colour.Value}; background: rgba({$Colour.hex2rgb}, 0.7);" class="overlay<% if Images %><% else %> no-images<% end_if %>">
			<div class="details">
				<h1>$getUserName</h1>
				<span class="role">$Role</span><% if Photographer %><span class="photographer">Photography by <a href="$Top.URLSegment/$Photographer.URLSegment">$Photographer.FirstName</a></span><% end_if %>
			</div>
		</header>
		
		<div id="memberdetails" class="detailscontainer<% if Images %><% else %> no-images<% end_if %>">
			<% if firstAnimatedImage %>
			<div class="images">
				<% with firstAnimatedImage %>
					<% if First %>
						<img src="$outputImage.URL" alt="$Up.getUserName" class="current" />
					<% end_if %>
				<% end_with %>
			</div>
			<% end_if %>
			
			<div class="row" id="contentarea">
				<div class="content grid_2">
					<% if Intro %><blockquote>$Intro</blockquote><% end_if %>
					$Bio
				</div>
				
				<aside class="grid_1">
					<% if Role %>
					<strong>Role:</strong>
					<span>$Role</span>
					<% end_if %>
					
					<% if Responsibilities %>
					<strong class="responsibilities">Responsibilities:</strong>
					<span>$Responsibilities</span>
					<% end_if %>
					
					<% if Email || MobileNumber %>
						<strong class="contact">Contact:</strong>
						<% if MobileNumber %>
						<a href="tel:$MobileNumber">$MobileNumber</a>
						<% end_if %>
						
						<% if Email %>
						<a href="mailto:$Email">$Email</a>
						<% end_if %>
					<% end_if %>
				</aside>
			</div>
		</div>
	</article>
	
</section>
<% end_with %>
</div>