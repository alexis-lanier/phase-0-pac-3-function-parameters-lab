function introduction(name){
    return name = `Hi, my name is ${name}.`;
}

let string = "";
function introductionWithLanguage(name, language){
    return string = `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name,language = "JavaScript"){
    return string = `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
