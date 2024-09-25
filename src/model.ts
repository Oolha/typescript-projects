export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// type Action =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch (action.type) {
//     case "add":
//       return [...state];
//   }
// };
