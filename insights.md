---
---

# Insights
In addition to allowing you to slice and dice your Client data, Xavier applies a number of its own data analysis
techniques and presents the findings up as *Insights*...

## Bank Reconciliation
![Bank Reconciliation](./images/cleanup-bank-reconciliation.png)

Xavier uses a combination of Xero's Bank Statement Report data, bank transactions and payments to provide an
interactive view across all of an organisation's bank accounts. The format loosely follows Xero's Bank Reconciliation
Report, distinguishing between outstanding payments, receipts and unreconciled bank statement lines.

Expanding one of these categories allows you to see transaction-level detail in a flexible grid view. From each record,
you can click straight into Xero to start the reconciliation process. The grid allows you to quickly order by the
oldest records (useful if you are approaching month end), and also see/filter/group the records that are in a "locked"
period.

![Bank Reconciliation](./images/cleanup-bank-rec-payments.png)

### Net Assets
The Net Assets figure is a calculated balance of all transactions with the **Account Class** of _ASSET_ minus all
transactions with the **Account Class** of _LIABILITY_, up the the reporting date. This figure is also available as a
metric on the [Client List](/clients.html#client-list) and [Practice Dashboard](/clients.html#practice-dashboard). Xero
Account Classes are shown below:

![VAT Tracking](./images/cleanup-bank-rec-account-classes.png)

### Cash Position
The Cash Position figure is a consolidated statement balance of all bank accounts, on the reporting date set. This
figure is also available as a metric on the [Client List](/clients.html#client-list) and
[Practice Dashboard](/clients.html#practice-dashboard).

::: tip
Foreign bank account balances are converted to the base currency to produce this number - use as a guideline only, where
this is a factor, and see below for more info.
:::

### Foreign Currency Bank Accounts
Xavier detects when a bank account is in a different currency to the base currency of the organisation, and displays
accordingly. There's a toggle that allows you to view the reconciliation totals for a bank account in either the native
currency of the bank account or the base currency of the organisation.

![Bank Reconciliation](./images/cleanup-bank-rec-multi-currency.png)

::: tip
Xavier does not have access to Xero's exchange rates, so the base currency calculated balances for a foreign currency
may not always totally match up to the report in Xero - use as a guideline only.
:::

More about exchange rates in Xero can be found in their
[support documentation](https://central.xero.com/s/article/View-exchange-rate-or-conversion-rate).

### All Bank Statements
You can also hit the *All Statements* button at the top of the insight to work in a full sandbox-style grid with all
bank statement records, not just the unreconciled ones.

![Bank Reconciliation](./images/cleanup-bank-rec-all-statements.png)

Xero guidance on bank reconciliation can be found [here](https://central.xero.com/s/article/Bank-reconciliation-in-Xero).

## Duplicate Contacts
![Duplicate Contacts](./images/duplicate-contacts.png)

The results shown in this Xavier insight are your Xero contacts that we’ve identified as potential duplicates.
This can happen if you create a new contact during the process of inputting an invoice or similar, and miss the fact that
the contact already exists.

Review these, you may dismiss any which aren't true duplicates, or clicking the name of the contact will take you to Xero to amend them. The transaction count should give a good indication of which contact has had more activity.

Xero guidance on merging contacts can be found [here](https://central.xero.com/s/article/Merge-contacts).

### Dismissals
Each duplicate contact can be 'dismissed' - this means that Xavier will no longer count that combination of client names
to be a potential duplicate. Dismissed items do not contribute to the [Health Score](/clients.html#client-health-score).
Any dismissed duplicates can be viewed by selecting *dismissed* from the filter at the top
of the screen, where you can then review and *undo* any accidental dismissals.


## Multi-Coded Contacts
![Multi-Coded Contacts](./images/insight-multi-coded.png)

Each Invoice and Bank Transaction line item is assigned an Account Code and a Tax Code in Xero.
The majority of the time, these codes *should* be consistent for a given supplier or customer.

It happens to be best of us though - sometimes these records are assigned the wrong codes, or coding evolves over time.
We’ve crunched the numbers to find these potential mis-codings and you'll see them presented in this insight, with helpful
links directly to Xero allowing you to amend these where needed.

Xero provides a dedicated mechanism for re-coding, and their support documentation on this is
[here](https://central.xero.com/s/article/Find-Recode-a-group-of-transaction-lines).

### Selecting The Date Filters
The Multi-Coded Contacts insight allows you to specify two different date filters:

**Active During**: This is the period where you want to find contacts to assess. Xavier will find and evaluate contacts
that have been active (i.e. they have transactions) during this time period. For example, this could be your reporting
period of the previous month.

**Check Transactions Since**: Once Xavier finds the active contacts to evaluate, this date refers to how far back in
time Xavier should look into each Contact's transaction history to compare account and tax codes and surface any
inconsistencies. For example, if you know that you changed your accounts structure at the start of the year, it doesn't
make sense to evaluate transaction history before the change, so set this date to be the 1st of January (or whenever
you made the change).

### Narrowing The Scope
The Multi-Coded Contacts insight allows you to get really targeted with the data cleanup process, and quickly filter out
any suggestions that don't make sense for your situation.

**Revenue | Expense | All**: Restrict the suggestions list to only transactions relating to Revenue OR Expenses.

**Account | Tax | All**: Restrict the suggestions list to only transactions Xavier has identified with Account Code
anomalies, OR Tax Code anomalies.

### Understanding the Colour-Coding
Xavier adds colour to the transaction rows to provide a clear indication as to which transactions fall into the "Active
During" period and which ones are historical:

![Understanding Multi-Coded Colour Coding](./images/cleanup-multi-coded-colours.png)

#### Dismissals

If there is good reason for the different coding, then you can dismiss the multi-coded alert and it will not show again.
Any dismissed alerts can be viewed by selecting *dismissed* from the filter at the top of the screen, where you can then review and *undo* any accidental dismissals. Dismissed items do not contribute to the [Health Score](/clients.html#client-health-score).

This dismissal applies to a few levels below the contact, taking into account both *direction* (Payable/Receivable) and
whether they are *Tax Code* or *Account Code* differences.

For example, you can dismiss an alert for a contact with differences in receivable account codes, and we won't raise any
more alerts for additional receivable account codes placed against that contact, but you will still get an alert for that
client if we detect multiple *payable* account code differences, or multiple receivable *tax codes*.

## Contact Defaults
Contacts in Xero can be setup with "default" account codes and tax types for sales and purchases. If set, Xero will use these to
pre-populate the account code or tax type fields during bank statement reconciliation. For contacts that your client has
a recurring relationship with (e.g. a supplier that bills monthly), setting these defaults in Xero can dramatically
speed up the reconciliation process:

![Setting Contact Defaults in Xero](./images/cleanup-contact-defaults-xero-settings.png)

Figuring out which contacts are eligible for setting up these defaults can be time consuming. This Xavier system
analyses each contact's transaction history and searches for contacts where either sales or purchase invoices have been
consistently assigned the same account code or tax type, and presents these up to you in a handy list:

![Contact Defaults](./images/cleanup-contact-defaults.png)

You can review the transaction history of these contacts and decide whether or not to apply Xavier's suggestion.

Clicking *Set as default* does what is says on the tin - Xavier will prompt you to confirm before setting the suggested
code in Xero as the default for either Sales or Purchases:

![Contact Defaults Confirm Setting](./images/cleanup-contact-defaults-confirm.png)

Xero's support documentation on settings for Contacts is [here](https://central.xero.com/s/article/What-are-contacts-in-Xero-UK).

### Dismissals

If you think the suggested default is not suitable, you can dismiss it. Any dismissed suggestions can be viewed by selecting
*dismissed* from the filter at the top of the screen, where you can then review and *undo* any accidental dismissals.
Dismissed items do not contribute to the [Health Score](/clients.html#client-health-score).

The dismissal covers the combination of contact name and the type of suggested account code; account code or tax type. If you
dismiss a suggested account code default for a contact, for example, you will still be suggested potential default tax
types if one becomes suitable.

## Dormant Accounts
This view identifies GL Accounts that have not had any transactional activity recorded against them from the "Dormant
Since" date you supply.

![Dormant Accounts](./images/cleanup-dormant-accounts.png)

You can review the transaction history of these accounts and decide whether or not to take action on Xavier's suggestion.
The idea is to help you identify old account codes that could be cleaned up, either through archiving or deleting, for
better reporting.

You can filter and sort to look at accounts with transactional history (activity) and also by Account Class. Xavier
won't show you Xero System Accounts and certain other Accounts as they cannot be archived.

For each account suggested by Xavier, you can either archive it, or dismiss it. Archiving the suggestion makes the
appropriate change in Xero. Dismissing the suggestion will hide it from the "Suggested" list, but you can always undo
this from the "Dismissed" list if you want it back.

You can also follow the link to Xero's Chart of Accounts to restore an archived account or delete one. Read more on
[managing account codes in Xero](https://central.xero.com/s/article/Delete-archive-or-restore-an-account-in-your-chart-of-accounts).

### Dismissals
Each account code can be 'dismissed' if you're not ready to take action and do not want Xavier to raise it again.
Dismissed items do not contribute to the [Health Score](/clients.html#client-health-score).
Any dismissed account codes can be viewed by selecting *dismissed* from the filter at the top
of the screen, where you can then review and *undo* any accidental dismissals.

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

### Capital Allowances
The _Capital Allowances_ section of the Corporation Tax insight uses the Fixed Assets register in Xero to look for
registered assets purchased during the date period. It specifically looks for:

- Fixed Assets with a status of "Registered" (i.e. Draft won't count)
- Fixed Assets with a purchase date that falls within the start and end dates you've set at the top of the Corporation
Tax view

## VAT Tracking
![VAT Tracking](./images/insight-vat.png)

The VAT Tracking insight gives an estimate of the VAT accrued by a company for the current VAT period, and includes
estimates for previous periods dating back to the end of the previous financial year. The financial year and VAT periods
are based on the client's settings in Xero.

### Cash vs Accrual Schemes
In the UK, a company could be configured to report VAT to HMRC on a Cash basis or an Accrual basis. Xavier automatically
detects this based on Xero settings and adjusts the VAT calculation accordingly.

### Flat Rate Scheme
Xavier will detect if a client is on a [Flat Rate Scheme](https://www.gov.uk/vat-flat-rate-scheme/how-much-you-pay), but
it has no way of knowing what VAT rate has been agreed with HMRC for the client. The first time you view the VAT Tracking
insight, Xavier will prompt for the VAT rate to use if it detects the client is on a Flat Rate Scheme:

![Flat Rate Scheme Prompt](./images/insight-vat-rate-prompt.png)

You can adjust this for a client at any time by clicking on *Adjust Rate* in the menu bar of the VAT view.

### Scheme Thresholds
For the Cash and Flat Rate schemes, Xavier monitors your
[taxable turnover](https://www.gov.uk/vat-registration/calculate-turnover) to ensure that you remain on the right
scheme from a compliance perspective, using HMRC's defined [thresholds](https://www.gov.uk/vat-registration-thresholds).

For example, you'll get an alert at the top of the VAT insight if you exceed a threshold:

![VAT Exceeded Threshold](./images/insight-vat-alert-exceeded.png)

And similarly Xavier also warns you if you are approaching a threshold:

![VAT Approaching Threshold](./images/insight-vat-alert-approaching.png)

### Payment Detection
Xavier will try and detect if a previous period's accrued VAT has been paid to HMRC or not, by searching for reconciled
bank transactions within 6 months of the end of the period, with:
- a GL Account with the Reporting Code of `LIA.CUR.TAX.VAT`
- a payment amount within a 2% variance of the estimated amount for the period

![VAT Payment Detection](./images/insight-vat-payment.png)

If such a payment is found, the *Payment Detected* field will be set to "Yes". Clicking on this will take you straight
through to the bank transaction in Xero.

## Fixed Assets
![VAT Tracking](./images/insight-fixed-assets.png)

Fixed Assets are a somewhat separate part of the Xero system, which can lead to some inconsistencies. Xavier connects to
the Fixed Assets register in Xero and compares it with the general accounting ledger to highlight where records may be
out of sync.

### Fixed Asset Accounts
Xavier looks at general ledger Accounts that have an Account Type of _FIXED_, and then looks for mapped Asset
Types in the Fixed Asset register. Accounts need to be selected as the Fixed Asset Account, Depreciation Expense Account
or Accumulated Depreciation Account of at least one Asset Type to be considered "mapped".

Xavier then checks the balance of any unmapped Accounts - if any are non-zero then this should be considered a genuine
issue that needs immediate attention.

### Draft Assets
Xavier searches the fixed asset register for draft assets and lists them here for convenience. This section is a good
place to start if the asset types are not reconciling in the section above.

### Fixed Asset Account Reconciliation
This section cycles through all of the accounts in Xero's general ledger that are specified as the *Fixed Asset Account*
in the Fixed Assets register. It  compares their balance with the combined totals of the *Purchase Price* of all assets
associated with it, up to the Reporting Date, and highlights any that don't match. You can expand
each Asset type to compare transaction history of the Account with the Asset activity.

### Depreciation Account Reconciliation
Similar in logic to the Fixed Asset Account Reconciliation, this section cycles through all of the accounts in Xero's
general ledger that are specified as the *Accumulated Depreciation Account* in the Fixed Assets register. It  compares
their balance with the combined totals of the "Depreciation Value" of all assets associated with it, up to the Reporting
Date, and highlights any that don't match. The Depreciation Value is a calculation of the difference between the
*Purchase Price* and *Accounting Book Value* of an asset.

### Depreciation Run
This simple check compares the Reporting Period specified at the top of the insight with the "Last Depreciation Date" in
the Fixed Asset Register, and shows an error if they don't match.


## Aged Balances
![VAT Tracking](./images/insight-aged-balances.png)

The Aged Balances insight looks at aged Debtors and Creditors (i.e. old invoices) at a snapshot in time.

### Setting Parameters
- **Reporting Date**: this is the point in time that you want to evaluate your debtors and creditors at, based on invoice
dates.
- **Invoice Age**: the age of the invoice in relation to the _Reporting Date_. For example, setting the _Invoice Age_ to
two months means Xavier will only look at invoices that are dated older than two months from the Reporting Date.

### Aged Receivables
This surfaces your debtors, old invoices for people that owe you money. You can see a count of old invoices at a glance
and a sum of the total amount owed. Clicking on this card will expand to show the detail of each aged invoice, each with
a link straight to Xero if needed.

### Aged Payables
This surfaces your creditors, old invoices for people that you owe money to. You can see a count of old invoices at a
glance and a sum of the total amount you owe. Clicking on this card will expand to show the detail of each aged invoice,
each with a link straight to Xero if needed.

### Average Debtor Days
This uses a common ratio-based method to provide an indication of the length of time it takes for your debtors to pay
you. This is based on the total Receivable amount owed at the _Reporting Date_, and the gross revenue over the last 12
months up to the _Reporting Date_.

### Overpayments
The check allows you to review all overpayments that still have remaining credit available at the time of the
_Reporting Date_, by checking the dates of any allocations to make sure they are applicable. This is categorised into
Overpayments relating to Suppliers and Customers.


## Activity Stats
![Activity Stats](./images/insight-activity-stats.png)

Designed for accountancy firms utilising proposal tools such as [GoProposal](https://goproposal.com/) to determine
pricing for their clients, the _Activity Stats_ insight gives a breakdown of the key trading statistics of a company,
with a focus on volume, e.g. number of bank transactions for the period. These figures can then be input directly into
your proposal tool to quickly calculate pricing when a client is up for renewal.

By default, this insight calculates statistics for a rolling 12 month period, starting from the last complete month, and
working back from there. However, you can select a date range and Xavier will do its best to segment your date range
into monthly slots.

### Understanding Turnover
The Activity Stats insight uses the following logic to determine the Turnover calculation:

The _NET_ value of all transactions in the selected date range that have an __Account Type__ of either _Revenue_ or
_Sales_.

::: tip
Note that the Account Type _Other Income_ is not included in this calculation.
:::

![Account Types in Xero](./images/insight-activity-turnover-xero-accounts.png)

This gives you some flexibility in determining this Turnover figure, as the Account Type can be modified for each
account in Xero.

::: tip
Xero provide some documentation on working with
[Chart of Accounts](https://central.xero.com/s/article/Chart-of-accounts-in-Xero).
:::

## Historical Changes
![Historical Changes](./images/insight-historical-changes.png)

Have you ever had that uncomfortable feeling that something in a previous period has changed after you've reported it to
the board or to the tax authorities? All the accountants we know have run into this at some point. Everyone makes
mistakes, and it can be quite easy for someone with Advisor privileges in Xero to create a record with the wrong journal
date.

The tricky thing is tracking down these changes so they can be amended. Xavier allows you to identify exactly what was
changed and when within seconds. Simply input the historical reporting period that you want to check, and the close date
from which you expect no more transactions to have been logged for that period, and click *Run Report*.

Xavier queries the underlying journal transactions for the client, and looks for transactions that have a journal date
within the historical period, but a created date of __after__ the reporting close date.

You'll be able to jump straight to the offending transaction(s) in Xero from the results. And, in case you need to show
someone else where it all went wrong, you can always export the results to PDF.

## Regular Suppliers
![Regular Suppliers](./images/insight-regular-suppliers.png)

The Regular Suppliers insight is designed to analyse your client's payments to their suppliers over time and
automatically detect issues. Our AI will look for months where the total amount paid is higher than normal for
a supplier.

Clicking a supplier will show a chart of payments over time and highlight the periods where we have detected where there
may be an issue. Clicking on a bar in the chart will explain the issue that we have found and show a summary of payments to the
supplier in the chosen period. You may then choose to dismiss the alert or go through to Xero to investigate.

We are really excited about the possiblities here and we will be working hard to continue making this insight more powerful.

### Dismissals
Each anomalous period can be 'dismissed' if you have reviewed the period and do not want Xavier to raise it again.
The card for that supplier will not be removed from the view until all anomalous periods in the chart have been dismissed.
Dismissed items do not contribute to the [Health Score](/clients.html#client-health-score).
Any dismissed periods can be viewed by selecting *dismissed* from the filter at the top
of the screen, where you can then review and *undo* any accidental dismissals.

## Sales Analysis
![Sales Analysis Screenshot](./images/sales-analysis-screenshot-min.png)

This new feature allows you to review your client's revenue for a given period, breaking it down into who their key customers are and how 
much revenue each of these customers generate. 

### Accumulated Revenue
This chart demonstrates how much of your client's revenue comes from a smaller proportion of customers. The chart area 
is cumulative; the steeper the curve is at the beginning, the more revenue is generated by that segment. The curve will 
typically then level off, as later segments contribute less to the revenue total.

Revenue-generating contacts are listed in the grid below the chart, grouped by segment, with an indication of how reliant the client 
is on that contact. By identifying these key revenue generating customers, you can give clients informed advice as to 
where they should be focusing their time.

This grid lists a few key stats:
- _Customer_ is the contact name, and clicking on it will link to the contact in Xero
- _Revenue_ is the amount of revenue generated by that customer during the period
- _Transactions_ is the number of transactions generated by that customer during the period
- _Reliance_ is the percentage of total revenue which comes from that customer in the period
- _Debtor Days_ is a calculation of the time the customer typically takes to pay

### Average Monthly Revenue
Xavier then provides two key stats for the client; average monthly revenue for the period, and the average monthly revenue 
per customer for the period. 