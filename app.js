//VARIABLE
let isBasic = true;
let isTesting = false;
let shuffle = false;
const basic = {
    elements: [
        ["수소", "H"],
        ["리튬", "Li"],
        ["나트륨", "Na"],
        ["칼륨", "K"],
        ["마그네슘", "Mg"],
        ["붕소", "B"],
        ["알루미늄", "Al"],
        ["탄소", "C"],
        ["은", "Ag"],
        ["금", "Au"],
        ["수은", "Hg"],
        ["철", "Fe"],
        ["구리", "Cu"],
        ["규소", "Si"],
        ["질소", "N"],
        ["납", "Pb"],
        ["인", "P"],
        ["산소", "O"],
        ["황", "S"],
        ["플루오린", "F"],
        ["염소", "Cl"],
        ["아이오딘", "I"],
        ["헬륨", "He"],
        ["네온", "Ne"]
    ],
    molecules: [
        ["수소", "H<sub>2</sub>"],
        ["염화수소", "HCl"],
        ["메테인", "CH<sub>4</sub>"],
        ["질소", "N<sub>2</sub>"],
        ["암모니아", "NH<sub>3</sub>"],
        ["이산화탄소", "CO<sub>2</sub>"],
        ["일산화탄소", "CO"],
        [" ", " "],
        ["물", "H<sub>2</sub>O"],
        ["산소", "O<sub>2</sub>"],
        ["과산화수소", "H<sub>2</sub>O<sub>2</sub>"],
        [" ", " "]
    ],
    ions: [
        ["수소이온", "H<sup>+</sup>"],
        ["리튬이온", "Li<sup>+</sup>"],
        ["은이온", "Ag<sup>+</sup>"],
        ["나트륨 이온", "Na<sup>+</sup>"],
        ["칼륨이온", "K<sup>+</sup>"],
        ["마그네슘 이온", "Mg<sup>2+</sup>"],
        ["칼슘이온", "Ca<sup>2+</sup>"],
        ["납이온", "Pb<sup>2+</sup>"],
        ["구리이온", "Cu<sup>2+</sup>"],
        ["알루미늄 이온", "Al<sup>3+</sup>"],
        ["암모늄 이온", "NH<sub>4</sub><sup>+</sup>"],
        ["산화이온", "O<sup>2-</sup>"],
        ["염화이온", "Cl<sup>-</sup>"],
        ["아이오딘화 이온", "I<sup>-</sup>"],
        ["수산화 이온", "OH<sup>-</sup>"],
        ["질산이온", "NO<sub>3</sub><sup>-</sup>"],
        ["탄산이온", "CO<sub>3</sub><sup>2-</sup>"],
        ["황산이온", "SO<sub>4</sub><sup>2-</sup>"],
        ["황화이온", "S<sup>2-</sup>"],
        ["아세트산 이온", "CH<sub>3</sub>COO<sup>-</sup>"],
        ["", ""]
    ],
    precipitates: [
        ["염화 은", "Ag<sup>+</sup>", "Cl<sup>-</sup>", "AgCl", "흰색"],
        [
            "아이오딘화 납",
            "Pb<sup>2+</sup>",
            "I<sup>-</sup>",
            "PbI<sub>2</sub>",
            "노란색"
        ],
        [
            "탄산 칼슘",
            "Ca<sup>2+</sup>",
            "CO<sub>3</sub><sup>2-</sup>",
            "CaCO<sub>3</sub>",
            "흰색"
        ]
    ],
};
const hard = {
    elements: [
        ["수소", "H"],
        ["리튬", "Li"],
        ["나트륨", "Na"],
        ["칼륨", "K"],
        ["마그네슘", "Mg"],
        ["붕소", "B"],
        ["알루미늄", "Al"],
        ["브로민", "Br"],
        ["탄소", "C"],
        ["은", "Ag"],
        ["금", "Au"],
        ["수은", "Hg"],
        ["철", "Fe"],
        ["구리", "Cu"],
        ["규소", "Si"],
        ["질소", "N"],
        ["납", "Pb"],
        ["인", "P"],
        ["산소", "O"],
        ["황", "S"],
        ["플루오린", "F"],
        ["염소", "Cl"],
        ["아이오딘", "I"],
        ["헬륨", "He"],
        ["네온", "Ne"],
        ["카드뮴", "Cd"],
        ["망가니즈", "Mn"],
        ["크로뮴", "Cr"],
        ["아연", "Zn"],
        ["", ""]
    ],
    molecules: [
        ["과산화수소", "H<sub>2</sub>O<sub>2</sub>"],
        ["수소", "H<sub>2</sub>"],
        ["염화수소", "HCl"],
        ["메테인", "CH<sub>4</sub>"],
        ["질소", "N<sub>2</sub>"],
        ["암모니아", "NH<sub>3</sub>"],
        ["이산화탄소", "CO<sub>2</sub>"],
        ["일산화탄소", "CO"],
        ["물", "H<sub>2</sub>O"],
        ["산소", "O<sub>2</sub>"],
        ["황산", "H<sub>2</sub>SO<sub>4</sub>"],
        [" ", " "],
    ],
    ions: [
        ["수소이온", "H<sup>+</sup>"],
        ["칼륨이온", "K<sup>+</sup>"],
        ["은이온", "Ag<sup>+</sup>"],
        ["나트륨 이온", "Na<sup>+</sup>"],
        ["구리이온", "Cu<sup>2+</sup>"],
        ["리튬이온", "Li<sup>+</sup>"],
        ["카드뮴 이온", "Cd<sup>2+</sup>"],
        ["철(II)이온", "Fe<sup>2+</sup>"],
        ["납이온", "Pb<sup>2+</sup>"],
        ["바륨이온", "Ba<sup>2+</sup>"],
        ["마그네슘 이온", "Mg<sup>2+</sup>"],
        ["알루미늄 이온", "Al<sup>3+</sup>"],
        ["암모늄 이온", "NH<sub>4</sub><sup>+</sup>"],
        ["칼슘이온", "Ca<sup>2+</sup>"],
        ["아연이온", "Zn<sup>2+</sup>"],
        ["염화이온", "Cl<sup>-</sup>"],
        ["아이오딘화 이온", "I<sup>-</sup>"],
        ["황화이온", "S<sup>2-</sup>"],
        ["수산화 이온", "OH<sup>-</sup>"],
        ["탄산이온", "CO<sub>3</sub><sup>2-</sup>"],
        ["플루오린화 이온", "F<sup>-</sup>"],
        ["브로민화이온", "Br<sup>-</sup>"],
        ["황산이온", "SO<sub>4</sub><sup>2-</sup>"],
        ["질산이온", "NO<sub>3</sub><sup>-</sup>"],
        ["아세트산 이온", "CH<sub>3</sub>COO<sup>-</sup>"],
        ["과망가니즈산 이온", "MnO<sub>4</sub><sup>-</sup>"],
        ["크로뮴산 이온", "CrO<sub>4</sub><sup>2-</sup>"],
        ["산화이온", "O<sup>2-</sup>"],
        ["인산이온", "PO<sub>4</sub><sup>3-</sup>"],
        ["", ""],
    ],
    precipitates: [
        ["염화 은", "Ag<sup>+</sup>", "Cl<sup>-</sup>", "AgCl", "흰색"],
        ["황화 아연",
            "Zn<sup>2+</sup>",
            "S<sup>2-</sup>",
            "ZnS",
            "흰색"
        ],
        ["황산 은",
            "Ag<sub>2</sub><sup>2+</sup>",
            "SO<sub>4</sub><sup>2-</sup>",
            "Ag<sub>2</sub>SO<sub>4</sub>",
            "흰색"
        ],
        [
            "탄산 은",
            "Ag<sub>2</sub><sup>2+</sup>",
            "CO<sub>3</sub><sup>2-</sup>",
            "Ag<sub>2</sub>CO<sub>3</sub>",
            "흰색"
        ],
        [
            "탄산 칼슘",
            "Ca<sup>2+</sup>",
            "CO<sub>3</sub><sup>2-</sup>",
            "CaCO<sub>3</sub>",
            "흰색"
        ],
        [
            "황산 칼슘",
            "Ca<sup>2+</sup>",
            "SO<sub>4</sub><sup>2-</sup>",
            "CaSO<sub>4</sub>",
            "흰색"
        ],
        [
            "탄산 바륨",
            "Ba<sup>2+</sup>",
            "CO<sub>3</sub><sup>2-</sup>",
            "BaCO<sub>3</sub>",
            "흰색"
        ],
        [
            "황산 바륨",
            "Ba<sup>2+</sup>",
            "SO<sub>4</sub><sup>2-</sup>",
            "BaSO<sub>4</sub>",
            "흰색"
        ],
        [
            "브로민화 은",
            "Ag<sup>+</sup>",
            "Br<sup>-</sup>",
            "AgBr",
            "연노란색"
        ],
        [
            "탄산 마그네슘",
            "Mg<sup>2+</sup>",
            "CO<sub>3</sub><sup>2-</sup>",
            "MgCO<sub>3</sub>",
            "노란색"
        ],
        ["아이오딘화 은",
            "Ag<sup>+</sup>",
            "I<sup>-</sup>",
            "AgI",
            "노란색"
        ],
        [
            "아이오딘화 납",
            "Pb<sup>2+</sup>",
            "I<sub>2</sub><sup>2-</sup>",
            "PbI<sub>2</sub>",
            "노란색"
        ],
        ["황화 카드뮴", "Cd<sup>2+</sup>", "S<sup>2-</sup>", "CdS", "노란색"],
        ["황화 납", "Pb<sup>2+</sup>", "S<sup>2-</sup>", "PbS", "검은색"],
        ["황화구리(II)", "Cu<sup>2+</sup>", "S<sup>2-</sup>", "CuS", "검은색"],
    ],
};
//<sub>2</sub><sup></sup>



