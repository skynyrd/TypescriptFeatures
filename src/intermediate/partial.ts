type AllRequiredType = {x: number, y: number}
type AllOptionalType = Partial<AllRequiredType>;

const optional: AllOptionalType = { x: 2 }; // No Error