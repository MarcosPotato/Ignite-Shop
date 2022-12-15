import { styled } from "../../styles";

export const ProductContainer = styled("div", {
    width: "100%",
    height: "100vh",
    maxWidth: "696px",
    maxHeight: "656px",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
    boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.9)",
    borderRadius: "8px",

    img: {
        objectFit: "cover"
    },

    '&:hover': {
        footer: {
            opacity: 1,
            transform: "translateX(0%)",
        }
    }
})

export const ProductInfo = styled("footer", {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem", 
    right: "0.25rem",
    width: "calc(100% - 4.5rem)",
    borderRadius: "6px",
    background: "rgba(32, 32, 36, 0.9)",
    padding: "26px 32px",
    transition: "all 200ms",
    transform: "translateY(110%)",
    opacity: 0,

    display: "flex",
    justifyContent: "space-between",

    p: {
        fontSize: "$md",
        color: "$gray100",
        lineHeight: "160%",
        fontWeight: "bold"
    },

    span: {
        fontSize: "$lg",
        color: "$green500",
        lineHeight: "140%",
        fontWeight: "bold"
    },
})