
<div id="banner" class="collapsed">
	<div class="filters container">
		<% loop $Parent.Children %>
			<a href="$AbsoluteLink"<% if $isCurrent %> class="current"<% end_if %>>$Title</a>
		<% end_loop %>
	</div>
</div>


<%-- <% with $Section %> --%>
<section id="about-section" class="container individualentry">
	<article>


		<header style="background: #{$Colour.Value}; background: rgba({$Colour.hex2rgb}, 0.8);">
			<div class="details">
				<h1>$Title</h1>
				<span class="sectionSubTitle">$SectionSubTitle</span>
			</div>
		</header>

		<div class="container">
            <% if HeroImage %>
			<div class="images">
				<img width="928" height="$HeroImage.ScaleWidth(928).Height" src="$HeroImage.ScaleWidth(928).URL" alt=""/>
			</div>
            <% end_if %>

			<div class="row contentarea">
				<div class="content-col-1">
					<% if Left %>
					<% loop $Left %>
						<div class="contentblock">
							<h2 class="block-title">$Title</h2>
							<blockquote>$SubTitle</blockquote>
							$BodyCopy
						</div>
					<% end_loop %>
					<% end_if %>
				</div>

				<div class="content-col-2">
					<% loop $Right %>
						<div class="contentblock">
							<h2 class="block-title">$Title</h2>
							<blockquote>$SubTitle</blockquote>
							$BodyCopy
						</div>
					<% end_loop %>
				</div>
			</div>
		</div>
	</article>

</section>
<%-- <% end_with %> --%>
