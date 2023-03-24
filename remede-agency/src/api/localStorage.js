const stockItem = (key, value) => {
    localStorage ? (
        localStorage.setItem(key,value)
        ) : (
            console.log("Erreur")
        )
}

const loadingItem = (key) => {
    if(localStorage){
        if(key in localStorage){
            return localStorage.getItem(key)
        }
        else {
            return console.log("Aucune key")
        }
    } else {
        return console.log("Erreur")
    }
}

const deleteItem = (key) => {
    localStorage ? (localStorage.removeItem(key)) : (console.log("Erreur"))
} 

export {stockItem, loadingItem, deleteItem} 