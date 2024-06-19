import { create } from "zustand";

interface data {
  id: number;
  string: string;
}

interface EditorState {
  data: data[];
}

interface EditorAction {
  addEditor: (id: number) => void;
  updateData: (id: number, string: string) => void;
}

const useEditorStore = create<EditorState & EditorAction>((set) => {
  return {
    data: [],
    addEditor: (id) => {
      set((state) => {
        return {
          ...state,
          data: [
            ...state.data,
            {
              id,
              string: "",
            },
          ],
        };
      });
    },
    updateData: (id, string) => {
      set((state) => {
        return {
          ...state,
          data: state.data.map((d) => {
            if (d.id === id) {
              return {
                id,
                string,
              };
            }

            return {
              ...d,
            };
          }),
        };
      });
    },
  };
});

export default useEditorStore;
