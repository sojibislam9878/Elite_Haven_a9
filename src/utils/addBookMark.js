export const addBookMark = (singleCard, toast) => {
  const savedEstate = JSON.parse(localStorage.getItem("savedstate")) || [];

  const isExisted = savedEstate.find((item) => item.id == singleCard.id);
  if (!isExisted) {
    savedEstate.push(singleCard);
    localStorage.setItem("savedstate", JSON.stringify(savedEstate));
    location.reload();
  } else {
    toast.error("Already in bookmark", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
