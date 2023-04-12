import React from "react";
import { aboutMe } from "@/data/About/about-me";
import {
    Avatar,
    Box,
    Container,
    Flex,
    Image,
    Text,
    ThemeIcon,
    Timeline,
    TimelineItem,
    Title,
    createStyles,
} from "@mantine/core";
import { experience } from "@/data/About/experience";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    itemTitle: {
        fontSize: "1.25rem",
        fontWeight: "600",
    },
    positionText: {
        fontWeight: 400,
        lineHeight: 1.5,
    },
}));

function About() {
    const { classes } = useStyles();
    return (
        <Container>
            <Flex direction={"column"} gap={12}>
                <Box w={600}>
                    <Title>About Me</Title>
                    <Box>
                        {aboutMe.map((el, i) => (
                            <Text mb={"1rem"} weight={500} key={i}>
                                {el}
                            </Text>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <Title>Experience</Title>
                    <Timeline
                        active={1}
                        bulletSize={20}
                        classNames={{
                            itemTitle: classes.itemTitle,
                        }}>
                        {experience.map((item, i) => {
                            return (
                                <TimelineItem
                                    // bullet={<Image src={item.icon} alt='' />}
                                    key={i}
                                    title={item.company}>
                                    <Text color='dimmed' className='timeRange'>
                                        {item.timeRange}
                                    </Text>
                                    {/* <Text>{item.position}</Text> */}
                                    {item.jobs.map((job, j) => {
                                        return (
                                            <Text
                                                key={j}
                                                size={18}
                                                className={classes.positionText}>
                                                {job}
                                            </Text>
                                        );
                                    })}
                                </TimelineItem>
                            );
                        })}
                    </Timeline>
                </Box>
                <Box>
                    <Title>Resume</Title>
                    <Text>
                        Download my resume{" "}
                        <Link target='_blank' href='/pdf/resume.pdf'>
                            here
                        </Link>
                    </Text>
                </Box>
            </Flex>
        </Container>
    );
}

export default About;
