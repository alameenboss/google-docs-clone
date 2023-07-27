## DB Migration
- Set the Startup Project as **Google.Docs.Clone.API**
- Goto Tools-> Nuget Package Manager -> Package Manager Console
- In the Package Manager Console Window Set the Default Project to **Google.Docs.Clone.API**
- Enter below commands based on the configuration selected

### Add Migration 

```
Add-Migration InitialDbSQLite -OutputDir Data\Migrations\SQLite
```

### Update Database

```
update-database
```
