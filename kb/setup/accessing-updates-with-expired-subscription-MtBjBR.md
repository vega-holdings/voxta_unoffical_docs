---
id: MtBjBRebo8PEd9DqrmtT0
slug: accessing-updates-with-expired-subscription-MtBjBR
type: qa
title: "Voxta Patreon Subscription: Access, Updates, Credits, and Billing"
topics:
  - setup
  - troubleshooting
  - configuration
keywords:
  - access
  - authentication
  - billing
  - billing cycle
  - cancel
  - cloud
  - cloud credits
  - credit card
  - credits
  - data folder
  - declined
  - downgrade
  - download
  - expired
  - license
  - local services
  - missing credits
  - patreon
  - payment
  - reinstall
  - resubscribe
  - subscription
  - update
  - updates
  - voxta
  - voxy
  - zip
confidence: 1
authority: 0.2
contributor: futurestorm
sources:
  - messageId: "1372316000233590926"
    author: futurestorm
    timestamp: 2025-12-22T22:42:00.874Z
    url: ""
  - messageId: "1372316373346287626"
    author: futurestorm
    timestamp: 2025-12-22T22:42:00.874Z
    url: ""
created: 2025-12-22T22:42:00.874Z
updated: 2025-12-23T04:44:40.652Z
---

# Voxta Patreon Subscription: Access, Updates, Credits, and Billing

> Voxta uses Patreon for subscription management. An active subscription is required to download updates and authenticate new installations, while existing installations continue to work locally if the Data folder is preserved. Voxta Cloud credits are issued on successful payments, and payment issues must be resolved through Patreon support.

## Answer

# Understanding Patreon Subscription for Voxta

Voxta uses Patreon for subscription management. Your access to software updates, new installations, and Voxta Cloud credits depends on your subscription status.

## Access to Voxta Software

- **Active subscription**: You can download the latest version of Voxta and Voxy, and authenticate new installations.
- **Expired or cancelled subscription**: You can continue using any previously downloaded and installed versions of Voxta and Voxy, as long as you do not delete the `Data` folder (which contains your license token and database). This allows local use with local services (LLMs, TTS, STT).
- However, you will not be able to download new updates or access new features released after your subscription lapsed.

## Downloading Updates

- Voxta requires an active Patreon subscription to access and download new versions. The download links are restricted to patrons.
- If you have previously downloaded a version (e.g., you kept the installation ZIP file), you can reinstall that specific version without an active subscription, but see the section on reinstalling for authentication requirements.

## Reinstalling Voxta

When reinstalling Voxta, the following scenarios apply:

- **If you have the original installation ZIP file and your `Data` folder from a previous authorized installation**, you can restore Voxta without needing an active subscription. Simply extract the ZIP and place the backed-up `Data` folder into the installation directory. This preserves your license token, allowing the software to run.
- **If you have the ZIP but not the `Data` folder**, a fresh installation will attempt to authenticate with Patreon to generate a new license token. Without an active subscription, this authentication will fail, and you may be unable to use Voxta.
- **If you delete the `Data` folder and do not have a backup**, even if you have the installation files, you will need an active subscription to re-authenticate and obtain a new license token.

Therefore, it is **strongly recommended** to back up your `Data` folder regularly, especially before uninstalling or moving Voxta to a new system.

## Voxta Cloud Credits

Voxta Cloud credits are awarded when a successful payment is processed through Patreon.

- Credits are typically added at the start of each billing cycle when your subscription renews.
- If you change your Patreon tier (upgrade or downgrade) or resubscribe after a lapse, credits are only issued when a new payment occurs. For example:
  - Downgrading your tier after already paying for a higher tier in the same billing cycle does not trigger an additional payment, so no new credits are generated.
  - Resubscribing within the same billing cycle (i.e., after unsubscribing and then subscribing again before the next charge date) also does not result in a new payment, so no credits are added.
- Existing credits remain available even if your subscription expires or is cancelled. You can continue to use them for Voxta Cloud services until they are depleted.
- Once your credits run out and you do not have an active subscription, you will no longer be able to use Voxta Cloud services (including cloud-hosted models).

## Payment and Billing

- Patreon is currently the only payment method for Voxta. All payment processing and billing are handled entirely by Patreon.
- Voxta does not control payment methods or transactions. If you encounter any payment issues (such as a declined credit card), you must contact **Patreon Customer Support**. The Voxta team cannot assist with transaction failures.

## Common Scenarios

### Cancelling Your Patreon Subscription

- You retain access to the specific versions of Voxta and Voxy already installed on your system.
- Local services (local LLMs, TTS, STT) continue to work.
- Existing Voxta Cloud credits remain usable.
- You will not receive new credits or software updates.
- When your credits are exhausted, Voxta Cloud services become unavailable.

### Expired Subscription and Reinstallation

- If you need to reinstall Voxta after your subscription has expired, ensure you have a backup of your `Data` folder. Without it, you may be locked out until you resubscribe.
- Keeping the installation ZIP file from when you were a patron can help you avoid the download restriction, but the authentication step still requires an active subscription unless you restore your `Data` folder.

### Resubscribing or Changing Tiers

- When you resubscribe after a lapse, a new payment will be processed, and you will receive the appropriate amount of Voxta Cloud credits for that payment.
- Changing tiers (upgrade or downgrade) may or may not result in an immediate payment, depending on Patreon's billing cycle. Credits are only added when a payment is successfully taken.
- If you upgrade mid-cycle, you may be charged a prorated amount and receive additional credits accordingly. Downgrades usually take effect at the next billing cycle and do not generate a refund or credit adjustment for the current period.

## Best Practices

- **Back up your `Data` folder** regularly. This folder contains your license token and database, and is essential for restoring Voxta without an active subscription.
- **Keep a copy of the installation ZIP** for the version you are using, especially if you anticipate your subscription lapsing.
- **Monitor your Patreon billing cycle** to understand when payments occur and when credits are added.
- **If you plan to cancel, consider using up your Voxta Cloud credits before they expire (if applicable) and ensure you have a stable local setup.**

## Note

Policies and features may change over time. For the most up-to-date information, refer to the official Voxta documentation or contact support.

---

*Extracted from Discord. Primary contributor: futurestorm*