function showTables() {
    if (isBasic) {
        elementsToTableBasic(basic.elements, "element");
        moleculesToTableBasic(basic.molecules, "molecule");
        ionsToTableBasic(basic.ions, "ion");
        precipitatesToTableBasic(basic.precipitates, "precipitate");
    } else {
        elementsToTableHard(hard.elements, "element");
        moleculesToTableHard(hard.molecules, "molecule");
        ionsToTableHard(hard.ions, "ion");
        precipitatesToTableHard(hard.precipitates, "precipitate");
    }
}




function clearTables() {
    document.getElementById("element").innerHTML = "";
    document.getElementById("molecule").innerHTML = "";
    document.getElementById("ion").innerHTML = "";
    document.getElementById("precipitate").innerHTML = "";
}











/************************ BASIC **********************/

function elementsToTableBasic(arr, id) {
    let dest = document.getElementById(id);
    dest.innerHTML = "<tr><th>원소 이름</th><th>원소 기호</th><th>원소 이름</th><th>원소 기호</th><th>원소 이름</th><th>원소 기호</th></tr>";
    for (let i = 0; i < 8; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let d = document.createElement("td");
            d.className = "basic-element-name-td"
            let s = document.createElement("span");
            s.className = "basic-element-name-span"
            s.innerHTML = arr[i + j * 8][0];
            d.appendChild(s);
            r.appendChild(d);
            let d1 = document.createElement("td");
            d1.className = "basic-element-symbol-td"
            let s1 = document.createElement("span");
            s1.className = "basic-element-symbol-span"
            s1.innerHTML = arr[i + j * 8][1];
            d1.appendChild(s1);
            r.appendChild(d1);
        }
        dest.appendChild(r);
    }
}

