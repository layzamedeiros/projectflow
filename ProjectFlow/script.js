const addTechBtn = document.getElementById("add-step-button");
let stepIds = [];
let stepRowId = 0;
let switchColor = 0;
const allStepsSection = document.getElementById("all-steps");

function insertStepParamaters(id, colorNumber, content) {
    const titleStep = document.createElement("p");
    titleStep.id = id;
    titleStep.classList.add(`step-number-${colorNumber}-color`)
    titleStep.classList.add("step-number-circle");
    titleStep.textContent = content;
    return titleStep;
}

function insertStepName(nameClass) {
    let insertName = "";
    
    while (true) {
        insertName = prompt("Insira o nome da nova etapa:");
        
        if (insertName == "") {
            alert("O nome da etapa não pode ficar vazio!")
        } else {
            break;
        }
    }

    const stepName = document.createElement("h3");
    stepName.classList.add(nameClass)
    stepName.textContent = insertName;
    return stepName;
}

function insertStepImg(src, nameClass, alt) {
    const imgTag = document.createElement("img");
    imgTag.src = src;
    imgTag.classList.add(nameClass);
    imgTag.alt = alt;
    return imgTag;
}

addTechBtn.addEventListener("click", (ev) => {
    stepRowId++;
    stepIds.push(stepRowId);

    if (switchColor >= 4) {
        switchColor = 1;
    } else {
        switchColor++;
    }

    const newStep = document.createElement("article");
    newStep.className = "step";
    newStep.id = stepRowId;

    const newStepHead = document.createElement("div");
    newStepHead.className = "step-head";

    const phaseDiv = document.createElement("div");
    phaseDiv.className = "phase";
    
    const stepNumber = insertStepParamaters(stepRowId, switchColor, stepRowId);
    const stepName = insertStepName("step-name");

    const optionsStepImgs = document.createElement("div");
    optionsStepImgs.classList.add("options-step");

    const stepDeleteImg = insertStepImg("./img/delete.svg", "step-delete.svg", "Deletar etapa");
    const stepAddTaskImg = insertStepImg("./img/add-task-img.svg", "step-add-task-img", "Adicionar nova tarefa");

    phaseDiv.append(stepNumber, stepName);
    optionsStepImgs.append(stepDeleteImg, stepAddTaskImg)
    newStepHead.append(phaseDiv, optionsStepImgs);
    newStep.appendChild(newStepHead);
    allStepsSection.appendChild(newStep);
})