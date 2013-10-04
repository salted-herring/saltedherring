<section id="work">
	<div class="block first">
		<div class="text">
			<span class="header">Hi there! Welcome to</span>
			
			<div class="heading">
				<span class="salted">Salted</span>
				<span class="keyword">Herring</span>
			</div>
			
			<nav>
				<ul>
					<% loop Menu(1) %>
						<li>
							<a href="$Link" class="<% if LinkOrCurrent = current || $LinkOrSection = section %>current<% end_if %>">$MenuTitle.XML</a>
						</li>
					<% end_loop %>
				</ul>
			</nav>
			
			<div class="intro grid_1">
				<a href="tel:+6444731344">+64 (0)4 473 1344</a>
				<a href="mailto:info@saltedherring.com">email us</a>
				<a href="#footer" class="contact">Contact Details</a>
			</div>
			
			<a href="#" class="link">to our blog</a>
		</div>
		<img src="$ThemeDir/img/home.jpg" alt="" />
	</div>
	<div class="block">
		<div class="text">
			<span class="header">Hi there! Welcome to</span>
			
			<div class="heading">
				<span class="salted">Salted</span>
				<span class="keyword">Chcoclate</span>
			</div>
			
			<div class="intro grid_1">
				<span class="title">Whittaker's Chocolate</span>
				<span class="desciption">The World's first chocolate website</span>
			</div>
			
			<div class="grid_1 links">
				<a href="#" class="link">see project</a>
			</div>
		</div>
		<img src="$ThemeDir/img/home.jpg" alt="" />
	</div>
</section>