function moleculesToTableBasic(arr, id) {
    let dest = document.getElementById(id);
    dest.innerHTML =
        "<tr><th>분자 이름</th><th>분자 기호</th><th>분자 이름</th><th>분자 기호</th><th>분자 이름</th><th>분자 기호</th></tr>";
    for (let i = 0; i < 4; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let d = document.createElement("td");
            let s = document.createElement("span");
            s.innerHTML = arr[i + j * 4][0];
            d.appendChild(s);
            r.appendChild(d);
            let d1 = document.createElement("td");
            let s1 = document.createElement("span");
            s1.innerHTML = arr[i + j * 4][1];
            d1.appendChild(s1);
            r.appendChild(d1);
        }
        dest.appendChild(r);
    }
}

function ionsToTableBasic(arr, id) {
    let dest = document.getElementById(id);
    dest.innerHTML =
        "<tr><th>이온</th><th>이온식</th><th>이온</th><th>이온식</th><th>이온</th><th>이온식</th></tr>";
    for (let i = 0; i < 7; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let d = document.createElement("td");
            let s = document.createElement("span");
            s.innerHTML = arr[i + j * 7][0];
            d.appendChild(s);
            r.appendChild(d);
            let d1 = document.createElement("td");
            let s1 = document.createElement("span");
            s1.innerHTML = arr[i + j * 7][1];
            d1.appendChild(s1);
            r.appendChild(d1);
        }
        dest.appendChild(r);
    }
}

