---

---
# Clients

A Client in Precision is linked to an _Organisation_ in Xero, or a _Company_ in QuickBooks Online.

Dext Precision is at it's most powerful for accountancies when you have added all your practice clients. The _Client List_ and _Practice Dashboard_ are
essential tools for prioritising and staying on top of your clients and keeping an eye on your practice performance;
you'll be able to handle issues as and when they occur, and your clients will always feel like the centre of attention.

## Client List

This is your _Team_ home page in Precision, and also where you can add, search and access each of your clients.
In this view, you can choose to display all clients, only the clients you are an Account Manager for,
or the ones you have selected as favourites. Click on each of the client cards to view the _Client Overview_ for that client.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TJ0_MaW1rP8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

You can sort and filter your clients from this view for an at-a-glance practice overview.
Sort by the general [Client Health Score](/clients.html#client-health-score), or select an insight metric and choose to sort by either it's individual _Health Score_
or the number of issues identified for that insight (i.e., by volume). You can choose to sort ascending or descending,
and combined with the filtering of the list by My Accounts and Favourites, the "at a glance" reporting potential is
quite powerful.

In each of the client cards, on the left you can view the company name, and their last sync date. A small pink padlock
icon indicates that the client is no longer linked to their accounting software, and you will need to [re-link](https://help.xavier-analytics.com/xero-integration.html#managing-the-xero-connection)
that client by clicking in to their Client Overview.

On the right of the client card, you can view the client's metric (if one is selected from the dropdown),
their overall health score, the account manager's icon, a star button for selecting that client as a 'favourite' and a
a three-dot menu icon - clicking this menu icon will allow you to view that client in your accounting software, sync with your accounting software, or remove it from Precision.


![Client Cards in the Client List](./images/client-list-snippet.png)

### Start getting ahead of the curve

Here's some scenarios that will immediately benefit from this kind of practice-level insight:

* As a Managing Director, which of my team's clients needs attention the most, right now?
* Similarly, as an Account Manager, which of my clients needs some help?
* We're considering taking on a new client - what is the general state of their books so I can price accordingly?
* I'd like to get a team member onto sorting out the Fixed Assets Register across the board, but which clients should they start with?
* How are the clients doing that are being looked after by my newest bookkeeper?
* Which client has got the highest ratio of Multi-Coded Contacts so we can look to improve their coding processes?

### Favourite Clients

By clicking the pink star, your client will become a 'Favourite'. This is really useful for clients that you need to view regularly, or are currently working a lot with. Favourite clients are specific to each user, so you can just select the Clients that are most relevant to you.

You can filter both the client list, and the [practice dashboard,](https://help.xavier-analytics.com/clients.html#practice-dashboard) to your favourite clients, to check them out more easily.

When switching quickly between clients in the sidebar, your favourite clients will always sit at the top of the list so you can find and switch between them quickly.

## Practice Dashboard

The Practice Dashboard is a KPI data playground across all of your clients. This view contains the data from the Client List including
all of your client metrics, plus links straight to the client in Xero for you to compare data across clients or account managers.

<iframe width="560" height="315" src="https://www.youtube.com/embed/K9MX2tsKMW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

The Practice Dashboard looks, and functions, just like the [Precision Sandbox](https://help.xavier-analytics.com/sandbox-reporting.html#customising-the-sandbox);
a drag and drop report-builder, with
spreadsheet-like functionality. You can choose the columns you want to see, group-by, sort, collapse and expand until
you get it just how you want. If you're a fan of Excel's pivot tables, you'll find that option too in the columns panel
on the right.

You can save or export your configurations to Excel, using the buttons in the secondary navigation at the top right.

You can save these configurations in your _Practice Dashboard_ by selecting _save_.
You'll need to give your dashboard a name, then decide whether to keep this report configuration private, or share it with the rest of your team.
Saved dashboards can be accessed by selecting _Custom Dashboards_ in the sidebar. Just like
[custom reports](https://help.xavier-analytics.com/sandbox-reporting.html#custom-reports), they can then be edited,
favourited, or deleted from this view.

## Client Overview

Clicking on a client card from the _Client List_ will take you through to the management of that specific client.

![Client Overview](./images/client-overview-2.png)

This view highlights a selection of key alerts, metrics, activity stats, and also highlights any issues with the client's Lock Dates - [find out more](/team-management.md#lock-dates).

Clicking on any of these stats will take you through to the relevant tool or insight to learn more. When 
clicking from the overview, Precision opens these views in _dashboard mode_ so you'll see the information with the same 
dates and parameters as we use for the Overview.

### Overview Reporting Mode

The Overview displays the last complete month by default, but you can set the Overview to represent data for a range of date periods. By clicking on the date range below the title, or in _Configuration > Overview Configuration_ you can select a date range that is most suitable for your client.

![Client Overview Configuration options](./images/overview-configuration.png)

::: warning
Unlike the date periods which are rolling, if you set a manual date configuration the overview will not update until the date range is changed again. 
:::

In addition to providing high level stats about a client, the overview is where you can manage a client, removing it from Precision via the Remove button or un-linking it from your accounting software using the _Unlink_ button.

Unlinking a client means it will remain in Precision, but will no longer sync with your GL to retrieve the latest changes. A client can be re-linked at any point, and syncing will resume.

[Syncing](/xero-integration.html#syncing) happens automatically overnight, but you can also trigger a sync on-demand
via the _Sync Now_ button.

You can _export_ the client overview in both PDF and .XLS format:

* The PDF export contains your team branding (which you can add in the [Team Profile](/team-management.html#team-profile))
  and additional explanations for each item, which will make it easier for your client to understand. The items are also
  arranged in priority order.
* The .XLSX format is a really stripped-down version of the overview, which is perfect for linking into your own spreadsheet
  reports.
  
In the sidebar, clicking on _Configuration_ will show the client configuration options:
- General: Here you can update the basic client settings in Precision, including the client name, account managers, and what 
[tags](clients.html#client-tags) are applied to the client.
- Visibility: View and edit the current [client visibility](/clients.html#client-visibility) settings applied to the client.
- Overview Configuration: This allows you to adjust the reporting mode of the client, which will adjust the overview dates 
and the health score accordingly.
- Tax and Control Accounts: Throughout Precision, different tools can be customised with key tax and account codes to make 
the correct calculations for a client. You can edit these all centrally from this area.   

## Client Health Score

Dext Precision calculates an overall score for a client to indicate the health of their books. You'll find the Health 
Score displayed on each client in the Client List, and on each client's Overview page underneath their name. A lot of our 
cleanup tools and insights now have an individual Health Score, which the overall Health Score is derived from. You can 
now focus on improving the data quality of your clients and easily see that progress on a daily basis.

The score is presented as a percentage, with a heart icon for traffic-light status. The health score is relative to the 
date selected, and proportional to the size of the client. The following Precision elements contribute to the health score 
currently:

* Bank Reconciliation (Xero clients only)
* Multi-Coded Contacts
* Duplicate Contacts
* Regular Supplier Anomalies
* Lock Dates
* Fixed Assets (Xero clients only)
* Dormant Accounts
* Contact Defaults (Xero clients only)
* Aged Balances
* PAYE (Xero clients only, if configured)

::: tip
The algorithm for the health score will evolve as we fine-tune the weighting of Precision's different cleanup and insight
scores on the final health score, but keep aiming for that 100%!
:::

## Client Visibility

Dext Precision provides different options for determining who in your team can view a particular client's data. The following options
can be selected from the _Client Settings_ view.

::: warning
Team Owners and Admins can see all clients, regardless of Client Visibility settings in Precision.
:::

#### For Xero Clients

![Client Overview](./images/client-visibility.png)

**Whole Team:** everyone on your Precision team can view this client's data.

**Xero Users Only:** only the users linked to the Client in Xero, with the Xero role of either _Adviser_ or _Standard_
will be able to view the client's data in Precision. Precision uses the email you log into Precision with to match to the user in Xero.

If _Xero Users Only_  is selected, this view will show you which of your Precision team members are eligible to view the 
Client, and will also list the users in Xero that are not part of your Precision team yet - you can choose to invite them 
from here. Clients with _Xero Users Only_ will also show a different visibility icon on the _Client List_.

**Specific Users Only:** only the users you have selected to view this client will be able to view the data in Precision.

::: tip
The default visibility setting for Xero clients is _Xero Users Only_. However if you are importing a client and your email
address does not match the user you have signed into in Xero, the default setting will be _Specific Users Only_, and you
will be asked to select those specific users in a popup before the client can be imported.
:::

#### For QBO Clients

**Whole Team:** everyone on your Precision team can view this client's data.

**Specific Users Only:** only the users you have selected to view this client will be able to view the data in Precision.

::: tip
The default visibility setting for QBO clients is _Whole Team_. 
:::

## Client Tags

Dext Precision provides the ability to set tags for your clients, to help you organise your practice. 

![Client Tags](./images/client-tags.png) 

You can allow tags to be created on the fly within individual clients, or control them from only the team area. 
Tags can be set centrally from the Team sidebar under _Configuration > Tags_, where you can add, delete,
 and assign tags to multiple clients at once. (See screenshot above for Team-level Tag Management).
 
To assign tags to clients in bulk, from the central Tags view click on a purple tag to select it. You will be able to see below how many 
clients are associated with that tag. Click to open the list of clients associated/not associated with that tag, and 
search or select from the list to add or remove clients. Then click the _Update_ button to set those tags.
 
To set tags against a client at the client level, from the Overview sidebar select _Configuration > General_. You'll see the option to search 
and select tags to apply to that client.   

Tags are visible on the [Client List](/clients.html#client-list), [Client Overview](/clients.html#client-overview) and 
in the [Practice Dashboard](/clients.html#practice-dashboard). In both the Client List and the Practice Dashboard, you 
can use tags to search and filter your clients.

