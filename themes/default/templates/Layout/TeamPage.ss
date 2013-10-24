<% if getTeam %>
<nav id="banner">
	<div class="container">
		<h1 class="title">Team</h1>
		<div class="filters">
			<a href="$URLSegment">all</a>
			<% loop getTeam %>
				<a href="$Top.URLSegment/$URLSegment">$FirstName</a>
			<% end_loop %>
		</div>
	</div>
</nav>
<section id="team" class="container">
	
	<% loop getTeam %>
	<% if Images %>
	<a href="$Top.URLSegment/$URLSegment" class="member">
		
			<% with Images.First %>
			<img src="$Image.CroppedImage(320,320).URL" alt="$Up.getUserName" />
			<% end_with %>
		
		<div class="label">
			<strong>$FirstName $LastName</strong>
			<span>$Role</span>
		</div>
	</a>
	<% end_if %>
	<% end_loop %>
</section>
<% end_if %>