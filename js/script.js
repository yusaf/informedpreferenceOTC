"use strict";

$(".javascript").text("JavaScript is enabled.").css("color", "#008000")

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	
	return array;
}


var $el = {
	form:$("#form .left"),
	infographic_table:$("#infographic"),
	table_head:$("#infographic thead"),
	table:$("#infographic tbody"),
};

var cache = {	
	form_html:'<div class="form"><form></form></div>',
	row:"<tr></tr>",
	th:"<th></th>",
	td:"<td></td>",
	person:'<div class="person"><div class="layer layer-1"></div><div class="layer layer-2"></div></div>',
	collapse:'<div class="title collapse"></div>'
};


$el.form.parent().on("click", '.collapse', function(){
	var $this = $(this);
	if($this.is(".collapsed")){
		$this.removeClass("collapsed")
	}
	else{
		$this.addClass("collapsed")
	}
	
});

function reset_all(){
	
	$el.table_head.empty();
	$el.table.empty();
	
	$el.table_head.append('<tr><th>All Participants</th></tr>')
	
	var row = $( cache.row )
	var cell = $( cache.td )
	
	$el.table.append(row);
	row.append(cell);
	
	$.each(results, function(index, value){
		
		var person = $( cache.person ).addClass('form_id_'+value.form_id);
		cell.append(person);
		
	});
	
}
reset_all();


/* form to change columns and rows */
(function(){
	
	var form = $( cache.form_html );
	var column = $( '<div class="group"><span class="title">Column:</span></div>' );
	var row = $( '<div class="group"><span class="title">Row:</span></div>' );
	
	$el.form.append( form );
	$( cache.collapse ).text("Choose columns/rows").insertBefore(form);
	form = form.find("form");
	form.append(column);
	form.append(row);
	form.append('<label><input id="keep_same" type="checkbox">Keep columns/rows for preset filters</label>');
	
	$.each(demographic_titles, function(key, value){		
		column.append('<label><input type="radio" name="xy-column" value="'+key+'">'+value+'</label>');
		row.append('<label><input type="radio" name="xy-row" value="'+key+'">'+value+'</label>');		
	})
	
	
	
	$('input[name^="xy-"]').on("change", function(){
		
		
		var $this = $(this);
		var name = $this.attr("name");
		var value = $this.attr("value");
		var selector = 'input[name="' + (name == "xy-column" ? "xy-row" : "xy-column") + '"][value="' + value + '"]';
		
		$(selector).prop( "checked", false );
		
		$('#key').hide();
		
		
		var current_column = $('input[name="xy-column"]:checked').val();
		var current_row = $('input[name="xy-row"]:checked').val();
		
		
		
		
		$el.table_head.empty();
		$el.table.empty();
		
		
		
		if(!!current_column){
			var columns = demographic_options[current_column];
			
			
			var column_heading = $( cache.row );
			$el.table_head.append(column_heading);
			if(!!current_row) column_heading.append( $(cache.th).addClass("noborder") ).append( $(cache.th).addClass("noborder") );
			column_heading.append( $(cache.th).attr("colspan", columns.length).text(demographic_titles[current_column]) );
			
			var row = $( cache.row );			
			$el.table_head.append(row);
			
			
			$.each(columns, function(index, value){
				var th = $( cache.th ).text(value);
				row.append(th);
			});
			
			if(!!current_row){
				
				row.prepend( $(cache.th).addClass("noborder") ).prepend( $(cache.th).addClass("noborder") );
			}
			else{
				
				var row = $( cache.row );	
				$el.table.append(row);
				for(var i = 0; i < columns.length; i++){					
					var td = $( cache.td );
					row.append(td);
					td.attr("data-column", columns[i]);
					
				}
			}
		}
		
		if(!!current_row){
			var rows = demographic_options[current_row];
			
			$.each(rows, function(index, value){
				
				var row = $( cache.row );		
				$el.table.append(row);
				if(index==0){
					var td = $( cache.td ).html(demographic_titles[current_row].split('').join('<br>')).attr("rowspan", rows.length).addClass("th rowspan");
					row.append(td);
				}
				
				var td = $( cache.td ).text(value).addClass("th");
				row.append(td);
				
				if(!!current_column){
					
					for(var i = 0; i < columns.length; i++){						
						var td = $( cache.td );
						row.append(td);
						td.attr("data-column", columns[i]).attr("data-row", value);
					}
					
				}
				else{					
					var td = $( cache.td );
					row.append(td);			
					td.attr("data-row", value);		
				}
				
			});
			
			
		}
		
		$.each(results, function(index, value){
			if(!!current_column && !!current_row){
				var selector = 'td[data-column="'+value[current_column]+'"][data-row="'+value[current_row]+'"]';
			}
			else if(!!current_column){
				var selector = 'td[data-column="'+value[current_column]+'"]';				
			}
			else{
				var selector = 'td[data-row="'+value[current_row]+'"]';				
			}
			
			var person = $( cache.person ).addClass('form_id_'+value.form_id);
			$(selector).append(person);
		});
		$("input.filter:eq(0)").trigger("change");
	});
	
})();

