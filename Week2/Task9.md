# 🌐 Week 2 – Azure Storage: Task 9

## 📆 Task: Explore Azure Storage Account Capabilities

In this task, I explored Azure Storage Account features such as blobs, file shares, access controls, tiers, lifecycle policies, replication, and Azure File Sync. Here's what I did step-by-step, with real hands-on execution.

---

## Step 1: Created a Storage Account

I Navigated to the Azure portal and started the process of creating a new Storage Account. I named it `csidevopsstorage` and selected `East-US` as the region to keep it local.

![storage-account-portal](./snapshots/task9-storage-basic.jpg)

- I chosen the Standard performance tier for cost efficiency.

- For redundancy, I picked Read-access geo-redundant storage (RA-GRS) to make sure my data is highly available, even in case of regional outages.

- I left the default Access Tier as Hot since I wanted frequent access during testing.

Once created, the account was ready to host different types of data.

![storage-account](./snapshots/storage-account-created.jpg)

## Step 2: Created a Blob Container and Uploading Data

Next, I went to the storage account and navigated to Containers. I created a container named `csi-devops-blob` and set its access level to Private for now to keep data secure.

![blob-container](./snapshots/task9-blob-container.jpg)

Then, I uploaded a test file called `week2.txt, vikas-resume.docx` into the container.

- The file uploaded successfully, and I could see it listed under blobs.

![blob-view](./snapshots/task9-blob-view.jpg)

- I also checked blob properties and used the URL to confirm that access is restricted due to private mode.

![blob-properties](./snapshots/task9-blob-properites.jpg)

![access-view](./snapshots/task9-webview.jpg)

## Step 3: Explored Authentication Techniques

To understand how access control works in Azure Storage, I tested multiple authentication methods.

### A. Using Access Keys & Viewed by Storage explorer

- I picked one of the two Access Keys available under the Access Keys tab.

![access-keys](./snapshots/task9-storage-access-keys.jpg)

- Then, I connected my storage account to Azure Storage Explorer using the key.

![storage-explorer](./snapshots/task9-storage-explorer.jpg)

- Through this, I was able to upload and download blobs without issues.

![access-keys](./snapshots/task9-storage-exploer-upload.jpg)

### B. Using Shared Access Signature (SAS, Storage Account Level)

- I generated a SAS token with Read and Write permissions, a limited IP range, and a short expiration time.

![storage-SAS](./snapshots/storage+SAS.jpg)

- I tested the generated URL in the storage explorer, and it worked—only within the defined scope.

![storage-explorer-connection](./snapshots/task9-storage-explorer.jpg)

![storage-explorer-view](./snapshots/storageexplorer+sas.jpg)

### C. Stored Access Policy + SAS (Container + Blob Level)

- I created a Stored Access Policy at the container level.

![access-policy](./snapshots/created-access-policy.jpg)

- Then, I generated a SAS token tied to that policy to access a specific blob if require we can generate SAS token for container level as well.

![blob-sas-token](./snapshots/sas+access.jpg)

- This gave me more centralized control over the access scope and expiration.
- Now i can able to view the blob in browser

![blob-view](./snapshots/blob-view.jpg)

## Step 4: Access Tiers

- Switched between **Hot**, **Cool**, **Cold** and **Archive** tiers for uploaded blob
- Observed:

  - **Hot**: Fast access, higher cost, Ideal for frequently accessed data.
  - **Cool**: For infrequently accessed data but still needed online, cheaper.

  ![cool-tier](./snapshots/cool-tier.jpg)

  ![cool-tier-view](./snapshots/cool-tier-view.jpg)

  - **Cold**: For data that is rarely accessed, cheaper than Hot and Cool, but slower

  ![cold-tier](./snapshots/cold-tier.jpg)

  - **Archive**: Meant for long-term backup and is offline by default.

  ![archive-tier](./snapshots/archive-tier.jpg)

  - After moving to Archive, I tested rehydration to bring the blob back online, which took some time.

> Rehydration -> The process of transitioning an archived blob back to an online tier (Hot or Cool) so it becomes accessible again.

## Step 5: Lifecycle Management Policies

To automate data transitions and cleanup, I created a lifecycle management policy, So I configured a rule targeting **base blobs** (i.e., current active blobs), with the following actions:

- **Move to Cold** tier after **7 days**
- **Move to Archive** tier after **20 days**
- **Delete** the blob after **90 days**

This ensures my main blobs follow a cost-efficient storage path without managing snapshots or versions.

![life-cycle](./snapshots/lifecycle-storage.jpg)

## Step 6: Blob Replication

I explored Object Replication to keep data in sync across regions.

- Created a two storage accounts named as `objectreplica1` `objectreplica2`.

![storage-accounts](./snapshots/object-replica-storage.jpg)

- After that created two containers named as `replica1sourcecontaienr` `replica2destinationcontainer`.

![replica1-container](./snapshots/object-replica1-container.jpg)

![replica2-container](./snapshots/replica2-container.jpg)

- Enabled replication by configuring the source and destination pairing.

![object-replication](./snapshots/object-replication.jpg)

- Uploaded a file in the `objectreplica1` of `sourcereplicacontainer`

![uploaded-blob](./snapshots/uploadfile-replication.jpg)

- Successfully replicated same file automatically into `objectreplica2` of `replica2destinationcontainer`

![verified-replica-id](./snapshots/replication-id.jpg)

![replicated-blob](./snapshots/replicated-blob.jpg)

> If we want two-way replication, we have to set up another rule in the opposite direction as well.

## Step 7: Azure File Share & File Sync

### Created File Share

- Created a file share named `devopsfileshare` in the storage account.

![file-share-created](./snapshots/filesharecreated.jpg)

- Uploaded `mylinkedin` Image directly through the **Azure Portal**.

![file-share-uploaded](./snapshots/imagefileupload.jpg)

### Connected via Azure File Sync

#### Windows Server Setup

- Deployed a **Windows Server VM**.

![windows-vm](./snapshots/fileshare-vm.jpg)

- Installed the **Azure File Sync**.

![file-share-agent](./snapshots/window-fileshare.jpg)

#### Sync Test

- Linked a local folder on the VM to the file share.
- Successfully tested **bi-directional sync**:
  - ✅ Files created in the file share appeared on the server.

  ![file-uploaded-vm](./snapshots/filecreatefromvm.jpg)

  - ✅ Files added locally were synced back to Azure.

  ![file-sync-to-azure](./snapshots/filesyncdone.jpg)

## Conclusion

This task gave me a complete overview of how Azure handles various types of storage needs. I tested authentication techniques, access tiers, policies, replication, and file synchronization. These are critical for managing enterprise data efficiently and securely.
