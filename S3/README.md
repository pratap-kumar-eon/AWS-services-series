Here are some procedures for Amazon Simple Storage Service (S3):

1. Configuring ACLs
S3 Object Ownership is a bucket-level setting that allows you to enable or disable ACLs. By default, ACLs are disabled. 

2. S3 Glacier Instant Retrieval
This archive storage class is for data that is rarely accessed but needs to be retrieved quickly. It can save up to 68% on storage costs compared to S3 Standard-Infrequent Access. 

3. Uploading objects
To upload a file to S3, you need write permissions for the bucket. The file is stored as an S3 object, which consists of the file data and metadata. 

4. S3 Express One Zone
S3 directory buckets only allow objects stored in this storage class, which provides faster data processing within a single Availability Zone. 

5. S3 Intelligent-tiering
Backups of an object in this storage class trigger S3 Intelligent-Tiering to automatically move those objects to Frequent Access. 

6. Bucket versioning
This saves the previous copies or versions of the bucket and its files so they can be restored if needed. 

7. Create a security policy
You can create a custom IAM policy and attach it to your IAM user to define permissions for connecting with your AWS S3 bucket. 

8. Enable Amazon S3 Server Access Logging
This provides detailed records of the requests made to a bucket. It can help with security and access audits, understanding your customer base, and understanding your Amazon S3 bill. 
