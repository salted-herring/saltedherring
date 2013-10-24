<% control Member %>
<section id="teammember" class="container">
	<article>
		<header style="background: #{$Colour.Value}; background: rgba({$Colour.hex2rgb}, 0.5);">
			<h1>$getUserName</h1>
			<span class="tagLine">Photography by <a href="$Top.URLSegment/$Photographer.URLSegment">$Photographer.getUserName</a></span>
		</header>
		
		<% with Images.First %>
			<img src="$outputImage.URL" alt="$Up.getUserName" />
		<% end_with %>
		
		<div class="row" id="contentarea">
			<div class="content grid_2">
				<% if Intro %><blockquote>$Intro</blockquote><% end_if %>
			
				$Bio
			</div>
			
			<aside class="grid_1">
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
		</div>
	</article>
	
	</section>
<% end_control %>