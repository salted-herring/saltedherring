<% if getCategories %>
<nav id="banner">
	<div class="container">
		<h1 class="title">Work</h1>
		<div class="filters workfilters">
			<strong>Filter by:</strong>
			<a href="$URLSegment/"<% if category %><% else %> class="all"<% end_if %> data-class="all">all</a>
			<% loop getCategories %>
				<a href="$Top.URLSegment/category/$URLSegment"<% if $Top.category = $URLSegment || Top.getCurrentSession = $URLSegment %> class="current"<% end_if %> data-class="$URLSegment">$Name</a>
			<% end_loop %>
		</div>
	</div>
</nav>
<% end_if %>

<% if getAllProjects %>
<section id="work" class="container records <% if $categoryName %>$categoryName<% else %>all<% end_if %> init">
	<% loop getAllProjects %>
		<a href="$Top.URLSegment/project/$URLSegment" data-sortorder="$SortOrder" class="entry <% loop $Categories %>$legalName <% end_loop %> all" title="$Name">
		
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
	<div class="noelems">
		Looks like there's nothing here.<br>We better get back to work.
	</div>
</section>
<% end_if %>