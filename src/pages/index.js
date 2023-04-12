import { contacts } from "@/data/Contact/contact";
import { Button, Flex } from "@mantine/core";

export default function Home() {
    return (
        <div>
            <p>Bimo Dwi Laksono</p>
            <p>Junior Fullstack Developer</p>
            <p>Self-taught web developer with under 1 year experience</p>
            <Flex gap={12} className='contact-section'>
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
        </div>
    );
}
