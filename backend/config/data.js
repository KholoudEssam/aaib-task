const Report = require('../models/report');

const up = async () => {
    await Report.deleteMany({});
    await Report.insertMany([
        {
            id: '0103e005-b762-485f-8f7e-722019d4f302',
            source: 'REPORT',
            sourceIdentityId: '6750b4d5-4cb5-45f0-8b60-61be2072cce2',
            reference: {
                referenceId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
                referenceType: 'REPORT',
            },
            state: 'OPEN',
            payload: {
                source: 'REPORT',
                reportType: 'SPAM',
                message: null,
                reportId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
                referenceResourceId: 'a03411ce-0197-49a2-86d4-55e06aa52e79',
                referenceResourceType: 'REPLY',
            },
            created: '2017-10-02T16:09:04.258Z',
        },
        {
            id: '0595df57-e5e2-4acd-8fd7-a234fa70ab14',
            source: 'REPORT',
            sourceIdentityId: '6750b4d5-4cb5-45f0-8b60-61be2072cce2',
            reference: {
                referenceId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
                referenceType: 'REPORT',
            },
            state: 'OPEN',
            payload: {
                source: 'REPORT',
                reportType: 'SPAM',
                message: null,
                reportId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
                referenceResourceId: 'a03411ce-0197-49a2-86d4-55e06aa52e79',
                referenceResourceType: 'REPLY',
            },
            created: '2017-10-02T16:09:04.258Z',
        },
        {
            id: '06c6055f-5cf1-4153-9e8e-a995cdeaaea8',
            source: 'REPORT',
            sourceIdentityId: '6750b4d5-4cb5-45f0-8b60-61be2072cce2',
            reference: {
                referenceId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
                referenceType: 'REPORT',
            },
            state: 'OPEN',
            payload: {
                source: 'REPORT',
                reportType: 'SPAM',
                message: null,
                reportId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
                referenceResourceId: 'a03411ce-0197-49a2-86d4-55e06aa52e79',
                referenceResourceType: 'REPLY',
            },
            created: '2017-10-02T16:09:04.258Z',
        },
        {
            id: '0ab9c1c0-ed01-4194-99ae-cfd72586edd5',
            source: 'REPORT',
            sourceIdentityId: '6750b4d5-4cb5-45f0-8b60-61be2072cce2',
            reference: {
                referenceId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
                referenceType: 'REPORT',
            },
            state: 'OPEN',
            payload: {
                source: 'REPORT',
                reportType: 'SPAM',
                message: 'hjasds asjdkjsa daskds dasjkds',
                reportId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
                referenceResourceId: 'a03411ce-0197-49a2-86d4-55e06aa52e79',
                referenceResourceType: 'REPLY',
            },
            created: '2017-10-02T16:09:04.258Z',
        },
        {
            id: '0c3c7aca-2775-4e61-9884-61a2f5bcdef7',
            source: 'REPORT',
            sourceIdentityId: '6750b4d5-4cb5-45f0-8b60-61be2072cce2',
            reference: {
                referenceId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
                referenceType: 'REPORT',
            },
            state: 'OPEN',
            payload: {
                source: 'REPORT',
                reportType: 'SPAM',
                message: "it's a hippo!",
                reportId: '6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429',
                referenceResourceId: 'a03411ce-0197-49a2-86d4-55e06aa52e79',
                referenceResourceType: 'REPLY',
            },
            created: '2017-10-02T16:09:04.258Z',
        },
    ]);
};

module.exports = up;
