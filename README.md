# Electric Freedom Core

Electric Freedom Core is a reworking of Electric Freedom as an ASP.NET Core Application with a React/MobX interface for the admin console.

## Directory structure

The following directory structure is used:

```
EF Core (Root Directory)
    |
    |-- .vscode (Directory)
    |       |
    |       '-- settings.json
    |
    |-- src (Directory)
    |       |
    |       |-- ElectricFreedom.Console.BufferPoster (Console app for posting to Buffer)
    |       |
    |       |-- ElectricFreedom.Core.Data (DAL) *
    |       |       |
    |       |       |-- Configuration (Entity Framework Configuration)
    |       |       |
    |       |       '-- Infrastructure (DBContext, etc)
    |       |
    |       |-- ElectricFreedom.Core.Model (Entities)
    |       |
    |       |-- ElectricFreedom.Core.Services (Implementation of Services)
    |       |
    |       |-- ElectricFreedom.Core.Services.Interfares (Interfaces for BLL/External APIs/etc) *
    |       |
    |       |-- ElectricFreedom.Web.Admin (Admin Site)
    |       |
    |       |-- ElectricFreedom.Web.Api (WebAPI with CORS)
    |       |
    |       |-- ElectricFreedom.Web.Public (Public Site)
    |       |
    |       '-- ElectricFreedom.Web.Scripts (JavaScript Projects)
    |
    '-- tests (Directory)
            |
            |-- ElectricFreedom.Console.BufferPoster.Tests
            |
            |-- ElectricFreedom.Core.Model.Tests
            |
            |-- ElectricFreedom.Core.Services.Tests
            |
            |-- ElectricFreedom.Web.Admin.Tests
            |
            |-- ElectricFreedom.Web.Api.Tests
            |
            |-- ElectricFreedom.Web.Public.Tests
            |
            '-- ElectricFreedom.Web.Scripts.Tests
```

\* Projects that **don't require testing** as they are either for interfaces, configuration, or consist entirely of code that is already heavily tested by Microsoft (eg. Entity Framework)
