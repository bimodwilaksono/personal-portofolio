import { createStyles, Container, Group, ActionIcon, rem, Button, Footer } from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { contacts } from "@/data/Contact/contact";

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
        },
    },

    links: {
        [theme.fn.smallerThan("xs")]: {
            marginTop: theme.spacing.md,
        },
    },

    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,

        "&:hover": {
            backgroundColor: theme.colors.gray[2],
        },
    },
}));

export default function FooterComponent() {
    const { classes } = useStyles();

    const icons = contacts.map((contact) => {
        return (
            <Button
                className={classes.button}
                key={contact.platform}
                component='a'
                target='_blank'
                href={contact.account}
                variant='black'
                size='md'>
                {contact.icon}
            </Button>
        );
    });

    return (
        <Footer className={classes.footer}>
            <Container className={classes.inner}>
                <MantineLogo size={28} />
                <Group spacing={0} className={classes.links} position='right' noWrap>
                    {icons}
                </Group>
            </Container>
        </Footer>
    );
}
