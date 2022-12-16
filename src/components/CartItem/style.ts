import { styled } from "../../styles";

export const CartItemContainer = styled("div", {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px"
})

export const CartItemImageContainer = styled("div", {
    width: "101.94px",
    height: "93px",
    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

export const CartItemDetails = styled("div", {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",

    "> h1": {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "$sm",
        lineHeight: "160%",
        color: "$gray300"
    },

    "> span": {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "$sm",
        lineHeight: "160%",
    },

    "> div": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "22px"
    }
})

export const ChangeQuantityItem = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    color: "$green500",

    button: {
        width: "28px",
        border: "none",
        backgroundColor: "$gray900",
        borderRadius: "50px",
        padding: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "$green500",
        fontWeight: "bold",
        fontSize: "18px",
        cursor: "pointer",

        "&:hover": {
            transition: "200ms",
            opacity: 0.9
        },

        "&:active": {
            transition: "200ms",
            opacity: 0.7
        }
    },

    span: {
        cursor: "default"
    }
})

export const RemoveButton = styled("button", {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "160%",
    border: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "$green500",

    "&:hover": {
        transition: "200ms",
        color: "$green300"
    }
})