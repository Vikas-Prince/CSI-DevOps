# 🛡️ Week 1 - Linux: Task 1

## 📌 Task: File Permissions using `chmod`

### 🎯 Objective

To understand Linux file permission management by:

- Creating a file
- Assigning specific permissions to the **owner**, **group**, and **others**
- Modifying those permissions using the `chmod` command

## Steps to Perform the Task

### Step 1: Create a file

```bash
touch csi_devops_file.txt
```

### Step 2: Check Default Permissions

```bash
ls -l csi_devops_file.txt
```

- This command will display the default permissions of the newly created file.

### 📸 Initial Permissions

_(Before applying `chmod`)_

![before-permissions](./snapshots/default.jpg)

### Step 3: Change Permissions with `chmod`

```bash
chmod 755 csi_devops_file.txt
```

## Understanding `chmod 744`

| User Type | Permission | Numeric | Description    |
| --------- | ---------- | ------- | -------------- |
| Owner     | rwx        | 7       | Full access    |
| Group     | r-x        | 5       | Read + Execute |
| Others    | r-x        | 5       | Read + Execute |

> `chmod 744` ensures that **only the owner** can modify or execute the file, while everyone else can only **read** it.

### Step 4: Verify Updated Permissions

```bash
ls -l csi_devops_file.txt
```

- This command will display the updated permissions of the file after applying `chmod`.

### 📸 Updated Permissions

_(After applying `chmod`)_

![after-permissions](./snapshots/afterchmod.jpg)

---
