# Claude Code Instructions for This Repository

## GitHub Actions Workflow Configuration

### Important: Manual Deployment Strategy

This repository uses MANUAL-ONLY GitHub Actions workflows for deploying different static site generator implementations.

### Why Workflows Are Manual-Only

**Context:**
We are testing 5 different static site generators (Quarto, Hugo, Al-folio, Astro, Eleventy) to choose the best one for this academic multilingual website.

**Problem with automatic deployments:**
If workflows auto-trigger on push, every commit would immediately deploy to GitHub Pages (benjaminpeeters.github.io), making it impossible to control which framework version is live during testing.

**Solution:**
All deployment workflows use `workflow_dispatch` (manual trigger only) to give complete control over when each framework deploys.

### Workflow Files

All deployment workflows are manual-only:
- `.github/workflows/deploy-main-quarto.yml` - Deploys main branch (current Quarto setup)
- `.github/workflows/deploy-quarto.yml` - Deploys test/quarto branch
- `.github/workflows/deploy-hugo.yml` - Deploys test/hugo branch
- `.github/workflows/deploy-alfolio.yml` - Deploys test/alfolio branch
- `.github/workflows/deploy-astro.yml` - Deploys test/astro branch
- `.github/workflows/deploy-eleventy.yml` - Deploys test/eleventy branch

### Why deploy-main-quarto.yml Was Renamed

**Original name:** `publish.yml`

**Original trigger:**
```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:
```

**Problem:**
The automatic push trigger would deploy the main branch to GitHub Pages every time code was committed, potentially overwriting test deployments and causing confusion during framework evaluation.

**Change made:**
1. Renamed to `deploy-main-quarto.yml` for consistency with other workflow names
2. Removed automatic push trigger
3. Kept only `workflow_dispatch` for manual triggering

**Benefit:**
Now all deployments are explicit and controlled. To deploy any version (including main), you must manually trigger the workflow from GitHub Actions tab.

### How to Deploy

**To deploy any framework:**
1. Go to: https://github.com/benjaminpeeters/benjaminpeeters.github.io/actions
2. Click the desired workflow from left sidebar
3. Click "Run workflow" button
4. Confirm the branch
5. Click green "Run workflow" button
6. Wait 2-5 minutes for deployment
7. Visit benjaminpeeters.github.io

### DO NOT Add Automatic Triggers

When working with this repository:
- DO NOT add `push:` or `pull_request:` triggers to deployment workflows
- Keep all workflows as `workflow_dispatch` only
- This prevents accidental deployments during development
- Maintains clear control over which framework is live

### After Framework Selection

Once a framework is chosen as the winner:
- You MAY add automatic deployment back to that workflow
- Update workflow to trigger on push to production branch
- Remove or archive other test workflows

### Framework Testing Status

**Current setup:**
- 5 test worktrees in separate directories
- Each worktree on its own test branch
- All frameworks can be deployed manually for evaluation
- Only ONE framework can be live at benjaminpeeters.github.io at a time

**Worktrees:**
- benjaminpeeters.github.io-quarto (test/quarto)
- benjaminpeeters.github.io-hugo (test/hugo)
- benjaminpeeters.github.io-alfolio (test/alfolio)
- benjaminpeeters.github.io-astro (test/astro)
- benjaminpeeters.github.io-eleventy (test/eleventy)

### Additional Resources

See `.ai/script/` for detailed implementation guides:
- `HOW-TO-DEPLOY-FRAMEWORKS.txt` - Complete deployment instructions
- `FRAMEWORK-EVALUATION-CHECKLIST.txt` - Testing checklist
- `GITHUB-PAGES-DEPLOYMENT-GUIDE.txt` - GitHub Pages setup
- Framework-specific guides in subdirectories

---

**Last updated:** 2025-11-08
**Reason:** Changed from automatic to manual deployment strategy for framework testing
