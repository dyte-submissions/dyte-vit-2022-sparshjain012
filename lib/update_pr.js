import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: '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' }),
        owner = 'test-user',
         repo = 'test-repo',
        title = 'My Test Pull Request',
        body  = 'This pull request is a test!',
        head  = 'my-feature-branch',
        base  = 'develop-branch';

const response = await octokit.request(
    `POST /repos/{owner}/{repo}/pulls`, { owner, repo, title, body, head, base }
);