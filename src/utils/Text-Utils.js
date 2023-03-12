const formatText = ((text, action) => {
    switch(action){
        case 'upperCase': return text.toUpperCase(); 
        case 'lowerCase': return text.toLowerCase(); 
        case 'trimAllWhitespaces': return text.split(' ').join('');
        default: return text;
    }
});

export {formatText};