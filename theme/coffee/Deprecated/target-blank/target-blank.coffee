################
# target-blank #
################
###
[INFO] Add “target="_blank"” for all links:
https://bit.ly/html-target-blank-for-all-attributes
###
add_target_blank_to_external_links = ->
	$('a[href^="http://"], a[href^="https://"]').not('a[href*="' + location.hostname + '"]').attr 'target', '_blank'
	return

jQuery(document).ready ->
	add_target_blank_to_external_links()
	return
