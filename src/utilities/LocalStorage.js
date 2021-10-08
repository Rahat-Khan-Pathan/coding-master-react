// addToCart function to check if local storage is already created, if not create one 
const addToCart = id => {
    const exist = getDB();
    if(!exist) {
        const obj = {}
        localStorage.setItem('cart',JSON.stringify(obj));
        addToDB(id);
    }
    else {
        addToDB(id);
    }
}

// getDB function to get local storage saved data 
const getDB = ()=> {
    return JSON.parse(localStorage.getItem('cart'));
}

// addToDB function to set id to the local storage 
const addToDB = id => {
    const items = getDB();
    items[id]=1;
    localStorage.setItem('cart',JSON.stringify(items));
}

// removerFromDB function to remove id from local storage
const removerFromDB = id => {
    const items = getDB();
    delete items[id];
    localStorage.setItem('cart',JSON.stringify(items));
}
export {addToCart,getDB,addToDB,removerFromDB};