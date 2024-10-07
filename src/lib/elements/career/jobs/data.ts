const locations = {
    gr: "Germany, Berlin",
    ch: "China, Beijing",
    ir: "Ireland, Cork",
    en: "England, Manchester",
    sc: "Scotland, Edinburgh",
    all: "All location"
}

const workTime = {
    full: "Full-Time",
    part: "Part-Time"
}

export interface jobType {
    id: string,
    label: string
}

export const types: jobType[] = [
    {
        id: "data-sc",
        label: "Data Science"
    },
    {
        id: "bus-dev",
        label: "Business Development"
    },
    {
        id: "fin",
        label: "Finance"
    },
    {
        id: "hr",
        label: "Human Resource"
    },
    {
        id: "ind-op",
        label: "Industrial Operations"
    },
    {
        id: "lg",
        label: "Legal"
    },
    {
        id: "pd-ds",
        label: "Product Design"
    },
    {
        id: "sup-ch",
        label: "Supply Chain"
    },
    {
        id: "tec-inf",
        label: "Technical Infrastructure"
    },
]

export type job = {
    type: string,
    label: string,
    locations: string[],
    workTime: string[],
    skills: string[]  // Added the new skills field here
}

export const data: { jobs: job[] } = {
    jobs: [
        {
            type: "bus-dev",
            label: "Project Manager",
            locations: [locations.en],
            workTime: [workTime.full, workTime.part],
            skills: ["Leadership", "Project Management", "Risk Management"]
        },
        {
            type: "bus-dev",
            label: "Senior Business Developer",
            locations: [locations.ir],
            workTime: [workTime.full],
            skills: ["Business Strategy", "Client Negotiation", "Market Analysis"]
        },
        {
            type: "data-sc",
            label: "(Senior) Data Scientist",
            locations: [locations.ch],
            workTime: [workTime.full],
            skills: ["Python", "Machine Learning", "Statistical Analysis"]
        },
        {
            type: "data-sc",
            label: "Marketing Analyst",
            locations: [locations.gr],
            workTime: [workTime.full],
            skills: ["Data Visualization", "Market Research", "SQL"]
        },
        {
            type: "data-sc",
            label: "Research Psychologist",
            locations: [locations.ir],
            workTime: [workTime.full],
            skills: ["Psychological Research", "Data Collection", "SPSS"]
        },
        {
            type: "data-sc",
            label: "Sales Statistician",
            locations: [locations.gr],
            workTime: [workTime.full],
            skills: ["Sales Forecasting", "R Programming", "Data Interpretation"]
        },
        {
            type: "fin",
            label: "Controller",
            locations: [locations.ir],
            workTime: [workTime.full, workTime.part],
            skills: ["Financial Reporting", "Budgeting", "Cost Control"]
        },
        {
            type: "fin",
            label: "Senior Internal Auditor",
            locations: [locations.sc],
            workTime: [workTime.full],
            skills: ["Auditing", "Risk Assessment", "Compliance"]
        },
        {
            type: "fin",
            label: "Tax Specialist",
            locations: [locations.gr],
            workTime: [workTime.full],
            skills: ["Tax Compliance", "Tax Law", "Financial Planning"]
        },
        {
            type: "hr",
            label: "HR Manager",
            locations: [locations.gr],
            workTime: [workTime.full],
            skills: ["Employee Relations", "Recruitment", "Conflict Resolution"]
        },
        {
            type: "hr",
            label: "Junior HR Manager",
            locations: [locations.sc],
            workTime: [workTime.full],
            skills: ["HR Policies", "Onboarding", "Employee Engagement"]
        },
        {
            type: "ind-op",
            label: "Electrician",
            locations: [locations.all],
            workTime: [workTime.full, workTime.part],
            skills: ["Electrical Wiring", "Troubleshooting", "Safety Compliance"]
        },
        {
            type: "ind-op",
            label: "Mechanical Technician",
            locations: [locations.all],
            workTime: [workTime.full, workTime.part],
            skills: ["Mechanical Systems", "Equipment Maintenance", "Blueprint Reading"]
        },
        {
            type: "ind-op",
            label: "Production Coordinator",
            locations: [locations.ch],
            workTime: [workTime.full],
            skills: ["Production Scheduling", "Inventory Control", "Process Optimization"]
        },
        {
            type: "ind-op",
            label: "Production Operator",
            locations: [locations.all],
            workTime: [workTime.full, workTime.part],
            skills: ["Machine Operation", "Quality Control", "Safety Procedures"]
        },
        {
            type: "ind-op",
            label: "Warehouse Operative",
            locations: [locations.all],
            workTime: [workTime.full, workTime.part],
            skills: ["Inventory Management", "Forklift Operation", "Order Fulfillment"]
        },
        {
            type: "lg",
            label: "Legal Counsel",
            locations: [locations.ir],
            workTime: [workTime.full],
            skills: ["Contract Law", "Legal Research", "Corporate Law"]
        },
        {
            type: "pd-ds",
            label: "Industrial Designer",
            locations: [locations.gr],
            workTime: [workTime.full],
            skills: ["CAD", "Product Design", "Prototyping"]
        },
        {
            type: "pd-ds",
            label: "HV-Cable Design Engineer",
            locations: [locations.all],
            workTime: [workTime.full],
            skills: ["Electrical Engineering", "Cable Design", "3D Modeling"]
        },
        {
            type: "pd-ds",
            label: "Quality Control Manager",
            locations: [locations.en],
            workTime: [workTime.full],
            skills: ["Quality Assurance", "Process Improvement", "Regulatory Compliance"]
        },
        {
            type: "pd-ds",
            label: "Technical Engineer Lead",
            locations: [locations.ch],
            workTime: [workTime.full],
            skills: ["Technical Leadership", "System Design", "Engineering Management"]
        },
        {
            type: "sup-ch",
            label: "Logistics Consultant",
            locations: [locations.ir],
            workTime: [workTime.full],
            skills: ["Supply Chain Management", "Logistics Optimization", "Vendor Management"]
        },
        {
            type: "sup-ch",
            label: "Purchasing",
            locations: [locations.en],
            workTime: [workTime.full],
            skills: ["Vendor Negotiation", "Procurement", "Supply Chain"]
        },
        {
            type: "sup-ch",
            label: "SAP Specialist",
            locations: [locations.ir],
            workTime: [workTime.full],
            skills: ["SAP Systems", "ERP Implementation", "Data Management"]
        },
        {
            type: "sup-ch",
            label: "Supply Chain Coordinator",
            locations: [locations.ir],
            workTime: [workTime.full],
            skills: ["Inventory Planning", "Supply Chain Analysis", "Process Management"]
        },
        {
            type: "tec-inf",
            label: "Database Administrator (SQL)",
            locations: [locations.ir],
            workTime: [workTime.full],
            skills: ["SQL", "Database Management", "Performance Tuning"]
        },
        {
            type: "tec-inf",
            label: "Site Reliability Engineer",
            locations: [locations.ir],
            workTime: [workTime.full],
            skills: ["Cloud Infrastructure", "DevOps", "Automation"]
        }
    ]
}