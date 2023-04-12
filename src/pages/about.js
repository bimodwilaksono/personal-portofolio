import React from "react";
import { aboutMe } from "@/data/About/about-me";
import { Text, Timeline, TimelineItem } from "@mantine/core";
import { experience } from "@/data/About/experience";

function About() {
    return (
        <div>
            <div>
                <h1>About Me</h1>
                <div>
                    {aboutMe.map((el, i) => (
                        <p key={i}>{el}</p>
                    ))}
                </div>
            </div>
            <div>
                <h1>Experience</h1>
                <Timeline active={1}>
                    {experience.map((item, i) => {
                        return (
                            <TimelineItem key={i} title={item.company}>
                                <Text className='position'>
                                    {item.position}
                                </Text>
                                {item.jobs.map((job, j) => {
                                    return (
                                        <Text key={j} size={12}>
                                            {job}
                                        </Text>
                                    );
                                })}
                                <Text className='timeRange'>
                                    {item.timeRange}
                                </Text>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
            </div>
        </div>
    );
}

export default About;
