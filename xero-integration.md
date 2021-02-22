---
---
# Accounting Software Integrations

## Xero Integration

### Connecting to Xero
A walkthrough of connecting Xavier to Xero can be found in our [Getting Started](/getting-started.md#adding-your-first-client) guide.

### How do we interact with Xero?
The diagram below illustrates the general process flow between Precision and Xero, from connecting a client to Precision through
to automated syncing overnight. You can see the Xero data we import into a Precision client in the *Xero Organisation*:

![Xero Integration](./images/xero-relation-diagram.svg)

## Syncing
When a client is first linked to Precision, the initial sync imports all the historical information available from the GL.

![Initial client sync](./images/initial-client-sync.png)

Once the initial sync is complete, subsequent syncs only look for and import the changes since the last sync, which is
much faster. You can see the last time a client was successfully synced on the card in the *Client List*, and on the
*Client Overview*.

Precision will sync with your accounting software to get the latest changes each night. If you make some changes in your GL and don't want to wait
for the overnight sync, you can also start a manual sync. This can be done using the *Sync Now* button available
on the *Client Overview*:

![Sync Now Overview](./images/sync-now.png)

or from the options menu of a client on the *Client List* page:

![Sync With Xero Client List](./images/sync-with-xero-list.png)

::: tip
Think your sync is taking too long? Our [troubleshooting](/troubleshooting.md#slow-client-syncing) may help.
:::

## Managing the accounting software connection
Your client will remain connected and in sync with your GL unless you tell Precision otherwise. Disconnecting a client from
the GL will mean that the client will remain in Precision in its current state - it will no longer receive updates from your accounting software.
You can do this via the *Unlink* button on the *Client Overview* page.

![Unlink From Xero](./images/unlink-from-xero.png)

If a client is not connected to any accounting software this will be indicated by the open padlock and the *Link to Xero/QBO* button.
If you wish to link a client back up, clicking this will redirect you to Xero or QBO for re-authentication. Precision
will do a sync after re-linking, so that it is up to date with any changes.

![Reconnect To Xero](./images/reconnect-to-xero.png)

For information on how to disconnect an app within Quickbooks, see their help [here](https://quickbooks.intuit.com/learn-support/en-uk/mobile-and-apps/disconnect-an-app/00/238792#:~:text=connected%20the%20app-,QuickBooks%20Online,button%20on%20the%20settings%20page.).

Xero also [provide a way](https://central.xero.com/s/article/Getting-started-with-Xero-Connected-Apps) of removing connected
apps directly from their site.

::: warning
Even if disconnected, your client's data will remain in Precision until the client is [deleted](/faq.md#how-can-i-remove-a-client-from-xavier)
:::

