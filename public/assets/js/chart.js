var color = Chart.helpers.color;
	function createConfig(legendPosition, colorName) {
		return {
			type: 'line',
			data: {
        labels: ['رجب', 'جماد الثاني', 'جماد الاول', 'ربيع الثاني', 'ربيع الاول', 'صفر', 'محرم'],
        datasets: [{
          label: 'مشاهدات',
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
					backgroundColor: color(window.chartColors[colorName]).alpha(0.5).rgbString(),
					borderColor: window.chartColors[colorName],
					borderWidth: 1
				}]
			},
			
			options: {
				responsive: true,
				legend: {
					position: legendPosition,
				},
				
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
              labelString: 'الاشهر'
						}
					}],
					yAxes: [{
						display: true,
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'عدد المشاهدات'
            }
					}]
				},
				
			}
		};
	}

	window.onload = function() {
		[{
			id: 'chart-legend-top',
      legendPosition: false,
      color: 'blue'
		}, {
			id: 'chart-legend-right',
			legendPosition: 'right',
			color: 'blue'
		}, {
			id: 'chart-legend-bottom',
			legendPosition: 'bottom',
			color: 'red'
		}, {
			id: 'chart-legend-left',
			legendPosition: 'left',
			color: 'yellow'
		}].forEach(function(details) {
			var ctx = document.getElementById(details.id).getContext('2d');
			var config = createConfig(details.legendPosition, details.color);
			new Chart(ctx, config);
		});
	};