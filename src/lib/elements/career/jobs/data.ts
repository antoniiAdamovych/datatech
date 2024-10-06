const locations = {
    gr: "Germany, Berlin",
    ch: "China, Beijing",
    ir: "Ireland, Cork",
    en: "England, Manchester"
}

const workTime = {
    full: "Full-Time",
    part: "Part-Time"
}

export const types = [
    {
        id: "dev",
        label: "DevOps"
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
    }
]

export const data = {
    jobs: [
        {
            type: "dev",
            label: "Data Scientist",
            locations: [locations.gr, locations.ch],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "fin",
            label: "Marketing Analyst",
            locations: [locations.ch, locations.ir],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "bus-dev",
            label: "Data Scientist",
            locations: [locations.gr, locations.ch],
            workTime: [workTime.full]
        },
        {
            type: "bus-dev",
            label: "Marketing Analyst",
            locations: [locations.ch, locations.ir],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "fin",
            label: "Data Scientist",
            locations: [locations.gr, locations.ch],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "fin",
            label: "Marketing Analyst",
            locations: [locations.ch, locations.ir],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "dev",
            label: "Data Scientist",
            locations: [locations.gr, locations.ch],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "bus-dev",
            label: "Marketing Analyst",
            locations: [locations.ch, locations.ir],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "bus-dev",
            label: "Data Scientist",
            locations: [locations.gr, locations.ch],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "fin",
            label: "Marketing Analyst",
            locations: [locations.ch, locations.ir],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "hr",
            label: "Marketing Analyst",
            locations: [locations.ch, locations.ir],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "fin",
            label: "Marketing Analyst",
            locations: [locations.ch, locations.ir],
            workTime: [workTime.full, workTime.part]
        },
        {
            type: "hr",
            label: "Marketing Analyst",
            locations: [locations.ch, locations.ir],
            workTime: [workTime.full, workTime.part]
        },
    ]
}