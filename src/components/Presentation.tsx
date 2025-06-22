
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Brain, 
  Download, 
  Code, 
  ChevronLeft, 
  ChevronRight, 
  AlertTriangle,
  Target,
  FileText,
  Zap,
  Lock,
  Globe
} from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Title Slide
    {
      type: 'title',
      content: (
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Shield className="h-16 w-16 text-blue-400" />
            <h1 className="text-6xl font-bold text-white">ThreatScope</h1>
          </div>
          <h2 className="text-3xl text-blue-200">AI-Powered Cybersecurity Threat Analysis</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Generative threat insight engine that identifies and analyzes security threats 
            based on free-text descriptions of any system or application
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-lg">AI-Powered</Badge>
            <Badge className="bg-green-600 text-white px-4 py-2 text-lg">Real-time Analysis</Badge>
            <Badge className="bg-purple-600 text-white px-4 py-2 text-lg">Domain-Specific</Badge>
          </div>
        </div>
      )
    },

    // Problem Statement
    {
      type: 'content',
      title: 'The Challenge',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-red-900/20 border-red-500/50">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Manual Threat Modeling
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li>• Time-consuming process</li>
                  <li>• Requires expert knowledge</li>
                  <li>• Often incomplete coverage</li>
                  <li>• Expensive security consultations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-900/20 border-orange-500/50">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Generic Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li>• One-size-fits-all approach</li>
                  <li>• Miss domain-specific threats</li>
                  <li>• Overwhelming generic lists</li>
                  <li>• Poor relevance to actual systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <h3 className="text-2xl text-yellow-400 font-semibold">
              Developers need fast, relevant, actionable security insights
            </h3>
          </div>
        </div>
      )
    },

    // Solution Overview
    {
      type: 'content',
      title: 'Our Solution: ThreatScope AI',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl text-blue-400 mb-4">Intelligent Domain Classification + Curated Threat Intelligence</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-blue-900/20 border-blue-500/50">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Classification
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Automatically detects system domain using keyword matching across 6 categories
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-500/50">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Curated Threats
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Domain-specific threats with severity levels and actionable mitigations
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-purple-500/50">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Instant Results
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Real-time analysis with confidence scores and exportable reports
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },

    // How It Works
    {
      type: 'content',
      title: 'How ThreatScope Works',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">Input Description</h4>
                  <p className="text-gray-300">User describes their system in natural language</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400">AI Classification</h4>
                  <p className="text-gray-300">Keywords matched across 6 domains with confidence scoring</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400">Threat Generation</h4>
                  <p className="text-gray-300">3-6 relevant threats selected with mitigations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400">Export Options</h4>
                  <p className="text-gray-300">Download reports or CLI tools for offline use</p>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">Example Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-700/50 p-3 rounded">
                  <p className="text-sm text-gray-400 mb-2">Input:</p>
                  <p className="text-gray-300">"E-commerce platform with payment processing"</p>
                </div>
                <div className="bg-slate-700/50 p-3 rounded">
                  <p className="text-sm text-gray-400 mb-2">Output:</p>
                  <div className="space-y-2">
                    <p className="text-green-400">Category: ECOMMERCE (85% confidence)</p>
                    <p className="text-yellow-400">Threats: Payment Card Data Theft, SQL Injection, Account Takeover</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },

    // Key Features
    {
      type: 'content',
      title: 'Key Features',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                6 Domain Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-1 text-sm">
                <li>• Automation/IoT</li>
                <li>• E-commerce</li>
                <li>• Healthcare</li>
                <li>• Messaging</li>
                <li>• Cloud</li>
                <li>• General</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Threat Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-1 text-sm">
                <li>• Severity levels</li>
                <li>• Detailed descriptions</li>
                <li>• Actionable mitigations</li>
                <li>• Industry-specific focus</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export Options
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-1 text-sm">
                <li>• Markdown reports</li>
                <li>• Python CLI tool</li>
                <li>• JSON threat database</li>
                <li>• Offline capability</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI-Powered
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-1 text-sm">
                <li>• Keyword classification</li>
                <li>• Confidence scoring</li>
                <li>• Real-time analysis</li>
                <li>• No training required</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Developer Friendly
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-1 text-sm">
                <li>• Modern React UI</li>
                <li>• JSON-driven engine</li>
                <li>• Open source</li>
                <li>• Easy integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-orange-400 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Tech Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-1 text-sm">
                <li>• React + TypeScript</li>
                <li>• TailwindCSS</li>
                <li>• Lucide Icons</li>
                <li>• Python CLI</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },

    // Demo Results
    {
      type: 'content',
      title: 'Live Demo Results',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl text-blue-400 mb-4">Sample Analysis Output</h3>
          </div>
          
          <Card className="bg-slate-800/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white">Healthcare System Analysis</CardTitle>
              <CardDescription className="text-gray-300">
                Input: "Hospital patient management system with EHR and medical devices"
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-700/50 p-3 rounded">
                  <div className="text-2xl font-bold text-blue-400">HEALTHCARE</div>
                  <div className="text-sm text-gray-400">Category</div>
                </div>
                <div className="bg-slate-700/50 p-3 rounded">
                  <div className="text-2xl font-bold text-green-400">92%</div>
                  <div className="text-sm text-gray-400">Confidence</div>
                </div>
                <div className="bg-slate-700/50 p-3 rounded">
                  <div className="text-2xl font-bold text-yellow-400">4</div>
                  <div className="text-sm text-gray-400">Threats</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-red-900/20 p-3 rounded border-l-4 border-red-500">
                  <span className="text-white">PHI Data Breach</span>
                  <Badge className="bg-red-500">Critical</Badge>
                </div>
                <div className="flex items-center justify-between bg-red-900/20 p-3 rounded border-l-4 border-red-500">
                  <span className="text-white">Ransomware Attacks</span>
                  <Badge className="bg-red-500">Critical</Badge>
                </div>
                <div className="flex items-center justify-between bg-orange-900/20 p-3 rounded border-l-4 border-orange-500">
                  <span className="text-white">Medical Device Hijacking</span>
                  <Badge className="bg-orange-500">High</Badge>
                </div>
                <div className="flex items-center justify-between bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
                  <span className="text-white">Insider Threats</span>
                  <Badge className="bg-yellow-500">Medium</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },

    // Impact & Benefits
    {
      type: 'content',
      title: 'Impact & Benefits',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl text-green-400 mb-4">For Developers</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <span>Instant security insights without expert knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span>Domain-specific threats relevant to their projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="h-5 w-5 text-purple-400 mt-0.5" />
                  <span>CLI tools for integration into CI/CD pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Professional reports for stakeholders</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-blue-400 mb-4">For Organizations</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Proactive security risk identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <Brain className="h-5 w-5 text-purple-400 mt-0.5" />
                  <span>Consistent threat modeling across teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <Download className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <span>Cost-effective alternative to consultants</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span>Scalable security assessment process</span>
                </li>
              </ul>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-semibold text-white mb-2">
                Making Cybersecurity Accessible to Everyone
              </h4>
              <p className="text-gray-300">
                ThreatScope democratizes threat modeling by making it fast, intuitive, and actionable 
                for developers and security teams of all skill levels.
              </p>
            </CardContent>
          </Card>
        </div>
      )
    },

    // Future Vision
    {
      type: 'content',
      title: 'Future Vision',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl text-blue-400 mb-4">Roadmap & Expansion</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-blue-900/20 border-blue-500/50">
              <CardHeader>
                <CardTitle className="text-blue-400">Enhanced AI Models</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Machine learning-based classification</p>
                <p>• Natural language threat descriptions</p>
                <p>• Context-aware risk scoring</p>
                <p>• Industry-specific fine-tuning</p>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-500/50">
              <CardHeader>
                <CardTitle className="text-green-400">Integration Ecosystem</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• GitHub Actions integration</p>
                <p>• JIRA ticket creation</p>
                <p>• SIEM system connectors</p>
                <p>• Cloud provider APIs</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-purple-500/50">
              <CardHeader>
                <CardTitle className="text-purple-400">Advanced Features</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Threat trend analysis</p>
                <p>• Custom threat databases</p>
                <p>• Multi-language support</p>
                <p>• Visual threat modeling</p>
              </CardContent>
            </Card>

            <Card className="bg-yellow-900/20 border-yellow-500/50">
              <CardHeader>
                <CardTitle className="text-yellow-400">Enterprise Solutions</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Team collaboration features</p>
                <p>• Compliance reporting</p>
                <p>• API rate limiting</p>
                <p>• Private cloud deployment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },

    // Thank You
    {
      type: 'title',
      content: (
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Shield className="h-16 w-16 text-blue-400" />
            <h1 className="text-6xl font-bold text-white">Thank You</h1>
          </div>
          <h2 className="text-3xl text-blue-200">ThreatScope AI</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Making cybersecurity threat modeling accessible, fast, and actionable for everyone
          </p>
          <div className="flex justify-center gap-6 mt-12">
            <Card className="bg-slate-800/50 border-blue-500/30 p-6">
              <div className="text-center">
                <Code className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h4 className="text-lg font-semibold text-white">Open Source</h4>
                <p className="text-gray-400">MIT License</p>
              </div>
            </Card>
            <Card className="bg-slate-800/50 border-green-500/30 p-6">
              <div className="text-center">
                <Globe className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="text-lg font-semibold text-white">Web App</h4>
                <p className="text-gray-400">Try it now</p>
              </div>
            </Card>
            <Card className="bg-slate-800/50 border-purple-500/30 p-6">
              <div className="text-center">
                <Download className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h4 className="text-lg font-semibold text-white">CLI Tool</h4>
                <p className="text-gray-400">Offline ready</p>
              </div>
            </Card>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <div className="fixed top-4 left-4 right-4 z-10 flex justify-between items-center">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="sm"
          className="bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-400' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="sm"
          className="bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide Content */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-6xl">
          {slides[currentSlide].type === 'title' ? (
            <div className="flex items-center justify-center min-h-[80vh]">
              {slides[currentSlide].content}
            </div>
          ) : (
            <div className="space-y-8">
              <h1 className="text-4xl font-bold text-white text-center mb-12">
                {slides[currentSlide].title}
              </h1>
              {slides[currentSlide].content}
            </div>
          )}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-4 right-4 bg-slate-800/80 text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Presentation;
