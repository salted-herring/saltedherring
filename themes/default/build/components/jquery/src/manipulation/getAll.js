define(["../core"],function(e){function t(t,n){var r=typeof t.getElementsByTagName!="undefined"?t.getElementsByTagName(n||"*"):typeof t.querySelectorAll!="undefined"?t.querySelectorAll(n||"*"):[];return n===undefined||n&&e.nodeName(t,n)?e.merge([t],r):r}return t});