function precipitatesToTableBasic(arr, id) {
    let dest = document.getElementById(id);
    dest.innerHTML = "<tr><th>앙금</th><th>화학 반응식</th><th>앙금의 색</th>";
    for (let i = 0; i < 3; i++) {
        let r = document.createElement("tr");
        let d = document.createElement("td"),
            s = document.createElement("span");
        s.innerHTML = arr[i][0];
        d.appendChild(s);
        r.appendChild(d);
        let d1 = document.createElement("td"),
            s1 = document.createElement("span");
        s1.innerHTML = arr[i][1];
        d1.appendChild(s1);
        if (s1.innerHTML) {
            let s2 = document.createElement("span");
            s2.innerHTML = " + ";
            d1.appendChild(s2);
        }
        let s3 = document.createElement("span");
        s3.innerHTML = arr[i][2];
        d1.appendChild(s3);
        if (s1.innerHTML) {
            let s4 = document.createElement("span");
            s4.innerHTML = " → ";
            d1.appendChild(s4);
        }
        let s5 = document.createElement("span");
        s5.innerHTML = arr[i][3] + "↓";
        d1.appendChild(s5);
        r.appendChild(d1);
        let d6 = document.createElement("td"),
            s6 = document.createElement("span");
        s6.innerHTML = arr[i][4];
        d6.appendChild(s6);
        r.appendChild(d6);
        dest.appendChild(r);
    }
    dest.style.height = "10vw"
}








/************************ HARD **********************/


function elementsToTableHard(arr, id) {
    let dest = document.getElementById(id);
    dest.innerHTML =
        "<tr><th id = 'hard-element-name-th-1'>원소 이름</th>" +
        "<th id = 'hard-element-symbol-th-1'>원소 기호</th>" +
        "<th id = 'hard-element-name-th-2'>원소 이름</th>" +
        "<th id = 'hard-element-symbol-th-2'>원소 기호</th>" +
        "<th id = 'hard-element-name-th-3'>원소 이름</th>" +
        "<th id = 'hard-element-symbol-th-3'>원소 기호</th></tr>";
    for (let i = 0; i < 10; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let d = document.createElement("td");
            d.className = "hard-element-name-td"
            let s = document.createElement("span");
            s.className = "hard-element-name-span"
            s.innerHTML = arr[i + j * 10][0];
            d.appendChild(s);
            r.appendChild(d);
            let d1 = document.createElement("td");
            d1.className = "hard-element-symbol-td"
            let s1 = document.createElement("span");
            s1.className = "hard-element-symbol-span"
            s1.innerHTML = arr[i + j * 10][1];
            d1.appendChild(s1);
            r.appendChild(d1);
        }
        dest.appendChild(r);
    }
}

function moleculesToTableHard(arr, id) {
    let dest = document.getElementById(id);
    dest.innerHTML =
        "<tr><th>분자 이름</th><th>분자 기호</th><th>분자 이름</th><th>분자 기호</th><th>분자 이름</th><th>분자 기호</th></tr>";
    for (let i = 0; i < 4; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let d = document.createElement("td");
            let s = document.createElement("span");
            s.innerHTML = arr[i + j * 4][0];
            d.appendChild(s);
            r.appendChild(d);
            let d1 = document.createElement("td");
            let s1 = document.createElement("span");
            s1.innerHTML = arr[i + j * 4][1];
            d1.appendChild(s1);
            r.appendChild(d1);
        }
        dest.appendChild(r);
    }
}

function ionsToTableHard(arr, id) {
    let dest = document.getElementById(id);
    dest.innerHTML =
        "<tr><th colspan = '2'>양이온</th><th colspan = '2'>음이온</th></tr>";
    for (let i = 0; i < 15; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < 2; j++) {
            let d = document.createElement("td");
            let s = document.createElement("span");
            s.innerHTML = arr[i + j * 15][0];
            d.appendChild(s);
            r.appendChild(d);
            let d1 = document.createElement("td");
            let s1 = document.createElement("span");
            s1.innerHTML = arr[i + j * 15][1];
            d1.appendChild(s1);
            r.appendChild(d1);
        }
        dest.appendChild(r);
    }
}