/* create highlighters */
(function(){
	var color_array = ["#EA2027", "#F79F1F", "#009432", "#C4E538", "#0652DD", "#D980FA", "#12CBC4"];
	
	
	$( cache.collapse ).text("Highlight").appendTo($el.form);
	
	var form = $( cache.form_html );
	
	var keyEl = $('<div id="key"></div>'); 
	keyEl.append('<div class="title">Key</div>').hide();
	
	$el.form.append( form );
	
	keyEl.insertBefore($el.infographic_table)
	
	//form.append( keyEl );
	
	form = form.find("form");
	
	
	$.each(questions, function(key, value){
		form.append('<div class="title">'+value.number+'. '+value.question+' <button class="highlight" data-key="'+key+'">Highlight responses</button></div>');
	});
	
	$(".highlight").on("click", function(e){
		e.preventDefault();
		
		$(".person").css("background", "")
		keyEl.show().find("*:not(.title)").remove();
		
		var key = $(this).data("key");
		keyEl.append('<div style="padding:10px;">'+questions[key].question+'</div>');
		
		var colors = shuffle(color_array);
		var response_colors = {};
		var current_color = 0;
		
		
		for(var excel in result_responses[key]){
			var isArray = !isNaN(excel);
			excel = isArray ? result_responses[key][excel] : excel;
			
			if(isArray){
				keyEl.append('<div class="key"><div class="square" style="background:'+colors[current_color]+'"></div>'+excel+'</div>');
			}
			else{
				keyEl.append('<div class="key"><div class="square" style="background:'+colors[current_color]+'"></div>'+result_responses[key][excel]+'</div>');
				
			}
			
			response_colors[excel] = colors[current_color];
			current_color++;
		}
		keyEl.append('<div class="key"><div class="square" style="background:#FFF"></div>No Response</div>');
		
		
		$.each(response_colors, function(response_i, color){
			
			$.each(results, function(index, result){	
				if(result[key] == response_i){
					var resultEl = $(".form_id_"+result.form_id);
					var color1 =  response_colors[ typeof result[key] == "string" ? result[key] : result[key][0] ];
					resultEl.css("background", color1).prependTo(resultEl.parent());
				}					
				else if(Array.isArray(result[key]) && result[key].length > 1){	
					var resultEl = $(".form_id_"+result.form_id);				
					var color1 =  response_colors[result[key][0]];
					var color2 =  response_colors[result[key][1]];
					resultEl.css("background-color", color1).css("background", 'linear-gradient(to right, '+color1+' 0%, '+color1+' 50%, '+color2+' 50%, '+color2+' 100%)').prependTo(resultEl.parent());
				}	
				resultEl = null;
			});
			
			
		});
		
	});
	
})();



