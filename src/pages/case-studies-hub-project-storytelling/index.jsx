import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CaseStudyCard from './components/CaseStudyCard';
import DetailedCaseStudy from './components/DetailedCaseStudy';
import FilterBar from './components/FilterBar';
import ProgressIndicator from './components/ProgressIndicator';
import StatsOverview from './components/StatsOverview';

const CaseStudiesHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Mock data for case studies
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      subtitle: "Transforming user experience for a growing marketplace",
      category: "Web Design",
      duration: "4 months",
      teamSize: "5 members",
      role: "Lead UI/UX Designer & Frontend Developer",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      problem: "The existing platform had a 68% cart abandonment rate and poor mobile experience, leading to significant revenue loss.",
      solution: "Redesigned the entire user journey with mobile-first approach, streamlined checkout process, and implemented progressive web app features.",
      description: `A comprehensive redesign of an e-commerce platform serving over 100,000 monthly users. The project involved extensive user research, competitive analysis, and iterative design testing to create a seamless shopping experience that increased conversions and user satisfaction.`,
      architecture: "Built with React 18, Next.js for SSR, Tailwind CSS for styling, and integrated with Stripe for payments. Implemented micro-frontends architecture for scalability.",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/example/ecommerce",
      metrics: [
        { value: "45%", label: "Conversion Increase" },
        { value: "68%", label: "Mobile Traffic" },
        { value: "2.3s", label: "Load Time" },
        { value: "4.8/5", label: "User Rating" }
      ],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Vercel"],
      keyFindings: [
        { title: "Mobile-first is crucial", description: "68% of users shop on mobile devices" },
        { title: "Trust signals matter", description: "Security badges increased conversions by 23%" },
        { title: "Speed is everything", description: "1s delay = 7% conversion loss" }
      ],
      researchImages: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop", title: "User Journey Map" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop", title: "Competitive Analysis" },
        { url: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop", title: "User Personas" },
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop", title: "Analytics Dashboard" }
      ],
      designProcess: [
        { icon: "Search", title: "Research", description: "User interviews and competitive analysis" },
        { icon: "Sketch", title: "Wireframing", description: "Low-fidelity layouts and user flows" },
        { icon: "Palette", title: "Visual Design", description: "High-fidelity mockups and prototypes" }
      ],
      designImages: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", title: "Wireframe Iterations" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", title: "Final Designs" }
      ],
      keyFeatures: [
        "One-click checkout process",
        "Advanced product filtering",
        "Real-time inventory updates",
        "Progressive web app capabilities",
        "Multi-language support",
        "Accessibility compliance (WCAG 2.1)"
      ],
      codeSnippet: `const CheckoutFlow = () => {
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({});
  
  const handleStepComplete = (data) => {
    setOrderData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };
  
  return (
    <div className="checkout-container">
      <ProgressBar currentStep={step} totalSteps={3} />
      <AnimatePresence mode="wait">
        {step === 1 && <ShippingForm onComplete={handleStepComplete} />}
        {step === 2 && <PaymentForm onComplete={handleStepComplete} />}
        {step === 3 && <OrderConfirmation data={orderData} />}
      </AnimatePresence>
    </div>
  );
};`,
      successes: [
        "Achieved 45% increase in conversion rate within 3 months",
        "Reduced cart abandonment from 68% to 23%",
        "Improved mobile user experience significantly",
        "Decreased page load time by 60%"
      ],
      lessons: [
        "User testing early and often prevents costly redesigns",
        "Performance optimization should be built-in, not added later",
        "Accessibility considerations improve UX for everyone",
        "Data-driven decisions lead to better outcomes"
      ],
      testimonial: {
        quote: "Alena transformed our e-commerce platform completely. The new design not only looks amazing but has significantly improved our conversion rates. Her ability to combine beautiful design with technical excellence is remarkable.",
        author: "Sarah Johnson",
        role: "Product Manager, TechCorp"
      }
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      subtitle: "Streamlining patient data visualization for medical professionals",
      category: "Dashboard",
      duration: "6 months",
      teamSize: "8 members",
      role: "Senior UX Designer & React Developer",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      problem: "Medical professionals were spending 40% of their time navigating complex interfaces instead of focusing on patient care.",
      solution: "Created an intuitive dashboard with smart data visualization, predictive analytics, and streamlined workflows.",
      description: `A comprehensive healthcare dashboard designed for medical professionals to efficiently manage patient data, track treatment progress, and make informed decisions. The system handles sensitive medical information while providing intuitive data visualization and workflow optimization.`,
      architecture: "Built with React 18, D3.js for data visualization, Node.js backend with PostgreSQL database, and implemented HIPAA-compliant security measures.",
      liveUrl: null,
      githubUrl: null,
      metrics: [
        { value: "60%", label: "Time Saved" },
        { value: "95%", label: "User Satisfaction" },
        { value: "40%", label: "Error Reduction" },
        { value: "100%", label: "HIPAA Compliant" }
      ],
      techStack: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js", "Material-UI"],
      keyFindings: [
        { title: "Information hierarchy is critical", description: "Doctors need quick access to vital signs" },
        { title: "Visual patterns reduce errors", description: "Color coding decreased medication errors by 40%" },
        { title: "Workflow optimization saves lives", description: "Faster access to patient data improves outcomes" }
      ],
      researchImages: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop", title: "Workflow Analysis" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop", title: "User Interviews" },
        { url: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop", title: "Task Analysis" },
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop", title: "Usability Testing" }
      ],
      designProcess: [
        { icon: "Users", title: "User Research", description: "Interviews with 50+ medical professionals" },
        { icon: "BarChart3", title: "Data Analysis", description: "Understanding complex medical data structures" },
        { icon: "Shield", title: "Security Design", description: "HIPAA compliance and data protection" }
      ],
      designImages: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", title: "Dashboard Wireframes" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", title: "Data Visualization" }
      ],
      keyFeatures: [
        "Real-time patient monitoring",
        "Predictive health analytics",
        "Secure messaging system",
        "Treatment timeline visualization",
        "Multi-device synchronization",
        "Voice-to-text documentation"
      ],
      codeSnippet: `const PatientDashboard = ({ patientId }) => {
  const { data: patient, loading } = usePatientData(patientId);
  const vitals = useRealTimeVitals(patientId);
  
  const chartConfig = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Vital Signs Trend' }
    }
  };
  
  if (loading) return <LoadingSpinner />;
  
  return (
    <div className="dashboard-grid">
      <VitalSignsChart data={vitals} config={chartConfig} />
      <MedicationTracker patient={patient} />
      <TreatmentTimeline patientId={patientId} />
      <AlertsPanel alerts={patient.alerts} />
    </div>
  );
};`,
      successes: [
        "Reduced data entry time by 60%",
        "Improved diagnostic accuracy through better data visualization",
        "Achieved 95% user satisfaction score",
        "Successfully passed HIPAA compliance audit"
      ],
      lessons: [
        "Healthcare UX requires deep domain knowledge",
        "Security and usability must work together",
        "Real-time data visualization is complex but crucial",
        "User training is as important as good design"
      ],
      testimonial: {
        quote: "The new dashboard has revolutionized how we work with patient data. What used to take hours now takes minutes, and the intuitive design means less training time for new staff.",
        author: "Dr. Michael Chen",
        role: "Chief Medical Officer, Regional Hospital"
      }
    },
    {
      id: 3,
      title: "Mobile Banking App",
      subtitle: "Secure and intuitive financial management on the go",
      category: "Mobile App",
      duration: "8 months",
      teamSize: "12 members",
      role: "Lead Mobile Designer & React Native Developer",
      heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      problem: "Existing mobile banking app had poor user experience, security concerns, and limited functionality causing customer churn.",
      solution: "Redesigned the entire mobile experience with enhanced security, intuitive navigation, and comprehensive financial tools.",
      description: `A complete mobile banking application redesign focusing on user experience, security, and comprehensive financial management tools. The app serves over 500,000 active users with features ranging from basic transactions to advanced investment tracking.`,
      architecture: "Built with React Native for cross-platform compatibility, integrated with bank APIs, implemented biometric authentication, and used Redux for state management.",
      liveUrl: null,
      githubUrl: null,
      metrics: [
        { value: "85%", label: "User Retention" },
        { value: "4.9/5", label: "App Store Rating" },
        { value: "50%", label: "Transaction Speed" },
        { value: "99.9%", label: "Uptime" }
      ],
      techStack: ["React Native", "Redux", "Node.js", "MongoDB", "Biometric Auth", "Push Notifications"],
      keyFindings: [
        { title: "Security builds trust", description: "Biometric auth increased user confidence by 78%" },
        { title: "Speed matters in finance", description: "Users expect instant transaction confirmations" },
        { title: "Personalization drives engagement", description: "Custom dashboards increased daily usage by 45%" }
      ],
      researchImages: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop", title: "User Journey Mapping" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop", title: "Security Analysis" },
        { url: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop", title: "Competitive Research" },
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop", title: "Usability Testing" }
      ],
      designProcess: [
        { icon: "Smartphone", title: "Mobile-First", description: "Designed specifically for mobile interactions" },
        { icon: "Lock", title: "Security Focus", description: "Multi-layer security implementation" },
        { icon: "Zap", title: "Performance", description: "Optimized for speed and reliability" }
      ],
      designImages: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", title: "Mobile Wireframes" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", title: "Final UI Designs" }
      ],
      keyFeatures: [
        "Biometric authentication",
        "Real-time transaction notifications",
        "Budget tracking and insights",
        "Investment portfolio management",
        "Bill payment automation",
        "Cardless ATM withdrawals"
      ],
      codeSnippet: `const TransactionScreen = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const { authenticate } = useBiometric();
  
  const handleTransfer = async () => {
    try {
      const isAuthenticated = await authenticate();
      if (isAuthenticated) {
        const result = await transferFunds({
          amount: parseFloat(amount),
          recipient,
          timestamp: new Date().toISOString()
        });
        showSuccessNotification(result);
      }
    } catch (error) {
      showErrorNotification(error.message);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <TransactionForm
        amount={amount}
        recipient={recipient}
        onAmountChange={setAmount}
        onRecipientChange={setRecipient}
        onSubmit={handleTransfer}
      />
    </SafeAreaView>
  );
};`,
      successes: [
        "Achieved 85% user retention rate",
        "Increased daily active users by 60%",
        "Reduced customer support tickets by 40%",
        "Won \'Best Mobile Banking App\' award"
      ],
      lessons: [
        "Financial apps require exceptional attention to security",
        "User onboarding is crucial for adoption",
        "Performance optimization is non-negotiable",
        "Accessibility in finance apps serves everyone"
      ],
      testimonial: {
        quote: "The new mobile app has exceeded all our expectations. Customer satisfaction scores have never been higher, and the intuitive design has significantly reduced support calls.",
        author: "Jennifer Martinez",
        role: "Digital Banking Director, First National Bank"
      }
    },
    {
      id: 4,
      title: "SaaS Analytics Platform",
      subtitle: "Empowering businesses with actionable data insights",
      category: "SaaS",
      duration: "10 months",
      teamSize: "15 members",
      role: "Product Designer & Full-Stack Developer",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      problem: "Businesses struggled with fragmented data sources and complex analytics tools that required technical expertise to operate.",
      solution: "Built an all-in-one analytics platform with intuitive drag-and-drop interface, automated insights, and customizable dashboards.",
      description: `A comprehensive SaaS analytics platform that helps businesses make data-driven decisions through intuitive visualization tools, automated reporting, and AI-powered insights. The platform integrates with 50+ data sources and serves over 10,000 businesses globally.`,
      architecture: "Microservices architecture with React frontend, Node.js/Python backend, PostgreSQL/Redis for data storage, and deployed on AWS with auto-scaling capabilities.",
      liveUrl: "https://example-analytics.com",
      githubUrl: null,
      metrics: [
        { value: "300%", label: "User Growth" },
        { value: "92%", label: "Customer Retention" },
        { value: "50+", label: "Integrations" },
        { value: "$2M", label: "ARR Growth" }
      ],
      techStack: ["React", "Node.js", "Python", "PostgreSQL", "Redis", "AWS", "D3.js", "TensorFlow"],
      keyFindings: [
        { title: "Simplicity drives adoption", description: "Non-technical users need intuitive interfaces" },
        { title: "Real-time data is essential", description: "Businesses need up-to-date insights for decisions" },
        { title: "Customization increases value", description: "Flexible dashboards improve user satisfaction" }
      ],
      researchImages: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop", title: "Market Research" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop", title: "User Personas" },
        { url: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop", title: "Feature Prioritization" },
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop", title: "Technical Architecture" }
      ],
      designProcess: [
        { icon: "Database", title: "Data Architecture", description: "Designing scalable data processing systems" },
        { icon: "BarChart3", title: "Visualization", description: "Creating intuitive chart and graph systems" },
        { icon: "Cpu", title: "AI Integration", description: "Implementing machine learning insights" }
      ],
      designImages: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", title: "Dashboard Concepts" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", title: "Data Visualization" }
      ],
      keyFeatures: [
        "Drag-and-drop dashboard builder",
        "50+ pre-built integrations",
        "AI-powered insights and predictions",
        "Real-time data processing",
        "Custom alert system",
        "White-label solutions"
      ],
      codeSnippet: `const DashboardBuilder = () => {
  const [widgets, setWidgets] = useState([]);
  const [draggedWidget, setDraggedWidget] = useState(null);
  
  const handleDrop = (e) => {
    e.preventDefault();
    const widgetType = e.dataTransfer.getData('widgetType');
    const position = {
      x: e.clientX - e.currentTarget.offsetLeft,
      y: e.clientY - e.currentTarget.offsetTop
    };
    
    const newWidget = {
      id: generateId(),
      type: widgetType,
      position,
      config: getDefaultConfig(widgetType)
    };
    
    setWidgets(prev => [...prev, newWidget]);
  };
  
  return (
    <div className="dashboard-canvas" onDrop={handleDrop}>
      <WidgetPalette onDragStart={setDraggedWidget} />
      <Canvas widgets={widgets} onWidgetUpdate={updateWidget} />
      <PropertiesPanel selectedWidget={selectedWidget} />
    </div>
  );
};`,
      successes: [
        "Achieved 300% user growth in first year",
        "Reached $2M ARR within 18 months",
        "Maintained 92% customer retention rate",
        "Successfully scaled to handle 1B+ data points daily"
      ],
      lessons: [
        "SaaS products need continuous iteration based on user feedback",
        "Scalability should be considered from day one",
        "User onboarding significantly impacts retention",
        "Data security and privacy are non-negotiable"
      ],
      testimonial: {
        quote: "This platform has transformed how we understand our business. The insights we get are actionable and the interface is so intuitive that our entire team can use it effectively.",
        author: "David Thompson",
        role: "CEO, GrowthTech Solutions"
      }
    }
  ];

  // Categories for filtering
  const categories = [
    { value: 'web-design', label: 'Web Design', icon: 'Monitor', count: 1 },
    { value: 'dashboard', label: 'Dashboard', icon: 'BarChart3', count: 1 },
    { value: 'mobile-app', label: 'Mobile App', icon: 'Smartphone', count: 1 },
    { value: 'saas', label: 'SaaS', icon: 'Cloud', count: 1 }
  ];

  // Stats overview data
  const statsData = [
    { icon: 'FolderOpen', value: '25+', label: 'Projects Completed', description: 'Across various industries' },
    { icon: 'Users', value: '1M+', label: 'Users Impacted', description: 'Through improved experiences' },
    { icon: 'TrendingUp', value: '150%', label: 'Avg. Improvement', description: 'In key metrics' },
    { icon: 'Award', value: '12', label: 'Awards Won', description: 'For design excellence' }
  ];

  // Sections for progress indicator
  const sections = [
    { id: 'hero', label: 'Overview', icon: 'Home' },
    { id: 'stats', label: 'Impact', icon: 'TrendingUp' },
    { id: 'projects', label: 'Projects', icon: 'FolderOpen' },
    { id: 'contact', label: 'Contact', icon: 'MessageCircle' }
  ];

  // Filter case studies based on selected category
  const filteredStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies?.filter(study => 
        study?.category?.toLowerCase()?.replace(/\s+/g, '-') === selectedCategory
      );

  // Sort case studies
  const sortedStudies = [...filteredStudies]?.sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return b?.id - a?.id;
      case 'impact':
        return parseFloat(b?.metrics?.[0]?.value) - parseFloat(a?.metrics?.[0]?.value);
      case 'duration':
        return parseInt(b?.duration) - parseInt(a?.duration);
      default:
        return 0;
    }
  });

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Update active section based on scroll position
      const sections = ['hero', 'stats', 'projects', 'contact'];
      const sectionElements = sections?.map(id => document.getElementById(id));
      
      for (let i = sectionElements?.length - 1; i >= 0; i--) {
        const element = sectionElements?.[i];
        if (element && element?.offsetTop <= scrollTop + 100) {
          setActiveSection(sections?.[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExpandStudy = (studyId) => {
    const study = caseStudies?.find(s => s?.id === studyId);
    setSelectedStudy(study);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Progress Indicator */}
      <ProgressIndicator
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        scrollProgress={scrollProgress}
      />
      {/* Hero Section */}
      <section id="hero" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="FolderOpen" size={16} />
              <span>Case Studies & Project Stories</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Design Stories That
              <span className="text-gradient-brand block">Drive Results</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore detailed case studies showcasing the intersection of thoughtful design and technical excellence. 
              Each project tells a story of problem-solving, user-centered design, and measurable impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90 shadow-brand-sm hover:shadow-brand-md"
                iconName="ArrowDown"
                iconPosition="right"
                iconSize={18}
                onClick={() => handleSectionClick('projects')}
              >
                Explore Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={18}
                asChild
              >
                <Link to="/work-with-me-collaboration-hub">
                  Discuss Your Project
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats Overview */}
      <section id="stats" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StatsOverview stats={statsData} />
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep dives into projects that showcase problem-solving methodology, 
              design decisions, and measurable business impact.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <div className="mb-12">
            <FilterBar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </div>

          {/* Case Studies Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' ?'lg:grid-cols-2' :'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            <AnimatePresence>
              {sortedStudies?.map((study, index) => (
                <CaseStudyCard
                  key={study?.id}
                  study={study}
                  index={index}
                  onExpand={handleExpandStudy}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {sortedStudies?.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more results.
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory('all')}
                iconName="RotateCcw"
                iconPosition="left"
                iconSize={16}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
      {/* Contact CTA Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's collaborate to design and build solutions that drive real results for your business. 
              Every great project starts with a conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90 shadow-brand-sm hover:shadow-brand-md"
                iconName="MessageCircle"
                iconPosition="right"
                iconSize={18}
                asChild
              >
                <Link to="/work-with-me-collaboration-hub">
                  Start a Project
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="User"
                iconPosition="left"
                iconSize={18}
                asChild
              >
                <Link to="/about-process-evolution">
                  Learn About My Process
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Detailed Case Study Modal */}
      {selectedStudy && (
        <DetailedCaseStudy
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      )}
    </div>
  );
};

export default CaseStudiesHub;