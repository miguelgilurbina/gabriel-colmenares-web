# Context Sessions

This directory contains saved context sessions for different types of work on the Gabriel Colmenares website.

## How to Use Sessions

Sessions help maintain context across different work streams. Each session file contains:
- Current goals and objectives
- Recent changes and their context
- Open questions or decisions needed
- Next steps

## Session Types

### 1. Content Updates (`content-updates.md`)
Use this session when updating copy, images, or data in template.json

### 2. Feature Development (`feature-dev.md`)
Use this when adding new components or major features

### 3. Bug Fixes (`bug-fixes.md`)
Use this when investigating and fixing issues

### 4. Design Refinements (`design-refinements.md`)
Use this when making styling or UX improvements

## Creating a New Session

```bash
# Create a new session file
touch .claude/sessions/[session-name].md
```

Then document:
1. **Goal**: What you're trying to accomplish
2. **Context**: What's been done so far
3. **Blockers**: Any issues or decisions needed
4. **Next Steps**: What needs to happen next
