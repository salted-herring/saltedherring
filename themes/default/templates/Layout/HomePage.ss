<section id="work">
	<% if getSliders %>
		<nav id="nextnav"><a href="#">&darr;</a></nav>
		<% loop getSliders %>
			<div class="block<% if First %> first<% end_if %>"<% if Images && Top.isMobile(false) %><% with Images.First %> style="background-image: url($outputImage(1920).URL);"<% end_with %><% end_if %>>
				<div class="text row">
					<span class="header container">$Header</span>
					
					<div class="contain">
						<div class="heading container">
							<span class="salted">Salted</span>
							<span class="keyword">$Keyword</span>
						</div>
						
						<% if First %>
						<% else %>
							<% if Project.getURL || Link.Link %>
						<div class="container links"<% if Colour %> style="background: rgba($Colour.hex2rgb, .5);"<% end_if %>>
						<span><strong>$Project.Title</strong><br><em>$Project.TagLine</em></span>
						<a href="<% if Project %>$Project.getURL<% else %>$Link.Link<% end_if %>" class="link">see project</a>
						</div>
							<% end_if %>
						<% end_if %>
					</div>
					<% if First %>
						<div class="bottom">
							<nav class="container">
								<ul>
									<% loop Top.Menu(1) %>
										<li>
											<a href="$Link">$MenuTitle.XML</a>
										</li>
									<% end_loop %>
								</ul>
							</nav>
							<div class="intro">
								<div class="container">
									<ul class="contactlinks">
										<li><a href="tel:+6444731344">+64 (0)4 473 1344</a></li>
										<li class="contact"><a href="#footer">contact</a></li>
										<li class="blog"><a href="http://blog.saltedherring.com" target="_blank">blog</a></li>
									</ul>
									
									<a href="#" class="down">&darr;</a>
									
									<ul class="news">
										<li>news item</li>
										<li></li>
										<li></li>
										<li></li>
									</ul>
								</div>
								
							</div>
						</div>
					<% end_if %>
					<% if Images && Top.isMobile %>
					<img src="$Images.First.outputImage.URL" alt="" />
					<% end_if %>
				</div>
			</div>
		<% end_loop %>
	<% end_if %>
</section>
