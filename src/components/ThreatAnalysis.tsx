
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Download, Shield, FileText, Code } from 'lucide-react';
import { ThreatAnalyzer, AnalysisResult, ThreatsData } from '@/utils/threatAnalyzer';
import threatsData from '@/data/threats.json';

const ThreatAnalysis = () => {
  const [description, setDescription] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzer = new ThreatAnalyzer(threatsData as ThreatsData);

  const handleAnalyze = async () => {
    if (!description.trim()) return;
    
    setIsAnalyzing(true);
    // Add a small delay to show loading state
    setTimeout(() => {
      const result = analyzer.analyzeDescription(description);
      setAnalysis(result);
      setIsAnalyzing(false);
    }, 1000);
  };

  const downloadReport = () => {
    if (!analysis) return;
    
    const report = analyzer.generateReport(analysis, description);
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `threatscope-report-${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadCLI = () => {
    const pythonScript = analyzer.generatePythonScript();
    const threatsJsonContent = JSON.stringify(threatsData, null, 2);
    
    // Create a zip-like structure by downloading both files
    const scriptBlob = new Blob([pythonScript], { type: 'text/plain' });
    const jsonBlob = new Blob([threatsJsonContent], { type: 'application/json' });
    
    // Download Python script
    const scriptUrl = URL.createObjectURL(scriptBlob);
    const scriptLink = document.createElement('a');
    scriptLink.href = scriptUrl;
    scriptLink.download = 'threatscope.py';
    document.body.appendChild(scriptLink);
    scriptLink.click();
    document.body.removeChild(scriptLink);
    
    // Download JSON file after a short delay
    setTimeout(() => {
      const jsonUrl = URL.createObjectURL(jsonBlob);
      const jsonLink = document.createElement('a');
      jsonLink.href = jsonUrl;
      jsonLink.download = 'threats.json';
      document.body.appendChild(jsonLink);
      jsonLink.click();
      document.body.removeChild(jsonLink);
      URL.revokeObjectURL(jsonUrl);
    }, 500);
    
    URL.revokeObjectURL(scriptUrl);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return '🔴';
      case 'high': return '🟠';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '⚪';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-blue-400" />
            <h1 className="text-4xl font-bold text-white">ThreatScope</h1>
          </div>
          <p className="text-xl text-blue-200 mb-2">AI-Powered Cybersecurity Threat Analysis</p>
          <p className="text-gray-300">Identify domain-specific security threats and get actionable mitigations</p>
        </div>

        {/* Main Analysis Card */}
        <Card className="bg-slate-800/50 border-blue-500/30 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              Project Analysis
            </CardTitle>
            <CardDescription className="text-gray-300">
              Describe your application or system to identify potential security threats
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter a description of your application or system (e.g., 'An e-commerce platform with payment processing and user accounts' or 'Industrial automation system with IoT sensors')"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 min-h-[120px]"
            />
            <div className="flex gap-3">
              <Button 
                onClick={handleAnalyze}
                disabled={!description.trim() || isAnalyzing}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Threats'}
              </Button>
              <Button 
                onClick={downloadCLI}
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
              >
                <Code className="h-4 w-4 mr-2" />
                Download CLI Tool
              </Button>
            </div>

            {/* CLI Preview Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Card className="bg-slate-700/30 border-slate-600/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-blue-400 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    threatscope.py
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <pre className="text-xs text-gray-300 overflow-x-auto">
                    <code>{`#!/usr/bin/env python3
"""
ThreatScope - Cybersecurity Threat Analysis CLI Tool
"""

import json
import random
import sys

class ThreatAnalyzer:
    def __init__(self, threats_file='threats.json'):
        with open(threats_file, 'r') as f:
            self.threats_data = json.load(f)
    
    def analyze_description(self, description):
        # Keyword matching logic
        normalized = description.lower()
        best_match = 'general'
        
        for category, data in self.threats_data.items():
            score = sum(1 for keyword in data['keywords'] 
                       if keyword.lower() in normalized)
        
        return self._get_random_threats(best_match)

def main():
    analyzer = ThreatAnalyzer()
    # ... analysis logic
    
if __name__ == "__main__":
    main()`}</code>
                  </pre>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/30 border-slate-600/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-green-400 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    threats.json
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <pre className="text-xs text-gray-300 overflow-x-auto">
                    <code>{`{
  "automation": {
    "keywords": [
      "automation", "iot", "scada", 
      "plc", "industrial", "control"
    ],
    "threats": [
      {
        "id": "AUTO_001",
        "name": "Unauthorized Remote Access",
        "description": "Attackers gain access...",
        "severity": "High",
        "mitigation": "Implement MFA and..."
      },
      {
        "id": "AUTO_002",
        "name": "Malware Injection via USB",
        "description": "Malicious software...",
        "severity": "High",
        "mitigation": "Disable USB ports..."
      }
    ]
  },
  "ecommerce": {
    "keywords": ["ecommerce", "payment"],
    "threats": [...]
  }
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-6">
            {/* Summary Card */}
            <Card className="bg-slate-800/50 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    Analysis Results
                  </span>
                  <Button 
                    onClick={downloadReport}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">
                      {analysis.category.toUpperCase()}
                    </div>
                    <div className="text-sm text-gray-400">Detected Category</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">
                      {(analysis.confidence * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-400">Confidence Level</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">
                      {analysis.threats.length}
                    </div>
                    <div className="text-sm text-gray-400">Threats Identified</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Threats List */}
            <div className="grid gap-4">
              {analysis.threats.map((threat, index) => (
                <Card key={threat.id} className="bg-slate-800/50 border-slate-600/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-2xl">{getSeverityIcon(threat.severity)}</span>
                        {threat.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge className={`${getSeverityColor(threat.severity)} text-white`}>
                          {threat.severity}
                        </Badge>
                        <Badge variant="outline" className="text-gray-400 border-gray-600">
                          {threat.id}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Description</h4>
                      <p className="text-gray-400">{threat.description}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">🛡️ Recommended Mitigation</h4>
                      <p className="text-gray-300 bg-slate-700/30 p-3 rounded border-l-4 border-green-500">
                        {threat.mitigation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400">
          <p className="flex items-center justify-center gap-2">
            <FileText className="h-4 w-4" />
            Built for Hackathon • Powered by AI • Open Source
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreatAnalysis;
