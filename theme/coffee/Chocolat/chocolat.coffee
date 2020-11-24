############
# Chocolat #
############
###
[INFO] Chocolat — responsive lightbox:
http://chocolat.insipi.de/
[INFO] Quickstart:
http://chocolat.insipi.de/#getting-started
[INFO] Documentation:
https://chocolat.gitbook.io/chocolat/
[INFO] Options; I use default:
https://chocolat.gitbook.io/chocolat/options

[INFO] Default theme is gray, I use my own:
https://i.imgur.com/kXatbzj.png
###
document.addEventListener 'DOMContentLoaded', (event) ->
	Chocolat document.querySelectorAll('.chocolat-parent .chocolat-image')
