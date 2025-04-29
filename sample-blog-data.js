// This is a script to generate sample blog content for Sanity
// You can run this in Node.js or adapt it for the Sanity Studio

// Sample authors
const authors = [
  {
    _type: "author",
    name: "Dr. Sarah Johnson",
    slug: {
      _type: "slug",
      current: "dr-sarah-johnson",
    },
    bio: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Dr. Sarah Johnson is a workplace health expert with over 15 years of experience in occupational health and safety. She holds a Ph.D. in Public Health and is a certified industrial hygienist.",
          },
        ],
      },
    ],
  },
  {
    _type: "author",
    name: "Michael Chen",
    slug: {
      _type: "slug",
      current: "michael-chen",
    },
    bio: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Michael Chen is the Director of Certification at Weal Consulting. He has helped hundreds of businesses improve their workplace health standards and achieve certification.",
          },
        ],
      },
    ],
  },
  {
    _type: "author",
    name: "Aisha Patel",
    slug: {
      _type: "slug",
      current: "aisha-patel",
    },
    bio: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Aisha Patel is a workplace wellness consultant specializing in mental health initiatives and ergonomic design. She has an MBA in Organizational Development and is a certified wellness practitioner.",
          },
        ],
      },
    ],
  },
]

// Sample categories
const categories = [
  {
    _type: "category",
    title: "Workplace Safety",
    description: "Articles about physical safety, hazard prevention, and safety protocols in the workplace.",
  },
  {
    _type: "category",
    title: "Mental Health",
    description: "Resources and insights on supporting mental health and wellbeing in the workplace.",
  },
  {
    _type: "category",
    title: "Certification",
    description: "Information about workplace health certification processes, benefits, and standards.",
  },
  {
    _type: "category",
    title: "Ergonomics",
    description: "Best practices for ergonomic workplace design and preventing musculoskeletal disorders.",
  },
  {
    _type: "category",
    title: "Health Promotion",
    description: "Strategies and programs for promoting healthy behaviors and wellness in the workplace.",
  },
]

