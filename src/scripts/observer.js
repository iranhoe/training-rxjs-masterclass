export const observer = {
    next: val => console.log('next', val),
    error: val => console.log('error', val),
    complete: () => console.log('complete', val)
};