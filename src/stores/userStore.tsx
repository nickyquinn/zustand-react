import create from "zustand"

export const userStore = create((set) => ({
    name: "",
    darkMode: true,
    setName: (n:string) => set((state) => ({ name: n })),
    flipTheme: () => set((state) => ({ darkMode: !state.darkMode })),
}))