// Sample blog posts
const posts = [
  {
    _type: "post",
    title: "5 Key Benefits of Workplace Health Certification",
    slug: {
      _type: "slug",
      current: "5-key-benefits-of-workplace-health-certification",
    },
    publishedAt: new Date("2023-11-15").toISOString(),
    excerpt:
      "Discover how workplace health certification can improve employee wellbeing, reduce costs, and enhance your company reputation.",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "In today's competitive business environment, workplace health certification is becoming increasingly important. Organizations that prioritize employee health and safety not only fulfill their ethical obligations but also gain significant advantages in various aspects of their operations.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "1. Improved Employee Wellbeing and Productivity",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "When employees work in an environment that prioritizes their health and safety, they experience fewer health issues and injuries. This leads to reduced absenteeism and increased productivity. Studies have shown that for every dollar invested in workplace wellness programs, companies can save up to $6 in healthcare costs and reduced absenteeism.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "2. Enhanced Company Reputation",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "A workplace health certification demonstrates your commitment to employee wellbeing, which can significantly enhance your company's reputation among customers, partners, and potential employees. In an era where corporate social responsibility is increasingly valued, this certification serves as tangible proof of your organization's values.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "3. Competitive Advantage in Recruitment",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Top talent is increasingly looking for employers who prioritize employee wellbeing. A workplace health certification can give you an edge in attracting and retaining skilled professionals. According to a recent survey, 87% of employees consider health and wellness offerings when choosing an employer.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "4. Reduced Healthcare Costs",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Implementing the standards required for workplace health certification often leads to fewer workplace injuries and illnesses, which can significantly reduce healthcare costs and workers' compensation claims. Preventive measures are almost always less expensive than treating health issues after they occur.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "5. Compliance with Regulations",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Workplace health certification ensures that your organization meets or exceeds regulatory requirements related to workplace health and safety. This can help you avoid costly fines and legal issues associated with non-compliance.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Conclusion",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Investing in workplace health certification is not just about meeting standards—it's about creating a culture that values employee wellbeing. The benefits extend beyond the immediate health improvements to include financial advantages, enhanced reputation, and a more engaged workforce.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "At Weal Consulting, we're committed to helping organizations achieve these benefits through our comprehensive certification program. Contact us today to learn more about how we can support your workplace health journey.",
          },
        ],
      },
    ],
  },
  {
    _type: "post",
    title: "Creating an Ergonomic Workspace: A Comprehensive Guide",
    slug: {
      _type: "slug",
      current: "creating-an-ergonomic-workspace-a-comprehensive-guide",
    },
    publishedAt: new Date("2023-10-22").toISOString(),
    excerpt: "Learn how to design workspaces that prevent injuries and promote employee comfort and productivity.",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Ergonomics is the science of designing the workplace to fit the worker, rather than forcing the worker to fit the workplace. An ergonomic workspace can prevent musculoskeletal disorders, reduce fatigue, and improve productivity.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "The Importance of Ergonomics",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Poor ergonomics can lead to a variety of health issues, including back pain, neck strain, carpal tunnel syndrome, and eye strain. These conditions not only cause discomfort for employees but can also result in decreased productivity, increased absenteeism, and higher healthcare costs for employers.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Key Elements of an Ergonomic Workspace",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [
          {
            _type: "span",
            text: "Chair Selection and Setup",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "A good ergonomic chair should support the natural curve of your spine and be adjustable to accommodate different body types. Key features to look for include:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "- Adjustable seat height\n- Lumbar support\n- Adjustable armrests\n- Swivel capability\n- Breathable material",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [
          {
            _type: "span",
            text: "Desk Height and Organization",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The ideal desk height allows your elbows to be bent at approximately 90 degrees when typing. Consider these factors:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "- Adjustable height desks or desk risers\n- Adequate space for legs and feet\n- Organized layout with frequently used items within easy reach\n- Cable management to prevent tripping hazards",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [
          {
            _type: "span",
            text: "Monitor Positioning",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Proper monitor positioning can prevent neck strain and eye fatigue:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "- Position the top of the screen at or slightly below eye level\n- Place the monitor approximately an arm's length away\n- Adjust brightness and contrast to comfortable levels\n- Consider using a monitor stand or arm for optimal positioning",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Implementing Ergonomic Solutions Across Your Organization",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Creating ergonomic workspaces for all employees requires a systematic approach:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "1. Conduct ergonomic assessments of current workspaces\n2. Develop a budget for necessary equipment and modifications\n3. Prioritize changes based on risk assessment and available resources\n4. Provide training on proper ergonomic practices\n5. Regularly evaluate and adjust as needed",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Conclusion",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Investing in ergonomic workspaces is an investment in your employees' health and your organization's productivity. By implementing these guidelines, you can create a more comfortable, efficient, and healthy workplace for everyone.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "For more information on how ergonomics fits into workplace health certification, contact Weal Consulting for a comprehensive evaluation.",
          },
        ],
      },
    ],
  },
  {
    _type: "post",
    title: "Mental Health in the Workplace: Building a Supportive Environment",
    slug: {
      _type: "slug",
      current: "mental-health-in-the-workplace-building-a-supportive-environment",
    },
    publishedAt: new Date("2023-12-05").toISOString(),
    excerpt: "Strategies for creating a workplace culture that supports mental health and reduces stigma.",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Mental health has become an increasingly important aspect of workplace health and safety. With approximately 1 in 5 adults experiencing mental illness each year, it's essential for organizations to create environments that support mental wellbeing.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "The Business Case for Mental Health Support",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Mental health issues cost employers billions annually in lost productivity, absenteeism, and healthcare costs. Organizations that implement effective mental health programs can see significant returns on their investment:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "- Reduced absenteeism and presenteeism\n- Lower turnover rates\n- Improved employee engagement\n- Enhanced company reputation\n- Better overall workplace performance",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Creating a Supportive Mental Health Culture",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [
          {
            _type: "span",
            text: "Leadership Commitment",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Mental health initiatives must start at the top. When leaders openly discuss mental health and demonstrate their commitment to supporting employees, it helps reduce stigma and encourages others to seek help when needed.",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [
          {
            _type: "span",
            text: "Education and Awareness",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Regular training sessions on mental health awareness can help employees recognize signs of distress in themselves and others. Topics might include:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "- Recognizing common mental health conditions\n- Stress management techniques\n- How to have conversations about mental health\n- Available resources and how to access them",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [
          {
            _type: "span",
            text: "Accessible Resources",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Ensure that mental health resources are readily available and easily accessible. These might include:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "- Employee Assistance Programs (EAPs)\n- Mental health benefits coverage\n- Mindfulness and meditation resources\n- Peer support programs\n- Flexible work arrangements",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Practical Steps for Implementation",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "1. Conduct a mental health audit to identify current strengths and areas for improvement",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "2. Develop a mental health policy that clearly outlines your organization's commitment and available resources",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "3. Train managers to recognize signs of mental distress and respond appropriately",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "4. Create opportunities for social connection and community building",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "5. Regularly evaluate the effectiveness of mental health initiatives and adjust as needed",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Conclusion",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Building a workplace that supports mental health requires ongoing commitment and a multifaceted approach. By creating a culture where mental health is openly discussed and supported, organizations can improve employee wellbeing while also enhancing productivity and retention.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Weal Consulting's workplace health certification includes comprehensive evaluation of mental health support systems. Contact us to learn how your organization can improve in this critical area of workplace health.",
          },
        ],
      },
    ],
  },
]

// This is just sample data - in a real implementation, you would use the Sanity client to create these documents
console.log("Sample blog data ready for import into Sanity")
console.log(`${authors.length} authors`)
console.log(`${categories.length} categories`)
console.log(`${posts.length} posts`)

// To import this data into Sanity, you would use code like this:
/*
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  token: 'your-write-token', // You need a write token
  useCdn: false
})

// First create authors
authors.forEach(async (author) => {
  try {
    const result = await client.create(author)
    console.log(`Author created: ${result._id}`)
  } catch (err) {
    console.error('Failed to create author:', err)
  }
})

// Then create categories
categories.forEach(async (category) => {
  try {
    const result = await client.create(category)
    console.log(`Category created: ${result._id}`)
  } catch (err) {
    console.error('Failed to create category:', err)
  }
})

// Then create posts, referencing the created authors and categories
// You would need to fetch the created document IDs first
*/
