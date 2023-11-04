const tabs = document.querySelectorAll(".tabs li");
const testList = document.querySelectorAll(".test-list");
console.log(testList);

tabs.forEach((tab) => {
  tab.onclick = () => {
    tabs.forEach((e) => {
      e.classList.remove("active");
    });
    tab.classList.add("active");
    const className = tab.dataset.count;
    console.log(className);
    testList.forEach((list) => {
      list.classList.remove("active");
      if (list.classList.contains(className)) {
        list.classList.add("active");
      }
    });
  };
});
