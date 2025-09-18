import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

type ButtonVariant = "filled" | "outlined";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant; // defaults to "filled"
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = "filled",
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.base,
        variant === "filled" ? styles.filled : styles.outlined,
        style,
        { width: '60%', marginBottom:10},
      ]}
    >
      <Text
        style={[
          styles.baseText,
          variant === "filled" ? styles.filledText : styles.outlinedText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontSize: 16,
    fontWeight: "600",
  },
  filled: {
    backgroundColor: "#439D25", // Blue filled
  },
  filledText: {
    color: "#fff",
  },
  outlined: {
    borderWidth: 2,
    borderColor: "#439D25",
    backgroundColor: "transparent",
  },
  outlinedText: {
    color: "#439D25",
  },
});

export default CustomButton;
