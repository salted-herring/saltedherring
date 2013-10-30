<% if getCategories %>
<nav id="banner">
	<div class="container">
		<h1 class="title">Work</h1>
		<div class="filters">
			<strong>Filter by:</strong>
			<a href="$URLSegment"<% if category %><% else %> class="all"<% end_if %>>all</a>
			<% loop getCategories %>
				<a href="$Top.URLSegment/category/$URLSegment"<% if $Top.category = $URLSegment %> class="current"<% end_if %>>$Name</a>
			<% end_loop %>
		</div>
	</div>
</nav>
<% end_if %>

<% if getAllProjects %>
<section id="work">
	<div class="container">
	<% loop getAllProjects %>
		<a href="$Top.URLSegment/project/$URLSegment" class="work<% if MultipleOf(3) %> last<% end_if %>">
		
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
	</div>
</section>
<% end_if %>