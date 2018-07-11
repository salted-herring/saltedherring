<% if Children %>
<nav id="banner">
    <div class="container">
        <h1 class="title">Team</h1>
        <div class="filters">
            <% loop Children %>
                <% if Me.isPublished && Me.ShowInMenus %>
                    <a href="$Top.URLSegment/$URLSegment"<% if $MultipleOf(3) %> class="_3"<% end_if %>>$FirstName</a>
                <% end_if %>
            <% end_loop %>
        </div>
    </div>
</nav>
<section id="team" class="container records">

    <% loop Children.sort(SortOrder) %>
        <% if Me.isPublished %>
            <a href="$Top.URLSegment/$URLSegment" class="entry<% if Thumbnail && ThumbnailOver %> thumbnail<% end_if %>" <% if Thumbnail %><% else %> style="background: #<% if Colour %>{$Colour.Value}<% else %>333333<% end_if %>;"<% end_if %>>
                <% if Thumbnail %>
                    <% with $Thumbnail.FillMax(320,320) %>
                    <img src="$URL" alt="$Title" width="$Width" height="$Height" class="thumbnail" />
                    <% end_with %>
                <% end_if %>

                <% if ThumbnailOver %>
                    <% with $ThumbnailOver.FillMax(320,320) %>
                    <img src="$URL" alt="$Title" width="$Width" height="$Height" class="thumbnailover" />
                    <% end_with %>
                <% end_if %>

                <div class="label" data-name="$FirstName">
                    <span>
                        <strong>$FirstName $LastName</strong>
                        <em>$Role.XML</em>
                    </span>
                </div>
            </a>
        <% end_if %>
    <% end_loop %>
</section>
<% end_if %>
