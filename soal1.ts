type Person = {
    firstName: string;
    lastName: string;
};

function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}

const person1: Person = { firstName: "Rafi", lastName: "Dani" };
console.log(getFullName(person1))

export {};