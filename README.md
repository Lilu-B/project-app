# project-app

# Setting Up and Interacting with Firebase Firestore Database

## Creating a Firestore Database via Firebase Console

1. Navigate to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project: `swap-game-app`.
3. In the left-hand menu, choose **Firestore Database**.

### Steps to Create the Database:
- Click **Create database**. If no database exists, you will see this button prominently displayed. Click it.
- Leave the **Database ID** field empty. It will be automatically assigned after the database is created.
- Choose a security mode. For simpler initial settings, select **Start in test mode**.
- Ensure that **Cloud Firestore** is selected (if not already) and click **Enable**.
- Select a region for data storage (e.g., `us-central`) and click **Done**.

You have successfully created a Firestore database. You can now manage it in the **Firestore Database** section of the Firebase Console, where you can add collections and documents.

## Adding Data to Firebase Programmatically (Using JavaScript)

### Setting Up Firebase Configuration

Ensure you have a `firebase.ts` file in your project, containing the core Firebase configuration. This file typically includes the following structure:

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_AUTH_DOMAIN>",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_STORAGE_BUCKET>",
  messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
  appId: "<YOUR_APP_ID>",
  measurementId: "<YOUR_MEASUREMENT_ID>"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

Replace placeholders with the actual values from your Firebase project settings.

### Initialize Firebase in Your Project

Open your terminal and follow these steps:

1. Run Firebase initialization:
   ```bash
   $ firebase init
   ```

2. Select the Firebase project to use:
   ```bash
   $ firebase use
   ```

3. During the setup process, answer the following prompts:

   - **Which Firebase features do you want to set up for this directory?** Select **Firestore**.
   - **Please select an option:** Choose **Use an existing project**.
   - **What file should be used for Firestore Rules?** Confirm with `firestore.rules`.
   - **File firestore.rules already exists. Do you want to overwrite it with the Firestore Rules from the Firebase Console?** Select **Yes**.
   - **What file should be used for Firestore indexes?** Confirm with `firestore.indexes.json`.

4. You should see the confirmation message:
   ```
   ✔ Firebase initialization
   ```
