const blueskyAPIResponse = {
  "id": 1,
  "company": "Bluesky",
  "Analysis": {
    "properties": {
      "Data Retention": {
        "text": "The terms do not state that no data is retained unless the user provides explicit permission. Section 2e mentions reasonable efforts to remove user content upon account deletion, subject to legal requirements, but does not require user permission for data retention.",
        "score": false
      },
      "Data Collection": {
        "text": "The terms do not explicitly state that only minimal data needed to operate the platform is collected. Section 2c mentions user content is used to provide and improve Bluesky Social, the AT Protocol, and future offerings, which suggests more than minimal data may be collected.",
        "score": false
      },
      "IP and Data Ownership": {
        "text": "Section 2d states that users keep ownership of their content, and only grants Bluesky a limited license to use the content to provide and promote the service. This suggests the user owns their IP and data on the platform.",
        "score": true
      },
      "Data Privacy & Sharing": {
        "text": "The terms allow user content to be shared throughout Bluesky Social and the AT Protocol to provide the service. Section 2d also allows Bluesky to grant content moderation tools access to user content. This goes beyond just providing service to the individual user.",
        "score": false
      },
      "Liability and Indemnification": {
        "text": "Section 12 contains an indemnification clause requiring users to indemnify Bluesky against claims arising from the user's actions. Section 13 also limits Bluesky's liability to a maximum of $100 in most cases.",
        "score": true
      }
    }
  },
  "sys_queried_on": "2023-05-08",
  "toc_last_updated_on": "2024-02-05"
};

export default blueskyAPIResponse;
