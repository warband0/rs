const keyObj = {
    'en' :{
    "Backquote": "`",
    "Digit1": "1",
    "Digit2": "2",
    "Digit3": "3",
    "Digit4": "4",
    "Digit5": "5",
    "Digit6": "6",
    "Digit7": "7",
    "Digit8": "8",
    "Digit9": "9",
    "Digit0": "0",
    "Minus": "-",
    "Equal": "=",
    "Backspace": "Backspace",
    "Tab": "Tab",
    "KeyQ": "q",
    "KeyW": "w",
    "KeyE": "e",
    "KeyR": "r",
    "KeyT": "t",
    "KeyY": "y",
    "KeyU": "u",
    "KeyI": "i",
    "KeyO": "o",
    "KeyP": "p",
    "BracketLeft": "[",
    "BracketRight": "]",
    "Backslash": "\\",
    "CapsLock": "CapsLock",
    "KeyA": "a",
    "KeyS": "s",
    "KeyD": "d",
    "KeyF": "f",
    "KeyG": "g",
    "KeyH": "h",
    "KeyJ": "j",
    "KeyK": "k",
    "KeyL": "l",
    "Semicolon": ";",
    "Quote": "'",
    "Enter": "Enter",
    "ShiftLeft": "Shift",
    "KeyZ": "z",
    "KeyX": "x",
    "KeyC": "c",
    "KeyV": "v",
    "KeyB": "b",
    "KeyN": "n",
    "KeyM": "m",
    "Comma": ",",
    "Period": ".",
    "Slash": "/",
    "ShiftRight": "Shift",
    "ArrowUp": "▲",
    "ControlLeft": "Ctrl",
    "MetaLeft": "Meta",
    "AltLeft": "Alt",
    "Space": " ",
    "AltRight": "Alt",
    "ControlRight": "Ctrl",
    "ArrowLeft": "◄",
    "ArrowDown": "▼",
    "ArrowRight": "►",
    "Delete": "Delete",
    "Lang": "Lang"
    },
    'ru' : {
        "Backquote": "ё",
        "Digit1": "1",
        "Digit2": "2",
        "Digit3": "3",
        "Digit4": "4",
        "Digit5": "5",
        "Digit6": "6",
        "Digit7": "7",
        "Digit8": "8",
        "Digit9": "9",
        "Digit0": "0",
        "Minus": "-",
        "Equal": "=",
        "Backspace": "Backspace",
        "Tab": "Tab",
        "KeyQ": "й",
        "KeyW": "ц",
        "KeyE": "у",
        "KeyR": "к",
        "KeyT": "е",
        "KeyY": "н",
        "KeyU": "г",
        "KeyI": "ш",
        "KeyO": "щ",
        "KeyP": "з",
        "BracketLeft": "х",
        "BracketRight": "ъ",
        "Backslash": "\\",
        "CapsLock": "CapsLock",
        "KeyA": "ф",
        "KeyS": "ы",
        "KeyD": "в",
        "KeyF": "а",
        "KeyG": "п",
        "KeyH": "р",
        "KeyJ": "о",
        "KeyK": "л",
        "KeyL": "д",
        "Semicolon": "ж",
        "Quote": "э",
        "Enter": "Enter",
        "ShiftLeft": "Shift",
        "KeyZ": "я",
        "KeyX": "ч",
        "KeyC": "с",
        "KeyV": "м",
        "KeyB": "и",
        "KeyN": "т",
        "KeyM": "ь",
        "Comma": "б",
        "Period": "ю",
        "Slash": ".",
        "ShiftRight": "Shift",
        "ArrowUp": "▲",
        "ControlLeft": "Ctrl",
        "MetaLeft": "Meta",
        "AltLeft": "Alt",
        "Space": " ",
        "AltRight": "Alt",
        "ControlRight": "Ctrl",
        "ArrowLeft": "◄",
        "ArrowDown": "▼",
        "ArrowRight": "►",
        "Delete": "Delete",
        "Lang": "Lang"
    }
}
const code = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 
 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', "Lang"
];
let keys;
let letterKeys = [];
let specialKeys = [];
let notSpecialKeys = []
let capsLock = false;

