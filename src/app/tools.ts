export type Tool = {
  name: string;
  platform: string;
  cli: string;
  repo: string;
  summary: string;
};

const gh = (r: string) => `https://github.com/suenot/${r}`;

export const tools: Tool[] = [
  {
    name: "facebook-automation",
    platform: "Facebook",
    cli: "facebook-publish",
    repo: gh("facebook-automation"),
    summary:
      "Publishes one finished local video as a personal-profile Reel through persistent Camoufox, with an idempotent request journal.",
  },
  {
    name: "instagram-automation",
    platform: "Instagram",
    cli: "igpub",
    repo: gh("instagram-automation"),
    summary:
      "Reels, photos and ordered image carousels through a private persistent Camoufox profile. The (account, request_id) journal prevents duplicates.",
  },
  {
    name: "tiktok-automation",
    platform: "TikTok",
    cli: "tiktok-publish",
    repo: gh("tiktok-automation"),
    summary:
      "Publishes one finished local video through TikTok Studio, with UI acceptance checks and post reconciliation.",
  },
  {
    name: "pinterest-automation",
    platform: "Pinterest",
    cli: "pinterest-publish",
    repo: gh("pinterest-automation"),
    summary:
      "Publishes one video Pin to an explicitly bound account and owned board, with AI disclosure flags and exact metadata.",
  },
  {
    name: "threads-automation",
    platform: "Threads",
    cli: "threads-publish",
    repo: gh("threads-automation"),
    summary:
      "Publishes one local video and its exact caption from a bound Threads profile.",
  },
  {
    name: "x-automation",
    platform: "X",
    cli: "x-publish",
    repo: gh("x-automation"),
    summary:
      "Reusable X video publisher with the same account, metadata and journal contract as the other tools.",
  },
  {
    name: "youtube-automation",
    platform: "YouTube",
    cli: "metadata + prepare",
    repo: gh("youtube-automation"),
    summary:
      "Prepares titles, descriptions, tags, chapters and subtitles, then uploads through YouTube Studio. Two pinned submodules.",
  },
  {
    name: "metadata-automation",
    platform: "All platforms",
    cli: "metadata-automation",
    repo: gh("metadata-automation"),
    summary:
      "Deterministic per-platform metadata drafts from one editorial JSON brief. No AI calls, no publishing.",
  },
];
