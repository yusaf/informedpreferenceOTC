"use strict";
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
	
	body: $("body"),
	showhide: $("#show-hide"),
	thead: $("#infographic thead"),
	tbody: $("#infographic tbody"),
	key:$("#key"),
	keybox:$("#key .box")
	
}

var cache = {	
	row:"<tr></tr>",
	th:"<th></th>",
	td:"<td></td>",
	person:'<div class="person"><div class="layer layer-1"></div><div class="layer layer-2"></div></div>',
	colors:["#EA2027", "#F79F1F", "#009432", "#C4E538", "#0652DD", "#D980FA", "#12CBC4"]
};

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
		}]		
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
	}
};


function showhide(){	
	$el.body.css('overflow','');
	$el.showhide.hide();
}

$(document).keyup(function(e) {
	if (e.keyCode == 27) {
        showhide()
	}
});
$el.showhide.on("click", function(e){
	if($(e.target).is("#show-hide")){
		showhide();
	}
});
$("#close").on("click", function(){
	showhide();
});

$(".show_result").on("click", function(){
	
	$el.body.css('overflow','hidden');
	$el.showhide.show();
	
	var preset_filter = preset_filters[$(this).attr("id")];
	
	$el.thead.empty();
	$el.tbody.empty();
	$el.keybox.empty();
	
	if(!preset_filter.column && !preset_filter.row){		
		$el.thead.append('<tr><th>All Participants</th></tr>');		
		$el.tbody.append('<tr><td class="all"></td></tr>');		
	}
	
	
	if(!!preset_filter.column){
		var columns = demographics[preset_filter.column];
		
		var column_heading = $( cache.row );
		
		$el.thead.append(column_heading);
		
		if(!!preset_filter.row){
			column_heading
			.append( $(cache.th).addClass("noborder") )
			.append( $(cache.th).addClass("noborder") )
		}
		column_heading.append( $(cache.th).attr("colspan", columns.length).text(demographic_titles[preset_filter.column]) );
		
		var row = $( cache.row );			
		$el.thead.append(row);
		
		$.each(columns, function(index, value){
			var th = $( cache.th ).text(value);
			row.append(th);
		});
		
		if(!!preset_filter.row){
			row
			.prepend( $(cache.th).addClass("noborder") )
			.prepend( $(cache.th).addClass("noborder") );
		}
		else{			
			var row = $( cache.row );	
			$el.tbody.append(row);
			for(var i = 0; i < columns.length; i++){					
				var td = $( cache.td );
				row.append(td);
				td.attr("data-column", columns[i]);
				
			}
		}
	}
	
	if(!!preset_filter.row){
		var rows = demographics[preset_filter.row];
		
		if(!preset_filter.column){
			$el.thead.append('<tr><th class="noborder"></th><th class="noborder"></th><th>All Participants</th></tr>');		
			
		}
		
		$.each(rows, function(index, value){
			
			var row = $( cache.row );		
			$el.tbody.append(row);
			if(index==0){
				var td = $( cache.td ).html(demographic_titles[preset_filter.row].split('').join('<br>')).attr("rowspan", rows.length).addClass("th rowspan");
				row.append(td);
			}
			
			var td = $( cache.td ).text(value).addClass("th");
			row.append(td);
			
			if(!!preset_filter.column){
				
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
	
	
	
	$.each(responses, function(index, response){
		if(!!preset_filter.column && !!preset_filter.row){
			var selector = 'td[data-column="'+response[preset_filter.column]+'"][data-row="'+response[preset_filter.row]+'"]';
		}
		else if(!!preset_filter.column){
			var selector = 'td[data-column="'+response[preset_filter.column]+'"]';				
		}
		else if(!!preset_filter.row){
			var selector = 'td[data-row="'+response[preset_filter.row]+'"]';				
		}
		else{
			var selector = 'td.all';
		}
		
		var person = $( cache.person ).hide().addClass('form_id_'+response.form_id);
		$(selector).append(person);
	});
	
	
	if(preset_filter.highlight){
		$el.key.show();
		if(!preset_filter.colors){
			preset_filter.colors = shuffle(cache.colors);
		}
		
		var response_colors1 = {};
		var response_colors = {};
		var current_color = 0;
		
		for(var excel in response_options[preset_filter.highlight]){
			var isArray = !isNaN(excel);
			excel = isArray ? response_options[preset_filter.highlight][excel] : excel;
			
			if(isArray){
				$el.keybox.append('<div class="key"><div class="square" style="background:'+preset_filter.colors[current_color]+'"></div>'+excel+'</div>');
			}
			else{
				$el.keybox.append('<div class="key"><div class="square" style="background:'+preset_filter.colors[current_color]+'"></div>'+response_options[preset_filter.highlight][excel]+'</div>');
				
			}			
			response_colors1[excel] = preset_filter.colors[current_color];
			current_color++;
		}
		
		var response_colors_keys = Object.keys(response_colors1);
		for(var i = response_colors_keys.length; i--;){
			response_colors[response_colors_keys[i]] = response_colors1[response_colors_keys[i]];
		}
		
		$el.keybox.append('<div class="key"><div class="square" style="background:#FFF"></div>No Response</div>');
		$.each(response_colors, function(response_i, color){
			
			$.each(responses, function(index, response){	
				if(response[preset_filter.highlight] == response_i){
					var resultEl = $(".form_id_"+response.form_id);
					var color1 =  response_colors[ typeof response[preset_filter.highlight] == "string" ? response[preset_filter.highlight] : response[preset_filter.highlight][0] ];
					resultEl.css("background", color1).prependTo(resultEl.parent());
				}					
				else if(Array.isArray(response[preset_filter.highlight]) && response[preset_filter.highlight].length > 1){	
					var resultEl = $(".form_id_"+response.form_id);				
					var color1 =  response_colors[response[preset_filter.highlight][0]];
					var color2 =  response_colors[response[preset_filter.highlight][1]];
					resultEl.css("background-color", color1).css("background", 'linear-gradient(to right, '+color1+' 0%, '+color1+' 50%, '+color2+' 50%, '+color2+' 100%)').prependTo(resultEl.parent());
				}	
				resultEl = null;
			});
			
			
		});
	}
	else{
		$el.key.hide();		
	}
	if(!!preset_filter.filters){
		$.each(responses, function(index, response){
			$.each(preset_filter.filters, function(index, filters){
				
				console.log(response);
				console.log(filters);
				
				var result_matches = true;
				for(var key in filters){
					
					if(Array.isArray(response[key]) && response[key].indexOf(filters[key]) < 0){
						result_matches = false;
						break;					
					}
					else if(response[key] != filters[key]){
						result_matches = false;
						break;
					}
					
				}
				
				if(result_matches){
					$('.form_id_'+response.form_id).show();
					return false;
				}
			});
			
		});
		}
	else{
		$(".person").show();
	}
	
	
});						