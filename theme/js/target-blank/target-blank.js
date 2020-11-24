//###############
// target-blank #
//###############
// Add “target="_blank"” for all links:
// https://bogdandragomir.com/blog/2016/12/add-target-_blank-attribute-external-anchors-page-javascript-jquery-one-single-line/
var add_target_blank_to_external_links;

add_target_blank_to_external_links = function() {
	$('a[href^="http://"], a[href^="https://"]').not('a[href*="' + location.hostname + '"]').attr('target', '_blank');
};

jQuery(document).ready(function() {
	add_target_blank_to_external_links();
});

//# sourceMappingURL=target-blank.js.map
