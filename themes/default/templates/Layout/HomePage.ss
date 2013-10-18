<section id="work">
	<% if getSliders %>
		<% loop getSliders %>
			<div class="block<% if First %> first<% end_if %>">
				<div class="text">
					<span class="header">$Header</span>
					
					<div class="heading">
						<span class="salted">Salted</span>
						<span class="keyword">$Keyword</span>
					</div>
					
					<% if First %>
					<nav>
						<ul>
							<% loop Top.Menu(1) %>
								<li>
									<a href="$Link">$MenuTitle.XML</a>
								</li>
							<% end_loop %>
						</ul>
					</nav>
					
					<div class="intro grid_1">
						<a href="tel:+6444731344">+64 (0)4 473 1344</a>
						<a href="#footer" class="contact">contact</a>
						<a href="http://blog.saltedherring.com" target="_blank" class="blog">blog</a>
					</div>
					
					
					
					<% else %>
					<% if Project.getURL || Link.Link %>
					<div class="grid_1 links">
						<a href="<% if Project %>$Project.getURL<% else %>$Link.Link<% end_if %>" class="link">see project</a>
					</div>
					<% end_if %>
					<% end_if %>
				</div>
				<% if Images %>
					<% with Images.First %>
					<img src="$outputImage.URL" alt="" />
					<% end_with %>
				<% end_if %>
			</div>
		<% end_loop %>
	<% end_if %>
</section>
