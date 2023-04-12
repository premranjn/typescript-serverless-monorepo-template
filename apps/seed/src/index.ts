import { Octokit } from "octokit";
import { prisma } from "@lib/db";

const octokit = new Octokit();
await Promise.all(
  Array.from({ length: 10 }).map(async (_, index) => {
    const page = index + 1;
    const { data } = await octokit.rest.search.repos({
      q: "stars:>1",
      sort: "stars",
      page,
    });
    await Promise.all(
      data.items
        .filter((item) => item.owner && item.owner.name)
        .map(async (item) => {
          await prisma.repository.create({
            data: {
              stars: item.watchers,
              owner: item.owner?.name as string, // TODO: Do this with a type predicate instead https://stackoverflow.com/a/54318054/6402548
              name: item.name,
              description: item.description ?? "",
              url: item.html_url,
              topics: item.topics ?? [],
            },
          });
        })
    );
  })
);
