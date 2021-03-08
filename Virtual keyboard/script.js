let isCaps = false;
let isLang = false;
let isShift = false;
const BACKSPACE = [{ tag: 'input', properties: { type: 'button', value: 'Backspace', onclick: back, className: 'backSpace' } }];
const CAPSLOCK = [{ tag: 'input', properties: { type: 'button', value: 'CapsLok', onclick: caps, className: 'caps-lock', id: 'caps' } }];
const ENTER = [{ tag: 'input', properties: { type: 'button', value: 'Enter', onclick: ent, className: 'enter' } }];
const SPACE = [{ tag: 'input', properties: { type: 'button', value: '___', onclick: keySpace, className: 'space' } }];
const SHIFT = [{ tag: 'input', properties: { type: 'button', value: 'Shift', onclick: keyShift, className: 'shift' } }];

let numberArr = {
    normal: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    shiftDown: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']
};
renderButtons(fillButton(numberArr.normal), document.body);
renderButtons(BACKSPACE, document.body);

let numberArr1 = {
    EN: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    RU: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ']
};
renderButtons(CAPSLOCK, document.body);
renderButtons(fillButton(numberArr1.EN), document.body);

let numberArr2 = {
    EN: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"'],
    RU: ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э']
};
renderButtons(fillButton(numberArr2.EN), document.body);
renderButtons(ENTER, document.body);

let language = [{ tag: 'input', properties: { type: 'button', value: 'ENG/RU', onclick: lang, className: 'language' } }];
renderButtons(language, document.body);

let numberArr3 = {
    EN: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?'],
    RU: ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.']
};
renderButtons(fillButton(numberArr3.EN), document.body);
renderButtons(SHIFT, document.body);
renderButtons(SPACE, document.body);


function fillButton(arr) {
    return arr.map(item => ({ tag: 'input', properties: { type: 'button', value: item, className: 'button', onclick: forInput } }))
};

function renderButtons(arr, place) {
    arr.forEach(item => {
        let element = document.createElement(item.tag);
        Object.entries(item.properties || {}).forEach(([key, value]) => {
            element[key] = value;
        })
        place.appendChild(element);
    })
};

let textArea = document.getElementById('key-input');

function forInput(elem) {
    if (isCaps === false) {
        textArea.value += elem.target.value;
    } else {
        textArea.value += elem.target.value.toUpperCase();
    }
};

function caps() {
    isCaps = !isCaps;
    if (isCaps === true) {
        document.querySelector('.caps-lock').classList.add('enabled')
    } else {
        document.querySelector('.caps-lock').classList.remove('enabled')
    }
};

function back() {
    let textareaStart = textArea.selectionStart
    textArea.value = textArea.value.substring(0, textArea.selectionStart - 1) +
        textArea.value.substring(textArea.selectionStart, textArea.value.length)
    textArea.selectionStart = textareaStart - 1
    textArea.selectionEnd = textareaStart - 1
    textArea.focus()
};

function ent() {
    textArea.value += '\n';
};

function lang() {
    isLang = !isLang;
    if (isLang === true) {
        numberArr1.EN = numberArr1.RU;
        numberArr2.EN = numberArr2.RU;
        numberArr3.EN = numberArr3.RU;
        document.querySelector('.language').classList.add('enabled')
    } else {
        document.querySelector('.language').classList.remove('enabled')
    }
};

function keySpace() {
    textArea.value += ' ';
};

function keyShift() {
    isShift = !isShift;
    if (isShift === true) {
        numberArr.normal = numberArr.shiftDown;
        document.querySelector('.shift').classList.add('enabled');
    } else {
        document.querySelector('.shift').classList.remove('enabled')
    }
};