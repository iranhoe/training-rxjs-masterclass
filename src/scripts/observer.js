export const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
};