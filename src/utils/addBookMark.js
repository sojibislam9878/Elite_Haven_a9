export const addBookMark = (singleCard)=>{
    const savedEstate=JSON.parse(localStorage.getItem("savedstate")) || []

    const isExisted = savedEstate.find(item=> item.id == singleCard.id)
    if (!isExisted) {
        savedEstate.push(singleCard)
        localStorage.setItem("savedstate", JSON.stringify(savedEstate))
        location.reload()
    }
    else{
        alert("hello vai")
    }
}