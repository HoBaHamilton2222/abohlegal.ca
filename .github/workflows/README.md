# Weekly Drip Rebuild — Setup

This workflow triggers a Vercel redeploy every Monday at 08:00 Mountain Time so that any blog post whose `publishDate` has arrived becomes visible on the live site.

## One-time setup

1. **Create a Vercel Deploy Hook**
   - Open the Vercel dashboard and go to this project.
   - Settings → Git → Deploy Hooks.
   - Click "Create Hook". Name it `Weekly Drip`. Branch: `main`.
   - Copy the URL. It will look like `https://api.vercel.com/v1/integrations/deploy/prj_xxxx/yyyy`.

2. **Add the URL as a GitHub secret**
   - GitHub repo → Settings → Secrets and variables → Actions → New repository secret.
   - Name: `VERCEL_DEPLOY_HOOK`
   - Value: paste the URL from step 1.

3. **Verify**
   - Go to the Actions tab in GitHub.
   - Click "Weekly Drip Rebuild" → "Run workflow" → "Run workflow".
   - You should see a Vercel deployment start within a minute.

## How it works

- Each blog post in `src/content/blog/` may have an optional `publishDate` field.
- The resources listing and post routes exclude any post where `publishDate > today`.
- Rebuilds re-evaluate the filter, so posts "auto-publish" on their scheduled date.
- If `publishDate` is missing, the post uses `date` instead (the default behavior).

## Scheduling new posts

Add `publishDate: YYYY-MM-DD` to the frontmatter of any draft. Commit and push. The post will stay hidden until that date and appear automatically on the next Monday rebuild at or after that date.
