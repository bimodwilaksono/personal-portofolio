import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    main: {
        height: "65vh",
    },
}));

const Layout = ({ children }) => {
    const { classes, cx } = useStyles();
    return (
        <>
            <Navigation />
            <main className={cx(classes.main)}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
