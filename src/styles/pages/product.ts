import { styled } from "..";

export const ProductContainer = styled("div", {
    width: "calc(100% - 44px)",
    maxWidth: "1128px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 22px",
    gap: "72px",

    image: {
        objectFit: "cover"
    }
})

export const ImageContainer = styled("div", {
    width: "100%",
    height: "100vh",
    maxWidth: "576px",
    maxHeight: "656px",
    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
    boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.9)",
    borderRadius: "8px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

export const ProductInfo = styled("div", {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",

    h1: {
        margin: "16px 0px",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "$2xl",
        lineHeight: "140%",
        color: "$gray100",
    },

    span: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "$2xl",
        lineHeight: "140%",
        color: "$green500",
        marginBottom: "40px",
    },

    p: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "$sm",
        lineHeight: "160%",
        color: "$gray300",
    },

    button: {
        marginTop: "auto",
        width: "100%",
        backgroundColor: "$green500",
        border: "none",
        padding: "20px 32px",
        textAlign: "center",
        color: "$gray100",
        fontWeight: "700",
        fontSize: "$sm",
        lineHeight: "160%",
        borderRadius: "8px",
        cursor: "pointer",

        "&:hover": {
            transition: "200ms",
            backgroundColor: "$green300",
        }
    }
})