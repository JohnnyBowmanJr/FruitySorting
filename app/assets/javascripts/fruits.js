$(document).ready(function() {
	$('#sortable').sortable({
		update: function() {
			// get every input element on the page with a class of position
			var fruits = $('input.position');
			results = [];
			//iterate through each text field with class position for each
			//fruit. The value of this text field sets the value of 
			//fruit.position
			_.each(fruits, function(fruit, counter) {
				$(fruit).val(counter);
				//create "id" and set it to value of fruit.id
				var id = $(fruit).data("ar-id");
				//create an array of arrays, with each mini-array
				//equaling [id, position] for each fruit
				results.push([id, counter]);
			});
			$.ajax({
				url: "/fruits/update_position",
				type: "POST",
				data: {results : results}
			});
		}
	});
});
