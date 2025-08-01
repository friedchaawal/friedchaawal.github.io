import fs from 'fs';
import path from 'path';

export async function load() {
    const entriesDir = path.resolve('src/journal-entries');
    const files = fs.readdirSync(entriesDir).filter(f => f.endsWith('.txt'));
    let entries = [];

    for (const file of files) {
        const content = fs.readFileSync(path.join(entriesDir, file), 'utf-8');
        const fileEntries = content
            .split('===') // Split entries by separator
            .map(block => block.trim())
            .filter(block => block)
            .map(block => {
                const [meta, ...contentLines] = block.split('\n');
                const [date, time, heading, firstContent] = meta.split('|');
                const content = [firstContent, ...contentLines].join('\n').trim();
                return { date, time, heading, content, filename: file };
            });
        entries = [...entries, ...fileEntries];
    }

    return { entries };
}