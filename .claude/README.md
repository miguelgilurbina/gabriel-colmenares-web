# Claude Code Configuration

This directory contains Claude Code configuration for the Gabriel Colmenares website project.

## Directory Structure

```
.claude/
├── commands/              # Custom slash commands
│   ├── review-changes.md  # Review uncommitted changes
│   ├── update-content.md  # Update template.json content
│   ├── add-component.md   # Create new React components
│   ├── prepare-deploy.md  # Deployment checklist
│   └── create-issue.md    # Create GitHub issues
├── sessions/              # Context sessions for different work streams
│   ├── README.md         # Sessions documentation
│   └── current-session.md # Active session tracking
├── prompts.md            # Project context and overview
└── README.md             # This file
```

## Using Custom Commands

Claude Code supports custom slash commands that provide context-aware assistance. Use them in your Claude Code conversations:

### `/review-changes`
Reviews all uncommitted changes, checks for issues, and suggests commit messages.

**When to use**: Before committing code

**What it does**:
- Analyzes git diff
- Checks for code quality issues
- Runs build verification
- Suggests descriptive commit messages

### `/update-content`
Guides you through updating content in template.json safely.

**When to use**: Updating text, links, or data

**What it does**:
- Helps you navigate the JSON structure
- Validates changes
- Updates TypeScript types if needed
- Tests the build

### `/add-component`
Creates new React components following project patterns.

**When to use**: Adding new sections or features

**What it does**:
- Generates component boilerplate
- Creates TypeScript interfaces
- Adds animation patterns
- Integrates with the page

### `/prepare-deploy`
Runs a comprehensive deployment checklist.

**When to use**: Before deploying to production

**What it does**:
- Verifies build succeeds
- Checks for errors
- Validates external links
- Creates deployment summary

### `/create-issue`
Helps create well-formatted GitHub issues.

**When to use**: Tracking bugs, features, or content updates

**What it does**:
- Guides you through issue creation
- Follows project templates
- Generates proper labels
- Provides gh CLI commands

## Context Sessions

Sessions help maintain context across different types of work. Each session file documents:
- Current goals
- Progress made
- Open questions
- Next steps

### Using Sessions

1. **Start a new session**:
   ```bash
   cp .claude/sessions/current-session.md .claude/sessions/feature-xyz.md
   ```

2. **Document your work**: Update the session file as you progress

3. **Reference in Claude**: Mention the session file to maintain context across conversations

### Session Types

- **Content Updates**: For copy, links, or media changes
- **Feature Development**: For new components or major features
- **Bug Fixes**: For investigating and resolving issues
- **Design Refinements**: For styling or UX improvements

## GitHub Integration

### Issue Templates

Located in `.github/ISSUE_TEMPLATE/`:
- `feature-request.md` - New features or enhancements
- `bug-report.md` - Bug reports with debugging info
- `content-update.md` - Content change requests

### Workflows

Located in `.github/workflows/`:
- `issue-labeler.yml` - Automatically labels issues based on content

### Using GitHub CLI

```bash
# Create an issue
gh issue create --title "Title" --body-file issue-body.md

# List open issues
gh issue list

# View issue
gh issue view 123

# Close issue
gh issue close 123
```

## Best Practices

1. **Always review changes** before committing using `/review-changes`

2. **Keep sessions updated** to maintain context across work streams

3. **Use issue templates** for tracking all work items

4. **Follow the branch strategy**:
   - `main` for production
   - `gabriel-customization` for active development

5. **Document decisions** in session files for future reference

6. **Test thoroughly**:
   - Run `npm run dev` for local testing
   - Run `npm run build` to verify production build

## Project Context

The full project context is documented in `prompts.md`. This includes:
- Tech stack details
- Project structure
- Key features
- Development workflow
- Client information

Reference this file to get Claude Code up to speed on the project quickly.

## Tips for Working with Claude Code

1. **Be specific**: Provide clear context about what you're trying to accomplish

2. **Use commands**: Leverage the custom commands for common tasks

3. **Reference files**: Point to specific files or sections when asking questions

4. **Maintain sessions**: Keep your session files updated for better context retention

5. **Check generated code**: Always review code before committing

## Getting Help

If you need help with Claude Code:
- Check `/help` for Claude Code documentation
- Review `prompts.md` for project context
- Look at existing components for patterns
- Reference session files for historical context
