import { styled } from "..";
import Link from "next/link";

export const SuccessContainer = styled("div",{
    width: "100%",
    maxWidth: "590px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10vh",
})

export const ProductList = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "48px",

    "> div:not(:first-child)": {
        marginLeft: "-58px"
    }
})

export const ProductItem = styled("div", {
    width: "140px",
    height: "140px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
    boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
    borderRadius: "1000px"
})

export const CheckoutInfo = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    h1: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "$2xl",
        lineHeight: "140%",
        marginBottom: "24px"
    },

    p: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "$lg",
        lineHeight: "140%",
    }
}) 

export const BackHomeLink = styled(Link, {
    marginTop: "64px",
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "$md",
    lineHeight: "160%",
    color: "$green500",
    outline: "none",

    "&:hover": {
        transition: "200ms",
        color: "$green300"
    }
})