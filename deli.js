function takeANumber(line,name) {
	line.push(name)
	return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
	if (line.length > 0) {
		return `Currently serving ${line.shift()}.`;
	}
	else {
		return "There is nobody waiting to be served!";
	}
}

function currentLine(line) {
	var lineup = 'The line is currently:'
	if (line.length < 1) {
		lineup = (lineup.slice(0,-1) + " empty.");
	} else {
		for (var i = 0; (i < line.length); i++) {
			(lineup += ` ${i + 1}. ${line[i]},`);
		}	
		lineup = lineup.slice(0,-1);
	}
	return lineup
}