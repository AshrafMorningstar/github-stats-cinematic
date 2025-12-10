/* Created by AshrafMorningstar - https://github.com/AshrafMorningstar */
import { Octokit } from "octokit";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import "dotenv/config";

const token = process.env.GH_TOKEN;
// Ideally read from args or env, hardcoded for this user
const username = "AshrafMorningstar";

async function fetchStats() {
  if (!token) {
    console.warn("GH_TOKEN is missing! Using mock data.");
    const mockStats = {
      username: "AshrafMorningstar",
      name: "Ashraf Morningstar",
      avatar: "",
      totalCommits: 1234,
      totalPRs: 56,
      totalIssues: 22,
      totalContribs: 2500,
      repos: 42,
      stars: 150,
      followers: 50,
    };
    await mkdir(join(process.cwd(), "src/data"), { recursive: true });
    await writeFile(
      join(process.cwd(), "src/data/stats.json"),
      JSON.stringify(mockStats, null, 2)
    );
    return;
  }

  const octokit = new Octokit({ auth: token });

  const query = `
    query($login: String!) {
      user(login: $login) {
        name
        login
        avatarUrl
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          restrictedContributionsCount
        }
        repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: STARGAZERS, direction: DESC}) {
          totalCount
          nodes {
            stargazers {
              totalCount
            }
          }
        }
        followers {
          totalCount
        }
      }
    }
  `;

  console.log(`Fetching stats for ${username}...`);
  try {
    const result: any = await octokit.graphql(query, { login: username });
    const user = result.user;

    const totalStars = user.repositories.nodes.reduce(
      (acc: number, repo: any) => acc + repo.stargazers.totalCount,
      0
    );
    const totalCommits = user.contributionsCollection.totalCommitContributions;
    const totalPRs = user.contributionsCollection.totalPullRequestContributions;
    const totalIssues = user.contributionsCollection.totalIssueContributions;
    const totalContribs =
      totalCommits +
      totalPRs +
      totalIssues +
      user.contributionsCollection.restrictedContributionsCount;

    const stats = {
      username: user.login,
      name: user.name,
      avatar: user.avatarUrl,
      totalCommits,
      totalPRs,
      totalIssues,
      totalContribs,
      repos: user.repositories.totalCount,
      stars: totalStars,
      followers: user.followers.totalCount,
      _credits:
        "Created by AshrafMorningstar - https://github.com/AshrafMorningstar",
    };

    await mkdir(join(process.cwd(), "src/data"), { recursive: true });
    await writeFile(
      join(process.cwd(), "src/data/stats.json"),
      JSON.stringify(stats, null, 2)
    );
    console.log("Stats saved to src/data/stats.json");
  } catch (error) {
    console.error("Error fetching stats:", error);
    process.exit(1);
  }
}

fetchStats().catch((err) => {
  console.error(err);
  process.exit(1);
});
