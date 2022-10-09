import readingTime from "reading-time";

export function getSlug(filePath: string): string {
  const slug = filePath.split("/").pop()?.split(".").shift();
  return slug!;
}

export function getReadingTime(content: string): string {
  return readingTime(content).text;
}
