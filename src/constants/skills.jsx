import { GrAndroid } from "react-icons/gr";
import { FaReact, FaAws } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";
import { BiLogoNodejs, BiLogoMongodb, BiLogoPostgresql, BiLogoGraphql, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandDjango, TbBrandSupabase } from "react-icons/tb";
import { SiPython, SiDart, SiKotlin, SiTypescript, SiJavascript, SiCss3, SiHtml5, SiC, SiCplusplus, SiNestjs, SiFastapi, SiLinux, SiDocker, SiKubernetes, SiTerraform, SiGooglecloud, SiMicrosoftazure, SiGithubactions, SiGit, SiPytorch, SiTensorflow, SiVisualstudiocode, SiGithub, SiJira, SiChartdotjs, SiSqlite, SiMysql, SiFirebase } from "react-icons/si";

export const technologies = [
    // Programming Languages
    { name: 'javascript', icon: SiJavascript },
    { name: 'typescript', icon: SiTypescript },
    { name: 'python', icon: SiPython },
    { name: 'java', icon: FaJava },
    { name: 'c', icon: SiC },
    { name: 'cpp', icon: SiCplusplus },
    { name: 'sql', icon: SiSqlite },
    { name: 'html', icon: SiHtml5 },
    { name: 'css', icon: SiCss3 },
    { name: 'dart', icon: SiDart },

    // Web Technologies
    { name: 'react', icon: FaReact },
    { name: 'nodejs', icon: BiLogoNodejs },
    { name: 'nextjs', icon: TbBrandNextjs },
    { name: 'nestjs', icon: SiNestjs },
    { name: 'django', icon: TbBrandDjango },
    { name: 'graphql', icon: BiLogoGraphql },
    { name: 'tailwind', icon: BiLogoTailwindCss },
    { name: 'fastapi', icon: SiFastapi },
    { name: 'html5', icon: SiHtml5 },
    { name: 'css3', icon: SiCss3 },

    // Cloud & DevOps
    { name: 'linux', icon: SiLinux },
    { name: 'aws', icon: FaAws },
    { name: 'docker', icon: SiDocker },
    { name: 'kubernetes', icon: SiKubernetes },
    { name: 'terraform', icon: SiTerraform },
    { name: 'gcp', icon: SiGooglecloud },
    { name: 'azure', icon: SiMicrosoftazure },
    { name: 'cicd', icon: SiGithubactions },
    { name: 'git', icon: SiGit },

    // Databases
    { name: 'postgresql', icon: BiLogoPostgresql },
    { name: 'mysql', icon: SiMysql },
    { name: 'firebase', icon: SiFirebase },
    { name: 'supabase', icon: TbBrandSupabase },
    { name: 'mongodb', icon: BiLogoMongodb },

    // Machine Learning & AI
    { name: 'pytorch', icon: SiPytorch },
    { name: 'tensorflow', icon: SiTensorflow },
    { name: 'huggingface', icon: SiPytorch }, // placeholder
    { name: 'cnn', icon: SiPytorch }, // placeholder
    { name: 'rnn', icon: SiTensorflow }, // placeholder
    { name: 'lstm', icon: SiTensorflow }, // placeholder
    { name: 'gan', icon: SiTensorflow }, // placeholder
    { name: 'transformers', icon: SiPytorch }, // placeholder
    { name: 'nlp', icon: SiPytorch }, // placeholder
    { name: 'langchain', icon: SiPython }, // placeholder
    { name: 'langgraph', icon: SiPython }, // placeholder

    // Developer Tools
    { name: 'vscode', icon: SiVisualstudiocode },
    { name: 'github', icon: SiGithub },
    { name: 'jira', icon: SiJira },
    { name: 'amplitude', icon: SiChartdotjs },

    // Mobile
    { name: 'flutter', icon: RiFlutterFill },
    { name: 'kotlin', icon: SiKotlin },
    { name: 'android', icon: GrAndroid },
];

export const languages = [
    { name: 'javascript', icon: SiJavascript },
    { name: 'typescript', icon: SiTypescript },
    { name: 'python', icon: SiPython },
    { name: 'java', icon: FaJava },
    { name: 'c', icon: SiC },
    { name: 'cpp', icon: SiCplusplus },
    { name: 'html', icon: SiHtml5 },
    { name: 'css', icon: SiCss3 },
    { name: 'dart', icon: SiDart },
    { name: 'kotlin', icon: SiKotlin },
];

export default { languages, technologies };