import { contacts } from "@/data/Contact/contact";
import {
    Avatar,
    Box,
    Button,
    Center,
    Container,
    Flex,
    Image,
    createStyles,
    Title,
    Text,
} from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import imageProfile from "../../public/images/personal.jpg";

const useStyles = createStyles((theme) => ({
    gradientText: {
        backgroundImage: `linear-gradient(90deg, hsla(243, 85%, 42%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)`,
        color: "transparent",
        backgroundClip: "text",
        fontWeight: 700,
        fontSize: 20,
        "@media (min-width: 768px)": {
            fontSize: 24,
            textAlign: "left",
        },
        lineHeight: 1,
        marginTop: -5,
    },
    image: {
        borderRadius: "100%",
        backgroundImage: `url(/images/personal.jpg)`,
        backgroundPosition: "50% 45%",
        backgroundSize: "cover",
        minWidth: `300px`,
        minHeight: `300px`,

    },
}));

export default function Home() {
    const { classes } = useStyles();
    return (
        <Container h={"100%"}>
            <Flex align={"center"} h={"75%"} gap={'4rem'}>
                <Box>
                    <Title>Bimo Dwi Laksono</Title>
                    <TypeAnimation
                        sequence={[
                            "Junior Frontend Developer",
                            2000,
                            "",
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className={classes.gradientText}
                    />
                    <Text mt={12} mb={12}>
                        Self-taught web developer with under 1 year experience
                    </Text>
                    <Flex rowGap={12} className='contact-section'>
                        {contacts.map((contact) => {
                            return (
                                <Button
                                    key={contact.platform}
                                    component='a'
                                    target='_blank'
                                    leftIcon={contact.icon}
                                    href={contact.account}
                                    variant='black'>
                                    {contact.platform}
                                </Button>
                            );
                        })}
                    </Flex>
                </Box>
                <Box className={classes.image}>
                    {/* <Image
                        maw={240}
                        mx={"auto"}
                        radius='100%'
                        src='/images/personal.jpg'
                        fit='cover'
                        alt=''
                    /> */}
                </Box>
            </Flex>
        </Container>
    );
}
