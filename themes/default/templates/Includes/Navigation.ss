<nav id="main_nav" class="grid_2 expand">
	<ul>
		<% loop Menu(1) %>
			<li>
				<a href="$Link" class="<% if LinkOrCurrent = current || $LinkOrSection = section %>current<% end_if %>">$MenuTitle.XML</a>
			</li>
		<% end_loop %>
	</ul>
</nav>