function precipitatesToTableHard(arr, id) {
    let dest = document.getElementById(id);
    dest.innerHTML = "<tr><th>앙금</th><th>화학 반응식</th><th>앙금의 색</th>";
    for (let i = 0; i < 15; i++) {
        let r = document.createElement("tr");
        let d = document.createElement("td"),
            s = document.createElement("span");
        s.innerHTML = arr[i][0];
        d.appendChild(s);
        r.appendChild(d);
        let d1 = document.createElement("td"),
            s1 = document.createElement("span");
        s1.innerHTML = arr[i][1];
        d1.appendChild(s1);
        if (s1.innerHTML) {
            let s2 = document.createElement("span");
            s2.innerHTML = " + ";
            d1.appendChild(s2);
        }
        let s3 = document.createElement("span");
        s3.innerHTML = arr[i][2];
        d1.appendChild(s3);
        if (s1.innerHTML) {
            let s4 = document.createElement("span");
            s4.innerHTML = " → ";
            d1.appendChild(s4);
        }
        let s5 = document.createElement("span");
        s5.innerHTML = arr[i][3] + "↓";
        d1.appendChild(s5);
        r.appendChild(d1);
        let d6 = document.createElement("td"),
            s6 = document.createElement("span");
        s6.innerHTML = arr[i][4];
        d6.appendChild(s6);
        r.appendChild(d6);
        dest.appendChild(r);
    }
    dest.style.height = "25vw"
}










function startTest() {
    if (isBasic == true) {
        startElementsTestBasic();
        startMoleculesTestBasic();
        startIonsTestBasic();
        startPrecipitatesTestBasic();
    } else {
        startElementsTestHard();
        startMoleculesTestHard();
        startIonsTestHard();
        startPrecipitatesTestHard();
    }
}

function cancelTest() {
    isTesting = false;
    clearTables()
    showTables()
}

function testResults() {
    checkElements();
    checkMolecules();
    checkIons();
    checkPrecipitates();
}

