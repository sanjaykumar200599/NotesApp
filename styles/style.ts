import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    paddingTop: 64,
    paddingHorizontal: 18,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 20,
    color: "#111827",
    letterSpacing: 0.2,
  },

  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },

  input: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 14,
    fontSize: 16,
    marginRight: 10,
    color: "#111827",
    borderWidth: 1,
    borderColor: "#d6deeb",
  },

  addButton: {
    backgroundColor: "#1ac604",
    paddingHorizontal: 18,
    paddingVertical: 13,
    justifyContent: "center",
    borderRadius: 14,
  },

  addButtonText: {
    color: "#f8fafc",
    fontWeight: "700",
    fontSize: 15,
  },

  noteCard: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e5eaf3",
  },

  noteText: {
    flex: 1,
    fontSize: 16,
    color: "#1f2937",
    marginRight: 12,
    lineHeight: 22,
  },

  deleteButton: {
    backgroundColor: "#fee2e2",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fecaca",
  },

  deleteButtonText: {
    color: "#b91c1c",
    fontWeight: "700",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 56,
    fontSize: 16,
    color: "#6b7280",
    fontWeight: "500",
  },
});
