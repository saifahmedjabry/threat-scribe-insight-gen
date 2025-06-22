🛡️ ThreatScope AI – Generative Threat Insight Engine
ThreatScope AI is a generative cybersecurity tool that identifies and analyzes security threats based on a free-text description of any system or application. Using domain-specific keyword classification, it automatically detects the system’s sector (e.g., automation, ecommerce, healthcare, messaging, cloud) and provides high-relevance threats and actionable mitigation strategies.

ThreatScope features a modern React frontend, a JSON-driven threat intelligence engine, and support for exporting CLI tools and Markdown reports — making it ideal for developers, DevOps teams, and security practitioners.

🚀 Features

AI-style domain classification using keyword detection

Curated threat intelligence mapped to industry domains

Real-time threat generation with severity labels

Matching mitigation strategies for each identified threat

Confidence score for category classification

Markdown report export

Downloadable Python CLI version with full offline support

🧠 How It Works

The user enters a free-text description of their application or system.

The engine matches keywords across six predefined categories: automation, ecommerce, healthcare, messaging, cloud, and general.

The category with the highest keyword match is selected.

3–6 domain-specific threats and their mitigations are randomly selected and returned, each with:

Unique threat ID

Severity level (Critical, High, Medium)

Description of the threat

Suggested mitigation

The results can be exported as a CLI tool or Markdown report.

🧪 Example

Input:
“We’re developing a messaging platform with encrypted chat, cloud file sharing, and multi-device access.”

Detected Category: Messaging
Confidence Score: 83%
Threats Identified:

MSG_001 – Message Interception (High)

MSG_002 – Account Impersonation (Medium)

MSG_006 – Server-Side Attacks (Critical)

🗂 Project Structure

/data
  threats.json – All threats + mitigations grouped by category
/components
  ThreatAnalysis.tsx – Main UI component
/utils
  threatAnalyzer.ts – Core analysis and classification logic

⚙️ Tech Stack

React + TypeScript

TailwindCSS + Lucide Icons

JSON-based threat engine

Python (for CLI export)

🛠 Setup

Clone the repository:
git clone https://github.com/saifahmedjabry/threat-scribe-insight-gen
cd threat-scribe-insight-gen

Install dependencies:
npm install

Run the development server:
npm run dev

📦 CLI Tool Export

Click “Download CLI Tool” to generate:

threatscope.py – standalone Python script

threats.json – full JSON threat database

Run the CLI version using:
python threatscope.py

📄 License

MIT License. Open source and available for educational, personal, and non-commercial use.

🙌 Built for Hackathon

ThreatScope AI was created to make automated threat modeling accessible, fast, and intuitive. It helps developers and security engineers quickly understand potential risks in their systems — with zero setup and fully generative output.

Built with ❤️ for security-focused innovation.



## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
