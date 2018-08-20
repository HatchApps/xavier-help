# Xero Integration

## Connecting to Xero
A walkthrough of connecting Xavier to Xero can be found in our [Getting Started](/getting-started.md#adding-your-first-client) guide.

## How do we interact with Xero?
The diagram below illustrates the general process flow between Xavier and Xero, from connecting a client to Xavier through
to automated syncing overnight. You can see the Xero data we import into a Xavier client in the *Xero Organisation*:

![Xero Integration](./images/xero-relation-diagram.svg)

## Syncing 
When a client is first linked to Xavier, the initial sync imports all the historical information available from Xero.

![Initial client sync](./images/initial-client-sync.png)

Once the initial sync is complete, subsequent syncs only look for and import the changes since the last sync, which is 
much faster. You can see the last time a client was successfully synced on the card in the *Client List*, and on the 
*Client Overview*.

Xavier will sync with Xero to get the latest changes each night. If you make some changes in Xero and don't want to wait
for the overnight sync, you can also start a manual sync. This can be done using the *Sync Now* button available 
on the *Client Overview*:

![Sync Now Overview](./images/sync-now.png)

or from the options menu of a client on the *Client List* page:

![Sync With Xero Client List](./images/sync-with-xero-list.png) 

::: tip
Think your sync is taking too long? Our [troubleshooting](/troubleshooting.md#slow-client-syncing) may help.
:::

## Managing the Xero connection
Your client will remain connected and in sync with Xero unless you tell Xavier otherwise. Disconnecting a client from 
Xero will mean that the client will remain in Xavier in its current state - it will no longer receive updates from Xero.
You can do this via the *Unlink from Xero* button on the *Client Overview* page.

![Unlink From Xero](./images/unlink-from-xero.png)

If a client is not connected to Xero this will be indicated by the open padlock and the *Link to Xero* button.
If you wish to link a client back up with Xero, clicking this will redirect you to Xero for re-authentication. Xavier 
will do a sync after re-linking, so that it is up to date with any changes.

![Reconnect To Xero](./images/reconnect-to-xero.png)

Xero also [provide a way](https://central.xero.com/s/article/Disconnect-a-connected-app-in-Xero) of removing connected 
apps directly from their site.

::: warning
Even if disconnected, your client's data will remain in Xavier until the client is [deleted](/faq.md#how-can-i-remove-a-client-from-xavier)
:::  

 