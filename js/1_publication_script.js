function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function CollapseExpandBox(togglePoint, ToggleContent1, ToggleContent2) {
    const tp = document.querySelector(togglePoint);
    const tc1 = document.querySelector(ToggleContent1);
    const tc2 = document.querySelector(ToggleContent2);

    tp.addEventListener('click', () => {
        if (tc1 == document.querySelector(ToggleContent1)) {
            tc1.classList.add('animated');
            tc2.classList.add('animated');
        }

        if (tc1 == document.querySelector(".publication .pageOrg .projectContainer .HER2-SISH2023 .Her2Contain2.animated.toggle")) {
            tc1.classList.toggle('toggle');
            setTimeout(() => {
                tc2.classList.toggle('toggle');
            }, 800);
        }
        else {
            tc1.classList.toggle('toggle');
            tc2.classList.toggle('toggle');
        }
        
    });
}