function reverse(string:string) : string;
function reverse(stringArray: string[]): string[];
function reverse(stringOrStringArray: string | string[]): string | string[] {
    if (Array.isArray(stringOrStringArray)) {
        return stringOrStringArray.reverse();
    } else {
        return stringOrStringArray.split('').reverse().join('');
    }
}


// When you hover the mouse over the variable name, 
// you can see the true return type of the function thanks to the function overloading.
const hello = reverse('hello');
const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o']);
