import {ADD_STUDENT, DISPLAY_STUDENT, DELETE_STUDENT , EDIT_STUDENT} from './constant';

export function addStudent(student) {
    return {
        type: ADD_STUDENT,
        payload: student
    };
}

export function editStudent(student) {
    return {
        type: EDIT_STUDENT,
        payload: student
    };
}

export function deleteStudent(student) {
    return {
        type: DELETE_STUDENT,
        payload: student
    }
}
