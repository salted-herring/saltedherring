	<% if $getOG(Title) %><meta property="og:title" content="$getOG(Title)" /><% end_if %>
	<% if $getOG(Description) %><meta property="og:description" content="$getOG(Description)" /><% end_if %>
	<% if $getOG(Image) %><meta property="og:image" content="$getOG(Image).AbsoluteURL" /><% end_if %>
	<% if $getCurrentPageUrl %><meta property="og:url" content="$getCurrentPageUrl" /><% end_if %>
