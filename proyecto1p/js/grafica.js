var charData=[
['Estudiantes aprobados con Academia Politecnica de Nivelacion',100],
['Estudiantes reprobados',37]
];

var chart;

addChart = function(){
	chart = c3.generate({
		bindto: "#grafica",
		data: {
			type: 'bar',
			columns: charData
		}
	})
}

$(document).ready(function(){
	addChart();

})