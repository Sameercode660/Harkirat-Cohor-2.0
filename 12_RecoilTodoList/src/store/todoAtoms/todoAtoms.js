import {atom, selector} from 'recoil'

// atom to store the todo
export const todoListAtom = atom({
    key: 'todoList',
    default: [
        {
            name: 'GYM',
            description: 'Going to the GYM in the morning',
            isCompleted: true,
        },
        {
            name: 'Walk',
            description: 'Going to the walk',
            isCompleted: true,
        },
        {
            name: 'Breakfast',
            description: 'Taking a lite breakfast, egg and milk and bread with butter',
            isCompleted: false,
        },
        {
            name: 'Study',
            description: 'Study about CSE subjects',
            isCompleted: true,
        },
        {
            name: 'Lunch',
            description: 'Taking a whole meal',
            isCompleted: false,
        }
    ]
})

export const typeOfFilterAtom = atom({
    key: 'filter',
    default: 'SHOW_ALL'
})


export const filterSelector = selector({
    key: 'filterSelector',
    get: ({get}) => {
        const allTodos = get(todoListAtom)
        const filter = get(typeOfFilterAtom)

        switch(filter) {
            case "SHOW_ALL": 
                return allTodos;
            case "PENDING": 
                return allTodos.filter((todo) => !todo.isCompleted)
            case "COMPLETED": 
                return allTodos.filter((todo) => todo.isCompleted)
        }
    }
})
