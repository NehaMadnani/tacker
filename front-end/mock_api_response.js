// mock_api_response.js
export default {
    id: 1,
    company: "Meta",
    sys_queried_on: "01/01/2021",
    toc_last_updated_on: "01/01/2019",
    Analysis: {
      properties: {
        "Data Collection": {
          text: "Data collection practices are described in detail.",
          score: true
        },
        "Data Retention": {
          text: "Data retention policy is unclear.",
          score: false
        },
        "IP and Data Ownership": {
          text: "Intellectual property and data ownership rights are clearly defined.",
          score: true
        },
        "Data Privacy & Sharing": {
          text: "Data sharing and privacy practices are transparent.",
          score: true
        },
        "Liability and Indemnification": {
          text: "Liability and indemnification terms are reasonable.",
          score: true
        }
      }
    }
  };