function checkElements() {
    let element = document.getElementById("element")
    let temp = isBasic ? 9 : 11;
    for (let i = 1; i < temp; i++) {
        let a = element.children[i];
        for (let j = 0; j < 6; j++) {
            let b = a.children[j]
            if (b.childElementCount == 2) {
                if (b.firstChild.getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '') == b.firstChild.value.replace(/\s/g, '').replace(/<[^>]*>?/gm, '')) {
                    if (j % 2 === 0) {
                        b.style.backgroundColor = "rgba(70, 160, 73, 0.3)";
                        a.children[j + 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                    } else {
                        b.style.backgroundColor = "rgba(70, 160, 73, 0.3";
                        a.children[j - 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                    }
                } else {
                    b.firstChild.strikeThrough();
                    b.children[1].showAnswer();
                    if (j % 2 === 0) {
                        b.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                        a.children[j + 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                    } else {
                        b.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                        a.children[j - 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                    }
                }
            }
        }
    }
}

function checkMolecules() {
    let molecule = document.getElementById("molecule")
    for (let i = 1; i < 5; i++) {
        let a = molecule.children[i];
        for (let j = 0; j < 6; j++) {
            let b = a.children[j]
            if (b.childElementCount == 2) {
                if (b.firstChild.getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '') == b.firstChild.value.replace(/\s/g, '').replace(/<[^>]*>?/gm, '')) {
                    if (j % 2 === 0) {
                        b.style.backgroundColor = "rgba(70, 160, 73, 0.3)";
                        a.children[j + 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                    } else {
                        b.style.backgroundColor = "rgba(70, 160, 73, 0.3";
                        a.children[j - 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                    }
                } else {
                    b.firstChild.strikeThrough();
                    b.children[1].showAnswer();
                    if (j % 2 === 0) {
                        b.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                        a.children[j + 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                    } else {
                        b.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                        a.children[j - 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                    }
                }
            }
        }
    }
}

function checkIons() {
    let molecule = document.getElementById("ion")
    for (let i = 1; i < 8; i++) {
        let a = molecule.children[i];
        for (let j = 0; j < 6; j++) {
            let b = a.children[j]
            if (b.childElementCount == 2) {
                if (b.firstChild.getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '') == b.firstChild.value.replace(/\s/g, '').replace(/<[^>]*>?/gm, '')) {
                    if (j % 2 === 0) {
                        b.style.backgroundColor = "rgba(70, 160, 73, 0.3)";
                        a.children[j + 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                    } else {
                        b.style.backgroundColor = "rgba(70, 160, 73, 0.3";
                        a.children[j - 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                    }
                } else {
                    b.firstChild.strikeThrough();
                    b.children[1].showAnswer();
                    if (j % 2 === 0) {
                        b.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                        a.children[j + 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                    } else {
                        b.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                        a.children[j - 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                    }
                }
            }
        }
    }
}

function checkPrecipitates() {
    let precipitate = document.getElementById("precipitate")
    let temp = isBasic ? 4 : 16;
    console.log(temp)
    for (let i = 1; i < temp; i++) {
        let a = precipitate.children[i];
        for (let j = 0; j < 3; j++) {
            let b = a.children[j]
            if (b.childElementCount == 2) {
                if (b.firstChild.tagName == "SELECT") {
                    if (b.firstChild.value == b.firstChild.getAttribute("data-answer")) {
                        b.style.backgroundColor = "rgba(70, 160, 73, 0.3";
                        a.children[j - 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                        a.children[j - 2].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                    } else {
                        b.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                        a.children[j - 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                        a.children[j - 2].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                    }
                } else {
                    if (b.firstChild.getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '') == b.firstChild.value.replace(/\s/g, '').replace(/<[^>]*>?/gm, '')) {
                        if (j % 3 === 0) {
                            b.style.backgroundColor = "rgba(70, 160, 73, 0.3)";
                            a.children[j + 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                            a.children[j + 2].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                        } else {
                            b.style.backgroundColor = "rgba(70, 160, 73, 0.3";
                            a.children[j - 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                            a.children[j - 2].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                        }
                    } else {
                        b.firstChild.strikeThrough();
                        b.children[1].showAnswer();
                        if (j % 3 === 0) {
                            b.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                            a.children[j + 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                            a.children[j + 2].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                        } else {
                            b.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                            a.children[j - 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                            a.children[j - 2].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                        }
                    }
                }
            } else if (b.childElementCount == 1 || b.childElementCount == 5) {

            } else {
                if (b.firstChild.getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '') == b.firstChild.value.replace(/\s/g, '').replace(/<[^>]*>?/gm, '') && b.children[3].getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '') == b.children[3].getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '') && b.children[6].getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '').replace('↓', '') == b.children[6].getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '').replace('↓', '')) {
                    b.style.backgroundColor = "rgba(70, 160, 73, 0.3)";
                    a.children[j + 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                    a.children[j - 1].style.backgroundColor = "rgba(70, 160, 73, 0.3";
                } else {
                    let e = HTMLtoElement("<br>" + b.firstChild.getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '') + " + " + b.children[3].getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '') + " → " + b.children[6].getAttribute("data-answer").replace(/\s/g, '').replace(/<[^>]*>?/gm, '')).replace('↓', '') + "↓";
                    b.style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                    a.children[j + 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                    a.children[j - 1].style.backgroundColor = "rgba(244, 67, 54, 0.3)";
                }
            }
        }
    }
}












function startElementsTestBasic() {
    let id = "element"
    let children = [...document.getElementById(id).children];
    for (i = 1; i < 9; i++) {
        let a = [...children[i].children]
        for (j = 0; j < 3; j++) {
            if (a[j * 2].firstChild.innerText != "") {
                if (Math.random() > 0.5) {
                    a[j * 2].firstChild.classList.toggle("hidden");
                    a[j * 2].firstChild.createInput();
                } else {
                    a[j * 2 + 1].firstChild.classList.toggle("hidden");
                    a[j * 2 + 1].firstChild.createInput();
                }
            }
        }
    }
    if (shuffle) {
        shuffleTr(id);
    }
}

function startMoleculesTestBasic() {
    let id = "molecule"
    let children = [...document.getElementById(id).children];
    for (i = 1; i < 5; i++) {
        let a = [...children[i].children]
        for (j = 0; j < 3; j++) {
            if (a[j * 2].firstChild.innerText != "") {
                if (Math.random() > 0.5) {
                    a[j * 2].firstChild.classList.toggle("hidden");
                    a[j * 2].firstChild.createInput();
                } else {
                    a[j * 2 + 1].firstChild.classList.toggle("hidden");
                    a[j * 2 + 1].firstChild.createInput();
                }
            }
        }
    }
    if (shuffle) {
        shuffleTr(id);
    }
}

function startIonsTestBasic() {
    let id = "ion"
    let children = [...document.getElementById(id).children];
    for (i = 1; i < 8; i++) {
        let a = [...children[i].children]
        for (j = 0; j < 3; j++) {
            if (a[j * 2].firstChild.innerText != "") {
                if (Math.random() > 0.5) {
                    a[j * 2].firstChild.classList.toggle("hidden");
                    a[j * 2].firstChild.createInput();
                } else {
                    a[j * 2 + 1].firstChild.classList.toggle("hidden");
                    a[j * 2 + 1].firstChild.createInput();
                }
            }
        }
    }
    if (shuffle) {
        shuffleTr(id);
    }
}

function startPrecipitatesTestBasic() {
    let id = "precipitate"
    let children = [...document.getElementById(id).children];
    for (i = 1; i < 4; i++) {
        let a = [...children[i].children]
        if (a[0].firstChild.innerText != "") {
            if (Math.random() < 0.5) {
                a[0].firstChild.classList.toggle("hidden");
                a[0].firstChild.createInput();
                a[2].firstChild.classList.toggle("hidden");
                a[2].firstChild.createSelect();
            } else {
                a[1].firstChild.classList.toggle("hidden");
                a[1].children[4].classList.toggle("hidden");
                a[1].children[2].classList.toggle("hidden");
                a[1].children[4].createPreInput();
                a[1].children[2].createPreInput();
                a[1].firstChild.createPreInput();
            }
        }
    }
    if (shuffle) {
        shuffleTr(id);
    }
}




















function startElementsTestHard() {
    let id = "element"
    let children = [...document.getElementById(id).children];
    for (i = 1; i < 11; i++) {
        let a = [...children[i].children]
        for (j = 0; j < 3; j++) {
            if (a[j * 2].firstChild.innerText != "") {
                if (Math.random() > 0.5) {
                    a[j * 2].firstChild.classList.toggle("hidden");
                    a[j * 2].firstChild.createInput();
                } else {
                    a[j * 2 + 1].firstChild.classList.toggle("hidden");
                    a[j * 2 + 1].firstChild.createInput();
                }
            }
        }
    }
    if (shuffle) {
        shuffleTr(id);
    }
}

function startMoleculesTestHard() {
    let id = "molecule"
    let children = [...document.getElementById(id).children];
    for (i = 1; i < 5; i++) {
        let a = [...children[i].children]
        for (j = 0; j < 3; j++) {
            if (a[j * 2].firstChild.innerText != "") {
                if (Math.random() > 0.5) {
                    a[j * 2].firstChild.classList.toggle("hidden");
                    a[j * 2].firstChild.createInput();
                } else {
                    a[j * 2 + 1].firstChild.classList.toggle("hidden");
                    a[j * 2 + 1].firstChild.createInput();
                }
            }
        }
    }
    if (shuffle) {
        shuffleTr(id);
    }
}

function startIonsTestHard() {
    let id = "ion"
    let children = [...document.getElementById(id).children];
    for (i = 1; i < 16; i++) {
        let a = [...children[i].children]
        for (j = 0; j < 2; j++) {
            if (a[j * 2].firstChild.innerText != "") {
                if (Math.random() > 0.5) {
                    a[j * 2].firstChild.classList.toggle("hidden");
                    a[j * 2].firstChild.createInput();
                } else {
                    a[j * 2 + 1].firstChild.classList.toggle("hidden");
                    a[j * 2 + 1].firstChild.createInput();
                }
            }
        }
    }
    if (shuffle) {
        shuffleTr(id);
    }
}

function startPrecipitatesTestHard() {
    let id = "precipitate"
    let children = [...document.getElementById(id).children];
    for (i = 1; i < 16; i++) {
        let a = [...children[i].children]
        if (a[0].firstChild.innerText != "") {
            if (Math.random() < 0.5) {
                a[0].firstChild.classList.toggle("hidden");
                a[0].firstChild.createInput();
                a[2].firstChild.classList.toggle("hidden");
                a[2].firstChild.createSelect();
            } else {
                a[1].firstChild.classList.toggle("hidden");
                a[1].children[4].classList.toggle("hidden");
                a[1].children[2].classList.toggle("hidden");
                a[1].children[4].createPreInput();
                a[1].children[2].createPreInput();
                a[1].firstChild.createPreInput();
            }
        }
    }
    if (shuffle) {
        shuffleTr(id);
    }
}

























function shuffleTr(tableId, hasHeaderTd = true) {
    let table = document.getElementById(tableId);
    let rowsCollection = table.querySelectorAll("tr");
    let rows = Array.from(rowsCollection);
    if (hasHeaderTd) {
        rows = rows.slice(1);
    }
    shuffleArray(rows);
    for (const row of rows) {
        table.appendChild(row);
    }
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

























HTMLInputElement.prototype.strikeThrough = function () {
    this.style.textDecoration = "line-through"
    this.style.color = "red"
}

HTMLSpanElement.prototype.showAnswer = function () {
    var data = this.innerText.replace(/\s+/g, ' ');
    var s = HTMLtoElement('<span class = "answer">' + data + '</span>');
    this.parentElement.insertBefore(HTMLtoElement("<br>"), this);
    this.parentElement.insertBefore(s, this);
}

HTMLSpanElement.prototype.createInput = function () {
    var data = this.innerText.replace(/\s+/g, ' ');
    var s = HTMLtoElement('<input class = "testInput" type = "text" data-answer = "' + data + '"></input>');
    this.parentElement.insertBefore(s, this);
}


HTMLSpanElement.prototype.createPreInput = function () {
    var data = this.innerHTML.replace(/\s+/g, ' ');
    var s = HTMLtoElement('<input class = "precipitatesInput" type = "text"  data-answer = "' + data + '"></input>');
    this.parentElement.insertBefore(s, this);
}

HTMLSpanElement.prototype.createSelect = function () {
    var data = this.innerHTML.replace(/\s+/g, ' ');
    var s;
    if (isBasic) {
        s = HTMLtoElement('<select class = "precipitatesSelect" data-answer = "' + data + '"><option value = " "></option><option value = "흰색">흰색</option><option value = "노란색">노란색</option></select>');
    } else {
        s = HTMLtoElement('<select class = "precipitatesSelect" data-answer = "' + data + '"><option value = " "></option><option value = "흰색">흰색</option><option value = "연노란색">연노란색</option><option value = "노란색">노란색</option><option value = "검은색">검은색</option></select>');
    }
    this.parentElement.insertBefore(s, this);
}




document.getElementById("menu-button").addEventListener("click", function () {
    let icon = document.getElementById('menu-icon');
    let set = document.getElementById('menu-settings')
    icon.classList.contains('cross') ? (set.classList.remove('open'), icon.classList.remove('cross'), setTimeout(function () {
        icon.classList.remove('shrink')
    }, 300)) : (set.classList.add('open'), icon.classList.add('shrink'), setTimeout(function () {
        icon.classList.add('cross')
    }, 300))
});


document.getElementById("hard-switch").addEventListener("change", function () {
    if (!isTesting) {
        clearTables();
        if (!this.checked) {
            isBasic = true;
            console.log("기본 모드");
        } else {
            isBasic = false;
            console.log("심화 모드");
        }
        showTables();
    } else {
        this.checked = !this.checked
        alert("시험 중에는 모드 변경이 안됩니다");
    }
});

document.getElementById("test").addEventListener("click", function () {
    if (!isTesting) {
        isTesting = true;
        document.getElementById("cancel").style.visibility = "visible";
        document.getElementById("results").style.visibility = "visible";
        startTest();
    } else {
        alert("시험이 진행중 입니다.");
    }
})

document.getElementById("cancel").addEventListener("click", function () {
    document.getElementById("cancel").style.visibility = "hidden";
    document.getElementById("results").style.visibility = "hidden";
    cancelTest();
    isTesting = false;
})

document.getElementById("results").addEventListener("click", function () {
    document.getElementById("cancel").style.visibility = "hidden";
    document.getElementById("results").style.visibility = "hidden";
    document.getElementById("ok").style.visibility = "visible";
    let a = document.getElementsByTagName("input");
    for (let i = 0; i < a.length; i++) {
        a[i].readOnly = true;
    }
    testResults();

})

document.getElementById("ok").addEventListener("click", function () {
    document.getElementById("ok").style.visibility = "hidden";
    let a = document.getElementsByTagName("input");
    for (let i = 0; i < a.length; i++) {
        a[i].readOnly = false;
    }
    clearTables();
    showTables();
    isTesting = false;
})

document.getElementById("shuffle-switch").addEventListener("change", function () {
    if (!isTesting) {
        shuffle = this.checked
    } else {
        this.checked = !this.checked
        alert("시험 중에는 모드 변경이 안됩니다");
    }
})



// document.getElementById("isTestRandom").addEventListener("change", function() {
//     document.getElementById("test-options-select-container").classList.toggle("random-options")
// })




document.getElementById("hard-switch").checked = false;
document.getElementById("shuffle-switch").checked = false;
showTables();


function HTMLtoElement(html) {
    let a = document.createElement("template");
    html = html.trim();
    a.innerHTML = html;
    return a.content.firstChild;
}
