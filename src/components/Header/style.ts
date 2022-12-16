import { styled } from "../../styles"

export const HeaderContainer = styled("header", {
    width: "calc(100% - 44px)",
    maxWidth: "1128px",
    display: "flex",
    justifyContent: "space-between",
    padding: "32px 22px"
})

export const CartButton = styled("button", {
    position: "relative",
    width: "38px",
    height: "38px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: "6px",
    transition: "200ms",
    outline: "none",
    backgroundColor: "$green500",
    cursor: "pointer",

    "&:hover": {
        transition: "200ms",
        opacity: 0.8
    }
})

export const CartItensInfo = styled("div", {
    width: "20px",
    height: "20px",
    backgroundColor: "$green300",
    fontSize: "12px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "$gray100",
    position: "absolute",
    top: "-8px",
    right: "-8px"
})