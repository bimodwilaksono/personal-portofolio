import React, { useState } from "react";
import { skills } from "@/data/Skills/skills";
import { Box, Container, Flex, Image, Paper, Tabs, Title, Tooltip } from "@mantine/core";

function Skills() {
    const categories = [...new Set(skills.map((el) => el.category))];
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <Container>
            <Title>Skills</Title>
            <Tabs defaultValue={activeTab} onTabChange={setActiveTab}>
                <Tabs.List>
                    {categories.map((category, index) => {
                        return (
                            <Tabs.Tab key={index} value={category}>
                                {category}
                            </Tabs.Tab>
                        );
                    })}
                </Tabs.List>

                {categories.map((category) => {
                    return (
                        <Tabs.Panel value={category} key={category} mt={"2rem"}>
                            <Flex gap={"2rem"} justify={"center"} wrap={"wrap"}>
                                {skills
                                    .filter(
                                        (skill) =>
                                            skill.category.toLowerCase() === category.toLowerCase()
                                    )
                                    .map((skill) => (
                                        <Tooltip
                                            key={skill.name}
                                            label={skill.name}
                                            openDelay={500}
                                            closeDelay={300}
                                            position='bottom'
                                            transitionProps={{
                                                transition: "scale-y",
                                            }}
                                            events={{ hover: true, focus: true, touch: false }}
                                            withArrow>
                                            <Paper
                                                w={200}
                                                h={200}
                                                shadow='lg'
                                                radius={"xl"}
                                                p='md'
                                                withBorder
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}>
                                                <Image
                                                    src={skill.icon}
                                                    mah={100}
                                                    maw={100}
                                                    alt=''
                                                    withPlaceholder
                                                />
                                            </Paper>
                                        </Tooltip>
                                    ))}
                            </Flex>
                        </Tabs.Panel>
                    );
                })}
            </Tabs>
        </Container>
    );
}

export default Skills;
