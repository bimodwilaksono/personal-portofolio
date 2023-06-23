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
    // image: {
    //     borderRadius:
    // }
}));

export default function Home() {
    const { classes } = useStyles();
    return (
        <Container h={"100%"}>
            <Flex align={"center"} h={"100%"}>
                <Box>
                    <Title>Bimo Dwi Laksono</Title>
                    <TypeAnimation
                        sequence={[
                            "Junior Frontend Developer",
                            2000,
                            ""
                            // "Junior Backend Developer",
                            // 2000,
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
                {/* <Image
                    maw={240}
                    mx={"auto"}
                    mah={240}
                    radius={"100%"}
                    src='/images/profile.png'
                    alt=''
                /> */}
            </Flex>
        </Container>
    );
}
