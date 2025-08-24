import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      question: "What makes your hybrid design-development approach unique?",
      answer: `My background in both design and development allows me to create solutions that are not only visually stunning but also technically feasible and optimized for performance. I can:\n\n• Design with development constraints in mind\n• Implement designs pixel-perfectly without back-and-forth\n• Optimize for both user experience and technical performance\n• Reduce project timeline by eliminating design-development handoff delays\n\nThis hybrid approach means faster iterations, better communication, and solutions that actually work in the real world.`
    },
    {
      question: "What are your project minimums and typical engagement sizes?",
      answer: `My project minimums vary by service type:\n\n• Consultation Services: $500 minimum (1-2 hour sessions)\n• Rapid Prototyping: $2,000 minimum (1-2 week projects)\n• Design System Creation: $5,000 minimum (2-4 week projects)\n• Full-Stack Product Design: $10,000 minimum (4+ week projects)\n\nMost of my clients invest between $15,000-$35,000 for comprehensive design and development work. I'm selective about projects to ensure I can deliver exceptional results for each client.`
    },
    {
      question: "How do you handle project communication and updates?",
      answer: `I believe in transparent, regular communication:\n\n• Weekly progress calls via Zoom or Google Meet\n• Daily async updates via Slack or email\n• Shared project workspace (Notion or similar) with real-time progress\n• Design reviews using Figma for collaborative feedback\n• Development updates with staging environment access\n\nYou'll never wonder what's happening with your project. I provide regular updates and am always available for questions.`
    },
    {
      question: "What\'s your typical project timeline and process?",
      answer: `My process is designed for efficiency and quality:\n\n**Week 1-2: Discovery & Strategy**\n• Stakeholder interviews and user research\n• Technical requirements analysis\n• Project roadmap and timeline finalization\n\n**Week 3-6: Design & Prototyping**\n• Wireframing and user flow mapping\n• Visual design and component creation\n• Interactive prototyping and user testing\n\n**Week 7-12: Development & Launch**\n• Frontend development and integration\n• Testing, optimization, and refinement\n• Deployment and launch support\n\nTimelines vary based on project complexity, but I always provide realistic estimates upfront.`
    },
    {
      question: "Do you work with teams or just individual clients?",
      answer: `I work with both! My experience includes:\n\n**Individual Entrepreneurs & Founders:**\n• Solo founders building their first product\n• Consultants needing design and development support\n• Creators launching digital products\n\n**Teams & Organizations:**\n• Startups needing design-development hybrid skills\n• Agencies requiring specialized expertise\n• Companies building internal tools or products\n\nI adapt my communication style and process to fit your team's existing workflows and tools.`
    },
    {
      question: "What happens after project completion?",
      answer: `I believe in long-term partnerships:\n\n**Immediate Post-Launch (Included):**\n• 30 days of bug fixes and minor adjustments\n• Performance monitoring and optimization\n• Documentation and handoff materials\n\n**Ongoing Support Options:**\n• Monthly retainer for updates and improvements\n• On-demand support for new features\n• Quarterly design and UX audits\n• Team training and knowledge transfer\n\nMany clients continue working with me on an ongoing basis as their products evolve and grow.`
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems?.has(index)) {
      newOpenItems?.delete(index);
    } else {
      newOpenItems?.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {faqData?.map((item, index) => (
        <div
          key={index}
          className="bg-card rounded-xl border border-border overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
          >
            <h3 className="font-medium text-primary pr-4">{item?.question}</h3>
            <Icon
              name="ChevronDown"
              size={20}
              className={`text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                openItems?.has(index) ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openItems?.has(index) && (
            <div className="px-6 pb-4">
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {item?.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;