const productContainers = [...document.querySelectorAll('.products_container')];
const nxtBtn = [...document.querySelectorAll('.next')];
const preBtn = [...document.querySelectorAll('.prev')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
