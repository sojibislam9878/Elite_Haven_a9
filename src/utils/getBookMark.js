export const getBookMark=()=>{
    const bookMarkCard = JSON.parse(localStorage.getItem("savedstate")) || []
    return bookMarkCard
}