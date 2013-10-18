<% if getCategories %>
<nav class="filters">
	<a href="$URLSegment"<% if category %><% else %> class="all"<% end_if %>>View all</a>
	<% loop getCategories %>
		<a href="$Top.URLSegment/category/$URLSegment"<% if $Top.category = $URLSegment %> class="current"<% end_if %>>$Name</a>
	<% end_loop %>
</nav>
<% end_if %>

<% if getAllProjects %>
<section id="work">
	<% loop getAllProjects %>
		<a href="$Top.URLSegment/project/$URLSegment" class="work">
		
			<% if getFirstImage %>
				<img src="$getFirstImage.outputImage.URL" alt="$Name" />
			<% end_if %>
			<div class="label">
				<strong>$Title</strong>
				<span>$TagLine</span>
			</div>
		</a>
	<% end_loop %>
</section>
<% end_if %>
<!--
$Form
$Content
-->