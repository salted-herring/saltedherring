$container.delegate(".element","click",function(){$(this).toggleClass("large"),$container.isotope("reLayout")}),$("#toggle-sizes").find("a").click(function(){return $container.toggleClass("variable-sizes").isotope("reLayout"),!1});