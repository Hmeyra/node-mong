module.exports = {
    PrivGroups: [
        {
            id: "USERS",
            name: "User permissions"
        },
        {
            id: "ROLES",
            name: "Role permissions"
        },
        {
            id: "CATEGORIES",
            name: "Categorie permissions"
        },
        {
            id: "AUDITLOGS",
            name: "Auditlog permissions"
        }
    ],

    privileges: [
        {
            key: "user_view",
            name: "User View",
            group: "USERS",
            descripiton: "User view"
        },
        {
            key: "user_add",
            name: "User Add",
            group: "USERS",
            descripiton: "User add"
        },
        {
            key: "user_update",
            name: "User Update",
            group: "USERS",
            descripiton: "User update"
        },
        {
            key: "user_delete",
            name: "User Delete",
            group: "USERS",
            descripiton: "User delete"
        },
        {
            key: "role_view",
            name: "Role View",
            group: "ROLES",
            descripiton: "Role view"
        },
        {
            key: "role_add",
            name: "Roles Add",
            group: "ROLES",
            descripiton: "role add"
        },
        {
            key: "role_update",
            name: "Role Update",
            group: "ROLES",
            descripiton: "role update"
        },
        {
            key: "role_delete",
            name: "Role Delete",
            group: "ROLES",
            descripiton: "Role delete"
        },
        {
            key: "category_view",
            name: "Category View",
            group: "CATEGORIES",
            descripiton: "Category view"
        },
        {
            key: "category_add",
            name: "Category Add",
            group: "CATEGORIES",
            descripiton: "Category add"
        },
        {
            key: "category_update",
            name: "Category Update",
            group: "CATEGORIES",
            descripiton: "Category update"
        },
        {
            key: "category_delete",
            name: "Category Delete",
            group: "CATEGORIES",
            descripiton: "Category delete"
        },
        {
            key: "auditlogs_view",
            name: "Auditlog View",
            group: "AUDITLOGS",
            descripiton: "Auditlog view"
        },
    ]
}