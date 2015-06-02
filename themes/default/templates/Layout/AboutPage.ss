

<nav id="banner" class="landingPage">
	<div class="container">
		<h1 class="title">About</h1>
		<div class="filters">
			<% loop getSections %>
				<a href="$Top.URLSegment/$URLSegment">$Title</a>
			<% end_loop %>
		</div>
	</div>
</nav>


<section id="about-landing" class="container">
	<div class="col1">
		<h2 class="pagetitle">$PageTitle</h2>
	</div>

	<div class="col2">
		<h3 class="subtitle">$SubTitle</h3>

		<p class="intro-copy">
			$IntroCopy
		</p>

	</div>

</section>


<div class="container services">


	<% loop Sections %>

		<a href="$Top.URLSegment/$URLSegment" class="entry">
			<img src="$Thumbnail.URL" class="thumbnail" />

			<div class="label">
				<span>
					<strong>$Title</strong>
					<em>$SectionSubTitle</em>
				</span>
			</div>
		</a>

	<% end_loop %>


</div>




