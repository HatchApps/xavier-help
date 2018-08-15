# Xero Integration

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
Your client will remain connected and in sync with Xero unless you tell Xavier otherwise. You can disconnect a client
from...