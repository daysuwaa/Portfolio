// Add a new post by adding an object here. Set `published: false` to keep a draft off the site.
export const posts = [
  {
    slug: "reading-gmail-without-uploading-it",
    title: "Reading your Gmail without uploading it",
    date: "2026-11-10",
    published: true,
    summary:
      "How Billio finds subscriptions in your receipts, and why the scan runs in your browser and not on a server.",
    body: [
      { type: "p", text: "Billio tracks subscriptions, and the fastest way to fill it is to read the receipts already sitting in your inbox. That means asking for access to Gmail, which is a serious thing to ask for. So the first design decision was where the reading happens." },
      { type: "h", text: "The scan runs in your browser" },
      { type: "p", text: "When you tap Connect Gmail, Google shows its own approval screen and gives your browser a short-lived token for read-only access. Billio uses that token to search your mail, reads the results on your device, and shows you a list. The token is not stored. Nothing from your inbox is sent to my server or saved in my database." },
      { type: "p", text: "There is a second reason I chose this. As I understand Google's rules, an app that keeps data from a restricted scope like Gmail read access on its own servers has to pass an annual third-party security assessment. Keeping the scan on the device means Billio never holds that data, and it is a better privacy story anyway." },
      { type: "h", text: "Reading less, and reading it carefully" },
      { type: "p", text: "Gmail limits how fast an app can read messages. My first version fetched the full email for every search result and hit the per-minute quota quickly. Now Billio fetches only the sender and subject first, and opens the full message only when it needs an amount or a renewal date. It makes five requests at a time and backs off when Google says to slow down." },
      { type: "h", text: "What counts as a subscription" },
      {
        type: "ul",
        items: [
          "Known services, like Netflix or Spotify, are matched by name.",
          "Unknown senders are listed only if the email mentions renewal or a subscription, shows a next billing date, or shows up at least twice.",
          "Order, delivery and promo emails are dropped.",
          "Past billing dates are rolled forward to the next one that has not happened yet.",
        ],
      },
      { type: "p", text: "It is rule-based, so it can miss things. Amounts that sit only inside a PDF attachment are not read yet, and Billio asks you to type them. You can also mark something as not a subscription, and it remembers." },
    ],
  },
  {
    slug: "four-ways-my-subscription-scanner-was-wrong",
    title: "Four ways my subscription scanner was wrong",
    date: "2026-11-10",
    published: true,
    summary:
      "I tested Billio on my own inbox and on friends' phones. Here is what it got wrong and what I changed.",
    body: [
      { type: "p", text: "I wrote the first version of Billio's Gmail scan, ran it on my own inbox, and it found nothing. Then I loosened it and it found too much. Here is what went wrong, in order." },
      { type: "h", text: "It found nothing" },
      { type: "p", text: "My first rule only accepted senders I already knew. Real inboxes have receipts from services nobody would think to list, so I let unknown senders through when an email looked like a receipt." },
      { type: "h", text: "Then it found food orders" },
      { type: "p", text: "After that change, my food delivery orders showed up as subscriptions, and only one result in eight was right. Those emails say receipt and thank you, just like a subscription does. Unknown senders now need stronger evidence, such as the word renewal, a next billing date or repeat receipts, and order and delivery wording rules an email out." },
      { type: "h", text: "Apple hides the real app" },
      { type: "p", text: "Apple sends receipts for many apps from one sender, so everything arrived looking like one subscription called Apple. The app name is inside the email body, so Billio now reads it from there. A friend then tested it, and his iCloud invoice slipped through because it is laid out differently, so iCloud and Apple Music are now matched by name too." },
      { type: "h", text: "A dollar subscription filed as naira" },
      { type: "p", text: "One subscription was billed in dollars, but Billio showed the amount in naira because it assumed the local currency. It now reads the currency from the email and lets you change it." },
      { type: "p", text: "The lesson was the same each time: a test on my own inbox is not a test. The bugs showed up when people with different inboxes tried it, so I keep asking friends to run it and send me what went wrong." },
    ],
  },
];

export const published = () =>
  posts.filter((p) => p.published).sort((a, b) => (a.date < b.date ? 1 : -1));

export const formatDate = (iso) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
