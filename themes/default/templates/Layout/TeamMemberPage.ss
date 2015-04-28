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
<section id="teammember" class="container individualentry" itemprop="member" itemscope itemtype="http://schema.org/Organization">
	<article>
		<header style="background: #{$Colour.Value}; background: rgba({$Colour.hex2rgb}, 0.7);" class="<% if Images %><% else %> no-images<% end_if %>">
			<div class="details">
				<h1 itemprop="name">$getUserName</h1>
				<span itemprop="jobTitle" class="role">$Role</span>
				<span class="hide" itemprop="worksFor" itemscope itemtype="http://schema.org/Organization">SaltedHerring</span>
			</div>
		</header>

		<div id="memberdetails" class="container<% if Images %><% else %> no-images<% end_if %>">
			<% if Images %>
			<div class="images">
				<% with Images.First %>
						<img src="$outputImage(928).URL" alt="$Up.Up.getUserName" class="current" itemprop="image" />
				<% end_with %>
			</div>
			<% end_if %>

			<div class="row" id="contentarea">
				<div class="content grid_2">
					<% if Intro %><blockquote itemprop="description">$Intro</blockquote><% end_if %>
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
						<a href="tel:$MobileNumber" itemprop="telephone">$MobileNumber</a>
						<% end_if %>

						<% if Email %>
						<a href="mailto:$Email" itemprop="email">$Email</a>
						<% end_if %>
					<% end_if %>
				</aside>
			</div>
		</div>
	</article>

</section>
<% end_with %>
</div>
