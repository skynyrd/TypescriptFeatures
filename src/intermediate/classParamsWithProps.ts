//  Prop1 and Prop2 are properties and auto mapped now.
class ClassParamsWithProps {
    constructor(public prop1: string, private _prop2: string) { }
}

const exClassParamsWithProps = new ClassParamsWithProps('prop1', 'prop2');
console.log(exClassParamsWithProps.prop1);
