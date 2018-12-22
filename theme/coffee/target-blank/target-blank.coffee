################
# target-blank #
################
# Add “target="_blank"” for all links:
# https://bogdandragomir.com/blog/2016/12/add-target-_blank-attribute-external-anchors-page-javascript-jquery-one-single-line/
add_target_blank_to_external_links = ->
	$('a[href^="http://"], a[href^="https://"]').not('a[href*="' + location.hostname + '"]').attr 'target', '_blank'
	return

jQuery(document).ready ->
	add_target_blank_to_external_links()
	return
