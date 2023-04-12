import React from "react";
import FooterComponent from "./Footer";
import Navigation from "./Navigation";
import { createStyles, AppShell } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    main: {
        height: "100vh",
    },
    footer: {
        position: "sticky",
        left: 0,
        bottom: 0,
        zIndex: 9999999,
    },
}));

const Layout = ({ children }) => {
    const { classes, cx } = useStyles();
    return (
        <AppShell header={<Navigation />} footer={<FooterComponent />} p={"2rem"}>
            {/* <Navigation /> */}
            <main className={cx(classes.main)}>{children}</main>
            {/* <Footer className={classes.footer} /> */}
        </AppShell>
    );
};

export default Layout;
