export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface Student {
    name:string;
    rollNo:number;
}

export const initialState: Student = {
    name: "Gurpreet",
    rollNo: 1
};
