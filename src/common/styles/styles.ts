import styled from "@emotion/styled";

export const style = {
  borderRadius: "10px",
  background: "#6168",
  color: "#fff",
  fontSize: "16px",
};

export const PreloaderContainer = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
});

export const Img = styled("img")({
  width: "100px",
  height: "auto",
});

export const color = {
  white: "#fff",
  almostBlack: "#121212",
  darkGray: "#1e1e1e",
  semiTransparentBlack: "#00000019",
  lightGray: "#f5f5f5",
  cyan: "#00bcd4",
  black: "#000",
  red: "#d61d1d",
};

export const font = {
  bold: "bold",
};
