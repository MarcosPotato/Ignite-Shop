import { styled } from "../../styles"

export const HeaderContainer = styled("header", {
    width: "calc(100% - 44px)",
    maxWidth: "1128px",
    display: "flex",
    justifyContent: "space-between",
    padding: "32px 22px",

    img: {
        cursor: "pointer"
    },

    variants: {
        isSuccessPage: {
            true: {
                justifyContent: "center"
            }
        }
    }
})

export const CartButtonContainer = styled("div", {
    position: "relative",
    margin: "8px",
})

export const CartButton = styled("button", {
    width: "38px",
    height: "38px",
    padding: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: "6px",
    transition: "200ms",
    outline: "none",
    backgroundColor: "$gray800",
    cursor: "pointer",

    "&:hover": {
        transition: "200ms",
        opacity: 0.8
    }
})

export const CartItensInfo = styled("div", {
    width: "20px",
    height: "20px",
    backgroundColor: "$green500",
    fontSize: "12px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "$gray100",
    position: "absolute",
    top: "-8px",
    right: "-8px",
    zIndex: 2,
    border: "2px solid $gray900"
})

export const EmptyCart = styled("div", {
    width: "100%",
    height: "calc(100vh - 180px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    h1: {
        fontWeight: "bold",
        fontSize: "$2xl",
        textAlign: "center",
        textTransform: "uppercase"
    }
})

export const CartHeader = styled("header",{
    width: "calc(100% - 48px)",
    padding: "24px",
    display: "flex",
    justifyContent: "flex-end",

    button:{
        border: "none",
        padding: "4px",
        borderRadius: "50px",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",

        "&:hover": {
            transition: "200ms",
            backgroundColor: "$gray900",
        }
    }
})