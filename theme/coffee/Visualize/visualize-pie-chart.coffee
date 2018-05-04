###
@Author: Kristinita
@Date:   2017-12-28 13:35:33
@Last Modified time: 2017-12-28 13:46:50
###
#############
# visualize #
#############
# pie chart:
# https://www.mathsisfun.com/data/pie-charts.html
$(document).ready ->
	$('.SashaBarChart').visualize
		width: 400
		type: 'pie'
		legend: true
	return
