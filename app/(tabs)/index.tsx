import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  console.log(todos);

  const createTodo = useMutation(api.todos.createTodo);
  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
      <Text>Hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toogle the mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => createTodo({ text: "walk the dog" })}>
        <Text>Add a new todo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearAllTodos()}>
        <Text>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 15,
  },
})