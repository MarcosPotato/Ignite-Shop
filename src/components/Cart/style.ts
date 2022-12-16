import { styled } from "../../styles";

export const CartContainer = styled("main", {
    width: "calc(100% - 48px)",
    height: "calc(100vh - 78px)",
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    paddingTop: "0px",
})

export const CartItens = styled("section", {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: "12px",

    "> h1": {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "$md",
        lineHeight: "160%",
        marginBottom: "32px"
    },

    "> div": {
        flex: 1,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",

        "> div": {
            marginBottom: "24px",
        }
    }
})

export const CartPayment = styled("footer", {
    button: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 32px",
        backgroundColor: "$green500",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "$sm",
        lineHeight: "160%",
        marginBottom: "32px",
        borderRadius: "8px",
        color: "$gray100",
        cursor: "pointer",

        "&:hover": {
            transition: "200ms",
            backgroundColor: "$green300"
        }
    }
})

export const PaymentDetails = styled("div", {
    marginBottom: "52px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "8px",

    label: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        color: "$gray100",
        fontStyle: "normal",

        "&:first-child": {
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "160%",

            span: {
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "160%",
            }
        },

        "&:last-child": {
            fontWeight: "700",
            fontSize: "#sm",
            lineHeight: "160%",

            span: {
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "$lg",
                lineHeight: "140%",
            }
        }
    }
})