/* reset button */
(function(){
	
	
	var reset_button = $('<button id="reset">Reset All</button>')
	$el.form.parent().after(reset_button)
	
	reset_button.on("click", function(){		
		reset_all();
		$el.form.find('input[type="radio"]').prop("checked", false);
		$('.filter.form').remove();
		$('.filter_title').remove();
		$('#key').hide();
	});
	
	var reset_filters_button = $('<button id="reset_filters">Reset Filters</button>')
	$el.form.parent().after(reset_filters_button)
	
	reset_filters_button.on("click", function(){
		
		reset_all();
		
		var column = $('input[name="xy-column"]:checked');
		var row = $('input[name="xy-row"]:checked');
		
		$el.form.find('input[type="radio"]').prop("checked", false);
		$('.filter.form').remove();
		$('.filter_title').remove();
		$('#key').hide();
		
		if(column.length) column.prop("checked", true).trigger("change");;
		if(row.length) row.prop("checked", true).trigger("change");
		
	});
	
	var collapse_button = $('<button>Collapse All</button>')
	$el.form.parent().after(collapse_button)
	collapse_button.on("click", function(){
		$el.form.parent().find('.collapse').addClass("collapsed");
	});
	
})();

/* create filters */
(function(){
	
	var filter_counter = 0;
	var add_filer_button = $('<button id="add_filter">Add Filter</button>')
	$el.form.parent().after(add_filer_button)
	
	add_filer_button.on("click", function(){
		filter_counter++;
		
		$( cache.collapse ).text("Filter #"+filter_counter).addClass("filter_title").appendTo($el.form);
		
		var form = $( cache.form_html ).addClass("filter");		
		$el.form.append( form );
		form = form.find("form");
		
		$.each(questions, function(key, value){
			
			var group = $('<div class="group question_'+value.number+'"></div>');
			
			if(!!value.nested_under){
				form.find('.question_'+value.nested_under).append(group);
			}
			else{
				form.append(group);
			}
			
			var question = $('<div class="title">'+value.number+'. '+value.question+'</div>');
			group.append(question);
			
			$.each(result_responses[key], function(index, response){
				
				var value_attr = (typeof index == "number") ? response : index;
				group.append('<label><input type="radio" name="'+key+'" value="'+value_attr+'" class="filter">'+response+'</label>');
				
			});
			
			
		});
		
		
	});
	
})();

$("body").on("change", "input.filter", $.debounce( 250, function(){
	
	if($(".form.filter").length){
		$(".person").hide();
	}
	else{
		$(".person").show();		
	}
	
	$(".form.filter").each(function(){
		
		var match = {};
		$(this).find("input:checked").each(function(){
			var $this = $(this);
			match[$this.attr("name")] = $this.val();
		});
		
		$.each(results, function(index, response){
			
			var result_matches = true;
			
			for(var key in match){
				if(Array.isArray(response[key]) && response[key].indexOf(match[key]) < 0){
					result_matches = false;
					break;					
				}
				else if(response[key] != match[key]){
					result_matches = false;
					break;
				}
			}
			
			if(result_matches) $('.form_id_'+response.form_id).show();
			
		});
		
		
	});
	
}));



