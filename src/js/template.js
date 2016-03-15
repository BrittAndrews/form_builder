export function typeText(formField){

	
	return `
		<label for=" ${formField.id} "> ${formField.label} </label>
		<input type=" ${formField.type} " id=" ${formField.id} "> </input>	

	`;
};


export function typetextField(formField){
	return `
		<label for=" ${formField.id} "> ${formField.label} </label>
		<textarea id= ${formField.id}>  </textarea>
	`;
};

export function typeSelect(formField){
	
	var langOpts = formField.options;

	var langOptsHtml = langOpts.map(function(langOpt){
		return `<option ${langOpt.value}> ${langOpt.label} </option>`;
	});


	return`
		<label for=" ${formField.id} ">  ${formField.label} </label>
		<select id="${formField.id}"> 
		${langOptsHtml}
		</select>

	`;

};



