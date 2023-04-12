import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from 'react-icons/si'

export const contacts = [
    {
        platform: "Email",
        account: "https://mail.google.com/mail/?view=cm&fs=1&to=bimodlaksono@gmail.com",
        icon: <SiGmail/>,
    },
    {
        platform: "Github",
        account: "https://github.com/bimodwilaksono",
        icon: <FaGithub/>,
    },
    {
        platform: "LinkedIn",
        account: "https://linkedin.com/in/bimo-d-laksono25/",
        icon: <FaLinkedin/>,
    },
];