let selectLang
if(localStorage.getItem('selectLang') === null){
    selectLang = 'en';
} else {
    selectLang = localStorage.getItem('selectLang');
}

// create textArea
let textArea = document.createElement('textarea')
textArea.className = 'textarea';
document.body.append(textArea)
// create keyboard
let keyboard = document.createElement('div')
keyboard.className = 'keyboard';
document.body.append(keyboard)

let changeLang



// addSymbolToTextArea
function addSymbolToTextArea(symbol){
    textArea.value += symbol.textContent
}
// Change Case
function checkCase(){
    if (capsLock){
        UpperCase()
        
    } else {
        LowerCase()
    }
}
function LowerCase(){
    notSpecialKeys.forEach((key)=>{
        key.textContent = key.textContent.toLowerCase();
        capsLock = false;
    })
}
function UpperCase(){
    notSpecialKeys.forEach((key)=>{
        key.textContent = key.textContent.toUpperCase();
        capsLock = true;
    })
}
// Generate Keys

function generate(){
    let keyBor = document.querySelector('.keyboard')
    if (keyBor.firstChild) {
        keyBor.innerHTML = ""
        }
    for (let i = 0; i < code.length;i++){
        let keyButton = `<div class='key-button ${code[i]}'>${keyObj[selectLang][code[i]]}</div>`
        keyBor.insertAdjacentHTML('beforeend', keyButton);
    }
    keys = document.querySelectorAll('.key-button')
    letterKeys = document.querySelectorAll('[class*="Key"]')
    mouseEvent()
    changeLang = document.querySelector('.Lang')
    changeLang.addEventListener('click', function(){
        selectLang = (selectLang === 'en') ? selectLang = 'ru' : selectLang = 'en'
        localStorage.setItem('selectLang', selectLang);
        generate()
     })
     // Event
document.onkeydown = function (event){
    event.preventDefault()
}
document.onkeyup = function (event){
    event.preventDefault()
}
document.onkeydown = function (event){
    let activeKey = document.querySelector(`.${event.code}`)
    console.log(activeKey.classList)
    activeKey.classList.add('active-key')
    if(notSpecialKeys.indexOf(activeKey) != -1 || activeKey.textContent === ' '){
        addSymbolToTextArea(activeKey)
    }
    if(activeKey.textContent === 'CapsLock'){
        if (capsLock){
            LowerCase()
        } else {
            UpperCase()
        }
    }
    if (activeKey.textContent === 'Alt' && event.ctrlKey){
        selectLang = (selectLang === 'en') ? selectLang = 'ru' : selectLang = 'en'
        localStorage.setItem('selectLang', selectLang);
        generate()
    }
}

document.onkeyup = function (event){
    let activeKey = document.querySelector(`.${event.code}`)
    activeKey.classList.remove('active-key')
} 

function mouseEvent(){
    keys.forEach((key)=>{
        if (key.textContent.length === 1){
            notSpecialKeys.push(key)
        } else { specialKeys.push(key)}
        key.onmousedown = function (event){
            let activeKey = document.querySelector(`.${event.target.classList[1]}`)
            activeKey.classList.add('active-key')
            if(notSpecialKeys.indexOf(activeKey) != -1 || activeKey.textContent === ' '){
                addSymbolToTextArea(activeKey)
            }
            if(activeKey.textContent === 'CapsLock'){
                if (capsLock){
                    LowerCase()
                } else {
                    UpperCase()
                }
            }
            if (activeKey.textContent === 'Alt' && event.ctrlKey){
                selectLang = (selectLang === 'en') ? selectLang = 'ru' : selectLang = 'en'
                generate()
            }
        } 
        key.onmouseup = function (event){
            let activeKey = document.querySelector(`.${event.target.classList[1]}`)
            activeKey.classList.remove('active-key')
        } 
    })
}
    checkCase()
}
generate()

