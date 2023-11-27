export interface Todo {
    id: string;
    text: string
}

export interface TodosSchema {
    count: number;
    todos: Todo[];

}