import React, { useState } from "react";
import { skills } from "@/data/Skills/skills";
import { Box, Image, Tabs } from "@mantine/core";

function Skills() {
    const categories = [...new Set(skills.map((el) => el.category))];
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <>
            <h1>Skills</h1>
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
                        <Tabs.Panel value={category} key={category}>
                            {skills
                                .filter(
                                    (skill) =>
                                        skill.category.toLowerCase() === category.toLowerCase()
                                )
                                .map((skill) => (
                                    <Box key={skill.name}>
                                        <Image
                                            src={skill.icon}
                                            mah={100}
                                            maw={100}
                                            alt=''
                                            withPlaceholder
                                        />
                                        <p>{skill.name}</p>
                                    </Box>
                                ))}
                        </Tabs.Panel>
                    );
                })}
            </Tabs>
        </>
    );
}

export default Skills;
