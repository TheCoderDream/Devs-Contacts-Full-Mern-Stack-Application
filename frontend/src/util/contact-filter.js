export const contactFilter = (contactArr, searchTerm) => {

    if(!searchTerm) return contactArr;

    let searchTermLower = searchTerm.toLowerCase();

    return contactArr.filter(contact => {

        if(contact.name) {
            if(contact.name.toLowerCase().includes(searchTermLower)) return true;
        }

        if(contact.email) {
            if(contact.email.toLowerCase().includes(searchTermLower)) return true;
        }

        if(contact.phone) {
            if(contact.phone.toLowerCase().includes(searchTermLower)) return true;
        }

        return false;
    })

};