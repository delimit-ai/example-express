# TaskForge API (Express)

A minimal Express app demonstrating [Delimit](https://delimit.ai) API governance.

Every pull request is automatically checked for breaking API changes using the [Delimit GitHub Action](https://github.com/marketplace/actions/delimit-api-governance).

## What this repo shows

1. **A working API** -- CRUD task management built with Express
2. **An OpenAPI spec** -- checked into `api/openapi.yaml`
3. **Delimit CI** -- `.github/workflows/api-governance.yml` runs on every PR
4. **A breaking change branch** -- `break-the-api` introduces breaking changes so you can see Delimit in action

## Try it

```bash
npm install
npm start
```

The API runs on http://localhost:3000.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/tasks | List all tasks |
| POST | /api/tasks | Create a task |
| GET | /api/tasks/:id | Get a task by ID |
| DELETE | /api/tasks/:id | Delete a task |
| GET | /api/health | Health check |

## See Delimit catch breaking changes

Check the [open pull request](../../pulls) from `break-the-api` to see the Delimit Action report.

The breaking changes include:
- Removed `DELETE /api/tasks/{taskId}` endpoint
- Renamed `assignee` field to `assigned_to`
- Added required `priority` field to task creation
- Changed `uptime` response type from integer to string

## Links

- [Delimit](https://delimit.ai) -- API governance for every PR
- [Delimit GitHub Action](https://github.com/marketplace/actions/delimit-api-governance)
- [delimit-cli on npm](https://www.npmjs.com/package/delimit-cli)
