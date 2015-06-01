

<div id="banner" class="collapsed">
	<div class="filters container">
		<% loop getSections %>
			<a href="$Top.URLSegment/$URLSegment"<% if $URLSegment = Section.URLSegment %> class="current"<% end_if %>>$Title</a>
		<% end_loop %>
	</div>
</div>




<% with $Section %>
<section id="about-section" class="container individualentry">
	<article>


		<header style="background: #{$Colour.Value}; background: rgba({$Colour.hex2rgb}, 0.7);">
			<div class="details">
				<h1>$Title</h1>
				<span class="sectionSubTitle">$SectionSubTitle</span>
			</div>
		</header>

		<div class="container">

			<div class="images">
				<img src="$HeroImage.URL" alt=""/>
			</div>

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
<% end_with %>
