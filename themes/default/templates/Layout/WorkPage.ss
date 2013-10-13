<% if getCategories %>
<nav class="filters">
	<a href="/work/"<% if category %><% else %> class="all"<% end_if %>>View all</a>
	<% loop getCategories %>
	<a href="/work/category/$URLSegment"<% if $Top.category = $URLSegment %> class="current"<% end_if %>>$Name</a>
	<% end_loop %>
</nav>
<% end_if %>

<section id="work">
	<% if getAllProjects %>
	<% loop getAllProjects %>
	<a href="$getURL" class="work">
		<% if getFirstImage %>
		<img src="$getFirstImage.outputImage.URL" alt="$Name" />
		<% end_if %>
		<div class="label">
			<strong>$Title</strong>
			<span>$TagLine</span>
		</div>
	</a>
	<% end_loop %>
	<% else %>
	<div class="warning">
		<h1>Something's fishy.</h1>
		<p>We don't know what's up. But it's not cool.</p>
	</div>
	<% end_if %>
</section>
<!--
$Form
$Content
-->