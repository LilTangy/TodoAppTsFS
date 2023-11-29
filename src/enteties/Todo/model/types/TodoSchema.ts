export interface Todo {
    id: string;
    text: string
    type: string
}

export interface TodosSchema {
    count: number;
    todos: Todo[];

}