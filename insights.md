# Insights
In addition to allowing you to slice and dice your Client data, Xavier applies a number of its own data analysis
techniques and presents the findings up as *Insights*...

## Unreconciled Transactions
![Unreconciled Transactions](./images/unreconciled-transactions.png)

Xavier lets you view a client's unreconciled bank transactions. It uses Xero's Bank Statement Report data to do so.
From each record, you can click straight into Xero to start the reconciliation process. This insight allows you to
quickly order by the oldest records (useful if you are approaching month end), and also see/filter/group the records
that are in a "locked" period.

You can also hit the *View All Items* button at the top of the insight to work with all bank statement records, not just
the unreconciled ones.

Xero guidance on bank reconciliation can be found [here](https://central.xero.com/s/article/Bank-reconciliation-in-Xero).

## Duplicate Contacts
![Multi-Coded Contacts](./images/duplicate-contacts.png)

The results shown in this Xavier insight are your Xero contacts that we’ve identified as potential duplicates.
This can happen if you create a new contact during the process of inputting an invoice or similar, and miss the fact that
the contact already exists.

Review these, (soon you'll be able to dismiss any incorrect suggestions), and click on the Xero links for the contacts
you want to amend.

Xero guidance on merging contacts can be found [here](https://central.xero.com/s/article/Edit-or-merge-an-existing-contact).

## Multi-Coded Contacts
![Multi-Coded Contacts](./images/multi-coded-contacts.png)

Each Invoice and Bank Transaction line item is assigned an Account Code and a Tax Code in Xero.
The majority of the time, these codes *should* be consistent for a given supplier or customer.

It happens to be best of us though - sometimes these records are assigned the wrong codes, or coding evolves over time.
We’ve crunched the numbers to find these potential mis-codings and you'll see them presented in this insight, with helpful
links directly to Xero allowing you to amend these where needed.

Xero provides a dedicated mechanism for re-coding, and their support documentation on this is 
[here](https://central.xero.com/s/article/Find-Recode-a-group-of-transaction-lines).

## Contact Defaults
Contacts in Xero can be setup with "default" account codes for sales and purchases. If set, Xero will use these to 
pre-populate the account code fields during bank statement reconciliation. For contacts that your client has
a recurring relationship with (e.g. a supplier that bills monthly), setting these defaults in Xero can dramatically 
speed up the reconciliation process:

![Setting Contact Defaults in Xero](./images/cleanup-contact-defaults-xero-settings.png)

Figuring out what contacts are eligible for setting up a default code in Xero can be time consuming. This Xavier system 
analyses each contact's transaction history and searches for contacts where either sales or purchase invoices have been 
consistently assigned the same account code, and presents these up to you in a handy list: 

![Contact Defaults](./images/cleanup-contact-defaults.png)

You can review the transaction history of these contacts and decide whether or not to apply Xavier's suggestion.

Dismissing the suggestion will hide it from the "Suggested" list, but you can always undo this from the "Dismissed" list if 
you want it back.

Clicking *Set as default* does what is says on the tin - Xavier will prompt you to confirm before setting the suggested
account code in Xero as the default for either Sales or Purchases:

![Contact Defaults Confirm Setting](./images/cleanup-contact-defaults-confirm.png)

Xero's support documentation on settings for Contacts is [here](https://central.xero.com/s/article/What-are-contacts-in-Xero-UK).


## Corporation Tax
![Coporation Tax](./images/insight-corporation-tax.png)

The Corporation Tax insight gives an estimate of the corporation tax accrued by a company for the current and previous 
financial years, based on UK tax rates and using the financial year-end dates in the Xero settings.

In terms of how the different elements are calculated, Xavier starts your team off with some defaults based on the chart 
of account's [Account Type](https://central.xero.com/s/article/Components-of-an-account-in-your-chart-of-accounts-AU?userregion=true)
and the  [Reporting Codes](https://central.xero.com/s/article/Report-codes-for-practices-using-report-templates) 
provided by Xero. 

### Client-specific configuration
Reporting Codes are applied to all Accounts, and can be customised in Xero by your team. They are a great way of 
achieving reporting consistency across clients that have different chart of account configurations. But you only have 
visibility of Reporting Codes if you are a Xero Partner, and sometimes it is not feasible to configure these for every 
client you work with. 

Xavier allows you to override the default corporation tax calculation for a client. By clicking on the cog beside an 
element of the corporation tax view you will see what is currently being used for that section of the calculation. 

![Coporation Tax Section Calculation](./images/insight-corporation-tax-override.png)

Clicking "change" allows you to specify individual account codes to either include or exclude, depending on the section: 

![Coporation Tax Section Override](./images/insight-corporation-tax-override-change.png)

Specifying account codes means that the default calculation will no longer be used for this client, and Xavier will 
instead use the account codes provided. Upon clicking *Save*, the corporation tax will be recalculated for current and
previous years based on the new configuration.

You can remove account codes from the calculation at any time, and removing all of them will result in the calculation 
reverting back to using the Xavier defaults.
