import 'server-only';

import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import { marked } from 'marked';

const journeyDirectory = path.join(process.cwd(), 'src/content/journey');

export interface JourneyMilestone {
  slug: string;
  title: string;
  phase: string;
  focus?: string;
  date?: string;
  html: string;
}

export function getJourneyMilestones(): JourneyMilestone[] {
  return fs
    .readdirSync(journeyDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const filePath = path.join(journeyDirectory, entry.name, 'index.md');
      const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));

      return {
        slug: entry.name,
        title: String(data.title),
        phase: String(data.company),
        focus: data.range ? String(data.range) : undefined,
        date: data.date ? String(data.date) : undefined,
        html: marked.parse(content) as string,
      };
    })
    .sort(
      (first, second) =>
        new Date(first.date ?? 0).getTime() -
        new Date(second.date ?? 0).getTime(),
    );
}
