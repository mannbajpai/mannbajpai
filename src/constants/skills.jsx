import { GrAndroid } from "react-icons/gr";
import { FaReact } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { BiLogoNodejs, BiLogoMongodb, BiLogoPostgresql, BiLogoGraphql, BiLogoTailwindCss } from "react-icons/bi"

import { TbBrandNextjs, TbBrandDjango, TbBrandSupabase, } from "react-icons/tb"

import { SiPython, SiDart, SiKotlin, SiTypescript, SiJavascript, SiCss3, SiHtml5 } from "react-icons/si"

export const technologies = [
    {
        name: 'react',
        icon: FaReact,
    },
    {
        name: 'nodejs',
        icon: BiLogoNodejs,
    },
    {
        name: 'nextjs',
        icon: TbBrandNextjs,
    },
    {
        name: 'flutter',
        icon: RiFlutterFill,
    },
    {
        name: 'django',
        icon: TbBrandDjango,
    },
    {
        name: 'mongodb',
        icon: BiLogoMongodb,
    },
    {
        name: 'postgresql',
        icon: BiLogoPostgresql,
    },
    {
        name: 'supabase',
        icon: TbBrandSupabase,
    },
    {
        name: 'tailwind',
        icon: BiLogoTailwindCss,
    },
    {
        name: 'aws',
        icon: FaAws,
    },
    {
        name: 'qraphql',
        icon: BiLogoGraphql,
    },
    {
        name: 'android',
        icon: GrAndroid,
    },
]


export const languages = [
    {
        name: 'javascript',
        icon: SiJavascript,
    },
    {
        name: 'typescript',
        icon: SiTypescript,
    },
    {
        name: 'python',
        icon: SiPython,
    },
    // {
    //     name: 'java',
    //     icon: BiLogoJava,
    // },
    {
        name: 'html',
        icon: SiHtml5,
    },
    {
        name: 'css',
        icon: SiCss3,
    },
    {
        name: 'dart',
        icon: SiDart,
    },
    {
        name: "kotlin",
        icon: SiKotlin,
    }
];

export default {
    languages,
    technologies,
}