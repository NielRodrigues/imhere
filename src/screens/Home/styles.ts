import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    flex: 1,
  },
  
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold", 
    marginTop: 48,
  },

  eventDate: {
    color: "#BCBCBC",
    fontSize: 18,
  },

  input: {
    height: 56,
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#1F1E25",
    color: "#FDFCFE",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 48,
  },
})