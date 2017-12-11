import Error from "./Error";

class Directory{
	constructor(){
		this.contacts = [];
	}

	add(contact){
		this.contacts.push(contact);
	}

	find(id){
		for(const contact of this.contacts){
			if(contact.id == id){
				return contact;
			}
		}
		throw new Error("not found");
	}
};

export default Directory;