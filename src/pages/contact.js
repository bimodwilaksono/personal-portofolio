import {
    createStyles,
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    rem,
} from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";
import { ContactIconsList } from "../components/Contact/ContactIcons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: 400,
        boxSizing: "border-box",
        backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][7]
        } 100%)`,
        borderRadius: theme.radius.md,
        padding: `calc(${theme.spacing.xl} * 2.5)`,

        [theme.fn.smallerThan("sm")]: {
            padding: `calc(${theme.spacing.xl} * 1.5)`,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        color: theme.white,
        lineHeight: 1,
    },

    description: {
        color: theme.colors[theme.primaryColor][0],
        maxWidth: rem(300),

        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
        },
    },

    form: {
        backgroundColor: theme.white,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.lg,
    },

    social: {
        color: theme.white,

        "&:hover": {
            color: theme.colors[theme.primaryColor][1],
        },
    },

    input: {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[4],
        color: theme.black,

        "&::placeholder": {
            color: theme.colors.gray[5],
        },
    },

    inputLabel: {
        color: theme.black,
    },

    control: {
        backgroundColor: theme.colors[theme.primaryColor][6],
    },

    errors: {
        color: "#bf1650",
        "&::before": {
            display: "inline",
            content: '"⚠ "',
        },
    },
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

const schema = yup.object({
    email: yup.string().email("Invalid email"),
    name: yup.string().required().min(2, "Name should have at least 2 letters"),
    message: yup.string().required().min(10, "Message should have at least 10 letters"),
});

export default function ContactUs() {
    const { classes } = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => alert(JSON.stringify(data));

    const icons = social.map((Icon, index) => (
        <ActionIcon key={index} size={28} className={classes.social} variant='transparent'>
            <Icon size='1.4rem' stroke={1.5} />
        </ActionIcon>
    ));

    return (
        <div className={classes.wrapper}>
            <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <div>
                    <Title className={classes.title}>Contact us</Title>
                    <Text className={classes.description} mt='sm' mb={30}>
                        Leave your email and we will get back to you within 24 hours
                    </Text>

                    <ContactIconsList variant='white' />

                    {/* <Group mt='xl'>{icons}</Group> */}
                </div>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextInput
                        label='Email'
                        placeholder='your@email.com'
                        required
                        classNames={{
                            input: classes.input,
                            label: classes.inputLabel,
                        }}
                        {...register("email")}
                    />
                    {errors.email && <p className={classes.errors}>{errors.email.message}</p>}
                    <TextInput
                        label='Name'
                        placeholder='John Doe'
                        mt='md'
                        classNames={{
                            input: classes.input,
                            label: classes.inputLabel,
                        }}
                        {...register("name")}
                    />
                    {errors.name && <p className={classes.errors}>{errors.name.message}</p>}

                    <Textarea
                        required
                        label='Your message'
                        placeholder='I want to order your goods'
                        minRows={4}
                        mt='md'
                        classNames={{
                            input: classes.input,
                            label: classes.inputLabel,
                        }}
                        {...register("message")}
                    />
                    {errors.message && <p className={classes.errors}>{errors.message.message}</p>}

                    <Group position='right' mt='md'>
                        <Button className={classes.control} type='submit'>
                            Send message
                        </Button>
                    </Group>
                </form>
            </SimpleGrid>
        </div>
    );
}
