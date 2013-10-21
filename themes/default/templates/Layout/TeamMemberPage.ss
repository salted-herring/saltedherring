<% control Member %>
<section id="teammember">
	<article>
		<header style="bakcground: #{$Colour.Value}; background: rgba({$Colour.hex2rgb}, 0.5);">
			<h1>$getUserName</h1>
			<% if $Photographer %><span class="tagLine">Photographed by <a href="$Top.URLSegment/$Photographer.URLSegment">$Photographer.getUserName</a></span><% end_if %>
		</header>
		
		<% with Images.First %>
			<img src="$outputImage.URL" alt="$Up.getUserName" />
		<% end_with %>
		
		<% if Intro %><blockquote>$Intro</blockquote><% end_if %>
		
		<div class="content">
			$Bio
		</div>
		
	</article>
	
	<aside>
		<% if Role %>
		<strong>Role:</strong>
		<span>$Role</span>
		<% end_if %>
		
		<% if Email || MobileNumber %>
			<strong class="contact">Contact:</strong>
			<% if MobileNumber %>
			<a href="tel:$MobileNumber">$MobileNumber</a>
			<% end_if %>
			
			<% if Email %>
			<a href="mailto:$Email">$Email</a>
			<% end_if %>
		<% end_if %>
	</aside>
</section>
<% end_control %>