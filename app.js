//VARIABLE
let isBasic = true;
const basic = {
    elements: [
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
    ],
    molecules: [],
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
        ["", ""],
        ["질소", "N"],
        ["납", "Pb"],
        ["인", "P"],
        ["산소", "O"],
        ["황", "S"],
        ["플루오린", "F"],
        ["염소", "Cl"],
        ["", ""],
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
        ["메테인", "CH<sub>4</sub>"],
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
        ["", ""],
        ["염화이온", "Cl<sup>-</sup>"],
        ["아이오딘화 이온", "I<sup>-</sup>"],
        ["황화이온", "S<sup>2-</sup>"],
        ["수산화 이온", "OH<sup>-</sup>"],
        ["탄산이온", "CO<sub>3</sub><sup>2-</sup>"],
        ["플루오린화 이온", "F<sup>-</sup>"],
        ["브로민화이온", "Br<sup>-</sup>"],
        ["", ""],
        ["황산이온", "SO<sub>4</sub><sup>2-</sup>"],
        ["질산이온", "NO<sub>3</sub><sup>-</sup>"],
        ["아세트산 이온", "CH<sub>3</sub>OO<sup>-</sup>"],
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
            "노란색"
        ],
        ["황화 카드뮴", "Cd<sup>2+</sup>", "S<sup>2-</sup>", "CdS", "노란색"],
        ["황화 납", "Pb<sup>2+</sup>", "S<sup>2-</sup>", "PbS", "검은색"],
        ["황화구리(II)", "Cu<sup>2+</sup>", "S<sup>2-</sup>", "CuS", "검은색"],
    ],
};
//<sub>2</sub><sup></sup>

function showTables(isBasic) {
    if (isBasic) {

    } else {
        elementsToTableHard(hard.elements, "element");
        moleculesToTableHard(hard.molecules, "molecule");
        ionsToTableHard(hard.ions, "ion");
        precipitatesToTableHard(hard.precipitates, "precipitate");
    }
}

function elementsToTableHard(arr, id) {
    let dest = document.getElementById(id);
    dest.innerHTML =
        "<tr><th id = 'hard-element-name-th-1'>원소 이름</th>" + 
        "<th id = 'hard-element-symbol-th-1'>원소 기호</th>" + 
        "<th id = 'hard-element-name-th-2'>원소 이름</th>" + 
        "<th id = 'hard-element-symbol-th-2'>원소 기호</th>" + 
        "<th id = 'hard-element-name-th-3'>원소 이름</th>" + 
        "<th id = 'hard-element-symbol-th-3'>원소 기호</th>" + 
        "<th id = 'hard-element-name-th-4'>원소 이름</th>" + 
        "<th id = 'hard-element-symbol-th-4'>원소 기호</th></tr>";
    for (let i = 0; i < 8; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < 4; j++) {
            let d = document.createElement("td");
            d.className = "hard-element-name-td"
            let s = document.createElement("span");
            s.className = "hard-element-name-span"
            s.innerHTML = arr[i + j * 8][0];
            d.appendChild(s);
            r.appendChild(d);
            let d1 = document.createElement("td");
            d1.className = "hard-element-symbol-td"
            let s1 = document.createElement("span");
            s1.className = "hard-element-symbol-span"
            s1.innerHTML = arr[i + j * 8][1];
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
        "<tr><th colspan = '4'>양이온</th><th colspan = '4'>음이온</th></tr>";
    for (let i = 0; i < 8; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < 4; j++) {
            let d = document.createElement("td");
            let s = document.createElement("span");
            s.innerHTML = arr[i + j * 8][0];
            d.appendChild(s);
            r.appendChild(d);
            let d1 = document.createElement("td");
            let s1 = document.createElement("span");
            s1.innerHTML = arr[i + j * 8][1];
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
}

showTables(false);

document.getElementById("menu-button").addEventListener("click", function () {
    let icon = document.getElementById('menu-icon');
    let set = document.getElementById('menu-settings')
    icon.classList.contains('cross') ? (set.classList.remove('open'), icon.classList.remove('cross'), setTimeout(function () {
        icon.classList.remove('shrink')
    }, 300))  : (set.classList.add('open'), icon.classList.add('shrink'), setTimeout(function () {
        icon.classList.add('cross')
    }, 300))
});