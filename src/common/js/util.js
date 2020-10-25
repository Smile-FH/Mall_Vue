export const getLocal = (name) => {
    return  localStorage.getItem(name);
};

export const setLocal = (name, value) => {
    localStorage.setItem(name, value);
};

export const nullParamsVerify = (obj) => {
    if (obj === "" || obj === null || obj === undefined){
        return true;
    }
    return false;
};