<% if getTeam %>
<section id="team">
	<% loop getTeam %>
	<% if Images %>
	<a href="$Top.URLSegment/$URLSegment" class="member">
		
			<% with Images.First %>
			<img src="$Image.setWidth(480).URL" alt="$Up.Title" />
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