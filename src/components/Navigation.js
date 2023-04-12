import { links } from "@/data/Header/links";
import { Container, Group, Header, createStyles, rem } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";

const userStyles = createStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    link: {
        display: "block",
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color: theme.black,
        fontSize: `${rem(20)}`,
        fontWeight: 500,

        "&:hover": {
            backgroundColor: theme.colors.blue[2],
        },
    },

    linkActive: {
        "&, &:hover": {
            // backgroundColor: theme.colors.blue[3],
            borderBottom: `3px solid ${theme.colors.blue[4]}`,
        },
    },
}));

function Navigation() {
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = userStyles();
    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(e) => {
                setActive(link.link);
            }}>
            {link.label}
        </Link>
    ));
    return (
        <Header height={60} mb={50}>
            <Container className={classes.header}>
                <Group>{items}</Group>
            </Container>
        </Header>
    );
}

export default Navigation;