var preset_filters = {
	
	
	responses:{		
		column:"pharmacy_id"
	},
	responses_ethnicity:{		
		row:"ethnic_group"
	},
	responses_gender:{		
		column:"gender"
	},
	responses_age:{		
		column:"age_band"
	},
	responses_age_gender:{		
		column:"age_band",	
		row:"gender"
	},
	
	
	reasons:{
		highlight:"reason",
	},
	age_reasons:{
		highlight:"reason",
		column:"age_band"
	},
	gender_reasons:{
		highlight:"reason",
		column:"gender"
	},
	
	bought:{
		highlight:"bought",
		filters:[{
			reason:"Buy a Medicine"
		}]
	}, 
	
	intention:{
		highlight:"intention",
		filters:[{
			reason:"Buy a Medicine"
		}]
		
	},
	
	intention_same:{
		highlight:"same",
		filters:[{
			reason:"Buy a Medicine",
			intention:"Yes"
		}],
		
	},
	
	intention_same_genders:{
		highlight:"same",
		filters:[{
			reason:"Buy a Medicine",
			intention:"Yes"
		}],
		column:"gender"
		
	},
	
	influences:{
		highlight:"influence",
		filters:[{
			reason:"Buy a Medicine",
			intention:"Yes"
		}]		
	},
	
	influences_non:{
		highlight:"influence",
		filters:[{
			reason:"Buy a Medicine",
			intention:"No"
		}]		
	},
	influence_used_before:{
		highlight:"trust",
		filters:[{
			reason:"Buy a Medicine",
			influence:"Used Before"
		}]		
	},
	influence_used_ff:{
		highlight:"trust",
		filters:[{
			reason:"Buy a Medicine",
			influence:"Recommended by family/friend"
		}]		
	},
	influence_used_hcp:{
		highlight:"trust",
		filters:[{
			reason:"Buy a Medicine",
			influence:"Recommended by HCP"
		}]		
	},
	
	buy_not_discussed:{
		highlight:"symptoms",
		filters:[{
			reason:"Buy a Medicine",
			bought:"No"
			},{
			reason:"Buy a Medicine",
			intention:"Yes",
			same:"No"		
		}]		
		
	},
	
	recommeded_family_same:{
		highlight:"same",
		filters:[{
			reason:"Buy a Medicine",
			influence:"Recommended by family/friend",
			symptoms:"Yes"
		}]		
		
	},
	
	used_before_discussed:{
		highlight:"symptoms",
		filters:[{
			reason:"Buy a Medicine",
			influence:"Used Before"
		}]
		
	},
	
	gender_discussed:{
		highlight:"symptoms",
		filters:[{
			reason:"Buy a Medicine"
		}],
		column:"gender"
		
	},
	age_discussed:{
		highlight:"symptoms",
		filters:[{
			reason:"Buy a Medicine"
		}],
		column:"age_band"
		
	},
	symptoms_helpful:{
		highlight:"helpful",
		column:"age_band",
		filters:[{
			reason:"Buy a Medicine"
		}]		
	},
	
	where_information:{
		highlight:"advice"
	},
	where_information_age:{
		highlight:"advice",
		column:"age_band"
	},
	where_information_gender:{
		highlight:"advice",
		column:"gender"
	},
	
	
};




(function(){
	
	var reset = $("#reset");
	var reset_filters = $("#reset_filters");
	var add_filter = $("#add_filter");
	var keep_same = $("#keep_same");
	
	$(".show_result").on("click", function(e){
		
		e.preventDefault();
		
		
		var data = preset_filters[$(this).attr("id")];
		
		if(!keep_same.is(":checked")){
			reset.click();
		}
		else{
			reset_filters.click();
		}
		
		if(data.column){		
			$el.form.find('input[name="xy-column"][value="'+data.column+'"]').click();		
		}
		if(data.row){		
			$el.form.find('input[name="xy-row"][value="'+data.row+'"]').click();		
		}
		
		
		if(data.filters){
			$.each(data.filters, function(index, filters){
				add_filter.click();
				var form = $('.form.filter:last');			
				$.each(filters, function(name, value){
					form.find('input[name="'+name+'"][value="'+value+'"]').click();				
				});			
			});		
		}
		
		
		if(data.highlight){
			$('button.highlight[data-key="'+data.highlight+'"]').click();
		}
		else{			
			$(".person").css("background", "")
		}
		
		$(".left .collapse").addClass("collapsed");
		
		$('html, body').animate({
			scrollTop: $el.infographic_table.offset().top - 100
		}, 500);
		
	});
	
	
	
	
})();	
