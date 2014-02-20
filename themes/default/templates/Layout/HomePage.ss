<section id="work">
	
	<% if getSliders %>
		
		<% loop getSliders %>
			<div id="_{$Pos}" class="block<% if First %> first init<% end_if %>" 
			<% if Images %>
				<% with Images.First %> 
			
				style="background-image: url(<% if $Image.Width>1920 %>$outputImage(1920).URL<% else %>$Image.URL<% end_if %>);" data-imgwidth="$outputImage(1920).Width" data-imgheight="$outputImage(1920).Height"
			<% end_with %>
			<% end_if %> data-keyword="$Keyword"<% if Images %> data-images="$Images.Count"<% end_if %> data-id="$ID">
				<% if $OverlayImage %>
					<div class="overlay" style="background-image: url($OverlayImage.SetWidth(1920).URL);"></div>
				<% end_if %>
				
				<div class="text row">
					<span class="header container">$Header</span>
					
					<div class="contain">
						
						
						<div class="headingwrapper">
							<div class="heading">
								<h1 class="salted">Salted</h1>
							</div>
						</div>
						<h1 class="large">Salted</h1>
						<span class="keyword">$Keyword</span>
						
						<% if First %>
							<span class="digital">Digital + Brand</span>
						<% else %>
							<% if Project.getURL || Link.Link %>
						<div class="container links">
						<span><strong>$Title</strong><br><em>$Description</em></span>
						<a href="<% if Project %>$Project.getURL<% else %>$Link.Link<% end_if %>" class="link">see project</a>
						</div>
							<% end_if %>
						<% end_if %>
					</div>
					<% if First %>
						<div class="bottom">
							<!--
<nav class="container">
								<ul>
									<% loop Top.Menu(1) %>
										<li>
											<a href="$Link">$MenuTitle.XML</a>
										</li>
									<% end_loop %>
								</ul>
							</nav>
-->
							<div class="intro">
								<div class="container">
									<ul class="contactlinks">
										<li><a href="tel:+6444731344">+64 (0)4 473 1344</a></li>
										<li class="contact"><a href="#footer">contact</a></li>
										<li class="blog"><a href="http://blog.saltedherring.com" target="_blank">blog</a></li>
									</ul>
									
									<a href="#" class="down">&darr;</a>
									
									<% if $Top.NewsItems %>
									<ul class="news">
										<% loop $Top.NewsItems %>
										<li<% if First %> class="active"<% end_if %>>$Text</li>
										<% end_loop %>
									</ul>
									<% end_if %>
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

<nav id="nextnav"><a href="#">&darr;</a></nav>