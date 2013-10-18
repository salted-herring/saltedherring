<nav class="filters">
	<a href="$URLSegment" class="all">View all</a>
	<% loop getCategories %>
		<a href="$Top.URLSegment/$URLSegment">$Name</a>
	<% end_loop %>
	
	<a href="#">strategy</a>
	<a href="#">websites</a>
	<a href="#">campaigns &amp; microsites</a>
	<a href="#">content creation</a>
	<a href="#">apps &amp; interface design</a>
</nav>

<% if getWork %>
<section id="work">
	<% loop getWork %>
	<a href="$Top.URLSegment/project/$URLSegment" class="work">
		<% if getFirstImage %>
			<% with getFirstImage %>
			<img src="$Image.setWidth(480).URL" alt="$Up.Title" />
			<% end_with %>
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