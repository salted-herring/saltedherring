<% if getTeam %>
<nav id="banner">
	<div class="container">
		<h1 class="title">Team</h1>
		<div class="filters">
			<a href="$URLSegment/" class="current">all</a>
			<% loop getTeam %>
				<a href="$Top.URLSegment/$URLSegment">$FirstName</a>
			<% end_loop %>
		</div>
	</div>
</nav>
<section id="team" class="container records">
	
	<% loop getTeam %>
	<a href="$Top.URLSegment/$URLSegment" class="entry"  style="background: #<% if Colour %>{$Colour.Value}<% else %>333333<% end_if %>;">			
			<% if Thumbnail %>
				<img src="$Thumbnail.CroppedImage(320,320).URL" alt="$Up.getUserName" />
			<% end_if %>
		
		<div class="label" data-name="$FirstName">
			<span>
				<strong>$FirstName $LastName</strong>
				<em>$Role</em>
			</span>
		</div>
	</a>
	<% end_loop %>
</section>
<% end_if %>