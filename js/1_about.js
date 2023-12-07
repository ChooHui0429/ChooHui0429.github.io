function NextAndPrevious(){
    const tpNext = document.querySelector(".education .container .Nav .btnNext");
    const tpPre = document.querySelector(".education .container .Nav .btnPre");
    const eduList = ['MMU', 'SMKTU2', 'SMKTU'];
    const MMU = document.querySelector(".education .container .MMUDegree");
    const SMKTU2 = document.querySelector(".education .container .SMKTU2Second");
    const SMKTU = document.querySelector(".education .container .SMKTUSTPM");
    var i = 0;
    
    tpNext.addEventListener('click', () => {
        i = i + 1;
        if (i == 3){
            i=0;
        }
        if (eduList[i] == 'MMU'){
            SMKTU.classList.remove('active');
            MMU.classList.add('active');
        }
        else if (eduList[i] == 'SMKTU2'){
            MMU.classList.remove('active');
            SMKTU2.classList.add('active');
        }
        if (eduList[i] == 'SMKTU'){
            SMKTU2.classList.remove('active');
            SMKTU.classList.add('active');
        }
    });

    tpPre.addEventListener('click', () => {
        i = i - 1;
        if (i == -1){
            i=2;
        }
        if (eduList[i] == 'MMU'){
            SMKTU2.classList.remove('active');
            MMU.classList.add('active');
        }
        else if (eduList[i] == 'SMKTU2'){
            SMKTU.classList.remove('active');
            SMKTU2.classList.add('active');
        }
        if (eduList[i] == 'SMKTU'){
            MMU.classList.remove('active');
            SMKTU.classList.add('active');
        }
    });
}