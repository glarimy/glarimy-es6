export function print(o){
	let str = `${o.constructor.name}: [`;
	for(const entry of Object.entries(o)){
		str += `${entry[0]} : ${entry[1]}; `;
	}
	str += ']';
	console.log(str);
}