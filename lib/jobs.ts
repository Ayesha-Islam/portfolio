import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const jobsDirectory = path.join(process.cwd(), 'content/jobs');

export interface Job {
    slug: string;
    title: string;
    company: string;
    location?: string;
    range?: string;
    url?: string;
    date?: string;
    html: string;
}

export function getAllJobs(): Job[] {
    const folders = fs
        .readdirSync(jobsDirectory, { withFileTypes: true })
        .filter(f => f.isDirectory());

    const jobs = folders.map(folder => {
        const fullPath = path.join(jobsDirectory, folder.name, 'index.md');
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: folder.name,
            title: data.title,
            company: data.company,
            location: data.location,
            range: data.range,
            url: data.url,
            date: data.date,
            html: marked.parse(content) as string,
        };
    });

    return jobs.sort(
        (a, b) =>
            new Date(a.date || 0).getTime() -
            new Date(b.date || 0).getTime(),
    );
}