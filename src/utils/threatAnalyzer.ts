
export interface Threat {
  id: string;
  name: string;
  description: string;
  severity: string;
  mitigation: string;
}

export interface Category {
  keywords: string[];
  threats: Threat[];
}

export interface ThreatsData {
  [key: string]: Category;
}

export interface AnalysisResult {
  category: string;
  threats: Threat[];
  confidence: number;
}

export class ThreatAnalyzer {
  private threatsData: ThreatsData;

  constructor(threatsData: ThreatsData) {
    this.threatsData = threatsData;
  }

  analyzeDescription(description: string): AnalysisResult {
    const normalizedDescription = description.toLowerCase();
    let bestMatch = 'general';
    let highestScore = 0;

    // Check each category for keyword matches
    for (const [category, data] of Object.entries(this.threatsData)) {
      if (category === 'general') continue; // Skip general for now
      
      let score = 0;
      for (const keyword of data.keywords) {
        if (normalizedDescription.includes(keyword.toLowerCase())) {
          score += 1;
        }
      }
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = category;
      }
    }

    const confidence = highestScore > 0 ? Math.min(highestScore * 0.2, 1) : 0.1;
    const selectedThreats = this.getRandomThreats(bestMatch);

    return {
      category: bestMatch,
      threats: selectedThreats,
      confidence: confidence
    };
  }

  private getRandomThreats(category: string): Threat[] {
    const categoryData = this.threatsData[category];
    const allThreats = [...categoryData.threats];
    
    // Shuffle the threats array
    for (let i = allThreats.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allThreats[i], allThreats[j]] = [allThreats[j], allThreats[i]];
    }
    
    // Return 3-5 random threats
    const numThreats = Math.floor(Math.random() * 3) + 3; // 3-5 threats
    return allThreats.slice(0, Math.min(numThreats, allThreats.length));
  }

  generatePythonScript(): string {
    return `#!/usr/bin/env python3
"""
ThreatScope - Cybersecurity Threat Analysis CLI Tool
Automatically identifies domain categories and suggests relevant cybersecurity threats.
"""

import json
import random
import sys
import os

class ThreatAnalyzer:
    def __init__(self, threats_file='threats.json'):
        """Initialize the threat analyzer with threats data."""
        try:
            with open(threats_file, 'r', encoding='utf-8') as f:
                self.threats_data = json.load(f)
        except FileNotFoundError:
            print(f"Error: {threats_file} not found!")
            sys.exit(1)
        except json.JSONDecodeError:
            print(f"Error: Invalid JSON in {threats_file}")
            sys.exit(1)

    def analyze_description(self, description):
        """Analyze description and return category with threats."""
        normalized_description = description.lower()
        best_match = 'general'
        highest_score = 0

        # Check each category for keyword matches
        for category, data in self.threats_data.items():
            if category == 'general':
                continue  # Skip general for now
            
            score = 0
            for keyword in data['keywords']:
                if keyword.lower() in normalized_description:
                    score += 1
            
            if score > highest_score:
                highest_score = score
                best_match = category

        confidence = min(highest_score * 0.2, 1) if highest_score > 0 else 0.1
        selected_threats = self._get_random_threats(best_match)

        return {
            'category': best_match,
            'threats': selected_threats,
            'confidence': confidence
        }

    def _get_random_threats(self, category):
        """Get 3-5 random threats from the specified category."""
        category_data = self.threats_data[category]
        all_threats = category_data['threats'][:]
        
        # Shuffle the threats
        random.shuffle(all_threats)
        
        # Return 3-5 random threats
        num_threats = random.randint(3, 5)
        return all_threats[:min(num_threats, len(all_threats))]

    def print_analysis(self, result):
        """Print the analysis results in a formatted way."""
        print("\\n" + "="*80)
        print("🔒 THREATSCOPE ANALYSIS REPORT")
        print("="*80)
        print(f"📂 Detected Category: {result['category'].upper()}")
        print(f"🎯 Confidence Level: {result['confidence']:.1%}")
        print(f"⚠️  Identified Threats: {len(result['threats'])}")
        print("="*80)

        for i, threat in enumerate(result['threats'], 1):
            severity_emoji = {
                'Critical': '🔴',
                'High': '🟠', 
                'Medium': '🟡',
                'Low': '🟢'
            }.get(threat.get('severity', 'Medium'), '⚪')
            
            print(f"\\n[{i}] {threat['name']}")
            print(f"    {severity_emoji} Severity: {threat.get('severity', 'Medium')}")
            print(f"    📝 Description: {threat['description']}")
            print(f"    🛡️  Mitigation: {threat['mitigation']}")
            print("-" * 80)

def main():
    """Main function to run the threat analysis."""
    print("🔒 ThreatScope - Cybersecurity Threat Analysis Tool")
    print("="*60)
    
    if len(sys.argv) > 1:
        # Use command line argument
        description = ' '.join(sys.argv[1:])
    else:
        # Interactive mode
        print("Enter a description of your application or system:")
        description = input("> ").strip()
    
    if not description:
        print("❌ Error: Please provide a description")
        return

    analyzer = ThreatAnalyzer()
    result = analyzer.analyze_description(description)
    analyzer.print_analysis(result)
    
    print("\\n💡 Tip: Run the analysis again to get different threat combinations!")

if __name__ == "__main__":
    main()
`;
  }

  generateReport(result: AnalysisResult, description: string): string {
    const timestamp = new Date().toISOString();
    
    let report = `# ThreatScope Analysis Report
Generated: ${timestamp}

## Project Description
${description}

## Analysis Summary
- **Detected Category:** ${result.category.toUpperCase()}
- **Confidence Level:** ${(result.confidence * 100).toFixed(1)}%
- **Threats Identified:** ${result.threats.length}

## Identified Threats

`;

    result.threats.forEach((threat, index) => {
      report += `### ${index + 1}. ${threat.name}
**Threat ID:** ${threat.id}
**Severity:** ${threat.severity}

**Description:**
${threat.description}

**Recommended Mitigation:**
${threat.mitigation}

---

`;
    });

    report += `## Recommendations
1. Prioritize threats based on severity levels
2. Implement mitigations in order of business impact
3. Conduct regular security assessments
4. Keep security measures updated with latest best practices

## Disclaimer
This analysis is generated automatically and should be reviewed by cybersecurity professionals. Additional threats may exist that are not covered in this analysis.
`;

    return report;
  }
}
