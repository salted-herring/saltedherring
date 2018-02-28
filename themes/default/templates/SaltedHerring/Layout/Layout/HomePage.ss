<section id="work">

	<% if getSliders %>

		<% loop getSliders %>
			<div id="slider-{$ID}" class="block<% if First %> first init<% end_if %>"<% if Images %><% with Images.First %> style="background-image: url($outputImage(1920).URL); background-size: cover;" data-imgwidth="$outputImage(1920).Width" data-imgheight="$outputImage(1920).Height"<% end_with %><% end_if %> data-keyword="$Keyword"<% if Images %> data-images="$Images.Count"<% end_if %> data-id="$ID" data-alt="$AltForImage">
				<% if $OverlayImage %>
					<div class="overlay" style="background-image: url($OverlayImage.ScaleWidth(1920).URL);"></div>
				<% end_if %>

				<div class="text row">
					<span class="header container">$Header</span>
					<div class="contain">

						<div class="headingwrapper">
							<div class="heading"></div>
						</div>
						<% if First %>
							<h1 class="large">Salted <span class="keyword">$Keyword</span></h1>
							<span class="digital">Digital + Brand</span>
						<% else %>
							<h2 class="large">Salted <span class="keyword">$Keyword</span></h2>
						<% end_if %>

						<div class="explanation">
							<% if $Explanation %>
								<p>$Explanation</p>
							<% end_if %>
							<strong class="subtitle">$SubTitle</strong>
							<p class="subexplanation">$SubExplanation</p>
						</div>

						<!-- h2 project-->
							<% if Link %>
    						<div class="container links<% if $Title && $Description %><% else %> button-only<% end_if %>">
    							<% if $Title && $Description %><span><strong>$Title</strong><br><em>$Description</em></span><% end_if %>
    							<a href="$Link.Link" class="link">
    								$LinkTitle
    							</a>
    						</div>
							<% end_if %>


					</div>

					<% if Images && Top.isMobile %>
					<img src="$Images.First.outputImage.URL" alt="$AltForImage" />
					<% end_if %>
				</div>
			</div>
		<% end_loop %>
	<% end_if %>

</section>
							<div class="intro">
								<div class="container">
									<ul class="contactlinks">
										<li><a href="tel:$Top.PhoneLink">$Top.PhoneDisplay</a></li>
										<li class="contact"><a id="btn-to-bottom" href="/contact">contact</a></li>
										<!-- <li class="blog"><a href="http://blog.saltedherring.com" target="_blank">blog</a></li> -->
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
<nav id="nextnav"><a href="#">&darr;</a></nav>
<!-- check marker -->